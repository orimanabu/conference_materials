# Linux Plumbers Conference 2013 全セッション一覧

出典: https://blog.linuxplumbersconf.org/2013/ocw/events/LPC2013/schedule

2013年はOCW形式。資料・動画ページから参照されたスケジュールの個別URL付き枠104件を収録。Descriptionは個別ページのAbstract原文。One Line Summaryは別フィールドに保持。資料URLは原記載を保持し、スケジュールに別のアーカイブURLがある場合はschedule_urlも収録。添付ファイル本体の取得・リンク有効性検査は実施していない。Wikiの採用済み・提案情報は補足に区別して収録し、個別セッション数には加算しない。WikiのTentative/Proposed等は原文通り。

セッション: 104件 / Descriptionあり: 104件 / 資料あり: 87件 / 資料項目: 124件

## 目次

1. [Advances in Validation of Concurrent Software](#session-1329)
2. [Capture and Replay Hardware Behaviour for Bug Reporting and Regression Testing](#session-1335)
3. [Using PREEMPT_RT Linux, More Than Just the Kernel](#session-1371)
4. [IVI and Wayland: why, what, how](#session-1611)
5. [Automotive diagnostics under Linux](#session-1101)
6. [Using BlueZ in the Automotive World](#session-1617)
7. [Updates on 'New Challenges for Linux Network Support'](#session-1269)
8. [Device Management in Automotive Infotainment](#session-1275)
9. [From netmap to virtualization through openvswitch](#session-1191)
10. [Open vSwitch - the good, the bad and the ugly](#session-1533)
11. [Open vSwitch: Hardware assisted filtering](#session-1293)
12. [OVS: from Open vSwitch to Open network Virtualization System](#session-1281)
13. [Contrail vRouter implementation and performance enhancement](#session-1575)
14. [Bare Metal Performance, Timekeeping, and Energy Efficiency](#session-1665)
15. [Binary Compatibility for Library Developers](#session-1347)
16. [File Mashup](#session-1365)
17. [Massively Multi-Core Systems or I Have Enough CPUs, Now What?](#session-1395)
18. [UEFI and ACPI for ARM](#session-1401)
19. [5s Boot Delivered](#session-1407)
20. [Upstart Roadmap](#session-1527)
21. [All Your Control Groups Are Belong To Us!](#session-1353)
22. [Hasslefree Boot Loading with Gummiboot](#session-1389)
23. [Lightweight Containers with nspawn](#session-1413)
24. [Follow-Up Boot Loader Spec](#session-1377)
25. [Zero Configuration File System Discovery and Mounting](#session-1359)
26. [TCP repair overview](#session-1197)
27. [Improving overlay network performance on existing hardware](#session-1059)
28. [Intel DPDK: Data Plane Development Kit](#session-1545)
29. [Network Service Headers in Linux](#session-1563)
30. [Locator/ID Separation Protocol in Linux](#session-1569)
31. [Improving Open vSwitch & Network Stack Integration](#session-1155)
32. [Integrating NICs with embedded switches in a Linux ecosystem](#session-1539)
33. [Linux as the foundation of a networking OS](#session-1635)
34. [Per CPU Atomics](#session-1695)
35. [Current status of lock elision in Linux](#session-1161)
36. [Full dynticks status](#session-1143)
37. [User-level threads....... with threads.](#session-1653)
38. [Scalability Issues in Linux Kernel](#session-1299)
39. [Userspace RCU library: new APIs and data structures](#session-1047)
40. [Runtime NUMA Reconfiguration for Virtual Machines](#session-1053)
41. [Large Memory Sysfs Scaling](#session-993)
42. [vmsplice with transparent huge pages](#session-1659)
43. [But What About Concurrent Updates?](#session-1017)
44. [Page Migration for IOMMU Enhanced Hardware](#session-1419)
45. [Readme.README: Optimizing Legibility on Mobile Devices](#session-1425)
46. [Secure Boot and The MOK Concept](#session-1341)
47. [Vampire Mice: How USB PM Impacts You](#session-1437)
48. [SR-IOV Virtual Function Lifetimes](#session-1515)
49. [PCI Device Reference Counting](#session-1509)
50. [PCIe Native Hotplug Integration with ACPI-Based Hotplug](#session-1497)
51. [ACPI-based Hotplug of PCI and Other Devices](#session-1173)
52. [Power Management Discussions and Lessons Learned: Converting legacy_pm to dev_pm_ops](#session-1167)
53. [PM Interfaces Between User Space and the Kernel](#session-1503)
54. [How to make the unified arch/x86/ tree of the Kernel work with clang - status, problems, roadmap](#session-1119)
55. [Using the Clang Integrated Assembler to compile the Linux Kernel](#session-1215)
56. [Variable Length Arrays in Structs (VLAIS)](#session-1221)
57. [Getting Android userland to build with clang](#session-1131)
58. [Building the Linux kernel and user space for the Hexagon DSP with LLVM](#session-1137)
59. [Unifying Secure Boot code and getting additions into UEFI](#session-1323)
60. [Hardening the kernel for Secure Boot](#session-1083)
61. [Kexec/Kdump and Secureboot](#session-1095)
62. [ACPI vs DT](#session-1557)
63. [Fedora/systemd on lxc status](#session-1593)
64. [Device namespace](#session-1623)
65. [On the road to LXC 1.0](#session-969)
66. [LXC and Android](#session-975)
67. [User namespace work](#session-987)
68. [State of CRIU (Checkpoint Restart In Userspace) and integration with LXC](#session-981)
69. [Let Me Contain That For You!](#session-1239)
70. [Containers control tools: can we unify those?](#session-1245)
71. [Use Cases for Containers in OpenStack](#session-1581)
72. [Common Display Framework](#session-1317)
73. [Media decode and composition: bridging the gap](#session-1605)
74. [Splitting DRM/KMS device nodes](#session-1107)
75. [State of the Art Debugging and Tuning Graphics Applications](#session-1449)
76. [Open Source Graphics on ARM](#session-999)
77. [Building Debian with LLVM/Clang](#session-1125)
78. [Linux and the Clang Static Analyzer](#session-1179)
79. [Bare metal switches and Linux](#session-1671)
80. [Detecting RCU Usage Bugs](#session-1311)
81. [Safety critical software: Would you let Linux drive your car?](#session-1305)
82. [KMS HWComposer issues, the Atomic Display Framework and other KMS Extentions](#session-1467)
83. [Dma-buf fences vs Android sync driver:](#session-1461)
84. [Phasing-out of the FBDEV API](#session-1473)
85. [ION / dma-buf allocators / Constraint solving](#session-1455)
86. [How will we Address Persistent Memory?](#session-1029)
87. [Copy offloading](#session-1035)
88. [Virtually Thin: Tuning XFS on Top of Device Mapper dm-thin](#session-1011)
89. [Sleeping disorders: Identifying unwanted wake-up sources](#session-1209)
90. [Improving Energy Efficiency On Asymmetric Multiprocessing Systems](#session-1251)
91. [packing, spreading and scheduling latency](#session-1257)
92. [Unifying Power Policies](#session-1263)
93. [Unified in-kernel IPC - KDBUS/Binder](#session-1479)
94. [Android Gadget driver vs ConfigFS Gadget driver](#session-1485)
95. [Android netfilter changes](#session-1491)
96. [SCSI midlayer scalability (Christoph Hellwig)](#session-1071)
97. [Shingled Drive Impace on File and Storage Stack](#session-1077)
98. [A dedicated cache for metadata?](#session-1041)
99. [New and Not Ready for Prime Time - Short Lightning Talks](#session-1113)
100. [Kicking it up a Level: Bringing the Trusted Platform Module into qemu](#session-1065)
101. [Fixing the filesystem freeze API](#session-1629)
102. [Platform Device VFIO](#session-1647)
103. [Virtio on Xen](#session-1689)
104. [EFI support in Xen – the current state of development](#session-1023)

<a id="session-1329"></a>
## 1. Advances in Validation of Concurrent Software

- セッション個別URL: https://blog.linuxplumbersconf.org/2013/ocw/sessions/1329
- Track: Refereed Talk
- 日時: Wednesday, September 18, 2013 10:50am

### Description

Validation of concurrent software that runs on a billion devices is challenging.  In this case, “one in a million” bugs will occur a thousand times.  Some projects have worked hard to meet this challenge.  The Linux kernel has added -next testing for pre-merge-window patches, automated randconfig build/boot/test of maintainer-tree commits, and the Trinity syscall-malice tool.  In addition, validation tools such as Coccinelle, lockdep, sparse, and valgrind have also helped squash a great many nasty bugs.  However, improvements reliability are inevitably consumed by increasingly aggressive usage, which of course exposes more problems, requiring fixes and more validation.  This talk will look at some ways that this validation might be carried out, ranging from even more aggressive testing to bleeding-edge verification techniques.

### One Line Summary

Audience: Aggresssive developers and testers.

### 添付資料URL

掲載なし

<a id="session-1335"></a>
## 2. Capture and Replay Hardware Behaviour for Bug Reporting and Regression Testing

- セッション個別URL: https://blog.linuxplumbersconf.org/2013/ocw/sessions/1335
- Track: Refereed Talk
- 日時: Wednesday, September 18, 2013 10:50am

### Description

Software stacks that interact with hardware such as Desktop power management, GNOME’s gvfs, or handling of multiple monitors and USB devices have traditionally been hard to debug. For a developer it is difficult to reproduce problems and write regression tests without having access to the problematic hardware.  Recently there has been some progress in this area with dbusmock and umockdev. This talk introduces the current state of the art and ends in a group discussion about the needs of particular projects: How can we cover other areas like network devices? Which kinds of hardware and software
projects would benefit most from recording the behaviour of real hardware and replaying it on developer’s machines and test suites?

### One Line Summary

You should be familiar with Linux userspace hardware handling (sysfs, /dev, uevents, D-BUS, etc.) and be interested in QA.

### 添付資料URL

掲載なし

<a id="session-1371"></a>
## 3. Using PREEMPT_RT Linux, More Than Just the Kernel

- セッション個別URL: https://blog.linuxplumbersconf.org/2013/ocw/sessions/1371
- Track: Refereed Talk
- 日時: Wednesday, September 18, 2013 10:50am

### Description

There are a few flavors of real-time Linux out in the world. One of the most popular is the PREEMPT_RT kernel, which is slowly making its way into mainline Linux. In the past, I have given presentations describing what PREEMPT_RT does to Linux to make it real-time. But using PREEMPT_RT, you need to know a lot more than just the kernel. A real-time OS requires understanding everything from the hardware you use, the kernel, as well as the applications that sit on top. This talk will be a crash course into how to set up your environment using PREEMPT_RT Linux, explaining things like priorities for interrupts, how softirq’s are done, using the priority inheritance mutexes, and other techniques required to avoid the gotcha’s that real-time can get you with.

### One Line Summary

This talk will be a crash course into how to set up your environment using PREEMPT_RT Linux, explaining things like priorities for interrupts, how softirq's are done, using the priority inheritance mutexes, and other techniques required to avoid the gotcha's that real-time can get you with.

### 添付資料URL

掲載なし

<a id="session-1611"></a>
## 4. IVI and Wayland: why, what, how

- セッション個別URL: https://blog.linuxplumbersconf.org/2013/ocw/proposals/1611
- Track: Automotive
- 日時: Wednesday, September 18, 2013 

### Description

The GENIVI LayerManager is a core component which ensures the accurate display of all UI components, similar in spirit to an X11 window manager.  Work is ongoing to move the LayerManager to a Wayland-based system, which involves creating new Wayland protocol to fit the LayerManager model.

This talk will present an overview of the problems being solved, how they are being solved and the progress being made, and the benefits it will eventually bring.

### One Line Summary

Summarising the current status of IVI on Wayland

### 添付資料URL

掲載なし


- 動画: [IVI and Wayland: why, what, how](http://www.youtube.com/watch?v=3bX2v6JvUNw)
<a id="session-1101"></a>
## 5. Automotive diagnostics under Linux

- セッション個別URL: https://blog.linuxplumbersconf.org/2013/ocw/proposals/1101
- Track: Automotive
- 日時: Wednesday, September 18, 2013 

### Description

Automotive diagnostics under Linux — what is missing, what are the next steps?
We need to identify the relevant diagnostic tool set from the kernel or from userland to bring out the kind of diagnostic information required to run a production automobile. What is the toolset? How do we integrate sensor data?

### One Line Summary

Automotive diagnostics under Linux -- what is missing, what are the next steps?

### 添付資料URL

掲載なし

<a id="session-1617"></a>
## 6. Using BlueZ in the Automotive World

- セッション個別URL: https://blog.linuxplumbersconf.org/2013/ocw/proposals/1617
- Track: Automotive
- 日時: Wednesday, September 18, 2013 

### Description

BlueZ is the official Linux Bluetooth Stack and has been used successfully both in the mobile and desktop world, but now it faces a new challenge: enter in the automotive world. During most of its lifetime BlueZ was developed with mobile use-case in mind which is quite different from the automotive needs. In this talk it will shown how BlueZ has been facing this and what we are planning for the future.

### One Line Summary

Making BlueZ fit for the automotive industry.

### 添付資料URL

掲載なし


- 動画: [Using BlueZ in the Automotive World](http://www.youtube.com/watch?v=FozB5m-8Ogg)
<a id="session-1269"></a>
## 7. Updates on 'New Challenges for Linux Network Support'

- セッション個別URL: https://blog.linuxplumbersconf.org/2013/ocw/proposals/1269
- Track: Automotive
- 日時: Wednesday, September 18, 2013 

### Description

Marcel Holtmann outlined in his New Challenges for Linux Network Support’ talk at LinuxCon Europe 2012 what needs to be done for the mobile and also for the automotive domain. This presentation will update what has happened since then (e.g. per application routing and statistics) and what the next steps are.

### One Line Summary

Update where we are with the 'New Challenges for Linux Network Support' work.

### 添付資料URL

掲載なし


- 動画: [Updates on ‘New Challenges for Linux Network Support’](http://www.youtube.com/watch?v=ulIqVzsC03g)
<a id="session-1275"></a>
## 8. Device Management in Automotive Infotainment

- セッション個別URL: https://blog.linuxplumbersconf.org/2013/ocw/proposals/1275
- Track: Automotive
- 日時: Wednesday, September 18, 2013 

### Description

udev is the defacto device management solution in Linux and manages the /dev nodes in a dynamic fashion and is completely implemented in the user space. udev is fundamentally based on the uevents interface implemented in the Linux kernel and provides userspace applications a consistent way of accessing the devices. The defacto implements works well in Desktop based systems. Automotive In vehicle Infotainment presents some unique challenges as well as opportunities in the way devices are managed. Most, if not In Vehicle Infotainment Systems have a well defined set of devices supported over the lifetime of the vehicle with smart devices being the only exception. udev’s rules based approach works well for most of the linux systems especially the desktop and the netbook variants. The intent of this proposal is to unravel the challenges in device management in an in-vehicle-infotainment context and explore the possibility of implementing a device manager, that is based on udev, in a much more efficient manner suited for automotive infotainment. This approach essentially aims to use a combination of static and dynamic device trees as well as providing a means of accomodating special devices through plugins. Further, the proposal also intends to investigate the implications of udev integrated with systemd.

### One Line Summary

Efficient device management for in vehicle infotainment with consideration for smart devices connectivity

### 添付資料URL

掲載なし


- 動画: [Device Management in Automotive Infotainment](http://www.youtube.com/watch?v=Unn52GH2zak)
<a id="session-1191"></a>
## 9. From netmap to virtualization through openvswitch

- セッション個別URL: https://blog.linuxplumbersconf.org/2013/ocw/proposals/1191
- Track: Network Virtualization I
- 日時: Wednesday, September 18, 2013 10:50am

### Description

In this talk we would like to report our experience with netmap and derived tools, and discuss how they can be adapted to fit in the Linux architecture and help in network virtualization (joint work with Giuseppe Lettieri, Vincenzo Maffione, and Michio Honda).

netmap was designed in 2011 as a simple OS-bypass solution for fast network I/O. It brought impressive performance improvements to basic packet processing applications.  Since then, we have explored extensions to the framework, trying to apply its performance
enhancement techniques to virtual switching and virtualization, and making it useful for more general applications within the OS.

Our netmap-based in-kernel software switch, called VALE, can connect multiple interfaces to the host stack and/or virtual machines at tens of millions of packets per second.  A VALE switch can now act as the datapath for OpenvSwitch, with significant speedups over the original datapath.

Using VALE as an interconnect between virtual machines helped us improve the network speed of qemu, reaching a throughput of millions of packets per second even with conventional NIC emulation.  Matching bare-metal speeds, we have made virtual machines a useful environment
for performance testing of the OS.

REFERENCES:
http://info.iet.unipi.it/~luigi/netmap/
http://info.iet.unipi.it/~luigi/vale/

### One Line Summary

Overview of netmap and derived tools and discussion on how they can help improving network virtualization.

### 添付資料URL

掲載なし


- 動画: [From netmap to virtualization through openvswitch](http://www.youtube.com/watch?v=j8ITtJy9z8o)
<a id="session-1533"></a>
## 10. Open vSwitch - the good, the bad and the ugly

- セッション個別URL: https://blog.linuxplumbersconf.org/2013/ocw/proposals/1533
- Track: Network Virtualization I
- 日時: Wednesday, September 18, 2013 11:10am

### Description

This talk covers some of the work we’ve done in the past year, both to the OVS kernel module and to the tuntap driver. The work includes feature enhancements such as dynamic GRE tunneling, L3-matching in the OVS kernel module, and DOS prevention. It also covers a number of performance tuning work to the tuntap driver. The talk concludes with a number of issues we’ve encountered when trying to retrofit some common Linux stack features to OVS.

### One Line Summary

This talk shares our experience with Open vSwitch from the past year, both as users and active developers.

### 添付資料URL

掲載なし


- 動画: [Open vSwitch](http://www.youtube.com/watch?v=BvN8YSBv-Zc)
<a id="session-1293"></a>
## 11. Open vSwitch: Hardware assisted filtering

- セッション個別URL: https://blog.linuxplumbersconf.org/2013/ocw/proposals/1293
- Track: Network Virtualization I
- 日時: Wednesday, September 18, 2013 11:30am

### Description

The nature of Open vSwitch requires uplinks to be placed in promiscuous mode. The exposure to all traffic on the network requires the switch to process a lot of possibly non relevant network traffic. This severely limits the performance of the current Open vSwitch data path.

Use of modern filtering capabilities such as for example found in 82599 based chips can be used to establish hardware filters and drop packets of no interest at the network card level before the switch ever has to process it. The filtering capabilities can also be used to distribute packets across cores to better suit the needs of a virtual switch.

As a long term goal, the current Open vSwitch interface can become the standard API for any programmable eSwitch.

### One Line Summary

Discussion around the use of hardware assisted filtering capabilities found in modern networking hardware to offload the filtering of packets to the hardware.

### 添付資料URL

掲載なし


- 動画: [Open vSwitch: Hardware assisted filtering](http://www.youtube.com/watch?v=C_E4xICTGyw)
<a id="session-1281"></a>
## 12. OVS: from Open vSwitch to Open network Virtualization System

- セッション個別URL: https://blog.linuxplumbersconf.org/2013/ocw/proposals/1281
- Track: Network Virtualization I
- 日時: Wednesday, September 18, 2013 11:50am

### Description

Today’s virtual network infrastructure solutions are flow based and not dynamically extensible. To deliver on the promise of SDN, network functions need to be capable of being delivered in the same automated and self-service manner as virtual machines. To meet this need networks require a greater degree of flexibility that will only come with an extensible dataplane.

In this talk we will explore how previous efforts (Netfilter, BPF, OVS, TC) approached the problem of extensibility and present a solution where extending and merging some of the concepts inside OVS leads to a much more extensible framework to satisfy the networking needs of virtualization in datacenters and clouds.

### One Line Summary

Explore ways to extend and merge existing networking mechanisms to address the needs of virtual network infrastructure

### 添付資料URL

掲載なし


- 動画: [OVS: from Open vSwitch to Open network Virtualization System](http://www.youtube.com/watch?v=NOKKoNbOQEU)
<a id="session-1575"></a>
## 13. Contrail vRouter implementation and performance enhancement

- セッション個別URL: https://blog.linuxplumbersconf.org/2013/ocw/proposals/1575
- Track: Network Virtualization I
- 日時: Wednesday, September 18, 2013 12:10pm

### Description

The Contrail vRouter is a kernel module that performs forwarding in the Linux kernel. It supports IP forwarding in VRFs and services such as mirroring,
NAT, multicast and load balancing. It provides a user space API with a high level abstraction, allowing the implementation to optimize the operations and deliver high performance. Packet forwarding is done using MPLS 
in GRE/UDP overlay tunnels, without requiring a separate gateway node to connect to the physical network. This talk will go over the implementation
of vRouter and changes required to achieve line rate forwarding on a 10G interface.

### One Line Summary

A look at the Contrail vRouter kernel module and steps taken to enhance forwarding performance

### 添付資料URL

掲載なし


- 動画: [Contrail vRouter implementation and performance enhancement](http://www.youtube.com/watch?v=xhn7AYvv2Yg)
<a id="session-1665"></a>
## 14. Bare Metal Performance, Timekeeping, and Energy Efficiency

- セッション個別URL: https://blog.linuxplumbersconf.org/2013/ocw/sessions/1665
- Track: Refereed Talk
- 日時: Wednesday, September 18, 2013 11:50am

### Description

Database, high-performance computing (HPC), and real-time developers have often asked: “Can’t you get the kernel out of the way?”. Recent adaptive-idle work permits just that: Linux is there when you need it, but if you follow a few simple rules, it is out of your way otherwise. This approach will provide bare-metal multicore performance and scalability to databases as well as to HPC and real-time applications. However, timekeeping requires that at least one CPU continue in high-power mode if any non-idle execution is in flight. Unfortunately, simple code to determine if all CPUs are idle is not scalable. This talk will give an overview of adaptive idle and outline some of the work to scalably determine whether the timekeeping CPU can go into low-power mode while avoiding any embarrassing time-skew incidents.

### One Line Summary

Audience: Developers, moderate expertise.

### 添付資料URL

掲載なし

<a id="session-1347"></a>
## 15. Binary Compatibility for Library Developers

- セッション個別URL: https://blog.linuxplumbersconf.org/2013/ocw/sessions/1347
- Track: Refereed Talk
- 日時: Wednesday, September 18, 2013 11:50am

### Description

The C and C++ standards define what constitutes a well-formed program. However, they steer clear of any issues related to ABI, binary compatibility, and even modern dynamic loading of libraries. Yet developers for libraries are often faced with understanding and dealing with those issues that are out-of-scope for the standards. Far from an impossible task, there are simple guidelines, checklists, tooling, and processes that can be relied upon to guarantee binary compatibility between releases. Using them, it is possible to maintain large libraries compatible with previous versions for a long time, across multiple releases.

### One Line Summary

This presentation will talk about those real-world problems and their solutions, heavily drawing upon the solutions used by both Qt and KDE. It will mostly focus on issues facing libraries on Linux, but will give hints also for cross-platform portability.

### 添付資料URL

掲載なし

<a id="session-1365"></a>
## 16. File Mashup

- セッション個別URL: https://blog.linuxplumbersconf.org/2013/ocw/sessions/1365
- Track: Refereed Talk
- 日時: Wednesday, September 18, 2013 11:50am

### Description

I will describe a VFS feature, that provides the ability to create a virtual file using parts and pieces of existing files. This feature enables the expansion of a file across filesystems, by mapping files on different filesystems into its address space.  We have a working prototype of this feature. A patch towards which is already submitted to the VFS community requesting comments. The RFC can be found at http://permalink.gmane.org/gmane.linux.file-systems/73179. In this presentation, I will outline the feature and our reference implementation.

### One Line Summary

This presentation will be of interest to system-administrators, kernel-developers, and any end users wanting to know more about this exciting feature. This presentation is aimed at seeking feedback to enrich the implementation and enhance the feature set.

### 添付資料URL

掲載なし

<a id="session-1395"></a>
## 17. Massively Multi-Core Systems or I Have Enough CPUs, Now What?

- セッション個別URL: https://blog.linuxplumbersconf.org/2013/ocw/sessions/1395
- Track: Refereed Talk
- 日時: Wednesday, September 18, 2013 2:00pm

### Description

NPS-400 is a 256 cores and 4,096 hardware threads SoC running SMP Linux built to process 400 Gbps of network traffic in a Linux user space application. Building Linux support for it touched on several architectural issues that are of interest to the Linux developer community at large as massively multi-core systems becomes more common place. This talk will focus on what happens when you have enough CPUs to dedicate a CPU per task and the balance shifts from scheduling CPU time slices to keeping the OS from interfering with a user process running on a dedicated CPU assigned solely to it. Topics covered include CPU isolation, IPI and work queue cross CPU interference and the dynamic tick feature.

### One Line Summary

The talk will be useful to engineers working to lower the latency and jitter of real time CPU bound applications and kernel developers interested in enabling Linux to serve these needs.

### 添付資料URL

掲載なし

<a id="session-1401"></a>
## 18. UEFI and ACPI for ARM

- セッション個別URL: https://blog.linuxplumbersconf.org/2013/ocw/sessions/1401
- Track: Refereed Talk
- 日時: Wednesday, September 18, 2013 2:00pm

### Description

As ARM and ARM64 move out of gadgets and into more PC like hardware, there has been an increasing demand for the same tools to manage these devices as already exists in x86 world. Linaro has been working on UEFI and ACPI on arm/arm64 hardware and this talk is a summary of the current status of the work and the direction that will be taken in the future. We will show the areas of change to the ARM platform boot sequence, change to the ACPI core code, and change to drivers to support ACPI.

### One Line Summary

The target audience for this talk is kernel developers interested in enterprise server type hardware controlled by UEFI and ACPI during its boot and run cycle, UEFI/ACPI kernel developers who have been working on x86 and interested in the changes required for arm/arm64 support for these standards, and finally those kernel developers who are working on arm/arm64 systems interested in UEFI/ACPI support.

### 添付資料URL

掲載なし

<a id="session-1407"></a>
## 19. 5s Boot Delivered

- セッション個別URL: https://blog.linuxplumbersconf.org/2013/ocw/proposals/1407
- Track: Boot and Core OS
- 日時: Wednesday, September 18, 2013 2:00pm

### Description

A few years ago Arjan Van de Ven presented a talk about the goal of booting Linux systems in 5s.  Today, we can achieve this with standard off-the-shelf hardware and mainstream distributions. This session will include a demo how to boot a comprehensive GNOME desktop within 5s, without any special hacks. We will look at the various components involved including the hardware, the BIOS, boot loader, kernel, initrd and init system, and what has improved over the past years to make this possible.

### One Line Summary

5s boots delivered, today.

### 添付資料URL

掲載なし


- 動画: [5s Boot Delivered](http://www.youtube.com/watch?v=M6e-ANgye30)
<a id="session-1527"></a>
## 20. Upstart Roadmap

- セッション個別URL: https://blog.linuxplumbersconf.org/2013/ocw/proposals/1527
- Track: Boot and Core OS
- 日時: Wednesday, September 18, 2013 2:20pm

### Description

This talk will present plans for new features we are considering for Upstart.

### One Line Summary

Outline plans for future Upstart development.

### 添付資料URL

- [slides](http://linuxplumbersconf.org/2013/ocw//system/presentations/1527/original/upstart-roadmap-plumbers-2013.pdf)（file）


- スケジュール掲載のアーカイブURL: https://blog.linuxplumbersconf.org/2013/ocw/system/presentations/1527/original/upstart-roadmap-plumbers-2013.pdf

- 動画: [Upstart Roadmap](http://www.youtube.com/watch?v=WAfXgAk53Mg)
<a id="session-1353"></a>
## 21. All Your Control Groups Are Belong To Us!

- セッション個別URL: https://blog.linuxplumbersconf.org/2013/ocw/proposals/1353
- Track: Boot and Core OS
- 日時: Wednesday, September 18, 2013 3:00pm

### Description

Recent systemd versions took over primary control of the control group hierachy, following a push from the cgroups maintainer to move to a unified tree. In this session we want to discuss the concepts and APIs systemd introduces to make the functionality available to other programs. We will discuss the reasons for the move, and what will happen in the next years.

### One Line Summary

Discussing the new cgroups userspace.

### 添付資料URL

掲載なし


- 動画: [All Your Control Groups Are Belong To Us!](http://www.youtube.com/watch?v=MSG4jW187Is)
<a id="session-1389"></a>
## 22. Hasslefree Boot Loading with Gummiboot

- セッション個別URL: https://blog.linuxplumbersconf.org/2013/ocw/proposals/1389
- Track: Boot and Core OS
- 日時: Wednesday, September 18, 2013 3:00pm

### Description

Boot loaders don’t have to be complicated programs embedding scripting languages and supporting plug-ins. Gummiboot is a minimal boot loader for EFI systems, that relies on as much standard EFI functionality as possible, exposing a user-friendly UI with very little code. In this session we want to discuss the current state of the project, what is still missing and where we want to take it. We’ll also give a quick demo. Finally we will discuss how Gummiboot integrates with Linux by passing performance data and implementing the Boot Loader Spec.

### One Line Summary

The Gummiboot Boot Loader

### 添付資料URL

掲載なし


- 動画: [Hasslefree Boot Loading with Gummiboot](http://www.youtube.com/watch?v=-d_G1cn9gJc)
<a id="session-1413"></a>
## 23. Lightweight Containers with nspawn

- セッション個別URL: https://blog.linuxplumbersconf.org/2013/ocw/proposals/1413
- Track: Boot and Core OS
- 日時: Wednesday, September 18, 2013 3:00pm

### Description

The systemd project includes a minimal container implementation in the systemd-nspawn tool. It’s useful to quickly boot up entire Linux distributions in a Linux container, independently of any complex solution like LXC or libvirt. In this session we’ll give an introduction into how to use this tool for quick container management and building, debugging, testing of software, with a special focus to what developers working on the plumbing layer of the OS need.

### One Line Summary

A quick introduction of systemd-nspawn for developers

### 添付資料URL

掲載なし


- 動画: [Lightweight Containers with nspawn](http://www.youtube.com/watch?v=PRpuzr7H3EQ)
<a id="session-1377"></a>
## 24. Follow-Up Boot Loader Spec

- セッション個別URL: https://blog.linuxplumbersconf.org/2013/ocw/proposals/1377
- Track: Boot and Core OS
- 日時: Wednesday, September 18, 2013 4:00pm

### Description

The Boot Loader Specification is an attempt to unify the kernel and OS discovery logic of the various boot loaders, and make sure that various local OS installations can share a single boot loader without hassles. In this session we want to discuss what the current status of the BLS is and what the next steps are.

### One Line Summary

Update on the Boot Loader Specification

### 添付資料URL

掲載なし

<a id="session-1359"></a>
## 25. Zero Configuration File System Discovery and Mounting

- セッション個別URL: https://blog.linuxplumbersconf.org/2013/ocw/proposals/1359
- Track: Boot and Core OS
- 日時: Wednesday, September 18, 2013 4:45pm

### Description

Modern GPT partition tables support tagging partitions with type UUIDs. In this session we want to discuss how systemd systems can make use of this, to automatically discover and mount/enable ESP, root or home file systems or swap devices, in order to improve robustness, and to make configuration of the boot loader simpler.

### One Line Summary

Automatically detecting Linux partitions via GPT type IDs

### 添付資料URL

掲載なし


- 動画: [Zero Configuration File System Discovery and Mounting](http://www.youtube.com/watch?v=NXHNbQ04AiI)
<a id="session-1197"></a>
## 26. TCP repair overview

- セッション個別URL: https://blog.linuxplumbersconf.org/2013/ocw/proposals/1197
- Track: Network Virtualization II
- 日時: Wednesday, September 18, 2013 2:00pm

### Description

TCP repair is the feature added into networking stack to make it possible to live-migrate a TCP connection. The talk is about the feature design, it’s known problems and possible usage scenarios.

### One Line Summary

A brief introduction to what TCP repair is.

### 添付資料URL

掲載なし


- 動画: [TCP repair overview](http://www.youtube.com/watch?v=IkH7p2jmxok)
<a id="session-1059"></a>
## 27. Improving overlay network performance on existing hardware

- セッション個別URL: https://blog.linuxplumbersconf.org/2013/ocw/proposals/1059
- Track: Network Virtualization II
- 日時: Wednesday, September 18, 2013 2:20pm

### Description

Over the past few years much of the focus in networking has moved from data centers to the cloud.  As a part of this transition we have moved from classical VLAN to more complex tunnel protocols such as VXLAN and NVGRE.  While these new protocols allow for greater scalability they also currently result in some performance drawbacks.

This talk will go over the current limitations of VXLAN and NVGRE offloads in terms of performance, will go over what steps have been taken to address some of these issues, and presents further steps that could be taken to further improve the performance of these protocols on existing hardware.

### One Line Summary

A look at performance issues found and addressed in VXLAN and NVGRE tunnel protocols, and steps we are exploring to further improve performance.

### 添付資料URL

掲載なし


- 動画: [Improving overlay network performance on existing hardware](http://www.youtube.com/watch?v=ou3TvvIJRGQ)
<a id="session-1545"></a>
## 28. Intel DPDK: Data Plane Development Kit

- セッション個別URL: https://blog.linuxplumbersconf.org/2013/ocw/proposals/1545
- Track: Network Virtualization II
- 日時: Wednesday, September 18, 2013 2:40pm

### Description

This talk will give an overview of what the Intel DPDK is and what it is not.

We will highlight some of the performance improvements the package uses to optimize for small packet performance. As well as discuss possible paths to integrate with existing management planes.

### One Line Summary

This talk will give an overview of what the Intel DPDK is and what it is not.

### 添付資料URL

掲載なし


- 動画: [Intel DPDK: Data Plane Development Kit](http://www.youtube.com/watch?v=Vaf1R2aG_4E)
<a id="session-1563"></a>
## 29. Network Service Headers in Linux

- セッション個別URL: https://blog.linuxplumbersconf.org/2013/ocw/proposals/1563
- Track: Network Virtualization II
- 日時: Wednesday, September 18, 2013 3:00pm

### Description

Network Service Headers are a means for routing traffic through multiple services by prespecifying a service path in the packet.  This is a key technology for Network Function Virtualisation, an industry move towards running network services in virtual machines.

http://datatracker.ietf.org/doc/draft-quinn-nsh/

### One Line Summary

The implementation of the new Network Service Headers IETF draft in both Linux and Open vSwitch.

### 添付資料URL

掲載なし


- 動画: [LISP and NSH in Linux and Open vSwitch](http://www.youtube.com/watch?v=AHZ-13hjto0)
<a id="session-1569"></a>
## 30. Locator/ID Separation Protocol in Linux

- セッション個別URL: https://blog.linuxplumbersconf.org/2013/ocw/proposals/1569
- Track: Network Virtualization II
- 日時: Wednesday, September 18, 2013 3:20pm

### Description

LISP is a network technology that decouples the location of an IP address from the interface itself, meaning the routing of packets becomes independent of the address  to which you send them.

This gives benefits in multihoming, mobility and traffic engineering across both wide area and datacentre networks.

http://datatracker.ietf.org/doc/rfc6830/

### One Line Summary

Locator/ID Separation Protocol implementation in Linux and Open vSwitch.

### 添付資料URL

掲載なし


- 動画: [LISP and NSH in Linux and Open vSwitch](http://www.youtube.com/watch?v=AHZ-13hjto0)
<a id="session-1155"></a>
## 31. Improving Open vSwitch & Network Stack Integration

- セッション個別URL: https://blog.linuxplumbersconf.org/2013/ocw/proposals/1155
- Track: Network Virtualization II
- 日時: Wednesday, September 18, 2013 3:40pm

### Description

Open vSwitch’s flow table model enables a significant degree of
fine-grained programmability as opposed to the coarser configurability
of more traditional functional blocks. However, as a mostly stateless
flow processor, it can be difficult to support features which require
per-packet state or deep inspection. In these cases, the functionality
provided by Netfilter and related subsystems is a better fit.

Since these two halves cover different use cases, they are
complementary rather than overlapping. However, they also need to be
better integrated to realize the full benefits of each. Frequently,
this comes down to issues of scoping and the exchange of metadata
between different components, which is a good starting point for
discussion.

### One Line Summary

How can we best combine the benefits of Open vSwitch and other kernel components like Netfilter in a single system?

### 添付資料URL

掲載なし


- 動画: [Improving Open vSwitch & Network Stack Integration](http://www.youtube.com/watch?v=rxcJ1LJu3Sc)
<a id="session-1539"></a>
## 32. Integrating NICs with embedded switches in a Linux ecosystem

- セッション個別URL: https://blog.linuxplumbersconf.org/2013/ocw/proposals/1539
- Track: Network Virtualization II
- 日時: Wednesday, September 18, 2013 4:00pm

### Description

Recently there has been ongoing work to improve the management of embedded bridges. In the simple cases the hardware can offload support for VEBs (virtual edge bridges) and expose network devices as virtual functions or network device queues. Recently, the FDB (forwarding database) has been exposed and can now be managed, but this only provides support for the most basic scenarios.

More advanced embedded switches can support VEPA (virtual edge port aggregator) modes, S-channels, port-vlans, Openflow, and multiple stacked components to name a few.

In this talk we will discuss current features the bridge management API exposes for hardware offloads and the logical models used to manage these devices. With the ground work covered we would then like to propose improvements to the existing APIs and discuss features that will be supported in upcoming hardware with the goal to better integrate embedded switching in the Linux ecosystem.

### One Line Summary

Discuss current and future switch features that are or will be embedded into the NIC as well as how these features could be managed in a Linux environment.

### 添付資料URL

掲載なし


- 動画: [Integrating NICs with embedded switches in a Linux ecosystem](http://www.youtube.com/watch?v=UzaEKd-OVGw)
<a id="session-1635"></a>
## 33. Linux as the foundation of a networking OS

- セッション個別URL: https://blog.linuxplumbersconf.org/2013/ocw/proposals/1635
- Track: Network Virtualization II
- 日時: Wednesday, September 18, 2013 4:20pm

### Description

The current landscape of proprietary Ethernet switches and e-switches limits the foundation of compute and storage clouds and Web 2.0 infrastructures. The “Generation of Open Ethernet” initiative requires a networking operating system that enables both invocation of independent development while leveraging the strength of an open source community..
Linux as the foundation for most of the commercial networking stacks is a nature candidate for driving both legacy switching and routing applications and the most recent innovation for overlay networks, flow steering and SW defined networks. A Fully Linux base open source switch OS, with the addition of a generic HW acceleration SW interface, will give  flexibility with the best performance while delivering higher value and differentiation and will provide a uniform OS for Ethernet switch/router boxes  as well as host virtualization embedded NIC switch/route(eSwitch) 
In this talk we will discuss on the following topics:
-	What is the correct way  to model both eSwitch and network legacy switch in the Linux kernel/ user model?
-	Open Vswitch vs. Linux bridge models?
-	How to provide a full .1Q support?
-	Best ways to reflect iptable ebtable configuration to HW?
-	What is the right model for running network protocols (e.g. xSTP, LACP, QCN) in the kernel/ user Linux architecture?

### One Line Summary

A look on the common dilemma for using Linux as the foundation of a networking OS

### 添付資料URL

掲載なし


- 動画: [Linux as the foundation of a networking OS](http://www.youtube.com/watch?v=LMAtwRTdSVE)
<a id="session-1695"></a>
## 34. Per CPU Atomics

- セッション個別URL: https://blog.linuxplumbersconf.org/2013/ocw/proposals/1695
- Track: Scaling
- 日時: Wednesday, September 18, 2013 

### Description

How Google implemented Per-CPU atomics in userspace.

[There are two sessions for this. One during the microconference, followed by a deeper discussion during a BoF]

### One Line Summary

Implementing Per CPU atomics for userspace

### 添付資料URL

- [slides](http://www.linuxplumbersconf.org/2013/ocw//system/presentations/1695/original/LPC - PerCpu Atomics.pdf)（file）


- 動画: [LPC  PerCpu Atomics](http://www.youtube.com/watch?v=dIpE2pKA9Wk)

- 動画: [PerCPU Atomics](http://www.youtube.com/watch?v=37tMyH_kxK0)
<a id="session-1161"></a>
## 35. Current status of lock elision in Linux

- セッション個別URL: https://blog.linuxplumbersconf.org/2013/ocw/proposals/1161
- Track: Scaling
- 日時: Wednesday, September 18, 2013 2:05pm

### Description

Multiple CPUs now support lock elision using hardware transactional memory to address lock scaling problems in existing software. Discuss the state of the Intel TSX implementation, including kernel, glibc, others.

### One Line Summary

Discuss the current status of lock elision in Linux

### 添付資料URL

- [slides](https://blog.linuxplumbersconf.org/2013/ocw/system/presentations/1161/original/tsx-plumbers13.pdf)（file）


- 動画: [Current status of lock elision in Linux](http://www.youtube.com/watch?v=nUTHUwaM72M)
<a id="session-1143"></a>
## 36. Full dynticks status

- セッション個別URL: https://blog.linuxplumbersconf.org/2013/ocw/proposals/1143
- Track: Scaling
- 日時: Wednesday, September 18, 2013 2:30pm

### Description

The full dynticks capability has been merged in 3.10. The support was still minimal at this stage and had a lot of limitations. Still it was a necessary opportunity to settle the base foundations and improve iteratively from there to remove its limitations gradually. A few aspect of full dynticks have improved since then but there is still a lot to do. This talk tries to dig into the details of what we’ll work on in the future.

### One Line Summary

Present state of full dynticks, current limitations and what remains to be done

### 添付資料URL

- [slides](http://www.linuxplumbersconf.com/2013/ocw//system/presentations/1143/original/dynticks-lpc.pdf)（file）


- スケジュール掲載のアーカイブURL: https://blog.linuxplumbersconf.org/2013/ocw/system/presentations/1143/original/dynticks-lpc.pdf

- 動画: [Full dynticks status](http://www.youtube.com/watch?v=G3jHP9kNjwc)
<a id="session-1653"></a>
## 37. User-level threads....... with threads.

- セッション個別URL: https://blog.linuxplumbersconf.org/2013/ocw/proposals/1653
- Track: Scaling
- 日時: Wednesday, September 18, 2013 3:05pm

### Description

Multi-threaded programming is hard.  Synchronous interfaces can help,
but typically require lighter-weight representation of concurrency
than a thread to implement efficiently.  Frustratingly, this leads to
a proliferation of both asynchronous and synchronous interfaces,
depending on the language used.

Over the past year we’ve been looking at how a uniform, performant,
synchronous programming model can be implemented across all of
Google’s core languages (C++, Java, Go, Python), while maintaining
compatibility with existing code.

In this talk I will discuss new kernel interfaces which allow the use
of regular threads in a co-operative fashion, with <200ns
context-switch times, and how new user-level primitives built on top of
this support.

### One Line Summary

New Scheduler support allowing cooperative scheduling on top of a a 1:1 threading model.

### 添付資料URL

- [slides](http://www.linuxplumbersconf.org/2013/ocw//system/presentations/1653/original/LPC - User Threading.pdf)（file）


- 動画: [User-level threads……. with threads.](http://www.youtube.com/watch?v=KXuZi9aeGTw)
<a id="session-1299"></a>
## 38. Scalability Issues in Linux Kernel

- セッション個別URL: https://blog.linuxplumbersconf.org/2013/ocw/proposals/1299
- Track: Scaling
- 日時: Wednesday, September 18, 2013 3:30pm

### Description

We will like to discuss a list of issues we have encountered in the Linux Kernel. Some relate to the bottlenecks we have encountered.  Examples include

1. LOCKSTAT scales poorly for system with large cpus.
2. Threads sharing a mm don’t scale well for futexes, memory management, and signal handling
3. Contention on directory entry and node when we are opening or unlinking large number of files within a directory.
4. Page reclaim don’t scale well as we have lots of cross cpu IPI for TLB flushing on a per page basis.  Page faults are bottlenecked in page clearing.

Others relate to the need of better framework, for example:

1. Framework for magic number tuning (e.g. batch size, hash table size, pool size) suitable for manual and auto tuning.
2. A better locality strategy. In many cases, we either have a global structure or a per cpu structure.
3. Need for a generalized tunable load balancing strategy/framework. Right now many subsystems have their own and cannot be tuned easily.  For example, we were recently working on balancing requests for machines with slow but large number of cpus. We need the balancing strategy to be more aggressive across cpus.

### One Line Summary

Scalability Issues in Linux Kernel

### 添付資料URL

- [slides](https://blog.linuxplumbersconf.org/2013/ocw/system/presentations/1299/original/linux_scalability_issues.pdf)（file）


- 動画: [Scalability Issues in Linux Kernel](http://www.youtube.com/watch?v=7BbsQ2duSGc)
<a id="session-1047"></a>
## 39. Userspace RCU library: new APIs and data structures

- セッション個別URL: https://blog.linuxplumbersconf.org/2013/ocw/proposals/1047
- Track: Scaling
- 日時: Wednesday, September 18, 2013 3:55pm

### Description

The Userspace RCU library had many improvements over the last year. Those have mainly covered non-blocking data structures such as queues, stacks. Experimental work is ongoing on RCU Judy Array, a cache-efficient trie. We have prototypes that allow storing and looking up range information efficiently.

The intent of this talk is to generate discussion on the various use-cases for those data structures, at the user-space and kernel levels.

### One Line Summary

Discussion of userspace RCU new APIs and use-cases

### 添付資料URL

- [slides](https://blog.linuxplumbersconf.org/2013/ocw/system/presentations/1047/original/lpc2013-urcu.pdf)（file）


- 動画: [Userspace RCU library: new APIs and data structures](http://www.youtube.com/watch?v=yOoWvdBFFRs)
<a id="session-1053"></a>
## 40. Runtime NUMA Reconfiguration for Virtual Machines

- セッション個別URL: https://blog.linuxplumbersconf.org/2013/ocw/proposals/1053
- Track: Scaling
- 日時: Wednesday, September 18, 2013 4:00pm

### Description

Currently, NUMA layout is determined at boot time and never changes again. This setup works for real hardware, but virtual machines are more dynamic: they could be migrated between different hosts, be suspended and resumed later (with other VMs now running on the same host), or could have their memory shuffled around by the hypervisor.

The end result is the NUMA layout the guest was booted with is probably not the layout it is running with, especially if that VM has been running for a long time.

pHyp (IBM’s closed source hypervisor that runs on Power servers) provides firmware interfaces that allow Linux, as the guest, to determine the runtime NUMA layout.

I would like to discuss methods for using runtime NUMA layout updates to reconfigure the page allocator, the potential for reallocating data structures that previously were assumed to be fixed, and how other hypervisors handle (or plan on handling) NUMA configuration for guests.

### One Line Summary

Allow physical memory to change which NUMA node it belongs to at runtime to improve
long running virtual machine performance.

### 添付資料URL

- [slides](https://blog.linuxplumbersconf.org/2013/ocw/system/presentations/1053/original/plumbers2013_runtime_numa.odp)（file）

<a id="session-993"></a>
## 41. Large Memory Sysfs Scaling

- セッション個別URL: https://blog.linuxplumbersconf.org/2013/ocw/proposals/993
- Track: Scaling
- 日時: Wednesday, September 18, 2013 4:05pm

### Description

The userspace sysfs interface for physical memory configuration is defined in drivers/base/memory.c and normally mounted at /sys/devices/system/memory.  A memoryX entry is created for each memory block in the system.  Before early 2011, there was a memory entry created for each memory section.  This quickly became a bottleneck and the interface was modified to have one entry for a block of memory sections.  However, this solution is also incomplete as systems continue to have larger and larger memory capacities and time to create the sysfs entries for each memory block continues to scale linearly with RAM capacity.  This can lead to very long boot times, on the order of hours, for systems with terabytes of RAM.

The goal of this session would be to discuss the design of a new sysfs memory configuration interface that takes constant time to initialize regardless of the memory size.  This would likely be an on-demand approach and impacts to userspace tools would need to be considered.

### One Line Summary

Scaling the userspace sysfs interface for physical memory configuration for large memory systems

### 添付資料URL

掲載なし


- 動画: [Large Memory Sysfs Scaling](http://www.youtube.com/watch?v=vifZKH2ZErA)
<a id="session-1659"></a>
## 42. vmsplice with transparent huge pages

- セッション個別URL: https://blog.linuxplumbersconf.org/2013/ocw/proposals/1659
- Track: Scaling
- 日時: Wednesday, September 18, 2013 4:10pm

### Description

QEMU is looking to use vmsplice to move pages from one process to another.  QEMU will use this to move a VM to an updated QEMU executable (security fix) with minimal downtime.  This approach flips pages without copying but as it uses pipe buffers it operates on 4K (or base PAGE_SIZE) pages only.

I would like to discuss solutions to improve this page flipping where one possible option is to change pipe buffers to support transparent huge pages.

### One Line Summary

vmsplice() could move (rather can copy) pages between processes, but performance would be greatly improved if this supported THP.

### 添付資料URL

掲載なし


- 動画: [vmsplice with transparent huge pages](http://www.youtube.com/watch?v=3ZVPpMgW7GQ)
<a id="session-1017"></a>
## 43. But What About Concurrent Updates?

- セッション個別URL: https://blog.linuxplumbersconf.org/2013/ocw/proposals/1017
- Track: Scaling
- 日時: Wednesday, September 18, 2013 4:15pm

### Description

Although RCU is fine with the occasional update, and can sometimes be useful in the face of a significant fraction of updates, it is less helpful in situations where pretty much all accesses are updates.  This talk will review a couple of special cases where update-friendly synchronization mechanisms exist in the hope of sparking discussions leading to more of them.

### One Line Summary

We need mechanisms that do for update-mostly workloads that what RCU does for read-mostly workloads.

### 添付資料URL

- [slides](https://blog.linuxplumbersconf.org/2013/ocw/system/presentations/1017/original/WhatAboutUpdates.2013.09.18a.pdf)（file）


- 動画: [But What About Concurrent Updates?](http://www.youtube.com/watch?v=KNyAJxK-jQM)
<a id="session-1419"></a>
## 44. Page Migration for IOMMU Enhanced Hardware

- セッション個別URL: https://blog.linuxplumbersconf.org/2013/ocw/sessions/1419
- Track: Refereed Talk
- 日時: Wednesday, September 18, 2013 3:00pm

### Description

Support for page migration in IOMMU subsystem is presented. This is essential for usage of memory from Contiguous Memory Allocator by IOMMU enhanced hardware. Adding a support for migration requires extensions to DMA framework and fault handling to IOMMU domain API. Migration can be realized by using utilizing code for anonymous pages by introducing a fake mm_struct. Use migrate callback delivered by a new file system dedicated. Other method is introducing a new page type (besides file, anon, and kms). All kinds of mechanism are discussed in detail. Moreover, methods for handling from simultaneous faults from both IOMMU and CPU during migration are described.

### One Line Summary

All kinds of mechanism are discussed in detail. Moreover, methods for handling from simultaneous faults from both IOMMU and CPU during migration are described.

### 添付資料URL

掲載なし

<a id="session-1425"></a>
## 45. Readme.README: Optimizing Legibility on Mobile Devices

- セッション個別URL: https://blog.linuxplumbersconf.org/2013/ocw/sessions/1425
- Track: Refereed Talk
- 日時: Wednesday, September 18, 2013 3:00pm

### Description

Mobile users’ attention is measured in “glance time”—because split seconds separate an attentive user from a distracted one, and a happy user from a fatigued one. Designing for readability involves far more than just increasing the text size; fortunately the mobile Linux stack makes it practical to deploy a product that is legible in adverse conditions and eye-pleasing when fully engaged.  This session will explore the research on UI readability, from driver distraction in IVI systems to high-DPI displays, then examine the current state of mobile Linux with regard to legibility. Finally, we will discuss concrete steps that app developers and platform vendors can take to improve their UI readability on phones, tablets, and other devices—with sacficing design originality.

### One Line Summary

App and mobile platform developers with UI/UX design experience welcome. Moderate technical experience expected.

### 添付資料URL

掲載なし

<a id="session-1341"></a>
## 46. Secure Boot and The MOK Concept

- セッション個別URL: https://blog.linuxplumbersconf.org/2013/ocw/sessions/1341
- Track: Refereed Talk
- 日時: Wednesday, September 18, 2013 4:00pm

### Description

I want to follow up on last year’s presentation of Matthew Garret’s presentation on Secure Boot in Linux, going into more detail on the MOK concept and explaining the state of the implementation, the acceptance of the Linux-specific parts by the hardware industry, political tensions, as well as remaining challenges, including how Secure Boot should interact with hibernation and kexec.

### One Line Summary

The content of this presentation will be technical, although not very heavy. The target audience is thus Linux developers, system administrators, but the content will also be accessible to experienced Linux users.

### 添付資料URL

掲載なし

<a id="session-1437"></a>
## 47. Vampire Mice: How USB PM Impacts You

- セッション個別URL: https://blog.linuxplumbersconf.org/2013/ocw/sessions/1437
- Track: Refereed Talk
- 日時: Wednesday, September 18, 2013 4:00pm

### Description

Did you know that your innocent USB mouse is actually a power-hungry battery-draining monster? This talk explores the impact of USB devices on platform power consumption, along with current (and future) tools to tame the monster. USB devices have always been battery eaters, keeping the whole platform in higher power states, including CPUs and chipsets. The aim of this talk is to educate users and developers on how USB devices impact their battery life, and start a discussion on how the Linux community can improve USB power management.

### One Line Summary

The first part of the talk targets users of all skill levels, and the second part of the talk will be a developer-focused discussion on creating new tools for crowd-sourced USB power management testing.  Systemd, udev, Linux distros, and kernel developers should participate in this conversation.

### 添付資料URL

掲載なし

<a id="session-1515"></a>
## 48. SR-IOV Virtual Function Lifetimes

- セッション個別URL: https://blog.linuxplumbersconf.org/2013/ocw/proposals/1515
- Track: ACPI/PM, PCI subsystems I
- 日時: Thursday, September 19, 2013 9:00am

### Description

Virtual Functions (VFs) currently must be removed by virtfn_remove() under the control of the Physical Function (PF) driver, not by the standard pci_stop_and_remove_bus_device().  This leads to special cases, e.g., omitting the sysfs “remove” file for VFs.  Creation of VFs is under the control of the PF driver and may always be special, but can we make the VFs less special afterwards?  What should we do with the VFs when the driver releases the PF?

### One Line Summary

Discussion of issues around enabling, disabling, and removing Virtual Functions

### 添付資料URL

- [slides](http://linuxplumbersconf.net/2013/ocw//system/presentations/1515/original/ACPI+PM and PCI Microconference.pdf)（file）


- スケジュール掲載のアーカイブURL: http://www.linuxplumbersconf.org/2013/ocw//system/presentations/1515/original/ACPI+PM and PCI Microconference.pdf

- 動画: [SR-IOV Virtual Function Lifetimes](http://www.youtube.com/watch?v=xsF5zYzGnWg)
<a id="session-1509"></a>
## 49. PCI Device Reference Counting

- セッション個別URL: https://blog.linuxplumbersconf.org/2013/ocw/proposals/1509
- Track: ACPI/PM, PCI subsystems I
- 日時: Thursday, September 19, 2013 9:25am

### Description

There are several open issues related to races and deadlocks when adding or removing devices or rescanning buses.  PCI currently doesn’t have a consistent strategy for managing data structure lifetimes.  Jiang Liu and Gu Zheng are improving PCI reference counting to address these problems.

### One Line Summary

Discussion of synchronization issues with device addition and removal

### 添付資料URL

- [slides](http://www.linuxplumbersconf.org/2013/ocw//system/presentations/1509/original/LPC 2013 PCI Locking.pdf)（file）


- 動画: [PCI Device Reference Counting](http://www.youtube.com/watch?v=4Zx5SFZy21s)
<a id="session-1497"></a>
## 50. PCIe Native Hotplug Integration with ACPI-Based Hotplug

- セッション個別URL: https://blog.linuxplumbersconf.org/2013/ocw/proposals/1497
- Track: ACPI/PM, PCI subsystems I
- 日時: Thursday, September 19, 2013 9:50am

### Description

Currently, the native PCIe hotplug (pciehp) and the ACPI-based PCI hotplug (acpiphp) are mutually exclusive, which means that if one of them registers a hotplug slot, the other one will not be allowed to handle hotplug signalling for the device in that slot.  That leads to problems on some systems and there seem to be reasons to remove that limitation and there’s a question how it should be done.

### One Line Summary

Discussion on how to integrate the native PCIe hotplug (pciehp) with ACPI-based PCI hotplug (acpiphp).

### 添付資料URL

- [slides](http://linuxplumbersconf.net/2013/ocw//system/presentations/1497/original/PC_PM_ACPI_uconf.pdf)（file）


- スケジュール掲載のアーカイブURL: https://blog.linuxplumbersconf.org/2013/ocw/system/presentations/1497/original/PC_PM_ACPI_uconf.pdf

- 動画: [PCIe Native Hotplug Integration with ACPI-Based Hotplug](http://www.youtube.com/watch?v=oCJOkoRvsSk)
<a id="session-1173"></a>
## 51. ACPI-based Hotplug of PCI and Other Devices

- セッション個別URL: https://blog.linuxplumbersconf.org/2013/ocw/proposals/1173
- Track: ACPI/PM, PCI subsystems I
- 日時: Thursday, September 19, 2013 10:15am

### Description

ACPI provides a consistent framework for implementing platform-specific out-of-band signaling of hotplug events, such as device hot-add and hot-remove and software-triggered device ejection methods.  In principle, hotplug events may be signaled for every device represented by an object in the ACPI namespace.  The Linux kernel has been supporting that interface for a long time, but until relatively recently it was focused on isolated use cases, such as PCI devices in separate slots etc.  However, the introduction of new hardware technologies allowing, for example, the entire CPU packages to be hot-removed and hot-added or the entire segments of PCI bus to be manipulated, like in the Intel Thunderbolt case, caused the focus to be moved towards supporting more complicated hotplug scenarios.  As a result, an effort is under way to consolidate the ACPI-based hotplug of devices and make it more capable of supporting the new use cases.  I’d like to outline what has been achieved already in that area and discuss the remaining challenges.

### One Line Summary

Discussion on the status of support for ACPI-based hotplug of devices in the Linux kernel

### 添付資料URL

- [slides](https://blog.linuxplumbersconf.org/2013/ocw/system/presentations/1173/original/PC_PM_ACPI_uconf.pdf)（file）


- 動画: [ACPI-based Hotplug of PCI and Other Devices](http://www.youtube.com/watch?v=XA7hUkj-aIQ)
<a id="session-1167"></a>
## 52. Power Management Discussions and Lessons Learned: Converting legacy_pm to dev_pm_ops

- セッション個別URL: https://blog.linuxplumbersconf.org/2013/ocw/proposals/1167
- Track: ACPI/PM, PCI subsystems I
- 日時: Thursday, September 19, 2013 10:40am

### Description

The Linux Kernel currently supports two different methods for drivers to register their power management interfaces. The older method is the Legacy PM ops which is still used by several drivers. The newer method is the dev_pm_ops. Legacy PM ops are not expandable, whereas dev_pm_ops can be extended to add new interfaces as needed when new devices with new power management capabilities get supported. Converting drivers from using Legacy PM ops into using the new dev_pm_ops will allow support for Legacy PM ops to be discontinued and allow older drivers to support new devices that could benefit from dev_pm_ops interfaces.

I am working on converting legacy dev_ops to dev_pm_ops starting at the class level and working my way through bus and driver levels.

Summary of observations and issues I have been encountering:

1. Inconsistent use of CONFIG_PM, CONFIG_SLEEP_PM and CONFIG_PM_RUNTIME in driver code. In some cases suspend and resume routines are defined in CONFIG_PM scope and not in CONFIG_PM_SLEEP scope. All of this leads to warning messages such as the one in this example:

tpm_tis / PM: Fix unused function warning for CONFIG_PM_SLEEP – http://lkml.indiana.edu/hypermail/linux/kernel/1208.1/00528.html

2. Legacy pm_ops suspend is invoked for PM_EVENT_SUSPEND and PM_EVENT_FREEZE. In the dev_pm_ops, PM_EVENT_FREEZE case is handled by the freeze ops. In several cases, adding a new freeze dev_ops is necessary when converting from legacy pm_ops to dev_pm_ops. That is the easy part, and in some cases, when a common routine handles suspend and freeze cases, a writing new suspend and freeze dev_ops that call into the existing common suspend and freeze is necessary. In addition to that freeze ops is executed only when CONFIG_HIBERNATE_CALLBACKS is enabled. For the most part, CONFIG_HIBERNATE_CALLBACKS is enabled, however, yet another thing that adds to the confusion to the inconsistent use of all these PM related config options.

3. For the most part, I have been able to find ways to hook into dev_pm_ops without changes existing data structures. However, I came across some cases that might more difficult and will need changes to enbale access to dev_pm_ops.

I would like to add this topic for discussion to:

1. Increase awareness of the conversion work that is in progress.

2. Discuss how to avoid further proliferation of the inconsistent use of the various PM config options.

3. Discuss how to avoid new legacy pm_ops usages.

4. Discuss how to hook into dev_pm_ops in cases that is not straight forward.

### One Line Summary

Discussion on current status, issues and challeges faced, and observations made in converting legacy pm_ops to dev_pm_ops

### 添付資料URL

- [slides](https://blog.linuxplumbersconf.org/2013/ocw/system/presentations/1167/original/Shuah_Khan_LPC_pm_ops.pdf)（file）


- 動画: [Power Management Discussions and Lessons Learned: Converting legacy_pm to dev_pm_ops](http://www.youtube.com/watch?v=Z7JyR8X9CY0)
<a id="session-1503"></a>
## 53. PM Interfaces Between User Space and the Kernel

- セッション個別URL: https://blog.linuxplumbersconf.org/2013/ocw/proposals/1503
- Track: ACPI/PM, PCI subsystems I
- 日時: Thursday, September 19, 2013 11:05am

### Description

In many cases when the kernel needs to make a decision related to power management (for example, which low-power state or what performance state of a device or processor to use in the given situation), it may benefit from knowing what the needs of user space regarding performance or capacity to process data or acceptable latencies are going to be in the near future.  However, interfaces available to user space for passing that kind of information seem to be inadequate and the question arises if they should be improved and, if so, in what way.

### One Line Summary

Discussion on interfaces to use for communicating the needs of user space related to power management to the kernel.

### 添付資料URL

- [slides](https://blog.linuxplumbersconf.org/2013/ocw/system/presentations/1503/original/PC_PM_ACPI_uconf.pdf)（file）


- 動画: [PM Interfaces Between User Space and the Kernel](http://www.youtube.com/watch?v=8jrfDjU31UM)
<a id="session-1119"></a>
## 54. How to make the unified arch/x86/ tree of the Kernel work with clang - status, problems, roadmap

- セッション個別URL: https://blog.linuxplumbersconf.org/2013/ocw/proposals/1119
- Track: LLVM I
- 日時: Thursday, September 19, 2013 9:00am

### Description

In this talk Jan-Simon Möller will give a short update on the state of the x86_64 side of things of the LLVMLinux project. 
We’ll discuss which and how or where the issues have been resolved. 
The focus will be on solving one or multiple current issues with the patchset and how to speed up the upstreaming work into the Linux Kernel or LLVM/Clang as well as the the roadmap.

### One Line Summary

Update on the current progress and solving/discussing current problems for x86_64/i586.

### 添付資料URL

- [slides](https://blog.linuxplumbersconf.org/2013/ocw/system/presentations/1119/original/unified_x86.pdf)（file）


- 動画: [How to make the unified arch/x86/ tree of the Kernel work with clang](http://www.youtube.com/watch?v=R_zCs238S3A)
<a id="session-1215"></a>
## 55. Using the Clang Integrated Assembler to compile the Linux Kernel

- セッション個別URL: https://blog.linuxplumbersconf.org/2013/ocw/proposals/1215
- Track: LLVM I
- 日時: Thursday, September 19, 2013 9:30am

### Description

The Clang Integrated Assembler (IA) is a powerful part of the Clang toolchain. Utilization of IA to build the Linux Kernel would allow us to leverage it’s diagnostics, speed and integration with Clang.

The presentation will briefly introduce IA and explain the difficulties currently faced when using IA with the Linux Kernel on ARM and x86.

After the presentation, we will discuss the possible solutions to the problems blocking the use of IA.

### One Line Summary

Using the Clang Integrated Assembler to build the Linux Kernel on x86/ARM.

### 添付資料URL

- [slides](https://blog.linuxplumbersconf.org/2013/ocw/system/presentations/1215/original/LPC2013.pptx)（file）


- 動画: [Using the Clang Integrated Assembler to compile the Linux Kernel](http://www.youtube.com/watch?v=YP2FXXYF8lw)
<a id="session-1221"></a>
## 56. Variable Length Arrays in Structs (VLAIS)

- セッション個別URL: https://blog.linuxplumbersconf.org/2013/ocw/proposals/1221
- Track: LLVM I
- 日時: Thursday, September 19, 2013 10:00am

### Description

Variable Length Arrays in Structs (VLAIS) are a gcc extension which is used in only a few places in the Linux Kernel. Although clang supports Variable Length Arrays (VLA), it doesn’t support VLAIS because it’s specifically disallowed by the C standard. This talk will discuss the issues surrounding VLAIS, what alternatives there are to VLAIS, and finish up with planning how to move forward in order to remove the use of VLAIS from the Linux Kernel.

### One Line Summary

VLAIS is a gcc extension which isn't supported by clang. The unnecessary use of VLAIS in the Linux Kernel prevents the kernel from being built with clang or any other C standard compliant compiler.

### 添付資料URL

- [slides](https://blog.linuxplumbersconf.org/2013/ocw/system/presentations/1221/original/VLAIS.pdf)（file）


- 動画: [Variable Length Arrays in Structs (VLAIS)](http://www.youtube.com/watch?v=aliQx0uDSX0)
<a id="session-1131"></a>
## 57. Getting Android userland to build with clang

- セッション個別URL: https://blog.linuxplumbersconf.org/2013/ocw/proposals/1131
- Track: LLVM I
- 日時: Thursday, September 19, 2013 10:30am

### Description

The session talks about problems encountered while porting Android userland to build with clang 3.3 as well as their solutions: A wrapper to make clang’s command line interface compatible with hardcoded assumptions about gcc based toolchains, various bug fixes and some code reorganizations.

After the presentation, we will discuss solutions for remaining problems with clang-built Android systems, what commonly seen problems need to be fixed in code and what can be fixed inside clang (e.g. adding support for more gcc extensions), and how to upstream clang-related changes to projects that don’t care about non-gcc projects.

### One Line Summary

Problems observed while making Android userland build with clang - and their solutions

### 添付資料URL

- [slides](https://blog.linuxplumbersconf.org/2013/ocw/system/presentations/1131/original/LP2013-Android-clang.pdf)（file）


- 動画: [Getting Android userland to build with clang](http://www.youtube.com/watch?v=A8uWt5NdhRM)
<a id="session-1137"></a>
## 58. Building the Linux kernel and user space for the Hexagon DSP with LLVM

- セッション個別URL: https://blog.linuxplumbersconf.org/2013/ocw/proposals/1137
- Track: LLVM I
- 日時: Thursday, September 19, 2013 11:00am

### Description

Problem: How do we accelerate adoption of LLVM and clang in environments where GCC has been the industry standard?
Our solution: Make LLVM a drop in replacement for GCC and build an entire Linux stack on the Hexagon DSP, from kernel to 55+ userspace packages.

We will talk about:
• Problems in compiling glibc with LLVM that we encountered and our solutions
• Problems yet to be solved in the compiler and toolset
• How compiling Linux user space with LLVM has been an excellent test suite for our compiler and tools

### One Line Summary

Linux on the Hexagon DSP with LLVM

### 添付資料URL

- [slides](http://140.211.166.22/2013/ocw//system/presentations/1137/original/LinuxPlumbers.pptx)（file）


- スケジュール掲載のアーカイブURL: https://blog.linuxplumbersconf.org/2013/ocw/system/presentations/1137/original/LinuxPlumbers.pptx

- 動画: [Building the Linux kernel and user space for the Hexagon DSP with LLVM](http://www.youtube.com/watch?v=N5-Z2FQ4qtI)
<a id="session-1323"></a>
## 59. Unifying Secure Boot code and getting additions into UEFI

- セッション個別URL: https://blog.linuxplumbersconf.org/2013/ocw/proposals/1323
- Track: Secure Boot
- 日時: Thursday, September 19, 2013 

### Description

Our two UEFI loaders currently have different approaches:  The Linux Foundation one installs a security protocol override, which intercepts the UEFI secure boot check and means the UEFI code itself links and loads the permitted executables.  The Red Hat/SUSE one loads permitted executables manually (via its own link loader), plus it has ssl key handling code whereas the Linux Foundation loader only does hashes.

We should discuss where we are unifying these two approaches and also where we’re at with persuading UEFI that the security protocol override is a valid approach which they should bless in the next revision of the UEFI standard.

### One Line Summary

Current state of unified secure boot code and plans for getting the architecture override into UEFI

### 添付資料URL

掲載なし


- 動画: [Unifying Secure Boot code and getting additions into UEFI](http://www.youtube.com/watch?v=yh8jKS2PAsE)
<a id="session-1083"></a>
## 60. Hardening the kernel for Secure Boot

- セッション個別URL: https://blog.linuxplumbersconf.org/2013/ocw/proposals/1083
- Track: Secure Boot
- 日時: Thursday, September 19, 2013 

### Description

The Secure Boot security model is based on the assumption that an OS cannot be booted unless all previously executed code is trusted. This requires that it be impossible for even a privileged user to execute code in ring 0, and so various kernel entry points must be hardened. Let’s talk about what they are and how to do that.

### One Line Summary

What changes do we need to make to the kernel to support the Secure Boot security model?

### 添付資料URL

掲載なし


- 動画: [Hardening the kernel for Secure Boot](http://www.youtube.com/watch?v=fDzAVksopYw)
<a id="session-1095"></a>
## 61. Kexec/Kdump and Secureboot

- セッション個別URL: https://blog.linuxplumbersconf.org/2013/ocw/proposals/1095
- Track: Secure Boot
- 日時: Thursday, September 19, 2013 

### Description

Kexec/kdump allows loading a kernel without going through BIOS. This creates issues with secureboot where only trusted entities run at priviliged level.

This brief presentation introduces what the problem is, what has been suggested and discussed so far and what I have implemented.

### One Line Summary

Discuss how to make kexec/kdump work with secureboot

### 添付資料URL

掲載なし


- 動画: [Kexec/Kdump and Secureboot](http://www.youtube.com/watch?v=d6fQnuJuXwg)
<a id="session-1557"></a>
## 62. ACPI vs DT

- セッション個別URL: https://blog.linuxplumbersconf.org/2013/ocw/proposals/1557
- Track: ACPI/PM, PCI subsystems II
- 日時: Thursday, September 19, 2013 

### Description

As Matthew Garrett said in an LKML post:

“ACPI and DT overlap in that they both provide a mechanism for enumerating non-enumerable devices, and both also provide a mechanism for attaching additional configuration data to devices (which may or may not be otherwise enumerable). There’s a sufficient overlap in functionality that at least one platform that’s traditionally been Device Tree (ARM) is also adding support for ACPI – there’s even ACPI-based ARM hardware on the market already.

Right now that’s a problem for us. The same hardware may end up shipped with either ACPI or DT-based firmware, and at the moment we’d need to either write two drivers or one driver with two glue layers. This is somewhat suboptimal."

Moreover, some systems are shipped with ACPI firmware whose ACPI tables do not contain all information necessary to enumerate and handle all devices, but at least in some cases there are known DT bindings for the hardware in question that could be used for this purpose.

We are going to discuss those problems and try to reach an agreement on the way to resolve them.

### One Line Summary

ACPI vs Device Tree - Moving Forward: Discussion on device enumeration methods

### 添付資料URL

掲載なし


- 動画: [ACPI vs DT](http://www.youtube.com/watch?v=xUiNjEU2Clo)
<a id="session-1593"></a>
## 63. Fedora/systemd on lxc status

- セッション個別URL: https://blog.linuxplumbersconf.org/2013/ocw/proposals/1593
- Track: Containers
- 日時: Thursday, September 19, 2013 

### Description

Systemd occasionally presents challenges to lxc container hosts and guests.

(Michael Warfield will be running this presentation)

### One Line Summary

Discuss plans to ensure systemd-based distros continue to work on lxc.

### 添付資料URL

掲載なし


- 動画: [Fedora/systemd on lxc status](http://www.youtube.com/watch?v=pLj5nvqU86I)
<a id="session-1623"></a>
## 64. Device namespace

- セッション個別URL: https://blog.linuxplumbersconf.org/2013/ocw/proposals/1623
- Track: Containers
- 日時: Thursday, September 19, 2013 

### Description

We (cellrox) have been working on bringing lightweight virtualization to
Linux-based mobile devices like Android (or other Linux-based devices with
diverse I/O) and want to share our solution: device namespaces.

Imagine you could run several instances of your favorite mobile OS or other
distributions in isolated containers, each under the impression of having
exclusive access to device drivers; Interact and switch between them within
a blink, no flashing, no reboot.

Device namespaces are an extension to existing Linux kernel namespaces that
brings lightweight virtualization to Linux-based end-user devices, primarily
mobile devices.  Device namespaces introduce a private and virtual namespace
for device drivers to create the illusion for a process group that it interacts
exclusively with a set of drivers. Device namespaces also introduce the
concepts of an “active” namespace with which a user interacts, vs “non-active”
namespaces that run in the background, and the ability to switch between them.

### One Line Summary

Present the device namespace implementation by cellrox and discuss upstreaming.

### 添付資料URL

掲載なし


- 動画: [Device namespace](http://www.youtube.com/watch?v=yGrTCMgBTOI)
<a id="session-969"></a>
## 65. On the road to LXC 1.0

- セッション個別URL: https://blog.linuxplumbersconf.org/2013/ocw/proposals/969
- Track: Containers
- 日時: Thursday, September 19, 2013 2:00pm

### Description

LXC upstream is currently doing a big development push to get LXC 1.0 out in early 2014.
We’re now half-way through the planned development time and a lot of exciting things have already been done with a whole lot more to come.

This talk will go through our goal for 1.0, what has been done so far and what else will be coming very soon.

### One Line Summary

Overview of what features to expect for LXC 1.0 and hints on how to help us get there.

### 添付資料URL

掲載なし


- 動画: [On the road to LXC 1.0](http://www.youtube.com/watch?v=O7JrxIQRWCw)
<a id="session-975"></a>
## 66. LXC and Android

- セッション個別URL: https://blog.linuxplumbersconf.org/2013/ocw/proposals/975
- Track: Containers
- 日時: Thursday, September 19, 2013 2:30pm

### Description

This talk will present some of the work I’ve been doing to get LXC to run natively on Android, allowing the user to then start a standard Linux distro in a container without impacting Android.

I’ll also cover doing it the other way around, where we instead run Android in a container on a standard Linux distro and why that makes developing new phone operating systems much easier.

### One Line Summary

Ever wanted to run Android in a container or run a Linux distro in a container on Android?

### 添付資料URL

掲載なし


- 動画: [LXC and Android](http://www.youtube.com/watch?v=XZWy2g9YY30)
<a id="session-987"></a>
## 67. User namespace work

- セッション個別URL: https://blog.linuxplumbersconf.org/2013/ocw/proposals/987
- Track: Containers
- 日時: Thursday, September 19, 2013 2:45pm

### Description

The goal in lxc is for unprivileged users to be able to safely create and use containers.

It will begin by explaining the user namespace functionality, the subuid shadow extensions, and the pieces already implemented and those needed in lxc to enable the unprivileged container use.

### One Line Summary

Current state and expected timeline for completion of unprivileged containers

### 添付資料URL

掲載なし

<a id="session-981"></a>
## 68. State of CRIU (Checkpoint Restart In Userspace) and integration with LXC

- セッション個別URL: https://blog.linuxplumbersconf.org/2013/ocw/proposals/981
- Track: Containers
- 日時: Thursday, September 19, 2013 3:15pm

### Description

The CRIU project implements ability to take a state-dump of running Linux processes and restore them later. This feature allows for such things as live-migration, fast kernel update, fast services start and others.

This talk is about to introduce CRIU to the audience by showing its basic features and discussing integration with LXC’s checkpoint/restart commands.

### One Line Summary

A tour over checkpoint-restore project features and plans followed by a discussion on integrating this with LXC.

### 添付資料URL

掲載なし


- 動画: [State of CRIU (Checkpoint Restart In Userspace) and integration with LXC](http://www.youtube.com/watch?v=d2DkDoz-Oh0)
<a id="session-1239"></a>
## 69. Let Me Contain That For You!

- セッション個別URL: https://blog.linuxplumbersconf.org/2013/ocw/proposals/1239
- Track: Containers
- 日時: Thursday, September 19, 2013 3:40pm

### Description

We’ll demonstrate a redesign of container management solution built for use at Google. The talk highlights our design motivation and some of the differences from existing container management solutions. We cover some lessons learnt during re-design that help us adapt to what we believe are the workloads of tomorrow:

- Larger machine (more cores and memory) which leads to more containers. This requires a level of concurrency and scalability that doesn’t exist today.
- Higher utilization of machines, being able to pack containers more tightly in order to use every last bit of resources available.
- Priority bands for containers: Having different guarantees for containers of different priorities (e.g.: paying customers vs. free customers, latency sensitive vs. batch)
- Hierarchical containment: There’s an increasing demand to run containers inside containers to manage resources allocated to a user by higher-level allocators e.g.: A container-based PaaS/IaaS letting users create subcontainers per db query type, nominate sacrificial loads, etc.

We hope that this talk would help guide the kernel and userspace containers support for future resource isolation needs.

### One Line Summary

Redesign of container management and its use at Google.

### 添付資料URL

- [slides](http://www.linuxplumbersconf.org/2013/ocw//system/presentations/1239/original/lmctfy (1).pdf)（file）


- 動画: [Let Me Contain That For You!](http://www.youtube.com/watch?v=UdZOSQHFmss)
<a id="session-1245"></a>
## 70. Containers control tools: can we unify those?

- セッション個別URL: https://blog.linuxplumbersconf.org/2013/ocw/proposals/1245
- Track: Containers
- 日時: Thursday, September 19, 2013 4:05pm

### Description

Hot Issues to sort out:

Now that the kernel supports both LXC and OpenVZ do we really need two different tool sets? If not, how should we unify the user visible container control plane.
	If we’re unifying the control plane, should we consider combining the projects? The containers we orchestrate are different, but they’re both using the same in-kernel functionality now.

Currently we have lxc tools (lxc) and OpenVZ tools (vzctl etc), plus libcgroup and systemd(?).

### One Line Summary

Now that the kernel supports both LXC and OpenVZ do we really need two different tool sets? If not, how should we unify the user visible container control plane.

### 添付資料URL

掲載なし


- 動画: [Containers control tools: can we unify those?](http://www.youtube.com/watch?v=ern3qWNKbD4)
<a id="session-1581"></a>
## 71. Use Cases for Containers in OpenStack

- セッション個別URL: https://blog.linuxplumbersconf.org/2013/ocw/proposals/1581
- Track: Containers
- 日時: Thursday, September 19, 2013 4:25pm

### Description

Discussion of how Rackspace uses OpenVZ containers and how we should expand nova for other container use cases

### One Line Summary

Use Cases for Containers in OpenStack

### 添付資料URL

掲載なし


- 動画: [Using OpenVZ to build a PaaS with Openstack’s Nova](http://www.youtube.com/watch?v=k0kyd0ozaYM)
<a id="session-1317"></a>
## 72. Common Display Framework

- セッション個別URL: https://blog.linuxplumbersconf.org/2013/ocw/proposals/1317
- Track: Graphics and Display
- 日時: Thursday, September 19, 2013 

### Description

The third version of the Common Display Framework has just been submitted for review. At the same time a new drm_bridge framework has been proposed by the Chromium team to solve issues that are also addressed by CDF.

This presentation will address the problems that CDF want to solve and try to establish a roadmap to get CDF merged in mainline. It will also address drm_bridge and see if the two proposals could be merged.

### One Line Summary

State of the Common Display Framework and roadmap to mainline

### 添付資料URL

- [slides](https://blog.linuxplumbersconf.org/2013/ocw/system/presentations/1317/original/20130709-lce-cdf.pdf)（file）


- 動画: [Common Display Framework](http://www.youtube.com/watch?v=E9NDch_0wKo)
<a id="session-1605"></a>
## 73. Media decode and composition: bridging the gap

- セッション個別URL: https://blog.linuxplumbersconf.org/2013/ocw/proposals/1605
- Track: Graphics and Display
- 日時: Thursday, September 19, 2013 

### Description

A lot of graphics hardware, particularly in non-desktop media-led cases such as set-top boxes, has dedicated hardware for both media decoding (e.g. MPEG4 to raw YUV), as well as 2D composition.  This hardware is much more capable than is exposed through general purpose APIs: for example, overlays give much higher-quality scaling and filtering than using EGL to do the media composition, also at higher performance.

Unfortunately the state of the art for a zerocopy media pipeline involves OpenMAX, passing physical addresses around through userspace, and a huge amount of platform-specific hacks.  This talk will cover the pipeline in general, the gaps and issues facing us, and some potential ways forward with both new and existing frameworks.

### One Line Summary

A look at the issues preventing better usage of media decode and 2D composition hardware

### 添付資料URL

- [slides](https://blog.linuxplumbersconf.org/2013/ocw/system/presentations/1605/original/lpc-media-presentation.pdf)（file）


- 動画: [Media decode and composition: bridging the gap](http://www.youtube.com/watch?v=x9RZ84R5g3g)
<a id="session-1107"></a>
## 74. Splitting DRM/KMS device nodes

- セッション個別URL: https://blog.linuxplumbersconf.org/2013/ocw/proposals/1107
- Track: Graphics and Display
- 日時: Thursday, September 19, 2013 

### Description

For GPUs we currently put DRM and KMS APIs into a single device node even though they’re mostly independent of each other. With render-nodes and modeset-nodes, we already have pending proposals to split DRM and KMS. These allow fine-grained access-control and shared nodes across multiple GPUs.

Furthermore, many devices provide modesetting functionality but no other advanced DRM features. Splitting KMS and DRM allows reusing KMS for these devices without requiring all the DRM code.

This discussion will highlight the ongoing work, show the benefits of multiple device nodes and allow for broad discussion how to proceed.

An outline of this discussion can be found on my blog:
http://dvdhrm.wordpress.com/2013/09/01/splitting-drm-and-kms-device-nodes/

### One Line Summary

Splitting DRM and KMS nodes to allow advanced access-control and sharing between subsystems.

### 添付資料URL

掲載なし


- 動画: [Splitting DRM/KMS device nodes](http://www.youtube.com/watch?v=j2Gr3JevG7E)
<a id="session-1449"></a>
## 75. State of the Art Debugging and Tuning Graphics Applications

- セッション個別URL: https://blog.linuxplumbersconf.org/2013/ocw/proposals/1449
- Track: Graphics and Display
- 日時: Thursday, September 19, 2013 

### Description

Fully open platforms have gained considerable credibility for demanding graphics applications over the last five years.  Gone are they days when people were surprised when a game would even run on a fully open stack.  Now, when an application doesn’t work, users demand to know when it will be fixed.  While the situation is vastly improved for end-users, the situation for developers remains in the stone age.  There is no OpenGL debugger.  There is no OpenGL profiler.  In spite of this, developers have managed to debug and tune their applications.  The first portion of this presentation will cover the current set of best practices employed by developers today.  The remainder will discuss future work to incrementally further enable developers.

### One Line Summary

Developers creating high-end graphics applications on open platforms have stone age tools, but some have learned to use them well.

### 添付資料URL

掲載なし


- 動画: [State of the Art Debugging and Tuning Graphics Applications](http://www.youtube.com/watch?v=ZfTG_4HS40k)
<a id="session-999"></a>
## 76. Open Source Graphics on ARM

- セッション個別URL: https://blog.linuxplumbersconf.org/2013/ocw/proposals/999
- Track: Graphics and Display
- 日時: Thursday, September 19, 2013 

### Description

In the last year we have gone from no opensrc graphics drivers on ARM (although a couple work-in-progress experimental efforts), to having support in mesa 9.2 for two adreno GPUs, plus vivante/lima/tegra following close behind[*].

[*] And I expect at least one of them in upstream mesa by the time we get to LPC

### One Line Summary

The progress of open source graphics on ARM in the last year.

### 添付資料URL

掲載なし


- 動画: [Open Source Graphics on ARM](http://www.youtube.com/watch?v=lllNQN6JzXs)
<a id="session-1125"></a>
## 77. Building Debian with LLVM/Clang

- セッション個別URL: https://blog.linuxplumbersconf.org/2013/ocw/proposals/1125
- Track: LLVM II
- 日時: Thursday, September 19, 2013 3:30pm

### Description

After extending Debian with two new kernels, Debian will soon be able to be built with a new free C, C++ and Objective-C compiler called Clang. Debian being one of the biggest distribution in term of number of packages (more than 18000), it represents an excellent test for a new key component like a compiler.

Based on LLVM, this compiler is now close to gcc on many different aspects (performances, build time, level of support of C and C++). 
This talk will present the current status of a clang-build version of Debian, the different issues faced, the next steps and evolutions.

The rebuild shows that around 12% of the software packaged in Debian are failing because of programming mistakes. Fixing all of them would require a huge effort.
Therefor, how can we make clang more know to make upstream fix their issues ?
How can we make distributions collaborate on this aspect ?

### One Line Summary

Rebuilding Debian with Clang

### 添付資料URL

- [slides](https://blog.linuxplumbersconf.org/2013/ocw/system/presentations/1125/original/clang-presentation.pdf)（file）


- 動画: [Rebuilding Debian with LLVM/Clang](http://www.youtube.com/watch?v=tZDe8Fj0sLg)
<a id="session-1179"></a>
## 78. Linux and the Clang Static Analyzer

- セッション個別URL: https://blog.linuxplumbersconf.org/2013/ocw/proposals/1179
- Track: LLVM II
- 日時: Thursday, September 19, 2013 4:00pm

### Description

Static analysis can be used to find semantic errors which otherwise might only show up during run-time. The Clang Static Analyzer was developed as a part of the LLVM project. Not only does the Clang Static Analyzer use the same parser and grammar as the clang compiler, but it uses the resulting Abstract Syntax Tree (AST) to do the analysis. It is also both configurable and extendable; it allows both checkers to be enabled/disabled as well as added. The LLVMLinux project has adapted Kbuild such that it will work with the Linux kernel.

After introducing and demoing the Clang Static Analyzer, this session will look at gathering ideas for custom Linux specific checkers.

### One Line Summary

The Clang Static Analyzer can be used to look for various specific issues in the Linux kernel. What other checkers can be added specifically for the Linux kernel?

### 添付資料URL

- [slides](https://blog.linuxplumbersconf.org/2013/ocw/system/presentations/1179/original/plumbers-pres.pdf)（file）


- 動画: [Clang Static Analyzer](http://www.youtube.com/watch?v=tJJb-7mMWFw)
<a id="session-1671"></a>
## 79. Bare metal switches and Linux

- セッション個別URL: https://blog.linuxplumbersconf.org/2013/ocw/proposals/1671
- Track: BoFs
- 日時: Thursday, September 19, 2013 4:50pm

### Description

En route to generating Cumulus Linux, the team had to contend with a variety of issues that needed to be handled to make the possibility of deploying a bare metal switch into a production data center deployment. The general premise is that Linux is a more than sufficient operating system for network gear as long as the network data path is hardware accelerated.

Along the way we made assumptions, patches and attempts to mold the path forward and which we wanted to generate some discussion around.

This BOF should be of interest to developers interested in talking about the following challenges
1. The ecosystem problem of defining a “bare-metal switch” and creating generic kernel parameters
2. The resource management problem of reconciling h/w tables with kernel structures and reporting failures consistently
3. Resolving consistency problems for interacting with the kernel i.e. netlink libraries, stp engines etc

### One Line Summary

Creating a bare-metal switch linux eco-system.

### 添付資料URL

掲載なし

<a id="session-1311"></a>
## 80. Detecting RCU Usage Bugs

- セッション個別URL: https://blog.linuxplumbersconf.org/2013/ocw/proposals/1311
- Track: BoFs
- 日時: Thursday, September 19, 2013 4:50pm

### Description

Catching RCU usage bugs

RCU was described to me once as, “You read the papers, and think you have gotten a hold of it. Then you make the mistake of reading code and wonder, what the heck did this McKenney guy do”. Users of RCU at this point depend mainly on a relatively small subset of developers to review it being used correctly. This BoF looks at how one can detect some usage issues at runtime, with the thought of (ab)using Intel’s non-canonical addressing and general protection fault handler to provide unlimited watchpoints.

This BoF should be of interest to folks who review RCU users, and the architecture people.

### One Line Summary

Runtime detection of RCU usage bugs such as pointer leaks

### 添付資料URL

- [slides](https://blog.linuxplumbersconf.org/2013/ocw/system/presentations/1311/original/detect-bof.pdf)（file）


- 動画: [Part 1 — Detecting RCU Usage Bugs](http://www.youtube.com/watch?v=O6J171fAdtc)

- 動画: [Part 2 — Detecting RCU Bugs](http://www.youtube.com/watch?v=oHaor2EsO9c)
<a id="session-1305"></a>
## 81. Safety critical software: Would you let Linux drive your car?

- セッション個別URL: https://blog.linuxplumbersconf.org/2013/ocw/proposals/1305
- Track: BoFs
- 日時: Thursday, September 19, 2013 4:50pm

### Description

There are traditional approaches to designing, writing, and testing software on which people depend for their lives. Software in the Linux ecosystem has never used any of these. Yet the breadth and volume of Linux deployments have demonstrated a level of reliability that encourages its use in safety-critical systems. Should our community push back or is this a challenge we should embrace?

### One Line Summary

Linux ecosystem software is increasingly being used in safety-critical applications: are we ready to trust human lives to the software we are developing?

### 添付資料URL

- [slides](http://www.linuxplumbersconf.net/2013/ocw//system/presentations/1305/original/LPC 2013 BoF Introduction.pdf)（file）


- スケジュール掲載のアーカイブURL: http://www.linuxplumbersconf.org/2013/ocw//system/presentations/1305/original/LPC 2013 BoF Introduction.pdf

- 動画: [Safety critical software: Would you let Linux drive your car?](http://www.youtube.com/watch?v=iw55CfWGLEo)
<a id="session-1467"></a>
## 82. KMS HWComposer issues, the Atomic Display Framework and other KMS Extentions

- セッション個別URL: https://blog.linuxplumbersconf.org/2013/ocw/proposals/1467
- Track: Android and Graphics
- 日時: Friday, September 20, 2013 

### Description

Various folks have been looking at implementing a KMS based HWComposer, but there are a number of issues that need to be resolved. This will be a round-table discussion between Android developers and key upstream community members to discuss the limitations of KMS and possible solutions. Greg Hackmann will also discuss the Atomic Display Framework, which Android developers have recently created to try to work around the current limitations of KMS.

Finally, we’ll have a brief discussion on other proposed KMS extentions:

Non-memory-backed pipeline sources
	Memory write-back
	Chained composers
	Non-linear pipelines (multiple encoders, …)
	Root plane that doesn’t span the whole display

### One Line Summary

Discussion around issues with a KMS based HWComposer, the Atomic Display Framework, and other KMS extentions

### 添付資料URL

掲載なし


- 動画: [KMS HWComposer issues, the Atomic Display Framework and other KMS Extentions](http://www.youtube.com/watch?v=3wFqXyslSQg)
<a id="session-1461"></a>
## 83. Dma-buf fences vs Android sync driver:

- セッション個別URL: https://blog.linuxplumbersconf.org/2013/ocw/proposals/1461
- Track: Android and Graphics
- 日時: Friday, September 20, 2013 9:00am

### Description

Round-table discussion between Android developers and key upstream community members on semantic differences between dma-buf fences (implicit) and Android sync driver (explicit), use cases each approach enables, if there is any common ground between the two implementations or if a hybrid approach is possible.

### One Line Summary

Discussion on dma-buf fences and Android sync driver

### 添付資料URL

掲載なし


- 動画: [Dma-buf fences vs Android sync driver](http://www.youtube.com/watch?v=rhNRItGn4-M)
<a id="session-1473"></a>
## 84. Phasing-out of the FBDEV API

- セッション個別URL: https://blog.linuxplumbersconf.org/2013/ocw/proposals/1473
- Track: Android and Graphics
- 日時: Friday, September 20, 2013 10:30am

### Description

There are current plans to phase out the fbdev api, and this round-table discussion between Android developers and key upstream community members will cover what issues this might bring up.

### One Line Summary

Discussion around how phasing out the fbdev api might affect Android

### 添付資料URL

掲載なし

<a id="session-1455"></a>
## 85. ION / dma-buf allocators / Constraint solving

- セッション個別URL: https://blog.linuxplumbersconf.org/2013/ocw/proposals/1455
- Track: Android and Graphics
- 日時: Friday, September 20, 2013 11:00am

### Description

Roundtable discussion between key Android developers and upstream community members on coming to consensus on ION-like functionality. Likely to cover arguments for/against centralized allocator vs device specific allocators, userland device constraint discovery, attach time in-kernel constraint solving, possible extentions to iommu/dma-api, and more.

### One Line Summary

Discussions on upstreaming ION-like functionality around dma-buf allocation and device constraint solving.

### 添付資料URL

掲載なし


- 動画: [ION / dma-buf allocators / Constraint solving](http://www.youtube.com/watch?v=8okc75j5cKk)
<a id="session-1029"></a>
## 86. How will we Address Persistent Memory?

- セッション個別URL: https://blog.linuxplumbersconf.org/2013/ocw/proposals/1029
- Track: File and Storage Systems I
- 日時: Friday, September 20, 2013 

### Description

Persistent memory devices present a directly addressable non-volatile storage medium.  Should we create a new file system to address this type of storage, modify existing ones, or maybe just treat them as block storage?  The aim of this talk is to present an overview of the available hardware and its characteristics to fuel a discussion on what approach to take with file system implementation.

### One Line Summary

Persistent memory devices are coming, so we need a plan on how to take advantage of them through the file system.

### 添付資料URL

- [slides](https://blog.linuxplumbersconf.org/2013/ocw/system/presentations/1029/original/Linux_Plumbers_PMem.pdf)（file）


- 動画: [How will we Address Persistent Memory?](http://www.youtube.com/watch?v=CAJy3dCgjDw)
<a id="session-1035"></a>
## 87. Copy offloading

- セッション個別URL: https://blog.linuxplumbersconf.org/2013/ocw/proposals/1035
- Track: File and Storage Systems I
- 日時: Friday, September 20, 2013 

### Description

Some layers of the file system and storage stack have the ability to efficiently copy data.  btrfs and ocfs2 have file-system specific ioctl()s and implementations.  Version 4.2 of the NFS protocol adds a file copying operation.  SCSI has a few copy offloading methods that are in use in the field.  This talk explores how we should offer a common subset of these features with a generic system call interface.

### One Line Summary

An interface to offload bulk data copying

### 添付資料URL

掲載なし


- 動画: [Copy offloading](http://www.youtube.com/watch?v=A_BB3Hf22xY)
<a id="session-1011"></a>
## 88. Virtually Thin: Tuning XFS on Top of Device Mapper dm-thin

- セッション個別URL: https://blog.linuxplumbersconf.org/2013/ocw/proposals/1011
- Track: File and Storage Systems I
- 日時: Friday, September 20, 2013 

### Description

The talk will show how to create a thin provisioned volume properly configured to be used by XFS filesystem and how to select a good data block size for the specific use case based on the physical device geometry.
It will also show the challenges involved in the process, like the possibility of data loss, usage of snapshots with large data block sizes, data fragmentation and journaling.

### One Line Summary

Setting up a file system over a dm-thin device, although easy, can have poor performance if not done properly and can even cause data loss. This talk will walk through the dm-thin device configuration to be used by xfs filesystem to achieve good performance and avoid data loss.

### 添付資料URL

掲載なし


- 動画: [Virtually Thin: Tuning XFS on Top of Device Mapper dm-thin](http://www.youtube.com/watch?v=4Bhjcdcc2Uw)
<a id="session-1209"></a>
## 89. Sleeping disorders: Identifying unwanted wake-up sources

- セッション個別URL: https://blog.linuxplumbersconf.org/2013/ocw/proposals/1209
- Track: Power-efficient Scheduling
- 日時: Friday, September 20, 2013 

### Description

Power Management engineers work hard at quiescing a system. But various hardware and software bits keep waking up the system, sometimes with no good reason.  The idle framework works independently in an opportunistic way. How to change it to collaborate with the scheduler in order to get better results ? This presentation will detail some of the common culprits and will present an improvement based on a collaboration between the idle framework and the scheduler.

### One Line Summary

Making the idle framework and the scheduler to collaborate

### 添付資料URL

掲載なし


- 動画: [Sleeping disorders: Identifying unwanted wake-up sources](http://www.youtube.com/watch?v=ATIndJpVpsc)
<a id="session-1251"></a>
## 90. Improving Energy Efficiency On Asymmetric Multiprocessing Systems

- セッション個別URL: https://blog.linuxplumbersconf.org/2013/ocw/proposals/1251
- Track: Power-efficient Scheduling
- 日時: Friday, September 20, 2013 

### Description

As battery-powered embedded devices move towards multicore processors, multicore energy efficiency is becoming critically important. To this end, ARM recently announced its big.LITTLE architecture, featuring a multicore chip with both high-performance processors and high-efficiency processors running a single instance of the Linux operating system. Prior work has shown the benefits of running performance-critical code on the high-performance processors, while confining other processing to the high-efficiency processors. This paper builds on this work by showing that for some important mobile workloads, pre-existing Linux-kernel tuning parameters originally designed for real time, high-performance computing, and SMP energy efficiency can further reduce the amount of non-performance-critical code running on the high-performance processors, resulting in energy efficiency gains in excess of 10%.

### One Line Summary

Energy-efficiency benefits of extended idle and RCU callback offloading.

### 添付資料URL

- [slides](https://blog.linuxplumbersconf.org/2013/ocw/system/presentations/1251/original/AMPenergy.2013.09.20a.pdf)（file）


- 動画: [Improving Energy Efficiency On Asymmetric Multiprocessing Systems](http://www.youtube.com/watch?v=0DRKwivMadY)
<a id="session-1257"></a>
## 91. packing, spreading and scheduling latency

- セッション個別URL: https://blog.linuxplumbersconf.org/2013/ocw/proposals/1257
- Track: Power-efficient Scheduling
- 日時: Friday, September 20, 2013 

### Description

Spreading tasks on CPUs is the default policy to improve performance by minimizing resources sharing and scheduling latency but the final behavior doesn’t always follow the rule. This talk will describe how some information like the power domain topology or the wakeup latency can be used in the scheduler to improve power efficiency and scheduling latency. Based on the results of an implementation, the talk will explain when it’s worth to pack tasks but also why it can sometimes deserve the power efficiency of the system.

### One Line Summary

When packing tasks can improve power efficiency and scheduling latency

### 添付資料URL

- [slides](https://blog.linuxplumbersconf.org/2013/ocw/system/presentations/1257/original/LPC-packing-spreading-v0.2.pdf)（file）


- 動画: [Packing, spreading and scheduling latency](http://www.youtube.com/watch?v=bDxu8jSdDv0)
<a id="session-1263"></a>
## 92. Unifying Power Policies

- セッション個別URL: https://blog.linuxplumbersconf.org/2013/ocw/proposals/1263
- Track: Power-efficient Scheduling
- 日時: Friday, September 20, 2013 

### Description

The Linux kernel currently has separate uncoordinated policies for scheduling, frequency scaling and idle state selection even though they all affect each other. Changing the policy of one may have a negative impact on the others. At the same time, power management on next generation platform seems to require functionality which is not present in the current frameworks or in the scheduler.
This talk will cover a proposal for unification of the power policies the form of a power scheduler and platform specific power driver.

### One Line Summary

Integrating and extending the existing power management frameworks with the scheduler.

### 添付資料URL

- [slides](https://blog.linuxplumbersconf.org/2013/ocw/system/presentations/1263/original/Unifying_Power_Policies_LPC.pdf)（file）


- 動画: [Unifying Power Policies](http://www.youtube.com/watch?v=dBn9PNrMa6A)
<a id="session-1479"></a>
## 93. Unified in-kernel IPC - KDBUS/Binder

- セッション個別URL: https://blog.linuxplumbersconf.org/2013/ocw/proposals/1479
- Track: Android
- 日時: Friday, September 20, 2013 

### Description

With binder in the staging directory, and work being done on KDBUS, it would be nice to consolidate these implementations. This round-table discussion between Android devs and key upstream community members will investigate if KDBUS is sufficient to be used by Android to replace the in-kernel binder driver.

### One Line Summary

Discussions around KDBUS and if it is sufficient to replace the in-kernel binder driver

### 添付資料URL

掲載なし


- 動画: [Unified in-kernel IPC](http://www.youtube.com/watch?v=yRvHq-HTJ7g)
<a id="session-1485"></a>
## 94. Android Gadget driver vs ConfigFS Gadget driver

- セッション個別URL: https://blog.linuxplumbersconf.org/2013/ocw/proposals/1485
- Track: Android
- 日時: Friday, September 20, 2013 

### Description

There are a number of different and overlapping gadget drivers. Android has its own, but maintainers wanted to see the functionality merged via the ConfigFS gadget. This round-table discussion between Android developers and key upstream community members will discuss what work is remaining to provide sufficient functionality to allow Android to migrate to an upstream solution.

### One Line Summary

Discussions around what the ConfigFS gadget driver needs to replace the Android Gadget driver

### 添付資料URL

掲載なし


- 動画: [Android Gadget driver vs ConfigFS Gadget driver](http://www.youtube.com/watch?v=mN9iF6ag778)
<a id="session-1491"></a>
## 95. Android netfilter changes

- セッション個別URL: https://blog.linuxplumbersconf.org/2013/ocw/proposals/1491
- Track: Android
- 日時: Friday, September 20, 2013 

### Description

This roundtable discussion between Android developers and key upstream community members will cover the netfilter changes Android requires, what portions could be merged upstream and if Android could adapt to other possible solutions.

### One Line Summary

Discussions on getting Android netfilter changes merged upstream

### 添付資料URL

- [slides](http://www.linuxplumbersconf.org/2013/ocw//system/presentations/1491/original/Android's Netfilter Changes - LPC 20130920.pdf)（file）


- 動画: [Android netfilter changes](http://www.youtube.com/watch?v=Fi_iyaF7Gw0)
<a id="session-1071"></a>
## 96. SCSI midlayer scalability (Christoph Hellwig)

- セッション個別URL: https://blog.linuxplumbersconf.org/2013/ocw/proposals/1071
- Track: File and Storage Systems II
- 日時: Friday, September 20, 2013 

### Description

This sessions is to discuss improvements in scalability for higher  IOPS and CPU counts in the scsi midlayer.  Both incremental  improvements to the existing code as well as the conversion to the  block multiqueue tree are covered.

### One Line Summary

SCSI midlayer scalability work done by Christoph Hellwig

### 添付資料URL

掲載なし


- 動画: [SCSI midlayer scalability (Christoph Hellwig)](http://www.youtube.com/watch?v=abDTx9XdKn4)
<a id="session-1077"></a>
## 97. Shingled Drive Impace on File and Storage Stack

- セッション個別URL: https://blog.linuxplumbersconf.org/2013/ocw/proposals/1077
- Track: File and Storage Systems II
- 日時: Friday, September 20, 2013 4:45am

### Description

Christoph Hellwig and storage vendors will review the proposed T10 work that will impact how storage and file system can get the most out of the new shingled (aka SMR) drives.

### One Line Summary

Shingled drives need changes to file and storage to get the best efficiency.

### 添付資料URL

掲載なし


- 動画: [Shingled Drive Impace on File and Storage Stack](http://www.youtube.com/watch?v=upvxl7YgeUQ)
<a id="session-1041"></a>
## 98. A dedicated cache for metadata?

- セッション個別URL: https://blog.linuxplumbersconf.org/2013/ocw/proposals/1041
- Track: File and Storage Systems II
- 日時: Friday, September 20, 2013 6:00am

### Description

Currently streaming IO can easily evict metadata from the page cache, unless file systems either bind pages to memory or set up their own buffers. 
It can be shown that the object disk layout (hash directories) used by distributed file systems such as FhGFS, Lustre and Cephfs is not optimally handled by underlying file systems (i.e. ext4, xfs and btrfs). Introducing a dedicated configurable generic metadata cache would solve this and other metadata cache issues.

### One Line Summary

A dedicated metadata cache would help distributes file systems and in general should reduce per file system efforts to cache metadata.

### 添付資料URL

- [slides](https://blog.linuxplumbersconf.org/2013/ocw/system/presentations/1041/original/meta-cache.pdf)（file）


- 動画: [A dedicated cache for metadata?](http://www.youtube.com/watch?v=N_bZOGZAb-Y)
<a id="session-1113"></a>
## 99. New and Not Ready for Prime Time - Short Lightning Talks

- セッション個別URL: https://blog.linuxplumbersconf.org/2013/ocw/proposals/1113
- Track: File and Storage Systems II
- 日時: Friday, September 20, 2013 6:25am

### Description

Keep time open for ideas and proposals that are new and need feedback or discussion.

### One Line Summary

Reserved time to discuss new ideas in an open conversation.

### 添付資料URL

- [slides](http://www.linuxplumbersconf.org/2013/ocw//system/presentations/1113/original/ext4 transparent decompression.pdf)（file）


- 動画: [New and Not Ready for Prime Time](http://www.youtube.com/watch?v=y-uZFPk2Mj0)
<a id="session-1065"></a>
## 100. Kicking it up a Level: Bringing the Trusted Platform Module into qemu

- セッション個別URL: https://blog.linuxplumbersconf.org/2013/ocw/proposals/1065
- Track: Virtualization
- 日時: Friday, September 20, 2013 

### Description

Every server with an Intel chip ships with a Trusted Platform Module (TPM).  Virtualization of this device is one of the last remaining barriers to adoption of qemu virtualization for security conscious customers. The vTPM device will be a significant tool that can be used, among other functionalities, to verify that the Trusted Computing Base (TCB) of a guest has not been tampered. This can be used in conjunction with a host TPM to verify that the hypervisor also has not been tampered. Combine this with remote attestation, and cloud users will be able to remotely verify that the TCB of both their guests and host have not maliciously been altered with malware or other means.

### One Line Summary

The Design and Implementation of a virtual Trusted Platform Module in qemu

### 添付資料URL

掲載なし


- 動画: [Kicking it up a Level: Bringing the Trusted Platform Module into qemu](http://www.youtube.com/watch?v=cmZFKEyQUcU)
<a id="session-1629"></a>
## 101. Fixing the filesystem freeze API

- セッション個別URL: https://blog.linuxplumbersconf.org/2013/ocw/proposals/1629
- Track: Virtualization
- 日時: Friday, September 20, 2013 

### Description

In a previous Linux Plumbers Conference (2011) we discussed the
serious problems of the Linux kernel’s filesystem freeze functionality
(among them: there is no check API, which means there is no easy way
to know whether a filesystem is frozen or not; it is possible to
umount a frozen filesystem despite the fact that there is no API to
thaw an unmounted filesystem; it is not possible to freeze
multi-device filesystems such as BTRFS; it does not play well with DM
snapshot), which make it the weak link in any storage snapshot/backup
solution that uses it to put the filesystems in a quiesced state
before doing its job. In virtualization environments where the
filesystem freeze operation is often controlled by virtualization
management software through a guest agent things can easily go awry.

In this session we would like to provide an overview of the current
work to fix filesystem freeze and discuss integration issues with
QEMU and libvirt’s storage stack.

### One Line Summary

Overview of the current work to fix the filesystem freeze API

### 添付資料URL

掲載なし


- 動画: [Fixing the filesystem freeze API](http://www.youtube.com/watch?v=7uM6cZY6P9o)
<a id="session-1647"></a>
## 102. Platform Device VFIO

- セッション個別URL: https://blog.linuxplumbersconf.org/2013/ocw/proposals/1647
- Track: Virtualization
- 日時: Friday, September 20, 2013 

### Description

As of recently we have the VFIO framework in Linux which gives us a nice abstraction layer for PCI devices, so that any user space program (like QEMU) can drive a PCI card, should the machine administrator allow this.

We want to allow the same for platform devices – devices that are not driven by PCI. You can commonly find these types of devices in embedded hardware, such as ARM or PowerPC SoCs.

There are a few complications going along with platform devices, such as device enumeration, hardware constraints and device tree bindings.

This discussion is about outstanding issues of platform device VFIO, where they are, how they can be solved and ultimately how to rule the world.

### One Line Summary

Passing non-PCI devices into guests and allow for user space device drivers

### 添付資料URL

- [slides](http://www.linuxplumbersconf.org/2013/ocw//system/presentations/1647/original/VFIO Platform.pdf)（file）


- 動画: [Platform Device VFIO](http://www.youtube.com/watch?v=qRITZ8OPF98)
<a id="session-1689"></a>
## 103. Virtio on Xen

- セッション個別URL: https://blog.linuxplumbersconf.org/2013/ocw/proposals/1689
- Track: Virtualization
- 日時: Friday, September 20, 2013 

### Description

Can we use virtio on Xen?

### One Line Summary

Discussing VirtIO on Xen

### 添付資料URL

掲載なし


- 動画: [Virtio on Xen](http://www.youtube.com/watch?v=FcVDHBQInxA)
<a id="session-1023"></a>
## 104. EFI support in Xen – the current state of development

- セッション個別URL: https://blog.linuxplumbersconf.org/2013/ocw/proposals/1023
- Track: Virtualization
- 日時: Friday, September 20, 2013 

### Description

EFI is a very hot topic now because more and more hardware vendors are providing some new systems with it. The long term goal is a total removal of legacy BIOS support. It means that Xen should be prepared for that case. A lot of work has been done, however, there are still some areas to be improved. For example, there is no support for configurations where GRUB2 is involved on EFI platform. There is no relevant EFI Xen support in upstream Linux Kernel, either. This presentation will show the current state of Xen EFI support development. There will be some info what was done and what should be done. Finally, most difficult tasks should be discussed by LPC attendees (probably overall approach towards Xen EFI support in Linux Kernel and some implementation details). Due to ongoing development some issues may arise and some issues may be solved, which means that this topic could be aligned to the current situation at the time of LPC 2013.

### One Line Summary

EFI support in Xen – the current state of development

### 添付資料URL

- [slides](https://blog.linuxplumbersconf.org/2013/ocw/system/presentations/1023/original/efi_support_in_xen_the_current_state_of_development_20130910.final.dk.pdf)（file）


- 動画: [EFI support in Xen – the current state of development](http://www.youtube.com/watch?v=-XFyPo7PacM)
# Wiki Topics 補足

2013年はOCW形式。資料・動画ページから参照されたスケジュールの個別URL付き枠104件を収録。Descriptionは個別ページのAbstract原文。One Line Summaryは別フィールドに保持。資料URLは原記載を保持し、スケジュールに別のアーカイブURLがある場合はschedule_urlも収録。添付ファイル本体の取得・リンク有効性検査は実施していない。Wikiの採用済み・提案情報は補足に区別して収録し、個別セッション数には加算しない。WikiのTentative/Proposed等は原文通り。

## Android（採用済み）

https://wiki.linuxplumbersconf.org/2013:android

Android Microconference




Much progress has been made upstreaming support for Android in the Linux kernel. During this Android microconference we'd like to continue working through the current Android patchset and plan for future Android related changes. The hope is that we'll be able to start getting front of the problem.



The conference will not be a standard presentation/speaker style, but a focused and active discussion between key players in the upstream kernel community and Google Android developers, focusing on the specific constraints Android faces, and how to resolve them in an acceptible upstream fashion.



This session was broken into two, this Android specific one, and another session focusing on Android Graphics, which can be found here:


 http://wiki.linuxplumbersconf.org/2013:android_and_graphics



 Etherpad for this session: http://etherpad.osuosl.org/lpc2013-android





Overview of schedule:


 2:00 - 2:05:        Intro & Who’s who

 2:05 - 2:35:        Binder/KDBUS

 2:35 - 3:15:        Netfilter

 3:15 - 3:30:        Tea Break

 3:30 - 4:00:        Android Gadget/ConfigFS Gadget

 4:00 - 4:45:        Overflow/Head to the pub/Taxi to Airport





Binder/KDBUS


 Quick overview of kdbus & Greg’s ambitious plans

 Kay’s concerns regarding dbus focus.

 Any identified issues/blockers to running binder over kdbus?

 Next steps?

 Links:

 kdbus

 https://code.google.com/p/d-bus/source/browse/kdbus.txt

 https://github.com/gregkh/kdbus

 http://lwn.net/Articles/551969/



 Binder:

 https://lwn.net/Articles/466304/

 http://lists.linuxfoundation.org/pipermail/ce-android-mainline/2012-January/000042.html









Netfilter


 Components, history, needed functionality

 idletimer

 qtaguid

 quota2



 idletimer upstreaming concerns?




    Worried about abi w/ “Rename INTERFACE to LABEL in netlink notification”


 nfacct + owner as replacement for qtaguid?

 excessive iptables rules?

 manipulating iptables during normal operation?

 interface stats?



 What to do about quota2?

 Network namespace replacement for paranoid networking?

 Next steps?

 Links:

 qtaguid - https://source.android.com/devices/tech/datausage/kernel-overview.html

 nfacct - https://lwn.net/Articles/472094/

 patch discussion - http://thread.gmane.org/gmane.linux.kernel/1362838/focus=1362967







Android Gadget /ConfigFS Gadget


 Core functional requirements

 Android Gadget “devices” (*=android kernel specific)

 Mass Storage

 Serial device

 RNDIS

 Ethernet

 ACM

 Functionfs (new adbd)

 ADB (legacy) *

 MTP *

 Android Accessory *

 Audio Source * (vs  Gadget Audio driver, g_audio?)



 ADB device already implemented via functionfs w/ adbd userland

 Do we need similar userland conversion for MTP, Accessory and Audio Source?

 Does ConfigFS Gadget need functionfs support?

 What is left to do? Next steps?

 Links:

 http://events.linuxfoundation.org/sites/events/files/slides/LinuxConNA2013-andrzej.pietrasiewicz-usb-gadget-configfs_0.pdf

 https://wiki.tizen.org/wiki/USB/Linux_USB_Layers/Configfs_Composite_Gadget

 http://git.kernel.org/cgit/linux/kernel/git/torvalds/linux.git/plain/Documentation/usb/gadget_configfs.txt







Contact




John Stultz john.stultz@linaro.org and Zach Pfeffer zach.pfeffer@gmail.com

### 添付資料URL

- http://events.linuxfoundation.org/sites/events/files/slides/LinuxConNA2013-andrzej.pietrasiewicz-usb-gadget-configfs_0.pdf

## Automotive（採用済み）

https://wiki.linuxplumbersconf.org/2013:automotive

Automotive Microconference



GENIVI and Automotive Grade Linux projects are aimed at enabling Linux system for the automotive environment.  GENIVI provides a middleware stack in the spirit of freedesktop.org, with components extending from ECUs (Diagnostic Log and Trace) to the Kernel (AF_BUS D-Bus Optimization) all the way up to the main console (AudioManager and SmartPhoneLink).    AGL is more of a traditional, complete Linux distribution specialized for the automotive domain. 




Concept and Goals



Automotive engineers and open source developers are talking different languages. The former are experts in their domain, understand the requirements of their companies' products but, let's be honest, have frequently been drinking their own Kool-Aid and are encumbered by the industry's “not invented here syndrome.” The latter think the automotive engineers are crazy with their stuff and don't know jack about doing software right. Ok, that's a little polarizing but you get the idea.



Let's get the two groups together in workshops and talk shop and work on solutions for certain topics that are the most pressing. The Linux Plumbers 2013 Automotive Microconference track is focusing on the key challenges on the infotainment platform. That's where the most code in the car is and where the industry needs great solutions fast.




Topics



Here are some topics that we think are important to discuss. It's not a complete nor the final list. Ideas are welcome.



 Bluetooth, NFC, WiFi Direct, Connectivity

 Ethernet adapted to automotive (i.e. return ground, power-over-ethernet, cable packaging)

 802.11p wireless and IEEE-1609 (Wireless Access in the Vehicular Environment Short Message Protocol)

 Media and document indexing, search and retrieval

 Current open source solutions are too slow and not efficient enough



 CE Device Management

 Automotive IVI needs to deal with different types of devices including smart phones that are connected in a special way

 medical diagnostic device end systems (taken from ICU and put into ambulance)

 A udev based solution leads to fragmented set of utilities

 There is a need for alternative solution. 

 An open source version is in the works by GENIVI and will be available soon





 Software updates management and platform configuration over the air.  Authenticity of updates to prevent malware infiltration.

 The package manager level with many megabytes large packages that only update a single file is too heavyweight; consider a variant of small linux distro, like puppylinux.  

 Updates need to be transactional so that they can be rolled back if something goes wrong

 Updates must be secure



 (Persistent) storage: filesystem, security/encryption

 Service management, platform lifecycle (boot/shutdown), systemd

 Location based services: Positioning, navigation, …

 Pluggable interfaces for maps, navigation engine, etc.



 Graphic subsystem: Wayland, LayerManager

 Vehicle data

 APIs to access vehicle data and control vehicle functions

 layer 7 gateway between CAN and internet networks



 Inter Process Communication (IPC)

 Automotive engineers are used to IPC mechanisms typically found in RTOS. Do we need them in Linux?

 Linux's interface to AUTOSAR protocol and FlexRay and EthernetAVB used for Electronic Control Units (ECUs).

 Scheduling and QoS in systems with both time-critical and best-effort message delivery requirements.



 kernel based D-Bus: why the industry thinks they need it and why the kernel community thinks the suggested implementation AF_BUS is not the right one.

 new proposals / alternative concepts from GregKH and Lennart: pros and cons, major advantages to be expected compared to AF_BUS

 Alternative udev implementations, how to integrate into systemd.



 Locked bootloaders, trusted platform modules, application signing in automotive





The structure will be … (defined later…)




Proposed Topics




Please propose all topics via: http://www.linuxplumbersconf.org/2013/submitting-topic/



 Alison Chaiken: 802.11p wireless and IEEE-1609 network stack

 Jeremiah C. Foster (jeremiah.foster AT pelagicore.com): Libudev hacking for an automotive environment (Jeremiah is the proposer, Sriram will likely hold the presentation since he's doing the work.)

 Matt Jones, Rudi Streif: Changing the Automotive Industry One Bit at a Time

 Imagine directly participating in the development and engineering of the next generation of your favorite vehicle make and model. Imagine working with automotive companies outside the traditional supply chain. Imagine developing cool new applications that directly interact with in-vehicle systems. Imagine designing a sophisticated user interface for in-vehicle infotainment.

 Since the inception of the motor vehicle and throughout its history until today, modifying and improving their ride has inspired many enthusiasts and created a large ecosystem of suppliers, professional and hobby garages, car shows and much more. However, these efforts have been limited to aftermarket, mechanical and, to some extend, electrical modifications.

 Join Matt Jones, Senior Technical Specialist at Jaguar Land Rover, and Rudi Streif, Director of Embedded Solutions at the Linux Foundation, for our vision on how opening up the software design process for in-vehicle infotainment and inviting developers and engineers around the globe to participate and collaborate in automotive open source projects will change the industry one bit at a time. We will outline how Automotive Grade Linux through making source code available, providing ready-to-run system images and documentation will enable a era of broad collaboration that extends much beyond the industry itself.

 These are exciting times for hackers and car freaks alike! Come and join the revolution!



 John Mehaffey to discuss non-Android fast boot, his proposal: http://wiki.linuxplumbersconf.org/2013:fastboot

 The non-Android fast boot topic will be part of the Boot and Core OS topic



 Richard Röjfors (richard.rojfors AT pelagicore.com) proposes a discussion on Automotive diagnostic, what is missing, where are we now, what are the next steps? 

 Mikael Söderberg (mikael.soderberg AT pelagicore.com) proposes a talk on Ethernet AVB in an Automotive context. What are the requirements of an ethernet AVB stack in an automobile? How would you implement it to fit with the rest of a well structured system, what is the impact on ConnMan and audio services?





FOSS Key Attendees Wishlist


 Marcel Holtemann

 Johannes Berg

 Kay Sievers





Schedule




The schedule of the 2013 Automotive Microconference Plumbers Micro Conference is as follows. Note presentation slides can be found on the Plumbers page by following the links to the abstracts:


 Session 1 - Presenter 1

 Session 2 - Presenter 2

 etc…





Discussion notes




This is a good place to record notes from your session.  All too often, if notes were not written down, the session might as well not have happened.




Contact




Proposal added by Daniel Wagner daniel.wagner@bmw-carit.de and Rudi Streif rudolf.streif@linux.com
Some minor help provided by Jeremiah C. Foster jeremiah.foster@pelagicore.com

### 添付資料URL

掲載なし

## Secure Boot（採用済み）

https://wiki.linuxplumbersconf.org/2013:secure_boot

Secure Boot




The Linux Plumbers 2013 Secure Boot track is focusing on current and future development of supporting the UEFI Secure Boot specification across the Linux ecosystem.



The structure will be most likely be discussion oriented sessions on specific topics related to Secure Boot.  Some topics may be fit better as a traditional presentation, however those should be limited in number.



Possible topics:



 Lessons learned from existing Secure Boot implementations

 Upstreaming of the current secure boot kernel patchset

 Secure Boot compliant kexec/kdump implementation

 Secure Boot compliant system hibernate and restore implemenation

 Methods for third party module/binary signing





Key Attendees:



 Matthew Garrett

 Greg KH

 James Bottomley

 Vivek Goyal

 Vojtech Pavlik

 Joey Lee

 Michal Marek

 Gary Lin

 Matt Fleming

 Peter Jones

 Steve Langasek

 Mimi Zohar

 Justin Forbes





Schedule




The schedule of the 2013 Microconference-Name Plumbers Micro Conference is as follows. Note presentation slides can be found on the Plumbers page by following the links to the abstracts:


 Session 1 - Presenter 1

 Session 2 - Presenter 2

 etc…





Discussion notes




This is a good place to record notes from your session.  All too often, if notes were not written down, the session might as well not have happened.




Contact




Proposal added by Josh Boyer jwboyer@redhat.com

### 添付資料URL

掲載なし

## Boot and Core OS（採用済み）

https://wiki.linuxplumbersconf.org/2013:boot_and_core_os

Boot and Core OS




The Linux Plumbers 2013 Core OS track is focusing on everything that allows userspace to boot and to continue running. We want to focus on the most basic, central building blocks of our OSes: the stuff that sits on top the kernel and below the applications and glues everything together, more specifically: the init system, device management, system startup, initial ram disks, and everything else that is necessary to get userspace running and make sure it continues running.



The fastboot microconference has been merged with the boot and core OS microconference.



Out of focus for this track is everything that covers particular subsystems, if those subsystems are not a crucial part of the OS.



Possible topics:


 boot loaders/boot loader specification

 fastboot topics

 UBI Fastmap support

 multicore/parallelism

 decompress boot blocks in parallel with DMA loading



 sharing

 log sharing between boot loader and kernel

 UBI attach sharing







 Kernel

 fastboot topics

 memory initialization speedup

 multicore/parallelism in init

 deferred init

 preconfiguration vs probing for busses

 size reduction 

 rootfs mount speedup

 Preloading





 systemd

 fastboot topics

 fast path to first applications





 dracut

 kdbus/IPC

 systemd-journald/message ids/message catalog

 multi-session on seats other than seat0





Key Attendees: 


 Harald Hoyer (suggested as MC leader)

 Lennart Poettering (suggested as MC leader)

 Kay Sievers (suggested as MC leader)

 Tom Gundersen

 Zbigniew Jędrzejewski-Szmek

 Auke-Jan Kok

 Arjan van de Ven

 Dave Reisner

 Colin Guthrie

 Nikita Youshchenko





Schedule




The schedule of the 2013 Microconference-Name Plumbers Micro Conference is as follows. Note presentation slides can be found on the Plumbers page by following the links to the abstracts:


 Session 1 - Presenter 1

 Session 2 - Presenter 2

 etc…





Discussion notes




This is a good place to record notes from your session.  All too often, if notes were not written down, the session might as well not have happened.




Contact




Proposal added by Harald Hoyer harald@redhat.com, Kay Sievers kay@redhat.com, Lennart Poettering lpoetter@redhat.com



Fastboot topics added by John Mehaffey John_Mehaffey@mentor.com

### 添付資料URL

掲載なし

## Containers（採用済み）

https://wiki.linuxplumbersconf.org/2013:containers

2013 Containers




The Linux Plumbers 2013 Containers track is focusing on containers both in userspace and in the kernel.



Hot Issues to sort out:


 Now that the kernel supports both LXC and OpenVZ do we really need two different tool sets?  If not, how should we unify the user visible container control plane.

 If we're unifying the control plane, should we consider combining the projects?  The containers we orchestrate are different, but they're both using the same in-kernel functionality now.

 CRIU is now useful for container checkpoint, but still needs some work for container migration. We should consider a unified container migration infrastructure (for when CRIU is complete).





Userspace topics includes:


 LXC tools

 OpenVZ tools

 CRIU (checkpoint/restore and live migration tools)

 libcgroup

 systemd(?)

 API





Kernel topics are:


 namespaces; are we there yet or do we need more functionality

 cgroups and controllers

 memcg and density (Containers should be far more dense than hypervisors, can we prove it?)

 LSM

 ploop

 checkpoint/restore

 /proc vision in containers

 /sys vision in containers

 resource management

 semantics issue – pid namespace is semi-useless w/o proc, proc can't be created w/o mount namespace, thus pid namespace is semi-useless w/o mount namespace





The structure will be a mix of presentations/introductions to the various technologies and discussions with the various developers present on the next steps for the needed kernel work and userspace integration.




Schedule




The schedule of the 2013 Containers Micro Conference is as follows. Note presentation slides can be found on the Plumbers page by following the links to the abstracts:


 Session 1 - LXC development status and roadmap (stgraber/hallyn/dwight) - see https://wiki.ubuntu.com/LXC/1.0-roadmap

 Session 2 - Show and tell comparison of vzctl (kir) and LXC tools (stgraber/hallyn); what are the good/bad features of each and how should we approach unifying them?

 Session 3 - CRIU updates checkpoint and live migration (avagin)

 Session 4 - ploop (enhanced loop device – container in a file) (mpatlasov)

 Session 5 - CRIU status and features going forwards discussion (xemul/avagin)

 Session 6 - Kernel status and TODO (xemul/hallyn)

 Session 7 - libcgroup (dhaval)





Topics



Demos (first part of morning for new users, who may not care to attend the rest of the mini-conf, or perhaps separate sessions at plumbers before mini-conf?):


 lxc

 showcase various and new features to existing users as well

 topics:

 cgroups

 namespaces

 basic create/start container

 clones and ephemeral

 arkose

 other tips/tricks (x forwarding, etc)

 LXC 1.0 roadmap: https://wiki.ubuntu.com/LXC/1.0-roadmap





 vzctl as an alternative to lxc

 user friendliness

 support for upstream and openvz kernels

 features

 documentation



 checkpoint-restore

 basic functionality

 memory snapshot

 live migration







New namespaces:


 syslog

 devices (loop devices, udev, uevents, containers on Android)

 time (very tempting for checkpoint-restore)





Resource management:


 kernel memory management

 oom killer

 “objects” tracking (it's not nice to limit these stuff with container RAM limit)

 fork bomb

 opening files bomb

 creating mountpoints bomb

 RT-signals bomb

 VMA-s bomb

 etc.







User namespace:


 next steps to let unprivileged users run containers

 userns integration in existing userspace tools

 gaps in kernel support, desired features





LSM:


 Smack and selinux support

 LSM stacking





API:


 Next steps for the LXC API (calls to add and API stabilization)

 Libvirt driver





Tools:


 lxc-sandbox

 vzctl as an alternative





CGroup Issues: (see on-going kernel cgroup work)


 kick off a cgroup configuration/query library? could become basis for improved limits queries in containers (in place of /proc overmounting)





Checkpoint/Restart aka CRIU:


 Demo

 Current status of kernel patches

 Support for containers, what's missing

 Integration with lxc/vzctl tools

 Known users and real use-cases





Key attendees


 Serge Hallyn (LXC upstream)

 Stéphane Graber (LXC upstream)

 Kir Kolyshkin (OpenVZ userspace)

 Pavel Emelyanov (OpenVZ kernel, CRIU)

 Andrey Vagin (CRIU)

 Maxim Patlasov (ploop)

 James Bottomley (Linux Kernel, storage and mm)

 PJ Waskiewicz (Linux Kernel, Cache QoS Monitoring)

 Will Auld (Xen, KVM, Cache QoS Monitoring)

 Oren Laadan (Device namespaces)

 Amir Goldstein (Device namespaces)

 <add your name here if you plan on attending>





Discussion notes




This is a good place to record notes from your session.  All too often, if notes were not written down, the session might as well not have happened.




Contact




Proposal added by Stéphane Graber stgraber@ubuntu.com, Serge Hallyn serge.hallyn@ubuntu.com, Kir Kolyshkin kir@openvz.org, Pavel Emelyanov xemul@openvz.org

### 添付資料URL

掲載なし

## File and Storage Systems（採用済み）

https://wiki.linuxplumbersconf.org/2013:file_and_storage_systems

Microconference - File and Storage Systems




The Linux Plumbers 2013 Microconference-File and Storage Systems track focuses on technologies used in file and storage systems, starting with configuration, monitoring and management technologies and sessions on the traditional file and storage stack. The focus is on efforts that span multiple teams and areas of focus.



The structure will be similar to what was followed the previous years where this is not about listening to long presentations, rather framing a discussion with a few slides or just opening comments and then kicking off a broad discussion with participation by the attendees.




Possible Topics




 * Support for SSD's as caching devices - device mapper (Alasdair Kergon, Mike Snitzer, Joe Thornber), bcache (Kent Overstreet), fscache (David Howells)



 * Reusing storage and file system code across installation, monitoring and running of systems. SSM (Lukas Czerner), libstoragemgt (Hannes Reineke, Tony Aselon), liblvm (same dm crowd), anaconda people (David Lehman, Dave    Cantrell), SuSE snapper (not sure which dev here?), grub/boot (Peter Jones)



 * Updates on new “persistent” DRAM class parts - what can we do in the kernel and in application space to support these? (Jeff Moyer, Tejun Heo, Ric Wheeler, FusionIO people (Nisha T, Nick Piggin), Intel people (Willy, Andy    Rudoff, other vendors in this space)



 * Use cases for new storage/file system features: how to use thinly configured storage? upgrade rollback? data scrubbing? Same crowd as the reuse one above



 * Scalability challenges - how big should a single file system be? how many files in a file system? how many file systems per host? Per file system - ext4 devs (Ted, Lukas, Andreas), btrfs (Chris Mason, Josef Bacik, Mingming, etc), XFS (Dave Chinner, Christoph, Alex Elder, Ben Myers)



 * Device naming - getting storage devices to have consistent names from BIOS/boot level up to user visible names? Lennart, Peter Jones, Matthew Garrett, etc 



 * eMMC: what features are missing for parity with SATA? FW update: Work in progress. Do we really need to care about the rest? “Sanitize”, “packed commands” (really?!!), Performance vs Power, etc. (Grant Grundler)




Schedule




The schedule of the 2013 File and Storage System Plumbers Micro Conference is as follows. Note presentation slides can be found on the Plumbers page by following the links to the abstracts:


 Session 1 - Presenter 1

 Session 2 - Presenter 2

 etc…





Discussion notes




This is a good place to record notes from your session.  All too often, if notes were not written down, the session might as well not have happened.




Proposal added by Ric Wheeler ricwheeler@gmail.com



Logged in as: Ric Wheeler (ricwheeler)
2013/topic_template.txt · Last modified: 2013/01/11 19:56 by 148.87.19.214

### 添付資料URL

掲載なし

## Graphics and Display（採用済み）

https://wiki.linuxplumbersconf.org/2013:graphics_and_display

Graphics and Display Microconference




The Linux kernel graphics and display subsystems have recently been at the center of deep scrutiny. From new framework proposals to support panels and encoders in embedded systems to the upcoming “battle of the display servers” between X.org, Wayland and Mir, many developers have turned their attention to how Linux handles graphics and display hardware. The kernel needs to ensure more than ever that it offers adequate APIs that can support the needs of both desktop and embedded hardware.



The graphics and display microconference will gather DRM/KMS, FBDEV and V4L2 developers to discuss and agree on how to make the three subsystems evolve in a coordinated way and get ready for the next generation of both hardware and applications.



Additional graphics-related topics will also be discussed during the Android and Graphics slot.




Schedule




The schedule of the 2013 Graphics and Display Microconference is as follows. Note presentation slides can be found on the Plumbers page by following the links to the abstracts:



	
		 14:00 - 14:05  Intro & Who's who 
	
	
		 14:05 - 14:30  State of the Art Debugging and Tuning Graphics Applications  Ian Romanick - (Outline of the discussion)
	
	
		 14:30 - 15:00  Open Source Graphics on ARM  Rob Clark 
	
	
		 15:00 - 15:30  Media Decode and Composition: Bridging the Gap  Daniel Stone 
	
	
		 15:30 - 15:45  Tea Break 
	
	
		 15:45 - 16:15  Splitting DRM/KMS Device Nodes  David Herrmann - (Outline of the discussion) 
	
	
		 16:15 - 16:45  Common Display Framework  Laurent Pinchart - (CDF v3 patches - Slides) 
	




Discussion notes




The session uses an etherpad for live notes.



Links to IRC back-channels and other resources will be available here.




Attendees




This is an informational attendees list for planning purpose. Please add your name below if you plan to attend the microconference, and remember to remove your name if you cancel your plans.




Key Attendees


 Daniel Stone

 David Herrmann

 Ian Romanick

 Jesse Barker

 Jesse Barnes

 Laurent Pinchart

 Mauro Carvalho Chehab

 Rob Clark

 Sumit Semwal

 Tom Gall





Attendees


 Maxime Ripard





Proposed Topics




The microconference schedule has been finalized, the topics proposals list is now closed. As a reference, the proposed topics were:



 Common Display Framework (to allow reusable panels and encoders drivers) (Summary of CDF BoF @ELC 2013)

 Splitting DRM and KMS across device nodes

 Rationale, architecture and milestones

 dma-buf usage

 Guidelines to embedded GPU vendors for DRM development



 KMS extensions. The following device features will need API extensions:

 Non-memory-backed pipeline sources

 Memory write-back

 Chained composers

 Non-linear pipelines (multiple encoders, …)

 Root plane that doesn't span the whole display



 Multiple APIs coexistence

 KMS for display, V4L2 for write-back

 Media Controller usage



 Support for hardware that has received little love so far

 Memory-to-memory hardware composers and blitters

 Wireless displays



 Phasing-out of the FBDEV API

 Piglit Dispatch table for GLES

 Work out implementation details

 Use XML from Mesa? Work more with Khronos to supply an XML API representation?







Contact




Proposal added by Laurent Pinchart laurent.pinchart@ideasonboard.com and Jesse Barker jesse.barker@arm.com

### 添付資料URL

- http://www.ideasonboard.org/media/meetings/20130709-lce-cdf.pdf

## LLVM（採用済み）

https://wiki.linuxplumbersconf.org/2013:llvm

LLVM




The Linux Plumbers 2013 LLVM Microconferences is focusing on increasing the use of LLVM related technologies surrounding Linux.



Speakers should cover topics which help the adoption of LLVM and clang for things like the Linux Kernel and for Android.



Over the past year there has been a lot of progress in patching LLVM and Clang in order to be able to compile the Linux kernel. Over the same time period progress was made on building both the Linux kernel and  Android userspace. Clang is also now distributed as part of the Android NDK. We now need to get patches accepted to support the use of clang/LLVM to build the Linux Kernel and more of the Android code base.



This microconference will gather interested parties from the Linux kernel, LLVM, and Android communities to plan the most expedient way to get support for using Clang upstream.



Issues which need adressing during this microconference:


 Upstreaming kbuild support for clang

 The use of Variable Length Arrays in Structs in the kernel code

 Adding support for some extensions to LLVM/Clang used in the kernel code which the LLVM community will accept upstream.

 The Universal driver in clang to support even better cross compilation support in clang

 The addition of named registers to Clang

 Fixing the use of __builtin_constant_p() in the Linux kernel

 Handing init and exit sub-segments properly in Clang

 Solutions to getting the Integrated Assembler to work for the Linux and Android code

 Leveraging LLVM tools like Address Sanitizer, Thread Sanitizer and Static Checker for kernel debugging

 Distro support of these patches





Schedule




The schedule of the 2013 LLVM Plumbers Micro Conference is as follows. Note presentation slides can be found on the Plumbers page by following the links to the abstracts:


 Session 1 - Presenter 1

 Session 2 - Presenter 2

 etc…





Discussion notes



This is a good place to record notes from your session.  All too often, if notes were not written down, the session might as well not have happened.




Contact




Proposal added by Behan Webster behanw@converseincode.com, Mark Charlebois mcharleb@quicinc.com

### 添付資料URL

掲載なし

## Network Virtualization（採用済み）

https://wiki.linuxplumbersconf.org/2013:network_virtualization

Microconference - Network Virtualization




The Linux Plumbers 2013 Microconference- Networking Virtualization track focuses on general Linux Network Virtualization and related technologies.  Emphasis will be on emerging technologies around network virtualization and how they can be best integrated into the Linux networking stack.  




Proposed topics


 Open vSwitch integration in Linux stack (Jesse Gross)

 Dynamic tunnel support, multiqueue, and stateless offloads with OVS/tuntap (Jerry Chu)

 From netmap to virtualization through openvswitch (Luigi Rizzo)

 TCP repair implementation, applications, and futures (Pavel Emelyanov)

 Managing embedded bridges in Linux (John Fastabend)

 DPDK and network virtualization (Intel)

 IOVisor integration in Linux (Alexei Starovoitov)

 Network Service Headers (NSH) in Open vSwitch (Kyle Mestery)

 LISP in Open vSwitch (Kyle Mestery and Vina Ermagan)





Key Attendees


 Jesse Gross (Open vSwitch)

 John Fastabend (switches in NIC)

 Eric Dumazet (networking)

 Luigi Rizzo (netmap)

 Saleem Bhatti (ILNP)

 Stephen Hemminger (VXLAN, bridge)

 Tomas Graf (Open vSwitch)

 Jason Wang (macvlan, virtionet)

 Patrick McHardy (netfilter)





Schedule




The schedule of the 2013 Networking Virtualization Plumbers Micro Conference is as follows. Note presentation slides can be found on the Plumbers page by following the links to the abstracts:


 Session 1 - Presenter 1

 Session 2 - Presenter 2

 etc…





Discussion notes




This is a good place to record notes from your session.  All too often, if notes were not written down, the session might as well not have happened.




Contacts




Tom herbert therbert@google.com



Chris Wright chrisw@redhat.com

### 添付資料URL

掲載なし

## ACPI/PM, PCI subsystems（採用済み）

https://wiki.linuxplumbersconf.org/2013:pci_subsystem

Microconference-ACPI/PM, PCI subsystems




The Linux Plumbers 2013 Microconference-ACPI/PM (Advanced Configuration and Power Interface/Power Management), PCI (Peripheral Component Interconnect) subsystems track will focus on current and future development of these areas.  There is significant overlap between ACPI/PM and PCI so it makes sense to have an event covering them both.



Since this is “Plumbers” were particularly interested in topics concerning userspace (i.e. userspace interactions, drivers, …) but be warned that the majority of content discussed may have more focus on these subsystem's internals - it will depend on the responses we receive from the community. As always, this will be a great opportunity for developers to meet and collaborate.



Possible Topics (Not complete, nor final; Ideas are welcome):


 Host bridge hot-plug (I/O APIC, …)

 ACPI-based hot-plug of things in general (including PCI host bridges)

 PCI hot-plug and ACPI (acpiphp vs pciehp and dependency on bridges)

 Device hot-plug (IRQ fixups, …)

 Interactions between PCI PM and hot-plug (for PCIe ports in particular)

 PCI on ARM (emulated p2p bridges; shared host bridge drivers in ./drivers/pci/host/*; …)

 Max Payload Size [MPS, MTRR]

 New PCI capabilities (Gen 3 and beyond)

 PCI secondary bus resets (How to avoid surprise hot-plug and/or how to re-architect the device reset interface)

 pci_is_pcie() (Not just for PCIe capabilities? - How to handle non-compliant PCIe devices that don't expose a capability)

 I/O port pci-sysfs resource files (Fix or remove?)

 Thunderbolt support in Linux PCI core

 PM QoS for PCI devices (resume latency limit and possibly LTR)

 Resource management using ACPI (_CRS and friends)

 Unification opportunities (domain support, NUMA node, …)

 Virtualization (device assignment for vguests, DMA remapping, …)

 Virt: device reset and hot-plug interaction

 SR-IOV (VFs on virtual buses)

 SR-IOV: enable VFs for vguests independent of loading the PF driver

 Integration of PM frameworks (cpuidle, cpufreq, runtime PM, system suspend)

 User settings for PM policy (how to pass policy information, e.g. power vs performance, to kernel subsystems)

 CONFIG_PM consolidation (what should depend on it, are CONFIG_PM_* necessary)





The structure will be similar to what occurred at last year's kernel summit in which in-progress and future projects were brought up prompting discussions from all attendees concentrating on current problems and possible directions towards solutions (i.e. focus on existing and possible future issues related to unfinished, sticky, topics as opposed to presenting about problems that have already been solved).



We will likely group presentations into ACPI/PM, PCI, and VIRT to accommodate attendees with specific focus.  A list of possible presenters in these areas (feel free to volunteer yourself, or others) is:

ACPI/PM: Len Brown, Rafael J Wysocki+
PCI: Bjorn Helgaas+, Ben Herrenschmidt, Jiang Liu, Yinghai Lu, Myron Stowe+, Yijing Wang
SR-IOV: Don Dutile, Joerg Roedel, Alex Williamson+, David Woodhouse



Schedule




The schedule of the 2013 Microconference-ACPI/PM, PCI subsystems Plumbers Micro Conference is as follows. Note presentation slides can be found on the Plumbers page by following the links to the abstracts:


 Session 1 - Presenter 1

 Session 2 - Presenter 2

 etc…





Discussion notes




This is a good place to record notes from your session.  All too often, if notes were not written down, the session might as well not have happened.




Contact




Proposal added by Len Brown len.brown@intel.com, Bjorn Helgaas bhelgaas@google.com, Myron Stowe myron.stowe@gmail.com and Rafael J. Wysocki rjw@sisk.pl

### 添付資料URL

掲載なし

## Power-Efficient Scheduling（採用済み）

https://wiki.linuxplumbersconf.org/2013:power-efficient_scheduling

Power-efficient Scheduling




The Linux Plumbers 2013 Power-efficient Scheduling track is a Micro-conference to focus on scheduler topics in the area of efficient, power-aware scheduling. 



“As mobile and embedded processors get more complex — and more
numerous — the interest in improving the power efficiency of the
scheduler has increased. While a number of power-related
scheduler patches exist, none seem all that close to merging into
the mainline. Getting something upstream always looked like a
daunting task; scheduler changes are hard to make in general,
these changes come from a constituency that the scheduler
maintainers are not used to serving, and the existence of
competing patches muddies the water somewhat. But now it seems
that the complexity of the situation has increased again, to the
point that the merging of any power-efficiency patches may have
gotten even harder.The current discussion started at the end of
May, when Morten Rasmussen posted some performance measurements
comparing a few of the existing patch sets. The idea was clearly
to push the discussion forward so that a decision could be made
regarding which of those patches to push into the mainline. The
numbers were useful, showing how the patch sets differ over a
small set of workloads, but the apparent final result is unlikely
to be pleasing to any of the developers involved: it is entirely
possible that none of those patch sets will be merged in anything
close to their current form, after Ingo Molnar posted a
strongly-worded “line in the sand” message on how power-aware
scheduling should be designed.”



This extract from the Johnatan Corbet's article  Power aware scheduling meets a line in the sand shows the power management in the linux kernel has reached a limit in its design and some work should be done to integrate the idle/performance policies in the scheduler from the different PM blocks.



A number of patches with different approaches to add power-awareness to the Linux scheduler have been floated on LKML over the last year. The objective of this micro-conference is to gather developers and maintainers working on scheduler improvements and other interested parties to discuss alignment and next steps.




Sample Topics for Discussion/Talks


  Power Aware Scheduling 

  big.LITTLE Scheduling 

  Packing Small Tasks onto Buddy CPUs

  Per Entity Load Tracking Metric in Load Balancing 

  Multiple Cluster Power Management (MCPM) 





Schedule




The schedule of the 2013 Microconference-Name Plumbers Micro Conference is as follows. Note presentation slides can be found on the Plumbers page by following the links to the abstracts:


 Session 1 - Presenter 1

 Session 2 - Presenter 2

 etc…





Topics


 What is power-aware scheduling?

 Policies for different platforms and workloads: Embedded systems (Android), servers,…

 Power-saving policies: Race-to-idle, task packing/maximize number of sleeping cpus,…





 Measuring power-savings

 Measurement techniques

 Metrics: Power, Energy, Performance

 Representative benchmark workloads: Embedded, server,…

 Validation





 Representation of power topology

 cpu compute capacity and power profile

 Power domain representation





 Per Entity Load Tracking in Load Balancing

 Packing tasks: wakeup/exec/fork, periodic load-balance

 Frequency scaling implications

 Mixed cpu compute capacity multi-cores (e.g. ARM big.LITTLE)

 NUMA scheduling integration





 Integration with other power-related kernel subsystems

 cpufreq

 cpuidle

 pmqos framework

 coordination with gpu (no such thing yet)







Discussion notes




This is a good place to record notes from your session.  All too often, if notes were not written down, the session might as well not have happened.




Contact




This proposal is being entered by Nivedita Singhvi niv@us.ibm.com on behalf of developers who have expressed an interest. The scheduler folks will update this wiki page soon.



Runner is Morten Rasmussen morten.rasmussen@arm.com, among others. 
Additional contact: Preeti Murthy preeti@linux.vnet.ibm.com



Key Maintainers: It would be nice to get some of the following maintainers: Thomas Gleixner, Paul Turner, Peter Z., Ingo Molnar, Rafael J. Wysocki, Frederic Wesibecker




People willing to attend


 Daniel Lezcano daniel.lezcano@linaro.org

 Vincent Guittot vincent.guittot@st.com

 Amit Kucheria amit.kucheria@linaro.org

 Catalin Marinas catalin.marinas@arm.com

 Rafael J. Wysocki rafael.j.wysocki@intel.com

 Morten Rasmussen morten.rasmussen@arm.com

 Kevin Hilman khilman@linaro.org

 Frederic Weisbecker fweisbec@gmail.com

 Paul McKenney Paul.McKenney@us.ibm.com

 Paul Turner pjt@google.com

### 添付資料URL

掲載なし

## Scaling（採用済み）

https://wiki.linuxplumbersconf.org/2013:scaling

Microconference - Scaling




The Linux Plumbers 2013 Microconference - Scaling track focuses on scalability, both upwards and downwards as well as up and down the stack. There are quite a few active projects that are working to enhance performance and scalability both in the Linux kernel and in user-space projects. In fact, one of the purposes of this forum is for developers from different projects to meet and collaborate. After all, for the user to see good performance and scalability, all relevant projects must perform and scale well.



The structure will be similar to what was followed the previous years (2011 and 2012): about 30 minutes per subject with discussion.




Possible Topics (please add...)


 Scaling userspace

 Userspace RCU library: new APIs and data structures (Mathieu Desnoyers)



 Scaling the kernel

 Validating RCU usage (dhaval, paulmck)

 per-CPU atomics (pjt)

 kernel supported M:N concurrency (pjt) 



 Validation of parallel hardware

 Hardware Transactional Memory

 Eliding locks (andi kleen) 



 Adaptive Ticks

 Scalability and energy efficiency

 Scalability to large memory sizes

 We are nearing having terabytes of memory in a single NUMA node, which means things like the LRU lists or RMA chains can be tens of millions of entries long. (dhansen) 

 Faults are expensive, don't parallelize well, and we currently have no good way avoid them for page cache.



 etc…





Schedule




The schedule of the 2013 Scalability Plumbers Micro Conference is as follows. Note presentation slides can be found on the Plumbers page by following the links to the abstracts:


 Session 1 - Presenter 1

 Session 2 - Presenter 2

 etc…





Key Attendees


 Paul McKenney

 Mathieu Desnoyers

 Steven Rostedt

 Adrian Sutton

 Frederic Wesibecker

 Andi Kleen

 Thomas Gleixner

 Ingo Molnar

 Peter Zijlstra

 Paul Turner

 Sami Al Bahra

 Morten Rassmussen

 Eric Dumazet

 Darren Hart

 Rik van Riel

 Dave Hansen

 Tim Chen





Discussion notes




http://etherpad.osuosl.org/lpc2013-scaling


 Linux Plumbers Conference 2013


Scaling Microconference



Volunteer needed for taking notes.



Andi Kleen on transactional sync extensions




Current status of lock elision in Linux
http://linuxplumbersconf.org/2013/ocw/sessions/1161 (slides)
Andi Kleen

Speculative execution:
    Blocking or non-blocking
    Blocking has added latency when transfering locks
    


Intel TSX

  User controled execution mode in CPU (Haswell)
  
  HLE adds instruction prefixes for atomic ops
      Failure fallsback
      nop on old CPUs
      
  RTM
      new XBEGIN/XEND instruction
      Explicit abor handler
      
  


Locking scalling results depend on workload.



An elided lock:
fast path
non-blocking
similar to recursive reader lock
individual cache line locks
may always fall back
uses the standard locking model



Overview of Linux implementation
TSX perf profilling supported
need to understand speculation
TSX lock elision
Elide kernel locks
Glibc mutex elision
Elide application locks
Carious custom locks elide in applications
Libitm (gcc)
Application with non-scalable locking primary target



Lock adaptation
RTM locks with adaptive abort handler
skips elision on fail
Safety net
Simple algorithm
state stored in lock
tunables



Glibc mutex elision
in glibc 2.18
needs to be globally enabled
Any program using pthread mutexes can elide
Missing: tunables in prgram, global, rwlocks
Obsucre POSIX requirements are a problem
deadlock requirements for nested lcoks
lost nesting support for trylocks and write locks
lost adaptive spinning locks



Future work
recursive locks, rwlock
improve adaptive algorithms
tuning interface
more than POSIX
c++11 locking
new interface to elide condition variables
better fast-path without dynamic dispatch
adaptive spinning the default



Kernel elision
eliding mutex, spin, rw, bitspin, rwsem, custom lock
only win in some areas with big locks
occasional losses due to too fine grained locking
may benefit from lock coarsening




Full dynticks status
http://linuxplumbersconf.org/2013/ocw/sessions/1143
Frederic Weisbecker



Low frequency tick: more throughput, less interrupts, CPU less stolen, less cache trashed
High frequency tick: latency, timer and scheduler granularity, precision



Duty of the tick:

  timekeeping (walltime, xtime, gettimeofday)
  jiffies
  timer wheel
  cpu time stats
  scheduler
  RCU


dynticks: remove the tick when possible – idle



problems:
lcache, dcache periodically trashed
tick steals CPU multiple times per second



Who's effected?
HPC – exterme throughput
Real time – extreame latency



CPU time accounting

  poll driven
  listen to ring boundaries
      syscalls
      exception
      irqs



dynaticks is only enabled if there is only a single runnable task per CPU



User-level threads……. with threads.
http://linuxplumbersconf.org/2013/ocw/sessions/1653
Paul Turner



Three models
1:1 (kernel threading) → this is the current ubiquitous implementation
n:1 (user threading) –> single kernel context.  No kernel awareness of user-level threading
m:n (hybrid) –> kernel assisted



Parallel programming models
syncronous
delegated events
message passing / event loops




models → threads per request
+ simple
+ good data-locality
- realized parallelism within a resuest
- latency predictability varies inverselt with load



asynronous workers
+ greater control of work paritioning
+ impoved latency predictability
+ lower overheads achievable
- complex programming model
- encapsulation of control and data-flow
- loss of data locality



Scalability Issues in Linux Kernel
http://linuxplumbersconf.org/2013/ocw/sessions/1299
Dave Hansen, Tim Chen



Writes on shared data
writes to shared structures are expensive
spinlock
r/w lock
atomic counter
cache line bouncing
even very short hold time on a lock is expensive
A ext4 inode lock on a sorted LRU list for reclaim put pressure on page cache >90% lock contention



Lock stat – scales poorly
due to lockdep infrastucture
build took 30% longer on a 60 core system
heavy weight
would be useful on production systems for debugging



Magic numbers
batch sizes
memory pool sizes
hash table sizes



Multi-threaded ops
mmap_sem and page_table_lock contention
contention when many signals are sent to individual threads
files_open contending on file_lock



VM Scalling
mmap_sem
page fault has significal page allocation & clearing cost
fork operations contend on root anon_vma
hugepages and other similar things (tlb flushing) are hacks and aren't actually very scalable.




vmsplice with transparent huge pages
Robert Jennings rcj@linux.vnet.ibm.com



RFC on list for page flipping with vmsplice in addition to copy

http://marc.info/?l=linux-kernel&m=137477297209750&w=2
http://marc.info/?l=linux-fsdevel&m=137477295109744&w=2
http://marc.info/?l=linux-fsdevel&m=137477295109743&w=2



QEMU adding migration feature to move VM to new QEMU 
executable (for applying patches).  Requires:

page flipping rather than copy (can't afford to double memory usage)
speed to minimize downtime



RFC adds page flipping for a narrow case (4K, aligned, single mapping,
 non-THP, etc)
 KVM host would like to use THP.  Currently THPs would be copied.



Moving 4K pages is much slower than desired (~5GB/s)

Some room to improve in the scope of current code but larger
improvement is required



THP support for vmsplice page flipping would address environment 
 in which KVM operates and provide a significant speedup.



BOF: Finding RCU Bugs
Dhaval Giani, Paul McKenney, Frederic Weisbecker



Few people can pinpoint RCU bugs, correctness bugs and performance bugs.
Detecting pointer leaks
Converting RCU into rwlock
RCU watchpoints by poisoning RCU pointers, expecting GPF
Add data (tagging) into pointer to bits within rcu_dereference operation
Check when we enter a GPF



Discussion:
- hpa:


 there is a reason why those pointers are invalid. Will probably be used in the future.

 there are other options: use userspace pointers to trace kernel accesses on SMAP




- Using the bits (not just putting garbage data)
- right now, it can catch bugs.
- could add a level of indirection ?  would be better if you don't have to.
- Move this pointer info into another pointer.


 no garbage collection




- Use a modified page table entry, per-cpu cr3 (x86). Set at rcu_dereference.
- does it require to have every instrucation page aligned ? no.
- scheme used for trapping bad mallocs/free
- ASAN does something similar
- Alan: what about bugs caused by sequence of use of rcu_defer/rcu_assign.


 Detected.

 has detected bugs ? still under dev. similar tool has detected bugs.




- kernel address sanitizer


 discovered 10 bugs and is working




- pte modification: limits you to use-cases with page tables


 RCU bugs that happen on powerpc only code




- people like the idea of unlimited “watchpoint”. Not actually a watchpoint, but poisoned pointer.



Per-CPU atomics in userspace
Andrew Hunter & Paul Turner



- Keep data on per cpu level rather than per thread level. For systems with many threads.



- by moving memory allocator free list to per-cpu rather than per-thread, handles better cases where memory is allocated by one thread, then handoff to other thread, then freed.



- How do you abort transaction ? The kernel handles it.



- restart logic handled in user-space, simple check in kernel (infrequent abort vs frequent test trade-off)



- combining all regions for all such restart code, so the kernel only has to check one range



- initial use-case is malloc per thread



- you could do this with transactions (real HW transactions) in some cases could be complementary (for more complex structures for instance)



- similar scheme to sys_membarrier(), could possibly share code




Contact




Proposal added by Dhaval Giani dhaval.giani@gmail.com (with Paul McKenney as the chief advisor)

### 添付資料URL

掲載なし

## Virtualization（採用済み）

https://wiki.linuxplumbersconf.org/2013:virtualization

Microconference - Virtualization




The Linux Plumbers 2013 Microconference-Virtualization track focuses on general Linux Virt and related technologies. There are quite a few active projects that encompass virtualization, and this forum will be available for developers to meet and collaborate.



The structure will be similar to what was followed the previous years, 2012, 2011 and 2010.  The emphasis is on discussing unfinished projects and sticky topics, and this will be strictly followed.  Expect sessions to be cut short by the session leaders if they veer into the 'talk' or 'advertisement' category.




Hot Issues to sort out


 Can we bring networking back into userspace?

 What should virtio PCI look like on a PCI express bus?

 Should image formats be supported by in-kernel devices like tcm_vhost?

 Is there any reason to merge vhost_blk?





Userspace topics


 Live migration

 QEMU vs. Native KVM Tool

 QEMU module infrastructure

 Management tools (libvirt et al)

 NUMA aware allocation by qemu (instead of relying on Automatic NUMA balancer)

 QEMU: List devices based on different platforms (Currently, it lists all the devices even they are not supported for some platforms).





Kernel topics


 vhost*

 Post-copy hooks (MADV_USERFAULT)

 pv-mmio

 EFI support in Xen - current state of development





Possible Topics


 AF_VIRT socket family to share between hypervisors

 vhost-blk/vhost-scsi and kernel support for image formats

 Ability to present and expand virtual disks on the fly

 vhost-net vs. virtio-net and improving performance of tun/tap

 Web-based control and monitoring interface





Schedule




The schedule of the 2013 Virtualization Plumbers Micro Conference is as follows. Note presentation slides can be found on the Plumbers page by following the links to the abstracts:


 Session 1 - Presenter 1

 Session 2 - Presenter 2

 etc…





Key Attendees


 Anthony Liguori (QEMU)

 Amit Shah (virtio-serial)

 Michael Roth (migration)

 …





Discussion notes




This is a good place to record notes from your session.  All too often, if notes were not written down, the session might as well not have happened.




Contact




Proposal added by Anthony Liguori anthony@codemonkey.ws, Alex Williamson alex.williamson@redhat.com

### 添付資料URL

掲載なし

## Safety-rating（提案）

https://wiki.linuxplumbersconf.org/2013:safety-rating

Safety and Reliability Practice




Linux/GNU-based products are increasingly used in applications that direction affect the health and safety of its users. The Linux Plumbers 2013 Microconference-Safety-Rating track is focused on methods to improve and measure the reliability these applications, whether they are narrowly focused embedded systems or huge cloud systems supporting diverse applications. The impact of this work ranges from the relatively minor to the life-critical:


 Healthcare monitoring systems

 Navigation systems that send people the wrong way up a one-way street

 Space launch systems on which human lives depend





By its nature, safety and reliability requirements affect all software in an application, including:


 Bootloaders

 Linux kernel

 Compilers

 Libraries

 Application-specific code

 Installation and update frameworks





Determining whether an open source-based set of software is ready for a safety- or reliabilit-related application is difficult. In traditional systems, the software is developed from the ground up with specific reliability goals. The sheer volume of open source software typically used makes this impractical, which leaves approaches based on the use of well-tested software, coupled with reliable software and hardware that “glue” the system together. Targeted topics are:


 Traditional process-oriented development versus a real-world, statistically-validated approach

 Hardware requirements

 Test requirements

 Error logging and reporting

 Pooling reliability information

 High-availability/fault tolerant application frameworks

 Real-world examples

 Legal and regulatory issues

 Future directions





Obviously, this is much more material that can be covered in depth and many more questions will be raised than can be answered. Thus, if successful, this miniconference will result in energizing and focusing on-going community efforts in this area, possibly kicking of some informal working groups to chew on specific pieces.




Schedule




The schedule of the 2013 Microconference-Name Plumbers Micro Conference is as follows. Note presentation slides can be found on the Plumbers page by following the links to the abstracts:


 TBD

 Session 1 - Presenter 1

 Session 2 - Presenter 2

 etc…





Discussion notes




TBD




Contact




Proposal added by David VomLehn vomlehn@texas.net

### 添付資料URL

掲載なし

## Real-Time（提案）

https://wiki.linuxplumbersconf.org/2013:real-time

Real-Time MC




The Real-Time MC will focus on areas of discussion around real-time technology, with an emphasis on the current RT tree and ongoing work. 




Sample Topics



 * anything interesting wrt real-time 




Schedule



Will be here once finalized. 




Discussion notes




This is a good place to record notes from your session.  All too often, if notes were not written down, the session might as well not have happened.




Contact



This is being proposed by Nivedita Singhvi niv@us.ibm.com for Thomas Gleixner (tglx@linutronix.de, RT maintainer) and key RT folks.  Thomas agreed we should have the proposal for the MC session in place, so that we can get going once confirmed (he is still unsure about being able to attend, I might have to get him a boat to avoid flying ;)). 



Steven Rostedt, Clark Williams (both Red Hat) will be attending (as will, I trust, Paul McKenney :)). 
Hopefully Peter Zilstra will also be able to make it, as will John Kacur. 
Will try and get as many other folks interested in discussing Real-Time.



Update, july 12, 2013





Basically, all agreed that this MC is valuable if Thomas can attend, and the RT community, although mostly attending LPC anyway, will skip having an RT MC if Thomas can't make it. 



Partial Potential Attendee List if we have MC:



  Steven Rostedt (Red Hat)

  Clark Williams (Red Hat)

  John Kacur (Red Hat)

  Darren Hart (Intel)

  Dhaval Giani (Univ of Toronto)

  Paul McKenney (IBM)

  Frederic Weisbecker (Red Hat)

  Several others….





Trying to get final ack/nack from Thomas at the moment – Nivedita

### 添付資料URL

掲載なし

## Audio（提案）

https://wiki.linuxplumbersconf.org/2013:audio

Audio Microconference




Audio remains a topic of very active development within Linux, especially in the embedded domain, and there's a big divide both between embedded and desktop world and between the people writing applications that use audio and the people implementing the kernel frameworks.




Topics




In no particular order, some perennial issues and a few new ones:



 * Management of DSPs, especially larger and more flexible ones, is still very much up in the air in mainline:


 Effects, creating and controlling them.

 Coefficient configuration, is it working?




 * Exploding control numbers are starting to have real performance impacts in userspace, is there anything we can do about that?
 * Management of digital routing in embedded devices, still ongoing.




Contact




Takashi Iwai tiwai@suse.de and Mark Brown broonie@opensource.wolfsonmicro.com

### 添付資料URL

掲載なし

## Fastboot（提案）

https://wiki.linuxplumbersconf.org/2013:fastboot

Fastboot



NOTE: This microconference has been merged with the Boot and Core OS microconference.  Please make any changes there!



Automotive IVI systems require rapid startup time to functioning applications (audio, graphics), typically 1-2 seconds.
Other requirements lead to the conclusion that NAND storage is preferable to NOR for cost reasons.



Linux has come a long way in terms of fast booting, currently under 2 seconds is achievable to the point where aplay produces sound, for a 2.5M compressed kernel and a 1G rootfs on NAND.



The Linux Plumbers 2013 Fastboot track will focus on enabling sub-second boot times for embedded Linux systems using NAND flash. NOTE that many of the sub-topics below will also speed other fastboot architectures.



I invite submissions from anyone involved in the fastboot ecosystem, but am soliciting in the following areas (please feel free to combine topics in presentations :)




Key Attendees


 Tim Bird

 Wolfgang Denk

 Lennart Poettering

 Kay Sievers

 Brian Pomerantz

 Richard Weinberger

 Nikita Youshchenko





Boot loader



(u-boot, barebox, Intel BLDK, …)



Suggested session leader: Wolfgang Denk


 decompress boot blocks in parallel with DMA loading the next one

 Log sharing between kernel and uboot to simplify tuning

 bootchart, other logging analyzers can look deeper into the boot process



 UBI fastmap support

 utilizing multiple cores

 Sharing of UBI attach between uboot and kernel

 Other sharing (memory initialization, ???)

 ???





Kernel




Suggested session leader: Tim Bird


 modules are good, but the compressed kernel is still too big (2.5M) for a fully modularized IVI kernel

 Can we move more stuff out of the kernel proper? 

 candidates



 Other ways to reduce size



 init takes too long

 parallel init

 deferred init calls … why are these not being used enough

 Preconfigure subsystems instead of probing

 I2C

 ???





 rootfs mount is the long pole to early ready

 read rootfs LEBs in parallel with init?



 Memory initialization takes a long time

 initialize memory in phases (hot swap)



 ???





UBI/MTD




Suggested session leader: Nikita Youshchenko, Brian Pomerantz


 fastmap improvements

 RB tree for node list



 NAND drivers: (NAND read ~ 25 usec/page + 25ns/byte)

 partial page reads?



 UBIFS preloading

 filesystem packing to concentrate fastboot pack in certain LEBs

 preloadfs for UBI

 Can rootfs LEBs be used for preloading? 



 ???





systemd



Suggested session leader: Lennart Poettering, Kay Sievers


 Systemd has improved startup parallism, but still takes seconds to its first exec

 current hack is to have an early_init process that execs systemd after starting fast path processes

 can we come up with a better scheme?



 scanning dependencies takes too long, can we load a static prebuilt config, perhaps just enough for early

 scan after started to update



 fast path to early apps

 reduce size, perhaps systemd-helper daemon

 ???







secure boot




Suggested session leader: ??


 How to make it faster





Schedule



The schedule of the 2013 Microconference-Name Plumbers Micro Conference is as follows. Note presentation slides can be found on the Plumbers page by following the links to the abstracts:


  Session 1 - Presenter 1
  Session 2 - Presenter 2
  etc…



Discussion notes



This is a good place to record notes from your session. All too often, if notes were not written down, the session might as well not have happened.
Contact



Proposal added by <Johh_Mehaffey at mentor dot com>

### 添付資料URL

掲載なし

## Tracing（提案）

https://wiki.linuxplumbersconf.org/2013:tracing

Tracing




Withdrawed, due to key people not being able to attend.

### 添付資料URL

掲載なし

## High Availability and Storage（提案）

https://wiki.linuxplumbersconf.org/2013:high_availability_and_storage

Storage and High Availability




The Linux Plumbers 2013 Storage and HA track is focusing on the future development of the High-Availability stack on Linux. This centers on the Pacemaker and corosync ecosystem, but extends to resource agents, fencing, cluster file systems, distributed storage, and their user interfaces. The goal is to further collaboration between projects, shared core libraries and functionality, and identify key roadmap items.



Attendees are more important than pre-defined topics.



The structure will be open space based, with a very brief introduction to the process in the beginning. All attendees are encouraged to familiarize themselves with the concept ahead of the microconference 



(lmb volunteers as the moderator.)




Schedule




The schedule of an OST event is notoriously hard to plan in advance. However, topics of interest are collected here, and the slides and discussion notes will be linked from here later.



The schedule of the 2013 Microconference-Name Plumbers Micro Conference is as follows. Note presentation slides can be found on the Plumbers page by following the links to the abstracts:


 Session 1 - Presenter 1

 Session 2 - Presenter 2

 etc…





Possible topics


 DoD-certified scrubbing

 Every FOSS bolt-on filesystem (e.g. Hadoop, OrangeFS) is currently missing this feature, precluding adoption in the aerospace and defense sectors.

 A central library/utility that could be quickly integrated into multiple to existing applications would be ideal.

 The library/utility would either need to include a mechanism for scrubbing metadata as well as content, or offer accessible hooks for the addition of this feature by the various filesystem teams.







Discussion notes




To be filled in.




Contact




Proposal added by Lars Marowsky-Brée lmb@suse.com

### 添付資料URL

掲載なし


# 資料ページの追加動画（個別セッションとの対応未確定）

2013年はOCW形式。資料・動画ページから参照されたスケジュールの個別URL付き枠104件を収録。Descriptionは個別ページのAbstract原文。One Line Summaryは別フィールドに保持。資料URLは原記載を保持し、スケジュールに別のアーカイブURLがある場合はschedule_urlも収録。添付ファイル本体の取得・リンク有効性検査は実施していない。Wikiの採用済み・提案情報は補足に区別して収録し、個別セッション数には加算しない。WikiのTentative/Proposed等は原文通り。 資料ページの動画99件を照合し、対応を確認した動画はセッションのattachmentsにも収録。導入・全体会議・追加トークなど、個別セッションとの対応を確定できない動画はadditional_resource_entriesに分け、個別URLとDescriptionは未掲載として保持。1本の動画が複数セッションを扱う場合があるため、セッション別リンク件数と動画の実数は異なる。

## Opening Plenary

- セッション個別URL: 掲載なし／対応未確定
- Description: 掲載なし
- 動画URL: http://www.youtube.com/watch?v=DFdCVfiICNU

## Closing Plenary

- セッション個別URL: 掲載なし／対応未確定
- Description: 掲載なし
- 動画URL: http://www.youtube.com/watch?v=HO_hVTOqwA4

## Intro to Automotive Miniconf

- セッション個別URL: 掲載なし／対応未確定
- Description: 掲載なし
- 動画URL: http://www.youtube.com/watch?v=EQkWHv0URNE

## INTRO: Network Virtualisation

- セッション個別URL: 掲載なし／対応未確定
- Description: 掲載なし
- 動画URL: http://www.youtube.com/watch?v=bfE_pQS4JPg

## Intro

- セッション個別URL: 掲載なし／対応未確定
- Description: 掲載なし
- 動画URL: http://www.youtube.com/watch?v=vo97od6vfg8

## Signature Verification fo Hibernate Snapshot

- セッション個別URL: 掲載なし／対応未確定
- Description: 掲載なし
- 動画URL: http://www.youtube.com/watch?v=snXZIP2JJtg

## Intro

- セッション個別URL: 掲載なし／対応未確定
- Description: 掲載なし
- 動画URL: http://www.youtube.com/watch?v=mfHw-Nr31hk

## KMS Extensions

- セッション個別URL: 掲載なし／対応未確定
- Description: 掲載なし
- 動画URL: http://www.youtube.com/watch?v=oubvzVWZuiA

## Intro To Android Micro-Conference

- セッション個別URL: 掲載なし／対応未確定
- Description: 掲載なし
- 動画URL: http://www.youtube.com/watch?v=FeTdB83XLuU

## Power-efficient Scheduling

- セッション個別URL: 掲載なし／対応未確定
- Description: 掲載なし
- 動画URL: http://www.youtube.com/watch?v=sTLyK1kWFio

## Diverse Talks

- セッション個別URL: 掲載なし／対応未確定
- Description: 掲載なし
- 動画URL: http://www.youtube.com/watch?v=0ou8RQoBsPg

## Lightning Talks

- セッション個別URL: 掲載なし／対応未確定
- Description: 掲載なし
- 動画URL: http://www.youtube.com/watch?v=9dH9C7VJJiw


# 全体枠（18件）

## Automotive

- URL: https://blog.linuxplumbersconf.org/2013/ocw/events/LPC2013/schedule#track-135
- 日時: Wednesday, September 18, 2013 10:50am – 12:40pm

Etherpad: http://etherpad.osuosl.org/lpc2013-automotive

## Network Virtualization I

- URL: https://blog.linuxplumbersconf.org/2013/ocw/events/LPC2013/schedule#track-177
- 日時: Wednesday, September 18, 2013 10:50am – 12:40pm

Etherpad: http://etherpad.osuosl.org/lpc2013-network-virtualization

## Boot and Core OS

- URL: https://blog.linuxplumbersconf.org/2013/ocw/events/LPC2013/schedule#track-147
- 日時: Wednesday, September 18, 2013 2:00 – 4:45pm

Etherpad: http://etherpad.osuosl.org/lpc2013-boot-and-core-os

## Network Virtualization II

- URL: https://blog.linuxplumbersconf.org/2013/ocw/events/LPC2013/schedule#track-213
- 日時: Wednesday, September 18, 2013 2:00 – 4:45pm

Etherpad: http://etherpad.osuosl.org/lpc2013-network-virtualization

## Scaling

- URL: https://blog.linuxplumbersconf.org/2013/ocw/events/LPC2013/schedule#track-189
- 日時: Wednesday, September 18, 2013 2:00 – 4:45pm

Etherpad: http://etherpad.osuosl.org/lpc2013-scaling

## ACPI/PM, PCI subsystems I

- URL: https://blog.linuxplumbersconf.org/2013/ocw/events/LPC2013/schedule#track-183
- 日時: Thursday, September 19, 2013 9:00am – Noon

Etherpad http://etherpad.osuosl.org/lpc2013-acpipm-pci-subsystems

## LLVM I

- URL: https://blog.linuxplumbersconf.org/2013/ocw/events/LPC2013/schedule#track-171
- 日時: Thursday, September 19, 2013 9:00am – Noon

Etherpad: http://etherpad.osuosl.org/lpc2013-llvm

## Secure Boot

- URL: https://blog.linuxplumbersconf.org/2013/ocw/events/LPC2013/schedule#track-141
- 日時: Thursday, September 19, 2013 9:00am – Noon

Etherpad: http://etherpad.osuosl.org/lpc2013-secure-boot

## ACPI/PM, PCI subsystems II

- URL: https://blog.linuxplumbersconf.org/2013/ocw/events/LPC2013/schedule#track-225
- 日時: Thursday, September 19, 2013 2:00 – 3:15pm

Etherpad: http://etherpad.osuosl.org/lpc2013-acpipm-pci-subsystems

## Containers

- URL: https://blog.linuxplumbersconf.org/2013/ocw/events/LPC2013/schedule#track-153
- 日時: Thursday, September 19, 2013 2:00 – 4:45pm

Etherpad: http://etherpad.osuosl.org/lpc2013-containers

## Graphics and Display

- URL: https://blog.linuxplumbersconf.org/2013/ocw/events/LPC2013/schedule#track-165
- 日時: Thursday, September 19, 2013 2:00 – 4:45pm

Etherpad: http://etherpad.osuosl.org/lpc2013-graphics-and-display

## LLVM II

- URL: https://blog.linuxplumbersconf.org/2013/ocw/events/LPC2013/schedule#track-219
- 日時: Thursday, September 19, 2013 3:30 – 4:45pm

Etherpad: http://etherpad.osuosl.org/lpc2013-llvm

## Android and Graphics

- URL: https://blog.linuxplumbersconf.org/2013/ocw/events/LPC2013/schedule#track-237
- 日時: Friday, September 20, 2013 9:00am – Noon

Etherpad: http://etherpad.osuosl.org/lpc2013-android-and-graphics

## File and Storage Systems I

- URL: https://blog.linuxplumbersconf.org/2013/ocw/events/LPC2013/schedule#track-159
- 日時: Friday, September 20, 2013 9:00am – Noon

Etherpad: http://etherpad.osuosl.org/lpc2013-file-storage-systems

## Power-efficient Scheduling

- URL: https://blog.linuxplumbersconf.org/2013/ocw/events/LPC2013/schedule#track-207
- 日時: Friday, September 20, 2013 9:00am – Noon

Etherpad: http://etherpad.osuosl.org/lpc2013-power-efficient-scheduling

## Android

- URL: https://blog.linuxplumbersconf.org/2013/ocw/events/LPC2013/schedule#track-129
- 日時: Friday, September 20, 2013 2:00 – 4:45pm

Discussions on merging some of the remaining out-of-tree Android functionality upstream. Etherpad: http://etherpad.osuosl.org/lpc2013-android

## File and Storage Systems II

- URL: https://blog.linuxplumbersconf.org/2013/ocw/events/LPC2013/schedule#track-231
- 日時: Friday, September 20, 2013 2:00 – 4:45pm

Etherpad: http://etherpad.osuosl.org/lpc2013-file-storage-systems

## Virtualization

- URL: https://blog.linuxplumbersconf.org/2013/ocw/events/LPC2013/schedule#track-195
- 日時: Friday, September 20, 2013 2:00 – 4:45pm

Etherpad: http://etherpad.osuosl.org/lpc2013-virtualization
