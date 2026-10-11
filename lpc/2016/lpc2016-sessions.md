# Linux Plumbers Conference 2016 全セッション一覧

出典: https://blog.linuxplumbersconf.org/2016/ocw/events/LPC2016/schedule.html

2016年はOCWのproposals形式。開催スケジュールの個別URL付き枠143件を収録（Lunch Break 1件を含む）。Descriptionは個別ページのAbstract原文。One Line Summaryは別フィールドに保持。資料URLは個別ページの原記載を保持し、スケジュールに別のアーカイブURLがある場合はschedule_urlも収録。添付ファイル本体の取得・リンク有効性検査は実施していない。Wiki Topicsは採用済み12件と、今年は含まれないと明記された提案16件を補足に区別して収録し、開催セッションの件数には加算しない。WikiのTentative/Proposed等は原文通り。個別開始時刻が未掲載の26件は空欄のまま保持。マイクロカンファレンス・ワークショップ全体の16枠も補足に収録。

セッション: 143件 / Descriptionあり: 142件 / 資料あり: 54件 / 資料項目: 54件

## 目次

1. [Complex Dependencies Part I](#session-4551)
2. [Implementing a new Linux RDMA provider](#session-4401)
3. [New IOCTL ABI](#session-4425)
4. [Consolidation of RDMA User-space code](#session-4413)
5. [Debuggability and Tracing](#session-4431)
6. [Integration with other subsystems](#session-4443)
7. [Lunch Break](#session-4533)
8. [Containers and RDMA](#session-4437)
9. [New Fabrics](#session-4395)
10. [Future and Roadmap for RDMA](#session-4455)
11. [User Mode Ethernet Verbs](#session-4515)
12. [Dual Licensing](#session-4407)
13. [Complex Dependencies Part II](#session-4557)
14. [Container / cgroup v2 API](#session-4575)
15. [VM Brainstorming](#session-4581)
16. [A Formal Model of Linux-Kernel Memory Ordering](#session-4545)
17. [VM Panel -- Bring your VM issues](#session-4587)
18. [rtl8xxxu - true love for cheap USB WiFi dongles](#session-4089)
19. [Introduction](#session-4239)
20. [lxc: project update](#session-4221)
21. [clear containers: project update](#session-4353)
22. [openvz: project update](#session-4233)
23. [runc: project update](#session-4023)
24. [rkt: project update](#session-4563)
25. [CGroup v2](#session-3513)
26. [File capabilities in user namespaces](#session-4191)
27. [State of the kernel support](#session-4209)
28. [Record and vPlay: Debugging Container-App-Crashes with "Partial Checkpoints"](#session-4203)
29. [General discussion](#session-4245)
30. [Introduction](#session-4539)
31. [Device Tree Schema Discussion](#session-4173)
32. [devictree: hardware vs configuration vs policy](#session-4047)
33. [Overlays, connectors, plugins, overlay managers](#session-4521)
34. [status of devicetree debug tools and techniques](#session-4167)
35. [Printk improvements](#session-4593)
36. [gce-xfstests: Testing Kernels in the Cloud](#session-4113)
37. [Near Field Communication (NFC) on Linux](#session-4131)
38. [Container Networking with BPF & XDP](#session-4125)
39. [Introduction to session](#session-4461)
40. [Standardized Enumeration of FPGAs](#session-4467)
41. [Configuration and Assignment](#session-4473)
42. [Orchestration of FPGAs](#session-4479)
43. [Understanding use cases for FPGAs](#session-4485)
44. [FPGA mgr update](#session-4491)
45. [Next steps for FPGAs and programmable logic](#session-4497)
46. [Livepatch support for different architectures](#session-3591)
47. [Livepatch and modified data structures - brainstorming](#session-3597)
48. [Live Patching: prioritizing next steps in upstream codebase](#session-3855)
49. [Livepatching completeness - a review of considerations for success](#session-3477)
50. [Patch module dependencies](#session-3753)
51. [Livepatch module creation tooling](#session-3519)
52. [Patching of scheduler functions](#session-3567)
53. [GCC optimizations and their impact on livepatch](#session-3573)
54. [A Beginner's Guide to the TPM](#session-3549)
55. [Application packaging, sorting things out](#session-4065)
56. [git-series: Tracking the History of History](#session-3843)
57. [CPUFreq without timers and the schedutil governor](#session-3777)
58. [Definition of a kernel energy model in DT](#session-4293)
59. [Improve utilization and load tracking in the scheduler](#session-3603)
60. [Favored cores and asymmetric packing](#session-3813)
61. [SoC idle: hierarchical idle management](#session-3789)
62. [Idle Injection for Power Management](#session-4251)
63. [Localising the system latency/throughput/power tunability surface](#session-4341)
64. [Linux PM infrastructure status report](#session-3783)
65. [Linux Kernel Testing: Where are we ?](#session-4071)
66. [Syzkaller: Future development](#session-3561)
67. [Trinity: Next directions.](#session-3507)
68. [All About the perf_fuzzer](#session-3501)
69. [Applying mutation testing for testing RCU: Progress report](#session-4257)
70. [Linux linker tables - past, present and future](#session-3621)
71. [Integrating and running all the kernel tests](#session-3837)
72. [DMA Engines](#session-4611)
73. [Reducing Network Latency on Wifi... Finally!](#session-3963)
74. [How truly unprivileged containers work in lxc](#session-3951)
75. [File signatures needed!](#session-3933)
76. [Fixing kconfig semantics](#session-4605)
77. [What to do with Android items in staging?](#session-3717)
78. [Energy Aware Scheduling (EAS) on Android](#session-3693)
79. [Better compute control for Android using SchedTune and SCHED_DEADLINE](#session-3699)
80. [Android background updates lightning talk](#session-3879)
81. [The vDSO on arm64](#session-3711)
82. [Linux Kernel: Behavioral Analysis and Visualization](#session-3705)
83. [ION - Large pages for devices](#session-3687)
84. [Ion update and status report](#session-3759)
85. [drm_hwcomposer library](#session-4185)
86. [Mainlining of the Android Sync Framework: status update](#session-4059)
87. [Brillo Kernel Maintenance](#session-3723)
88. [Secure world discussion: OP-TEE and Trusty](#session-3675)
89. [Multi-device support for AOSP](#session-3663)
90. [HiKey in AOSP](#session-3669)
91. [Android Systems Programming Using the Java Language](#session-3741)
92. [AOSP's switch to Clang](#session-3681)
93. [State of the Git Union](#session-4299)
94. [Git Series Discussion](#session-4305)
95. [A Maze of Git Scripts All Alike](#session-4311)
96. [Future Git Directions](#session-4317)
97. [Alex Courouble: Token-level git blame](#session-4323)
98. [linux and glibc: The 4.5TiB malloc API trace](#session-3921)
99. [Enabling Fast Per-CPU User-Space Algorithms with Restartable Sequences](#session-3873)
100. [Improving Gaming Under Linux](#session-3489)
101. [Increase Test Coverage in a Linux-based OS](#session-3555)
102. [Software Updates for Connected Linux Devices: Key Considerations](#session-3525)
103. [Netlink engine issues, and ways to fix those](#session-4599)
104. [GPL Enforcement Feedback session](#session-3987)
105. [UEFI & Linux Interoperability](#session-4149)
106. [What do we call an explosive mix of LSM, cgroup, BPF, seccomp ?](#session-4077)
107. [A Formal Model of Linux-Kernel Memory Ordering](#session-4197)
108. [Distributing files with signatures](#session-4161)
109. [ZFS and OpenVZ container sync project](#session-4263)
110. [_OSI and it's impact to OEMs](#session-4569)
111. [Beyond Fork and Exec: Running a Million Containers at Facebook](#session-3645)
112. [Introduction](#session-4383)
113. [The IBM TSS 2.0 stack](#session-4365)
114. [The Intel TSS 2.0 stack](#session-4371)
115. [How Google use TPMs in ChromeOS](#session-4377)
116. [Shipping known-good PCR values](#session-4389)
117. [Standardization of Device Tree Bindings for TPM](#session-3939)
118. [Formal specification for describing userspace API's](#session-4617)
119. [MSIs in Guest OSs on arm64](#session-3633)
120. [Direct Injection of MSIs into KVM guests on arm64](#session-3639)
121. [IOMMU Interaction Issues with PCI](#session-4011)
122. [PCI resource ALT allocation and resource allocation test module](#session-4509)
123. [PCI resources/irq allocation cross-arch consolidation](#session-3579)
124. [PCIe domains re-enumeration](#session-3585)
125. [Support for configurable PCIe endpoint](#session-3657)
126. [Portable System Services](#session-3609)
127. [Improving Linux Performance with GCC latest technologies](#session-3795)
128. [Man-pages: discovery, feedback loops, and the perfect kernel commit message](#session-3825)
129. [Integration of trace buffering and aggregation tools](#session-3615)
130. [Remote server for tracing](#session-3627)
131. [Kernelscope: Live debugging at scale](#session-3495)
132. [User Space Dynamic Tracing](#session-4029)
133. [Improving BCC tracing for the Linux Kernel with LLVM IR](#session-4083)
134. [Checkpoint/Restart for distributed applications](#session-4335)
135. [Some Open Challenges in Checkpointing](#session-4281)
136. [Towards better restorer](#session-4269)
137. [Lazy Process Migration](#session-3483)
138. [Checkpoint Restore in LXD](#session-3651)
139. [What doesn't work in CRIU](#session-4017)
140. [What doesn't work in CRIU, ARM edition](#session-4227)
141. [Rerun: A Formal Model of Linux-Kernel Memory Ordering](#session-4635)
142. [Capability-based IPC on Linux](#session-3819)
143. [Sanitizers](#session-3471)

<a id="session-4551"></a>
## 1. Complex Dependencies Part I

- セッション個別URL: https://blog.linuxplumbersconf.org/2016/ocw/proposals/4551.html
- Track: Kernel Summit Track
- 日時: Tuesday, November 1, 2016 9:30am

### Description

Addressing complex dependencies in the kernel is a broad topic, and there is an overlap in interest from the Audio workshop with some of the complex dependency topics, as there will be two sessions for addressing complex dependencies, please take note of the room for each:

9:30am – 10:30 – Sweeney CDE (with Audio workshop)
10:30 – 12:30 – Coronado

The details below cover the topics which will be addressed during the morning session:

Device hierarchy (just not a tree but a graph)
	Handling cycles on the graph proposals

### One Line Summary

Complex Linux kernel dependencies part 1

### 添付資料URL

掲載なし

<a id="session-4401"></a>
## 2. Implementing a new Linux RDMA provider

- セッション個別URL: https://blog.linuxplumbersconf.org/2016/ocw/proposals/4401.html
- Track: RDMA Workshop
- 日時: Tuesday, November 1, 2016 9:00am

### Description

I will talk about my experiences as lead developer for the RDMA provider
library and kernel driver for SIF, Oracle’s new Infiniband HCA.

I was brought in early in the project as a developer with broad experience
in software engineering and a good understanding of the
challenges and opportunities of RDMA technology and driver development
(a Ph.D and experience from pre-Inifinband technology for RDMA (SCI,VIA))
but as new to Infiniband and the RDMA stack.

The software project was started well ahead of having any hardware
available, and most of the driver and user level library was developed
in parallel with a high level system model and an RTL level simulation
environment while hardware was still under development.

An additional challenge was that we due to corporate constraints
had to do most of this work with very limited opportunity
to consult the community except by using available public information.

This talk will focus on how and where features and APIs of the RDMA stack
helped us getting to our goal and where we faced issues and obstacles
during this work, personal and team lessons learned from this effort,
with the goal of highlighting what should be left as it
is, and where we see opportunities for improvement.

I’ll try to put this in the context of the latest hard work by the
community to bring the RDMA stack forward.

### One Line Summary

Implementing Linux RDMA provider software for a new device from scratch

### 添付資料URL

掲載なし

<a id="session-4425"></a>
## 3. New IOCTL ABI

- セッション個別URL: https://blog.linuxplumbersconf.org/2016/ocw/proposals/4425.html
- Track: RDMA Workshop
- 日時: Tuesday, November 1, 2016 9:45am

### Description

Since it was decided to move from write to an IOCTL based ABI, there were multiple proposals. Living with the current ABI for quite some time, we have a good opportunity to fix some of the flaws.
This session strives to finalize the details of the new ABI:

The structs we pass between user-space and kernel.
	Which FDs do we support?
	How do we convert the legacy ABI to the new IOCTL based ABI?
	If and how we implement a vendor channel?

### One Line Summary

New IOCTL ABI and issues related

### 添付資料URL

掲載なし

<a id="session-4413"></a>
## 4. Consolidation of RDMA User-space code

- セッション個別URL: https://blog.linuxplumbersconf.org/2016/ocw/proposals/4413.html
- Track: RDMA Workshop
- 日時: Tuesday, November 1, 2016 10:30am

### Description

The Linux RDMA project has combined 18 previously distinct source
trees into one tree in order to make better use of our limited people
resources and simplify distribution of the standard RDMA user space.
A brief update will be given on the work accomplished so far, with a
discussion to follow on the remaining difficult points and future
projects within the consolidated tree.

### One Line Summary

RDMA User-space Consolidation: Update and Future projects discussion

### 添付資料URL

掲載なし

<a id="session-4431"></a>
## 5. Debuggability and Tracing

- セッション個別URL: https://blog.linuxplumbersconf.org/2016/ocw/proposals/4431.html
- Track: RDMA Workshop
- 日時: Tuesday, November 1, 2016 11:15am

### Description

2016 year can be easily called as a year of RDMA.

It has steady stream of new comers into the subsystem. Despite the fact that kernel provides a lot of built-in functionality for debugs and traces, most of such new drivers are not using them.

It is time to discuss:
1. Which services should IB core provide to decrease the current printks flood?
2. What can be commonized?
3. Do we want/need to extend kernel perf?
4. Which paths (hot/cold) do we want to instrument?
5. Do we want general error handling?

### One Line Summary

Chase that bug ...

### 添付資料URL

掲載なし

<a id="session-4443"></a>
## 6. Integration with other subsystems

- セッション個別URL: https://blog.linuxplumbersconf.org/2016/ocw/proposals/4443.html
- Track: RDMA Workshop
- 日時: Tuesday, November 1, 2016 11:40am

### Description

RDMA subsystem is evolving to be more than just  place for Infiniband/RoCE/OmniPath drivers.

There are solutions in the field which combines various GPUs with HCAs, performs HW offloading mechanism to bypass CPU and presents different architectures without CPU in the center.

All of them are constantly raising basic questions on how properly integrate them into RDMA subsystem.

LPC RDMA workshop is a great place to discuss it.

### One Line Summary

Integrating functionality for GPUs, network, PCI devices

### 添付資料URL

掲載なし

<a id="session-4533"></a>
## 7. Lunch Break

- セッション個別URL: https://blog.linuxplumbersconf.org/2016/ocw/proposals/4533.html
- Track: RDMA Workshop
- 日時: Tuesday, November 1, 2016 12:00pm

### Description

Relax

### One Line Summary

1 hour lunch break

### 添付資料URL

掲載なし

<a id="session-4437"></a>
## 8. Containers and RDMA

- セッション個別URL: https://blog.linuxplumbersconf.org/2016/ocw/proposals/4437.html
- Track: RDMA Workshop
- 日時: Tuesday, November 1, 2016 1:00pm

### Description

Talk by Liran Liss (who needs to complete his speaker registration and update the abstract!!!)

Are we ready?

RoCE namespaces, cgroups and supported netdevices are good topics for discussion.

### One Line Summary

Using Containers with RDMA devices

### 添付資料URL

掲載なし

<a id="session-4395"></a>
## 9. New Fabrics

- セッション個別URL: https://blog.linuxplumbersconf.org/2016/ocw/proposals/4395.html
- Track: RDMA Workshop
- 日時: Tuesday, November 1, 2016 1:45pm

### Description

The RDMA stack in Linux has matured significantly over the last 2 years.
Multiple new InfiniBand based NICs have appeared and at the same time a new
non-Verbs based (PSM) hardware device has been added.

2 major device types exist in the tree today

PSM

While the basic high level semantics between the above interfaces are similar.

… the details between them are vastly different.

Possible questions to be discussed:
-————————————————

1) What is the fundamental purpose of a standardized RDMA stack?

ABI

RDMA

XRC

2) Without trying to design for hardware which does not exist how can we make
   ABIs flexible enough to accommodate the unknown without being overly complex?

RDMA

3) How should the Linux kernel support devices which have RDMA hardware which
   are not Queue Pair or Connection oriented?

4) What can be learned by the body of work in libfabric or the DRM stack which
   supports a wide variety of hardware with a common interface?

5) How do we build in access to special features of new hardware which is
   constantly on the bleeding edge of network research?

6) What is the equivalent of setsockopt in rdma?

### One Line Summary

New network technologies (fabrics, NICs and even APIs) have recently surfaced.

### 添付資料URL

掲載なし

<a id="session-4455"></a>
## 10. Future and Roadmap for RDMA

- セッション個別URL: https://blog.linuxplumbersconf.org/2016/ocw/proposals/4455.html
- Track: RDMA Workshop
- 日時: Tuesday, November 1, 2016 2:30pm

### Description

We’ll discuss where the RDMA stack is heading, current trends, and get into the future needs of testing of the stack given that we have so many new entrants into the RDMA field in the last year.

### One Line Summary

RDMA Roadmap and Interoperability Testing

### 添付資料URL

掲載なし

<a id="session-4515"></a>
## 11. User Mode Ethernet Verbs

- セッション個別URL: https://blog.linuxplumbersconf.org/2016/ocw/proposals/4515.html
- Track: RDMA Workshop
- 日時: Tuesday, November 1, 2016 3:15pm

### Description

Talk by Tzahi Oved from Mellanox (Please get your speaker registration done!!)

Advanced network adaptors support richer and richer stateless offload including checksum offloads for L3 and L4 headers for receive and transmit, Large Send Offload (LSO) to perform TCP segmentation in HW, Large Receive Offload (LRO) that performs TCP de-segmentation in HW, Transmit Side Scaling (TSS) to allow multiple send queues (typically per core), Receive Side Scaling (RSS) to allow distribution of traffic to multiple cores on receive according to connection tuple, Linux aRFS that allows steering of connection tuple to a specific queue.
Additionally, in cloud environments it is popular to use tunneling and overlay network such as VXLAN, Geneve, NVGRE, other. Following, advanced NICs added stateless offloads to support encapsulated Ethernet frames where essentially NICs are capable of performing above stateless offloads for inner packet as well.
Moreover, in order to perform monitoring and diagnostics, network adapters present capture capabilities that allows sniffing and analyzing network traffic.
The above offloads are mainly available for Kernel network drivers and kernel mode stacks. Verbs API allows both user mode and kernel mode OS bypass for RDMA communication applications and also presented already Ethernet API support with RAW Ethernet QP. Such API is widely used for OS bypass based application and user mode stacks like DPDK, VMA, ..
In this talk we’ll present how we suggest to extend the Verbs API to support all the above stateless offloads for both Ethernet and IPoIB applications and in both user and kernel mode. We will present our proposal for new Verbs objects that can serve more optimally a programming interface that has separate transport and memory queue objects. Using such objects, a single transport with multiple memory queues can be used and managed in a more optimal form which allows building stateless offloads on top as well as sniffing API.

### One Line Summary

Support for richer offloads in the Verbs API

### 添付資料URL

掲載なし

<a id="session-4407"></a>
## 12. Dual Licensing

- セッション個別URL: https://blog.linuxplumbersconf.org/2016/ocw/proposals/4407.html
- Track: RDMA Workshop
- 日時: Tuesday, November 1, 2016 4:00pm

### Description

For historical reasons, many parts of the RDMA subsystem are dual licensed.  This was done, primarily, at the request of the Open Fabrics Alliance (OFA).  In the early days of RDMA-based networking, the OFA was instrumental in helping guide the development of the software that supported that technology.  The members and contributors to that code base wanted licensing protection that would allow them to enhance the code for proprietary products without releasing their optimizations, and/or provide solutions on non-Linux Operating Systems.   The success of RDMA-based technology has resulted in a very different landscape, making the previous license model difficult – if not impossible – to continue.  This session will be an open discussion about licensing and the various positions and needs of the community.

### One Line Summary

Current and Future Licensing Approach to the RDMA Subsystem Codebase

### 添付資料URL

掲載なし

<a id="session-4557"></a>
## 13. Complex Dependencies Part II

- セッション個別URL: https://blog.linuxplumbersconf.org/2016/ocw/proposals/4557.html
- Track: Kernel Summit Track
- 日時: Tuesday, November 1, 2016 10:30am

### Description

This is a followup to the morning session. The morning session will take place in together with the Audio workshop in room Sweeney CDE due to overlap with topics and interest. This followup afternoon session will take place after lunch and includes the following topics:

Functional dependencies (now merged on Greg’s tree)
	Resource tracking / allocation framework
	Media controller feature graph
	Linker tables
	Async probe

### One Line Summary

Complex Linux kernel dependencies Part II

### 添付資料URL

掲載なし

<a id="session-4575"></a>
## 14. Container / cgroup v2 API

- セッション個別URL: https://blog.linuxplumbersconf.org/2016/ocw/proposals/4575.html
- Track: Kernel Summit Track
- 日時: Tuesday, November 1, 2016 2:00pm

### Description

One of the disagreements include whether tasks in non-leaf cgroups as well as whether threads in the same process can be in different cgroups.

Participants include Andy Lutomirski, Tejun Heo, Paul Turner, Peter Zijlstra, Serge Haallyn, et. al

### One Line Summary

To resolve disagreements over the cgroup v2 API semantics

### 添付資料URL

掲載なし

<a id="session-4581"></a>
## 15. VM Brainstorming

- セッション個別URL: https://blog.linuxplumbersconf.org/2016/ocw/proposals/4581.html
- Track: Kernel Summit Track
- 日時: Tuesday, November 1, 2016 3:00pm

### Description

VM Brainstorming

### One Line Summary

VM Brainstorming

### 添付資料URL

掲載なし

<a id="session-4545"></a>
## 16. A Formal Model of Linux-Kernel Memory Ordering

- セッション個別URL: https://blog.linuxplumbersconf.org/2016/ocw/proposals/4545.html
- Track: Kernel Summit Track
- 日時: Tuesday, November 1, 2016 4:00pm

### Description

This BoF session will give an overview and some demos of a draft Linux-kernel formal memory model. This memory model is designed to accommodate the range of hardware that the kernel runs on as well as the range of use cases within the Linux kernel, and can be thought of as a formalization of and extension to Documentation/memory-barriers.txt. As far as we know, this is the first realistic formal memory model for the Linux kernel, and the first formal memory model of any kind that correctly models RCU.

Joint work with Jade Alglave, Luc Maranget, Andrea Parri, and Alan Stern.

### One Line Summary

Review, explore, and critique a draft formal model of Linux-kernel memory ordering.

### 添付資料URL

- [slides](http://www.linuxplumbersconf.net/2016/ocw//system/presentations/4545/original/LinuxMM.2016.10.26c.LPC.pdf)（file）


- スケジュール掲載のアーカイブURL: https://blog.linuxplumbersconf.org/2016/ocw/system/presentations/4545/original/LinuxMM.2016.10.26c.LPC.pdf
<a id="session-4587"></a>
## 17. VM Panel -- Bring your VM issues

- セッション個別URL: https://blog.linuxplumbersconf.org/2016/ocw/proposals/4587.html
- Track: Kernel Summit Track
- 日時: Wednesday, November 2, 2016 9:30am

### Description

VM Panel — Bring your VM issues / questions

### One Line Summary

VM Panel -- Bring your VM issues / questions

### 添付資料URL

掲載なし

<a id="session-4089"></a>
## 18. rtl8xxxu - true love for cheap USB WiFi dongles

- セッション個別URL: https://blog.linuxplumbersconf.org/2016/ocw/proposals/4089.html
- Track: Refereed Presentations Track
- 日時: Wednesday, November 2, 2016 9:45am

### Description

Linux support for inexpensive USB WiFi dongles has long been rather chaotic, with vendors selling multiple variations of the same device, requiring completely different drivers for each one.

Particular prone to this mess has been the Realtek based devices, resulting in a myriad of git repositories and help pages with 
modified versions of the numerous nearly identical Realtek vendor drivers.

This talk will discuss how a naive attempt of ‘cleaning up the rtl8723au vendor driver in a couple of months’ turned into a much bigger project of rewriting the driver from scratch. This included adding support for multiple devices from the rtl8xxx family, most of which were previously only supported by individual out-of-tree and staging drivers.

We will look at what is currently supported and what is expected in the nearer future. In addition we will examine missing features and what needs to be done before we can finally remove the current 3 Realtek USB drivers from staging.

In addition we will discuss long term features, including adding support for 802.11ac devices, as well as SDIO and PCI derivatives of the same chips.

Finally, as rewriting WiFi drivers for an entire chip family is a much bigger job than it looks like at the surface, there is plenty of work to do. All attendees will be assumed volunteers and we will complete the presentation with a discussion of what the audience would like to see added and you will be assigned tasks for your future participation.

### One Line Summary

Improving support for cheap Realtek WiFi dongles (and shrinking drivers/staging in the process)

### 添付資料URL

- [slides](https://blog.linuxplumbersconf.org/2016/ocw/system/presentations/4089/original/2016-11-02-rtl8xxxu-presentation.pdf)（file）

<a id="session-4239"></a>
## 19. Introduction

- セッション個別URL: https://blog.linuxplumbersconf.org/2016/ocw/proposals/4239.html
- Track: Containers
- 日時: Wednesday, November 2, 2016 9:30am

### Description

Just a 5 minutes intro.

### One Line Summary

Introduction to the micro-conference

### 添付資料URL

掲載なし

<a id="session-4221"></a>
## 20. lxc: project update

- セッション個別URL: https://blog.linuxplumbersconf.org/2016/ocw/proposals/4221.html
- Track: Containers
- 日時: Wednesday, November 2, 2016 9:35am

### Description

This is a short presentation of what happened over the past year in the LXC, LXCFS and LXD projects, new features, new releases, current focus and future.

### One Line Summary

Update on the past year of LXC, LXCFS and LXD development

### 添付資料URL

- [slides](https://linuxplumbersconf.com/2016/ocw//system/presentations/4221/original/Linux Plumbers 2016- containers micro-conference.pdf)（file）


- スケジュール掲載のアーカイブURL: https://blog.linuxplumbersconf.org/2016/ocw/system/presentations/4221/original/Linux%20Plumbers%202016-%20containers%20micro-conference.pdf
<a id="session-4353"></a>
## 21. clear containers: project update

- セッション個別URL: https://blog.linuxplumbersconf.org/2016/ocw/proposals/4353.html
- Track: Containers
- 日時: Wednesday, November 2, 2016 9:50am

### Description

First I’d like to give a quick update on what clear containers are, the current project status and its longer term plans. Then I will highlight the major issues we’re facing when it comes to integrate VM based containers with the many containers stacks and orchestration out there (Docker, Rkt, k8s, hyper, etc…). 
As more and more container users are seeing the security benefits of HW virtualization for their workloads, I will  propose ways of making virtualized containers first class citizens in the containers republic.

### One Line Summary

A quick update on where we are, where we want to go and which major issues we're facing with clear containers.

### 添付資料URL

- [slides](http://linuxplumbersconf.com/2016/ocw//system/presentations/4353/original/LPC 2016 Clear Containers.pdf)（file）


- スケジュール掲載のアーカイブURL: https://blog.linuxplumbersconf.org/2016/ocw/system/presentations/4353/original/LPC%202016%20Clear%20Containers.pdf
<a id="session-4233"></a>
## 22. openvz: project update

- セッション個別URL: https://blog.linuxplumbersconf.org/2016/ocw/proposals/4233.html
- Track: Containers
- 日時: Wednesday, November 2, 2016 10:05am

### Description

OpenVZ 7, released a few months ago, is a radically new version of OpenVZ and comes with quite a few new interesting features, such as new userspace tools, libvirt support, memory guarantees, and enhancements in memory management. The talk will go over these features as well as some implementation details.

### One Line Summary

an overview of new stuff in OpenVZ 7

### 添付資料URL

掲載なし

<a id="session-4023"></a>
## 23. runc: project update

- セッション個別URL: https://blog.linuxplumbersconf.org/2016/ocw/proposals/4023.html
- Track: Containers
- 日時: Wednesday, November 2, 2016 10:20am

### Description

runc is a simple yet full-featured container runtime that is the default implementation of OCI’s runtime specification. This demo will show how to use it effectively using ocitools.

### One Line Summary

Learn how runc and ocitools make it easy to run containers

### 添付資料URL

掲載なし

<a id="session-4563"></a>
## 24. rkt: project update

- セッション個別URL: https://blog.linuxplumbersconf.org/2016/ocw/proposals/4563.html
- Track: Containers
- 日時: Wednesday, November 2, 2016 11:05am

### Description

The rkt container runtime hit version 1.0 earlier this year, and plenty has happened since. This session will provide a quick overview of the new features integrated into rkt since the last LPC.

### One Line Summary

An update on the past year's work in the rkt container runtime

### 添付資料URL

掲載なし

<a id="session-3513"></a>
## 25. CGroup v2

- セッション個別URL: https://blog.linuxplumbersconf.org/2016/ocw/proposals/3513.html
- Track: Containers
- 日時: Wednesday, November 2, 2016 11:20am

### Description

Rami will discuss in this talk the cgroups v2 subsystem, which was recently integrated into the Linux kernel (from kernel 4.5); he will talk about what was the motivation for developing it, what was implemented till now and what is yet to be developed, how does it differ from cgroup V1, adoption of cgroup v2 in applications (like systemd) and in distros, problems that cgroup v2 faces, and more. Rami will also demonstrate the usage of cgroup V2.

This talk is partially based on an article by Rami from March 2016:
“Understanding the new control groups API”
https://lwn.net/Articles/679786/

### One Line Summary

The new cgroupv2 API: getting more consistent and more well organized.

### 添付資料URL

掲載なし

<a id="session-4191"></a>
## 26. File capabilities in user namespaces

- セッション個別URL: https://blog.linuxplumbersconf.org/2016/ocw/proposals/4191.html
- Track: Containers
- 日時: Wednesday, November 2, 2016 11:35am

### Description

File capabilities are not namespaced.  Therefore, at the moment root in a user namespace cannot be allowed to assign capabilities to a file, as that would allow an unprivileged user on the host to elevate privileges.

However, supporting file capabilities everywhere is very desirable as it allows userspace to avoid having to support multiple ways to gain/drop privilege.

There have been a few proposed patches to support namespacing file capabilities.  This talk will higlight the latest developments in completing this feature.

### One Line Summary

Update on file capabilities in containers

### 添付資料URL

掲載なし

<a id="session-4209"></a>
## 27. State of the kernel support

- セッション個別URL: https://blog.linuxplumbersconf.org/2016/ocw/proposals/4209.html
- Track: Containers
- 日時: Wednesday, November 2, 2016 11:50am

### Description

I will give a quick overview of the kernel support for containers, the state of ongoing work I know of, and then field questions have discussions about future issues.

### One Line Summary

State of the kernel support for containers

### 添付資料URL

掲載なし

<a id="session-4203"></a>
## 28. Record and vPlay: Debugging Container-App-Crashes with "Partial Checkpoints"

- セッション個別URL: https://blog.linuxplumbersconf.org/2016/ocw/proposals/4203.html
- Track: Containers
- 日時: Wednesday, November 2, 2016 12:05pm

### Description

Loosely based on Dinesh Subhraveti’s PhD thesis, the vPlay system enables the minimal runtime state of the container to be captured such that when restored, application would retrace its execution for a specified time interval.  The key observation is that during the last moments of a crash, where the root cause typically lies, the application only accesses a small subset of its address space and only those pages need to be saved.  The technique, dubbed partial checkpointing, is combined with logging to be used for debugging.  Because all interactions of the application with the kernel are logged, the execution can be natively replayed even on BSD or Windows.

The details of the kernel and user space implementations of the mechanism along with integration with GDB can be found in  Dinesh’s thesis.

### One Line Summary

Loosely based on Dinesh Subhraveti's PhD thesis, the vPlay system enables the minimal runtime state of the container to be captured such that when restored, application would retrace its execution for a specified time interval.  The key observation is that during the last moments of an application crash, where the root cause typically lies, the application only accesses a small subset of its address space and only those pages need to be saved.  The technique, dubbed partial checkpointing, is combined with logging to be used for debugging.  Because all interactions of the application with the kernel are logged, the execution can be natively replayed even on BSD or Windows.

### 添付資料URL

- [slides](https://blog.linuxplumbersconf.org/2016/ocw/system/presentations/4203/original/vplay.pdf)（file）

<a id="session-4245"></a>
## 29. General discussion

- セッション個別URL: https://blog.linuxplumbersconf.org/2016/ocw/proposals/4245.html
- Track: Containers
- 日時: Wednesday, November 2, 2016 12:20pm

### Description

This period of time at the end of the micro-conference is meant for open discussion with the attendees, possibly continuing over lunch.

Potential topics:
 – Container security (host DoS, escape, …)
 – Unprivileged filesystem mounts
 – Transition to CGroupV2

### One Line Summary

Open discussion on a number of current topics

### 添付資料URL

掲載なし

<a id="session-4539"></a>
## 30. Introduction

- セッション個別URL: https://blog.linuxplumbersconf.org/2016/ocw/proposals/4539.html
- Track: Device Tree
- 日時: Wednesday, November 2, 2016 9:30am

### Description

A quick overview of the agenda and people present.

### One Line Summary

Introduce agenda and people

### 添付資料URL

掲載なし

<a id="session-4173"></a>
## 31. Device Tree Schema Discussion

- セッション個別URL: https://blog.linuxplumbersconf.org/2016/ocw/proposals/4173.html
- Track: Device Tree
- 日時: Wednesday, November 2, 2016 9:35am

### Description

The status and direction of validating device trees against schemas.  How this should be implemented.

### One Line Summary

A discussion about the revived Device Tree validation via shemas.

### 添付資料URL

- [slides](http://linuxplumbersconf.com/2016/ocw//system/presentations/4173/original/grant_likely_plumbers_2016_DT_Schema_Proposal.odp)（file）


- スケジュール掲載のアーカイブURL: https://blog.linuxplumbersconf.org/2016/ocw/system/presentations/4173/original/grant_likely_plumbers_2016_DT_Schema_Proposal.odp
<a id="session-4047"></a>
## 32. devictree: hardware vs configuration vs policy

- セッション個別URL: https://blog.linuxplumbersconf.org/2016/ocw/proposals/4047.html
- Track: Device Tree
- 日時: Wednesday, November 2, 2016 10:10am

### Description

A device tree is supposed to contain descriptions of hardware. The “chosen” node is a specific exception, architected to contain parameters specified by the firmware.

Configuration and policy information is not supposed to be in the device tree. There is a desire to use a single kernel for multiple device trees, so the kernel config options are not available to configuration information.

Where does configuration information and policy information belong? Should device tree be extended to contain it? Is another location needed?

### One Line Summary

Where should configuration and policy information be located; devicetree or elsewhere?

### 添付資料URL

- [slides](http://linuxplumbersconf.com/2016/ocw//system/presentations/4047/original/dt_hw_config_policy.pdf)（file）


- スケジュール掲載のアーカイブURL: https://blog.linuxplumbersconf.org/2016/ocw/system/presentations/4047/original/dt_hw_config_policy.pdf
<a id="session-4521"></a>
## 33. Overlays, connectors, plugins, overlay managers

- セッション個別URL: https://blog.linuxplumbersconf.org/2016/ocw/proposals/4521.html
- Track: Device Tree
- 日時: Wednesday, November 2, 2016 11:45am

### Description

There have been a number of proposed patches in the areas of overlays, connectors, plugins, and overlay managers this year.  This is an oppportunity to ask questions about current status, to give input on use cases and needs, and to suggest where things should go.  Maybe we will venture into the combinatorial problem.

NOTE: there are several key participants in these areas who will not be present.  This session is deliberately scheduled to be short to avoid the temptation of trying to make decisions in their absence.

### One Line Summary

Ask questions about and make suggestions regarding overlays, connectors, plugins, overlay managers

### 添付資料URL

掲載なし

<a id="session-4167"></a>
## 34. status of devicetree debug tools and techniques

- セッション個別URL: https://blog.linuxplumbersconf.org/2016/ocw/proposals/4167.html
- Track: Device Tree
- 日時: Wednesday, November 2, 2016 12:00pm

### Description

Understanding and fixing device tree issues is difficult.  Some tools have recently been added to ease use and debugging.

This is an update of what has been added in the last year and discuss what tools should be added in the next year.

### One Line Summary

Review of recently added debug tools.  Discussion of what additional tools would be useful.

### 添付資料URL

- [slides](http://linuxplumbersconf.com/2016/ocw//system/presentations/4167/original/dt_tools_status.pdf)（file）


- スケジュール掲載のアーカイブURL: https://blog.linuxplumbersconf.org/2016/ocw/system/presentations/4167/original/dt_tools_status.pdf
<a id="session-4593"></a>
## 35. Printk improvements

- セッション個別URL: https://blog.linuxplumbersconf.org/2016/ocw/proposals/4593.html
- Track: Kernel Summit Track
- 日時: Wednesday, November 2, 2016 10:00am

### Description

Topics to be discussed:

1) deadlocks in printk and printk recursion
2) async printk
3) pr_cont
4) console semaphore scalability and problems

### One Line Summary

Printk improvements

### 添付資料URL

掲載なし

<a id="session-4113"></a>
## 36. gce-xfstests: Testing Kernels in the Cloud

- セッション個別URL: https://blog.linuxplumbersconf.org/2016/ocw/proposals/4113.html
- Track: Refereed Presentations Track
- 日時: Wednesday, November 2, 2016 11:00am

### Description

The ext4 file system is now being developed using a regression test system which uses a Google Compute Engine (GCE) Virtual Machine (VM) to run xfstests in a test appliance. This talk will:

Explore the advantages of using cloud-based VM’s for kernel testing and development, and how this has improved the development process in the ext4 development community.
	Describe how to create bootable GCE images which are used as the test appliance in an automated and reproducible procedure, by scripting the GCE commands necessary to start with a Debian image, and customize it by installing the regression test suite.
	Demonstrate the techniques used to run a test kernel in a cloud VM by using a front-end script which uploads the test kernel from the developer’s build tree, and then uses kexec to transition from the standard Debian kernel to the kernel to be tested.

Slides can be found at http://thunk.org/gce-xfstests

### One Line Summary

Testing kernels in GCE using a test appliance containing xfstests

### 添付資料URL

掲載なし

<a id="session-4131"></a>
## 37. Near Field Communication (NFC) on Linux

- セッション個別URL: https://blog.linuxplumbersconf.org/2016/ocw/proposals/4131.html
- Track: Refereed Presentations Track
- 日時: Wednesday, November 2, 2016 11:45am

### Description

NFC is primarily used for smart tags reading and writing, connection handover for pairing bluetooth or wifi devices, authentication credential exchanges, and payment.

This presentation will start with a quick tour of NFC, presenting the different standards and the various existing solutions.

Then we will go through the linux nfc stack implementation in more details. This will be an opportunity to discuss about current NFC developments and the recent progresses made in the Digital Protocol layer implementation. Not specifically related to NFC, this could be a chance to talk and share about debugging practices, tools used, and environment setup.

This will also be an opportunity to talk about interesting new features of the NFC subsystem like Host Card Emulation (HCE). We will do an overview of the various specific use cases for HCE and discuss about how to implement such a feature and integrate it into the existing stack.

Participants should come prepared to share what NFC use cases are most important for them. This session could be used to prioritize what should be worked on next.

### One Line Summary

Current status and future developments of the Linux NFC project

### 添付資料URL

- [slides](https://blog.linuxplumbersconf.org/2016/ocw/system/presentations/4131/original/nfc-lpc-2016.pdf)（file）

<a id="session-4125"></a>
## 38. Container Networking with BPF & XDP

- セッション個別URL: https://blog.linuxplumbersconf.org/2016/ocw/proposals/4125.html
- Track: Refereed Presentations Track
- 日時: Wednesday, November 2, 2016 2:00pm

### Description

This talk demonstrates that programmability and performance does not require user space networking, it can be achieved in the kernel by generating BPF programs and leveraging the existing kernel subsystems. We will demo an early prototype which provides fast IPv6 & IPv4 connectivity to containers, container labels based security policy with avg cost O(1), and debugging and monitoring based on the per-cpu perf ring buffer. We encourage a lively discussion on the approach taken and next steps.

### One Line Summary

Fast in-kernel container networking with security policy enforcement based on BPF programs which are generated on the fly for each container.

### 添付資料URL

掲載なし

<a id="session-4461"></a>
## 39. Introduction to session

- セッション個別URL: https://blog.linuxplumbersconf.org/2016/ocw/proposals/4461.html
- Track: FPGAs and Programmable Logic Devices
- 日時: Wednesday, November 2, 2016 

### Description

FPGAs (Field Programmable Gate Arrays) and other programmable logic devices are increasingly seeing use in both traditional embedded as well as emerging datacenter environments. In this session, we introduce the microconference, the key community members involved, and lay the groundwork for the remainder of the day. Jon will kick off the session and introduce the work done to date, and some proposed goals for the afternoon.

### One Line Summary

Introduction to the problem space of using programmable logic in general purpose datacenter and embedded environments

### 添付資料URL

掲載なし

<a id="session-4467"></a>
## 40. Standardized Enumeration of FPGAs

- セッション個別URL: https://blog.linuxplumbersconf.org/2016/ocw/proposals/4467.html
- Track: FPGAs and Programmable Logic Devices
- 日時: Wednesday, November 2, 2016 

### Description

We discuss the existing mechanisms for enumeration of FPGA and programmable logic devices, as well as the interconnects in use. A trend toward coherently attached logic devices that appear as “fake PCIe” is emerging, and each of the co-presenters will speak about work being done within the community for their architecture to support these different choices.

### One Line Summary

Existing and emerging mechanisms for enumerating FPGAs

### 添付資料URL

掲載なし

<a id="session-4473"></a>
## 41. Configuration and Assignment

- セッション個別URL: https://blog.linuxplumbersconf.org/2016/ocw/proposals/4473.html
- Track: FPGAs and Programmable Logic Devices
- 日時: Wednesday, November 2, 2016 

### Description

FPGAs and programmable logic devices must be configured before they can be used (a bitstream containing the gate configuration must be loaded). In this session, we will discuss standardized methods for configuring FPGas (perhaps using PCIe attributes) and for assigning them into containers and Virtual Machines through techniques such as VFIO. This will take the form of an open discussion organized by the leads.

### One Line Summary

Configuring and using FPGAs and programmable devices through assignment

### 添付資料URL

掲載なし

<a id="session-4479"></a>
## 42. Orchestration of FPGAs

- セッション個別URL: https://blog.linuxplumbersconf.org/2016/ocw/proposals/4479.html
- Track: FPGAs and Programmable Logic Devices
- 日時: Wednesday, November 2, 2016 

### Description

In this session, we will discuss the current work happening within communities such as OpenStack (Nomad) and Kubernetes to automate the process of provisioning and managing FPGAs and programmable logic devices.

### One Line Summary

Orchestration and provisioning of FPGAs and programmable logic devices

### 添付資料URL

掲載なし

<a id="session-4485"></a>
## 43. Understanding use cases for FPGAs

- セッション個別URL: https://blog.linuxplumbersconf.org/2016/ocw/proposals/4485.html
- Track: FPGAs and Programmable Logic Devices
- 日時: Wednesday, November 2, 2016 

### Description

FPGAs and programmable logic devices have much promise in both traditional embedded and emerging datacenter environments, but there is a need to focus on certain use cases as we seek to drive the development of various standards related to their adoption. In this session, we will aim to identify key areas of focus for the next year. In particular, in the datacenter, is it really true that coherently attached (memory based) devices should be the focus, or should we also consider in-line accelerators. And in the embedded use case, is the existing work on the fpga mgr framework and device tree overlays sufficient? Open discussion lead by the listed speakers.

### One Line Summary

Identifying target use cases of focus for future work on FPGAs

### 添付資料URL

掲載なし

<a id="session-4491"></a>
## 44. FPGA mgr update

- セッション個別URL: https://blog.linuxplumbersconf.org/2016/ocw/proposals/4491.html
- Track: FPGAs and Programmable Logic Devices
- 日時: Wednesday, November 2, 2016 

### Description

The Linux kernel is growing a generic framework for managing FPGA resources, known as fpga-mgr. In this session, Alan will update us on the current work.

Currently on the mailing list is a patchset including FPGA Regions which provides Device Tree overlay support.  Also a few patches updating the FPGA Manager core api.

### One Line Summary

An update on the current development of the fpga mgr framework

### 添付資料URL

- [slides](http://linuxplumbersconf.com/2016/ocw//system/presentations/4491/original/alan-tull-fpga-2016-plumbers-fpga-support-upstream-v0.06.pptx)（file）


- スケジュール掲載のアーカイブURL: https://blog.linuxplumbersconf.org/2016/ocw/system/presentations/4491/original/alan-tull-fpga-2016-plumbers-fpga-support-upstream-v0.06.pptx
<a id="session-4497"></a>
## 45. Next steps for FPGAs and programmable logic

- セッション個別URL: https://blog.linuxplumbersconf.org/2016/ocw/proposals/4497.html
- Track: FPGAs and Programmable Logic Devices
- 日時: Wednesday, November 2, 2016 

### Description

An open floor discussion of the next steps involved, including how to drive the workgroup recently created within the Linux Foundation

### One Line Summary

Open floor discussion of next steps for collaboration

### 添付資料URL

掲載なし

<a id="session-3591"></a>
## 46. Livepatch support for different architectures

- セッション個別URL: https://blog.linuxplumbersconf.org/2016/ocw/proposals/3591.html
- Track: Live kernel patching
- 日時: Wednesday, November 2, 2016 

### Description

Give an overview about architecture specific parts of Livepatching framework. Talk about various obstacles that have been solved so far. Summarize the state of the art at the moment.

Discuss know problems and plans on both the kernel and gcc side.

### One Line Summary

Summarize and discuss obstacles  when enabling Livepatch support on different architectures.

### 添付資料URL

- [slides](http://linuxplumbersconf.com/2016/ocw//system/presentations/3591/original/livepatching-different-architectures.odp)（file）


- スケジュール掲載のアーカイブURL: https://blog.linuxplumbersconf.org/2016/ocw/system/presentations/3591/original/livepatching-different-architectures.odp
<a id="session-3597"></a>
## 47. Livepatch and modified data structures - brainstorming

- セッション個別URL: https://blog.linuxplumbersconf.org/2016/ocw/proposals/3597.html
- Track: Live kernel patching
- 日時: Wednesday, November 2, 2016 

### Description

Even the hybrid consistency model does not allow to modify existing structures, for example,  add an element or change the meaning of an existing one.

Let’s have a brainstorming about possible approaches to this problem.

### One Line Summary

Brainstorming about save modification of data structures used by the patched functions.

### 添付資料URL

- [slides](http://linuxplumbersconf.com/2016/ocw//system/presentations/3597/original/livepatching-data-structures.odp)（file）


- スケジュール掲載のアーカイブURL: https://blog.linuxplumbersconf.org/2016/ocw/system/presentations/3597/original/livepatching-data-structures.odp
<a id="session-3855"></a>
## 48. Live Patching: prioritizing next steps in upstream codebase

- セッション個別URL: https://blog.linuxplumbersconf.org/2016/ocw/proposals/3855.html
- Track: Live kernel patching
- 日時: Wednesday, November 2, 2016 

### Description

Brain-storiming session where the primary target is to itemize the next necessary steps that are needed to be done in the upstream klp codebase, prioritizing them, and ideally having people sign up for working on them.

### One Line Summary

Live Patching: prioritizing next steps in upstream codebase

### 添付資料URL

掲載なし

<a id="session-3477"></a>
## 49. Livepatching completeness - a review of considerations for success

- セッション個別URL: https://blog.linuxplumbersconf.org/2016/ocw/proposals/3477.html
- Track: Live kernel patching
- 日時: Wednesday, November 2, 2016 

### Description

Live patching is gaining momentum in the kernel, with ports to several architectures.
We soon expect distributions to be shipping live patches to the kernel. This proposal
discusses some of the issues we have from both a development and administrative viewpoint

From an administrative user view point we should look at

1. We need to look at some of the security issues around live-patching. Can live-patching be used to hide rootkits?
2. Availability of similar infrastructure in user mode

From a development viewpoint we should look at
1. We need to work on a comprehensive suite of tests to ensure reliability of live patching implementations
2. Alternatives to using ftrace infrastructure for live-patching
3. Porting live-patching to other architectures – lessons learnt from ppc64le

The proposed talk covers some recommendations in each of the above areas

### One Line Summary

This talk covers areas of improvements to help livepatching be widely adopted and used

### 添付資料URL

- [slides](http://linuxplumbersconf.com/2016/ocw//system/presentations/3477/original/Plumbersv2.pdf)（file）


- スケジュール掲載のアーカイブURL: https://blog.linuxplumbersconf.org/2016/ocw/system/presentations/3477/original/Plumbersv2.pdf
<a id="session-3753"></a>
## 50. Patch module dependencies

- セッション個別URL: https://blog.linuxplumbersconf.org/2016/ocw/proposals/3753.html
- Track: Live kernel patching
- 日時: Wednesday, November 2, 2016 

### Description

Currently, livepatch allows patching of modules before they are loaded. This means we are able to load a patch module that patches many modules before those modules themselves are loaded. This grants us advantages such as being able to load a single patch module that can patch/unpatch modules as they come and go. This has however introduced a number of complications due to the fact livepatch circumvents module dependencies. Namely, this has required livepatch to implement workarounds such as delaying symbol resolution, delaying application of relocations, (formerly) relying on notifiers, delaying application of alternatives/paravirt instructions, and so on.

Discuss and explore the pros and cons of enforcing hard module dependencies for patch modules. In other words, what are the potential advantages and disadvantages of requiring to-be-patched module(s) to be loaded before the corresponding patch module?

### One Line Summary

Explore the pros and cons of enforcing hard module dependencies for patch modules.

### 添付資料URL

- [slides](http://linuxplumbersconf.com/2016/ocw//system/presentations/3753/original/Patchmoduledependencies-LPC2016.pdf)（file）


- スケジュール掲載のアーカイブURL: https://blog.linuxplumbersconf.org/2016/ocw/system/presentations/3753/original/Patchmoduledependencies-LPC2016.pdf
<a id="session-3519"></a>
## 51. Livepatch module creation tooling

- セッション個別URL: https://blog.linuxplumbersconf.org/2016/ocw/proposals/3519.html
- Track: Live kernel patching
- 日時: Wednesday, November 2, 2016 

### Description

Give an overview of all currently known tools and approaches which are used for creating livepatch modules, both in-tree and out-of-tree.

Discuss pros and cons of each existing approach and possibly other alternative approaches.

Try to reach consensus on shared tooling for creating livepatch modules.

### One Line Summary

Compare the different tools and approaches used for livepatch module creation and try to come up with common in-tree tooling to support it.

### 添付資料URL

- [slides](http://linuxplumbersconf.com/2016/ocw//system/presentations/3519/original/klp-convert.pdf)（file）


- スケジュール掲載のアーカイブURL: https://blog.linuxplumbersconf.org/2016/ocw/system/presentations/3519/original/klp-convert.pdf
<a id="session-3567"></a>
## 52. Patching of scheduler functions

- セッション個別URL: https://blog.linuxplumbersconf.org/2016/ocw/proposals/3567.html
- Track: Live kernel patching
- 日時: Wednesday, November 2, 2016 

### Description

From the livepatch documentation:

“The switch_to macro is inlined into __schedule(). It switches the context between two processes in the middle of the macro. It does not save RIP in x86_64 version (contrary to 32-bit version). Instead, the currently used schedule()/switchto() handles both processes.

Now, let’s have two different tasks. One calls the original __schedule(), its registers are stored in a defined order and it goes to sleep in the switch_to macro and some other task is restored     using the original schedule(). Then there is the second task which calls patchedschedule(), it goes to sleep there and the first task is picked by the patched__schedule(). Its RSP is restored and now the registers should be restored as well. But the order is different in the new patched__schedule(), so…"

The ground has been slightly changed recently (thanks to Brian Gerst, Andy Lutomirski and others) but the problem persists. The talk tries to come up with a feasible solution.

### One Line Summary

Describe one of the livepatch limitations - patching of scheduler functions - and try to come up with a feasible solution.

### 添付資料URL

- [slides](http://linuxplumbersconf.com/2016/ocw//system/presentations/3567/original/pres_sched.pdf)（file）


- スケジュール掲載のアーカイブURL: https://blog.linuxplumbersconf.org/2016/ocw/system/presentations/3567/original/pres_sched.pdf
<a id="session-3573"></a>
## 53. GCC optimizations and their impact on livepatch

- セッション個別URL: https://blog.linuxplumbersconf.org/2016/ocw/proposals/3573.html
- Track: Live kernel patching
- 日時: Wednesday, November 2, 2016 

### Description

GCC performs inter-procedural analysis (IPA) during a compilation and executes different optimizations based on the outcome of IPA. There are several which have impact on livepatch – for example RA, SRA and CP. There is also an issue of dead code elimination.

The aim of the talk is to discuss possible solutions.

### One Line Summary

Describe different GCC optimizations which have certain impact on kernel live patching.

### 添付資料URL

- [slides](http://linuxplumbersconf.com/2016/ocw//system/presentations/3573/original/pres_gcc.pdf)（file）


- スケジュール掲載のアーカイブURL: https://blog.linuxplumbersconf.org/2016/ocw/system/presentations/3573/original/pres_gcc.pdf
<a id="session-3549"></a>
## 54. A Beginner's Guide to the TPM

- セッション個別URL: https://blog.linuxplumbersconf.org/2016/ocw/proposals/3549.html
- Track: Refereed Presentations Track
- 日時: Wednesday, November 2, 2016 2:45pm

### Description

Every shipping laptop and desktop has had a TPM as part of its hardware inventory for a considerable while now, mostly because of windows which (currently) uses it for bitlocker disk encryption.  However, the actual use cases in Linux are very few and we need to change that.

Among its many functions, the TPM can do Signing, private key shielding, measurement, attestation, binding and sealing.  These terms are all highly technical security ones, so if you don’t know what they mean, this session will explain them all and the potential use cases.

However, to give a brief use case: key shielding allows a private RSA key to be deposited into shielded memory in a way that it can’t be extracted again.  Once this is done the TPM can then sign (admittedly only with RSA2048 keys) any hash from an authenticated source.  In theory this means it could shield your gpg key and all your ssh keys in a way that meant even if someone stole your laptop they couldn’t steal your keys. Essentially, this could replace the current GPG stick/crypto stick/yubikey approach to security devices with an easy to use in-laptop alternative which could easily be integrated with desktop key managers … why haven’t we done it yet? come and find out …

Although this talk will touch on the Trusted Security Stack (TSS) and give an overview, because that’s the way we have to talk to the TPM, this talk will mention the TSS as little as possible because it seems to be the primary reason for people avoiding the TPM.

slides

### One Line Summary

A talk about what the TPM can do, what it should be doing for you in Linux and how we can help it do that.

<a href="http://www.hansenpartnership.com/Impress-Slides/Beginners-Guide-TPM-2016/">slides</a>

### 添付資料URL

掲載なし

<a id="session-4065"></a>
## 55. Application packaging, sorting things out

- セッション個別URL: https://blog.linuxplumbersconf.org/2016/ocw/proposals/4065.html
- Track: Refereed Presentations Track
- 日時: Wednesday, November 2, 2016 4:00pm

### Description

Several application packaging and containment technologies have emerged in recent months, aiming to address the Linux desktop environment use cases. These recent developments have further reinforced the notion that Linux is no longer just for geeks with laptops.

The speaker will bring ideas and needs from two large sectors, automotive and gaming, that can benefit from using freedesktop technologies.

From an automotive standpoint, we will explore an app framework for Internet­ connected cars, and how the needs of such a framework can be addressed without reinventing the wheel, using freedesktop specifications like Desktop Entries, AppStream and Flatpak.

On the gaming side, we will look at how a possible solution, built on existing freedesktop technologies such as bubblewrap, and new libc/libdl features like dlmopen, could greatly improve game stability and longevity, and allow games to fully benefit from performance improvements, all with little or no extra effort required from game developers.

The rest of the time should be used for discussions and debates about how to bring some of those ‘competing’ or ‘complementary’ initiatives together.

### One Line Summary

Discussion on OEMs and consumers needs for comprehensive packaging of "applications"

### 添付資料URL

掲載なし

<a id="session-3843"></a>
## 56. git-series: Tracking the History of History

- セッション個別URL: https://blog.linuxplumbersconf.org/2016/ocw/proposals/3843.html
- Track: Refereed Presentations Track
- 日時: Thursday, November 3, 2016 9:30am

### Description

A patch series typically goes through multiple iterations before submission; the path from idea to RFC to “[PATCHv12 1/8]” includes many invocations of “git rebase -i”. However, while Git tracks and organizes commits quite well, it doesn’t actually track changes to a patch series at all, outside of the ephemeral reflog. This makes it a challenge to collaborate on a patch series, distribution package, or any other development that includes rebasing.

Typically, tracking the evolution of a patch series over time involves moving part of the version control outside of git. You can move the patch series from git into quilt or a distribution package, and then version the patch files with git, losing the power of git’s tools. Or, you can keep the patch series in git, and version it via multiple named branches; however, names like feature-v2, feature-v3-typofix, and feature-v8-rebased-4.6-alice-fix sound like filenames from corporate email, not modern version control. And either way, git doesn’t track your cover letter at all.

I’ve built a new tool, git-series, to track both a patch series and its evolution within the same git repository. git-series works entirely with existing git features, pushes and pulls to any git repository, and tracks a cover letter to accompany the series. I’ll demonstrate the development workflow with git-series, and show the underlying architecture and git data structures. I’ll also present my experiences developing with Rust and libgit2.

### One Line Summary

This talk will present git-series, a new git tool for tracking patch series through rebases and other non-fast-forwarding operations.

### 添付資料URL

- [slides](http://linuxplumbersconf.com/2016/ocw//system/presentations/3843/original/git-series.pdf)（file）


- スケジュール掲載のアーカイブURL: https://blog.linuxplumbersconf.org/2016/ocw/system/presentations/3843/original/git-series.pdf
<a id="session-3777"></a>
## 57. CPUFreq without timers and the schedutil governor

- セッション個別URL: https://blog.linuxplumbersconf.org/2016/ocw/proposals/3777.html
- Track: Power Management and Energy-awareness
- 日時: Thursday, November 3, 2016 9:30am

### Description

In Linux 4.6 and 4.7 we have eliminated timers from CPUFreq by making the scheduler invoke CPUFreq governors via per-CPU callbacks and introduced a new CPUFreq governor, called schedutil, that is part of the scheduler and makes decisions based on PELT.  Under development are enhancements of that code (update reason flags, IOwait boost, cross-CPU updates), so discuss them and explore future development directions.

### One Line Summary

Summarize recent advances in CPUFreq development and discuss the next steps.

### 添付資料URL

掲載なし

<a id="session-4293"></a>
## 58. Definition of a kernel energy model in DT

- セッション個別URL: https://blog.linuxplumbersconf.org/2016/ocw/proposals/4293.html
- Track: Power Management and Energy-awareness
- 日時: Thursday, November 3, 2016 9:45am

### Description

The scheduler groups CPUS at each topology level. Energy Aware Scheduler(EAS) needs to associate energy which describes the power usage of the CPU, at the relevant topology level, in each idle state and active state. Each active states also need the compute capacity information.

The goal of this topic is to discuss the energy model representation in DT.

### One Line Summary

Overview of kernel energy model proposal and its related DT bindings to describe energy model parameters.

### 添付資料URL

掲載なし

<a id="session-3603"></a>
## 59. Improve utilization and load tracking in the scheduler

- セッション個別URL: https://blog.linuxplumbersconf.org/2016/ocw/proposals/3603.html
- Track: Power Management and Energy-awareness
- 日時: Thursday, November 3, 2016 10:00am

### Description

The Per Entity Load Tracking has become the default metric in the scheduler in order to evaluate system load and to balance tasks in the system. Its use has been extended to also estimate the CPUs’ utilization and set the best OPPs. With the process of consolidating all decisions related  to CPUs, PELT is going to take a always growing place in optimizing CPUs usage. Nevertheless, the metric still has few limitations that can generate wrong scheduler behavior. We will go through these limitations and the possible solutions.

### One Line Summary

Discuss some limitations of PELT, their impact and how to improve the situation.

### 添付資料URL

- [slides](http://linuxplumbersconf.com/2016/ocw//system/presentations/3603/original/Improve  utilization and load tracking  in the scheduler.pdf)（file）


- スケジュール掲載のアーカイブURL: https://blog.linuxplumbersconf.org/2016/ocw/system/presentations/3603/original/Improve%20%20utilization%20and%20load%20tracking%20%20in%20the%20scheduler.pdf
<a id="session-3813"></a>
## 60. Favored cores and asymmetric packing

- セッション個別URL: https://blog.linuxplumbersconf.org/2016/ocw/proposals/3813.html
- Track: Power Management and Energy-awareness
- 日時: Thursday, November 3, 2016 10:15am

### Description

With Intel® Turbo Boost Max Technology 3.0, single-threaded performance is optimized by identifying processor’s fastest core and running critical workloads on it. This presentation gives overview of implementation using ACPI CPPC and scheduler ASYM_PACKING feature.

### One Line Summary

Using the scheduler's ASYM_PACKING feature for the handling of cores with different maximum turbo frequencies

### 添付資料URL

- [slides](http://linuxplumbersconf.com/2016/ocw//system/presentations/3813/original/plumbers_fcore_v2.pdf)（file）


- スケジュール掲載のアーカイブURL: https://blog.linuxplumbersconf.org/2016/ocw/system/presentations/3813/original/plumbers_fcore_v2.pdf
<a id="session-3789"></a>
## 61. SoC idle: hierarchical idle management

- セッション個別URL: https://blog.linuxplumbersconf.org/2016/ocw/proposals/3789.html
- Track: Power Management and Energy-awareness
- 日時: Thursday, November 3, 2016 11:30am

### Description

Idle CPUs are managed by the CPUidle framework. Idle IO devices are
managed by runtime PM and genpd.  This topic is to discuss the on-going work to unify idle management.

The goal of this topic is to discuss goals and challenges of using runtime PM and genpd for CPU and cluster idle management.  This will continue the discussion from LPC2015, discuss what has been accomplished since then, and focus on what remains to be done for this to be ready for mainline.

### One Line Summary

Unifying idle management for CPUs, clusters and IO devices

### 添付資料URL

掲載なし

<a id="session-4251"></a>
## 62. Idle Injection for Power Management

- セッション個別URL: https://blog.linuxplumbersconf.org/2016/ocw/proposals/4251.html
- Track: Power Management and Energy-awareness
- 日時: Thursday, November 3, 2016 11:45am

### Description

The idea of over subscription is not limited to airlines. As we pack more processing power into power/thermally constrained environment, power capping is inevitable. Idle injection is one of the methods to manage power. 
Existing idle injection mechanisms in the kernel will be 
described and discussed, including problems related to them and possible ways to address those problems.

### One Line Summary

Why forced idle? Update and explore idle injection methods in Linux

### 添付資料URL

掲載なし

<a id="session-4341"></a>
## 63. Localising the system latency/throughput/power tunability surface

- セッション個別URL: https://blog.linuxplumbersconf.org/2016/ocw/proposals/4341.html
- Track: Power Management and Energy-awareness
- 日時: Thursday, November 3, 2016 12:00pm

### Description

The topic of a single simple power-performance tunable, that is wholly scheduler centric, with defined and predictable properties, has come up on several occasions in the past.
With frameworks such as schedutil being recently merged, we now have a suitable base for implementing such a tunable.

This presentation introduces the foundation to add a single, central tunable ‘knob’ to the scheduler. The main goal is to present an initial proposal for a possible solution as well as to collect feedback and suggestions for a better user-space interface which is both useful and efficient.

### One Line Summary

Discussion on enabling per-task tuning of kernel policies using a well defined user-space interface

### 添付資料URL

- [slides](http://linuxplumbersconf.com/2016/ocw//system/presentations/4341/original/LPC- Localising the System Latency_Throughput_Power Tunability Surface.pdf)（file）


- スケジュール掲載のアーカイブURL: https://blog.linuxplumbersconf.org/2016/ocw/system/presentations/4341/original/LPC-%20Localising%20the%20System%20Latency_Throughput_Power%20Tunability%20Surface.pdf
<a id="session-3783"></a>
## 64. Linux PM infrastructure status report

- セッション個別URL: https://blog.linuxplumbersconf.org/2016/ocw/proposals/3783.html
- Track: Power Management and Energy-awareness
- 日時: Thursday, November 3, 2016 12:15pm

### Description

Describe and discuss the status of the main components of the PM infrastructure in Linux (PM core, suspend & hibernation support, CPUFreq & CPUIdle) and explore the possible directions of future development in that area.  Identify the most urgent needs and discuss possible ways of addressing them.

### One Line Summary

Describe and discuss the current status of the PM infrastructure in the Linux kernel.

### 添付資料URL

掲載なし

<a id="session-4071"></a>
## 65. Linux Kernel Testing: Where are we ?

- セッション個別URL: https://blog.linuxplumbersconf.org/2016/ocw/proposals/4071.html
- Track: Testing and Fuzzing
- 日時: Thursday, November 3, 2016 9:30am

### Description

There is a perception that there is little or no ongoing Linux kernel testing. At the same time, little is known about the existing test systems and their coverage.

In this talk I will provide an overview of the various systems used to test the Linux kernel, as well as the level of test coverage they provide. I will also share some ideas how test coverage could be improved.

### One Line Summary

Provide an overview of current kernel test efforts

### 添付資料URL

掲載なし

<a id="session-3561"></a>
## 66. Syzkaller: Future development

- セッション個別URL: https://blog.linuxplumbersconf.org/2016/ocw/proposals/3561.html
- Track: Testing and Fuzzing
- 日時: Thursday, November 3, 2016 9:45am

### Description

Syzkaller is a new coverage-guided system call fuzzer (https://github.com/google/syzkaller). It has found more than 200 previously unknown bugs in less than 6 months.
In this talk I will outline syzkaller operation and share our ideas about making syzkaller even more efficient in finding bugs and finding more classes of bugs.

### One Line Summary

Making syzkaller even more efficient

### 添付資料URL

- [slides](https://www.linuxplumbersconf.net/2016/ocw//system/presentations/3561/original/Syzkaller.pdf)（file）


- スケジュール掲載のアーカイブURL: https://blog.linuxplumbersconf.org/2016/ocw/system/presentations/3561/original/Syzkaller.pdf
<a id="session-3507"></a>
## 67. Trinity: Next directions.

- セッション個別URL: https://blog.linuxplumbersconf.org/2016/ocw/proposals/3507.html
- Track: Testing and Fuzzing
- 日時: Thursday, November 3, 2016 10:00am

### Description

After a spending a while away from developing Trinity, and with the arrival of other kernel fuzzing tools, I spent some time reevaluating many decisions made early on.

This talk highlights of some of the more interesting recent developments in kernel fuzzing, along with some ideas of where Trinity will be heading next, with a focus on exploring areas not particularly well covered by other options while not duplicating effort.

### One Line Summary

Trinity: Next directions.

### 添付資料URL

掲載なし

<a id="session-3501"></a>
## 68. All About the perf_fuzzer

- セッション個別URL: https://blog.linuxplumbersconf.org/2016/ocw/proposals/3501.html
- Track: Testing and Fuzzing
- 日時: Thursday, November 3, 2016 10:15am

### Description

The perf_fuzzer tool does targeted fuzzing of the complex perf_event_open() system call.  Extensive knowledge of the perf_event interface is used to ensure generation of mostly-correct inputs.  This includes taking into account interactions with various other kernel interfaces and system calls that are not easily determined via pure random guessing.

Scores of bugs have been found and fixed in the Linux kernel, many with security implications.  It is still possible to crash the Linux kernel using the perf_fuzzer, but the crashes triggered are increasingly hard to debug and isolate.

### One Line Summary

Experiences gained while fuzzing the complex perf_event_open() system call.

### 添付資料URL

掲載なし

<a id="session-4257"></a>
## 69. Applying mutation testing for testing RCU: Progress report

- セッション個別URL: https://blog.linuxplumbersconf.org/2016/ocw/proposals/4257.html
- Track: Testing and Fuzzing
- 日時: Thursday, November 3, 2016 10:25am

### Description

Mutation testing is an automated test technique often used in academia to determine the quality of test suites and the robustness of programs. Though seen as the gold standards by academics, it has seldom been applied to programs longer than a few hundred lines of code due to the computational explosion it is prone to as programs grow.

We have been working to adapt this technique to the practical exigencies of the RCU to evaluate its testing harness as well as identify new bugs in a more scalable and automated way. By rapidly triaging and throwing away uninteresting mutants we have been able to use this technique to identify  5 patches so far (2 bug fix and 3 test case modification patches)in a relatively well-established and solid module of the Linux Kernel over the last few weeks.

In this talk, I will describe mutation testing and its potential, how we overcame the scalability issues associated with this technique, and how this technique can successfully be used to identify hairy bugs in big and complex systems.

### One Line Summary

Learn how we overcame the practical and computational limitations of mutation testing to identify real problems in projects as complex as the Kernel, and how you too can adopt this technique.

### 添付資料URL

掲載なし

<a id="session-3621"></a>
## 70. Linux linker tables - past, present and future

- セッション個別URL: https://blog.linuxplumbersconf.org/2016/ocw/proposals/3621.html
- Track: Testing and Fuzzing
- 日時: Thursday, November 3, 2016 10:45am

### Description

Linker table support was a concept homegrown out of the iPXE project to mostly help avoid code bit rot issue, it however also made use of the linker to sort out run time initialization code. Supporting this in Linux has meant reviewing existing custom Linux section uses and providing a generic API for the two basic types implicitly found defined and used:

This presentation will review what iPXE’s original linker table work consisted of, and what this is shaping up to be inside Linux including section ranges and the modern Linux linker table. We’ll review built-in support, how to support this in modules, and most importantly future uses inside Linux.

### One Line Summary

Linux may soon have linker table support, where did this come from and what does this mean?

### 添付資料URL

- [slides](http://linuxplumbersconf.com/2016/ocw//system/presentations/3621/original/SUSE-ELF-plumbers.odp)（file）


- スケジュール掲載のアーカイブURL: https://blog.linuxplumbersconf.org/2016/ocw/system/presentations/3621/original/SUSE-ELF-plumbers.odp
<a id="session-3837"></a>
## 71. Integrating and running all the kernel tests

- セッション個別URL: https://blog.linuxplumbersconf.org/2016/ocw/proposals/3837.html
- Track: Testing and Fuzzing
- 日時: Thursday, November 3, 2016 11:00am

### Description

At Facebook, we built a continuous integration infrastructure to do validation on our kernel releases. We run tests on our development branchs and on the upstream kernel.

We integrated some of the obvious candidates (LTP, kernel selftests, xfstests, test modules) and we’ll highlight the challenges of doing so.

A few questions still remains. What’s the best location for new tests? How can we ensure we have a better coverage to catch more functional and performance regression? 
What’s would be a good way to collectively share the tests results?

### One Line Summary

Collecting, running and contributing kernel tests is still a challenge

### 添付資料URL

掲載なし

<a id="session-4611"></a>
## 72. DMA Engines

- セッション個別URL: https://blog.linuxplumbersconf.org/2016/ocw/proposals/4611.html
- Track: Kernel Summit Track
- 日時: Thursday, November 3, 2016 9:30am

### Description

DMA Engines topics to be discussed:

- Reuse dma transactions:
Discuss the ability to reuse transactions to avoid constant reallocation of dma_async_tx_descriptor instances

- Error reporting
Use of the new shiny error reporting through dmaengine_result.

- Moving more code to framework
Discuss pinpoint for users and find out ways to remove them

Key Attendees: Dan Williams, Dave Jiang, Laurent Pinchart, Lars-Peter Clausen, Andy Shevchenko, Christopher Covington

### One Line Summary

DMA Engines

### 添付資料URL

掲載なし

<a id="session-3963"></a>
## 73. Reducing Network Latency on Wifi... Finally!

- セッション個別URL: https://blog.linuxplumbersconf.org/2016/ocw/proposals/3963.html
- Track: Refereed Presentations Track
- 日時: Thursday, November 3, 2016 11:00am

### Description

掲載なし

### One Line Summary

WiFi doesn't have to suck. Really. We can make it suck less. In fact, we just did.

### 添付資料URL

- [slides](http://linuxplumbersconf.com/2016/ocw//system/presentations/3963/original/linuxplumbers_wifi_latency-3Nov.pdf)（file）


- スケジュール掲載のアーカイブURL: https://blog.linuxplumbersconf.org/2016/ocw/system/presentations/3963/original/linuxplumbers_wifi_latency-3Nov.pdf
<a id="session-3951"></a>
## 74. How truly unprivileged containers work in lxc

- セッション個別URL: https://blog.linuxplumbersconf.org/2016/ocw/proposals/3951.html
- Track: Refereed Presentations Track
- 日時: Thursday, November 3, 2016 11:45am

### Description

With the advent of user namespaces, the term ‘unprivileged container’ came to mean two different container types which share a common feature. All unprivileged containers run in a private user namespace, with the container root uid mapped to a non-root uid on the host.  This has an obvious advantage
over privileged containers in that a compromise of a root owned daemon in such
a container does not necessarily compromise root on the host.  However the two
types of unprivileged containers differ in how they are created and started.

The first type, which could more precisely be called “root-owned unprivileged container”, requires root privileges to create and start.  Docker, lxc, lxd, libvirt, and openvz are all able to create this type of container.

The other type, which could more precisely be called a “pure unprivileged container”, is a container created and started by an unprivileged user without help from any root owned daemon.  This has the advantage over root-owned unprivileged containers of reducing the privilege which a user must be granted in order to be allowed to start containers.  As such it also makes using containers as a part of a sandboxing solution less heavyweight.  On the other hand, root-owned unprivileged containers are able to spawn a wider range of container types (for instance, block-device-backed) than the other type, by virtue of the launching process and container monitor having increased privileges.  Currently only lxc can provide pure unprivileged containers.

In this talk I will go over (1) precisely how lxc is able to provide these containers; (2) which pieces of privilege need to be delegated; and (3) what future functionality could further improve these containers.  It may or may not end in a poll to select a new name for pure unprivileged containers, free ice cream, and unicorn berets.

### One Line Summary

Learn how Linux safely supports unprivileged users creating and starting containers.

### 添付資料URL

- [slides](http://linuxplumbersconf.com/2016/ocw//system/presentations/3951/original/unprivlxc.pdf)（file）


- スケジュール掲載のアーカイブURL: https://blog.linuxplumbersconf.org/2016/ocw/system/presentations/3951/original/unprivlxc.pdf
<a id="session-3933"></a>
## 75. File signatures needed!

- セッション個別URL: https://blog.linuxplumbersconf.org/2016/ocw/proposals/3933.html
- Track: Refereed Presentations Track
- 日時: Thursday, November 3, 2016 2:00pm

### Description

The boot process of modern systems is protected against attack by secure
and trusted boot. In secure boot, each part of the boot chain validates
the signature of the next stage before transferring control. Each stage
of the boot process is required to have a valid signature. In trusted
boot, each part of the boot chain is measured and logged before control
is transferred to the next stage. The results of trusted boot can be
presented to a remote party for attestation. The Linux Integrity
Measurement Architecture (IMA) extends these mechanisms to runtime
and presents a single, uniform method for measuring and appraising file
signatures.

In most distros, while packages installed from a repository have been
typically signed, the files that are installed by these packages have
not been signed. Meanwhile, for example the iOS kernel prevents
executing any unsigned code. Similarly, IMA can also be configured 
to enforce signature verification on any file before reading or executing,
therefore preventing the execution of any software that is either installed
from untrusted sources, or modified after installation. In order to achieve
this, all files should be signed and installed with their signatures.  
This requirement has limited the adoption of IMA to embedded, IoT, and
enterprise environments, where files come from a trusted image and do
not change frequently. For general users, the prescribed way of using
IMA has been to self-sign all the files during the initialization step.
As a result, any pre-installed malware would be able to escape
detection.

In this talk we will present an overview of the state of the art of
signature verification in commonly used operating systems, our efforts
to enable enforcement of file signatures for two distros, namely Ubuntu
and Fedora, and our userspace extensions to various components, starting
from the package build processes, to the installation of packages on the
system. We will demonstrate the installation of such a system from an
ISO that contains packages with signed files. Finally, we will present
our work on managing the certificates in a way that gives the control to
the user. We hope to convince the Linux distros to start signing all
the files by presenting our proof of concept. We hope that this talk will
also provide an opportunity for discussing the userspace/kernel plumbing
still needed for general signature verification adoption.

### One Line Summary

In this talk we will present how Linux Integrity Measurement Architecture (IMA)  on Ubuntu and Fedora can prevent the execution of unsanctioned programs once we have installed the system files with signatures.

### 添付資料URL

- [slides](https://blog.linuxplumbersconf.org/2016/ocw/system/presentations/3933/original/FileSignaturesNeeded.pdf)（file）

<a id="session-4605"></a>
## 76. Fixing kconfig semantics

- セッション個別URL: https://blog.linuxplumbersconf.org/2016/ocw/proposals/4605.html
- Track: Kernel Summit Track
- 日時: Thursday, November 3, 2016 2:00pm

### Description

Kconfig is one of the leading industrial variability modeling languages, it however has loose semantics. This has created a few issues. One the most well known issue is the ‘select’ issue which gives a recursive dependency issue.

The goal of this session is to review some of the issues with the semantics of kconfig, some proposals for helping with this, and actual valid uses for having these semantics fixed.

—

The use of Kconfig is broad, Linux is now only one of Kconfig’s users: one study has completed a broad analysis of Kconfig use in 12 projects 0. Despite its widespread use, and although this document does a reasonable job in documenting basic Kconfig syntax a more precise definition of Kconfig semantics is welcomed. One project deduced Kconfig semantics through the use of the xconfig configurator 1. Work should be done to confirm if the deduced semantics matches our intended Kconfig design goals.

Having well defined semantics can be useful for tools for practical evaluation of depenencies, for instance one such use known case was work to express in boolean abstraction of the inferred semantics of Kconfig to translate Kconfig logic into boolean formulas and run a SAT solver on this to find dead code / features (always inactive), 114 dead features were found in Linux using this methodology 1.

Confirming this could prove useful as Kconfig stands as one of the the leading industrial variability modeling languages 1 2. Its study would help evaluate practical uses of such languages, their use was only theoretical and real world requirements were not well understood. As it stands though only reverse engineering techniques have been used to deduce semantics from variability modeling languages such as Kconfig 3.

0 http://www.eng.uwaterloo.ca/~shshe/kconfig_semantics.pdf
1 http://gsd.uwaterloo.ca/sites/default/files/vm-2013-berger.pdf
2 http://gsd.uwaterloo.ca/sites/default/files/ase241-berger_0.pdf
3 http://gsd.uwaterloo.ca/sites/default/files/icse2011.pdf

### One Line Summary

Linux kconfig semantics are loose and this creates issues, lets review them and fix them

### 添付資料URL

掲載なし

<a id="session-3717"></a>
## 77. What to do with Android items in staging?

- セッション個別URL: https://blog.linuxplumbersconf.org/2016/ocw/proposals/3717.html
- Track: Android/Mobile
- 日時: Thursday, November 3, 2016 2:00pm

### Description

There’s still a number of Android items in staging and I want to do a quick overview and status on each along with discussion on how to move them out of staging.

### One Line Summary

Very quick review of Android items in staging

### 添付資料URL

- [slides](https://blog.linuxplumbersconf.org/2016/ocw/system/presentations/3717/original/Android%20patches%20in%20Staging.pdf)（file）

<a id="session-3693"></a>
## 78. Energy Aware Scheduling (EAS) on Android

- セッション個別URL: https://blog.linuxplumbersconf.org/2016/ocw/proposals/3693.html
- Track: Android/Mobile
- 日時: Thursday, November 3, 2016 2:05pm

### Description

EAS is a set of kernel extensions aiming to improve energy efficient system operation. EAS introduces a model driven approach to task scheduling, improved processor capacity management and APIs for fine-grained compute control from middleware.

This talk provides an overview of how EAS was made to work with Android. It will focus on areas where EAS helped improve Android, gaps that remain and future applicability.

### One Line Summary

Summary of experiences with deploying EAS on Android

### 添付資料URL

- [slides](http://linuxplumbersconf.com/2016/ocw//system/presentations/3693/original/LPC- EAS for Android.pdf)（file）


- スケジュール掲載のアーカイブURL: https://blog.linuxplumbersconf.org/2016/ocw/system/presentations/3693/original/LPC-%20EAS%20for%20Android.pdf
<a id="session-3699"></a>
## 79. Better compute control for Android using SchedTune and SCHED_DEADLINE

- セッション個別URL: https://blog.linuxplumbersconf.org/2016/ocw/proposals/3699.html
- Track: Android/Mobile
- 日時: Thursday, November 3, 2016 2:30pm

### Description

SchedTune is an EAS (Energy Aware Scheduling) component that permits fine grained compute control from middleware. SCHED_DEADLINE is a kernel scheduling class based on EDF (Earliest Deadline First) and CBS (Constant Bandwidth Server) algorithms.

Some Android subsystems such as Graphics, Audio and Touch processing have predictable compute requirements. With mobile processor capabilities and topologies becoming more complex, a generic mechanism to allow Android middleware a way to express compute requirements is desirable.

This talk will describe how SchedTune and SCHED_DEADLINE can be used to provide generic mechanisms of this sort.

### One Line Summary

SchedTune and SCHED_DEADLINE utility for Android

### 添付資料URL

- [slides](http://linuxplumbersconf.com/2016/ocw//system/presentations/3699/original/LPC_SchedTune_DEADLINE.pdf)（file）


- スケジュール掲載のアーカイブURL: https://blog.linuxplumbersconf.org/2016/ocw/system/presentations/3699/original/LPC_SchedTune_DEADLINE.pdf
<a id="session-3879"></a>
## 80. Android background updates lightning talk

- セッション個別URL: https://blog.linuxplumbersconf.org/2016/ocw/proposals/3879.html
- Track: Android/Mobile
- 日時: Thursday, November 3, 2016 3:05pm

### Description

One of the new Android Nougat features is background or seamless updates. We will go over the work that had to be done to make this possible: changing the way Android boots, new bootloader requirements and the new boot control HAL.

### One Line Summary

Overview of the background updates feature in Android N

### 添付資料URL

- [slides](https://blog.linuxplumbersconf.org/2016/ocw/system/presentations/3879/original/Android%20Background%20Updates%20-%20LPC%202016.pdf)（file）

<a id="session-3711"></a>
## 81. The vDSO on arm64

- セッション個別URL: https://blog.linuxplumbersconf.org/2016/ocw/proposals/3711.html
- Track: Android/Mobile
- 日時: Thursday, November 3, 2016 3:10pm

### Description

The vDSO is a mechanism provided by the kernel to make certain syscalls faster, by enabling userspace to perform the operation itself without actually calling into the kernel.

Originally implemented on PowerPC and x86, a number of architectures now provide a vDSO, including ARM and ARM64.

This talk will provide an overview of the vDSO, both in the kernel and in userspace. It will focus on the arm64 implementation, with the proposed addition of a compat 32-bit vDSO, which would be beneficial for Android and other platforms.

### One Line Summary

Status of the vDSO on arm64 and the proposed addition of a 32-bit vDSO.

### 添付資料URL

- [slides](http://linuxplumbersconf.com/2016/ocw//system/presentations/3711/original/LPC_vDSO.pdf)（file）


- スケジュール掲載のアーカイブURL: https://blog.linuxplumbersconf.org/2016/ocw/system/presentations/3711/original/LPC_vDSO.pdf
<a id="session-3705"></a>
## 82. Linux Kernel: Behavioral Analysis and Visualization

- セッション個別URL: https://blog.linuxplumbersconf.org/2016/ocw/proposals/3705.html
- Track: Android/Mobile
- 日時: Thursday, November 3, 2016 3:35pm

### Description

What is a Behavior?

Given a relevant scenario/workload on a system, some examples of behaviours are:
The scheduler is expected to spread/pack tasks
The I/O scheduler should starve writes and prioritize reads
The thermal governor should maintain the temperature within +/- threshold
The tooling presented allows the parsing and visualization of FTrace data to formulate quantitative conditions which express behaviors and help in building assertions to verify them. The goal of behavioral analysis is to allow the kernel developers to easily track regression while developing or modifying their ever so complicated kernel sub-systems.

The tooling that will be presented is:

TRAPpy (Trace Analysis and plotting in Python)

A framework to allow kernel developers easy access to kernel tracing data and facilitates visualization and analysis. TRAPpy also provides a grammar which allows formulating expressions which span across multiple kernel sub-systems.

BART (Behavioral Analysis and Regression Toolkit)

A framework built on top of TRAPpy that provides behavioral assertions for different subsystems and abstract the traces from the user. For example, a scheduler developer aiming to write an energy efficient scheduler on a heterogeneous /Big.LITTLE system (like most cell phones) could assert the residencies of the workload over CPU topologies e.g. assertClusterResidency(BIG_CPU, “>75 % of the time”) BART was presented in the Thermal Micro-conference last year at LPC and I would like to present it , along with TRAPpy this year to a wider audience.

### One Line Summary

A hands on session explaining behavioral analysis in the kernel and the tooling built around it. The eventual goal is to have "behaviors" defined for a wide range of sub-systems in the Linux kernel.

### 添付資料URL

- [slides](https://blog.linuxplumbersconf.org/2016/ocw/system/presentations/3705/original/Linux%20Behaviour%20Analysis.pdf)（file）

<a id="session-3687"></a>
## 83. ION - Large pages for devices

- セッション個別URL: https://blog.linuxplumbersconf.org/2016/ocw/proposals/3687.html
- Track: Android/Mobile
- 日時: Thursday, November 3, 2016 4:00pm

### Description

Embedded devices are gaining new features and facing increased load for existing ones.  Examples are UHD displays, pushing buffer sizes and bandwidth requirements, and the need for graphics/video in virtualized environments.

With larger buffer sizes comes higher TLB pressure, often too high for embedded devices. Using a carve-out is a poor solution, so we need to focus on reducing the TLB pressure to handle these larger buffers. A solution to this challenge may be as simple as to use the next page granule. However, as deemed by many, large pages are hard to come by on
a loaded system due to fragmentation.

ION is at the center of allocating Android media buffers, so it appears to be a suitable starting point for experimentation. We will explore why
we turned to large pages and present our experimental large page ION heap alongside some
additional findings.

### One Line Summary

New ION heap for large pages to reduce device TLB

### 添付資料URL

- [slides](http://linuxplumbersconf.com/2016/ocw//system/presentations/3687/original/CPA - Plumbers 2016.pdf)（file）


- スケジュール掲載のアーカイブURL: https://blog.linuxplumbersconf.org/2016/ocw/system/presentations/3687/original/CPA%20-%20Plumbers%202016.pdf
<a id="session-3759"></a>
## 84. Ion update and status report

- セッション個別URL: https://blog.linuxplumbersconf.org/2016/ocw/proposals/3759.html
- Track: Android/Mobile
- 日時: Thursday, November 3, 2016 4:25pm

### Description

Ion still exists in the Android staging directory, this will be a discussion of what progress has been made and what still needs to be done to move it out of staging. Special emphasis will be given to who will use Ion when it comes out of staging and what those requirements need to be.

### One Line Summary

Discussion of the progress to move Ion out of staging

### 添付資料URL

- [slides](http://linuxplumbersconf.com/2016/ocw//system/presentations/3759/original/Ion @ LPC 2016.pdf)（file）


- スケジュール掲載のアーカイブURL: https://blog.linuxplumbersconf.org/2016/ocw/system/presentations/3759/original/Ion%20%40%20LPC%202016.pdf
<a id="session-4185"></a>
## 85. drm_hwcomposer library

- セッション個別URL: https://blog.linuxplumbersconf.org/2016/ocw/proposals/4185.html
- Track: Android/Mobile
- 日時: Thursday, November 3, 2016 4:50pm

### Description

drm_hwcomposer is a library which implements the Android Hardware Composer (HWC) interface on top of DRM/KMS. While originally targeted at the Pixel C (tegra-drm), drm_hwcomposer was intended to be generic enough to be used on the majority of KMS-supporting platforms.

Included in the drm_hwcomposer library is a GL compositor which augments hardware composition. This compositor replaces Android’s own, resulting in power and performance gains.

This talk will cover a brief history of the project, an overview of the code, composition strategies, basic pointers to running Android on
DRM/KMS, and future direction.

### One Line Summary

Cover a brief history of the drm_hwcomposer library, an overview of the code, composition strategies, basic pointers to running Android on
DRM/KMS, and future direction.

### 添付資料URL

- [slides](https://blog.linuxplumbersconf.org/2016/ocw/system/presentations/4185/original/LPC%20HWC%202.0%20%26%20drm_hwcomposer%20.pdf)（file）

<a id="session-4059"></a>
## 86. Mainlining of the Android Sync Framework: status update

- セッション個別URL: https://blog.linuxplumbersconf.org/2016/ocw/proposals/4059.html
- Track: Android/Mobile
- 日時: Thursday, November 3, 2016 5:15pm

### Description

Quick overview on what happened in this area:
- mainline struct fence
- de-staging of Android Sync as Sync File in mainline
- DRM/KMS explicit fences
- support on drm_hwcomposer/HWC2
- support on Wayland

### One Line Summary

Update on the effort to add Explicit Fencing to mainline kernel using the Android Sync Framework as a base.

### 添付資料URL

- [slides](https://blog.linuxplumbersconf.org/2016/ocw/system/presentations/4059/original/Plumbers-Explicit-Fencing_Talk.pdf)（file）

<a id="session-3723"></a>
## 87. Brillo Kernel Maintenance

- セッション個別URL: https://blog.linuxplumbersconf.org/2016/ocw/proposals/3723.html
- Track: Android/Mobile
- 日時: Thursday, November 3, 2016 5:50pm

### Description

The Android ecosystem currently freezes to specific kernel versions with each different device that gets released. This would create an exponential amount of testing combinations, except most phones drop support within a year or two, so the resource pain gets avoided.

For an IoT offering, though, support must extend to 5 or 10 years, if not longer. In order to avoid the support and testing nightmare that will inevitably ensue, Brillo plans to use a common kernel with all vendor code in a single repository. At each upstream LTS, Google will help all vendors move their code forward (with the expectation that all such code is being actively upstreamed by the vendor).

This talk will cover the rationale in more detail, the testing expectations, how we’re organizing all the out-of-tree code, and how we’re helping vendors do their upstreaming.

### One Line Summary

Brillo's always-on-latest-LTS kernel plan

### 添付資料URL

- [slides](http://linuxplumbersconf.com/2016/ocw//system/presentations/3723/original/brillo.pdf)（file）


- スケジュール掲載のアーカイブURL: https://blog.linuxplumbersconf.org/2016/ocw/system/presentations/3723/original/brillo.pdf
<a id="session-3675"></a>
## 88. Secure world discussion: OP-TEE and Trusty

- セッション個別URL: https://blog.linuxplumbersconf.org/2016/ocw/proposals/3675.html
- Track: Android/Mobile
- 日時: Thursday, November 3, 2016 5:55pm

### Description

An overview of the proposed generic TEE subsystem, the OP-TEE driver and how OP-TEE and normal world interacts, and Android’s Trusty implementation.

### One Line Summary

Overview and discussion on OPTEE and Trusty

### 添付資料URL

- [slides](https://blog.linuxplumbersconf.org/2016/ocw/system/presentations/3675/original/LPC%202016%20-%20OP-TEE.pdf)（file）

<a id="session-3663"></a>
## 89. Multi-device support for AOSP

- セッション個別URL: https://blog.linuxplumbersconf.org/2016/ocw/proposals/3663.html
- Track: Android/Mobile
- 日時: Thursday, November 3, 2016 6:20pm

### Description

The Android ecosystem suffers from a lack of upstream and community around devices and HALs. This session will discuss what are the problems and proposed solutions. The topics include supporting multiple devices with a single Android build, running mainline kernels on Android devices, addressing gaps in kernel interfaces for Android HALs, improving reference HALs, and improving device configurability.

### One Line Summary

Discussion on Linaro's and other's HAL unification/consolidation/dynamic-modularization work along with single kernel/single user-space efforts.

### 添付資料URL

- [slides](https://blog.linuxplumbersconf.org/2016/ocw/system/presentations/3663/original/LPC2016%20-%20Supporting%20Multiple%20Devices%20in%20AOSP.pdf)（file）

<a id="session-3669"></a>
## 90. HiKey in AOSP

- セッション個別URL: https://blog.linuxplumbersconf.org/2016/ocw/proposals/3669.html
- Track: Android/Mobile
- 日時: Thursday, November 3, 2016 6:45pm

### Description

Back in March, HiKey (one of the 96boards) was added as a supported device in AOSP master. This provides a useful devboard in AOSP that can be used for prototyping new features, and can be a useful reference for how to integrate AOSP features for a devboard. This talk will quickly cover background, recent developments, and examples of how the board has been a useful bridge between AOSP and the upstream kernel community.

### One Line Summary

Lightning talk on HiKey in AOSP, and what its been useful for

### 添付資料URL

- [slides](https://blog.linuxplumbersconf.org/2016/ocw/system/presentations/3669/original/HiKey%20in%20AOSP%20-%20Update.pdf)（file）

<a id="session-3741"></a>
## 91. Android Systems Programming Using the Java Language

- セッション個別URL: https://blog.linuxplumbersconf.org/2016/ocw/proposals/3741.html
- Track: Android/Mobile
- 日時: Thursday, November 3, 2016 6:50pm

### Description

The android.system package exposes the same OS access used to implement Android’s internals to app developers too. Want to open a file O_CLOEXEC? Want to make a PR_SET_DUMPABLE prctl? There’s no need to write JNI for that any more.

### One Line Summary

The android.system package lets you do things you used to have to turn to native code for, without giving up the benefits of a managed runtime.

### 添付資料URL

- [slides](https://linuxplumbersconf.com/2016/ocw//system/presentations/3741/original/Android Systems Programming in Java (linux plumbers 2016).pdf)（file）


- スケジュール掲載のアーカイブURL: https://blog.linuxplumbersconf.org/2016/ocw/system/presentations/3741/original/Android%20Systems%20Programming%20in%20Java%20(linux%20plumbers%202016).pdf
<a id="session-3681"></a>
## 92. AOSP's switch to Clang

- セッション個別URL: https://blog.linuxplumbersconf.org/2016/ocw/proposals/3681.html
- Track: Android/Mobile
- 日時: Thursday, November 3, 2016 6:55pm

### Description

With the release of Android N, AOSP is switching to Clang based toolchains.

This talk will give an overview of the switch, common pitfalls, next steps (e.g. building the kernel with clang too), keeping up to date with upstream clang and compiler release testing

### One Line Summary

AOSP's switch to Clang based toolchains

### 添付資料URL

- [slides](http://www.linuxplumbersconf.com/2016/ocw//system/presentations/3681/original/LPC16 - AOSP's switch to Clang(2).pdf)（file）


- スケジュール掲載のアーカイブURL: https://blog.linuxplumbersconf.org/2016/ocw/system/presentations/3681/original/LPC16%20-%20AOSP%27s%20switch%20to%20Clang(2).pdf
<a id="session-4299"></a>
## 93. State of the Git Union

- セッション個別URL: https://blog.linuxplumbersconf.org/2016/ocw/proposals/4299.html
- Track: Git
- 日時: Thursday, November 3, 2016 

### Description

Perhaps Junio will give a brief overview of recent enhancements,
new features, and upcoming Git features already being developed.

### One Line Summary

State of the Git Union

### 添付資料URL

掲載なし

<a id="session-4305"></a>
## 94. Git Series Discussion

- セッション個別URL: https://blog.linuxplumbersconf.org/2016/ocw/proposals/4305.html
- Track: Git
- 日時: Thursday, November 3, 2016 

### Description

How do we enable collaboration on patch series?

Our development models support incredible collaboration on software, but each individual patch series tends to have one developer.  Our tools tend to encode our processes, and our processes affect our software structure; how can we improve our tools to support collaboration on patch series?

### One Line Summary

Git Series Discussion

### 添付資料URL

- [slides](http://linuxplumbersconf.com/2016/ocw//system/presentations/4305/original/git-discussion.pdf)（file）


- スケジュール掲載のアーカイブURL: https://blog.linuxplumbersconf.org/2016/ocw/system/presentations/4305/original/git-discussion.pdf
<a id="session-4311"></a>
## 95. A Maze of Git Scripts All Alike

- セッション個別URL: https://blog.linuxplumbersconf.org/2016/ocw/proposals/4311.html
- Track: Git
- 日時: Thursday, November 3, 2016 

### Description

You’ve written Git scripts, I’ve written Git scripts, Steve’s written them.
And they are all just like everyone else’s, except different.  Any chance
of working toward common scripts?  In some upstream repo?

### One Line Summary

We've all written umpteen Git scripts.  Any standardization on the horizon?

### 添付資料URL

掲載なし

<a id="session-4317"></a>
## 96. Future Git Directions

- セッション個別URL: https://blog.linuxplumbersconf.org/2016/ocw/proposals/4317.html
- Track: Git
- 日時: Thursday, November 3, 2016 

### Description

General discussion of the future of Git.  This is your chance to voice a request for a missing feature and discuss it with others!

### One Line Summary

Let's make sure Git development is useful!

### 添付資料URL

掲載なし

<a id="session-4323"></a>
## 97. Alex Courouble: Token-level git blame

- セッション個別URL: https://blog.linuxplumbersconf.org/2016/ocw/proposals/4323.html
- Track: Git
- 日時: Thursday, November 3, 2016 

### Description

Git blame currently assigns “blame” for code at a per-line granularity.
Through the use of some scripting, token-level granularity can be achieved.
Using the historical documents, blame can be assigned on a complete Linux kernel back to its starting days.

### One Line Summary

Some scripting to obtain token-level git blame results.

### 添付資料URL

掲載なし

<a id="session-3921"></a>
## 98. linux and glibc: The 4.5TiB malloc API trace

- セッション個別URL: https://blog.linuxplumbersconf.org/2016/ocw/proposals/3921.html
- Track: Refereed Presentations Track
- 日時: Thursday, November 3, 2016 2:45pm

### Description

Whole-system Benchmarking
A glibc microbenchmark is a small program used to test the behaviour of a change in the library e.g. make bench. This is used routinely to discuss the technical merits of a performance-related patch.

A glibc whole-system benchmark is a dataset that characterizes a user workload and is used to test the behaviour of a change, but across a wider set of APIs i.e. a whole system. At least that’s what it’s supposed to mean.

The vision behind glibc’s whole-system benchmarking is to provide tooling to measure and characterize a user workload larger than a microbenchmark (glibc already has a microbenchmark framework). Once the workload is characterized it should be possible to evaluate the merits of larger performance-related changes in the core library against a given set of workloads. The problem is that nobody in the community knew where to start, nor was it clear what data needed to be gathered, nor how it could be used to evaluate code changes.

A year later and the Red Hat glibc team has progress to share. We present a realization of the whole-system benchmarking idea. Initially restricted to a singular set of APIs in libc, specifically the malloc API family of functions.

Trace:
We present a low-level builtin lossless tracing framework that is thread-safe and uses shifting mapped windows to minimize RSS impact on the application being traced. The binary trace logs are a high-fidelity representation of the malloc API calls made by a single process.

Convert:
We present the techniques used and problems encountered in converting the trace data into a workload. This includes a discussion on inter-thread event ordering and the problems caused by features like mremap in realloc.

Simulate:
Lastly we discuss and present a workload simulator that can replay the application behaviour with respect to the traced API, and the uses in patch evaluation and application analysis.

Feedback:
The work is far from complete and kernel developer feedback is welcome, particularly when it comes to minimizing tracer RSS usage, low-cost in-process RSS measurements (/proc or mincore), and low-cost conditionally enabled trace features using uprobes. Feedback from kernel tracing experts is particularly welcome since glibc must sketch out how to proceed on the rest of the API tracing e.g. built-in trace or lttng-ust. Trace format e.g. CTF? Workload format e.g. extended CTF?

The work was carried out by the Red Hat glibc team including Florian Weimer, DJ Delorie, and Carlos O’Donell.

### One Line Summary

Ever wanted simulate a workload without needing the original application? Look no further.

### 添付資料URL

- [slides](https://blog.linuxplumbersconf.org/2016/ocw/system/presentations/3921/original/LPC%202016%20-%20linux%20and%20glibc_%20The%204.5TiB%20malloc%20API%20trace.pdf)（file）

<a id="session-3873"></a>
## 99. Enabling Fast Per-CPU User-Space Algorithms with Restartable Sequences

- セッション個別URL: https://blog.linuxplumbersconf.org/2016/ocw/proposals/3873.html
- Track: Refereed Presentations Track
- 日時: Thursday, November 3, 2016 4:00pm

### Description

In 2012, Paul Turner and Andrew Hunter (Google) proposed a mechanism initially called “PerCpu Atomics”. Its main purpose is to allow performing atomic operations on per-CPU data without the overhead of atomic instructions. After many rounds of feedback, its latest implementation is known as “Restartable Sequences”. It opens the door to implementation of various per-CPU algorithms in user-space, better use of system memory and CPU caches. This presentation is about the current ABI exposed by the proposed system call, its algorithm, how to use it from user-space, and discussion of the use-cases it fulfills, namely:

Per-CPU memory allocators,
	Per-CPU RCU grace period tracking in user-space,
	Per-CPU ring buffers,
	Per-CPU spinlocks.

### One Line Summary

Explanation of the Restartable Sequences (rseq) system call: algorithm, ABI, and use-cases.

### 添付資料URL

- [slides](http://linuxplumbersconf.com/2016/ocw//system/presentations/3873/original/presentation-rseq-lpc2016.pdf)（file）


- スケジュール掲載のアーカイブURL: https://blog.linuxplumbersconf.org/2016/ocw/system/presentations/3873/original/presentation-rseq-lpc2016.pdf
<a id="session-3489"></a>
## 100. Improving Gaming Under Linux

- セッション個別URL: https://blog.linuxplumbersconf.org/2016/ocw/proposals/3489.html
- Track: BoFs
- 日時: Thursday, November 3, 2016 5:00pm

### Description

A loose topic with potentially broad implications for future work.  When looking at improving gaming performance in Linux, people have traditionally looked at specific subsystems with little to no coordination with other subsystems.

The intent for this BoF session is to get people interested in gaming who know various parts of the system (CPU, memory, graphics, networking, both kernel and userspace, etc.) to come together and discuss potential areas for cross-talk and collaboration to improve the overall gaming experience under Linux.

### One Line Summary

A session for people with interest in various parts of the OS and distro to improve gaming performance

### 添付資料URL

掲載なし

<a id="session-3555"></a>
## 101. Increase Test Coverage in a Linux-based OS

- セッション個別URL: https://blog.linuxplumbersconf.org/2016/ocw/proposals/3555.html
- Track: BoFs
- 日時: Thursday, November 3, 2016 5:00pm

### Description

As the  Linux community continues to redefine the boundaries for what is possible in a cloud-based Linux distribution running on Intel silicon, quality assurance plays an increasingly important role for the industry. In the Clear Linux Project for Intel Architecture we have prioritised QA since the beginning of the project. From the methodology we use to track the test coverage to a full description of our test strategy. In this presentation we will show how we assure the deployment of a Linux based operating system with more than 60% of test coverage two times per day. We will discuss the benefits of applying our methodology to other Linux based projects, the challenges we face and the benefits for the Linux community.  Improving quality of products, shorting the product development time and reducing costs.

### One Line Summary

Quality Assurance strategy in Clear LInux project; a case of study

### 添付資料URL

掲載なし

<a id="session-3525"></a>
## 102. Software Updates for Connected Linux Devices: Key Considerations

- セッション個別URL: https://blog.linuxplumbersconf.org/2016/ocw/proposals/3525.html
- Track: BoFs
- 日時: Thursday, November 3, 2016 5:00pm

### Description

A key requirement for connected devices/IoT is the ability to deploy software updates. Data breaches are occurring on a regular basis and extending devices outside the firewall perimeter increases the attack surface. There are on average 1-25 bugs/defects per 1,000 lines of code.

The good news is that security breaches are largely preventable. The Center of Internet Security estimates that 80-90% can be prevented through swift software updates and patching, which are necessary in order to:

1.	Deploy bug fixes
2.	Patch security vulnerabilities
3.	Deliver new features

In this presentation, we will cover all the nuances and security considerations one must be mindful of when deploying software updates to connected Linux devices to ensure the security and integrity of devices deployed in the wild. The presentation will drill down on four primary areas with the following subtopics:

●	Basic functionality

○	Artifact and device compatibility
○	Rollback
○	Resilient updates
○	Device grouping
○	image/package/file/container-based updates
○	Atomic

●	Security requirements

○	Artifact integrity and authenticity
○	Encrypted traffic
○	Access controls
○	Secure and simple bootstrapping

●	Operational functionality

○	Logging and compliance
○	Monitoring
○	Rollout management
○	Notifications
○	Device inventory

●	Extensibility

○	Messaging protocols support
○	3rd party tooling integration

The key takeaway is for Linux device owners and their teams to have actionable requirements to ensure the integrity of their update process for connected Linux device/IoT projects.

### One Line Summary

In this presentation, we will cover the nuances and security considerations one must be mindful of when deploying software updates to connected Linux devices to ensure the security and integrity of devices deployed in the wild.

### 添付資料URL

掲載なし

<a id="session-4599"></a>
## 103. Netlink engine issues, and ways to fix those

- セッション個別URL: https://blog.linuxplumbersconf.org/2016/ocw/proposals/4599.html
- Track: Kernel Summit Track
- 日時: Thursday, November 3, 2016 3:00pm

### Description

Currently netlink is widely used in the network subsystem, but there are also a few users outside of networking, such as audit and taskstats. Developers who used netlink for anything except the networking know there are some issues. For example, taskstats code has broken user and pid namespace support. Another big problem is credentials. Netlink sockets checks credentials from the send syscall instead of get them from f_creds.

Another potential user of netlink socket is task_diag, a faster /proc/PID-like interface proposed some time ago (https://lkml.org/lkml/2015/7/6/142). It makes sense to use the netlink interface for it, too, but the whole feature is currently blocked by the netlink discussion.

### One Line Summary

An attempt to resolve Netlink issues to use it outside of the network subsystem

### 添付資料URL

- [slides](http://www.linuxplumbersconf.net/2016/ocw//system/presentations/4599/original/Netlink-issues.pdf)（file）


- スケジュール掲載のアーカイブURL: https://blog.linuxplumbersconf.org/2016/ocw/system/presentations/4599/original/Netlink-issues.pdf
<a id="session-3987"></a>
## 104. GPL Enforcement Feedback session

- セッション個別URL: https://blog.linuxplumbersconf.org/2016/ocw/proposals/3987.html
- Track: BoFs
- 日時: Thursday, November 3, 2016 6:00pm

### Description

As promised on the ksummit-discuss mailing list, this is one of several sessions intended to discuss GPL enforcement and receive feedback from those who would like to do so. It will also be an opportunity to ask questions about Conservancy’s enforcement efforts, as well as those led by other people, to the extent Karen is aware of them.

### One Line Summary

A session for Q&A and to hear feedback about GPL enforcement.

### 添付資料URL

掲載なし

<a id="session-4149"></a>
## 105. UEFI & Linux Interoperability

- セッション個別URL: https://blog.linuxplumbersconf.org/2016/ocw/proposals/4149.html
- Track: BoFs
- 日時: Thursday, November 3, 2016 6:00pm

### Description

UEFI is more than grub and Secure Boot. This modern firmware interface enables a number of features relevant to Linux, including capsule update, TPM and HTTPS boot. This BoF session is a gathering of developers, testers and plumbers interested in how the low-level kernel interacts with UEFI firmware.

### One Line Summary

Discussion of how Linux works with the Unified Extensible Firmware Interface (UEFI)

### 添付資料URL

- [slides](http://linuxplumbersconf.com/2016/ocw//system/presentations/4149/original/UEFI and Linux Interoperability.pdf)（file）


- スケジュール掲載のアーカイブURL: https://blog.linuxplumbersconf.org/2016/ocw/system/presentations/4149/original/UEFI%20and%20Linux%20Interoperability.pdf
<a id="session-4077"></a>
## 106. What do we call an explosive mix of LSM, cgroup, BPF, seccomp ?

- セッション個別URL: https://blog.linuxplumbersconf.org/2016/ocw/proposals/4077.html
- Track: BoFs
- 日時: Thursday, November 3, 2016 6:00pm

### Description

Two BPF based LSM have been proposed to solve a variety of the use cases in security, monitoring and container networking:
- landlock by Mickael https://lkml.org/lkml/2016/8/25/286
- checmate by Sargun https://lkml.org/lkml/2016/8/4/58

landlock is following seccomp approach by attaching to task hierarchy.
checmate is working with cgroups.
The goal of this BoF is to understand the use cases and talk about the path forward.

Anyone working on seccomp, cgroup, bpf, lsm is invited to join :)

### One Line Summary

checmate or landlock

### 添付資料URL

掲載なし

<a id="session-4197"></a>
## 107. A Formal Model of Linux-Kernel Memory Ordering

- セッション個別URL: https://blog.linuxplumbersconf.org/2016/ocw/proposals/4197.html
- Track: BoFs
- 日時: Thursday, November 3, 2016 7:00pm

### Description

This BoF session will give an overview and some demos of a draft Linux-kernel formal memory model.  This memory model is designed to accommodate the range of hardware that the kernel runs on as well as the range of use cases within the Linux kernel, and can be thought of as a formalization of and extension to Documentation/memory-barriers.txt.  As far as we know, this is the first realistic formal memory model for the Linux kernel, and the first formal memory model of any kind that correctly models RCU.

Joint work with Jade Alglave, Luc Maranget, Andrea Parri, and Alan Stern.

### One Line Summary

Review, explore, and critique a draft formal model of Linux-kernel memory ordering.

### 添付資料URL

掲載なし

<a id="session-4161"></a>
## 108. Distributing files with signatures

- セッション個別URL: https://blog.linuxplumbersconf.org/2016/ocw/proposals/4161.html
- Track: BoFs
- 日時: Thursday, November 3, 2016 7:00pm

### Description

The Integrity Measurement Architecture (IMA), which can be configured to enforce signature checking on all files, can be leveraged to allow access to only unmodified software, installed from trusted sources. To achieve this goal on Linux will require distros and other software providers to sign not only their software packages, but the individual files included in these packages.

The purpose of this BoF is to bring together people working on package management systems of distros, to work out the issues preventing the adoption of file signature enforcement. Some issues we need to discuss are:
- How should the signing keys be distributed?
- What level of signing key granularity (e.g. per repo, per package, per package version) is needed.
— For example, if we can sign each version of each software with a different key, then we can revoke the certificate for a vulnerable version after a security update. This would prevent the execution of the vulnerable version, and the version rollback attack. 
- How do we revoke certificates?
- How would the user manage the keys in the IMA keyring?

### One Line Summary

Linux can enforce signature checking on all files and make sure only trusted software can be executed, but this requires that the file signatures be packaged, distributed, and installed together with the files. This BoF aims to bring together people working on package management systems to discuss the different methods of including file signatures in software packages.

### 添付資料URL

掲載なし

<a id="session-4263"></a>
## 109. ZFS and OpenVZ container sync project

- セッション個別URL: https://blog.linuxplumbersconf.org/2016/ocw/proposals/4263.html
- Track: BoFs
- 日時: Thursday, November 3, 2016 7:00pm

### Description

The power of ZFS (in particular: copy-on-write, hierarchies of snapshots and clones, and zfs send/receive) can be coupled with Linux container technology (I’ve chosen OpenVZ, but Docker+criu could work just as well) to augment the experience for both development and application deployment.

The baseline combination of OpenZFS and OpenVZ (for which I have created a Debian 7 Vagrant image) enables ecosystems of applications to be constructed as a hierarchy of clones.  I’ve collaborated on a project that synchronises ZFS snapshot and clone hierarchies across systems (including OS container images); this work can be leveraged for both individual and team development.  The technology couples dataset hierarchies with the OS and application container images that incorporate the data, to better facilitate live migration, synchronisation, and failover to the cloud.  Kinds of datasets that may be injected into a running container include: home directories, work environment shared source and utilities, log directories, temporary and ephemeral data.

With ongoing and future developments to ZFS dataset encryption on Linux, the synchronisation mechanism (for instance: more robust and versatile notions for dependency graphs, and the ability to “rebase” a collection of images into a more efficient representation centered around clusters of similar functionality), deduplication layers, and with OS/application compartmentalisation as a default principle, we can enable interesting enhancements for development and production systems that currently have barriers to entry. With a few simple short commands, datasets are snapshotted, differenced, cloned, synchronised, or destroyed as needed; and containers are created or checkpointed as necessary to support the requested operation.

With this tooling and technology in place, it then becomes practical to (1) efficiently share a base filesystem (in a collaborative work setting) that’s encrypted with a group key; to (2) quickly transfer the live running state of a system to a co-worker for debugging – with full-fidelity reproducibility baked in; to (3) flag a dataset or OS image as temporary or ephemeral such that the base for the image is public/shared but new files and blocks written use the custom key; to (4) flag a dataset to be of “log” type so that reading the data later requires a private archive key; and to (5) support the evolution of a separate home directory shared between containers and applications.  Carefully and responsibly crafting such ecosystems of datasets faciliates more efficient, thorough, transparent, and compartmentalised backup and failover.  And to contrast, the storage footprint for a privacy-focused project (Qubes OS) falls far short on this efficiency front.

I’ll demonstrate the synchronisation project’s current capabilities, and will elaborate upon what else is possible with ongoing extensions to ZFS and further work.  An emphasis will be placed on the advantages of letting datasets and running containers automatically accumulate in orthogonal compartments that have different properties.  And some advantages of using containers over virtual machines in this environment will be discussed.  I may also be able to complete work on a proof-of-concept leaner version of Qubes OS, with emphasis on the privacy aspects and the relative increase in storage efficiency using this architecture over its current one (which uses lightweight VMs and orthogonal OS images).

### One Line Summary

I demonstrate how OpenVZ can be used with a ZFS backend to provide an effective development/production ecosystem where datasets and OS state can be checkpointed and sync'd across hosts with efficiency and versatility.

### 添付資料URL

掲載なし

<a id="session-4569"></a>
## 110. _OSI and it's impact to OEMs

- セッション個別URL: https://blog.linuxplumbersconf.org/2016/ocw/proposals/4569.html
- Track: BoFs
- 日時: Thursday, November 3, 2016 8:00pm

### Description

The Linux kernel has been responding it’s the latest version of Windows to the ACPI _OSI call for some time. Overall this has been a benefit to the kernel community.

Unfortunately it also causes a lot of challenges for OEMs such as Dell that actually try to improve Linux compatibility with their hardware.

I’ll talk about some of the design decisions that end up getting made and some alternative solutions I’d like to bring forward.

### One Line Summary

This is to discuss the impact of the Linux kernel responding as the latest version of Windows to OEM's trying to support Linux.

### 添付資料URL

掲載なし

<a id="session-3645"></a>
## 111. Beyond Fork and Exec: Running a Million Containers at Facebook

- セッション個別URL: https://blog.linuxplumbersconf.org/2016/ocw/proposals/3645.html
- Track: Refereed Presentations Track
- 日時: Friday, November 4, 2016 9:30am

### Description

Tupperware is a software deployment system responsible for tens of thousands of unique services at Facebook.  Service specifications are uploaded to schedulers, converted into some number of task specifications, and farmed out to hundreds of thousands of Facebook servers.

The piece of software that turns these task specifications into container reality is the Tupperware Agent.  Beyond instantiating containers, providing a simple abstraction requires functionality ranging from health monitoring to log aggregation and search.  This broad charter requires the use (and, frankly, abuse) of nearly every Linux API one could imagine.

Using several examples from the Tupperware Agent, this talk presents a critical (but hopefully fair) look at the Linux APIs and their usability from an application developer perspective.   These examples are drawn primarily from the speaker’s own heartbreaking experiences, and, while this system has mostly been made to work, caveat emptor.

### One Line Summary

A critical look at Linux APIs from an application developer perspective

### 添付資料URL

掲載なし

<a id="session-4383"></a>
## 112. Introduction

- セッション個別URL: https://blog.linuxplumbersconf.org/2016/ocw/proposals/4383.html
- Track: TPMs
- 日時: Friday, November 4, 2016 

### Description

Brief introduction before we start the sessions proper.

### One Line Summary

Introduction

### 添付資料URL

掲載なし

<a id="session-4365"></a>
## 113. The IBM TSS 2.0 stack

- セッション個別URL: https://blog.linuxplumbersconf.org/2016/ocw/proposals/4365.html
- Track: TPMs
- 日時: Friday, November 4, 2016 9:40am

### Description

An introduction to the features and benefits of the IBM TSS 2.0 stack, along with its development priorities and future plans.

### One Line Summary

Introduction to the IBM TSS 2.0 stack

### 添付資料URL

掲載なし

<a id="session-4371"></a>
## 114. The Intel TSS 2.0 stack

- セッション個別URL: https://blog.linuxplumbersconf.org/2016/ocw/proposals/4371.html
- Track: TPMs
- 日時: Friday, November 4, 2016 10:00am

### Description

An introduction to the features and benefits of the Intel TSS 2.0 stack, along with its development priorities and future plans.

### One Line Summary

Introduction to the Intel TSS 2.0 stack

### 添付資料URL

掲載なし

<a id="session-4377"></a>
## 115. How Google use TPMs in ChromeOS

- セッション個別URL: https://blog.linuxplumbersconf.org/2016/ocw/proposals/4377.html
- Track: TPMs
- 日時: Friday, November 4, 2016 10:30am

### Description

Google make extensive use of TPMs throughout ChromeOS. This session will give a brief overview of the functionality and components in use, and offer an opportunity to discuss whether any of these components make sense in non-ChromeOS environments.

### One Line Summary

A description of Google's TPM stack and components

### 添付資料URL

掲載なし

<a id="session-4389"></a>
## 116. Shipping known-good PCR values

- セッション個別URL: https://blog.linuxplumbersconf.org/2016/ocw/proposals/4389.html
- Track: TPMs
- 日時: Friday, November 4, 2016 11:30am

### Description

One of the strengths of TPMs is the ability to seal secrets and keys such that they can’t be used unless the system booted in an appropriate configuration. But without knowing these values in advance, how can we configure systems appropriately? This session will briefly cover the difficulties involved, suggest a couple of solutions and offer an opportunity to discuss how practical they are for integration into distributions.

### One Line Summary

How can we make it easier to seal secrets to TPMs?

### 添付資料URL

掲載なし

<a id="session-3939"></a>
## 117. Standardization of Device Tree Bindings for TPM

- セッション個別URL: https://blog.linuxplumbersconf.org/2016/ocw/proposals/3939.html
- Track: TPMs
- 日時: Friday, November 4, 2016 12:00pm

### Description

TCG Specification currently provides ACPI as the standard mechanism for Operating System to discover TPM if it is identified on the Host Platform. However, there are various architectures which use Device Tree rather than ACPI, but TCG Specs currently lack the discussion for Device Tree based mechanisms.

Since Device Tree is popular mechanism used by multiple platforms like PowerPC, ARM, it is important to discuss about standarization of Device Tree Bindings for TPM in context of:

TPM is discoverable if DT bindings are available on Platform which has TPM enumerated
	Eventlog handover for Device Tree based mechanisms
	Additional TPM information like enabled/disabled.

Further, this discussion will help to find commonality and differences between ACPI/DT based mechanisms. This will also enable in identifying a generic approach for eventlog handover to be defined in TCG Specs.

### One Line Summary

Standardizing Device Tree bindings for TPM, thereby enabling a defacto mechanism for DT based platforms.

### 添付資料URL

掲載なし

<a id="session-4617"></a>
## 118. Formal specification for describing userspace API's

- セッション個別URL: https://blog.linuxplumbersconf.org/2016/ocw/proposals/4617.html
- Track: Kernel Summit Track
- 日時: Friday, November 4, 2016 10:00am

### Description

Figure out the proper way to create a specification for describing userspace API’s, for the benefit of testing tools such as fuzzers. This is a continuation of the discussion started at the testing microconf.

### One Line Summary

Formal specification for describing userspace API's

### 添付資料URL

掲載なし

<a id="session-3633"></a>
## 119. MSIs in Guest OSs on arm64

- セッション個別URL: https://blog.linuxplumbersconf.org/2016/ocw/proposals/3633.html
- Track: PCI
- 日時: Friday, November 4, 2016 9:30am

### Description

Unlike x86, MSIs on ARM-based machines are typically translated as normal memory transactions by the SMMU. This places an additional burden on Linux, since the doorbell address must be mapped in the address space of each device in order for MSIs to be delivered correctly. Furthermore, devices passed through using VFIO require some portion of the guest address space to be reserved by userspace (QEMU) in order to avoid a mapping collision between the doorbell and guest physical memory.

There are patches from Eric Auger kicking around on the mailing list which aim to solve at least some of these issues, but progress is slow and opinions divided on the best approach. A face-to-face session should help us get to the bottom of the problem and make some quicker progress to enabling this crucial feature for arm64. In particular, getting broad agreement on the user ABI would be a significant step forward.

### One Line Summary

Discussion around MSI generation and routing for devices passed through to KVM guests on arm64 machines.

### 添付資料URL

掲載なし

<a id="session-3639"></a>
## 120. Direct Injection of MSIs into KVM guests on arm64

- セッション個別URL: https://blog.linuxplumbersconf.org/2016/ocw/proposals/3639.html
- Track: PCI
- 日時: Friday, November 4, 2016 10:00am

### Description

This builds up on Will Deacon’s proposal related to MSIs in guests.

Another level of complexity in dealing with MSIs in guests is reached with direct injection into guests. The ARM GICv4 architecture allows for this feature to be implemented relatively easily at the HW level, but of course leaves it to us kernel hackers to come up with the plumbing.

Among the problems to be solved:
- How to express the mapping of physical devices to the guest’s view?
- Should we use the current VFIO model where the MSI-X tables are left untouched (creating potential ordering issues between programming the interrupt controller and the PCI device)?
- Or should we rely on the isolation properties that are offered by the hardware to allow for a slightly more liberal access?

This of course has wide-ranging userspace impacts for the KVM userspace (which is the major consumer for this).

### One Line Summary

Discussion around direct injection of MSIs into KVM guests on arm64

### 添付資料URL

掲載なし

<a id="session-4011"></a>
## 121. IOMMU Interaction Issues with PCI

- セッション個別URL: https://blog.linuxplumbersconf.org/2016/ocw/proposals/4011.html
- Track: PCI
- 日時: Friday, November 4, 2016 10:30am

### Description

While the PCI and IOMMU systems work together almost smoothly, there are some rough edges on both sides which could be improved. This proposal is about discussing possible solutions. Some of the current issues are:

Relaxing IOMMU-group constraints for in-kernel users
	Invisible devices (transparent bridges)
	Making individual IOMMUs visible to the PCI/Device core?
	More unified setup of dma-ops for (PCI-)devices

There is probably more issues from the other attendees to discuss in this session.

### One Line Summary

Discuss current issues in PCI<->IOMMU interaction.

### 添付資料URL

掲載なし

<a id="session-4509"></a>
## 122. PCI resource ALT allocation and resource allocation test module

- セッション個別URL: https://blog.linuxplumbersconf.org/2016/ocw/proposals/4509.html
- Track: PCI
- 日時: Friday, November 4, 2016 11:00am

### Description

Add alt_size resource allocation support

On system with several pcie switches, BIOS allocate very tight resources
to the bridge bar, and it is not aligned to min_align as kernel allocation
code.

For example:
  02:03.0—-0c:00.0—-0d:04.0—-18:00.0

BIOS only allocate 0×10100000 to 0d:04.0 and above bridges.
Later after using /sys/bus/pci/devices/0000:0c:00.0/remove to remove 0c:00.0,
rescan with /sys/bus/pci/rescan can not allocate 0×18000000 to 0c:00.0.
as current min_align solution will need 0×18000000.

Another example:
  00:1c.0—-02:00.0—-03:01.0—-04:00.0—-05:19.0—-06:00.0

BIOS only allocate 0×4800000 to 05:19.0 and 04:00.0.
when 05:19.0 get removed via /sys/bus/pci/devices/0000:05:19.0/remove, 
rescan with /sys/bus/pci/rescan will fail.
 pci 0000:05:19.0: BAR 14: no space for [mem size 0×06000000]
 pci 0000:05:19.0: BAR 14: failed to assign [mem size 0×06000000]
 pci 0000:06:00.0: BAR 2: no space for [mem size 0×04000000 64bit]
 pci 0000:06:00.0: BAR 2: failed to assign [mem size 0×04000000 64bit]
 pci 0000:06:00.0: BAR 0: no space for [mem size 0×00800000]
 pci 0000:06:00.0: BAR 0: failed to assign [mem size 0×00800000]
current code try to use align 0×2000000 and size 0×6000000, but parent
bridge only have 0×4800000.

Introduce alt_align/alt_size and store them in realloc list in addition
to addon info, and will try it after min_align/min_size allocation fails.

The alt_align is max_align, and alt_size is aligned size with bridge
minimum window alignment.



Add PCI_TEST module for resource allocation

Read from data file and mask file, to build simulated data, and have pci_ops
to use them.

Extract calling for pci_create_root_bus, scan_child_bus, resource survey
and resource assign … to see if those functions work as expected to
simulated data.

mask is with rw bits on pci registers, so we can make pci BAR sizing working.

It also support bus number assign-all.

### One Line Summary

New resource ALT allocation (small size than alignment)
and test module for pci resource allocation.

### 添付資料URL

掲載なし

<a id="session-3579"></a>
## 123. PCI resources/irq allocation cross-arch consolidation

- セッション個別URL: https://blog.linuxplumbersconf.org/2016/ocw/proposals/3579.html
- Track: PCI
- 日時: Friday, November 4, 2016 11:30am

### Description

PCI resource allocation (claiming and assignment) and legacy IRQ assignment are currently done on a per arch basis even though there is nothing arch specific in them. This session will draft a plan to consolidate resource allocation and IRQ assignment across arches.

### One Line Summary

Discuss and draft a plan to consolidate PCI
resources (memory, IO, IRQs) management across architectures.

### 添付資料URL

掲載なし

<a id="session-3585"></a>
## 124. PCIe domains re-enumeration

- セッション個別URL: https://blog.linuxplumbersconf.org/2016/ocw/proposals/3585.html
- Track: PCI
- 日時: Friday, November 4, 2016 11:45am

### Description

With PCIe attached SSDs gaining traction through NVM Express, we are encountering user expectations to match that of older storage protocols, like SAS. One of the main features is the ability to hot plug these devices in no particular order with somewhat arbitrary topologies.

In order for this to work in PCIe today, the memory and bus resources must be sufficiently padded to account for worst case scenarios. In many cases, it is not possible to satisfy all conditions, and available resources may be wasted.

This presentation will discuss how we can fully re-enumerate a live PCIe hierarchy to allow more robust hotplug scenarios without over provisioned resources. In order for this to be safe, there are certain expectations on devices and their drivers, so this talk will also discuss the scope for which this feature is applicable.

### One Line Summary

PCIe domains re-enumeration

### 添付資料URL

掲載なし

<a id="session-3657"></a>
## 125. Support for configurable PCIe endpoint

- セッション個別URL: https://blog.linuxplumbersconf.org/2016/ocw/proposals/3657.html
- Track: PCI
- 日時: Friday, November 4, 2016 12:15pm

### Description

The PCIe controller present in some of the current SoCs is capable of operating either in
Root Complex mode or Endpoint mode. But linux kernel right now supports configuring the PCIe controller only in RC mode.

PCIe endpoint support in Linux Kernel has a variety of use cases from validation of the PCI controller/driver/core to exposing peripherals/processors to be used as an accelerator by the root complex system.

The proposal to add endpoint support in Linux Kernel has already been discussed in LKML (https://lkml.org/lkml/2016/8/3/28) and looks like it will be beneficial to a lot of people.

This presentation will discuss/propose/review the architecture of the EP framework.

### One Line Summary

Support for configurable PCIe endpoint

### 添付資料URL

- [slides](http://linuxplumbersconf.com/2016/ocw//system/presentations/3657/original/ep framework.pdf)（file）


- スケジュール掲載のアーカイブURL: https://blog.linuxplumbersconf.org/2016/ocw/system/presentations/3657/original/ep%20framework.pdf
<a id="session-3609"></a>
## 126. Portable System Services

- セッション個別URL: https://blog.linuxplumbersconf.org/2016/ocw/proposals/3609.html
- Track: Refereed Presentations Track
- 日時: Friday, November 4, 2016 11:00am

### Description

Traditional service management on UNIX involves installing service scripts, service binaries, service data and necessary libraries into the host system using package managers like RPM or DEB. This toolbox approach is very powerful but in many ways hard to manage, as combining several services onto the same host might result in package and library version conflicts, and quick installation and removal of services will necessarily leave artifacts on the host (for example system users). Moreover running various independent services within the same system context might be considered problematic from a security PoV.

With systemd’s “Portable System Service” approach the goal is to package up services with all their data into single-file images, that can be dropped-in and removed easily and without affecting the host system or leaving artifacts around.

System services that are packaged as Portable System Service in most ways behave like traditional system services, in particular when used with tools like “systemctl” interaction. However, they may be packaged independently of the host’s package manager.

This talk will focus on the details of the concept and touch various topics regarding service management, in particular stronger sandboxing for system services, handling of system services running in separate kernel namespaces while still providing integration into the host’s concepts, dynamic (“transient”) user ID allocation, service-bound lifecycles of service resources on disk and IPC, and a lot more. We’ll also focus on the relationship to Containers, and where this approach provides different or similar functionality.

### One Line Summary

systemd's primary functionality is service management. Let's bring service management to the next level, by introducing "Portable System Services", a new concept how services may be packaged up with all their required libraries, data and other artifacts and may be shipped as single-file images.

### 添付資料URL

- [slides](http://linuxplumbersconf.com/2016/ocw//system/presentations/3609/original/portableservices-2016.pdf)（file）


- スケジュール掲載のアーカイブURL: https://blog.linuxplumbersconf.org/2016/ocw/system/presentations/3609/original/portableservices-2016.pdf
<a id="session-3795"></a>
## 127. Improving Linux Performance with GCC latest technologies

- セッション個別URL: https://blog.linuxplumbersconf.org/2016/ocw/proposals/3795.html
- Track: Refereed Presentations Track
- 日時: Friday, November 4, 2016 11:45am

### Description

As the Linux community continues to redefine the boundaries of what is possible in a server-based Linux distributions running on new  silicon, both power and performance play an increasingly important role in the industry. In the Clear Linux Project for Intel Architecture, we decided to use the latest GCC technology to boost the performance of a Linux-based system. From profile-based techniques (PGO and AutoFDO), changes in kernel  to Function Multi-Versioning (a compiler feature that is capable of optimizing the same code for multiple architectures and then automatically selecting the correct architecture-specific version of the code at runtime) we will show how these technologies can be used to improve runtime performance and unleash the power of new data centers in Linux distributions. This presentation will help Linux OS developers to better understand the capabilities of the latest version of GCC compiler. This presentation will  include demos and open source templates that can be reused for their own applications. (looking for feedback from Linux community )

### One Line Summary

Use of the latest GCC technology to boost the performance of a Linux-based system

### 添付資料URL

- [slides](https://blog.linuxplumbersconf.org/2016/ocw/system/presentations/3795/original/GCC.pdf)（file）

<a id="session-3825"></a>
## 128. Man-pages: discovery, feedback loops, and the perfect kernel commit message

- セッション個別URL: https://blog.linuxplumbersconf.org/2016/ocw/proposals/3825.html
- Track: Refereed Presentations Track
- 日時: Friday, November 4, 2016 2:00pm

### Description

The Linux man-pages project lives on the boundary between two worlds that are not always mutually intelligible: the kernel and user-space programs. One subgoal of that project is to allow the two worlds to hold mutually intelligible conversations. Living on this boundary—testing, reviewing, and documenting the APIs—provides some interesting perspectives on the kernel-user-space interface. In this talk, I’ll briefly outline some of the problems that I’ve observed in the design and implementation of kernel-user-space APIs and then look at some of the challenges faced by the man-pages project. (Several of these challenges are faced by other projects that also live at the boundary, such as C libraries, strace, fuzz testers, and various testing projects.) One problem of special interest for me is “the problem of discovery”: how do we even know if the interface has changed, where “change” can range, at one end, from the introduction of a bug, through the addition of a new flag in a system call, and and at, the other end, to the addition of a new system call or /proc file? (In some unfortunate cases, kernel developers do not even realize they’ve made such changes.) Related to “the problem of discovery” is “the problem of the feedback loop”: when (how long) does it take us to discover changes to the interface? I’ll also like to look at (and solicit ideas for) possible solutions to these problems; in particular, to talk about what—from a user-space perspective—the perfect kernel commit message looks like.

### One Line Summary

How do we discover API changes, test and document them, and make sure they are publicized to everyone, including end users, as far in advance, and as widely, as possible?

### 添付資料URL

- [slides](http://linuxplumbersconf.com/2016/ocw//system/presentations/3825/original/man-pages-discovery-feedback-and-commit-messages-LPC-2016-Kerrisk.pdf)（file）


- スケジュール掲載のアーカイブURL: https://blog.linuxplumbersconf.org/2016/ocw/system/presentations/3825/original/man-pages-discovery-feedback-and-commit-messages-LPC-2016-Kerrisk.pdf
<a id="session-3615"></a>
## 129. Integration of trace buffering and aggregation tools

- セッション個別URL: https://blog.linuxplumbersconf.org/2016/ocw/proposals/3615.html
- Track: Tracing
- 日時: Friday, November 4, 2016 

### Description

Within the tracing tooling found in the Linux ecosystem, some tools focus on kernel tracing, whereas others focus on user-space. Some traditionally take a post-processing analysis approach, whereas others perform in-kernel aggregation.

As the scope of the Linux tracing infrastructure widens, it is more important than ever to discuss how tools can be combined to fulfill use-cases that would be hard to tackle with each tool alone.

### One Line Summary

Discussion on use-cases facilitated by combining trace buffering (e.g. Ftrace, Perf, LTTng) and live aggregation (e.g. eBPF, SystemTAP) technologies.

### 添付資料URL

掲載なし

<a id="session-3627"></a>
## 130. Remote server for tracing

- セッション個別URL: https://blog.linuxplumbersconf.org/2016/ocw/proposals/3627.html
- Track: Tracing
- 日時: Friday, November 4, 2016 

### Description

It’s been on my todo list for some time, and there’s been a little work done already. But I would like to have the ability to create a server daemon that runs on a remote host or a guest. Then you could have the local host connect to that daemon to start tracing.

The main issue I have is coming up with a decent protocol for this approach. We need something that is robust enough for future changes, and my worry is also about security. As it is a means to start root only services on a machine. We need to implement protection against attacks.

### One Line Summary

Adding a trace-cmd server for guests and remote machines

### 添付資料URL

掲載なし

<a id="session-3495"></a>
## 131. Kernelscope: Live debugging at scale

- セッション個別URL: https://blog.linuxplumbersconf.org/2016/ocw/proposals/3495.html
- Track: Tracing
- 日時: Friday, November 4, 2016 

### Description

Facebook has an mind boggling number of servers.  Those servers run a mind boggling variety of services.  These services are often complex and run into strange latency problems that are impossible to break down into reproduce-able chunks.  Enter kernelscope, a bpf based tracing service.  Using this tool we are able to tease out patterns of problems in large and complex systems in production with very little overhead.

### One Line Summary

This talk will cover kernelscope, a tool we use inside of Facebook to debug complex problems.

### 添付資料URL

掲載なし

<a id="session-4029"></a>
## 132. User Space Dynamic Tracing

- セッション個別URL: https://blog.linuxplumbersconf.org/2016/ocw/proposals/4029.html
- Track: Tracing
- 日時: Friday, November 4, 2016 

### Description

Kernel Dynamic Tracing is growing rapidly. There is a number of kernel level mechanisms (kprobe, tracepoints, bpf, ftrace, perf_events) suitable for fast and efficient deep dive into OS details. There are also uprobes that can give a peek into user space. Unfortunately uprobes have substantial overhead due to context switch. This talk is exploring several crazy ideas on fast user space tracing. Even glibc malloc/free tracing with millions events a second should work.

### One Line Summary

New approach to fast user space tracing with a help of the kernel

### 添付資料URL

掲載なし

<a id="session-4083"></a>
## 133. Improving BCC tracing for the Linux Kernel with LLVM IR

- セッション個別URL: https://blog.linuxplumbersconf.org/2016/ocw/proposals/4083.html
- Track: Tracing
- 日時: Friday, November 4, 2016 

### Description

Many of the tools in BCC rely on the ability to introspect kernel memory by way of pointer dereferences in the C/BPF scripts that these tools include. However, BPF doesn’t allow direct memory access, instead requiring the BPF program to use the bpf_probe_read helper. BCC uses clang’s rewrite functionality to do a source-to-source translation into a valid (but more verbose) C program.

This approach has worked, but is starting to hit a wall as more complex tools are written. Let’s discuss alternatives, one proposal being use of an LLVM IR “optimization” pass to generate valid programs.

Other topics in this session may include how to improve the user friendliness of writing BPF programs, such as using LLVM to give better compile-time error reporting before handing over to the kernel.

### One Line Summary

Discuss and learn about the way BCC uses clang's rewrite functionality to create valid bpf programs, and how to improve support to create a better tracer.

### 添付資料URL

掲載なし

<a id="session-4335"></a>
## 134. Checkpoint/Restart for distributed applications

- セッション個別URL: https://blog.linuxplumbersconf.org/2016/ocw/proposals/4335.html
- Track: Checkpoint/Restore
- 日時: Friday, November 4, 2016 2:05pm

### Description

Using checkpoint/restart protocols for single instance applications is a well understood principle. Scaling up this concept to incorporate parallel applications running across multiple nodes is a delicate operation, one that can easily incur a significant performance impact. This talk covers different checkpoint/restart protocols existing, and gives details about their implement in one of the leading message passing libraries, Open MPI.

### One Line Summary

Executing efficient checkpoint/restart for distributed applications

### 添付資料URL

掲載なし

<a id="session-4281"></a>
## 135. Some Open Challenges in Checkpointing

- セッション個別URL: https://blog.linuxplumbersconf.org/2016/ocw/proposals/4281.html
- Track: Checkpoint/Restore
- 日時: Friday, November 4, 2016 2:40pm

### Description

Historically, checkpoint-restart approaches have divided into kernel-based modifications (e.g., BLCR) and purely user-space approaches (e.g., DMTCP).  CRIU represents an intermediate strategy by bridging the kernel and the user process, by taking advantage of user-space data structures exported by the kernel.  In the same way, DMTCP represents a bridging strategy between the system representation of the process and the user application.  Specifically, DMTCP plugins allow for the virtualization of external resources transparent to the application, as well as offering DMTCP-aware extensions to the application.

In this talk, we present a wish list that might allow these two bridging technologies (from the kernel to the process and from the process to the application) to better inter-operate.  We describe a number of challenges.  As an example, we highlight the issue of the NSCD daemon.  It shares memory with the application, and so when the application is restarted, the NSCD daemon must be partially re-initialized to account for this.  What can be done in a manner that is transparent to both the application and NSCD?

### One Line Summary

In this presentation, we will talk about some of the open challenges in checkpointing.

### 添付資料URL

掲載なし

<a id="session-4269"></a>
## 136. Towards better restorer

- セッション個別URL: https://blog.linuxplumbersconf.org/2016/ocw/proposals/4269.html
- Track: Checkpoint/Restore
- 日時: Friday, November 4, 2016 3:10pm

### Description

Current restorer code is built of ad-hoc solutions that try to re-construct the process tree based purely on the state it should get into.

Proper restorer should be a proved algorithm that builds the target graph of objects using the given set of rules. This task resembles the one about grammars and syntax analyzers, but is much more complex as formal rules do not fit into any known grammar types.

### One Line Summary

Few words about why current restorer sucks and how to make it work better.

### 添付資料URL

掲載なし

<a id="session-3483"></a>
## 137. Lazy Process Migration

- セッション個別URL: https://blog.linuxplumbersconf.org/2016/ocw/proposals/3483.html
- Track: Checkpoint/Restore
- 日時: Friday, November 4, 2016 3:40pm

### Description

One important goal around process migration is to reduce the process downtime during migration. CRIU already supports pre-copy to reduce process downtime during migration. Using pre-copy, unfortunately for processes with high memory change rates, can increase the process downtime during migration as this can lead to situation where more memory has to be transferred during migration.

During last years (2015) Linux Plumbers Conference the first discussions using userfaultfd in CRIU for process migration were started and this talk presents the results of the CRIU and userfaultfd integration.

### One Line Summary

Decrease downtime during process migration using userfaultfd to restore memory pages on demand.

### 添付資料URL

掲載なし

<a id="session-3651"></a>
## 138. Checkpoint Restore in LXD

- セッション個別URL: https://blog.linuxplumbersconf.org/2016/ocw/proposals/3651.html
- Track: Checkpoint/Restore
- 日時: Friday, November 4, 2016 4:10pm

### Description

In this talk I’ll cover the various ways that we use checkpoint restore in LXD (migration, stateful container snapshots, etc.). One of the challenges we face is managing how CRIU is invoked: in some cases we absolutely want the container to migrate, and “small problems” can cause it to fail. In other cases, we want to fail if things don’t go exactly right. In this talk I’ll also ask for feedback on a mechanism in CRIU to collect these sorts of settings, so that all users of CRIU can benefit from this alternating behavior.

### One Line Summary

In this talk I'll cover the ways we use checkpoint restore in LXD, as well as some challenges we face.

### 添付資料URL

掲載なし

<a id="session-4017"></a>
## 139. What doesn't work in CRIU

- セッション個別URL: https://blog.linuxplumbersconf.org/2016/ocw/proposals/4017.html
- Track: Checkpoint/Restore
- 日時: Friday, November 4, 2016 4:25pm

### Description

In compare with virtual machines, CRIU can’t dump and restore any set of processes and there are a few reasons. The first one — CRIU doesn’t support all type of resources. Usually it means that we don’t implemented support for them yet and we don’t know how hard it will be. More serious problem with resources which CRIU supports but can’t handle them for all cases. For example, CRIU can’t restore arbitrary process tree, any set of mounts, etc.

The second part is about what we have to fix in the kernel. For example, when we migrate a processes to another host, the logic around clock_gettime() will be broken and we need to implement a namespace for clocks and timers to fix it.

The third part is about how to make sure that the migration will actually work. For some use cases of CRIU it is can be easily said if a process or container migration will succeed or not. The cases where CRIU will not work are most of the times pretty obvious to predict. But if running a checkpoint/restore which should theoretically succeed there are still many reasons a checkpoint/restore might fail. Do all files used by the restored process exist? Do all libraries used by the restored process exist? Are the used binaries there? Is there enough memory available to restore the process? Are there …?

CRIU already has a few checks like is the binary on the system the processes are restored the same size as the binary on the source system but those checks are only run during a full restore which might already be too late as the process on the source system has already been paused/stopped/aborted.

This talk presents what has already been implemented to help the users to make a decision if a migration should be started at all. This talk should also be the basis for a discussion what additional checks in CRIU can be provided to help the users make a better decision if a migration should be attempted.

### One Line Summary

Why CRIU can't dump any set of processes

### 添付資料URL

掲載なし

<a id="session-4227"></a>
## 140. What doesn't work in CRIU, ARM edition

- セッション個別URL: https://blog.linuxplumbersconf.org/2016/ocw/proposals/4227.html
- Track: Checkpoint/Restore
- 日時: Friday, November 4, 2016 4:45pm

### Description

Overview and details of the CRIU/kernel todo list from an ARM perspective:

VDSO unmap/remap
	TASK_SIZE variance
	KUSER_HELPERS
	Android Binder IPC

Also discuss ways work on ARM could better apply to all the architectures

Kernel VDSO code duplication
	My approach to “Set checkpoint tokens without recompiling”—set a breakpoint, stop the process, dump the process, restore the process, continue the process
	ptrace-wait and company
	Seamless/zero-downtime firmware upgrade use case

### One Line Summary

Missing pieces for full ARM/AArch64 support and new use cases from ARM work hopefully worth sharing across all architectures

### 添付資料URL

掲載なし

<a id="session-4635"></a>
## 141. Rerun: A Formal Model of Linux-Kernel Memory Ordering

- セッション個別URL: https://blog.linuxplumbersconf.org/2016/ocw/proposals/4635.html
- Track: Kernel Summit Track
- 日時: Friday, November 4, 2016 2:45pm

### Description

This BoF session will give an overview and some demos of a draft Linux-kernel formal memory model. This memory model is designed to accommodate the range of hardware that the kernel runs on as well as the range of use cases within the Linux kernel, and can be thought of as a formalization of and extension to Documentation/memory-barriers.txt. As far as we know, this is the first realistic formal memory model for the Linux kernel, and the first formal memory model of any kind that correctly models RCU.

### One Line Summary

Review, explore, and critique a draft formal model of Linux-kernel memory ordering.

### 添付資料URL

- [slides](https://linuxplumbersconf.com/2016/ocw//system/presentations/4635/original/LinuxMM.2016.10.26c.LPC.pdf)（file）


- スケジュール掲載のアーカイブURL: https://blog.linuxplumbersconf.org/2016/ocw/system/presentations/4635/original/LinuxMM.2016.10.26c.LPC.pdf
<a id="session-3819"></a>
## 142. Capability-based IPC on Linux

- セッション個別URL: https://blog.linuxplumbersconf.org/2016/ocw/proposals/3819.html
- Track: Refereed Presentations Track
- 日時: Friday, November 4, 2016 2:45pm

### Description

The majority of IPC used across most operating systems today uses
capability-based security. This includes Android (Binder), macOS (Mach IPC),
Solaris (Doors), Windows (COMM, et al.), seL4, and more. Despite the wide-spread
adoption, common linux distributions never provided native support for
capability-based IPC. The bus1 project is an attempt to change this.

Bus1 provides capability based IPC by defining and implementing a distributed
object model. It allows local processes to send messages to objects owned by
remote processes, as well as share their own objects with others. Only the
transport layer is defined, marshaling is completely left to the application.

While bus1 emerged out of the kdbus project, it was written from scratch and
designed as a universally applicable IPC system. It is in no way tied to DBus,
but developed as standalone project. However, there are efforts to
make use of bus1 in DBus environments and allow existing user-space to co-exist
with possible bus1 users.

This talk will outline the needs for capability based IPC, describe the design
and implementation of bus1, and compare it to existing solutions like Binder. On
a final note, we will have a look at how to employ bus1 in existing user-space
with a smooth transition.

### One Line Summary

Introducing bus1, a capability based IPC on linux.

### 添付資料URL

- [slides](http://linuxplumbersconf.com/2016/ocw//system/presentations/3819/original/bus3.pdf)（file）


- スケジュール掲載のアーカイブURL: https://blog.linuxplumbersconf.org/2016/ocw/system/presentations/3819/original/bus3.pdf
<a id="session-3471"></a>
## 143. Sanitizers

- セッション個別URL: https://blog.linuxplumbersconf.org/2016/ocw/proposals/3471.html
- Track: Refereed Presentations Track
- 日時: Friday, November 4, 2016 4:00pm

### Description

The talk covers several tools:
 – AddressSanitizer (KASAN), finds use-after-free and out-of-bounds bugs in heap, stack and globals
 – ThreadSanitizer (KTSAN), finds data-races
 – MemorySanitizer (KMSAN), finds uses of unitialized memory
 – Syzkaller, coverage-guided system call fuzzer
KASAN and Syzkaller are in mainline, KTSAN exists as a prototype while KMSAN is only planned. The tools are based on compiler instrumentation, fast, detect bugs at the point of occurrence and provide informative reports. To date the tools have found more than 300 bugs.

### One Line Summary

a new generation of bug finding tools

### 添付資料URL

- [slides](https://blog.linuxplumbersconf.org/2016/ocw/system/presentations/3471/original/Sanitizers.pdf)（file）

# Wiki Topics 補足

2016年はOCWのproposals形式。開催スケジュールの個別URL付き枠143件を収録（Lunch Break 1件を含む）。Descriptionは個別ページのAbstract原文。One Line Summaryは別フィールドに保持。資料URLは個別ページの原記載を保持し、スケジュールに別のアーカイブURLがある場合はschedule_urlも収録。添付ファイル本体の取得・リンク有効性検査は実施していない。Wiki Topicsは採用済み12件と、今年は含まれないと明記された提案16件を補足に区別して収録し、開催セッションの件数には加算しない。WikiのTentative/Proposed等は原文通り。個別開始時刻が未掲載の26件は空欄のまま保持。マイクロカンファレンス・ワークショップ全体の16枠も補足に収録。

## Android/Mobile（採用済み）

https://wiki.linuxplumbersconf.org/2016:android_mobile

Android/Mobile




The Linux Plumbers 2016 Android/Mobile track focuses on finding solutions for kernel changes and other plumbing related issues that Android and other mobile solutions make use of but are not yet upstream.




Key Attendees (tentative)


 Laura Abbott

 Bernhard Rosenkränzer

 Behan Webster

 Greg Hackmann

 Sean Paul

 Rob Herring

 Elliott Hughes

 Jean Wiklander

 Todd Kjos

 Mathieu Poirier

 Eric Dumazet

 Lorenzo Colitti

 Kees Cook

 Amit Kucheria

 Greg KH

 Amit Pundir

 Sumit Semwal

 Rom Lemarchand

 John Stultz

 KP Singh

 Karim Yaghmour

 Javi Merino

 Gustavo Padovan

 Marissa Wall





Schedule (tentative)



The following is the list of items presently considered as candidate topics for the microconf. Still very much subject to change.

Mainlining
* What to do with Android items in staging?
* Summary of out-of-tree Android patches in common.git
Core Android/kernel functionality
* A/B updates
* Big-little -- scheduling/thermal throttling
* Syscalls & VDSOs -- pros/cons
* Behavioral Analysis and Visualization
Hardware support
* Multi-device support (HAL unification/consolidation/dynamic-modularization updates, single kernel/single user-space efforts)
* Hikey
* Ara
Graphics
* ION -- ARM's new heap & merging to mainline
* HWC + DRM/KMS + Sync
Security
* Brillo / Security / Kernel management
* Trusted OS (Trusty, Optee)
Programming languages
* Systems programming in Java
* Switch to CLANG



Contact




Runner: Karim Yaghmour karim.yaghmour@opersys.com

### 添付資料URL

掲載なし

## Checkpoint-Restart（採用済み）

https://wiki.linuxplumbersconf.org/2016:checkpoint-restart

Checkpoint-Restore




The MC is about Checkpoint-Restore technology in Linux and everything about it.
Attendees represent the CRIU, the DMTCP, BLCR and OpenMPI developer communities.




Speakers


 Pavel Emelyanov (Virtuozzo)

 Andrey Vagin (Virtuozzo)

 Tycho Andersen (Canonical)

 Adrian Reber (RedHat)

 Mike Rapoport (IBM)

 Christopher Covington (Qualcomm)

 Gene Cooperman (DMTCP)

 Kapil Arya (DMTCP)

 George Bosilca (OpenMPI)





Tentative speakers


 Ross Boucher (Tonic project)

 Saied Kazemi (Google)

 Laurent Dufour (IBM)

 Mark O'Neil (Tumbling dice, Cryopid)

 Kevin M Fox (PNNL, OpenStack HAProxy)





Topics


 CRIU

 Current issues

 Restorer v2

 Live migration in LXD

 UserfaultFD support and post-copy live migration



 DMTCP

 Open challenges in Checkpointing



 C/R in distributed workloads

 OpenMPI







Schedule




Total time: 3 hrs



 Intro, Pavel, 5 minutes

 Distributed C/R, George, 35 munites

 Open challenges in C/R, Gene and Kapil, 30 minutes

 Restorer v2, Pavel, 30 minutes

 Lazy Migration, Mike and Adrian, 25 minutes

 C/R in LXD, Tycho, 15 minutes

 What doesn't work in CRIU, Andrey, Adrian and Christopher, The remaining time





Contact



Runner: Pavel Emelyanov

### 添付資料URL

掲載なし

## Containers（採用済み）

https://wiki.linuxplumbersconf.org/2016:containers

Containers




The Linux Plumbers 2016 containers track is focusing on Linux containers, both kernel space and user space.



The structure will be the usual set of quick project updates, followed by more topical discussions (devices, security, …)




Tentative Schedule




The schedule of the 2016 Containers Plumbers Micro Conference is as follows. 


 Project updates

 LXC project update (Stéphane Graber)

 LXD project update (Stéphane Graber)

 OpenVZ project update (Kir?)

 Rkt project update (Alban? Brandon?)

 Docker project update (any takers?)



 Tea break

 Discussion on new cool stuff

 Mounts in unprivileged containers

 Current and future improvements to resource limitation (cgroups)

 File system capabilities in unprivileged containers (Serge?)

 Security concerns around the user namespace

 Orderly transition to cgroup v2 API?  (Systemd is going to force this, so are we ready to cope)

 Tool co-operation.  Currently for all container systems, ip netns is blind to the container network namespace, but should it be?







Note: The final schedule will be posted on the linuxplumbersconf.org website on the Schedule page. Presentation slides will available on the Plumbers page by following the links to the abstracts. 




Potential attendees (add yourself!)


 Stéphane Graber (LXC & LXD)

 Serge Hallyn (LXC & LXD, capabilities, cgroup namespace)

 Tycho Andersen (LXC & LXD)

 Christian Brauner (LXC & LXD)

 Seth Forshee (unprivileged ext4, unprivileged fuse and unprivileged loops patches)

 Tejun Heo (cgroups)

 Eric Biederman (namespaces)

 Kir Kolyshkin (OpenVZ & CRIU)

 Dmitry Monakhov (OpenVZ)

 Andrey Vagin (OpenVZ & CRIU)

 Pavel Emelyanov (OpenVZ & CRIU)

 James Bottomley (OpenVZ)

 Maxim Patlasov (OpenVZ)

 Vladimir Davydov (OpenVZ)

 Brandon Philips (CoreOS & rkt)

 Alban Crequy (rkt)

 Amir Goldstein (containers on Android)

 Oren Laaden (containers on Android)

 Michael Coss (uevent filtering and forwarding)

 Geoff Levand (ARM64 + CoreOS + containers)

 Rami Rosen (Intel)

 Arnaldo Carvalho de Melo (Red Hat)

 Samuel Ortiz (Intel)





Discussion notes




Notes from the sessions will be recorded using Etherpads (links will be provided). It is very important that each session has good notes.  All too often, if notes were not written down, the session might as well not have happened.




Contact




Proposal added by Stéphane Graber <stgraber at ubuntu dot com>

### 添付資料URL

掲載なし

## Device Tree（採用済み）

https://wiki.linuxplumbersconf.org/2016:device_tree

Device Tree




The Linux Plumbers 2016 Device Tree track primary areas of interest are:


 future direction of the core device tree code (drivers/of/, scripts/dtc/libfdt/)

 subsystem device tree support

 verification and validation of device trees

 debugging tools and techniques (static (build and pre-boot) and dynamic (boot and run-time))

 DT toolchain

 OF core support for debugging

 OF unit tests

 adding device tree support to drivers

 designing and implementing drivers for effective debugging

 impact of overlays (boot and run-time updates to the device tree)

 bindings

 binding review process and status

 documentation





The goal is to improve:


 creation of correct device trees

 validation of device trees

 the quality of the core device tree code

 correct use of device tree by drivers

 ease of use of device tree for driver developers

 ease of use of device tree for system administrators





Key Attendees


 Rob Herring (device tree maintainer, device tree bindings maintainer)

 Grant Likely (device tree maintainer)

 Frank Rowand (device tree maintainer)

 Pawel Moll (device tree bindings maintainer)

 Mark Rutland (device tree bindings maintainer)

 Ian Campbell (device tree bindings maintainer)

 Tomasz Figa (validation)

 Benoit Cousson (validation)

 Fabien Parent (validation)

 Stephen Warren (validation)

 Pantelis Antoniou (overlays)

 Kumar Gala (device tree bindings)

 Thomas Petazzoni

 Geert Uytterhoeven

 Olof Johansson

 other subsystem maintainers





Proposed Topics (Tentative)


 Devicetree Specification

 Overview 

 Organization and process

 Current status

 Current Plan

 Issues



 Tools and techniques to aid Devicetree debugging

 New tools since 2015

 Plans for future tool

 Current debugging pain points



 Devicetree bindings validation

 Status

 Plans



 Future direction of core kernel code

 Locking

 Reference counting

 Overlays

 Connectors

 etc



 What goes into a devicetree

 hardware description vs configuration vs policy



 The device creation and driver binding ordering swamp





Schedule




The schedule of the 2016 Tracing Plumbers Microconference is as follows. Note presentation slides can be found on the Plumbers page by following the links to the abstracts:


 Session 1 - TBD

 etc…





Discussion notes




This is a good place to record notes from your session.  All too often, if notes were not written down, the session might as well not have happened.




Contact




Runner: Frank Rowand frowand.list@gmail.com

### 添付資料URL

掲載なし

## FPGAs and programmable logic devices（採用済み）

https://wiki.linuxplumbersconf.org/2016:fpgas_and_programmable_logic_devices

Coherent Accelerators, FPGAs, and Programmable Logic Devices




The Linux Plumbers 2016 FPGAs and Programmable Logic Devices track intends to facilitate discussions surrounding the use of coherently attached accelerators, FPGAs, and other programmable devices (oh my!) as first class citizens on Linux.



The tentative schedule will be a short update on the current state of the fpga-mgr framework, followed by a discussion of FPGA usecases and problems, and then a brainstorm of potential solutions.



Topics under consideration for this miniconf include (but are not limited to):


 FPGA bitstream configuration; partial reconfiguration (fpga-mgr?)

 Enumeration and modeling of in-bitstream IP (device tree overlays?)

 Modeling of FPGA IP in the kernel device model:

 Handling the removal/reconfiguration of IP at runtime







Key attendees


 Alan Tull (Altera)

 Ralph Wittig (Xilinx)

 BenH (IBM)

 Julia Cartwright (NI)

 Moritz Fischer (NI)

 Graeme Gregory (Linaro)

 Rob Herring (Linaro)

 Kate Stewart (Linux Foundation)

 Jon Masters (Red Hat)

 Clark Williams (Red Hat)

 Leif or Catalin (ARM)





Schedule (tentative)



The following is the list of items presently considered as candidate topics for the microconf. Still very much subject to change.

Enumeration
* Standardized enumeration and logical interface(s)
** It seems we're pretty much all doing "kinda fake PCIe"
** In particular things like PCIe capabilities
* UPI/QPI/CCIX/OpenCAPI/other coherent interconnects
** Overview from each camp on what they're doing currently
Configuration/Assignment
* Standardized configuration and (partial) re-configuration of devices
** Assuming a VFIO/userspace driven use model without drivers
Orchestration
* Management/provisioning (OpenStack, etc.)
Use cases
* Networking offload (eBPF, XDP, crypto, etc.)
* Workload acceleration
* others



Discussion notes




Notes from the sessions will be recorded using Etherpads (links will be provided). It is very important that each session has good notes.  All too often, if notes were not written down, the session might as well not have happened.




Contact




Runner: Jon Masters jcm@redhat.com

### 添付資料URL

掲載なし

## git（採用済み）

https://wiki.linuxplumbersconf.org/2016:git

A Micro Git Together




The Linux Plumbers 2016 Git track is focusing on the Future of Git.  Not so much does it have a future, but rather what will Git be able to do or look like in the future.  We'll take presentations on several enhancements and feature requests, maybe a little open discussion and arm wrestling, but no fist-fights or yelling.



The structure will be … loose.  A few short presentations, Q&A, and open discussions.



Topics under consideration for this little Git Together include (but are not limited to):


 State of the Git Union

 A brief overview of recent Git enhancements

 A brief overview of planned or near-term enhancements





 Patch Management Using git series

 Josh explains his motivation for git series

 He tells us what it does and how

 He might even ask for suggested enhancements





 A Maze Of Git Scripts All Alike

 You have scripts, I have scripts, Steve Rostedt has scripts

 Maybe we don't *all* need slightly different scripts

 What if we worked toward some common, useful scripts?

 Discuss





 Future Git

 A festive discussion about the Future of Git.

 Could “git blame” be enhanced with key parameters? (Recovering Token-Level Authorship Information from Git by Daniel German: https://www.youtube.com/watch?v=iXZV5uAYMJI)







Key Attendees




These people have, apparently, by hook or crook, signed up already.



 Junio Hamano

 Josh Triplett

 James Bottomley

 Steve Rostedt

 Kate Stewart

 Jon Loeliger

 Tim Bird (wants to attend, but doesn't know if he can make it yet)

 Alex Courouble





The shake-down hasn't finalized yet, so expect a few more Top People to attend.




Tentative Schedule




The purely speculative schedule of the 2016 Plumbers Git Together Micro Conference is as follows. 


 State of the Git Union - Junio Hamano

 Patch Management using git series - Josh Triplett

 A Maze of Scripts – Steve Rostedt

 Future Git - Open Discussion





Discussion notes




Steve says:

I have a handful of scripts that I use on top of git to perform
everyday tasks. I would like to propose a small session where people
can talk about what scripts they use on top of git, and see if we
can stop rewriting the wheel and see what duplicate tools people have
created for themselves, and perhaps get them upstream. Or perhaps
there's a killer script out there that people would like to upstream
even if nobody else duplicated it.


Pending shake-down results, another presentation might be added.



Note: The final schedule will be posted on the linuxplumberscong.org website on the Schedule page. Presentation slides will available on the Plumbers page by following the links to the abstracts. 



Notes from the sessions will be recorded using Etherpads (links will be provided). It is very important that each session has good notes.  All too often, if notes were not written down, the session might as well not have happened.




Contact




Proposal added by Jon Loeliger jdl@jdl.com

### 添付資料URL

掲載なし

## Live kernel patching（採用済み）

https://wiki.linuxplumbersconf.org/2016:live_kernel_patching

Live kernel patching




The main purpose of the Linux Plumbers 2016 Live kernel patching track is to involve all stakeholders in open discussion about remaining issues
that need to be solved in order to make Live patching of the Linux Kernel (more or less) feature complete.




Attendees / interested parties (seeded from live-patching ML, feel free to add yourself)


 Jiri Kosina

 Josh Poimboeuf

 Miroslav Benes

 Jessica Yu

 Petr Mladek

 Sergey Senozhatsky

 Li Bin

 Vojtěch Pavlík

 Steven Rostedt

 Rashika Kheria





Topic suggestions


 stacktrace reliability (might be obosolete at the time of LPC2016)

 safe location for patching kthreads (might be obsolete by the reliable check of stack traces)

 hybrid consistency model – details of implementation on top of reliable stack traces

 issues with porting KLP to non-x86 architectures

 handling of loadable modules

 dealing with GCC optimizations

 userspace tooling for creating and managing live patches

 data patching

 automated regression testing

 documentation: patch creation guidelines (for example, something like this)





Submit Proposal




Session proposals should be submitted through https://www.linuxplumbersconf.org/2016/ocw/events/LPC2016/proposals



The topics that will actually be submitted don't necessarily need to be strictly just the ones from the above list.




Contact




Proposal added by Jiri Kosina jikos@kernel.org, who is willing to act as a session leader for this miniconf.

### 添付資料URL

掲載なし

## PCI（採用済み）

https://wiki.linuxplumbersconf.org/2016:pci

PCI




The Linux Plumbers 2016 PCI track will focus on promoting discussions on
improvements for the Linux kernel PCI subsystem which include a status update
on PCI firmware interfaces (DT/ACPI) management, unification of PCI support
for multiple architectures, current developments in PCI virtualization and
finally brainstorming of implementation for recent PCIe features into the
kernel.




Tentative Schedule




The tentative schedule will provide an update on the current state of PCI
kernel subsystem followed by discussion of current issues in the proposed
topics with related workable solutions and finally a brainstorming sessions
on the integration of new PCI features into the kernel for different
architectures.



Topics that are under consideration for this microconf include (but
are not limited to):



 PCI resources allocation refactoring

 Consolidation of different arches resource allocation code into PCI core code

 Improvements/refactoring of the current resources allocation code (PCI_PROBE_ONLY, IORESOURCE_PCI_FIXED handling, PCIe Enhanced Allocation)

 FW/OS resource handover interface (BIOS PCI BARs allocation and related kernel policy for resources claiming)

 Bridges apertures sizing

 Resizeable BARs handling



 PCI/platform MSI integration in IRQ kernel core code

 Legacy drivers conversion to IRQ stacked domains

 Related ACPI implementation



 PCI FW↔kernel handover

 DT vs ACPI probing

 Unified HW quirks management

 DT PCI bridge hot plug



 PCI - virtualization

 Devices pass-through (MSI/IOMMU - VM isolation - IRQ remapping), VFIO related status update

 Firmware bindings for devices IOMMU/MSI mappings (DT bindings, ACPI IORT) and integration/management in the kernel



 Kernel integration of recent PCIe features

 ATS and IOMMUs

 (Non-Snooped) transactions - implications on host memory management



 PCI PM

 PCIe root ports power management







Key Attendees


 Bjorn Helgaas

 Lorenzo Pieralisi

 Marc Zyngier

 Will Deacon

 Alex Williamson

 Arnd Bergmann

 Benjamin Herrenschmidt

 Yinghai Lu

 Myron Stowe

 Joerg Roedel

 David Woodhouse

 Rafael Wysocki

 Keith Busch

 Jesse Barnes

 Rob Herring





Contacts




Bjorn Helgaas bhelgaas@google.com, Lorenzo Pieralisi lorenzo.pieralisi@arm.com

### 添付資料URL

掲載なし

## Power Management and Energy-awareness（採用済み）

https://wiki.linuxplumbersconf.org/2016:power_management_and_energy-awareness

Power Management and Energy-awareness




The Linux Plumbers 2016 Power Management and Energy-awareness track focuses on topics related to power management frameworks, task scheduling in relation to power/energy optimization, and platform power management mechanisms. The goal is to facilitate cross framework and cross platform discussions that can help improve power and energy-awareness in Linux.



Topic proposals may relate to (but not restricted to):


 Frequency/performance scaling (cpufreq).

 CPU idle states (cpuidle).

 Thermal management and scheduling under thermal constraints.

 ACPI power management.

 Device Tree representation of platform power management features.

 Energy-aware scheduling decisions (minimize energy consumption).

 Power domains management.

 Integration of system-wide PM (system suspend etc) with runtime PM.

 Measurement techniques and tools.





Key Attendees


 Rafael J. Wysocki

 Morten Rasmussen

 Kevin Hilman

 Peter Zijlstra

 Vincent Guittot

 Lorenzo Pieralisi

 Sudeep Holla

 Srinivas Pandruvada

 Len Brown

 Ulf Hansson

 Amit Kucheria

 Dietmar Eggemann

 Mike Turquette

 Juri Lelli

 Steve Muckle

 Patrick Bellasi





Proposed Topics (Tentative)




Please add topic proposals here:



 Linux Power Management Core Status Report (Rafael J. Wysocki rafael@kernel.org): Overview of the current status of high-level PM frameworks in the Linux kernel.

 Elimination of Timers from cpufreq (Rafael J. Wysocki rafael@kernel.org): Why timers in cpufreq are/were problematic and what to do about that.

  SoC idle: unifying hierarchical idle management for CPUs, clusters and IO devices.  (Kevin Hilman, Ulf Hansson)

  Workload Consolidation from User-Space - power and performance implications  (Len Brown)

  CFS Idle injection: benefit of doing synchronized idle injection in scheduler vs. play idle with kthreads  (Jacob Pan jacob.jun.pan@intel.com)

 Expanding ACPI compliance tests (Al Stone ahs3@redhat.com): Overview of recent additions to FWTS, discussion on getting more added

 Using scheduler-provided utilization information in intel_pstate (Srinivas Pandruvada srinivas.pandruvada@linux.intel.com)

 The right load/utilization signal for the right job (Dietmar Eggemann dietmar.eggemann@arm.com): Characteristics and shortcomings of load/utilization signals used in today's task scheduler and their potential use in other areas (e.g. pm subsystems) in the future.

 Definition of a kernel energy model (Sudeep Holla sudeep.holla@arm.com): Overview of kernel energy model proposal and its related DT bindings to describe energy model parameters.

 Improve utilization and load tracking in the scheduler (Vincent Guittot vincent.guittot@linaro.org: Limitations with the current implementation of load tracking : scaling invariance and propagation in task group and how we can improve the situation.

  Window-based load-tracking (Vikram Mulukutla vmulukut@quicinc.com, Saravana Kannan skannan@quicinc.com: Discuss RFC and compare window-based load tracking with PELT)

 Localising the system latency/throughput/power tunability surface (Patrick Bellasi patrick.bellasi@arm.com and Juri Lelli juri.lelli@arm.com): Discussion on enabling per-task tuning of kernel policies using a well defined user-space interface





Schedule




The schedule of the 2016 Power Management and Energy-awareness Plumbers Microconference will be announced later.




Discussion notes




Will be added here when available.




Contact




Runners: Rafael J. Wysocki rafael@kernel.org, Morten Rasmussen morten.rasmussen@arm.com, Kevin Hilman khilman@kernel.org

### 添付資料URL

掲載なし

## Testing & Fuzzing（採用済み）

https://wiki.linuxplumbersconf.org/2016:testing_fuzzing

Testing & Fuzzing Microconference




The Linux Plumbers 2016 Testing & Fuzzing track is focusing on advancing the current state of testing
in the Linux Kernel.




Proposed Schedule


 Applying mutation testing for testing RCU: Progress report - Iftekhar Ahmed

 Kselftest - Shuah Khan

 Machine readable ABI documentation for fuzzers - Sasha Levin

 syzkaller - Dmitry Vyukov

 Trinity - Dave Jones





Topic suggestions


 Code annotations

 Using existing ones better and introducing new annotations that would be used by multiple tools.



 Sanitizers

 How can we improve existing ones (Kasan, UBSAN)?

 Mainline out-of-tree sanitizers (KTsan).

 Work in progress updates on new sanitizers.



 Fuzzers

 How can we improve fuzzability of the kernel? More userspace hooks into internal code?

 Making the errors reproducible easily.



 Documenting the ABI in machine-readable format

 Fuzzers already do that, maybe it should live in the kernel? Standard format?

 ABI validation using traditional testing tools

 Less userspace breakage?



 Improving build/boot process

 Can we make 0day, kernelci.org, etc work together?



 How can we improve the current state of (the practically non-existant) -stable testing?





Proposed attendees (in alphabetical order)


 Dan Carpenter

 Quentin Casasnovas

 Dave Jones

 Shuah Khan

 Sasha Levin

 Vegard Nossum

 Emese Revfy

 Steven Rostedt

 Andrey Ryabinin

 Konstantin Serebryany

 Stephen Rothwell

 Fengguang Wu

 Iftekhar Ahmed





Discussion




Notes from the sessions will be recorded using Etherpads (links will be provided). A summary email will be sent to participants and LKML to continue the discussion online.




Contact




Proposal added by Sasha Levin alexander.levin@verizon.com

### 添付資料URL

掲載なし

## TPMs（採用済み）

https://wiki.linuxplumbersconf.org/2016:tpms

TPMs




The Linux Plumbers 2016 TPM track will focus on promoting discussions on
integrating TPM support into mainstream distributions, from boot through to
userspace. It will describe the issues that need to be rectified before TPMs
can be depended upon in general, along with why this is so important (helping
resist firmware-based attacks, increased protection of user keys and so on.



This will require discussion of kernel components along with early boot,
system-wide infrastructure and the tooling necessary to tie this into desktop
sessions.




Tentative Schedule




Topics that are under consideration for this microconf include (but
are not limited to):



 Getting TPM support into bootloaders

 Figuring out how to distribute known-good hashes

 Designing a robust mechanism for re-sealing secrets over upgrades

 Choosing a TPM 2.0 stack

 Cloud use cases for the TPM (Key Escrow for VPNaaS; Attestation to end customers; …)

 Implementing a Key Cache Manager (should this be in-kernel)?  Beyond a key cache, the manager also has to handle session swapping, regapping, getcapability virtualization, and perhaps priority and privilege.





Key Attendees


 Matthew Garrett

 Ken Goldman kgoldman@us.ibm.com





Interested in Attending


 Zaki Manian zaki@manian.org

 Jerry Snitselaar jsnitsel@redhat.com

 Jarkko Sakkinen jarkko.sakkinen@linux.intel.com

 Tadd Seiff tadd.seiff@wdc.com

 Philip Tricca philip.b.tricca@intel.com

 James Bottomley jejb@linux.vnet.ibm.com

 Peter Jones pjones@redhat.com

 Trevor Woerner twoerner@gmail.com

 Monty Wiseman monty.wiseman@ge.com





Contacts




Matthew Garrett mjg59@coreos.com



Ken Goldman kgoldman@us.ibm.com

### 添付資料URL

掲載なし

## Tracing（採用済み）

https://wiki.linuxplumbersconf.org/2016:tracing

Tracing




The Linux Plumbers 2016 Tracing track is focusing on the various tracing infrastructures in Linux today and how various people and companies use them.




Topic suggestions


 Building your own tools around existing kernel infrastructure

 Wishlist items for kernel tracing

 Issues that have been discovered using tracing

 New features in bpf/perf/ftrace

 Visualization frameworks

 Distributed tracing

 Always-on analytics and monitoring (including TCP/networking/storage)

 Tracing at large scale

 Hardware Tracing (including latest work in perf/CoreSight and trace decoders)

 Integration of trace buffering and aggregation tools





Possible interested attendees


 Arnaldo Carvalho de Melo

 Ingo Molnar

 Steve Rostedt

 Eric Dumazet

 Brendan Gregg

 Martin Lau

 Daniel Borkmann

 Jiri Pirko

 Brenden Blanco

 Mathieu Desnoyers

 David Ahern

 Sasha Goldshtein

 Suchakra Sharma

 Allan McAleavy

 Yonghong Song

 Wang Nan

 He Kuang

 Ming Lei

 Daniel Wagner

 Josh Poimboeuf





Talk proposals



Please feel free to add your name and proposal here.




Tentative Schedule




No schedule as of yet.



Note: The final schedule will be posted on the linuxplumberscong.org website on the Schedule page. Presentation slides will available on the Plumbers page by following the links to the abstracts. 




Discussion notes




Notes from the sessions will be recorded using Etherpads (links will be provided). It is very important that each session has good notes.  All too often, if notes were not written down, the session might as well not have happened.




Contact




Proposal added by Josef Bacik jbacik@fb.com and I will run this microconf along with Alexei Starovoitov ast@fb.com

### 添付資料URL

掲載なし

## Boot, Init, and Config（対象外（提案））

https://wiki.linuxplumbersconf.org/2016:boot_init_and_config

リンク先ページは未作成。

### 添付資料URL

掲載なし

## CPU isolation（対象外（提案））

https://wiki.linuxplumbersconf.org/2016:cpu_isolation

CPU isolation




Running a thread in a CPU without being disturbed by the kernel, here is the purpose of this young project.
Since the first bits got integrated in 3.10, the state has evolved and we may need a synchronization point
between contributors, users, …




Topics




Here is a possible list of topics to be exposed:


 Full dynticks

 Make the scheduler resilient to 0 Hz (in order to remove the 1hz)

 Optimization of context tracking





 Task isolation mode

 …





Possible interested attendees


 Christoph Lameter

 Chris Metcalf

 Ingo Molnar

 Luiz Capitulino

 Paul E. McKenney

 Peter Zijlstra

 Rik van Riel

 Steven Rostedt

 Thomas Gleixner

 Viresh Kumar





Contact




Proposal added by Frédéric Weisbecker <fweisbec at gmail dot com>

### 添付資料URL

掲載なし

## Development Tools（対象外（提案））

https://wiki.linuxplumbersconf.org/2016:development_tools

リンク先ページは未作成。

### 添付資料URL

掲載なし

## File and Storage Systems（対象外（提案））

https://wiki.linuxplumbersconf.org/2016:file_and_storage_systems

リンク先ページは未作成。

### 添付資料URL

掲載なし

## Graphics Mode Setting and Wayland（対象外（提案））

https://wiki.linuxplumbersconf.org/2016:graphics_mode_setting_and_wayland

リンク先ページは未作成。

### 添付資料URL

掲載なし

## Internet of Things（対象外（提案））

https://wiki.linuxplumbersconf.org/2016:internet_of_things

リンク先ページは未作成。

### 添付資料URL

掲載なし

## LLVM（対象外（提案））

https://wiki.linuxplumbersconf.org/2016:llvm

リンク先ページは未作成。

### 添付資料URL

掲載なし

## Networking（対象外（提案））

https://wiki.linuxplumbersconf.org/2016:networking

Networking




Welcome to the “Networking” microconference of Plumbers 2016. This track was named “Network Virtualization” in previous years. Upon request we are opening up the spectrum for this year. We have however decided to define a list of interesting networking topics that we want to focus on. We will therefore favour discussion topics which fall into the following list of topics:


 IPv6

 Network Virtualization

 Security





As in previous years, we are enforcing a hard limit of 3 slides per presentation to ensure focus on discussion over monologues.
Marketing pitches will not be tolerated and will be shut down. (If you feel the urge to put your company logo onto slides you are probably in the wrong room anyway)



If you are interested in presenting on this topic then please list yourself in the section “Proposed Topics” below.




Topics of Interest


 Network Virtualization

 Preparing the network stack for multi tenant container clusters

 Reducing the weight of network namespaces

 Improved VRF implementation - netns + ip rules? nft?

 Intelligent network processing at the data center edge

 Programmable data path (tc cls/act, eBPF, OVS, nft, …)

 Encapsulation, overlays, service chaining (VXLAN, Geneve, GUE, NVGRE, NSH, …)

 Hardware support - programming network hardware through the kernel

 Protocol development

 Hardware Accelerated I/O Virtualization

 Virtualizing accelerators for NFVs



 IPv6

 Performance

 How to treat IPv6 as an equal citizen? Consolidation of functionality: common IPv6/IPv4 routing? IPv6 support for underlays, 

 IPv6 in data centers - Can we solve the addressing problem

 Kernel gaps blocking further adoptions?

 Logical IPv6 overlays to provide network virtualization without encapsulation



 Security

 Scalable networking security policies for containers

 Securing applications in multi host data centers

 Encryption of overlays

 Hardware support







Attendees


 Who we want to see

 Kernel hackers

 NetDev crowd

 Network virtualization fanatics

 Community driven vendors

 Kernel and networking hungry DevOps

 People of the Banana Republic





 Specifically requesting attendance of: (please confirm if you can attend)

 [Please complete list if you think a major stakeholder is missing]

 Alexander Duyck (routing)

 Alexei Starovoitov & Daniel Borkmann (eBPF & tc)

 Cong Wang (tc)

 David S. Miller

 Eric Dumazet (Overall ninja)

 Eric W. Biederman (netns)

 Florian Westphal (netfilter)

 Jesper Dangaard Brouer (allocator)

 Jiri Benc (ipv6 underlay)

 Jiri Pirko (switchdev & tc)

 Hannes Frederic Sowa (IPv6)

 Jamal Hadi Salim (tc)

 Jesse Gross & John Linville (Geneve)

 Justin Pettit & Pravin Shelar (OVS)

 John Fastabend (hw offload)

 Nicolas Dichtel (VRF)

 Shrijeet Mukherjee (VRF deux)

 Pablo Neira Ayuso & Patrick McHardy (nftables)

 Simon Horman (IPVS & OVS)

 Steffen Klassert & Herbert Xu (XFRM)

 Stephen Hemminger (iproute2 & bridge)

 Tom Herbert (GUE & overlays)





 Confirmed attendees

 Please list yourself if you are interesting in participating

 …







Proposed Topics (Tentative)




List your proposed topics below:



 A new VRF proposal - Shrijeet Mukherjee





Schedule




The schedule will be announced closer to the event.




Discussion notes


 Priorities for no overlap:

 







Contact




Runners:


 Thomas Graf tgraf@suug.ch

 Tom Herbert tom@herbertland.com

### 添付資料URL

掲載なし

## Network offloading（対象外（提案））

https://wiki.linuxplumbersconf.org/2016:network_offloading

リンク先ページは未作成。

### 添付資料URL

掲載なし

## Open Hardware（対象外（提案））

https://wiki.linuxplumbersconf.org/2016:open_hardware

FPGA-based open source development producing real hardware capable of running Linux.




Attendees


 Jeff Dionne (http://uclinux.org founder, http://j-core.org founder, http://se-instruments.com CEO)

 Rich Felker (http://musl-libc.org maintainer, superh/jcore linux-kernel maintainer)

 Rob Landley (http://landley.net/toybox maintainer, http://j-core.org website admin)

 Andrew Waterman (Author of The RISC-V Instruction Set Manual see also http://www.eecs.berkeley.edu/~waterman/research.shtml)

 … please add your name and interest area





Pending


 Olof Kindgren (http://fossi-foundation.org director, LibreCores, OpenRISC, FuseSoC)





Proposed Topics


 System bringup (processor, memory, serial, compiler, libc, kernel, shell prompt.)

 IP issues (open licensing, patent expiration…)

 Fabbing an ASIC with Kickstarter

 Existing projects (jcore, RISC-V, LEON…)

 Bitstream development for software developers.

 Minimal hw devices needed for a new platform to get kernel up and running to shell prompt on serial console.

 Kernel expectations for hardware - how to design hw to work well with Linux device/driver/resource/irq/etc. models.

 Device tree hello world - minimal dt examples for real hw.





Contact


 Email rob@landley.net or j-core@j-core.org

### 添付資料URL

- http://www.cs.berkeley.edu/~waterman/papers/riscv-tr.pdf

## Performance and Scalability（対象外（提案））

https://wiki.linuxplumbersconf.org/2016:performance_and_scalability

Performance and Scalability




The Linux Plumbers 2016 microconference – Performance and Scalability track focuses on scalability, both upwards and downwards as well as up and down the stack. There are quite a few active projects and efforts of a wide range that aim at enhancing performance and scalability both in the Linux kernel and in user-space projects. In fact, one of the purposes of this forum is for developers from different projects to meet and collaborate – both kernel developers and researchers, doing more experimental work. After all, for the user to see good performance and scalability, all relevant projects must perform and scale well.



Because performance and scalability are very generic topics, this track is aimed at issues that are not addressed in other, more specific sessions, such as networking.



The structure will be similar to what was followed the previous years (2013, 2015): about 30 minutes per subject with discussion.




Topics




Here is a very raw and preliminary list of possible topics to be exposed.
If interested in other areas or any specific relevant topic, please just add it to the list:


 Pain points in the kernel (aka known large/generic bottlenecks).

 Range rw-locking.

 lockstat and related tools overhead.

 rcu

 efforts in VM

 …





Possible interested attendees


 Ingo Molnar 

 Paul E. McKenney

 Peter Zijlstra

 Waiman Long

 Tim Chen

 … many people





Contact




Open for anyone to take ownership (proposed by Davidlohr Bueso)

### 添付資料URL

掲載なし

## Persistent Memory（対象外（提案））

https://wiki.linuxplumbersconf.org/2016:persistent_memory

リンク先ページは未作成。

### 添付資料URL

掲載なし

## Real Time（対象外（提案））

https://wiki.linuxplumbersconf.org/2016:real_time

リンク先ページは未作成。

### 添付資料URL

掲載なし

## Scheduler workloads（対象外（提案））

https://wiki.linuxplumbersconf.org/2016:scheduler_workloads

The Linux scheduler is well tuned for database, web, and even desktop environments but does not work well for some other workloads.
Typically these workloads resort to cpu isolation and pinning, but this is really just avoiding the problem not fixing the core issues.
Some possible workloads for discussion:


 High Performance Computing

 Userspace Network stacks

 Latency sensitive applications





The problem with isolation is that the system is under utilized, has poor power management, and other control tasks can still interfere.
The issue is related to but not the same as real-time.




Possible interested attendees


 Stephen Hemminger

 … many people





Discussion




Notes from the sessions will be recorded using Etherpads (links will be provided). A summary email will be sent to participants and LKML to continue the discussion online.




Contact




Proposal added by Stephen Hemminger stephen@networkplumber.org

### 添付資料URL

掲載なし

## Security（対象外（提案））

https://wiki.linuxplumbersconf.org/2016:security

リンク先ページは未作成。

### 添付資料URL

掲載なし

## Thermal（対象外（提案））

https://wiki.linuxplumbersconf.org/2016:thermal

The Linux Plumbers 2016 thermal track focuses on finding solutions for kernel and userland changes for standardized thermal management in Linux systems. 




Key Attendees (Tentative)


 Eduardo Valentin 

 Rui Zhang (Intel)

 Srinivas Pandruvada (Intel)

 Javi Merino





Proposed Topics (Tentative)


 Sensor API: 

 Current sensor feature support: what is really in use. 

 interaction with other subsystems: IIO and hwmon, path to consolidation



 Userspace governors:

 What is currently existing

 What feature are controlled by userspace governors



 Effective userspace notification mechanism

 Existing mechanism for notification

 GAPs in notification needed to be covered

 Policy configuration and interaction with userspace 



 Cooling devices

 Userspace listeners for cooling device state transition

 Userspace cooling devices







Schedule




Discussion notes




This is a good place to record notes from your session.  All too often, if notes were not written down, the session might as well not have happened.




Contact




Runner: Eduardo Valentin edubezval@gmail.com

### 添付資料URL

掲載なし


# マイクロカンファレンス・ワークショップ全体枠（16件）

個別セッションとは別の全体枠。DescriptionはスケジュールのOne Line Summary。

## Audio Workshop

- URL: https://blog.linuxplumbersconf.org/2016/ocw/events/LPC2016/schedule.html#track-615
- 日時: Tuesday, November 1, 2016 9:00am – 5:00pm

Audio Workshop

## RDMA Workshop

- URL: https://blog.linuxplumbersconf.org/2016/ocw/events/LPC2016/schedule.html#track-609
- 日時: Tuesday, November 1, 2016 9:00am – 5:00pm

RDMA Workshop

## Wireless Workshop

- URL: https://blog.linuxplumbersconf.org/2016/ocw/events/LPC2016/schedule.html#track-603
- 日時: Tuesday, November 1, 2016 9:00am – 5:00pm

Wireless Workshop

## Containers

- URL: https://blog.linuxplumbersconf.org/2016/ocw/events/LPC2016/schedule.html#track-519
- 日時: Wednesday, November 2, 2016 9:30am – 12:30pm

The Linux Plumbers 2016 containers track is focusing on Linux containers, both kernel space and user space.

## Device Tree

- URL: https://blog.linuxplumbersconf.org/2016/ocw/events/LPC2016/schedule.html#track-555
- 日時: Wednesday, November 2, 2016 9:30am – 12:30pm

Device Tree

## FPGAs and Programmable Logic Devices

- URL: https://blog.linuxplumbersconf.org/2016/ocw/events/LPC2016/schedule.html#track-591
- 日時: Wednesday, November 2, 2016 2:00 – 5:00pm

The Linux Plumbers 2016 FPGAs and Programmable Logic Devices track intends to facilitate discussions surrounding the use of coherently attached accelerators, FPGAs, and other programmable devices (oh my!) as first class citizens on Linux.

## Live kernel patching

- URL: https://blog.linuxplumbersconf.org/2016/ocw/events/LPC2016/schedule.html#track-525
- 日時: Wednesday, November 2, 2016 2:00 – 5:00pm

The main purpose of the Linux Plumbers 2016 Live kernel patching track is to involve all stakeholders in open discussion about remaining issues that need to be solved in order to make Live patching of the Linux Kernel (more or less) feature complete.

## Power Management and Energy-awareness

- URL: https://blog.linuxplumbersconf.org/2016/ocw/events/LPC2016/schedule.html#track-537
- 日時: Thursday, November 3, 2016 9:30am – 12:30pm

The Linux Plumbers 2016 Power Management and Energy-awareness track focuses on topics related to power management frameworks, task scheduling in relation to power/energy optimization, and platform power management mechanisms.

## Testing and Fuzzing

- URL: https://blog.linuxplumbersconf.org/2016/ocw/events/LPC2016/schedule.html#track-561
- 日時: Thursday, November 3, 2016 9:30am – 12:29pm

The Linux Plumbers 2016 Testing & Fuzzing track is focusing on advancing the current state of testing in the Linux Kernel.

## Android/Mobile

- URL: https://blog.linuxplumbersconf.org/2016/ocw/events/LPC2016/schedule.html#track-579
- 日時: Thursday, November 3, 2016 2:00 – 9:00pm

The Linux Plumbers 2016 Android/Mobile track focuses on finding solutions for kernel changes and other plumbing related issues that Android and other mobile solutions make use of but are not yet upstream.

## Git

- URL: https://blog.linuxplumbersconf.org/2016/ocw/events/LPC2016/schedule.html#track-597
- 日時: Thursday, November 3, 2016 2:00 – 5:00pm

The Linux Plumbers 2016 Git track is focusing on the Future of Git.

## TPMs

- URL: https://blog.linuxplumbersconf.org/2016/ocw/events/LPC2016/schedule.html#track-585
- 日時: Friday, November 4, 2016 9:30am – 12:30pm

The Linux Plumbers 2016 TPM track will focus on promoting discussions on integrating TPM support into mainstream distributions, from boot through to userspace.

## PCI

- URL: https://blog.linuxplumbersconf.org/2016/ocw/events/LPC2016/schedule.html#track-531
- 日時: Friday, November 4, 2016 9:30am – 12:29pm

The Linux Plumbers 2016 PCI track will focus on promoting discussions on improvements for the Linux kernel PCI subsystem which include a status update on PCI firmware interfaces (DT/ACPI) management, unification of PCI support for multiple architectures, current developments in PCI virtualization and finally brainstorming of implementation for recent PCIe features into the kernel.

## Tracing

- URL: https://blog.linuxplumbersconf.org/2016/ocw/events/LPC2016/schedule.html#track-573
- 日時: Friday, November 4, 2016 2:00 – 4:59pm

The Linux Plumbers 2016 Tracing track is focusing on the various tracing infrastructures in Linux today and how various people and companies use them.

## Checkpoint/Restore

- URL: https://blog.linuxplumbersconf.org/2016/ocw/events/LPC2016/schedule.html#track-567
- 日時: Friday, November 4, 2016 2:00 – 5:00pm

The MC is about Checkpoint-Restore technology in Linux and everything about it

## TPMs Part II

- URL: https://blog.linuxplumbersconf.org/2016/ocw/events/LPC2016/schedule.html#track-627
- 日時: Friday, November 4, 2016 2:00 – 4:00pm

Further TPM discussions about PCRS et al.
