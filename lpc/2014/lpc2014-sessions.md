# Linux Plumbers Conference 2014 全セッション一覧

出典: https://blog.linuxplumbersconf.org/2014/ocw/events/LPC2014/schedule

2014年はOCW形式でproposalsとsessionsの両形式が混在。開催スケジュールの個別URL付き枠121件を収録。Descriptionは個別ページのAbstract原文。One Line Summaryは別フィールドに保持。資料URLは個別ページの原記載を保持し、スケジュールに別のアーカイブURLがある場合はschedule_urlも収録。添付ファイル本体の取得・リンク有効性検査は実施していない。Wiki Topicsは採用済み15件、BoF 1件、Abandoned 2件を補足に区別して収録し、個別セッション数には加算しない。WikiのTentative/Proposed等は原文通り。個別開始時刻が未掲載の41件は空欄のまま保持。全体の16枠も補足に収録。

セッション: 121件 / Descriptionあり: 121件 / 資料あり: 48件 / 資料項目: 48件

## 目次

1. [Smart system shutdown](#session-2325)
2. [Remote Vehicle Interaction (RVI)](#session-2559)
3. [Process isolation for autonomous driving.](#session-2457)
4. [Ftrace kernel hooks, more than just tracing](#session-1773)
5. [Using Persistent Memory Effectively](#session-1785)
6. [ACPI And Device Trees - Friends Or Foes?](#session-1791)
7. [Automatic NUMA Balancing](#session-1803)
8. [How to design a Linux kernel API](#session-1755)
9. [Scaling Userspace @ Facebook](#session-1767)
10. [First glimpse at shingled drives](#session-1779)
11. [Network Queuing is all wet](#session-1797)
12. [Linux kernel tinification](#session-1809)
13. [Systematic testing of fault handling code in Linux kernel](#session-2385)
14. [vampyr: configurability aware compile-testing of source files](#session-2313)
15. [Testing Multiple Architectures Using QEMU](#session-1851)
16. [Development Tools Discussion](#session-1857)
17. [Undertaker-checkpatch: how to avoid #ifdef bugs in the Linux kernel](#session-1863)
18. [Coccinelle: A program matching and transformation tool](#session-1869)
19. [Backporting the kernel with SmPL](#session-1887)
20. [GCC and LLVM collaboration review](#session-2193)
21. [How to fix bugs automatically?](#session-2289)
22. [Virtualized high performance (DPDK) packet processing](#session-1821)
23. [Does network packet format matter?](#session-2445)
24. [Encrypted VXLAN](#session-2451)
25. [Geneve: Generic Network Virtualization Encapsulation](#session-1947)
26. [OVS Micro Summit Summary](#session-2475)
27. [A High Performance Socket Interface in Linux](#session-2493)
28. [UDP encapsulation, FOU, GUE, & RCO](#session-2535)
29. [Integrated Network Virtualization](#session-2541)
30. [Adding stateful features to OVS](#session-2547)
31. [Real-Time Virtualization - How Crazy Are We?](#session-1935)
32. [Long-term testing](#session-1953)
33. [Current state of full dynticks](#session-2223)
34. [Following mainline with PREEMPT_RT](#session-2265)
35. [Welcome: Android upstreaming status](#session-2403)
36. [Introduction to AARCH64](#session-2361)
37. [dma-fence & android sync](#session-2355)
38. [Ion and the DMA coherency model](#session-2409)
39. [Moving code out of staging](#session-2379)
40. [Moving Android towards clang](#session-2037)
41. [Bionic - 64 bit ABI and 64-bit ART](#session-2337)
42. [Porting Generic Android Drivers and 64-bit Binder ABI](#session-2373)
43. [Migrating code from ARM to ARM64](#session-2343)
44. [Power management discussion: Big.Little](#session-2367)
45. [Other Topics - Look Here for slides and uploads](#session-2121)
46. [Filesystem Status and Updates](#session-2307)
47. [Support for open-channel SSDs and flash-agnostic APIs](#session-2079)
48. [How to evaluate block allocator changes](#session-2277)
49. [FS-Cache for file systems in userspace](#session-2247)
50. [SMR integration and how to overcome layering issues](#session-2301)
51. [DRBD9 and drbdmanage](#session-2271)
52. [Read Write Semaphore bottlenecks](#session-2577)
53. [SIL2LinuxMP: GNU/Linux Multicore platform for safety related systems](#session-2583)
54. [Avoiding some of the mmap_sem usage](#session-2589)
55. [RT Status report](#session-2595)
56. [What's missing for Miracast?](#session-2103)
57. [Extremely high speed and high coverage home wifi](#session-2145)
58. [Cloud-based wireless packet capture, sharing, analysis, and diagnosis](#session-2151)
59. [AP Group Features](#session-1911)
60. ["Minstrel-Blues" - Practical Joint Rate und Power Control in Linux mac80211 with todays 802.11b/g/a/n Chips](#session-2439)
61. [generalized firmware coredump support](#session-2205)
62. [randomized MAC address scanning](#session-2211)
63. [Generic Support for ARM TrustZone](#session-1977)
64. [Linux packet processing performance improvements](#session-2469)
65. [VFIO and the Freescale Management Complex](#session-1989)
66. [Docker and the Linux kernel](#session-2499)
67. [Network switching offload architecture for the Linux kernel (Part I)](#session-2463)
68. [Obsoleting support for old hardware](#session-1707)
69. [VFIO and Management of Errors](#session-1995)
70. [Android/Mobile Wearables](#session-2601)
71. [Network switching offload architecture for the Linux kernel (Part II)](#session-2565)
72. [LXC after 1.0](#session-2487)
73. [Are containers that we have now secure enough?](#session-1959)
74. [Checkpoint/restore of containers with CRIU](#session-1899)
75. [systemd and containers: standards, integration, and APIs](#session-1737)
76. [Kubernetes and Google: 5 lessons learned from 8+ years of containers](#session-2199)
77. [Resource management across different tools](#session-1749)
78. [FUSE mounts from user namespaces](#session-2163)
79. [Dynamic device management in an LXC environment](#session-2157)
80. [How far are we from running distributions inside containers?](#session-2115)
81. [Tools to analyse scheduling and energy efficiency](#session-1881)
82. [The next event with the io latency tracking](#session-2397)
83. [Integrating Scheduler and CPU Power Management Subsystems](#session-1941)
84. [CPUfreq and scheduler integration](#session-2427)
85. [Energy-model guided scheduler decisions](#session-1815)
86. [What's new in the LLVM Ecosystem, and how does that affect the kernel?](#session-2571)
87. [LLVMLinux progress](#session-2319)
88. [What's left to make allyesconfig on x86_64](#session-2391)
89. [LLVM AArch64](#session-2217)
90. [Using LLVM to generate call graphs for the Linux kernel](#session-1965)
91. [LLVM ARM Toolchain](#session-1971)
92. [Switching OpenMandriva to clang](#session-2025)
93. [Building Android userland with clang](#session-2031)
94. [Correlating timestamps in user and kernel space](#session-1725)
95. [Linux Tracing Strategy](#session-2517)
96. [Use of Common Trace Format (CTF) among different tracers](#session-1839)
97. [Sharing kernel tools code](#session-2511)
98. [Rich probe filtering and reporting with variable locations and types](#session-2523)
99. [IOMMU Fault Handling](#session-2001)
100. [Consolidating IOMMU Drivers](#session-1905)
101. [Exposing a virtual IOMMU interface to KVM guests](#session-2019)
102. [VFIO and non-DMA devices](#session-2241)
103. [IOMMU Page Faulting an Linux MM Integration](#session-2253)
104. [Handling device identity mappings in the IOMMU API](#session-2007)
105. [Overview of the Live Kernel Patching methods](#session-2043)
106. [kpatch vs kGraft](#session-1875)
107. [Updating the kernel using CRIU and KExec](#session-1893)
108. [What features are needed from a live patching solution?](#session-2295)
109. [Exploring synergies between Linux Kernel and Xen hypervisor live patching](#session-2421)
110. [Introduction to networkd](#session-2085)
111. [NetworkManager Status Update](#session-2055)
112. [ConnMan status update](#session-2127)
113. [Traffic control for multimedia applications](#session-1923)
114. [Bringing WiFi P2P connectivity to higher level via ConnMan](#session-2061)
115. [DNSSEC and split DNS using unbound and dnssec-trigger](#session-2067)
116. [systemd-resolved](#session-1743)
117. [Enlightenment as Wayland Compositor](#session-1833)
118. [Porting Tizen IVI to Wayland](#session-2133)
119. [Standardizing privileged operations](#session-2433)
120. [Graphics beyond the main compositor](#session-2229)
121. [Moving to the user-bus](#session-2235)

<a id="session-2325"></a>
## 1. Smart system shutdown

- セッション個別URL: https://blog.linuxplumbersconf.org/2014/ocw/proposals/2325
- Track: Automotive
- 日時: Wednesday, October 15, 2014 9:00am

### Description

A cars infotainment system is not necessarily shutdown once the car is stoppend and the key is removed. There are certain scenarios where the system has to remain active.

With a regular phone call, when the car is turned off, the system should only shutdown if the call is ended or the battery level reaches a point where ignition of the car would be impossible.

In case of an accident, modern cars use an eCall to automatically contact emergency services and transmit relevant data. Since the electronic system itself is an additional cause for injuries, it needs to be shutdown once the eCall is finished.

An eCall can also be started manually, e.g. in case of a medical emergency. In these cases the system must stay active even if the battery level is getting low.

In this session we would like to discuss if systemd inhibitors are capable of dealing with these scenarios and should limitations exist, how they can be fixed.

### One Line Summary

How systemd inhibitors can be used to handle system shutdown in eCall and telephony scenarios.

### 添付資料URL

- [slides](http://www.linuxplumbersconf.net/2014/ocw//system/presentations/2325/original/smart-system-shutdown.pdf)（file）


- スケジュール掲載のアーカイブURL: https://blog.linuxplumbersconf.org/2014/ocw/system/presentations/2325/original/smart-system-shutdown.pdf
<a id="session-2559"></a>
## 2. Remote Vehicle Interaction (RVI)

- セッション個別URL: https://blog.linuxplumbersconf.org/2014/ocw/proposals/2559
- Track: Automotive
- 日時: Wednesday, October 15, 2014 9:30am

### Description

A connected car platform that allows OEMs to easily enable value-added services themselves and through partners will benefit the ecosystem of their brands:

80% of the connected car functionality is shared across platforms – Core in-vehicle telematics and cloud backend functionality are common in architecture and similar in implementation. The remaining 20% are the services that define the user experience.

A shared, open-source platform will benefit OEMs – A joint architecture and reference implementation allows OEMs to minimize cost, eliminated vendor dependencies and mitigate security risks allowing them to focus on applications and services that offer market differentiation.

A shared, open-source platform will enable service providers – Market adoption is key to success. To attract service providers the size of the ecosystem is of significance. A common architecture allows service providers to easily port their offerings to multiple OEMs, this giving them a diversified revenue stream from multiple vendors.

A shared, open-source platform will reduce time to market – Development cycles in the automotive industry are more than twice as long as the lifespan of the average startup company. To create an innovative and fast moving market place that allows young companies to develop in-vehicle apps and their corresponding backend services on an OEM-approved platform within weeks or months and showcase the product to the OEMs.

Remote Vehicle Interaction (RVI) is an open-source project initiated by Jaguar Land Rover and hosted by AGL with the objective to develop vendor-neutral telematics framework that can easily be adopted and extended:

Pluggable Architecture – The framework follows strict “design-to-the-interface” rules. The APIs are at the center. The reference implementation is an example albeit one that strives for production quality.

Device, service and connection agnostic – Devices shall be able to access services on other visible devices regardless of device operating system and whether a connection is made directly or via Internet.

Peer-to-peer based – Devices can access services via local networks without an Internet connection.
Dynamic Provisioning – Nodes and services can be added to or removed from the system at runtime without relying on a centralized provisioning system.

Granular Authentication & Authorization – All authentication and authorization is done on the service level against certified credentials.

Service Discovery – Applications and services can discover and invoke other services.
Low-overhead Invocation – Services can be remotely invoked over sparsely connected networks.

### One Line Summary

RVI is an open source framework for connecting vehicles to cloud services and mobile devices that handles authentication, authorization, discovery of services and data exchange over any network topology.

### 添付資料URL

- [slides](http://www.linuxplumbersconf.net/2014/ocw//system/presentations/2559/original/Remote Vehicle Interaction AGL Presentation rev3.pdf)（file）


- スケジュール掲載のアーカイブURL: https://blog.linuxplumbersconf.org/2014/ocw/system/presentations/2559/original/Remote Vehicle Interaction AGL Presentation rev3.pdf
<a id="session-2457"></a>
## 3. Process isolation for autonomous driving.

- セッション個別URL: https://blog.linuxplumbersconf.org/2014/ocw/proposals/2457
- Track: Automotive
- 日時: Wednesday, October 15, 2014 10:00am

### Description

Linux has already made it into cars, but is currently only applied in the infotainment domain. In future car manufacturers plan to leverage Linux and its eco system also for safety relevant software, like for driver assistance and autonomous driving.

Autonomous driving functions require high-performance computing with strong safety and security demands. Such systems will consist of multiple and partially redundant software components. Therefore, one key capability of such systems is to isolate faulty or malicious behavior of individual software components from each other. Interference is for example possible through shared resources, such as caches and exhausting of kernel objects (inodes, task slots, …).

Virtualization solutions seem not appropriate because number of software components greatly exceeds available CPU cores. Further more, the nature of software algorithms requires dynamic resource allocation to software components during runtime, which is hard to achieve with full virtualization technologies.

The Linux kernel gained real-time capability through the PREEMPT_RT work and OSADL is currently pushing towards safety qualification in the SIL2LinuxMP project. Current work in the Linux community is focusing on appropriate scheduling and memory partitioning techniques.

In this topic, I like to explore capabilities and limits of the mainline Linux kernel to achieve strong process isolation fulfilling the above mentioned boundary conditions.

### One Line Summary

How mainline kernels support enforcement of freedom from interference between processes.

### 添付資料URL

- [slides](http://www.linuxplumbersconf.net/2014/ocw//system/presentations/2457/original/20141015_LPC_Isolation.pdf)（file）


- スケジュール掲載のアーカイブURL: https://blog.linuxplumbersconf.org/2014/ocw/system/presentations/2457/original/20141015_LPC_Isolation.pdf
<a id="session-1773"></a>
## 4. Ftrace kernel hooks, more than just tracing

- セッション個別URL: https://blog.linuxplumbersconf.org/2014/ocw/sessions/1773
- Track: Refereed Talks
- 日時: Wednesday, October 15, 2014 11:15am

### Description

The function hook facility of ftrace is what makes ftrace stand out from other kernel tracers. The ability of live modification of the kernel to convert a nop into a ftrace callback has revolutionized tracing inside the kernel. Because it is dynamic, ftrace gives you the ability to chose what functions are to be traced, as well as tracing all functions within the kernel. This talk is not about tracing though, it is about what is coming in the future and the hurdles that needs to overcome and how it will be done. The ftrace function hooks allows for “hijacking” of a function. That is, when the function is called, the hook can intercept the call and divert it to call another function. Live patching such as kgraft and kpatch were built on this facility. To use these new features of ftrace, more must be done. This talk will go over how the hooks work and what more needs to be done.

### One Line Summary

The audience is aimed at developers. You do not need to be a kernel developer to enjoy this talk. Just someone that enjoys the art of programming and the crazy ideas that are performed to overcome such obstacles. Live code modification is not trivial, and now the new features of allocating code on the fly makes it even more radical. This is not a trivial task; it requires understanding how the CPU pipeline works as well as all states that the kernel can be in.

### 添付資料URL

- [slides](https://blog.linuxplumbersconf.org/2014/ocw/system/presentations/1773/original/ftrace-kernel-hooks-2014.pdf)（file）

<a id="session-1785"></a>
## 5. Using Persistent Memory Effectively

- セッション個別URL: https://blog.linuxplumbersconf.org/2014/ocw/sessions/1785
- Track: Refereed Talks
- 日時: Wednesday, October 15, 2014 11:15am

### Description

Previous presentations on Persistent Memory have focused on the challenges that arise when providing raw access to the PM.  This presentation focuses on the challenges facing user programs when they try to use PM.  Matthew will review some of the difficulties in using mmaped storage (whether backed by PM or a regular file), and present some best practices and solutions included in the NVM Library.

### One Line Summary

The audience is application and system level programmers.  Attendees should leave this talk understanding the problems that they may encounter when trying to use Persistent Memory and some potential solutions to them.

### 添付資料URL

掲載なし

<a id="session-1791"></a>
## 6. ACPI And Device Trees - Friends Or Foes?

- セッション個別URL: https://blog.linuxplumbersconf.org/2014/ocw/sessions/1791
- Track: Refereed Talks
- 日時: Wednesday, October 15, 2014 12:15pm

### Description

ACPI was introduced when hardware compatibility with the IBM PC became insufficient to maintain the PC ecosystem. It allowed a single binary OS image to run on various platforms using the same CPU architecture, but not exactly hardware-compatible with one another. Today, Device Trees are used to address the same platform fragmentation problem in the ARM ecosystem. Of course, there are differences between ACPI and DT. Unlike DT, ACPI had a difficulty with passing arbitrary data to the OS, but that limitation is now being removed. With ACPI now able to provide the same data as DT, a need has arisen for a shared firmware-interface-agnostic specification of hardware properties. Similarly, the platform firmware interface access for device drivers in the OS should be unified, so the same driver can work equally well on systems with ACPI or DT. I will discuss work toward that goal in Linux.

### One Line Summary

The audience are Linux kernel developers working on device drivers and the driver core as well as anyone interested in the interactions between the kernel and the platform firmware. Attendees can expect an overview of the problems addressed by ACPI and Device Trees, an outline of similarities and differences between the two platform firmware interfaces, a description of kernel modifications that would allow device drivers to use configuration data provided by the platform firmware in a uniform way, regardless of which firmware interface (ACPI or DT) is used by the given platform, and more.

### 添付資料URL

掲載なし

<a id="session-1803"></a>
## 7. Automatic NUMA Balancing

- セッション個別URL: https://blog.linuxplumbersconf.org/2014/ocw/sessions/1803
- Track: Refereed Talks
- 日時: Wednesday, October 15, 2014 12:15pm

### Description

In NUMA systems, each CPU has its own bank of memory, resulting in fast access to local memory, and slower access to memory elsewhere in the system. Recently a mechanism has been implemented in the Linux kernel to automatically run programs near their memory, and to move memory to near the programs using it. This presentation explains why computers are built this way, why NUMA locality matters, how the automatic NUMA balancing kernel code works, what it can do, and what kind of performance improvements have been observed. This presentation is also a good opportunity to discuss recent and future developments for the automatic NUMA balancing code.

### One Line Summary

The audience is anyone interested in the performance characteristics of NUMA systems, as well as people interested in how automatic NUMA balancing works.

### 添付資料URL

掲載なし

<a id="session-1755"></a>
## 8. How to design a Linux kernel API

- セッション個別URL: https://blog.linuxplumbersconf.org/2014/ocw/sessions/1755
- Track: Refereed Talks
- 日時: Wednesday, October 15, 2014 2:30pm

### Description

The Linux kernel-user-space API is littered with design errors: APIs that are non-extensibe, unmaintainable, overly complex, limited-purpose, violations of standards, and inconsistent. Most of those mistakes can’t be fixed because doing so would break the ABI that the kernel presents to user-space binaries. To further rub salt into the wound, kernel-user-space APIs are often buggy when first shipped.

Thus, it’s important to get API designs right the first time. Taking (good and bad) examples from past APIs, I’ll cover a number ideas on improving the design of future kernel user-space APIs. Those tips are relevant both for kernel developers producing the APIs and for user-space programmers looking at what kernel developers are serving to them. I’ll also look at some strategies that developers can pursue in order to get help with improving the designs of APIs that they are producing.

### One Line Summary

The intended audience is kernel developers and user-space programmers with an interest in the long-term health of the kernel-user-space API, and anyone with an interest in API design.

### 添付資料URL

掲載なし

<a id="session-1767"></a>
## 9. Scaling Userspace @ Facebook

- セッション個別URL: https://blog.linuxplumbersconf.org/2014/ocw/sessions/1767
- Track: Refereed Talks
- 日時: Wednesday, October 15, 2014 2:30pm

### Description

Ben Maurer will discuss the server workloads that Facebook runs across its fleet. Ben will talk about work Facebook has done in various systems areas such as:

- Memory management: improvements we’ve made to memory allocation performance with jemalloc, reducing fragmentation in programs with large numbers of threads, and increasing performance with the use of NUMA.
- Synchronization: LifoSem — a last, in first out semaphore built on top of futex
- Scheduling: using CPU queuing delay to measure capacity
- Networking: measuring network performance with TCP tracepoints.

### One Line Summary

The audience is for Linux kernel developers, developers of low-level systems libraries and developers of applications with high performance demands from the kernel. The audience can expect details of the types of issues we've encountered running large applications at Facebook, workarounds that we've had to use, and pointers to code that we've open sourced.

### 添付資料URL

掲載なし

<a id="session-1779"></a>
## 10. First glimpse at shingled drives

- セッション個別URL: https://blog.linuxplumbersconf.org/2014/ocw/sessions/1779
- Track: Refereed Talks
- 日時: Wednesday, October 15, 2014 3:30pm

### Description

Recently storage vendors have advocated ‘shingled media recording’ devices. These drives are estimated to provide larger capacity than existing drives, but at the same time introduce a new access model. Hence it will not be possible to use them as all-purpose drives without modifications to the storage stack. For Linux there are two different proposals for handling these devices, either by using modified filesystems or by adding a device-mapper module.
This talk gives an overview about the technology behind shingled media recording and the proposed changes to the linux storage stack.
I will also present the results from running a modified stack on a pre-production device and its implications for further development.

### One Line Summary

Anyone interested in modern storage technologies and trends.

### 添付資料URL

掲載なし

<a id="session-1797"></a>
## 11. Network Queuing is all wet

- セッション個別URL: https://blog.linuxplumbersconf.org/2014/ocw/sessions/1797
- Track: Refereed Talks
- 日時: Wednesday, October 15, 2014 3:30pm

### Description

Why is my network slow? This is the most common user complaint in both home and enterprise environments. Many of these problems are caused by queuing problems in the network.

This talk will show some of the solutions developed, demonstrate how they work, and identify where more work still needs to be done. The demonstrations use the analogy of fluid dynamics to explain CoDel, PIE, and other smart queuing mechanisms.

### One Line Summary

The audience is anyone who uses networking (ie everyone). The talk is meant to be informative and entertaining at the same time.

### 添付資料URL

掲載なし

<a id="session-1809"></a>
## 12. Linux kernel tinification

- セッション個別URL: https://blog.linuxplumbersconf.org/2014/ocw/sessions/1809
- Track: Refereed Talks
- 日時: Wednesday, October 15, 2014 4:30pm

### Description

Cell phones and routers hardly qualify as “embedded” anymore; new embedded systems (or the new Things we will have an Internet Of) push for ever smaller storage and memory requirements. Most people building systems that small assume that Linux will not work for them, and that they have to use a dedicated embedded OS or custom code from scratch.

This talk will show just how small Linux can get while remaining functional, what it’ll take to push Linux an order of magnitude smaller in the future, and how kernel and systems developers can avoid regressions in memory or storage requirements.

### One Line Summary

How small can the Linux kernel get today?  What would it take to make it an order of magnitude smaller?  A detailed look at kernel configuration, what's really required in the kernel versus what's optional, and what you can expect over the next few years of further kernel tinification.

### 添付資料URL

掲載なし

<a id="session-2385"></a>
## 13. Systematic testing of fault handling code in Linux kernel

- セッション個別URL: https://blog.linuxplumbersconf.org/2014/ocw/sessions/2385
- Track: Refereed Talks
- 日時: Wednesday, October 15, 2014 4:30pm

### Description

“The talk presents a method to extend coverage of existing tests by systematic and targeted fault injection in Linux kernel. The method is developed within Linux File System Verification project that aims to provide an exhaustive test suite for Linux file system drivers.

The presented method of fault injection allows to systematically simulate faults dedicated to a file system driver under test (faults of memory allocation requests, bio layer, etc.). That means it does not introduce faults into requests coming from other modules and it implements systematic iteration of fault situations versus a prevailing random approach.

The talk presents results of experiments with the method, defines requirements to tests so they can be used with the method and discusses lessons learnt so far."

### One Line Summary

The target audience is Linux kernel developers as well as anyone who
is interested in advanced verification and testing techniques, for example, 
to build, verify and certify safety or security critical systems on top of Linux kernel.

### 添付資料URL

掲載なし

<a id="session-2313"></a>
## 14. vampyr: configurability aware compile-testing of source files

- セッション個別URL: https://blog.linuxplumbersconf.org/2014/ocw/proposals/2313
- Track: Development Tools
- 日時: Thursday, October 16, 2014 

### Description

Some bugs in the linux kernel only appear with specific configurations. In the same way, it’s possible that compiler errors and warnings only emerge with specific configurations, because configurable CPP-Blocks hide the code from the compiler. Compile-testing source code with all possible configurations is a tedious and error prone task. Maintainers often compile changes with the ‘make allyesconfig’ configuration, which doesn’t necessarily cover the whole code. 
Our approach delegates compile-testing to a tool called ‘vampyr’.

The talk includes global coverage statistics of ‘allyesconfig’ in comparison to the results of the
vampyr approach for linux versions v3.2 and v3.16.

### One Line Summary

I present a tool, which compile-tests sourcefiles with a high coverage of configurable CPP-blocks.

### 添付資料URL

- [slides](http://www.linuxplumbersconf.net/2014/ocw//system/presentations/2313/original/hengelein.pdf)（file）


- スケジュール掲載のアーカイブURL: https://blog.linuxplumbersconf.org/2014/ocw/system/presentations/2313/original/hengelein.pdf
<a id="session-1851"></a>
## 15. Testing Multiple Architectures Using QEMU

- セッション個別URL: https://blog.linuxplumbersconf.org/2014/ocw/proposals/1851
- Track: Development Tools
- 日時: Thursday, October 16, 2014 

### Description

QEMU system emulation is useful for testing Linux kernels, libraries, and applications built for varying instruction set architectures. Without such a tool it is difficult and expensive to test changes that for example replace code duplicated across architecture-specific subdirectories with a common implementation. I will discuss my experience implementing `make ARCH=all test` for the Checkpoint and Restore In Userspace – CRIU project.

### One Line Summary

Discussing how `make ARCH=all test` for Linux libraries and applications can be realized.

### 添付資料URL

掲載なし

<a id="session-1857"></a>
## 16. Development Tools Discussion

- セッション個別URL: https://blog.linuxplumbersconf.org/2014/ocw/proposals/1857
- Track: Development Tools
- 日時: Thursday, October 16, 2014 

### Description

The goal of the development tools microconference is not only to present new tools that are available, but also to get feedback from the Linux kernel developer community.  What tasks could benefit from tool support?  Are existing tools sufficient?  How could they be improved?  How can we ensure that developers use the tools that are available?  What kind of documentation, training, support, etc. are needed?

### One Line Summary

Discussion

### 添付資料URL

掲載なし

<a id="session-1863"></a>
## 17. Undertaker-checkpatch: how to avoid #ifdef bugs in the Linux kernel

- セッション個別URL: https://blog.linuxplumbersconf.org/2014/ocw/proposals/1863
- Track: Development Tools
- 日時: Thursday, October 16, 2014 

### Description

Variability related bugs in the Linux kernel can stem from various sources. An #ifdef block may reference a broken Kconfig feature (e.g., the feature is not defined or it’s a typo). Contradictory dependencies in Kconfig may also forcefully set a feature’s value. Other bugs may be caused by conflicting preconditions of #ifdef blocks. Despite all these bugs have different causes and effects, they have one thing in common: they are hard to analyze.

The talk includes the results of an empirical case study of variability related bugs in 24 versions of the Linux kernel (v2.6.29-v3.12) and a tool, which checks and analyzes the causes and effects of such bugs in Git commits

### One Line Summary

I present a tool, which checks Git commits for variability related #ifdef bugs.

### 添付資料URL

- [slides](http://www.linuxplumbersconf.net/2014/ocw//system/presentations/1863/original/rothberg.pdf)（file）


- スケジュール掲載のアーカイブURL: https://blog.linuxplumbersconf.org/2014/ocw/system/presentations/1863/original/rothberg.pdf
<a id="session-1869"></a>
## 18. Coccinelle: A program matching and transformation tool

- セッション個別URL: https://blog.linuxplumbersconf.org/2014/ocw/proposals/1869
- Track: Development Tools
- 日時: Thursday, October 16, 2014 

### Description

Coccinelle is a program matching and transformation engine which provides the Semantic Patch Language for specifying desired matches and transformations in C code.  Coccinelle has been used in past for finding bugs in Linux and performing evolutions. Coccinelle scripts are part of the Linux source distribution, being used by Linux developers on a regular basis. In the presentation, Himangi will review the impact of Coccinelle on the Linux kernel. Himangi will briefly introduce the structure of Coccinelle scripts. She will talk about managed interfaces like devm_ functions, will explain how coccinelle helps detect use-cases and transform them, and will give some examples of code changes. Himangi will discuss about other coccinelle patches such as ARRAY_SIZE, missing iounmap which leads to memory leaks. Himangi will highlight the capabilities of coccinelle and limitations of the tool.

### One Line Summary

Gain insights into Coccinelle to open new avenues to faster and efficient kernel contributions.

### 添付資料URL

掲載なし

<a id="session-1887"></a>
## 19. Backporting the kernel with SmPL

- セッション個別URL: https://blog.linuxplumbersconf.org/2014/ocw/proposals/1887
- Track: Development Tools
- 日時: Thursday, October 16, 2014 

### Description

As we evolve as software developers we not only have to consider how to better evolve software but also how to more efficiently backport it. The Coccinelle engine was developed to help evolve writing software faster and more efficiently, but can it also be used to help backport? This talk will cover how SmPL was embraced by the Linux backports project to help it backport the Linux kernel more effectively, more automatically, and to help the effort scale.

This talk is intended for Linux kernel developers and kernel tree maintainers. No experience with SmPL is required.

### One Line Summary

Can the Coccinelle engine be used to help automatically backport the Linux kernel?

### 添付資料URL

掲載なし

<a id="session-2193"></a>
## 20. GCC and LLVM collaboration review

- セッション個別URL: https://blog.linuxplumbersconf.org/2014/ocw/proposals/2193
- Track: Development Tools
- 日時: Thursday, October 16, 2014 

### Description

With LLVM mature enough to feature as the default toolchain in some Unix distributions, and with the inherent (and profitable) share of solutions, ideas and code between the two, we need to start talking at a more profound level.

There will always be problems that can’t be included in any standard (language, extension, or machine-specific) and are intrinsic to the compilation infrastructure. For those, and other common problems, we need common solutions to at least both LLVM and GCC, but ideally any open source (and even closed source) toolchain.

In this session, we shall discuss some of the outcomes of the GNU cauldron’s presentation and what does that mean to everyone else building with both compilers.

### One Line Summary

Outcomes of the GNU+LLVM discussion at the GNU cauldron and the implications for other projects.

### 添付資料URL

- [slides](http://www.linuxplumbersconf.net/2014/ocw//system/presentations/2193/original/GCCandLLVM.pdf)（file）


- スケジュール掲載のアーカイブURL: https://blog.linuxplumbersconf.org/2014/ocw/system/presentations/2193/original/GCCandLLVM.pdf
<a id="session-2289"></a>
## 21. How to fix bugs automatically?

- セッション個別URL: https://blog.linuxplumbersconf.org/2014/ocw/proposals/2289
- Track: Development Tools
- 日時: Thursday, October 16, 2014 

### Description

Automatic software repair is the process of fixing software bugs automatically. An automatic software repair system fixes software bugs with no human intervention. The goal of automatic software repair is to save maintenance costs and to enable systems to be more resilient to bugs and unexpected situations. I will discuss the foundations of repair: it may happen at the level of the program code (for instance by changing the conditional expression of an if statement) or at the level of the program state (for instance by replacing a stale unrecoverable object by a fresh one), it focuses on one particular type of bug, in one particular technical space (e.g. initialization bugs in Java programs); it embeds algorithms and heuristics that leverage knowledge about this kind of bugs: on what the causes are, on how the symptoms manifest themselves, on what the likely fixes look like.

### One Line Summary

I will introduce the idea of automatic software repair and how it works in practice.

### 添付資料URL

掲載なし

<a id="session-1821"></a>
## 22. Virtualized high performance (DPDK) packet processing

- セッション個別URL: https://blog.linuxplumbersconf.org/2014/ocw/proposals/1821
- Track: Network Virtualization and Security
- 日時: Thursday, October 16, 2014 

### Description

vhost/virtio solution is the de facto standard for high performance with packet processing when Qemu is used. VMware/ESX has its vmxnet3 equivalent solution.

As it was demonstrated using DPDK, CPUs allow sustaining faster packet rate. The arrival of 2×40Gbps and soon 100Gbps network interfaces will add even more pressure to remove any overheads.

These solutions do not scale when low latency (sub 1us) and when high packet rate are being used (2Mpps and more).

Moroever, there are some new needs to create some direct VM to VM communications without any processing by the host/hypervisor.

The purpose will be to review some existing options:
  – vhost-user
  – virtio: both kernel and userland mode DPDK drivers (PMD)
  – ivshmem

### One Line Summary

Moving from 500Kpps to low latency and high packet rate - 2Mpps to 200Mpps - requires some evolutions of vNICs

### 添付資料URL

掲載なし

<a id="session-2445"></a>
## 23. Does network packet format matter?

- セッション個別URL: https://blog.linuxplumbersconf.org/2014/ocw/proposals/2445
- Track: Network Virtualization and Security
- 日時: Thursday, October 16, 2014 

### Description

Limitations of existing encapsulation protocols (VXLAN and NVGRE) brought up various extensions (GENEVE, GUE, NSH). While SW can accommodate any protocol, HW has been boxed by standards, which in turn forced SW to artificially limit itself. SW and HW will be free to innovate if we can answer questions: Why did packet format matter? Where does it still matter? What kind of HW offload model allows SW to run any network protocol on top?

### One Line Summary

Ideas for solving ever growing needs of networking in the cloud and live discussion

### 添付資料URL

掲載なし

<a id="session-2451"></a>
## 24. Encrypted VXLAN

- セッション個別URL: https://blog.linuxplumbersconf.org/2014/ocw/proposals/2451
- Track: Network Virtualization and Security
- 日時: Thursday, October 16, 2014 

### Description

Physical and virtual network break-ins are two largest security threats in the cloud. Large datacenters with multiple geographical locations are the most vulnerable. Encrypting traffic at datacenter boundary might not be enough. Per tenant encryption of inner packets encapsulated in tunnel protocol like vxlan provides desired level of security. This talk describes this new protocol and proposes generalization of tunnel+encryption.

### One Line Summary

ideas for providing per tenant encryption of virtualized networks in the cloud

### 添付資料URL

掲載なし

<a id="session-1947"></a>
## 25. Geneve: Generic Network Virtualization Encapsulation

- セッション個別URL: https://blog.linuxplumbersconf.org/2014/ocw/proposals/1947
- Track: Network Virtualization and Security
- 日時: Thursday, October 16, 2014 

### Description

Network virtualization involves the cooperation of devices with a wide variety of capabilities such as software and hardware tunnel endpoints, transit fabrics, and centralized control clusters. As a result of their role in tying together different elements in the system, the requirements on tunnels are influenced by all of these components. Flexibility is therefore the most important aspect of a tunnel protocol if it is keep pace with the evolution of the system.

Geneve is a new encapsulation protocol that aims to meet these needs as network virtualization matures and is endorsed by all of the major hypervisor vendors. This discussion will focus on efficiently implementations of it in Linux and ways to take advantage of forthcoming hardware offloads.

### One Line Summary

Implementing a network virtualization encapsulation protocol flexible enough for now and the future.

### 添付資料URL

掲載なし

<a id="session-2475"></a>
## 26. OVS Micro Summit Summary

- セッション個別URL: https://blog.linuxplumbersconf.org/2014/ocw/proposals/2475
- Track: Network Virtualization and Security
- 日時: Thursday, October 16, 2014 

### Description

Summary of proceedings of the dataplane focused OVS micro summit on Wednesday.

### One Line Summary

Summary of proceedings of the dataplane focused OVS micro summit on Wednesday.

### 添付資料URL

掲載なし

<a id="session-2493"></a>
## 27. A High Performance Socket Interface in Linux

- セッション個別URL: https://blog.linuxplumbersconf.org/2014/ocw/proposals/2493
- Track: Network Virtualization and Security
- 日時: Thursday, October 16, 2014 

### Description

AF_PACKET is a Linux interface for processing packets in user space. In this talk we will outline our code which uses techniques (direct DMA, polling mode) learned in our DPDK work to provide an interface on top of existing in-kernel drivers and the AF_PACKET sockets to support performance equivalent to similar work being done with VFIO drivers.

In this talk we would like to encourage other driver owners to support the interface. And facilitate a discussion on how to integrate this work with other components in Linux. In particular the virtio drivers could leverage the direct DMA and polling modes supported.

Patches will be submitted to netdev mailing list prior to talk.

### One Line Summary

A proposal for using hardware queues with the af_packet interface and a discussion on how to use this with existing virt interfaces.

### 添付資料URL

掲載なし

<a id="session-2535"></a>
## 28. UDP encapsulation, FOU, GUE, & RCO

- セッション個別URL: https://blog.linuxplumbersconf.org/2014/ocw/proposals/2535
- Track: Network Virtualization and Security
- 日時: Thursday, October 16, 2014 

### Description

A discussion about recent efforts to make UDP encapsulation performant and well supported in the Linux networking stack, and also an introduction of foo-over UDP (FOU) and Generic UDP Encapsulation(GUE).

UDP based encapsulation is likely to become ubiquitous in data centers, not just for virtualization use case but also for non-virtualization. The reasons for this are simple: it’s a low overhead protocol and allows us to leverage several UDP specific optimizations commonly supported by networking hardware (RSS and ECMP for instance). In part one of this this talk, we’ll review the additions to the Linux kernel to make UDP encapsulation efficient and a first class citizen of the stack.

For part two of this discussion, we’ll look at foo-over-UDP (FOU). FOU is an encapsulation method to where IP protocol packets are directly encapsulated in a UDP payload. The first support of this is IPIP, sit, GRE tunnels which can be configured to transmit using FOU encapsulation. The GRE part implements the GRE/UDP draft.

For part three of this discussion, we’ll look at Generic UDP Encapsulation (GUE) and Remote Checksum Offload. GUE is a lightweight, extensible, and performant encapsulation mechanism of IP protocol packets (indicated in a header field). The GUE header allows for optional data fields which which we intend to use for virtualization, security, and congestion control.

### One Line Summary

A discussion around recent work to support UDP encapsulation in the stack.

### 添付資料URL

掲載なし

<a id="session-2541"></a>
## 29. Integrated Network Virtualization

- セッション個別URL: https://blog.linuxplumbersconf.org/2014/ocw/proposals/2541
- Track: Network Virtualization and Security
- 日時: Thursday, October 16, 2014 

### Description

In this talk we’ll consider the prospects of integrating networking virtualization into the Linux Networking stack in a minimally intrusive way.

Job scheduling and resource management in modern data centers is a very difficult but critical problem. Virtualizing the whole data center to allow jobs (not just VMs!) to seamlessly be migrated to optimize scheduling would be a game changer. For the networking part of this solution, we want a very lightweight solution which has no impact other than when we wish to migrate (near zero tolerance for performance regression for this function). A solution to this is to consciously integrate networking virtualization in the stack. Several
of the mechanisms that may be useful for a solution are already in place— TCP_REPAIR and network namespaces for instance. The goal is that all the existing functionality of the stack— routing, IP tables, NAT, etc.— should seamlessly be virtualization aware.

### One Line Summary

Integrated Network Virtualization is aimed at providing a minimally intrusive and highly performant network virtualization solution in the Linux stack.

### 添付資料URL

掲載なし

<a id="session-2547"></a>
## 30. Adding stateful features to OVS

- セッション個別URL: https://blog.linuxplumbersconf.org/2014/ocw/proposals/2547
- Track: Network Virtualization and Security
- 日時: Thursday, October 16, 2014 

### Description

Open vSwitch is a full-featured, multilayer virtual switch.  It’s traditionally been programmed through OpenFlow, which was originally targeted at hardware switches and built around matching packet headers.   New demands have necessitated keeping track of state across packets and flows.  In this presentation, we look at leveraging some of the kernel’s features to enable stateful services.  We will discuss the best approaches to integrate with the kernel and how to expose those services through a traditionally stateless protocol like OpenFlow.  In particular, we will look at connection tracking, NAT, load-balancing, and DPI.

### One Line Summary

Discuss adding stateful features to OVS by leveraging kernel functions

### 添付資料URL

掲載なし

<a id="session-1935"></a>
## 31. Real-Time Virtualization - How Crazy Are We?

- セッション個別URL: https://blog.linuxplumbersconf.org/2014/ocw/proposals/1935
- Track: Real Time I
- 日時: Thursday, October 16, 2014 

### Description

You have a legacy RTOS and want to run it on a Linux system? Or there is a need to isolate -rt machines from each other while running on the same host? Then just combine -rt with KVM and be done, right? Almost.

This talk will provide a brief overview over Linux-based real-time virtualization options, the requirements on stack components, their status and some traps and pitfalls when setting up real systems. It will then try to encourage a discussion on how to improve the components regarding real-time and how to achieve that they works more “out of the box” under real-time constraints.

### One Line Summary

Enabling and improving real-time guarantees in Linux-based virtualization environments

### 添付資料URL

- [slides](http://www.linuxplumbersconf.net/2014/ocw//system/presentations/1935/original/LPC2014-RT-Virt.pdf)（file）


- スケジュール掲載のアーカイブURL: https://blog.linuxplumbersconf.org/2014/ocw/system/presentations/1935/original/LPC2014-RT-Virt.pdf
<a id="session-1953"></a>
## 32. Long-term testing

- セッション個別URL: https://blog.linuxplumbersconf.org/2014/ocw/proposals/1953
- Track: Real Time I
- 日時: Thursday, October 16, 2014 

### Description

The OSADL QA Farm currently monitors the real-time capabilities of more than hundred ARM, MIPS, PowerPC and x86 based systems running PREEMPT_RT patched Linux kernels. In addition, a large number of system variables and log data are recorded to help with bug fixing and performance improvement. The tested stable systems that run an OSADL released real-time kernel can be recommended to be used in a productive industrial environment where a deterministic response to asynchronous events is mandatory.

### One Line Summary

More than hundred PREEMPT_RT systems at the OSADL QA Farm approve real-time capabilities

### 添付資料URL

掲載なし

<a id="session-2223"></a>
## 33. Current state of full dynticks

- セッション個別URL: https://blog.linuxplumbersconf.org/2014/ocw/proposals/2223
- Track: Real Time I
- 日時: Thursday, October 16, 2014 

### Description

The full dynticks patchset has been merged in 3.10. This feature, which aims at stopping the tick completely, has seen some evolution since then: bugfixes, optimizations, users and benchmark measurements.

This talk is a summary of these changes.

### One Line Summary

Summary about full dynticks evolvement

### 添付資料URL

- [slides](http://www.linuxplumbersconf.net/2014/ocw//system/presentations/2223/original/full_dynticks_lpc_2014.pdf)（file）


- スケジュール掲載のアーカイブURL: https://blog.linuxplumbersconf.org/2014/ocw/system/presentations/2223/original/full_dynticks_lpc_2014.pdf
<a id="session-2265"></a>
## 34. Following mainline with PREEMPT_RT

- セッション個別URL: https://blog.linuxplumbersconf.org/2014/ocw/proposals/2265
- Track: Real Time I
- 日時: Thursday, October 16, 2014 

### Description

The -RT patch is an out-of-tree patch and contains currently roughly about 300 individual patches. Porting them from one major Linux release to another is a challenging work. There are usually a lot of changes in the core code between one release to another. Those changes are usually transparent to the remaining part of the kernel. Even if functions are removed, then the remaining in-tree code is updated.
For the -RT patchset however, this means that someone has to look at this changes and see how to integrate them within the -RT patch. Since the -RT patch touches every critical piece of the kernel, there is plenty of oprtunity to do something wrong.
This “wrong” is either noticed immediatelly or very very late during the first boot of the new -RT version.

### One Line Summary

Pitfalls you step in while porting PREEMPT_RT to a new mainline version.

### 添付資料URL

- [slides](http://www.linuxplumbersconf.net/2014/ocw//system/presentations/2265/original/2014_plumbers_rt.pdf)（file）


- スケジュール掲載のアーカイブURL: https://blog.linuxplumbersconf.org/2014/ocw/system/presentations/2265/original/2014_plumbers_rt.pdf
<a id="session-2403"></a>
## 35. Welcome: Android upstreaming status

- セッション個別URL: https://blog.linuxplumbersconf.org/2014/ocw/proposals/2403
- Track: Android/Mobile
- 日時: Thursday, October 16, 2014 1:30pm

### Description

Kick off to the Android microconf.
State of the progress of upstreaming the Android kernel: what has been achieved, what’s left to be done.

### One Line Summary

Karim Yaghmour gives an overview of the state of Android upstreaming

### 添付資料URL

- [slides](http://www.linuxplumbersconf.net/2014/ocw//system/presentations/2403/original/01 - Android Upstreaming Status.pdf)（file）


- スケジュール掲載のアーカイブURL: https://blog.linuxplumbersconf.org/2014/ocw/system/presentations/2403/original/01 - Android Upstreaming Status.pdf
<a id="session-2361"></a>
## 36. Introduction to AARCH64

- セッション個別URL: https://blog.linuxplumbersconf.org/2014/ocw/proposals/2361
- Track: Android/Mobile
- 日時: Thursday, October 16, 2014 1:35pm

### Description

Last year ARM released the ARMv8 architecture which defines the 64-bit ARM architecture and this presentation will focus on the 64-bit instruction set. We’ll give an overview of its defining features as well as highlight the main differences with its 32-bit counter-part. This talk is addressed to those who are curious.

### One Line Summary

ARM64 Instruction Set Overview

### 添付資料URL

- [slides](http://www.linuxplumbersconf.net/2014/ocw//system/presentations/2361/original/02 - a64-isa-intro-final.pdf)（file）


- スケジュール掲載のアーカイブURL: https://blog.linuxplumbersconf.org/2014/ocw/system/presentations/2361/original/02 - a64-isa-intro-final.pdf
<a id="session-2355"></a>
## 37. dma-fence & android sync

- セッション個別URL: https://blog.linuxplumbersconf.org/2014/ocw/proposals/2355
- Track: Android/Mobile
- 日時: Thursday, October 16, 2014 1:50pm

### Description

“Modern Android devices have a userspace layer known as the Hardware Composer HAL (HWC) that’s responsible for abstracting away the per-SoC logic for doing display composition of graphics buffers, and feeding the results to display. HWC can also pull data from media IP blocks, like camera or video decode/encode, and use them for composition. In order to exploit parallelism between this hardware, SoC vendors often implemented implicit synchronization contracts between drivers/hardware that made systems very difficult to debug or reason about, and were often flat out wrong. Android sync is a framework for explicit synchronization, so that drivers and hardware can safely and performantly synchronize with one another through a unified interface.

The canonical usage of sync is between graphics and display. A GPU driver can kick off work for generating a graphics buffer, and before this work is complete and the buffer finished, create a “sync pt” file descriptor to track this work. Userspace software can now hand off this graphics buffer and “sync pt” to a display driver, which can begin spooling up the next frame for display – before the GPU block has finished with the buffer. This deferred synchronization reduces latency, and depending on the platform, allows drivers to exploit hardware synchronization. Android sync also has strong facilities for debugging, which can greatly aid in figuring out the deadlocks and race-conditions which often appear in these data pipelines."

### One Line Summary

explicit synchronization in the android graphics layers and mainlining efforts

### 添付資料URL

- [slides](http://www.linuxplumbersconf.net/2014/ocw//system/presentations/2355/original/03 - sync & dma-fence.pdf)（file）


- スケジュール掲載のアーカイブURL: https://blog.linuxplumbersconf.org/2014/ocw/system/presentations/2355/original/03 - sync & dma-fence.pdf
<a id="session-2409"></a>
## 38. Ion and the DMA coherency model

- セッション個別URL: https://blog.linuxplumbersconf.org/2014/ocw/proposals/2409
- Track: Android/Mobile
- 日時: Thursday, October 16, 2014 2:15pm

### Description

The Ion memory manager used by Android allows for allocation of both coherent
and non-coherent buffers. Ion’s handling of these buffers does not match with
the existing DMA framework for handling coherency which is a stumbling block
to ever moving Ion out of staging. The focus of this talk is a review of what
Ion does regarding memory coherency, the requirements driving some of these
choices, and what might be required to bring Ion into compliance with the
expected DMA APIs.

### One Line Summary

A look at ion and how it handles memory coherency

### 添付資料URL

- [slides](http://www.linuxplumbersconf.net/2014/ocw//system/presentations/2409/original/04 - iondma_foreview_v2.pdf)（file）


- スケジュール掲載のアーカイブURL: https://blog.linuxplumbersconf.org/2014/ocw/system/presentations/2409/original/04 - iondma_foreview_v2.pdf
<a id="session-2379"></a>
## 39. Moving code out of staging

- セッション個別URL: https://blog.linuxplumbersconf.org/2014/ocw/proposals/2379
- Track: Android/Mobile
- 日時: Thursday, October 16, 2014 2:40pm

### Description

Open discussion about the state of Android drivers in the tree and how to move them out of staging.

### One Line Summary

open discussion about moving the Android code out of staging

### 添付資料URL

掲載なし

<a id="session-2037"></a>
## 40. Moving Android towards clang

- セッション個別URL: https://blog.linuxplumbersconf.org/2014/ocw/proposals/2037
- Track: Android/Mobile
- 日時: Thursday, October 16, 2014 3:10pm

### Description

The presentation will show what we had to do to get AOSP to build with Clang 3.5, including common code fragments that failed, how to fix it, and what can be types of bad code detected by clang can be dangerous even with gcc.

The discussion that follows will cover:
- What’s left to do before we have a fully working 100% clang build of AOSP
- What to do to minimize the number of updates that break Clang again
- Next steps (stlport to libc++ migration, …)

### One Line Summary

Problems, fixes, and future plans for building Android with clang

### 添付資料URL

- [slides](http://www.linuxplumbersconf.net/2014/ocw//system/presentations/2037/original/05 - LPC14-A Building Android with Clang.pdf)（file）


- スケジュール掲載のアーカイブURL: https://blog.linuxplumbersconf.org/2014/ocw/system/presentations/2037/original/05 - LPC14-A Building Android with Clang.pdf
<a id="session-2337"></a>
## 41. Bionic - 64 bit ABI and 64-bit ART

- セッション個別URL: https://blog.linuxplumbersconf.org/2014/ocw/proposals/2337
- Track: Android/Mobile
- 日時: Thursday, October 16, 2014 3:25pm

### Description

“ART is an evolution of the Android runtime, first made available as a developer option on Android 4.4 KitKat. It comes with improvements in the garbage collector, threading and locking model, compiler and runtime performance. It also adds support for 64-bit architectures. This talk will look at how ART differs from earlier runtimes.

Bionic is Android’s C library. It’s a BSD-licensed C library for the Linux kernel supporting 6 architectures (arm/arm64, mips/mips64, and x86/x86_64). This talk looks at how and why bionic differs from other C libraries, and how it gets along with the Linux kernel."

### One Line Summary

Overview of Android's runtime and libc.

### 添付資料URL

- [slides](http://www.linuxplumbersconf.net/2014/ocw//system/presentations/2337/original/06 - bionic (Linux Plumbers 2014).pdf)（file）


- スケジュール掲載のアーカイブURL: https://blog.linuxplumbersconf.org/2014/ocw/system/presentations/2337/original/06 - bionic (Linux Plumbers 2014).pdf
<a id="session-2373"></a>
## 42. Porting Generic Android Drivers and 64-bit Binder ABI

- セッション個別URL: https://blog.linuxplumbersconf.org/2014/ocw/proposals/2373
- Track: Android/Mobile
- 日時: Thursday, October 16, 2014 3:45pm

### Description

This presentation will focus on the issues we faced while porting Android’s IPC mechanisms, binder and ashmem, to 64-bit. We will discuss about Android’s compact layer, support for 32-bit applications running on 64-bit kernels, as well as 64-bit ABI changes. We will also propose a path for replacing Binder, Android’s IPC.

### One Line Summary

Generic 64-bit driver porting guidelines; 64-bit Binder ABI; Replacing Binder IPC.

### 添付資料URL

- [slides](http://www.linuxplumbersconf.org/2014/ocw//system/presentations/2373/original/07 - Porting_Generic_Android_Drivers_v2.pdf)（file）


- スケジュール掲載のアーカイブURL: https://blog.linuxplumbersconf.org/2014/ocw/system/presentations/2373/original/07 - Porting_Generic_Android_Drivers_v2.pdf
<a id="session-2343"></a>
## 43. Migrating code from ARM to ARM64

- セッション個別URL: https://blog.linuxplumbersconf.org/2014/ocw/proposals/2343
- Track: Android/Mobile
- 日時: Thursday, October 16, 2014 4:05pm

### Description

The ARM world is shifting to 64-bit. While good quality C/C++ code is fairly straightforward to port, assembly will require some work. I will start by giving a short summary of the best practises and present the most common mistakes. I will then talk about the key differences between arm and arm64, and provide tips to help you migrate your assembly code, including code using NEON vector instructions. Your code might not be completely ready but you should be.

### One Line Summary

Best practices for migrating code from ARM to ARM64

### 添付資料URL

- [slides](http://www.linuxplumbersconf.net/2014/ocw//system/presentations/2343/original/08 - Migrating code from ARM to ARM64.pdf)（file）


- スケジュール掲載のアーカイブURL: https://blog.linuxplumbersconf.org/2014/ocw/system/presentations/2343/original/08 - Migrating code from ARM to ARM64.pdf
<a id="session-2367"></a>
## 44. Power management discussion: Big.Little

- セッション個別URL: https://blog.linuxplumbersconf.org/2014/ocw/proposals/2367
- Track: Android/Mobile
- 日時: Thursday, October 16, 2014 6:30pm

### Description

So far, there hasn’t been a Big.Little Nexus device. Many challenges arise when using these types of CPU architectures: latency of turning cores on and off, app execution predictability… This will be an open discussion for anyone wanting to participate.

### One Line Summary

Open discussion regarding big.little and more generally power management in Android

### 添付資料URL

掲載なし

<a id="session-2121"></a>
## 45. Other Topics - Look Here for slides and uploads

- セッション個別URL: https://blog.linuxplumbersconf.org/2014/ocw/proposals/2121
- Track: File and Storage Systems
- 日時: Thursday, October 16, 2014 

### Description

Random topics we covered that had no formal proposal.

### One Line Summary

Placeholder for other topics not formally scheduled - used to hang presentatation from.

### 添付資料URL

掲載なし

<a id="session-2307"></a>
## 46. Filesystem Status and Updates

- セッション個別URL: https://blog.linuxplumbersconf.org/2014/ocw/proposals/2307
- Track: File and Storage Systems
- 日時: Thursday, October 16, 2014 1:30pm

### Description

A short review of the current development focus in Linux filesystems.  I’ll cover ongoing projects in Btrfs and invite others to do the same in their target areas.

### One Line Summary

Filesystem Status and Updates

### 添付資料URL

掲載なし

<a id="session-2079"></a>
## 47. Support for open-channel SSDs and flash-agnostic APIs

- セッション個別URL: https://blog.linuxplumbersconf.org/2014/ocw/proposals/2079
- Track: File and Storage Systems
- 日時: Thursday, October 16, 2014 2:15pm

### Description

SSDs with intelligent host-side device drivers have been available for many years (e.g., FusionIO, Virident, Violin Memory). These device drivers offload placement of data to the host system. By moving flash management logic to the host, the design space for alternative storage interfaces that go beyond the traditional block device interface opens up. Examples of these interfaces include flash-optimized file-systems, key-value stores, and atomic IO accesses. Furthermore, block allocation and data placement policies could become pluggable, allowing end-users to select the best strategy for their workload.

Host-side SSD management is a great advantage for vendors implementing their own specialized APIs. However, it is not possible to leverage the alternative storage interfaces we mentioned before in a generic way. By having an open implementation that can be used by multiple SSD vendors, a generic, well-maintained infrastructure can be built. This infrastructure is paired with a new type of open-channel SSDs. These devices expose specific “open-channel” features, such as direct access to read/write/erase of flash pages and discovery of device configuration. Such an infrastructure enables: (I) higher performance than block-based SSDs, (II) more predictability in regards to latency and throughput, and (III) managing multiple SSDs (i.e. their flash) as a single pool.

In this context, we develop LightNVM, a host-side driver for open-channel SSDs. It implements logic, such as flash block management, data placement, bad block management, etc., for a single- or a pool of SSDs. It currently integrates with device drivers that support blk-mq and enables management of them from the host-side.The goal with LightNVM is to create a standard for host-managed SSDs that will make it easy to plug into the Linux ecosystem, and to provide an implementation for it.

We would like to discuss current and future design decisions and how the key-value/object-store/atomic IO/etc. APIs can be integrated into file-systems, such as Ceph, GlusterFS, F2FS; as well as database systems, such as MySQL-based, LevelDB, and others.

RFC patch has been posted here:
https://lkml.org/lkml/2014/10/8/414

### One Line Summary

Integration of flash-agnostic APIs (e.g., Key-value store, Object store, Atomic-IOs, etc.) with open-channel SSDs- status and discussion

### 添付資料URL

- [slides](https://blog.linuxplumbersconf.org/2014/ocw/system/presentations/2079/original/plumbers.pdf)（file）

<a id="session-2277"></a>
## 48. How to evaluate block allocator changes

- セッション個別URL: https://blog.linuxplumbersconf.org/2014/ocw/proposals/2277
- Track: File and Storage Systems
- 日時: Thursday, October 16, 2014 3:00pm

### Description

Changing file system block allocator is a tricky thing to do on its own, but despite that we do not have any standardised way to evaluate the change to prevent performance regressions.

Xfstests is currently the standard tool to test file systems to avoid regressions and bugs. It is widely used by file system developers so it seems like the right place for performance regression tests as well. But that’s just the beginning.

Having simple performance “unit” tests such as sequential/random/direct/async read/write is easy, but it does not give us complete picture especially since block allocator changes might have bigger impact in the long run when file system ages. That’s why we need workload examples, simulations of the real applications.

Some of it may be simulated by fio, fsstress, filebend or others, but ultimately the best test would be provided by the application developers. Having it easy to setup and run, small and without complex dependenties will be the key. Do we need a specific file system aging tool ? Can we use workload simulation to age the file system with the certain workload ? We do not care about the data, how to speed up the process ?

But some problems might be even discovered more quickly by static analyze of the file system. But what are the traits we’re looking for ? File fragmentation, free space fragmentation, data/metadata locality, that much is obvious, what else ? That’s up for the discussion.

### One Line Summary

This session will discuss ways we can and should evaluate changes to a file system block allocator to avoid performance regressions.

### 添付資料URL

掲載なし

<a id="session-2247"></a>
## 49. FS-Cache for file systems in userspace

- セッション個別URL: https://blog.linuxplumbersconf.org/2014/ocw/proposals/2247
- Track: File and Storage Systems
- 日時: Thursday, October 16, 2014 4:00pm

### Description

A few network file systems can use FS-Cache for storing caches on local storage. Adding support for FS-Cache in FUSE enables user-space (network) file systems to benefit from increased client-side caches.

During this session, the proposed design will get presented and can get discussed further. If possible, a prototype and some performance improvements will be shown.

The integration of FS-Cache in FUSE is a work in progress by Vimal Kumar as a university project. Vimal wants to improve the performance of GlusterFS for certain workloads.

### One Line Summary

Enabling on-disk caches for userspace file systems by integrating FS-Cache in FUSE.

### 添付資料URL

掲載なし

<a id="session-2301"></a>
## 50. SMR integration and how to overcome layering issues

- セッション個別URL: https://blog.linuxplumbersconf.org/2014/ocw/proposals/2301
- Track: File and Storage Systems
- 日時: Thursday, October 16, 2014 4:45pm

### Description

SMR (shingled media recording) requires the OS to read in the list of zones to figure out the zone sizes and the status of the write pointer.
The idea here is that the OS reads the entire list to be able to make correct decisions about where the data should be written to or how I/O should be formatted.

For linux this means that initially we would need to keep the lists of zones at several layers:

- at the libata layer, as the zbc specification requires the SATL to return specific sense codes.
- at the SCSI layer, we might need to keep the write pointer up-to-date
- at the device-mapper layer, as the zone information determines the device-mapper table layout

For efficiency it would be good to keep the zone layout only once within the kernel, but the current layering forbids us to import this layer from other layers.

In this talk I will be presenting the problems during SMR integrations and discuss ways on how to overcome the layering problem.

### One Line Summary

This talk will focus on SMR integration with the linux SCSI stack and how layering issues can be overcome

### 添付資料URL

掲載なし

<a id="session-2271"></a>
## 51. DRBD9 and drbdmanage

- セッション個別URL: https://blog.linuxplumbersconf.org/2014/ocw/proposals/2271
- Track: File and Storage Systems
- 日時: Thursday, October 16, 2014 5:15pm

### Description

DRBD9 is a Linux block device driver, that allows to mirror Linux block devices to multiple peer hosts. It can operate in synchronous or asynchronous mode.

Drbdmanage is a management solution, that takes over management of logic volumes (LVM), management of configuration files for DRBD. It offers commands to create replicated volumes, take snapshots, resize, remove, etc… It allows to create volumes in consistency groups.

These capabilities are available on the command line, and as a D-BUS service. They are useful as they are, since it automates the operation of DRBD replicated storage.

In order to make these features available to the OpenStack community a cinder driver for drbdmanage is in development.

Which further integrations into storage management frameworks are desirable?
Blivet, libstoragemanagement, …

### One Line Summary

drbd9 and drbdmanage are the data and control plane of a distributed storage system for replicated block devices. A cinder driver is already in development. Integration into other storage management frameworks desirable?

### 添付資料URL

掲載なし

<a id="session-2577"></a>
## 52. Read Write Semaphore bottlenecks

- セッション個別URL: https://blog.linuxplumbersconf.org/2014/ocw/proposals/2577
- Track: Real Time II
- 日時: Thursday, October 16, 2014 

### Description

Priority inheritance is complex and when you add boosting priority for multiple tasks the complexity increases exponentially. A previous version to attempt this was too complex to get right and was ripped out. But this was a learning experience and there are other ways to handle boosting multiple tasks with some compromises. Perhaps this is a time to revisit this method or find another method, but until Linux removes all reader writer semaphores, this will continue to cause a large gap with performance between mainline and the -rt patch.

### One Line Summary

Handling the difficulties of priority inheritance and Reader Writer semaphores.

### 添付資料URL

- [slides](http://www.linuxplumbersconf.net/2014/ocw//system/presentations/2577/original/rwsem-plumbers-2014.pdf)（file）


- スケジュール掲載のアーカイブURL: https://blog.linuxplumbersconf.org/2014/ocw/system/presentations/2577/original/rwsem-plumbers-2014.pdf
<a id="session-2583"></a>
## 53. SIL2LinuxMP: GNU/Linux Multicore platform for safety related systems

- セッション個別URL: https://blog.linuxplumbersconf.org/2014/ocw/proposals/2583
- Track: Real Time II
- 日時: Thursday, October 16, 2014 

### Description

In the past decade there have been a number of key publications on using COTS, including open-source, for safety related systems. A series of UK HSE reports as well as the US FRA report looked into COTS in the safety domain.

To address this growing need, The OSADL Safety Critical Linux Working Group, founded in 2007, has been preparing an open-source project called SIL2LinuxMP striving to prepare certification of a Linux RTOS (PREEMPT_RT) based platform to a systematic capability (SC)/safety integrity level (SIL) of 2 in accordance with IEC 61508 Edition 2.

In this talk we will outline the overall SIL2LinuxMP project and then focus on the safety case development issues. With a focus on the selection of the conformance route. While such a talk can only be sketchy we do hope that it will help in clarifying the big picture of “certifying GNU/Linux for safety”.

### One Line Summary

Certifying GNU/Linux for safety

### 添付資料URL

- [slides](http://www.linuxplumbersconf.net/2014/ocw//system/presentations/2583/original/SIL2.pdf)（file）


- スケジュール掲載のアーカイブURL: https://blog.linuxplumbersconf.org/2014/ocw/system/presentations/2583/original/SIL2.pdf
<a id="session-2589"></a>
## 54. Avoiding some of the mmap_sem usage

- セッション個別URL: https://blog.linuxplumbersconf.org/2014/ocw/proposals/2589
- Track: Real Time II
- 日時: Thursday, October 16, 2014 

### Description

In this talk we examine the mmap_sem, a known pain point of the rt kernel. And explore possible means of avoiding it under some conditions.  Most notable we examine speculative page faults.

### One Line Summary

Avoiding some RT issues by avoiding mmap_sem

### 添付資料URL

掲載なし

<a id="session-2595"></a>
## 55. RT Status report

- セッション個別URL: https://blog.linuxplumbersconf.org/2014/ocw/proposals/2595
- Track: Real Time II
- 日時: Thursday, October 16, 2014 

### Description

Status of the realtime project. Mini-Summit readout

### One Line Summary

Status of the realtime project. Mini-Summit readout

### 添付資料URL

掲載なし

<a id="session-2103"></a>
## 56. What's missing for Miracast?

- セッション個別URL: https://blog.linuxplumbersconf.org/2014/ocw/proposals/2103
- Track: Wireless Networking
- 日時: Thursday, October 16, 2014 

### Description

The MiracleCast project implements Miracast on linux. So far, it only serves as proof-of-concept, though. This talk will demonstrate the current state and list shortcomings in the current wifi P2P stack that prevent MiracleCast from being adopted by distributions.

This presentation should serve as feedback to the wifi P2P developers and as starting point for a discussion on future developments.

### One Line Summary

Missing bits and pieces in the wireless stack to make Miracast work on linux.

### 添付資料URL

掲載なし

<a id="session-2145"></a>
## 57. Extremely high speed and high coverage home wifi

- セッション個別URL: https://blog.linuxplumbersconf.org/2014/ocw/proposals/2145
- Track: Wireless Networking
- 日時: Thursday, October 16, 2014 

### Description

Google Fiber is a new service that brings gigabit-speed Internet connections to people’s homes at a reasonable price.  But by removing the Internet bottleneck, we just expose the next ones, especially the limitations of wifi networks.

Avery can present the discoveries and data GFiber has obtained while rolling out “gigabit wifi” (which doesn’t exist) as well as identifying the next big problems that need to get solved.  Hopefully this will lead into discussions of channel crowding, roaming, single-home mesh networks, router failover, the potential value of pure wifi repeaters, bridging with wired backhaul, latency and active queue management, limitations of TCP at high speeds with variable wifi latency, etc.

### One Line Summary

802.11ac speeds are great - if you're 3 feet away.

### 添付資料URL

掲載なし

<a id="session-2151"></a>
## 58. Cloud-based wireless packet capture, sharing, analysis, and diagnosis

- セッション個別URL: https://blog.linuxplumbersconf.org/2014/ocw/proposals/2151
- Track: Wireless Networking
- 日時: Thursday, October 16, 2014 

### Description

Wifi drivers have bugs – and we mostly don’t know what they are.  Problems are often resolved by rebooting, restarting a daemon, or unplugging/replugging the device, and driver developers might never learn this is needed.  Or you might have strange incompatibilities between different types of devices that result in low throughput, high latency, poor roaming, poor rate selection, poor aggregation, too many retries, or wasted channel bandwidth.

One way to help diagnose problems is to assemble a collection of packet traces of known device interactions, and make it very easy for end users to produce such a trace and share it with developers.

Avery can demonstrate several prototype, open source tools being developed at Google Fiber to try to make large-scale diagnosis and analysis better, including http://gfblip.appspot.com and a new web-based tool for uploading, visualizing, and sharing streams of wifi packets in near-real time with the click of a button.

### One Line Summary

It would be a lot easier to debug this wifi problem if only you had a packet trace.

### 添付資料URL

掲載なし

<a id="session-1911"></a>
## 59. AP Group Features

- セッション個別URL: https://blog.linuxplumbersconf.org/2014/ocw/proposals/1911
- Track: Wireless Networking
- 日時: Thursday, October 16, 2014 

### Description

Most Linux wireless stack features for AP mode are not aware of neighboring APs belonging to the same network. In some cases the local configuration could be optimized if more knowledge about neighbor APs is available. One area where this information could be helpful is the Automatic Channel Selection feature of hostapd that could be extended to span over multiple APs. Another one is to use 11k neighbor reports to announce roaming candidates to STAs. This talk will present some ideas on how to implement the mentioned features spanning over multiple APs. Discussion welcome.

### One Line Summary

Optimization of wireless networks over multiple Linux driven APs.

### 添付資料URL

掲載なし

<a id="session-2439"></a>
## 60. "Minstrel-Blues" - Practical Joint Rate und Power Control in Linux mac80211 with todays 802.11b/g/a/n Chips

- セッション個別URL: https://blog.linuxplumbersconf.org/2014/ocw/proposals/2439
- Track: Wireless Networking
- 日時: Thursday, October 16, 2014 

### Description

Todays WiFi networks do only focus on rate control as adaptation to dynamic channel conditions. Transmit power control is
limited to a common power level with a rather fixed and high value for all outgoing packets. This leads to unnecessary high interference within the wireless network and therefore decreased overall network throughput. With Minstrel-Blues we introduce the first practical joint rate and power control algorithm in the Linus kernel. Its objective is to dynamically control the power levels of outgoing packets per communication link in such a way, that is tries to find the minimum power level needed to transmit with the same performance in terms of throughput. Our results show that in many cases we can significantly reduce transmission power levels while maintaining the same throughput per link and therefore reduce the overall interference within the network. The decreased level of interference give more transmission opportunities to other links (increased spatial reuse) and hence increases the sum network throughput. We have implemented our algorithm in Minstrel and Minstrel_HT at the mac80211 subsystem and adapted ath5k and ath9k to make use of a wide subset of Atheros chips that do provide fine grain power level settings per packet.

### One Line Summary

I will present the design, implemenation and performance imapct of my pratical joint rate and power control algorithm "Minstrel-Blues" within Linux mac80211 and IEEE 802.11 a/b/g/n Atheros chips.

### 添付資料URL

- [slides](http://www.linuxplumbersconf.net/2014/ocw//system/presentations/2439/original/Minstrel-Blues @LinuxPlumbers 2014.pdf)（file）


- スケジュール掲載のアーカイブURL: https://blog.linuxplumbersconf.org/2014/ocw/system/presentations/2439/original/Minstrel-Blues @LinuxPlumbers 2014.pdf
<a id="session-2205"></a>
## 61. generalized firmware coredump support

- セッション個別URL: https://blog.linuxplumbersconf.org/2014/ocw/proposals/2205
- Track: Wireless Networking
- 日時: Thursday, October 16, 2014 

### Description

Many (wireless) devices have firmware, and that can crash. A unified mechanism to collect crash data (“coredumps”) will help users and distros collect, and vendors analyse this data.

### One Line Summary

report on the work (done|in progress) on a unified firmware coredump mechanism

### 添付資料URL

掲載なし

<a id="session-2211"></a>
## 62. randomized MAC address scanning

- セッション個別URL: https://blog.linuxplumbersconf.org/2014/ocw/proposals/2211
- Track: Wireless Networking
- 日時: Thursday, October 16, 2014 

### Description

iOS8 implemented randomized MAC address for scanning, and suddenly interest in this came up

discussion on how to implement it in Linux

### One Line Summary

for privacy reasons, randomized MAC address scanning may be a good feature to have

### 添付資料URL

掲載なし

<a id="session-1977"></a>
## 63. Generic Support for ARM TrustZone

- セッション個別URL: https://blog.linuxplumbersconf.org/2014/ocw/proposals/1977
- Track: BoF Track
- 日時: Thursday, October 16, 2014 4:30pm

### Description

ARM TrustZone has been available since 2004. However, it is very recent that open frameworks have been proposed (e.g., SafeG, Genode, Open Virtualization) that makes it possible for the research community as well as the industry to experiment and develop innovative solutions with TrustZone. It is also now that ARM and Linaro are putting a significant amount of effort into standardizing the mechanisms to switch to TrustZone’s secure processor mode (i.e., secure world), most probably aiming at a more general use of TrustZone for ARMv8. Here, we refer to Trusted Firmware and the SMC Calling Convention. We believe that it is time to bring the interested parts together in order to: (i) discuss what is the best way to bring TrustZone support to the Linux Kernel, and (ii) define a generic interface that allows to use different TrustZone approaches from within the kernel, just as it happens today with TPM.

### One Line Summary

Given the the momentum that TrustZone is having in the open source community, it is time to bring generic support to the Linux Kernel.

### 添付資料URL

- [slides](http://www.linuxplumbersconf.net/2014/ocw//system/presentations/1977/original/tz_plumbers.pdf)（file）


- スケジュール掲載のアーカイブURL: https://blog.linuxplumbersconf.org/2014/ocw/system/presentations/1977/original/tz_plumbers.pdf
<a id="session-2469"></a>
## 64. Linux packet processing performance improvements

- セッション個別URL: https://blog.linuxplumbersconf.org/2014/ocw/proposals/2469
- Track: BoF Track
- 日時: Thursday, October 16, 2014 4:30pm

### Description

In the networking Linux mailing list there has been recent work to support batch xmit routines out of the queuing disciplines and other devices. As well as support for running new queueing disciplines that require no locking.

Many of the kernel developers working in this area will be at LPC this year. This BoF provides a forum to discuss the latest improvements and proposals that have occured in previous conferences and on the mailing list. As well as share progress and results.

Blogpost on latest progress with bulking:
 http://netoptimizer.blogspot.dk/2014/10/unlocked-10gbps-tx-wirespeed-smallest.html

Some reference slides from previous conferences:

Lockless qdisc slides:
 http://people.netfilter.org/hawk/presentations/nfws2014/dp-accel-qdisc-lockless.pdf

10G-challenge talking about need for bulking:
 http://people.netfilter.org/hawk/presentations/nfws2014/dp-accel-10G-challenge.pdf

References to mailist discussion and evolving patch sets include, (although please browse netdev mailing list for the latest relevant information)

http://lists.openwall.net/netdev/2014/09/04/86
http://www.spinics.net/lists/netdev/msg295846.html

### One Line Summary

Discussing ongoing work to incorporate bulk transmit, lock removal, and other improvements for in-kernel packet performance.

### 添付資料URL

掲載なし

<a id="session-1989"></a>
## 65. VFIO and the Freescale Management Complex

- セッション個別URL: https://blog.linuxplumbersconf.org/2014/ocw/proposals/1989
- Track: BoF Track
- 日時: Thursday, October 16, 2014 4:30pm

### Description

The fsl-mc is a hardware resource manager that manages specialized hardware objects used in network-oriented packet processing applications.  After the fsl-mc block is enabled, pools of hardware resources are available, such as queues, buffer poools, I/O interfaces.  These resources are building blocks that can be used to create functional hardware objects such as network interfaces, crypto accelerator instances, or L2 switches.

All the fsl-mc managed hardware resources/objects are represented in a physical grouping mechanism called a ‘container’ or DPRC (data path resource container).  From the point of view of an OS like Linux, a DPRC functions similar to a plug and play bus.

This session will present an overview of the fsl-mc architecture and a proposal for how it will fit into the vfio architecture including new APIs needed to deal with some substantial differences with this bus.

### One Line Summary

The Freescale Management Complex (fsl-mc) is a new type of bus that requires VFIO support, and has some substantial differences from PCI and platform buses. This discussion presents an overview of the new bus and a proposal for how to integrate it with VFIO.

### 添付資料URL

掲載なし

<a id="session-2499"></a>
## 66. Docker and the Linux kernel

- セッション個別URL: https://blog.linuxplumbersconf.org/2014/ocw/proposals/2499
- Track: BoF Track
- 日時: Thursday, October 16, 2014 5:30pm

### Description

Preliminary list of topics:

stability of the Docker storage drivers
	performance of the storage drivers
	differences between aufs, devicemapper and btrfs
	btrfs performance, gotchas, problems and workarounds
	kernel performance and scalability with containers
	common problems and errors

### One Line Summary

a talk about performance, stability and commonly encountered kernel related problems when running Docker

### 添付資料URL

掲載なし

<a id="session-2463"></a>
## 67. Network switching offload architecture for the Linux kernel (Part I)

- セッション個別URL: https://blog.linuxplumbersconf.org/2014/ocw/proposals/2463
- Track: BoF Track
- 日時: Thursday, October 16, 2014 5:30pm

### Description

Several types of (multilayer) switch devices currently exist of which only a subset is supported in the kernel through the existing DSA subsystem. Especially the newer devices do not fit well with the existing kernel APIs. In a related context, the availability of extended switching functionality on host NICs allows for additional offloads for existing dataplane functionality which could reuse the same set of APIs.

This BoF combines the related proposals by Shrijeet Mukherjee of Cumulus Networks and Benjamin LaHaise into a single session.

Work already performed on this particular subject includes Jiri Pirko and Scott Feldman’s NetDev proposal for a new generation of APIs to abstract the various hardware switch models.

The goal of this BoF is to combine all efforts to define and finalize the hardware packet switching offload API architecture with all common uses cases taken into account. Everybody is encouraged to present their views and raise concerns with the proposals.

Use cases to consider include:

Switch management using existing RTNETLINK interfaces
	Offload of existing L2/L3 software forwarding
	Switch management and offload using Open vSwitch
	Offload of Classifier/Qdisc layers
	Compatibility with existing FDB ioctls for SR-IOV
	Offload Netfilter/nftables policy to implement port security / ACL
	…

The session is moderated by John Linville and Thomas Graf.
Please send agenda proposals directly to the sessions leaders.

Etherpad: https://etherpad.fr/p/LPC2014_NetOffload
Slides: http://goo.gl/ChGFnx

### One Line Summary

Notes etherpad: https://etherpad.fr/p/LPC2014_NetOffload
Slides: http://goo.gl/ChGFnx

Architecture discussion on how to better handle (multilayer) network switching chips in the Linux kernel and incorporate it with existing offload APIs.

### 添付資料URL

掲載なし

<a id="session-1707"></a>
## 68. Obsoleting support for old hardware

- セッション個別URL: https://blog.linuxplumbersconf.org/2014/ocw/proposals/1707
- Track: BoF Track
- 日時: Thursday, October 16, 2014 5:30pm

### Description

Certain hardware has not been available and probably not used for years. Finding hardware for testing when enhancing the code to use new APIs is becoming harder and harder.
	Define a long term plan/process for how to obsolete drivers:
	
		Should we introduce a drivers/retirement tree and move drivers there slowly?
		How to mark infrastructure obsolete?
		How to deal with obsoleting userland APIs?
		How to get rid of the infamous obsolete wireless extensions?

### One Line Summary

Notes for this session: 
http://www.linuxplumbersconf.org/2014/wp-content/uploads/2014/10/LPC2014_BOF_Obsoleting_support_for_old_hardware.txt

Certain hardware has not been available and probably not used for years. Finding hardware for testing when enhancing the code to use new APIs is becoming harder and harder.

### 添付資料URL

掲載なし

<a id="session-1995"></a>
## 69. VFIO and Management of Errors

- セッション個別URL: https://blog.linuxplumbersconf.org/2014/ocw/proposals/1995
- Track: BoF Track
- 日時: Thursday, October 16, 2014 5:30pm

### Description

This discussion focuses on approaches to managing errors triggered by devices bound to vfio.  In-band device errors are fairly straightforward and in most cases would be sent to user space by the standard eventfd mechnaism.

Out-of-band errors would include things like IOMMU faults (e.g. an access violation) are more difficult.  The IOMMU layer in Linux supports a fault handler, but VFIO does not use this currently.  How should an access violation by a vfio-bound device be handled?  SIGSEGV to the app?  Do KVM virtual machines have any different requirements than other user space apps?

How would IOMMU faults work in an architecture supporting two stage IOMMU address translations where a fault was caused by a vfio-assigned device in guest user space?

This discussion focuses on these types of questions.

### One Line Summary

Devices assigned to user space through vfio can trigger a number of error conditions.  This discussion looks at approaches to managing errors.

### 添付資料URL

掲載なし

<a id="session-2601"></a>
## 70. Android/Mobile Wearables

- セッション個別URL: https://blog.linuxplumbersconf.org/2014/ocw/proposals/2601
- Track: BoF Track
- 日時: Thursday, October 16, 2014 6:30pm

### Description

The Linux Plumbers 2014 Android/Mobile Wearables BoF is focusing on the ongoing integration of Android into the mainline, as well as new form factors where Android ecosystem is expanding and the new challenges arising from this. Topics this year include: android sync, moving things out of staging, LLVM, 64-bit (bionic, binder, porting…) and Big.Little.

### One Line Summary

Wearables, big.LITTLE, migration

### 添付資料URL

掲載なし

<a id="session-2565"></a>
## 71. Network switching offload architecture for the Linux kernel (Part II)

- セッション個別URL: https://blog.linuxplumbersconf.org/2014/ocw/proposals/2565
- Track: BoF Track
- 日時: Thursday, October 16, 2014 6:30pm

### Description

Several types of (multilayer) switch devices currently exist of which only a subset is supported in the kernel through the existing DSA subsystem. Especially the newer devices do not fit well with the existing kernel APIs. In a related context, the availability of extended switching functionality on host NICs allows for additional offloads for existing dataplane functionality which could reuse the same set of APIs.

This BoF combines the related proposals by Shrijeet Mukherjee of Cumulus Networks and Benjamin LaHaise into a single session.

Work already performed on this particular subject includes Jiri Pirko and Scott Feldman’s NetDev proposal for a new generation of APIs to abstract the various hardware switch models.

The goal of this BoF is to combine all efforts to define and finalize the hardware packet switching offload API architecture with all common uses cases taken into account. Everybody is encouraged to present their views and raise concerns with the proposals.

Use cases to consider include:

Switch management using existing RTNETLINK interfaces
	Offload of existing L2/L3 software forwarding
	Switch management and offload using Open vSwitch
	Offload of Classifier/Qdisc layers
	Compatibility with existing FDB ioctls for SR-IOV
	Offload Netfilter/nftables policy to implement port security / ACL
	…

The session is moderated by John Linville and Thomas Graf.
Please send agenda proposals directly to the sessions leaders.

### One Line Summary

Architecture discussion on how to better handle (multilayer) network switching chips in the Linux kernel and incorporate it with existing offload APIs.

### 添付資料URL

掲載なし

<a id="session-2487"></a>
## 72. LXC after 1.0

- セッション個別URL: https://blog.linuxplumbersconf.org/2014/ocw/proposals/2487
- Track: Containers
- 日時: Friday, October 17, 2014 9:05am

### Description

LXC’s first production-ready release was released back in February 2014, during this talk I’ll very briefly cover what we’ve been up to since and what are our goals for the future.

### One Line Summary

Looking at the future for LXC after the 1.0 release.

### 添付資料URL

掲載なし

<a id="session-1959"></a>
## 73. Are containers that we have now secure enough?

- セッション個別URL: https://blog.linuxplumbersconf.org/2014/ocw/proposals/1959
- Track: Containers
- 日時: Friday, October 17, 2014 9:15am

### Description

Preliminary list of topics

no control over kernel memory
	veth networking is not safe enough or slow (e.g. — IP spoofing)
	no selinux virtualization
	mixture of 64 and 32 bits apps in one container

### One Line Summary

Let's discuss what security aspects we may have with existing implementation of containers in the kernel

### 添付資料URL

- [slides](http://www.linuxplumbersconf.org/2014/ocw//system/presentations/1959/original/lxc-security-issues.pdf)（file）


- スケジュール掲載のアーカイブURL: https://blog.linuxplumbersconf.org/2014/ocw/system/presentations/1959/original/lxc-security-issues.pdf
<a id="session-1899"></a>
## 74. Checkpoint/restore of containers with CRIU

- セッション個別URL: https://blog.linuxplumbersconf.org/2014/ocw/proposals/1899
- Track: Containers
- 日時: Friday, October 17, 2014 9:25am

### Description

Checkpoint-restore has been a temping feature of Linux Containers for quite a long time. Now this is becoming possible with the CRIU project.

So far CRIU has been existing by its own, without integration with any other tools and projects. Nowadays OpenVZ, LXC and Docker projects are interested in tight integration with it to achieve such features and containers live-migration and snapshots.

We will discuss where we are now with this, what issues we have and where we plan to move next.

### One Line Summary

Current status and plans for LXC/Docker and CRIU integration.

### 添付資料URL

- [slides](http://www.linuxplumbersconf.net/2014/ocw//system/presentations/1899/original/criu-1.3-dusseldorf.odp)（file）


- スケジュール掲載のアーカイブURL: https://blog.linuxplumbersconf.org/2014/ocw/system/presentations/1899/original/criu-1.3-dusseldorf.odp
<a id="session-1737"></a>
## 75. systemd and containers: standards, integration, and APIs

- セッション個別URL: https://blog.linuxplumbersconf.org/2014/ocw/proposals/1737
- Track: Containers
- 日時: Friday, October 17, 2014 10:30am

### Description

On all major distributions systemd is used (or is currently being adopted) for managing cgroups. systemd is also commonly used in containers, and contains with systemd-nspawn its own minimal container manager. This talk is supposed to shed some light on the status quo, and where we want to take things in regards to systemd and containers.

### One Line Summary

systemd manages cgroups, runs in containers, and manages containers. In this session I'll given an overview about the details.

### 添付資料URL

掲載なし

<a id="session-2199"></a>
## 76. Kubernetes and Google: 5 lessons learned from 8+ years of containers

- セッション個別URL: https://blog.linuxplumbersconf.org/2014/ocw/proposals/2199
- Track: Containers
- 日時: Friday, October 17, 2014 10:45am

### Description

Many of the design points of Kubernetes have met with questions. We’ll talk about why we did things the way we did, and share some of our experiences from running containers for almost a decade.

### One Line Summary

Explaining some of the decisions we made in Kubernetes as a result of our experiences inside Google.

### 添付資料URL

- [slides](http://www.linuxplumbersconf.net/2014/ocw//system/presentations/2199/original/Kubernetes + Google.pdf)（file）


- スケジュール掲載のアーカイブURL: https://blog.linuxplumbersconf.org/2014/ocw/system/presentations/2199/original/Kubernetes + Google.pdf
<a id="session-1749"></a>
## 77. Resource management across different tools

- セッション個別URL: https://blog.linuxplumbersconf.org/2014/ocw/proposals/1749
- Track: Containers
- 日時: Friday, October 17, 2014 11:00am

### Description

Different cgroup tools setup an application’s cgroup slightly differently, sometimes depending on the underlying distro they are running on.  Each approach present a different model for managing the whole machine and type of guarantees that applications can expect. We’ll cover some resource models for each type and show some example use-cases.

We’d like to discuss ways to minimize/hide the differences and present a manageable machine model to higher layers like cluster manager or monitoring services.

### One Line Summary

Effectively managing machine resources using different cgroup tools.

### 添付資料URL

掲載なし

<a id="session-2163"></a>
## 78. FUSE mounts from user namespaces

- セッション個別URL: https://blog.linuxplumbersconf.org/2014/ocw/proposals/2163
- Track: Containers
- 日時: Friday, October 17, 2014 11:15am

### Description

Mounting of “normal” filesystems is not currently allowed from user namespaces due to the security concerns of handing untrusted data to in-kernel filesystem drivers. FUSE is different, since filesystem data is processed in userspace and interaction with the kernel happens only via well-defined interfaces. This makes it a logical first step for supporting user mounts in unprivileged containers.

This talk will give an update on the status of ongoing work to support FUSE mounts from user namespaces along with a short demo of mounting filesystems in an unprivileged container using FUSE.

### One Line Summary

Status update and demo of mounting filesystems from unprivileged containers using FUSE

### 添付資料URL

- [slides](http://www.linuxplumbersconf.net/2014/ocw//system/presentations/2163/original/LPC2014 - Fuse in User Namespaces.pdf)（file）


- スケジュール掲載のアーカイブURL: https://blog.linuxplumbersconf.org/2014/ocw/system/presentations/2163/original/LPC2014 - Fuse in User Namespaces.pdf
<a id="session-2157"></a>
## 79. Dynamic device management in an LXC environment

- セッション個別URL: https://blog.linuxplumbersconf.org/2014/ocw/proposals/2157
- Track: Containers
- 日時: Friday, October 17, 2014 11:30am

### Description

In the absence of a namespace aware devtmpfs, LXC containers traditionally have issues with /dev.  With a few minor kernel modifications and the addition of a namespace aware daemon, udevns, the container see only those events appropriate for that container. This talk will describe an implementation of such as system, and how it extends the set of applications for which containers can be used.

### One Line Summary

A proposed framework to allow I/O devices (displays, keyboard, mice) to be dynamically bound and unbound to an LXC container

### 添付資料URL

- [slides](http://www.linuxplumbersconf.net/2014/ocw//system/presentations/2157/original/Dynamic Device Management-v3.pdf)（file）


- スケジュール掲載のアーカイブURL: https://blog.linuxplumbersconf.org/2014/ocw/system/presentations/2157/original/Dynamic Device Management-v3.pdf
<a id="session-2115"></a>
## 80. How far are we from running distributions inside containers?

- セッション個別URL: https://blog.linuxplumbersconf.org/2014/ocw/proposals/2115
- Track: Containers
- 日時: Friday, October 17, 2014 11:45am

### Description

Efforts are being made to improve the level of virtualization provided by containers to userland programs.

A partial list of non-fully-virtualized subsystems that have been discussed on the containers list or in conferences during the recent year:

audit
	syslog
	binder
	fuse
	iptables
	binfmt_misc
	input
	sysfs

We would like to discuss the main pain points of people trying to run distributions or complex applications inside containers.

What virtualization is best achieved by containers manager in userspace and which essential bits should be provided by the kernel?

### One Line Summary

Let's discuss the missing kernel functionality for running Linux distributions inside containers

### 添付資料URL

掲載なし

<a id="session-1881"></a>
## 81. Tools to analyse scheduling and energy efficiency

- セッション個別URL: https://blog.linuxplumbersconf.org/2014/ocw/proposals/1881
- Track: Energy-aware Scheduling and CPU Power Management
- 日時: Friday, October 17, 2014 9:00am

### Description

The scheduler, by virtue of being in charge of placing tasks on various cpus, is ultimately responsible for the power state of these cpus.

While we have some benchmarks to measure scheduling performance, they focus on maximising throughput. There are currently no tools to help maintainers judge if a patch(set) improves or regresses energy consumption for a workload. This talk will introduce a new tool that can help with this – idlestat.

The goal of the talk is to get more ideas from the community on making idlestat more useful with a view to getting it merged in the kernel.

### One Line Summary

Improving scheduler regression testing with a focus on energy efficiency

### 添付資料URL

- [slides](http://www.linuxplumbersconf.net/2014/ocw//system/presentations/1881/original/LPC14- Tools to analyse scheduling behaviour and its impact on power management.pdf)（file）


- スケジュール掲載のアーカイブURL: https://blog.linuxplumbersconf.org/2014/ocw/system/presentations/1881/original/LPC14- Tools to analyse scheduling behaviour and its impact on power management.pdf
<a id="session-2397"></a>
## 82. The next event with the io latency tracking

- セッション個別URL: https://blog.linuxplumbersconf.org/2014/ocw/proposals/2397
- Track: Energy-aware Scheduling and CPU Power Management
- 日時: Friday, October 17, 2014 9:30am

### Description

The increasing part of the embedded systems in the linux ecosystem forces the kernel developers to take into account an energy efficient approach when bringing a new platform. The different energy frameworks are standalone sub-systems acting independently and in a opportunistic way when there is nothing to do on the system. The energy efficient scheduler wants to integrate all these energy components in order to act proactively by having a better knowledge of the potential energy saving for each scheduling decision it will take. This presentation describes a new paradigm where the events occurring in a acceptable interval are considered predictable and can be tracked per task. It will describe the IO latency tracking fully integrated in the scheduler and, thanks to better predictions, allows to get ride of the cpuidle’s governor by directly choosing an idle state from the scheduler

### One Line Summary

The IO latency tracking allows to track per task the expected sleep time when blocked on an IO. Coupled with the next timer event, it gives an accurate information about the next event supposed to wake up a cpu

### 添付資料URL

- [slides](http://www.linuxplumbersconf.org/2014/ocw//system/presentations/2397/original/IOlatencyPredictionLPC.pdf)（file）


- スケジュール掲載のアーカイブURL: https://blog.linuxplumbersconf.org/2014/ocw/system/presentations/2397/original/IOlatencyPredictionLPC.pdf
<a id="session-1941"></a>
## 83. Integrating Scheduler and CPU Power Management Subsystems

- セッション個別URL: https://blog.linuxplumbersconf.org/2014/ocw/proposals/1941
- Track: Energy-aware Scheduling and CPU Power Management
- 日時: Friday, October 17, 2014 10:30am

### Description

We have been working on improving power efficiency of the kernel on PowerPC. There have been cases found where better communication between cpufreq, scheduler and cpuidle would help improve the power efficiency by a very good margin. But it was found that there are significant challenges in getting this done. These challenges will be discussed.

### One Line Summary

Use Cases which highlight the importance of integration of the CPU Power management subsystems.

### 添付資料URL

掲載なし

<a id="session-2427"></a>
## 84. CPUfreq and scheduler integration

- セッション個別URL: https://blog.linuxplumbersconf.org/2014/ocw/proposals/2427
- Track: Energy-aware Scheduling and CPU Power Management
- 日時: Friday, October 17, 2014 11:00am

### Description

The topic is to discuss the work done to-date by Linaro around moving cpu frequency scaling policy out of the legacy CPUfreq governors and into the scheduler. After an overview of that work we should discuss what steps must be taken to get an upstreamable solution.

### One Line Summary

Discussion on the state of the art regarding scheduler-driven cpu frequency transitions

### 添付資料URL

掲載なし

<a id="session-1815"></a>
## 85. Energy-model guided scheduler decisions

- セッション個別URL: https://blog.linuxplumbersconf.org/2014/ocw/proposals/1815
- Track: Energy-aware Scheduling and CPU Power Management
- 日時: Friday, October 17, 2014 11:30am

### Description

Energy-aware scheduling proposals have been discussed numerous times over the last couple of years. Optimizing for energy is difficult and the techniques vary from between architectures/platforms. Some may be beneficial on some platforms while being harmful on others. A potential solution to this problem is to provide a relatively simple energy/performance model for the platform to enable the scheduler to make informed decisions.

Early proof of concept RFC patch sets have already been posted: https://lkml.org/lkml/2014/7/3/884

### One Line Summary

Enabling the scheduler to make informed energy-aware scheduling decisions using platform energy/performance models.

### 添付資料URL

掲載なし

<a id="session-2571"></a>
## 86. What's new in the LLVM Ecosystem, and how does that affect the kernel?

- セッション個別URL: https://blog.linuxplumbersconf.org/2014/ocw/proposals/2571
- Track: LLVM
- 日時: Friday, October 17, 2014 

### Description

LLVM is a collection of software projects, all working off of a (more or less) common code base. The best known LLVM project is “clang” the compiler. But there are many others. In this session, Marshall will take a whirlwind tour of the LLVM ecosystem, and show which parts can be used by kernel developers.

### One Line Summary

A tour of LLVM technologies, concentrating on those of interest to kernel developers.

### 添付資料URL

- [slides](http://www.linuxplumbersconf.net/2014/ocw//system/presentations/2571/original/MClow - LLVM Plumbers 2014.pdf)（file）


- スケジュール掲載のアーカイブURL: https://blog.linuxplumbersconf.org/2014/ocw/system/presentations/2571/original/MClow - LLVM Plumbers 2014.pdf
<a id="session-2319"></a>
## 87. LLVMLinux progress

- セッション個別URL: https://blog.linuxplumbersconf.org/2014/ocw/proposals/2319
- Track: LLVM
- 日時: Friday, October 17, 2014 

### Description

Many things have changed in clang to support compiling the Linux kernel. What’s left to do on the Linux kernel side to support using clang? We’ll go through the current patches and what hasn’t been solved yet.

### One Line Summary

Where do we stand with the patches to support compiling the kernel with clang

### 添付資料URL

- [slides](https://blog.linuxplumbersconf.org/2014/ocw/system/presentations/2319/original/2014-LPC.pdf)（file）

<a id="session-2391"></a>
## 88. What's left to make allyesconfig on x86_64

- セッション個別URL: https://blog.linuxplumbersconf.org/2014/ocw/proposals/2391
- Track: LLVM
- 日時: Friday, October 17, 2014 

### Description

This talk will show the status of the LLVMLinux project on x86_64 and the current state of options that still need to be disabled or does not build.
We’ll discuss the current patches for these areas and what needs to be done to resolve it.

### One Line Summary

The LLVMLinux is close to be able to compile the full kernel (aka allyesconfig) - what is left to do ?

### 添付資料URL

- [slides](http://www.linuxplumbersconf.net/2014/ocw//system/presentations/2391/original/Presentation Plumbers llvmlinux x86.pdf)（file）


- スケジュール掲載のアーカイブURL: https://blog.linuxplumbersconf.org/2014/ocw/system/presentations/2391/original/Presentation Plumbers llvmlinux x86.pdf
<a id="session-2217"></a>
## 89. LLVM AArch64

- セッション個別URL: https://blog.linuxplumbersconf.org/2014/ocw/proposals/2217
- Track: LLVM
- 日時: Friday, October 17, 2014 

### Description

LLVM AArch64

I propose to give a short presentation (between 5 and 10 minutes) to:

give a short history of how the AArch64 support in LLVM has been implemented.
	give a summary of which general AArch64 features are well supported by LLVM.
	give a summary of which areas need more work.

I hope that this initial short presentation will serve as a starting point for a discussion with the attendees, e.g. covering what features are important for them, what they think is missing.

### One Line Summary

LLVM AArch64

### 添付資料URL

掲載なし

<a id="session-1965"></a>
## 90. Using LLVM to generate call graphs for the Linux kernel

- セッション個別URL: https://blog.linuxplumbersconf.org/2014/ocw/proposals/1965
- Track: LLVM
- 日時: Friday, October 17, 2014 

### Description

LLVM can generate call graphs in dot notation for each compiled unit. This feature has been exposed via a command line option when compiling with clang. I have created an open source, browser based visualization tool to view and filter the call graphs. Hopefully this will generate ideas on how the tool can be extended by the community to improve the utility of the call graph information that can be generated. Call graphs for any compiled kernel file can be shown on request.

### One Line Summary

Build code with clang and get call graphs for free

### 添付資料URL

掲載なし

<a id="session-1971"></a>
## 91. LLVM ARM Toolchain

- セッション個別URL: https://blog.linuxplumbersconf.org/2014/ocw/proposals/1971
- Track: LLVM
- 日時: Friday, October 17, 2014 

### Description

LLVM is a compilation infrastructure, and as such it has dozens of components that don’t necessarily fit into each other. To make matters worse, some components are more complete than others, and almost nothing gets tested just in the way you use it. In this talk I’ll present my findings of the last two years trying to build a full LLVM toolchain for ARM, despite all the focus of development going elsewhere, and how to avoid other people breaking your architecture as they develop their own features.

### One Line Summary

Bringing a full LLVM toolchain together, from core support tools (like integrated assembler and exception handling) to libraries and tools.

### 添付資料URL

- [slides](http://www.linuxplumbersconf.net/2014/ocw//system/presentations/1971/original/LLVMARMToolchain.pdf)（file）


- スケジュール掲載のアーカイブURL: https://blog.linuxplumbersconf.org/2014/ocw/system/presentations/1971/original/LLVMARMToolchain.pdf
<a id="session-2025"></a>
## 92. Switching OpenMandriva to clang

- セッション個別URL: https://blog.linuxplumbersconf.org/2014/ocw/proposals/2025
- Track: LLVM
- 日時: Friday, October 17, 2014 

### Description

OpenMandriva’s next big release will use clang as its default compiler – almost all packages have been rebuilt with it.

This talk will show common things that went wrong (and how to fix them), where we’re still using “CC=gcc CXX=g++” to make packages compile, and start a discussion about what we can do to improve clang support in Open Source projects in general.

### One Line Summary

Experiences OpenMandriva made while changing the distribution's default compiler to clang 3.5

### 添付資料URL

- [slides](http://www.linuxplumbersconf.net/2014/ocw//system/presentations/2025/original/LPC14-L OpenMandriva's switch to clang.pdf)（file）


- スケジュール掲載のアーカイブURL: https://blog.linuxplumbersconf.org/2014/ocw/system/presentations/2025/original/LPC14-L OpenMandriva's switch to clang.pdf
<a id="session-2031"></a>
## 93. Building Android userland with clang

- セッション個別URL: https://blog.linuxplumbersconf.org/2014/ocw/proposals/2031
- Track: LLVM
- 日時: Friday, October 17, 2014 

### Description

This talk is about our efforts to get Android userland with clang, common problems and their solutions, and future steps — including the much needed switch from stlport to llvm’s libc++

### One Line Summary

Problems when trying to build Android userland with clang, and future steps

### 添付資料URL

- [slides](http://www.linuxplumbersconf.net/2014/ocw//system/presentations/2031/original/LPC14-L Building Android with Clang.pdf)（file）


- スケジュール掲載のアーカイブURL: https://blog.linuxplumbersconf.org/2014/ocw/system/presentations/2031/original/LPC14-L Building Android with Clang.pdf
<a id="session-1725"></a>
## 94. Correlating timestamps in user and kernel space

- セッション個別URL: https://blog.linuxplumbersconf.org/2014/ocw/proposals/1725
- Track: Tracing
- 日時: Friday, October 17, 2014 9:00am

### Description

There are many great sources of performance data in the kernel, like perf and ftrace. Unfortunately anyone trying to correlate data coming from them with a userspace event, for example JIT compiler generated debug symbols, is up for a disappointment. The main is lack of common “time zone” between kernel usually using “cheap” time sources like sched clock, and userspace-available time of day or POSIX clocks.

There has been numerous approaches proposed on kernel mailing lists over the last year or two, from extra trace events, through custom ioctls (http://article.gmane.org/gmane.linux.kernel/1433933) which was quietly ignored, to specialised POSIX clocks (http://thread.gmane.org/gmane.linux.kernel/1376353/focus=1524878) which was rejected. Ingo suggested synchronising sched clock in sync with the raw monotonic one, so I came up with a simple proof of concept (http://article.gmane.org/gmane.linux.kernel/1751163). Some liked the basic idea, Richard polietly suggested getting back to the trace events… History repeats itself ;-)

The subject comes and goes for the last two years (at about a half-yearly intervals), so it would be great to be able to discuss the thing face to face and (maybe?) come up with some decisions…

### One Line Summary

We need a way of timestamping perf(ormance) data generated in userspace.

### 添付資料URL

掲載なし

<a id="session-2517"></a>
## 95. Linux Tracing Strategy

- セッション個別URL: https://blog.linuxplumbersconf.org/2014/ocw/proposals/2517
- Track: Tracing
- 日時: Friday, October 17, 2014 9:30am

### Description

There are many tracing options for Linux: ftrace, perf_events, SystemTap, LTTng, dtrace4linux, ktap, eBPF, and sysdig. What are we trying to accomplish — what are the end use cases for Linux tracing — and how do we get there? This may involve integration of tracers (SystemTap, LTTng), as well as integration between tracers (ktap, eBPF).

### One Line Summary

The current state of tracing, integration between and of the tracers, and where we should be going.

### 添付資料URL

掲載なし

<a id="session-1839"></a>
## 96. Use of Common Trace Format (CTF) among different tracers

- セッション個別URL: https://blog.linuxplumbersconf.org/2014/ocw/proposals/1839
- Track: Tracing
- 日時: Friday, October 17, 2014 10:00am

### Description

The Common Trace Format (CTF) has been created to use the same trace analysis tools for bare metal and software (LTTng) tracing initially. Now, gdb is using CTF and the Babeltrace CTF reader library, and there is a prototype converter from Perf traces into CTF, using the Babeltrace CTF writer library.

Discuss the following steps to share common trace format and tools, ranging from conversion to producing CTF natively from the tracers (as an ABI).

### One Line Summary

Next steps to share common tracing tools via common trace format

### 添付資料URL

掲載なし

<a id="session-2511"></a>
## 97. Sharing kernel tools code

- セッション個別URL: https://blog.linuxplumbersconf.org/2014/ocw/proposals/2511
- Track: Tracing
- 日時: Friday, October 17, 2014 10:30am

### Description

There’s been a need to librarize some of the perf tools code
too be used by other tools, which are at the moment not
part of the kernel tree (trace-cmd, RAS Deamon).

Discuss how to handle out of tree dependency and the state
and future of the tools/lib.

### One Line Summary

Making perf tools generic code available as a tools library.

### 添付資料URL

掲載なし

<a id="session-2523"></a>
## 98. Rich probe filtering and reporting with variable locations and types

- セッション個別URL: https://blog.linuxplumbersconf.org/2014/ocw/proposals/2523
- Track: Tracing
- 日時: Friday, October 17, 2014 11:00am

### Description

Various observation tools use different ways to locate and access arguments and variables in scope when a probe point is hit or an event is triggered. Having the location and type of arguments and variables allows for richer filtering and reporting or user defined logging of events. Some mechanisms are tied to the way some probe mechanism is setup, others provide more generic descriptions of locations and types of variables at a particular address location. With eBPF we might be able to translate these mechanisms into efficient filters and data extraction for events used in the kernel.

I would like to go over some of the diffent mechanisms some of the tools use. Simple arch specific function arguments, CTF – Compact C Type Format used by dtrace with a experimental convertor in pahole/dwarves, (U)SDT User Static Defined Trace points with two (source compatible) implementations in dtrace and systemtap, also used by gdb and perf, and full DWARF location expressions that can be used by both user space and kernel tools. And explore why or why not these mechanisms are used by which tools.

The outcome will hopefully be a better understanding of which mechanisms are the most useful for all tools, which really won’t work in some situations and how to translate some of these into eBPF filters/functions that can be used by (all) in kernel tools.

### One Line Summary

How to combine various mechanisms (CTF, SDT, DWARF, etc.) used by various tools to provide rich filtering and reporting of events.

### 添付資料URL

掲載なし

<a id="session-2001"></a>
## 99. IOMMU Fault Handling

- セッション個別URL: https://blog.linuxplumbersconf.org/2014/ocw/proposals/2001
- Track: IOMMU and VFIO
- 日時: Friday, October 17, 2014 1:00pm

### Description

Currently IOMMU fault handling is limited to the IOMMU driver, there’s no outbound notification path via either dma_ops or the IOMMU API.  Most faults generate a dmesg log entry at best.  In this discussion we’ll look at what the appropriate response should be for various use cases and how to get started with an implementation.

### One Line Summary

The IOMMU subsystem currently lacks fault propagation out to drivers or other users of the interface.  We'll discuss work to be done in this area.

### 添付資料URL

掲載なし

<a id="session-1905"></a>
## 100. Consolidating IOMMU Drivers

- セッション個別URL: https://blog.linuxplumbersconf.org/2014/ocw/proposals/1905
- Track: IOMMU and VFIO
- 日時: Friday, October 17, 2014 1:30pm

### Description

The IOMMU drivers currently in the Linux kernel re-implement a lot of functionality (often in different ways). These differences, for example in domain assignment and de-assignment, are often visible to the users of the IOMMU-API, making it difficult to write IOMMU independent code.

In this discussion I will present some ideas on what functionality should be moved from the drivers into the IOMMU core to make the behavior of the IOMMU-API more consistent and to reduce the code duplication in all the drivers.

### One Line Summary

Lots of code in the current IOMMU drivers can be consolidated into core code. This discussion presents some ideas on this.

### 添付資料URL

- [slides](http://www.linuxplumbersconf.net/2014/ocw//system/presentations/1905/original/consolidation.odp)（file）


- スケジュール掲載のアーカイブURL: https://blog.linuxplumbersconf.org/2014/ocw/system/presentations/1905/original/consolidation.odp
<a id="session-2019"></a>
## 101. Exposing a virtual IOMMU interface to KVM guests

- セッション個別URL: https://blog.linuxplumbersconf.org/2014/ocw/proposals/2019
- Track: IOMMU and VFIO
- 日時: Friday, October 17, 2014 2:00pm

### Description

Exposing a non-paravirtualised IOMMU to a KVM guest requires some level of in-kernel IOMMU emulation and fiddly userspace interaction between VFIO and KVM. This discussion will present where I’ve got to implementing this with the ARM SMMU and see where things can be improved.

In particular:
  – Can other IOMMUs make use of this type of infrastructure?
  – Can we improve the mechanisms for passing vfio_group information into kvm device ioctls?
  – Do we always need separate page tables for VFIO DMA mappings?
  – Do we really need all of: VFIO IOMMU types vs VFIO IOMMU extensions vs IOMMU capabilities vs domain attributes? If so, can we better define how they differ?
  – How on Earth do we extend this for non-PCI masters and does that even make sense?
  – How do we describe virtual PCI topologies that don’t match the physical topology to the guest?

### One Line Summary

Discussion around exposing a virtual IOMMU interface to a KVM guest using VFIO/KVM ioctls

### 添付資料URL

- [slides](http://www.linuxplumbersconf.net/2014/ocw//system/presentations/2019/original/vsmmu-lpc14.pdf)（file）


- スケジュール掲載のアーカイブURL: https://blog.linuxplumbersconf.org/2014/ocw/system/presentations/2019/original/vsmmu-lpc14.pdf
<a id="session-2241"></a>
## 102. VFIO and non-DMA devices

- セッション個別URL: https://blog.linuxplumbersconf.org/2014/ocw/proposals/2241
- Track: IOMMU and VFIO
- 日時: Friday, October 17, 2014 2:30pm

### Description

vfio currently has an inherent assumption that devices passed through to user space do DMA and thus involves an IOMMU.  A simple example would be something like a UART, but there are other potentially more interesting devices as well.

This topic covers:
   -why it is potentially useful to pass-through devices that don’t do DMA
   -why vfio is preferred to UIO for doing this
   -a proposal for extending vfio to allow this

### One Line Summary

This session proposes changes to vfio to remove a current limitation-- allowing the passthrough of non-DMA devices to user space.

### 添付資料URL

掲載なし

<a id="session-2253"></a>
## 103. IOMMU Page Faulting an Linux MM Integration

- セッション個別URL: https://blog.linuxplumbersconf.org/2014/ocw/proposals/2253
- Track: IOMMU and VFIO
- 日時: Friday, October 17, 2014 3:00pm

### Description

Page Faulting for IOMMUs is a very new feature, currently only implemented for the AMD IOMMU in the Linux Kernel. But other hardware vendors like Intel or the ARM world are coming up with their own hardware soon, making it necessary to generalize the existing code and integrate it well into the IOMMU-API.

This discussion is about potential ways to re-use the existing code and how to integrate it into the current API to suit the needs of upcoming hardware.

### One Line Summary

Discussion about how to integrate upcoming and existing demand paging IOMMUs into the IOMMU-API

### 添付資料URL

- [slides](http://www.linuxplumbersconf.net/2014/ocw//system/presentations/2253/original/iommuv2.pdf)（file）


- スケジュール掲載のアーカイブURL: https://blog.linuxplumbersconf.org/2014/ocw/system/presentations/2253/original/iommuv2.pdf
<a id="session-2007"></a>
## 104. Handling device identity mappings in the IOMMU API

- セッション個別URL: https://blog.linuxplumbersconf.org/2014/ocw/proposals/2007
- Track: IOMMU and VFIO
- 日時: Friday, October 17, 2014 3:30pm

### Description

Platforms have the ability to request that the IOMMU provide identity mappings for various memory ranges per device.  On Intel VT-d this is done via the RMRR entry in the DMAR table.  Some vendors abuse this interface to create back channels where devices can share sensor data outside of the scope of the running operating system.  In other cases, the RMRRs are intended only to provide continuity of memory access for the device across boot, and in some cases the mapping is irrelevant to the device after boot.

In this discussion we’ll talk about how whether such requirements should preclude a device from participating in the IOMMU API or how we might modify the API to allow for it.

Slides: http://awilliam.github.io/presentations/LPC-IOMMU-VFIO-uconf-RMRR-2014/#/

### One Line Summary

Some devices request identity mapping of ranges via firmware interfaces, which seems contrary to device use via the IOMMU API.  Can we support these conflicting requirements?

### 添付資料URL

- [slides](http://www.linuxplumbersconf.net/2014/ocw//system/presentations/2007/original/LPC-IOMMU-VFIO-uconf-RMRR-2014.pdf)（file）


- スケジュール掲載のアーカイブURL: https://blog.linuxplumbersconf.org/2014/ocw/system/presentations/2007/original/LPC-IOMMU-VFIO-uconf-RMRR-2014.pdf
<a id="session-2043"></a>
## 105. Overview of the Live Kernel Patching methods

- セッション個別URL: https://blog.linuxplumbersconf.org/2014/ocw/proposals/2043
- Track: Live Kernel Patching
- 日時: Friday, October 17, 2014 1:00pm

### Description

A ten minute presentation of each of the competing methods for live updating of a running kernel will be done. I will call on someone from each of these projects to give a 10 minute overview of how their method works. No questions will be taken. This will be performed at the beginning of the microconference to let everyone understand the ideas of each implementation that will be discussed for the rest of the time.

### One Line Summary

Overview of the three approaches for Live Kernel Patching (kpatch, kGraft and criu+kexec)

### 添付資料URL

掲載なし

<a id="session-1875"></a>
## 106. kpatch vs kGraft

- セッション個別URL: https://blog.linuxplumbersconf.org/2014/ocw/proposals/1875
- Track: Live Kernel Patching
- 日時: Friday, October 17, 2014 1:30pm

### Description

Design comparison
	Feature comparison (kernel)
	Is there any way to combine the kernel implementations?
	Feature comparison (user space)
	Is there any way to combine the user space implementations?
	Should we put the user space tools in the kernel tree?
	What steps can we take to get a live patching solution merged into mainline?

### One Line Summary

Compare the design and features of kpatch and kGraft and figure out if we can combine the two approaches, or take any other steps to get a live patching solution merged into mainline.

### 添付資料URL

掲載なし

<a id="session-1893"></a>
## 107. Updating the kernel using CRIU and KExec

- セッション個別URL: https://blog.linuxplumbersconf.org/2014/ocw/proposals/1893
- Track: Live Kernel Patching
- 日時: Friday, October 17, 2014 2:00pm

### Description

Live-patching the running kernel has its limitations. Instead of doing this one can replace the whole kernel by doing

save the state of running processes
	reboot into new kernel using kexec
	restore processes from state images

Steps 1 and 3 require the technology called “checkpoint-restore”, which is now becoming available with the CRIU project.

We will discuss the advantages of this approach and its limitations as compared to live-patching, and how kernel can help in optimizing the process.

### One Line Summary

Pros and cons of replacing the kernel seamlessly to running processes instead of live-patching it.

### 添付資料URL

- [slides](http://www.linuxplumbersconf.net/2014/ocw//system/presentations/1893/original/rku-dusseldorf.odp)（file）


- スケジュール掲載のアーカイブURL: https://blog.linuxplumbersconf.org/2014/ocw/system/presentations/1893/original/rku-dusseldorf.odp
<a id="session-2295"></a>
## 108. What features are needed from a live patching solution?

- セッション個別URL: https://blog.linuxplumbersconf.org/2014/ocw/proposals/2295
- Track: Live Kernel Patching
- 日時: Friday, October 17, 2014 2:30pm

### Description

There are currently several competing solutions for live patching. The aim of this session is to try to reach an agreement (through mixture of presentation and discussion) on what features the live patching solution should be implementing so that user expectations are satisfied.

### One Line Summary

What features are needed from a live patching solution?

### 添付資料URL

掲載なし

<a id="session-2421"></a>
## 109. Exploring synergies between Linux Kernel and Xen hypervisor live patching

- セッション個別URL: https://blog.linuxplumbersconf.org/2014/ocw/proposals/2421
- Track: Live Kernel Patching
- 日時: Friday, October 17, 2014 3:00pm

### Description

I would like to discuss design options for Xen live patching and contrast that to Linux approaches.

### One Line Summary

A quick introduction into the design space for live patching for Xen.

### 添付資料URL

- [slides](http://www.linuxplumbersconf.net/2014/ocw//system/presentations/2421/original/xen_hotpatching-2014-10-16.pdf)（file）


- スケジュール掲載のアーカイブURL: https://blog.linuxplumbersconf.org/2014/ocw/system/presentations/2421/original/xen_hotpatching-2014-10-16.pdf
<a id="session-2085"></a>
## 110. Introduction to networkd

- セッション個別URL: https://blog.linuxplumbersconf.org/2014/ocw/proposals/2085
- Track: Network Management
- 日時: Friday, October 17, 2014 1:00pm

### Description

networkd was introduced with systemd v210 at the beginning of this year, we will discuss what the main ideas behind networkd are, what have been achieved so far, and where we are going next.

### One Line Summary

Introduction to networkd, what have been done so far, what we are working on, and what we see as our main usecases

### 添付資料URL

掲載なし

<a id="session-2055"></a>
## 111. NetworkManager Status Update

- セッション個別URL: https://blog.linuxplumbersconf.org/2014/ocw/proposals/2055
- Track: Network Management
- 日時: Friday, October 17, 2014 1:15pm

### Description

NetworkManager 0-9-10 was released in July 2014 and currently version 1.0 is in the making. Give a status update on the changes since 0.9.8 and what to expect from 1.0

### One Line Summary

Status Update on NetworkManager and what to expect from nm-1.0

### 添付資料URL

- [slides](http://www.linuxplumbersconf.net/2014/ocw//system/presentations/2055/original/LPC-nm.pdf)（file）


- スケジュール掲載のアーカイブURL: https://blog.linuxplumbersconf.org/2014/ocw/system/presentations/2055/original/LPC-nm.pdf
<a id="session-2127"></a>
## 112. ConnMan status update

- セッション個別URL: https://blog.linuxplumbersconf.org/2014/ocw/proposals/2127
- Track: Network Management
- 日時: Friday, October 17, 2014 1:30pm

### Description

Quick 10 min status update for the past year from which it is easy to directly continue with Tomasz WiFi P2P talk.

### One Line Summary

ConnMan status update

### 添付資料URL

- [slides](http://www.linuxplumbersconf.net/2014/ocw//system/presentations/2127/original/ConnMan status update Linux Plumbers 2014 Düsseldorf.pdf)（file）


- スケジュール掲載のアーカイブURL: https://blog.linuxplumbersconf.org/2014/ocw/system/presentations/2127/original/ConnMan status update Linux Plumbers 2014 Düsseldorf.pdf
<a id="session-1923"></a>
## 113. Traffic control for multimedia applications

- セッション個別URL: https://blog.linuxplumbersconf.org/2014/ocw/proposals/1923
- Track: Network Management
- 日時: Friday, October 17, 2014 1:45pm

### Description

On mobile networks where the available bandwidth is variable, it is difficult to accommodate the rendering of a web-radio/video stream with other background downloads. In this talk, I will present the approach used in tcmmd to control the ingress bandwidth used by multimedia applications and other applications.

Then I will bring some ideas I had on how to play nice with other traffic control applications.

### One Line Summary

Controlling the network bandwidth with traffic control for multimedia applications on mobile networks

### 添付資料URL

掲載なし

<a id="session-2061"></a>
## 114. Bringing WiFi P2P connectivity to higher level via ConnMan

- セッション個別URL: https://blog.linuxplumbersconf.org/2014/ocw/proposals/2061
- Track: Network Management
- 日時: Friday, October 17, 2014 2:00pm

### Description

WiFi P2P is one of the latest and hottest WiFi feature, used as an enabler for other recent technologies such as WiFi Display and more. However, the current API provided by wpa_supplicant is, by far, too low level for application development since it requires for the developer to know how WiFi P2P actually works. The solution in ConnMan was to bring a higher level API, hiding most of the nasty bits and pieces of WiFi P2P.

### One Line Summary

How providing WiFi P2P connectivity in a simple manner has been solved though ConnMan

### 添付資料URL

- [slides](http://www.linuxplumbersconf.net/2014/ocw//system/presentations/2061/original/ConnMan_P2P.pdf)（file）


- スケジュール掲載のアーカイブURL: https://blog.linuxplumbersconf.org/2014/ocw/system/presentations/2061/original/ConnMan_P2P.pdf
<a id="session-2067"></a>
## 115. DNSSEC and split DNS using unbound and dnssec-trigger

- セッション個別URL: https://blog.linuxplumbersconf.org/2014/ocw/proposals/2067
- Track: Network Management
- 日時: Friday, October 17, 2014 2:30pm

### Description

Fedora has been working towards the feature of doing split DNS and DNSSEC with a reasonable user experience. I will present the current status and plans and then proceed with an open discussion allowing to compare our plans with the systemd plans.

### One Line Summary

What we expect from unbound and dnssec-trigger and how we integrate them to Fedora and possibly other distributions.

### 添付資料URL

掲載なし

<a id="session-1743"></a>
## 116. systemd-resolved

- セッション個別URL: https://blog.linuxplumbersconf.org/2014/ocw/proposals/1743
- Track: Network Management
- 日時: Friday, October 17, 2014 2:45pm

### Description

systemd-resolved is a local caching DNS and LLMNR stub resolver. Work on adding mDNS and DNSSEC support is in the works. In this talk I hope to shed some details on the details, and why that matters.

### One Line Summary

Recently, systemd gained it's own mini-daemon for host name resolution, called "systemd-resolved". This deserves explanation

### 添付資料URL

掲載なし

<a id="session-1833"></a>
## 117. Enlightenment as Wayland Compositor

- セッション個別URL: https://blog.linuxplumbersconf.org/2014/ocw/proposals/1833
- Track: Wayland
- 日時: Friday, October 17, 2014 1:00pm

### Description

We will quickly cover the work we did to let Enlightenment act as a standaolone wayland compositor.

Getting rid of the X deps we had all over the code base
	Interfacing with the lower layers on our own (DRM, VT handling, input devices, etc)
	Implementing XDG shell

After that we can dive into the discussion about topics that needs work in wayland or are potential areas for collaboration.

libinput
	Extending XDG shell
	(Session recovery)

### One Line Summary

The journey we took to make it possible to run Enlightenment as a standalone Wayland compositor.

### 添付資料URL

- [slides](http://www.linuxplumbersconf.net/2014/ocw//system/presentations/1833/original/LPC-2014-EWayland.pdf)（file）


- スケジュール掲載のアーカイブURL: https://blog.linuxplumbersconf.org/2014/ocw/system/presentations/1833/original/LPC-2014-EWayland.pdf
<a id="session-2133"></a>
## 118. Porting Tizen IVI to Wayland

- セッション個別URL: https://blog.linuxplumbersconf.org/2014/ocw/proposals/2133
- Track: Wayland
- 日時: Friday, October 17, 2014 1:25pm

### Description

Historically, the “IVI” flavor of Tizen has been running using the X11 display system. So did the more generic “Common” profile, until the project decided to catch up with the latest developments of this new technology called Wayland.

As Wayland is now coming into shape and embedded systems such as set-top boxes are already using it, it has been decided to migrate IVI to Wayland. So it is now conceivable to create a Wayland-enabled Tizen IVI device ; but what challenges does that leave for us ?

The problematics adressed by the Tizen IVI team currently are :
- having a GENIVI-compliant API ready ; IVI-Shell, which is the official GENIVI implementation, is being pushed upstream and in the toolkits which applications will use ;
- helping mobile applications which have specific needs (being shown, hidden…) by improving the shell API ;
- adapting the application framework so it can communicate application states to the Wayland compositor ;
- fixing all related bugs and relaying application developers requests.

We will share knowledge of common pitfalls and experienced drawbacks with the audience.

### One Line Summary

Developing Tizen IVI Wayland features in collaboration with upstream projects

### 添付資料URL

- [slides](http://www.linuxplumbersconf.net/2014/ocw//system/presentations/2133/original/LPC2014-Slides.pdf)（file）


- スケジュール掲載のアーカイブURL: https://blog.linuxplumbersconf.org/2014/ocw/system/presentations/2133/original/LPC2014-Slides.pdf
<a id="session-2433"></a>
## 119. Standardizing privileged operations

- セッション個別URL: https://blog.linuxplumbersconf.org/2014/ocw/proposals/2433
- Track: Wayland
- 日時: Friday, October 17, 2014 1:50pm

### Description

With wayland apps which want to do certain privileged operations, like taking a screenshot or registering global hotkey handler need to go through a privileged application, typically the compositer.

Currently desktop environments like gnome are rolling their own (dbus) based API-s for this. This is undesirable, as this means that a qt wayland app may be able to only do hotkeys under kde, and a gtk app under gnome, so we should standardize this.

Discussion points:
1) Do we agree that these things should be standardized
2) dbus-api or xdg_shell (or a new wayland proto extension)
3) Make a list of operations we want to standardize

### One Line Summary

Discussion about standardizing how privileged operations like screenshots or registering global hotkeys can be done.

### 添付資料URL

- [slides](http://www.linuxplumbersconf.net/2014/ocw//system/presentations/2433/original/wayland-priv-ops.odp)（file）


- スケジュール掲載のアーカイブURL: https://blog.linuxplumbersconf.org/2014/ocw/system/presentations/2433/original/wayland-priv-ops.odp
<a id="session-2229"></a>
## 120. Graphics beyond the main compositor

- セッション個別URL: https://blog.linuxplumbersconf.org/2014/ocw/proposals/2229
- Track: Wayland
- 日時: Friday, October 17, 2014 2:30pm

### Description

While the desktop environment and its main compositor are the major target for new graphics developments, there are still ongoing efforts to improve the graphics stack beyond the main compositor. This includes single-modeset boot, graphical boot-loaders and initrds, seamless hardware-handover from simple firmware drivers to real graphics drivers and moving the VT layer out of the kernel.

This session will give an overview how things currently work and what we work on in the kernel, systemd and desktop-environments to improve the situation.

### One Line Summary

An overview of ongoing efforts to improve the graphics stack in the boot-loader, initrd, login-manager, early-boot and late-shutdown.

### 添付資料URL

掲載なし

<a id="session-2235"></a>
## 121. Moving to the user-bus

- セッション個別URL: https://blog.linuxplumbersconf.org/2014/ocw/proposals/2235
- Track: Wayland
- 日時: Friday, October 17, 2014 2:55pm

### Description

With the move to kdbus, we want to move the per-session bus to a per-user model. While both dbus1 and kdbus allow any number of buses, combining this with the kdbus-move allows for a clean cut.

This session will start with a rationale why we want a per-user bus and how things might look like. Aftwerwards, the session is open for a discussion whether other DEs will follow and which problems may arise.

### One Line Summary

Discussion on why/how to move existing compositors from a per-session to a per-user bus.

### 添付資料URL

掲載なし

# Wiki Topics 補足

2014年はOCW形式でproposalsとsessionsの両形式が混在。開催スケジュールの個別URL付き枠121件を収録。Descriptionは個別ページのAbstract原文。One Line Summaryは別フィールドに保持。資料URLは個別ページの原記載を保持し、スケジュールに別のアーカイブURLがある場合はschedule_urlも収録。添付ファイル本体の取得・リンク有効性検査は実施していない。Wiki Topicsは採用済み15件、BoF 1件、Abandoned 2件を補足に区別して収録し、個別セッション数には加算しない。WikiのTentative/Proposed等は原文通り。個別開始時刻が未掲載の41件は空欄のまま保持。全体の16枠も補足に収録。

## Android/Mobile（採用済み）

https://wiki.linuxplumbersconf.org/2014:android

Android/Mobile




The Linux Plumbers 2014 Android/Mobile track is focusing on the ongoing integration of Android into the mainline, as well as new form factors where Android ecosystem is expanding and the new challenges arising from this.



The structure will be short presentations (10-15 minutes) followed by active discussions (each topic should last between 30 and 45 minutes). If there is enough interest, we may hold some lightning talks where presentations will be short (5 minutes) and the whole topic should last no more than 10-15 minutes.




Key Attendees


 Karim Yaghmour

 Zach Pfeffer





Confirmed Attendees


 Rom Lemarchand

 Anwar Ghuloum

 Elliott Hughes

 Riley Andrews

 Dimitry Schmidt

 Paul McKenney

 Zach Pfeffer

 Karim Yaghmour

 Serban Constantinescu

 Greg KH

 Sumit Semwal

 Maarten Lankhorst

 Bernhard Rosenkränzer

 Rodolph Perfetta

 Kevin Petit

 Kristof Beyls

 Morten Rasmussen

 Dietmar Eggemann

 Alex Bennée

 Rian Sanderson

 Praneeth Bajjuri

 Daniel Vetter

 Laura Abbott

 Tom Gall





Proposed Topics


 Android on LLVM (Bero)

 LLVM AARCH64 (Kristof Beyls)

 64-bit

 64-bit ART (Elliott Hughes)

 Android emulator (TBD)

 bionic - 64-bit ABI (Elliott Hughes)

 64-bit Binder ABI/Porting generic Android drivers (Serban Constantinescu)

 Migrating code from ARM to ARM64 (Kevin Petit)

 Introduction to AARCH64 (Rodolph Perfetta)



 Moving things out of staging (Greg KH)

 dma-fence & android sync (Maarten/Riley/Daniel)

 Power management discussion: Big.Little (Morten Rasmussen / Dietmar Eggemann / Rom)

 Ion and the DMA coherency model (Laura Abbott)





Schedule




TBD




Contact




Proposal added by Rom Lemarchand romlem@android.com

### 添付資料URL

掲載なし

## Automotive（採用済み）

https://wiki.linuxplumbersconf.org/2014:automotive

This page holds information on the proposal of an Automotive microconference at Linux Plumbers 2014. For convenience, here is a link to a read-only version of last year's wiki: 2013 automotive



Below is a list of tentative topics to be discussed. The plan is to have a have a microconf that has a lot of hands-on opportunities and some real work gets done, along with important discussions on specifications, etc.




Topics




Automotive Linux kernel Configuration


 Linux Fast Boot for Automotive Requirments

 Linux Virtualization for Vehicle Controller and Linux together in Multicore system    

 LTSI Car makers want longer support. How could they extend the two years promised by LTSI? What resources are required?





Networking


 Ethernet (AVB) and Linux modules connected to that 1722, gptp, etc.

 Network policy: pold, Murphy Policy Manager

 Vehicle to vehicle (V2V), V2I, etc.





Vehicle Interface


 How do we identify and develop against, an interface to the vehicle? 

 What is out there today that we can use?

 AMB Automotive Message Broker

 W3C specifications (what state are they in?)

 Qt based vehicle interface

 HTML5 







Vehicle Diagnostics


 How to align the various diagnostic outputs into something usable?

 Alignment with AUTOSAR?

 GENIVI Diagnostic Log and Trace (DLT)

 systemd's journal-remote

 Incorporating Linux kernel traces (LTTng?)

 How can we get diagnostic data to reduce the need for product recalls?

 What's is the relevance of ISO 14229? 





Remote Vehicle Interaction


 Creating the OSS technology to drive next generation of connected vehicle services.

 Project mission, goals, and roadmap

 Technical presentation

 Discussion on how to drive the project forward





User interaction


 Minimizing driver distraction, pop-up management, driver workload assessment





AGL Reference Platform Hackathon


 Invite participants to develop applications on top of the AGL Reference Platform

 We provide Intel NUC systems with the platform and tools installed. Participants can code on those systems.

 Jaguar Land Rover has committed to providing the NUCs for a hackathon.

 We provide instructions on how code HMTL5/JavaScript applications and other components for the platform.

 Eventually, we could have a car with the AGL Reference Platform installed. The car would have CAN bus and MOST integration. Participants could then try their creations directly on the car.

 If we don't get a car we could use CAN simulators for some real 'action'.

 We could turn this into a contest and award prizes for the winners in tbd categories. The prizes could be NUC systems with the AGL reference platform installed. We would need sponsors for the prizes. AGL may be able to sponsor some but others should sponsor too.





Attendees



Following attendees will show up (if nothing goes wrong):



 Murphy Representative (Janos Kovacs?) (Murphy)

 Praneeth Bajjuri





Desired Attendees


 Kevron Rees (AMB)

 Alexander Wenzel (GENIVI DLT)

 Zbigniew Jędrzejewski-Szmek (journal-remote)

 Kay Sievers (kernel log)

 Moritz Blume (pold)

 Alison Chaiken (V2V)

 Johan Thelin (Qt)

 Jonatan Pålsson (GENIVI Browser PoC)

 Gunnar Andersson (GENIVI Lead Architect)

 VNC Representative (VNC)





Discussion notes / Minutes




This is a good place to record notes from your session.  All too often, if notes were not written down, the session might as well not have happened.




Contact




Automotive microconf proposal by Rudi Streif rudolf.streif@linux.com, Jeremiah C. Foster jeremiah.foster@pelagicore.com, Timo Mueller timo.mueller@bmw-carit.de,and Deepesh Singh deepesh-singh.thakur@magnetimarelli.com

### 添付資料URL

掲載なし

## Containers（採用済み）

https://wiki.linuxplumbersconf.org/2014:containers

Containers topics




In the last year containers on Linux have seen a number of new technologies and changes. Changes to cgroups, new tools like docker and lmctfy and continued maturity of the supporting Linux subsystems.



Areas of interest include:



 cgroup hierarchy redesign and management systems (systemdlmctfy, etc)

 management of container filesystems and de-duplication (btrfs snapshots, device mapper, etc)

 cross container networking

 checkpoint restore in userspace

 container snapshot design for all backing stores

 container clone hooks - integrate into templates?  (updating /etc/mailhost etc)

 standardizing the “application container”

 current state of user namespaces

 “leader pid” discovery for entering and modifying namespaces (docker libcontainer, machinectl, etc)

 container migration between hosts

 load balancing/failing over between containers

 starting containers on-demand

 libcontainer.so for unified container management

 simple network configuration between local and remote containers (SDN and VPC concepts)





Format



While last year's container mini-summit was quite popular, I think this year we should try to reduce the number of presentations (due to limited time) and instead try to get some more actual discussion going.



It seems like focusing on collaboration on cgroup management, checkpoint restart and common libraries and tools would be a good place to start and should keep us occupied for quite a while.



Coming out of the summit we should have a clear set of decisions/designs and hopefully action owners.




Suggested attendees



The list below are people we'd like to have for the mini-summit, none of those are confirmed to attend yet, feel free to add your name or anyone you'd like to attend to the list below:


 Stéphane Graber (LXC maintainer)

 Serge Hallyn (LXC maintainer)

 Eric Biedermann (kernel developer, namespaces and cgroups)

 Tejun Heo (kernel developer, cgroups) [unable to attend]

 Brandon Philips (CoreOS)

 Lennart Poettering (Systemd/nspawn)

 Kay Sievers (Systemd/nspawn)

 Kir Kolyshkin (OpenVZ/CRIU)

 Pavel Emelianov (OpenVZ/CRIU)

 James Bottomley (OpenVZ)

 Victor Marmol (LMCTFY)

 Rohit Jnagal (LMCTFY)

 Tim Hockin (LMCTFY)

 Solomon Hykes (docker)

 Dinesh Subhraveti (containers researcher; docker)





Mini-summit leads


 Brandon Philips brandon.philips@coreos.com

 Stéphane Graber stephane.graber@canonical.com

### 添付資料URL

掲載なし

## Development tools (Coccinelle, sparse, etc.)（採用済み）

https://wiki.linuxplumbersconf.org/2014:development_tools_coccinelle_sparse_etc

Development Tools




Currently, there are a number of development tools, such as Coccinelle, sparse and checkpatch, that are easily usable via the Linux build system and that are used by the Linux 0-day kernel test system.  The goal of the Linux Plumbers 2014 Development Tools track is to exchange experiences on the use of these tools and to consider what should be done next.  We particularly encourage presentations on current uses of development tools and on development problems that could benefit from tool support.



The microconference will consist of short presentations followed by discussions of related issues.




Schedule




Potential attendees:



 Johannes Berg (confirmed - but also wants to attend wireless and driver deprecation)

 Josh Triplett (confirmed)

 Wolfram Sang

 Junio C Hamano (git)

 Sam Ravnborg (if close to Oct 15)

 Valentin Rothberg (confirmed, presentation on #ifdef bugs)

 Martin Monperrus (presentation on automatic bug fixing)

 Himangi Saraogi (potential presenter, not available Oct 17)

 Tegawende Bissyande

 Andreea-Cristina Bernat (only available on Oct 15, potential presenter)

 Luis Rodriguez (confirmed, presentation on backports)

 Hauke Mehrtens (confirmed, also interested in wireless)

 Behan Webster (confirmed, unless conflict with LLVM)

 Stefan Assmann

 Christopher Covington (confirmed, testing across multiple architectures using QEMU)

 Jiri Slaby

 Praneeth Bajjuri (confirmed , unless there is no conflict with Automotive and Android micro conf)





Attendees




Please add your name to the following list if you would like to attend but not give a presentation



 Attendee 1

 Attendee 2





Discussion notes




This is a good place to record notes from your session.  All too often, if notes were not written down, the session might as well not have happened.




Contact




Proposal added by Julia Lawall Julia.Lawall@lip6.fr

### 添付資料URL

掲載なし

## Energy-aware Scheduling and CPU Power Management（採用済み）

https://wiki.linuxplumbersconf.org/2014:energy-aware_scheduling

Energy-aware Scheduling and CPU Power Management




The Linux Plumbers 2014 Energy-aware Scheduling and CPU Power Management track is focusing on energy-awareness improvements for the scheduler and cpu power management frameworks (cpuidle, intel_pstate, cpufreq).



Following last years micro conference (power-efficient_scheduling) and the Kernel Summit workshop last year a number of areas were identified which need work to move towards improved energy-awareness in the kernel. This aim of this micro conference is to coordinate and discuss efforts made in these and related areas.



More details about some of the energy-aware scheduling efforts are gathered here: Energy-aware Scheduling wiki-page




Topic proposals


 Tools and benchmarks for energy testing and evaluation (Vincent Guittot, Amit Kucheria).

 Integration of existing power management frameworks with scheduler (Daniel Lezcano, Mike Turquette).

 Energy-model guided scheduler decisions (Morten Rasmussen).

 Evaluation of the existing power management frameworks and their effect on deeper idle states and turbo frequencies on PowerPC (Preeti U Murthy).

 Evaluation of userspace tools like Tuned in providing acceptable performance and powersavings (Preeti U Murthy).





Schedule




The schedule of the 2014 Energy-aware Scheduling Plumbers and CPU Power Management Micro Conference is as follows. Note presentation slides can be found on the Plumbers page by following the links to the abstracts:


 Session 1 - Presenter 1

 Session 2 - Presenter 2

 etc…





Discussion notes




This is a good place to record notes from your session.  All too often, if notes were not written down, the session might as well not have happened.




Desired attendees


 Vincent Guittot (Linaro)

 Daniel Lezcano (Linaro)

 Yuyang Du (Intel)

 Rafael J. Wysocki (Intel)

 Peter Zijlstra (Redhat)

 Ingo Molnar (Redhat)

 Preeti U Murthy (IBM)

 Amit Kucheria (Linaro)

 Mike Turquette (Linaro)

 Dietmar Eggemann (ARM)





Willing to attended


 Morten Rasmussen (ARM)

 Rafael J. Wysocki (Intel)

 Peter Zijlstra (Intel)

 Vincent Guittot (Linaro)

 Daniel Lezcano (Linaro)

 Amit Kucheria (Linaro)

 Mike Turquette (Linaro)

 Preeti U Murthy (IBM)

 Dietmar Eggemann (ARM)





Contact




Proposal added by Morten Rasmussen morten.rasmussen@arm.com

### 添付資料URL

掲載なし

## File and Storage Systems（採用済み）

https://wiki.linuxplumbersconf.org/2014:file_and_storage_systems

File and Storage Systems



The Linux Plumbers 2014 File and Storage Track will be focused on current challenges in the IO stack and ongoing work. This will be structured like the Linux File, Storage and Memory management event - individual topics will be discussed with an appointed topic lead, but presentations are actively discouraged. A few slides can be used to help frame the discussion.



Areas of interest are:



 Persistent memory technologies - supporting this new class of devices and work to get our IO performance fast and low latency enough for these new parts.

 SMR Drives - work done to support host aware or restricted mode SMR drives.

 New block layer features provided by device mapper (thin provisioning, dm-cache, etc), BCACHE and other mechanisms.

 Support for user space distributed file systems like Ceph or Gluster

 Highlights of challenges in leading file systems like ext4, xfs, btrfs, NFS, etc.

 Support for copy offload.

 Breaking the file system block size limit of a VM page

 Storage management

 Other topics




Call for Proposals



Submission for Microconferences discussion topics and BOFs are now open [1] and as a File and Storage Systems [2] microconference leads we'd like to
invite you to submit your proposals.



You can find the instructions on how to propose a discussion topic here:



http://www.linuxplumbersconf.org/2014/how-to-submit-microconference-discussions-topics/



The Linux Plumbers Conference has officially sold out all of the places, so we encourage submissions for our file and storage microconference from people who have already registered.  We will work to get exceptionally compelling session leaders registered, but our ability is limited, so please submit your topics early.



Deadline for submissions is Friday, August 30th at midnight and we will announce the topics on Monday, September 1st.



If you have any questions, please let us know.



 [1] http://www.linuxplumbersconf.org/2014/submissions-for-microconferences-discussion-topics-and-bofs-are-now-open/ 

 [2] http://www.linuxplumbersconf.org/2014/ocw/events/LPC2014/tracks/303 

 [3] http://www.linuxplumbersconf.org/2014/how-to-submit-microconference-discussions-topics/ 

 [4] http://wiki.linuxplumbersconf.org/2014:file_and_storage_systems 




Schedule



In past years, we have always done a double session (6 hours, with lunch in the middle). We have always easily filled those slots, so please do submit your topics early if you want to lock in a discussion slot.



Slots will be roughly 45 minutes in length with a discussion leader per slot. Slides are discouraged, but can be used to frame a conversation.



Session Leaders



The leaders of each session will be determined by responses to the call for participation.



Proposed session leaders for key sessions include:



Christoph Hellwig and Dave Chinner - progress on how to architect an intelligent interface between the block and file system layers to enable things like smarter allocation on thinly provisioned storage.



Lukas Czerner, Dave Chinner, Ted Tso - tweaking the block allocator and how to evaluate the change. Xfstests as performance regression test suite.



Ted Tso and Jorge Campello - progress on enablement of SMR drives into ext4



Chris Mason and Josef Bacik - btrfs, are we there yet?



Hannes Reinecke, Tony Asleson, Stef Walter, Tomas Smetana, Lukas Czerner, David Lehman - Storage system management



Jeff Moyer, Christoph Hellwig, James Bottomley - Support for new storage classes (Persistent memory)



Peter Anvin - Erasure encoding and RAID optimization




Contact



Microconference organizers:



 Lukas Czerner, llczerner@redhat.com

 Hannes Reinecke, hare@suse.de

 Ric Wheeler, rwheeler@redhat.com

### 添付資料URL

掲載なし

## IOMMU Microconference（採用済み）

https://wiki.linuxplumbersconf.org/2014:iommu_microconference

IOMMU and VFIO Topics




We are getting more and more IOMMU drivers in the Linux kernel. For those we often have to close the gap between making them look similar through the IOMMU-API while supporting their unique features too. On this Microconference we will discuss the challenges and their solutions to improve the IOMMU code base already in the kernel as well as how we approach new challenges for future features like IO page faulting.




Topics


 IOMMU Device error handling

 How and which code to move out of the drivers into generic IOMMU code

 Integration of IOMMU page faulting features of recent and upcoming hardware from the x86 and ARM side

 Needed MMU-Notifier features and general MM integration of IO page faulting

 Generic IOMMU Device Tree Probing

 IOMMU Power Management

 Virtualizing the IOMMU with KVM and VIRTIO

 Handling devices with mapping requirements (RMRRs, Unity mappings) in the IOMMU-API

 Arch interface to interrupt remapping code

 IOMMU registration API rework (ability to register more than one IOMMU per bus type)

 Support for devices connected to more than one IOMMU

 Support for asynchronous IOMMU tlb flush

 Support for binding several pages in one call with more friendly API for GPU





Suggested attendees




Here is a list of people who either wants to or should attend this Microconference. If you are not on the list but want to attend, feel free to add youself.



 Alex Williamson (Confirmed - Friday only)

 Arnd Bergmann

 David Woodhouse

 Don Dutile (Confirmed)

 Jérôme Glisse (Confirmed)

 Jesse Barnes (Confirmed)

 Jiang Liu 

 Joerg Roedel (Confirmed)

 Laurent Pinchart (Confirmed)

 Olav Haugan

 Thierry Reding

 Will Deacon (Confirmed, also attending ELCE)

 Jan Kiszka (Confirmed - depending on schedule of KVM Forum, RT miniconf and ELCE)

 Laura Abbott





Mini-summit lead


 Joerg Roedel jroedel@suse.de

 Alex Williamson alex.williamson@redhat.com

### 添付資料URL

掲載なし

## Live kernel patching（採用済み）

https://wiki.linuxplumbersconf.org/2014:live_kernel_patching

Overview



There are currently a few different implementations on how to do live kernel patching in the kernel. That is, the ability to apply a patch to the kernel while it is still running, requiring no reboot. The problem is that the kernel should only have one implementation. Although userspace may be different, the more the various implementations can cooperate the better.



Not only is this an issue of cooperation, but there are some serious issues with live patching itself. What is considered safe? Can anything except for trivial buffer overflows and off by one errors be corrected. How long should a patched kernel be running before it should be rebooted.




Topics


 Brief 10 minute presentations

 criu+kexec

 kGraft

 kpatch



 What is needed of ftrace for kernel patching

 How much state can be saved via checkpoint/restart and kexec

 What features are needed from a live patching solution

 kpatch vs kGraft

 Design comparison

 Feature comparison (kernel)

 Is there any way to combine the kernel implementations?

 Feature comparison (user space)

 Is there any way to combine the user space implementations?



 kpatch/kGraft vs criu+kexec

 Feature comparison

 Do we need both?







There may be brief 10 minute presentations to describe each implementation. Then the rest of the time should be going over the topics.




Confirmed Attendees


 Josh Poimboeuf

 Seth Jennings

 Steven Rostedt

 Jiri Kosina

 Jiri Slaby

 Masami Hiramatsu





Possible Attendees


 James Bottomely

 Vojtech Pavlik

 Thomas Gleixner

 Petr Mladek [ will be having new borns to deal with ]

 Praneeth Bajjuri





Suggested Attendees


 Josh Poimboeuf

 Seth Jennings

 Steven Rostedt

 James Bottomely

 Jiri Kosina

 Jiri Slaby

 Vojtech Pavlik

 Thomas Gleixner to tell everyone how crappy their ideas are

### 添付資料URL

掲載なし

## LLVM（採用済み）

https://wiki.linuxplumbersconf.org/2014:llvm

LLVM




The Linux Plumbers 2014 LLVM Microconferences is focusing on increasing the use of LLVM related technologies surrounding Linux.



Speakers should cover topics which help the adoption of LLVM and clang for things like the Linux Kernel and for Android.



Over the past year there has been a lot of progress in patching LLVM and Clang in order to be able to compile the Linux kernel. Over the same time period progress was made on building both the Linux kernel and  Android userspace. Clang is also now distributed as part of the Android NDK. We now need to get patches accepted to support the use of clang/LLVM to build the Linux Kernel and more of the Android code base.



This microconference will gather interested parties from the Linux kernel, LLVM, and Android communities to plan the most expedient way to get support for using Clang upstream.



Issues which need adressing during this microconference:


 The use of Variable Length Arrays in Structs in the kernel code

 Adding extensions to LLVM/Clang to be used in the kernel code acceptable to the LLVM/clang community.

 The Universal driver in clang to support even better cross compilation support in clang

 Constant propogation in clang/llvm (__builtin_constant_p() is different between clang and gcc)

 Handing init and exit sub-segments properly in Clang

 Solutions to getting the Integrated Assembler to work for the Linux and Android code

 Leveraging LLVM tools like Address/Thread/Memory Sanitizers and Static Checker for kernel debugging

 The use of clang for Linux Distributions

 Distro support of patches to clang, or adding recent versions of clang





Schedule




The rough schedule of the 2014 LLVM Plumbers Micro Conference is as follows (the order is likely to change). Note presentation slides can be found on the Plumbers page by following the links to the abstracts:


 AArch64 support in clang - Renato Golin

 Compiling Android with clang - Bernhard Rosenkränzer

 Compiling openMandriva with clang - Bernhard Rosenkränzer 

 Using LLVM to generate call graphs for the Linux kernel - Mark Charlebois

 LLVMLinux project update - Behan Webster

 x86 related issues to building the kernel with clang - Jan-Simon Moeller





Discussion notes



This is a good place to record notes from your session.  All too often, if notes were not written down, the session might as well not have happened.




Contact




Proposal added by Behan Webster behanw@converseincode.com, Mark Charlebois mcharleb@quicinc.com

### 添付資料URL

掲載なし

## Network Management（採用済み）

https://wiki.linuxplumbersconf.org/2014:network-management

This page holds information on the proposal of an network management microconference at Linux Plumbers 2014.



Below is a list of tentative topics to be discussed. The plan is to have a have a microconf that has a lot of hands-on opportunities and some real work gets done, along with important discussions on specifications, etc.



These topics were part of the automotive microconference proposal. Since the list got a bit longer it seems reasonable to put it into its own microconference. 




Topics




Many distros ship systemd now. systemd-networkd targets 'static' use cases (e.g. setup Ethernet device and fetch a DHCP lease). NetworkManager and ConnMan have support also for dynamic setups involving WiFi or Bluetooth devices. Obviously, those and many related projects need to coordinate between.



 Common code and infrastructure / libraries and system services

 kernel, netlink and systemd-udevd

 libnl, libmnl



 systemd network-online.target

 systemd-networkd and NetworkManager already support this



 DHCP client library/daemon

 libsystemd-dhcp



 DNS configuration and caching

 /etc/resolv.conf, resolvconf, systemd-resolved, unbound, dnsmasq



 PPP service, mobile broadband profiles

 Connection sharing infrastructure



 Features

 Handover of network configuration (also when daemon crashes)

 WiFi Direct / Miracast

 Per application routing and statistics: systemd vs. local policies (e.g. ConnMan Session API)

 Split DNS and DNSSEC support

 DNSSEC, dnssec-triggerd, dnssec-trigger-panel

 NetworkManager Unbound plugin



 Tethering: Counting clients, blocking clients, bandwith control on clients?

 User configuration and session management

 systemd-logind, polkit and the like



 Metric and source based routing

 multiple routes for the same destination

 prioritize traffic by device configuration

 default and non-default routes

 connection pinning?

 multipath TCP support





 Interoperability when multiple tools are running

 networkd+networkmanager

 networkd+connman

 connman+networkmanager?



 Known issues

 Root filesystem on NFS versus DHCP leases

 handled in tools like dracut





 Related software status

 ISC DNS/DHCP software status

 TODO: invite representatives]



 CZ.NIC KnotDNS software status?

 TODO: invite representatives









Attendees




Following attendees will show up (if nothing goes wrong):



 Tom Gundersen (systemd)

 Pavel Šimerda (Fedora networking)

 David Herrmann (MiracleCast)

 Umut Tezduyar Lindskog (Axis Communications AB)

 Fredrik Larsson (Axis Communications AB)

 Fredrik Hugosson (Axis Communications AB) 

 Harald Hoyer (systemd)

 Peter V. Saveliev (pyroute2)

 Thomas Graf (kernel, libnl, netlink) [If it does not overlap with NetVirt uconf]

 Thomas Haller (NetworkManager)

 Jiri Pirko (kernel)

 Patrik Flykt (ConnMan)

 Tomasz Bursztyka (ConnMan)

 Alban Crequy (tcmmd)(Collabora Ltd)





Desired Attendees


 Olaf Kirch (Wicked)

 Marius Tomaschewski (Wicked)

 Jiří Klimeš (NetworkManager)

 Dan Williams (NetworkManager)

 Dan Winship (NetworkManager)

 Lennart (systemd)





Discussion notes / Minutes




This is a good place to record notes from your session.  All too often, if notes were not written down, the session might as well not have happened.




Contact




Network managment microconf proposal by Daniel Wagner daniel.wagner@bmw-carit.de, Pavel Šimerda psimerda@redhat.com, Tom Gundersen tgunders@redhat.com

### 添付資料URL

掲載なし

## Network Virtualization & Security（採用済み）

https://wiki.linuxplumbersconf.org/2014:network_virtualization_security

Network Virtualization and Security



The Linux Plumbers 2014 Network Virtualization and Security track is focusing design and implementation of virtualization and security in the networking stack. Network virtualization is undoubtedly an exciting and disruptive technology that is becoming pervasive in the data center, however it could easily become a security and privacy nightmare. We need to address these issues as a community. This is important not just for the success of virtualization or cloud, but, I believe, is paramount to the future of the Internet itself!  




Areas of interest are:


 Network virtualization performance– how do we get virtual performance == native performance (with security requirements addressed)?

 Hardware switching offload API

 Packet level security for data centers– how can we get to encrypting all packets in flight?

 Hardware offload and network virtualization– how to offload checksum, lso/gro, and encryption to the hardware?

 Group Based Policy Abstraction– how to translate abstract security policies into specific ACLs with appropriate performance?

 Packet inspection and network virtualization– how to provide a scalable first line of defense at a host with VMs?

 Scalability, isolation, and protocol mechanisms– how do we scale and allow extensibility to address future threats?

 DoS and network virtualization– how to we defend the network against internally generated DoS attacks?

 Application level security– how do we establish trust with userspace apps to access sensitive data?

 Configuration security– how can we prevent kernel or device configuration (willful or inadvertent) from circumventing security measures

 Exfiltration control - how to prevent data loss after a breach





Talks




The structure will be short introductions to an issue or topic followed by a discussion with the audience.
A hard limit of 3 slides per presentation is enforced to ensure focus and allocate enough time for discussions.




Attendees


 Confirmed

 Alexei Starovoitov

 Thomas Graf

 Tom Herbert

 Vincent JARDIN (DPDK expert and stack)

 Jesse Gross

 Deep Debroy (Cisco Systems)

 Rony Efraim (Mellanox)

 Or Gerlitz (Mellanox)

 Hannes Frederic Sowa (Red Hat)

 Steffen Klassert (secunet)

 … Add yourself …





 Desirable

 Kernel network hackers

 OVS guys

 Geneve and VXLAN authors

 Network driver authors and maintainers

 Switch abstraction guys

 Software datapath folks

 …







Talk Proposals


 Network virtualization performance / Vincent : - backgrounder, virtio, vSwitch for VM2VM

 Abstract: …



 Packet level security for data centers / Vincent : - backgrounder, multitenant/netns, VxLAN + IPsec

 Abstract: …



 Integrated Network Virtualization / Tom Herbert - integrating virtualization into the stack

 Generic UDP Encapsulation / Tom Herbert - implementing a scalable and extensible encapsulation protocol

 does packet format matter? (Alexei Starovoitov, Plumgrid)

 (ideas for solving ever growing need of new meta data in the cloud and live discussion)



 vxlan + encryption (Alexei Starovoitov, Plumgrid)

 example packet format, lessons learned in implementatio



 tenant security in the cloud, policy enforcement (Alexei Starovoitov, Plumgrid)

 example packet format, performance and hw offload



 Stateful services for OVS (Thomas Graf, Noiro / Jesse Gross? Justin?)

 progress, opens, performance, discussion



 Demystifying group based policy and OpFlex (Thomas Graf,  Noiro)

 Geneve: Generic Network Virtualization Encapsulation (Jesse Gross)

 OVS userspace tunneling (Pravin Shelar) 





Schedule


 We are currently colleting talk proposals, schedule will be announced after final selection

 This microconference needs to be scheduled at a different time than Network Switch Devices, as many people will want to attend both.





Discussion notes


 TBD





Contact




Proposal added by therbert@google.com, Thomas Graf tgraf@suug.ch

### 添付資料URL

掲載なし

## Real Time（採用済み）

https://wiki.linuxplumbersconf.org/2014:real-time

Real Time




The Linux Plumbers 2014 Real Time track focuses on issues with the -rt patchset and with use of both -rt and the mainline kernel for real-time applications.




Key Attendees


 Carsten Emde

 Clark Williams

 Darren Hart

 Frederic Weisbecker

 Ingo Molnar

 Jan Kiszka

 John Kacur

 John Stultz

 Mike Galbraith

 Nicholas McGuire

 Paul Gortmaker

 Peter Zijlstra

 Sebastian Andrzej Siewior

 Steven Rostedt





Proposed Topics (Tentative)


 Linux Foundation Real Time project – Thomas Gleixner (confirmed)

 Long-term testing – Carsten Emde (confirmed+posted)

 Scalability of reader-writer locks – Steven Rostedt (confirmed+posted)

 NO_HZ_FULL – Frederic Weisbecker (confirmed+posted)

 Issues with -stable trees – Steven Rostedt (confirmed+posted)

 Issues with -rt tree – Sebastian Andrzej Siewior (confirmed+posted)

 Issues with mmap_sem – Peter Zijlstra (confirmed)

 Issues with timers – John Stultz

 The horrors of CPU hotplug – TBD

 Real-time Linux guest OSes, they really are possible! – Jan Kiszka (confirmed+abstract, registered+posted)

 SIL2LinuxMP: GNU/Linux Multicore platform for safety related systems – Nicholas McGuire (confirmed+abstract+posted)

 Upstreaming -rt – all





Schedule




The schedule of the 2014 Real Time Plumbers Micro Conference is as follows. Note presentation slides can be found on the Plumbers page by following the links to the abstracts:


 Session 1 - TBD

 etc…





Discussion notes




This is a good place to record notes from your session.  All too often, if notes were not written down, the session might as well not have happened.




Contact




Proposal added by Paul E. McKenney paulmck@linux.vnet.ibm.com
Runner: Thomas Gleixner tglx@linutronix.de

### 添付資料URL

掲載なし

## Tracing（採用済み）

https://wiki.linuxplumbersconf.org/2014:tracing

Overview



The tracing microconference will not be about presentations. It will be a plenary meeting of all participants in order to try and solve the issues within the tracing community.



Currently, there are many players: ftrace (with trace-cmd and kernelshark), perf (both kernel and userspace), systemtap, LTTng. There are also a need to get a programmable dynamic filtering into the kernel. This will require ktap and the BPF system coming together.




Topics


 Integration between the tracers

 Use of the CTF among the different tracers

 Integrating out of tree tracers in the kernel more (LTTng and systemtap)

 Dynamic programming, how to move forward, use of BPF and integration with other tools

 Updating function tracing to handle live patching

 Lowering tracepoint bloat





There will be no presentations. This will be a conference to get things done and not talk about what people are working on. The Tracing Summit that will be held before hand will have plenty of time for that.




Confirmed Attendees


 Steven Rostedt (organizer / ftrace)

 Mathieu Desnoyers (LTTng)

 Josh Poimboeuf (kpatch)

 Alexei Starovoitov (BPF filtering)

 Jiri Olsa (perf userspace)

 Peter Zijlstra (perf kernel)

 Jiri Kosina (kgraft)

 Jiri Slaby (kgraft)

 Petr Mladek (kgraft)

 Thomas Gleixner (Parent to keep the tracing children in line)

 Namhyung Kim (perf and libtraceevent)

 Masami Hiramatsu (kprobes)

 Mark Wielaard (systemtap, valgrind, elfutils)

 Elena Zannoni (dtrace)

 Pawel Moll (ARM PMUs & hardware trace)





Suggested Attendees


 Steven Rostedt

 Mathieu Desnoyers

 Peter Zijlstra

 Frederic Weisbecker

 Ingo Molnar

 Thomas Gleixner

 Masami Hiramatsu

 Jovi Zhangwei

 Alexei Starovoitov

 Jiri Olsa

 Arnaldo Carvalho de Melo

 Namhyung Kim

 Josh Stone

 Frank Ch. Eigler

 Elena Zannoni

 Brendan Gregg

### 添付資料URL

掲載なし

## Wayland（採用済み）

https://wiki.linuxplumbersconf.org/2014:wayland

Wayland microconference




This is the page for the proposed microconference during Plumbers 2014 about wayland integration.




Topics


 systemd-logind, display-manager and wayland / session management

 Will wayland login sessions be tied to VCs like with X ?

 Merging sessions on different HEADs into one big virtual session when the same user logs in on multiple HEADs



 wayland drawing tablet protocol (for ie Wacom tablets)

 input device calibration

 Do we want a central desktop agnostic infrastructure for storing input device calibration (note partially overlaps with User Session & UI Toolkit microconference: Common config/settings storage)



 privileged clients

 socket based activation of Xwayland





Session Proposals


 Tiling-WMs and other small community-WMs - David Herrmann

 Session-Management (multi-seat, display/login-managers, lock-screens, polkit, ..) - David Herrmann

 Wifi-Displays and other non-kernel-based modesetting - David Herrmann

 Atomic modesetting / tiling and format negotiation - Daniel Stone





Contact




This MC is being proposed by Hans de Goede hdegoede@redhat.com

### 添付資料URL

掲載なし

## Wireless Networking（採用済み）

https://wiki.linuxplumbersconf.org/2014:network_wireless

Wireless Networking




The Linux Plumbers 2014 Wireless Networking track is focusing on ongoing topics related to wireless networking in the Linux ecosystem..  This includes 802.11 wireless LANs, Bluetooth, NFC, and related technologies.



The structure will be short introductions to an issue or topic followed by a discussion with the audience. A hard limit of 3 slides per presentation is enforced to ensure focus and allocate enough time for discussions. 




Key Attendees


 Johannes Berg

 Samuel Ortiz

 Kalle Valo

 Marcel Holtmann

 Jouni Malinen

 Gustavo Padovan

 Johan Hedberg

 Stanislaw Gruszka

 John Linville

 David Herrmann

 Dan Williams

 Dmitry Shmidt

 Luca Coelho

 Arend van Spriel

 Szymon Janc

 Luis R. Rodriguez





Proposed Topics


 WifiDisplay / Miracast – David Herrmann

 mac80211 status – Johannes Berg

 Bluetooth status – Marcel Holtmann

 NFC status – Samuel Ortiz

 802.11 standards activity – Jouni Malinen(?)

 Userland/management issues – Dan Williams(?)

 Android status – Dmitry Shmidt

 Regulatory database maintenance – John Linville

 802.11p – ???

 unified firmware error dump mechanism – Johannes/distro folks

 mechanics - using udev+debugfs (like iwlwifi for now), or udev+ethtool, or something else?

 privacy considerations - use encryption?



 MAC address randomization for active scan

 https://bugzilla.redhat.com/show_bug.cgi?id=1106954

 iOS8 does this?



 mac80211 channel switch implementation – Luca Coelho





Schedule




The schedule of the 2014 Microconference-Name Plumbers Micro Conference is as follows. Note presentation slides can be found on the Plumbers page by following the links to the abstracts:


 Session 1 - TBD

 etc…





Please note that the wireless group has met every year since 2006 and has never been short of discussion topics.  However, the exact topics of discussion are often in flux until shortly before the actual meeting…



Topics of discussion will likely include discussions of new standards, upcoming technologies, interfaces between drivers and the wireless core, interfaces between in-kernel components and userland connection managers, kernel maintenance issues, dealing with regulatory concerns, etc.




Discussion notes




This is a good place to record notes from your session.  All too often, if notes were not written down, the session might as well not have happened.



Notes from previous years' meetings: Wireless Developer Summits




Contact




Proposal added by John W. Linville linville@tuxdriver.com

### 添付資料URL

掲載なし

## Obsoleting support for old hardware, drivers, and infrastructure（BoF）

https://wiki.linuxplumbersconf.org/2014:obsoleting_support_for_old_hardware_drivers_and_infrastructure

This page holds information on the proposal of a BOF on obsoleting support for old hardware and kernel and userland APIs at Linux Plumbers 2014. For convenience.



Below is a list of tentative topics to be discussed. The plan is to discuss and try to find solutions that have come relevant due to the age of Linux.




Topics




Obsoleting support for old hardware


 Certain hardware has not been available and probably not used for years. Finding hardware for testing when enhancing the code to use new APIs is becoming harder and harder.

 Define a long term plan/process for how to obsolete drivers:

 Should we introduce a drivers/retirement tree and move drivers there slowly?

 How to mark infrastructure obsolete?

 How to deal with obsoleting userland APIs?

 How to get rid of the infamous obsolete wireless extensions?







Kernel symbols


 A large percentage of kernel symbols are really meant for internal usage and never meant to be used by outside users. Can/should we introduce a third kernel symbol EXPORT_SYMBOL_PRIVATE()?





APIs


 New, improved APIs are constantly being developed in the kernel, often making existing ones obsolete.  How can we make it apparent to developers of new code which APIs are obsolete and should not be used.





Desired Attendees


 John Linville (wireless)

 Tejun Heo





Confirmed Attendees


 Jes Sorensen

 Daniel Wagner

 Hannes Reinecke

 Julia Lawall

 Michael Kerrisk

 Johannes Berg (wireless)





Discussion notes / Minutes




This is a good place to record notes from your session.  All too often, if notes were not written down, the session might as well not have happened.




Contact




Obsoleting support for old hardware drivers and infrastructure microconf proposal by Daniel Wagner
daniel.wagner@bmw-carit.de, Hannes Reinecke hare@suse.de, Jes
Sorensen Jes.Sorensen@redhat.com

### 添付資料URL

掲載なし

## User Session & UI Toolkits（中止候補）

https://wiki.linuxplumbersconf.org/2014:user_session_ui_toolkits

User Session & UI Toolkit microconference




This is the page for the proposed microconference during Plumbers 2014 about problems related to the user sessions, often faced by UI toolkits. This microconference is not about discussing UX guidelines or bugs in user-facing applications. Instead, it's about problems often faced by toolkit developers, while trying to provide a consistent functionality to application-writers.




Topics




* Graphical problems:


 Detecting display server, like X, Wayland, Mir, DirectFB, EGLFS

 Client-side decorations vs WM-driven decorations

 Screens with varying DPI:

 assets, fonts, scaling content (or not)

 multiple monitor support, detecting screen type (handheld, laptop, TV, projector, etc.)



 Touch-driven interfaces: detecting finger size




* Non-graphical:


 Porting D-Bus binding libraries to kdbus

 Common config/settings storage

 Back up and restoration of settings

 Upgrading



 Updating XDG specifications:

 Base Dir; where to store application state, etc.







Contact




This MC is being proposed by Thiago Macieira thiago.macieira@intel.com / thiago@kde.org.

### 添付資料URL

掲載なし

## Network Switch Devices（中止候補）

https://wiki.linuxplumbersconf.org/2014:network_switch_devices

Several types of switch devices now exist which don't fit well with the existing kernel API's and infrastructure. Examples of these devices are the switches built into: commodity l2 and l3 forwarding devices. enterprise switching and routing platforms;  built into 10G and higher speed network interface card; and the software/hardware offload of dataplane being done by Vyatta and Cumulus Networks.



The interested parties have already been discussing how to work with netlink, network device API's to support the necessary management of addresses, routes, firewall and statistics. This discussion needs a wider audience to avoid committing to any API's before they are ready.



The hope is to develop a device model that sufficiently covers all of these classes of hardware, and enables vendors to produce drivers that can be maintained and shipped as part of the linux kernel, and interface with the existing suite of linux administration tools.

### 添付資料URL

掲載なし


# マイクロカンファレンス全体枠（16件）

個別セッションとは別の全体枠。DescriptionはスケジュールのOne Line Summary。

## Automotive

- URL: https://blog.linuxplumbersconf.org/2014/ocw/events/LPC2014/schedule#track-285
- 日時: Wednesday, October 15, 2014 9:00am – Noon

The LPC 2014 Automotive Microconference is targeting the challenges of using Linux in the automotive domain. Notes from session: http://www.linuxplumbersconf.org/2014/wp-content/uploads/2014/10/LPC2014_Automotive.txt

## Development Tools

- URL: https://blog.linuxplumbersconf.org/2014/ocw/events/LPC2014/schedule#track-357
- 日時: Thursday, October 16, 2014 9:30am – 12:30pm

Development Tools (coccinelle, Sparse, etc.) Notes from session: http://www.linuxplumbersconf.org/2014/wp-content/uploads/2014/10/LPC2014_DevTools.txt

## Network Virtualization and Security

- URL: https://blog.linuxplumbersconf.org/2014/ocw/events/LPC2014/schedule#track-321
- 日時: Thursday, October 16, 2014 9:30am – 12:30pm

Notes from the session: http://www.linuxplumbersconf.org/2014/wp-content/uploads/2014/10/LPC2014_NetVirt.txt Slides: http://goo.gl/ChGFnx The Linux Plumbers 2014 Network Virtualization and Security track is focusing design and implementation of virtualization and security in the networking stack.

## Real Time I

- URL: https://blog.linuxplumbersconf.org/2014/ocw/events/LPC2014/schedule#track-327
- 日時: Thursday, October 16, 2014 9:30am – 12:30pm

Notes from both sessions: http://www.linuxplumbersconf.org/2014/wp-content/uploads/2014/10/LPC2014_RealTime.txt The Linux Plumbers 2014 Real Time track focuses on issues with the -rt patchset and with use of both -rt and the mainline kernel for real-time applications.

## Android/Mobile

- URL: https://blog.linuxplumbersconf.org/2014/ocw/events/LPC2014/schedule#track-279
- 日時: Thursday, October 16, 2014 1:30 – 4:30pm

Notes from session: http://www.linuxplumbersconf.org/2014/wp-content/uploads/2014/10/LPC2014_Mobile.txt The Linux Plumbers 2014 Android/Mobile track is focusing on the ongoing integration of Android into the mainline, as well as new form factors where Android ecosystem is expanding and the new challenges arising from this. Topics this year include: android sync, moving things out of staging, LLVM, 64-bit (bionic, binder, porting…) and Big.Little

## File and Storage Systems

- URL: https://blog.linuxplumbersconf.org/2014/ocw/events/LPC2014/schedule#track-303
- 日時: Thursday, October 16, 2014 1:30 – 4:30pm

Notes from the session: http://www.linuxplumbersconf.org/2014/wp-content/uploads/2014/10/LPC2014_Storage.txt The Linux Plumbers 2014 File and Storage Track will be focused on current challenges in the IO stack and ongoing work.

## Real Time II

- URL: https://blog.linuxplumbersconf.org/2014/ocw/events/LPC2014/schedule#track-387
- 日時: Thursday, October 16, 2014 1:30 – 4:30pm

The Linux Plumbers 2014 Real Time track focuses on issues with the -rt patchset and with use of both -rt and the mainline kernel for real-time applications.

## Wireless Networking

- URL: https://blog.linuxplumbersconf.org/2014/ocw/events/LPC2014/schedule#track-339
- 日時: Thursday, October 16, 2014 1:30 – 4:30pm

Notes from the session: http://www.linuxplumbersconf.org/2014/wp-content/uploads/2014/10/LPC2014_Wireless.txt Wireless Networking track is focusing on ongoing topics related to wireless networking in the Linux ecosystem.

## Containers

- URL: https://blog.linuxplumbersconf.org/2014/ocw/events/LPC2014/schedule#track-291
- 日時: Friday, October 17, 2014 9:00am – Noon

Etherpad: http://www.linuxplumbersconf.org/2014/wp-content/uploads/2014/10/LPC2014_Containers.txt In the last year containers on Linux have seen a number of new technologies and changes. Changes to cgroups, new tools like docker and lmctfy and continued maturity of the supporting Linux subsystems.

## Energy-aware Scheduling and CPU Power Management

- URL: https://blog.linuxplumbersconf.org/2014/ocw/events/LPC2014/schedule#track-297
- 日時: Friday, October 17, 2014 9:00am – Noon

Notes from session: http://www.linuxplumbersconf.org/2014/wp-content/uploads/2014/10/LPC2014_EnergyAwareSched.txt The Linux Plumbers 2014 Energy-aware Scheduling and CPU Power Management track is focusing on energy-awareness improvements for the scheduler and cpu power management frameworks (cpuidle, intel_pstate, cpufreq).

## LLVM

- URL: https://blog.linuxplumbersconf.org/2014/ocw/events/LPC2014/schedule#track-309
- 日時: Friday, October 17, 2014 9:00am – Noon

Notes from the session: http://www.linuxplumbersconf.org/2014/wp-content/uploads/2014/10/LPC2014_LLVM.txt The Linux Plumbers 2014 LLVM Microconference is focusing on increasing the use of LLVM related technologies surrounding Linux.

## Tracing

- URL: https://blog.linuxplumbersconf.org/2014/ocw/events/LPC2014/schedule#track-351
- 日時: Friday, October 17, 2014 9:00am – Noon

Notes from the session: http://www.linuxplumbersconf.org/2014/wp-content/uploads/2014/10/LPC2014_Tracing.txt The tracing microconference will not be about presentations. It will be a plenary meeting of all participants in order to try and solve the issues within the tracing community.

## IOMMU and VFIO

- URL: https://blog.linuxplumbersconf.org/2014/ocw/events/LPC2014/schedule#track-363
- 日時: Friday, October 17, 2014 1:00 – 3:45pm

Notes from session: http://www.linuxplumbersconf.org/2014/wp-content/uploads/2014/10/LPC2014_IOMMU.txt We are getting more and more IOMMU drivers in the Linux kernel. For those we often have to close the gap between making them look similar through the IOMMU-API while supporting their unique features too. On this Microconference we will discuss the challenges and their solutions to improve the IOMMU code base already in the kernel as well as how we approach new challenges for future features like IO page faulting.

## Live Kernel Patching

- URL: https://blog.linuxplumbersconf.org/2014/ocw/events/LPC2014/schedule#track-345
- 日時: Friday, October 17, 2014 1:00 – 3:45pm

Notes from session: http://www.linuxplumbersconf.org/2014/wp-content/uploads/2014/10/LPC2014_LivePatching.txt There are currently a few different implementations on how to do live kernel patching in the kernel. That is, the ability to apply a patch to the kernel while it is still running, requiring no reboot. The problem is that the kernel should only have one implementation. Although userspace may be different, the more the various implementations can cooperate the better.

## Network Management

- URL: https://blog.linuxplumbersconf.org/2014/ocw/events/LPC2014/schedule#track-315
- 日時: Friday, October 17, 2014 1:00 – 3:45pm

Notes from session: http://www.linuxplumbersconf.org/2014/wp-content/uploads/2014/10/LPC2014_NetworkManagement.txt network management microconference at Linux Plumbers 2014.

## Wayland

- URL: https://blog.linuxplumbersconf.org/2014/ocw/events/LPC2014/schedule#track-333
- 日時: Friday, October 17, 2014 1:00 – 3:45pm

Notes from the session: http://www.linuxplumbersconf.org/2014/wp-content/uploads/2014/10/LPC2014_Wayland.txt microconference during Plumbers 2014 about wayland integration.
