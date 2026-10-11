# Linux Plumbers Conference 2008 全セッション一覧

出典: https://blog.linuxplumbersconf.org/2008/program/schedule/index.html

2008年はスケジュールの発表リンクが発表者ページ、MCリンクがマイクロカンファレンス全体ページを指す構成。スケジュールから参照される53個別URLを収録（発表・基調講演・チュートリアル43件、MC全体10件）。発表DescriptionはAbstract原文、MC Descriptionは概要・議題・報告等のページ本文で区別する。Biographyは発表Descriptionに含めない。元URLの二重スラッシュと旧ホストをアーカイブURLに解決し、原URLも保持。MCページのスライドは当該MCと対応する発表に収録し、共有URLは重複し得る。学生向け10枠は個別URL・Description未掲載として補足。スケジュールから参照されるBoF Wiki8ページも補足（Wikiは更新可能なため、掲載情報を原文のまま保持）。添付本体の取得・URL有効性検査は未実施。

セッション: 53件 / Descriptionあり: 50件 / 資料あり: 4件 / 資料項目: 8件

## 目次

1. [The Linux Ecosystem, where do you fit in it?](#session-gkhartman.txt)
2. [The Future of Linux Storage](#session-wilcox08)
3. [I/O Trace](#session-mmeeks.txt)
4. [Audio](#session-poettering08)
5. [FFADO: firewire audio for Linux](#session-jwoithe.txt)
6. [ALSA Status Quo](#session-tiwai.txt)
7. [Microconf Focus](#session-rostedt08)
8. [systemtap's capabilities, limitations, and implementation](#session-eigler.txt)
9. [Tracing ABI for efficient kernel-userspace tracing](#session-mdesnoyers.txt)
10. [Kernel support for user debugging: ptrace, utrace, and what's next](#session-rmcgrath.txt)
11. [Ftrace](#session-srostedt.txt)
12. [Video Input Infrastructure](#session-chehab08)
13. [The video4linux user-space: libv4l2, applications and a server](#session-bphilips.txt)
14. [libv4l2](#session-hgoede.txt)
15. [Extending V4L2 to support complex media streaming devices](#session-hverkuil.txt)
16. [Video input Status quo](#session-mchehab.txt)
17. [CRFS](#session-brown.txt)
18. [Are the DIMMs going bad? Making sense of memory error messages.](#session-masbock.txt)
19. [How to Talk to a Long-Running Process](#session-bsmith.txt)
20. [Git Tutorial](#session-ltorvalds.txt)
21. [Kernel Report](#session-jcorbet.txt)
22. [Microconf Focus](#session-jones08)
23. [From Naught to Sixty in 5 Seconds](#session-avandeven.txt)
24. [Early bootup cross-distro collaboration](#session-djones.txt)
25. [Faster than a Greased Penguin: Making the Linux Boot Suck Less](#session-kmcmartin.txt)
26. [Linux Server Management](#session-wong08)
27. [Physical PCI slots: A little bit goes a long way](#session-achiang.txt)
28. [Infrastructure for PCIe Endpoint Devices](#session-bergmann.txt)
29. [Hiding ACPI](#session-lbrown.txt)
30. [Status of Fibre Channel and FCoE Support in Linux](#session-cleech.txt)
31. [The Btrfs Filesystem: Design, Status and Goals](#session-cmason.txt)
32. [Embedded virtualization with KVM: Yes, it does make sense!](#session-hblanchard.txt)
33. [Microconf Focus](#session-gregkh08)
34. [Where should the Line be drawn between kernel and user space?](#session-jbottomley.txt)
35. [Who owns the interface?](#session-mkerrisk.txt)
36. [Configfs](#session-jbecker.txt)
37. [Netlink](#session-shemminger.txt)
38. [Microconf Focus](#session-garrett08)
39. [OLPC Power Management Challenges](#session-dsaxena.txt)
40. [Expanding the Vocabulary of Power management](#session-mgross.txt)
41. [Non-power management interfaces and power management](#session-oneukum.txt)
42. [Virtualized Development Infrastructure Management with Puppet: Beyond Cloning.](#session-ttyree.txt)
43. [Filesystem Statistics](#session-mwong.txt)
44. [Linux Data Integrity](#session-mpetersen.txt)
45. [systemtap Tutorial](#session-jkeniston.txt)
46. [Microconf Focus](#session-packard08)
47. [Graphics Drivers in the Kernel : 20 years late.](#session-airlie.txt)
48. [Plumbing the graphics pipeline](#session-cworth.txt)
49. [Future Displays and Input Devices](#session-jkumar.txt)
50. [OpenGL 3.0](#session-romanick.txt)
51. [Desktop Integration](#session-zeuthen08)
52. [Interface design for authentication, and session management](#session-jmccann.txt)
53. [Upstart 1.0 Plans](#session-sjremnant.txt)

<a id="session-gkhartman.txt"></a>
## 1. The Linux Ecosystem, where do you fit in it?

- セッション個別URL: https://blog.linuxplumbersconf.org/2008/program/speakers/getspeaker.php-speaker=gkhartman.txt
- Track: Talk / keynote / tutorial
- 日時: Wednesday, September 17, 2008 09:00

### Description

掲載なし

### 添付資料URL

掲載なし

<a id="session-wilcox08"></a>
## 2. The Future of Linux Storage

- セッション個別URL: https://blog.linuxplumbersconf.org/2008/program/microconfs/getmc.php-mc=wilcox08
- Track: Microconference whole session
- 日時: Wednesday, September 17, 2008 10:00

### Description

We want to make Linux's storage subsystems even better.






Presenters






We have two presenters; Margaret Susairaj of Oracle and Michael Meeks of Novell.





Margaret Susairaj works in the Server Technologies group at Oracle.  She
has been playing with Oracle Server I/O stack  for the last 10 years.  Her
main focus is on supporting new I/O technologies and  tuning existing I/O
stack for better performance.  Prior to this,  she worked on Oracle
scalability issues when running on Sequent's SMP/NUMA systems with respect
to synchronization and caching policies.





Michael is a Christian and enthusiastic believer in Free software. He very much enjoys working for Novell where as a member of the Desktop research team he has worked on desktop infrastructure and applications, particularly OpenOffice.org, CORBA, Bonobo, Nautilus and accessibility, amongst other interesting things. He now works as an Architect, trying to understand and nudge the direction of our Linux Desktop work. Prior to this he worked for Quantel gaining expertise in real time AV editing and playback achieved with high performance focused hardware / software solutions.






Schedule






Michael Meeks will start us off with a half-hour presentation on a tool he has written called iogrind.





After that, Margaret and Michael will alternate, presenting interesting problems in storage for our consideration.





Here are some sample problems (and sometimes sample solutions) to give you an idea about what might be discussed.






Has anything changed in this directory?






Problem:





The use case is “Do I need to update this icon cache” or “Do I need to reindex these files”.
At the moment, userspace has to stat every file.  If there were a way to check the mtime of a file more cheaply, this would be a good thing.
Inotify is not a solution to this as the machine may have been rebooted and the files modified while the desktop isn't running.





Solution A:





NFSv3 added a READDIRPLUS operation that returns  type, mode, nlink, uid, gid, size, rdev, atime, mtime and ctime.
readdir() currently returns inode, type (file/directory/symlink/etc) and name.  We could add a sys_getdentsplus() that returns all this information.





 This may make the filesystem do a lot of work.  An ext2-type filesystem will have to pull the inode in from storage to get all this information.  The savings may not be as large as we might hope (exchanging thousands of quick syscalls for dozens of slow ones isn't necessarily a win). — Matthew Wilcox 2008/07/15 14:23







Want notifications on huge numbers of files






Problem:





The kernel limits on the number of inotifications that can be set are too restrictive.





Solution A:





The inotify structure is relatively fat and one is required per inode.  We could set one per directory and check whether the parent directory has a watch set for its children.





Solution B:





We could avoid allocating per inode by creating notification filters in the kernel that will receive notification of all events and pass only the requested ones to userspace.  This might work well when userspace wants to monitor an entire directory tree.  (what about namespaces?)






It takes a long time to open a lot of files






Problem:
It takes a long time to open/close large number of files without launching
multiple threads to do them in parallel.





Solution A:
Provide a list interface to issue file open/close operations..





Solution B:
Use syslets/threadlets.






Doing discontiguous I/O is inefficient






Problem:
There is no batched synchronous I/O interface in Linux.  When applications
need to do I/O to a set of discontiguous blocks on disk, they have to use
io_submit to submit the blocks and wait for them to complete using
io_getevents(). There is no single interface that will get the entire I/O
list done.





Solution:
Extend io_submit to do a batched synchronous I/O operation.






AIO requests must be allocated statically






Problem:
Applications need to reserve large number of  aio ring buffers on startup
since it cannot be resized on demand. The number of concurrent aio requests
a process may issue often changes during its lifetime and hence having the
ability to increase or decrease on need basis will result in a better
utilization of kernel resources. A better solution would be if the kernel
can do this automatically.





Solution A:
Allow aio ring buffers to dynamically grow/shrink without destroying the
original aio context. Provide an io_queue_resize() interface.





Solution B:
Allocate the ring buffer as needed without requiring a hint from the user
process.






Report






The iogrind talk, with questions took 45 minutes, then Margaret presented her top
three problems and a rousing debate was had by all.  Then we broke for fifteen minutes,
came back and debated a proposal from Jan Kara for keeping track of whether any
files have changed in a directory hierarchy.  After that, Margaret presented two more problems
and our time was up.






Problem 1






Margaret reports it can take minutes to open 4000 files.  Often the 'files' being opened are actually block devices and it can take a while to negotiate with each one.  The audience were sceptical that there was much parallelism to be gained and asked for data that showed, eg, the time taken for ten threads to open 400 files each versus one thread opening 4000 files.  Various interfaces were proposed including:




 an open_list() which took an array of names to open and returned an array of fds



 a new open flag (O_ASYNCOPEN) that would allow the kernel to internally spawn a thread to do name resolution and actually connect the fd to anything.  Use of the fd would block until it was ready.  Many syscalls would have to be able to return new errors such as ENOENT, EISDIR, and any other error that open() could have returned.



 a new syscall openasync() that would behave as above







Problem 2






This was a request to implement an interface that allows for submitting many IOs to potentially different files and waiting for them all to complete.  An HPC group has an interface proposal called readx() and writex().  Linus suggested using sys_readahead() to kick the operations off and then sys_read() to be sure they've finished.  The use of O_DIRECT means this possibly won't work well today, but Linus seems quite happy to enhance sys_readahead().  This also doesn't solve the write-side.






Problem 3






The command ring for aio must be sized at startup and cannot be resized.  This topic did not attract much interest from the attendees and we moved onward swiftly.






Problem 4






File metadata operations take a long time on ext3 when an fsync is in progress.  It was explained that this is simply a bug in ext3 as it requires the entire journal to be committed when an fsync is in progress and this can take a very long time.  Various proposals were made for customers to use data=writeback instead of data=ordered, and bugfixes were proposed to ext3 where it could detect this problem and write the journal mot more frequently.  It was also suggested that database customers really should be using ext2, not ext3.






Problem 5






After the break, Michael showed a pretty graph showing how much we seek.  He suggested that we need an interface which tells userspace which order blocks are in on disc and then it can read them in the right order.  FIEMAP was mentioned as a solution to this.






Problem 6






Jan Kara then stepped up to talk about file change notification.  He has a solution which involves a new timestamp on directories and a flag to indicate interest from a userspace application.  He has a presentation which explains how this works in great detail.  The attendees kicked the idea around a bit and found some easily-correctable nits.  There seemed general consensus that this was an improvement over inotify.  A suggestion was made that we should use the netlink interface to notify apps of file changes, but this was deemed too heavyweight by the other attendees.






Problem 7






Margaret wants some unified way to wait for any kind of events.  We decided the real problem is that aio doesn't have an fd interface on which you can select()/poll().  We also kicked around the idea of extending epoll to give AIO notifications.





At this point, we ran out of time.  Margaret has many more problems in her presentation which will be uploaded shortly.

### 添付資料URL

掲載なし

<a id="session-mmeeks.txt"></a>
## 3. I/O Trace

- セッション個別URL: https://blog.linuxplumbersconf.org/2008/program/speakers/getspeaker.php-speaker=mmeeks.txt
- Track: Talk / keynote / tutorial
- 日時: Wednesday, September 17, 2008 10:00

### Description

I/O latency is the dominating factor in desktop application

startup performance. It is also one of the hardest things to measure

in a reliable and deterministic fashion. Wall-clock timings on

just-booted, quiescent systems give unfeasibly large jitter making

optimising cold-start times extremely difficult.





Measures of warm vs. cold start show eg. 80% of an OO.o cold

start is pure I/O time. I/O grind is a new valgrind based tool that

can record & simulate I/O patterns, allowing not only targeted

optimisation of applications, but deterministic comparisons of kernel

I/O algorithms. Kernel optimisation is often focused on more tractable

CPU cycles, however the big wins are in I/O behavior - saving only one

seek on cold OO.o startup, is the equivalent of a 500 cycle win on

every system call emitted.

### 添付資料URL

掲載なし

<a id="session-poettering08"></a>
## 4. Audio

- セッション個別URL: https://blog.linuxplumbersconf.org/2008/program/microconfs/getmc.php-mc=poettering08
- Track: Microconference whole session
- 日時: Wednesday, September 17, 2008 10:00

### Description

The current audio infrastructure we have on Linux is fragmented, balkanized. There are different driver APIs around, some well established, some less well established. There are incompatible sound systems, incompatible sound servers, incompatible sound libraries and other incompatible interfaces in wide use. We need to clean up this chaos, and we need to be able to a give a clean and simple answer if someone asks us which audio API he should be using when he wants to write an audio application for Linux.





In this MC I'd like to figure out how the status quo of audio on Linux is perceived by people, where our infrastructure sucks the most, on which areas we should be focussing, how a complete audio stack on Linux should look like, and how a complete multimedia stack, where we can integrate our pieces of infrastructure better, what the road ahead is, and what we should reply if someone asks the aforementioned question.






Format






I'm planning to do the first presentation myself, giving an overview on the status quo of Linux audio, and how I think how the cleaned up audio infrastructure should look like. Then, Takashi will give an overview about ALSA's status as a second presentation. We haven't received any proposal for further talks on audio (yet?). I plan an open discussion to identify where people think audio on Linux sucks the most, what features they are missing the most. After the break I plan a second open discussion, about how people would like to see the future audio stack on Linux look like.





I don't think coding time would make sense for audio.





Among the questions we should be discussing are:





 Can we get rid of OSS? How can we get rid of it?



 Which is the PCM API people should be using?



 GStreamer as a PCM API?



 How to get rid of too many mixers and controls? How to find good defaults for them?



 Cooperation between pro audio and desktop audio infrastructure?



 What can Vista/MacOS do that we cannot do right now?



 …







Sample Microconf Schedule






Total time: 2 hr 30 min





	
		 Time  Session 
	
	
		 0:00  Presentation: Status Quo and the Road Ahead (me) 
	
	
		 0:30  Presentation: ALSA Status Quo (Takashi) 
	
	
		 1:00  Discussion: Where audio on Linux sucks the most? 
	
	
		 1:30  Break 
	
	
		 1:45  Discussion: The Road Ahead 
	
	
		 2:15  Next Steps and Summary (me) 
	
	
		 2:30  End 
	




Takeaway






People should get some overview on the different parts of our current infrastructure and maybe find a way through all the chaos right now. More importantly however I'd like to make sure that the people working on fixing the chaos have a common idea where we should be headed, what should be part of our infrastructure, and that we have similar priorities. Meeting people face-to-face is very important too.

### 添付資料URL

掲載なし

<a id="session-jwoithe.txt"></a>
## 5. FFADO: firewire audio for Linux

- セッション個別URL: https://blog.linuxplumbersconf.org/2008/program/speakers/getspeaker.php-speaker=jwoithe.txt
- Track: Talk / keynote / tutorial
- 日時: Wednesday, September 17, 2008 10:00

### Description

Over the last few years the ieee1394 bus (commonly known as "firewire")

has become the preferred bus for transferring audio data between a

computer and high performance digital audio interface devices with less

than approximately 32 channels.  Over time, firewire audio devices have

acquired many useful features while becoming increasingly affordable.

It is therefore important that Linux support them since such devices are

fast becoming the backbone of small to medium sized home/project

recording studios and many live performance rigs.  Linux already has a

rich set of audio performance and production software.  The FFADO

project (www.ffado.org) aims to provide the necessary driver

infrastructure to allow this software to take advantage of firewire

audio interfaces.





The talk will begin by introducing the firewire bus in the context of

the audio transport problem and explain why it is better suited for

professional audio than other alternatives such as USB.  Having

established the motivation I will discuss some of the unique issues

encountered when passing audio to and from these devices and show how

these have been overcome in the FFADO drivers.





I will raise the issue of manufacturer support and demonstrate why this

is important even though firewire audio interfaces are supposed to have

a standard to follow.  This will lead into an outline of a number of

firewire-specific protocol analysis techniques I have developed to

partially offset the lack of manufacturer support from certain

companies.  Some of these don't even need exotic hardware, making it

possible for users to assist in the FFADO effort by providing

information about devices which the developers don't own or have access

to.





FFADO interfaces to established Linux audio infrastructure in a

transparent and non-invasive way and this will be illustrated by way of

examples.  Finally, I will give a summary of the current status of FFADO

and developments in the pipeline.





This talk will give attendees an understanding of the relatively new

FFADO project, technical background on the transport of audio over

firewire and how this has been brought together within the FFADO

project.  No prior knowledge of audio or firewire issues will be

assumed.

### 添付資料URL

掲載なし

<a id="session-tiwai.txt"></a>
## 6. ALSA Status Quo

- セッション個別URL: https://blog.linuxplumbersconf.org/2008/program/speakers/getspeaker.php-speaker=tiwai.txt
- Track: Talk / keynote / tutorial
- 日時: Wednesday, September 17, 2008 10:00

### Description

掲載なし

### 添付資料URL

掲載なし

<a id="session-rostedt08"></a>
## 7. Microconf Focus

- セッション個別URL: https://blog.linuxplumbersconf.org/2008/program/microconfs/getmc.php-mc=rostedt08
- Track: Microconference whole session
- 日時: Wednesday, September 17, 2008 13:30

### Description

This session is about debugging, tracing, tuning and profiling. Currently there has been a lot of talk about tracing inside the kernel. Since tracing can also be used for debugging, tuning and profiling, the main focus for now will be on tracing.





There are lots of tracers to choose from: SystemTap, ftrace, LTTng and probably more. Tracers have always had a difficult time in getting into the kernel. They try to accomplish different goals, and depending on who has control, different aspects of a tracer might just make it into the kernel.





I would like to come out of this conference with a short term goal and a road map on how to get the tracing infrastructure into the kernel. Let's also look into ways that different tracers can have components integrated. 






Format






There will be three presentations and then a break followed by a discussion. During this discussion, feel welcome to add your own “lightning talk” of 3 minutes to tell us what you have and how it can help us out.






Sample Microconf Schedule






Total time: 2 hr 30 min




	
		 Time  Session 
	
	
		 0:00  Roland McGrath : Utrace 
	
	
		 0:25  Frank Eigler : SystemTap 
	
	
		 0:50  Mathieu Desnoyers : LTTng 
	
	
		 1:15  Steven Rostedt : Ftrace 
	
	
		 1:35  Break 
	
	
		 1:50  Lightning talks 
	
	
		 2:05  Discussion / Round Tables 
	
	
		 2:25  Next Steps (by MC Runner) 
	
	
		 2:30  End 
	




Takeaway






This is a perfect opportunity for the leaders of the tracing/profiling/debugging/tuning community to get together and sort out a lot of issues that we have. Lets take the time to listen to the goals that each of us share, and see how we can work together to achieve them, not individually, but as a team.

### 添付資料URL

掲載なし

<a id="session-eigler.txt"></a>
## 8. systemtap's capabilities, limitations, and implementation

- セッション個別URL: https://blog.linuxplumbersconf.org/2008/program/speakers/getspeaker.php-speaker=eigler.txt
- Track: Talk / keynote / tutorial
- 日時: Wednesday, September 17, 2008 13:30

### Description

Linux is persistently compared to other operating systems, mostly with

good results.  Linux is however weak in its tracing / monitoring

capabilities.  There exist a multitude of projects outside and inside

the kernel, the kernel tree, and regular controversy.







Systemtap is a three-year-old project attempting to bring full-system

observability to Linux.  This talk will review the systemtap project

from a technical point of view.







We will cover usage issues:







Who needs and uses this type of tool?



What essential requirements exist?



How to use it (a brief tutorial)?



What are its current features and limitations?







We will attempt to explain and justify a variety of design decisions:







Why does it run instrumentation inside the kernel?



Why is this done by compiling kernel modules?



Why is it out-of-tree?







We will discuss ways in which the community could work together

better, and finally bridge the instrumentation feature gap:









How could linux kernel maintainers help?



How to motivate the community to help?



How do other tracing projects relate?



What possibilities exist for merging / interfacing code?







The talk is not intended to be a lecture, but rather a discussion.

### 添付資料URL

掲載なし

<a id="session-mdesnoyers.txt"></a>
## 9. Tracing ABI for efficient kernel-userspace tracing

- セッション個別URL: https://blog.linuxplumbersconf.org/2008/program/speakers/getspeaker.php-speaker=mdesnoyers.txt
- Track: Talk / keynote / tutorial
- 日時: Wednesday, September 17, 2008 13:30

### Description

This presentation/discussion would try to address two problems: how to

trace userland efficiently without going through a system call each time

instrumentation is hit and how to statically instrument the userland

applications so tracing can be dynamically activated system-wide at

runtime.





It contains these subtopics:





Markers/tracepoint registration



Tracing userland and kernel



Supporting early tracing (init), keeping trace buffers of killed

 processes



Kernel crash dump support



Data extraction to network, disk or flight-recorder in memory

buffers.



Multiple active traces support.



Locking in userspace, no RCU available, seqlock unsuitable



vDSO page vs linked-in object



libc integration, header management.

### 添付資料URL

掲載なし

<a id="session-rmcgrath.txt"></a>
## 10. Kernel support for user debugging: ptrace, utrace, and what's next

- セッション個別URL: https://blog.linuxplumbersconf.org/2008/program/speakers/getspeaker.php-speaker=rmcgrath.txt
- Track: Talk / keynote / tutorial
- 日時: Wednesday, September 17, 2008 13:30

### Description

Every developer wants better tools to debug their applications.

These tools rely on the kernel for the means to control and examine

other user processes.  The main Linux facility for this is ptrace.













The ptrace interface has proven difficult for tool developers.  Its

problems have stifled the ease of creating novel tools and

components to expand the debugging and tracing landscape, and have

often made maintenance and extension of existing tools difficult.













Meanwhile, the existing ptrace kernel internals have long been a

source of difficult bugs and a thorn in the side of kernel

maintainers.  This code has been difficult for many maintainers,

leaving architecture support code and all ptrace code often

neglected and abandoned as a quagmire.  Those interested in better

debugging facilities have found it difficult to make progress.













This talk will first briefly describe the main problems with the

ptrace interface from the user perspective, and conclude that ptrace

has nothing left to offer.  It will then move to in-kernel issues of

concern to kernel developers and architecture maintainers, quickly

listing problems with the old code.













The primary focus of the talk will be recent work to improve the

picture inside the kernel, going from the bottom up.  In each area,

it can delve into as much technical detail as the audience wants.













First steps establish uniform interfaces for architecture code.  The

user_regset interface and other cleanups went into 2.6.25 and 2.6.26

kernels.  These and other new internal API additions will complete

the new definition of what each architecture's code can do to get

the most out of any new tracing and debugging features.  The talk

will cover everything an architecture maintainer needs to know to

make new features available to users and keep those features'

details out of the maintainer's hair.













Next, work (not yet integrated) that completes the cleanup of all

interactions between the core kernel and the implementation of

tracing and debugging.  This fully documents the requirements and

expectations of each hook into the core and architecture code,

making debugging features tractable without knowledge of many

corners of the kernel.  For kernel and architecture maintainers not

interested in these features, it draws the line past which they need

not consider the details.













The presentation of current work concludes with utrace.  This

baseline of low-level tracing and control features on user threads

is exported as a new API for kernel modules.  Analogous to the block

layer below filesystems, it provides a platform on which to build

debugging and tracing features efficiently and safely, and lets

separate features coexist well.  This work hopes to open the field

for casual kernel developers to work on new features in this area.

The talk will explain the utrace API in full.













Finally, we'll discuss some work in progress and ideas for new

things built on utrace, including user-level interfaces for

debuggers to use in place of ptrace.

### 添付資料URL

掲載なし

<a id="session-srostedt.txt"></a>
## 11. Ftrace

- セッション個別URL: https://blog.linuxplumbersconf.org/2008/program/speakers/getspeaker.php-speaker=srostedt.txt
- Track: Talk / keynote / tutorial
- 日時: Wednesday, September 17, 2008 13:30

### Description

Ftrace, that has been pulled into the latest git tree and is on track to

be in 2.6.27 also comes with an added utility: The dynamic function tracer.

This uses the gcc profiling parameter -pg to add a function call at

every function inside the kernel. The dynamic utility, converts these

calls at runtime to nops, and saves the result. This allows for selective

tracing of functions inside the kernel as well as modules.

By converting the function calls to nops, and enabling them for tracing,

there is no overhead to having a tracer compiled into the kernel. The

overhead only appears when the tracer is activated. This means that kernel

function tracers may now be enabled in a production environment.





This presentation will lead to a discussion on how to share this code

with other projects going on with the kernel, such as LTTng and SystemTap.

This is not limited to just tracers, but also for profilers, and for

tuning.

### 添付資料URL

掲載なし

<a id="session-chehab08"></a>
## 12. Video Input Infrastructure

- セッション個別URL: https://blog.linuxplumbersconf.org/2008/program/microconfs/getmc.php-mc=chehab08
- Track: Microconference whole session
- 日時: Wednesday, September 17, 2008 13:30

### Description

Linux currently have two modern kernel-userspace API's for handing video input devices: V4L2 API for video streams and radio and DVB API for digital TV reception. Due to the complexity and diversity of different devices, and due to the large amount of formats and standards handled by those API's, this infrastructure needs to evolve to better fit other devices. Also, a good userspace device library is the key of the success for having userspace applications to be able to work with all formats supported by those devices.





This Miniconf will discuss the evolution of V4L and DVB API's to handle the current and future needs, underling the userspace improvements to reduce device/application non-compliances. 






Video Input Infrastructure Schedule






Total time: 2 hr 30 min





	
		 Time  Session 
	
	
		 0:00  Presentation 1: Mauro Carvalho Chehab: Video Input Status Quo 
	
	
		 0:15  Presentation 2: Hans Verkuil: Extending V4L2 to support complex media streaming devices 
	
	
		 0:40  Presentation 3:  V4L2 Library 
	
	
		 1:05  Presentation 4: Brandon Philips: The video4linux user-space: libv4l2, applications and a server 
	
	
		 1:30  Break 
	
	
		 1:45  Discussion/Round Table: Support for missing digital standards: DVB-H, ISDB, etc 

 Introdution 

 New API proposals 
	
	
		 2:15  Next Steps (by MC Runner) 
	
	
		 2:30  End

### 添付資料URL

- [Mauro Carvalho Chehab: Video Input Status Quo](http://linuxtv.org/downloads/plumbers2008/mchehab_v4l_dvb_status_quo.pdf)（file）
- [Hans Verkuil: Extending V4L2 to support complex media streaming devices](http://www.linuxtv.org/downloads/plumbers2008/hverkuil_v4l2.pdf)（file）
- [Brandon Philips: The video4linux user-space: libv4l2, applications and a server](http://linuxtv.org/downloads/plumbers2008/bphilips_v4luserspace.pdf)（file）
- [Introdution](http://linuxtv.org/downloads/plumbers2008/mchehab_v4l_dvb_round_table_intro.pdf)（file）
- [New API proposals](http://www.linuxtv.org/downloads/plumbers2008/stoth_dvb_round_table_new_api.pdf)（file）

<a id="session-bphilips.txt"></a>
## 13. The video4linux user-space: libv4l2, applications and a server

- セッション個別URL: https://blog.linuxplumbersconf.org/2008/program/speakers/getspeaker.php-speaker=bphilips.txt
- Track: Talk / keynote / tutorial
- 日時: Wednesday, September 17, 2008 13:30

### Description

With the merging of the gspca driver sans in-Kernel decompression in 2.6.27 it

has become necessary to start working with upstream application developers to

ensure that they can support the proliferation of new frame and compression

formats. Earlier this month Hans de Geode started this work and created

libv4l2: a low level wrapper around existing V4L IOCTLs. Having a user

space library sitting between applications and the Kernel opens up the

possibility for doing a fairly simple V4L server that can allow sharing of

frames between multiple applications: like sound servers ALSA dmix or

PulseAudio.





The talk will quickly cover three important topics about the V4L user

space:







Give an update on how libv4l2 support is progressing and where work is

needed.





Present a video4linux frame server design and possibly demo. A frame server

will allow multiple application to use a V4L device at the same time. For

example you can take photos with Cheese while chatting on Skype. Even more

critically this is needed for user space autofocus daemons. Many modern

webcams simply leave the task of auto-focusing up to software.





Discuss the need for a GNOME/KDE control panel for adjusting camera

properties. No application I have seen currently implements a UI to adjust all

the controls cameras present. Also a desktop level control panel (and tray

icon like the volume control) will help move from the one camera one

application paradigm too.

### 添付資料URL

- [Brandon Philips: The video4linux user-space: libv4l2, applications and a server](http://linuxtv.org/downloads/plumbers2008/bphilips_v4luserspace.pdf)（file）

<a id="session-hgoede.txt"></a>
## 14. libv4l2

- セッション個別URL: https://blog.linuxplumbersconf.org/2008/program/speakers/getspeaker.php-speaker=hgoede.txt
- Track: Talk / keynote / tutorial
- 日時: Wednesday, September 17, 2008 13:30

### Description

The Linux kernel offers an API to access a wide variety of video (input mostly) 

devices through the video4linux API, for example webcams, analog and digital tv 

-tuners. By offering a single API for all video input devices v4l makes it 

possible for applications to easily support a wide variety of

devices.





Currently the v4l API is strictly a userspace <-> kernelspace API, so there are 

no further support libraries for applications to access v4l devices. This means 

that applications need to support reading the frame data from the video device 

in a variety of video formats and then converting it to a video format suitable 

for their own use.





The out of kernel gspca usb webcam driver framework solved the video format 

problem by doing conversion from hardware specific compression formats (usb 1.1 

bandwidth is too low to carry raw frames at a decent framerate) to generic 

formats as supported by most applications in the kernel. With the merging of 

the gspca driver into the mainline kernel, this conversion has been removed 

from gspca as video format conversion clearly does not belong in the kernel.





This made the video format problem much larger as gspca adds 8 different non 

standard videoformats, of which 3 feature complex compression algorithms. 

Implementing support for all these formats into all v4l applications is clearly 

not the way forward as this leads to much code duplication and maintainance 

issues. Hence libv4l2 a utility library for v4l2 applications doing format 

conversion was born.





The choice has been made with libv4l to 100% copy the application <-> kernel 

interface for direct /dev/video access, except that now additional video 

formats can be requested (and will be granted), during video format negotiation 

and that (to the application transparent) conversion will happen from the raw 

video format given by the device to what the application wants. This choice was 

made to allow very easy porting of the numerous existing v4l2 applications to 

libv4l2, all that needs to be done is replace the open on /dev/video with 

v4l2_open and additional calls on the resulting fd like ioctl with v4l2_ioctl, 

etc.





As there are still quite a few applications out there which use the (obsolete) 

v4l1 API, and since the kernel v4l1 emulation is incomplete in many drivers 

(uvc and gspca for example), a v4l1 emulation library which does (transparent) 

format conversion and v4l1 emulation on top of v4l2 devices has been written, 

this lib is called libv4l1 and mimick the /dev/video v4l1 interface in the same 

way as libv4l2 mimicks the /dev/video v4l2 interface.





A joined effort between Fedora, Suse and Debian is underway to port

all v4l2 applications in these distro's to libv4l, see libv4l2

progress

### 添付資料URL

掲載なし

<a id="session-hverkuil.txt"></a>
## 15. Extending V4L2 to support complex media streaming devices

- セッション個別URL: https://blog.linuxplumbersconf.org/2008/program/speakers/getspeaker.php-speaker=hverkuil.txt
- Track: Talk / keynote / tutorial
- 日時: Wednesday, September 17, 2008 13:30

### Description

Originally the V4L2 API was designed for simply video capture cards.

However, as media devices become ever more complex it becomes harder

for the user to know which /dev/videoX device to use. And for driver

developers it has become more difficult to get full support for the

device and to coordinate all the various video4linux, framebuffer, alsa

and dvb parts that together control the device.







The effort to integrate Texas Instruments V4L2 drivers into the kernel

triggered the work on a new Media Controller v4l device that pulls all

the various parts together and should make it easier for both user and

developer to keep track of it all.







This talk explains the concept of a Media Controller and a Media

Processor and how they are to be used in practice.

### 添付資料URL

- [Hans Verkuil: Extending V4L2 to support complex media streaming devices](http://www.linuxtv.org/downloads/plumbers2008/hverkuil_v4l2.pdf)（file）

<a id="session-mchehab.txt"></a>
## 16. Video input Status quo

- セッション個別URL: https://blog.linuxplumbersconf.org/2008/program/speakers/getspeaker.php-speaker=mchehab.txt
- Track: Talk / keynote / tutorial
- 日時: Wednesday, September 17, 2008 13:30

### Description

This talk will cover the current status of the development of video

input infrastructure, presenting the strongest and weakest points of

the infrastructure. The next presentations at the miniconf will

address the weakest points.

### 添付資料URL

- [Mauro Carvalho Chehab: Video Input Status Quo](http://linuxtv.org/downloads/plumbers2008/mchehab_v4l_dvb_status_quo.pdf)（file）

<a id="session-brown.txt"></a>
## 17. CRFS

- セッション個別URL: https://blog.linuxplumbersconf.org/2008/program/speakers/getspeaker.php-speaker=brown.txt
- Track: Talk / keynote / tutorial
- 日時: Wednesday, September 17, 2008 13:30

### Description

CRFS is a project which is designing a new network file system protocol.

The initial implementation consists of a Linux kernel module client and

a user space server.





CRFS offers POSIX file system semantics to reduce the risk of breaking

applications which weren't specifically developed for some arbitrary

subset of POSIX that network file systems find easy to implement.  The

talk will cover the properties of the design which provide POSIX

semantics. 





The CRFS wire protocol is designed to offer aggressive performance

through efficient operations and caching which greatly reduces the

number of network messages.  We'll walk through the most significant

aspects of these design elements. 





Most importantly, though, the talk will give potential users an

opportunity to find out how CRFS can help them solve problems and will

provide an opportunity for their feedback to influence the design of

CRFS.

### 添付資料URL

掲載なし

<a id="session-masbock.txt"></a>
## 18. Are the DIMMs going bad? Making sense of memory error messages.

- セッション個別URL: https://blog.linuxplumbersconf.org/2008/program/speakers/getspeaker.php-speaker=masbock.txt
- Track: Talk / keynote / tutorial
- 日時: Wednesday, September 17, 2008 13:30

### Description

Linux reports memory errors through the machine check handler and the EDAC

drivers. In many cases easy access to memory error information is beneficial

and should be welcomed. It allows for better insight into the health of the

hardware. However, memory error reporting in Linux in its current state still

has a few issues. The main one being that memory errors are reported without

relation to normal expected DIMM error rates. Without this knowledge of the

hardware and its error thresholds it is hard to judge if a DIMM is faulty

based on a number of reported corrected ECC memory errors. Users will likely be

asking the question - Are my DIMMs bad? - after seeing a number of memory

errors when in reality the DIMMs are fine and the rate of errors is normal.

In fact, the author's experience shows that system administrators will indeed

ask this very question.





Therefore it is useful to describe the current state of memory error reporting

in Linux, to explain the problems that remain and point to possible

enhancements. This talk intends to do this by describing in details the current

infrastructure:





The machine check handler: it exploits the machine check architecture

  on x86_64 CPUs and periodically polls status registers for corrected errors.

  An mcelog user space utility serves to transfer error reports from the

  kernel and display or log them in readable format.



EDAC (Error Detection and Correction): EDAC drivers are chip set specific

  and poll registers in the memory controller for errors. EDAC logs error

  messages through printk and reports error counts in sysfs. The edac-util

  user space package facilitates reading the sysfs files and helps associate

  the errors with the specific DIMMs.







A number of issues and potential improvements shall be discussed as

well:





The need for thresholds: This allows for better determination of DIMM

  failures based on the number of errors seen within a certain time

  interval.



Relating memory errors to specific DIMMs: While both mcelog and edac-utils

  attempt to do this, there are still open issues.



Coordination with the BIOS: On many systems the BIOS performs predictive

  failure analysis (PFA) for memory. In that case, error reporting by EDAC

  might be redundant. EDAC also needs to make sure not to interfere with PFA

  in the BIOS.







The talk hopes to show that with some improvements the current Linux memory

error reporting mechanisms can be turned into a reliable instrument for DIMM

failure prediction.

### 添付資料URL

掲載なし

<a id="session-bsmith.txt"></a>
## 19. How to Talk to a Long-Running Process

- セッション個別URL: https://blog.linuxplumbersconf.org/2008/program/speakers/getspeaker.php-speaker=bsmith.txt
- Track: Talk / keynote / tutorial
- 日時: Wednesday, September 17, 2008 13:30

### Description

The days of managing Unix services by editing a

configuration file and doing a 'kill -1' on a long

running process are gone.  Today's Linux servers

must simultaneously offer near real-time access to

status, statistics, and configuration updates for web,

command line, and SNMP user interfaces.





Run Time Access (RTA) is a lightweight library

that provides an intuitive interface that lets you

view and edit data in a running process.  RTA works

by making some of the process' data structures visible

externally as if they were tables in a PostgreSQL

database. 





Since RTA "speaks" the PostgreSQL client

protocol, a program using RTA can immediately talk

to user-interface or management clients written in

C/C++, PHP, Java, Python, Perl, and Tcl. 





Many developers use arrays or linked-lists of

data structures internally so the mapping from a

structure definition to a table row definition is

intuitive and easy. 





More information on RTA is in the article at

http://linuxfocus.org/English/May2004/article338.shtml,

and at the project's homepage:

http://www.linuxappliancedesign.com/projects/rta/index.html

### 添付資料URL

掲載なし

<a id="session-ltorvalds.txt"></a>
## 20. Git Tutorial

- セッション個別URL: https://blog.linuxplumbersconf.org/2008/program/speakers/getspeaker.php-speaker=ltorvalds.txt
- Track: Talk / keynote / tutorial
- 日時: Wednesday, September 17, 2008 16:30

### Description

Tutorial on git; details TBA.

### 添付資料URL

掲載なし

<a id="session-jcorbet.txt"></a>
## 21. Kernel Report

- セッション個別URL: https://blog.linuxplumbersconf.org/2008/program/speakers/getspeaker.php-speaker=jcorbet.txt
- Track: Talk / keynote / tutorial
- 日時: Thursday, September 18, 2008 09:00

### Description

This talk presents a moderately technical view of the state of the Linux

 kernel from several angles.  Attendees will get an overview of the

 development process and its recent history, a look at some of the

 largest challenges currently facing the kernel developers, and a certain

 amount of guessing about what may happen with the kernel over the next

 year.  At LPC, this talk will also provide a summary of the most

 important discussions and decisions from the Kernel Summit held

 immediately prior to the conference.

### 添付資料URL

掲載なし

<a id="session-jones08"></a>
## 22. Microconf Focus

- セッション個別URL: https://blog.linuxplumbersconf.org/2008/program/microconfs/getmc.php-mc=jones08
- Track: Microconference whole session
- 日時: Thursday, September 18, 2008 10:00

### Description

Speed of bootup is an increasingly popular concern, particularly on mobile devices.  In this MC, we hope to show some insight into work that is currently happening, and areas which still need work.  This subject typically doesn't see a huge amount of cross-distro collaboration, with each distro reinventing a lot of the same mechanisms. Can this be fixed?






Format






Three presentations, followed by a short QA/brainstorming session.






Sample Microconf Schedule






Total time: 2 hr 30 min





	
		 Time  Session 
	
	
		 0:00  From naught to sixty in 5 seconds (arjanv) 
	
	
		 0:45  Faster than a Greased Penguin (boot optimization) (kylem) 
	
	
		 1:30  Early bootup cross-distro collaboration. (davej) 
	
	
		 2:15  Wrap-up / discussion (by MC Runner) 
	
	
		 2:30  End 
	




Takeaway






Hopefully increased participation on shared solutions that every distro can benefit from.

### 添付資料URL

掲載なし

<a id="session-avandeven.txt"></a>
## 23. From Naught to Sixty in 5 Seconds

- セッション個別URL: https://blog.linuxplumbersconf.org/2008/program/speakers/getspeaker.php-speaker=avandeven.txt
- Track: Talk / keynote / tutorial
- 日時: Thursday, September 18, 2008 10:00

### Description

We simply refuse to accept that booting a netbook needs to take

more than five seconds. We bite our nails and pull our hair every time

we boot a Linux desktop system and wait for minutes before it's usable.

We're so annoyed that between the time of submission and the plumbers

conference, we will make our netbooks boot in 5 seconds, and even talk

about how we did it.

### 添付資料URL

掲載なし

<a id="session-djones.txt"></a>
## 24. Early bootup cross-distro collaboration

- セッション個別URL: https://blog.linuxplumbersconf.org/2008/program/speakers/getspeaker.php-speaker=djones.txt
- Track: Talk / keynote / tutorial
- 日時: Thursday, September 18, 2008 10:00

### Description

The early bootup stage (before the kernel hands off to /sbin/init)

should be an incredibly dull, dreary process which does unexciting

things like finding root partitions, and mounting them.







It is strange then, that every distribution sees fit to reinvent the wheel,

and do something completely different.  Why is there a need for

innovation in possibly the most dull part of a Linux distribution?





With so much divergence between implementations, this talk will

investigate whether it is possible for a 'one mkinitrd to rule them all'

by determining the feature sets of several existing implementations,

and pointing out areas which may prove challenging to address.

### 添付資料URL

掲載なし

<a id="session-kmcmartin.txt"></a>
## 25. Faster than a Greased Penguin: Making the Linux Boot Suck Less

- セッション個別URL: https://blog.linuxplumbersconf.org/2008/program/speakers/getspeaker.php-speaker=kmcmartin.txt
- Track: Talk / keynote / tutorial
- 日時: Thursday, September 18, 2008 10:00

### Description

Bringing up a modern Linux desktop such as Fedora or Ubuntu is a

complex process. While the standard set of packages differs by distro,

the core startup problems are generally the same. The kernel, udev,

init, and a truckload of shell scripts all provide a myriad of ways

the boot process can be slowed.





This session explores approaches taken optimising the boot process,

both within Fedora, and more generally. Using tools such as systemtap,

strace, and a variety of small and large kernel hacks, the bloat will

be explored, analyzed, and the resulting improvements shown.





Blame will be assigned to the kernel and userspace alike, none will

be spared. Code on the chopping block includes modprobe, upstart,

the kernel, and a cast of thousands of pieces of a modern desktop.

In the kernel, module loading and device initialization will be

targetted.





This session will also be pretty graph compliant.

### 添付資料URL

掲載なし

<a id="session-wong08"></a>
## 26. Linux Server Management

- セッション個別URL: https://blog.linuxplumbersconf.org/2008/program/microconfs/getmc.php-mc=wong08
- Track: Microconference whole session
- 日時: Thursday, September 18, 2008 10:00

### Description

These days, running Linux on a server doesn't mean quite what it did ten years ago–form factors have changed, and systems are expected to keep on chugging even though chunks of hardware can appear and disappear at any time.  In this track we aim to discuss three things: Running Linux on devices in addition to hosts; exposing hardware location details in a running system; and how Linux interacts with system firmware (at least on x86).





Servers are no longer just a big box in a specially constructed room; Linux is now embedded on target devices: at first there was support for USB gadgets and SCSI targets, and now people are putting Linux on PCIE devices.  Ideally we ought to convene everyone in a room to figure out how these setups are going to function and to see if there exist any ideas or functionality that could be reused or shared between device stacks.





On the management front, Linux is expected to perform continuously in the face of hot hardware reconfiguration; though the hotplug mechanisms are much improved over what they were a few years ago, there are usability problems that remain.  Without an in-depth knowledge of the hardware device tree, mapping physical devices (PCI cards, disks, RAM, etc) to their in-kernel representations is an incomplete story.  Hardware and firmware some times come from the factory with physical descriptions of the devices to which they connect, but there currently isn't a coherent way to export all that data to administrators.





Finally, there exists a fair amount of system functionality hidden in the system BIOS; we will discuss how those interfaces have been introduced and made more generic over time to prevent the encroachment of firmware-specific control warts, and how we might try to steer firmware interface and functionality development to work with Linux.






Schedule






This track has space for a total of 2 hours and 30 minutes of content.  There will be three short talks, which leaves us enough time for a short break and a wrap-up discussion at the end.  Each talk should aim to fit in twenty-five minutes including Q&A, though there will be ample time for hallway discussions outside of the track.  Following the three scheduled talks, there will be a 45 minute discussion section where people can talk about their concerns in a large forum, pose questions to the three presenters, or break off into smaller groups to hack up some code.





Please use these talks as a tool to discuss where something is inefficient, inelegant or wrong.  Don't just propose a solution; also state the problem.  Likewise, don't just complain; let's hear your thoughts about addressing those complaints.  That said, if you've built some sort of device that the world has never seen before, some time could be spent airing that device publicly to gather peoples' reactions.





This is the tentative schedule for the track.  The track will be from 10am to 12:30pm on Thursday, September 18th.





	
		 Time  Session 
	
	
		 0:00  Ground Rules 
	
	
		 0:05  Arnd Bergmann 
	
	
		 0:35  Andrew Chiang 
	
	
		 1:05  Break 
	
	
		 1:20  Len Brown 
	
	
		 1:50  Discussion/Round Table 
	
	
		 2:20  Next Steps 
	
	
		 2:30  End 
	




Accepted Talks






I have accepted these talks for the server track.





 Infrastructure for PCIe endpoint devices - Arnd Bergmann - An increasing number of Linux based machines features PCI express ports that can be used as an endpoint…



 Physical PCI Slots - Alexander Chiang - Using firmware data (DMI/ACPI/etc) to translate kernel device names to physical devices in PCI slots…



 Hiding ACPI - Len Brown - Burying ACPI data/functionality in generic K/U “firmware” interfaces…







Other Talks






A few more talks that I argued for inclusion in Track 3 (miscellaneous):





 How to Talk to a Long-Running Process - Bob Smith - Run Time Access (RTA) is a lightweight library that provides an intuitive interface that lets you view and edit data in a running process…



 Virtualized Development Infrastructure Management with Puppet: Beyond Cloning - Teyo Tyree - Using Puppet to manage system images…



 Embedded virtualization with KVM: Yes, it does make sense! - Hollis Blanchard - KVM on embedded PPC systems…



 Are the DIMMs going bad? - Max Asbock - Decoding error messages from MCE/EDAC drivers, and how to clean up the tools to make them more user friendly…







Ideas






Here are some ideas scraped off the front page that may or may not fit into this track:





 Server manageability, systemtap, portability, IPMI and configuration management



 Checking on long-haul daemons to make sure they're not slowly self-destructing



 Virtualization, containers, namespaces

 Putting more than 1 app on a server and keeping things tidy



 Putting more than 1 VM on a system and keeping it up even when the host goes senile



 How does the virtualization story change when we have obscene numbers of VMs?







 Linux annoyances: What are they, and how can we eliminate them?



 Putting the Linux kernel in non-traditional places



 Embedded issues



 Networking: going to 10Gb and beyond.

 What are the necessary API and infrastructure changes?



 Existing poll and RDMA interfaces are rarely used



 Realtime and latency?











That list is sorted roughly in the order of importance.  Do not be discouraged if your area of interest is not on that list.

### 添付資料URL

掲載なし

<a id="session-achiang.txt"></a>
## 27. Physical PCI slots: A little bit goes a long way

- セッション個別URL: https://blog.linuxplumbersconf.org/2008/program/speakers/getspeaker.php-speaker=achiang.txt
- Track: Talk / keynote / tutorial
- 日時: Thursday, September 18, 2008 10:00

### Description

Recently, PCI slots gained first-class citizenship, and on ACPI

enabled systems, the pci_slot driver can expose them in sysfs.  The

information provided by this simple driver has surprisingly powerful

implications for fundamental user tasks.





Some basic problems can occur during OS installation.  The network

interface used to download the install kernel and ramdisk from the

boot server may not be the same interface used by the installer to

download the rest of the OS image [1].  This problem is especially

prevalent on large, scale-up systems with many network ports where

only a few have link.





Another installation issue occurs on systems with multiple OS images

installed on various forms of storage, connected to a plethora of

HBAs.  Although this situation is unlikely to occur in a production

environment, it is quite common for a kernel developer.  Installing

onto the wrong disk and blowing away an environment that finally

reproduces a bug is possibly one of the worst feelings caused by

technology, ever.





Troublesome hardware presents its own issues.  Currently, there is

no way to know into which physical slot a PCI card is inserted.

During normal use, this lack of knowledge is mysterious but benign.

However, if a card starts failing, the user wants to know quickly

which device to replace, and the lack of a physical slot mapping

forces the user to consult installation records in the best case,

and perform a binary yank-and-see search in the worst case.





All of these problems can be solved by hooking up various userspace

tools to take advantage of the pci_slot driver.







Installers such as anaconda could present physical slot

information for NICs or HBAs and reduce much sysadmin

heartburn





lspci, lsscsi, and friends could be extended to display

the physical slot number to aid hardware troubleshooting,

or simply mitigate the existential crisis of not knowing

exactly what card /dev/sda might be hooked up to





udev scripts could be written, reducing the number of

systems that require pci=bfsort to obtain a sane mapping

between kernel device names and silk-screened chassis labels









This talk aims to:





quickly discuss the above use cases





briefly describe the effort required by system vendors to

provide this information





spend the majority of the time discussing other ways that

userspace can leverage this new knowledge.









Finally, the author notes that although the underlying implementation

behind this proposal is ACPI based, a new driver could be written to

take advantage of the new PCI slot infrastructure and recent Type 9

extensions in SMBIOS that provides the same functionality.[2]

### 添付資料URL

掲載なし

<a id="session-bergmann.txt"></a>
## 28. Infrastructure for PCIe Endpoint Devices

- セッション個別URL: https://blog.linuxplumbersconf.org/2008/program/speakers/getspeaker.php-speaker=bergmann.txt
- Track: Talk / keynote / tutorial
- 日時: Thursday, September 18, 2008 10:00

### Description

An increasing number of Linux based machines features

PCI express ports that can be used as an endpoint instead

of a PCI express root complex. Examples include the

"Triblade" of the LANL Roadrunner supercomputer, embedded

Linux based PCIe cards and blade servers with a switched

PCIe backplane. 





So far, there is no common infrastructure for this and

device drivers are largely incompatible. On the way to

a generic code base, we are looking at virtual device driver

(virtio) providers on top of PCIe, implementation of

Message Passing Interface (MPI), and possible user

interfaces for setting up the devices.

### 添付資料URL

掲載なし

<a id="session-lbrown.txt"></a>
## 29. Hiding ACPI

- セッション個別URL: https://blog.linuxplumbersconf.org/2008/program/speakers/getspeaker.php-speaker=lbrown.txt
- Track: Talk / keynote / tutorial
- 日時: Thursday, September 18, 2008 10:00

### Description

The Advanced Configuration and Power Interface specification (ACPI)

allows Linux to handle a broad range of hardware without requiring custom

software.  ACPI does this by abstracting platform hardware interfaces for

configuration and power management.  This decouples the OS and the platform,

allowing them inter-operate while they independently evolve.





Linux has included support for ACPI since the Linux-2.4 days, and the major

Linux distributors have universally deployed ACPI for all Intel compatible

hardware since they started shipping Linux-2.6.





However, the interface between ACPI-based Linux kernel features and user-space

continues to evolve.  Linux started with an implementation that exposed ACPI

internals, and is evolving to an implementation where ACPI is largely hidden

behind generic interfaces.





This talk will survey the state of those kernel/user interfaces, and provide a

forum for discussing their future.

### 添付資料URL

掲載なし

<a id="session-cleech.txt"></a>
## 30. Status of Fibre Channel and FCoE Support in Linux

- セッション個別URL: https://blog.linuxplumbersconf.org/2008/program/speakers/getspeaker.php-speaker=cleech.txt
- Track: Talk / keynote / tutorial
- 日時: Thursday, September 18, 2008 10:00

### Description

Fibre Channel over Ethernet (FCoE) is an network encapsulation technology designed  to reduce the deployment and management costs involved in attaching systems to a storage area network.  FCoE is an industry wide effort being developed within the T11 committee of INCITS, and supported by a wide range of storage and networking vendors.





The Open-FCoE project brings a software Fibre Channel and FCoE stack to Linux, allowing for the use of high-speed Ethernet adapters to connect Linux systems to storage area networks via a FCoE forwarder switch.  The Open-FCoE software was first released under the GPLv2 license in November of 2007.  Originally implemented as a portable code base, since November the team has spent quite a bit of time removing abstractions and more tightly integrating into the Linux SCSI subsystem and existing Fibre Channel transport class, in the process reducing the size of the code base by 50%.





While we're currently focused on getting the code ready for upstream kernel inclusion, the Open-FCoE team is also working with Linux storage and Fibre Channel experts to ensure that Linux is ready to support the next generation of Fibre Channel and FCoE adapters.  We're working on making the Open-FCoE stack into a library of reusable Fibre Channel functionality, with an eye towards supporting a wide range of devices with varying capabilities from standard Ethernet controllers to fully offloaded host bus adapters.  We're also looking at possible improvements to the Fibre Channel transport class and common management interfaces, a shared open source HBA API library for integration into fabric management applications, and a common implementation of the FCoE Initialization Protocol for FCoE forwarder discovery.





I'd like to discuss the current state and future directions for Fibre Channel and FCoE support in Linux at the LPC, as well as present an technical overview of FCoE and possibly related technologies, such as Ethernet enhancements for network convergence and reliability including Data Center Bridging / Data Center Ethernet, if desired.

### 添付資料URL

掲載なし

<a id="session-cmason.txt"></a>
## 31. The Btrfs Filesystem: Design, Status and Goals

- セッション個別URL: https://blog.linuxplumbersconf.org/2008/program/speakers/getspeaker.php-speaker=cmason.txt
- Track: Talk / keynote / tutorial
- 日時: Thursday, September 18, 2008 10:00

### Description

Btrfs is a general purpose, copy on write filesystem with many advanced

features including writable snapshots, multiple device support and

repair driven design.





Design highlights and benchmarks will be discussed, along with a status

update on the major features required before 1.0 can be released.  The

future roadmap will also be presented.

### 添付資料URL

掲載なし

<a id="session-hblanchard.txt"></a>
## 32. Embedded virtualization with KVM: Yes, it does make sense!

- セッション個別URL: https://blog.linuxplumbersconf.org/2008/program/speakers/getspeaker.php-speaker=hblanchard.txt
- Track: Talk / keynote / tutorial
- 日時: Thursday, September 18, 2008 10:00

### Description

The KVM virtualization project is often considered only for desktop and

server usage, but these are not its only strengths. Virtualization is

the subject of intense interest from embedded system designers for a

wide variety of reasons, including improvements in reliability and

security, but also to reduce power consumption and even improve

performance where processor time would otherwise go to waste. No

software meets the disparate requirements of all embedded systems, but

KVM in particular has many attributes that make it well-suited for

deployment in the embedded industry.







I'll talk about the advantages and disadvantages of a "heavyweight"

virtualization solution like KVM in embedded systems, including examples

from my experience implementing KVM for embedded PowerPC processors.

### 添付資料URL

掲載なし

<a id="session-gregkh08"></a>
## 33. Microconf Focus

- セッション個別URL: https://blog.linuxplumbersconf.org/2008/program/microconfs/getmc.php-mc=gregkh08
- Track: Microconference whole session
- 日時: Thursday, September 18, 2008 13:30

### Description

What is the theme of your session? What are the short-to-medium-term challenges facing this area? If you could fix one thing, what would it be? 






Format






 Do you want presentations? Open discussions? Coding time? A series of 5-minute lightning talks? 






Sample Microconf Schedule






Total time: 2 hr 30 min





Sample, please schedule how you want, this is a placeholder!





	
		 Time  Session 
	
	
		 0:00  Presentation 1 
	
	
		 0:30  Presentation 2 
	
	
		 1:00  Lightning Talks 
	
	
		 1:30  Break 
	
	
		 1:45  Discussion/Round Table 
	
	
		 2:15  Next Steps (by MC Runner) 
	
	
		 2:30  End 
	




Takeaway






 Are you looking for a decision to be made? To clear up a confusion? More participants in an area? Just meet people face-to-face?

### 添付資料URL

掲載なし

<a id="session-jbottomley.txt"></a>
## 34. Where should the Line be drawn between kernel and user space?

- セッション個別URL: https://blog.linuxplumbersconf.org/2008/program/speakers/getspeaker.php-speaker=jbottomley.txt
- Track: Talk / keynote / tutorial
- 日時: Thursday, September 18, 2008 13:30

### Description

What should be in the kernel and what should be in user space has been

a subject of fairly perennial debate.  The current line has settled on

the "policy" question: If it's policy based, it should be done from

user space (the kernel is there to implement policy but not to make

it).  One of the interesting aspects of this edict is the question of

when should the actual policy implementation be in user space and when

should it be in the kernel.  In the latter case, the kernel grows

effectively a way of having policy set plus a way of implementing it,

usually causing a significant size increase over a simple compile

configured static policy.  An obvious example of this is ip_tables; it

occupies a massive amount of kernel code, all for the purpose of

enforcing user defined policy on incoming and outgoing network

packets.  The complexity of the policy (you try configuring ip_tables

in all its glory) necessitates the huge size of the code base to do

this.  Unfortunately, IP packet routing policy can't simply be ejected

to user space if one expects the IP stack to function at speed on a

modern network, so we're apparently stuck with it.  However, there are

numerous other examples, like SCSI scanning that occur inside the

kernel but could be done from user space instead.





When you begin thinking about evicting pieces of the kernel out to

user space, you immediately run into a functionality and delivery

problem:  Usually the kernel won't work without the relevant

component, plus if it's too tightly bound to the exact operation of

the kernel, then the component so ejected has to keep pace with what's

going on with the kernel interfaces while being maintained separately

(a recipe for disaster).  Finally, the more critical user space pieces

you have, the harder it becomes for distributions to maintain a

working boot sequence correctly (because there are more pieces for

them to keep at the right versions in the correct places).  On the

other hand, certain operations can be performed much more easily in

user space because of access to the filesystem and full library

interfaces.





This talk will argue for drawing the line closer to the "because we

can" pole than we do now by examining a three point test for whether

something should be in user space:







It must not be performance critical



The code must be simpler to write in user space



The Kernel/User interface for the component must either be stable or

    be susceptible to backwards compatibility requirements.







We will case study this approach by examining what happens when the

whole of the SCSI subsystem scanning code is moved outside of the

kernel.

### 添付資料URL

掲載なし

<a id="session-mkerrisk.txt"></a>
## 35. Who owns the interface?

- セッション個別URL: https://blog.linuxplumbersconf.org/2008/program/speakers/getspeaker.php-speaker=mkerrisk.txt
- Track: Talk / keynote / tutorial
- 日時: Thursday, September 18, 2008 13:30

### Description

Traditionally, an interface is owned and defined by the vendor or group

who created it, and if the interface achieves widespread usage, then

eventually ownership may pass to a standards group.













But what's the story for the Linux kernel-userspace interface?  Who owns

it?  (Who has freedom to change the interface?  Who has the power to

block changes?)













Is it the Austin group (they define the POSIX.1/SUS API standard)?



Is it the kernel developers (they implement the interfaces)?



Is it the userspace programmers (they use the interfaces)?



Is it the LSB (they define the Linux ABI standard)?





Is it LTP or other testers (they come up with (implicit or explicit)

interface specifications for testing)?



Is it Ulrich Drepper (glibc mediates the interfaces exposed by the

kernel)?



Is it me (I maintain the documentation of the interfaces)?









Given the nature of the Linux interface development, if you're a member

of one of those groups, and assume that you must be the owner, then

you're likely to be in for some unpleasant surprises.  You're also in

for some surprises if you assume that some other group(s) must be the

owner.  You're even in for some surprises if you assume that some

particular group couldn't be the owner.  (Like: userland programmers

couldn't possibly define the interface I already implemented, right?)

I'll look at the arguments for assuming each of the above groups is the

owner, and consider some of surprises if we make that assumption.













Some other questions I'm interested to explore in the course of the talk

are: Does it matter who owns the interface?  What sort of problems can

result when ownership of the interface is unclear?  If multiple groups

can (legitimately) claim ownership of interface, how can we minimize the

conflicts, limitations, and bugs that might result from the multiple claims?













I can't provide definitive answers on the ownership question (there

probably aren't any), but with this talk I do aim to start some useful

conversations, and I hope that attendees will be able to further educate

me, as well as each other, about the various facets of the topics

described above.

### 添付資料URL

掲載なし

<a id="session-jbecker.txt"></a>
## 36. Configfs

- セッション個別URL: https://blog.linuxplumbersconf.org/2008/program/speakers/getspeaker.php-speaker=jbecker.txt
- Track: Talk / keynote / tutorial
- 日時: Thursday, September 18, 2008 13:30

### Description

There are multiple ways a driver or subsystem may expose its

configuration to userspace.  The goal is the same - an entity in

kernelspace wants to present an observation and/or configuration

interface to userspace.  Creating a easy to use interface is a

challenge.  The methods Linux employs often fit one need well but are

ill-matched for another. 





configfs solves one particular problem: kernel entities that are created

by requests from userspace.  An action from userspace causes the entity

to be created, presenting the attributes by which it can be configured.

An action from userspace is required to remove the entity.  Client

drivers and subsystems respond to these actions.





configfs is intended to coexist alongside sysfs and procfs.  A device

discovered by a kernel driver might present its configuration via sysfs;

the entity was created by a kernel action.  Conversely, the creation of

a netconsole target is an action by the user.  She asks the kernel to

create the new target and then configures it via attributes.





This presentation will discuss the work required to use configfs in a

driver or subsystem, as well as the view seen by userspace attempting to

configure that subsystem.  The netconsole driver's simple use case will

be used to explain the basic concepts.  Emphasis will be made on the

separation between the entities and the filesystem view; a

subsystem should not need to know it is part of a pseudo-filesystem.





The presenter is the author and maintainer of configfs.  It was

originally written to configure the ocfs2 cluster stack.

### 添付資料URL

掲載なし

<a id="session-shemminger.txt"></a>
## 37. Netlink

- セッション個別URL: https://blog.linuxplumbersconf.org/2008/program/speakers/getspeaker.php-speaker=shemminger.txt
- Track: Talk / keynote / tutorial
- 日時: Thursday, September 18, 2008 13:30

### Description

掲載なし

### 添付資料URL

掲載なし

<a id="session-garrett08"></a>
## 38. Microconf Focus

- セッション個別URL: https://blog.linuxplumbersconf.org/2008/program/microconfs/getmc.php-mc=garrett08
- Track: Microconference whole session
- 日時: Thursday, September 18, 2008 13:30

### Description

Power management is an area of increasing interest across both the server and desktop markets. We're going to be looking at how to drive power management forward in Linux, looking beyond system suspend/resume to the runtime power management that's vital in increasing battery life and reducing electricity bills.






Format






Three presentations and a short wrapup.






Microconf Schedule






Total time: 2 hr 30 min





	
		 Time  Session 
	
	
		 0:00  Brief introduction 
	
	
		 0:05  Expanding the Vocabulary of Power management (Mark Gross) 
	
	
		 0:45  Non PM interfaces and PM (Oliver Neukum)
	
	
		 1:25  Break 
	
	
		 1:35  OLPC Power Management Challenges (Deepak Saxena) 
	
	
		 2:15  Wrapup session 
	
	
		 2:30  End

### 添付資料URL

掲載なし

<a id="session-dsaxena.txt"></a>
## 39. OLPC Power Management Challenges

- セッション個別URL: https://blog.linuxplumbersconf.org/2008/program/speakers/getspeaker.php-speaker=dsaxena.txt
- Track: Talk / keynote / tutorial
- 日時: Thursday, September 18, 2008 13:30

### Description

The One Laptop Per Child project faces the challenge of developing a laptop

that can be used for between 10 and 20 hours on a single battery charge. The XO

laptop has been designed with hardware to support these goals such as a low

power CPU and a display controller that can keep the screen in refresh while

the CPU is off. We now face the challenge of improving the software stack to

push the energy envelope further. In this talk, we will summarize some of the

challenges we are facing and some of the modifications we may need to the kernel

and other plumbing layers to achieve our goals. Issues include but are not

limited to:









We would like to aggressively suspend/resume the laptop, putting the system

to sleep anytime the user is not directly interacting with the interface or

using the CPU heavily. To do this in a way that it is not noticeable to the user

requires an extremely fast resume time, which in turn requires rearchitecting

the suspend/resume paths in the kernel to allow for delayed resume of devices

that are not needed for the UI to continue to run.





In addition to reducing the resume time above, we require a method to

trigger sleep based on CPU and device idleness. One option is the "Sleepy Linux"

approach, but there may be other approaches that are more acceptable to upstream

kernel and userpace community.





The XO laptop provides a method to enable/disable wakeup events from its

devices and we have developed custom interfaces via sysfs to enable/disable

these and to determine which event woke us up.  We are interested in exposing

this as a standard platform-level event in the kernel.

### 添付資料URL

掲載なし

<a id="session-mgross.txt"></a>
## 40. Expanding the Vocabulary of Power management

- セッション個別URL: https://blog.linuxplumbersconf.org/2008/program/speakers/getspeaker.php-speaker=mgross.txt
- Track: Talk / keynote / tutorial
- 日時: Thursday, September 18, 2008 13:30

### Description

Power management used to be about turning things on and off, then it was

about putting them into various suspend states, now we find that we need

to include the notations of latency and throughput into the equation.





Power management has lately become an exercise in maximizing the CPU

deep C-state residency on a lightly loaded system.  The next kernel

feature to support this will be the consolidation of timers, DMA

operations, and even interrupts.  The key to doing such things will be

the effective communication of latency expectations of the user

applications to the kernel, via PM_QOS.





In addition to these new concepts becoming part of power management we

are seeing a number of power management middleware ideas pop up.  A

problem I would like to define, and work with the community to solve, is

how can these notions of latency and throughput be expressed in a manner

that scales well with the number of devices and avoids the duplication

of knowledge between kernel and user mode software?





I feel this duplication of knowledge is a bad thing and we need to work

together to define useful and meaning full abstractions that are

portable across kernels, drivers and distributions.  Otherwise we just

have a big mess.

### 添付資料URL

掲載なし

<a id="session-oneukum.txt"></a>
## 41. Non-power management interfaces and power management

- セッション個別URL: https://blog.linuxplumbersconf.org/2008/program/speakers/getspeaker.php-speaker=oneukum.txt
- Track: Talk / keynote / tutorial
- 日時: Thursday, September 18, 2008 13:30

### Description

This talk is about the effect of API design on power management.

In that regard the emphasis is not on the power management API

itself, but on APIs for actual IO and device configuration.













The existing APIs for these purposes are compared to each other

and to the needs of power management. It is shown that certain

features and requirements of these APIs greatly influence the

ease with which power management can be implemented in a driver

in kernel space.









 

Recent trends in hardware and firmware are discussed and their

implications for power management at the kernel level shown.

Particular emphasis is put on device configuration and its

conservation across reduced power states and total loss of

power.

To do so, an introduction is given to techniques to resume

a device from a complete loss of power and thence state.

Consequences of the requirement to fully restore device state

for parts of a driver not involved in traditional power management

are examined. The impact on API design is shown.













Furthermore, it is shown that ordinary patterns of use in

some APIs match closely the simplest pattern used in power

management. Implicit reference counts in APIs are identified

as core components of easy to implement runtime power management.

A strict differentiation between device configuration and

actual IO is proposed as the center piece of API design

with power management in mind.













Synergies and interdependencies among drivers concerning

power management are examined. The factors currently limiting

runtime power management from a kernel perspective are identified.

Strategies for getting the quality of runtime power management

in the kernel to a level where effective runtime power management

will become reality are derived.













Lastly, interactions between drivers concerning power management

operations are discussed. The impact of power management on memory

management is shown. Basic limitations on the interactions with

user space concerning even runtime power management are derived

from those limits.

### 添付資料URL

掲載なし

<a id="session-ttyree.txt"></a>
## 42. Virtualized Development Infrastructure Management with Puppet: Beyond Cloning.

- セッション個別URL: https://blog.linuxplumbersconf.org/2008/program/speakers/getspeaker.php-speaker=ttyree.txt
- Track: Talk / keynote / tutorial
- 日時: Thursday, September 18, 2008 13:30

### Description

Linux virtualization tools have enabled rapid deployment of development

environments, but using these tools to build development infrastructures still

poses a significant challenge in terms of management and delivery over a

development life cycle.  In an ideal world, an infrastructure developer would

be provided a comprehensive and static list of requirements and would deliver

an ideal image that could be used throughout a development, testing, and

deployment cycle.  In reality development projects have changing requirements

over time that demand corresponding refactoring of the development

infrastructure. 





Simply cloning instances is an inefficient way to manage changes to

development environments over the lifecycle of a project.  New images must be

created, distributed, and refreshed anytime infrastructure requirements

change.  The process of updating images is not granular and does not provide a

method of tracking changes over time.  Old images are often stored as a way to

revert back to a previous state.  This foil ball approach becomes even more

challenging once integration testing across multiple distributions or

operating systems is introduced.





We will discuss using Puppet as a tool to enable infrastructure developers to

granularly manage changes to development infrastructures over the life of a

project.  Additionally we will explain how Puppet enables infrastructure

developers to define cross distribution configurations reducing the overhead

of managing development and testing environments on multiple distributions.

Ultimately, we hope to demonstrate how Puppet can be leveraged to create

manageable, distributable, and version controlled infrastructures for

development, testing, and deployment.





Topics that will be covered:





    managing development environments using Puppet and virtualization



    using Ralsh to document and capture development environment

    requirements and as a system interface for developers



    puppet as a tool for managing cross distribution development



    deployment, life cycle management, and version controlled

    infrastructures

### 添付資料URL

掲載なし

<a id="session-mwong.txt"></a>
## 43. Filesystem Statistics

- セッション個別URL: https://blog.linuxplumbersconf.org/2008/program/speakers/getspeaker.php-speaker=mwong.txt
- Track: Talk / keynote / tutorial
- 日時: Thursday, September 18, 2008 13:30

### Description

The Linux operating system provides a number of file systems that can

be used, as well as volume management and hardware or software RAID.

We are running performance benchmarks for database tuning, and are

curious if the file systems really behave like we expect them to,

especially when used in conjunction with RAID or volume management.

Are these file systems being used in manners for which they were

designed?  There is also more to file systems than how fast we can

read to them or how fast we can write to them.  How reliable is the

file system, and how do be prove it?  We have collected data and will

have a server available for development during the conference.

### 添付資料URL

掲載なし

<a id="session-mpetersen.txt"></a>
## 44. Linux Data Integrity

- セッション個別URL: https://blog.linuxplumbersconf.org/2008/program/speakers/getspeaker.php-speaker=mpetersen.txt
- Track: Talk / keynote / tutorial
- 日時: Thursday, September 18, 2008 13:30

### Description

A recent addition to the SCSI protocol called DIF allows protection

information to be exchanged between controller and disk.  Each sector

of the I/O can be augmented with a blob of integrity metadata which

includes a checksum and some knobs that ensure that each portion of

the I/O is written in order and to the right place on disk.  The SCSI

controller generates the integrity metadata, and disk arrays and

harddrives can verify that the I/O is intact before they write it and

acknowlege the request.













Oracle has worked with several industry partners to extend this

capability so that it is now possible to transfer the integrity

metadata to and from system memory.  This allows the integrity

metadata to be prepared by for example the filesystem and submitted

with the request to the lower layers.  The core of the data integrity

infrastructure was included in the upstream kernel during the 2.6.27

merge window.













The next step is figuring out how to expose the integrity metadata to

user applications.  Ideally, the checksums would be generated in close

proximity to the original data within the user application context.

And the application (or library) would know what to do in case an

error got returned from the I/O subsystem.













The traditional UNIX programming API emerged from the following usage

model:













   cat foo | frob | mangle > bar













An error would cause the pipeline to break, causing the operator at

the teletype to fix the problem and reissue the commands.  Each

program did one simple thing and its lifetime was short.

Consequently, returning -EIO and deferring error handling to the

operating system/operator was reasonable behavior.













These days applications run for days/weeks/months/years and few of

them are simple filters working on byte streams.  Furthermore, the

data input into these programs is no longer a reproducible result of

the preceding command in the pipeline.  The data is generated within

the context of the application using input from the user and the

network.  This means that if committing the write to permanent storage

fails for whatever reason, the data is essentially lost.  It has

become imperative to ensure that data is safely and correctly written.













Given the limitations of POSIX read()/write() and friends, how to we

implement a more rugged and data integrity-aware I/O submission

interface?  Preferably one that's close enough to the existing API

that it stands a chance of becoming successful?  The POSIX async I/O

API does provide some of the required features but hardly anybody use

it.  And Linux implements it poorly.  So where do we go from here?

### 添付資料URL

掲載なし

<a id="session-jkeniston.txt"></a>
## 45. systemtap Tutorial

- セッション個別URL: https://blog.linuxplumbersconf.org/2008/program/speakers/getspeaker.php-speaker=jkeniston.txt
- Track: Talk / keynote / tutorial
- 日時: Thursday, September 18, 2008 16:30

### Description

Systemtap is a tool for system-wide tracing, debugging, and

performance analysis.  This tutorial presents systemtap to the

prospective user.  We provide a brief overview, explain how to get

started with systemtap, and illustrate the features of systemtap's

scripting language through a series of sample scripts.  We explain how

to use the tapsets (script libraries) provided with systemtap, and how

to create your own tapsets.





 This tutorial supplements Frank Eigler's talk, "systemtap's

capabilities, limitations, and implementation".  Frank's talk focuses

primarily on design and implementation issues; this tutorial will give

attendees more insight into how systemtap is used.  Frank will assist in

the tutorial.

### 添付資料URL

掲載なし

<a id="session-packard08"></a>
## 46. Microconf Focus

- セッション個別URL: https://blog.linuxplumbersconf.org/2008/program/microconfs/getmc.php-mc=packard08
- Track: Microconference whole session
- 日時: Friday, September 19, 2008 09:00

### Description

What is the theme of your session? What are the short-to-medium-term challenges facing this area? If you could fix one thing, what would it be? 






Format






 Do you want presentations? Open discussions? Coding time? A series of 5-minute lightning talks? 






Sample Microconf Schedule






Total time: 2 hr 30 min





Sample, please schedule how you want, this is a placeholder!





	
		 Time  Session 
	
	
		 0:00  Presentation 1 
	
	
		 0:30  Presentation 2 
	
	
		 1:00  Lightning Talks 
	
	
		 1:30  Break 
	
	
		 1:45  Discussion/Round Table 
	
	
		 2:15  Next Steps (by MC Runner) 
	
	
		 2:30  End 
	




Takeaway






 Are you looking for a decision to be made? To clear up a confusion? More participants in an area? Just meet people face-to-face?

### 添付資料URL

掲載なし

<a id="session-airlie.txt"></a>
## 47. Graphics Drivers in the Kernel : 20 years late.

- セッション個別URL: https://blog.linuxplumbersconf.org/2008/program/speakers/getspeaker.php-speaker=airlie.txt
- Track: Talk / keynote / tutorial
- 日時: Friday, September 19, 2008 09:00

### Description

So back in the hazy dark days when there was lots of i386 UNIXes and nobody

wanted to write kernel drivers, XFree86 started the trend of putting all

the graphics drivers into userspace. Other non-x86 UNIXes kept going with

putting GPU drivers into the kernel. Linux continued on (un?)happily for many years

with this model, until a lot of the problems with having drivers in userspace became apparent.







Suspend/resume really wants a kernel driver that knows the complete state of the hardware. Doing a VT switch to text mode and praying the BIOS could resume the hardware isn't winning (too slow, doesn't always work..) 



Multiple drivers for the same piece of hardware. To workaround the lack of text mode on non-x86 hw, fbdev was born. x86 people wanted nice graphics with out X, fbdev drivers came to x86 also. Direct rendering for 3D cards showed the need to have a kernel driver, so the drm was created. Having all these bits banging on the hardware in their own way was a recipie for disaster. Also having a kernel driver controlled from userspace like the drm was a real main to maintain.

 

boot up flickering and oops displaying. OMG my eyes, VT switch, flicker, MacOSX doesn't do this, you suck etc. We can't see an oops, so instead of a BSOD we get a dead X. 



Doing graphics without X.  One of the hardest things about replacing X is that you need to have drivers for all the myriad versions of GPUS as X includes the drivers. Moving this code to one place in the kernel will make future replacements for X a lot easier job.







So this talk discusses the hows of kernel modesetting, what pieces of the

drivers are being moved into the kernel, the APIs being exposed to allow

this, and some discussion on the future directions for Linux graphics

once we have the drivers available in the kernel.

### 添付資料URL

掲載なし

<a id="session-cworth.txt"></a>
## 48. Plumbing the graphics pipeline

- セッション個別URL: https://blog.linuxplumbersconf.org/2008/program/speakers/getspeaker.php-speaker=cworth.txt
- Track: Talk / keynote / tutorial
- 日時: Friday, September 19, 2008 09:00

### Description

So, you're a Linux Plumber and you've got a graphics operation that's

not performing well. Let's say your web browser isn't scrolling

smoothly. What gunk are you going to find when you get down under the

sink and start looking at the pipes?





This talk will start with a simple, common graphics operation and

follow it in detail through every layer in the system: application,

toolkit, graphics library, X client library, X protocol, X server

acceleration architecture, X driver, and Linux kernel driver. As can

happen with old pipes, there's sure to be some nasty buildup along the

way, but getting down and dirty with this stuff is an important step

in fixing it.

### 添付資料URL

掲載なし

<a id="session-jkumar.txt"></a>
## 49. Future Displays and Input Devices

- セッション個別URL: https://blog.linuxplumbersconf.org/2008/program/speakers/getspeaker.php-speaker=jkumar.txt
- Track: Talk / keynote / tutorial
- 日時: Friday, September 19, 2008 09:00

### Description

E-Paper displays and their controllers present some interesting new

problems to the Linux kernel, framebuffer subsystem and userspace

elements.





Recent e-paper controllers such as those from E-Ink are

interfaced to the host in unusual ways. For example, as a secondary

device feeding on the output of a system's native display controller

while also receiving some control over GPIO. Some have integrated

input capability and as a result a display controller is also

multiplexed as a input device. Many e-paper technologies such as

electrophoretic, and cholesteric displays have high latencies (on the

order of 200ms - 4s) for display updates while having large

resolutions (1200x842). This latency and the non-memory mappable IO

interfaces typically used by the controllers increases the complexity

associated with treating them as traditional framebuffers and using

regular memory management.





This presentation will provide an overview

of these displays and their controllers and then discuss the

approaches that are currently in-progress to support them on Linux.

This presentation may be of interest to memory management, fbdev and

userspace windowing/input developers. The submitter is the author of

E-Ink display controller drivers, a deferred IO framework and a few

other drivers in the Linux kernel.

### 添付資料URL

掲載なし

<a id="session-romanick.txt"></a>
## 50. OpenGL 3.0

- セッション個別URL: https://blog.linuxplumbersconf.org/2008/program/speakers/getspeaker.php-speaker=romanick.txt
- Track: Talk / keynote / tutorial
- 日時: Friday, September 19, 2008 09:00

### Description

OpenGL 3.0 is scheduled to be released at SIGGRAPH 2008 this August. This is

the first major update to the OpenGL specification in two years. This major

release contains numerous changes.  Some of the changes are expected, and some

are not.  In addition, some changes that were expected to be made were not

made.  In this presentation, Ian will outline the changes made in OpenGL 3.0

and outline the expected path forward for future versions of the OpenGL

specification.

### 添付資料URL

掲載なし

<a id="session-zeuthen08"></a>
## 51. Desktop Integration

- セッション個別URL: https://blog.linuxplumbersconf.org/2008/program/microconfs/getmc.php-mc=zeuthen08
- Track: Microconference whole session
- 日時: Friday, September 19, 2008 09:00

### Description

What is desktop integration? What does it mean? Is there a right way to do it? And a wrong way? Who are the stakeholders? And do the stakeholders communicate and if so, how?





In GNU/Linux, we probably have the best CPU scheduler around, the most awesome virtual memory subsystem, a kick-ass IPC system but at the end of the day (whether it's fair or not) many many people dismiss an OS unless things Just Work™. Yet, other people dismiss the OS if they can't configure exactly the way they want. And that's why we have many different desktops and OS distributions. Sometimes each with their own verions of the same bugs.





Desktop integration can be characterized as defining, providing and maintaing interfaces to make a wide range of experiences easy to implement and maintain. As the desktop is the top-level user interface for a wide range of users, desktop integration is thus concerned with ensuring that proper interfaces are available. One important part that we all should be using the same code (thus benefitting from each others bug fixes) or at the very least the same interfaces. Desktop integration can be thought of as a way to avoid huge incompatible silos.





In this MC I'd like to attempt to answer some of these questions, find some common ground and come up with recommendations on how to improve the eco system around the free desktop. I'd like the MC to be very specific and focus on real world problems.






Format






The MC will start with presentation (I'm planning to give it) that gives an detailed overview of desktop GNU/Linux anno 2008 with respect to the current state of the art of desktop integration and what's planned. This will include a brief account of all the shared code and specifications used by the two major desktops (GNOME and KDE).





For the second presentation I think I've convinced William Jon McCann to give a presentation about the session management, login management and authentication problems he's working on. This includes making things like fast-user-switching, multi-seat, terminal services and modern multi-factor authentication (this includes an awesome rant about PAM) Just Work™.





After that I'd like to have a round-table discussion where we identify the most urgent (or concrete) topics to focus on and we'll form 2-3 breakout sessions to work on these. Then we'll conclude with with short presentations from the breakout sessions.






Microconf Schedule






Total time: 2 hr 30 min





	
		 Time  Session 
	
	
		 0:00  Desktop Integration in GNU/Linux in 2008 (davidz) 
	
	
		 0:20  Login Managers, Sessions and the Authentication Problem (jmccann) 
	
	
		 0:55  Service Management and Upstart (sjremnant) 
	
	
		 1:20  Break 
	
	
		 1:35  Discussion/Round Table 
	
	
		 2:30  End 
	




Takeaway






Kernel hackers, core userland software maintainers, desktop applications developers, with a keen interest in improving the desktop experience on GNU/Linux is encouraged to show up.

### 添付資料URL

掲載なし

<a id="session-jmccann.txt"></a>
## 52. Interface design for authentication, and session management

- セッション個別URL: https://blog.linuxplumbersconf.org/2008/program/speakers/getspeaker.php-speaker=jmccann.txt
- Track: Talk / keynote / tutorial
- 日時: Friday, September 19, 2008 09:00

### Description

Jon will present some of his experiences with trying to design a good user

experience for user identification, authentication, and session

management.  This will include some ideas on how to make

fast-user-switching, multi-seat, terminal services, and modern

authentication methods work better.  Most of these goals will require

the top to bottom integration and cooperation of interfaces and

services.

### 添付資料URL

掲載なし

<a id="session-sjremnant.txt"></a>
## 53. Upstart 1.0 Plans

- セッション個別URL: https://blog.linuxplumbersconf.org/2008/program/speakers/getspeaker.php-speaker=sjremnant.txt
- Track: Talk / keynote / tutorial
- 日時: Friday, September 19, 2008 09:00

### Description

Linux has always traditionally lacked good service management

facilities, so much so that the typical daemon doesn't use what

ones we have and relies instead on hokey shell scripts.





This talk will show how Upstart not only solves this problem, by

providing a D-Bus interface to service management usable by and for

every daemon (including the D-Bus daemon itself!), but also how,

through integration with DeviceKit and similar frameworks, allows

services to be tied to hardware and system state, thus reducing

overall resource usage.

### 添付資料URL

掲載なし

# BoF Wiki

## Solid State Drives

一覧の記載: Solid State Drives: Wednesday 14:30-16:00, room 236

- 個別URL: https://wiki.linuxplumbersconf.org/bof_solid_state_drives
- 出典: https://wiki.linuxplumbersconf.org/bofschedule

### Description

未掲載／ページ未作成

### 添付資料URL

掲載なし

## SCSI Multiqueue

一覧の記載: SCSI Multiqueue: Wednesday 16:30-17:30, room 294

- 個別URL: https://wiki.linuxplumbersconf.org/bof_scsi_multiqueue
- 出典: https://wiki.linuxplumbersconf.org/bofschedule

### Description

未掲載／ページ未作成

### 添付資料URL

掲載なし

## Systemtap

一覧の記載: Systemtap: Wednesday 17:30-18:30, room <del>323</del> 326

- 個別URL: https://wiki.linuxplumbersconf.org/bof_systemtap
- 出典: https://wiki.linuxplumbersconf.org/bofschedule

### Description

未掲載／ページ未作成

### 添付資料URL

掲載なし

## DVB

一覧の記載: DVB: Thursday 10:00-12:30, room 323

- 個別URL: https://wiki.linuxplumbersconf.org/bof_dvb
- 出典: https://wiki.linuxplumbersconf.org/bofschedule

### Description

未掲載／ページ未作成

### 添付資料URL

掲載なし

## V4L

一覧の記載: V4L: Thursday 16:00-18:30, room 323

- 個別URL: https://wiki.linuxplumbersconf.org/bof_v4l
- 出典: https://wiki.linuxplumbersconf.org/bofschedule

### Description

未掲載／ページ未作成

### 添付資料URL

掲載なし

## linux filesystems BOF

一覧の記載: linux filesystems BOF: Thursday 16:30-18:30, room 294

- 個別URL: https://wiki.linuxplumbersconf.org/linux_fs_bof
- 出典: https://wiki.linuxplumbersconf.org/bofschedule

### Description

未掲載／ページ未作成

### 添付資料URL

掲載なし

## Message Signalled Interrupts

一覧の記載: Message Signalled Interrupts: Thursday 16:30-17:30, room 333

- 個別URL: https://wiki.linuxplumbersconf.org/bof_msi
- 出典: https://wiki.linuxplumbersconf.org/bofschedule

### Description

未掲載／ページ未作成

### 添付資料URL

掲載なし

## Plumbing in LSB

一覧の記載: Plumbing in LSB: Thursday 17:00-18:00, room 326

- 個別URL: https://wiki.linuxplumbersconf.org/bof_lsb
- 出典: https://wiki.linuxplumbersconf.org/bofschedule

### Description

未掲載／ページ未作成

### 添付資料URL

掲載なし


# 学生ミニカンファレンス

## Professionalism for geeks (Introduction to conference attendance) - Brandon Philips

- 個別URL: 未掲載
- 出典: https://blog.linuxplumbersconf.org/2008/program/students/index.html

### Description

未掲載／ページ未作成

### 添付資料URL

掲載なし

## How to get paid/credit for open source - Sarah Sharp

- 個別URL: 未掲載
- 出典: https://blog.linuxplumbersconf.org/2008/program/students/index.html

### Description

未掲載／ページ未作成

### 添付資料URL

掲載なし

## Linux social engineering - Randy Dunlap

- 個別URL: 未掲載
- 出典: https://blog.linuxplumbersconf.org/2008/program/students/index.html

### Description

未掲載／ページ未作成

### 添付資料URL

掲載なし

## Creating a development box - Mark Gross

- 個別URL: 未掲載
- 出典: https://blog.linuxplumbersconf.org/2008/program/students/index.html

### Description

未掲載／ページ未作成

### 添付資料URL

掲載なし

## Student lightning talks

- 個別URL: 未掲載
- 出典: https://blog.linuxplumbersconf.org/2008/program/students/index.html

### Description

未掲載／ページ未作成

### 添付資料URL

掲載なし

## Device Drivers - Kristin Carlson Accardi

- 個別URL: 未掲載
- 出典: https://blog.linuxplumbersconf.org/2008/program/students/index.html

### Description

未掲載／ページ未作成

### 添付資料URL

掲載なし

## Debugging - Steve Rostedt

- 個別URL: 未掲載
- 出典: https://blog.linuxplumbersconf.org/2008/program/students/index.html

### Description

未掲載／ページ未作成

### 添付資料URL

掲載なし

## Concurrency and race conditions - Paul McKenney

- 個別URL: 未掲載
- 出典: https://blog.linuxplumbersconf.org/2008/program/students/index.html

### Description

未掲載／ページ未作成

### 添付資料URL

掲載なし

## Future of open source - Jay Lyman

- 個別URL: 未掲載
- 出典: https://blog.linuxplumbersconf.org/2008/program/students/index.html

### Description

未掲載／ページ未作成

### 添付資料URL

掲載なし

## Open source career panel

- 個別URL: 未掲載
- 出典: https://blog.linuxplumbersconf.org/2008/program/students/index.html

### Description

未掲載／ページ未作成

### 添付資料URL

掲載なし


# スケジュール未掲載の発表者ページ


# 学生プログラム全体（原文）

LPC Student Mini-conference



The LPC planning committee is pleased to announce the addition of a Student Mini-conference for student attendees of the Linux Plumbers Conference 2008.



When:

09:00-17:00, September 16, 2008


Where:

PSU Business Accelerator

2828 SW Corbett Ave

Portland, OR 97201



The LPC Student Mini-conference prepares students to attend the Linux Plumbers Conference through an introduction to debugging techniques, open source community processes, and common issues across plumbing projects.  Hands-on-tutorials from Linux-plumbing community members round out the program.



Schedule







8:45 - Student sign-in begins


9:30 - Professionalism for geeks (Introduction to conference attendance) - Brandon Philips


9:45 - How to get paid/credit for open source - Sarah Sharp


10:00 - Linux social engineering - Randy Dunlap


10:45 - Creating a development box - Mark Gross


11:30 - Student lightning talks


12:00 - Free lunch


1:00 - Device Drivers - Kristin Carlson Accardi


1:45 - Debugging - Steve Rostedt


2:30 - break


3:00 - Concurrency and race conditions - Paul McKenney


3:45 - Future of open source - Jay Lyman


4:15 - Open source career panel


5:00 - Wrap up





We encourage students to give a short (1-3 minutes) lightning talk about what open source projects they're working on, or would like to work on.  To break the ice, the LPC student planning committee will talk about their projects first.  Lightning talks will happen shortly before lunch.



The open source career panel will include representatives from six different
companies who contribute to or use open source products.  The six panelists are
Jim Blandy (the Mozilla Corporation), Steven Rostedt (Red Hat), Pete Graner
(Canonical), Andrew Greenberg  (The Tova Company), Ted Tso (IBM), and Inaky
Perez-Gonzalez (Intel).  Students should come prepared with questions to ask
our career panel participants.



Tuesday evening events


Attendees of the LPC Student Mini-conference are encouraged to attend all Linux Plumber's Conference evening events.  The Tuesday night event at the Aura Lounge starts at 7:00pm and will allow minors until 10:00pm.



Attendees who are minors can gather at Backspace to continue socializing.  There is free wifi, pool, and cafe drinks/snacks.




Lodging



The  Portland NW Youth Hostel Group Center has rooms at $25/night.  Students should make arrangements with the Youth Hostel.


# 個別URLのないスケジュール枠

## Student registration

- 個別URL: 未掲載
- 日時: Tuesday, September 16, 2008 08:30
- Description: 未掲載

## LPC Student Mini-conference

- 個別URL: 未掲載
- 日時: Tuesday, September 16, 2008 09:00
- Description: 未掲載

## Joint Kernel Summit/LPC Event at Aura Lounge sponsored by IBM. First opportunity to check-in in to LPC registration.

- 個別URL: 未掲載
- 日時: Tuesday, September 16, 2008 19:00
- Description: 未掲載

## Registration check-in at Aura Lounge

- 個別URL: 未掲載
- 日時: Tuesday, September 16, 2008 19:00
- Description: 未掲載

## Aura Lounge closes to minors at 10pm. All ages gathering at Backspace

- 個別URL: 未掲載
- 日時: Tuesday, September 16, 2008 21:30
- Description: 未掲載

## Check-in and breakfast

- 個別URL: 未掲載
- 日時: Wednesday, September 17, 2008 08:00
- Description: 未掲載

## Main registration closed

- 個別URL: 未掲載
- 日時: Wednesday, September 17, 2008 09:00
- Description: 未掲載

## Welcome to LPC and Sponsor Introductions

- 個別URL: 未掲載
- 日時: Wednesday, September 17, 2008 08:45
- Description: 未掲載

## Lunch (on your own)

- 個別URL: 未掲載
- 日時: Wednesday, September 17, 2008 12:30
- Description: 未掲載

## Snack sponsored by Intel

- 個別URL: 未掲載
- 日時: Wednesday, September 17, 2008 16:00
- Description: 未掲載

## Working Session

- 個別URL: 未掲載
- 日時: Wednesday, September 17, 2008 16:30
- Description: 未掲載

## Working Session

- 個別URL: 未掲載
- 日時: Wednesday, September 17, 2008 16:30
- Description: 未掲載

## Working Session

- 個別URL: 未掲載
- 日時: Wednesday, September 17, 2008 16:30
- Description: 未掲載

## LPC Event at the Portland Art Museum Fields Ballroom sponsored by Intel

- 個別URL: 未掲載
- 日時: Wednesday, September 17, 2008 19:00
- Description: 未掲載

## Breakfast sponsored by NetApp

- 個別URL: 未掲載
- 日時: Thursday, September 18, 2008 08:00
- Description: 未掲載

## Lunch (on your own)

- 個別URL: 未掲載
- 日時: Thursday, September 18, 2008 12:30
- Description: 未掲載

## Snack

- 個別URL: 未掲載
- 日時: Thursday, September 18, 2008 16:00
- Description: 未掲載

## Working Session

- 個別URL: 未掲載
- 日時: Thursday, September 18, 2008 16:30
- Description: 未掲載

## Working Session

- 個別URL: 未掲載
- 日時: Thursday, September 18, 2008 16:30
- Description: 未掲載

## Working Session

- 個別URL: 未掲載
- 日時: Thursday, September 18, 2008 16:30
- Description: 未掲載

## Cocktails, Littman Gallery, Smith Center 2nd floor sponsored by NetApp

- 個別URL: 未掲載
- 日時: Thursday, September 18, 2008 18:00
- Description: 未掲載

## Dinner (on your own)

- 個別URL: 未掲載
- 日時: Thursday, September 18, 2008 19:30
- Description: 未掲載

## Breakfast sponsored by IBM

- 個別URL: 未掲載
- 日時: Friday, September 19, 2008 08:00
- Description: 未掲載

## MicroConfs Report-Outs

- 個別URL: 未掲載
- 日時: Friday, September 19, 2008 11:30
- Description: 未掲載

## Conference Closing

- 個別URL: 未掲載
- 日時: Friday, September 19, 2008 12:30
- Description: 未掲載


# 出典

- https://blog.linuxplumbersconf.org/2008/program/schedule/index.html
- https://wiki.linuxplumbersconf.org/bofschedule
- https://blog.linuxplumbersconf.org/2008/program/students/index.html
