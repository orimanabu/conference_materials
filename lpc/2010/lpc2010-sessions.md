# Linux Plumbers Conference 2010 全セッション一覧

出典: https://blog.linuxplumbersconf.org/2010/ocw/events/LPC2010/schedule

2010年はプログラムから基調講演・通常発表・MC・BoFを参照する構成。実施枠はスケジュールに個別URLがある47件を基準に収録（MC全体枠14件を含む）。Descriptionは個別ページのAbstract原文を保持し、One Line Summaryは別項目とする。元のwww.linuxplumbersconf.org URLはアーカイブのblog.linuxplumbersconf.orgに解決し、異なる元URLはoriginal_session_urlとして記録。スライドとEtherpadリンクを個別ページ・スケジュール双方から抽出。トラック一覧のスケジュール未掲載項目は、/sessions/の個別ページと/proposals/の提案ページを補足で区別し、開催済みとは断定しない。MCの議題はリンク先Wiki本文も補足として収録。取得できない個別ページではAbstractを補完せず、MCトラック説明を使える場合のみ別のdescription_sourceとして保持し、他は空欄とする。リダイレクト等の取得エラーはretrieval_errorに記録。添付本体の取得・リンク有効性検査は未実施。

セッション: 47件 / Descriptionあり: 47件 / 資料あり: 32件 / 資料項目: 32件

## 目次

