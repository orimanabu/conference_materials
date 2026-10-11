# Linux Plumbers Conference 2011 全セッション一覧

出典: https://blog.linuxplumbersconf.org/2011/ocw/events/LPC2011/schedule

2011年はOCW形式。指定スケジュールの個別URL付き枠104件を収録。Descriptionは個別ページのAbstract原文。One Line Summaryは別フィールドに保持。資料URLは原記載を保持し、スケジュールに別のアーカイブURLがある場合はschedule_urlも収録。添付ファイル本体の取得・リンク有効性検査は実施していない。Wikiの候補トピック情報は補足に区別して収録し、個別セッション数には加算しない。WikiのTentative/Proposed等は原文通り。 WikiはProposed/Potential Tracks（候補）として掲載されている14トピックをそのまま区別し、8ページの本文と6ページの未作成状態を記録。個別URLのないマイクロカンファレンス全体枠14件と休憩・食事・懇親会等12件は補足に保持。補足のスケジュール内アンカーURLは個別セッションページURLとは区別する。

セッション: 104件 / Descriptionあり: 104件 / 資料あり: 49件 / 資料項目: 49件

## 目次

1. [Some challenges for the plumbing community](#session-711)
2. [BITS: Testing BIOS/platform issues with Python in a bootloader](#session-867)
3. [Session Lead](#session-81)
4. [A Baker's Dozen of TCP bakeoff?](#session-87)
5. [Byte Queue Limits](#session-171)
6. [Scalable packet processing with many queues and cores](#session-177)
7. [TCP Fast Open](#session-249)
8. [Proportional Rate Reduction for TCP](#session-369)
9. [State of the BufferFish](#session-393)
10. [Optimizing igb and ixgbe network driver scaling performance](#session-423)
11. [Thermal Management for ARM-based Systems](#session-75)
12. [Agile mobile development and deployment with QML](#session-477)
13. [Introducing dmaengine API for TI DMA controllers](#session-537)
14. [Why Video calls on a mobile device don't just work.](#session-555)
15. [x32 - a native 32-bit ABI for x86-64](#session-531)
16. [Virtual Machine Memory Overcommitment](#session-351)
17. [Control is the New Community: What Linux can Learn from Android](#session-897)
18. [Track Lead](#session-123)
19. [initializing stock images with cloud-init](#session-219)
20. [Eucalyptus: design of an open-source cloud computing platform](#session-231)
21. [Analyzing and Optimizing Server Workload Latency](#session-291)
22. [Ensemble, rethinking cloud deployments](#session-483)
23. [Remus - Transparent HA for Xen VMs with Stateful Failover](#session-675)
24. [Finding and burying Configuration Defects in Linux with the undertaker](#session-33)
25. [Session Lead](#session-63)
26. [Ad Hoc Synchronization Considered Harmful](#session-69)
27. [Diagnosing Linux/Firmware related Issues with the Firmware Test Suite](#session-159)
28. [Killing Bugs in C with Smatch](#session-165)
29. [Reducing your patch workload with Patchwork](#session-255)
30. [Codemap, google maps for source code](#session-297)
31. [Tolerating hardware device failures in software](#session-363)
32. [Reproducible builds and infrastructure](#session-441)
33. [Runtime PM vs System Sleep](#session-27)
34. [Linux OS Infrastructure for Memory Power Management](#session-417)
35. [Relativistic Development](#session-717)
36. [Extending (Disk) Data Integrity Support in Linux](#session-381)
37. [Unified Memory Management](#session-567)
38. [Track overview](#session-885)
39. [Session lead](#session-39)
40. [Seeking a path to zero-copy paravirtualised networking in the Linux kernel](#session-129)
41. [Virtio on Xen](#session-135)
42. [Yabusame: Postcopy Live Migration for Qemu/KVM](#session-669)
43. [VFIO: PCI device assignment breaks free of KVM](#session-777)
44. [New filesystem freeze API](#session-873)
45. [OSWALD: Lessons from and for the Open Hardware Movement](#session-525)
46. [D-Bus Performance: Observations and Solutions](#session-321)
47. [Linux Power Management Experiences on Moorestown](#session-9)
48. [Control loops in userspace](#session-705)
49. [Hierarchical Cgroup support in userland](#session-741)
50. [Efficient utilization by overcommitment.](#session-747)
51. [dcache management](#session-819)
52. [Memory controller improvements](#session-825)
53. [Checkpoint/restart in the userspace](#session-831)
54. [Container in a file](#session-837)
55. [Proc fs virtualization](#session-843)
56. [Entering a container](#session-849)
57. [vzctl for LXC](#session-855)
58. [Extending CPU accounting stats](#session-861)
59. [Hardware Accelerated multimedia, the missing parts](#session-45)
60. [GPU kernel and userspace border](#session-513)
61. [Enhance video experience by Multi-plane-mc](#session-639)
62. [OpenGL (and friends) in the Future: A notional view](#session-801)
63. [Virtualization: Writing (and testing) device drivers without hardware](#session-243)
64. [Where is the Linux kernel on scalability?](#session-225)
65. [Linux Idle Power Checkup](#session-15)
66. [Session Lead](#session-21)
67. [Holistic power management](#session-735)
68. [Session Lead](#session-57)
69. [Userspace RCU Library: RCU Synchronization and RCU/Lock-Free Data Containers for Userspace](#session-729)
70. [Scalability problems in/caused by fork](#session-753)
71. [Backporting the Linux kernel, for good](#session-771)
72. [Emerging trends in Licensing standards - BOF](#session-621)
73. [Enhance video experience by Multi-plane-bof](#session-645)
74. [Memory cgroups: Who's using it out there?](#session-357)
75. [Optimizing Firefox: Why Large Applications Start Slowly on Linux](#session-807)
76. [ARM collaboration summit](#session-783)
77. [Kconfig Fragments](#session-315)
78. [Libhugetlbfs and transparent huge pages](#session-699)
79. [Testing and fixing BIOS/platform issues](#session-795)
80. [What applications need to know about Btrfs.](#session-603)
81. [Can Linux Cope with Diversity?](#session-891)
82. [The Linux NFC subsystem](#session-453)
83. [Cleaning up the Filesystem Hierarchy](#session-579)
84. [systemd: One Year Later](#session-585)
85. [Dracut as a general purpose Bootloader](#session-591)
86. [coreboot](#session-597)
87. [Optimizing Firefox: Why Large Applications Start Slowly on Linux](#session-813)
88. [Tracing](#session-489)
89. [trace - the new hope?](#session-609)
90. [LTTng 2.0 : Application, Library and Kernel tracing within your Linux distribution](#session-723)
91. [Tracing KVM guests from the host (discussion)](#session-903)
92. [PowerNap Dynamic Power Management](#session-105)
93. [ThunderboltTechnology – What is it and what are the Open Source implications](#session-99)
94. [IRQ naming and routing](#session-93)
95. [Making Passthrough Audio on Linux Just Work](#session-117)
96. [Future of AVRCP on Linux](#session-549)
97. [DSP management - status & discussion](#session-627)
98. [Compressed data support in sound subsystem](#session-633)
99. [Building common tools to manage file, LVM and hardware features](#session-111)
100. [Federated File System on Linux](#session-273)
101. [dm-verity: a device mapper target for integrity checking of block devices](#session-387)
102. [Towards consistent interfaces to expose DCB attributes to applications](#session-561)
103. [lockdep: How to read its cryptic output](#session-153)
104. [Globally fair group CPU scheduling](#session-309)

<a id="session-711"></a>
## 1. Some challenges for the plumbing community

- セッション個別URL: https://blog.linuxplumbersconf.org/2011/ocw/sessions/711
- Track: Keynote
- 日時: Wednesday, September 7, 2011 9:00 – 9:45am

### Description

Linux goes from one success to the next, but that does not mean that we are running out of problems to solve.  Community issues, hardware changes, scalability concerns, and a widening user base all present challenges to the plumbing community.  This talk will highlight some of the more interesting  problems we have to solve, with an emphasis on those which will be – or should be – addressed during the rest of the conference.

### One Line Summary

Some challenges for the plumbing community

### 添付資料URL

- [slides](http://linuxplumbersconf.net/2011/ocw//system/presentations/711/original/lpc-challenges.pdf)（file）


- スケジュール掲載のアーカイブURL: https://blog.linuxplumbersconf.org/2011/ocw/system/presentations/711/original/lpc-challenges.pdf
<a id="session-867"></a>
## 2. BITS: Testing BIOS/platform issues with Python in a bootloader

- セッション個別URL: https://blog.linuxplumbersconf.org/2011/ocw/sessions/867
- Track: Refereed Presentations
- 日時: Wednesday, September 7, 2011 10:00 – 10:50am

### Description

The kernel often has to cope with misconfiguration and bugs in BIOS and ACPI, working around them when possible and reporting them otherwise. These bugs rarely managed to get fixed upstream, and nothing prevents them from recurring on new systems with new BIOSes. We’d like to change that.

BITS, the BIOS Implementation Test Suite (biosbits.org), provides support for testing and diagnosing these types of issues in a pre-OS environment, including full support for Python scripting in ring 0 with access to hardware and ACPI. We’ve had great success getting BIOS vendors to fix issues tested by BITS, and we’d love to add a pile of new tests to address real issues that kernel developers encounter.

We’ll demonstrate BITS, and explain how we got from “BIOS testing” to “Python and ACPICA embedded in GRUB”.  We’ll also explain some of the platform issues that BITS tests for, outline some of the future tests we plan to add, and take suggestions for new tests that would help with issues Linux currently has to work around.

### One Line Summary

The kernel often has to cope with misconfiguration and bugs in BIOS and ACPI, working around them when possible and reporting them otherwise. These bugs rarely managed to get fixed upstream, and nothing prevents them from recurring on new systems with new BIOSes.  Help us change that, and hear about BITS, our system for testing BIOS using Python and ACPICA embedded in GRUB.

### 添付資料URL

- [slides](http://linuxplumbersconf.org/2011/ocw//system/presentations/867/original/bits.pdf)（file）


- スケジュール掲載のアーカイブURL: https://blog.linuxplumbersconf.org/2011/ocw/system/presentations/867/original/bits.pdf
<a id="session-81"></a>
## 3. Session Lead

- セッション個別URL: https://blog.linuxplumbersconf.org/2011/ocw/sessions/81
- Track: Bufferbloat and Networking
- 日時: Wednesday, September 7, 2011 

### Description

Bufferbloat has become a hot topic in recent months. For years the networking industry has been strongly focused on maximizing throughput and eliminating packet loss. The availability of cheap RAM for big buffers has been an aid (or maybe a crutch) for achieving those goals. Unfortunately, it takes time for network packets to work their way through all those buffers, and high network latency is the result.

The importance of low latency in the network is often neglected or misunderstood. But in reality, poor latency is to blame for many network woes. These include poor VOIP call quality, stuttering video streams, and even many “the Internet is slow today” problems at home. Moreover, those big, slow buffers deny TCP the timely feedback it needs to fight congestion in the network. The effect is that the buffers put in place to make the network “faster” are making it slower instead!

In this track we want to bring together academics, system administrators, network equipment vendors, developers of networking applications, and kernel developers at all levels of the stack from the core to the drivers. We want to discuss topics related to bufferbloat including latency reduction, congestion control, queue management, proper network design, and related topics with the goal of making the Internet perform better for everyone.

### One Line Summary

Identifying and eliminating the effects of bufferbloat

### 添付資料URL

掲載なし

<a id="session-87"></a>
## 4. A Baker's Dozen of TCP bakeoff?

- セッション個別URL: https://blog.linuxplumbersconf.org/2011/ocw/sessions/87
- Track: Bufferbloat and Networking
- 日時: Wednesday, September 7, 2011 10:00 – 10:50am

### Description

Linux support a dozen advanced TCP congestion control algorithms as well as the original TCP Reno. This talk aims to provide information to lead an informed discussion of the influence these choices have on performance, fairness and delay. It will cover the history the different algorithms and the concept behind each one. The second part is a survey of different test results. The goal is to start an informed discussion of the criteria for choosing a TCP congestion
control and if existing Linux default is the best.

### One Line Summary

Can TCP Congestion control help with fairness and latency (bufferbloat)?

### 添付資料URL

掲載なし

<a id="session-171"></a>
## 5. Byte Queue Limits

- セッション個別URL: https://blog.linuxplumbersconf.org/2011/ocw/sessions/171
- Track: Bufferbloat and Networking
- 日時: Wednesday, September 7, 2011 

### Description

Byte queue limits are a mechanism to limit the size of the transmit hardware queue on a NIC by number of bytes. The goal of these byte limits is too reduce latency caused by excessive queuing in hardware without sacrificing throughput.

To avoid starvation, when the host is streaming data the hardware needs to queue enough data so that the queue does not completely drain between successive packet transmissions. In a canonical network driver model this equates to queuing enough data to span the time that the hardware transmit queue becomes full, the driver removes completed packets from the queue (usually at interrupt), and new packets are queued.

While arbitrarily large hardware queues could be used to prevent starvation, they induce high latency which has undesirable consequences. High priority packets sent by the host will incur large latency due to head-of-line-blocking. The work conserving queuing disciplines in Linux (like Stochastic Fairness Queuing (SFQ) and PRIO) need to have a backlog on the host before they can be effective; large hardware queue makes producing this backlog harder to achieve thus reducing the usefulness of these queuing disciplines.

Hardware queuing limits are typically specified in terms of a number hardware descriptors, each of which has a variable size. The variability of the size of individual queued items can have a very wide range. For instance with the e1000 NIC the size could range from 64 bytes to 4K (with TSO enabled). This variability makes it next to impossible to choose a single queue limit that prevents starvation and provides lowest possible latency.

The amount of queuing required to prevent starvation of the transmitter is much more dependent on the serialization time of the bytes as opposed to the number of packets being transmitted. Limiting the hardware transmission queue by number of bytes takes this fact into account to provide low latency without starvation.

The objective of byte queue limits is to set the limit so that it is the minimum needed to prevent starvation between successive transmissions to the hardware. The latency between two transmissions can be variable in a system. It is dependent on interrupt frequency, NAPI polling latencies, scheduling of the queuing discipline, lock contention, etc. Therefore we propose that byte queue limits should be dynamic and change in accordance with networking stack latencies a system encounters.

### One Line Summary

Byte queue limits are a mechanism to limit NIC HW queues by number of bytes as opposed to number of packets, thus reducing buffer bloat problem caused by these queues.

### 添付資料URL

掲載なし

<a id="session-177"></a>
## 6. Scalable packet processing with many queues and cores

- セッション個別URL: https://blog.linuxplumbersconf.org/2011/ocw/sessions/177
- Track: Bufferbloat and Networking
- 日時: Wednesday, September 7, 2011 

### Description

Network interfaces with multi-queue, flow-aware load balancing (aRFS) and protocol filtering (ntuple) can intelligently distribute load on multiprocessors. The fanout allows host packet processing to shift from a multi-stage interrupt-driven ‘vertical’ stack to concurrent ‘horizontal’ pools of polling threads. Initial benchmarks show a reduction in kernel latency by 5-fold to below 10 μs. This talk reviews the new hardware features, shows preliminary results and presents a prototype Linux implementation of horizontal processing.

### One Line Summary

Advancements in NIC hardware and functionality, as well as things like increasing core counts on systems present new opportunities for taking networking performance to next level.

### 添付資料URL

掲載なし

<a id="session-249"></a>
## 7. TCP Fast Open

- セッション個別URL: https://blog.linuxplumbersconf.org/2011/ocw/sessions/249
- Track: Bufferbloat and Networking
- 日時: Wednesday, September 7, 2011 

### Description

According to Chrome browser stats, over 1/3 HTTP requests today need to first complete the TCP handshake. This extra one RTT is rather large since most requests complete in only a few RTTs.

TCP Fast Open (TFO) allows exchanging and consuming data during the initial connection handshake, thus provides a latency saving of one RTT compared to standard TCP requiring the handshake to complete before data can be exchanged/consumed. Naively doing does not work because it creates new reliability issues and DoS vulnerabilities. Several RFCs also allow sending data in SYN or SYN-ACK packets, but none is directly useful for current web applications. Therefore, we designed TFO to address these issues and the detail is available at http://www.ietf.org/id/draft-cheng-tcpm-fastopen-00.txt

We will discuss the design, the Linux implementation, and the performance results in the talk.

### One Line Summary

Data exchange during TCP handshake

### 添付資料URL

掲載なし

<a id="session-369"></a>
## 8. Proportional Rate Reduction for TCP

- セッション個別URL: https://blog.linuxplumbersconf.org/2011/ocw/sessions/369
- Track: Bufferbloat and Networking
- 日時: Wednesday, September 7, 2011 10:00 – 10:50am

### Description

Proportional Rate Reduction (PPR) improves the accuracy and robustness of TCP’s loss recovery.

Standard Congestion Control requires that TCP and other protocols reduce their congestion window in response to losses. There are two widely deployed algorithms used to implement this window reduction: Fast Recovery and Rate Halving. Both algorithms are needlessly fragile under a number of conditions particularly when there is a burst of losses that such that the number of ACKs delivered is so small that the effective window falls below ssthresh, the target value chosen by the congestion control algorithm.

Proportional Rate Reduction avoids these excess window reductions such that at the end of recovery the actual window size will be as close as possible to the window size determined by the congestion control algorithm. It is patterned after rate halving, but using the fraction that is appropriate for target window chosen by the congestion control algorithm.  In addition a second algorithm, Reduction Bound, monitors the total window reduction due to all mechanisms, including application stalls, the losses themselves and inhibits further window reductions when possible.

In this talk, I will describe the design and implementation of PRR in Linux, along with experimental results from Web and datacenter traffic. Details of the PRR design are at: http://tools.ietf.org/html/draft-mathis-tcpm-proportional-rate-reduction-00

### One Line Summary

A smooth and robust loss recovery for TCP

### 添付資料URL

掲載なし

<a id="session-393"></a>
## 9. State of the BufferFish

- セッション個別URL: https://blog.linuxplumbersconf.org/2011/ocw/sessions/393
- Track: Bufferbloat and Networking
- 日時: Wednesday, September 7, 2011 10:00am – 12:30pm

### Description

The bufferbloat project has been working on fixing bufferbloat across the entire Linux networking stack on both servers and embedded systems, working on testing tools and hardware.

This will be a status update on our efforts and a look towards the future of AQMs, traffic shaping, and the interrelationship of device drivers and network stacks.

### One Line Summary

Status update on Beating the (buffer) bloat.

### 添付資料URL

掲載なし

<a id="session-423"></a>
## 10. Optimizing igb and ixgbe network driver scaling performance

- セッション個別URL: https://blog.linuxplumbersconf.org/2011/ocw/sessions/423
- Track: Bufferbloat and Networking
- 日時: Wednesday, September 7, 2011 

### Description

Multiqueue networking devices are quickly becoming the norm as an ever increasing demand for high bandwidth and low latency have increased the demand on the system beyond what can be handled by a single CPU.  In the past additional queues added very little in the way over overall performance gain with many cases showing subpar performance versus a single queue.  Some of these issues have been addressed with changes to the network stack itself, however there were multiple issues within the network drivers that were left unaddressed.

I will show the current performance of igb and ixgbe and how their architecture has been updated to improve multiqueue scaling performance.  These improvements provide insights into the current status of the multiqueue networking device code, and where future bottlenecks may lie.

Techniques and tools are presented which can be used to gather a picture of the entire network stack and then zoom in on performance bottlenecks.  These approaches can be applied to performance analysis beyond just igb and ixgbe and are valuable to audiences both in networking and other communities focused on multiqueue scaling performance.

### One Line Summary

A look at scaling issues found and addressed in the igb and ixgbe drivers, and steps we are exploring to further improve performance.

### 添付資料URL

- [slides](http://linuxplumbersconf.org/2011/ocw//system/presentations/423/original/optimizing-ixgbe-performance.pdf)（file）


- スケジュール掲載のアーカイブURL: https://blog.linuxplumbersconf.org/2011/ocw/system/presentations/423/original/optimizing-ixgbe-performance.pdf
<a id="session-75"></a>
## 11. Thermal Management for ARM-based Systems

- セッション個別URL: https://blog.linuxplumbersconf.org/2011/ocw/sessions/75
- Track: Mobile
- 日時: Wednesday, September 7, 2011 10:00 – 10:50am

### Description

Thermal management is now a key consideration in ARM-based products. Due to the inherent low power nature of ARM-based solutions, power consumption has been a key care-about, but as ARM-based systems move up the performance curve, managing thermal is also now a key consideration. Most ARM-based products are in portable form factors, and traditional means of silicon thermal management (heat sinks, fans, etc.) are not available. Silicon thermal management needs to be done on-die, and integrating the on-die hardware into the Linux stack is explored. Proposals for both a user-space thermal policy manager is considered, along with requirements and challenges in adopting the existing kernel thermal framework.

### One Line Summary

How should thermal management for ARM devices be done within existing thermal constructs (hwmon and thermal framework)

### 添付資料URL

掲載なし

<a id="session-477"></a>
## 12. Agile mobile development and deployment with QML

- セッション個別URL: https://blog.linuxplumbersconf.org/2011/ocw/sessions/477
- Track: Mobile
- 日時: Wednesday, September 7, 2011 11:45am – 12:35pm

### Description

Mobile applications are getting more appealing to developers as embedded devices are gaining more and more popularity between users.

Back in the days developing, testing and deploying a mobile appliance was not an easy task, and required a lot of effort and knowledge – but times have changed.

Nowadays, creating and deploying an application on a mobile device has become easier than ever thanks to QML, Qt and Qt Creator.

This talk will introduce the audience to QML and its main concepts, showing how this technology has been designed from the ground up to cover the whole device spectrum, ranging from mobile to desktop, making it easy for the developer to target multiple form factors.

It will be shown how QML can still use the full power of Qt as a backend, and is capable to integrate seamlessly QML code with Javascript and C++.

The talk will be rich in demos, including a development and deployment how-to, on Maemo/MeeGo and Symbian.

### One Line Summary

Learn how QML make developings and deploying mobile appliances easy (and fun) on Symbian and MeeGo.

### 添付資料URL

掲載なし

<a id="session-537"></a>
## 13. Introducing dmaengine API for TI DMA controllers

- セッション個別URL: https://blog.linuxplumbersconf.org/2011/ocw/sessions/537
- Track: Mobile
- 日時: Wednesday, September 7, 2011 

### Description

Enhanced DMA (EDMA) found on TI’s DaVinci devices is an ultra-flexible DMA controller with capabilities like 3-Dimensional transfers, fancy transfer setups where chunks of data lying in different buffers can be picked up and transferred to a single location (like a hardware fifo). The flexibility of the DMA engine allows complex tasks like de-interlacing an entire planar video buffer to happen using a single transfer request from the video driver. Other features include starting transfers on a chain of channels where completion on one channel automatically triggers the next channel. System DMA (SDMA) found on OMAP devices offers capabilities similar to EDMA.

This paper talks about the experiences gained while adapting the dma engine API to support EDMA & SDMA. It also proposes certain extensions that might be needed in the framework to fully exploit the hardware capabilities.

### One Line Summary

Adapting and extending the kernel dmaengine API for high-end dma controllers like EDMA found on Texas Instruments DaVinci devices and SDMA found on OMAP devices.

### 添付資料URL

掲載なし

<a id="session-555"></a>
## 14. Why Video calls on a mobile device don't just work.

- セッション個別URL: https://blog.linuxplumbersconf.org/2011/ocw/sessions/555
- Track: Mobile
- 日時: Wednesday, September 7, 2011 11:10am – 1:40pm

### Description

Video calling is a challenging undertaking in the best of times. It combines most multimedia-usecase., in a video call the application is simulationously capturing, encoding, sending, receiving, decoding and displaying audio and video. Essentially it’s doing the tasks of a video recording application, a video player and a streaming server all at the same time.
Doing this on a resource-contrained mobile platform adds even more challenges, especially when HD video is thrown into the mix.

I will give a brief overview of how VoIP works and how Telepathy, Farsight and Gstreamer are used to implement it.

Afterwards i will go through the various issues that are commonly seen  when implementing this on a mobile platform. This includes issue with resource allocation (e.g. availability of camera devices, accelerated video outputs), the usage of hardware codecs, issues when wireless power management gets in the way, etc.

While this talk itself doesn’t provide any concrete solutions, it should give a good overview of what kind of demands are placed on the lower level system by applications like VoIP and what pieces of infrastructure are still missing on linux systems.

### One Line Summary

An overview of what is involved in making video calls and the issues typically encountered on mobile platforms.

### 添付資料URL

- [slides](http://linuxplumbersconf.org/2011/ocw//system/presentations/555/original/Why_Voip_Calls_Dont_Just_Work.pdf)（file）


- スケジュール掲載のアーカイブURL: https://blog.linuxplumbersconf.org/2011/ocw/system/presentations/555/original/Why_Voip_Calls_Dont_Just_Work.pdf
<a id="session-531"></a>
## 15. x32 - a native 32-bit ABI for x86-64

- セッション個別URL: https://blog.linuxplumbersconf.org/2011/ocw/sessions/531
- Track: Refereed Presentations
- 日時: Wednesday, September 7, 2011 10:50 – 11:40am

### Description

Unlike some other architectures, the 64-bit version of the IA32 (x86)
architecture provides substantially enhanced capabilities.  However,
there are applications for which the additional memory footprint of
64-bit pointers is excessive.

This talk presents a work-in-progress 32-bit native ABI for x86-64
that aims to combine the performance of 64-bit mode with the memory
footprint of a 32-bit ABI.  It will discuss the performance of the new
ABI and how to get the enabling done with minimal resources.

The kernel enabling, in particular, is special in that it is the place
where multiple ABIs meet, and so this talk will look in particular at
the kernel enabling: how to minimize the impact on the overall kernel
and in particular minimize the impact on non-users of the new ABI, as
well as limitations in our current kernel infrastructure that could be
addressed.

### One Line Summary

A work-in-progress new ABI for x86 combines the memory footprint of a 32-bit process with the enhanced capabilities of the x86-64 ISA.

### 添付資料URL

- [slides](http://www.linuxplumbersconf.net/2011/ocw//system/presentations/531/original/x32-LPC-2011-0906.pptx)（file）


- スケジュール掲載のアーカイブURL: https://blog.linuxplumbersconf.org/2011/ocw/system/presentations/531/original/x32-LPC-2011-0906.pptx
<a id="session-351"></a>
## 16. Virtual Machine Memory Overcommitment

- セッション個別URL: https://blog.linuxplumbersconf.org/2011/ocw/sessions/351
- Track: Refereed Presentations
- 日時: Wednesday, September 7, 2011 11:40am – 12:30pm

### Description

Memory management in hypervisors is complicated.  Nearly every virtualization system from mainframes to Xen to QEMU recognizes this in some form.  However, the facilities vary widely, and often lack consistency or coordination.  For example, the kernel has at least four different balloon drivers each with subtly different behavior.

We now have userspace application frameworks (MOM) controlling several qemu instances, each potentially with their own specific implementation and implications, and libraries like libvirt wanting to tie all of this
together.

This talk will gather folks from the hypervisors, userspace, and the kernel to hash out the current issues, and understand common problems.

Google Docs version of slides

### One Line Summary

Memory Overcommit has an increasing number of players and complexity across the entire software stack.  This talk will take a look at how they interact.

### 添付資料URL

- [slides](http://linuxplumbersconf.org/2011/ocw//system/presentations/351/original/Kernel_KVM_MemOvercommit_May2010.pdf)（file）


- スケジュール掲載のアーカイブURL: https://blog.linuxplumbersconf.org/2011/ocw/system/presentations/351/original/Kernel_KVM_MemOvercommit_May2010.pdf
<a id="session-897"></a>
## 17. Control is the New Community: What Linux can Learn from Android

- セッション個別URL: https://blog.linuxplumbersconf.org/2011/ocw/sessions/897
- Track: Refereed Presentations
- 日時: Wednesday, September 7, 2011 2:00 – 2:50pm

### Description

Much ink has been expended on the community shortcomings of the android development model, but we won’t dwell on that. Instead, this talk will look at what Android got right in it’s rise from late entrant to leader of the smart phone market and what lessons can be drawn from this for parallel open source projects. Along the way, we will look at some Android problems where community would have helped and, in conclusion, try to synthesise a new path to World Domination from both approaches.

### One Line Summary

Lessons that can be drawn from our android upstream experience

### 添付資料URL

- [slides](http://linuxplumbersconf.org/2011/ocw//system/presentations/897/original/LPC2011.odp)（file）


- スケジュール掲載のアーカイブURL: https://blog.linuxplumbersconf.org/2011/ocw/system/presentations/897/original/LPC2011.odp
<a id="session-123"></a>
## 18. Track Lead

- セッション個別URL: https://blog.linuxplumbersconf.org/2011/ocw/sessions/123
- Track: Cloud
- 日時: Wednesday, September 7, 2011 

### Description

Linux and other Open Source software already seem to provide the plumbing for a significant share of the world’s public and private clouds.  Yet there are some critically important questions in this space, that hopefully sessions in this track will answer:

How is Linux currently providing this plumbing, and why?
	What’s missing from current cloud stacks, and what’s coming next?
	Where is there room for improvement?
	Are there free software implementations that are currently lagging behind proprietary ones, and what can we do to improve them?
	What ensures that Linux will be, or will continue to be the preferred OS for both cloud hosts, and cloud guests?
	Are there fundamental changes to the lowest levels of Linux that might benefit cloud hosts and cloud guests?
	Are there emerging cloud computing standards that would help adoption of Linux in this space, or would they stifle innovation?

These topics merely scratch the surface of Cloud Computing’s pertinent questions for Linux Plumbers.

### One Line Summary

The Cloud Track focuses on the underlying design methodologies, development tools, and emerging best practices around Linux and Open Source in Public and Private Clouds

### 添付資料URL

掲載なし

<a id="session-219"></a>
## 19. initializing stock images with cloud-init

- セッション個別URL: https://blog.linuxplumbersconf.org/2011/ocw/sessions/219
- Track: Cloud
- 日時: Wednesday, September 7, 2011 

### Description

Cloud-init has been a part of the Ubuntu images on EC2 since 10.04. It allows a user to customize a stock image on first boot, removing the need for them to “rebundle”.  It does so by utilizing instance meta-data and user-data.

One goal of cloud-init is to allow the user to customize as much as possible without need to reboot or restart services.  This means cloud-init has to run as early as possible in the boot sequence to give users the ability to change things before they’ve started.

Currently, cloud-init supports reading customization information or references to customization information from:

in image config files
	kernel command line
	EC2 Metadata service
	OVF ISO Transport

In the future we would like to support additional data sources so that cloud-init can be used generically for “stock image” configuration.

### One Line Summary

cloud-init

### 添付資料URL

掲載なし

<a id="session-231"></a>
## 20. Eucalyptus: design of an open-source cloud computing platform

- セッション個別URL: https://blog.linuxplumbersconf.org/2011/ocw/sessions/231
- Track: Cloud
- 日時: Wednesday, September 7, 2011 

### Description

Eucalyptus is an open-source private cloud computing platform that
installs as an overlay atop a wide variety of existing resource
environments, ranging from small server pools to enterprise sized data
centers.  In particular, this goal combined with the fact that the
Eucalyptus platform is a distributed system that lives at a fairly low
level in common software stacks, has led to a number of interesting
and somewhat unique design and implementation problems that need to
be solved.  In this talk, we discuss the fundamental problems of
designing a general purpose, portable, flexible, distributed system
that can run on laptops and massive scale data centers alike.

### One Line Summary

In this presentation, we discuss the set of design and implementation 
details that play into developing a Linux-based, open-source, large scale, 
infrastructure level distributed system that implements a private cloud 
computing platform.

### 添付資料URL

掲載なし

<a id="session-291"></a>
## 21. Analyzing and Optimizing Server Workload Latency

- セッション個別URL: https://blog.linuxplumbersconf.org/2011/ocw/sessions/291
- Track: Cloud
- 日時: Wednesday, September 7, 2011 

### Description

Performance in server workloads is usually looked at from throughput perspective. This proposal takes the alternate look at server workload performance from latency perspective. The proposal describes various CPU scheduling issues that we see affecting the workload’s average latency and tail (70 or higher percentile) latency. The proposal follows it up with few changes we are exploring to address these latency issues.

Specifically: Today there is not much that an application thread can do today to influence the CPU scheduler decisions on when it gets scheduled in and out of a CPU. The preemption timing is based mostly on kernel timers and other threads waking on the CPU. There are ‘nice’ and ‘yield’ APIs which are either coarse grained or not well defined. For example:
- there is no way for an application thread to indicate that it is holding a critical resource and can possibly use some extra runtime before preemption.
- there is a way in which background applications can specify a high timer slack on timer wakeup. But, there is no enforcement to prevent such high timer slack application threads from interfering with a latency critical request-response thread.

The changes being explored here encompasses userspace, kernel and user/kernel API. They let the kernel know more about application thread state and letting the CPU scheduler make more informed decisions, without adding significant overhead into the equation. We will provide the data on effectiveness of these changes and also look at possible future optimizations in this area.

The changes are expected to hit lkml as RFCs before this conference and the conference will be a good forum to present this in detail and to have a closer look on any new user/kernel API being introduced here. It is also likely that the issues seen with our typical request-response workload could resonate with latency sensitive applications elsewhere and it would be good to generate some discussion on the topic and to share experiences around the topic.

### One Line Summary

A look at the problems related to latency in server workloads and solutions we are exploring to improve average and tail latencies.

### 添付資料URL

掲載なし

<a id="session-483"></a>
## 22. Ensemble, rethinking cloud deployments

- セッション個別URL: https://blog.linuxplumbersconf.org/2011/ocw/sessions/483
- Track: Cloud
- 日時: Wednesday, September 7, 2011 

### Description

Ensemble provides a higher level semantic to its users of service level management rather than machine management. By rethinking this focus, Ensemble is able to provide real reuse of service definitions in much the same way that package management allows deployment and reuse of software bits in many different context. Ensemble’s goal is to be the apt of the clouds, via dependency solving utilizing available network services. By providing these higher level semantics to end users, ensemble aims to be a preferred solution for deploying services to the cloud.

Underneath the hood, relies on zookeeper for distributed coordination and state management of the managed machines, and LXC for higher utilization of machines and minimal separation of deployed services.

### One Line Summary

Ensemble is a new opensource configuration management and tool for deploying services into a cloud and data center environments

### 添付資料URL

掲載なし

<a id="session-675"></a>
## 23. Remus - Transparent HA for Xen VMs with Stateful Failover

- セッション個別URL: https://blog.linuxplumbersconf.org/2011/ocw/sessions/675
- Track: Cloud
- 日時: Wednesday, September 7, 2011 

### Description

What’s missing in current HA systems?

Current state of the art HA systems employ storage mirroring or active-standby techniques to recover from failures. Storage mirroring solutions require a “cold-boot” of VMs and its applications and throw the onus on applications to ensure “consistent recovery”. Downtime ranges from few minutes to hours.Active-Standby techniques dont require a cold boot of VMs but all existing client connectivity is lost. Replication solutions like MySQL Binlog lose one or more transactions. In general Active-Standby techniques are more suitable for completely “stateless” services.

A stateful, consistency preserving and transparent HA solution is a luxury that can be afforded by only a few (e.g. proprietary solutions like VMWare FT).

What does Remus offer?

Remus offers a totally transparent HA solution for Xen VMs based on shared nothing storage model. It takes checkpoints of a VM at high frequency (20-40 checkpoints/second) and asynchronously replicates them to a backup host. Network output from primary is buffered until checkpoint is committed at backup. Disk writes are replicated and buffered at backup during a checkpoint interval and flushed at checkpoint commit.

a) On failover, the VM at the backup machine “resumes” execution from the last consistent checkpoint, as though the failure never happened. All runtime OS state including active TCP connections are preserved. Ongoing transactions proceed as usual, with no loss of consistency in memory, network state or disk. At the most, the clients’ TCP stack sees packet loss and retransmits them.

b) Remus is integrated with DRBD (added a new checkpoint replication protocol). So, we can leverage DRBD’s efficient storage resynchronization capabilities without any downtime to VMs.

What do Linux HA tools offer?

A robust failure detection service, split brain detection, fencing, quorum service and cluster resource management stack. These features make up an excellent HA toolstack. And these are features that Remus lacks.

Can we get the Best of Both Worlds:-

a) Leverage Remus for efficient replication of VMs and recover all runtime state without loss of consistency or client connectivity.

b) Leverage features of time-tested HA systems like Pacemaker, Heartbeat, etc for smart failure detection, network partition handling and resource/node fencing.

### One Line Summary

Remus is a HA system for Xen VMs that preserves complete
Guest OS runtime state (including network connections) upon failover.

### 添付資料URL

掲載なし

<a id="session-33"></a>
## 24. Finding and burying Configuration Defects in Linux with the undertaker

- セッション個別URL: https://blog.linuxplumbersconf.org/2011/ocw/sessions/33
- Track: Development Tools
- 日時: Wednesday, September 7, 2011 2:50 – 5:20pm

### Description

Much system software can be configured at compile time to
tailor it with respect to a broad range of supported hardware
architectures and application domains. A good example is the
Linux kernel, which provides more than 10,000 configurable
features, growing rapidly.
From the maintenance point of view, compile-time con-
figurability imposes big challenges. The configuration model
(the selectable features and their constraints as presented to
the user) and the configurability that is actually implemented
in the code have to be kept in sync, which, if performed man-
ually, is a tedious and error-prone task. In the case of Linux,
this has led to numerous defects in the source code, many of
which are actual bugs.
We suggest an approach to automatically check for
configurability-related implementation defects in large-scale
configurable system software. The configurability is extracted
from its various implementation sources and examined for
inconsistencies, which manifest in seemingly conditional
code that is in fact unconditional. We evaluate our approach
with the latest version of Linux, for which our tool detects
1,776 configurability defects, which manifest as dead/super-
fluous source code and bugs. Our findings have led to numer-
ous source-code improvements and bug fixes in Linux: 123
patches (49 merged) fix 364 defects, 147 of which have been
confirmed by the corresponding Linux developers and 20 as
fixing a new bug.

### One Line Summary

Finding and burying Configuration Defects in Linux with the undertaker

### 添付資料URL

- [slides](http://linuxplumbersconf.org/2011/ocw//system/presentations/33/original/plumbers-presentation-tartler.pdf)（file）


- スケジュール掲載のアーカイブURL: https://blog.linuxplumbersconf.org/2011/ocw/system/presentations/33/original/plumbers-presentation-tartler.pdf
<a id="session-63"></a>
## 25. Session Lead

- セッション個別URL: https://blog.linuxplumbersconf.org/2011/ocw/sessions/63
- Track: Development Tools
- 日時: Wednesday, September 7, 2011 3:50 – 6:20pm

### Description

The Linux kernel is one of the largest and highly configurable open source software projects. It has hundreds of developers and these developers have a wide range of expertise. Tools to help developers and maintainers are becoming increasingly important in the Linux development process. Some familiar examples are git for source code management, checkpatch for enforcing coding style, and quilt for managing patches.

In recent years, a number of new tools have been created to aide in various aspects of the development process. These include tools for understanding the source code, finding various kinds of bugs, and performing source code evolutions. This track will present some of these tools. There will additionally be an opportunity to discuss how tool usage can be improved and what kind of tools are still needed.

### One Line Summary

Tools to aid in the development of Linux code

### 添付資料URL

掲載なし

<a id="session-69"></a>
## 26. Ad Hoc Synchronization Considered Harmful

- セッション個別URL: https://blog.linuxplumbersconf.org/2011/ocw/sessions/69
- Track: Development Tools
- 日時: Wednesday, September 7, 2011 2:10 – 3:00pm

### Description

Many synchronizations in existing multi-threaded programs are implemented in an ad hoc way. The first part is a comprehensive characteristic study of ad hoc synchronizations in concurrent programs. By studying 229 ad hoc synchronizations in 12 programs of various types (server, desktop and scientific), including Apache, MySQL, Mozilla, etc., I find several interesting and perhaps alarming characteristics: (1) Every studied application uses ad hoc synchronizations. Specifically, there are 6–83 ad hoc synchronizations in each program. (2) Ad hoc synchronizations are error-prone. Significant percentages (22–67%) of these ad hoc synchronizations introduced bugs or severe performance issues. (3) Ad hoc synchronization implementations are diverse and many of them cannot be easily recognized as synchronizations, i.e. have poor readability and maintainability.

The second part is about a tool called SyncFinder to automatically identify and annotate ad hoc synchronizations in concurrent programswritten in C/C++ to assist programmers in porting their code to better structured implementations, while also enabling other tools to recognize them as synchronizations. Evaluation using 25 concurrent programs shows that, on average, SyncFinder can automatically identify 96% of ad hoc synchronizations with 6% false positives.

I have two use cases to leverage SyncFinder’s auto-annotation. The first one uses annotation to detect 5 deadlocks (including 2 new ones) and 16 potential issues missed by previous analysis tools in Apache, MySQL and Mozilla. The second use case reduces Valgrind data race checker’s false positive rates by 43–86%.

### One Line Summary

A characteristic study on ad hoc synchronization in software systems and a tool called SyncFinder to automatically identify and annotate them.

### 添付資料URL

- [slides](http://linuxplumbersconf.org/2011/ocw//system/presentations/69/original/SyncFinder-LPC.pptx)（file）


- スケジュール掲載のアーカイブURL: https://blog.linuxplumbersconf.org/2011/ocw/system/presentations/69/original/SyncFinder-LPC.pptx
<a id="session-159"></a>
## 27. Diagnosing Linux/Firmware related Issues with the Firmware Test Suite

- セッション個別URL: https://blog.linuxplumbersconf.org/2011/ocw/sessions/159
- Track: Development Tools
- 日時: Wednesday, September 7, 2011 3:30 – 4:20pm

### Description

Linux and BIOS/ACPI interactions are complex and difficult to diagnose.  BIOS misconfiguration and broken ACPI tables can lead to obscure and subtle bugs or kernel warnings that can be difficult to decipher.  The Firmware Test Suite has been developed to sanity check for buggy PC firmware that does not confirm to various firmware specifications.  The tool also attempts to diagnose issues and provide user friendly advice to help fix or workaround firmware related problems.

### One Line Summary

Discussion on how to automatically diagnose firmware issue that can affect Linux.

### 添付資料URL

- [slides](http://linuxplumbersconf.org/2011/ocw//system/presentations/159/original/fwts-plumbers-2011.pdf)（file）


- スケジュール掲載のアーカイブURL: https://blog.linuxplumbersconf.org/2011/ocw/system/presentations/159/original/fwts-plumbers-2011.pdf
<a id="session-165"></a>
## 28. Killing Bugs in C with Smatch

- セッション個別URL: https://blog.linuxplumbersconf.org/2011/ocw/sessions/165
- Track: Development Tools
- 日時: Wednesday, September 7, 2011 1:50 – 2:40pm

### Description

Smatch is a static analysis tool for C that is used on the kernel.  It has resulted in hundreds of patches.  Quite a few have been security related or were significant enough for the stable kernel.

This talk will give an introduction to Smatch. It will describe some of the internals.  It will also describe briefly how to make a Smatch check which is custom to a specific project.

The Linux kernel is twenty years old.  In another twenty years, it is still going to be around and it is still going to be written in C.  If we’re going to achieve Star Trek level code then we need better tools.  The latter part of the talk will look ahead at the five year plan for Smatch.  For example, Smatch has found many buffer overflows but in the future it could find even more.

### One Line Summary

An introduction to the Smatch static checker and a look at the future.

### 添付資料URL

- [slides](https://blog.linuxplumbersconf.org/2011/ocw/system/presentations/165/original/transcript.txt)（file）

<a id="session-255"></a>
## 29. Reducing your patch workload with Patchwork

- セッション個別URL: https://blog.linuxplumbersconf.org/2011/ocw/sessions/255
- Track: Development Tools
- 日時: Wednesday, September 7, 2011 3:10 – 4:00pm

### Description

Patchwork is a patch tracking system for community-based projects.  It is intended to make the patch management process easier for both the project’s contributors and maintainers, leaving time for the more important (and more interesting) stuff.

Currently, Patchwork is being used for a number of open-source projects, mostly subsystems of the Linux kernel. Although Patchwork has been developed with the kernel workflow in mind, the aim is to be flexible enough to suit the majority of community projects.

Since last year’s Patchwork presentation at Linux Plumber’s Conference, several new features have been introduced, including some from suggestions raised there. This presentation will explain some of these changes, and how they may fit with your day-to-day workflow.

As well as covering the recent updates, the presentation will include some of Patchwork’s design philosophies, to frame a discussion about future Patchwork development – what has been helpful so far, what hasn’t, and where to go from here.

### One Line Summary

An overview and update on the Patchwork patch-tracking system.

### 添付資料URL

- [slides](http://linuxplumbersconf.org/2011/ocw//system/presentations/255/original/patchwork.pdf)（file）


- スケジュール掲載のアーカイブURL: https://blog.linuxplumbersconf.org/2011/ocw/system/presentations/255/original/patchwork.pdf
<a id="session-297"></a>
## 30. Codemap, google maps for source code

- セッション個別URL: https://blog.linuxplumbersconf.org/2011/ocw/sessions/297
- Track: Development Tools
- 日時: Wednesday, September 7, 2011 1:30 – 4:00pm

### Description

It is very difficult to understand million lines of code, to get the big picture. Developers still mostly use 80-columns editors like vim or emacs, and tools like ctags or cscope to explore a large codebase.

Codemap is a graphical source code browser with a zooming interface a la google maps. When used on a recent 30 inches monitor, it can help quickly understand a large codebase. Like google earth it also provides layers that helps the developer sees the codebase through different views (code coverage, age, number of authors, etc).

This talk will present the ideas behind codemap and its underlying infrastructure pfff. pfff (for PHP frontend for fun originally), started as a static analysis framework for PHP to analyze the facebook frontend code, but has since evolved to support multiple programming languages, including C.

https://github.com/facebook/pfff/wiki/CodeMap
https://github.com/facebook/pfff/wiki/Main

### One Line Summary

Codemap is a semantic source code visualizer helping to navigate, visualize and search a large codebase using ideas similar to google maps.

### 添付資料URL

- [slides](http://linuxplumbersconf.org/2011/ocw//system/presentations/297/original/codemap-plumbers-2011.ppt)（file）


- スケジュール掲載のアーカイブURL: https://blog.linuxplumbersconf.org/2011/ocw/system/presentations/297/original/codemap-plumbers-2011.ppt
<a id="session-363"></a>
## 31. Tolerating hardware device failures in software

- セッション個別URL: https://blog.linuxplumbersconf.org/2011/ocw/sessions/363
- Track: Development Tools
- 日時: Wednesday, September 7, 2011 2:30 – 5:00pm

### Description

In this talk, I will show how the Linux operating system is not robust to the problem of unreliable hardware and describe the tool we have developed that detects these problems and automatically patches them.

Most reliability and bug fixing development tools, target the driver-kernel interface and do not address problems due to hardware issues. The device and driver interact through a protocol specified by the hardware. Failure in adherence to this protocol, or in its implementation can lead to serious security and reliability issues since drivers operate in privileged domain in modern operating systems. Devices may not work as per their specification due transient failures due to device wear-out, electrical interference or bugs in hardware. Additionally, the driver may not even be written from correct specifications. Many OS and device vendors mention various guidelines on how device data should be handled when using inside driver or OS code. The Linux kernel mailing list contains numerous reports of drivers waiting forever and reminders from kernel experts to avoid infinite waits. Microsoft too has identified how having a “hardened” driver reduces incidence of unplanned reboots from 8% to 3%. Applying the same solutions as used for driver software bugs do not address reliability due to unreliable hardware. Hence, in this talk I will assess the nature of hardware unreliability issues that plague modern drivers and describe our tools that address these issues.

To solve the above problem, we have developed Carburizer. Carburizer is a code manipulation tool with an optional runtime that automatically hardens drivers. A hardened driver is one that can survive the failure of its device and if possible, return the device to its full function. Carburizer comprises of a static analysis component and an optional runtime. The static analysis component runs on commodity drivers to detect where the driver uses data from device in critical control or data paths that can potentially cause the system to crash or hang if the device generates corrupt values. We categorize such uses as “hardware dependence bugs”. Carburizer also repairs this code by patching to ensure necessary bounds, range and timeout checks on device data before its risky use. Additionally, Carburizer finds code paths where a driver detects that the device has malfunctioned, by returning an error as a result of a hardware action, and inserts an error reporting statement if the code does not already include one. Error reporting information about device failures is useful for central fault management systems to diagnosis system failures and save debugging time. The result of the static analysis phase is a hardened binary driver that is resistant to hardware failures. Furthermore, the (optional) runtime component ensures that stuck or missing interrupts do not occur by monitoring driver execution and device responses.

We successfully implemented Carburizerand were able to find 992 hardware dependence bugs in the Linux 2.6.18.8 driver tree. We also found approximately 1100 cases where the driver was missing error reporting information. Also, Carburizer runtime imposed less than one half percent CPU overhead when compared to a regular system. When re-running these results on a newer Linux kernel (2.6.34), we found 1120 instances of hardware dependence bugs indicating that this problem continues to persist.

### One Line Summary

Improving reliability of Linux device drivers against hardware failures and hardware specification bugs

### 添付資料URL

- [slides](http://linuxplumbersconf.org/2011/ocw//system/presentations/363/original/plumbers-conf.pptx)（file）


- スケジュール掲載のアーカイブURL: https://blog.linuxplumbersconf.org/2011/ocw/system/presentations/363/original/plumbers-conf.pptx
<a id="session-441"></a>
## 32. Reproducible builds and infrastructure

- セッション個別URL: https://blog.linuxplumbersconf.org/2011/ocw/sessions/441
- Track: Development Tools
- 日時: Wednesday, September 7, 2011 3:40 – 4:30pm

### Description

If your biggest customer reported a bug in a three-year-old version of your product, could you even compile it today? Do you know what build environment you used, and will the build environment you have today work? Could you say with confidence that you didn’t change anything outside of the bugfix?

How quickly could you split the functions of one server across several? Or duplicate your data center if it went up in smoke?

Do you know what toolchains can successfully build a 2.6.32 kernel?  The latest binutils won’t.  How easily can you dig up a suitable toolchain on a modern system?

We’re building Apters , a set of tools and services to let you define and version your software builds and system infrastructures.  We think software assembly and system assembly require fundamentally the same processes, just at different scales.  We want to track everything that goes into a build: source code and build dependencies.

Various projects have written parts of this, in the form of build daemons or package managers, but those tools don’t consistently provide versioning, reproducibility, or generality.

In this lightning talk, we’ll give an overview of the unsolved problems in build and release processes, explain what makes them so challenging, and show how Apters solves them.

### One Line Summary

You already use version control for your software, but what about your build dependencies and your system infrastructures?  Come hear about Apters, our solution for reproducible builds and infrastructures.

### 添付資料URL

- [slides](http://linuxplumbersconf.org/2011/ocw//system/presentations/441/original/apters.pdf)（file）


- スケジュール掲載のアーカイブURL: https://blog.linuxplumbersconf.org/2011/ocw/system/presentations/441/original/apters.pdf
<a id="session-27"></a>
## 33. Runtime PM vs System Sleep

- セッション個別URL: https://blog.linuxplumbersconf.org/2011/ocw/sessions/27
- Track: Refereed Presentations
- 日時: Wednesday, September 7, 2011 2:50 – 3:40pm

### Description

On some systems runtime power management (cpuidle and I/O runtime PM combined) is sufficient to put the system into a low-power state that from the power consumption perspective is not different from a system sleep state.  However, while runtime power management seeks to be transparent from the user space’s point of view, it is generally expected that system suspend can happen at any time at the user’s request.  This requires system suspend to be carried out in a specific way involving operations that are never performed during transitions initiated by runtime power management.  I will explain why system sleep cannot be regarded as a special case of runtime power management in general and why the kernel’s runtime power management frameworks are not generally suitable for implementing system suspend.

### One Line Summary

There are fundamental differences between runtime PM and system suspend such that system sleep cannot be regarded as "deep idle".

### 添付資料URL

- [slides](http://linuxplumbersconf.org/2011/ocw//system/presentations/27/original/system_sleep_vs_runtime_PM.pdf)（file）


- スケジュール掲載のアーカイブURL: https://blog.linuxplumbersconf.org/2011/ocw/system/presentations/27/original/system_sleep_vs_runtime_PM.pdf
<a id="session-417"></a>
## 34. Linux OS Infrastructure for Memory Power Management

- セッション個別URL: https://blog.linuxplumbersconf.org/2011/ocw/sessions/417
- Track: Refereed Presentations
- 日時: Wednesday, September 7, 2011 3:40 – 4:30pm

### Description

Modern memory controller (like those supporting DDR3 standard),
have created an opportunity to conserve the power consumed by the memory subsystem by supporting multiple power savings states. Designing a cooperative VM framework in Linux OS could help save power in the memory subsystem. This presentation will cover some of the core kernel VM infrastructure we are proposing, that could be used for memory power management in such hardware platforms.

The memory hardware offers different level of support to manage power. For example, the TI OMAP4 board supports Partial Array Self-refresh and the Samsung Exynos supports the two memory controllers to be in different power state. At present, the Linux VM is agnostic to the memory hardware topology and cannot take it into account in the memory allocation/deallocation operations. In this talk, we discuss a memory regions framework that exposes the physical memory characteristics to the virtual memory manager and enable it to make power-aware memory decision. Besides power management, the memory regions infrastructure can also be used for doing contiguous memory allocations. This approach may
provide a better and more fine grained alternative to NUMA-node based approach to power management.

In this presentation we will discuss the different VM approaches to solving this problem, the pitfalls, challenges and future work. It would also be beneficial to embedded system designers and application developers who would like to see a programmable interface into the Linux VM subsystem for optimal use of memory resources under certain allocation constraints or special use cases.

### One Line Summary

Discuss details of a Linux OS infrastructure to exploit memory power management capabilities in the hardware

### 添付資料URL

- [slides](http://www.linuxplumbersconf.com/2011/ocw//system/presentations/417/original/LinuxMemoryPowerSaving.pdf)（file）


- スケジュール掲載のアーカイブURL: https://blog.linuxplumbersconf.org/2011/ocw/system/presentations/417/original/LinuxMemoryPowerSaving.pdf
<a id="session-717"></a>
## 35. Relativistic Development

- セッション個別URL: https://blog.linuxplumbersconf.org/2011/ocw/sessions/717
- Track: Keynote
- 日時: Thursday, September 8, 2011 9:00 – 9:45am

### Description

This talk presents the one true development model, derived with high probability and infinite precision through a series of calculations requiring months of processor time on the fastest super computer… Er, well, no, not really. The thing is, even though development models are about producing code for computers, they’re actually human solutions to human problems. They have as much to do with psychology, sociology, and anthropology as they do with technology. This talk explores the rich diversity of FLOSS development, and how to learn from developers in other communities who do things differently.

(See the LWN article for a report on this talk.)

### One Line Summary

Exploring FLOSS development models, good, bad, and ugly.

### 添付資料URL

- [slides](http://www.linuxplumbersconf.com/2011/ocw//system/presentations/717/original/development_models.pdf)（file）


- スケジュール掲載のアーカイブURL: https://blog.linuxplumbersconf.org/2011/ocw/system/presentations/717/original/development_models.pdf
<a id="session-381"></a>
## 36. Extending (Disk) Data Integrity Support in Linux

- セッション個別URL: https://blog.linuxplumbersconf.org/2011/ocw/sessions/381
- Track: Refereed Presentations
- 日時: Thursday, September 8, 2011 10:00 – 10:50am

### Description

There is a new crop of data storage systems that allow the OS to tag each sector with a checksum and other metadata (DIF); this talk will summarize where Linux is today in terms of interfacing with hardware, then discuss how to modify filesystems to use these features and expose some of the API to user space programs.  It is hoped that we can come out of the discussion with a rough userland interface and a better idea what work needs to be done to the filesystems to support the features.

### One Line Summary

This talk summarizes where T10 DIF support sits today in Linux, and moves on to exposing the integrity API to userspace and how we might accomplish this through the filesystems.

### 添付資料URL

- [slides](http://linuxplumbersconf.org/2011/ocw//system/presentations/381/original/lpc2011_slides.odp)（file）


- スケジュール掲載のアーカイブURL: https://blog.linuxplumbersconf.org/2011/ocw/system/presentations/381/original/lpc2011_slides.odp
<a id="session-567"></a>
## 37. Unified Memory Management

- セッション個別URL: https://blog.linuxplumbersconf.org/2011/ocw/sessions/567
- Track: Unified Memory Management
- 日時: Thursday, September 8, 2011 

### Description

One of the big issues we’ve been faced with at Linaro is around GPU and multimedia device integration, in particular the memory management requirements for supporting them on ARM.  This cycle, we are focusing on driving consensus around a unified memory management solution for embedded systems that support multiple architectures and SoCs; though the goal is that the solution be applicable to all architectures.

The effort officially kicked off with a birds-of-a-feather discussion at the Embedded Linux Conference in April, and really picked up steam at the mini-summit held at the Linaro Developer Summit in May.  At the mini-summit, members of the community as well as vendor representatives discussed the issues faced when integrating all of the devices on an SoC, and why those efforts turned out not to be maintainable.  For the kernel, these fall into 3 categories:

- Allocation.  Not all devices on an SoC have an MMU, and require physically contiguous buffers for DMA operations.

- DMA mapping API.  Some missing ops were identified, some were identified as needing updates, and cache management needed to be addressed.

- Buffer sharing.  No existing support (that anyone was aware of), so this is the one “new” piece of plumbing.

The use case we used to illustrate the problem is that of a zero-copy pipeline from a video source (could be an input device or encoded file) through a codec, a signal processor, the GPU and display hardware.

Here, we will check-point the effort, evaluate what’s been done and revise what’s left.  The goal is a common solution, regardless of architecture.

wiki

### One Line Summary

A check-point of the Linaro-driven approach to addressing the memory management issues encountered by the ARM ecosystem.

### 添付資料URL

- [slides](http://linuxplumbersconf.org/2011/ocw//system/presentations/567/original/umm.odp)（file）


- スケジュール掲載のアーカイブURL: https://blog.linuxplumbersconf.org/2011/ocw/system/presentations/567/original/umm.odp
<a id="session-885"></a>
## 38. Track overview

- セッション個別URL: https://blog.linuxplumbersconf.org/2011/ocw/sessions/885
- Track: Unified Memory Management
- 日時: Thursday, September 8, 2011 10:00am – 12:30pm

### Description

Problem-space definition, AKA “Why are we here?”
	Roadmap and timeline
	Current work themes (including CMA patchset, DMA-mapping API, and buffer sharing)
	Proofs of concept
	Critique and review
	Architecture input other than ARM

### One Line Summary

The Unified Buffer Management microconference will use a free-form agenda, with time blocked out as shown below

### 添付資料URL

掲載なし

<a id="session-39"></a>
## 39. Session lead

- セッション個別URL: https://blog.linuxplumbersconf.org/2011/ocw/sessions/39
- Track: Virtualization
- 日時: Thursday, September 8, 2011 

### Description

Session lead

### One Line Summary

Session lead for Virtualization micro conf

### 添付資料URL

掲載なし

<a id="session-129"></a>
## 40. Seeking a path to zero-copy paravirtualised networking in the Linux kernel

- セッション個別URL: https://blog.linuxplumbersconf.org/2011/ocw/sessions/129
- Track: Virtualization
- 日時: Thursday, September 8, 2011 

### Description

The Xen paravirtualised network protocol includes the possibility for
the backend domain to map pages belonging to the peer domain directly
in order to avoid a copy on the guest transmit path (i.e. the receive
path from the backends point of view). However in order to do this the
backend driver needs greater insight (and control over) the life-cycle
of pages in an skb’s paged fragment list than is currently available
from the Linux networking stack, since it is necessary to know when
the page is really finished with, even in the face of cloning and
other reference counting activities.

In this talk and the following discussion I would like to explore the
issues with the previous (out of tree) solution and investigate
potential paths to recreating this behaviour as well as consider other
potential users who may benefit from changes of this nature.

### One Line Summary

How can we reintroduce the zero-copy behaviour that was removed as
part of the process of upstreaming Xen's netback driver

### 添付資料URL

- [slides](http://linuxplumbersconf.org/2011/ocw//system/presentations/129/original/2011-09-LPC-Towards-Zero-Copy-PV-Networking.pdf)（file）


- スケジュール掲載のアーカイブURL: https://blog.linuxplumbersconf.org/2011/ocw/system/presentations/129/original/2011-09-LPC-Towards-Zero-Copy-PV-Networking.pdf
<a id="session-135"></a>
## 41. Virtio on Xen

- セッション個別URL: https://blog.linuxplumbersconf.org/2011/ocw/sessions/135
- Track: Virtualization
- 日時: Thursday, September 8, 2011 

### Description

Virtio is the main platform for IO virtualization in KVM.
While the Virtio frontends in Linux are hypervisor independent, the Virtio backends in Qemu are KVM specific.
This talk will go through the work that has been done to allow the Qemu Virtio backends to work on the Xen hypervisor.
It will compare Virtio with the traditional Xen PV driver model, explaining the architectural differences and their impact on performances.

### One Line Summary

How does Virtio compare with traditional Xen PV drivers?

### 添付資料URL

- [slides](http://linuxplumbersconf.org/2011/ocw//system/presentations/135/original/VirtIO_on_Xen.pdf)（file）


- スケジュール掲載のアーカイブURL: https://blog.linuxplumbersconf.org/2011/ocw/system/presentations/135/original/VirtIO_on_Xen.pdf
<a id="session-669"></a>
## 42. Yabusame: Postcopy Live Migration for Qemu/KVM

- セッション個別URL: https://blog.linuxplumbersconf.org/2011/ocw/sessions/669
- Track: Virtualization
- 日時: Thursday, September 8, 2011 

### Description

Yabusame is yet another live migration mechanism for Qemu/KVM, which implements the migration technique known as “postcopy” or “lazy” migration. Just after the “migrate” command is invoked, the execution host of a VM is instantaneously switched to a destination host. We have developed an early prototype of Yabusame and confirmed the prototype successfully worked. Now we design its production-level architecture, through which, hopefully, Yabusame will be merged into the mainline of Qemu/KVM.

In this talk, we explain the design of Yabusame live migration and demonstrate it. We also discuss the mainline merge plan for the upstream. The target audience is virtualization developers and advanced users.

Project page, http://sites.google.com/site/grivonhome/quick-kvm-migration

### One Line Summary

Yabusame is yet another live migration mechanism for Qemu/KVM, which implements the migration technique known as "postcopy" or "lazy" migration.

### 添付資料URL

- [slides](http://linuxplumbersconf.org/2011/ocw//system/presentations/669/original/lpc-post-copy.pdf)（file）


- スケジュール掲載のアーカイブURL: https://blog.linuxplumbersconf.org/2011/ocw/system/presentations/669/original/lpc-post-copy.pdf
<a id="session-777"></a>
## 43. VFIO: PCI device assignment breaks free of KVM

- セッション個別URL: https://blog.linuxplumbersconf.org/2011/ocw/sessions/777
- Track: Virtualization
- 日時: Thursday, September 8, 2011 

### Description

PCI device assignment has long been a wort on the side of KVM; a marriage of convenience, filling the gaps left by PCI-sysfs and lack of sufficient PCI user-space I/O driver support.  The new VFIO driver changes the game, allowing full featured, high performance, PCI drivers in user-space, providing the perfect basis for virtual machine PCI device assignment.  This talk will discuss how current KVM PCI device assignment works, how VFIO is better, and discuss some of the obstacles left to kernel integration and cross platform support.

### One Line Summary

VFIO allows exporting PCI devices to userspace drivers.  Discussion of using this interface for assigning physical devices to virtual machines and obstacles remaining for integration.

### 添付資料URL

- [slides](http://linuxplumbersconf.org/2011/ocw//system/presentations/777/original/LPC-VFIO.pdf)（file）


- スケジュール掲載のアーカイブURL: https://blog.linuxplumbersconf.org/2011/ocw/system/presentations/777/original/LPC-VFIO.pdf
<a id="session-873"></a>
## 44. New filesystem freeze API

- セッション個別URL: https://blog.linuxplumbersconf.org/2011/ocw/sessions/873
- Track: Virtualization
- 日時: Thursday, September 8, 2011 

### Description

There are a few with issues with how filesystem freeze works in Linux:

- Unmounting: It is possible to umount a frozen filesystem. The problem is that there is no API to thaw an unmounted filesystem.

- There is no check API: There is no easy way to know whether a filesystem is frozen or not.

- Foolproofness: Quite often the freeze/thaw process is handled from a
daemon. In such cases we have to make really sure that the process does
not go away or is killed while the filesystem is frozen; there is no
check API so it is not always easy to figure out what is going on. With
the advent of virtualization things got even funnier; in some cases not
even the root user is aware of the existence of such daemon (usually a
guest agent that freezes the guests filesystems before taking a storage
snapshot).

In this session I would like to propose a new API that solves all the problems above and to discuss the addition of à la VSS functionality.

### One Line Summary

Folproof filesystem freeze API for user space daemons and guest agents.

### 添付資料URL

- [slides](http://linuxplumbersconf.org/2011/ocw//system/presentations/873/original/plumbers2011-newfsfreezeapi.pdf)（file）


- スケジュール掲載のアーカイブURL: https://blog.linuxplumbersconf.org/2011/ocw/system/presentations/873/original/plumbers2011-newfsfreezeapi.pdf
<a id="session-525"></a>
## 45. OSWALD: Lessons from and for the Open Hardware Movement

- セッション個別URL: https://blog.linuxplumbersconf.org/2011/ocw/sessions/525
- Track: Refereed Presentations
- 日時: Thursday, September 8, 2011 10:50 – 11:40am

### Description

With funding from the National Science Foundation and other generous sponsors, OSU’s Electrical Engineering and Computer Science Department set about creating an ultra-mobile hand-held device for distribution to undergraduates. Envisioned as a cutting-edge computing platform that would encourage students to tinker with all the latest developments in the mobile space without fear of breaking their own gadgets, the OSWALD project had some fairly grand and noble ambitions: design all hardware and software in house with the help of student developers, thus making the device that much more hackable and learning friendly.

Sadly, things didn’t quite goes as planned for OSWALD and the project encountered a number of critical points of failure. In this talk, Tim explores the design and deployment decisions made while constructing the OSWALD platform, with an eye to providing lessons learned to the open hardware and open source educational community. He’ll also discuss OSWALD’s future and the steps taken to provide similar, useful student experiences in a more efficient fashion.

### One Line Summary

Envisioned as a cutting-edge computing platform that would encourage students to tinker with all the latest developments in the mobile space without fear of breaking their own gadgets, the initial version of the OSWALD project out of OSU failed in several key areas.

### 添付資料URL

- [slides](http://linuxplumbersconf.org/2011/ocw//system/presentations/525/original/oswald_lpc-2011.pdf)（file）


- スケジュール掲載のアーカイブURL: https://blog.linuxplumbersconf.org/2011/ocw/system/presentations/525/original/oswald_lpc-2011.pdf
<a id="session-321"></a>
## 46. D-Bus Performance: Observations and Solutions

- セッション個別URL: https://blog.linuxplumbersconf.org/2011/ocw/sessions/321
- Track: Refereed Presentations
- 日時: Thursday, September 8, 2011 11:40am – 12:30pm

### Description

D-Bus is a software framework for inter-process communication. It is used by Avahi, BlueZ, Evolution, libffado, gconf2, HAL, GNOME VFS, NetworkManager, oFono, Rhythmbox, Tracker, and others.

This is a presentation of the results of a thorough performance analysis of D-Bus. Collabora has constructed numerous metrics of D-Bus performance, and we present those metrics in opposition to related, non-D-Bus performance metrics. We measure context switch time, message send latency, message throughput, process priority issues, and process scheduling behaviour resulting from the D-Bus architecture.

Serious performance flaws were discovered, with their causes. The solutions are not simple.

As one solution to the problems, we propose multicast Unix domain sockets. We also present alternate solutions.

### One Line Summary

Results of performance analysis of D-Bus, with suggestions for improvement.

### 添付資料URL

掲載なし

<a id="session-9"></a>
## 47. Linux Power Management Experiences on Moorestown

- セッション個別URL: https://blog.linuxplumbersconf.org/2011/ocw/sessions/9
- Track: Refereed Presentations
- 日時: Thursday, September 8, 2011 2:00 – 2:50pm

### Description

With Intel’s Moorestown hand-held platform, x86 faces novel power management challenges.

Moorestown is implemented with two chips.  The Lincroft Atom north complex is PC-compatible.  However, Moorestown’s Langwell south-complex drops all PC compatibility, instead supplying devices tailored for low power hand-held use.

Previous talks have covered how Linux responded to the loss of PC-compatibility on this platform.  Here we focus on the power management challenges.  In particular, Linux run-time device power management was in development at the same time as Moorestown hardware, and turned out to be a key piece of the final product, touching platform components as well as every device driver in the system.

### One Line Summary

How Linux handles the power management challenges of the Moorestown platform.

### 添付資料URL

- [slides](http://www.linuxplumbersconf.net/2011/ocw//system/presentations/9/original/LPC2011-MRST.pdf)（file）


- スケジュール掲載のアーカイブURL: https://blog.linuxplumbersconf.org/2011/ocw/system/presentations/9/original/LPC2011-MRST.pdf
<a id="session-705"></a>
## 48. Control loops in userspace

- セッション個別URL: https://blog.linuxplumbersconf.org/2011/ocw/sessions/705
- Track: Containers and Cgroups
- 日時: Thursday, September 8, 2011 

### Description

Kernel cgroups only go so far.  To provide the user-visible semantics that we want, we are forced to implement a large amount of control code in userspace.

I’d like to explore what we do, how we do it, and see what other people do with this.

### One Line Summary

Kernel cgroups are not sufficient for our containment needs.

### 添付資料URL

- [slides](https://blog.linuxplumbersconf.org/2011/ocw/system/presentations/705/original/Control_Loops_In_Userspace.pdf)（file）

<a id="session-741"></a>
## 49. Hierarchical Cgroup support in userland

- セッション個別URL: https://blog.linuxplumbersconf.org/2011/ocw/sessions/741
- Track: Containers and Cgroups
- 日時: Thursday, September 8, 2011 

### Description

With linux hierarchical cgroup support, each resource like cpu, network, IO, etc, could have a corresponding cgroup subsystem that controls the allocation of that resource to the threads grouped together in a cgroup based on user’s configurations.

In Google, we are using hierarchical cgroups to:

manage slack resources distribution
	manage resource distribution between threads among a job
	etc.

### One Line Summary

Using hierarchical cgroups to manage shared resources.

### 添付資料URL

掲載なし

<a id="session-747"></a>
## 50. Efficient utilization by overcommitment.

- セッション個別URL: https://blog.linuxplumbersconf.org/2011/ocw/sessions/747
- Track: Containers and Cgroups
- 日時: Thursday, September 8, 2011 

### Description

High utilization and efficiency of shared resources can be achieved by overcommiting resources to a prioritized set of users.

### One Line Summary

Efficient utilization by overcommitment.

### 添付資料URL

掲載なし

<a id="session-819"></a>
## 51. dcache management

- セッション個別URL: https://blog.linuxplumbersconf.org/2011/ocw/sessions/819
- Track: Containers and Cgroups
- 日時: Thursday, September 8, 2011 

### Description

The Linux kernel uses this cache to keep VFS information at hands when accessing files. This cache grows in time, but system tries to shrink one from time to time. Unfortunately elements in this cache can be pinned in memory in way too big amount thus causing DoS attacks.

The intention of the dcache management is to prevent pinning too many cache elements.

There is an on-going discussion on lkml about the feature and its interface.

### One Line Summary

Add dcache accounting/limiting to the kernel

### 添付資料URL

掲載なし

<a id="session-825"></a>
## 52. Memory controller improvements

- セッション個別URL: https://blog.linuxplumbersconf.org/2011/ocw/sessions/825
- Track: Containers and Cgroups
- 日時: Thursday, September 8, 2011 

### Description

Existing memory controller is good, but suffers from several problems – lack of virtual memory control, too big data structures, double LRU lists etc. The discussion is aimed  at improving these problems.

### One Line Summary

Proposed improvements to cgroups memory controller

### 添付資料URL

掲載なし

<a id="session-831"></a>
## 53. Checkpoint/restart in the userspace

- セッション個別URL: https://blog.linuxplumbersconf.org/2011/ocw/sessions/831
- Track: Containers and Cgroups
- 日時: Thursday, September 8, 2011 

### Description

Checkpoint/restart is the ability to save tasks state in some plate to later restore one. There have been several attempts of having this functionality in kernel but none of them succeeded so far. Recently OpenVZ engineers has proposed the mostly-in-the-userspace approach to the problem which looks promising

The aim of the discussion is to find out ways for further c/r implementation.

See also: http://lwn.net/Articles/452184/

### One Line Summary

Checkpoint/restart in the userspace

### 添付資料URL

- [slides](http://linuxplumbersconf.org/2011/ocw//system/presentations/831/original/LinuxPlumbers-Santa-Rosa-miniconf-2011.odp)（file）


- スケジュール掲載のアーカイブURL: https://blog.linuxplumbersconf.org/2011/ocw/system/presentations/831/original/LinuxPlumbers-Santa-Rosa-miniconf-2011.odp
<a id="session-837"></a>
## 54. Container in a file

- セッション個別URL: https://blog.linuxplumbersconf.org/2011/ocw/sessions/837
- Track: Containers and Cgroups
- 日時: Thursday, September 8, 2011 

### Description

Typically container’s files are stored next to hosts’ on the same partition, and container tasks work in chrooted environment to prevent them from spoofing each over. This approach is simple but has a number of limitations.

The technology currently being developed by Parallels is a loopback block device that allows to store container’s files in a single file which is mounted to the host system when container starts.

The discussion will cover our implementation, differences with traditional loopback device, and other possible ways of achieving the same thing.

### One Line Summary

Container in a file (loopback-like block device)

### 添付資料URL

掲載なし

<a id="session-843"></a>
## 55. Proc fs virtualization

- セッション個別URL: https://blog.linuxplumbersconf.org/2011/ocw/sessions/843
- Track: Containers and Cgroups
- 日時: Thursday, September 8, 2011 

### Description

Currently /proc contents is virtualized only in terms of pid namespaces this proc mount is responsible for. With this approach, the contents of non-pid part of the proc (i.e. system files) is system-wide. The discussion will cover the security and other aspects of this model and the ways to get beyond this.

### One Line Summary

An in-container view of /proc fs

### 添付資料URL

掲載なし

<a id="session-849"></a>
## 56. Entering a container

- セッション個別URL: https://blog.linuxplumbersconf.org/2011/ocw/sessions/849
- Track: Containers and Cgroups
- 日時: Thursday, September 8, 2011 

### Description

When a container is running, sometimes it is required to spawn a task inside this container for administrative and other needs. Currently such ability is only present in the OpenVZ containers and is not available in LXC.

The aim is to discuss the ways of achieving this functionality in the mainline containers implementation

### One Line Summary

Container enter functionality

### 添付資料URL

掲載なし

<a id="session-855"></a>
## 57. vzctl for LXC

- セッション個別URL: https://blog.linuxplumbersconf.org/2011/ocw/sessions/855
- Track: Containers and Cgroups
- 日時: Thursday, September 8, 2011 

### Description

There is only one implementation of Linux containers user-space tools, called lxc. Currently lxc utility is very raw and somewhat incomplete, but it works

In OpenVZ, we have vzctl utility which is pretty highlevel, complete and documented, but it only works with OpenVZ kernel.

The aim is to discuss the modification of vzctl so it can be used for both openvz and mainline kernel.

### One Line Summary

Alternative LXC user-space implementation

### 添付資料URL

掲載なし

<a id="session-861"></a>
## 58. Extending CPU accounting stats

- セッション個別URL: https://blog.linuxplumbersconf.org/2011/ocw/sessions/861
- Track: Containers and Cgroups
- 日時: Thursday, September 8, 2011 

### Description

Currently the CPUacct cgroup controller only accounts for the system time and the user time. We propose to expand the accounting to provide stats such as number of running, sleeping and blocked tasks, time spent idling and/or waiting for I/O and so on. Such stats are available system-wide and are also needed for containers.

### One Line Summary

Extending CPU accounting stats

### 添付資料URL

掲載なし

<a id="session-45"></a>
## 59. Hardware Accelerated multimedia, the missing parts

- セッション個別URL: https://blog.linuxplumbersconf.org/2011/ocw/sessions/45
- Track: Desktop
- 日時: Thursday, September 8, 2011 

### Description

HW-accelerated multimedia is possible nowadays, but is restricted to using one specific subsytem or combination of subsystems. Users shouldn’t have to care about those restrictions, and parts are missing kernel-side to solve that.

Today’s multimedia usage mixes V4L2, libVA, VDPAU, OpenGL, GEM/TTM, OpenMAX, OpenCL, 3rd party API/drivers, gpu, dsp, dedicated boards and cpu.

This talk will give a userspace point of view on what bottlenecks/blockers are encountered when using/mixing those various (sub)systems and what’s missing to make Linux the killer platform out there for as many multimedia usages as possible.

The point of this talk is not to force adoption of a certain subsystem, but to bring to the table an extensive point of view of the problems we have to fix.

### One Line Summary

How the kernel can help user space make best use of hardware for multimedia acceleration.

### 添付資料URL

掲載なし

<a id="session-513"></a>
## 60. GPU kernel and userspace border

- セッション個別URL: https://blog.linuxplumbersconf.org/2011/ocw/sessions/513
- Track: Desktop
- 日時: Thursday, September 8, 2011 

### Description

The API provided by the kernel GPU driver is crucial for the graphic stack performance and maintenability. It could be a bottleneck or prove very hard to be adapted/improved over time.

Unlike the closed driver, open source graphic stack have to ensure computer security by preventing use of the GPU to compromise the computer security (over writting system memory, crashing the computer, …). Hence the open source driver can’t allow userspace to directly feed GPU command, unless GPU have capacity to enforce security (memory protection, context, privilegied context, …).

This talk will discuss alternative way to build the graphic stack in order to work around those issue. The aim being to have the most efficience and fastest graphic stack while also having strong security and maintainability.

### One Line Summary

Building an efficient and maintenable API for allowing userspace to program GPU is one of the most important piece of the graphic stacks

### 添付資料URL

- [slides](http://linuxplumbersconf.org/2011/ocw//system/presentations/513/original/glisse-lpc2011.pdf)（file）


- スケジュール掲載のアーカイブURL: https://blog.linuxplumbersconf.org/2011/ocw/system/presentations/513/original/glisse-lpc2011.pdf
<a id="session-639"></a>
## 61. Enhance video experience by Multi-plane-mc

- セッション個別URL: https://blog.linuxplumbersconf.org/2011/ocw/sessions/639
- Track: Desktop
- 日時: Thursday, September 8, 2011 

### Description

Some embedded system provides more than one pipeline (multi-plane) to get better performance. Video and window system run on separate planes. Intel CE4100 platform belongs to this kind. Hopefully, users could see though the window to enjoy the video underneath. For example, for hardware accelerated flash/html5 playback, video is rendered on the back plane. Generally, video needs to be copied to current plane. This operation is expensive for rapidly changed frames. One famous solution is hardware overlay. Color key is used to mask the video area. But the specific RGB color may be used by other applications and caused unexpected holes on the screen. Besides, this method cannot support translucent elements above the video which is one feature in HTML5. We provide a good solution without that copy and could enable translucency features.
In this talk we will present:
a) Comparing Multi-plane solution to HW overlay solution to get good video performance.
b) Our findings on support Multi-plane in Xorg and browser.
c) Providing one easy-implement and less-cost solution by window manager.
d) Demo one user case to show its capabilities.
Multi plane is becoming a natural soc method in embedded system especially suitable for TV boxes. In the near future, most STB will be powered with this feature. So this will be an interesting and attractive topic. We have been doing a lot of investigation and implementation on it, and could provide a demo (on the hardware of DHG’s Sodaville CE4100 board) to show its capabilities.

### One Line Summary

This presentation will introduce multi-plane HW solution and provide one software solution to make good use of multi-plane and enable translucency.

### 添付資料URL

掲載なし

<a id="session-801"></a>
## 62. OpenGL (and friends) in the Future: A notional view

- セッション個別URL: https://blog.linuxplumbersconf.org/2011/ocw/sessions/801
- Track: Desktop
- 日時: Thursday, September 8, 2011 

### Description

In OpenGL’s 20-year lifetime, the API, and how it’s used has changed drastically.  This talk highlights the changes in the API brought about by hardware evolution, and how those changes have impacted graphics driver stacks.  Additionally, this talk will briefly discuss other changes brought about by OpenGL ES and OpenCL, and the changes brought about those APIs interacting and sharing data.

### One Line Summary

OpenGL (and friends) in the Future: A notional view of what may happen in the land of graphics APIs.

### 添付資料URL

- [slides](http://linuxplumbersconf.org/2011/ocw//system/presentations/801/original/OpenGL and Friends in the Future.pdf)（file）


- スケジュール掲載のアーカイブURL: https://blog.linuxplumbersconf.org/2011/ocw/system/presentations/801/original/OpenGL and Friends in the Future.pdf
<a id="session-243"></a>
## 63. Virtualization: Writing (and testing) device drivers without hardware

- セッション個別URL: https://blog.linuxplumbersconf.org/2011/ocw/sessions/243
- Track: Refereed Presentations
- 日時: Thursday, September 8, 2011 2:50 – 3:40pm

### Description

As devices become more complex, it becomes more difficult to design and develop quality device drivers before hardware is available.  Without knowing how certain feature sets of the hardware interact with one another, a driver developer is left with a best-guess effort when designing and building the driver.  This can lead to mountains of untested code being developed, potentially wasting large amounts of time debugging and rewriting once hardware is available.

This presentation will showcase how easy it is to build a hardware model inside of QEMU to aid in fast development and testing of a device driver.  If the developer is armed with a hardware specification, that’s all they need to build the hardware model.  Also, certain debugging techniques are available in QEMU that aren’t with hardware, such as dummy registers to change hardware behavior on the fly, allowing easy error injection for a driver to handle.

Building a model inside QEMU also harnesses the power of virtualization, allowing this single model to be used with multiple Virtual Machines, such as a Linux VM, Windows VM, and FreeBSD VM.  For product-based groups, this means multiple OS drivers can be designed, developed, and tested, well ahead of hardware arrival.

In addition, this presentation will highlight areas of device simulation we hope can be expanded inside QEMU to allow more complex emulation models.  This includes  embedded firmware engines inside a device, or even running silicon RTL inside of QEMU.  With these types of innovations, QEMU may be used to replace costly FPGA’s for product groups running on thin cost margins.

### One Line Summary

How to use QEMU to develop future hardware models to develop and test device drivers before hardware is available.

### 添付資料URL

- [slides](http://linuxplumbersconf.org/2011/ocw//system/presentations/243/original/QEMU KVM for new Devices - Plumbers-2.odp)（file）


- スケジュール掲載のアーカイブURL: https://blog.linuxplumbersconf.org/2011/ocw/system/presentations/243/original/QEMU KVM for new Devices - Plumbers-2.odp
<a id="session-225"></a>
## 64. Where is the Linux kernel on scalability?

- セッション個別URL: https://blog.linuxplumbersconf.org/2011/ocw/sessions/225
- Track: Refereed Presentations
- 日時: Thursday, September 8, 2011 3:40 – 4:30pm

### Description

Modern servers have a growing number of cores and CPU threads.
this requires software and especially the kernel to scale well.
The kernel has many different subsystems: some scale quite
well, others are not so great. We have been doing extensive scalability on large systems with 40 to 64 cores. This talk gives an overview of kernel scalability on workloads ranging from simple system calls, medium complexity
mail and web server and complex database workload. We will show the benefits of some recent improvements in the VFS, memory management, block layers and other subsystems.

### One Line Summary

Overview of kernel scalability on servers.

### 添付資料URL

- [slides](http://linuxplumbersconf.org/2011/ocw//system/presentations/225/original/plumbers-scalability_v3.pdf)（file）


- スケジュール掲載のアーカイブURL: https://blog.linuxplumbersconf.org/2011/ocw/system/presentations/225/original/plumbers-scalability_v3.pdf
<a id="session-15"></a>
## 65. Linux Idle Power Checkup

- セッション個別URL: https://blog.linuxplumbersconf.org/2011/ocw/sessions/15
- Track: Power Management
- 日時: Thursday, September 8, 2011 9:30am – Noon

### Description

Idle power consumption is the single most important metric of platform power management.  It dictates how long the battery will last on a mobile device, it dictates how quiet a desktop can be, and it controls the the minimal server room electricity bill.  Further, idle power is the baseline power to which all run-time power measurements are compared.

Here we examine the latest idle power measurements of Linux versions and competing operating systems on mobile, desktop, and server platforms.  We illustrate areas where Linux is strong, and where Linux needs to improve.

### One Line Summary

Discussion of Linux idle power management vs other OSes

### 添付資料URL

- [slides](http://linuxplumbersconf.org/2011/ocw//system/presentations/15/original/LPC2011-IDLE.pdf)（file）


- スケジュール掲載のアーカイブURL: https://blog.linuxplumbersconf.org/2011/ocw/system/presentations/15/original/LPC2011-IDLE.pdf
<a id="session-21"></a>
## 66. Session Lead

- セッション個別URL: https://blog.linuxplumbersconf.org/2011/ocw/sessions/21
- Track: Power Management
- 日時: Thursday, September 8, 2011 9:00 – 11:30am

### Description

Presentation and discussion of the most important changes in the Linux kernel related to power management introduced since the last PM mini-summit in August 2010.

### One Line Summary

PM Development in The Linux Kernel Since August 2010

### 添付資料URL

- [slides](http://linuxplumbersconf.org/2011/ocw//system/presentations/21/original/PM_development.pdf)（file）


- スケジュール掲載のアーカイブURL: https://blog.linuxplumbersconf.org/2011/ocw/system/presentations/21/original/PM_development.pdf
<a id="session-735"></a>
## 67. Holistic power management

- セッション個別URL: https://blog.linuxplumbersconf.org/2011/ocw/sessions/735
- Track: Power Management
- 日時: Thursday, September 8, 2011 10:00am – 12:30pm

### Description

There’s a bewildering array of power management opportunities on any given system, but right now we tend to concentrate on individual devices. By taking a broader view of the entire system, can we design a power management strategy that leaves the machine usable but consumes no more power than the bare minimum?

### One Line Summary

How can we optimise the power management of an entire system?

### 添付資料URL

- [slides](http://linuxplumbersconf.org/2011/ocw//system/presentations/735/original/lpc2011_pm.odp)（file）


- スケジュール掲載のアーカイブURL: https://blog.linuxplumbersconf.org/2011/ocw/system/presentations/735/original/lpc2011_pm.odp
<a id="session-57"></a>
## 68. Session Lead

- セッション個別URL: https://blog.linuxplumbersconf.org/2011/ocw/sessions/57
- Track: Scaling
- 日時: Thursday, September 8, 2011 

### Description

Linux’s scalability has improved greatly over the past ten years, but much work remains. Yes, the Big Kernel Lock is finally almost completely removed, but there are a number of “little kernel locks” throughout the kernel. Some of these are being worked, for example, Nick Piggin’s work breaking up dcache_lock and d_lock, but others need help as well.

But the increasing use of Linux in the embedded arena highlights the need to scale down as well as up. In fact, given the arrival of multicore embedded CPUs, Linux must scale both up and down simultaneously, preferably while still maintain good response times.

This microconference will therefore look at efforts to scale up, down, and in both directions simultaneously.

### One Line Summary

Scaling Linux, both up and down

### 添付資料URL

掲載なし

<a id="session-729"></a>
## 69. Userspace RCU Library: RCU Synchronization and RCU/Lock-Free Data Containers for Userspace

- セッション個別URL: https://blog.linuxplumbersconf.org/2011/ocw/sessions/729
- Track: Scaling
- 日時: Thursday, September 8, 2011 

### Description

This presentation introduces the Userspace RCU library, a highly-scalable LGPL synchronization library providing very low-overhead and linearly scalable read-side synchronization, as well as lock-free data containers such as queues and stacks. This is followed by a presentation of ongoing work on a RCU red-black tree and a lock-free RCU hash table. Finally, the topic of efficient user-space wake-up management (both in terms of overhead and power-consumption) is discussed.

### One Line Summary

Presentation of the Userspace RCU library features.

### 添付資料URL

- [slides](http://linuxplumbersconf.org/2011/ocw//system/presentations/729/original/Presentation-lpc2011-desnoyers-urcu.pdf)（file）


- スケジュール掲載のアーカイブURL: https://blog.linuxplumbersconf.org/2011/ocw/system/presentations/729/original/Presentation-lpc2011-desnoyers-urcu.pdf
<a id="session-753"></a>
## 70. Scalability problems in/caused by fork

- セッション個別URL: https://blog.linuxplumbersconf.org/2011/ocw/sessions/753
- Track: Scaling
- 日時: Thursday, September 8, 2011 

### Description

Quick overview of scalability problems caused by multiple
processes forking. This includes mainly VM problems.
Don’t have solutions for everything, but can at least
talk about them.

### One Line Summary

Scalability problems in/caused by fork

### 添付資料URL

- [slides](http://linuxplumbersconf.org/2011/ocw//system/presentations/753/original/plumbers-fork-locks_v2.pdf)（file）


- スケジュール掲載のアーカイブURL: https://blog.linuxplumbersconf.org/2011/ocw/system/presentations/753/original/plumbers-fork-locks_v2.pdf
<a id="session-771"></a>
## 71. Backporting the Linux kernel, for good

- セッション個別URL: https://blog.linuxplumbersconf.org/2011/ocw/sessions/771
- Track: BoF
- 日時: Thursday, September 8, 2011 6:30 – 7:30pm

### Description

Typically Linux distributions differentiate themselves in what features get backported into some “Enterprise” releases. Sometimes contractors get hired to backport drivers for random kernel releases. Users at times may not be able to use newer hardware unless their drivers are backported on older stable kernels.

Why not share Linux kernel backport efforts and in fact automate it as much as possible? In this session we’ll review the backport efforts made for the 802.11, Bluetooth and Networking subsystems and review with the community on possibilities to expand on this effort in the hopes of unifying and reducing backport work as much as possible.

### One Line Summary

Unifying Linux kernel backport efforts

### 添付資料URL

- [slides](http://linuxplumbersconf.org/2011/ocw//system/presentations/771/original/kernel-backport-for-good.odp)（file）


- スケジュール掲載のアーカイブURL: https://blog.linuxplumbersconf.org/2011/ocw/system/presentations/771/original/kernel-backport-for-good.odp
<a id="session-621"></a>
## 72. Emerging trends in Licensing standards - BOF

- セッション個別URL: https://blog.linuxplumbersconf.org/2011/ocw/sessions/621
- Track: BoF
- 日時: Thursday, September 8, 2011 6:30 – 7:30pm

### Description

There are some efforts gathering a bit of momentum that would be good to compare notes on.
Topics include:  standard license name short forms,  machine and human readable standards for exchanging licensing information (SPDX, DEP5, … ),  open source tools for doing license detection (FOSSology, Ninka, etc.)

### One Line Summary

BOF for those who want to talk about licensing standards, and automated license detection and reporting.

### 添付資料URL

掲載なし

<a id="session-645"></a>
## 73. Enhance video experience by Multi-plane-bof

- セッション個別URL: https://blog.linuxplumbersconf.org/2011/ocw/sessions/645
- Track: BoF
- 日時: Thursday, September 8, 2011 6:30 – 7:30pm

### Description

Some embedded system provides more than one pipeline (multi-plane) to get better performance. Video and window system run on separate planes. Intel CE4100 platform belongs to this kind. Hopefully, users could see though the window to enjoy the video underneath. For example, for hardware accelerated flash/html5 playback, video is rendered on the back plane. Generally, video needs to be copied to current plane. This operation is expensive for rapidly changed frames. One famous solution is hardware overlay. Color key is used to mask the video area. But the specific RGB color may be used by other applications and caused unexpected holes on the screen. Besides, this method cannot support translucent elements above the video which is one feature in HTML5. We provide a good solution without that copy and could enable translucency features.
In this talk we will present:
a) Comparing Multi-plane solution to HW overlay solution to get good video performance.
b) Our findings on support Multi-plane in Xorg and browser.
c) Providing one easy-implement and less-cost solution by window manager.
d) Demo one user case to show its capabilities.
Multi plane is becoming a natural soc method in embedded system especially suitable for TV boxes. In the near future, most STB will be powered with this feature. So this will be an interesting and attractive topic. We have been doing a lot of investigation and implementation on it, and could provide a demo (on the hardware of DHG’s Sodaville CE4100 board) to show its capabilities.

### One Line Summary

This presentation will introduce multi-plane HW solution and provide one software solution to make good use of multi-plane and enable translucency.

### 添付資料URL

掲載なし

<a id="session-357"></a>
## 74. Memory cgroups: Who's using it out there?

- セッション個別URL: https://blog.linuxplumbersconf.org/2011/ocw/sessions/357
- Track: BoF
- 日時: Thursday, September 8, 2011 6:30 – 7:30pm

### Description

Memory cgroups are a powerful, flexible kernel feature.  However, their flexibility means that their deployment has been for an incredibly varied set of reasons.  It is used to keep backup jobs’ from spoiling
kernel caches, keeping naughty OOM-inducing applications at bay, or even improving latency by ensuring jobs stay in RAM.

This session will pull together the kernel developers responsible for memory cgroups as well as its users.  We will focus on understanding how this feature is being used, and how users want to see it used in the future.

If you have ever thought about using memory cgroups, or wondered how it can be used for a particular purpose, this is the session for you.

### One Line Summary

Discussion of the current or future uses of memory control groups in the real world.

### 添付資料URL

掲載なし

<a id="session-807"></a>
## 75. Optimizing Firefox: Why Large Applications Start Slowly on Linux

- セッション個別URL: https://blog.linuxplumbersconf.org/2011/ocw/sessions/807
- Track: BoF
- 日時: Thursday, September 8, 2011 6:30 – 7:30pm

### Description

Optimizing application startup is hard, even measuring how long an application takes to start is a non-trivial problem.

This talk will consist of 3 main parts:
1. Ways of measuring IO patterns [on startup] using systemtap, gdb, valgrind
2. How to optimize IO patterns on startup given the limitations in existing tools
3. A list of proposed changes in the kernel, ld, ld.so, gcc that could significantly speed up application startup on Linux.

Additionally, the talk will compare application startup on Linux against other major platforms.

### One Line Summary

Linker, compiler, runtime linker and the kernel can be improved to start applications significantly faster

### 添付資料URL

掲載なし

<a id="session-783"></a>
## 76. ARM collaboration summit

- セッション個別URL: https://blog.linuxplumbersconf.org/2011/ocw/sessions/783
- Track: BoF
- 日時: Thursday, September 8, 2011 8:00 – 9:00pm

### Description

Recent discussion of ARM-related topics in various forums show that there are a number of places where the various Linux distros targetting ARM could (and should!) work together to make things work well. This BoF should be a good place for those discussions.

The initial proposed agenda is:

ARM hard-float:
 – What is it and why does it matter?
 – How can distributions keep compatible (i.e. gcc triplet to describe the port)?
	Adding support for ARM as an architecture to the Linux Standard Base (LSB)
 – Does it matter?
 – What’s needed?
	FHS – multi-arch coming soon, how do we proceed?
	3D support on ARM platforms
 – Open GL vs. GLES – which is appropriate?

but I’m sure that other people will think of more issues they’d like to discuss.

### One Line Summary

Meetup for ARM Linux distributions interested in working together

### 添付資料URL

掲載なし

<a id="session-315"></a>
## 77. Kconfig Fragments

- セッション個別URL: https://blog.linuxplumbersconf.org/2011/ocw/sessions/315
- Track: BoF
- 日時: Thursday, September 8, 2011 8:00 – 9:00pm

### Description

Currently defconfigs are a bit of a mess. Looking in the arm architecture tree, there are hundreds of defconfigs which try to provide configs that can be used to generate working kernels for specific SoCs. Unfortunately these defconfigs are sometimes just full config files, making it difficult to see what specific options the SoC boards require beyond the config defaults. Additionally, each board maintainer not only picks the config options to enable the hardware being used, but also may select non-hardware related policy such as which filesystems should be enabled.

The resulting churn in the config space has resulted in flames from Linus, and proposals for possible solutions.

One solution is to utilize the Kconfig language and create fragments that provide meta-config options which will then select all the necessary config features for a specific bit of hardware.

In addition, these fragments can be combined with other Kconfig fragments, that provide policy decisions like what filesystems should be used and what generic drivers to support.

Many distributions already use a similar framework, assembling separate chunks of standard config fragments into a larger config, but this method has limitations. For instance, its possible for one config fragment to set CONFIG_FOO=y but another config fragment to set CONFIG_FOO=n. If these two fragments are combined, it creates a paradox that the kernel config system will not warn the user of. Instead distros/build systems then have to have post-merger validation scripts that check to make sure the resulting config has specific values they care about.

By using kconfig fragments, the kconfig language allows for consistency checks making sure that invalid combinations that produce paradoxes emit errors. Further, each distro uses their own custom build scripts to do this fragment merging, and checking steps. By pushing this functionality into the kernel build system itself, it would simplify and consolidate a chunk of what every distribution has to implement themselves.

However, before this will work, the Kconfig language has limitations that need to be resolved, such as:
1) Being able to select options from a choice block
2) Being able to select options as a module
3) Additionally to really simplify the Kconfig meta options, we will need to extend Kconfig to be able to do full dependency resolution, allowing a leaf config to be selected, and that in turn would select all the options which it depends on.

I have already implemented a proof of concept that tries to provide #1 above, and works around #2. I would like to talk about some of the lessons learned and get input on how to proceed.

Darren Hart (Intel – Yocto Project) will co-lead with me, as his work has run into this config fragment issue as well.

### One Line Summary

BoF to discuss ideas for using Kconfig fragments to replace defconfigs, as well as using them to reduce the amount of distro-specific config management infrastructure that is out there.

### 添付資料URL

掲載なし

<a id="session-699"></a>
## 78. Libhugetlbfs and transparent huge pages

- セッション個別URL: https://blog.linuxplumbersconf.org/2011/ocw/sessions/699
- Track: BoF
- 日時: Thursday, September 8, 2011 8:00 – 9:00pm

### Description

The inclusion of Transparent Huge Pages (THP) into the mainline kernel has given easy access to huge
pages for users on x86-based architectures. THP now provides some functionality which libhugetlbfs
was designed to enable, however there remain cases on x86-based architectures where libhugetlbfs can
scratch the itch. Additionally, libhugetlbfs remains the only game in town for non-x86-based architectures.

This paper will discuss what functionality libhugetlbfs offers to administrators and users on all architectures which support huge pages. Specific topics will include our simplified user-space setup, the four ways offered by libhugetlbfs (program segments, malloc, shm, and direct access) to use huge pages, and areas where libhugetlbfs is still useful on THP-enabled systems. This session will also cover the setup, configuration, and benchmarking of a simple application using huge pages. Finally, the paper
will discuss our future plans to develop libhugetlbfs admin tools to help with configuring and using THP.

### One Line Summary

How libhugetlbfs and THP can be used together to provide easy access to huge pages.

### 添付資料URL

掲載なし

<a id="session-795"></a>
## 79. Testing and fixing BIOS/platform issues

- セッション個別URL: https://blog.linuxplumbersconf.org/2011/ocw/sessions/795
- Track: BoF
- 日時: Thursday, September 8, 2011 8:00 – 9:00pm

### Description

The kernel often has to cope with misconfiguration and bugs in BIOS and  ACPI, working around them when possible and reporting them otherwise. These bugs rarely managed to get fixed upstream, and nothing prevents them from recurring on new systems with new BIOSes. We’d like to change that.

BITS, the BIOS Implementation Test Suite (biosbits.org), provides support for testing and diagnosing these types of issues in a pre-OS environment, including full support for Python scripting in ring 0 with access to hardware and ACPI. We’ve had great success getting BIOS vendors to fix issues tested by BITS, and we’d love to add a pile of new tests to address real issues that kernel developers encounter. We’d like to kick off a discussion on platform issues that Linux currently works around, with the goal of developing tests for those issues and eliminating them in all future BIOSes.

In addition, we’d like to find better ways to use the reference code provided to BIOS vendors within Linux, to override faulty BIOS configuration with the known-good configuration the BIOS should have used.  While this code could simply serve as inspiration for entirely-rewritten Linux drivers, we’d like to find a way to share the upstream reference code between BIOSes and Linux without requiring such rewrites, and without creating unwelcome abstraction layers.

### One Line Summary

The kernel often has to cope with misconfiguration and bugs in BIOS and ACPI, working around them when possible and reporting them otherwise. These bugs rarely managed to get fixed upstream, and nothing prevents them from recurring on new systems with new BIOSes. We'd like to change that.

### 添付資料URL

掲載なし

<a id="session-603"></a>
## 80. What applications need to know about Btrfs.

- セッション個別URL: https://blog.linuxplumbersconf.org/2011/ocw/sessions/603
- Track: BoF
- 日時: Thursday, September 8, 2011 8:00 – 9:00pm

### Description

Btrfs can do many things that other file systems cannot and therefore open lots of new opportunities for application developers.  With built in snapshotting and subvolume support, as well as built in mutli-disk support Btrfs behaves much differently than other file system which can confuse current applications, so this presentation will cover what application developers need to watch out for.

We will also discuss some of the neat features Btrfs brings to the table to make certain operations easier, such as the tree searching ioctls meant to make doing backups simpler and faster.

### One Line Summary

A look at the new things Btrfs can do and how applications can take advantage of them.

### 添付資料URL

掲載なし

<a id="session-891"></a>
## 81. Can Linux Cope with Diversity?

- セッション個別URL: https://blog.linuxplumbersconf.org/2011/ocw/sessions/891
- Track: Keynote
- 日時: Friday, September 9, 2011 9:00 – 9:45am

### Description

In the PC world, hardware is a commodity with changes rolling out slowly and an emphasis on compatible with existing software.  The embedded market on the other hand has incredibly malleable hardware designs that change rapidly and drastically.  Worst case, a single device is used in a handful of products and then is never to be seen again.  In this world, “innovation” is often code for incompatible hardware design rather than genuine innovation.  ARM platform design is coalescing somewhat, but diversity is and will always remain a
hallmark of ARM hardware as “always connected, computing everywhere” becomes true.

So what does this mean for Linux?  Seen in this light, Google Android is a symptom of this diversity.  Forking, carrying forward large patch sets and never upstreaming some code is the current landscape.  Whilst working upstream is the expressed best practise of the Linux community, does it remain true that everything should go upstream? How should we manage the tension between getting a product out the door and working with mainline?  In this presentation, we’ll explore these questions and what it means for the Linux development going forward.

### One Line Summary

An exploration of whether hardware diversity and the need to ship product in the ARM ecosystem conflicts with working upstream the whole time

### 添付資料URL

- [slides](http://www.linuxplumbersconf.com/2011/ocw//system/presentations/891/original/LP v4.pdf)（file）


- スケジュール掲載のアーカイブURL: https://blog.linuxplumbersconf.org/2011/ocw/system/presentations/891/original/LP v4.pdf
<a id="session-453"></a>
## 82. The Linux NFC subsystem

- セッション個別URL: https://blog.linuxplumbersconf.org/2011/ocw/sessions/453
- Track: Refereed Presentations
- 日時: Friday, September 9, 2011 10:00 – 10:50am

### Description

NFC (Near Field Communication) is a wireless protocol mostly designed for fast information reading and writing from nearby devices and tags. It also allows NFC devices to establish a transport layer link and exchange larger chunks of data.

While Android ships with its own multi platform NFC stack writing HCI frames to a raw character device, and supporting one single device, Linux is currently missing any kind of generic and clean NFC support, from both kernel and user space.

The idea would be to create a new socket family for NFC, along with a kernel netlink API for high level NFC commands passing. An NFC user space daemon will abstract those kernel APIs into a high level D-Bus API for applications to easily use.
I will present the netlink and D-Bus APIs, the NFC daemon architecture and show how simple exchanging NFC data could then be. I will hopefully be able to demo this code against at least a few tags.

### One Line Summary

Describing the new Linux Near Field Communication architecture, from kernel to userspace.

### 添付資料URL

- [slides](http://linuxplumbersconf.org/2011/ocw//system/presentations/453/original/Linux_NFC_Subsystem_LPC2011_v5.pdf)（file）


- スケジュール掲載のアーカイブURL: https://blog.linuxplumbersconf.org/2011/ocw/system/presentations/453/original/Linux_NFC_Subsystem_LPC2011_v5.pdf
<a id="session-579"></a>
## 83. Cleaning up the Filesystem Hierarchy

- セッション個別URL: https://blog.linuxplumbersconf.org/2011/ocw/sessions/579
- Track: Early Boot and Init Systems
- 日時: Friday, September 9, 2011 

### Description

We’ll talk about what changes to the traditional Linux file system hierarchy are needed to provide out-of-the-box support for read-only / or /usr file systems and stateless boots. How to implement complete separation of distribution/package installed and host-only/private files. Sharing of system images between containers/guests. Atomic system upgrades/rollbacks.

Lessons learned from: /System, /Users, /Cache, /Application from Android, MacOS, …

### One Line Summary

Greatly simplifying, securing, improving our traditional filesystem layout without causing major breakage

### 添付資料URL

掲載なし

<a id="session-585"></a>
## 84. systemd: One Year Later

- セッション個別URL: https://blog.linuxplumbersconf.org/2011/ocw/sessions/585
- Track: Early Boot and Init Systems
- 日時: Friday, September 9, 2011 

### Description

In this talk we’ll discuss what we have reached so far, and where we are going. How we want to turn systemd from a pure init system to a modular platform for building Linux OSes, consolidating the balkanized Linux basic userspace. We’ll cover all the technical changes coming next to make this happen.

### One Line Summary

systemd was first announced a year ago and has since become an integral part of various Linux distributions, including Fedora 15.

### 添付資料URL

掲載なし

<a id="session-591"></a>
## 85. Dracut as a general purpose Bootloader

- セッション個別URL: https://blog.linuxplumbersconf.org/2011/ocw/sessions/591
- Track: Early Boot and Init Systems
- 日時: Friday, September 9, 2011 

### Description

A small dracut image can boot other kernels and images, as soon as it is brought up with a linux kernel by coreboot or a simple bootloader loading from an EFI like partition. This mechanism spares the implementation of all kinds of filesystems in bootloaders and reduces image boot time by not using BIOS int 13h. The TUI/GUI for the bootloader can be written using ncurses or framebuffer, because we are already in linux. /boot is mounted and can hold configuration and fallback state data.

### One Line Summary

A proposal for an EFI like boot mechanism with a dracut initramfs and the linux kernel using kexec to boot other linux kernels.

### 添付資料URL

掲載なし

<a id="session-597"></a>
## 86. coreboot

- セッション個別URL: https://blog.linuxplumbersconf.org/2011/ocw/sessions/597
- Track: Early Boot and Init Systems
- 日時: Friday, September 9, 2011 

### Description

coreboot is a Free Software project aimed at replacing the proprietary BIOS / UEFI / firmware found in most computers. coreboot performs a little bit of hardware initialization and then executes additional boot logic, called a payload.

With the separation of hardware initialization and later boot logic, coreboot can scale from specialized applications that run directly from firmware, run operating systems in flash, load custom bootloaders, or implement firmware standards, like PC BIOS services, UEFI or Open Firmware. This allows for systems to only include the features necessary in the target application, reducing the amount of code and flash space required.

coreboot currently supports over 230 different mainboards and gets to loading the kernel in as little as 400ms on some systems.

### One Line Summary

lightning fast booting on x86 / x64 platforms

### 添付資料URL

掲載なし

<a id="session-813"></a>
## 87. Optimizing Firefox: Why Large Applications Start Slowly on Linux

- セッション個別URL: https://blog.linuxplumbersconf.org/2011/ocw/sessions/813
- Track: Early Boot and Init Systems
- 日時: Friday, September 9, 2011 

### Description

Optimizing application startup is hard, even measuring how long an application takes to start is a non-trivial problem.

This talk will consist of 3 main parts:
1. Ways of measuring IO patterns [on startup] using systemtap, gdb, valgrind
2. How to optimize IO patterns on startup given the limitations in existing tools
3. A list of proposed changes in the kernel, ld, ld.so, gcc that could significantly speed up application startup on Linux.

Additionally, the talk will compare application startup on Linux against other major platforms.

http://people.mozilla.com/~tglek/lpc2011/

### One Line Summary

Linker, compiler, runtime linker and the kernel can be improved to start applications significantly faster

### 添付資料URL

掲載なし

<a id="session-489"></a>
## 88. Tracing

- セッション個別URL: https://blog.linuxplumbersconf.org/2011/ocw/sessions/489
- Track: Tracing
- 日時: Friday, September 9, 2011 

### Description

Currently, there are many approaches to tracing, with different tools, somewhat overlapping in functionality, but also with different target users in mind. Some tools are in kernel only (some within the kernel source code), some are also providing userspace tracing of applications. Ftrace and Perf fall in the former category, while LTTng and systemtap in the latter.

This miniconf will help providing a forum for the developers to have discussions on how to integrate the various tools, and how to advance the infrastructure in the kernel.

### One Line Summary

Tracing

### 添付資料URL

掲載なし

<a id="session-609"></a>
## 89. trace - the new hope?

- セッション個別URL: https://blog.linuxplumbersconf.org/2011/ocw/sessions/609
- Track: Tracing
- 日時: Friday, September 9, 2011 

### Description

The tracing community has had its fragmentation and lots of issues between different designs and efforts. Two in kernel utilities that focus on different things have a large overlap (perf and ftrace). Linus Torvalds got into the mix a bit and stated what he wanted from the tracing community. This resulted in November of 2010, Ingo Molnar and Thomas Gleixner to come up with and announce the “trace” utility.

https://lkml.org/lkml/2010/11/16/466

But this project has not been taken up by anyone, nor has Ingo and Thomas had the time to work on it.

Can this utility, being new and with no defined ABI, be the new hope for the conflicts between perf and ftrace? By starting from scratch, we could work out a plan to make trace have the best of both worlds and solve this conflict once and for all.

### One Line Summary

Can the "trace" utility merge perf and ftrace.

### 添付資料URL

- [slides](http://linuxplumbersconf.net/2011/ocw//system/presentations/609/original/trace-new-hope-lpc-2011.odp)（file）


- スケジュール掲載のアーカイブURL: https://blog.linuxplumbersconf.org/2011/ocw/system/presentations/609/original/trace-new-hope-lpc-2011.odp
<a id="session-723"></a>
## 90. LTTng 2.0 : Application, Library and Kernel tracing within your Linux distribution

- セッション個別URL: https://blog.linuxplumbersconf.org/2011/ocw/sessions/723
- Track: Tracing
- 日時: Friday, September 9, 2011 

### Description

This presentation introduces LTTng 2.0, detailing the new features it provides. Amongst these, the most welcome will likely be the ability to use it on vanilla and distribution kernels, as well as the ability to hook on Tracepoints, Kprobes, Ftrace function tracing and Perf PMU counters.

The new integrated command line interface for both the kernel and user-space tracers (LTTng and UST) will be presented. In an overview of the new LTTng 2.0 ABI, the new Common Trace Format (CTF) natively produced by LTTng 2.0 will be described, along with the tracer control ABI. The way LTTng 2.0 allows augmenting event data with optional “context” information (process ID, thread ID, nice level, priority, as well as branch, cache misses, and other performance counters) will be described.

### One Line Summary

Presentation of the new LTTng 2.0 kernel and userspace tracer.

### 添付資料URL

掲載なし

<a id="session-903"></a>
## 91. Tracing KVM guests from the host (discussion)

- セッション個別URL: https://blog.linuxplumbersconf.org/2011/ocw/sessions/903
- Track: Tracing
- 日時: Friday, September 9, 2011 

### Description

Tracing the guest from the host has been a common request but has never
been implemented. Dhaval has a working “hack” but it is not ready for
mainline. This will be a discussion oriented talk to discuss the proper
way to capture tracing of the guest from the host.

### One Line Summary

Tracing the Guest from the Host, a discussion

### 添付資料URL

- [slides](http://linuxplumbersconf.org/2011/ocw//system/presentations/903/original/IMG_20110909_121950.jpg)（file）


- スケジュール掲載のアーカイブURL: https://blog.linuxplumbersconf.org/2011/ocw/system/presentations/903/original/IMG_20110909_121950.jpg
<a id="session-105"></a>
## 92. PowerNap Dynamic Power Management

- セッション個別URL: https://blog.linuxplumbersconf.org/2011/ocw/sessions/105
- Track: Refereed Presentations
- 日時: Friday, September 9, 2011 10:50 – 11:40am

### Description

PowerNap is a dynamic, configurable power manager for Ubuntu servers.  Servers are put to “sleep”, suspending, hibernating, or going into a power-save mode when PowerNap’s extensible monitoring system determines the machine to be underutilized.  Originally designed for nodes of the Ubuntu Enterprise Cloud (UEC), we have enhanced it for general use, saving power in Linux data centers, home desktops, and extending laptop batteries.  PowerNap’s intelligent monitoring system watches for User Activity (Console, Mouse, Keyboard), System Activity (Load, Processes, Process IO), and/or Network Activity (wake-on-lan, UDP, TCP) beyond user configurable thresholds — sleeping inactive systems, and waking when activity demands.

We hope to generate discussion at Linux Plumbers around:
 a) additional PowerNap’s monitors, sensible default thresholds
 b) power saving scripts we have added to pm-utils
 c) integration with upstart/systemd event based init systems to replace some of PowerNap’s current polling methods

### One Line Summary

Like a screen saver for Servers, PowerNap lowers the power state of underutilized systems

### 添付資料URL

- [slides](http://linuxplumbersconf.org/2011/ocw//system/presentations/105/original/PowerNap.pdf)（file）


- スケジュール掲載のアーカイブURL: https://blog.linuxplumbersconf.org/2011/ocw/system/presentations/105/original/PowerNap.pdf
<a id="session-99"></a>
## 93. ThunderboltTechnology – What is it and what are the Open Source implications

- セッション個別URL: https://blog.linuxplumbersconf.org/2011/ocw/sessions/99
- Track: Refereed Presentations
- 日時: Friday, September 9, 2011 11:40am – 12:30pm

### Description

Thunderbolt technology is a new technology being implemented by Intel’s LAN Access Division (LAD) which allows for a very fast connection between a PC or laptop and devices.  It is done via a single cable and connector and the usage will allow for thinner and lighter notebooks with workstation performance expansion over a wire.

The technology is basically PCIe and Display Port on a single cable simultaneously.  This allows for high speed multi-tasking with multi-protocol, bidirectional, dual-channel 10Gbps per port connections.   These connections are 40% faster than eSATA and 20x faster than USB2.  This will enable activities like Pro class A/V creation with time-synchronized low latency streaming, for example.  The benefits for the users include more bandwidth with low overhead for devices connected to the system.  It will allow for multiple protocols for more devices to be connected as well as true multi-function devices.  It is compatible with standard DisplayPort, both displays and adapters.  It also has an 8ns accuracy time sync across 7 hops.  It uses native PCIe and DisplayPort drivers.  The technology is also simple and flexible in connecting the devices since data plus display are carried on a single cable.  More devices are added via daisy chaining them to the other devices.

While there is no real immediate need for added software, LAD will be supplying initial software for peer-to-peer use in Linux and other OSes.   LAD will also be working on enablement code for Open Source OSes so that others will be able to use that code.  LAD may also supply other use case but initially only peer-to-peer will be done.  LAD has not come up with all the use cases that the Open Source community and other are going to come up with for this technology.

### One Line Summary

This presentation will cover the technical details of the Thunderbolt technology as well as the Open Source implications and SW items that will need to be addressed to support the new technology.

### 添付資料URL

- [slides](https://blog.linuxplumbersconf.org/2011/ocw/system/presentations/99/original/Plumbers-Thunderbolt.odp)（file）

<a id="session-93"></a>
## 94. IRQ naming and routing

- セッション個別URL: https://blog.linuxplumbersconf.org/2011/ocw/sessions/93
- Track: Refereed Presentations
- 日時: Friday, September 9, 2011 1:30 – 2:20pm

### Description

Interrupt Request management is one of those areas where Linux kernel has taken a lasseiz-faire attitude. There is a /proc interface to control the binding of IRQ’s to cpu’s but the policy is left to user space. There is a tool irqbalance that attempts to solve this problem but it has not kept up with current technology.

Modern network and storage controllers have multiple request queue’s and multiple interrupts. The problem is that these IRQ’s are not named consistently, and the mapping from IRQ to queue is not communicated effectively through sysfs. The irqbalance program doesn’t have the code or the necessary interfaces to do the right thing.

My proposal is that the kernel provide a basic set of infrastructure to handle these types of devices. The default policy without userspace should be correct (if not optimal), and the interfaces should be available to create irq management in userspace

### One Line Summary

Most modern network and storage controllers have multiple interrupts but Linux kernel has inconsistent management

### 添付資料URL

- [slides](http://linuxplumbersconf.org/2011/ocw//system/presentations/93/original/irq-routing.svg)（file）


- スケジュール掲載のアーカイブURL: https://blog.linuxplumbersconf.org/2011/ocw/system/presentations/93/original/irq-routing.svg
<a id="session-117"></a>
## 95. Making Passthrough Audio on Linux Just Work

- セッション個別URL: https://blog.linuxplumbersconf.org/2011/ocw/sessions/117
- Track: Audio
- 日時: Friday, September 9, 2011 

### Description

Typically, applications that support direct output of compressed audio formats implement their own internal hacks, requiring code duplication between applications and user intervention. Moreover, these are generally limited to common formats such as AC3 and DTS streamed over S/PDIF and HDMI to A/V receivers.

Over the last few months, we have added support in PulseAudio for streaming compressed formats, and modified GStreamer to allow applications to transparently make use of this ability. The method is generic enough to be used with other hardware decoders such as Bluetooth headsets that decode MPEG audio and SoCs with decoder blocks that talk directly to the audio hardware.

This talk will cover the motivation for solving this problem, challenges involved, various infrastructure modifications that were required, client-side changes required to allow apps to provide seamless passthrough support, and potential future work.

### One Line Summary

This is a talk about the various changes we made to PulseAudio and GStreamer to support passthrough output for compressed audio formats and how applications can make use of this.

### 添付資料URL

掲載なし

<a id="session-549"></a>
## 96. Future of AVRCP on Linux

- セッション個別URL: https://blog.linuxplumbersconf.org/2011/ocw/sessions/549
- Track: Audio
- 日時: Friday, September 9, 2011 

### Description

AVRCP stands for Audio/Video Remote Control Profile, and is the profile responsible for controlling devices streaming audio and video over Bluetooth.

This profile is composed of two roles: Target (TG), which is the peer under control, and Controller (CT), which is the controlling peer. At the moment only receiving control commands as the Target role is supported by Linux, which is defined by version 1.0 of the spec. Newer versions added sending metadata information from the TG to the CT (version 1.3) and the CT being able to browse the media collection on the TG (version 1.4). To have all AVRCP-defined features supported by Linux these two need to be added on the Target implementation, and the whole Controller role needs to be implemented.

### One Line Summary

This talk will present the features Linux is missing to comply with the current AVRCP spec, and a proposal of how to achieve fully compliance.

### 添付資料URL

掲載なし

<a id="session-627"></a>
## 97. DSP management - status & discussion

- セッション個別URL: https://blog.linuxplumbersconf.org/2011/ocw/sessions/627
- Track: Audio
- 日時: Friday, September 9, 2011 

### Description

There’s work going on in a few directions on supporting the programmable DSPs that are being more and more common in audio hardware, especially in the embedded space. Topics include:

- Handling modular firmwares
- Representing and controlling dynamically instantiated audio paths, especially the user/kernel API
- Compressed audio streaming support
- Syncing with large buffers in hardware
- Overlap with DSPs used for video & non-media applications

### One Line Summary

Status update and discussion on future directions for the control of DSP features on

### 添付資料URL

掲載なし

<a id="session-633"></a>
## 98. Compressed data support in sound subsystem

- セッション個別URL: https://blog.linuxplumbersconf.org/2011/ocw/sessions/633
- Track: Audio
- 日時: Friday, September 9, 2011 

### Description

To reduce power consumption, the majority of recent SoCs rely on audio DSPs or dedicated low-power cores. Audio codec vendors have likewise started to embed digital audio processing capabilities in their mixed-signal chips. Support for such hardware is however limited in Linux due to strong assumptions in the ALSA API; compressed data is currently limited to IEC61937-formatted bitstreams such as Dolby Digital and DTS. Native support for popular compressed formats isn’t possible with the PCM interface only manipulate samples instead of bytes.

In this presentation, we provide an overview of a new streaming interface proposal to support offloaded decoders and encoders. To avoid re-inventing the wheel and enable easy modification of existing middleware, the parameters listed in the API are compatible with existing standards such as OpenMAX IL. We detail the required links with ASoC and DAPM for power management. UCM extensions to expose devices with compressed data support to applications are also discussed

### One Line Summary

The new streaming interface proposal provides a framework in sound subsystem to support offloaded decoders and encoders

### 添付資料URL

掲載なし

<a id="session-111"></a>
## 99. Building common tools to manage file, LVM and hardware features

- セッション個別URL: https://blog.linuxplumbersconf.org/2011/ocw/sessions/111
- Track: File and Storage Systems
- 日時: Friday, September 9, 2011 

### Description

We currently have a wealth of ways to implement sophisticated file and storage system features. Snapshots and growing a file system can be done at the file system level, via the LVM or done internally by a storage array.

At the Linux Storage and File system (LSF) summit, we discussed a need to have a common way for users to manage these features regardless of the level that functionality is implemented. This talk will give an overview on a design for doing this and give an update on what has been done and still needs doing.

The goal is to have a multi-level discussion that will bring in developers at all levels of the stack and users.

### One Line Summary

The session will detail a design and progress towards getting a unified way to manage common features like snapshots, growth, shrinking for file systems and files.

### 添付資料URL

掲載なし

<a id="session-273"></a>
## 100. Federated File System on Linux

- セッション個別URL: https://blog.linuxplumbersconf.org/2011/ocw/sessions/273
- Track: File and Storage Systems
- 日時: Friday, September 9, 2011 

### Description

I propose a Birds of a Feather session to discuss the nascent Linux implementation of the FedFS standards.  The presenters would introduce FedFS, roadmap the current Linux implementation, and then walk through some of the proposed administrative interfaces, including how autofs is used, how mountd is used, and perhaps what a GUI for managing a FedFS domain might look like.  The presenters seek guidance on the syntax and appearance of these interfaces, as well as advice on how to construct them.  Appropriate audience for this BoF would include, but not be limited to, NFS kernel and user space developers, autofs developers, and system administrators who deploy NFS.

### One Line Summary

Linux FedFS implementation needs help defining its user interfaces

### 添付資料URL

掲載なし

<a id="session-387"></a>
## 101. dm-verity: a device mapper target for integrity checking of block devices

- セッション個別URL: https://blog.linuxplumbersconf.org/2011/ocw/sessions/387
- Track: File and Storage Systems
- 日時: Friday, September 9, 2011 

### Description

dm-verity is part of ChromeOS’s verified boot path. It is used to verify the integrity of the root filesystem on boot. The root filesystem is mounted on a dm-verity partition which transparently verifies echo block with a bootloader verified hash passed into the kernel at boot.

### One Line Summary

The verity target provides transparent integrity checking of block devices using a cryptographic digest.

### 添付資料URL

掲載なし

<a id="session-561"></a>
## 102. Towards consistent interfaces to expose DCB attributes to applications

- セッション個別URL: https://blog.linuxplumbersconf.org/2011/ocw/sessions/561
- Track: File and Storage Systems
- 日時: Friday, September 9, 2011 

### Description

DCB provides Ethernet QOS and prioritization of protocols. Networking devices use a common LLDP agent ‘lldpad’ and an existing Netlink kernel API to implement this standard with multiple devices consolidating on this interface.

For networking devices the current interfaces work well allowing application to become DCB aware using standard socket options and QOS queuing disciplines. However, many storage devices do not export networking devices and use embedded LLDP engines. Today these devices either simple do not expose DCB parameters to the upper layers or use proprietary interfaces. These inconsistencies make it difficult to drive application policies using DCB attributes.

In this presentation we plan to outline the existing networking interfaces and propose a model to extend this API to incorporate storage devices that do not export networking devices. This interface should be generic enough to support usage models within virtualization, MPIO, and other applications.

We hope this talk can launch a discussion to determine requirements and get buy in from the various storage devices to support this model.

### One Line Summary

This presentation will propose interfaces to expose DCB attributes to MPIO, virtualization, and other applications consistently regardless of underlying device type.

### 添付資料URL

- [slides](http://linuxplumbersconf.org/2011/ocw//system/presentations/561/original/Plumbers2011.pdf)（file）


- スケジュール掲載のアーカイブURL: https://blog.linuxplumbersconf.org/2011/ocw/system/presentations/561/original/Plumbers2011.pdf
<a id="session-153"></a>
## 103. lockdep: How to read its cryptic output

- セッション個別URL: https://blog.linuxplumbersconf.org/2011/ocw/sessions/153
- Track: Refereed Presentations
- 日時: Friday, September 9, 2011 2:20 – 3:10pm

### Description

Ever since lockdep was introduced in 2006 most deadlock scenarios have been avoided. But when lockdep does detect a problem with the locking, the output it gives can be very cryptic and hard to understand, especially when the locking issues have to do with interrupts or del_timer_sync().

This talk will explain how to translate the lockdep output so that you can understand the locking problem scenario and confidently fix your code (or someone else’s code) to avoid any deadlocks.

### One Line Summary

Learn to read the output from lockdep when your code can trigger a deadlock

### 添付資料URL

- [slides](http://linuxplumbersconf.org/2011/ocw//system/presentations/153/original/lockdep-plumbers-2011.odp)（file）


- スケジュール掲載のアーカイブURL: https://blog.linuxplumbersconf.org/2011/ocw/system/presentations/153/original/lockdep-plumbers-2011.odp
<a id="session-309"></a>
## 104. Globally fair group CPU scheduling

- セッション個別URL: https://blog.linuxplumbersconf.org/2011/ocw/sessions/309
- Track: Refereed Presentations
- 日時: Friday, September 9, 2011 3:10 – 4:00pm

### Description

The approximations used for the scheduling of group entities in the CPU scheduler are currently managed on a per-cpu basis.  While each entities’ weight is globally approximated, the virtual timeline used for scheduling decisions is still completely localized.

This results in both a lack of fairness and unpredictable wake-up latencies, for group entities.

In this presentation we’ll first cover exactly what problems arise as a result of this, as well as their latency impact.  We’ll follow with some approaches for global approximation, their drawbacks, and where appropriate the realized gains.

### One Line Summary

A look at the fairness and wake-up latency improvements that can be achieved by extending vruntime beyond the per-cpu level.

### 添付資料URL

- [slides](http://linuxplumbersconf.org/2011/ocw//system/presentations/309/original/LPC_2011_Global_Lag.pdf)（file）
- スケジュール掲載のアーカイブURL: https://blog.linuxplumbersconf.org/2011/ocw/system/presentations/309/original/LPC_2011_Global_Lag.pdf


# Wiki Topics 補足

2011年はOCW形式。指定スケジュールの個別URL付き枠104件を収録。Descriptionは個別ページのAbstract原文。One Line Summaryは別フィールドに保持。資料URLは原記載を保持し、スケジュールに別のアーカイブURLがある場合はschedule_urlも収録。添付ファイル本体の取得・リンク有効性検査は実施していない。Wikiの候補トピック情報は補足に区別して収録し、個別セッション数には加算しない。WikiのTentative/Proposed等は原文通り。 WikiはProposed/Potential Tracks（候補）として掲載されている14トピックをそのまま区別し、8ページの本文と6ページの未作成状態を記録。個別URLのないマイクロカンファレンス全体枠14件と休憩・食事・懇親会等12件は補足に保持。補足のスケジュール内アンカーURLは個別セッションページURLとは区別する。

## Early Boot and Init Systems（提案）

https://wiki.linuxplumbersconf.org/2011:early_boot_and_init_systems

リンク先ページは未作成。

### 添付資料URL

掲載なし

## Audio（提案）

https://wiki.linuxplumbersconf.org/2011:audio

リンク先ページは未作成。

### 添付資料URL

掲載なし

## File and Storage Systems（提案）

https://wiki.linuxplumbersconf.org/2011:file_and_storage_systems

File and Storage




The track will deal with issues around file and storage systems in Linux, from the kernel space up to user space. Getting applications to work well and get tuned properly, how to benchmark administer, etc.




Audience




Developers from the components, vendors of storage systems (both traditional storage and newer devices), kernel developers.




Key people




The following people should be invited at least:



 Chris Mason

 Jens Axboe

 James Bottomley

 Ted Tso

 Tejun Heo

 Martin Petersen

 Trond Myklebust





Contact




Proposal added by James Bottomley James.Bottomley@suse.de

### 添付資料URL

掲載なし

## Mobile（提案）

https://wiki.linuxplumbersconf.org/2011:mobile

Mobile




From a very slow start a few years ago, Linux in 2011 is a huge player in the mobile industry, with over ten million phones shipping per month.  Mobile has traditionally been a hugely fragmented market, with many devices hacked just enough to be able to sell, then instantly discarded for the next big product.  Even the coherent platforms, of which there are several, show quite a lot of inconsistency.



Lately, Linux on mobile devices has been in the news at all ends of the spectrum: from Android being a household name, to the argument over ARM kernel maintenance.  We hope to bring both developers of and for mobile products together in one room and see what comes out of it.




Topics




Suggested topics include, but are not limited to:


 Power management from kernel to app level, including new techniques to save more power, profiling to find out who's using the most power, et al;

 Mobile kernel development, especially ARM but open to any platform;

 The current mobile graphics mess;

 Performance: mobile devices are often more performance-sensitive than desktop, so even things like optimising D-Bus matter;

 Toolkits and app development libraries such as Clutter and Telepathy;

 Overviews of popular stacks such as Android, MeeGo, WebOS, et al.





Audience




Anyone who develops on or for mobile platforms, from the kernel to the app level, as well as anyone whose project has a particular relevance to mobile.




Key people




We should aim to invite the following people:
(tbc)




Proposal




Proposal added by Daniel Stone daniel@fooishbar.org

### 添付資料URL

掲載なし

## Development Tools（提案）

https://wiki.linuxplumbersconf.org/2011:development_tools

The Linux kernel is one of the largest and highly configurable open source software projects. It has hundreds of developers and these developers have a wide range of expertise. Tools to help developers and maintainers are becoming increasingly important in the Linux development process. Some familiar examples are git for source code management, checkpatch for enforcing coding style, and quilt for managing patches.



In recent years, a number of new tools have been created to aide in various aspects of the development process. These include tools for understanding the source code, finding various kinds of bugs, and performing source code evolutions. This track will present some of these tools. There will additionally be an opportunity to discuss how tool usage can be improved and what kind of tools are still needed.



The schedule is as follows:



1:30
Codemap, google maps for source code:
Yoann Padioleau



1:50
Killing Bugs in C with Smatch:
Dan Carpenter



2:10
Ad Hoc Synchronization Considered Harmful:
Weiwei Xiong



2:30
Tolerating hardware device failures in software:
Asim Kadav



2:50
Finding and burying Configuration Defects in Linux with the undertaker:
Reinhard Tartler



3:10
Reducing your patch workload with Patchwork:
Jeremy Kerr



3:30
Diagnosing Linux/Firmware related Issues with the Firmware Test Suite:
Colin King



3:40
Reproducible builds and infrastructure:
Josh Triplett, Jamey Sharp



We would like your feedback about the use of development tools in Linux.  Please fill out a very short survey!

### 添付資料URL

掲載なし

## Embedded Build Systems（提案）

https://wiki.linuxplumbersconf.org/2011:embedded_build_systems

リンク先ページは未作成。

### 添付資料URL

掲載なし

## Virtualization（提案）

https://wiki.linuxplumbersconf.org/2011:virtualization

Virtualization




The Linux Plumbers 2011 Virtualization track is focusing on general free software Linux Virtualization. It is not
focused on a specific hypervisor, but will focus on general virtualization issues and in particular collaboration
amongst projects. This would include KVM, Xen, QEMU, containers etc.



The structure will be similar to what was used in 2010,
ie. 30 minutes per subject, including discussion.




Schedule




The schedule of the 2011 Virtualization Plumbers Micro Conference was as follows. Note presentation slides can be found on the Plumbers page by following the links to the abstracts:


 Seeking a path to zero-copy paravirtualised networking in the Linux kernel - Ian Campbell

 Virtio on Xen - Anthony PERARD

 Yabusame: Postcopy Live Migration for Qemu/KVM - Isaku Yamahata

 VFIO: PCI device assignment breaks free of KVM - Alex Williamson

 New filesystem freeze API - Fernando Luis Vazquez Cao





Discussion notes



The following is the notes taken in the Etherpad from the discussions.




Seeking a path to zero-copy paravirtualised networking in the Linux kernel



Xen PV network transmit operation:


 Back end either maps the guest pages or copies them, the former is needed to implement zero copy but there is one issue: network stack does not do proper page reference counting.

 Page life cycle tracking issue in the network layer affects any subsystem that gives paget to the network layer (such as NFS).

 Basic requirement for a general solution: even if we give a page to the network layer we need ti retain ownership of it.Implemented using fragment API and destructor infrastructure.





Questions


 Problem should not be relevant to KVM. Discuss issue on the mailing list whether KVM's implementation is affected?.

 What about performance?: still have not measured the effect on performance of calling the destructors. It is a correctness issue so we have to live with it.

 Might double the overhead of allocating a skb. Need to measure how it affects memory usage.

 James: could we get rid of the new page struct member using an indexed array.

 Patches well received by the netdev guys.





Virtio on Xen




 * Started as Google Summer of code project.



 * Need to figure out why “pv guest, with virtio nic” is so slow.




Questions



 - Trying to switch Xen over to virtio?


 It was not the speaker's inital intent.

 Ian: could do it for simple devices such as the random generator and such.

 Jes: If we could build Xen APIs on top of virtio it would be good for the whole FOSS virtualization community.

 Ian: that is not our current goal.





Yabusame: Postcopy Live Migration for Qemu/KVM



Proposed by Takahiro Hirofuchi, AIST. Presented by Isaku Yamahata, VALinux systems Japan K.K.



 precopy: copy mem before switching execution. (status quo)

 postcopy: start executing before pages are copied on demand, and in background





precopy can result in the same page being copied multiple times, as it is repeatedly dirtied. Migration time depends on how fast memory is re-dirtied (memory update intensity).



 postcopy switch time deterministic 200-300ms, independent of RAM size. Performance loss after switch, but should be short.

 Early-stage proof-of-concept code

 qemu-kvm cannot handle 100% itself, since others may have modified guest RAM on source machine. Must hook guest RAM access during postcopy phase

 postcopy vulnerable to either machine failing during transition period. Checkpointing likely needed. Lockstep? (a talk in cloud MC (Remus) talked about HA snapshotting that may be relevant). James described Stratus lockstep solution, duplicating inputs (e.g. incoming web requests) and verifying outputs match.



 demo video:  http://www.youtube.com/watch?v=lo2JJ2KWrlA





VFIO: PCI device assignment breaks free of KVM


 paravirt: bypass qemu improves latency & perfomance

 even better: assign a device directly to the VM via SRIOV. close to bare metal performance a compatibilty win

 downside: guest pinned in host memory, VM tied to phys host device



 PCI config, BARs, interrupts mapped or fwded to guest

 Current implementation not ideal

 VFIO: high-perf userspace driver. KVM not required

 kernel module. configs iommu, other stuff. iommu issues can be thorny. VFIO-NG coming soon.

 IOMMU2 will help, can page-fault





New filesystem freeze API



Idea is to suspend writes to a filesystem before snapshot / resume after.



 Often used for backup - get a consistent snapshot

 Suspend writes – includes VFS I/O and MMAP I/O (mmap since v3.0).

 Was XFS specific – now in VFS: ioctls FIFREEZE and FITHAW.



 wart: Can umount a frozen fs. But cannot thaw a block device

 wart: Cannot check status. Comment from audience: Can call thaw and check result. Not ideal



 New usecase: snapshot of virtual machine from hypervisor

 Needs in-guest support (Linux: virtagent. Windows: VSS)

 Problem: what if agent dies within guest. cannot check state on restart



 JamesB: Why does dm-snapshot not meet this usecase?

 Answer: use _inside_ guest. guest agent creates snapshot, but this is intrusive. Guest does not have visibility into many host-level I/O – e.g. snapshots in filers etc.





 New API: ioctls FIISFROZEN (query FS),  BLKISFROZEN (query blkdev, could -EBUSY from umount instead)

 An issue with returning EBUSY: lazy umount non-trivial



 New ioctl: FIGETFREEZEFD – freeze and return fd (handle). thaw when fd is closed. automagically thawed, solves issues with agent going away. On this fd can do FS_FREEZE_FD, FS_THAW_FD and FS_ISFROZEN_FD. Can add freeze=true/false paramter to FIGETFREEZEFD.



 JamesB: What if agent is alive but unresponsive?

 Jes: cannot both open comms channel to host.





 JamesB: Can do multiple FIGETFREEZEFD which is problematic.

 Could make exclusive or reference count (make union of two requests)? Careful not to allow hostile process to wedge things. Need a per-fd reference not a global one so cannot release other caller's freezes.





 Access control: Use CAPABILITY (CAP_SG?) and permission to open a path within the fs (needed for FIGETFREEZEFD).

 Need to be careful when snapshotting filesystem containing agent binary. mlock etc. small dedicated binary for ease of review (rather than funciton of larger binary)

 Need for polling/notiication interface for applications? Cannot freeze/thaw but can monitor.





Contact




Proposal added by Jes Sorensen Jes.Sorensen@redhat.com

### 添付資料URL

- https://wiki.linuxplumbersconf.org/lib/exe/fetch.php?hash=32c245&media=http%3A%2F%2Fwww.linuxplumbersconf.org%2F2011%2Focw%2Fsessions%2F129
- https://wiki.linuxplumbersconf.org/lib/exe/fetch.php?hash=55b355&media=http%3A%2F%2Fwww.linuxplumbersconf.org%2F2011%2Focw%2Fsessions%2F135
- https://wiki.linuxplumbersconf.org/lib/exe/fetch.php?hash=b6b958&media=http%3A%2F%2Fwww.linuxplumbersconf.org%2F2011%2Focw%2Fsessions%2F669
- https://wiki.linuxplumbersconf.org/lib/exe/fetch.php?hash=822502&media=http%3A%2F%2Fwww.linuxplumbersconf.org%2F2011%2Focw%2Fsessions%2F777
- https://wiki.linuxplumbersconf.org/lib/exe/fetch.php?hash=2384c9&media=http%3A%2F%2Fwww.linuxplumbersconf.org%2F2011%2Focw%2Fsessions%2F873

## Real Time（提案）

https://wiki.linuxplumbersconf.org/2011:real_time

リンク先ページは未作成。

### 添付資料URL

掲載なし

## Scaling（提案）

https://wiki.linuxplumbersconf.org/2011:scaling

Scaling: Up, Down, and Both




Linux's scalability has improved greatly over the past ten years, but much work remains.  Yes, the Big Kernel Lock is finally almost completely removed, but there are a number of “little kernel locks” throughout the kernel.  Some of these are being worked, for example, Nick Piggin's work breaking up dcache_lock and d_lock, but others need help as well.



But the increasing use of Linux in the embedded arena highlights the need to scale down as well as up.  In fact, given the arrival of multicore embedded CPUs, Linux must scale both up and down simultaneously, preferably while still maintain good response times.



This microconference will therefore look at efforts to scale up, down, and in both directions simultaneously.

### 添付資料URL

掲載なし

## Cloud（提案）

https://wiki.linuxplumbersconf.org/2011:cloud

リンク先ページは未作成。

### 添付資料URL

掲載なし

## Power Management（提案）

https://wiki.linuxplumbersconf.org/2011:power_management

Power Management




Linux power management has been worked on very actively in recent years and many useful features related to it have been implemented, but there still are problems to address in that area and it is desirable to take advantage of new hardware power management capabilities.  For example, there are systems where devices share power resources and cannot be powered down individually, which needs to be taken into account.  Moreover, there are systems where CPU power management (cpuidle) and the runtime power management of I/O devices depend on each other because of power resources shared between those CPUs and I/O devices.  Implementing efficient runtime power management on those systems will require substantial amount of work in the kernel core as well as in individual device drivers.



The discussions in this track will cover the most recent achievements in the power management area as well as work in progress targeted at addressing the above issues and possible future directions of development.



In the previous years we used to organize Power Management Mini Summits to discuss similar issues, the last of which took place during LinuxCon in Boston in 2010.  Unfortunately, however, it wasn't particularly well attended and the participants generally felt that it had failed its purpose.  The power management track at the last LPC, on the other hand, was generally regarded as interesting and successful, so there only seems to be room for one event devoted to power management a year.  For this reason, it was decided that there wouldn't be a PM Mini Summit in 2011 and the LPC PM track would play the role of the Mini Summit.  To this end, in addition to the plenary session within the track there will be a possibility to discuss specific problems related to power management in smaller groups.



The plenary session is scheduled on Thursday, September 8, 2011, at 4:45 PM.  After my kick-start talk focusing mostly on the kernel PM development during the last 12 months, Len Brown from Intel will present the results of his idle power usage research comparing various flavors of Linux with other OSes in that respect (approximately at 5:15 PM) and Matthew Garrett from Red Hat will talk about an approach to power management attempting to optimize the power management of an entire system instead of focusing on individual devices (approximately at 5:45 PM).  The session will end around 6:15 PM.



Discussion topics will include the problem of handling dependencies between devices that belong to different subsystems and bus types (suggested by Mark Brown), device PM QoS user space interface (suggested by Mark Brown and myself) and ideas for using device PM QoS along with PM domains.  More topics welcome!



Additional discussion topic in cpuidle:  Ideas for new callbacks into cpuidle framework to handle special idle state transitions like:
(1) Most of the context is lost – goto idle using cpuidle framework and wakeup at reset and re-enter idle loop
(2) Special condition that happen when all threads in a core or all threads in a chip enter deep idle – topology based callback hooks
(suggested by Vaidyanathan Srinivsan)

### 添付資料URL

掲載なし

## Desktop（提案）

https://wiki.linuxplumbersconf.org/2011:desktop

リンク先ページは未作成。

### 添付資料URL

掲載なし

## Bufferbloat（提案）

https://wiki.linuxplumbersconf.org/2011:bufferbloat

Bufferbloat and Networking




In this track we want to discuss topics related to bufferbloat including latency reduction, congestion control, queue management, proper network design, and related topics.




Audience




Network researchers/academics, system administrators, network equipment vendors, developers of networking applications, and kernel developers.




Proposed Schedule




This session will be held on Wednesday, September 7, 2011.



It is scheduled from 10:00am to 12:30pm in the Russian River room.



	
		 Time  Topic  Presenter 
	
	
		 10:00am  State of the BufferFish  Gettys 
	
	
		 10:40am  A Baker's Dozen of TCP bakeoff?  Hemminger 
	
	
		 11:00am  Proportional Rate Reduction for TCP  Dukkipati 
	
	
		 11:15am  TCP Fast Open  Cheng 
	
	
		 11:30am  Byte Queue Limits  Herbert 
	
	
		 11:50pm  Optimizing igb and ixgbe network driver scaling performance  Duyck 
	
	
		 12:10pm  Networking performance and scalability  de Bruijn 
	




Contact




Proposal added by John W. Linville linville@tuxdriver.com

### 添付資料URL

掲載なし

## Unified Memory Management（提案）

https://wiki.linuxplumbersconf.org/2011:unified_memory_management

Unified Memory Management



The track will deal with issues around unified memory management for systems (initially felt on ARM-based SoCs) where not all devices have an IOMMU available, and where cache management and cache coherency may be atypical.  The effort is underway and is being coordinated by Linaro, with support from component contributors and maintainers.  The goal is to provide necessary allocation (e.g., physically contiguous buffers), DMA mapping and buffer sharing services to device drivers with maximum leverage of existing API and code.  This track will serve as a check point to review what's been done and what's left to do.



Project page and conference slides are here




Audience




Developers from the components, kernel developers, and SoC vendor developers.




Key people




The following is an abbreviated list of participants in the mini-summit around this topic in May:



Arnd Bergmann

Jesse Barker

Rob Clark

Hans Verkuil

Marek Szyprowski

David Rusling

Daniel Vetter

Thomas Hellstrom

Loïc Minier

Sakari Ailus

Daniel Stone

Laurent Pinchart

Zach Pfeffer

Angus Ainslie

Sanghyun Lee

Ilho Lee

Sumit Semwal

Edward Hervey

Mauro Chehab

Ketil Johnson

Robert Morell

Andy Gross

Jordan Crouse

David Brown





Also invited but unable to travel at the time:



Dave Airlie

Jesse Barnes





It would be good to have additional interested parties related to graphics and video processing devices.




Contact




Proposal added by Jesse Barker jesse.barker@linaro.org

### 添付資料URL

掲載なし


# マイクロカンファレンス全体枠（14件）

## Bufferbloat and Networking

- 個別セッションURL: 掲載なし
- スケジュール内URL: https://blog.linuxplumbersconf.org/2011/ocw/events/LPC2011/schedule#track-93
- 日時: Wednesday, September 7, 2011 10:00am – 12:30pm
- Room: Russian River
- Description: Abstract未掲載

### One Line Summary

Identifying and eliminating the effects of bufferbloat

## Mobile

- 個別セッションURL: 掲載なし
- スケジュール内URL: https://blog.linuxplumbersconf.org/2011/ocw/events/LPC2011/schedule#track-39
- 日時: Wednesday, September 7, 2011 10:00am – 12:30pm
- Room: Dry Creek Valley
- Description: Abstract未掲載

### One Line Summary

Discussion of issues related to Mobile computing

## Cloud

- 個別セッションURL: 掲載なし
- スケジュール内URL: https://blog.linuxplumbersconf.org/2011/ocw/events/LPC2011/schedule#track-75
- 日時: Wednesday, September 7, 2011 2:00 – 4:30pm
- Room: Russian River
- Description: Abstract未掲載

### One Line Summary

Discussion of Plumbing topics related to Cloud Computing (private and public)

## Development Tools

- 個別セッションURL: 掲載なし
- スケジュール内URL: https://blog.linuxplumbersconf.org/2011/ocw/events/LPC2011/schedule#track-45
- 日時: Wednesday, September 7, 2011 2:00 – 4:30pm
- Room: Dry Creek Valley
- Description: Abstract未掲載

### One Line Summary

Development Tools

## Unified Memory Management

- 個別セッションURL: 掲載なし
- スケジュール内URL: https://blog.linuxplumbersconf.org/2011/ocw/events/LPC2011/schedule#track-117
- 日時: Thursday, September 8, 2011 10:00am – 12:30pm
- Room: Dry Creek Valley
- Description: Abstract未掲載

### One Line Summary

A check-point of the Linaro-driven approach to addressing the memory management issues encountered by the ARM ecosystem.

## Virtualization

- 個別セッションURL: 掲載なし
- スケジュール内URL: https://blog.linuxplumbersconf.org/2011/ocw/events/LPC2011/schedule#track-57
- 日時: Thursday, September 8, 2011 10:00am – 12:30pm
- Room: Russian River
- Description: Abstract未掲載

### One Line Summary

Discussion of plumbing topics related to virtualization

## Containers and Cgroups

- 個別セッションURL: 掲載なし
- スケジュール内URL: https://blog.linuxplumbersconf.org/2011/ocw/events/LPC2011/schedule#track-105
- 日時: Thursday, September 8, 2011 2:00 – 4:30pm
- Room: Russian River
- Description: Abstract未掲載

### One Line Summary

Discussion of Containers/Cgroups issues

## Desktop

- 個別セッションURL: 掲載なし
- スケジュール内URL: https://blog.linuxplumbersconf.org/2011/ocw/events/LPC2011/schedule#track-87
- 日時: Thursday, September 8, 2011 2:00 – 4:30pm
- Room: Dry Creek Valley
- Description: Abstract未掲載

### One Line Summary

Desktop related topics

## Power Management

- 個別セッションURL: 掲載なし
- スケジュール内URL: https://blog.linuxplumbersconf.org/2011/ocw/events/LPC2011/schedule#track-81
- 日時: Thursday, September 8, 2011 4:45 – 6:15pm
- Room: Dry Creek Valley
- Description: Abstract未掲載

### One Line Summary

Discussions about all topics related to power management.

## Scaling

- 個別セッションURL: 掲載なし
- スケジュール内URL: https://blog.linuxplumbersconf.org/2011/ocw/events/LPC2011/schedule#track-69
- 日時: Thursday, September 8, 2011 4:45 – 6:15pm
- Room: Russian River
- Description: Abstract未掲載

### One Line Summary

Discussion of issues related to scaling in Linux (up or down)

## Early Boot and Init Systems

- 個別セッションURL: 掲載なし
- スケジュール内URL: https://blog.linuxplumbersconf.org/2011/ocw/events/LPC2011/schedule#track-21
- 日時: Friday, September 9, 2011 10:00am – 12:30pm
- Room: Russian River
- Description: Abstract未掲載

### One Line Summary

This miniconf is focused on the linux init system, improving boot speed, and init infrastructure including systemd, udev, dracut among others.

## Tracing

- 個別セッションURL: 掲載なし
- スケジュール内URL: https://blog.linuxplumbersconf.org/2011/ocw/events/LPC2011/schedule#track-111
- 日時: Friday, September 9, 2011 10:00am – 12:30pm
- Room: Dry Creek Valley
- Description: Abstract未掲載

### One Line Summary

Tracing

## Audio

- 個別セッションURL: 掲載なし
- スケジュール内URL: https://blog.linuxplumbersconf.org/2011/ocw/events/LPC2011/schedule#track-27
- 日時: Friday, September 9, 2011 1:30 – 4:00pm
- Room: Dry Creek Valley
- Description: Abstract未掲載

### One Line Summary

Discussion of audio integration issues in both kernel and userspace, covering both desktop and embedded systems.

## File and Storage Systems

- 個別セッションURL: 掲載なし
- スケジュール内URL: https://blog.linuxplumbersconf.org/2011/ocw/events/LPC2011/schedule#track-33
- 日時: Friday, September 9, 2011 1:30 – 4:00pm
- Room: Russian River
- Description: Abstract未掲載

### One Line Summary

he track will deal with issues around file and storage systems in Linux, from the kernel space up to user space.


# 休憩・食事・懇親会等（12件）

## Evening Get Together sponsored by Collabora

- 個別セッションURL: 掲載なし
- スケジュール内URL: https://blog.linuxplumbersconf.org/2011/ocw/events/LPC2011/schedule#schedule_item-3
- 日時: Tuesday, September 6, 2011 7:00 – 10:00pm
- Description: Abstract未掲載

### One Line Summary

Evening Get Together at the Hyatt

## Break

- 個別セッションURL: 掲載なし
- スケジュール内URL: https://blog.linuxplumbersconf.org/2011/ocw/events/LPC2011/schedule#schedule_item-9
- 日時: Wednesday, September 7, 2011 9:45 – 10:00am
- Description: Abstract未掲載

### One Line Summary

Break

## Lunch

- 個別セッションURL: 掲載なし
- スケジュール内URL: https://blog.linuxplumbersconf.org/2011/ocw/events/LPC2011/schedule#schedule_item-15
- 日時: Wednesday, September 7, 2011 12:30 – 2:00pm
- Description: Abstract未掲載

### One Line Summary

Lunch (on your own)

## Opening Reception sponsored by Intel

- 個別セッションURL: 掲載なし
- スケジュール内URL: https://blog.linuxplumbersconf.org/2011/ocw/events/LPC2011/schedule#schedule_item-27
- 日時: Wednesday, September 7, 2011 5:00 – 10:00pm
- Description: Abstract未掲載

### One Line Summary

Dinner at Chalk Hill. First caravan leaves at 5pm.

## Break

- 個別セッションURL: 掲載なし
- スケジュール内URL: https://blog.linuxplumbersconf.org/2011/ocw/events/LPC2011/schedule#schedule_item-33
- 日時: Thursday, September 8, 2011 9:45 – 10:00am
- Description: Abstract未掲載

### One Line Summary

Break

## Lunch

- 個別セッションURL: 掲載なし
- スケジュール内URL: https://blog.linuxplumbersconf.org/2011/ocw/events/LPC2011/schedule#schedule_item-39
- 日時: Thursday, September 8, 2011 12:30 – 2:00pm
- Description: Abstract未掲載

### One Line Summary

Lunch (on your own)

## Break

- 個別セッションURL: 掲載なし
- スケジュール内URL: https://blog.linuxplumbersconf.org/2011/ocw/events/LPC2011/schedule#schedule_item-45
- 日時: Thursday, September 8, 2011 4:30 – 4:45pm
- Description: Abstract未掲載

### One Line Summary

Break

## Free Evening

- 個別セッションURL: 掲載なし
- スケジュール内URL: https://blog.linuxplumbersconf.org/2011/ocw/events/LPC2011/schedule#schedule_item-51
- 日時: Thursday, September 8, 2011 7:00 – 10:00pm
- Description: Abstract未掲載

### One Line Summary

Free Evening

## Break

- 個別セッションURL: 掲載なし
- スケジュール内URL: https://blog.linuxplumbersconf.org/2011/ocw/events/LPC2011/schedule#schedule_item-57
- 日時: Friday, September 9, 2011 9:45 – 9:59am
- Description: Abstract未掲載

### One Line Summary

Break

## Lunch in the Hyatt Garden

- 個別セッションURL: 掲載なし
- スケジュール内URL: https://blog.linuxplumbersconf.org/2011/ocw/events/LPC2011/schedule#schedule_item-63
- 日時: Friday, September 9, 2011 12:30 – 1:30pm
- Description: Abstract未掲載

### One Line Summary

Lunch at the Hyatt out on the lawn in front of Dry Creek Valley.

## Break

- 個別セッションURL: 掲載なし
- スケジュール内URL: https://blog.linuxplumbersconf.org/2011/ocw/events/LPC2011/schedule#schedule_item-69
- 日時: Friday, September 9, 2011 4:00 – 4:15pm
- Description: Abstract未掲載

### One Line Summary

Break

## Closing Party at Franco's Ristorante

- 個別セッションURL: 掲載なし
- スケジュール内URL: https://blog.linuxplumbersconf.org/2011/ocw/events/LPC2011/schedule#schedule_item-75
- 日時: Friday, September 9, 2011 7:00 – 10:00pm
- Description: Abstract未掲載

### One Line Summary

Open dinner menu & bar at Franco’s. Address and directions at http://francosristorante.com/.>


# 出典

- https://blog.linuxplumbersconf.org/2011/
- https://blog.linuxplumbersconf.org/2011/ocw/events/LPC2011/schedule
- https://wiki.linuxplumbersconf.org/2011:topics
