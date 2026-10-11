# Linux Plumbers Conference 2012 全セッション一覧

出典: https://blog.linuxplumbersconf.org/lpc-2012/index.html

2012年はSummit Scheduler形式。日別スケジュールの個別URL85件を重複排除し、技術セッション・全体会議等72件、朝食・懇親会・会場使用不可13件を区別して収録。複数発表を束ねた枠は元ページのTitleとDescription全体を保持。Descriptionは個別ページ原文（登壇者紹介を含む）。空欄は未掲載と明示。資料は個別ページのNotesリンクと資料ページのスライド・Etherpad等を照合し、複数枠で同じ資料が使われる場合も記録。Notesリンクは定型で掲載されているため、議事録本文の有無は未確認。資料ページのみの項目は個別URLを推測せず補足に収録。動画はホスティングサイトへの総合リンクのみ掲載されており、セッション別の動画URLは確認できていない。添付ファイル本体の取得・リンク有効性検査は未実施。Wikiの採用済みトピックは補足とし、セッション数に加算しない。

セッション: 72件 / Descriptionあり: 65件 / 資料あり: 72件 / 資料項目: 208件

## 目次

1. [LPC Opening Plenary](#session-3)
2. [Plumbing UEFI into Linux](#session-41)
3. [Target CPU selection && Sharing Sched Info](#session-90)
4. [Kernel Summit Open Day - Morning](#session-91)
5. [CPU idle: introducing cluster management](#session-31)
6. [The Core OS](#session-153)
7. [PM Constraints: Intel](#session-127)
8. [CoDel and Queue Limits](#session-67)
9. [Adding lock elision to Linux](#session-35)
10. [Expose Routing && DSPs in ASoC](#session-80)
11. [The 0.5 second software update](#session-63)
12. [Data Direct I/O and Ethernet AVB](#session-154)
13. [Linux display and video: one problem, three solutions, many puzzled developers](#session-32)
14. [Security and Storage](#session-78)
15. [Kernel Summit Open Day - Afternoon](#session-92)
16. [Containers Microconference](#session-116)
17. [Concurrency Kit: Towards accessible non-blocking technology for C](#session-52)
18. [Improved handling of large sparse files, such as virtual disk images](#session-33)
19. [HD-audio cooking && QA/Testing](#session-55)
20. [big.LITTLE && Tegra30](#session-72)
21. [All Plumbing needs an API](#session-37)
22. [x86 Virtualization](#session-111)
23. [Kernel Panel @ LinuxCon](#session-8)
24. [Tracing Summit - Early Morning](#session-13)
25. [USB port power off Kernel/Userspace API](#session-42)
26. [Simplify volume setting at startup/shutdown](#session-124)
27. [System Storage Manager; A single tool to manage your storage](#session-103)
28. [UEFI Basics Tutorial](#session-115)
29. [Policies for transcending Linux memory efficiency with zcache](#session-43)
30. [Multipath TCP && TCP Loss Probe && Client Congestion Manager](#session-49)
31. [Tracing Summit - Late Morning](#session-133)
32. [External Storage Array Management API](#session-104)
33. [Letting go (A sensitive guide dealing with application caches under the pressures of low memory)](#session-34)
34. [Anaconda, Snapper and Booting](#session-107)
35. [ACPI 5.0 in Linux](#session-27)
36. [The Core OS Wish List](#session-65)
37. [Tracing Summit - Afternoon](#session-14)
38. [Configuration and Management Open Discussion](#session-108)
39. [LLVM and Clang: Advancing Compiler Technology](#session-151)
40. [Moving Android and regular Linux closer together](#session-28)
41. [Virtualization Memory Management](#session-112)
42. [Local File Systems](#session-109)
43. [LLVM Toolchain - Update and State of Building Linux with LLVM](#session-134)
44. [Big and Little Endian inside/out](#session-30)
45. [Atomic upgrades, booting, and package systems](#session-60)
46. [Hinting vs Heuristics: Plumbing I/O Cache Hints Through the Linux Storage Stack](#session-105)
47. [LLVM/Clang x86 Kernel Build](#session-144)
48. [The Tunnel Monster](#session-40)
49. [Time Alignment && PulseAudio on Android](#session-102)
50. [Tracing Summit - Late Afternoon](#session-132)
51. [NFS Advanced Projects](#session-106)
52. [PM Constraints: OMAP](#session-59)
53. [Reducing Network Latency in Linux](#session-36)
54. [ALSA channel-mapping API](#session-101)
55. [ARM Virtualization](#session-114)
56. [Lubricating Kernel Plumbing with Social Engineering](#session-38)
57. [Real Time Microconference](#session-110)
58. [Petitboot && /boot Unification](#session-87)
59. [Android (tentative)](#session-126)
60. [Classification/Shaping && HW Rate Limiting && Open-vswitch](#session-68)
61. [Status of the ARM architecture](#session-29)
62. [Enhancing the Thermal Management Infrastructure in Linux](#session-39)
63. [PM constraints: Tegra](#session-57)
64. [Network Virtualization and Lightning Talks](#session-113)
65. [Polyhedral optimizations for LLVM](#session-152)
66. [CoreOS: Initramfs Systemd && libkmod](#session-64)
67. [An RCU-protected scalable trie for user-mode use](#session-53)
68. [Systemd for the User Session](#session-88)
69. [UEFI Open Discussion](#session-135)
70. [ASMP: Improving performance through dedication of OS tasks to specific processors](#session-51)
71. [Application of deadline scheduling for powersaving strategies](#session-71)
72. [LPC Closing Discussion](#session-4)

<a id="session-3"></a>
## 1. LPC Opening Plenary

- セッション個別URL: https://blog.linuxplumbersconf.org/lpc-2012/meeting/3/lpc2012-plenary-opening/index.html
- Track: 
- 日時: 2012-08-29 09:15 - 09:40 PDT [PLENARY]

### Description

掲載なし

### 添付資料URL

- [Notes in a separate window](http://etherpad.osuosl.org/lpc-2012-lpc2012-plenary-opening)（link）
- [Edit notes window](http://etherpad.osuosl.org/ep/pad/view/lpc-2012-lpc2012-plenary-opening/latest)（link）
- [Welcome to LPC 2012 – Elena Zannoni [slides]](https://blog.linuxplumbersconf.org/2012/wp-content/uploads/2012/08/lpc2012-opening.pdf)（file）

<a id="session-41"></a>
## 2. Plumbing UEFI into Linux

- セッション個別URL: https://blog.linuxplumbersconf.org/lpc-2012/meeting/41/lpc2012-ref-uefi/index.html
- Track: Refereed Presentations
- 日時: 2012-08-29 09:50 - 10:35 PDT

### Description

The adoption of UEFI is probably the biggest changes in the x86 world since the migration to 64-bit. While fundamentally a pile of code responsible for starting an operating system, UEFI provides features that reach all the way up to the running desktop. This gives us opportunities for tight integration between the OS and the firmware, providing a more cohesive experience for the user from the moment they turn their computer on.


This presentation will provide a brief introduction to UEFI, followed by a discussion of the functionality it provides to the OS and the different parts of the Linux stack that can benefit from UEFI integration - for example, the combination of bootloader, kernel and graphics driver work that will allow us to move seamlessly from the firmware boot splash to a user login.


Topic Lead: Matthew Garrett
Matthew does firmware integration work so you don't have to. He represents Red Hat on the UEFI Forum and is active in Linux UEFI development.

### 添付資料URL

- [Notes in a separate window](http://etherpad.osuosl.org/lpc-2012-lpc2012-ref-uefi)（link）
- [Edit notes window](http://etherpad.osuosl.org/ep/pad/view/lpc-2012-lpc2012-ref-uefi/latest)（link）

<a id="session-90"></a>
## 3. Target CPU selection && Sharing Sched Info

- セッション個別URL: https://blog.linuxplumbersconf.org/lpc-2012/meeting/90/lpc2012-sched-timer-workqueue/index.html
- Track: Scheduler
- 日時: 2012-08-29 09:50 - 10:35 PDT

### Description

=== How to improve the selection of the target cpu in the timer and workqueue framework ===
It's sometime difficult to move a timer/hrtimer on a set of cpus in order to follow the load balance policy of the scheduler. We have some use cases where a timer, that is not specifically pinned to a particular cpu, stays on this cpu (or set of cpus) whereas all the tasks activity has moved on other ones. The timer/hrtimer frameworks currently call a scheduler function under some conditions but there is a limited number of use case where the timer will effectively migrate. The wokqueue framework doesn't have any link with the scheduler when it looks for a cpu on which it can run a work. The goal of this talk is to describe the potential issue and to discuss the possible solution.


Topic Lead: Vincent Guittot
Vincent Guittot is an embedded Linux engineer at ST-Ericsson. Since 2005, he has focused on mobile phone running Linux and Android. In 2010, he has joined the power management working group of Linaro.


=== Sharing information between scheduler and frameworks ===
The scheduler could take advantage of information from other frameworks, when it selects run queue for a task. These information are helpful not only for power consumption but also for performance by giving a mask of preferred CPUs. As an example, the wake up latency of a task is impacted by the C-states of the selected CPU. Choosing a CPU with a low C-state will reduce this latency.


This talk will discuss the various inputs that could be shared with the scheduler


Topic Lead: Vincent Guittot

### 添付資料URL

- [Notes in a separate window](http://etherpad.osuosl.org/lpc-2012-lpc2012-sched-timer-workqueue)（link）
- [Edit notes window](http://etherpad.osuosl.org/ep/pad/view/lpc-2012-lpc2012-sched-timer-workqueue/latest)（link）

<a id="session-91"></a>
## 4. Kernel Summit Open Day - Morning

- セッション個別URL: https://blog.linuxplumbersconf.org/lpc-2012/meeting/91/kernel-summit-open-day-morning/index.html
- Track: Kernel Summit
- 日時: 2012-08-29 09:50 - 10:35 PDT

### Description

掲載なし

### 添付資料URL

- [Notes in a separate window](http://etherpad.osuosl.org/lpc-2012-kernel-summit-open-day-morning)（link）
- [Edit notes window](http://etherpad.osuosl.org/ep/pad/view/lpc-2012-kernel-summit-open-day-morning/latest)（link）

<a id="session-31"></a>
## 5. CPU idle: introducing cluster management

- セッション個別URL: https://blog.linuxplumbersconf.org/lpc-2012/meeting/31/lpc2012-ref-cpu-idle-cluster-management/index.html
- Track: Refereed Presentations
- 日時: 2012-08-29 10:45 - 11:30 PDT

### Description

The current CPU idle implementation in the Linux kernel is skewed towards per-CPU idle power management. Power consumption of components in the SOC that are part of a cluster of CPUs but do not belong to the CPU power domain is significant and should be managed in the CPU idle driver accordingly. Current ARM platforms manage cluster power states using ad-hoc code in the idle driver which results in code duplication that is not necessary and can be consolidated. Furthermore, CPU idle governors are not cluster-aware so that every low-power state decision is made on a per-CPU basis which turns out to be sub-optimal to achieve deep-sleep cluster states where all CPUs are required to be powered off to shut down additional cluster shared components like interrupt controllers and L2 shared caches.


Considerable effort is taking place in the kernel community to improve this situation; in particular coupled C-states [1] provide a method to synchronize CPUs before entering cluster states and increase the cluster shutdown opportunities for a running SOC. This is a big step towards having a complete cluster aware CPU idle implementation but this does not yet provide a holistic solution.


This talk will highlight the CPU idle requirements and intricacies of current and future ARM systems, inclusive of big.LITTLE multi-cluster SOCs and is aimed at Linux kernel Power Management developers. It is meant to kick-start the discussions on some topics (per-CPU idle states, CPU idle governors cluster awareness, cluster next event, coupled C-states usage) that should result in a hacking session implementing features required by a cluster aware CPU idle implementation.


[1] - https://lkml.org/lkml/2012/3/14/363


Lorenzo Pieralisi, ARM Ltd., Cambridge


Lorenzo Pieralisi has worked at ARM Ltd since March 2010 as a Linux kernel
developer. He obtained a Laurea degree (summa cum laude) in Microelectronics
from the University of Ancona in March 2002. He carried out a PhD in
Microelectronics at INP Grenoble where he defended his thesis in 2005 on
on-chip interconnections for Advanced Computing. Prior to joining ARM, he
worked at the AST (Advanced System Technology) Lab of STMicroelectronics in
Grenoble France, where he spent 7 years programming kernel device drivers for
ARM processors for a variety of purposes like power management, advanced
computing and interconnect device drivers. He presented talks at DATE Europe
in 2003, ICCD 2005, SoC conference in 2008, ELC Europe 2011 and other workshops
around Europe. He is a keen and enthusiastic embedded systems programmer since
the early days of microcontrollers and got involved with Linux kernel
programming in 2006 for both personal interest and work.
He is an active open source contributor.


Amit Kucheria, working for Linaro as Canonical assignee


Amit is a long-time Linux user and has worked on network QoS, wireless routing, power management in Linux at university, a California startup and finally Nokia where he led the power management team for a while.
Lately, he's been working with the Linaro members to make Linux power management infrastructure more suitable for ARM SoCs. As Tech Lead of the Power Mangement Working Group, he gets to work with a diverse team in trying to standardize interfaces and tools for ARM power management.


Daniel Lezcano, working Linaro as IBM LTC assignee


Daniel worked in 1998 in the Space Industry and Air traffic management for distributed system project in life safety constraints. He acquired for this project a system programing expertise. He joined IBM in 2004 and since this date he does kernel hacking and pushed upstream the resource virtualization with the namespaces. In 2011, he joined the Linaro's Power Management Team and works on the kernel area, consolidating the cpuidle drivers across the different ARM SoC.

### 添付資料URL

- [Notes in a separate window](http://etherpad.osuosl.org/lpc-2012-lpc2012-ref-cpu-idle-cluster-management)（link）
- [Edit notes window](http://etherpad.osuosl.org/ep/pad/view/lpc-2012-lpc2012-ref-cpu-idle-cluster-management/latest)（link）
- [CPU Idle: Introducing Cluster Management – L. Pieralisi [slides]](https://blog.linuxplumbersconf.org/2012/wp-content/uploads/2012/09/cpuidle-cluster.pdf)（file）

<a id="session-153"></a>
## 6. The Core OS

- セッション個別URL: https://blog.linuxplumbersconf.org/lpc-2012/meeting/153/the-core-os/index.html
- Track: Core OS
- 日時: 2012-08-29 10:45 - 11:30 PDT

### Description

The term “Core OS” has recently been coined in an LWN article, describing the core (userspace) bits of an operating system. In this talk we want to give a quick overview of what we believe the Linux “Core OS” consists of technically, we want to draw the line where we believe the various projects belong in this (such as systemd, udev, dbus, …), and where they don’t, and where we want to go with this in the future.


Topic Lead: Kay Sievers
Topic Lead: Lennart Pottering

### 添付資料URL

- [Notes in a separate window](http://etherpad.osuosl.org/lpc-2012-the-core-os)（link）
- [Edit notes window](http://etherpad.osuosl.org/ep/pad/view/lpc-2012-the-core-os/latest)（link）

<a id="session-127"></a>
## 7. PM Constraints: Intel

- セッション個別URL: https://blog.linuxplumbersconf.org/lpc-2012/meeting/127/lpc2012-cf-management-constraints/index.html
- Track: Constraint Framework
- 日時: 2012-08-29 10:45 - 11:30 PDT

### Description

Power Management Constraints Topics:
1) Power vs. Performance
2) Priority Based PM QoS Constraints Framework


=== Power vs Performance ===
In order to suffice problems related to a "minimum" quality of service for basic HW like CPU/networking/DMA, we have the existing PM QoS framework to solve our problems. As the discrete HW units grow on a SoC, so IMO should the PM QoS layer scale.


The second part of the problem is the scaling "up" or "down".  We can mirror the PM QoS constraints to Perf QoS constraints which would allow independent devices to scale the generic system upwards into the performance mode. The performance QoS can also be used by platform specific constraints like thermals to either throttle device/SoC features OR constraints like accelerated workloads that may require a minimal CPU/SoC operating point to scale SoC features.


Examples include issue faced on memory throughput on TI platforms, increasing CPU frequency as discussed in mailing lists by NVidia developers, imposing constraints on devices like CPU/LCD for thermal management etc.


Topic Lead: Sundar Iyer
Worked/Working on PM/tunings/efficiency for Linux in ST-E/Intel


=== Priority Based PM QoS Constraints Framework ===
There are workloads that require certain CPU Freqs, these Workloads should be able to tell the system what Freq is the optimal freq. But there may be thermal constraints that should not be allowed to be breached which requires Freq throttling or a user may want to artificially throttle or bump up the Freq all these Freq constraint requirements becomes difficult to manage since now we have a problem of which of those to be selected.


In order to solve this problem, we propose a priority based PM QoS for Freq Management. High Priority Constraints may be reserved for thermal Throttling, Medium for user throttling or bump up, and Low for process PM QoS constraints


Topic Lead: Illyas Mansoor
Illyas works in Power Management Domain in Intel, specifically contributed to Intel SoC Power Management Linux Kernel

### 添付資料URL

- [Notes in a separate window](http://etherpad.osuosl.org/lpc-2012-lpc2012-cf-management-constraints)（link）
- [Edit notes window](http://etherpad.osuosl.org/ep/pad/view/lpc-2012-lpc2012-cf-management-constraints/latest)（link）
- [PM-QoS – Sundar Iyer [slides]](https://blog.linuxplumbersconf.org/2012/wp-content/uploads/2012/09/2012-lpc-pmconstraints-PM-QoS-power-performance-iyer.pdf)（file）

<a id="session-67"></a>
## 8. CoDel and Queue Limits

- セッション個別URL: https://blog.linuxplumbersconf.org/lpc-2012/meeting/67/lpc2012-net-codel-fq-codel/index.html
- Track: Networking
- 日時: 2012-08-29 10:45 - 11:30 PDT

### Description

Networking Topics
1. CoDel and FQ CoDel
2. Byte Queue Limits revisited


=== CoDel and FQ CoDel ===
Kathleen Nichols & Van Jacobson made a major work in the to help the bufferbloat problem that got some attraction these past years after Jim Gettys and Dave Taht communications. The result of this work is presented in following communication[1].


[1] http://queue.acm.org/detail.cfm?id=2209336


Idea of Codel saying that buffers or large Queues are not bad per se (as BufferBloat could imply) Its the way Queues are handled that is critical. AQM are quite complex to deploy because RED (the most known AQM) is hard to tune and has some flaws.


CoDel intent is to use the delay of packets in queue as the main input, and not the Queue length (in Bytes or Packets) It is designed to be a "No knob" AQM for routers. Its implementation uses a fairly simple algo intended for silicon integration. Since Kathleen and Van ideas were very close of the various ideas I had last year to improve linux AQM, I co-implemented Codel for linux
(with Dave Taht). I also implemented fq_codel, which is SFQRED replacement, using Fair Queueing and CoDel managed per flow queue. I'll present various experimental results.


Topic Lead: Eric Dumazet    [HTML_REMOVED]
Eric is currently working for Google. He is a linux networking guy, who did some work in packet schedulers lately: SFQ improvements, and CoDel / fq_codel implementations.


=== Byte Queue Limits revisited ===
Byte queue limits (BQL) is an algorithm to manage sizes of queues in network cards based on bytes, not on packets. The algorithm tries to estimate how many bytes the card is able to transmit, sizes the queue accordingly and accommodates to changing load. Properly sized (shorter) queues push queuing to upper layers of the stack, the queuing disciplines (qdisc), which reduces the time between a packet is scheduled for transmission and when it hits the wire. This reduces latency and allows better scheduling decisions in software.


BQL is here for a year and it seems to work well given the lack of major complains. In this talk we are going to present experimental data on how BQL actually behaves and what are the effects of BQL buffer management for the rest of the stack. We are going to show that BQL does not need any knobs to selects a good size of the queues. We are also going to discuss and explain some limitations of the algorithm and some corner cases of its deployment due to its dependency on outer events that pace its execution.


Topic Lead: Tomas Hruby
Tomas is a PhD candidate at the Free University in Amsterdam in the Minix group of prof. Andy Tanenbaum and is exploring how to take advantage of multicore processors for designing reliable systems. He has been working on intrusion detection, filesystems and L4 microkernel. He is currently an intern in the Linux networking team at Google.

### 添付資料URL

- [Notes in a separate window](http://etherpad.osuosl.org/lpc-2012-lpc2012-net-codel-fq-codel)（link）
- [Edit notes window](http://etherpad.osuosl.org/ep/pad/view/lpc-2012-lpc2012-net-codel-fq-codel/latest)（link）
- [Byte Queue Limits revisited – Tomas Hruby [slides]](https://blog.linuxplumbersconf.org/2012/wp-content/uploads/2012/08/bql_slide.pdf)（file）

<a id="session-35"></a>
## 9. Adding lock elision to Linux

- セッション個別URL: https://blog.linuxplumbersconf.org/lpc-2012/meeting/35/lpc2012-ref-lock-elision/index.html
- Track: Refereed Presentations
- 日時: 2012-08-29 11:40 - 12:25 PDT

### Description

This talks introduces lock elision with hardware support, and describes
a practical implementation in the Linux kernel and in glibc. Lock elision
is a technique to improve the parallelism of existing locks without
changing the semantics.  Using this allows to improve the scalability of both 
kernel and multi threaded user software.  It describes the necessary changes 
to the kernel and to glibc, plus also some programming techniques to make 
best of use of elision.


The audience is people interested in multithreaded programing and
kernel programers.


Andi Kleen is a long term contributor to the Linux kernel. His past
kernel work including working on the x86-64 port, the linux network stack,
and other areas. He currently focusses on Linux scalability. 
He works at the Intel Open Source Technology Center.

### 添付資料URL

- [Notes in a separate window](http://etherpad.osuosl.org/lpc-2012-lpc2012-ref-lock-elision)（link）
- [Edit notes window](http://etherpad.osuosl.org/ep/pad/view/lpc-2012-lpc2012-ref-lock-elision/latest)（link）
- [Adding Lock Elision to Linux – Andi Kleen [slides]](https://blog.linuxplumbersconf.org/2012/wp-content/uploads/2012/08/Adding-lock-elision-to-Linux.pdf)（file）

<a id="session-80"></a>
## 10. Expose Routing && DSPs in ASoC

- セッション個別URL: https://blog.linuxplumbersconf.org/lpc-2012/meeting/80/lpc2012-audio-routing/index.html
- Track: Audio
- 日時: 2012-08-29 11:40 - 12:25 PDT

### Description

=== Exposing Routing to the Application Layer ===


In order to allow nicer configuration UIs and easier diagnostics it would be good if we could expose audio routing information to the application layer.


=== Representing DSPs in ASoC ===
As embedded systems continue to evolve, host-based processing is often offloaded to a co-processor dedicated for specific tasks in order to improve the performance and power utilization. In this the audio subsystem seems to be no exception and more vendors are trying to offload tasks to DSPs, be they embedded in SoCs or audio codecs. This evolution requires changes in ASoC to represent all the routing and processing capabilities of these DSPs.


The current efforts are based on two methods being propagated. The first approach developed by Liam Girdwoodand TI, typically referred to as soc-dsp aka dynamic PCM, introduces the notion of dynamic PCM nodes,  where audio front-ends (FEs-classic PCM device visible to user) and audio back-ends (BEs-soc-hardware interfaces) represent audio links.


The second approach being discussed is referred as CODEC<-->CODEC model as proposed by Mark Brown, where the DSP is represented as another codec in the system and links to the real codec in the system through the machine map.


This talk takes a look at both the approaches and latest evolutions, future plans on these methods and discusses the common infrastructure needs which need to considered for making this representation an effective one for SoC and codec vendors


Topic Lead: Vinod Koul [HTML_REMOVED]
Topic Lead: Pierre-louis Bossart [HTML_REMOVED]

### 添付資料URL

- [Notes in a separate window](http://etherpad.osuosl.org/lpc-2012-lpc2012-audio-routing)（link）
- [Edit notes window](http://etherpad.osuosl.org/ep/pad/view/lpc-2012-lpc2012-audio-routing/latest)（link）

<a id="session-63"></a>
## 11. The 0.5 second software update

- セッション個別URL: https://blog.linuxplumbersconf.org/lpc-2012/meeting/63/lpc2012-boot-half-second-update/index.html
- Track: Core OS
- 日時: 2012-08-29 11:40 - 12:25 PDT

### Description

Three years ago at the inaugural Linux Plumbers Conference, we showed that a Linux OS should boot to the UI in 5 seconds or less. Since then, much has happened to take this from prototype to general deployed production technology. However, booting is only one of the operations for which the performance matters to users.


The performance, and capabilities of the software update and associated tooling have an even bigger impact on the experience of the user than just booting in 2 seconds does.


In this presentation I'll show what a 0.5 second software update looks like. However, since it'd boring to just show that you can be 300 times better than the yum tooling, I'll also show how what options this capability opens for those who develop operating systems to service their userbase better. The revealing of the code and project that showcase these capabilities will happen at the time of the LPC presentation.


I'll likely will have a few other surprises ready by LPC as well; there's still time left between now and LPC.


Topic Lead: Arjan van de Ven
Arjan van de Ven is a Sr Principal Engineer at Intel's Open Source Technology Center, where he works on various things Linux, ranging from general kernel technology to power and performance tools and optimizations.

### 添付資料URL

- [Notes in a separate window](http://etherpad.osuosl.org/lpc-2012-lpc2012-boot-half-second-update)（link）
- [Edit notes window](http://etherpad.osuosl.org/ep/pad/view/lpc-2012-lpc2012-boot-half-second-update/latest)（link）

<a id="session-154"></a>
## 12. Data Direct I/O and Ethernet AVB

- セッション個別URL: https://blog.linuxplumbersconf.org/lpc-2012/meeting/154/lpc2012-net-data-direct-i-o/index.html
- Track: Networking
- 日時: 2012-08-29 11:40 - 12:25 PDT

### Description

Networking Topics:
1) Data Direct I/O
2) Ethernet Audio/Video Bridging


=== Data Direct I/O Significantly Boosts Networking Performance and Reduces Power ===
This presentation calls out the new Data Direct I/O (DDIO) platform technology that enables I/O data transfers that require far fewer trips to memory (nearly zero in the most optimal scenarios). In doing so, DDIO significantly boosts performance (higher throughput, lower CPU usage, and lower latency), and lowers power consumption.  The updated architecture of the Intel Xeon processor to remove the inefficiencies of the classic model by enabling direct communication between Ethernet controllers and adapters and host processor cache. Eliminating the frequent visits to main memory present in the classic model reduces power consumption, provides greater I/O bandwidth scalability, and lowers latency.  By avoiding the multiple reads from and writes to system memory, DDIO reduces latency, increases system I/O bandwidth, and reduces power consumption. Intel DDIO is enabled by default on all Intel Xeon processor E5 based servers and workstation platforms.


This presentation will explain the technology in detail as well as how it currently gets used.  Performance numbers will be included from our Ethernet controllers which will clearly show the benefits of the technology.  All performance gains will be examined and explained including the power reduction while increasing the bandwidth as well as reducing latency.


=== Ethernet Audio/Video Bridging (AVB) - a Proof-of-Concept ===
Using our latest gigabit Ethernet controller we designed and implemented a Proof-of-Concept Audio Video Bridging device using the IEEE 802.1Qav standard. The project was implemented using a modified Linux igb driver with a user space component to pass the AVB frames to the controller while in addition maintaining normal network connection. This presentation will go through the details of the project, explain the challenges and have a demo of the working implementation at the end.


AVB is now being used to pass audio and video to many different types of A/V devices using Ethernet cables instead of having to run large heavy analog A/V cables to the devices. So not only is all the analog cabling gone but the performance is also far superior with the ease of controlling all the audio and video from a single work-station.


Topic Lead: John Ronciak
John is a SW Architect working for Intel in the LAN Access Division (LAD).  John has 30 years experience writing devices drivers for various operating system and is currently one of the leads in the Open Source driver group responsible for six Linux kernel drivers.

### 添付資料URL

- [Notes in a separate window](http://etherpad.osuosl.org/lpc-2012-lpc2012-net-data-direct-i-o)（link）
- [Edit notes window](http://etherpad.osuosl.org/ep/pad/view/lpc-2012-lpc2012-net-data-direct-i-o/latest)（link）

<a id="session-32"></a>
## 13. Linux display and video: one problem, three solutions, many puzzled developers

- セッション個別URL: https://blog.linuxplumbersconf.org/lpc-2012/meeting/32/lpc2012-ref-display-video/index.html
- Track: Refereed Presentations
- 日時: 2012-08-29 14:00 - 14:45 PDT

### Description

The Linux kernel offers three APIs to display video and graphics. While
DRM/KMS, FB and V4L2 started as solutions to distinct problems, they now
largely overlap, resulting in confusion and code duplication.


Several efforts have been or are being led to consolidate our display and
video APIs and reduce code duplication. Despite them too many application
developers are still lost when they need to select an API for display and
video.


This track will briefly present the ongoing work on DRM/KMS, FB and V4L2 that
aim at reducing code duplication and bridging the gaps between these APIs. It
will then outline the use cases that each API targets and how they can
collaborate, to finally try and define rules that governs what API to choose
when writing new drivers and applications.


The track's target audience is kernel and userspace developers who want to
better understand the Linux kernel graphics and video APIs and their
interactions, and share their opinions on directions for future developments.


Speaker Bio


Laurent Pinchart has been a Linux enthusiast since 1997 and Linux kernel
developer since 2001. He has written media-related Linux drivers for consumer
and embedded devices, and is one of the Video4Linux core developers. Laurent
is the founder and owner of Ideas on board, a company specialized in embedded
Linux design and development. He gave Linux media-related talks at the FOSDEM,
LPC and ELC. He currently works with the Renesas Linux kernel teams where he
develops embedded video-related kernel subsystems.

### 添付資料URL

- [Notes in a separate window](http://etherpad.osuosl.org/lpc-2012-lpc2012-ref-display-video)（link）
- [Edit notes window](http://etherpad.osuosl.org/ep/pad/view/lpc-2012-lpc2012-ref-display-video/latest)（link）
- [Linux Display and Video – Laurent Pinchart [slides]](https://blog.linuxplumbersconf.org/2012/wp-content/uploads/2012/08/laurent-pinchart-linux-display-and-video.pdf)（file）

<a id="session-78"></a>
## 14. Security and Storage

- セッション個別URL: https://blog.linuxplumbersconf.org/lpc-2012/meeting/78/lpc2012-virt-virtualization-security-discussion/index.html
- Track: Virtualization
- 日時: 2012-08-29 14:00 - 14:45 PDT

### Description

Virtualization Topics:
1. Virtualization Security Discussion
2. Storage Virtualization for KVM


=== Virtualization Security Discussion ===
This proposal is for a discussion of the threats facing Linux based Virtualization technologies and what can be done to help mitigate these threats.  The focus will be on hypervisor based virtualization, e.g. KVM, but container based virtualization can also be discussed if there is sufficient interest among the attendees.


Possible topics of discussion include:
 Confining malicious/exploited guests
 Validating host identity and integrity from the guest
* Enforcing network separation/virtualization


Topic Lead: Paul Moore
Paul has been involved in various Linux security efforts for the past eight years, with a strong focus on mandatory access control and network security.  He has served as the Linux Kernel's labeled networking maintainer since 2007.  Paul has given a number of presentations over the years at Linux conferences on Linux security, SELinux, SELinux/MLS, and labeled networking.


=== Storage Virtualization for KVM ===
In KVM based virtualization ecosystem, there are multiple choices for filesytem/storage and management tools. While this allows for different custom solutions, there is no single default storage solution that caters to the majority of use case scenarios. In this presentation, we will look at integrating different individual projects like QEMU, GlusterFS, oVirt/VDSM and libstoragemgmt to arrive at one filesystem/storage solution for KVM that works for most of the scenarios. Various aspects like making GlusterFS virtualization-ready and cross-vendor storage array integration will be discussed. We will finally discuss how some of the virtualization features like VM migration, taking snapshots etc can be done seamlessly in our storage solution using oVirt. Virtualization/Data Center administrators and users of KVM based virtualization will benefit from attending this presentation.


Topic Lead: Bharata B Rao [HTML_REMOVED]
Bharata B Rao is part of IBM Linux Technology Center, Bangalore He is currently working in the area of Virtualization. Earlier he has worked in the area of File Systems, Scheduler, Debuggers, Embedded Linux and Linux Clusters. Bharata graduated from The National Institute of Engineering, Mysore in 1999 and did his post graduation(MS) from BITS, Pilani in 2003.


In his spare time, Sanskrit language, Mountains and Mridangam (an Indian percussion instrument) keep him engaged.


Topic Lead: Deepak C Shetty [HTML_REMOVED]
Deepak C Shetty is working with IBM's Linux Technology Center (LTC), Bangalore in the area of open virtualisation. Earlier he has worked in area of Virtualisation aware File Systems. Prior to being part of LTC, Deepak worked in the areas of Platform Management (IBM Systems Director product) and Hardware Validation of IBM Power systems, in IBM. Deepak holds a Bachelor of Engineering degree in Electronics from Pune University, India and Diploma in Advanced Computing from C-DAC, Pune, India.


Other areas of interest include Software design and Stamp collection (Philately).


Topic Lead: M Mohan Kumar [HTML_REMOVED]
M. Mohan Kumar is an open source developer working at IBM Linux Technology Center, Bangalore. He has contributed to various components of Linux ecosystem including kexec (fast boot), kdump (kernel crash dump mechanism) for PowerPC, 9p file system and QEMU. Prior to IBM he has worked on various SCSI and Fibre Channel related Linux projects.


Mohan obtained his Bachelor of Engineering in Computer Science and Engineering from Bharathiar University, TamilNadu, India. He has 11 years of experience in Linux area.


Topic Lead: Balamurugan Aramugam [HTML_REMOVED]
Balamurugan works as Principle Software Engineer in Red Hat.  He is contributor to the upstream VDSM project, focusing on adding Gluster support.  He has been involved in design/development of various Gluster products, FreeIPMI etc.  Balamurugan works out of the Red Hat office in Bengaluru and his topics of interest include cloud technologies, Big Data, Kernel Development, Artificial Intelligence etc


Topic Lead: Shireesh Anjal [HTML_REMOVED]
Shireesh Anjal works as a Principal Software Engineer with Red Hat. He is a contributor to the upstream oVirt project, focusing on adding GlusterFS support. He has been involved with building scalable Banking and eGovernance systems over the past 12 years. Shireesh works out of the Red Hat office in Bengaluru and his topics of interest include cloud technologies, Big Data and mobile computing.

### 添付資料URL

- [Notes in a separate window](http://etherpad.osuosl.org/lpc-2012-lpc2012-virt-virtualization-security-discussion)（link）
- [Edit notes window](http://etherpad.osuosl.org/ep/pad/view/lpc-2012-lpc2012-virt-virtualization-security-discussion/latest)（link）
- [Storage Virtualization for KVM – Bharata B Rao [slides]](https://blog.linuxplumbersconf.org/2012/wp-content/uploads/2012/09/2012-lpc-virt-storage-virt-kvm-rao.pdf)（file）
- [Virtualization Security Discussion – Paul Moore [slides]](https://blog.linuxplumbersconf.org/2012/wp-content/uploads/2012/09/2012-lpc-virt-security-pmoore.pdf)（file）

<a id="session-92"></a>
## 15. Kernel Summit Open Day - Afternoon

- セッション個別URL: https://blog.linuxplumbersconf.org/lpc-2012/meeting/92/ks2012-open-day-afternoon/index.html
- Track: Kernel Summit
- 日時: 2012-08-29 14:00 - 14:45 PDT

### Description

掲載なし

### 添付資料URL

- [Notes in a separate window](http://etherpad.osuosl.org/lpc-2012-ks2012-open-day-afternoon)（link）
- [Edit notes window](http://etherpad.osuosl.org/ep/pad/view/lpc-2012-ks2012-open-day-afternoon/latest)（link）

<a id="session-116"></a>
## 16. Containers Microconference

- セッション個別URL: https://blog.linuxplumbersconf.org/lpc-2012/meeting/116/lpc2012-cont-cgroups/index.html
- Track: Containers
- 日時: 2012-08-29 14:00 - 14:45 PDT

### Description

Containers Topics:
1) Status of cgroups
2) CRIU - Checkpoint/Restore in Userspace
3) Kernel Memory accounting - memcg
4) ploop - container in a file
5) /proc virtualization
6) Building application sandboxes on top of LXC and KVM with libvirt
7) Syslog Virtualization
8) Time Virtualization


cgroups are a crucial part of containers technologies, providing resource isolation and allowing multiple independent tasks to run without harming each other (too much) when it comes to shared resource usage. It is, however, a quite controvertial piece of the Linux Kernel, with a lot of work being done lately to revert that.


We should discuss what kind of changes core cgroup users should expect, how to cope with them.


=== CRIU - Checkpoint/Restore in Userspace ===
Checkpoint/Restore functionality was attempted to be merged into the kernel many times, all without much success. CRIU is an attempt to solve the problem in userspace, augmenting the kernel functionality only when absolutely needed to aid that.


=== Kernel Memory accounting - memcg ===
The cgroup memory controller is already well established in the kernel. Recently, work is being done into adding kernel memory tracking to it. Patches exist for a part of it. We could use this session to explore possibly uncovered areas, and discuss the use cases.


=== ploop - container in a file ===
When dealing with container filesystems, some problems arise: How to limit the amount of data a container uses, since quota solutions that are container aware are not there yet. Also, when migrating the container to another destination, one usually remakes the filesystem by copying over the files (unless shared storage is assumed). This means that inode numbers are not preserved and also creates a bad I/O pattern of randomly copying over a zillion of tiny files, much slower than copying image of block-device (seq I/O).


Another problem with all CTs sharing host fs is non-scalable journal on host fs: as soon as one CT filled the journal, other CTs should wait for its freeing.


=== /proc virtualization ===
When we run a fully featured container, we need a containerized view of the proc filesystem. Current upstream kernel can do that for the process tree and a few other things, but that is just not enough. For running top, for instance, one needs to know not only that, but also how much cpu time each container used in total, how much of that is system time, for how long that container was out of the CPU, etc. That information is available - or will be (some if it is patches pending) in different cgroups.


What are the best ways to achieve this? What problems will we face? Is there any value in keep trying to push this functionality into the kernel, or would a userspace implementation suffice ?


=== Building application sandboxes on top of LXC and KVM with libvirt ===
This session will provide an overview of the recent virt-sandbox project, which aims to provide sandboxing of applications via the use of lightweight guests (both KVM and LXC). Discussion will cover techniques such as sVirt (use of SELinux labeling to prevent the sandboxed virtual machine/container from altering unauthorized resources in the host) and filesystem sharing & isolation (to allow the guest to share a specified portion of the host file system), integration with systemd for containerized application management, and tools to facilitate setup of sandboxed application service environments


Topic Lead: Daniel Berrange
Daniel has been the lead architect & developer of libvirt for more than 5 years, original developer of the libvirt-sandbox, virt-manager & entangle applications, and part-time hacker on QEMU, KVM, OpenStack, GTK-VNC, SPICE and more.


=== Syslog Virtualization ===
There is currently one buffer in the system to hold all messages generated by syslog. It would be ideal to have access to the syslog buffer in a per-container manner for isolation purposes.


=== Time Virtualization ===
Containers should have an independent and stable notion of time that is independent of the host. This is specially important when live migrating them around. It should also be perfectly possible for a process running gettimeofday() in a container to get a different value than the host system.


We will discuss strategies to achieve that.

### 添付資料URL

- [Notes in a separate window](http://etherpad.osuosl.org/lpc-2012-lpc2012-cont-cgroups)（link）
- [Edit notes window](http://etherpad.osuosl.org/ep/pad/view/lpc-2012-lpc2012-cont-cgroups/latest)（link）

<a id="session-52"></a>
## 17. Concurrency Kit: Towards accessible non-blocking technology for C

- セッション個別URL: https://blog.linuxplumbersconf.org/lpc-2012/meeting/52/lpc2012-scale-concurrency-kit/index.html
- Track: Scaling
- 日時: 2012-08-29 14:00 - 14:45 PDT

### Description

Despite more than 20 years of active research and development, non-blocking technologies remain inaccessible to many students, engineers and open-source projects. This is especially true in the context of an unmanaged language such as C despite its popularity in highly complex concurrent systems. Even in light of attractive performance properties, small to medium-sized corporations are extremely hesitant in adopting patent-free technology due to the technology lock-down associated with the various interfaces of existing concurrency libraries. To top it off, when introducing engineers to this area, many are overwhelmed by the literature and the sparsity of performance data.


This topic will walk the audience through the story of the struggles Samy and his peers have faced in the last couple of years in developing sufficient working knowledge to (efficiently) leverage existing non-blocking data structures as well as design, implement and verify new algorithms for use by mission-critical systems. It will highlight the holes faced in existing open-source projects tackling the concurrency problem for the C programming language and the literature associated with much of existing technology. The culmination of frustrations lead to the development of Concurrency Kit, a library designed to aid in the design and implementation of high performance concurrent systems. It is designed to minimize dependencies on operating system-specific interfaces and most of the interface relies only on a strict subset of the standard library and more popular compiler extensions.


Topic Lead: Samy Bahra [HTML_REMOVED]
Samy is an engineer focused on developing a leading, real-time low latency online advertising platform. Before moving to New York, Samy played a crucial role on the engineering team behind the leading high-performance messaging platform. Prior to that, he was an active member of a high-performance computing laboratory and was primarily involved with Unified Parallel C and the performance modeling and analysis of shared-memory multi-processor systems. He has been involved with several open-source projects.

### 添付資料URL

- [Notes in a separate window](http://etherpad.osuosl.org/lpc-2012-lpc2012-scale-concurrency-kit)（link）
- [Edit notes window](http://etherpad.osuosl.org/ep/pad/view/lpc-2012-lpc2012-scale-concurrency-kit/latest)（link）
- [Concurrency Kit – Samy Al Bahra [slides]](https://blog.linuxplumbersconf.org/2012/wp-content/uploads/2012/09/2012-lpc-scaling-concurrency-kit-albahra.pdf)（file）

<a id="session-33"></a>
## 18. Improved handling of large sparse files, such as virtual disk images

- セッション個別URL: https://blog.linuxplumbersconf.org/lpc-2012/meeting/33/lpc2012-ref-improved-virt-disk-handling/index.html
- Track: Refereed Presentations
- 日時: 2012-08-29 14:50 - 15:35 PDT

### Description

Virtual disk images have proven to be an interesting example of large
sparse files.  They often contain several gigabytes of data,
interspersed with potentially large holes, and are often accessed over
networks such as via NFS or iSCSI.  In managing these files on the
host, applications such as libvirt have run into scenarios where
performance can be improved.  For instance, it should be possible to
quickly identify and alter sections of a file that are sparse, to
perform a one-time copy of a disk image without polluting the host's
file system cache, to expose any ability of underlying storage devices
to do copy-on-write cloning, and to conditionally probe file
characteristics without hanging if the file is no longer accessible
due to a network outage.


Sparse file handling has improved with recent lseek(SEEK_HOLE)
additions, as well as new ioctls to punch holes into existing files,
although this support is still not available to all file systems.
Right now, the only way to avoid polluting the host's file system
cache is to use O_DIRECT, but this makes life much more difficult for
the application to conform to particular I/O patterns.  The
posix_fadvise() interface appears to provide the framework for asking
the kernel to perform uncached operations without making the
application worry about strict alignment, but for this to be useful,
the kernel would need to provide additional guarantees (perhaps in
sysfs) about what guarantees are possible through posix_fadvise.
BTFRS and other file systems are starting to provide copy-on-write
file cloning at a file system level, and there are also storage
devices that still have varying controls to achieve the same effects
at a device level; coming up with a unified interface to request this
feature would be handy.  Finally, the proposed xstat() kernel
interface to conditionally control how much data is retrieved when
querying file metadata would make it easier to work with large files
that live across potentially unreliable network connections.


Discussion will focus on interaction between kernel, file systems, and
user space applications, to determine how to improve existing
interfaces (such as posix_fadvise) or add new interfaces (such as
xstat) that can be used to improve performance of large files.  While
my background for this proposal stems from handling of virtual disk
images, there are probably several other file types that will benefit
from improvements in this area.


Eric Blake (Red Hat) is currently a primary contributor to the libvirt
project, which presents a unified management interface into multiple
virtualization technologies, such as KVM, LXC, and Xen.  He is also
active in the Austin Group for developing POSIX interfaces, as well as
a contributor to the gnulib project for providing ports of POSIX and
other interfaces to a large variety of platforms.

### 添付資料URL

- [Notes in a separate window](http://etherpad.osuosl.org/lpc-2012-lpc2012-ref-improved-virt-disk-handling)（link）
- [Edit notes window](http://etherpad.osuosl.org/ep/pad/view/lpc-2012-lpc2012-ref-improved-virt-disk-handling/latest)（link）
- [Improving Sparse File Handling – Eric Blake [slides]](https://blog.linuxplumbersconf.org/2012/wp-content/uploads/2012/08/sparse-improvements-LPC-2012.pdf)（file）

<a id="session-55"></a>
## 19. HD-audio cooking && QA/Testing

- セッション個別URL: https://blog.linuxplumbersconf.org/lpc-2012/meeting/55/lpc2012-audio-hd-recipe/index.html
- Track: Audio
- 日時: 2012-08-29 14:50 - 15:35 PDT

### Description

=== HD-Audio Cooking Recipe ===
This session will cover the debugging practices for typical problems
seen with HD-audio, which is the standard component on all modern PCs,
using the sysfs kernel interface and user-space helper programs.


Also, we will discuss open problems, jack retasking, HDMI stream
assignment, missing speaker/mic streams, and better interaction /
organization with user-space applications like PulseAudio.


=== Bug Tracking and QA ===
Bug tracking in the sound subsystem is far away from the optimal
situation. We'd like to discuss how to improve the situation, looking
through the experiences from the current ALSA and distro bug
trackers.


Also, we're going to show the automated testing of HD-audio driver
using hda-emu emulator for detecting the errors and regression
coverage.


Topic Lead: Takashi Iwai ([HTML_REMOVED])
Working as a member of hardware-enablement team in SUSE Labs at SUSE
Linux Products GmbH in Nuremberg, Germany, while playing a role as a
gatekeeper of the Linux sound subsystem tree over years.


Topic Lead: David Henningsson ([HTML_REMOVED])
Working for Canonical with audio hardware enablement, fixing audio
bugs and maintaining the audio stack, and also part of PulseAudio's
current development team.

### 添付資料URL

- [Notes in a separate window](http://etherpad.osuosl.org/lpc-2012-lpc2012-audio-hd-recipe)（link）
- [Edit notes window](http://etherpad.osuosl.org/ep/pad/view/lpc-2012-lpc2012-audio-hd-recipe/latest)（link）

<a id="session-72"></a>
## 20. big.LITTLE && Tegra30

- セッション個別URL: https://blog.linuxplumbersconf.org/lpc-2012/meeting/72/lpc2012-sched-task-placement/index.html
- Track: Scheduler
- 日時: 2012-08-29 14:50 - 15:35 PDT

### Description

=== Task placement for asymmetric cores ===
Traditional SMP scheduling is basically aiming for equal load distribution across all CPUs. To take full advantage of the big.LITTLE MP power/performance heterogeneity, task affinity is crucial. I have experimented with modifications to the Linux scheduler, which attempt to minimizing power consumption by selecting task affinity appropriately for each task.


Topic Lead: Morten Rasmussen


=== Scheduling and the big.LITTLE Architecture ===
ARM's big.LITTLE architecture is an example of asymmetric multiprocessing where all CPUs are instruction-set compatible, but where different CPUs have very different performance and energy-efficiency characteristics. In the case of big.LITTLE, the big CPUs are Cortex-A15 CPUs with deep pipelines and numerous functional units, providing maximal performance. In contrast, the LITTLE CPUs are Cortex-A7 with short pipelines and few functional units, which optimizes for energy efficiency. Linaro is working on two methods of supporting big.LITTLE systems.


One way to configure big.LITTLE systems is in an MP configuration, where both the big and LITTLE CPUs are present.  Traditionally, most SMP operating systems have assumed that all CPUs are identical, but this is emphatically not the case for big.LITTLE.  Therefore, changes for big.LITTLE are required.  This talk will give an overview of the progress towards the goal of big.LITTLE support in the Linux plumbing.


Topic Lead: Paul E. McKenney


=== cpuquiet: Dynamic CPU core management ===
NVIDIA Tegra30 has CPU clusters with different abilities. There is a fast cluster with 4 cortex A9 cores and a low power cluster with a single cortex A9 core. Only 1 of the clusters can be active at a time. This means the number of available cores for the kernel changes at runtime. Currently we use CPU hotplug to make cores unavailable so we can initiate a switch to the low power cluster. This has a number of problems such as long latencies in switching between the clusters. Therefor a new mechanism where CPUs would not be available but still not completely removed from the system, would be useful. CPUs in this quiet state would not be running any userspace or kernelspace code, until they are explicitly made available again. The kernel datastructures associated with each CPU would be preserved however so a transitions can be a low latency operations. The policy can be encapsulated in a governor, like the cpufreq and cpuidle governors we already have.


Topic Lead: Peter De Schrijver
Peter is an NVIDIA Tegra Linux kernel engineer, Debian developer, previously working on power management in maemo for Nokia.

### 添付資料URL

- [Notes in a separate window](http://etherpad.osuosl.org/lpc-2012-lpc2012-sched-task-placement)（link）
- [Edit notes window](http://etherpad.osuosl.org/ep/pad/view/lpc-2012-lpc2012-sched-task-placement/latest)（link）
- [Scheduling and big.LITTLE Architecture – Paul E. McKenney [slides]](https://blog.linuxplumbersconf.org/2012/wp-content/uploads/2012/09/2012-lpc-scheduler-big-little-mckenney.pdf)（file）
- [Update on big.LITTLE scheduling experiments – Morten Rasmussen [slides]](https://blog.linuxplumbersconf.org/2012/wp-content/uploads/2012/09/2012-lpc-scheduler-task-placement-rasmussen.pdf)（file）
- [CPUquiet – Peter De Schrijver [slides]](https://blog.linuxplumbersconf.org/2012/wp-content/uploads/2012/08/cpuquiet.pdf)（file）

<a id="session-37"></a>
## 21. All Plumbing needs an API

- セッション個別URL: https://blog.linuxplumbersconf.org/lpc-2012/meeting/37/lpc2012-ref-plumbing-api/index.html
- Track: Refereed Presentations
- 日時: 2012-08-29 15:45 - 16:30 PDT

### Description

Andy Grover ([HTML_REMOVED])


The usefulness of our existing plumbing is maximized by making sure it
can be accessed programatically. Shelling out to their cmdline utilities
is not good enough. Much plumbing has APIs, but many (e.g. iptables,
open-iscsi, e2fsprogs, lvm, btrfs?) only have command-line utilities
that limits their use as building blocks.


We should establish that plumbing needs proper interfaces (.so, dbus,
whatever) for other code to call it reliably, and that cmdline
interfaces should really just be for humans.


My hope is this session can discuss the issue, and possibly come to a
greater consensus on the need for APIs in plumbing, and start making
plans for how we can work towards more complete API coverage.


BIO:
Andy Grover is a kernel/plumbing guy who has worked on ACPI, networking,
dmaengine, InfiniBand, and SCSI kernel target subsystems. His most
recent work has also involved user-level code in Python and C. He lives
in Portland, Oregon and works for Red Hat.

### 添付資料URL

- [Notes in a separate window](http://etherpad.osuosl.org/lpc-2012-lpc2012-ref-plumbing-api)（link）
- [Edit notes window](http://etherpad.osuosl.org/ep/pad/view/lpc-2012-lpc2012-ref-plumbing-api/latest)（link）
- [All Plumbing Needs an API – Andy Grover [slides]](https://blog.linuxplumbersconf.org/2012/wp-content/uploads/2012/09/Grover-APIs.odp)（file）

<a id="session-111"></a>
## 22. x86 Virtualization

- セッション個別URL: https://blog.linuxplumbersconf.org/lpc-2012/meeting/111/lpc2012-virt-kvm-int-virt/index.html
- Track: Virtualization
- 日時: 2012-08-29 15:45 - 16:30 PDT

### Description

Virtualization Topics:
2) COLO: COarse-grain LOck-stepping Virtual Machines for Non-stop Service - Eddie Dong
3) Reviewing Unused and Up-coming Hardware Virtualization Features - Jun Nakajima


=== COLO: COarse-grain LOck-stepping Virtual Machines for Non-stop Service ===
Virtual machine (VM) replication (replicating the state of a primary VM running on a primary node to a secondary VM running on a secondary node) is a well known technique for providing application-agnostic, non-stop service. Unfortunately, existing VM replication approaches suffer from excessive replication overhead and, for client-server systems, there is really no need for the secondary VM to match its machine state with the primary VM at all times.


We propose COLO (COarse-grain LOck-stepping virtual machine solution for non-stop service), a generic and highly efficient non-stop service solution, based on on-demand VM replication. COLO monitors the output responses of the primary and secondary VMs. COLO considers the secondary VM a valid replica of the primary VM, as long as network responses generated by the secondary VM match that of the primary. The primary VM state is propagated to the secondary VM, if and only if outputs from the secondary and primary servers no longer match.


Topic Lead: Eddie Dong


=== Reviewing Unused and Up-coming Hardware Virtualization Features ===
We review unused and up-coming hardware virtualization (Intel VT) features to discuss how they can improve virtualization for open source.


First, we review the existing hardware features that are not used by KVM or Xen today, showing examples for use cases.


1) For example, The descriptor-table exiting should be useful for the guest kernels or security agent to enhance security features.
2) The VMX-preemption timer allows the hypervisor to preempt guest VM execution after a specified amount of time, which is useful to implement fair scheduling. The hardware can save the timer value on each successive VM exit, after setting the initial VM quantum.
3) VMFUNC is an operation provided by the processor that can be invoked from VMX non-root operation without a VM exit. Today, EPTP switching is available, and we discuss how we can use the feature.


Second, we talk about the new hardware features, especially for interrupt optimizations.


Topic Lead: Jun Nakajima
Jun Nakajima is a Principal Engineer leading open source virtualization projects, such as Xen and KVM at the Intel Open Source Technology Center. He presented a number of times at technical conferences, including Xen Summit, OLS, KVM Forum, and USENIX.

### 添付資料URL

- [Notes in a separate window](http://etherpad.osuosl.org/lpc-2012-lpc2012-virt-kvm-int-virt)（link）
- [Edit notes window](http://etherpad.osuosl.org/ep/pad/view/lpc-2012-lpc2012-virt-kvm-int-virt/latest)（link）
- [Reviewing Interrupt/APIC Virtualization Features – Jun Nakajima [slides]](https://blog.linuxplumbersconf.org/2012/wp-content/uploads/2012/09/2012-lpc-virt-intel-vt-feat-nakajima.pdf)（file）
- [COarse-grain LOck-stepping Virtual Machine – Eddie Dong, Will Auld [slides]](https://blog.linuxplumbersconf.org/2012/wp-content/uploads/2012/09/2012-lpc-virt-COLO-xen-dong.pdf)（file）

<a id="session-8"></a>
## 23. Kernel Panel @ LinuxCon

- セッション個別URL: https://blog.linuxplumbersconf.org/lpc-2012/meeting/8/lpc2012-kernel-panel/index.html
- Track: 
- 日時: 2012-08-29 16:40 - 17:30 PDT [PLENARY]

### Description

掲載なし

### 添付資料URL

- [Notes in a separate window](http://etherpad.osuosl.org/lpc-2012-lpc2012-kernel-panel)（link）
- [Edit notes window](http://etherpad.osuosl.org/ep/pad/view/lpc-2012-lpc2012-kernel-panel/latest)（link）

<a id="session-13"></a>
## 24. Tracing Summit - Early Morning

- セッション個別URL: https://blog.linuxplumbersconf.org/lpc-2012/meeting/13/lpc2012-tracing-summit-morning/index.html
- Track: Tracing
- 日時: 2012-08-30 08:30 - 09:25 PDT

### Description

THIS MEETING STARTS AT 8:30
This is the first session of the tracing summit


Agenda:
1) Can mainstream tracing meet embedded needs?, Frank Rowand, Sony
2) What We Want in Our Toolkit: Thoughts From a Mission Critical Low Latency Environment, Vinod Kutty, CME Group
3) Troubleshooting complex problems with built-in diagnostic, Dominique Toupin, Ericsson
4) The Linux Perf Tools: Overview and Current Developments, Arnaldo Carvahlo de Melo, Red Hat

### 添付資料URL

- [Notes in a separate window](http://etherpad.osuosl.org/lpc-2012-lpc2012-tracing-summit-morning)（link）
- [Edit notes window](http://etherpad.osuosl.org/ep/pad/view/lpc-2012-lpc2012-tracing-summit-morning/latest)（link）
- [Tracing mini-summit [Slides/Abstracts]](http://www.tracingsummit.org/wiki/TracingSummit2012)（link）
- [ [etherpad 2]](http://etherpad.osuosl.org/ep/pad/view/lpc-2012-lpc2012-tracing-summit-afternoon/latest)（link）
- [ [etherpad 3]](http://etherpad.osuosl.org/ep/pad/view/lpc-2012-lpc2012-tracing-summit-late-afternoon/latest)（link）

<a id="session-42"></a>
## 25. USB port power off Kernel/Userspace API

- セッション個別URL: https://blog.linuxplumbersconf.org/lpc-2012/meeting/42/lpc2012-ref-usb-port-poweroff/index.html
- Track: Refereed Presentations
- 日時: 2012-08-30 09:30 - 10:15 PDT

### Description

The Intel Lynx Point chipset includes a new power savings mechanism that allows software to turn off the USB port power (VBUS) via an ACPI call.  This mechanism is designed to save power on unused internal USB ports, but it could be used to save power on external ports or even simulate a physical disconnect for misbehaving USB devices.  This presentation will provide background on the mechanism, before opening the floor to discussion on what sort of API the kernel should provide userspace to power down ports, and how userspace could use this API to save power, while not confusing the user with "dead" USB ports.  Target audience: kernel developers working with USB device drivers, userspace developers for applications that touch USB devices (e.g.  libusb, ModemManager, ConnMan), and desktop developers for Gnome, KDE, XFCE, etc.


Sarah Sharp ([HTML_REMOVED]) is the xHCI driver maintainer.  She has been adding USB 3.0 support to the Linux kernel for the past five years.  Sarah works in Intel's Open Source Technology Center, along with Tianyu Lan.  Tianyu ([HTML_REMOVED]) is a Linux kernel ACPI developer, and is the author of the patchset for the port power off mechanism.

### 添付資料URL

- [Notes in a separate window](http://etherpad.osuosl.org/lpc-2012-lpc2012-ref-usb-port-poweroff)（link）
- [Edit notes window](http://etherpad.osuosl.org/ep/pad/view/lpc-2012-lpc2012-ref-usb-port-poweroff/latest)（link）

<a id="session-124"></a>
## 26. Simplify volume setting at startup/shutdown

- セッション個別URL: https://blog.linuxplumbersconf.org/lpc-2012/meeting/124/lpc2012-audio-simplify-volumes/index.html
- Track: Audio
- 日時: 2012-08-30 09:30 - 10:15 PDT

### Description

Currently, on a normal desktop session, volume is set four times on startup - initally by the kernel, then by alsactl, then by PulseAudio in the DM session, then by PulseAudio in the logged in session.


When shutting down, both PulseAudio and alsactl saves volumes to restore them later. And then we also have suspend and hibernate to consider, and that cards can be plugged in at any time.


First, isn't this quite complex for something as simple as setting volumes? Second, can we facilitate new features, such as 1) having a "set this volume as default, for all users, on startup" button in the volume control, or 2) "allow the DM user to introspect different users' volumes"?


Topic Lead: David Henningsson ([HTML_REMOVED])
Working for Canonical with audio hardware enablement, fixing audio bugs and maintaining the audio stack, and also part of PulseAudio's current development team.

### 添付資料URL

- [Notes in a separate window](http://etherpad.osuosl.org/lpc-2012-lpc2012-audio-simplify-volumes)（link）
- [Edit notes window](http://etherpad.osuosl.org/ep/pad/view/lpc-2012-lpc2012-audio-simplify-volumes/latest)（link）

<a id="session-103"></a>
## 27. System Storage Manager; A single tool to manage your storage

- セッション個別URL: https://blog.linuxplumbersconf.org/lpc-2012/meeting/103/lpc2012-lsf-system-storage-manager/index.html
- Track: File and Storage Systems
- 日時: 2012-08-30 09:30 - 10:15 PDT

### Description

In more sophisticated enterprise storage environments, management with Device Mapper (dm), Logical Volume Manager (LVM), or Multiple Devices (md) is becoming increasingly more difficult. With file systems added to the mix, the number of tools needed to configure and manage storage has grown so large that it is simply not user friendly. With so many options for a system administrator to consider, the opportunity for errors and problems is large.


The btrfs administration tools have shown us that storage management can be simplified, and we are working to bring that ease of use to Linux storage in general.


I would like to introduce the new easy to use command line interface to manage your storage using various technologies like lvm, btrfs, crypt and more. System Storage Manager is currently under development with lots of features already available and more to come. I will discuss those features and problems we are facing when getting the project ready. I will also describe the scope of this project as well as where we see it in the future and of course gather useful feedback from the audience.


Topic Lead: Lukas Czerner ([HTML_REMOVED])
Lukas is one of the core ext4 developers employed by Red Hat, Inc located in Czech Republic. He has been involved in performance evaluation of Linux discard support and was examining of alternative approaches which led to establishing the interface for filesystem batched discard support aka FITRIM as well as implementation for Ext4/3 filesystems. He is actively working on improvements of ext4 file system, its user space utilities. He is currently is working on simplification of constructing and administrating heterogeneous storage using various technologies like dm, md file systems and brtfs which resulted in System Storage Manager tool.

### 添付資料URL

- [Notes in a separate window](http://etherpad.osuosl.org/lpc-2012-lpc2012-lsf-system-storage-manager)（link）
- [Edit notes window](http://etherpad.osuosl.org/ep/pad/view/lpc-2012-lpc2012-lsf-system-storage-manager/latest)（link）

<a id="session-115"></a>
## 28. UEFI Basics Tutorial

- セッション個別URL: https://blog.linuxplumbersconf.org/lpc-2012/meeting/115/lpc2012-tutorial-uefi-basics/index.html
- Track: Core OS
- 日時: 2012-08-30 09:30 - 10:15 PDT

### Description

Covers:
- UEFI basics on what appears in UEFI 2.3.1 spec'd systems with UEFI operating systems
- requirements of both the OS and firmware for UEFI 2.3.1 secure boot
- PXE network boot services(IPv6 andIPV4).


Abstract will be available soon


Instructor: Harry Hsiung (Intel)

### 添付資料URL

- [Notes in a separate window](http://etherpad.osuosl.org/lpc-2012-lpc2012-tutorial-uefi-basics)（link）
- [Edit notes window](http://etherpad.osuosl.org/ep/pad/view/lpc-2012-lpc2012-tutorial-uefi-basics/latest)（link）
- [UEFI Tutorial – Harry Hsiung [slides]](https://blog.linuxplumbersconf.org/2012/wp-content/uploads/2012/09/2012-lpc-coreos-UEFI-tutorial.pdf)（file）

<a id="session-43"></a>
## 29. Policies for transcending Linux memory efficiency with zcache

- セッション個別URL: https://blog.linuxplumbersconf.org/lpc-2012/meeting/43/lpc2012-ref-zcache-policies/index.html
- Track: Refereed Presentations
- 日時: 2012-08-30 10:25 - 11:10 PDT

### Description

Zcache is the first Linux memory management capability that uses compression to dramatically increase RAM efficiency for
both the page cache and for swap pages.  The mechanism has been in staging since 2.6.39, but has been complemented only by a very primitive policy.  The key to promoting zcache to a full kernel citizen and, indeed, for turning zache into an enterprise-ready default feature is a bulletproof "first do no harm" policy that must improve performance on many workloads while avoiding performance degradation on others.  We will present how zcache works, discuss core kernel memory management policies and how they might be extended to "harden" zcache, and solicit discussion on further improvements for zcache, as well as its Transcendent Memory brethren: RAMster, which builds on zcache and kernel sockets to load-balance RAM across a cluster, and Xen tmem and KVM tmem, which provide similar capability in a virtualized environment.


Linux plumbing connections: Page cache pages in zcache are mapped pages obtained via hooks in the VFS/filesystems (c.f.
cleancache); swap pages are obtained via hooks in the swap subsystem (c.f. frontswap).  Increasing RAM efficiency ultimately
reduces the total RAM needed in a system, thus reducing capital and power costs across the data center.

### 添付資料URL

- [Notes in a separate window](http://etherpad.osuosl.org/lpc-2012-lpc2012-ref-zcache-policies)（link）
- [Edit notes window](http://etherpad.osuosl.org/ep/pad/view/lpc-2012-lpc2012-ref-zcache-policies/latest)（link）

<a id="session-49"></a>
## 30. Multipath TCP && TCP Loss Probe && Client Congestion Manager

- セッション個別URL: https://blog.linuxplumbersconf.org/lpc-2012/meeting/49/lpc2012-net-multipath-tcp/index.html
- Track: Networking
- 日時: 2012-08-30 10:25 - 11:10 PDT

### Description

Networking Topics:
1. Linux Kernel Implementation of Multipath TCP
2. TCP Loss Probe (TLP): fast recovery for tail losses
3. Client-based Congestion Manager for TCP


=== Linux Kernel Implementation of Multipath TCP ===
MultiPath TCP (short MPTCP) is an extension to TCP that allows a single TCP-connection to be split among multiple interfaces, while presenting a standard TCP-socket API to the applications. Splitting a data-stream among different interfaces has multiple benefits. Data-center hosts may increase their bandwidth; smartphones with WiFi/3G may seamlessly handover traffic from 3G to WiFi,... MultiPath TCP works with unmodified applications over today's Internet with all its middleboxes and firewalls.


A recent Google Techtalk about MultiPath TCP is available at [1]


In this talk I will first present the basics of MultiPath TCP and how it works and show some of the performance results we obtained with our Linux Kernel implementation (freely available at [2]). Second, I will go into the details of our implementation in the Linux Kernel, and our plans to try submitting the MPTCP-patches to the upstream Linux Kernel.


[1] http://www.youtube.com/watch?v=02nBaaIoFWU
[2] http://mptcp.info.ucl.ac.be


Topic Lead: Christoph Paasch [HTML_REMOVED]


=== TCP Loss Probe (TLP): fast recovery for tail losses ===
Fast recovery (FR) and retransmission timeouts (RTOs) are two mechanisms in TCP for detecting and recovering from packet losses. Fast recovery detects and repairs losses quicker than RTOs, however, it is only triggered when connections have a sufficiently large number of packets in transit. Short flows, such as the vast majority of Web transfers, are more likely to detect losses via RTOs which are expensive in terms of latency. While a single packet loss in a 1000 packet flow can be repaired within a round-trip time (RTT) by FR, the same loss in a one packet flow takes many RTTs to even detect. The problem is not just limited to short flows, but more generally losses near the end of transfers, aka tail losses, can only be recovered via RTOs.


In this talk, I will describe TCP Loss Probe (TLP) - a mechanism that allows flows to detect and recover from tail losses much faster than an RTO, thereby speeding up short transfers. TLP also unifies the loss recovery regardless of the "position" of a loss, e.g., a packet loss in the middle of a packet train as well as at the tail end will now trigger the same fast recovery mechanisms. I will also describe experimental results with TLP and its impact on Web transfer latency on live traffic.


Topic Lead: Nandita Dukkipati [HTML_REMOVED]
Nandita is a software engineer at Google working on making Networking faster for Web traffic and Datacenter applications. She is an active participant at the IETF and in networking research. Prior to Google she obtained a PhD in Electrical Engineering, Stanford University.


=== Client-based Congestion Manager for TCP ===
Today, one of the most effective ways to improve the performance of chatty applications is to keep TCP connection open as long as possible to save the overhead of SYN exchange and slow start on later requests. However, due to Web domain sharing, NAT boxes often run out of ports or other resources and resort to dropping connections in ways that make later connections even slower to start.


A better solution would be to enable TCP to start a new connection as quickly as restarting an idle connection. The approach is to have a congestion manager (CM) on the client that constantly learns about the network and adds some signaling information to requests from the client, indicating how the server can reply most quickly, for example by providing TCP metrics similar to today's destination cache. Such a CM could even indicate to the server what type of congestion control to use, such as the relentless congestion control algorithm such that opening more connections does not gain advantage on aggregate throughput. It also allows receiver-based congestion control which opens new possibilities to control congestion. The Linux TCP metrics have similar concept but there is a lot of room for improvement.


Topic Lead: Yuchung Cheng [HTML_REMOVED]
Yuchung Cheng is a software engineer at Google working on the Make-The-Web-Faster project. He works on the TCP protocol and the Linux TCP stack focusing on latency. He has contributed Fast Open, Proportional Rate Reduction, Early Retransmit implementation in Linux kernel and wrote a few papers and IETF drafts of them. He has also contributed to rate-limiting Youtube streaming and the cwnd-persist feature of the SPDY protocol.

### 添付資料URL

- [Notes in a separate window](http://etherpad.osuosl.org/lpc-2012-lpc2012-net-multipath-tcp)（link）
- [Edit notes window](http://etherpad.osuosl.org/ep/pad/view/lpc-2012-lpc2012-net-multipath-tcp/latest)（link）
- [Linux Kernel Implementation of Multipath TCP – Christoph Paasch [slides](https://blog.linuxplumbersconf.org/2012/wp-content/uploads/2012/08/christoph-paasch-networking.pdf)（file）
- [TCP Loss Probe (TLP): fast recovery for tail losses – Nandita Dukkipati [slides]](https://blog.linuxplumbersconf.org/2012/wp-content/uploads/2012/08/tcp_loss_recovery_nandita.pdf)（file）

<a id="session-133"></a>
## 31. Tracing Summit - Late Morning

- セッション個別URL: https://blog.linuxplumbersconf.org/lpc-2012/meeting/133/lpc2012-tracing-summit-morning/index.html
- Track: Tracing
- 日時: 2012-08-30 10:25 - 11:10 PDT

### Description

This is the second session of the tracing summit


Agenda:
1) Tracing the Guest OS from Host via Shared Memory, Masami Hiramatsu, Hitachi
2) Shrinking core dump on the fly, Thomas Gleixner, Linutronix
3) Tracing Well With Others: Integration of GDB Tracepoints Into Trace Tools, Stan Shebs, Mentor Graphics
4) Ftrace and Multiple buffers, Steven Rostedt, Red Hat

### 添付資料URL

- [Notes in a separate window](http://etherpad.osuosl.org/lpc-2012-lpc2012-tracing-summit-morning)（link）
- [Edit notes window](http://etherpad.osuosl.org/ep/pad/view/lpc-2012-lpc2012-tracing-summit-morning/latest)（link）
- [Tracing mini-summit [Slides/Abstracts]](http://www.tracingsummit.org/wiki/TracingSummit2012)（link）
- [ [etherpad 2]](http://etherpad.osuosl.org/ep/pad/view/lpc-2012-lpc2012-tracing-summit-afternoon/latest)（link）
- [ [etherpad 3]](http://etherpad.osuosl.org/ep/pad/view/lpc-2012-lpc2012-tracing-summit-late-afternoon/latest)（link）

<a id="session-104"></a>
## 32. External Storage Array Management API

- セッション個別URL: https://blog.linuxplumbersconf.org/lpc-2012/meeting/104/lpc2012-lsf-ext-storage-array-management/index.html
- Track: File and Storage Systems
- 日時: 2012-08-30 10:25 - 11:10 PDT

### Description

The ability to manage external storage arrays and exploit the advanced features they provide in a programmatic way is an important capability for Linux.  However, achieving storage array API nirvana isn't an easy thing to do with numerous obstacles in its path (e.g. licensing, terminology, features).


In this session I would like to give a brief introduction to the libStorageMgmt project I am working on, discuss the difficulties it has encountered, and have an open discussion on how it can best work with other storage management components.


Topic Lead: Tony Asleson
Tony has a long and varied history of working in the storage industry and Linux. When he isn't sitting in front of his computer screen or spending time with his familiy, he can be found rock climbing and touring the back roads of MN on two wheels. He is currently a member of the Red Hat kernel storage team and lives in Rochester, MN.

### 添付資料URL

- [Notes in a separate window](http://etherpad.osuosl.org/lpc-2012-lpc2012-lsf-ext-storage-array-management)（link）
- [Edit notes window](http://etherpad.osuosl.org/ep/pad/view/lpc-2012-lpc2012-lsf-ext-storage-array-management/latest)（link）
- [External Storage Array Management API – Tony Asleson [slides]](https://blog.linuxplumbersconf.org/2012/wp-content/uploads/2012/09/2012-lpc-fs-storage-array-management-asleson.odp)（file）

<a id="session-34"></a>
## 33. Letting go (A sensitive guide dealing with application caches under the pressures of low memory)

- セッション個別URL: https://blog.linuxplumbersconf.org/lpc-2012/meeting/34/lpc2012-ref-letting-go/index.html
- Track: Refereed Presentations
- 日時: 2012-08-30 11:20 - 12:05 PDT

### Description

Abstract:
This talk will cover some of the recent work to allow applications to release memory to the kernel when the system is experiencing low memory conditions. The talk will focus on two basic approaches:  applications pre-marking cache memory as freeable when not in use, allowing the kernel to reclaim it as needed, and APIs for kernel notification of lowmemory conditions that allow applications to then free up memory on their own.


We'll talk about the upstream status of these different approaches, the pros and cons of the different methods, and talk about types of applications that could make use of these methods and how it affects both enterprise and embedded environments.


Bio:
John Stultz has worked with the IBM LTC for just over ten years. He has worked on x86 server enablement, Enterprise Realtime Linux, and now as a member of the Linaro.org effort. In the Linux community, he has worked mostly as a maintainer of the timekeeping subsystem, but has also worked on stability and scalability issues with the PREEMPT_RT patch, and most recently has been focused on upstreaming Android functionality into the mainline kernel.

### 添付資料URL

- [Notes in a separate window](http://etherpad.osuosl.org/lpc-2012-lpc2012-ref-letting-go)（link）
- [Edit notes window](http://etherpad.osuosl.org/ep/pad/view/lpc-2012-lpc2012-ref-letting-go/latest)（link）
- [Letting Go – application caches under low memory – John Stultz [slides]](https://blog.linuxplumbersconf.org/2012/wp-content/uploads/2012/08/LettingGo.pdf)（file）

<a id="session-107"></a>
## 34. Anaconda, Snapper and Booting

- セッション個別URL: https://blog.linuxplumbersconf.org/lpc-2012/meeting/107/lpc2012-anaconda-snapper-and-booting/index.html
- Track: File and Storage Systems
- 日時: 2012-08-30 11:20 - 12:05 PDT

### Description

Topic Lead: Peter Jones
Topic Lead: Matthias G. Eckermann
Topic Lead: David Cantrell

### 添付資料URL

- [Notes in a separate window](http://etherpad.osuosl.org/lpc-2012-lpc2012-anaconda-snapper-and-booting)（link）
- [Edit notes window](http://etherpad.osuosl.org/ep/pad/view/lpc-2012-lpc2012-anaconda-snapper-and-booting/latest)（link）

<a id="session-27"></a>
## 35. ACPI 5.0 in Linux

- セッション個別URL: https://blog.linuxplumbersconf.org/lpc-2012/meeting/27/lpc2012-ref-acpi-5/index.html
- Track: Refereed Presentations
- 日時: 2012-08-30 13:30 - 14:15 PDT

### Description

Len Brown   [HTML_REMOVED]


ACPI (Advanced Configuration and Power Interface)
abstracts platform hardware and firmware,
helping to make operating systems portable.
For over 15 years, this abstraction layer
has allowed operating systems and hardware platforms
to evolve independently.


The 5th major revision of the ACPI spec was published December, 2011.
This presentation will summarize the changes included in 5.0,
and the state of Linux support for those changes.


Bio:


Len is a Principal Engineer at Intel’s Open Source Technology Center.
He focuses on power management, and has maintained the Linux Kernel ACPI
sub-system since 2003.

### 添付資料URL

- [Notes in a separate window](http://etherpad.osuosl.org/lpc-2012-lpc2012-ref-acpi-5)（link）
- [Edit notes window](http://etherpad.osuosl.org/ep/pad/view/lpc-2012-lpc2012-ref-acpi-5/latest)（link）
- [ACPI5 on Linux – Len Brown [slides]](https://blog.linuxplumbersconf.org/2012/wp-content/uploads/2012/09/LPC2012-ACPI5.pdf)（file）

<a id="session-65"></a>
## 36. The Core OS Wish List

- セッション個別URL: https://blog.linuxplumbersconf.org/lpc-2012/meeting/65/lpc2012-boot-wish-list/index.html
- Track: Core OS
- 日時: 2012-08-30 13:30 - 14:15 PDT

### Description

In the context of systemd we started collecting nice-to-have or
that-should-just-work items, which we would wish the Linux kernel
would provide us with. The emails to LKML have been called "A
Plumber's Wish List for Linux". We give a quick update what problems
have been solved, and what we still wish would work.


Topic Lead: Lennart Poettering
Topic Lead: Kay Sievers
Lennart Poettering and Kay Sievers are the maintainers of systemd and
udev and spend almost their entire work time on building
infrastructure for the Linux Core OS.

### 添付資料URL

- [Notes in a separate window](http://etherpad.osuosl.org/lpc-2012-lpc2012-boot-wish-list)（link）
- [Edit notes window](http://etherpad.osuosl.org/ep/pad/view/lpc-2012-lpc2012-boot-wish-list/latest)（link）

<a id="session-14"></a>
## 37. Tracing Summit - Afternoon

- セッション個別URL: https://blog.linuxplumbersconf.org/lpc-2012/meeting/14/lpc2012-tracing-summit-afternoon/index.html
- Track: Tracing
- 日時: 2012-08-30 13:30 - 14:15 PDT

### Description

Third session of the tracing summit


Agenda:
1) The Road ahead of Uprobes: Plans and features in pipeline, Srikar Dronamraju, IBM
2) Systemtap and new connections: dyninst, pcp, uprobes, David Smith and Josh Stone, Redhat
3) LTTng and Nexus Trace for Freescale QorIQ Devices, Ed Martinez, Freescale
4) Interoperability Between Tracing Tools with the Common Trace Format (CTF), Mathieu Desnoyers, EfficiOS

### 添付資料URL

- [Notes in a separate window](http://etherpad.osuosl.org/lpc-2012-lpc2012-tracing-summit-afternoon)（link）
- [Edit notes window](http://etherpad.osuosl.org/ep/pad/view/lpc-2012-lpc2012-tracing-summit-afternoon/latest)（link）
- [Tracing mini-summit [Slides/Abstracts]](http://www.tracingsummit.org/wiki/TracingSummit2012)（link）
- [ [etherpad 1]](http://etherpad.osuosl.org/ep/pad/view/lpc-2012-lpc2012-tracing-summit-morning/latest)（link）
- [ [etherpad 3]](http://etherpad.osuosl.org/ep/pad/view/lpc-2012-lpc2012-tracing-summit-late-afternoon/latest)（link）

<a id="session-108"></a>
## 38. Configuration and Management Open Discussion

- セッション個別URL: https://blog.linuxplumbersconf.org/lpc-2012/meeting/108/lpc2012-lsf-configuration-and-management-open-discussion/index.html
- Track: File and Storage Systems
- 日時: 2012-08-30 13:30 - 14:15 PDT

### Description

掲載なし

### 添付資料URL

- [Notes in a separate window](http://etherpad.osuosl.org/lpc-2012-lpc2012-lsf-configuration-and-management-open-discussion)（link）
- [Edit notes window](http://etherpad.osuosl.org/ep/pad/view/lpc-2012-lpc2012-lsf-configuration-and-management-open-discussion/latest)（link）

<a id="session-151"></a>
## 39. LLVM and Clang: Advancing Compiler Technology

- セッション個別URL: https://blog.linuxplumbersconf.org/lpc-2012/meeting/151/lpc2012-llvm-compiler-technology/index.html
- Track: LLVM
- 日時: 2012-08-30 13:30 - 14:15 PDT

### Description

This talk introduces LLVM, giving a brief sense for its library based
design. It then dives into Clang to describe the end-user benefits of
LLVM compiler technology and the status of Clang Static Analyzer,
LLDB, libc++ and the LLVM MC projects.


Topic Leader: Chris Lattner
Chris Lattner is best known as the primary author of the LLVM
project and related projects, such as the clang compiler. He currently
works at Apple Inc. as the Director of Low Level Tools and chief
architect of the Compiler Group.

### 添付資料URL

- [Notes in a separate window](http://etherpad.osuosl.org/lpc-2012-lpc2012-llvm-compiler-technology)（link）
- [Edit notes window](http://etherpad.osuosl.org/ep/pad/view/lpc-2012-lpc2012-llvm-compiler-technology/latest)（link）

<a id="session-28"></a>
## 40. Moving Android and regular Linux closer together

- セッション個別URL: https://blog.linuxplumbersconf.org/lpc-2012/meeting/28/lpc2012-ref-android-linux/index.html
- Track: Refereed Presentations
- 日時: 2012-08-30 14:25 - 15:10 PDT

### Description

Abstract: Many people consider Linux and Android different operating
systems - even though they're more alike than not. The communities are
so split up that many Linux developers don't know anything about
Android (other than the fact that it uses the Linux kernel) and many
Android developers don't know anything about Linux (probably not even
that Android is based on it).
This is definitely a bad thing - because both sides have some good
tools and features the other side could benefit from, if they just
knew about them.
Goal of the session is to bring the projects closer together, and try
to start merging components where both sides can benefit.


Should attend: People from "both sides" who aren't scared of learning
about and working with the other side.


Bio: Bernhard "Bero" Rosenkränzer is a developer of both "normal"
Linux and Android, currently involved in the making of Linaro Android,
Ark Linux and ROSA Linux.

### 添付資料URL

- [Notes in a separate window](http://etherpad.osuosl.org/lpc-2012-lpc2012-ref-android-linux)（link）
- [Edit notes window](http://etherpad.osuosl.org/ep/pad/view/lpc-2012-lpc2012-ref-android-linux/latest)（link）

<a id="session-112"></a>
## 41. Virtualization Memory Management

- セッション個別URL: https://blog.linuxplumbersconf.org/lpc-2012/meeting/112/lpc2012-virt-numa-on-xen/index.html
- Track: Virtualization
- 日時: 2012-08-30 14:25 - 15:10 PDT

### Description

Virtualization Topics:
1) NUMA and Virtualization, the case of Xen
2) Automatic NUMA CPU scheduling and memory migration
3) One balloon for all - towards unified baloon driver


=== NUMA and Virtualization, the case of Xen ===
Having to deal with NUMA machines is becoming more and more common, and  will likely continue to do so. Running typical virtualization workloads on such systems is particularly challenging, as Virtual Machines (VMs) are typically long lived processes with large memory footprints. This means one might incur really bad performance if the specific characteristics of the platform are not properly accounted for. Basically, it would be ideal to always run a VM on the CPUs of the node that host its memory, or at least as close as possible to that. Unfortunately, that is all but easy, and involves reconsidering the current approaches to scheduling and memory allocation.


Extensive benchmarks have been performed, running memory intensive workloads inside Linux VMs hosted on NUMA hardware of different kinds and size. This has then driven the design and development of a suite of new VM placement, scheduling and memory allocation policies for the Xen hypervisor and its toolstack. The implementation of such changes has been benchmarked against the baseline performance and proved to be effective in yielding improvements, which will be illustrated during the talk. Although some of the work is hypervisor specific, it covers are issues that can be considered of interest for the whole Linux virtualization community. Whether and how to export NUMA topology related information to guests, just to give an example. We believe that the solutions we are working on, the ideas behing them and the performance evaluation we conducted are something the community would enjoy hearing and talking about.


Topic Lead: Dario Faggioli
Dario has interacted with the Linux kernel community in the domain of scheduling during his PhD on real-time systems. He now works for Citrix on the Xen Open Source project. He spent the last months on investigating and trying to improve the performance of virtualization workloads on NUMA systems.


=== Automatic NUMA CPU scheduling and memory migration ===
Topic Lead: Andrea Arcangeli


=== One balloon for all - towards unified baloon driver ===
During Google Summer of Code 2010 (Migration from memory ballooning to memory hotplug in Xen) it was discovered that in main line Linux Kernel exists 3 balloon driver implementations for 3 virtualization platforms (KVM, Xen, VMware). It quickly came out that they are almost identical but of course they have different controls and API/ABI. In view of e.g. memory hotplug driver which has generic base (not linked with specific hardware/software solution) this situation is not acceptable. The goal of this project is generic balloon driver which could be placed in MM subsystem and which could be linked with as little as possible platform specific code (placed e.g. in relevant arch directory). This solution could give unified ABI (which could ease administration) and unified API for developer (i.e. easier integration with e.g. tmem, memory hotplug, etc.). Additionally, balloon driver behavior would be almost identical on all platforms.


Discussion should outline the goals and key solutions for such driver.


Topic Lead: Daniel Kiper
Daniel was a Google Summer of Code 2010 (memory hotplug/balloon driver) and Google Summer of Code 2011 (kexec/kdump) student. He is involved in *NIX administration/development since 1994. Currently his work and interests focuses on kexec/kdump implementation for Xen.

### 添付資料URL

- [Notes in a separate window](http://etherpad.osuosl.org/lpc-2012-lpc2012-virt-numa-on-xen)（link）
- [Edit notes window](http://etherpad.osuosl.org/ep/pad/view/lpc-2012-lpc2012-virt-numa-on-xen/latest)（link）
- [One Balloon for All – Daniel Kiper [slides]](https://blog.linuxplumbersconf.org/2012/wp-content/uploads/2012/09/2012-lpc-virt-unified-baloon-driver-kiper.pdf)（file）
- [AutoNUMA – Andrea Arcangeli [slides]](https://blog.linuxplumbersconf.org/2012/wp-content/uploads/2012/09/2012-lpc-virt-autonuma-arcangeli.pdf)（file）
- [NUMA and Virtualization, the case of Xen – Dario Faggioli [slides]](https://blog.linuxplumbersconf.org/2012/wp-content/uploads/2012/09/2012-lpc-virt-NUMA-xen-faggioli.pdf)（file）

<a id="session-109"></a>
## 42. Local File Systems

- セッション個別URL: https://blog.linuxplumbersconf.org/lpc-2012/meeting/109/lpc2012-local-file-systems/index.html
- Track: File and Storage Systems
- 日時: 2012-08-30 14:25 - 15:10 PDT

### Description

Topic Lead: Chris Mason
Topic Lead: Ric Wheeler

### 添付資料URL

- [Notes in a separate window](http://etherpad.osuosl.org/lpc-2012-lpc2012-local-file-systems)（link）
- [Edit notes window](http://etherpad.osuosl.org/ep/pad/view/lpc-2012-lpc2012-local-file-systems/latest)（link）

<a id="session-134"></a>
## 43. LLVM Toolchain - Update and State of Building Linux with LLVM

- セッション個別URL: https://blog.linuxplumbersconf.org/lpc-2012/meeting/134/lpc2012-llvm-linux-build-status/index.html
- Track: LLVM
- 日時: 2012-08-30 14:25 - 15:10 PDT

### Description

LLVM is a new toolchain that is becoming increasingly common in Linux environments and is already included in millions of Linux devices. Today, this is primarily as the JIT compiler for Renderscript in Android Ice-cream Sandwich, but its use is rapidly expanding into other areas of a Linux systems.  This session will provide an update on the status of LLVM, some of the new uses that LLVM will be put to, and the state of building Linux with LLVM.


Topic Lead: Mark Charlebois
Mark Charlebois is Director of Open Source Software Strategy at QuIC. In his 13 years at Qualcomm he has lead diverse technical investigations working for various R&D divisions, and has worked on Unix-based systems since 1988 and embedded systems since 1990.  Currently, Mark is a Linux evangelist, responsible for helping shape QuIC's Open Source SW strategy, and has been working on building Linux with LLVM.  Mark has a bachelor's degree in Systems Design Engineering from the University of Waterloo in Canada and a masters degree in Engineering Science from Simon Fraser University in Canada.


Topic Lead: Behan Webster
Since graduating with a Bachelors degree in Computer Engineering from the University of Waterloo, Behan has spent the past two decades in diverse tech industries such as telecom, datacom, optical, and automotive. Throughout his career his work has most often involved kernel level programming, drivers, embedded software, board bring-ups, and build systems built on or for Linux (since 1996), and with UNIX before that. Currently Behan is the founder of Converse in Code and an embedded Linux engineer working on the LLVMLinux project as well as being a Trainer for the Linux Foundation. Behan is under the delusion he can fix most things with a “tiny little script”.

### 添付資料URL

- [Notes in a separate window](http://etherpad.osuosl.org/lpc-2012-lpc2012-llvm-linux-build-status)（link）
- [Edit notes window](http://etherpad.osuosl.org/ep/pad/view/lpc-2012-lpc2012-llvm-linux-build-status/latest)（link）
- [LLVMLinux – Mark Charlebois, Behan Webster [slides]](https://blog.linuxplumbersconf.org/2012/wp-content/uploads/2012/09/2012-LPC-LLVMLinux-bw2.odp)（file）
- [LLVMLinux – Mark Charlebois, Behan Webster [etherpad]](http://etherpad.osuosl.org/ep/pad/view/lpc-2012-mini-summit-report-out/latest)（link）

<a id="session-30"></a>
## 44. Big and Little Endian inside/out

- セッション個別URL: https://blog.linuxplumbersconf.org/lpc-2012/meeting/30/lpc2012-ref-big-little-endian/index.html
- Track: Refereed Presentations
- 日時: 2012-08-30 15:20 - 16:05 PDT

### Description

Endian bugs are a common source of problems, mostly on big endian
architectures such as PowerPC, sparc or s390. Getting endian'ness right
isn't always trivial and some programming tricks will work on one
endianness and not another.


I will first show endian issues related to programs trying to
access in memory data using the wrong size types. Then I will talk about
the the problem of data "on the wire" (networking, storage, file
formats) along with tools such as sparse that can help getting it right,
and will then dive into IO busses and peripheral such as PCI and
graphics.


I will attempt to shed some light on the latter by describing what
happens under the hood, the representation of data on typical processor
bus and how it interconnects to a typical IO bus, where does swapping
happens and when it needs to be handled in software.


BIO:
Ben has been part of the powerpc Linux kernel team for many years and is
currently the maintainer of arch/powerpc. He works for IBM ADL/Ozlabs.

### 添付資料URL

- [Notes in a separate window](http://etherpad.osuosl.org/lpc-2012-lpc2012-ref-big-little-endian)（link）
- [Edit notes window](http://etherpad.osuosl.org/ep/pad/view/lpc-2012-lpc2012-ref-big-little-endian/latest)（link）
- [Big and Little Endian Inside Out – Benjamin Herrenschmidt [slides]](https://blog.linuxplumbersconf.org/2012/wp-content/uploads/2012/09/2012-lpc-ref-big-little-endian-herrenschmidt.odp)（file）

<a id="session-60"></a>
## 45. Atomic upgrades, booting, and package systems

- セッション個別URL: https://blog.linuxplumbersconf.org/lpc-2012/meeting/60/lpc2012-boot-atomic-upgrades/index.html
- Track: Core OS
- 日時: 2012-08-30 15:20 - 16:05 PDT

### Description

Current major consumer operating systems like Microsoft Windows and the Playstation 3 explicitly warn the user "don't turn off your computer" for upgrades.  But the state of the art in many Linux-based "distributions" is to simply ignore this; if you happen to lose power or the kernel crashes, your system is quite likely toast, and you need a recovery CD.  This isn't acceptable.


This presentation will discuss my research into the area, working prototype code, and further work necessary in the core plumbing (particularly bootup and configuration management) to get fully atomic upgrades.


Topic Lead: Colin Walters
Colin has contributed to many different Free and Open Source software projects, including GNU Emacs, Debian, rpm, and dbus, but primarily works on GNOME for Red Hat, Inc.

### 添付資料URL

- [Notes in a separate window](http://etherpad.osuosl.org/lpc-2012-lpc2012-boot-atomic-upgrades)（link）
- [Edit notes window](http://etherpad.osuosl.org/ep/pad/view/lpc-2012-lpc2012-boot-atomic-upgrades/latest)（link）

<a id="session-105"></a>
## 46. Hinting vs Heuristics: Plumbing I/O Cache Hints Through the Linux Storage Stack

- セッション個別URL: https://blog.linuxplumbersconf.org/lpc-2012/meeting/105/lpc2012-lsf-hint-heuristic-io-cache/index.html
- Track: File and Storage Systems
- 日時: 2012-08-30 15:20 - 16:05 PDT

### Description

The Linux-storage and wider storage community are actively investigating ways to express and leverage the varying performance characterics of storage devices.  A storage device may do a better job servicing the I/O stream if it can discern details deeper than just the currently requested block address range.  The T10 committee is in the process of specifying a hinting scheme to classify the in-flight data in a SCSI request.  Similarly, a filesystem can do a better job of allocation if it is given some explicit hints from the application about how a file will be used.  EXT4 is investigating an O_HOT/O_COLD hint that applications could use to express a coarse quality of service for a given file.


At the same time, bcache has arrived as a stacking block device driver that uses heuristics to guide the decision of whether an I/O request should be cached in a high performance device or passed on to the next tier in the storage hierarchy.  This presentation investigates an approach to plumbing hints through the filesystem to be consumed by a modified bcache block device.  The tradeoffs between hinting and heuristics, as well as a proposed mechanism for specifying cache policy in userspace, are explored.  The target audience is kernel filesystem/block developers and application developers that want to express caching or other policies to a storage configuration.


Topic Lead: Dan Williams  ([HTML_REMOVED])
Dan is a Linux-storage developer at Intel. He contributed support for offloading raid5/6 calculations, developed bios-raid support for md/mdadm, and currently maintains the libsas based isci driver. He has presented at the Ottawa Linux Symposium, the Linux Storage Summit, and authored an article for LWN.net.

### 添付資料URL

- [Notes in a separate window](http://etherpad.osuosl.org/lpc-2012-lpc2012-lsf-hint-heuristic-io-cache)（link）
- [Edit notes window](http://etherpad.osuosl.org/ep/pad/view/lpc-2012-lpc2012-lsf-hint-heuristic-io-cache/latest)（link）

<a id="session-144"></a>
## 47. LLVM/Clang x86 Kernel Build

- セッション個別URL: https://blog.linuxplumbersconf.org/lpc-2012/meeting/144/lpc2012-llvm-kernel-build/index.html
- Track: LLVM
- 日時: 2012-08-30 15:20 - 16:05 PDT

### Description

LLVM as new toolchain is used in an increasing number of projects: RenderScript, Gallium3D, Minix, FreeBSD and others. Also in the Linux ecosystem usage of LLVM and clang is on the rise.


This talk provides an overview about the current state and efforts to compile the Linux Kernel with LLVM on x86, issues remaining, and discussion on what challenges and how they can be solved.


Topic Lead: Jan-Simon Moeller
Jan-Simon Möller is an engineer and consultant familiar with Embedded Linux,
Build Systems, the Kernel and he contributes to open source projects. For the
Linux Foundation he works as trainer for Embedded Linux and device drivers
classes.

### 添付資料URL

- [Notes in a separate window](http://etherpad.osuosl.org/lpc-2012-lpc2012-llvm-kernel-build)（link）
- [Edit notes window](http://etherpad.osuosl.org/ep/pad/view/lpc-2012-lpc2012-llvm-kernel-build/latest)（link）
- [LLVMLinux x86 Kernel Build – Jan-Simon Möller [slides]](https://blog.linuxplumbersconf.org/2012/wp-content/uploads/2012/09/2012-LPC-LLVMLinux-jsm1.pdf)（file）

<a id="session-40"></a>
## 48. The Tunnel Monster

- セッション個別URL: https://blog.linuxplumbersconf.org/lpc-2012/meeting/40/lpc2012-ref-tunnel-monster/index.html
- Track: Refereed Presentations
- 日時: 2012-08-30 16:30 - 17:15 PDT

### Description

With the growth of virtual networking has come a new set of problems all caused by tunneling. Tunnels used to be limited to VPN's, getting around pesky firewalls (see RFC3093).  Now everbody's doing them and inventing new standards with more confusing names like NVGRE, VXVLAN and STT. This talk will explore what these are, what problems they cause and how well Linux does (or does not) support htem.


BIO:
Stephen has been involved with Linux drivers, networking, routing and bridging.  In addition to working for Vyatta, in developing their open source routing platform he has contributed the "netem" network emulator, several network drivers and is the maintainer several utilities.

### 添付資料URL

- [Notes in a separate window](http://etherpad.osuosl.org/lpc-2012-lpc2012-ref-tunnel-monster)（link）
- [Edit notes window](http://etherpad.osuosl.org/ep/pad/view/lpc-2012-lpc2012-ref-tunnel-monster/latest)（link）

<a id="session-102"></a>
## 49. Time Alignment && PulseAudio on Android

- セッション個別URL: https://blog.linuxplumbersconf.org/lpc-2012/meeting/102/lpc2012-audio-time-alignment/index.html
- Track: Audio
- 日時: 2012-08-30 16:30 - 17:15 PDT

### Description

=== Time alignment in the Linux Audio Stack ===
The Linux Audio stack provides very little support for precise timing, despite the availability of hardware audio wall clocks and the adoption of new protocols such as IEEE1588 and Ethernet AVB, which align networked devices several orders of magnitude more precisely than NTP.
In this presentation, we show how providing user-space applications with access to the audio wall clock can improve audio rendering/capture for local and networked devices. In the first case, the resolution of the wall clock can help PulseAudio track with more precision the drift between system time and audio time. Likewise for networked devices, the differences in audio wall clocks can help a server adjust asynchronous sample-rate conversions without large and frequent variations of the sample-rate ratio. We will present some ideas on modifications of the audio stack and data structures and gather feedback from the open-source community.


Topic Lead: Pierre Bossart


=== PulseAudio on Android ===
As part of our efforts to make 'standard' Linux components available in the Android world, we are working on porting PulseAudio to Android. In this session, we talk about challenges in the initial porting effort, the approach we are taking to make PulseAudio an out-of-the-box replacement for the native system, and what advantages we hope to be able to provide with this work.


Topic Lead: Arun Raghavan [HTML_REMOVED]
Arun Raghavan is a long-time open source supporter and mainly hacks on the PulseAudio audio server at Collabora. He contributes to the GStremaer multimedia framework, and secretly is a developer on the Gentoo Linux distribution as well.

### 添付資料URL

- [Notes in a separate window](http://etherpad.osuosl.org/lpc-2012-lpc2012-audio-time-alignment)（link）
- [Edit notes window](http://etherpad.osuosl.org/ep/pad/view/lpc-2012-lpc2012-audio-time-alignment/latest)（link）
- [Audio Time Alignment – Pierre Bossart [slides]](https://blog.linuxplumbersconf.org/2012/wp-content/uploads/2012/11/2012-lpc-audio-time-alignment-bossart.pdf)（file）

<a id="session-132"></a>
## 50. Tracing Summit - Late Afternoon

- セッション個別URL: https://blog.linuxplumbersconf.org/lpc-2012/meeting/132/lpc2012-tracing-summit-late-afternoon/index.html
- Track: Tracing
- 日時: 2012-08-30 16:30 - 17:15 PDT

### Description

Last meeting of the tracing summit


Agenda:
1) Making linsched useful, Dhaval Giani, University of Toronto
2) LTTngTop: Human Readable Trace Viewer, Julien Desfossez, EfficiOS
3) Extensible trace analysis using the Tracing and Monitoring Framework, Alexandre Montplaisir, Ericsson
4) Open Discussion, Where do we go from here?

### 添付資料URL

- [Notes in a separate window](http://etherpad.osuosl.org/lpc-2012-lpc2012-tracing-summit-late-afternoon)（link）
- [Edit notes window](http://etherpad.osuosl.org/ep/pad/view/lpc-2012-lpc2012-tracing-summit-late-afternoon/latest)（link）
- [Tracing mini-summit [Slides/Abstracts]](http://www.tracingsummit.org/wiki/TracingSummit2012)（link）
- [ [etherpad 1]](http://etherpad.osuosl.org/ep/pad/view/lpc-2012-lpc2012-tracing-summit-morning/latest)（link）
- [ [etherpad 2]](http://etherpad.osuosl.org/ep/pad/view/lpc-2012-lpc2012-tracing-summit-afternoon/latest)（link）

<a id="session-106"></a>
## 51. NFS Advanced Projects

- セッション個別URL: https://blog.linuxplumbersconf.org/lpc-2012/meeting/106/lpc2012-lsf-nsfv4-clusters/index.html
- Track: File and Storage Systems
- 日時: 2012-08-30 16:30 - 17:15 PDT

### Description

Topic Lead: Jeff Layton
Jeff is a long-time Linux enthusiast. After working as a Unix System Administrator for almost a decade, he joined the Red Hat kernel engineering team in 2007, focusing mainly on NFS and CIFS. He is also a member of the worldwide Samba team by virtue of his work on the Linux kernel CIFS filesystem.


Topic Lead: Bruce Fields
Bruce has worked on the Linux NFS code since 2002, first at the University of Michigan and then since 2010 at Red Hat.  He maintains the kernel's NFS server, contributes to the IETF's NFSv4 working group, and generally enjoys solving problems wherever they turn up.


Topic Lead: Chuck Lever

### 添付資料URL

- [Notes in a separate window](http://etherpad.osuosl.org/lpc-2012-lpc2012-lsf-nsfv4-clusters)（link）
- [Edit notes window](http://etherpad.osuosl.org/ep/pad/view/lpc-2012-lpc2012-lsf-nsfv4-clusters/latest)（link）

<a id="session-59"></a>
## 52. PM Constraints: OMAP

- セッション個別URL: https://blog.linuxplumbersconf.org/lpc-2012/meeting/59/lpc2012-cf-thermal-pm-constraint/index.html
- Track: Constraint Framework
- 日時: 2012-08-30 16:30 - 17:15 PDT

### Description

Power Management Constraints - OMAP
1) OMAP SoC Thermal Containment
2) Power Management in Linux with a coprocessor
3) New Model for System and Devices Latency


=== OMAP SoC Thermal Containment ===
The thermal challenge is to design an end-product with high performance while keeping the junction temperature of the IC components used on this product within their limitations and which does not present a thermal discomfort for the user. OMAP4/OMAP5 System on Chips, operating at highest Operating Performance Points (OPP), is a powerful mobile applications processor. However operating at higher voltage and higher frequency in a sustained manner may cause thermal limits to be exceeded, both for silicon and user comfort. We propose extensions on existing frameworks to model per device power constraints, for containment of thermal limitations across major heat sources of a end-product device, e.g. LCD, CPU, charging, etc. The framework shall facilitate the power and thermal management performed by governor and policies, depending on device context and use case knowledge.


Topic Lead: Eduardo Valentin
Eduardo currently acting as System Software Engineer at Texas Instruments, working on OMAP Linux kernel. He has been involved with embedded Linux for some years already, contributing on products of companies like Texas Instruments, Nokia, Motorola and Samsung.  The main areas of interest are (not limited to): power management, real time, performance, scheduling, system and software otimization, and recently, thermal management.


=== Power Management in Linux with a coprocessor ===
Shutting down the main processor of an SoC in the idle and standby state results in significant power savings. However, doing so requires the responsibility of reviving the system to be passed onto an independent entity in the system. Texas Instruments has taken the lead in introducing a novel approach for system power management in its AM335x processor family involving a Cortex-M3 to assist the main processor. In the future there will other devices from Texas Instruments and possibly other silicon vendors which adopt this technique.


Integrating a co-processor which is not running Linux with the PM framework comes with a new set of challenges. The co-processor needs to interact with the host processor for idle as well as standby power management. How do we communicate with a co-processor without significant overhead in the idle thread? In case the co-processor stops responding what should be recovery mechanism in the PM framework? What should be the mechanism for exporting the core details like the configured wakeup sources to the co-processor?


This session will focus on the above mentioned challenges and other issues surrounding the usage of a co-processor for power management in Linux.


Topic Lead: Vaibhav Bedia
Vaibhav Bedia, Software Systems Engineer, Texas Instruments, works on Linux kernel development for Sitara ARM microprocessors.


=== New Model for System and Devices Latency ===
Due to the nature of the new SoC architectures the Power Management needs a new model for the various system latencies. The session discusses:
- Concepts of system, devices, wake-up and resume latencies,
- Recent changes in the devices framework for the latency, why and how to make it generic,
- Links with the other PM QoS frameworks: thermal, cpuidle,
- Recent changes in the ARM/OMAP platform code for the system latency,
- Problems encountered while modelling and measuring the various latencies,
- A proposed model and how to implement it,
- Planned changes in the device framework, the platform code and the APIs.


This session is oriented towards Linux power management developers. The goal is to agree on a framework implementation and the interfaces within the kernel and with the user space.


Topic Lead: Jean Pihet [HTML_REMOVED]
Jean is working with embedded Linux since many years now, for companies like Texas Instruments, MontaVista, Motorola and Philips. Recently NewOldBits.com has been founded to provide high quality consulting services. The area of work is mainly OMAP Power Management, tracing and profiling tools (perf, ftrace, oprofile...) for recent ARM cores.

### 添付資料URL

- [Notes in a separate window](http://etherpad.osuosl.org/lpc-2012-lpc2012-cf-thermal-pm-constraint)（link）
- [Edit notes window](http://etherpad.osuosl.org/ep/pad/view/lpc-2012-lpc2012-cf-thermal-pm-constraint/latest)（link）
- [Power Management with a Co-Processor – Vaibhav Bedia [slides]](https://blog.linuxplumbersconf.org/2012/wp-content/uploads/2012/09/2012-lpc-pmconstraints-Embedded-Linux-Coprocessor-bedia.pdf)（file）
- [OMAP PM QoS Discussion – Jean Pihet [slides]](https://blog.linuxplumbersconf.org/2012/wp-content/uploads/2012/09/2012-lpc-pmconstraints-PMQoS-reqs-v1.0-pihet.pdf)（file）
- [OMAP Thermal Software – Eduardo Valentin [slides]](https://blog.linuxplumbersconf.org/2012/wp-content/uploads/2012/09/2012-lpc-pmconstraints-OMAP-thermal-valentin.pdf)（file）

<a id="session-36"></a>
## 53. Reducing Network Latency in Linux

- セッション個別URL: https://blog.linuxplumbersconf.org/lpc-2012/meeting/36/lpc2012-ref-low-latency-sockets/index.html
- Track: Refereed Presentations
- 日時: 2012-08-30 17:25 - 18:10 PDT

### Description

This presentation will cover some development-in-progress of a new in-kernel interface to allow applications to achieve lower network latency and jitter.  These proposed patches create a new driver interface to allow an application to drive a poll all the way down to the device driver.  A major benefit of this design is that applications do not have to change in order to speed up, and the Linux networking stack is not bypassed in any way.  The design, implementation and results from an early prototype will be shown, and current efforts to refine, refactor, and upstream the design will be discussed. 


Affected areas include the core networking stack, and network drivers.


Owners: Jesse Brandeburg 


BIO: Jesse Brandeburg is a senior Linux developer in the Intel LAN Access Division, producing the Intel Ethernet product lines. Jesse has been with Intel since 1994, and has worked on the Linux e100, e1000, e1000e, igb, ixgb, ixgbe drivers since 2002. Jesse splits his time between solving customer issues, performance tuning Intel's drivers, and working on bleeding edge development for the Linux networking stack.

### 添付資料URL

- [Notes in a separate window](http://etherpad.osuosl.org/lpc-2012-lpc2012-ref-low-latency-sockets)（link）
- [Edit notes window](http://etherpad.osuosl.org/ep/pad/view/lpc-2012-lpc2012-ref-low-latency-sockets/latest)（link）
- [A Way Towards Lower Latency and Jitter – Jesse Brandeburg [slides]](https://blog.linuxplumbersconf.org/2012/wp-content/uploads/2012/09/2012-lpc-Low-Latency-Sockets-slides-brandeburg.pdf)（file）

<a id="session-101"></a>
## 54. ALSA channel-mapping API

- セッション個別URL: https://blog.linuxplumbersconf.org/lpc-2012/meeting/101/lpc2012-audio-alsa-api/index.html
- Track: Audio
- 日時: 2012-08-30 17:25 - 18:10 PDT

### Description

The functionality to query and/or set the PCM channel-mapping is a
long-standing missing feature in ALSA.  The session will cover the
requirement by the actual hardware and discuss the pros and cons of
proposed implementations.



REQUIRED AUDIENCE
ALSA devs, PulseAudio devs, gstreamer devs



Topic Lead: Takashi Iwai [HTML_REMOVED]:
Working as a member of hardware-enablement team in SUSE Labs at SUSE
Linux Products GmbH in Nuremberg, Germany, while playing a role as a
gatekeepr of the Linux sound subsystem tree over years.

### 添付資料URL

- [Notes in a separate window](http://etherpad.osuosl.org/lpc-2012-lpc2012-audio-alsa-api)（link）
- [Edit notes window](http://etherpad.osuosl.org/ep/pad/view/lpc-2012-lpc2012-audio-alsa-api/latest)（link）

<a id="session-114"></a>
## 55. ARM Virtualization

- セッション個別URL: https://blog.linuxplumbersconf.org/lpc-2012/meeting/114/lpc2012-virt-xen-cortexa15/index.html
- Track: Virtualization
- 日時: 2012-08-30 17:25 - 18:10 PDT

### Description

Virtualization Topics:
1. Xen on ARM Cortex A15
2. Porting KVM to the ARM Architecture


=== Xen on ARM Cortex A15 ===
During the last few months of 2011 the Xen Community started an effort to port Xen to ARMv7 with virtualization extensions, using the Cortex A15 processor as reference platform. The new Xen port is exploiting this set of hardware capabilities to run guest VMs in the most efficient way possible while keeping the ARM specific changes to the hypervisor and the Linux kernel to a minimum.


Developing the new port we took the chance to remove legacy concepts like PV or HVM guests and only support a single kind of guests that is comparable to "PV on HVM" in the Xen X86 world. This talk will explain the reason behind this and other design choices that we made during the early development process and it will go through the main technical challenges that we had to solve in order to accomplish our goal. Notable examples are the way Linux guests issue hypercalls and receive event channels notifications from Xen.


Is there anything that we could have done better?
Is the architecture that we lied down in the Linux kernel generic enough to be re-used by other hypervisors?


Topic Lead: Stefano Stabellini
Stefano is a Senior Software Engineer at Citrix, working on the Open Source Xen Platform team. He has been working on Xen since 2007, focusing on several different projects, spanning from Qemu to the Linux kernel. He currently maintains libxenlight, Xen support in Qemu and PV on HVM in the Linux kernel. Before joining Citrix he was a researcher at the Institute for Human and Machine Cognition, working on mobile ad hoc networks.


=== Porting KVM to the ARM Architecture ===
With the introduction of the Virtualization Extensions to the ARM architecture (as implemented in the Cortex A7 and A15 processors), it is possible to implement a hardware assisted hypervisor. The KVM port to the ARM architecture, started by Christoffer Dall (University of Columbia) is an example of such a hypervisor.


Our proposal is to describe the current state of the project, explain how the various virtualization extensions (hypervisor mode, second stage translation, virtual interrupt controller, timers) are used, how the KVM implementation on ARM differs from other architectures, and what our plans are for upstreaming the code.


Topic Lead: Marc Zyngier [HTML_REMOVED]
Marc has been toying with the Linux kernel since 1993, and has been involved over time with the RAID subsystem (MD), all kind of ancient architectures (by maintaining the EISA bus), messed with consumer electronics, and now focuses on the ARM architecture.

### 添付資料URL

- [Notes in a separate window](http://etherpad.osuosl.org/lpc-2012-lpc2012-virt-xen-cortexa15)（link）
- [Edit notes window](http://etherpad.osuosl.org/ep/pad/view/lpc-2012-lpc2012-virt-xen-cortexa15/latest)（link）
- [KVM/ARM – Marc Zyngier [slides]](https://blog.linuxplumbersconf.org/2012/wp-content/uploads/2012/09/2012-lpc-arm-zyngier.pdf)（file）
- [Xen on ARM Cortex A15 – Stefano Stabellini [slides]](https://blog.linuxplumbersconf.org/2012/wp-content/uploads/2012/09/2012-lpc-virt-xen-arm-stabellini.pdf)（file）

<a id="session-38"></a>
## 56. Lubricating Kernel Plumbing with Social Engineering

- セッション個別URL: https://blog.linuxplumbersconf.org/lpc-2012/meeting/38/lpc2012-ref-social-eng/index.html
- Track: Refereed Presentations
- 日時: 2012-08-31 09:10 - 09:55 PDT

### Description

Abstract:


One of the essential features of plumbing is that disparate groups of
people have to work together to produce all of the pieces required to be
fitted together into the whole.  Unfortunately, different groups tend to
have different working methods, different procedures and even different
ways of communicating.  The result is that working together on several
interlocking features can be much harder than you think.  This talk will
give an overview of some of the essential social aspects of working well
with the kernel community: namely what a good change log is, how to
write one and how to convince a subsystem maintainer to trust you (and
by extension, your patches).  We'll give a simple framework for
interacting with the kernel community in ways that can increase your
patch uptake with actual proof points from experience at Parallels and
some amusing anecdotes and examples of how and how not to go about this.


Audience:


Almost anyone who needs to extend the kernel and therefore has to write
a patch (or even those who just discover bugs during testing and want to
submit patches to fix them).


Bio:


James Bottomley is CTO of Server Virtualisation at Parallels and Linux
Kernel maintainer of the SCSI subsystem, PA-RISC Linux and the 53c700
set of drivers. He has made contributions in the areas of x86
architecture and SMP, filesystems, storage and memory management and
coherency.  He is currently a Director on the Board of the Linux
Foundation and Chair of its Technical Advisory Board. He was born and
grew up in the United Kingdom. He went to university at Cambridge in
1985 for both his undergraduate and doctoral degrees. He joined AT&T
Bell labs in 1995 to work on Distributed Lock Manager technology for
clustering. In 1997 he moved to the LifeKeeper High Availability
project. In 2000 he helped found SteelEye Technology, Inc as Software
Architect and later as Vice President and CTO.  He joined Novell in
2008 as a Distinguished Engineer at Novell's SUSE Labs and Parallels
in 2011.

### 添付資料URL

- [Notes in a separate window](http://etherpad.osuosl.org/lpc-2012-lpc2012-ref-social-eng)（link）
- [Edit notes window](http://etherpad.osuosl.org/ep/pad/view/lpc-2012-lpc2012-ref-social-eng/latest)（link）
- [Lubricating Kernel Plumbing with Social Engineering – James Bottomley [slides]](https://blog.linuxplumbersconf.org/2012/wp-content/uploads/2012/09/LPC-2012-bottomley.odp)（file）

<a id="session-110"></a>
## 57. Real Time Microconference

- セッション個別URL: https://blog.linuxplumbersconf.org/lpc-2012/meeting/110/lpc2012-real-time-microconference/index.html
- Track: Real Time
- 日時: 2012-08-31 09:10 - 09:55 PDT

### Description

http://wiki.linuxplumbersconf.org/2012:real-time


Schedule for this track


Getting RCU further out of the way - Paul McKenney
Handling the thorns of mainline - Steven Rostedt
SCHED_DEADLINE: a new deadline based realtime scheduling policy - Peter Zijlstra
Review of the stable realtime release process - Frank Rowand
Lessons We Learned: Common mistakes while testing applications with RT - Luis Claudio Goncalves
State of RT/Thomas's thoughts - Thomas Gleixner

### 添付資料URL

- [Notes in a separate window](http://etherpad.osuosl.org/lpc-2012-lpc2012-real-time-microconference)（link）
- [Edit notes window](http://etherpad.osuosl.org/ep/pad/view/lpc-2012-lpc2012-real-time-microconference/latest)（link）
- [Review of the real time stable release process – Frank Rowand [slides]](https://blog.linuxplumbersconf.org/2012/wp-content/uploads/2012/09/2012-lpc-rt-review-stable-rt-process-rowand.pdf)（file）

<a id="session-87"></a>
## 58. Petitboot && /boot Unification

- セッション個別URL: https://blog.linuxplumbersconf.org/lpc-2012/meeting/87/lpc2012-boot-petitboot/index.html
- Track: Core OS
- 日時: 2012-08-31 09:10 - 09:55 PDT

### Description

=== Petitboot - A kexec based bootloader ===
Petitboot is a platform independent bootloader based on the Linux kexec warm reboot mechanism. Petitboot supports loading kernel and initrd image files from any mountable Linux device, plus can load image files from the network using TFTP, NFS, HTTP, HTTPS, and SFTP.  Petitboot can boot any operating system supported by kexec.


In essence, petitboot is a user friendly front end to the Linux exec program. If installed as a standard user program petitboot can be used as a convenient menu based way to initiate a kexec system reboot.  A petitboot package is already available for several Linux distributions.


Petitboot can also be used as a traditional 2nd stage bootloader by including the petitboot program and necessary dependencies like busybox and kexec-tools in the embedded initramfs of a Linux kernel image and converting that kernel image to a form that is loadable by the 1st stage bootloader.  The method of creating the initramfs, converting the Linux kernel image to a 2nd stage bootloader image, and arranging for the petitboot program and its dependencies to be started on boot are all specific to the platform, the Linux distribution, and the 1st stage bootloader.


Discussions in this session can explore methods to prepare a petitboot 2nd stage package for various distributions, requests for petitboot enhancements, etc.


Topic Lead: Geoff Levand    [HTML_REMOVED]
Geoff is a Linux Architect at the Huawei R&D Center in San Jose, California.  In his spare time he maintains the Petitboot bootloader, the TWIN windowing system, and Linux support for the Sony Playstation 3 game console.


=== Peace, Love, and Unification in /boot ===
A simple filesystem layout for command line parameters, kernel and initramfs images.


/boot might be managed by multiple distributions. These distributions fight over the boot loader configuration and don't know much about each other. In this session a proposal for a simple filesystem layout is presented, which can be used as the base for boot loaders without a special configuration file. This also obsoletes the need of regenerating a configuration file (grub-mkconfig) after dropping in files via package managers.


Topic Lead: Harald Hoyer
Harald joined the Linux community in 1996. His first kernel patch was the module ip_masq_quake in 1997, followed by boot support for md raid devices. He joined Red Hat in July of 1999, working on projects ranging from udev, network daemons and CD recording packages to creating configuration tools, extending smolt and writing python interfaces. Lately he created a cross distribution initramfs generator called dracut.

### 添付資料URL

- [Notes in a separate window](http://etherpad.osuosl.org/lpc-2012-lpc2012-boot-petitboot)（link）
- [Edit notes window](http://etherpad.osuosl.org/ep/pad/view/lpc-2012-lpc2012-boot-petitboot/latest)（link）
- [Petitboot – Geoff Levand [slides]](https://blog.linuxplumbersconf.org/2012/wp-content/uploads/2012/09/petitboot-lpc-2012.pdf)（file）

<a id="session-126"></a>
## 59. Android (tentative)

- セッション個別URL: https://blog.linuxplumbersconf.org/lpc-2012/meeting/126/lpc2012-android-tentative/index.html
- Track: 
- 日時: 2012-08-31 09:10 - 09:55 PDT

### Description

掲載なし

### 添付資料URL

- [Notes in a separate window](http://etherpad.osuosl.org/lpc-2012-lpc2012-android-tentative)（link）
- [Edit notes window](http://etherpad.osuosl.org/ep/pad/view/lpc-2012-lpc2012-android-tentative/latest)（link）

<a id="session-68"></a>
## 60. Classification/Shaping && HW Rate Limiting && Open-vswitch

- セッション個別URL: https://blog.linuxplumbersconf.org/lpc-2012/meeting/68/lpc2012-net-tc-shaping/index.html
- Track: Networking
- 日時: 2012-08-31 09:10 - 09:55 PDT

### Description

Networking Bufferbloat Topics
1. Linux Traffic Classification and Shaping
2. TC Interface to Hardware Rate Limiting
3. Harmonizing Multiqueue, Vmdq, virtio-net, macvtap with open-vswitch


=== Linux Traffic classification and Shaping ===
Linux provides advanced mechanism for traffic classification and shaping. Central to this role is the queuing discipline. Recently we have done work allowing hardware to offload some of these traditionally CPU intensive task and have experimented with mechanisms to improve performance on many-core systems.


Here we would like to highlight work such as the queuing scheduler 'mqprio' that have recently been accepted upstream. As well as share results from experimental work running lockless queuing disciplines and classifiers on many-core systems and fat pipes (10Gbps and greater).


Topic Lead: Tom Herbert


=== tc(?) interface to hardware transmit rate limiting ===
Intel 10 Gigabit hardware (and others) can provide transmit rate limiting. This presentation will discuss development of a new simple qdisc that can either provide all-software transmit rate limiting, or when installed over hardware that supports the capability, can directly configure the hardware's rate limiting. One problem that will need discussion is that the Intel hardware's rate limiting is per-queue. Another option besides a qdisc that could be discussed is direct ethtool control over the rate limiting.


Topic Lead: Jesse Brandeburg
Jesse is a senior Linux developer in the Intel LAN Access Division (Intel Ethernet). He has been with Intel since 1994, and has worked on the Linux e100, e1000, e1000e, igb, ixgb, ixgbe drivers since 2002. His time is split between solving customer issues, performance tuning Intel's drivers, and working on bleeding edge development for the Linux networking stack.


=== Harmonizing Multiqueue, Vmdq, virtio-net, macvtap with open-vswitch ===
Multiqueue virtio-net, macvtap and qemu is being worked upon by Jason Wang and Krishna Kumar. Inspired by their work I had like to extend it a step further and discuss introducing open-vswitch based flows for multiqueue aware virtio-net queuing. This requires plumbing in openvswitch to utilize linux tc to instantiate QoS flows per queue in addition to the virtio-net multiqueue work. Open-vswitch also needs to incorporate support for opening tap fds multiple times so it can create as many queues. To this end openvswitch might want to become macvtap aware.


There is a need to understand and discuss gaps in realizing openvswitch usecases in synchronization with features already implemented in macvtap and linux tc. For instance.. features like vepa, veb etc are implemented in the macvtap/macvlan driver only but are useful for openvswitch based flows too.


I had like to discuss features/gaps that require plumbing in these subsystems and related work.


Required attendees(If present)
Developers like Jason Wang, Krishna Kumar, Michael Tsirkin, Arnd Bergmann, Stephen Hemminger, Dave Miller, open-vswitch developers, netdev developers, libvirt developers, qemu developers


Topic Lead: Shyam Iyer [HTML_REMOVED]
Shyam Iyer is a senior software engineer in Dell's Operating Sytems Advanced Engineering Group focused on Linux with over 8 years of experience in developing linux based solutions. Apart from enabling Dell PowerEdge Servers and Storage for Enterprise Linux Operating Systems he focuses on bridging new hardware technology usecases with emerging new Linux technologies. His interests encompass Server Hardware Architecture, Linux Kernel Debugging, Server Platform bringup, efficient storage, networking, Virtualization architectures and performance tuning.

### 添付資料URL

- [Notes in a separate window](http://etherpad.osuosl.org/lpc-2012-lpc2012-net-tc-shaping)（link）
- [Edit notes window](http://etherpad.osuosl.org/ep/pad/view/lpc-2012-lpc2012-net-tc-shaping/latest)（link）
- [Linux Traffic classification and Shaping / Qdisc Experiments at 10Gbps – John Fastabend [slides]](https://blog.linuxplumbersconf.org/2012/wp-content/uploads/2012/09/2012-lpc-networking-qdisc-fastabend.pdf)（file）
- [tc(?) interface to hardware transmit rate limiting – Jesse Brandeburg [slides]](https://blog.linuxplumbersconf.org/2012/wp-content/uploads/2012/09/2012-lpc-Hardware-Rate-Limiting-brandeburg.pdf)（file）

<a id="session-29"></a>
## 61. Status of the ARM architecture

- セッション個別URL: https://blog.linuxplumbersconf.org/lpc-2012/meeting/29/lpc2012-ref-arm-arch-kernel-status/index.html
- Track: Refereed Presentations
- 日時: 2012-08-31 10:05 - 10:50 PDT

### Description

The ARM architecture is one of the fastest moving subsystems in the kernel at the moment, with over 400 individual contributors and close to 5000 changesets since Linux-3.0. This gives an update of the hot topics that are keeping everyone busy, and where we're headed in the future.


The three most important technical problems we are working on are the conversion to device tree based booting, allowing multiple platforms to coexist in the same kernel, and moving code out of the architecture code into new and existing subsystems that are maintained separately. At the same time as we are doing these changes, many new SoCs based on ARM are being developed and submitted for inclusion into Linux.


Aside from the technical work, the presentation will also describe the challenges of dealing with a subsystem of this scale, both in terms of working with a large number of people and organizing the patches for upstream submission.


Arnd Bergmann is co-maintaining the arm-soc tree, together with Olof Johansson, which is where most of the ARM patches end up getting merged. He has been working for the IBM Linux Technology center for ten years and is currently on assignment from IBM to the Linaro project. He is also the primary contact for new CPU architectures in the kernel and has contributed to almost every subsystem in the past.

### 添付資料URL

- [Notes in a separate window](http://etherpad.osuosl.org/lpc-2012-lpc2012-ref-arm-arch-kernel-status)（link）
- [Edit notes window](http://etherpad.osuosl.org/ep/pad/view/lpc-2012-lpc2012-ref-arm-arch-kernel-status/latest)（link）

<a id="session-39"></a>
## 62. Enhancing the Thermal Management Infrastructure in Linux

- セッション個別URL: https://blog.linuxplumbersconf.org/lpc-2012/meeting/39/lpc2012-ref-thermal-management/index.html
- Track: Refereed Presentations
- 日時: 2012-08-31 11:00 - 11:45 PDT

### Description

Abstract:
With the number of devices running Linux increasing day by day, the need for a robust
Thermal management infrastructure has become critical. Linux already has support for
minimal Thermal management, which often does not suffice to do a complete Thermal
management solution. Recently, a lot of discussions are happening in the mailing lists,
and patches are being submitted, to enhance the existing Thermal infrastructure in Linux.


The intention of talk is to discuss the Thermal Framework API/ABI changes, registration
mechanisms for thermal and cooling drivers, methods to throttle devices, priority based
throttling, mechanisms to provide platform specific data to the thermal framework,
notification mechanisms (in-kernel and kernel-user space), ways to implement mapping
between thermal zones and cooling devices, providing debugfs support for thermal
statistics and data collection, etc. The target audience would be the Linux developers/users
who face the thermal issue and want to fix it (or willing to help to fix it).


Bio:
Durga (R. Durgadoss) is a Software Engineer in the Intel Architecture Group at Intel Corporation.
He has been working on Thermal and Burst Current Management for Intel Atom
based SOC platforms. Durga has been actively involved in Linux Kernel Development
since he joined Intel two years ago; he recently upstreamed Thermal and Current
management drivers to the Linux kernel. He is currently working on platform agnostic
solutions to leverage the Thermal Framework inside the kernel.

### 添付資料URL

- [Notes in a separate window](http://etherpad.osuosl.org/lpc-2012-lpc2012-ref-thermal-management)（link）
- [Edit notes window](http://etherpad.osuosl.org/ep/pad/view/lpc-2012-lpc2012-ref-thermal-management/latest)（link）

<a id="session-57"></a>
## 63. PM constraints: Tegra

- セッション個別URL: https://blog.linuxplumbersconf.org/lpc-2012/meeting/57/lpc2012-cf-tegra/index.html
- Track: Constraint Framework
- 日時: 2012-08-31 11:00 - 11:45 PDT

### Description

NVIDIA Tegra power management features DVFS, sleep states and switching between low power and high performance CPU clusters. In the current Linux kernel the central subsystems affecting the state of CPUs are cpuidle, cpufreq and CPU hotplug. We propose a new framework, cpuquiet, for coordinated control of CPU cores allowing migration between CPU clusters, maximizing available performance in the presence of EDP and thermal constraints and maximizing the utilization of low power states in the presence of CPU power state constraints and discuss how PM QoS could be extended to allow more efficient power management utilizing e.g. device context and application knowledge to guide the behavior of the different subsystem governors.


Topic Lead: Antti P Miettinen
Energy Efficiency Engineer at NVIDIA, working on Tegra Linux kernel, previously a mobile device power management researcher at Nokia Research Center.


Topic Lead: Peter De Schrijver
NVIDIA Tegra Linux kernel engineer, Debian developer, previously working on power management in maemo for Nokia.

### 添付資料URL

- [Notes in a separate window](http://etherpad.osuosl.org/lpc-2012-lpc2012-cf-tegra)（link）
- [Edit notes window](http://etherpad.osuosl.org/ep/pad/view/lpc-2012-lpc2012-cf-tegra/latest)（link）
- [Tegra Constraints – Antti P Miettinen [slides]](https://blog.linuxplumbersconf.org/2012/wp-content/uploads/2012/08/tegra-constraints.pdf)（file）
- [CPUquiet – Peter De Schrijver [slides]](https://blog.linuxplumbersconf.org/2012/wp-content/uploads/2012/08/cpuquiet.pdf)（file）

<a id="session-113"></a>
## 64. Network Virtualization and Lightning Talks

- セッション個別URL: https://blog.linuxplumbersconf.org/lpc-2012/meeting/113/lpc2012-virt-vfio/index.html
- Track: Virtualization
- 日時: 2012-08-31 11:00 - 11:45 PDT

### Description

VFIO - Are We There Yet?


KVM Network performance and scalability


Enabling overlays for Network Scaling


Marrying live migration and device assignment


Lightning Talks
  - QEMU disaggregation - Stefano Stabellini
  - Xenner- Alexander Graf
  - From Server to Mobile: Different Requirements/Different Solution - Eddie Dong, Jun Nakajima



=== VFIO - Are We There Yet? ===
VFIO is new userspace driver interface intended to generically enable assignment of devices into qemu virtual machines.  VFIO has had a bumpy road upstream and is currently into it's second redesign.  In this talk we'll look at the new design, the status of the code, how to make use of it, and where it's going.  We'll also look back at some of the previous designs to show how we got here.  This talk is intended for developers and users interested in the evolution of device assignment in qemu and kvm as well as those interested in userspace drivers.


Topic Lead: Alex Williamson
Alex has been working on virtualization for over 5 years and concentrates on the I/O side of virtualization, especially assignment of physical devices to virtual machines. He is a member of the Red Hat Virtualization team.


=== KVM Network performance and scalability ===
In this presentation we will discuss ongoing work to improve KVM networking I/O performance and scalability. We will share performance numbers taken using both vertical (multiple interfaces) and horizontal (many VMs) to highlight existing bottleneck's in the KVM stack as well as improvements observed with pending changes. These experiments have shown impressive gains can be obtained by using per-cpu vhost threads and leveraging hardware offloads. These offloads include flow steering and interrupt affinity.


This presentation intends to highlight ongoing research from various groups working on the Linux kernel, KVM, and upper layer stack. Finally we will propose a path to include these changes in the upstream projects. This should be of interest to KVM developers, kernel developers, and anyone using a virtualized environment.


Topic Lead: John Fastabend [HTML_REMOVED]


Required attendees: Vivek Kashyap, Shyam Iyer


=== Enabling overlays for Network Scaling ===
Server virtualization in the data-center has increased the density of networking endpoints in a network. Together with the need to migrate VMs anywhere in the data-center this has surfaced network scalability limitations (layer 2, cross IP subnet migrations, network renumbering).


The industry has turned its attention towards overlay networks to solve the network scalability problems. The overlay network concept defines a domain connecting virtual machines belonging to a single tenant or organization. This virtual network may be built across the server hypervisors which are connected over an arbitrary topology. This talk will give an overview of the problems sought to be solved through the use of overlay networks, and discusses the active proposals such as VxLAN, NVGRE, and DOVE Network. We further will delve into options for implementing the solutions on Linux.


Topic Lead: Vivek Kashyap [HTML_REMOVED]
Vivek works in IBM's Linux Technology Center. Vivek has worked on Linux resource management, delay-accounting, Energy & hardware management, and authored InfiniBand and IPoIB networking protocols, and worked on standardizing and implementing the IEEE 802.1Qbg protocol on network switching.


=== Marrying live migration and device assignment ===
Device assignment has been around for quite some time now in virtualization. It's a nice technique to squeeze as much performance out of your hardware as possible and with the advent of SR-IOV it's even possible to pass a "virtualized" fraction of your real hardware to a VM, not the whole card.


The problem however is that you lose a pretty substantial piece of functionality: live migration.


The most commonly approach used to counterfight this for networking is to pass 2 NICs to the VM. One that's emulated in software and one that's the actually assigned device. It's the guest's responsibility to treat the two as a union and the host needs to be configured in a way that allows packets to float the same way through both paths. When migrating, the assigned device gets hot unplugged and a new one goes back in on the new host. However, that means that we're exposing crucial implementation details of the VM to the guest: it knows when it gets migrated.


Another approach is to do the above, but combine everything in a single guest driver, so it ends up invisible to the guest OS. That quickly becomes a nightmare too, because you need to reimplement network drivers for your specific guest driver infrastructure, at which point you're most likely violating the GPL anyway.


So what if we restrict ourselves to a single NIC type? We could pass in an emulated version of that NIC into our guest, or pass through an assigned device. They would behave the same. That also means that during live migration, we could switch between emulated and assigned modes without the guest even realizing it.


But maybe others have more ideas on how to improve the situation? The less guest intrusive it is, the better the solution usually becomes. And if it extends to storage, it's even better


Required attendees
Peter Waskiewicz
Alex Williamson


Topic Lead: Alexander Graf [HTML_REMOVED]
Alexander has been a steady and long time contributor to the QEMU and KVM projects. He maintains the PowerPC and s390x parts of QEMU as well as the PowerPC port of KVM. He tends to become active, whenever areas seem weird enough for nobody else to touch them, such as nested virtualization, mac os virtualization or ahci. Recently, he has also been involved in kicking off openSUSE for ARM. His motto is なんとかなる.

### 添付資料URL

- [Notes in a separate window](http://etherpad.osuosl.org/lpc-2012-lpc2012-virt-vfio)（link）
- [Edit notes window](http://etherpad.osuosl.org/ep/pad/view/lpc-2012-lpc2012-virt-vfio/latest)（link）
- [VFIO: Are we there yet? – Alex Williamson [slides]](https://blog.linuxplumbersconf.org/2012/wp-content/uploads/2012/09/2012-lpc-virt-vfio-williamson.pdf)（file）
- [QEMU disaggregation – Stefano Stabellini Slides](https://blog.linuxplumbersconf.org/2012/wp-content/uploads/2012/09/2012-lpc-virt-QUEMU-disaggregation-stabellini.pdf)（file）
- [KVM Network performance and scalability – John Fastabend [slides]](https://blog.linuxplumbersconf.org/2012/wp-content/uploads/2012/09/2012-lpc-virt-kvm-network-scalability-fastabend.pdf)（file）
- [Marrying Live Migration and Device Assignment – Alex Graf [slides]](https://blog.linuxplumbersconf.org/2012/wp-content/uploads/2012/09/2012-lpc-virt-live-mig-dev-assign-graf.pdf)（file）

<a id="session-152"></a>
## 65. Polyhedral optimizations for LLVM

- セッション個別URL: https://blog.linuxplumbersconf.org/lpc-2012/meeting/152/lpc2012-llvm-polly/index.html
- Track: LLVM
- 日時: 2012-08-31 11:55 - 12:40 PDT

### Description

Polly is a polyhedral optimizer run as plug-in to the LLVM compiler. Polly optimizes loops for data-locality, auto-vectorization, and auto-parallelization. Although this tool is still under development, it has been gaining traction in the community over last few months and its quality increased significantly. This session will provide an overview on its current state and discuss the roadmap for production utilization.


Topic Lead: Zino Benaissa
Zino Benaissa is a senior staff engineer at QuIC, Qualcomm’s open source subsidiary, responsible for developing back end optimizations for the LLVM compiler. Before joining Qualcomm in 2011, he worked at Intel for 11 years leading the effort to incorporate Intel micro-architectural tunings into the Microsoft Visual C++ compiler. In particular, the support Advanced Vector Extensions (AVX) and collaborated with Microsoft compiler architects and engineers to bring up the auto-vectorizer in the latest release of Microsoft (Dev11) compiler.

### 添付資料URL

- [Notes in a separate window](http://etherpad.osuosl.org/lpc-2012-lpc2012-llvm-polly)（link）
- [Edit notes window](http://etherpad.osuosl.org/ep/pad/view/lpc-2012-lpc2012-llvm-polly/latest)（link）

<a id="session-64"></a>
## 66. CoreOS: Initramfs Systemd && libkmod

- セッション個別URL: https://blog.linuxplumbersconf.org/lpc-2012/meeting/64/lpc2012-boot-systemd-initramfs/index.html
- Track: Core OS
- 日時: 2012-08-31 11:55 - 12:40 PDT

### Description

=== Systemd in the Initramfs ===
Introduction of a systemd based initramfs to boot a system, for which an initramfs is needed.


Topic Lead: Harald Hoyer
Harald joined the Linux community in 1996. His first kernel patch was the module ip_masq_quake in 1997, followed by boot support for md raid devices. He joined Red Hat in July of 1999, working on projects ranging from udev, network daemons and CD recording packages to creating configuration tools, extending smolt and writing python interfaces. Lately he created a cross distribution initramfs generator called dracut.


=== From libabc to libkmod: designing core libraries ===
On Kernel Summit last year Kay and and Lennart put together a wish list for Linux. From the discussions was born libabc as way to help people to design core libraries and therefore help userspace to make use of Linux features. Libkmod is the first library to use their library skeleton to implement one of the items in the wish list: create a library to manage kernel modules and refactor module-init-tools to use it.


In this discussion we will share the experience gained with this task, how libabc helped kmod to replace module-init-tools on all major distributions after less than half a year and how other core
developers could benefit from that.


Topic Lead: Lucas De Marchi [HTML_REMOVED]
Lucas started to work with Linux at University of Sao Paulo while doing his undergraduate course in computer engineering. He completed his master's degree at Politecnico di Milano in 2009. His research focused on optimizations to the real-time Linux scheduler on multi-core architectures. In 2010, Lucas joined ProFUSION Embedded Systems and continued to work with embedded systems where he got involved with several open source projects such as BlueZ, oFono, ConnMan, EFL, WebKit, systemd and others. Currently he's the lead developer of kmod which is the subject of this talk.

### 添付資料URL

- [Notes in a separate window](http://etherpad.osuosl.org/lpc-2012-lpc2012-boot-systemd-initramfs)（link）
- [Edit notes window](http://etherpad.osuosl.org/ep/pad/view/lpc-2012-lpc2012-boot-systemd-initramfs/latest)（link）
- [Systemd in the Initramfs – Harald Hoyer [slides]](https://blog.linuxplumbersconf.org/2012/wp-content/uploads/2012/09/2012-lpc-coreOS-systemd-initramfs-harald.pdf)（file）

<a id="session-53"></a>
## 67. An RCU-protected scalable trie for user-mode use

- セッション個別URL: https://blog.linuxplumbersconf.org/lpc-2012/meeting/53/lpc2012-scale-rcu-scalable-trie/index.html
- Track: Scaling
- 日時: 2012-08-31 11:55 - 12:40 PDT

### Description

In the past year, the RCU lock-free hash table hash been polished and made production-ready within the Userspace RCU project. It performs and scales really well for updates, key lookups and traversals in no particular key order, but does not fulfill ordered key traversal use-cases. This talk is presenting ongoing work on an ordered data structure that supports RCU reads: a cache-efficient, compact, fast, and scalable trie, inspired from Judy Arrays.


Topic Lead: Mathieu Desnoyers [HTML_REMOVED]
Mathieu Desnoyers main contributions are in the area of tracing (monitoring/performance analysis/debugging) and scalability, both at the kernel and user-space levels. He is maintainer of the LTTng project and the Userspace RCU library. He works in close collaboration with the telecommunication industry, many Linux distributions, and with customers developing hardware scaling from small embedded devices to large-deployment servers. He is CEO and Senior Software Architect at EfficiOS.

### 添付資料URL

- [Notes in a separate window](http://etherpad.osuosl.org/lpc-2012-lpc2012-scale-rcu-scalable-trie)（link）
- [Edit notes window](http://etherpad.osuosl.org/ep/pad/view/lpc-2012-lpc2012-scale-rcu-scalable-trie/latest)（link）
- [RCU Judy Arrays – Mathieu Desnoyers [slides]](https://blog.linuxplumbersconf.org/2012/wp-content/uploads/2012/09/2012-lpc-scaling-judy-array-desnoyers.pdf)（file）

<a id="session-88"></a>
## 68. Systemd for the User Session

- セッション個別URL: https://blog.linuxplumbersconf.org/lpc-2012/meeting/88/lpc2012-boot-systemd/index.html
- Track: Core OS
- 日時: 2012-08-31 14:10 - 14:55 PDT

### Description

It's a little known secret that systemd is extremely capable of starting, controlling and regulating more than just system services, but can easily start an entire Desktop UI. Not many people have sat down and implemented and worked out the problems of starting an X service, a few UI components, the session bus and DBus services for normal users with the mechanisms that systemd provides.


The benefits are obvious: Systemd provides excellent service monitoring and restarting capabilities, provides socket and DBus activation for relevant services, and overall improves desktop startup by allowing user services to start well before core services like Xorg or wayland start. In effect, we're saying goodbye to XDG autostart entirely, and getting back reliability and scalability.


We converted several desktop environments including Tizen's Mobile UI, Xfce4, Enlightenment and more to systemd user sessions. We "pop the hood" and take a look at the implications for startup, what's possible to further improve on the session startup and where we can do better.


Topic Lead: Auke KokAuke Kok [HTML_REMOVED]
Auke is a software engineer at Intel's Open Source Technology center, and has been attempting to make Linux boot faster since 2007. In 2008, he co-presented the "5-second boot" with Arjan van de Ven at the first LPC. Since then, Auke has worked on further improving the Linux Core OS start sequence, first for Moblin and later with MeeGo, where we made the first switch to systemd. Auke now works on Tizen, which will heavily integrate systemd in the Core OS.

### 添付資料URL

- [Notes in a separate window](http://etherpad.osuosl.org/lpc-2012-lpc2012-boot-systemd)（link）
- [Edit notes window](http://etherpad.osuosl.org/ep/pad/view/lpc-2012-lpc2012-boot-systemd/latest)（link）

<a id="session-135"></a>
## 69. UEFI Open Discussion

- セッション個別URL: https://blog.linuxplumbersconf.org/lpc-2012/meeting/135/lpc2012-uefi-open-discussion/index.html
- Track: 
- 日時: 2012-08-31 14:10 - 14:55 PDT

### Description

掲載なし

### 添付資料URL

- [Notes in a separate window](http://etherpad.osuosl.org/lpc-2012-lpc2012-uefi-open-discussion)（link）
- [Edit notes window](http://etherpad.osuosl.org/ep/pad/view/lpc-2012-lpc2012-uefi-open-discussion/latest)（link）

<a id="session-51"></a>
## 70. ASMP: Improving performance through dedication of OS tasks to specific processors

- セッション個別URL: https://blog.linuxplumbersconf.org/lpc-2012/meeting/51/lpc2012-scale-asymmetric-smp/index.html
- Track: Scaling
- 日時: 2012-08-31 14:10 - 14:55 PDT

### Description

Processors increase performance by adding cores instead of clock speed these days and therefore algorithms in general need to be able to work in a distributed way. In the kernel we have tried to go to more fine grained locking in order to increase performance. However, with that approach locking overhead grows if highly concurrent processing occurs in the Kernel. Synchronization becomes expensive. This session investigates how performance is affected if we do the opposite: Use coarse grained locking to perform large chunks of work on a single core instead which means that locking overhead is reduced and the processor caches are fully available for a significant piece of work.


Topic Lead: Christoph Lameter [HTML_REMOVED]
Christoph has been contributing to various core kernel subsystems over the years and created much of the NUMA infrastructure in the Linux Kernel when he worked as a Principal Engineer for Silicon Graphics on adapting Linux for use in Supercomputers. Scaling Linux is a focus of his work both in terms of performance for HPC (High Performance Computing) as well s for low latency in HFT (High Frequency Trading). Christoph maintains the slab allocators and the per cpu subsystem in the Linux Kernel and currently works as an architect for a leading HFT company.

### 添付資料URL

- [Notes in a separate window](http://etherpad.osuosl.org/lpc-2012-lpc2012-scale-asymmetric-smp)（link）
- [Edit notes window](http://etherpad.osuosl.org/ep/pad/view/lpc-2012-lpc2012-scale-asymmetric-smp/latest)（link）
- [Assymmetric SMP for Higher Performance – Christoph Lameter [slides]](https://blog.linuxplumbersconf.org/2012/wp-content/uploads/2012/09/2012-lpc-ASMP-lameter.pdf)（file）

<a id="session-71"></a>
## 71. Application of deadline scheduling for powersaving strategies

- セッション個別URL: https://blog.linuxplumbersconf.org/lpc-2012/meeting/71/lpc2012-sched-deadline/index.html
- Track: Scheduler
- 日時: 2012-08-31 15:05 - 15:50 PDT

### Description

Power consumption is an important issue in the design of real-time embedded and general purpose systems. How to reduce power consumption, enabling longer lifetime for battery powered systems, is however still an open problem. A real-time scheduling algorithm based on the deadline concept (like SCHED_DEADLINE) can be utilized to provide power-aware scheduling strategies.


In this talk I will first present work that has been done in the past on the subject. Then I will propose some simple ideas on how deadline scheduling could be effective in reducing power consumption.


Topic Lead: Juri Lelli

### 添付資料URL

- [Notes in a separate window](http://etherpad.osuosl.org/lpc-2012-lpc2012-sched-deadline)（link）
- [Edit notes window](http://etherpad.osuosl.org/ep/pad/view/lpc-2012-lpc2012-sched-deadline/latest)（link）
- [Application of deadline scheduling for powersaving strategies – Juri Lelli [slides]](https://blog.linuxplumbersconf.org/2012/wp-content/uploads/2012/09/2012-lpc-sched-deadline-power-lelli.pdf)（file）

<a id="session-4"></a>
## 72. LPC Closing Discussion

- セッション個別URL: https://blog.linuxplumbersconf.org/lpc-2012/meeting/4/lpc2012-plenary-closing/index.html
- Track: 
- 日時: 2012-08-31 16:00 - 17:00 PDT [PLENARY]

### Description

Open session for readout from track leads, lightning talks and general discussion

### 添付資料URL

- [Notes in a separate window](http://etherpad.osuosl.org/lpc-2012-lpc2012-plenary-closing)（link）
- [Edit notes window](http://etherpad.osuosl.org/ep/pad/view/lpc-2012-lpc2012-plenary-closing/latest)（link）
- [LPC 2012 closing with Microconferences summaries – Becky Bruce [slides](https://blog.linuxplumbersconf.org/2012/wp-content/uploads/2012/09/lpc_close.pdf)（file）

# 資料ページのみの項目（個別セッションとの対応未確定）

## Next Generation Interrupt Virtualization for KVM – Joerg Roedel

- セッション個別URL: 掲載なし／対応未確定
- Description: 未掲載
- Track: Virtualization

- [Next Generation Interrupt Virtualization for KVM – Joerg Roedel [slides]](https://blog.linuxplumbersconf.org/2012/wp-content/uploads/2012/09/2012-lpc-virt-interrupt-virt-kvm-roedel.pdf)

## Schedule uConf Overview – Vincent Guittot

- セッション個別URL: 掲載なし／対応未確定
- Description: 未掲載
- Track: Scheduler

- [Schedule uConf Overview – Vincent Guittot [slides]](https://blog.linuxplumbersconf.org/2012/wp-content/uploads/2012/08/lpc2012-sched-timer-workqueue.pdf)
- [Schedule uConf Overview – Vincent Guittot [etherpad]](http://etherpad.osuosl.org/ep/pad/view/lpc-2012-lpc2012-sched-timer-workqueue/latest)

## Introduction and Goals – Mark Gross

- セッション個別URL: 掲載なし／対応未確定
- Description: 未掲載
- Track: Constraints

- [Introduction and Goals – Mark Gross [slides]](https://blog.linuxplumbersconf.org/2012/wp-content/uploads/2012/09/2012-lpc-pmconstraints-welcome-goals-gross.pdf)
- [Introduction and Goals – Mark Gross [etherpad]](http://etherpad.osuosl.org/ep/pad/view/lpc-2012-lpc2012-cf-management-constraints/latest)

## Intel SoC DVFS – Mark Gross

- セッション個別URL: 掲載なし／対応未確定
- Description: 未掲載
- Track: Constraints

- [Intel SoC DVFS – Mark Gross [slides]](https://blog.linuxplumbersconf.org/2012/wp-content/uploads/2012/09/2012-lpc-pmconstraints-intel-soc-dvfs-gross.pdf)

## Power Management Constraints BOF – Mark Gross

- セッション個別URL: 掲載なし／対応未確定
- Description: 未掲載
- Track: Constraints

- [Power Management Constraints BOF – Mark Gross [etherpad]](http://etherpad.osuosl.org/ep/pad/view/lpc-2012-lpc2012-cf-pm-bof/latest)

## Real-Time Response on Multicore Systems – Paul McKenney

- セッション個別URL: 掲載なし／対応未確定
- Description: 未掲載
- Track: Scaling

- [Real-Time Response on Multicore Systems – Paul McKenney [slides]](https://blog.linuxplumbersconf.org/2012/wp-content/uploads/2012/09/2012-lpc-scaling-rt-response-multicore-mckenney.pdf)

## Depths of the Cloud, How Linux Networking needs to evolve – Peter Waskiewicz

- セッション個別URL: 掲載なし／対応未確定
- Description: 未掲載
- Track: Core OS

- [Depths of the Cloud, How Linux Networking needs to evolve – Peter Waskiewicz [slides]](https://blog.linuxplumbersconf.org/2012/wp-content/uploads/2012/09/2012-Plumbers-Cloud-Offloads-waskiewicz.pptx)
- [Depths of the Cloud, How Linux Networking needs to evolve – Peter Waskiewicz [etherpad]](http://etherpad.osuosl.org/ep/pad/view/lpc-2012-lpc2012-ref-depth-of-cloud/latest)

## Core Sessions Summary / Report Out

- セッション個別URL: 掲載なし／対応未確定
- Description: 未掲載
- Track: Kernel Summit Day

- [Core Sessions Summary / Report Out [Etherpad]](http://etherpad.osuosl.org/ep/pad/view/lpc-2012-core-sessions-summary-report-out/latest)

## Mini Summits Summary / Report Out

- セッション個別URL: 掲載なし／対応未確定
- Description: 未掲載
- Track: Kernel Summit Day

- [Mini Summits Summary / Report Out [etherpad]](http://summit.linuxplumbersconf.org/lpc-2012/meeting/157/mini-summit-report-out/)


# Wiki Topics 補足

## Audio（採用済み）

https://wiki.linuxplumbersconf.org/2012:audio

Table of Contents



Audio Microconference

Blueprint Name Prefix


Schedule


Discussion notes


Contact











Audio Microconference




Like the previous LPC it would be good to have an Audio MC.





Suggested topics:





 State of the embedded audio infrastructure (Lennart Poettering / Takashi Iwai / Mark Brown).



 PulseAudio on Android (Arun Raghavan)



 HD-audio jack retasking (David Henningsson / Takashi Iwai)



 Automatic QA / Bug tracking (David Henningsson / Takashi Iwai)



 Exposing audio path/routing information to the application layer (Mark Brown)



 Representing DSP in ASoC (Vinod Koul/ Pierre-louis Bossart / Liam Girdwood)



 Time alignment in Linux audio stack (Pierre-Louis Bossart)



 ALSA channel-mapping API (Takashi Iwai)







Blueprint Name Prefix






When submitting a proposal for this track, use the prefix “lpc2012-audio-” for the “Name” field.






Schedule






The schedule of the 2012 Audio Plumbers Micro Conference was as follows. Note presentation slides can be found on the Plumbers page by following the links to the abstracts:




 Session 1 - Presenter 1



 Session 2 - Presenter 2







Discussion notes






This is a good place to record notes from your session.  All too often, if notes were not written down, the session might as well not have happened.






Contact






Proposal added by Mark Brown broonie@opensource.wolfsonmicro.com, Takashi Iwai tiwai@suse.de

### 添付資料URL

掲載なし

## Constraint-Framework（採用済み）

https://wiki.linuxplumbersconf.org/2012:constraint-framework

Table of Contents



Microconference Constraint-Framework

Blueprint Name Prefix


submitted proposals and interested collaborators


Requirements


Schedule


Discussion notes


Contacts











Microconference Constraint-Framework




The Linux Plumbers 2012 Microconference - Constraint Framework track focuses on the identification of useful abstractions and possible designs of extensions to PM_QOS to deal with new constraint classes and operational limits to subsystem performance. 





From a high level pm-constraints is a generalisation of pm-qos to include                                                                                    
limiting performance as well as its current limiting of device                                                                                               
throttling.                                                                                                                                                  





As performance limiting is typically used for any of the following:                                                                                    




 staying within thermal operational envelopes                                                                                                              



 avoiding peak current                                                                                                                                     



 extending battery life in active use cases                                                                                                              






Anyone working in any of these areas or pm-qos applications are encouraged to                                                                                      
participate in this micro-conference.                                                                                                                        





The micro-conference will be organised into extract the following 2 things from the participants:                                                                                                           




 problem statements with specific examples where constraining the performance or throttling is needed.                                                                                                        



 high level design examples or brain storming on implementation and interfaces.                                                                                                                         







Many developers of software stacks for SoC's are finding themselves needing to extend pm_qos to add new qos_classes for one-off boards or products.  As pm_qos constraint classes get exposed to user mode, we need to make sure the abstractions we expose are portable across different SOC's, boards and ISA's.  This is a high bar.  Because of this we need some effort put toward identifying such constraint classes and we need to consider enabling kernel only constraint class extensions for one-off platform tweaks.





Mark Gross, initial writer of pm_qos, would like to lead this microconf.   






Blueprint Name Prefix






When submitting a proposal for this track, use the prefix “lpc2012-cf-” for the “Name” field.






submitted proposals and interested collaborators




 PM Constraints for Tegra - Antti P Miettinen 



 PM Constraints for OMAP - Valentin, Eduardo



 A New Model for the System and Devices Latency - Jean Pihet



 Amit Kucheria



 Power vs. Performance - Sundar Iyer



 PM With a Co-processor - Vaibhav Bedia



 Priority Based PMQoS Parameters - Illyas Mansoor







Additional participants and presentation proposals are very welcome subject to the constraints of the LPC planning folks.





As I review the talks I may ask for more focus on problem definitions / examples / use cases where constraints are needed and how the are used in your specific devices.  If some topics are too similar I may request the respective parties to collaborate to consolidate talks or differentiate from each other a little.  (TBD)






Requirements





SHOULD NOT OVERLAP WITH FOLLOWING MICROCONF AREAS/TALKS:





 Power-Mangement







Schedule




 PM Constraints for Tegra - Antti P Miettinen 



 PM Constraints for OMAP - Valentin, Eduardo



 A New Model for the System and Devices Latency - Jean Pihet



 Power vs. Performance - Sundar Iyer



 PM With a Co-processor - Vaibhav Bedia



 Priority Based PMQoS Parameters - Illyas Mansoor







If each sticks to the requested 20 min format then we are looking at 2hrs just to cover the presentations leaving 30 min to discuss.  





We should to plan to hang out and have a working session to hash out some implementation ideas outside the micro conf after everyone gets a chance to express their problems and ideas.  (maybe on a following day to give me a chance to document the discussions)





The expected output is to have a documented set of examples where pm constraints are needed and/or used with a representative set of interface and implementation requirements derived from the presentations and discussion.  From this I hope a good implementation will follow naturally that most will be happy with.






Discussion notes






This is a good place to record notes from your session.  All too often, if notes were not written down, the session might as well not have happened.






Contacts




 Mark Gross mark.gross@intel.com or markgross@thegnar.org

### 添付資料URL

掲載なし

## Containers（採用済み）

https://wiki.linuxplumbersconf.org/2012:containers

Table of Contents



Microconference on Containers

Blueprint Name Prefix


Topic


Contact











Microconference on Containers




The Linux Plumbers 2012 Microconference - Containers track focuses on Linux Containers and related technologies: namespaces, cgroups, resource management, checkpoint-restore etc. There are a few active projects that encompass virtualization, and this forum will be available for developers to meet and collaborate.





The structure will be similar to what was followed the previous year: http://www.linuxplumbersconf.org/2011/ocw/events/LPC2011MC/tracks/105






Blueprint Name Prefix






When submitting a proposal for this track, use the prefix “lpc2012-cont-” for the “Name” field.







Topic






Topics are the following:





 ploop container-in-a-file technology – Maxim Patlasov



 CRIU – Kir Kolyshkin



 Memory cgroup naturalization patches status – Johannes Weiner



 Kernel memory limitation – Glauber Costa



 /proc Virtualization – Glauber Costa



 Time Virtualization – Daniel Lezcano



 syslog Virtualization – Serge Hallyn



 State of cgroups – Tejun Heo



 Building Application Sandboxes on top of LXC and KVM with libvirt – Daniel Berrange



 cgroup network controllers (cls, netprio) – Daniel Wagner







Contact






Proposal added by Kir Kolyshkin kir@openvz.org

### 添付資料URL

掲載なし

## Core OS（採用済み）

https://wiki.linuxplumbersconf.org/2012:boot_and_base_os

Table of Contents



Core OS

Blueprint Name Prefix


Schedule


Discussion notes


Contact











Core OS




The Linux Plumbers 2012 Core OS track is focusing on everything that allows userspace to boot and to continue running. We want to focus on the most basic, central building blocks of our OSes: the stuff that sits on top the kernel and below the applications and glues everything together, more specifically: the init system, device management, system startup, initial ram disks, and everything else that is necessary to get userspace running and make sure it continues running. This is supposed to be the successor for last years “Boot & Init” track, with a slightly broader topic, acknowledging that just starting the system is seldom enough, what also matters is keeping it running (and even shutting it down, too).





Out of focus for this track is everything that covers particular subsystems, if those subsystems are not a crucial part of the OS. This microconference has been approved for a double track.






Blueprint Name Prefix






When submitting a proposal for this track, use the prefix “lpc2012-boot-” for the “Name” field.






Schedule






Proposed Schedule for the first slot of 2.5h:





Petitboot - A kexec based bootloader - Geoff Levand





Peace, Love, and Unification in /boot - Harald Hoyer





Systemd in the Initrd - Harald Hoyer





Lennart Poettering, Kay Sievers: “The Core OS”





Systemd for the User Session - Auke Kok





Proposed Schedule for the second slot of 2.5h:





The 0.5 second software update - Arjan van de Ven: ”





Atomic upgrades, booting, and package systems - Colin Walters





From libabc to libkmod: designing core libraries - Lucas De Marchi





The Core OS Wishlist - Lennart Poettering, Kay Sievers






Discussion notes






This is a good place to record notes from your session.  All too often, if notes were not written down, the session might as well not have happened.






Contact






Proposal added by Lennart Poettering lennart@poettering.net, Kay Sievers kay@vrfy.org

### 添付資料URL

掲載なし

## File and Storage Systems（採用済み）

https://wiki.linuxplumbersconf.org/2012:file_and_storage_systems

Table of Contents



Microconference on File and Storage Systems

Blueprint Name Prefix


Topic


Schedule


Contact











Microconference on File and Storage Systems




The Linux Plumbers 2012 Microconference - The File and Storage microconference is going to be a double session so we can fit a wide range of topics in. Anything is fair game - traditional or new file and storage systems, configuration and management, user space file systems, network file systems and anything else that can store your data (or lose it when done badly!).






Blueprint Name Prefix






When submitting a proposal for this track, use the prefix “lpc2012-lsf-” for the “Name” field.






Topic






Possible topics are the following:





 Challenges in SSD devices



 New types of storage



 Local file systems



 Network file systems



 User space file systems



 New device mapper or software RAID implementations



 Erasure encoding for data



 IO scheduling



 Support for virtualization







Schedule






Morning Sessions Focused on Management & Configuration:




 System Storage Manager: A single tool to manage your storage - Lukas Czerner



 Storage Management API's - Tony Asleson



 Anaconda, Snapper and booting - Peter Jones, Matthias G. Eckermann, David Cantrell






Afternoon Session on File System Topics:




 Local File Systems - Chris Mason & Ric Wheeler



 Hinting vs Heuristics: Plumbing I/O Cache Hints Through the Linux Storage Stack - Dan Williams



 NFS advanced projects: Jeff Layton, Bruce Fields, Chuck Lever







Contact






Proposal added by Ric Wheeler rwheeler@redhat.com and Chris Mason chris.mason@fusionio.com

### 添付資料URL

掲載なし

## Networking（採用済み）

https://wiki.linuxplumbersconf.org/2012:networking-bufferbloat

Table of Contents



Networking

Blueprint Name Prefix


Submissions


Schedule


Contact











Networking




In this track we want to discuss topics related to bufferbloat and networking performance including latency reduction, congestion control, queue management, TCP algorithm enhancements, and related topics. 






Blueprint Name Prefix






When submitting a proposal for this track, use the prefix “lpc2012-net-” for the “Name” field.






Submissions






Submissions to the micro conference:




 Byte queue limits revisited - Tomas Hruby



 Linux traffic classification and shaping - John Fastabend



 CoDel and FQ CoDel - Eric Dumazet



 Data Direct I/O - John Ronciak



 open-vswitch - Shyam Iyer



 Congestion manager for TCP - Yuchung Cheng



 TCP Loss Probe - Nandita Dukkipati



 Multipath TCP - Christoph Paasch



 HW ratelimiting - Jesse Brandeburg







Schedule





The schedule of the 2012 networking and bufferbloat Plumbers Micro Conference will be posted…





Notes for Networking MC
Linux Plumbers Conference 2012





CoDel and FQ CoDel



Eric Dumazet



- Queuing is needed and necessary
- What size of queue do we want
- What about controlling delays
- Idea is to control delay in a given interval
- Want a simple control loop
- Codel works great, numbers with fq_codel are great
- Question: Should we replace pfifo_fast with Codel?
- Noted that Codel does not burn too much CPU, shows we don’t need to be stuck with fifos forever
- Question: Can we pull wireless complexity into the host (wireless device implement complex somewhat arcane packet scheduling on their own)





Byte Queue Limits revisited



Tomas Hruby



- Motivation for BQL: limit queuing in the NIC
- Set right limit in the NIC
- Based on bytes, not number of packets
- Dynamic and adaptive algorithm
- Completion event needs to be periodic
- Two conditions to increase limit, based on history
- Decreasing limiting, avoid hysteresis
- BQL performance much better than default configuration, HW priority still better in some cases
- Issue: Some cliffs where we adjust down to much, slack algorithm over estimating
- Periodicity required




 shorter intervals look like congestion→slack



 Longer intervals looks like the NIC can dequeue more→ limit too low






- Retiring when exiting NAPI may lead to excessively long interval
- Limit based on load and timing
- Possibility of using NIC generated timestamps to make algorithm more precise 





Data Direct I/O



John Ronciak



- Idea to place RX data directly in cache
- I/OAT had DCA, but that required specialized HW
- 10G Ethernet is really driving this
- Benefits are lower power consumption, lower latency
- Have ran workloads with significant cache pressure
- Question: How well does this work with multiple sockets
- Based on Non-Uniform I/O Architecture
- Going across socket, losing all the benefit (working out the details to deal with this)




 Forcing affinity






- Don’t use user-space IRQ balancer




 Potentially use a new kernel mode IRQ balancer






- No relationship to Inifiniband, but it is somewhat similar





Ethernet Audio/Video Bridging (AVB)



Eric Mann



- Proof-of-Concept Audio Video Bridging device using IEEE 802.1Qav
- Solution for streaming media
- Demo showing fundamental operation
- Audio latency is sound propagation (ears do echo cancellation at about 10 msecs.)
- Synchronization between audio and video (time synchronization)
- Auto companies want to use AVB to reduce cost
- More complicated than synchronized multicast
- Stream reservation protocols (802.1Qat protocols)
- 802.1Qav: Hardware-based traffic shapers (need to be very precise)
- 802.1AS: TIme synchronization
- Streams (video, audio) separated into classes
- Hardware implements transmission selection scheme
- Gap 1 in Linux: Want to say transmit this packet at time X (not just get a timestamp)
- Use cmsg for timed TX
- Gap 2 in Linux: ethtool options to display configure AVB state





TCP Congestion manager



Yuchung Cheng



- Everybody familiar with slow start
- nytimes.com: Downloading a page, 53 conns, 195 reqs, 2MB
- TCP used for web, very different from bulk transfer– it is bursty
- Every TCP (re)measures the network
- Server side congestion manager (some already implemented), cache certain parameters for connections
- Server side approach behind low balancer loses information.
- Client IP might imply different paths, client IPs can change because of NAT
- Client could be hub of its connections
- Great snipe - client knows what’s important, can do prioritization
- For instance, could set initial cwnd as it wants
- Aggregate window division (macroflow_cwnd/active_flows)
- Congestion signals on receiver, receiver can give server a cwnd
- Implemented on Android, ~1300 LOC
- Two congestion control algorithms being experimented
- Graphs should that Great Snipe benefits from caching congestion state
- Great Snipe helped nytimes download only a little bit.  Why?  Browser didn’t use received data because it’s waiting for more important things.  Need to work with browsers on this.
- This is still experimental
- Middle box interactions are a headache





TCP Loss Probe (TLP)



Nandita Dukkipati



- Talking about 10% of connections that experience losses
- TLP: Convert RTOs to fast recovery
- TImeout recovery is 10-100x longer compared to fast recovery
- Tail losses are the majority
- Retransmit last segment in 2 RTT to trigger SACK information and fast recovery
- Loss probe kicks in when sender has nothing more to send.
- Probe forces SACK and recovery
- TLP give 6% avg. latency reduction in HTTP experiments





TCP Forward Error Correction



Nandita Dukkipati



- Want zero RTT loss recovery
- Need significant impact on tail latency
- Want low cost and simple design
- Components: Encoding scheme, middlebox issues, FEC integration into TCP
- Encoding uses simple XOR based encoding
- Use interleaved FEC to protect against back to back losses
- Done on MSS sized blocks (not packet boundaries)
- Assuming at most 2 back to back losses in a train, this allows recovering over 60% of loss patterns
- Want receiver to know when it saw a lost, but recovered it.  Mechanism very similar to ECN.
- Middle boxes: Potentially can muck with fields options, dislike not seeing all packets on a connection
- Experimenting with FEC, pursue IETF standardization





Multipath TCP



Christoph Paasch



- Networks are becoming multi-path
- Wireless: Increase performance by using wifi and 3G at same time
- TCP does not support this
- Data center: same issues, want to use multiple paths for load balancing
- Solution of multiple path TCP
- Work over existing Internet
- Middleboxes blocks packets for connections it doesn’t understand
- Need to use separate TCP connections
- MP_JOIN option
- Each subflow has own cwnd and sequence number space
- Use a separate sequence number space
- Additional sequence number is in TCP option space
- Subflows can be created/destroyed dynamically
- 10K LOC in TCP stack
- Intercepts in common TCP functions
- Two level hierarchy of sockets
- Challenges, sequence numbers increase size of skb
- Want to be transparent to userspace
- Question: Handling socket options, how to handle this?  Many functions that would potentially be affected by changes
- Complex patch, need to split into one 
- Note: Congestion sharing principle is common with congestion manager, maybe some common elements





Linux Traffic classification and Shaping



John Fastabend



- Talking about multiQ
- Many queues available
- Possibly consolidate with open-vswitch code
- HW Qos, coming, SW QoS is not great
- No way to map flows to qdisc
- Idea: Map skb to qdisc, implement HW QoS for queues
- mqprio uses skb→priority to steer packets to queues
- Ability to map flows to queues, different qdiscs
- Map to HW queues
- Queues that are multiQ aware are much better
- Question: do we need to map by more than skb→priority
- Hard to use qdiscs with global state
- Question: How can we rectify this with XPS
- Question:Can this kill select queue?





Interface to hardware transmit rate limiting



Jesse Brandeburg



- Idea: put rate limit into a sysfs variable
- One rate limit value per queue
- Do we need more hierarchy
- Note: Use case that applications/VMs are rate limited, not necessarily 
- Question: is putting more in sysfs right approach
- Question: can we define classes which describe QoS properties, and then link queues to these classes





Harmonizing Multiqueue, Vmdq, virtio-net, macvtap with open-vswitch



Shyam Iyer



- Optimized traffic flow via e-switch
- Various use cases
- macvtap use cases that improve performance
- Devices only seem to be doing L2 in embedded switch
- Question: How to do QoS in this?  
- Reference: linux-kvm,org/page/Multiqueue
- Rate limit per queue, use rate limit
- Openvswitch used tc for tagging
- Different flow tables for tables
- Not all adapters are multiqueue aware
- macvtap is good because it simplifies interface to lower device
- Use case of having multiple MAC addresses in a VM






Contact






Proposal added by therbert@google.com

### 添付資料URL

掲載なし

## Real-Time（採用済み）

https://wiki.linuxplumbersconf.org/2012:real-time

Table of Contents



Microconference Real-Time

Blueprint Name Prefix


Requirements


Submissions for this track


Schedule


Discussion notes


Contacts











Microconference Real-Time




The Linux Plumbers 2011 Microconference - Real-Time track focuses on general Real-Time issues and related technologies.  





Thomas Gleixner, maintainer of the Real-Time patchset and many other things, has agreed to be the runner.  As the key technical person in this area, he'll be the best choice to select talks and organize the Micro-Conference as the subject area needs. 






Blueprint Name Prefix






When submitting a proposal for this track, use the prefix “lpc2012-rt-” for the “Name” field.






Requirements





SHOULD NOT OVERLAP WITH FOLLOWING MICROCONF AREAS/TALKS:





 TRACING



 DEBUGGING







Probably constrained to Friday morning (but not sure, this is subject to change until the official schedule is announced). 






Submissions for this track




 Getting RCU further out of the way - Paul McKenney



 Handling the thorns of mainline - Steven Rostedt



 SCHED_DEADLINE: a new deadline based realtime scheduling policy - Peter Zijlstra



 Review of the stable realtime release process - Frank Rowand



 Lessons We Learned: Common mistakes while testing applications with the RT kernel) - Luis Claudio Goncalves



 State of RT/Thomas's thoughts - Thomas Gleixner (if Thomas is amicable ;))







Schedule






Will be put up here once we have it. 






Discussion notes






This is a good place to record notes from your session.  All too often, if notes were not written down, the session might as well not have happened.






Contacts




 Proposal added by Nivedita Singhvi <niv@us.ibm.com, niveditasinghvi@gmail.com>



 Runner: Thomas Gleixner tglx@linutronix.de

### 添付資料URL

掲載なし

## Scaling（採用済み）

https://wiki.linuxplumbersconf.org/2012:scaling

Table of Contents



Microconference-Scaling

Blueprint Name Prefix


Requirements


Schedule


Discussion notes


Contact











Microconference-Scaling




The Linux Plumbers 2012 Microconference - Scaling track focuses on scalability, both upwards and downwards as well as up and down the stack.  There are quite a few active projects that are working to enhance performance and scalability both in the Linux kernel and in user-space projects.  In fact, one of the purposes of this forum is for developers from different projects to meet and collaborate.  After all, for the user to see good performance and scalability, all relevant projects must perform and scale well.





The structure will be similar to what was followed the previous year (2011): about 30 minutes per subject with discussion.






Blueprint Name Prefix






When submitting a proposal for this track, use the prefix “lpc2012-scale-” for the “Name” field.






Requirements






IMPORTANT: This micro-conference should not overlap with Tracing, nor Real-Time micro-conferences.  Probably must happen Friday afternoon.






Schedule






The schedule of the 2012 Microconference-Scaling and Containers Plumbers Micro Conference was as follows. Note that the presentation slides can be found by following the links to the abstracts:




 ASMP: Improving performance through dedication of OS tasks to specific processors - Christoph Lameter



 Concurrency Kit: Towards accessible non-blocking technology for C - Samy Bahra



 RCU Judy Arrays: cache-efficient, compact, fast and scalable trie - Mathieu Desnoyers



 Real-time response on large systems: predictions vs. reality - Paul E. McKenney







Discussion notes






This is a good place to record notes from your session.  All too often, if notes were not written down, the session might as well not have happened.






Contact




 Paul E. McKenney paulmck@linux.vnet.ibm.com



 Mathieu Desnoyers mathieu.desnoyers@efficios.com

### 添付資料URL

掲載なし

## Scheduler（採用済み）

https://wiki.linuxplumbersconf.org/2012:scheduler

Table of Contents



Microconference-Scheduler

Blueprint Name Prefix


Schedule


Discussion notes


Contact











Microconference-Scheduler




The Linux Plumbers 2011 Microconference - Scheduler track is focusing on the on-going modification in the scheduler and all links that should be updated or created with other framework in order to improve the scheduling decision.






Blueprint Name Prefix






When submitting a proposal for this track, use the prefix “lpc2012-sched-” for the “Name” field.






Schedule






The schedule of the 2012 Microconference-scheduler Plumbers Micro Conference is not finalized yet. Nevertheless, a drafts version is available on the  LPC2012 schedule page





Note: presentation slides can be found on the Plumbers page by following the links to the abstracts.





Current subjects:





  Application of Deadline scheduler for powersaving strategy (Juri Lelli)



  Task placement for asymmetric cores (Morten Rasmussen)



  Scheduling and the big.LITTLE Architecture (Paul McKenney)



  cpuquiet: Dynamic CPU core management (Peter De Schrijver)



  Interaction with timer and workqueue (Vincent Guittot)



  Sharing information with the scheduler (Vincent Guittot)






Additional potential topics (subject to interest and availability):




 rough proposal to enable power saving in scheduler







Discussion notes






This is a good place to record notes from your session.  All too often, if notes were not written down, the session might as well not have happened.






Contact






Proposal added by Vincent Guittot vincent.guittot@linaro.org and Amit Kucheria amit.kucheria@linaro.org

### 添付資料URL

掲載なし

## Tracing（採用済み）

https://wiki.linuxplumbersconf.org/2012:tracing

Microconference-Tracing




Due to the high interest shown in this track, it was converted into an all day Plumber Tracing Summit and will be held Thursday August 30th, 2012, in San Diego. Please see (http://tracingsummit.org/wiki/TracingSummit2012) for further info.





This session should not conflict with Real-Time nor Scaling micro-conferences.

### 添付資料URL

掲載なし

## Virtualization（採用済み）

https://wiki.linuxplumbersconf.org/2012:virtualization

Table of Contents



Microconference - Virtualization

Blueprint Name Prefix


Submissions

Submissions for the virt track


Related submissions for the refereed track


Related submissions in other tracks






Schedule


Discussion notes

Virtualization Security Discussion - Paul Moore


Storage Virtualization for KVM: Putting the pieces together - Bharata Rao


Next generation interrupt virtualization for KVM - Joerg Roedel


Reviewing Unused and New Features for Interrupt/APIC Virtualization - Jun Nakajima


CoLo - Coarse-grained Lock-stepping VM for non-stop service - Will Auld


NUMA - Dario Faggioli, Andrea Arcangeli


One balloon for all - towards unified balloon driver - Daniel Kiper


ARM - Marc Zyngier, Stefano Stabellini


VFIO - Are we there yet? - Alex Williamson


Semiassignment: best of both worlds - Alex Graf


KVM performance: vhost scalability -  John Fastabend


Network overlays - Vivek Kashyap


Lightning talks






Contact











Microconference - Virtualization




The Linux Plumbers 2012 Microconference - Virtualization track focuses on general Linux Virt and related technologies. There are quite a few active projects that encompass virtualization, and this forum will be available for developers to meet and collaborate.





The structure will be similar to what was followed the previous two years, 2011 and 2010: about 30 minutes per subject with discussion. This microconference has been approved for a double track.






Blueprint Name Prefix






When submitting a proposal for this track, use the prefix “lpc2012-virt-” for the “Name” field.  Submit proposals at https://blueprints.launchpad.net/sprints/lpc-2012






Submissions






Submissions for the virt track




 Security & Storage

 Virtualization Security Discussion - Paul Moore



 Storage virtualization for KVM: Putting the pieces together - Bharata B Rao, Deepak C Shetty, M Mohan Kumar, Balamurugan Aramugam, Shireesh Anjal









 x86

 Next Generation Interrupt Virtualization for KVM - Joerg Roedel



 COLO: COarse-grain LOck-stepping Virtual Machines for Non-stop Service - Eddie Dong



 Reviewing Unused and Up-coming Hardware Virtualization Features - Jun Nakajima









 MM

 NUMA and Virtualization, the case of Xen - Dario Faggioli



 Automatic NUMA CPU scheduling and memory migration - Andrea Arcangeli



 One balloon for all - towards unified baloon driver - Daniel Kiper









 ARM

 Xen on Cortex A15 - Stefano Stabellini



 Porting KVM to the ARM architecture - Marc Zyngier









 Networking

 VFIO - are we there yet? - Alex Williamson



 KVM Network performance and scalability - John Fastabend



 Enabling overlays for Network Scaling - Vivek Kashyap



 Marrying live migration and device assignment -Alex Graf









 Lightning Talks

 QEMU disaggregation - Stefano Stabellini



 Xenner - Alex Graf











Related submissions for the refereed track




 improved disk image handling - Eric Blake



 Depths of the Cloud: How Linux networking needs to evolve - PJ Waskiewicz, Shannon Nelson



 Improving KVM to Support Very High and Scalable Storage I/O Rates - Khoa Huynh



 Tying it all together Linux networking, virtualization, and IEEE standards - John Fastabend



 Policies for transcending Linux memory efficiency with zcache - Dan Magenheimer







Related submissions in other tracks




 Network: Harmonizing Multiqueue, Vmdq, virtio-net, macvtap with open-vswitch - Shyam Iyer







Schedule






The schedule is being continuously updated.  The current schedule can be accessed from http://summit.linuxplumbersconf.org/lpc-2012/ The schedule for the tracks for the virt microconf are accessible at http://summit.linuxplumbersconf.org/lpc-2012/track/lpc2012-virt/






Discussion notes






Virtualization Security Discussion - Paul Moore





Slides





 threats to virt system



 3 things to worry about

 attacks from host - has full access to guest



 attacks from other guests on the host

 break out from guest, attack host and other guests (esp. in multi-tenant situations)







 attacks from the network

 traditional mitigation: separate networks, physical devices, etc.













 protecting guest against malicious hosts



 host has full access to guest resources



 host has ability to modify guest stuff at will; w/o guest knowing it





 how to solve?

 no real concrete solutions that are perfect



 guest needs to be able to verify / attest host state

 root of trust







 guests need to be able to protect data when offline

 (discussion) encrypt guests – internally as well as qcow2 encryption













 decompose host

 (discussion) don't run services as root









 protect hosts against malicious guests



 just assume all guests are going to be malicious



 more than just qemu isolation





 how?

 multi-layer security



 restrict guest access to guest-owned resources



 h/w passthrough – make sure devices are tied to those guests



 limit avl. kernel interfaces

 system calls, netlink, /proc, /sys, etc.







 if a guest doesn't need an access, don't give it!









 libvirt+svirt

 MAC in host to provide separation, etc.



 addresses netlink, /proc, /sys









 (discussion) aside: how to use libvirt w/o GUI?

 there is 'virsh', documentation can be improved.









 seccomp

 allows to selectively turn off syscalls; addresses syscalls in list above.









 priv separation

 libvirt handles n/w, file desc. passing, etc.









 protecting guest against hostile networks



 guests vulnerable directly and indirectly



 direct: buggy apache



 indirect: host attacked



 qos issue on loaded systems





 host and guest firewalls can solve a lot of problems





 extend guest separation across network

 network virt – for multi-tenant solutions



 guest ipsec and vpn services on host









 (discussion) blue pill vulnerability – how to mitigate?

 lot of work being done by trusted computing group - TPM



 maintain a solid root of trust







 somebody pulling rug beneath you, happens even after boot



 you'll need h/w support?

 yes, TPM



 UEFI, secure boot







 what about post-boot security threats?

 let's say booted securely.  other mechanisms you can enable - IMA – extends root of trust higher.  signed hashes, binaries.



 unfortunately, details beyond scope for a 20-min talk











Storage Virtualization for KVM: Putting the pieces together - Bharata Rao





Slides





 Different aspects of storage mgmt with kvm

 mainly using glusterfs as storage backend



 integrating with libvirt, vdsm









 problems

 multiple choices for fs and virt mgmt

 libvirt, ovirt, etc.











 not many fs'es are virt-ready

 virt features like snapshots, thin-provisioning, cloning not present as part of fs



 some things done in qemu: snapshot, block mig, img fmt handling are better handled outside







 storage integration

 storage device vendor doesn't have well-defined interfaces









 gluster has potential: leverage its capabilities, and solve many of these problems.





 intro on glusterfs

 userspace distributed fs



 aggregates storage resources from multiple nodes and presents a unified fs namespace









 glusterfs features

 replication, striping, distribution, geo-replication/sync, online volume extension









 (discussion) why gluster vs ceph?

 gluster is modular; pluggable, flexible.



 keeps storage stack clean.  only keep those things active which are needed



 gluster doesn't have metadata.

 unfortunately, gluster people not around to answer these questions.













 by having backend in qemu, qemu can already leverage glusterfs features

 (discussion) there is a rados spec in qemu already

 yes, this is one more protocol that qemu will now support













 glusterfs is modular: details

 translators: convert requests from users into requests for storage



 open/read/write calls percolate down the translator stack

 any plugin can be introduced in the stack













 current status: enablement work to integrate gluster-qemu

 start by writing a block driver in qemu to support gluster natively



 add block device support in gluster itself via block device translator









 (discussion) do all features of gluster work with these block devices?

 not yet, early stages.  Hope is all features will eventually work.









 interesting use-case: replace qemu block dev with gluster translators





 would you have to re-write qcow2?

 don't need to, many of qcow2 features already exist in glusterfs common code









 slide showing perf numbers





 future

 is it possible to export LUNs to gluster clients?



 creating a VM image means creating a LUN



 exploit per-vm storage offload  – all this using a block device translator



 export LUNs as files; also export files as LUNs.









 (discussion) why not use raw files directly instead of adding all this overhead? This looks like a perf disaster (ip network, qemu block layer, etc.) – combination of stuff increasing latency, etc.

 all of this is an experimentation, to go where we haven't yet thought about – explore new opportunities.  this is just the initial work; more interesting stuff can be build upon this platform later.









 libvirt, ovirt, vdsm support for glusterfs added – details in slides





 (discussion) storage array integration (slide) - question

 way vendors could integrate san storage into virt stack.



 we should have capability to use array-assisted features to create lun.



 from ovirt/vdsm/libvirt/etc. 









 (discussion) we already have this in scsi.  why add another layer?  why in userspace?

 difficult, as per current understanding: send commands directly to storage: fast copy from lun-to-lun, etc., not via scsi T10 extentions.



 these are out-of-band mechanisms, in mgmt path, not data path.









 why would someone want to do that via python etc.?







Next generation interrupt virtualization for KVM - Joerg Roedel





Slides





 presenting new h/w tech today that accelerates guests





 current state

 kvm emulates local apic and io-apic



 all reads/writes intercepted



 interrupts can be queued from user or kernel



 ipi costs high









 h/w support

 limited



 tpr is accelerated by using cr8 register



 only used by 64 bit guests









 shiny new feature: avic





 avic is designed to accelrate most common interrupt system features

 ipi



 tpr



 interurpts from assigned devs









 ideally none of those require intercept anymore





 avic virtualizes apic for each vcpu

 uses an apic backing page



 guest physical apic id table, guest logical apic id table



 no x2apic in first version









 guest vapic backing page

 store local apic contents for one vcpu



 writes to accelerated won't intercept



 to non-accelerated cause intercepts









 accelerated:

 tpr



 EOI



 ICR low



 ICR high









 physical apic id table

 maps guest physical apic id to host vapic pages



 (discussion) what if guest cpu is not running

 will be covered later













 table maintained by kvm





 logical apic id table

 maps guest logical apic ids to guest physical apic ids

 indexed by guest logical apic id













 doorbell mechanism

 used to signal avic interrupts between physcial cpus

 src pcpu figures out physical apic id of the dest.



 when dest. vcpu is running, it sends doorbell interrupt to physical cpu













 iommu can also send doorbell messages to pcpus

 iommu checks if vcpu is running too



 for not running vcpus, it sends an event log entry









 imp. for assigned devices





 msr can also be used to issue doorbell messages by hand – for emulated devices





 running and not running vcpus

 doorbell only when vcpu running









 if target pcpu is not running, sw notified about a new interrupt for this vcpu





 support in iommu

 iommu necessary for avic-enabled device pass-through



 (discussion) kvm has to maintain? enable/disable on sched-in/sched-out









 support can be mostly be implemented in kvm-amd module

 some outside support in apic emulation



 some changes to lapic emulation

 change layout



 kvm x86 core code will allocate vapic pages



 (discussion) instead of kvm_vcpu_kick(), just run doorbell













 vapic page needs to be mapped in nested page table

 likely requires changes to kvm softmmu code









 open question wrt device passthrough

 changes to vfio required

 ideally fully transparent to userspace















Reviewing Unused and New Features for Interrupt/APIC Virtualization - Jun Nakajima





Slides





 Intel is going to talk about a similar hardware feature





 intel: have a bitmap, and they decide whether to exit or not.



 amd: hardcoded.  apic timer counter, for example.





 q to intel:  do you have other things to talk about?

 yes, coming up later.









 paper on 'net showed perf improved from 5-6Gig/s to wire speed, using emulation of this tech.





 intel have numbers on their slides.





 they used sr-iov 10gbe; measured vmexit





 interrupt window: when hypervisor wants to inject interrupt, guest may not be running.  hyp. has to enter vm.  when guest is ready to receive interrupt, it comes back with vmexit.  problem: as you need to inject interrupt, more vmexits, guest becomes busier.  so: they wanted to eliminate them.

 read case: if you have something in advance (apic page), hyp can just point to that instead of this exit dance



 more than 50% exits are interrupt-related or apic related.









 new features for interrupt/apic virt

 reads are redirected to apic page



 writes: vmexit after write; not intercepted.  no need for emluation.









 virt-interrupt delivery

 extend tpr virt to other apic registers



 eoi - no need for vm exits (using new bitmap)

 this looks different from amd







 but for eoi behaviour, intel/amd can have common interface.









 intel/amd comparing their approaches / features / etc.

 most notably, intel have support for x2apic, not for iommu.  amd have support for iommu, not for x2apic.









 for apic page, approaches mostly similar.





 virt api can have common infra, but data structures are totally different.  intel spec will be avl. in a month or so (update: already available now).  amd spec shd be avl in a month too.





 they can remove interrupt window, meaning 10% optimization for 6 VM case





 net result

 eliminate 50% of vmexits



 optimization of 10% vmexits.









 intel also supports x2apic h/w.





 VMFUNC

 this can hide info from other vcpus



 secure channel between guest and host; can do whatever hypervisor wants.



 vcpu executes vmfunc instrucion in special thread









 usecases:

 allow hvm guests to share pages/info with hypervisor in secure fashion









 (discussion) why not just add to ept table





 (discussion) does intel's int. virt. has iommu component to?

 doesn't want to commit.











CoLo - Coarse-grained Lock-stepping VM for non-stop service - Will Auld





Slides





 non-stop service with VM replication

 client-server



 Compare and contrast with Ramus - Xen's solution

 xen: ramus

 buffers responses until checkpoint to secondary server completes (once per epic)



 resumes secondary only on failover



 failover at anytime







 xen: colo

 runs two VMs in parallel comparing their responses, checkpoints only on miscompare



 resumes after every checkpoint



 failover at anytime

















 CoLo runs VMs on primary and secondary at same time.

 both machines respond to requests; they check for similartiy. When they agree, one of the responses sent to client









 diff. between two models:

 ramus: assume machine states have to be same.  This is the reason to buffer responses until checkpoint has completed.



 in colo; no such req.  only requirement is request stream must be the same.









 CoLo non-stop service focus on server response, not internal machine state (since multiprocessor environment is inherently nondeterministic)





 there's heartbeat, checkpoint





 colo managers on both machines compare requests.

 when they're not same, CoLo does checkpoint.









 (discussion) why will response be same?

 int. machine state shouldn't matter for most responses.



 some exceptions, like tcp/ip timestamps.



 minor modifications to tcp/ip stacks

 coarse grain time stamp



 highly deterministic ack mechanism







 even then, state of machine is dissimilar.









 resume of machine on secondary node:

  another stumbling block.









 (slides) graph on optimizations





 how do you handle disk access?  network is easier – n/w stack resumes on failover.  if you don't do failover in a state where you know disk is in a consistent state, you can get corruption.

 Two solutions

 For NAS, do same compares as with responses (this can also trigger checkpoints).



 On local disks, buffer original state of changed pages, revert to original and them checkpoint with primary nodes disk writes included. This is equivalent to how the memory image is updated. (This was not described complete enough during the session).













 that sounds dangerous.  client may have acked data, etc.

 will have to look closer at this.  (More complete explanation above counters this)









 how often do you get mismatch?

 depends on workload.  some were like 300-400 packets of good packets, then a mismatch.







 during that, are you vulnerable to failure?

 no, can failover at any point.  internal state doesn't matter.  Both VMs, provide consistent request streams from their initial state and match responses up to the moment of failover.











NUMA - Dario Faggioli, Andrea Arcangeli






NUMA and Virtualization, the case of Xen - Dario Faggioli





Slides





 Intro to NUMA

 access costs to memory is different, based on which processor access it



 remote mem is slower









 in context of virt, want to avoid accessing remote memory





 what we used to have in xen

 on creation of VM, memory was allocated on all nodes









 to improve: automatic placement

 at vm1 creation time, pin vm1 to first node,



 at vm2 create time, pin vm2 to second node since node1 already has a vm pinned to it









 then they went ahead a bit, because pinning was inflexible

 inflexible



 lots of idle cpus and memories









 what they will have in xen 4.3

 node affinity

 instead of static cpu pinning, preference to run vms on specific cpus













 perf evaluation

 specjbb in 3 configs (details in slides)



 they get 13-17% improvements in 2vcpus in each vm









 open problems

 dynamic memory migration

 







 io numa

 take into consideration io devices







 guest numa

 if vm bigger than 1 node, should guest be aware?







 ballooning and sharing

 sharing could cause remote access



 ballooning causes local pressures







 inter-vm dependencies

 







 how to actually benchmark and evaluate perf to evaluate if they're improving











AutoNUMA - Andrea Arcangeli





Slides





 solving similar problem for Linux kernel



 implementation details avail in slides, will skip now





 components of autonuma design

 novel approach

 mem and cpu migration tried earlier using diff. approaches, optimistic about this approach.







 core design is to two novel ideas

 introduce numa hinting pagefaults

 works at thread-level, on thread locality







 false sharing / relation detection













 autonuma logic

 cpu follows memory



 memory in b/g slowly follows cpu



 actual migration is done by knuma_migrated

 all this is async and b/g, doesn't stall memory channels













 benchmarkings

 developed a new benchmark tool, autonuma-benchmark

 generic to measure alternative approaches too







 comparing to gravity measurement



 put all memory in single node

 then drop pinning



 then see how memory spreads by autonuma logic













 see slides for graphics on convergance





 perf numbers

 also includes comparison with alternative approach, sched numa.



 graphs show autonuma is better than schednuma, which is better than vanilla kernel









 criticism

 complex



 takes more memory

 takes 12 bytes per page, Andrea thinks it's reasonable.



 it's done to try to decrease risk of hitting slowdowns (is faster than vanilla already)







 stddev shows autonuma is pretty deterministic









 why is autonuma so important?

 even 2 sockets show differences and improvements.



 but 8 nodes really shows autonuma shines











Discussions




 looks like andrea focussing on 2 nodes / sockets, not more?  looks like it will have bad impact on bigger nodes

 points to graph showing 8 nodes



 on big nodes, distance is more.



 agrees autonuma doesn't worry about distances



 currently worries only about convergence



 distance will be taken as future optimisation



 same for Xen case

 access to 2 node h/w is easier







 as Andrea also mentioned, improvement on 2 node is lower bound; so improvements on bigger ones should be bigger too; don't expect to be worse









 not all apps just compute; they do io.  and they migrate to the right cpu to where the device is.

 are we moving memory to cpu, or cpu to device, etc… what should the heuristic be?

 1st step should be to get cpu and mem right – they matter the most.



 doing for kvm is great since it's in linux, and everyone gets the benefit.



 later, we might want to take other tunables into account.







 crazy things in enterprise world, like storage



 for high-perf networking, use tight binding, and then autonuma will not interfere.

 this already works.







 xen case is similar

 this is also something that's going to be workload-dependent, so custom configs/admin is needed.













 did you have a chance to test on AMD Magny-Cours (many more nodes)

 hasn't tried autonuma on specific h/w



 more nodes, better perf, since upstream is that much more worse.



 xen

 he did, and at least placement was better.



 more benchmarking is planned.













 suggestion: do you have a way to measure imbalance / number of accesses going to correct node

 to see if it's moving towards convergence, or not moving towards convergence, maybe via tracepoints



 essentially to analyse what the system is doing.



 exposing this data so it can be analysed.









 using printks right now for development, there's a lot of info, all the info you have to see why the algo is doing what it's doing.



 good to have in production so that admins can see

 what autonuma is doing



 how much is it converging

 to decide to make it more aggressive, etc.













 overall, all such stats can be easily exported, it's already avl. via printk, but have to moved to something more structured and standard.





 xen case is same; trying to see how they can use perf counters, etc. for statistical review of what is going on, but not precise enough

 tells how many remote memory accesses are happening, but not from where and to where



 something more in s/w is needed to enable this information.











One balloon for all - towards unified balloon driver - Daniel Kiper





Slides





 wants to integrate various balloon drivers avl. in Linux



 currently 3 separate drivers

 virtio



 xen



 vmware









 despite impl. differences, their core is similar

 feature difference in drivers (xen has selfballooning)



 overall lots of duplicate code









 do we have an example of a good solution?

 yes, generic mem hotplug code



 core functionality is h/w independent



 arch-specific parts are minimal, most is generic









 solution proposed

 core should be hypervisor-independent



 should co-operate on h/w independent level - e.g mem hotplug, tmem, movable pages to reduce fragmentation



 selfballooning ready



 support for hugepages



 standard api and abi if possible



 arch-specific parts should communicate with underlying hypervisor and h/w if needed









 crazy idea

 replace ballooning with mem hot-unplug support



 however, ballooning operates on single pages whereas hotplug/unplug works on groups of pages that are arch-dependent.

 not flexible at all



 have to use userspace interfaces

 can be done via udev scripts, which is a better way

















 discussion: does acpi hotplug work seamlessly?

 on x86 baremetal, hotplug works like this:

 hotplug mem



 acpi signals to kernel



 acpi adds to mem space



 this is not visible to processes directly



 has to be enabled via sysfs interfaces, by writing 'enable command' to every section that has to be hotplugged













 is selfballooning desirable?

 kvm isn't looking at it



 guest wants to keep mem to itself, it has no interest in making host run faster



 you paid for mem, but why not use all of it



 if there's a tradeoff for the guest: you pay less, you get more mem later, etc., guests could be interested.



 essentially, what is guest admin's incentive to give up precious RAM to host?











ARM - Marc Zyngier, Stefano Stabellini






Some other notes are on session etherpad






KVM ARM - Marc Zyngier





Slides





 ARM architecture virtualization extensions

 recent introduction in arch



 new hypervisor mode PL2



 traditionally secure state and non-secure state



 Hyp mode is in non-secure side







 higher privilege than kernel mode



 adds second stage translation; adds extra level of indirection between guests and physical mem

 tlbs are tagged by VMID (like EPT/NPT)







 ability to trap accesses to most system registers



 can handle irqs, fiqs, async aborts

 e.g. guest doesn't see interrupts firing









 hyp mode: not a superset of SVC

 has its own pagetables



 only stage 1, not 2



 follows LPAE, new physical extensions.



 one translation table register

 so difficult to run Linux directly in Hyp mode



 therefore they use Hyp mode to switch between host and guest modes (unlike x86)













 KVM/ARM

 uses HYP mode to context switch from host to guest and back



 exits guest on physical interrupt firing



 access to a few privileged system registers



 WFI (wait for interrupt)

 (discussion) WFI is trapped and then we exit to host







 etc.



 on guest exit, control restored to host



 no nesting; arch isn't ready for that.









 MM

 host in charge of all MM



 has no stage2 translation itself (saves tlb entries)



 guests are in total control of page tables



 becomes easy to map a real device into the guest physical space



 for emulated devices, accesses fault, generates exit, and then host takes over



 4k pages only









 instruction emulation

 trap on mmio



 most instructions described in HSR



 added complexity due to having to handle multiple ISAs (ARM, Thumb)









 interrupt handling

 redirect all interrupts to hyp mode only while running a guest. This only affects physical interrupts.



 leave it pending and return to host



 pending int will kick in when returns to guest mode?

 No, it will be handled in host mode. Basically, we use the redirection to HYP mode to exit the guest, but keep the handling on the host.













 inject two ways

 manipulating arch. pins in the guest?

 The architecture defines virtual interrupt pins that can be manipulated (VI→I, VF→F, VA→A). The host can manipulate these pins to inject interrupts or faults into the guest.













 using virtual GIC extensions, 





 booting protocol

 if you boot in HYP mode, and if you enter a non-kvm kernel, it gracefully goes back to SVC.



 if kvm-enabled kernel is attempted to boot into, automatically goes into HYP mode



 If a kvm-enabled kernel is booted in HYP mode, it installs a HYP stub and goes back to SVC. The only goal of this stub is to provide a hook










for KVM (or another hypervisor) to install itself.





 current status

 pending: stable userspace ABI



 pending: upstreaming

 stuck on reviewing















Xen ARM - Stefano Stabellini





Slides





 Why?

 arm servers



 smartphones



 288 cores in a 4U rack – causes a serious maintenance headache









 challenges

 traditional way: port xen, and port hypercall interface to arm



 from Linux side, using PVOPS to modify setpte, etc., is difficult









 then, armv7 came.





 design goals

 exploit h/w as much as possible



 limit to one type of guest

 (x86: pv, hvm)



 no pvops, but pv interfaces for IO







 no qemu

 lots of code, complicated







 no compat code

 32-bit, 64-bit, etc., complicated







 no shadow pagetables

 most difficult code to read ever













 NO emulation at all!





 one type of guest

 like pv guests

 boot from a user supplied kernel



 no emulated devices



 use PV interfaces for IO







 like hvm guests

 exploit nested paging



 same entry point on native and xen



 use device tree to discover xen presence



 simple device emulation can be done in xen

 no need for qemu

















 exploit h/w

 running xen in hyp mode



 no pv mmu



 hypercall



 generic timer

 export timer int. to guest













 GIC: general interrupt controller

 int. controller with virt support



 use GIC to inject event notifications into any guest domains with Xen support

 x86 taught us this provides a great perf boost (event notifications on multiple vcpus simultaneously)



 on x86, they had a pci device to inject interrupts to guest at regular intervals (on x86 we had a pci device to inject event notifications as legacy interrupt)













 hypercall calling convention

 hvc (hypercall)



 pass params on registers



 hvc takes an argument: 0xEA1 – means it's a xen hypercall.









 64-bit ready abi (another lesson from x86)

 no compat code in xen

 2600 lines of lesser code













 had to write a 1500 line patch of mechanical substitutions to make 32-bit host make all guests work fine





 status

 xen and dom0 boot



 vm creation and destruction work



 pv console, disk, network work



 xen hypervisor patches almost entirely upstream



 linux side patches should go in next merge window









 open issues

 acpi

 will have to add acpi parsers, etc. in device table



 linux has 110,000  lines – should all be merged













 uefi

 grub2 on arm: multiboot2



 need to virtualise runtime services



 so only hypervisor can use them now









 client devices

 lack ref arch



 difficult to support all tablets, etc. in market



 uefi secure boot (is required by win8)



 windows 8











Discussion




 who's responsbile for device tree mgmt for xen?

 xen takes dt from hw, changes for mem mgmt, then psases to dom0



 at present, currently have to build dt binary









 at the moment, linux kernel infrastructure doesn't support interrupt priorities.

 needed to prevent a guest doing a DoS on host by just generating interrupts non-stop



 xen does support int. priorities in GIC











VFIO - Are we there yet? - Alex Williamson





Slides





 are we there yet?  almost



 what is vfio?

 virtual function io



 not sr-iov specific



 userspace driver interface

 kvm/qemu vm is a userspace driver







 iommu required

 visibility issue with devices in iommu, guaranteeing devices are isolated and safe to use – different from uio.







 config space access is done from kernel

 adds to safety requirement – can't have userspace doing bad things on host













 what's different from last year?

 1st proposal shot down last year, and got revised at last LPC



 allow IOMMU driver to define device visibility – not per-device, but the whole group exposed



 more modular









 what's different from pci device assignment

 x86 only



 kvm only



 no iommu grouping



 relies on pci-sysfs



 turns kvm into a device driver









 current staus

 core pci and iommu drivers in 3.6



 qemu will be pushed for 1.3









 what's next?

 qemu integration



 legacy pci interrupts

 more of a qemu-kvm problem, since vfio already supports this, but these are unique since they're level-triggered; host has to mask interrupt so it doesn't cause a DoS till guest acks interrupt

 like to bypass qemu directly – irqfd for edge-triggered.  now exposing irqfd for level

















 (lots of discussion here)





 libvirt support

 iommu grps changed the way we do device assignment



 sysfs entry point; move device to vfio driver



 do you pass group by file descriptor?



 lots of discussion on how to do this



 existing method needs name for access to /sys



 how can we pass file descriptors from libvirt for groups and containers to work in different security models?

 The difficulty is in how qemu assembles the groups and containers.  On the qemu command line, we specify an individual device, but that device lives in a group, which is the unit of ownership in vfio and may or may not be connectable to other containers.  We need to figure out the details here,













 POWER support

 already adding







 PowerPC

 freescale looking at it



 one api for x86, ppc was strange









 error reporting

 better ability to inject AER etc to guest



 maybe another ioctl interrupt



 What are we going to be able to do if we do get PCIe AER errors to show up at a device, what is the guest going to be able to do (for instance can it reset links).

 We're going to have to figure this out and it will factor into how much of the AER registers on the device do we expose and allow the guest to control.  Perhaps not all errors are guest serviceable and we'll need to figure out how to manage those.













 better page pinning and mapping

 gup issues with ksm running in b/g









 PRI support





 graphics support

 issues with legacy io port space and mmio



 can be handled better with vfio









 NUMA hinting







Semiassignment: best of both worlds - Alex Graf





Slides





 b/g on device assignment





 best of both worlds

 assigned device during normal operation



 emulated during migration









 xen solution – prototype

 create a bridge in domU



 guest sees a pv device and a real device



 guest changes needed for bridge



 migration is guest-visible, since real device goes away and comes back (hotplug)

 security issue if VM doesn't ack hot-unplug













 vmware way

 writing a new driver for each n/w device they want to support



 this new driver calls into vmxnet



 binary blob is mapped into your address space



 migration is guest exposed

 new blob needed for destination n/w card













 alex way

 emulate real device in qemu



 e.g. expose emulated igbvf if passing through igbvf



 need to write migration code for each adapter as well









 demo

 doesn't quite work right now









 is it a good idea?



 how much effort really?

 doesn't think it's much effort



 current choices in datacenters are igbvf and <something else>

 that's not true!



 easily a dozen adapters avl. now



 lots of examples given why this claim isn't true














      	* no one needs single-vendor/card dependency in an entire datacenter




 non-deterministic network performance



 more complicated network configuration





 discussion

 Another solution suggested by Benjamin Herrenschmidt: use s3; remove 'live' from 'live migration'.



 AER approach









 General consensus was to just do bonding+failover







KVM performance: vhost scalability -  John Fastabend





Slides





 current situation: one kernel thread per vhost



 if we create a lot of VMs and a lot of virtio-net devices, perf doesn't scale





 not numa aware





 Main grouse is it doesn't scale.





 instead of having a thread of every vhost device, create a vhost thread per cpu



 add some numa-awareness scheduling – pick best cpu based on load





 perf graphs

 for 1 VM, number of instances of netperf increase, per-cpu-vhost doesn't shine.



 another tweak: use 2 threads per cpu: perf is better









 for 4 VMs, results are good for 1-thread.  much better than 2-thread.  (2 thread does worse than current)  With 4VMs per-cpu-vhost was nearly equivalent.





 on 12 VMs, 1-thread works better, 2-thread works better than baseline.  Per cpu-vhosts shine here outperforming baseline and 1-thread/2-thread cases.





 tried tcp, udp, inter-guest, all netperf tests, etc.

 this result is pretty standard for all the tests they've done.









 RFC

 should they continue?



 strong objections?









 discussion

 were you testing with raw qemu or libvirt?

 as libvirt creates its own cgroups, and that may interfere.







 pinning vs non-pinning

 gives similar results













 no objections!





 in a cgroup - roundrobin the vhost threads – interesting case to check with pinning as well.





 transmit and receive interfere with each other – so perf improvement was seen when they pinned transmit side.





 try this on bare-metal.







Network overlays - Vivek Kashyap




 want to migrate machines from one place to another in a data center

 don't want physical limitations (programming switches, routers, mac addr, etc)







 idea is to define a set of tunnels which are overlaid on top of networks

 vms migrate within tunnels, completely isolated from physical networks









 Scaling at layer 2 is limited by the need to support broadcsat/multicast over the network





 overlay networks

 when migrating across domains (subnets), have to re-number IP addresses

 when migrating need to migrate IP and MAC addresses



 When migrating across subnets might need to re-number or find another mechanism







 solution is to have a set of tunnels



 every end-user can view their domain/tunnel as a single virtual network

 they only see their own traffic, no one else can see their traffic.













 standardization is required

 being worked on at IETF



 MTU seen as VM is not same as what is on the physical network (because headers added by extra layers)



 vxlan adds udp headers



 one option is to have large(er) physical MTU so it takes care of this otherwise there will be fragmentation

 Proposal

 If guest does pathMTU discovery let tunnel end point return the ICMP error to reduce the guest's view of the MTU.



 Even if the guest has not set the DF (dont fragment) bit return an ICMP error. The guest will handle the ICMP error and update its view of the MTU on the route.



 having the hypervisor to co-operate so guests do a path MTU discovery and things work fine

 no guest changes needed, only hypervisor needs small change





















 (discussion) Cannot assume much about guests; guests may not handle ICMP.





 Some way to avoid flooding

 extend to support an 'address resolution module'



 Stephen Hemminger supported the proposal









 Fragmentation

 can't assume much about guests; they may not like packets getting fragmented if they set DF



 fragmentation highly likely since new headers are added

 The above is wrong comment since if DF is set we do pathMTU and the packet wont be fragmented. Also, the fragmentation if done is on the tunnel. The VM's dont see fragmentation but it is not performant to fragment and reassemble at end points.



 Instead the proposal is to use PathMTU discovery to make the VM's send packets that wont need to be fragmented.













 PXE, etc., can be broken





 Distributed Overlay Ethernet Network

 DOVE module for tunneling support

 use 24-bit VNI













 patches should be coming to netdev soon enough.





 possibly using checksum offload infrastructure for tunneling





 question: layer 2 vs layer 3

 There is interest in the industry to support overlay solutions for layer 2 and layer 3.











Lightning talks






QEMU disaggregation - Stefano Stabellini





Slides





 dom0 is a privileged VM



 better model is to split dom0 into multiple service VMs

 disk domain, n/w domain, everything else

 no bottleneck, better security, simpler













 hvm domain needs device model (qemu)





 wouldn't it be nice if one qemu does only disk emulation

 second does network emulation



 etc.









 to do this, they moved pci decoder in xen

 traps on all pci requests



 hypervisor de-multiplexes to the 'right' qemu









 open issues

 need flexibility in qemu to start w/o devices



 modern qemu better

 but: always uses PCI host bridge, PIIX3, etc.







 one qemu uses this all, others have functionality, but don't use it









 multifunction devices

 PIIX3









 internal dependencies

 one component pulls others

 vnc pulls keyboard, which pulls usb, etc.













 it is in demoable state







Xenner -- Alex Graf




 intro

 guest kernel module that allows a xen pv kernel to run on top of kvm – messages to xenbus go to qemu









 is anyone else interested in this at all?

 xen folks last year did show interest for a migration path to get rid of pv code.



 xen is still interested, but not in short time. – few years.



 do you guys want to work together and get it rolling?

 no one commits to anything right now















Contact






Proposal added by Amit Shah amit.shah@redhat.com.  I've added my views on the micro conference in this blog entry.

### 添付資料URL

- http://www.linuxplumbersconf.org/2012/wp-content/uploads/2012/09/2012-lpc-virt-security-pmoore.pdf
- http://www.linuxplumbersconf.org/2012/wp-content/uploads/2012/09/2012-lpc-virt-storage-virt-kvm-rao.pdf
- http://www.linuxplumbersconf.org/2012/wp-content/uploads/2012/09/2012-lpc-virt-interrupt-virt-kvm-roedel.pdf
- http://www.linuxplumbersconf.org/2012/wp-content/uploads/2012/09/2012-lpc-virt-intel-vt-feat-nakajima.pdf
- http://www.linuxplumbersconf.org/2012/wp-content/uploads/2012/09/2012-lpc-virt-COLO-xen-dong.pdf
- http://www.linuxplumbersconf.org/2012/wp-content/uploads/2012/09/2012-lpc-virt-NUMA-xen-faggioli.pdf
- http://www.linuxplumbersconf.org/2012/wp-content/uploads/2012/09/2012-lpc-virt-autonuma-arcangeli.pdf
- http://www.linuxplumbersconf.org/2012/wp-content/uploads/2012/09/2012-lpc-virt-unified-baloon-driver-kiper.pdf
- http://www.linuxplumbersconf.org/2012/wp-content/uploads/2012/09/2012-lpc-arm-zyngier.pdf
- http://www.linuxplumbersconf.org/2012/wp-content/uploads/2012/09/2012-lpc-virt-xen-arm-stabellini.pdf
- http://www.linuxplumbersconf.org/2012/wp-content/uploads/2012/09/2012-lpc-virt-vfio-williamson.pdf
- http://www.linuxplumbersconf.org/2012/wp-content/uploads/2012/09/2012-lpc-virt-live-mig-dev-assign-graf.pdf
- http://www.linuxplumbersconf.org/2012/wp-content/uploads/2012/09/2012-lpc-virt-kvm-network-scalability-fastabend.pdf
- http://www.linuxplumbersconf.org/2012/wp-content/uploads/2012/09/2012-lpc-virt-QUEMU-disaggregation-stabellini.pdf

## LLVM（採用済み）

https://wiki.linuxplumbersconf.org/2012:llvm

Table of Contents



LLVM

Blueprint Name Prefix


Schedule


Discussion notes


Contact











LLVM




The Linux Plumbers 2012 LLVM track is focusing on the LLVM compiler and the current status of the project. Among more general overview topics, it will cover the compilation of the Linux Kernel by LLVM. 
The project page is here: http://llvm.linuxfoundation.org/index.php/Main_Page





The structure will be 4 45-minute slots with the presentations listed below, questions from the audience and discussions are welcome. 






Blueprint Name Prefix






When submitting a proposal for this track, use the prefix “lpc2012-llvm-” for the “Name” field. Submit proposals at https://blueprints.launchpad.net/sprints/lpc-2012






Schedule






The schedule of the 2012 LLVM Plumbers Micro Conference was as follows. Note presentation slides can be found on the Plumbers page by following the links to the abstracts:





 Session 1 - Mark Charlebois & Behan Webster LLVM Toolchain - Update and State of Building Linux with LLVM



 Session 2 - Jan-Simon Moeller Linux Kernel on x86 built with LLVM/Clang



 Session 3 - Zino Benaissa Polyhedral optimizations for LLVM







Discussion notes






This is a good place to record notes from your session.  All too often, if notes were not written down, the session might as well not have happened.






Contact






Proposal added by Mark Charlebois mcharleb@quicinc.com / Elena Zannoni elena.zannoni@oracle.com

### 添付資料URL

掲載なし

## Android（採用済み）

https://wiki.linuxplumbersconf.org/2012:android

Table of Contents



Microconf - How to run Android and its apps alongside a standard Linux desktop?

Topics


Attendees


Schedule


Contact











Microconf - How to run Android and its apps alongside a standard Linux desktop?




While the standard Linux desktop and Android share the same kernel, their differences remain staggering. Recently, the kernel changes required to run Android have started to make their way into the mainline kernel. It remains, however, that the user-spaces of Android and common Linux desktops are distinct and share little in common.





This microconf's purpose is to bring together the various people involved in key parts of the system to discuss how both the standard Linux desktop and Android (and its apps) can be made to coexist and leverage each others' strengths in as much as possible.






Topics




 Graphics layers and subsystems:

 SurfaceFlinger vs. X and Wayland



 DRM vs. gralloc







 DBus vs. Intents



 Binder vs. glibc



 Filesystem coexistence



 StageFright vs. PulseAudio



 Unifying common functionality/drivers







While it's unlikely all these issues will be resolved, the overarching goal will be to get the conversation going amongst interested developers.






Attendees




 Alexander Sack (Linaro)



 Bernhard Rosenkranzer (Linaro)



 Christian Reis (Linaro)



 Colin Cross (Google)



 Daniel Stone (Collabora)



 John Stultz (IBM/Linaro)



 Karim Yaghmour (Opersys)



 Kristian Høgsberg (Intel)



 Zach Pfeffer (Linaro)



 Rafael Wysocki (University of Warsaw)



 Reynaldo Verdejo (Collabora)



 Ricardo Salveti (Linaro)



 Rob Clark (Texas Instruments)







Schedule




 Introduction (Karim Yaghmour):

 Format of microconf



 Commonalities and Differences between Android and Linux desktops



 Recap (confirmation) of attendees' areas of interest







 Open discussion about each topic listed above



 Recap of microconf progress (Alexander Sack)







This microconf addresses a topic on which there has been little to no research. As such, there is a strong open/ad-hoc format at play. The goal is to make sure that the introduction provides a common basis of technologies/mechanisms involved for the rest of the discussion to occur on common ground for everyone involved. There will be an opportunity at that point to add items to the agenda if need be. The open discussion part, which is meant to take up the bulk of the microconf, will see each of the above topics covered one-by-one with active participation of attendees. In fact, it's expected/desired that those having field expertise take leadership of discussion items which they are most expert in.






Contact






Karim Yaghmour

### 添付資料URL

掲載なし


# 朝食・懇親会・会場使用不可の枠

## Breakfast

https://blog.linuxplumbersconf.org/lpc-2012/meeting/149/breakfast/index.html

Description: 未掲載

- 2012-08-29 08:15 - 09:15 PDT [PLENARY] Grand Ballroom

## Unavailable

https://blog.linuxplumbersconf.org/lpc-2012/meeting/128/unavailable-4/index.html

Room Unavailable

- 2012-08-29 09:50 - 10:35 PDT Nautilus 4

## Unavailable

https://blog.linuxplumbersconf.org/lpc-2012/meeting/129/unavailable-3/index.html

Room Unavailable

- 2012-08-29 09:50 - 10:35 PDT Nautilus 5

## Evening Event at Bali Hai Restaurant

https://blog.linuxplumbersconf.org/lpc-2012/meeting/10/evening-event-at-bali-hai-restaurant/index.html

Sponsored by Qualcomm Innovation Center, Inc. and Code Aurora Forum

- 2012-08-29 18:00 - 21:30 PDT [PLENARY] Offsite

## Breakfast

https://blog.linuxplumbersconf.org/lpc-2012/meeting/145/breakfast/index.html

Description: 未掲載

- 2012-08-30 08:30 - 09:25 PDT Nautilus 1

## Breakfast

https://blog.linuxplumbersconf.org/lpc-2012/meeting/146/breakfast/index.html

Description: 未掲載

- 2012-08-30 08:30 - 09:25 PDT Nautilus 2

## Breakfast

https://blog.linuxplumbersconf.org/lpc-2012/meeting/147/breakfast/index.html

Description: 未掲載

- 2012-08-30 08:30 - 09:25 PDT Nautilus 4

## Breakfast

https://blog.linuxplumbersconf.org/lpc-2012/meeting/148/breakfast/index.html

Description: 未掲載

- 2012-08-30 08:30 - 09:25 PDT Nautilus 5

## Evening Event @ Del Coronado Hotel

https://blog.linuxplumbersconf.org/lpc-2012/meeting/11/evening-event-del-coronado-hotel/index.html

Description: 未掲載

- 2012-08-30 18:30 - 21:00 PDT [PLENARY] Offsite

## Breakfast

https://blog.linuxplumbersconf.org/lpc-2012/meeting/150/breakfast/index.html

Description: 未掲載

- 2012-08-31 08:15 - 09:15 PDT [PLENARY] Grand Ballroom

## Unavailable

https://blog.linuxplumbersconf.org/lpc-2012/meeting/130/unavailable-2/index.html

Room Unavailable

- 2012-08-31 15:05 - 15:50 PDT Nautilus 4

## Unavailable

https://blog.linuxplumbersconf.org/lpc-2012/meeting/131/unavailable-1/index.html

Room Unavailable

- 2012-08-31 15:05 - 15:50 PDT Nautilus 5

## Evening Event @ El Vitral

https://blog.linuxplumbersconf.org/lpc-2012/meeting/12/evening-event-el-vitral/index.html

Description: 未掲載

- 2012-08-31 18:00 - 21:00 PDT [PLENARY] Offsite


# 総合資料リンク

- [The videos are hosted by Ubicast here:](http://linuxplumbers.ubicast.tv/)
- [All the Blueprints are here:](https://blueprints.launchpad.net/lpc)


## 出典

- https://blog.linuxplumbersconf.org/2012/resources-slides-and-videos/index.html
- https://wiki.linuxplumbersconf.org/2012:topics
- https://blog.linuxplumbersconf.org/lpc-2012/index.html
- https://blog.linuxplumbersconf.org/lpc-2012/2012-08-29.1
- https://blog.linuxplumbersconf.org/lpc-2012/2012-08-30.1
- https://blog.linuxplumbersconf.org/lpc-2012/2012-08-31.1