1. [The kernel report](#session-sessions-417)
2. [License To Kill…Your Code...](#session-sessions-531)
3. [Boot and Init](#session-sessions-87)
4. [Real-Time](#session-sessions-93)
5. [Linux Multitenant File Servers using Likewise-CIFS](#session-sessions-501)
6. [Next Steps In File Permission Models](#session-sessions-495)
7. [Hot and cold data management in filesystem](#session-sessions-219)
8. [Desktop](#session-sessions-591)
9. [Power Management](#session-sessions-183)
10. [VirtFS—A paravirtual File System pass-through in KVM/QEMU](#session-sessions-597)
11. [Patchwork: pursuing productive project participation](#session-sessions-297)
12. [Containers checkpoint/restart](#session-sessions-1017)
13. [Power On war stories](#session-sessions-963)
14. [State of the kernel: license "wise".](#session-sessions-1143)
15. [Ext4 snapshots](#session-sessions-1191)
16. [Kernel Debugging](#session-sessions-1173)
17. [Kicking the Tires of The Yocto Project](#session-sessions-1221)
18. [Embedded Linux easier](#session-sessions-411)
19. [libferris: everything is a filesystem, and filesystems are everything.](#session-sessions-57)
20. [Perf Tools: Recent Improvements](#session-sessions-579)
21. [Audio](#session-sessions-177)
22. [User-visible Networking Issues](#session-sessions-465)
23. [Testing the real-time Kernel on Arbitrary Hardware.](#session-sessions-645)
24. [Runtime Power Management in the PCI Subsystem](#session-sessions-279)
25. [Porting the Linux kernel to a new architecture, done right](#session-sessions-237)
26. [Tracing (Part I)](#session-sessions-105)
27. [Virtualization (Part I)](#session-sessions-117)
28. [The state of video](#session-sessions-399)
29. [Linux Graphics Directions](#session-sessions-483)
30. [The Linux Bluetooth Stack](#session-sessions-477)
31. [Tracing (Part II)](#session-sessions-1203)
32. [Virtualization (Part II)](#session-sessions-1209)
33. [The Challenge of Mobile Broadband](#session-sessions-363)
34. [Unified energy-aware scheduling](#session-sessions-381)
35. [Challenges with networking in mobile devices](#session-sessions-609)
36. [Hardware detection BoF](#session-sessions-921)
37. [Idle scheduling support in the Linux Kernel](#session-sessions-519)
38. [Embedded](#session-sessions-63)
39. [File and Storage Systems](#session-sessions-201)
40. [Linux HTPC](#session-sessions-189)
41. [Wi-Fi Direct on Linux](#session-sessions-639)
42. [API for Real-Time Scheduling with Temporal Isolation on Linux](#session-sessions-669)
43. [High Availability Clustering](#session-sessions-711)
44. [Multimedia Infrastructure](#session-sessions-621)
45. [Optimizing the QEMU/KVM Storage Stack](#session-sessions-651)
46. [TCP-NV: Congestion Avoidance for Data Centers](#session-sessions-525)
47. [The wonderful world of LibreOffice](#session-sessions-1179)

<a id="session-sessions-417"></a>
## 1. The kernel report

- セッション個別URL: https://blog.linuxplumbersconf.org/2010/ocw/sessions/417
- Track: Keynote
- 日時: Wednesday, November 3, 2010 9:00 – 9:45am

### Description

The Linux kernel is at the core of any Linux system; the performance and

capabilities of the kernel will, in the end, place an upper bound on what

the system as a whole can do.  This talk will review recent events in the

kernel development community, discuss the current state of the kernel and

the challenges it faces, and look forward to how the kernel may address

those challenges.  Also included will be information on any interesting decisions made at the Kernel Summit held immediately prior to LPC.

### 添付資料URL

- [slides](https://blog.linuxplumbersconf.org/2010/ocw/system/presentations/417/original/kreport.pdf)（file）


### One Line Summary

The kernel: where it is, how it got there, and where it's going.
<a id="session-sessions-531"></a>
## 2. License To Kill…Your Code...

- セッション個別URL: https://blog.linuxplumbersconf.org/2010/ocw/sessions/531
- Track: Refereed Presentations
- 日時: Wednesday, November 3, 2010 10:00 – 10:45am

### Description

There is just one technical criterion that makes software, “open source” software. The license. It is necessary and sufficient. Of course the Open Source movement is much much larger than that, but without the license there is no movement.

Many open source projects neglect or trivialize licensing matters such that it negatively affects commercial viability of their Open Source Software (OSS). Many projects are licensed under a dozen or more licenses, yet many believe just one license applies. Often, licensing terms are poorly implemented within a project which leads to end users not being granted the necessary permissions to use and share the software. Just as the lack of software discipline can lead to bad code and poor usability, the lack of license understanding and execution can cripple the legitimate usability of open source software.

We provide 7 important rules of thumb for managing source code licensing terms.  These guidelines, if followed, would enable open source projects to avoid common pitfalls that prevent millions of end users from being grant the required permissions to use and share the code.

You will never look at open source licensing the same way again.

### 添付資料URL

掲載なし


### One Line Summary

Just as the lack of software discipline can lead to bad code and poor usability, the lack of license understanding and execution can cripple the legitimate usability of open source software.
<a id="session-sessions-87"></a>
## 3. Boot and Init

- セッション個別URL: https://blog.linuxplumbersconf.org/2010/ocw/sessions/87
- Track: Boot and Init
- 日時: Wednesday, November 3, 2010 10:00am – 12:30pm

### Description

This miniconf is focused on the linux init system, improving boot speed, and init infrastructure including upstart, systemd, udev, among others.

Wiki

Etherpad Notes

### 添付資料URL

- [Etherpad Notes](http://etherpad.osuosl.org/lpc2010-boot-and-init)（link）


### One Line Summary

Early initialization and alternatives to traditional unix init. "Wiki":http://wiki.linuxplumbersconf.org/2010:early_boot_and_init_systems "Etherpad":http://etherpad.osuosl.org/lpc2010-boot-and-init
<a id="session-sessions-93"></a>
## 4. Real-Time

- セッション個別URL: https://blog.linuxplumbersconf.org/2010/ocw/sessions/93
- Track: Real Time
- 日時: Wednesday, November 3, 2010 10:00am – 12:30pm

### Description

The Real-Time preemption patch started in 2004 and large parts of the development has been integrated into the mainline kernel and into the affected user space libraries. There are still parts which need to be worked on for upstream inclusion.

The Real-Time track provides a discussion forum for ongoing and related work.

Wiki

EtherPad notes

### 添付資料URL

- [EtherPad notes](http://etherpad.osuosl.org/lpc2010-real-time)（link）


### One Line Summary

Real Time Linux discussions "Wiki":http://wiki.linuxplumbersconf.org/2010:real-time_response_for_full_foss_linux_stack "EtherPad":http://etherpad.osuosl.org/lpc2010-real-time
<a id="session-sessions-501"></a>
## 5. Linux Multitenant File Servers using Likewise-CIFS

- セッション個別URL: https://blog.linuxplumbersconf.org/2010/ocw/sessions/501
- Track: Refereed Presentations
- 日時: Wednesday, November 3, 2010 10:50 – 11:35am

### Description

Internet based services such as Web and Email have long supported the concept of virtual domain hosting.  However, Intranet based file services, such as NFS and CIFS, have often lagged behind with such features.  The challenges in providing multitenant support for any application include, but are not limited to, the following items:

Separating run-time state for each authentication domain from one another


	Routing requests to the appropriate authentication


	Managing global operating system configuration and data files

File server consolidation is an ongoing activity both in the Intranet and in the cloud.  Multitenant file servers provide the most efficient use of storage and hardware capabilities without the additional overhead of virtual machines or multi-instance solutions used to segregate client security domains.  Likewise-CIFS, the file server component of the Likewise Open project, provides an administrator with the ability to join an SMB/CIFS file server to more than one Microsoft Active Directory domain which in turn allows him to migrate aging file servers from any number of AD domains to a single host and manage security, backups, and data policies in a central location.

The Likewise-CIFS suite is composed of two main run time services and several smaller supporting components.  The heart of authentication is the Likewise Security Authority (lsassd) and the I/O path is managed by the Likewise I/O Manager (lwiod).  The lwiod daemon supplies a loadable driver interface for the SMB/CIFS protocol module (SRV) and the user-space File System Driver implementation (PVFS).

This presentation will explain the internal architecture decisions made to enable multitenancy in lsassd, how this impacts the configuration, authentication, and authorization features in the SMB/CIFS file server, and how data protection is enforced in the PVFS driver once data is written to stable storage.

### 添付資料URL

- [slides](https://blog.linuxplumbersconf.org/2010/ocw/system/presentations/501/original/Likewise-Multi-Domain-Lsass.pdf)（file）


### One Line Summary

The paper will explain the architecture used by the Likewise-CIFS file server to enable Linux hosts to concurrently operate as a member of multiple Microsoft Active Directory domains.
<a id="session-sessions-495"></a>
## 6. Next Steps In File Permission Models

- セッション個別URL: https://blog.linuxplumbersconf.org/2010/ocw/sessions/495
- Track: Refereed Presentations
- 日時: Wednesday, November 3, 2010 11:40am – 12:25pm

### Description

Linux is behind other UNIX-like operating systems like Solaris in terms of Windows interoperability because of its lack of support for file permission models beyond POSIX ACLs.  More advanced file permission models have been implemented, but are still outside the mainline kernel (for example, http://acl.bestbits.at/richacl/ ).

This presentation will discuss the vfs and file system changes needed to implement advanced file permission models, explain the requirements for such models, and show how a specific implementation meets those requirements (richacls).

### 添付資料URL

掲載なし


### One Line Summary

Why POSIX ACLs are not enough and how to replace them
<a id="session-sessions-219"></a>
## 7. Hot and cold data management in filesystem

- セッション個別URL: https://blog.linuxplumbersconf.org/2010/ocw/sessions/219
- Track: Refereed Presentations
- 日時: Wednesday, November 3, 2010 1:30 – 2:15pm

### Description

Many enterprise storage solution providers today now offer enterprises cutting-edge hybrid storage, which is a new innovation that integrate solid state drives with traditional disks. That is a way to boost performance 

without having to make a big investment into new infrastructure. How to manage data more efficiently over hybrid storage to exploit SSD high performance from applications becomes a key issue. Very often applications that require high performance – extremely fast access to data – and they may have data that don’t have such immediate access needs.  However,  Linux treats all data equally the same when placing them on underlying devices. So this talk will focus on technology that could improving application performance by automatically sort through the data, determine what is hot and what is cold, and automatically migrate the data without user or administrator intervention.

Btrfs is the filesystem that could support multiple devices, and have the framework set up to easily relocate data from on device to another. So it’s quite nature to have this done in btrfs.

The talk will discuss about the ideas to how to locate those frequent accessed data (hot data) and rarely being accessed data (cold data), and how to transparently migrate hot data to fast device (SSD). We will also discuss about the major challenging we faced, and what things are still left unsolved.

### 添付資料URL

- [slides](https://blog.linuxplumbersconf.org/2010/ocw/system/presentations/219/original/hot_cold_data_LPC.pdf)（file）


### One Line Summary

Hot and cold data migration over hybrid storage in btrfs
<a id="session-sessions-591"></a>
## 8. Desktop

- セッション個別URL: https://blog.linuxplumbersconf.org/2010/ocw/sessions/591
- Track: Desktop
- 日時: Wednesday, November 3, 2010 1:30 – 4:00pm

### Description

Wiki

Etherpad

### 添付資料URL

- [Etherpad](http://etherpad.osuosl.org/lpc2010-desktop)（link）


### One Line Summary

Desktop related topics "Wiki":http://wiki.linuxplumbersconf.org/2010:desktop "Etherpad":http://etherpad.osuosl.org/lpc2010-desktop
<a id="session-sessions-183"></a>
## 9. Power Management

- セッション個別URL: https://blog.linuxplumbersconf.org/2010/ocw/sessions/183
- Track: Power Management
- 日時: Wednesday, November 3, 2010 1:30 – 4:00pm

### Description

Discussions about all topics related to power management

### 添付資料URL

- [Etherpad](http://etherpad.osuosl.org/lpc2010-power-management)（link）


### One Line Summary

Discussions about all topics related to power management Wiki Etherpad

Descriptionの出典: MCトラック説明（個別Abstractは取得不可）。
https://blog.linuxplumbersconf.org/2010/ocw/events/LPC2010MC/tracks/13
<a id="session-sessions-597"></a>
## 10. VirtFS—A paravirtual File System pass-through in KVM/QEMU

- セッション個別URL: https://blog.linuxplumbersconf.org/2010/ocw/sessions/597
- Track: Refereed Presentations
- 日時: Wednesday, November 3, 2010 2:20 – 3:05pm

### Description

Virtualization systems have historically focused on providing the illusion of access to underlying hardware devices (either by emulating the physical device interface or through a paravirtualization API). What has been largely ignored within the mainstream virtualization community is the opportunity for raising the level of interface from the physical device layer to higher-level system and even application services. One of the more compelling arguments for virtualizing system services is a higher degree of information available to hypervisor about what the guest system or the guest system’s user) is trying to do.

File systems are a particularly good target as a paravirtual systems service. One of the principle problems with virtualized storage in the form of virtual disks is that data on the disk can not be concurrently accessed by multiple guests and it is very in-efficient with multiple levels of indirection and cache duplication. Traditional distributed file system (such as NFS or CIFS) over a virtualized network device to access storage is also not very good solution as these protocols are not designed for virtualization and has various security and double caching issues.

There are various uses and perhaps the most straightforward application of a paravirtualized file system is to replace the virtual disk as the root file system. Such an approach would allow host-based stackable file systems to be used for rapid cloning, management, and update.

The development is progressing at brisk pace and the feature is already in the mainline (QEMU 0.13 and mainline kernel). We will take this opportunity to briefly update the community with our progress and discuss and take community view/help on resolving some of the hot problems we are facing like interfaces missing/needed for user-level fileservers, 9P fid management issues, Linux ACL (Posix and Rich) and issues around cache sharing between host and the guest.

### 添付資料URL

- [slides](https://blog.linuxplumbersconf.org/2010/ocw/system/presentations/597/original/VirtFS_LPC_2010_Final.pdf)（file）


### One Line Summary

VirtFS is a paravirtual file system which exports the host file systems to the guest on 9P2000.L protocol through VirtIO transport.
<a id="session-sessions-297"></a>
## 11. Patchwork: pursuing productive project participation

- セッション個別URL: https://blog.linuxplumbersconf.org/2010/ocw/sessions/297
- Track: Refereed Presentations
- 日時: Wednesday, November 3, 2010 3:10 – 3:55pm

### Description

Most open-source software projects communicate via email and accept contributions over a mailing list. Hopefully, the project’s maintainers will keep track of all the patches that appear on the list, review them, and apply the ones that meet the project’s standards.

However, maintainers are usually stretched for time, so sometimes patches get missed or dropped, or contributors don’t see feedback on their patch. This creates more work for the community, in following up on work that should only have to be done once.

Patchwork is an automated patch-tracking system for community projects, designed to make life easier for the maintainers and contributors. It ‘catches’ patches that are sent to the list, and allows the community to keep track of the progress of each contribution through a web interface.

This presentation gives an overview of patchwork, the principles of patchwork’s design, and how to integrate it into your project’s workflow. I’ll also cover the more advanced and less well-known features of patchwork, as well as some tricks that project maintainers and contributors have been using to better interact with patchwork.

Patchwork is currently being used for a number of open source projects, including:

The Linux Kernel Mailing List (LKML)


	Linux PowerPC architecture


	Linux SPARC architecture


	Linux networking development


	Linux ext4 filesystem development


	The Kernel Virtual Machine (KVM)

Across the two major public patchwork installs (patchwork.ozlabs.org and patchwork.kernel.org), over 50,000 patches are currently being tracked in patchwork.

### 添付資料URL

- [slides](https://blog.linuxplumbersconf.org/2010/ocw/system/presentations/297/original/patchwork-lpc2010.pdf)（file）


### One Line Summary

Patchwork is a web-based system for keeping track of contributions
<a id="session-sessions-1017"></a>
## 12. Containers checkpoint/restart

- セッション個別URL: https://blog.linuxplumbersconf.org/2010/ocw/sessions/1017
- Track: BoF
- 日時: Wednesday, November 3, 2010 4:30 – 5:30pm

### Description

The current state of checkpoint/restart implementation is “ready to be merged but not merged yet”. We want to sit and discuss what are the remaining obstacles, how do we cooperate, and in general what needs to be done in order to merge it.

Checkpoint/restart is a mechanism to freeze a group of processes (usually a container) and dump its complete state to a storage device, in order to restart this state later. This can be used for e.g. live migration of task groups between different computers.

### 添付資料URL

掲載なし


### One Line Summary

Discuss the current state of checkpoint/restart in mainline, and what needs to be done to merge it.
<a id="session-sessions-963"></a>
## 13. Power On war stories

- セッション個別URL: https://blog.linuxplumbersconf.org/2010/ocw/sessions/963
- Track: BoF
- 日時: Wednesday, November 3, 2010 4:30 – 5:30pm

### Description

I’ve just experienced my first power on and we had to get creative to debug and work around a number of hardware and software issues to get the system to come up to a semi usable state.  I would like to know how common this experience is, and if yours was worse than mine ;)

### 添付資料URL

掲載なし


### One Line Summary

lighting up a new board brings together a lot of interesting talent, and has a lot of challenges.
<a id="session-sessions-1143"></a>
## 14. State of the kernel: license "wise".

- セッション個別URL: https://blog.linuxplumbersconf.org/2010/ocw/sessions/1143
- Track: BoF
- 日時: Wednesday, November 3, 2010 4:30 – 5:30pm

### Description

This BOF will examine at the Linux kernel using current tools (FOSSology, etc.) to analyze the licensing inside the kernel itself,  and illustrate what’s there and detectable beyond the GPLv2 and GPLv2+ licenses we all expect to see.

Discussion of the corner cases found by the analysis, and some of the current trends emerging in reporting licensing and copyrights will be discussed, as well as the open source tools available to assist with package analysis.

### 添付資料URL

掲載なし


### One Line Summary

Survey of what licenses are actually in the kernel, beyond GPLv2/GPLv2+.
<a id="session-sessions-1191"></a>
## 15. Ext4 snapshots

- セッション個別URL: https://blog.linuxplumbersconf.org/2010/ocw/sessions/1191
- Track: BoF
- 日時: Wednesday, November 3, 2010 5:30 – 6:30pm

### Description

Next3 is a clone of the Ext3 filesystem with built-in support for snapshots, which was developed by CTERA Networks.

Many in the community have expressed their desire that the snapshots feature be merged into Ext4.

As the journey towards Ext4 snapshots is about to embark, it is now the perfect time to discuss the various design issues regarding Ext4 snapshots.

### 添付資料URL

掲載なし


### One Line Summary

Overview of Next3 snapshots and what needs to be done to merge them into Ext4.
<a id="session-sessions-1173"></a>
## 16. Kernel Debugging

- セッション個別URL: https://blog.linuxplumbersconf.org/2010/ocw/sessions/1173
- Track: BoF
- 日時: Wednesday, November 3, 2010 5:30 – 6:30pm

### Description

Now that KGDB/KDB are merged into the upstream kernel, we can start thinking about what is next in terms of kernel debug technology. Come share your questions about kernel debugging, your stories about challenging situations you had to debug, and your ideas for features and technology direction.

### 添付資料URL

掲載なし


### One Line Summary

Discuss state of KGDB and other kernel debug technologies.
<a id="session-sessions-1221"></a>
## 17. Kicking the Tires of The Yocto Project

- セッション個別URL: https://blog.linuxplumbersconf.org/2010/ocw/sessions/1221
- Track: BoF
- 日時: Wednesday, November 3, 2010 5:30 – 6:30pm

### Description

The yocto project was recently announced at the CELF conference. This bof will provide an opportunity to discuss the technical details of the project, how it is positioned relative to associated projects, and it’s value to embedded Linux development.

### 添付資料URL

掲載なし


### One Line Summary

Discuss the details of the recently announced yocto project and where it can lend value to embedded linux development.
<a id="session-sessions-411"></a>
## 18. Embedded Linux easier

- セッション個別URL: https://blog.linuxplumbersconf.org/2010/ocw/sessions/411
- Track: Refereed Presentations
- 日時: Thursday, November 4, 2010 9:00 – 9:45am

### Description

While there are many server and client focused Linux distributions, the vast majority of the market is covered by a small handful of flavors and their derivatives.

The embedded Linux market is quite different, to cover 80% of the market you need to work with hundreds of different tool sets, root images, kernels, BSPs, etc.

What would it take to make embedded Linux easier for developers? What would it take make it easier to create a working starting point for a specific board? To collect BSPs, to have the right tools in one place that work on the majority of the architectures and boards?

This talk will discuss an attempt to tackle this problem.

### 添付資料URL

掲載なし


### One Line Summary

An approach to making it easier to work with embedded Linux
<a id="session-sessions-57"></a>
## 19. libferris: everything is a filesystem, and filesystems are everything.

- セッション個別URL: https://blog.linuxplumbersconf.org/2010/ocw/sessions/57
- Track: BoF
- 日時: Thursday, November 4, 2010 9:00 – 10:00am

### Description

Libferris is a virtual filesystem that provides a filesystem and metadata (EA) interface to multiple data sources including Web sites. Recently libferris has gained more ways to expose itself including to XQuery, as SQLite virtual tables, RDF, virtual DOM, and FUSE.

The combination of Web as a filesystem and exposing the filesystem to many systems hopefully makes aspects of libferris interesting to various communities. This is an area that I would like to discuss at Linux Plumbers with developers who are more expert on systems which could interact with libferris.

My talk idea is on examples of libferris usage with an eye toward doing strange and also useful things leveraging libferris. For example, mounting apache log files and combining that with information from relational databases to generate time keyed KML files to show Web hits with Google Earth. Or mounting google spreadsheets and showing changes using KDE4 plasmoids.

I have presented libferris at LCA 2002, the Linux Kongress 2005 & 08, OLS 2007, NLUUG storage conference 2009, UKUUG spring conference 2010, and others.

### 添付資料URL

掲載なし


### One Line Summary

Libferris makes local and remote data available as a filesystem and conversely can be accessed from SQLite and XQuery among others as their native data types.
<a id="session-sessions-579"></a>
## 20. Perf Tools: Recent Improvements

- セッション個別URL: https://blog.linuxplumbersconf.org/2010/ocw/sessions/579
- Track: Refereed Presentations
- 日時: Thursday, November 4, 2010 10:00 – 10:45am

### Description

Since last LPC new perf tools were introduced, the existing ones got improved, more developers joined the effort.

So its important to present the news to the LPC audience and collect feedback on what to work next.

### 添付資料URL

- [slides](https://blog.linuxplumbersconf.org/2010/ocw/system/presentations/579/original/perf-plumbers2010.pdf)（file）


### One Line Summary

Recent developments on the perf tools and discussion about TODO.
<a id="session-sessions-177"></a>
## 21. Audio

- セッション個別URL: https://blog.linuxplumbersconf.org/2010/ocw/sessions/177
- Track: Audio
- 日時: Thursday, November 4, 2010 10:00am – 12:30pm

### Description

Audio support on Linux is currently undergoing a rapid evolution, with a growing expectation on the part of users that everything will work off the shelf with no manual configuration. This is a particular problem at the system integration level, with many diverse audio sources and sinks (both physical and software) in the system which need to be managed together to provide the functionality which end users expect.

The problems are most complex in the embedded world due to both the lack of hardware standards and big developments in both the audio hardware present on embedded systems such as mobile phones and the feature sets supported at the user level.

In this track we want to cover the whole audio stack, from userspace sound servers and interfaces to low-level audio driver architecture. We’ll focus on new audio features for audio production, as well as technology for the classic desktop and cover mobile platforms as well.

### 添付資料URL

- [Etherpad](http://etherpad.osuosl.org/lpc2010-audio)（link）


### One Line Summary

Discussion of audio integration issues in both kernel and userspace, covering both desktop and embedded systems. "Wiki":http://wiki.linuxplumbersconf.org/2010:audio "Etherpad":http://etherpad.osuosl.org/lpc2010-audio
<a id="session-sessions-465"></a>
## 22. User-visible Networking Issues

- セッション個別URL: https://blog.linuxplumbersconf.org/2010/ocw/sessions/465
- Track: User Visible Network Issues
- 日時: Thursday, November 4, 2010 10:00am – 12:30pm

### Description

Discussion of device naming, Network Manger, Conman etc.

### 添付資料URL

- [Etherpad](http://etherpad.osuosl.org/lpc2010-user-visible-network-issues)（link）


### One Line Summary

Discussion of device naming, Network Manger, Conman etc. "Wiki":http://wiki.linuxplumbersconf.org/2010:user-visible_networking_issues "Etherpad":http://etherpad.osuosl.org/lpc2010-user-visible-network-issues
<a id="session-sessions-645"></a>
## 23. Testing the real-time Kernel on Arbitrary Hardware.

- セッション個別URL: https://blog.linuxplumbersconf.org/2010/ocw/sessions/645
- Track: Refereed Presentations
- 日時: Thursday, November 4, 2010 10:50 – 11:35am

### Description

How is the performance of the real-time kernel measured? What do we mean we talk about real-time performance? Does it still perform well and offer guarantees of low-latency and determinism when a system is stressed? An in-depth exploration of the rt-test suite, including cyclictest and related programs. We also discuss rteval, which simultaneously runs various benchmarks and the rt-tests suite in order to stress the kernel and shake out problems. Also, a glimpse into the future. What is being worked on currently? What do we need to do better?

### 添付資料URL

- [slides](https://blog.linuxplumbersconf.org/2010/ocw/system/presentations/645/original/measuring.odp)（file）


### One Line Summary

An exploration of tools and test suites for measuring the performance of the real-time kernel. Also, a glimpse into the future, what do we need to do better?
<a id="session-sessions-279"></a>
## 24. Runtime Power Management in the PCI Subsystem

- セッション個別URL: https://blog.linuxplumbersconf.org/2010/ocw/sessions/279
- Track: Refereed Presentations
- 日時: Thursday, November 4, 2010 11:40am – 12:25pm

### Description

The core runtime power management (runtime PM) framework for I/O devices, introduced into the Linux kernel last year, can only be used by individual device drivers if it is supported by the subsystems they rely on, such as the PCI bus type.  I have recently added the necessary code to the PCI subsystem and it was shipped in the 2.6.34 kernel.  The 2.6.35 kernel will include a few PCI drivers using it.

The PCI bus type supports the device runtime PM by providing subsystem-level callbacks that execute driver ruintime PM callbacks, put devices into low-power states and set them up to signal wakeup through the PCI Power Management Event (PME) mechanism.  The PME signaling is particularly important, because it allows devices in low-power states to notify the CPU of conditions in which they should be put into the full-power state, but unfortunately it is also complicated.  Namely, the PME signal is out-of-band for parallel PCI devices, so it has to be delivered directly to the system core logic that should cause an interrupt to be generated in response to it.  On systems following the ACPI specification the ACPI GPE (General Purpose Event) mechanism is used for this purpose.  In turn, PCI Express devices use special in-band messages for PME signalling, causing Root Ports to generate interrupts.  In some hardware and BIOS configurations these messages are also converted to ACPI GPEs, but if that does not happen, the PME interrupts generated by PCI Express Root Ports need to be processed by a dedicated interrupt handler.

To take the native PCI Express PME signaling into account it was necessary to add a PME service driver for PCI Express Root Ports.  Moreover, to make the ACPI-based PME signaling work, the kernel’s ACPI subsystem had to be modified quite significantly, since it made the assumption that GPEs used for waking up the system from sleep states would not be used at run time, which was not correct any more for the GPEs used to signal PCI PMEs.  It also assumed that the “runtime” GPEs would not be shared, which was not correct either, because the GPEs used for PME signaling tended to be used by ACPI-based PCI hot-plug at the same time.

I am going to describe the changes made in order to implement the PCI bus type’s device runtime PM support, both in the PCI and the ACPI kernel subsystems.  I am also going to give examples of PCI device driver code using it.  This should be interesting to PCI device driver writers as well as to people working on user space power management utilities, because they are supposed to control the power management of devices through the interfaces provided by the core I/O runtime PM framework.

I am the author of the majority of code the core I/O runtime PM framework consists of and the PCI bus type’s runtime PM code as well as the supporting ACPI code, so my experience in this area is first-hand.

### 添付資料URL

- [slides](https://blog.linuxplumbersconf.org/2010/ocw/system/presentations/279/original/PCI_runtime_PM.pdf)（file）


### One Line Summary

I will describe the implementation of runtime power management support in the Linux kernel's PCI subsystem and the related modifications of the ACPI subsystem.
<a id="session-sessions-237"></a>
## 25. Porting the Linux kernel to a new architecture, done right

- セッション個別URL: https://blog.linuxplumbersconf.org/2010/ocw/sessions/237
- Track: Refereed Presentations
- 日時: Thursday, November 4, 2010 1:30 – 2:15pm

### Description

Every year, one or two architectures get merged into the Linux kernel, with most of the code copied from existing  architectures, usually copying many bugs that are fixed in others and support for legacy interfaces that are not needed on the new architecture.

Following up to the work that Arnd has done on generalizing the header files in the include/asm-generic directory, we now look at the remaining code, porting the kernel to a virtual machine implementing an idealized x86 implementation, in a way that can be trivially ported to other architectures.

### 添付資料URL

- [slides](https://blog.linuxplumbersconf.org/2010/ocw/system/presentations/237/original/porting.pdf)（file）


### One Line Summary

A quick tour around the architecture specific kernel implementation a working example code.
<a id="session-sessions-105"></a>
## 26. Tracing (Part I)

- セッション個別URL: https://blog.linuxplumbersconf.org/2010/ocw/sessions/105
- Track: Tracing
- 日時: Thursday, November 4, 2010 1:30 – 4:00pm

### Description

Tracing within the Linux kernel and userland helps in seeing how and why the system acts the way it does. Tracing facilitates the debuging of the system as well as understanding the reason the system behaves in a certain way.

Currently, Ftrace is the major tracing infrastructure of the Linux kernel, but perf is starting to overlap in its features. Not to mention LTTng, which is not part of the mainline kernel but is being used by companies with a patched kernel. Integration of these tracers would benefit the user community greatly, but there are some technical (as well as social) issues in making them collaborate better.

### 添付資料URL

- [Etherpad](http://etherpad.osuosl.org/lpc2010-tracing)（link）


### One Line Summary

Linux Tracing topics and issues.  "Wiki":http://wiki.linuxplumbersconf.org/2010:tracing "Etherpad":http://etherpad.osuosl.org/lpc2010-tracing
<a id="session-sessions-117"></a>
## 27. Virtualization (Part I)

- セッション個別URL: https://blog.linuxplumbersconf.org/2010/ocw/sessions/117
- Track: Virtualization
- 日時: Thursday, November 4, 2010 1:30 – 4:00pm

### Description

Track lead

### 添付資料URL

- [Etherpad](http://etherpad.osuosl.org/lpc2010-virtualization)（link）


### One Line Summary

Virtualization topics and issues "Wiki":http://wiki.linuxplumbersconf.org/2010:virtualization "Etherpad":http://etherpad.osuosl.org/lpc2010-virtualization
<a id="session-sessions-399"></a>
## 28. The state of video

- セッション個別URL: https://blog.linuxplumbersconf.org/2010/ocw/sessions/399
- Track: Refereed Presentations
- 日時: Thursday, November 4, 2010 2:20 – 3:05pm

### Description

The way people use videos has changed a lot in the last few years. From just watching DVDs on our computers, we evolved to watching and producing movies as the Youtube generation. And we do it on our cell phones. Unfortunately our software didn’t keep track. It is often still using 10 year old technology like XVideo.

Updating the software is not an easy task, as it involves changes to pretty much every part of the software stack: drivers, the X server, framework libraries and the applications all need to be involved.

Last November developers from GStreamer, Cairo, Mesa and X met at the Video Hackfest and discussed how to best provide the capabilities of modern GPUs and meet the restrictions of embedded devices.

This talk summarizes the findings from that time, examines the progress that has been made on implementations, takes a look at the unsolved problems and dares a look into the future.

But most of all, the talk aims to raise awareness of the effort and seeks input from everybody involved, so that we end up with a software stack that just works.

### 添付資料URL

- [slides](https://www.linuxplumbersconf.org/2010/ocw//system/presentations/399/original/state-of-video.pdf)（file）


### One Line Summary

A look at how to make watching and creating videos on Linux as good as it should be
<a id="session-sessions-483"></a>
## 29. Linux Graphics Directions

- セッション個別URL: https://blog.linuxplumbersconf.org/2010/ocw/sessions/483
- Track: Refereed Presentations
- 日時: Thursday, November 4, 2010 3:10 – 3:55pm

### Description

Linux graphics support has turned the corner in the last couple of years, and we’re now trying to figure out where we go next. This presentation outlines a couple of possible scenarios and talks about how we move from the heavy-weight desktop-only infrastructure that we have today to a system that can scale across a wide range of hardware platforms and use cases.

### 添付資料URL

掲載なし


### One Line Summary

Now that we have competent Linux kernel graphics support, what comes next?
<a id="session-sessions-477"></a>
## 30. The Linux Bluetooth Stack

- セッション個別URL: https://blog.linuxplumbersconf.org/2010/ocw/sessions/477
- Track: Refereed Presentations
- 日時: Thursday, November 4, 2010 4:30 – 5:15pm

### Description

The presentation intends to show the status of the Linux Bluetooth stack. It will start with an overview of the whole Bluetooth stack including kernelspace and userspace parts, showing each layer and its implementation on Linux. Then I’ll show the new Bluetooth technologies coming to Linux and how they will interact with the existing code. Those new features includes:

- Extended Features to the L2CAP (Logical Link and Control Adaptation Protocol) layer, which provides Segmentation and Reassembly of L2CAP packets, a Frame Check Sequence with crc16, the Streaming Mode, and the Enhanced Retransmission

Mode, a reliable transfer protocol with error and flow  control. Extended L2CAP features will be available in the Linux Kernel 2.6.36.

- new Bluetooth 3.0 specification plus High Speed feature. The High Speed feature can make use of a 802.11 radio to transfer Bluetooth data. The High Speed feature needs a integration between the Bluetooth and 802.11 stacks inside the

kernel. A new Bluetooth layer is responsible for translate Bluetooth HCI commands into 802.11 instructions and vice-versa. High Speed is starting the review and merge process on the linux-bluetooth mailing list.

- Bluetooth Low Energy (aka Bluetooth 4.0), that is a new  Bluetooth radio besides the Basic Rate radio (the standard Bluetooth radio). Bluetooth Low Energy is on its first days of development and is planned to be finished next year.

All these new features shows that is a lot of new code coming to the Bluetooth stack, also these features opens a variety of new possibilities to use Linux in wireless solutions. Some examples that will be commented are the Bluetooth medical/fitness devices, proximity profiles, and uses in transfers of a big amount of data.

### 添付資料URL

- [slides](https://blog.linuxplumbersconf.org/2010/ocw/system/presentations/477/original/Bluetooth_plumbers.pdf)（file）


### One Line Summary

A status update of the Linux Bluetooth stack, show the today's state and what is coming in the near future.
<a id="session-sessions-1203"></a>
## 31. Tracing (Part II)

- セッション個別URL: https://blog.linuxplumbersconf.org/2010/ocw/sessions/1203
- Track: Tracing
- 日時: Thursday, November 4, 2010 4:30 – 7:00pm

### Description

Tracing within the Linux kernel and userland helps in seeing how and why the system acts the way it does. Tracing facilitates the debuging of the system as well as understanding the reason the system behaves in a certain way.

Currently, Ftrace is the major tracing infrastructure of the Linux kernel, but perf is starting to overlap in its features. Not to mention LTTng, which is not part of the mainline kernel but is being used by companies with a patched kernel. Integration of these tracers would benefit the user community greatly, but there are some technical (as well as social) issues in making them collaborate better.

### 添付資料URL

- [Etherpad](http://etherpad.osuosl.org/lpc2010-tracing)（link）


### One Line Summary

Linux Tracing topics and issues.  "Wiki":http://wiki.linuxplumbersconf.org/2010:tracing "Etherpad":http://etherpad.osuosl.org/lpc2010-tracing
<a id="session-sessions-1209"></a>
## 32. Virtualization (Part II)

- セッション個別URL: https://blog.linuxplumbersconf.org/2010/ocw/sessions/1209
- Track: Virtualization
- 日時: Thursday, November 4, 2010 4:30 – 7:00pm

### Description

Track Lead

### 添付資料URL

- [Etherpad](http://etherpad.osuosl.org/lpc2010-virtualization)（link）


### One Line Summary

Virtualization topics and issues "Wiki":http://wiki.linuxplumbersconf.org/2010:virtualization "Etherpad":http://etherpad.osuosl.org/lpc2010-virtualization
<a id="session-sessions-363"></a>
## 33. The Challenge of Mobile Broadband

- セッション個別URL: https://blog.linuxplumbersconf.org/2010/ocw/sessions/363
- Track: Refereed Presentations
- 日時: Thursday, November 4, 2010 5:20 – 6:05pm

### Description

It seems like everyone and their dog has mobile broadband in their laptop, on their phone, or with a dongle in their pocket.  But often these devices don’t work well in Linux and there’s no consistent API that app developers can target.  Devices may work well enough for advanced users, but the stack provides plenty of gaps through which a seamless experience often falls to its death.

Many devices use proprietary protocols we need to reverse-engineer to provide full functionality that users of other operating systems are accustomed to.  Devices themselves exhibit huge variation in firmware, stability, connection method, and standards conformance.  And it’s not just AT commands, PPP, and wvdial anymore; many embedded devices and laptop cards provide ethernet-like interfaces that require more complicated kernel drivers which manufacturers often don’t release.

Even talking to the device isn’t enough since users expect features like location services, messaging, and voice communication to work just as well as IP networking does.  We don’t provide a consistent mechanism for access to these services, hampering their adoption further up the stack.

Our users demand solutions to all these problems, and it’s our job to make sure they are solved in a robust, maintainable, and flexible manner.  From hardware and drivers all the way up to the user experience, I’ll discuss problems and potential solutions at each stop along the way.

### 添付資料URL

掲載なし


### One Line Summary

Ubiquitous WWAN networks and devices reveal wide gaps in the Linux networking stack that we need to fix.
<a id="session-sessions-381"></a>
## 34. Unified energy-aware scheduling

- セッション個別URL: https://blog.linuxplumbersconf.org/2010/ocw/sessions/381
- Track: Refereed Presentations
- 日時: Friday, November 5, 2010 9:00 – 9:45am

### Description

The Linux kernel exploits the energy controls in current generation of processors through various mechanisms – voltage/frequency control through cpufreq, low power states of many different characteristics on idle through cpuidle and on multi-core systems, optimizing the number of used CPU cores for computational tasks through the scheduler (sched_mc_power_savings=N). With conflicting goals and overlapping features, it has now become important to look at a unified scheme for energy-aware scheduling that takes into account a number of goals – energy policy input (sysfs), allocating right amount of CPU for the set of running tasks (both in terms of number of cores and capacity of cores), predicting and maximising opportunities to remain idle. In this paper, we identify some of important challenges for both x86 and powerpc architectures and evaluate possible ways to do co-ordinated energy-aware scheduling.

We first describe the relationship between scheduler energy optimizations and two subsystems – cpuidle and cpufreq. There are a number situations where these subsystems may need to work in a unified manner -

1. Core consolidation vs. cpufreq – consolidation to too few cores lead to higher frequency and thus higher power. Co-operation with cpufreq may lead to better decisions.

2. Race to idle – scheduling tasks on multiple cpus may benefit from idle history

3. Deep sleep on idle vs. response time – deeper sleep states with high latency and re-initialization work make things complex, taking into account interrupt and task characteristics can help

4. Fine grain hardware based policy requires quicker response in terms of energy/performance tradeoff.

We describe some of these challenges and corresponding work needed in the Linux kernel to improve energy efficiency in current and upcoming platforms.

### 添付資料URL

- [slides](https://blog.linuxplumbersconf.org/2010/ocw/system/presentations/381/original/unified-energy-Nov05b.pdf)（file）


### One Line Summary

Unified approach to CPU power management where the scheduler works in co-ordination with cpufreq and cpuidle subsystems
<a id="session-sessions-609"></a>
## 35. Challenges with networking in mobile devices

- セッション個別URL: https://blog.linuxplumbersconf.org/2010/ocw/sessions/609
- Track: BoF
- 日時: Friday, November 5, 2010 9:00 – 10:00am

### Description

Networking has become ubiquitous and it is expected to be simple. It has to work with WiFi, WiMAX, 3G, Bluetooth, Ethernet or whatever new technology comes next. Bringing this all in a nice an integrated way for mobile devices like cell phones to tablets has some challenges. This presentation will show some of the challenges that MeeGo and its connectivity suite faced and how they were tackled.

### 添付資料URL

掲載なし


### One Line Summary

This presentation shows the challenges with networking in modern mobile devices based on Linux.
<a id="session-sessions-921"></a>
## 36. Hardware detection BoF

- セッション個別URL: https://blog.linuxplumbersconf.org/2010/ocw/sessions/921
- Track: BoF
- 日時: Friday, November 5, 2010 9:00 – 10:00am

### Description

Discuss evolutions around the subsystems envolved on detecting errors on memory and other hardware troubles, currently covered by EDAC/MCE subsystems.

### 添付資料URL

掲載なし


### One Line Summary

Discuss subsystems that reports hardware errors
<a id="session-sessions-519"></a>
## 37. Idle scheduling support in the Linux Kernel

- セッション個別URL: https://blog.linuxplumbersconf.org/2010/ocw/sessions/519
- Track: Refereed Presentations
- 日時: Friday, November 5, 2010 10:00 – 10:45am

### Description

Most of the jobs we run at Google fall into one of two priority bands: high priority workloads that require to be scheduled as quickly as possible, and low priority workloads that soak up the remaining (idle) cpu cycles on a machine. The challenge we face in providing differentiated CPU QoS is to maximize machine utilization without compromising on the isolation between these two priority levels.

In this talk we present how we used CFS and group scheduling to implement CPU QoS described above. We describe how we used CFS to provide strict scheduling priority in addition to fairness. We discuss some of the strengths and shortcomings of the Linux kernel’s idle scheduling support with the help of some real world case studies, and discuss tradeoffs between poor machine utilization and providing isolation.

As part of the talk, we will present a solution that achieves differentiated QoS while maximizing machine utilization. We discuss our modifications to the scheduler and load balancer, present data for how this improves utilization and present the pros and cons of some alternative solutions that we had considered (and also open the floor to discussion).

### 添付資料URL

- [slides](https://blog.linuxplumbersconf.org/2010/ocw/system/presentations/519/original/Idle_Scheduling_in_Linux.pdf)（file）


### One Line Summary

This talk describes how Google uses CFS to provide differentiated CPU QoS, discusses the strengths and shortcomings of idle scheduling support in the Linux kernel, and presents solutions that improve utilization without impacting isolation.
<a id="session-sessions-63"></a>
## 38. Embedded

- セッション個別URL: https://blog.linuxplumbersconf.org/2010/ocw/sessions/63
- Track: Embedded
- 日時: Friday, November 5, 2010 10:00am – 12:30pm

### Description

Track Lead

### 添付資料URL

- [Etherpad](http://etherpad.osuosl.org/lpc2010-embedded)（link）


### One Line Summary

Embedded topics and issues. "Wiki":http://wiki.linuxplumbersconf.org/2010:embedded_topics "Etherpad":http://etherpad.osuosl.org/lpc2010-embedded
<a id="session-sessions-201"></a>
## 39. File and Storage Systems

- セッション個別URL: https://blog.linuxplumbersconf.org/2010/ocw/sessions/201
- Track: File and Storage Systems
- 日時: Friday, November 5, 2010 10:00am – 12:30pm

### Description

The track will deal with issues around file and storage systems in Linux, from the kernel space up to user space. Getting applications to work well and get tuned properly, how to benchmark administer, etc.


The track should draw developers for the various components, vendors of storage systems (both traditional storage and newer devices), kernel developers.


Wiki

### 添付資料URL

- [Etherpad](http://etherpad.osuosl.org/lpc2010-file-and-storage-systems)（link）


### One Line Summary

The track will deal with issues around file and storage systems in Linux, from the kernel space up to user space. Wiki Etherpad

Descriptionの出典: MCトラック説明（個別Abstractは取得不可）。
https://blog.linuxplumbersconf.org/2010/ocw/events/LPC2010MC/tracks/13
<a id="session-sessions-189"></a>
## 40. Linux HTPC

- セッション個別URL: https://blog.linuxplumbersconf.org/2010/ocw/sessions/189
- Track: Refereed Presentations
- 日時: Friday, November 5, 2010 10:50 – 11:35am

### Description

A tour from the nuts and bolts of low-level device drivers for digital video capture devices, hardware video decoding devices and infrared remote control receivers and transmitters to the userspace libraries and applications that consume them to create your own Linux-based Home Theater PC setup.

I’ll be aiming to highlight some new happenings in the world of IR (new ir-core and lirc integration in 2.6.36) and video decoding (broadcom crystalhd, vdpau, vaapi), what’s been done, what we still need to do, etc.

Qualifications:

- long-time contributor to MythTV, one of the most complete open-source Home Theater PC applications around

- maintainer of multiple infrared remote control drivers, one of the core people in the lirc project, doing the bulk of the ir-core integration work

- maintainer of broadcom crystalhd driver and library

- Fedora maintainer of packages for all of the above

Why this is interesting to a technical audience:

- covers a lot of relatively new device drivers and discusses ways they can be utilized by users and developers alike to improve their HTPC experience, from ease of setup and maintenance to optimizing playback quality and minimizing power draw.

### 添付資料URL

掲載なし


### One Line Summary

Using Linux to build your own Home Theater PC.
<a id="session-sessions-639"></a>
## 41. Wi-Fi Direct on Linux

- セッション個別URL: https://blog.linuxplumbersconf.org/2010/ocw/sessions/639
- Track: Refereed Presentations
- 日時: Friday, November 5, 2010 11:40am – 12:25pm

### Description

Wi-Fi Direct is an upcoming Wi-Fi Alliance standard for ad-hoc wireless networking using IEEE 802.11 devices. It seeks to revolutionize the way we use our wireless devices by making it easy to discover and communicate with devices based on services they offer.

After touching on the basics of Wi-Fi Direct and its use cases, this presentation will explore how the new features are (being) implemented in Linux and how applications can take advantage of the new feature that are being added.

### 添付資料URL

- [slides](https://blog.linuxplumbersconf.org/2010/ocw/system/presentations/639/original/lpc-p2p.pdf)（file）


### One Line Summary

Learn about Wi-Fi Direct and support on Linux
<a id="session-sessions-669"></a>
## 42. API for Real-Time Scheduling with Temporal Isolation on Linux

- セッション個別URL: https://blog.linuxplumbersconf.org/2010/ocw/sessions/669
- Track: Refereed Presentations
- 日時: Friday, November 5, 2010 1:30 – 2:15pm

### Description

There are a set of new real-time scheduling algorithms being developed for the Linux kernel, which provide temporal isolation among tasks. These include an implementation of the POSIX sporadic server (SS) and a deadline-based scheduler. These are based on the specification of the scheduling  guarantees needed by the kernel in terms of a budget and a period.

This presentation aims to tackle the issues related to how to design a proper kernel-space / user-space interface for accessing such new functionality. For the SS, a POSIX compliant implementation would break binary compatibility. However, the currently implemented API seems to be lacking some important features, like a sufficient level of extensibility. This would be required for example for adding further parameters in the future, e.g., deadlines different  from periods, soft (i.e., work-conserving) reservations, how to mix power management in the loop (if ever), hierarchical scheduling, etc.

### 添付資料URL

- [slides](https://blog.linuxplumbersconf.org/2010/ocw/system/presentations/669/original/LPC-2010-Real-Time-API-MainConf.pdf)（file）


### One Line Summary

How can we fix the current API for real-time scheduling with temporal isolation (deadline-based / Sporadic Server) ?
<a id="session-sessions-711"></a>
## 43. High Availability Clustering

- セッション個別URL: https://blog.linuxplumbersconf.org/2010/ocw/sessions/711
- Track: High Availability Clustering
- 日時: Friday, November 5, 2010 1:30 – 4:00pm

### Description

Wiki


Over the last very few years, High-Availability clustering on Linux has seen significant convergence and the emergence of a single stack, based on the fs/dlm code on the kernel-side, and around corosync/openais/Pacemaker etcetera on the user-space part. This is now being adopted by Red Hat, Ubuntu, Novell/SUSE, Debian and others.


Work remains to be done on mapping a roadmap for resource agent merges, more core library work such as logging infrastructure, roadmap alignment between components and stakeholders, packaging details, …

### 添付資料URL

- [Etherpad](http://etherpad.osuosl.org/lpc2010-high-availability-clustering)（link）


### One Line Summary

Discussion of low level issues related to HA and Clustering (including filesystems). Wiki Etherpad

Descriptionの出典: MCトラック説明（個別Abstractは取得不可）。
https://blog.linuxplumbersconf.org/2010/ocw/events/LPC2010MC/tracks/13
<a id="session-sessions-621"></a>
## 44. Multimedia Infrastructure

- セッション個別URL: https://blog.linuxplumbersconf.org/2010/ocw/sessions/621
- Track: Multimedia Infrastructure
- 日時: Friday, November 5, 2010 1:30 – 4:00pm

### Description

Several changes are happening at the Media Infrastructure in kernel, including:

New Remote Controller subsystem;


	Events handling;


	Videobuf changes;

An interim V4L/DVB meeting happened in Helsinki to discuss those needs, but for sure there are much more needing to be discussed during LPC/2010, like:

IR remotes

Bluetooth remotes

RF4CE (802.15.4) remotes

Coordination of all types of remotes into a coherent framework

Pin coupling to radio remotes

Missing 802.15.4 networking infrastructure

### 添付資料URL

- [Etherpad](http://etherpad.osuosl.org/lpc2010-multimedia)（link）


### One Line Summary

Topics and issues for the multimedia stack. "Wiki":http://wiki.linuxplumbersconf.org/2010:media_infrastructure "Etherpad":http://etherpad.osuosl.org/lpc2010-multimedia
<a id="session-sessions-651"></a>
## 45. Optimizing the QEMU/KVM Storage Stack

- セッション個別URL: https://blog.linuxplumbersconf.org/2010/ocw/sessions/651
- Track: Refereed Presentations
- 日時: Friday, November 5, 2010 2:20 – 3:05pm

### Description

Virtualization has become a widespread tool to flexibly provision and consolidate machine instances.  In the past, these benefits were traded off against lower performance than when running physical machines.  This gap has been significantly narrowed in virtualized CPU and networking performance, but storage performance remains a relatively unexplored area.

This talk shows the performance landscape of QEMU/KVM storage and how its architecture handles disk I/O-bound workloads.  QEMU supports a range of storage options that have very different characteristics.  As a result, users are often surprised by the small configuration changes that can degrade or improve disk I/O throughput.

The results of recent work in improving QEMU/KVM storage performance are discussed.  These optimizations provide insights into both the current status of the virtualized storage code path and where future bottlenecks lie.

Techniques and tools are presented which can be used to gather a picture of the entire virtualization stack and then zoom in on performance bottlenecks.  These approaches can be applied to performance analysis beyond QEMU/KVM and are valuable to audiences both in the virtualization and other communities.

### 添付資料URL

- [slides](https://blog.linuxplumbersconf.org/2010/ocw/system/presentations/651/original/Optimizing_the_QEMU_Storage_Stack.pdf)（file）


### One Line Summary

Tools and recent progress in improving QEMU/KVM storage performance.
<a id="session-sessions-525"></a>
## 46. TCP-NV: Congestion Avoidance for Data Centers

- セッション個別URL: https://blog.linuxplumbersconf.org/2010/ocw/sessions/525
- Track: Refereed Presentations
- 日時: Friday, November 5, 2010 3:10 – 3:55pm

### Description

Data center traffic is sensitive to high network latencies, even if it only affects a small percentage of the overall traffic. For example, many data center applications break complex operations into hundreds, or thousands, of simpler ones that are distributed to individual hosts which then return their results. The latency of the complex operation is typically determined by the highest latency of the distributed simpler ones. That is, large network latencies that only affect 0.01% or 0.001% percent of the packets result in higher latencies for 1 to 10% of the application’s operations. High network latencies are the result of queue build-up or packet losses. Both of these arise as side effects of TCP’s congestion control mechanism where the congestion window increases until the network becomes congested and packet losses occur.

Instead, TCP-NV attempts to avoid congestion by decreasing its congestion window when persistent queue build-up is detected. It is based on TCP-BIC and behaves like TCP-BIC while no queue build-up is detected. Once it is detected, TCP-NV decrease its congestion window by an amount proportional to the amount of queue build-up detected. TCP-NV detects queue build-up through measurements of the RTT and rate instead of depending on explicit notifications by the network. The advantage of this approach is that no modifications to the networking infrastracture are required. The disadvantage is that noise in the measurements can result in incorrect signals. This is especially true in modern hardware, where mechanisms like TSO, LRO and interrupt coalescence can affect these measurements, especially with 10G NICs. In order to deal with these effects, TCP-NV incorporates various techniques to filter affected measurements.

TCP-NV is implemented in Linux and has been tested in simulation and with real hardware. Our tests indicate that NV is successful at reducing queue build-up and packet losses. For example, when 2 1Gbps hosts send 1 MB RPCs to a third host using TCP-BIC, packet losses are 1.5% to 3.8%. With TCP-NV the losses are less than 0.008%. Enabling Ethernet flow control eliminates packet losses for both BIC and NV. However, packet RTT increases up to 50ms when using BIC due to queuing, but stays under 1ms for NV. Finally, in simulations with 256 10 Gbps hosts, 99 percentile latencies for TCP-BIC grow up to 21ms, but stay under 1ms for TCP-NV.

### 添付資料URL

- [slides](https://blog.linuxplumbersconf.org/2010/ocw/system/presentations/525/original/TCP_NV_LPC.pdf)（file）


### One Line Summary

TCP-NV is a TCP variant for Data Centers that implements congestion avoidance, where the congestion window can decrease when queue build-up is detected and before packet loss occurs.
<a id="session-sessions-1179"></a>
## 47. The wonderful world of LibreOffice

- セッション個別URL: https://blog.linuxplumbersconf.org/2010/ocw/sessions/1179
- Track: Keynote
- 日時: Friday, November 5, 2010 4:30 – 5:15pm

### Description

LibreOffice is the office suite of the future; it also happens to be built round an ancient beast of a codebase that reads, in places, something like a Windows device driver. Come and hear how the exciting transition to a world of beauty and elegance is going.

We will look at the threats to the Free Software ecosystem that poorly managed, corporate dominated, copyright assignment based projects can cause. We’ll look at some f the strains that LibreOffice places on the toolchain, revision-control, the kernel and base system. We will also try to understand the enigma of the failure of component based software engineering.

A development plan will be rambled over, with tips on how you can get your favorite new technology integrate into LibreOffice (should you be so brave), and finally you will be persuaded that this is the best place to make your personal blow for a Free Software office suite that we can all be proud of.

### 添付資料URL

- [slides](https://blog.linuxplumbersconf.org/2010/ocw/system/presentations/1179/original/libre-office.pdf)（file）


### One Line Summary

How we will fix your Free Software Office Suite
# スケジュール未掲載の個別セッションページ


# 提案のみのページ（開催未確認）

## A new perspective on virtuality: View-OS

- セッション個別URL: https://blog.linuxplumbersconf.org/2010/ocw/proposals/627
- 状態: proposal only; absent from timetable
- Track: Refereed Presentations

### Description

未掲載

### 添付資料URL

掲載なし

## Accelerating Platform Device Driver development using HWMODs

- セッション個別URL: https://blog.linuxplumbersconf.org/2010/ocw/proposals/309
- 状態: proposal only; absent from timetable
- Track: Refereed Presentations

### Description

The problem statement:

The bus topology, device integration data & power management features of the various on-chip components located in OMAP SOCs are complex in nature. 

They potentially differ across different SOCs & revisions. Implementing a module device driver catering to all the SOC platforms requires extracting this information manually from respective Technical Reference Manuals and hard coding them as platform specific code. It also involves careful consideration of the offset differences of key registers, bit-fields etc. This process is not only time-consuming but susceptible to both programming errors as well as documentation errors in TRMs.

Introducing HWMOD:

HWMOD is an hw-module abstraction framework that exploits the basic commonality between the OMAP SOCs & attempts to address the above problem through a mix of automation and optimized s/w framework.

HWMOD Scripts:

The various hardware module data is generated automatically from the TI hardware database using suitable scripts called HWMOD scripts. They create constant structures & headers in a standard format to manage information about OMAP on-chip components (“hardware modules”) and their integration to the rest of the chip. The output can be easily plugged into the driver code.

The key information auto generated is:

	Module Base address

	DMA request lines

	IRQs

	The main clock & optional clocks used by the module

	PRCM register offset information for activating/deactivating a module.

	Bus topology information of the module relative to the rest of SOC.

As HWMOD works in sync with the Clock Framework, therefore the clock-database structures too are generated automatically using the same scripts.

As the files are generated directly from the database, scope of error is eliminated.

Thus, this method eases segregation of driver code from platform specific details and reduces porting effort across SOC revisions as well as different/future SOCs.

HWMOD Framework s/w:

The various auto-generated data headers and constants are utilized by a layer of generic framework software called the HWMOD framework layer. This layer populates the Platform-resource information using the hwmod data so that they can be extracted via platform-resource APIs.

HWMOD framework also provides APIs to enable/disable/idle a hwmod. Thereby, it encapsulates all the common code pertaining to generic module Power Management.

To effectively utilize the HWMOD layer, another layer, called the OMAP device layer is written on top of the HWMOD to provide device level enable/disable/idle APIs.

The device drivers are intended to call the OMAP-device layer APIs only or APIs built on top of it via Runtime PM.

HWMOD is designed to fit easily within the Linux Runtime PM framework via the Platform Bus. Platform bus implementation for OMAP calls the OMAP device APIs.

To exploit the HWMOD framework, a driver must be written as a platform-device driver. We intend to convert most of the device drivers to platform device drivers and then all the platform device drivers are to use Runtime PM so that migration to hwmod becomes seamless.

What is in the Presentation:

In this presentation, we intend to discuss on

	HWMOD concepts in detail

Migration steps needed by a Device Driver to adopt HWMOD.

	How HWMOD interfaces with Runtime PM

Benefits achieved within TI by taking the hwmod approach in terms of the development effort saved.

This presentation will potentially interest people who are trying to solve similar scalability problems across different platforms especially in areas of Power Management.

HWMOD conversion of the device drivers is currently in progress on TI OMAP 3 & 4 processors.

Acknowledgements: 

Paul Walmsley [paul@pwsan.com] & Benoit Cousson [b-cousson@ti.com] who are the key authors of the framework.

Kevin Hilman[khilman@deeprootsystems.com]

Rajendra Nayak [rnayak@ti.com]

Sripathi Vishwanath[vishwanath.bs@ti.com]

Santosh Shilimkar[Santosh.shilimkar@ti.com]

Thara Gopinath[thara@ti.com]

Arce Abraham[x0066660]

Varadarajan Charulatha[charu@ti.com]

as the other key contributors.

### 添付資料URL

掲載なし

## Advantages of having a Kernel Sub-Maintainer

- セッション個別URL: https://blog.linuxplumbersconf.org/2010/ocw/proposals/537
- 状態: proposal only; absent from timetable
- Track: Refereed Presentations

### Description

Last year, approximately 9,500 patches were submitted to the Linux kernel networking sub-system.  Of those 9,500 patches, about 8% of those patch submissions were against the in-kernel Intel wired LAN drivers.  In addition, over the last 2 years, the number of in-kernel Intel wired LAN drivers went from 3 drivers (e100, e1000 & ixgb) to 8 drivers (e100, e1000, e1000e, igb, igbvf, ixgb, ixgbe & ixgbevf).  With the increase in Intel wired LAN drivers and the large number of kernel patches, support and maintenance of the in-kernel drivers faced several challenges.

To address the issues in maintaining and supporting the Intel wired LAN drivers, we needed a sub-maintainer to deal with all of these challenges.  I will explain the obstacles we overcame and the advantages we found by having a sub-maintainer and the processes we use to assist us in our daily routine.

### 添付資料URL

掲載なし

## An embedded multimedia platform's way into the mainline kernel

- セッション個別URL: https://blog.linuxplumbersconf.org/2010/ocw/proposals/687
- 状態: proposal only; absent from timetable
- Track: Refereed Presentations

### Description

Probably every embedded multimedia platform has its own share of non-standard requirements and quirks, which prevent its drivers from being easily mergeable into the mainline kernel. Such problems include non-standard memory management requirements, insufficient kernel API support for specific features and lack of helper frameworks and standards.

This talk aims to present the ongoing effort to switch from a closed-source, standards-incompatible multimedia infrastructure and drivers to mainline kernel support for Samsung multimedia devices. The process involves identifying specific requirements of a platform and designing new or extending existing kernel frameworks and APIs, while making them universal and beneficial for others as well.

It is a story of how work to provide support for a specific platform evolved into an effort that now drives many general – current and future – developments in the Linux multimedia infrastructure, which will benefit non-embedded systems as well.

The presentation will also provide ideas on how existing and future kernel frameworks can aid embedded multimedia developers and an insight into some of the directions, towards which Video for Linux development for embedded devices is proceeding.

### 添付資料URL

掲載なし

## ARM userspace

- セッション個別URL: https://blog.linuxplumbersconf.org/2010/ocw/proposals/267
- 状態: proposal only; absent from timetable
- Track: Refereed Presentations

### Description

Nowadays ARM architecture becomes more and more widespread and popular among variety of device vendors. ARM based SoCs are used in smartphones, home NAS boxes, medical equipment, industrial devices and so on etc. Increasing performance of ARM CPUs and low power consumption leads to their adoption by tablet, netbook and even server manufacturers.

A lot of ARM devices run Linux and there are ARM ports of Slackware, Debian, Gentoo and Ubuntu. However, there are very few ARM-based devices can undergo “traditional” Linux installation with ISO or USB images and fancy installers. Device manufacturers craft their root filesystems with cross-compilation frameworks.

The existing cross-compilation frameworks and ARM ports of the mainstream Linux distributions differ in their complexity, flexibility and robustness. 

This talk compares several cross-compilation frameworks as well as ARM ports of the mainstream distributions.

### 添付資料URL

掲載なし

## Benefits of KDB / KGDB for kernel debugging and beyond

- セッション個別URL: https://blog.linuxplumbersconf.org/2010/ocw/proposals/435
- 状態: proposal only; absent from timetable
- Track: Refereed Presentations

### Description

In the last year the Linux kernel debugger has been completely restructured and improved.  The 2.6.35 kernel added new capabilities for a local debug shell (KDB) as well as the capability for early debugging before console_init().

This presentation will touch on the current state of KGDB / KDB as well as future ideas and direction for the kernel debugger.  The presentation will explain how to use the kernel debugger to diagnose an example problem found in a kernel module and trace the problem back to source code.

Finally the presentation will discuss other benefits that the kernel debugger and the polled I/O models could provide to the kernel.  This includes possibilities ranging from more robust atomic Kernel Mode Setting (KMS) support to the possibility of simply being able to hit shift-page up or sysrq after the kernel has called panic() even when you don’t have KDB configured in the kernel!

### 添付資料URL

掲載なし

## C-State optimization

- セッション個別URL: https://blog.linuxplumbersconf.org/2010/ocw/proposals/357
- 状態: proposal only; absent from timetable
- Track: Refereed Presentations

### Description

Within the Linux CPU idle framework, the menu governor aims at getting maximum energy saving during CPU idle time.

An important aspect is the correct and precise assessment of the system latency constraints with respect to the expected sleep time.

During idle periods, the system will choose a power state to reach, called a C-State (Inactive, Retention, OFF).

Each C-state has an energy cost during sleep and wakeup latencies that must be balanced by the reduction of energy during idle.

Which C-state is the most optimal one to be selected in terms of energy saving for a given idle period?

The aim of this study is to answer the above question by presenting an approach that permits to define the most optimal C-State during CPU idle.  

Each C-state has been characterized by a set of parameters:

    – Sleep & wakeup latencies: the deeper the power state is, the longer the sleep & wakeup latencies are

    – Idle energy: the deeper the power state is, the lower the consumption during idle period is

    – Threshold: the minimum idle time required for a given state to start saving power

Based on above parameters, each C-State is represented graphically by a curve showing the accumulated energy over time.

The energy break even point of each C-State is determined by comparing the different curves, therefore the most optimal C-State for a given idle time is deduced.

Determining the system latency constraints linked to a given HW platform in a precise way allowed achieving significant power savings in low power use cases such as MP3 playback.

### 添付資料URL

掲載なし

## Challenge of Directories and Files Scalability

- セッション個別URL: https://blog.linuxplumbersconf.org/2010/ocw/proposals/75
- 状態: proposal only; absent from timetable
- Track: Refereed Presentations

### Description

For PB level distributed file systems, local file systems (e.g ext4, btrfs …) on data nodes encounter new requirements more then what they are originally designed for, for example,

- Store a huge number of files (data chunks) under several directories.

- Store a few big files (80G Bytes~1T Bytes) to take all space of file systems.

- Less I/O when doing directory lookup or file  offset mapping.

- Higher space usage efficiency, don’t waste any $$ spent on SSD blocks.

- File system metadata cache memory pressure on data node.

On a 600+ nodes 2PB+ distributed file system cluster, any small problem might become a big headache.

In this talk, the above challenges on a real example will be shared to audience — TFS 1, the Taobao File System. This talk will mention,

- Local disk file system performance bottom neck for TFS usage

- New requirements to Linux file system development

- The approach that improve part of the performance bottom neck.

- Existed open questions, will co-work with commnity to improve Linux file system.

This talk will take around 40 minutes. If you are interested on how Linux local file systems are used and what are wanted to improve in large scale distributed file system for a high workload online shopping website, please come :-)

1 TFS: Taobao File System. Taobao is the biggest online shopping website in China, TFS is the distributed file system deployed on http://www.taobao.com for goods pictures. TFS is planed to be open source before LPC2010 on http://code.taobao.org

### 添付資料URL

掲載なし

## Checkpoint/Restart: Present, Goals and Blockers

- セッション個別URL: https://blog.linuxplumbersconf.org/2010/ocw/proposals/765
- 状態: proposal only; absent from timetable
- Track: Refereed Presentations

### Description

Traditionally checkpoint and restart of system and application

containers have been largely utilized in the High Performance Computing (HPC) field where specialized limitations on checkpoint/restart implementations were often acceptable. This talk discusses the limits of the checkpoint/restart solution proposed for mainline and relates those limits to typical desktop (non-HPC) userspace environments. The talk will conclude with issues blocking more advanced and general usage of checkpoint/restart with the intent of leading into fruitful discussion at the checkpoint/restart BoF/miniconf.

### 添付資料URL

掲載なし

## CloudStream Transaction Routing with Linux

- セッション個別URL: https://blog.linuxplumbersconf.org/2010/ocw/proposals/213
- 状態: proposal only; absent from timetable
- Track: Refereed Presentations

### Description

未掲載

### 添付資料URL

掲載なし

## Data Center Bridging in the Linux kernel

- セッション個別URL: https://blog.linuxplumbersconf.org/2010/ocw/proposals/633
- 状態: proposal only; absent from timetable
- Track: Refereed Presentations

### Description

Data Center Bridging (DCB) allows traditional Ethernet to meet the requirements of protocols and applications in the data center. The DCB effort is driving changes into the current 802.1 bridging specifications that need to be supported.  Today DCB is implemented in multiple vendor chipsets and provides benefits typical of Fibre Channel and Infiniband over Ethernet.  However, Linux support for DCB is incomplete as hardware architectures are not correctly abstracted in the OS, which leads to hardware specific solutions. More importantly, it is unclear how applications and protocol stacks are supposed to take advantage of the new capabilities offered by DCB in a hardware agnostic environment.

This presentation will highlight benefits that DCB provides to the network, the ongoing enablement effort in the Linux kernel and the current challenges with creating DCB aware protocol stacks and applications. Finally, a proposed solution to fit DCB into existing QOS concepts will be given that should allow protocol stacks and applications to use DCB regardless of the underlying hardware.

### 添付資料URL

掲載なし

## Developing Out-of-Tree Drivers alongside In-Kernel Drivers

- セッション個別URL: https://blog.linuxplumbersconf.org/2010/ocw/proposals/153
- 状態: proposal only; absent from timetable
- Track: Refereed Presentations

### Description

Getting your driver released with a GPL license into the kernel is promoted as the holy grail of Linux hardware enabling, and I agree. That said, producing a quality GPL driver for use in the entire Linux ecosystem is not a task for the faint of heart. Releasing an Ethernet driver through kernel.org is one delivery method, but many users still want a driver that will support the latest or newest hardware on older kernels.

To meet our users’ requirements for more than just hardware support in the latest kernel.org kernel, we in Intel’s LAN Access Division (LAD) developed a set of coping strategies, processes, code, tools, and testing methods that are worth sharing. These learnings help us reuse code, maintain quality, and maximize our testing resources in order to get the best quality product in the shortest amount of time to the most customers. While not the most popular topic with core kernel developers, out-of-tree drivers are a necessary business solution for hardware vendors with many users, and this paper describes how we do it. Our Open Source drivers generally work with all kernel releases 2.4 and later, and I’ll explain many of the details about how we get there.

### 添付資料URL

掲載なし

## Device DVFS

- セッション個別URL: https://blog.linuxplumbersconf.org/2010/ocw/proposals/291
- 状態: proposal only; absent from timetable
- Track: Refereed Presentations

### Description

DVFS is a technique that uses the optimal operating frequency and voltage to allow a task to be performed in the required amount of time. Traditionally DVFS has been associated with the processor speed scaling or the bus speed scaling along with scaling the associated voltage regulator. In the new approach we would like to move away from the concept of just processor speed or bus speed and extend DVFS to the entire devices present in the system. A system can have multiple scalable devices each one of them associated with a voltage regulator. Depending on the voltages to which the regulator can be scaled, the device can have varied operating frequencies (scalable frequencies). This implies each scalable device can have a series of voltage and operating frequency pair associated with it. Also a voltage regulator can be shared between devices (scalable/ non-scalable). This means that the final voltage to which the regulator is to be scaled at any instant should be the maximum of the operating voltage requirements of all the devices fed by the regulator. If different VDDs have any inter dependencies, that also gets taken care in this approach by having a cross vdd dependency table for each VDD. Also as frequency of a device for a given Voltage is actually the maximum frequency for the given voltage, it is possible to restirct the frequency to a lower one depending on the thermal condition (Thermal management).

The design involves maintaining a table per scalable device capturing the information like the voltage regulator associated with the device, a table containing voltage-operating frequency pairs, function pointer to populate the actual function that scales the device operating frequency etc. Also a use counting mechanism is needed on a per regulator basis to take in requests from various devices and return back the maximum of all the requests. A generic kernel level API can then take in the device pointer and the required rate as parameters and derive the actual rate possible after taking in the possible voltage from the voltage regulator use-counting mechanism. This API will call into the function pointer populated in the per scalable device table for scaling the operating frequency of the device and a voltage scaling API to scale the associated 

regulator voltage.

The idea is currently undergoing implementation for TI OMAP processors and the presentation/paper elucidates how this is being achieved in OMAP and how this principle can be extended to other Soc’s.

This abstract is based on Collective work of Thara Gopinath (thara@ti.com) and Benoit Cousson (b-cousson@ti.com) with inputs from Kevin Hilman, Paul Walmsley, Anand Sawant, Partha Basak and Vishwanath BS.

### 添付資料URL

掲載なし

## Device trees on ARM

- セッション個別URL: https://blog.linuxplumbersconf.org/2010/ocw/proposals/303
- 状態: proposal only; absent from timetable
- Track: Refereed Presentations

### Description

Currently, the Linux ARM architecture code supports a large number of ARM boards, spanning a huge variety of hardware configurations. At present, support for each platform is fairly separate, and hardware setup code is predefined at compile time.

Open Firmware device trees provide a method of representing hardware in a machine-readable form, and have been used for all sorts of hardware, most prominently on the PowerPC architecture. On device-tree platforms, the kernel parses a device tree to discover the configuration of hardware, and uses this information to initialise the machine correctly.

Since late 2009, the author (with help from all sorts of contributors) has been working to add device tree support to the ARM platform, to do more of the machine-specific configuration at boot time. We aim to provide more flexible platform support, while reducing the amount of board-specific code. Eventually, we’re aiming to allow for fewer kernel builds to support a larger range of machines.

This presentation will be a general overview of the device tree on ARM plans and specifications, as well as the current status of ARM device tree support in the kernel.

### 添付資料URL

掲載なし

## EGL and GLES1/2 on Linux

- セッション個別URL: https://blog.linuxplumbersconf.org/2010/ocw/proposals/543
- 状態: proposal only; absent from timetable
- Track: Refereed Presentations

### Description

EGL is a platform independent API for integrating the OpenGL rendering API with the underlying window system.  It can be used as a replacement for GLX, WGL, AGL, but will also run on devices with custom or no window systems.  As such, it’s very popular in embedded devices.

Along with EGL, applications often use GLES1 or GLES2.  These are subsets of the full OpenGL rendering API, designed for embedded use.  They cut away many legacy or less useful features, and target fixed funcition and fully programmable GPU respectively.

This talk will give brief overview of EGL and GLES1/2 and some of the most interesting extensions and demonstrate how we support them in the open source mesa drivers.

### 添付資料URL

掲載なし

## Embedded platform mainlining: benefits, obstacles and examples.

- セッション個別URL: https://blog.linuxplumbersconf.org/2010/ocw/proposals/261
- 状態: proposal only; absent from timetable
- Track: Refereed Presentations

### Description

Embedded platforms as well as devices running Linux are rarely supported by the mainline kernel and upstream distributions. And, although the benefits of being in the mainline were described by numerous presentations and articles, the device manufacturers still prefer to invent their own Linux based wheel.

It happens because of  different technical and less technical problems and obstacles that overweight mainlining benefits from the device manufacturers point of view.

This talk aims to help embedded developers to overcome the technical obstacles and have their platform accepted in the mainline kernel. It presents simple recipes that allow to keep in pace with the mainline and ship a working product at the same time.

### 添付資料URL

掲載なし

## Ensuring BIOS+ACPI works with Linux

- セッション個別URL: https://blog.linuxplumbersconf.org/2010/ocw/proposals/315
- 状態: proposal only; absent from timetable
- Track: Refereed Presentations

### Description

BIOS and ACPI bugs are all too common and can be difficult and time consuming to diagnose and fix.  This talk covers common BIOS/ACPI issues found in enabling Linux on PC hardware and how this knowledge has been distilled into an automatic firmware testing tool.

### 添付資料URL

掲載なし

## Exploiting Kernel Resource Management Features in the Virtual World

- セッション個別URL: https://blog.linuxplumbersconf.org/2010/ocw/proposals/225
- 状態: proposal only; absent from timetable
- Track: Refereed Presentations

### Description

未掲載

### 添付資料URL

掲載なし

## External Networking Switching in Linux

- セッション個別URL: https://blog.linuxplumbersconf.org/2010/ocw/proposals/759
- 状態: proposal only; absent from timetable
- Track: Refereed Presentations

### Description

With increasing use of virtual servers there is  a requirement for automating the associated network management and administration. Each hypervisor adds multiple switches to the network, as well as the network adapters are incorporating switching functions as they support io virtualization.

This paper describes the Linux enhancements enabling the offloading of the switching function to the external physical switches (in adapters or in the physical network) enabling simplification of the management and enforcement of port profiles. We also discuss the current implementation supporting IEEE 802.1Qbg/Qbh and the future enhancements required in qemu/kvm to overcome current limitations. We will discuss and propose solutions for VM migration when external switching and io virtualization is supported, and support required for “multi-channel” i.e enable host based, as well as external switching on the same uplink simultaneously.

This presentation complements the proposal “Automating Network Isolation and Quality of Service”. Both will form the basis for a miniconf/BoF on linux layer-2 switching, isolation, QoS and performance.

### 添付資料URL

掲載なし

## Framework for testing KVM in cloud

- セッション個別URL: https://blog.linuxplumbersconf.org/2010/ocw/proposals/423
- 状態: proposal only; absent from timetable
- Track: Refereed Presentations

### Description

未掲載

### 添付資料URL

掲載なし

## Kernel Debugging (Current state)

- セッション個別URL: https://blog.linuxplumbersconf.org/2010/ocw/proposals/345
- 状態: proposal only; absent from timetable
- Track: Refereed Presentations

### Description

This presentation intends to describe about the kernel debugging methods

on the Linux kernel. In order to do so, this presentation will be heavily

based on the tracing tools that are part of the upstream kernel, as

Ftrace, Performance Counter, SystemTap and KGDB/KDB.

This presentation assumes that the audience knows the basic about kernel

tracing, so that an in-depth discussion could be presented. Also, a good

comparative between the tools will be given, mainly describing its main

focus area, performance, integration and implementation.

Also, the presentation will describe some daily problems and how to use

these tools in order to help developers to find the root cause of the 

problem. Also, it will be shown different ways to integrate the tracing

tools so that the developer can get the best of each tool, generating a

better tracing information.

Here is a draft of the agenda:

- Kernel debugging introduction

- Describe the current tracing tools and their status

- Focus area for each tracing tool

- Comparative among the tools, using real problems

- Integrating the tools

- Internals of the tools

- Advanced topics

### 添付資料URL

掲載なし

## KVM I/O Performance on Large Storage Systems

- セッション個別URL: https://blog.linuxplumbersconf.org/2010/ocw/proposals/207
- 状態: proposal only; absent from timetable
- Track: Refereed Presentations

### Description

In December 2006, Linus Torvalds announced that new versions of the Linux kernel would include the virtualization tool known as KVM (Kernel Virtual Machine Monitor).  Since then, KVM has risen very quickly to prominence, thanks to the inherent advantages of kernel-based virtualization.  As in any virtualized environment, the I/O performance represents one of the toughest challenges for KVM.  Since the introduction of KVM in 2006, there has been much focus on the network performance, and the latest technologies, such as vhost-net and SR-IOV, have been implemented to improve the KVM network performance to near line speeds.  By contrast, the KVM storage I/O performance has not been afforded such intense focus, especially on large storage systems.

In this presentation, we will examine the KVM block I/O performance in three large storage environments, using the open-source Flexible File System Benchmark (FFSB) to generate I/O workloads.  Each of these storage environments has its own performance characteristics and bottlenecks, and thus, presents its own unique challenge to KVM in terms of storage I/O performance.

First, we will take a look at how well I/O operations to a large, direct-attached storage system with multiple disk arrays can be supported in a KVM guest.  We will discuss how such I/O operations are handled by the KVM block I/O architecture, identify the performance issues that we encountered and discuss our recent results in addressing those issues to achieve more optimal throughput and lower virtual CPU usage in the KVM guest.

We will next consider a remote storage system environment where I/O operations in the KVM guest are supported over the Network File System (NFS) to a remote, large storage system. This remote storage is managed by a separate physical storage node, which is connected to the KVM host through a private 10-Gbps Ethernet network.  We will discuss the performance issues we found in this environment and the available solutions to resolve those issues.

Finally, we will examine how multiple KVM guests can function as “interface nodes” to support I/O requests from multiple customers in a typical cloud environment.  The storage stack in this cloud environment includes IBM General Parallel File System (GPFS) and network file systems such as NFS and CIFS (Common Internet File System).  We will analyze the resource consumption of KVM guests, discuss the potential system performance bottlenecks, and demonstrate the performance and scalability advantages of KVM in this cloud environment.

In summary, we hope this presentation will give the audience a good sense of where KVM is in terms of I/O performance in several large storage environments, what the performance issues are, and our recent work in addressing those issues.

### 添付資料URL

掲載なし

## KVM: Automating Network Isolation and Quality of Service

- セッション個別URL: https://blog.linuxplumbersconf.org/2010/ocw/proposals/285
- 状態: proposal only; absent from timetable
- Track: Refereed Presentations

### Description

未掲載

### 添付資料URL

掲載なし

## Linaro 10.11 and beyond: kernel consolidation and Linux plumbing

- セッション個別URL: https://blog.linuxplumbersconf.org/2010/ocw/proposals/585
- 状態: proposal only; absent from timetable
- Track: Refereed Presentations

### Description

未掲載

### 添付資料URL

掲載なし

## Linux Kernel Scalability for Systems with Large Number of CPUs

- セッション個別URL: https://blog.linuxplumbersconf.org/2010/ocw/proposals/351
- 状態: proposal only; absent from timetable
- Track: Refereed Presentations

### Description

As the number of Cores for the current generation of CPU reach double digit, systems that have number of CPU cores in the hundreds will become common in the near future. Locking bottlenecks could easily occur on large system if the code design did not have scalability on such scale in mind.  We will discuss scalability issues we have found in file systems, I/O, memory management to provide lessons on practices to avoid, and also areas in the kernel where work still need to be done.

### 添付資料URL

掲載なし

## Live migration of hidden files

- セッション個別URL: https://blog.linuxplumbersconf.org/2010/ocw/proposals/573
- 状態: proposal only; absent from timetable
- Track: Refereed Presentations

### Description

In the course of live migration of an OpenVZ Linux container, we have encountered a problem of migrating files which do not appear in a the filesystem tree.

When we checkpoint an opened file, we store the full filename to an image file, and on the restore stage we try to open the file by this name. There are cases when an opened file is inaccessible by the name. First, another filesystem can be mounted to some parent directory (so called overmount). Second, the file is unlinked. In both cases restoration by a file name no longer works.

To solve such issues, we found ways to store the path that at the restoring time will point to the desired file, plus some VFS trickery at a time of restore.

### 添付資料URL

掲載なし

## Live migration of kernel NFS mounts

- セッション個別URL: https://blog.linuxplumbersconf.org/2010/ocw/proposals/567
- 状態: proposal only; absent from timetable
- Track: Refereed Presentations

### Description

In the course of live migration of an OpenVZ Linux container, we have encountered a chicken-and-egg class problem.

To restore an NFS mount one should restore the container’s network first. To restore network one should restore the container’s processes first. To restore processes one should restore all the opened files first. In case opened files are on NFS … Houston, we have a problem!

After researching possible solutions, we decided to break this vicious circle at the NFS mount restoration stage. In order to do that, we use a special purpose file system called delayfs. It helps to postpone bringing up NFS mount and files to a later time when the networking is fully functional.

### 添付資料URL

掲載なし

## Media Controller, harnessing the full power of tomorrow's multimedia devices

- セッション個別URL: https://blog.linuxplumbersconf.org/2010/ocw/proposals/615
- 状態: proposal only; absent from timetable
- Track: Refereed Presentations

### Description

Back when the first version of the Video 4 Linux (V4L) API was designed, video acquisition and output devices available to Linux users and developers only offered basic functions. With the introduction of hardware compression, V4L showed its limits and the new V4L2 API saw the light of the day in the 2.5.x kernels.

Video hardware available today once again push the Linux video API to its limits, and there’s no doubt that tomorrow’s devices will offer even more complex features. Several V4L developers got together during the Linux Plumbers Conference 2009 to discuss a possible future extension to the V4L subsystem called the Media Controller.

Targeted at both embedded and desktop hardware, the Media Controller will let userspace applications access media hardware to discover and control devices internals. Although written with V4L in mind, the API is not limited to V4L but aims at being useful for sound and display devices as well.

This talk will introduce the Media Controller concept and present the current state of the implementation.

### 添付資料URL

掲載なし

## Network QoS Guarantees for Virtual Machines

- セッション個別URL: https://blog.linuxplumbersconf.org/2010/ocw/proposals/693
- 状態: proposal only; absent from timetable
- Track: Refereed Presentations

### Description

Providing QoS guarantees to Virtual Machines (VMs) is a challenging

task. When dealing with compute-intensive virtualised workloads, it

is possible to exploit proper real-time schedulers in order to achieve

the desired level of isolation.

However, when considering network-intensive workloads, a significant

interference among the VMs is due to kernel-level shared code

segments, such as the networking stack and interrupts, which cannot

easily be controlled by the scheduler.

Current approaches to networking guarantees merely consider the use of

traffic shapers. We propose to handle the networking traffic of

individual VMs into different contexts (e.g., kernel threads), so as

to enhance the possibility for the scheduler to isolate the temporal

behavior of independent VMs (e.g., by exploiting real-time scheduling).

### 添付資料URL

掲載なし

## Page reclaim challenges with cgroup based resource controller

- セッション個別URL: https://blog.linuxplumbersconf.org/2010/ocw/proposals/255
- 状態: proposal only; absent from timetable
- Track: Refereed Presentations

### Description

A good page replacement algorithm introduces minimum page-fault on the system. So the goal is to keep the “right” page in memory which will be accessed soon. It is difficult since each process has different memory access pattern. Also each type of memory pool has different properties to work with. Considering efficiency and scalability, Linux uses Least Recently Used (LRU) along with Page Aging(PG_referenced).

Cgroup and resource controllers in Linux are used to provide resource isolation of a group of processes. A memory controller allows us to monitor and limit the resident set size (RSS) of a cgroup. The infrastructure provided for memory isolation adds a new dimension to the existing page reclaim logic. Each cgroup maintains its own page LRU lists. Per-cgroup background reclaim(kswapd) is triggered based on different memory pressure rate. Lock contention is one of the challenges working with multiple kswapd threads. Not only user pages, the kernel slabs needs to be isolated as well and changes are needed to existing slab shrinkers. Page reclaim also relays on the dirty pagecache writeout and it might cause system OOM with different filesystem writeout strategies.

This talk will present our current page reclaim solution based on the existing cpusets and fake numa mechanism, and discuss about the challenges we faced and issues remained.  Also we will discuss about the ideas to how to do efficient page reclaim on per-page memory controller based system.

### 添付資料URL

掲載なし

## Performance degradation problems in Flash Memory card

- セッション個別URL: https://blog.linuxplumbersconf.org/2010/ocw/proposals/387
- 状態: proposal only; absent from timetable
- Track: Refereed Presentations

### Description

Every MMC and SD card is a non-volatile (Flash) memory card and has a built in controller that manages the internal NAND memory.  The Card Controller runs several tasks including – manages erase, read, write, wear leveling (WLA), bad block management, garbage collection(GC), internal error-correcting code (ECC), CRC. Time for read/write operation depends upon other background tasks running in the card controller. Hence, low read/write times is not guaranteed. This is crucial for achieving required fps in AV record and playback multimedia applications.

The read/write time is between 0 to maximum timeout.  The Specifications (MMCA and SDA) have timeout requirements for the card manufacturers to guarantee that after a certain time the card will either complete the read/write task or return an error.  So any Card only guarantees that is the timeout for read/write request form host.

The critical and time consuming operation performed by card-controller before actual write to internal card memory are – erase, WLA, bad block management, GC (some are optional depending on card state). Multiple block write takes advantage of the card’s internal parallel writing scheme.  Typically the cards will have internal block buffers that take multiple blocks of data and write them in parallel. These speeds up over all write performance. But does NOT necessary reduce the delays.

Debugging these issues brought several observations such as:

  1. The card/bus busy time is too huge for the cards which are giving the slower performance. For some card delay up to 300ms.

  2. There is bus busy time after every block write as well as after few blocks write (might be because of the internal card buffer full).

  3. At the end of write (CMD12) there is big card busy time to complete the write request.

It’s the host need to effectively utilize the performance challenges in MMC/SD card. Also host need to maintain the sustained (minimum performance) rate for crucial application like high density, high bandwidth, high quality AV recording multimedia application.

The proposed solutions in the Kernel – to overcome these performance limitations in MMC/SD cards – that are discussed in the paper include:

  1. erase the partition at format

  2. pre-erase setting prior to a multiple block write operation

  3. Use the pipe line (multiple) buffers before to write and to average out the write throughput.

  4. or mount with Sync/ASync mode 

  5. addition of GC thread (for old data and not used to be erased)

Most of the proposed solution are proven and few are currently undergoing implementation and testing phase.

### 添付資料URL

掲載なし

## Porting virtio to other architecture – the PowerVM example

- セッション個別URL: https://blog.linuxplumbersconf.org/2010/ocw/proposals/369
- 状態: proposal only; absent from timetable
- Track: Refereed Presentations

### Description

The Linux kernel supports a variety of virtualization systems, each one with its own strategy to tackle I/O virtualization.  The attempt to address this problem is virtio, a series of efficient and optimized set Linux I/O drivers organized in a multi-layered architecture, including hypevisor-specific and hypervisor-agnostic layers. 

The intent of this presentation is to show how the virtio vision can be materialized, by porting it to a different hypervisor technology, like IBM’s POWER systems PowerVM, while re-using guest’s drivers. It should go through the specifics of creating a virtio transport implementation to the platform’s CRQ message passing transport, as well as the strategy for implementing an appropriate back-end in the virtual I/O server (kernel and user space). 

Attendees can expect to learn more on PowerVM I/O model and programming, virtio porting experience as well as discuss evolving the transport (copy) implementation for the project.

### 添付資料URL

掲載なし

## Power management in the Linux Graphics Stack

- セッション個別URL: https://blog.linuxplumbersconf.org/2010/ocw/proposals/453
- 状態: proposal only; absent from timetable
- Track: Refereed Presentations

### Description

未掲載

### 添付資料URL

掲載なし

## Processed-Based Shared Memory via Shared Libraries

- セッション個別URL: https://blog.linuxplumbersconf.org/2010/ocw/proposals/441
- 状態: proposal only; absent from timetable
- Track: Refereed Presentations

### Description

未掲載

### 添付資料URL

掲載なし

## Proof Of Concept results of Wake Lock replacement experiments for Android 2.2

- セッション個別URL: https://blog.linuxplumbersconf.org/2010/ocw/proposals/243
- 状態: proposal only; absent from timetable
- Track: Refereed Presentations

### Description

Ever since the collaboration summit in April 2010 there has been a lot of traffic on the linux-pm list about wake locks, suspend blockers, wake notifications, pm-qos based wake locks (which resulted in plist-based pm-qos and is a nice enhancement to the pm-qos implementation) … its never completely ended.

The current patches in response to the wake locks that have potential to solve some of the wake lock crisis is Rafael’s pm_wakeup_event patch.  http://lkml.org/lkml/2010/6/19/200 However; this solution requires a tweak to user mode.  Someone needs to give it a good try within a credible google-Android implementation to see where the gaps are and compare how it well it works WRT the original Android PM design.

So, as a side project I’m hacking together an android stack and kernel to use the pm wakeup event mechanism to find out where it falls over or is incomplete.  (and perhaps fix things up a bit.)

My day job includes helping to make standard Android PM work as well as possible on UMG hardware.  I hope to be able to do a good job at comparing this POC against the standard android PM.

This is a work in progress but I can commit to having results and something to say about it by late October.

### 添付資料URL

掲載なし

## Relativistic Red Black Trees

- セッション個別URL: https://blog.linuxplumbersconf.org/2010/ocw/proposals/681
- 状態: proposal only; absent from timetable
- Track: Refereed Presentations

### Description

未掲載

### 添付資料URL

掲載なし

## Scaling Linux Networking Beyond 10 Gigabit

- セッション個別URL: https://blog.linuxplumbersconf.org/2010/ocw/proposals/273
- 状態: proposal only; absent from timetable
- Track: Refereed Presentations

### Description

10 Gigabit networking is a fast-growing market in today’s industry. Faster platforms, lower infrastructure costs, and a growing number of advanced features have driven this migration to higher bandwidth needs. However, as the platforms keep getting faster and keep growing in number of CPU cores and NUMA memory nodes, scaling networking becomes more and more challenging.

This presentation will illustrate the challenges facing high I/O networking. It will focus on what has been done in the past year to help scale, including better NUMA locality, cacheline-aligned structures, and more efficient interrupt handling. Looking to the future, the presentation will highlight ongoing areas for improvement, such as better interrupt affinity policies with MSI-X, better NUMA scalability, working with increased CPU counts, all which are necessary to efficiently drive speeds beyond 10 Gigabit.

### 添付資料URL

掲載なし

## Secure deletion withLinux

- セッション個別URL: https://blog.linuxplumbersconf.org/2010/ocw/proposals/69
- 状態: proposal only; absent from timetable
- Track: Refereed Presentations

### Description

未掲載

### 添付資料URL

掲載なし

## Securing KVM virtualization: now and then

- セッション個別URL: https://blog.linuxplumbersconf.org/2010/ocw/proposals/507
- 状態: proposal only; absent from timetable
- Track: Refereed Presentations

### Description

未掲載

### 添付資料URL

掲載なし

## SLAM: a mutable slab allocator

- セッション個別URL: https://blog.linuxplumbersconf.org/2010/ocw/proposals/405
- 状態: proposal only; absent from timetable
- Track: Refereed Presentations

### Description

There is a very strong desire to consolidate the functionality of the three Linux slab allocators, SLAB, SLUB, and SLOB, into a single entity.  Choosing amongst these subsystems is difficult to do when systems run a variety of workloads, and the increasing maintenance burden is preventing forward progress from being made.  Linus has indicated that he refuses to merge an additional allocator until an existing one is removed.

SLAM is the next generation slab allocator for the Linux kernel.  It is a drop-in replacement for the current allocators without sacrificing any performance or memory footprint.  Although its design is slightly more complex than others, it is based on the fundamental belief that all slab caches do not behave the same.  Caches that allocate networking data structures have very different allocation and freeing patterns than caches that allocate task structs, for example.  SLAM enables caches to utilize different slowpaths based on their use so they operate most efficiently with an optimized fastpath.  The behavior is both configurable by generic kernel code through a new export, kmem_cache_advise(), as well as at compile-time and runtime.

This topic appeals to a technical audience because virtually every subsystem within the kernel relies upon slab allocations in one way or another.  Developers need to be aware of the new interfaces available to optimize their memory allocations based on how their subsystem uses kernel memory.  They also have a general desire to reduce the variance in performance as the result of running with the SLAB allocator compared to the SLUB allocator, for example, which is completely out of their control.

I have worked as a kernel developer at Google for 3 1/2 years mainly focusing on resource isolation and memory management.  I have hundreds of patches merged in the mainline kernel, mostly in the VM subsystem.  I am the author of the SLAM allocator.

### 添付資料URL

掲載なし

## Taking Linux Filesystems to the Space Age: Space Maps in Ext4

- セッション個別URL: https://blog.linuxplumbersconf.org/2010/ocw/proposals/43
- 状態: proposal only; absent from timetable
- Track: Refereed Presentations

### Description

With the ever increasing filesystem sizes, there is a constant need for faster filesystem access. A vital requirement to achieve this is efficient filesystem metadata management.

The bitmap technique currently used to manage free space in Ext4 is faced by challenges owing to this exponential increase. This has led us to re-examine the available choices and explore a radically different design of managing free space called Space Maps.

This paper describes the design and implementation of Space Maps in Ext4. The paper also highlights the limitations of bitmaps and does a comparative study of how Space Maps fare against them. In Space Maps, free space is represented by extent based red-black trees and logs. This design makes the free space information of the filesystem extremely compact allowing it to be stored in memory at all times. This significantly reduces the long, random seeks on the disk that were required for updating the metadata. Since seeks are the bottleneck as far as filesystem performance is concerned, their extensive reduction leads to faster filesystem operations. Apart from the allocation/deallocation improvements, the log based design of Space Maps helps reduce fragmentation at the filesystem level itself. Space Maps uplift the performance of the filesystem and keep the metadata management in tune with the highly scalable Ext4.

### 添付資料URL

掲載なし

## The future of Common Criteria certifications with the new "Operating Systems Protection Profile" (OSPP)

- セッション個別URL: https://blog.linuxplumbersconf.org/2010/ocw/proposals/513
- 状態: proposal only; absent from timetable
- Track: Refereed Presentations

### Description

未掲載

### 添付資料URL

掲載なし

## TILER: A new and efficient way to provide memory for video and imaging processing

- セッション個別URL: https://blog.linuxplumbersconf.org/2010/ocw/proposals/549
- 状態: proposal only; absent from timetable
- Track: Refereed Presentations

### Description

As today’s Smartphones become more feature-rich with the inclusion of high definition multimedia, larger requirements and the efficient accesses of memory for video and image processing are becoming increasingly necessary.

The fourth generation Open Multimedia Applications Platform (OMAP) processor from Texas Instruments provides a better way to address video and imaging memory needs using the Dynamic Memory Manager hardware module (DMM) and its Tiling and Isometric Lightweight Engine for Rotation (TILER) sub-module.

The DMM and TILER software drivers enable features from its hardware counterparts and are primarily responsible for:

•	dynamically reserving two-dimensional areas within the TILER

•	managing physical pages obtained from the kernel that are mapped to the TILER address space

•	mapping physical memory addresses to TILER addresses using the DMM’s physical address translator (PAT)

•	providing logic to allow display subsystems to efficiently rotate and mirror TILER memory

•	mapping two-dimensional TILER memory addresses into the virtual address spaces of user space clients

•	providing an interface to other kernel and user space clients to allocate tiled memory

This presentation will discuss the strategies made and decisions taken to expose the DMM and TILER hardware capabilities to software multimedia clients, such as video for Linux (V4L), OMAP frame buffer, GStreamer, and OpenMax drivers and components.

### 添付資料URL

掲載なし

## UBI with Logging

- セッション個別URL: https://blog.linuxplumbersconf.org/2010/ocw/proposals/333
- 状態: proposal only; absent from timetable
- Track: Refereed Presentations

### Description

未掲載

### 添付資料URL

掲載なし

## Virtualizing NUMA

- セッション個別URL: https://blog.linuxplumbersconf.org/2010/ocw/proposals/321
- 状態: proposal only; absent from timetable
- Track: Refereed Presentations

### Description

All recent servers with more than one CPU socket rely on NUMA (non-uniform memory access) to solve scalability problems. If guests fit entirely into one NUMA node (both in terms of memory and required vCPUs), the current implementation both in KVM and Xen work quite well. But if larger guests exceed one of these resources, the performance may degrade.

The solution is to allow the hypervisor to assign resources from multiple nodes to one guest and to tell the guests about it by injecting a virtual NUMA layout.

While it is comparatively easy to generate the appropriate ACPI SRAT table and inject it into the guest (which is already implemented in QEMU), the host binding part is more complicated. The main problem is

the static nature of a one-time allocation and binding, as is limits the guest to be scheduled on a certain subset of nodes. This works against the nice default load-balancing feature of virtual machines.

The current first implementations in Xen and KVM rely on pinning the guests, which is OK for a rather static virtualization setup and resembles the old partitioning approach of early virtualization solutions.

In the talk I will sketch both the implementations in Xen and KVM and show the effects caused by the different architectures. Possible extensions are shown. Also demonstrated are the performance effects of NUMA un-awareness in the hypervisor and the guests. Particular attention is paid to the potential performance enhancements caused by spreading guests across different nodes to let them use separate resources.

The talk targets both developers and administrators looking for improved virtualization performance on larger systems.

### 添付資料URL

掲載なし

## Audio Use Case management

- セッション個別URL: https://blog.linuxplumbersconf.org/2010/ocw/proposals/927
- 状態: proposal only; absent from timetable
- Track: Audio

### Description

Todays modern mobile devices must provide users with feature rich audio hardware functionality that must be seamlessly integrated with applications, optimized for power and provide excellent performance. The ALSA Use Case Manager (UCM) is designed to achieve all of the above and provide clients (like Pulseaudio) with a means of controlling audio hardware without any underlying hardware knowledge.

This session aims to introduce the UCM and to spark discussion of integration of the UCM into the upper levels of the plumbing layer.

### 添付資料URL

掲載なし

## Exposing routing information to applications

- セッション個別URL: https://blog.linuxplumbersconf.org/2010/ocw/proposals/807
- 状態: proposal only; absent from timetable
- Track: Audio

### Description

未掲載

### 添付資料URL

掲載なし

## Handling of digital audio links in ASoC

- セッション個別URL: https://blog.linuxplumbersconf.org/2010/ocw/proposals/801
- 状態: proposal only; absent from timetable
- Track: Audio

### Description

未掲載

### 添付資料URL

掲載なし

## Media controller: finally getting audio and video to play together

- セッション個別URL: https://blog.linuxplumbersconf.org/2010/ocw/proposals/1023
- 状態: proposal only; absent from timetable
- Track: Audio

### Description

未掲載

### 添付資料URL

掲載なし

## Routing compressed data through PulseAudio

- セッション個別URL: https://blog.linuxplumbersconf.org/2010/ocw/proposals/1167
- 状態: proposal only; absent from timetable
- Track: Audio

### Description

未掲載

### 添付資料URL

掲載なし

## State of the Linux Audio Infrastructure in 2010

- セッション個別URL: https://blog.linuxplumbersconf.org/2010/ocw/proposals/867
- 状態: proposal only; absent from timetable
- Track: Audio

### Description

未掲載

### 添付資料URL

掲載なし

## Triaging, debugging, and fixing Ubuntu's audio problems

- セッション個別URL: https://blog.linuxplumbersconf.org/2010/ocw/proposals/1149
- 状態: proposal only; absent from timetable
- Track: Audio

### Description

未掲載

### 添付資料URL

掲載なし

## Beyond init: systemd

- セッション個別URL: https://blog.linuxplumbersconf.org/2010/ocw/proposals/873
- 状態: proposal only; absent from timetable
- Track: Boot and Init

### Description

未掲載

### 添付資料URL

掲載なし

## bootchart2 - what is going on ?

- セッション個別URL: https://blog.linuxplumbersconf.org/2010/ocw/proposals/1119
- 状態: proposal only; absent from timetable
- Track: Boot and Init

### Description

未掲載

### 添付資料URL

掲載なし

## Dracut - a generic initramfs infrastructure

- セッション個別URL: https://blog.linuxplumbersconf.org/2010/ocw/proposals/339
- 状態: proposal only; absent from timetable
- Track: Boot and Init

### Description

未掲載

### 添付資料URL

掲載なし

## Remote booting over iSCSI and FCoE: The past, the present, and the future.

- セッション個別URL: https://blog.linuxplumbersconf.org/2010/ocw/proposals/903
- 状態: proposal only; absent from timetable
- Track: Boot and Init

### Description

未掲載

### 添付資料URL

掲載なし

## Desktop Miniconference

- セッション個別URL: https://blog.linuxplumbersconf.org/2010/ocw/proposals/393
- 状態: proposal only; absent from timetable
- Track: Desktop

### Description

未掲載

### 添付資料URL

掲載なし

## EGL and GLES1/2 on Linux

- セッション個別URL: https://blog.linuxplumbersconf.org/2010/ocw/proposals/1005
- 状態: proposal only; absent from timetable
- Track: Desktop

### Description

未掲載

### 添付資料URL

掲載なし

## GNOME OS

- セッション個別URL: https://blog.linuxplumbersconf.org/2010/ocw/proposals/1227
- 状態: proposal only; absent from timetable
- Track: Desktop

### Description

未掲載

### 添付資料URL

掲載なし

## multi-card/gpu - can we fix it?

- セッション個別URL: https://blog.linuxplumbersconf.org/2010/ocw/proposals/993
- 状態: proposal only; absent from timetable
- Track: Desktop

### Description

未掲載

### 添付資料URL

掲載なし

## systemd and the desktop

- セッション個別URL: https://blog.linuxplumbersconf.org/2010/ocw/proposals/1161
- 状態: proposal only; absent from timetable
- Track: Desktop

### Description

未掲載

### 添付資料URL

掲載なし

## data logging for device field trials

- セッション個別URL: https://blog.linuxplumbersconf.org/2010/ocw/proposals/975
- 状態: proposal only; absent from timetable
- Track: Embedded

### Description

未掲載

### 添付資料URL

掲載なし

## Device tree discussion session

- セッション個別URL: https://blog.linuxplumbersconf.org/2010/ocw/proposals/909
- 状態: proposal only; absent from timetable
- Track: Embedded

### Description

未掲載

### 添付資料URL

掲載なし

## discussing syslink: an efficient inter-processor communication system for mobile devices

- セッション個別URL: https://blog.linuxplumbersconf.org/2010/ocw/proposals/1077
- 状態: proposal only; absent from timetable
- Track: Embedded

### Description

未掲載

### 添付資料URL

掲載なし

## Embedded platform mainlining: benefits, obstacles and examples

- セッション個別URL: https://blog.linuxplumbersconf.org/2010/ocw/proposals/939
- 状態: proposal only; absent from timetable
- Track: Embedded

### Description

未掲載

### 添付資料URL

掲載なし

## Multimedia memory management nightmare

- セッション個別URL: https://blog.linuxplumbersconf.org/2010/ocw/proposals/1059
- 状態: proposal only; absent from timetable
- Track: Embedded

### Description

未掲載

### 添付資料URL

掲載なし

## Per-device PM QoS constraints

- セッション個別URL: https://blog.linuxplumbersconf.org/2010/ocw/proposals/819
- 状態: proposal only; absent from timetable
- Track: Embedded

### Description

未掲載

### 添付資料URL

掲載なし

## Running mainstream distributions on ARM

- セッション個別URL: https://blog.linuxplumbersconf.org/2010/ocw/proposals/999
- 状態: proposal only; absent from timetable
- Track: Embedded

### Description

未掲載

### 添付資料URL

掲載なし

## Unfragmenting embedded Linux platform offerings

- セッション個別URL: https://blog.linuxplumbersconf.org/2010/ocw/proposals/555
- 状態: proposal only; absent from timetable
- Track: Embedded

### Description

未掲載

### 添付資料URL

掲載なし

## Crafting Elegant User Experiences Involving Complex Storage Technologies

- セッション個別URL: https://blog.linuxplumbersconf.org/2010/ocw/proposals/795
- 状態: proposal only; absent from timetable
- Track: File and Storage Systems

### Description

未掲載

### 添付資料URL

掲載なし

## File and Storage Systems

- セッション個別URL: https://blog.linuxplumbersconf.org/2010/ocw/proposals/201
- 状態: proposal only; absent from timetable
- Track: File and Storage Systems

### Description

未掲載

### 添付資料URL

掲載なし

## File System Performance Testing

- セッション個別URL: https://blog.linuxplumbersconf.org/2010/ocw/proposals/1131
- 状態: proposal only; absent from timetable
- Track: File and Storage Systems

### Description

未掲載

### 添付資料URL

掲載なし

## Handling Thin provisioning Capacity Threshold Alerts

- セッション個別URL: https://blog.linuxplumbersconf.org/2010/ocw/proposals/837
- 状態: proposal only; absent from timetable
- Track: File and Storage Systems

### Description

未掲載

### 添付資料URL

掲載なし

## Unified API for Snapshotting File Systems

- セッション個別URL: https://blog.linuxplumbersconf.org/2010/ocw/proposals/1197
- 状態: proposal only; absent from timetable
- Track: File and Storage Systems

### Description

未掲載

### 添付資料URL

掲載なし

## VirtFS—A paravirtual File System pass-through in KVM/QEMU

- セッション個別URL: https://blog.linuxplumbersconf.org/2010/ocw/proposals/603
- 状態: proposal only; absent from timetable
- Track: File and Storage Systems

### Description

未掲載

### 添付資料URL

掲載なし

## Consolidation of disk heartbeating

- セッション個別URL: https://blog.linuxplumbersconf.org/2010/ocw/proposals/1185
- 状態: proposal only; absent from timetable
- Track: High Availability Clustering

### Description

未掲載

### 添付資料URL

掲載なし

## Corosync Community Roadmap Whiteboard

- セッション個別URL: https://blog.linuxplumbersconf.org/2010/ocw/proposals/1137
- 状態: proposal only; absent from timetable
- Track: High Availability Clustering

### Description

未掲載

### 添付資料URL

掲載なし

## Design and History of CTDB

- セッション個別URL: https://blog.linuxplumbersconf.org/2010/ocw/proposals/1215
- 状態: proposal only; absent from timetable
- Track: High Availability Clustering

### Description

未掲載

### 添付資料URL

掲載なし

## Divide and Conquer: An alternative approach to split-site clustering in Pacemaker

- セッション個別URL: https://blog.linuxplumbersconf.org/2010/ocw/proposals/891
- 状態: proposal only; absent from timetable
- Track: High Availability Clustering

### Description

未掲載

### 添付資料URL

掲載なし

## Easy is Hard

- セッション個別URL: https://blog.linuxplumbersconf.org/2010/ocw/proposals/885
- 状態: proposal only; absent from timetable
- Track: High Availability Clustering

### Description

未掲載

### 添付資料URL

掲載なし

## Getting the word out there: enabling application developers to write and package resource agents

- セッション個別URL: https://blog.linuxplumbersconf.org/2010/ocw/proposals/861
- 状態: proposal only; absent from timetable
- Track: High Availability Clustering

### Description

未掲載

### 添付資料URL

掲載なし

## High Availability Clustering

- セッション個別URL: https://blog.linuxplumbersconf.org/2010/ocw/proposals/711
- 状態: proposal only; absent from timetable
- Track: High Availability Clustering

### Description

未掲載

### 添付資料URL

掲載なし

## IP over steam

- セッション個別URL: https://blog.linuxplumbersconf.org/2010/ocw/proposals/1065
- 状態: proposal only; absent from timetable
- Track: High Availability Clustering

### Description

未掲載

### 添付資料URL

掲載なし

## Low Carb diet: removing XML syntactic sugar from the CIB

- セッション個別URL: https://blog.linuxplumbersconf.org/2010/ocw/proposals/879
- 状態: proposal only; absent from timetable
- Track: High Availability Clustering

### Description

未掲載

### 添付資料URL

掲載なし

## Matahari - A General Purpose, Cross-Platform Agent for Clustered and non-Clustered Hosts

- セッション個別URL: https://blog.linuxplumbersconf.org/2010/ocw/proposals/957
- 状態: proposal only; absent from timetable
- Track: High Availability Clustering

### Description

未掲載

### 添付資料URL

掲載なし

## Resource Agents 1.1: fixing the OCF resource agent metadata schema

- セッション個別URL: https://blog.linuxplumbersconf.org/2010/ocw/proposals/849
- 状態: proposal only; absent from timetable
- Track: High Availability Clustering

### Description

未掲載

### 添付資料URL

掲載なし

## The Future of the OCF Standard

- セッション個別URL: https://blog.linuxplumbersconf.org/2010/ocw/proposals/951
- 状態: proposal only; absent from timetable
- Track: High Availability Clustering

### Description

未掲載

### 添付資料URL

掲載なし

## The Unholy Union of Corosync, Pacemaker and CTDB

- セッション個別URL: https://blog.linuxplumbersconf.org/2010/ocw/proposals/831
- 状態: proposal only; absent from timetable
- Track: High Availability Clustering

### Description

未掲載

### 添付資料URL

掲載なし

## We've got it all backwards: enabling Pacemaker management application development

- セッション個別URL: https://blog.linuxplumbersconf.org/2010/ocw/proposals/855
- 状態: proposal only; absent from timetable
- Track: High Availability Clustering

### Description

未掲載

### 添付資料URL

掲載なし

## Why Pacemaker Sucks

- セッション個別URL: https://blog.linuxplumbersconf.org/2010/ocw/proposals/1047
- 状態: proposal only; absent from timetable
- Track: High Availability Clustering

### Description

未掲載

### 添付資料URL

掲載なし

## Embedded Video devices: Can Linux handle such complex video Sub-System

- セッション個別URL: https://blog.linuxplumbersconf.org/2010/ocw/proposals/657
- 状態: proposal only; absent from timetable
- Track: Multimedia Infrastructure

### Description

未掲載

### 添付資料URL

掲載なし

## Multimedia Linux

- セッション個別URL: https://blog.linuxplumbersconf.org/2010/ocw/proposals/195
- 状態: proposal only; absent from timetable
- Track: Multimedia Infrastructure

### Description

未掲載

### 添付資料URL

掲載なし

## Videobuf2 - the new Video for Linux driver framework

- セッション個別URL: https://blog.linuxplumbersconf.org/2010/ocw/proposals/915
- 状態: proposal only; absent from timetable
- Track: Multimedia Infrastructure

### Description

未掲載

### 添付資料URL

掲載なし

## Android PM experiances

- セッション個別URL: https://blog.linuxplumbersconf.org/2010/ocw/proposals/981
- 状態: proposal only; absent from timetable
- Track: Power Management

### Description

未掲載

### 添付資料URL

掲載なし

## C-State optimization

- セッション個別URL: https://blog.linuxplumbersconf.org/2010/ocw/proposals/1071
- 状態: proposal only; absent from timetable
- Track: Power Management

### Description

未掲載

### 添付資料URL

掲載なし

## CPUIdle versus Suspend

- セッション個別URL: https://blog.linuxplumbersconf.org/2010/ocw/proposals/789
- 状態: proposal only; absent from timetable
- Track: Power Management

### Description

未掲載

### 添付資料URL

掲載なし

## device pm tuning is hard

- セッション個別URL: https://blog.linuxplumbersconf.org/2010/ocw/proposals/969
- 状態: proposal only; absent from timetable
- Track: Power Management

### Description

未掲載

### 添付資料URL

掲載なし

## I/O Runtime PM Framework and CPUidle

- セッション個別URL: https://blog.linuxplumbersconf.org/2010/ocw/proposals/717
- 状態: proposal only; absent from timetable
- Track: Power Management

### Description

未掲載

### 添付資料URL

掲載なし

## I/O Runtime PM Framework and User Space

- セッション個別URL: https://blog.linuxplumbersconf.org/2010/ocw/proposals/723
- 状態: proposal only; absent from timetable
- Track: Power Management

### Description

未掲載

### 添付資料URL

掲載なし

## platform-specific PM customization

- セッション個別URL: https://blog.linuxplumbersconf.org/2010/ocw/proposals/1029
- 状態: proposal only; absent from timetable
- Track: Power Management

### Description

未掲載

### 添付資料URL

掲載なし

## Power Management

- セッション個別URL: https://blog.linuxplumbersconf.org/2010/ocw/proposals/183
- 状態: proposal only; absent from timetable
- Track: Power Management

### Description

未掲載

### 添付資料URL

掲載なし

## API for Real-Time Scheduling with Temporal Isolation on Linux

- セッション個別URL: https://blog.linuxplumbersconf.org/2010/ocw/proposals/675
- 状態: proposal only; absent from timetable
- Track: Real Time

### Description

未掲載

### 添付資料URL

掲載なし

## CPU isolation

- セッション個別URL: https://blog.linuxplumbersconf.org/2010/ocw/proposals/729
- 状態: proposal only; absent from timetable
- Track: Real Time

### Description

未掲載

### 添付資料URL

掲載なし

## Kernel assisted adaptive mutexes

- セッション個別URL: https://blog.linuxplumbersconf.org/2010/ocw/proposals/987
- 状態: proposal only; absent from timetable
- Track: Real Time

### Description

未掲載

### 添付資料URL

掲載なし

## Reality of PREEMPT_RT in the field

- セッション個別URL: https://blog.linuxplumbersconf.org/2010/ocw/proposals/1155
- 状態: proposal only; absent from timetable
- Track: Real Time

### Description

未掲載

### 添付資料URL

掲載なし

## Testing the real-time Kernel on Arbitrary Hardware.

- セッション個別URL: https://blog.linuxplumbersconf.org/2010/ocw/proposals/123
- 状態: proposal only; absent from timetable
- Track: Real Time

### Description

未掲載

### 添付資料URL

掲載なし

## Converging towards a unified Lockless Ring Buffer library

- セッション個別URL: https://blog.linuxplumbersconf.org/2010/ocw/proposals/813
- 状態: proposal only; absent from timetable
- Track: Tracing

### Description

未掲載

### 添付資料URL

掲載なし

## Converting ftrace plugins into trace events

- セッション個別URL: https://blog.linuxplumbersconf.org/2010/ocw/proposals/249
- 状態: proposal only; absent from timetable
- Track: Tracing

### Description

未掲載

### 添付資料URL

掲載なし

## Dynamic probing with perf

- セッション個別URL: https://blog.linuxplumbersconf.org/2010/ocw/proposals/1113
- 状態: proposal only; absent from timetable
- Track: Tracing

### Description

未掲載

### 添付資料URL

掲載なし

## Merge Tracing and Debugging

- セッション個別URL: https://blog.linuxplumbersconf.org/2010/ocw/proposals/945
- 状態: proposal only; absent from timetable
- Track: Tracing

### Description

未掲載

### 添付資料URL

掲載なし

## Tracing Hypervisor Events

- セッション個別URL: https://blog.linuxplumbersconf.org/2010/ocw/proposals/147
- 状態: proposal only; absent from timetable
- Track: Tracing

### Description

未掲載

### 添付資料URL

掲載なし

## Achieving Better Out-of-the-box Network Scaling

- セッション個別URL: https://blog.linuxplumbersconf.org/2010/ocw/proposals/933
- 状態: proposal only; absent from timetable
- Track: User Visible Network Issues

### Description

未掲載

### 添付資料URL

掲載なし

## Challenges in Mobile Networking

- セッション個別URL: https://blog.linuxplumbersconf.org/2010/ocw/proposals/825
- 状態: proposal only; absent from timetable
- Track: User Visible Network Issues

### Description

未掲載

### 添付資料URL

掲載なし

## Data Center Bridging: Creating DCB aware networks

- セッション個別URL: https://blog.linuxplumbersconf.org/2010/ocw/proposals/1053
- 状態: proposal only; absent from timetable
- Track: User Visible Network Issues

### Description

未掲載

### 添付資料URL

掲載なし

## Network Device Naming

- セッション個別URL: https://blog.linuxplumbersconf.org/2010/ocw/proposals/471
- 状態: proposal only; absent from timetable
- Track: User Visible Network Issues

### Description

未掲載

### 添付資料URL

掲載なし

## Scaling techniques in the stack for servers with high connection rates

- セッション個別URL: https://blog.linuxplumbersconf.org/2010/ocw/proposals/489
- 状態: proposal only; absent from timetable
- Track: User Visible Network Issues

### Description

未掲載

### 添付資料URL

掲載なし

## Simplify network configuration for VMs by harmonizing multiple Bridging, QOS, DCB and CNA implementations

- セッション個別URL: https://blog.linuxplumbersconf.org/2010/ocw/proposals/843
- 状態: proposal only; absent from timetable
- Track: User Visible Network Issues

### Description

未掲載

### 添付資料URL

掲載なし

## Advances in memory management in a virtualized environment

- セッション個別URL: https://blog.linuxplumbersconf.org/2010/ocw/proposals/171
- 状態: proposal only; absent from timetable
- Track: Virtualization

### Description

未掲載

### 添付資料URL

掲載なし

## Checkpoint/Restart: Present, Goals and Blockers

- セッション個別URL: https://blog.linuxplumbersconf.org/2010/ocw/proposals/735
- 状態: proposal only; absent from timetable
- Track: Virtualization

### Description

未掲載

### 添付資料URL

掲載なし

## Combining Xenner, Xen and KVM into a giant furball

- セッション個別URL: https://blog.linuxplumbersconf.org/2010/ocw/proposals/1041
- 状態: proposal only; absent from timetable
- Track: Virtualization

### Description

未掲載

### 添付資料URL

掲載なし

## Expand Linux kernel to include more Xen PV drivers (PCI pass through)

- セッション個別URL: https://blog.linuxplumbersconf.org/2010/ocw/proposals/129
- 状態: proposal only; absent from timetable
- Track: Virtualization

### Description

未掲載

### 添付資料URL

掲載なし

## IOV hardware and software plumbing for VMware ESX - journey to uncompromised I/O Virtualization and Convergence

- セッション個別URL: https://blog.linuxplumbersconf.org/2010/ocw/proposals/231
- 状態: proposal only; absent from timetable
- Track: Virtualization

### Description

未掲載

### 添付資料URL

掲載なし

## KVM on S390x

- セッション個別URL: https://blog.linuxplumbersconf.org/2010/ocw/proposals/33
- 状態: proposal only; absent from timetable
- Track: Virtualization

### Description

未掲載

### 添付資料URL

掲載なし

## KVM/QEMU Storage Stack Performance Discussion

- セッション個別URL: https://blog.linuxplumbersconf.org/2010/ocw/proposals/327
- 状態: proposal only; absent from timetable
- Track: Virtualization

### Description

未掲載

### 添付資料URL

掲載なし

## Linux Containers: are we there yet?

- セッション個別URL: https://blog.linuxplumbersconf.org/2010/ocw/proposals/1011
- 状態: proposal only; absent from timetable
- Track: Virtualization

### Description

未掲載

### 添付資料URL

掲載なし

## Linux performance enhancements when running as a Xen HVM guest.

- セッション個別URL: https://blog.linuxplumbersconf.org/2010/ocw/proposals/159
- 状態: proposal only; absent from timetable
- Track: Virtualization

### Description

未掲載

### 添付資料URL

掲載なし

## Network QoS Guarantees for Virtual Machines

- セッション個別URL: https://blog.linuxplumbersconf.org/2010/ocw/proposals/699
- 状態: proposal only; absent from timetable
- Track: Virtualization

### Description

未掲載

### 添付資料URL

掲載なし

## Network virtualization

- セッション個別URL: https://blog.linuxplumbersconf.org/2010/ocw/proposals/777
- 状態: proposal only; absent from timetable
- Track: Virtualization

### Description

未掲載

### 添付資料URL

掲載なし

## Porting virtio to other architectures

- セッション個別URL: https://blog.linuxplumbersconf.org/2010/ocw/proposals/741
- 状態: proposal only; absent from timetable
- Track: Virtualization

### Description

未掲載

### 添付資料URL

掲載なし

## Qemu/Xen integration

- セッション個別URL: https://blog.linuxplumbersconf.org/2010/ocw/proposals/165
- 状態: proposal only; absent from timetable
- Track: Virtualization

### Description

未掲載

### 添付資料URL

掲載なし

## SeaBIOS in a virtualized environment

- セッション個別URL: https://blog.linuxplumbersconf.org/2010/ocw/proposals/99
- 状態: proposal only; absent from timetable
- Track: Virtualization

### Description

未掲載

### 添付資料URL

掲載なし

## SVM Emulation - Performance Discussion

- セッション個別URL: https://blog.linuxplumbersconf.org/2010/ocw/proposals/1095
- 状態: proposal only; absent from timetable
- Track: Virtualization

### Description

未掲載

### 添付資料URL

掲載なし

## Ticket to a tarpit

- セッション個別URL: https://blog.linuxplumbersconf.org/2010/ocw/proposals/141
- 状態: proposal only; absent from timetable
- Track: Virtualization

### Description

未掲載

### 添付資料URL

掲載なし

## Transparent Hugepage Support

- セッション個別URL: https://blog.linuxplumbersconf.org/2010/ocw/proposals/1125
- 状態: proposal only; absent from timetable
- Track: Virtualization

### Description

未掲載

### 添付資料URL

掲載なし

## Virtualizing NUMA

- セッション個別URL: https://blog.linuxplumbersconf.org/2010/ocw/proposals/1035
- 状態: proposal only; absent from timetable
- Track: Virtualization

### Description

未掲載

### 添付資料URL

掲載なし

## Xen privileged support in Linux: help!

- セッション個別URL: https://blog.linuxplumbersconf.org/2010/ocw/proposals/135
- 状態: proposal only; absent from timetable
- Track: Virtualization

### Description

未掲載

### 添付資料URL

掲載なし


# MC議題 Wiki 補足

## audio

https://wiki.linuxplumbersconf.org/2010:audio

Like the last two LPC it would be good to have an Audio MC.





Provisional schedule:





 State of the audio infrastructure (Lennart Poettering, Mark Brown).



 Media Controller: finally getting audio and video to play together (Laurent Pinchart)



 ALSA Use Case Management (Liam Girdwood)



 Bug triage and debugging (David Henningsson)



 Discussion, including at least:

 Handling digital audio links in embedded systems



 Exposing audio path/routing information to the application layer











Topics:





 Scenario management (eg, headphone connect on PCs, mobile phone use cases switches)



 ASoC autonomous digital audio sources/sinks (eg, DSPs, basebands)

### 添付資料URL

掲載なし

## early_boot_and_init_systems

https://wiki.linuxplumbersconf.org/2010:early_boot_and_init_systems

booting over iSCSI and FCoE (Supreeth)



 Dracut - a generic initramfs infrastructure (Harald)



 bootchart2 - what is going on (Michael)



 making boot pretty: plymouth (Ray)



 systemd (Lennart, Kay)



 state of systemd in various distributions and general plan towards a unified boot setup on Linux (maintainers of Debian, Fedora, Gentoo, SUSE are attending this talk)



 general discussion: the individual presentations should be roughly take 15 minutes each, which leaves us one hour for general discussion

### 添付資料URL

掲載なし

## desktop

https://wiki.linuxplumbersconf.org/2010:desktop

This track will cover desktop-related topics; feel free to add a topic you want to see discussed.





Topics:




 EGL and GLES1/2 on Linux (Kristian Høgsberg)



 multi-card/gpu - can we fix it? (David Airlie)



 systemd and the desktop (Lennart Poettering)



 GNOME OS (Jon McCann)



 General discussion







We do want the track to be interactive, so don't be afraid of interrupting the people speaking!

### 添付資料URL

掲載なし

## embedded_topics

https://wiki.linuxplumbersconf.org/2010:embedded_topics

http://etherpad.osuosl.org/lpc2010-embedded





Agenda





 Embedded (ab)use of the Device Model (1 hr; moderator: Grant Likely)

 Review of device model (GregKH? Kay?) 10-15 min



 Current use cases problems/solutions/issues

 omap_device solution to power management (Kevin Hillman) 10 min



 Registration of devices on i2c, spi & mdio busses (Grant Likely?) 10 min







 Common pain points (15-20 min)

 Problem of static platform_device tables



 Problem of multi-parent dependancies

 Devices only have one parent; no established pattern for devices that need to wait for another device to become ready before they can be probed.



 GPIOs, IRQs have no explicit ordering dependencies







 Problem of initcall ordering constraints

 spi & i2c drivers getting moved to earlier initcalls to workaround lack of dependencies







 Problem of subarch specific APIs adding complexity to drivers

 hwspinlock for OMAP



 omap_device











 Solution discussion (10-15min)







 IPC for Asynchronous Multi Processing (AMP) (Moderator: Ohad)

 Use cases (10 min each; 30 min total)

 Renesas ARM+SH (Magnus Damm, Paul Mundt)



 Texas Instruments OMAP ARM+DSP and Syslink solution (Ohad)



 Freescale 8-way PowerPC







 Common requirements



 Discuss possible common solutions







 Boot infrastructure for multiplatform kernels (Moderator: Jeremy Kerr)

 Introduction (Jeremy Kerr - problem statement)



 Board identification



 Device enumeration and Device Tree



 Boot interface



 x86/ARM/MIPS/PowerPC specific issue and constraints







 Interesting Tools techniques (Moderator: Tim Bird)

 Android fastboot and adb



 Perhaps this should be in lighting talk format?










Possible track for capturing embedded/small system topics





 Standardize boot interface for ARM



 Device driver and the device tree



 Core plumbing required in small systems.



 Running mainstream distros on ARM devices - Mike Rapoport 2010/06/10 15:02



 custom busses vs. extending platform bus  Kevin Hilman 2010/08/10 







proposer: Grant Likely

### 添付資料URL

- http://etherpad.osuosl.org/lpc2010-embedded

## File and Storage

https://wiki.linuxplumbersconf.org/2010:file_and_storage_systems

Table of Contents



File and Storage

Audience


Key people


Sessions


Contact











File and Storage




The track will deal with issues around file and storage systems in Linux, from the kernel space up to user space. Getting applications to work well and get tuned properly, how to benchmark administer, etc.





Etherpad notes from the session: http://etherpad.osuosl.org/lpc2010-file-and-storage-systems






Audience




Developers from the components, vendors of storage systems (both traditional storage and newer devices), kernel developers.






Key people




The following people should be invited at least:





 Chris Mason



 Jens Axboe



 James Bottomley



 Ted Tso



 Dave Chinner



 Jeff Moyer



 Trond Myklebust







Sessions


 Crafting Elegant User Experiences Involving Complex Storage Technologies (Máirín Duffy) - http://www.linuxplumbersconf.org/2010/ocw/proposals/795

 Slides: http://duffy.fedorapeople.org/presentations/plumbers2010/storage-ux-presentation.svg







 File System Performance Testing - http://www.linuxplumbersconf.org/2010/ocw/proposals/1131



 Handling Thin provisioning Capacity Threshold Alerts - http://www.linuxplumbersconf.org/2010/ocw/proposals/837







Contact




Proposal added by Ric Wheeler rwheeler@redhat.com





Session leaders: Ric Wheeler or others welcome

### 添付資料URL

- http://etherpad.osuosl.org/lpc2010-file-and-storage-systems

## HA Clustering

https://wiki.linuxplumbersconf.org/2010:ha_clustering

Table of Contents



HA Clustering

Audience


Key people


Contact











HA Clustering




Over the last very few years, High-Availability clustering on Linux has seen significant convergence and the emergence of a single stack, based on the fs/dlm code on the kernel-side, and around corosync/openais/Pacemaker etcetera on the user-space part. This is now being adopted by Red Hat, Ubuntu, Novell/SUSE, Debian and others.





Work remains to be done on mapping a roadmap for resource agent merges, more core library work such as logging infrastructure, roadmap alignment between components and stakeholders, packaging details, …






Audience




Developers from the components, packagers from the distributors.






Key people




The following people should be invited at least:





 Andrew Beekhof (pacemaker)



 David Teigland (dlm)



 Dejan Muhamedagic (resource agents, pacemaker)



 Fabio di Nitto (horse heads, RHT)



 Joel Becker (OCFS2)



 Lars Ellenberg (cluster-glue)



 Lars Marowsky-Brée (heckling, SUSE)



 Lon Hohberger (Resource Management)



 Yan Gao (pacemaker)



 …







Contact




Proposal added by Lars Marowsky-Brée lmb@novell.com

### 添付資料URL

掲載なし

## media_infrastructure

https://wiki.linuxplumbersconf.org/2010:media_infrastructure

Several changes are happening at the Media Infrastructure in kernel, including:





 New Remote Controller subsystem;



 Events handling;



 Videobuf changes;



 …







Those changes will be discussed on the tracks bellow:





1) Multimedia Linux Remote Controllers – Jarod Wilson – 35 mins



A discussion about the state of video remote control integration in the linux kernel and userspace, focusing on Remote Control improvements.
Should include the following sub-themes:

 IR remotes



 Bluetooth remotes



 RF4CE (802.15.4) remotes



 Coordination of all types of remotes into a coherent framework



 Pin coupling to radio remotes



 Missing 802.15.4 networking infrastructure



 X11 integration







2) Videobuf2 – the new Video for Linux driver framework – Marek Szyprowski – 35 mins




An effort to write a new framework to replace video buffering handling, called videobuf2 is currently underway. It will be more modular,
have additional features and better support for new devices and platforms (including embedded).



3) Embedded Video devices: Can Linux handle such comples video Sub-System – Vaibhav Hiremath – 35 mins




This will be an open discussion, suggestions from other community experts, where we will discuss on few latest Embedded devices as an case-study.



4) Media infrastructure – Mauro Carvalho Chehab – 60 mins




This will discuss V4L/DVB/IR current issues and the next steps to improve the subsystem

### 添付資料URL

掲載なし

## Real time

https://wiki.linuxplumbersconf.org/2010:real-time_response_for_full_foss_linux_stack

Real time




We want to follow up on last years LPC real time track and provide a discussion forum around the Linux Real time efforts.






Preliminary Miniconf Schedule




Date: Wednesday, November 3, 2010





Room: William Dawes





	
		 Time               Speaker      Topic  Slides 
	
	
		 10:00am - 10:30am  Darren Hart               Kernel assisted adaptive mutexes  Darren's slides 
	
	
		 10:30am - 11:00am  Frederic Weisbecker       CPU isolation 
	
	
		 11:00am - 11:30am  Tommaso Cucinotta et al.  API for Real-Time Scheduling with Temporal Isolation on Linux 
	
	
		 11:30am - 12:30pm  Dave Sperry, Matthias Buehler  Reality of PREEMPT_RT in the field 
	




Audience





 kernel developers involved in RT



 RT users from embedded to enterprise

### 添付資料URL

- http://userweb.kernel.org/~tglx/lpc-2010/kernel-assisted-userspace-adaptive-mutexes.pdf

## tracing

https://wiki.linuxplumbersconf.org/2010:tracing

* Problem statements.





* 1) Providing debugger(gdb) the field safe inspection capability.





* 2) Mechanism which provides microanalysis of process.





* Proposed by Oza Pawandeep,  contact no +91-9886453945.

### 添付資料URL

掲載なし

## virtualization

https://wiki.linuxplumbersconf.org/2010:virtualization

Virtualization




The Virtualization Micro Conference was held at the Linux Plumbers Conference 2010 on Thursday November 4th. We had a good group of people and many useful discussions. The slides from the presentations, as well as the notes taken during the discussions are available below.





The track focused on on general Linux Virtualization, it was not limited to a specific hypervisor. In addition there were a couple of virtualization related presentations at the main Linux Plumbers presentation track. Please see the main schedule for information on those presentations.






Schedule



The tentative schedule for the Virtualization Micro Conference at Linux Plumbers 2010 is as follows:




 SeaBIOS in a virtualized environment - Kevin O'Connor



 KVM/QEMU Storage Stack Performance Discussion - Khoa Huynh, Stefan Hajnoczi



 Qemu/Xen integration - Stefano Stabellini



 Combining Xenner, Xen and KVM into a giant furball - Alexander Graf



 Virtualizing NUMA - Andre Przywara





 Ticket to a tarpit - Jeremy Fitzhardinge



 Advances in memory management in a virtualized environment - Dan Magenheimer



 IOV hardware and software plumbing for VMware ESX - journey to uncompromised I/O Virtualization and Convergence - Leonid Grossman



 Network QoS Guarantees for Virtual Machines - Dhaval Giani, Tommaso Cucinotta, Dario Faggioli



 SVM Emulation - Performance Discussion - Joerg Roedel







Discussion notes




SeaBIOS



 by Kevin O'Connor




 Design dominated by 16 bit BIOS interfaces



 Motivation: bring support to Coreboot for Windows/etc.



 Bochs BIOS sucks



 Bochs BIOS provides a useful indication of what BIOS calls actually matter 



 Debug: -chardev stdio,id=foo -device isa-debugcon,chardev=foo



 SeaBIOS: converts a lot of Bochs BIOS assembly code to C



 As much code as possible is written in 32-bit mode



 BIOS fidelity matters when dealing with foreign option ROMs (PCI passthrough) 




Q: Does virtual time impact BIOS?
A: at a high frequency, time is unreliable on bare metal too 

 DOS 1.0 uses very small stacks so is unlikely to work with SeaBIOS




Q: sleep state support
A: basic APM



 Next Steps:




 Boot ordering



 Xen using SeaBIOS



 Xen has a number of changes to Bochs BIOS

 ACPI tables are generated by hvmloader







 VGA BIOS

 Need someone to continue to port VGABios to GCC











KVM/QEMU Storage Peformance



 by Khoa Huynh and Stefan Hajnoczi





 Storage subsystem; 30k IOPs



 8 x 24-disk arrays



 Perf is around 85% of native



 Reaching 27k iops perf second within a guest





 File based performance



 virtio vs. emulated ide; ide is terrible







QEMU/Xen Integration



 by Stefano Stabellino and Anthony Perard





 map cache; domain-0 prefers to run as 32-bit; qemu cannot map all of the guest memory at once 



 pv drivers totally avoid qemu



 stub domains; break the domain-0 bottleneck by running qemu in a small guest



 double scheduling problem: xen schedules domain-0, domain-0 has to schedule the right qemu



 PCI passthrough

 KVM is rewriting its device passthrough interface to use VFIO



 potential area to collaborate



 xen migration: treats qemu save data as an opaque blob (just another device state)











Xenner



 by Alexander Graf





 Xenner can run Xen pv guests in KVM

 Originally created by Gerd Hoffmann (kraxel)



 Makes migration Xen → KVM easy







 Xenner differences to Xen architecture:

 Xenstored, domain builder, blkback, netback all live inside QEMU (no Dom0)



 Xenner has a guest kernel mode stub, hypercall shim that translates to QEMU emulated I/O 



 DomU runs in guest user mode







 Pure TCG QEMU can be used to run Xenner guests, KVM not necessary



 pv clock is passed through from KVM to Xenner guest, not emulated today by QEMU



 Discussion:

 Should all the xen infrastructure be inside QEMU or should it be separate?



 Cross-platform discussion: cross-platform Xen is not realistic (use-case missing?)



 Xenner on Xen HVM scenario



 Alex suggests sharing code for xenstored, Stefano is for reusing code or converting blk/netback to virtio inside Xenner guest code



 Anthony suggests basic xenstored inside Xenner guest code, also do virtio-blk/net PCI instead of Xen blk/net to QEMU











Virtualizing NUMA



 by Andre Przywara





 Non-Uniform Memory Architectures present performance challenges



 NUMA should be invisible, but can easily hurt performance



 ACPI tables describe memory topology

 If you exceed a node's resources in your guest, then performance suffers







 QEMU supports guest memory topology (command-line option) but no binding on host



 Xen patches still under development




Q: How does hotplug work for NUMA
A: NUMA config is static, ACPI tables must account for all possible configs.
   Not sure what current level of support is, although ACPI probably supports this.

 lmbench unpinned shows high variability in benchmark results



 With numactl results are much better and predictable



 Avi mentions initial placement causes memory to be allocated on a node early one but memory migration would be needed to move later



 Pinning is mentioned as a bad solution for more dynamic workloads (versus fixed HPC workloads)



 Discussion items:

 Handle NUMA inside QEMU or use external tools?



 QEMU normally leverages Linux kernel and tools, Anthony suggests using external tools



 Memory inside QEMU may not be easily visible/accessible to external code











Ticketlocks



 by Jeremy Fitzhardinge




 Introduced by Thomas for virtualized envs.

 Old tickets: byte locks







 Ticket locks (2.6.24 in general Linux code)

 Lockholder Preemption issues in virtualized makes guests slower 



 Ticketlocks in virtualized env has lock claim scheduling issues (can have big impact - 90% time spent in ticket locking spining)







 Old style Xen PV spinlocks use the bytelocks with enhancments to kick other VCPUs that are waiting for this spinlock. Drawback: bigger size of spinlock_t structure. On baremetal, some perf. hit on (some architectures). Different from the generic Linux spinlock implementation. 



 New: utilize the generic ticketlock (existing since 2.6.24~), enhance the slow path with VCPU kicking. Exist extra enh to know the exact number of waiters in the slow path (drawback: expands the spinlock_t struct more, and some bit lookup).




Q: "Yield the VCPU instead of kicking?" "Q:Influence the hypervisor
   to give the other guest waiting for the spinlock the turn."
A: Keep it simple.
Q: "Influence the hypervisor scheduler with spinlock data."
A: Impact unclear.

 Perf numbers. Old stle (bytelock) vs New style (ticketlock) around the same under Xen. On baremetal (ticketlocks to ticketlocks with pvops): -1% to -2%.




Q: "Dynamic spinlocks."
A: Linux upstream will throw it out.
Q:" How much benefit do we get for VCPU kicking when we get notified from hardware due to PAUSE-lock detection"
A: Avi, extremely much.
Q: "What if no waiting count and just kick all VCPUs." ?
A: Back to lock-claim scheduling issue.
A :"Fairness for spinlocks (generic). Lock value from 0x100 to diff."
A: Under Xen either one byte-lock or ticketlock would potentially.
   The problem is more of the generic spinlocks.
A:"spinlock data exposed to hypevisor?"
A: "Xen does use it (but does not have the owner). But rare case. Spinlock
   are used for short locks."
A: "per_cpu(); kick vcpu; then pause."
A: With multiple spinlocks no good.
A: "pSereis, 390, do they have different virtualized spinlock
   implementations: "
A: .. run out of time.



Adv. Memory Management in a virt envr.



 by Dan Magenheimer





 Memory is getting to be used in diff. ways. It is also getting more power-hungry.



 With all that memory, OS grab all of it and get fat.



 We want a continous way to slim OSes and give it to other ones that need it, and also keep the perf better than now.

 Step 1: OS needs to be able to give memory back. Diff solutions:

 Partitioning



 Host Swapping (think swap in virtualized env.)



 Page sharing (KSM) - not used in generic cases, but in cloud space (1000 of guests) - but time is required.












Q: "OS when asked how much memory, always say ALL. How do you know
    which memory it actually does not need?
A: Answered later in slides.

 Solution 2B:

 OS can give back memory back (balloon driver, virtual hot plug memory).



 The real problem (how much does the OS actually need) is not solved, they are just mechanisms.







 Solution  C?:

 Policies (Citrix Memory Control), KVM Memory overcommitment Manager. Don't have input from the OS. 







 Solution D:

 self-ballooning (feedback system in OS). Issues refault, additional disk writes, OOMs”








Q: "OS whichh are hostile can use this. It does not play nice with
    other guests?"
A: "Later in slides."

 Solutions that are based on policies look to be doomed.



 Transcendent memory (pool of memory that can be used with other guests).




A: Linux kernel has a similar to this, called page-cache. Why have it:
Q: "B/c we are in virtualized env. Perf. numbers will explain it."

 It solves Solution D refault issues, and additional disk writes, and OOMs.

 Perf numbers. Comparison to self-ballooning. tmem + deduplication + compression >= raw kernel. VCPU are used more (expected - compression), disk reads are slowed.








Q: "Why not have this in Linux baremetal?"
A:"Looking at it now."

 Tmem benefits : mem utilization ++, i/o bandwith decreased, better vCPU utilization. Workload gets faster. 



 http://oss.oracle.com/projects/tmem




Q: "Why would a guest participate?"
A: They might now, but web-hosting  might very well. Amazon EC2 utilizes
   similar pricing model to charge more for overcommit and give discount
   for under-utilization.
Q: "Some vendors don't want this b/c they depend on undercommited guests. " .. 
Q: "Compression of cache data, and dynamic page cache across all
   guests. With these two things why can't it be solved in hypervisor?
A: Various people have tried to do it and it did not work. Found
   important places in Linux kernel (along with Chris Mason) that can
   benefit this, and it works. 
Q: "Benchmarks with KVM, strong cap on page cache. Similar numbers."
A: There is work on swap compression on Linux kernel (2.6.36
   time-frame posted by N.)
Q: "Why not implement a cache in blkback?
A: But it does not work with DIRECT_IO, so doing this in Xen blkback can
   not be done.
Q: "Large guest, what about this impact? "
A: Not done.



IOV [hard|soft]ware for VMware ESX



 by Leonid Grossman





 Existing trends, every body wants to virtualize. Memory and CPU : done.



 IO: Much harder, and it brings interesting challenges. #2



 Solutions:

 software para-virtualized storage



 SR-IOV hardware. (hard to migrate)







 Virtual I/O has existed for years (enterprise MPIO).



 Paravirtualized: CPU utilization goes up, lack of SLA, and isolation of hardware features.



 SLA is important for multiple guests, but with paravirtualized I/Os everybody shares the pipe.



 Solutions: Seperate traffic (network on one NIC, spread guest usages on other NICs, but not enough PCI slots and adapters).



 Hardware vendors solution: SR-IOV or PCI passthrough (Direct Hardware Access) of multifunction adapters. Due to its newness SR-IOVnot supported by Microsoft and VMware.



 ESX MF IOV: PCI passthrough of multifunction adapter to guests to complement the paravirtualized networking. Can pass in one function






    to guests instead of the whole PCI device. Perf numbers close to native with PCI passthrough and get bell and whistles of hardware features (IPsec, GOS, iSCSI offload).




 Hypervisor elects guests to be privilged.



 IEEE Virtual Bridge to definie a spec which can set QoS, etc on Ports (VFs on SR-IOV)



 SR-IOV will be supported on PCI-E Gen.3 Virtual Ethernet Bridge supported. The multifunction adapters have switch chipsets to re-route traffic on PCI-e card instead of having to go outside switch. This can give 60 Gbps+. 



 Some PCI-e cards are not that useful for virtualization. Example is iSCSI TOE cards.



 Solutions: move offloading 




Q: "Security? Say pass in firewire card to sniff other memory cards. "
A: Qualification by vendor to discourage this.



Network QoS guarantess for Virtual Machines



 by Dhavai Giani





 Want QoS for throughput and latency.



 Graph (iperf, 2 VMs, UP, with diff workloads).  CPU usage vs network throughput (MB/s).



 Issue: two VMs at the same time, network intensive, compute intensive. The CPU  intensive guest influences the network intensive VMs (by 10%).



 Tried V-Bus. Failed (not stable).



 Solution: Seperate network device exclusive for guest. QEMU has a tap device that does it. But not done in diff contexts, not are






   multiple CPU workqueues.




A: "Is this an accounting problem." No, we are trying to isolate the performance.

 Want to get out of guest interrupt handler to the workqueue ASAP.



 Avi proposed threaded interrupt handler in a cgroup.



 Solution #2:Pretty much what Avi described..





 From here on discussion started.




Q: It did not work as expected, unknown reason. Any ideas? vhost having separate threads?
   vbus did the same stuff. Tried to raise softirq priority. No luck."
A: There is to common Linux code to deal with the packet. If you take the netfilter, bridge firewall out, does that not get it faster?
A: No idea. But it might not be applicable to take out all of this.
Q: Why does netfilter not work?
A: ".." (note taker did not hear the answer).
Q: Have you tried seperate NICs to seperate the traffic?
A: "Did not have two NICs and the problem space was to use one and be better at
   giving data to guest."
Q: The basic problem is the length of the time to the guest?
A: Yes, that is what we want to fix and have a better QoS."
Q: Latency with ICMP decreased over time?
A: CPU cache is warmed up and get the benefit of cache.

 Figure out if this is an accounting problem. Specifically post-filter accounting.”

 Avi: ” keeping the time, doing the accounting means more CPU costs.”



 Avi: “Lots of context switches, rescheduling per packet would be more expensive than normal










 path. Gives better isolation.”




 Increasing responsiveness means more CPU utilization (accounting, etc).



 Solution #3: Hint from NIC which virtual MAC it is for, to include this. MAC is already in there. Perhaps the final thing is to threaded vhosts. Nobody is sure if the patches are per device or per cpu. It looks as if per device thread would solve this issue.



 One thread/VCPU for NUMA performance. The benefit is to have _all_ VCPUs to transmit/receive in parallel. The solutions that exist are not generic enough.







Nested SVM, SVM aka AMD-V, aka Pacifica



 by Joerg Roedel





 Status (2.6.31 initial, bug fixes, perf++, 2..37-rc1 emulating Nested Paging).



 Supported hypervisors: Everything except VMWare (there is some code to make this work. Needs revisiting).



 Costs. Thousands of extra cycles. 5-10x than non-emulated.



 Benchmarks: 1 VM, 1 VCPU: Widows XP in KVM + Nested Paging. PCMark05 numbers for HDD (IDE) 50% slower, Memory close to non-emulated. (throughput numbers).  CPU varies by work-load, but still close to non-emulated (decompression big hitter).



 But random memory latency, 20→80% perf drop (4KB→16MB). 



 These numbers should not be so bad. Perhaps the warm-of memory should be done on _all_ memory regions.



 To find the problem, looking at Nested Paging faults ..



 HDD benchmarks varies. 0%→80% perf depending on workload (virus scan horrible)



 VirtIO vs IDE combinations. Virtio on virtio is slow (emulated QEMU). It is half throughput of virtio or IDE non-emulated.



 Perhaps aligment issues are creeping up? More I/O b/c 4KB get broken up?



 A strange beast of running KVM, then QEMU with Xen (2nd guest is Xen Dom0) and try that.



 Perhaps try with VirtIO PCI Windows driver, that might solve the 4KB I/O splitting issue?



 VirtiIO drivers are unsigned for Windows 7 (hacks exist) and XP on Fedora (virt package?)



 VirtIO drivers are signed on a magic Microsoft website (http://windowsservercatalog.com).



 Folks are getting tired by now so not quite lucid.



 Benchamrk (Kern compile on SMP) KVM of Linux then KVM of Linux, then compile. Various work-loads (4, 2, 1 CPUs)..  Perf drops 20%, but not






  tragic. Surprisingly scalling (2, 4, 1) the ratio between different guests of perf is the same




 Conclusion: CPU perf = ok, mem perf = so so, i/o = horror.

### 添付資料URL

- https://wiki.linuxplumbersconf.org/_media/2010:01-lpc-seabios-20101103.pdf
- https://wiki.linuxplumbersconf.org/_media/2010:02-lpc-kvmstoragestackperformance.pdf
- https://wiki.linuxplumbersconf.org/_media/2010:03-lpc-qemu_xen_slides.pdf
- https://wiki.linuxplumbersconf.org/_media/2010:04-lpc2010-xenner_furball.pdf
- https://wiki.linuxplumbersconf.org/_media/2010:05-lpc2010-virtualnuma.pdf
- https://wiki.linuxplumbersconf.org/_media/2010:06-lpc2010-spinning.pdf
- https://wiki.linuxplumbersconf.org/_media/2010:07-memmgmtvirtenv-lpc2010-final-v2.pdf
- https://wiki.linuxplumbersconf.org/_media/2010:08-plumbers_2010_l_grossman.pdf
- https://wiki.linuxplumbersconf.org/_media/2010:09-lpc2010-network-qos.pdf
- https://wiki.linuxplumbersconf.org/_media/2010:10-lpc2010-nested-svm.pdf

## power_management

https://wiki.linuxplumbersconf.org/2010:power_management

Track lead: Matthew Garrett mjg@redhat.com





We're seeing increasing interest in development of aggressive runtime power management. This throws up a couple of problems:





 We need to be able to facilitate that aggressive runtime PM in the first place



 We need to understand how userspace can communicate its requirements to the kernel







Providing support for runtime PM





Rafael's PM framework provides most of the support required for this, and we're seeing it applied to various bus types. However, we don't currently have a solution for more general system-wide power states. OMAP uses cpuidle to enter deep power states when idle, but this doesn't scale to multi-core systems which are starting to appear in the embedded market. The main continuing point of disagreement is over how resilient the PM implementation should be to applications which don't idle when unused.





Communicating userspace requirements





pm_qos is now a reasonably well-established interface for expressing certain kinds of userspace requirements for PM transitions. Is it suitable for all purposes?





There's a certain amount of crossover between this and the PM minisummit in August. We'll need to try to work out which topics are most relevant to each.





Key people





Rafael Wysocki (runtime PM framework)
Kevin Hilman (would be good for OMAP side of things)
Mark Gross (pm_QoS)
Someone from Android

### 添付資料URL

掲載なし

## user-visible_networking_issues

https://wiki.linuxplumbersconf.org/2010:user-visible_networking_issues

Track leader: Matt Domsch Matt_Domsch@dell.com





Track Problem Statement: TBD





Proposed Topics / Leaders




 Network Device Naming - Matt Domsch



 Network Manager - Dan Williams (confirmed interest)



 Connection Manager - Marcel Holtmann (confirmed interest)



 Samuel from Intel and Luca from Nokia.  They are also fighting with networking on mobile devices (suggested by Marcel)



 P2P - Johannes Berg

### 添付資料URL

掲載なし


# 休憩・食事・懇親会等

## Reception at Jillian's

- 個別URL: 掲載なし
- スケジュール内URL: https://blog.linuxplumbersconf.org/2010/ocw/events/LPC2010/schedule#schedule_item-21

### One Line Summary

Joint reception with the Kernel Summit at Jillians at Fenway, Second Floor Drinks & Appetizers, and a floor full of entertainment: Pool tables, table tennis, foosball, darts, and more. Buses will depart from the Hyatt at 6:30pm

## Break

- 個別URL: 掲載なし
- スケジュール内URL: https://blog.linuxplumbersconf.org/2010/ocw/events/LPC2010/schedule#schedule_item-3

### One Line Summary

Break

## Lunch

- 個別URL: 掲載なし
- スケジュール内URL: https://blog.linuxplumbersconf.org/2010/ocw/events/LPC2010/schedule#schedule_item-9

### One Line Summary

Lunch (Box Lunch will be provided)

## Tea Break

- 個別URL: 掲載なし
- スケジュール内URL: https://blog.linuxplumbersconf.org/2010/ocw/events/LPC2010/schedule#schedule_item-15

### One Line Summary

Afternoon Tea Break

## Throw Linus to the Sharks Party at the New England Aquarium

- 個別URL: 掲載なし
- スケジュール内URL: https://blog.linuxplumbersconf.org/2010/ocw/events/LPC2010/schedule#schedule_item-27

### One Line Summary

Throw Linus to the Sharks Party at New England Aquarium Drinks and Dinner Buffet, plus a chance to view all the animals and exhibits. When given a choice between giving a keynote and being fed to the sharks, Linus didn’t hesitate. “The sharks!”. Still nursing a grudge over a rejected patch? Don’t miss Linus Torvalds scuba-diving into the shark tank at the New England Aquarium! Buses will depart from the Hyatt between 6:30pm and 7:00pm.

## Break

- 個別URL: 掲載なし
- スケジュール内URL: https://blog.linuxplumbersconf.org/2010/ocw/events/LPC2010/schedule#schedule_item-33

### One Line Summary

Break

## Lunch

- 個別URL: 掲載なし
- スケジュール内URL: https://blog.linuxplumbersconf.org/2010/ocw/events/LPC2010/schedule#schedule_item-39

### One Line Summary

Lunch (Box Lunches will be provided)

## Tea Break

- 個別URL: 掲載なし
- スケジュール内URL: https://blog.linuxplumbersconf.org/2010/ocw/events/LPC2010/schedule#schedule_item-45

### One Line Summary

Tea Break

## Free Night In Cambridge

- 個別URL: 掲載なし
- スケジュール内URL: https://blog.linuxplumbersconf.org/2010/ocw/events/LPC2010/schedule#schedule_item-75

### One Line Summary

Roundtrip Shuttle Transportation will be provided between 6:30pm and 10:30pm to Central Square in Cambridge – a great area for restaurants and bars.

## Break

- 個別URL: 掲載なし
- スケジュール内URL: https://blog.linuxplumbersconf.org/2010/ocw/events/LPC2010/schedule#schedule_item-51

### One Line Summary

Break

## Lunch

- 個別URL: 掲載なし
- スケジュール内URL: https://blog.linuxplumbersconf.org/2010/ocw/events/LPC2010/schedule#schedule_item-57

### One Line Summary

Lunch (Box Lunches will be provided)

## Tea Break

- 個別URL: 掲載なし
- スケジュール内URL: https://blog.linuxplumbersconf.org/2010/ocw/events/LPC2010/schedule#schedule_item-63

### One Line Summary

Tea Break

## Closing Party at Grafton Street

- 個別URL: 掲載なし
- スケジュール内URL: https://blog.linuxplumbersconf.org/2010/ocw/events/LPC2010/schedule#schedule_item-69

### One Line Summary

Closing Party at the Grafton Street pub in Cambridge Drinks and appetizers served. Buses will depart from the Hyatt between 5:15pm and 6:00pm.


# 出典

- https://blog.linuxplumbersconf.org/2010/program/index.html
- https://blog.linuxplumbersconf.org/2010/ocw/events/LPC2010/schedule
- https://blog.linuxplumbersconf.org/2010/ocw/events/LPC2010MC/tracks/13
- https://blog.linuxplumbersconf.org/2010/ocw/events/LPC2010BOFS/proposals
