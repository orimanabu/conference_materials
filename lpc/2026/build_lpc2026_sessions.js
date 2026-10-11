const fs = require('fs');

const input = process.argv[2] || '/tmp/lpc20.html';
const output = process.argv[3] || 'lpc2026-sessions.json';
const html = fs.readFileSync(input, 'utf8');

// The Indico timetable page embeds the complete timetable as the second
// argument of timetableArgs. The following argument is the event/session map.
const timetableMatch = html.match(/var timetableArgs = \[\s*null,\s*(\{[\s\S]*?\}),\s*\{"_type":"Conference"/);
const conferenceMatch = html.match(/var timetableArgs = \[[\s\S]*?,\s*(\{"_type":"Conference"[\s\S]*?\}),\s*width,/);
if (!timetableMatch || !conferenceMatch) throw new Error('Could not locate Indico timetable data');

const timetable = JSON.parse(timetableMatch[1]);
const conference = JSON.parse(conferenceMatch[1]);
const tracks = conference.sessions || {};
const contributions = [];

function walk(value, date) {
  if (!value || typeof value !== 'object') return;
  if (value._type === 'ContribSchEntry') contributions.push({ ...value, timetableDate: date });
  for (const child of Object.values(value)) walk(child, date);
}
for (const [date, value] of Object.entries(timetable)) walk(value, date);

const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
function formatDate(date) {
  const [year, month, day] = date.split('-').map(Number);
  return `${day} ${monthNames[month - 1]} ${year}`;
}
function absolute(path) {
  return path && (path.startsWith('http://') || path.startsWith('https://'))
    ? path
    : `https://lpc.events${path}`;
}
function attachment(item) {
  return {
    title: item.title || '',
    url: absolute(item.download_url || item.url || ''),
    type: item.download_url ? 'file' : 'link'
  };
}
function cleanDescription(text) {
  const lines = text.replace(/\r\n?/g, '\n').split('\n').map((line) => line.replace(/\s+/g, ' ').trim());
  const output = [];
  let blank = false;
  for (const line of lines) {
    if (!line) {
      if (output.length && !blank) blank = true;
    } else {
      if (blank) output.push('');
      output.push(line);
      blank = false;
    }
  }
  return output.join('\n').trim();
}

const sessions = contributions
  .sort((a, b) => `${a.startDate.date} ${a.startDate.time}`.localeCompare(`${b.startDate.date} ${b.startDate.time}`) || a.title.localeCompare(b.title))
  .map((entry) => {
    const track = tracks[String(entry.sessionId)];
    const attachments = (entry.attachments?.files || []).map(attachment);
    return {
      id: String(entry.contributionId),
      url: absolute(entry.url),
      title: entry.title || '',
      description: cleanDescription(entry.description || ''),
      track: track?.title || '',
      attachments,
      date: formatDate(entry.startDate.date),
      time: entry.startDate.time.slice(0, 5)
    };
  });

const attachmentCount = sessions.reduce((n, s) => n + s.attachments.length, 0);
const fileCount = sessions.reduce((n, s) => n + s.attachments.filter((a) => a.type === 'file').length, 0);
const linkCount = attachmentCount - fileCount;
const result = {
  event: 'Linux Plumbers Conference 2026',
  source_url: 'https://lpc.events/event/20/timetable/#all.detailed',
  retrieved_on: '2026-10-11',
  notes: '公式タイムテーブルの個別Contribution全件（休憩等の個別URLのない枠は対象外）。Descriptionはタイムテーブル掲載の原文。資料リンクは個別ページから取得できるIndicoのダウンロードURLおよびContribution PDF。リンク先のファイル本体は未ダウンロード。時刻はイベント設定のEurope/Prague。',
  counts: {
    sessions: sessions.length,
    with_description: sessions.filter((s) => s.description).length,
    with_materials: sessions.filter((s) => s.attachments.length).length,
    attachments: attachmentCount,
    files: fileCount,
    links: linkCount
  },
  sessions
};
fs.writeFileSync(output, JSON.stringify(result, null, 2) + '\n');
console.log(JSON.stringify(result.counts));
