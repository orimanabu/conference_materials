# Linux Plumbers Conference 2015 全セッション一覧

出典: https://blog.linuxplumbersconf.org/2015/ocw/events/LPC2015/schedule/

2015年はOCW形式。開催スケジュールの個別URL付き枠120件を収録。Descriptionは個別ページのAbstract原文。One Line Summaryは別フィールドに保持。資料URLは個別ページの原記載を保持し、スケジュールに別のアーカイブURLがある場合はschedule_urlも収録。添付ファイル本体の取得・リンク有効性検査は実施していない。Wiki Topicsの採用済み14トピックは補足に収録し、個別セッション数には加算しない。WikiのTentative/Proposed等は原文通り。個別開始時刻が未掲載の38件は空欄のまま保持。全体の16枠も補足に収録。

セッション: 120件 / Descriptionあり: 120件 / 資料あり: 58件 / 資料項目: 58件

## 目次

1. [Everything's a File Descriptor](#session-2775)
2. [Performance Monitoring in the Linux Kernel](#session-2781)
3. [Tying TPMs Throughout The Stack](#session-3009)
4. [Done ? Final spurt ? - Compiling the Linux Kernel with clang on x86](#session-3225)
5. [Beyond traditional compilation](#session-3261)
6. [BPF in LLVM and kernel](#session-3249)
7. [Rethinking the core OS in 2015](#session-2715)
8. [Can Linux live without GNU toolchain?](#session-2739)
9. [Using clang static analyzer with the Linux kernel code](#session-3237)
10. [Pushing the Limits of Kernel Networking](#session-2799)
11. [The RT patch -What needs to be done to get it into mainline?](#session-2805)
12. [Turtles all the way: Running Linux on open hardware](#session-2811)
13. [ACPI 6 and Linux](#session-2829)
14. [Optimizing Application Performance in Large Multi-core Systems](#session-2817)
15. [Solving Device Tree Issues](#session-2823)
16. [Linux Kernel Debugging Tools Overview](#session-2643)
17. [All We Like Sheep: Copy/Paste as a Principled Engineering Tool](#session-2673)
18. [Coccinelle](#session-2703)
19. [Using clang static analyzer with the Linux kernel code](#session-3231)
20. [Open-Channel Solid State Drives](#session-2835)
21. [Topics of Interest from the MM Summit](#session-2841)
22. [Using seccomp to Limit the Kernel Attack Surface](#session-2847)
23. [Botching up IOCTLs](#session-2853)
24. [Suspend/Resume at the Speed of Light](#session-2859)
25. [kernelci.org: The Upstream Kernel Validation Project](#session-2865)
26. [cgroups kernel memory controller](#session-3333)
27. [Checkpoint/restore status update (CRIU)](#session-3339)
28. [Containers in the upstream kernel (as compared to VZ kernel)](#session-3345)
29. [Running Docker inside VZ containers](#session-3351)
30. [Designing Plugin Systems for Container Runtimes](#session-3357)
31. [Container-aware Tracing Infrastructure](#session-2667)
32. [The future of cgroups and containers](#session-2925)
33. [A brief introduction to LXD](#session-2727)
34. [LXC and related projects status update](#session-2733)
35. [Open Container Specifications](#session-3315)
36. [State of Wayland](#session-3435)
37. [Gap between Atomic Modesetting / KMS and ADF](#session-3267)
38. [ION Feature Upstreaming: Issues that remain](#session-3273)
39. [Live sources and sinks in KMS](#session-3279)
40. [HWComposer in Weston - need for a pluggable composition accelerator](#session-2967)
41. [Thermal subsystem](#session-2613)
42. [Sensor API](#session-2931)
43. [Thermal Behaviour Assertions](#session-2943)
44. [Propagating thermal constraints to the scheduler](#session-2979)
45. [Linux Thermal sysfs enhancement](#session-2787)
46. [Legal, Licensing and Enforcement Workshop for Plumbers](#session-3429)
47. [State of Staging](#session-3411)
48. [USB gadget and ConfigFS - status & future](#session-2961)
49. [Barriers for running mainline kernels on consumer Android devices](#session-2889)
50. [Android, partitions and customization](#session-3387)
51. [Running a single Android binary image on multiple devices](#session-2919)
52. [Adapting Android for Ara](#session-3405)
53. [Checkpoint and Restore of processes within kernel security mechanisms](#session-2901)
54. [CRIU in HPC](#session-2685)
55. [CRIU on PowerPC](#session-2649)
56. [CRIU Support in Docker for Native Checkpoint and Restore](#session-2619)
57. [P.Haul: live migrating with CRIU](#session-3165)
58. [Rebootless Kernel Update and its verification](#session-2697)
59. [Using CRIU for Computer Architecture and Software Studies](#session-2655)
60. [Using the DLM as a Distributed In-Memory Database](#session-2691)
61. [SMR in the kernel - Work remaining](#session-3219)
62. [Dynamic iSCSI at Scale: Remote Paging at Google](#session-3069)
63. [BOF: Potential Userspace Filesystem APIs](#session-3447)
64. [BOF: Bittern Disk Cache](#session-3393)
65. [BOF: Device Mapper for Shingle Magnetic Recording (SMR)](#session-3321)
66. [BOF: Kernel networking and TCP's (ir)relevance in the latest brave new world](#session-3309)
67. [BOF: switchdev offloading](#session-3285)
68. [Toybox in Android](#session-2871)
69. [Improving vendor AOSP repos](#session-2895)
70. [Integrating KDBus in Android](#session-3417)
71. [Providing per-task Quality of Service](#session-3063)
72. [Improving big.LITTLE on Android](#session-3399)
73. [New ACPI Specification Changes Related to Power Management](#session-3141)
74. [ACPI Low-Power Idle states (LPI)](#session-3045)
75. [DT power domain bindings - idle states](#session-3057)
76. [Unifying DT wake-up sources management](#session-3051)
77. [PM: Unify idle management for CPUs and IO devices](#session-3075)
78. [BOF: Coordinating software (eBPF/tc/OVS/nft/DPDK) and hardware dataplanes](#session-3087)
79. [BOF: Open Hardware](#session-3135)
80. [BOF: PXE Sucks](#session-2679)
81. [BOF: Distributed file systems](#session-3453)
82. [BOF: Virtual Routing Framework (VRF)](#session-3171)
83. [Securing the Entire Boot Chain](#session-3363)
84. [PXE: Sucks](#session-2721)
85. [Research topics in fastboot](#session-3177)
86. [Reducing the ARM Linux kernel size without losing your mind](#session-3369)
87. [Recent Power Management Core Changes in Linux](#session-3129)
88. [Scheduler-driven CPU frequency selection](#session-3159)
89. [Energy-model driven scheduling](#session-3039)
90. [You can't always get what you want: P-state selection on Intel CPUs](#session-2763)
91. [Fast Bounded-Concurrency Hash Tables](#session-3081)
92. [Improving Transactional Memory Performance with Queued Locking](#session-2913)
93. [Do Virtual Machines Really Scale?](#session-2745)
94. [How to apply mutation testing to the RCU for fun and profit](#session-2751)
95. [Unfair Queued Spinlocks and Transactional Locks](#session-3291)
96. [Limitations of various linkers in clang based toolchains](#session-3243)
97. [Device Tree Overlays](#session-3093)
98. [Overlays, some times a good idea sometimes not.](#session-3099)
99. [Device Tree Documentation](#session-2991)
100. [Chat With The dtc Maintainers](#session-3021)
101. [device tree break](#session-3027)
102. [Chat With The dtc Maintainers (continued)](#session-3441)
103. [Overlays and tools for sanity.](#session-3105)
104. [Device Tree Tools](#session-3003)
105. [Device Tree probe order and parallel device probing](#session-3111)
106. [Device tree round up](#session-3033)
107. [GENEVE control planes](#session-3123)
108. [Framework for hardware accelerated virtio networking for NFVs](#session-3153)
109. [eBPF and tc classifier/actions](#session-3183)
110. [VRF's in linux : reusing infrastructure](#session-3189)
111. [IPv6: Routing Cache Removal and Going Forward](#session-3201)
112. [IPv6 and 6LoWPAN only networking for sensor devices](#session-3207)
113. [Identifier locator addressing](#session-3213)
114. [network virtualization with BPF](#session-3255)
115. [Overlay Encryption](#session-3297)
116. [Introduction to nfit, libnvdimm and libndctl](#session-2955)
117. [Persistent Memory and NUMA](#session-2985)
118. [Persistent Memory Usages In The Coming Decade](#session-3015)
119. [Providing Atomic Sector Updates in Software for Persistent Memory](#session-2769)
120. [Plumbers PostMortem Discussion](#session-3459)

<a id="session-2775"></a>
## 1. Everything's a File Descriptor

- セッション個別URL: https://blog.linuxplumbersconf.org/2015/ocw/sessions/2775.html
- Track: Refereed Talk
- 日時: Wednesday, August 19, 2015 10:25am

### Description

The classic UNIX philosophy, “everything’s a file”, allows tools and system calls that operate on files to work on devices, /proc, and other objects. This doesn’t mean everything has a filename; /dev, /proc, and /sys expose devices and kernel structures with filenames, but many new system calls offer file descriptors that serve as userspace handles for kernel structures without any corresponding filename, including signalfd, timerfd, and eventfd. The resulting file descriptors can be used with event loops using poll, epoll, or select.

Thiago Macieira and I implemented “clonefd”, which turns processes into file descriptors and turns waitpid() into poll or read. These descriptors serve as race-free, container-safe process identifiers.

This talk will present clonefd, fd-based API design, and discuss other kernel APIs that would benefit from file descriptors.

### One Line Summary

This talk will present clonefd, fd-based API design, and discuss other kernel APIs that would benefit from file descriptors.

### 添付資料URL

掲載なし

<a id="session-2781"></a>
## 2. Performance Monitoring in the Linux Kernel

- セッション個別URL: https://blog.linuxplumbersconf.org/2015/ocw/sessions/2781.html
- Track: Refereed Talk
- 日時: Wednesday, August 19, 2015 10:25am

### Description

Systems performance is a primary concern for most people involved in technology. This is particularly true and critical for companies investing significant resources in hardware, expecting Linux to scale well on larger machines, naturally beginning with the kernel. While there are several efforts to automate and integrate benchmarking across a wide range of systems, they are not very well known outside the community. In this talk, Davidlohr will present different alternatives to kernel performance monitoring through automation and will discuss how it can serve to actively detect regressions and new issues throughout the kernel, including how developers can easily test their changes on a wide range of workloads and gather important runtime metrics. In addition, different benchmarks for stressing different subsystems will be compared both at a micro level and for real world workloads.

### One Line Summary

In this talk, Davidlohr will present different alternatives to kernel performance monitoring through automation and will discuss how it can serve to actively detect regressions and new issues throughout the kernel, including how developers can easily test their changes on a wide range of workloads and gather important runtime metrics.

### 添付資料URL

掲載なし

<a id="session-3009"></a>
## 3. Tying TPMs Throughout The Stack

- セッション個別URL: https://blog.linuxplumbersconf.org/2015/ocw/sessions/3009.html
- Track: Refereed Talk
- 日時: Wednesday, August 19, 2015 10:25am

### Description

We’ve never made much use of TPMs in Linux. Poorly understood and poorly trusted, they sit there on the LPC bus, gathering dust. But what if we can use them to provide meaningful additional security to systems? What if we could use the TPM to protect us from rootkits, bootkits and modified firmware? What if the TPM could secure your SSH keys against theft, make your random numbers more random and inform you that someone backdoored your laptop when you left it in your hotel room?

All of this is possible today, but it’s not integrated and it’s beyond the ability of even most skilled users. What can we do to tie this exceptionally useful security device into the underlying OS and make real steps to better security?

### One Line Summary

TPMs in Linux are poorly understood and poorly trusted, they sit there on the LPC bus, gathering dust. What can we do to tie this exceptionally useful security device into the underlying OS and make real steps to better security?

### 添付資料URL

掲載なし

<a id="session-3225"></a>
## 4. Done ? Final spurt ? - Compiling the Linux Kernel with clang on x86

- セッション個別URL: https://blog.linuxplumbersconf.org/2015/ocw/sessions/3225.html
- Track: LLVM
- 日時: Wednesday, August 19, 2015 10:00am

### Description

Going forward we need to get the last missing pieces into mainline so more developers can actually use it out of the box.
Unfortunately we’re not done yet for the Linux kernel and a lot of small issues remain in the drivers. 
This talk summarizes the issues and aims answer the question of the priorities for the remaining issues based on the feedback of the audience.

### One Line Summary

The LLVMLinux project upstreamed a lot of patches to the Linux Kernel (and LLVM) - are we done and what is left ?

### 添付資料URL

- [slides](https://blog.linuxplumbersconf.org/2015/ocw//system/presentations/3225/original/LPC.pdf)（file）

<a id="session-3261"></a>
## 5. Beyond traditional compilation

- セッション個別URL: https://blog.linuxplumbersconf.org/2015/ocw/sessions/3261.html
- Track: LLVM
- 日時: Wednesday, August 19, 2015 10:20am

### Description

Beyond traditional compilation 
or why the Linux community should stop the single compiler monopoly.

Compilers are not only for code generation any more.
Modern compilers provide a wide range of tools that perform static and dynamic program analysis, control- and data-flow-guided fuzzing, and security hardening. We’ll talk about all of these new compiler features implemented in Clang/LLVM and show how they are going to help Linux, both the kernel and the user-space.

### One Line Summary

Beyond traditional compilation

### 添付資料URL

- [slides](https://blog.linuxplumbersconf.org/2015/ocw//system/presentations/3261/original/Beyond Traditional Compilation.pdf)（file）

<a id="session-3249"></a>
## 6. BPF in LLVM and kernel

- セッション個別URL: https://blog.linuxplumbersconf.org/2015/ocw/sessions/3249.html
- Track: LLVM
- 日時: Wednesday, August 19, 2015 10:40am

### Description

The extended BPF (eBPF) architecture brought the power of on-the-fly generated and optimized code by LLVM into the linux kernel. It’s currently used by tracing and networking subsystems. This talk describes compiler related parts of eBPF: code generation in the backend, object file & loaders, in-kernel JIT, LLVM JIT, clang rewriter, c+python hybrid, other front-ends.

### One Line Summary

status of eBPF development in LLVM, clang, kernel and other tools

### 添付資料URL

- [slides](https://blog.linuxplumbersconf.org/2015/ocw/system/presentations/3249/original/bpf_llvm_2015aug19.pdf)（file）


- スケジュール掲載のアーカイブURL: https://blog.linuxplumbersconf.org/2015/ocw//system/presentations/3249/original/bpf_llvm_2015aug19.pdf
<a id="session-2715"></a>
## 7. Rethinking the core OS in 2015

- セッション個別URL: https://blog.linuxplumbersconf.org/2015/ocw/sessions/2715.html
- Track: LLVM
- 日時: Wednesday, August 19, 2015 11:00am

### Description

Traditionally, building a Linux system had to start with gcc, libstdc++ and glibc – bootstrapping was a bit of a pain with having to go through 3 stages of building the compiler.

The LLVM toolchain and a few other projects make it possible to rethink those choices — and potentially get to a better system faster.

What can a modern Linux system look like if it throws away concerns about binary compatibility with old systems, and what do we have to fix to get there?

### One Line Summary

Building a new Linux system on top of clang, libc++ and musl

### 添付資料URL

- [slides](http://www.linuxplumbersconf.org/2015/ocw//system/presentations/2715/original/LPC15 - Rethinking the core OS in 2015.pdf)（file）


- スケジュール掲載のアーカイブURL: https://blog.linuxplumbersconf.org/2015/ocw//system/presentations/2715/original/LPC15 - Rethinking the core OS in 2015.pdf
<a id="session-2739"></a>
## 8. Can Linux live without GNU toolchain?

- セッション個別URL: https://blog.linuxplumbersconf.org/2015/ocw/sessions/2739.html
- Track: LLVM
- 日時: Wednesday, August 19, 2015 11:20am

### Description

Linux kernel and ecosystem has been solely dependent of GNU toolchain for tis compilers and utilities thus far, This talk will discuss possibility of emerging toolsets especially LLVM/Clang for compiler tools and compiler runtime and utilities and MUSL for system C libraries as an alternative for Linux based ecosystem, where this stands as of now and what challenges lies ahead for this combination.

### One Line Summary

Can Linux live without GNU toolchain?

### 添付資料URL

- [slides](https://blog.linuxplumbersconf.org/2015/ocw//system/presentations/2739/original/clang-musl.pdf)（file）

<a id="session-3237"></a>
## 9. Using clang static analyzer with the Linux kernel code

- セッション個別URL: https://blog.linuxplumbersconf.org/2015/ocw/sessions/3237.html
- Track: LLVM
- 日時: Wednesday, August 19, 2015 12:00pm

### Description

Static analyzers can mechanically find issues with code that would otherwise take humans a lot longer to figure out. By using a static analyzer which is built using the same technology as the compiler gives the analyzer the ability to find potentially complex cross functional bugs and other issues. This will be a demo of how developers can use the clang static analyzer to help find potential issues with kernel code.

### One Line Summary

Demo of how to use the clang static analyzer with the Linux kernel code.

### 添付資料URL

- [slides](https://blog.linuxplumbersconf.org/2015/ocw/system/presentations/3237/original/2015-LPC-Clang-static-analyzer-kernel.pdf)（file）


- スケジュール掲載のアーカイブURL: https://blog.linuxplumbersconf.org/2015/ocw//system/presentations/3237/original/2015-LPC-Clang-static-analyzer-kernel.pdf
<a id="session-2799"></a>
## 10. Pushing the Limits of Kernel Networking

- セッション個別URL: https://blog.linuxplumbersconf.org/2015/ocw/sessions/2799.html
- Track: Refereed Talk
- 日時: Wednesday, August 19, 2015 11:25am

### Description

As network speeds continue to increase from 10Gb/s, to 40Gb/s, and very soon to 100Gb/s the rate at which packets can be transported increases putting pressure on the kernel to drive ever faster packet rates. This talk will cover what we currently know about the limits of the Linux kernel in terms of small packet networking performance, ongoing efforts to push those limits further, and a number of tips and tricks to get the most out of the kernel networking stack.

### One Line Summary

This talk will cover the Linux kernel limits in terms of small packet networking performance, efforts to push those limits further, and tips and tricks to get the most out of the networking stack.

### 添付資料URL

- [slides](https://blog.linuxplumbersconf.org/2015/ocw//system/presentations/2799/original/pushing-kernel-networking.pdf)（file）

<a id="session-2805"></a>
## 11. The RT patch -What needs to be done to get it into mainline?

- セッション個別URL: https://blog.linuxplumbersconf.org/2015/ocw/sessions/2805.html
- Track: Refereed Talk
- 日時: Wednesday, August 19, 2015 11:25am

### Description

The Real Time patch (RT patch or PREEMPT_RT), has been maintained out of the Linux kernel tree since late 2004. It is the longest and largest patch set to be kept out of the tree and still widely used. A lot of the patch has made it into mainline (mutex code, priority inheritance futexes, ftrace, lockdep, hrtimers, generic interrupts, threaded irqs, Real Time scheduler, etc). The RT patch had so much influence on mainline, that new code for Real Time can now be directly added to mainline (for example: NO_HZ_FULL and the DEADLINE scheduler), but there is still a lot more that needs to go into mainline to make it a true RTOS. This talk will explain what those features are and what is holding it up from getting in. Some of it is technical and some of it is political. Both of these types of issues will be discussed.

### One Line Summary

This talk will explain what still needs to be done to get the RT patch fully into mainline, and what is holding it up from getting in.

### 添付資料URL

掲載なし

<a id="session-2811"></a>
## 12. Turtles all the way: Running Linux on open hardware

- セッション個別URL: https://blog.linuxplumbersconf.org/2015/ocw/sessions/2811.html
- Track: Refereed Talk
- 日時: Wednesday, August 19, 2015 11:25am

### Description

Patent expiration makes old technologies, such as the SuperH processor, interesting again. The last patent on sh2 (used in the Sega Saturn) expired in october 2014, and the last sh4 (dreamcast) patent expires in 2016. This lets us leverage existing kernel, toolchain, and userspace support on now royalty-free hardware.

We’ve implemented a cleanroom sh2-compatible processor design called “j2” with basic peripherals (serial, ethernet, mmc) in an FPGA, booted current Linux on it using existing open source toolchains, and released the VHDL under a BSD license. (For our next trick we’re adding SMP support and a dozen DSPs, and manufacturing some ASIC versions.)

Our current website (and this demo) walks you through building/installing it on an s6 microboard (about $90 retail), but we’re kickstarting a cheaper and more powerful FPGA in a raspberry PI 2 form factor.

### One Line Summary

Patent expiration lets us leverage existing kernel, toolchain, and userspace support on now royalty-free hardware, such as SuperH. We've implemented a cleanroom sh2-compatible processor.

### 添付資料URL

- [slides](https://blog.linuxplumbersconf.org/2015/ocw//system/presentations/2811/original/turtlesalltheway.pdf)（file）

<a id="session-2829"></a>
## 13. ACPI 6 and Linux

- セッション個別URL: https://blog.linuxplumbersconf.org/2015/ocw/sessions/2829.html
- Track: Refereed Talk
- 日時: Wednesday, August 19, 2015 2:00pm

### Description

ACPI 6, released in April 2015, is the first major revision of the ACPI specification developed under the UEFI Forum umbrella and including contributions from Linux community members. It introduces support for persistent memory, support for hierarchical lower-power idle states of CPUs, CPU clusters and the whole system, an extension allowing C-style expressions to be used in the ACPI Source Language and more. Overall, changes made by it are likely to affect Linux in significant ways.

I will describe the new specification process used to produce ACPI 6 and how the Linux community was involved in it. I will outline the implementation of the ACPI support in the Linux kernel and explain how the new specification revision is going to be addressed by it. I will also discuss a few most important changes with respect to the previous revisions of ACPI and their possible impact on Linux.

### One Line Summary

I will describe the new specification process used to produce ACPI 6, the implementation of the ACPI support in the Linux kernel and explain how the new specification revision is going to be addressed by it, plus a few most important changes with respect to the previous revisions of ACPI.

### 添付資料URL

- [slides](https://blog.linuxplumbersconf.org/2015/ocw//system/presentations/2829/original/ACPI_6_and_Linux.pdf)（file）

<a id="session-2817"></a>
## 14. Optimizing Application Performance in Large Multi-core Systems

- セッション個別URL: https://blog.linuxplumbersconf.org/2015/ocw/sessions/2817.html
- Track: Refereed Talk
- 日時: Wednesday, August 19, 2015 2:00pm

### Description

As more and more cores are cramming into a single CPU chip, even a commodity dual-socket server can now have dozens of cores/threads available for running applications. To efficiently utilize all the available cores, care must be taken to avoid excessive core-to-core synchronization and cacheline contention from becoming a performance bottleneck. Excessive cacheline contention also has an impact on system power consumption.

This presentation discusses various performance related kernel patches that have gone into the upstream kernel, are pending or being proposed that can help improving performance and scalability in large multi-core systems. It also discuss best practices to avoid this type of performance problems in user applications as well as tools available to diagnose them.

### One Line Summary

This presentation discusses various performance related kernel patches that can help improving performance and scalability in large multi-core systems and best practices to avoid this type of performance problems in user applications.

### 添付資料URL

- [slides](https://blog.linuxplumbersconf.org/2015/ocw//system/presentations/2817/original/Optimizing Application Performance in Large Multi-core Systems.pdf)（file）

<a id="session-2823"></a>
## 15. Solving Device Tree Issues

- セッション個別URL: https://blog.linuxplumbersconf.org/2015/ocw/sessions/2823.html
- Track: Refereed Talk
- 日時: Wednesday, August 19, 2015 2:00pm

### Description

Use of device tree is mandatory for all new ARM systems. But the implementation of device tree has lagged behind the mandate. The first priority has been correct function. Lower priorities include device tree validation and facilities to debug device tree problems and errors. This talk will focus on the status of debug facilities, how to debug device tree issues, and debug tips and tricks. Suggestions will be provided to driver writers for how to implement drivers to ease troubleshooting.

### One Line Summary

This talk will focus on the status of debug facilities, how to debug device tree issues, and debug tips and tricks.

### 添付資料URL

- [slides](https://blog.linuxplumbersconf.org/2015/ocw//system/presentations/2823/original/dt_debugging.pdf)（file）

<a id="session-2643"></a>
## 16. Linux Kernel Debugging Tools Overview

- セッション個別URL: https://blog.linuxplumbersconf.org/2015/ocw/sessions/2643.html
- Track: Development Tools Tutorial
- 日時: Wednesday, August 19, 2015 2:00pm

### Description

Software and bugs go together, and the Linux Kernel is no exception. Some bugs are easy to find, but some are harder to reproduce and could require several attempts to piece together the right set of conditions to trigger a specific bug. While bugs that result in a system crash or hang are easier spot it is often more challenging to gather the information necessary to debug and fix. In many cases, Kernel logs can provide insight into these bugs, but when a system crashes or freezes Kernel logs might not get the chance to be written out to disk.
In this talk, Shuah will give an overview of Kernel debug interfaces and tools.

### One Line Summary

Overview of Linux Kernel Debugging Tools

### 添付資料URL

- [slides](http://www.linuxplumbersconf.org/2015/ocw//system/presentations/2643/original/kerneldebug_lpc.pdf)（file）


- スケジュール掲載のアーカイブURL: https://blog.linuxplumbersconf.org/2015/ocw//system/presentations/2643/original/kerneldebug_lpc.pdf
<a id="session-2673"></a>
## 17. All We Like Sheep: Copy/Paste as a Principled Engineering Tool

- セッション個別URL: https://blog.linuxplumbersconf.org/2015/ocw/sessions/2673.html
- Track: Development Tools Tutorial
- 日時: Wednesday, August 19, 2015 2:30pm

### Description

Duplicating code, also called code cloning, is often considered to be a sign of lazy development. Instead, we are urged to refactor, refactor, refactor, lest we incur technical debt! But not all code duplication is … umm … the same. In this talk, we’ll examine an empirical study on why, when, and how professional software developers often use copy/paste in a principled way. Examples will be given from three well known open source systems: Apache, Gnumeric, and the Linux kernel.

### One Line Summary

Kent Beck called code duplication "#1 in the stink parade" of bad smells; so why do so many professional developers copy/paste anyway?

### 添付資料URL

掲載なし

<a id="session-2703"></a>
## 18. Coccinelle

- セッション個別URL: https://blog.linuxplumbersconf.org/2015/ocw/sessions/2703.html
- Track: Development Tools Tutorial
- 日時: Wednesday, August 19, 2015 3:00pm

### Description

Coccinelle is a program matching and transformation for C code that has been used in various ways on the Linux kernel.  This tutorial will provide an introduction to the use of Coccinelle for making code changes and a discussion of some advanced features.

### One Line Summary

Introduction to Coccinelle

### 添付資料URL

- [slides](https://blog.linuxplumbersconf.org/2015/ocw//system/presentations/2703/original/plumbers.pdf)（file）

<a id="session-3231"></a>
## 19. Using clang static analyzer with the Linux kernel code

- セッション個別URL: https://blog.linuxplumbersconf.org/2015/ocw/sessions/3231.html
- Track: Development Tools Tutorial
- 日時: Wednesday, August 19, 2015 3:30pm

### Description

Static analyzers can mechanically find issues with code that would otherwise take humans a lot longer to figure out. By using a static analyzer which is built using the same technology as the compiler gives the analyzer the ability to find potentially complex cross functional bugs and other issues. This session will allow people to build the kernel with clang and use clang static analyzer to help find potential issues with kernel code.

### One Line Summary

Walkthrough of how to use the clang static analyzer with the Linux kernel code.

### 添付資料URL

- [slides](https://blog.linuxplumbersconf.org/2015/ocw/system/presentations/3231/original/2015-LPC-Clang-static-analyzer-kernel.pdf)（file）


- スケジュール掲載のアーカイブURL: https://blog.linuxplumbersconf.org/2015/ocw//system/presentations/3231/original/2015-LPC-Clang-static-analyzer-kernel.pdf
<a id="session-2835"></a>
## 20. Open-Channel Solid State Drives

- セッション個別URL: https://blog.linuxplumbersconf.org/2015/ocw/sessions/2835.html
- Track: Refereed Talk
- 日時: Wednesday, August 19, 2015 3:00pm

### Description

This presentation gives an introduction to Open-Channels SSDs and LightNVM – the kernel subsystem creating support for Open-Channel SSDs. Open-Channel SSDs allow applications to directly control internals of an SSD, thereby controlling data placement and garbage collection within the SSD. The benefits are consistent latency and throughput in high-performance workloads and extending its lifetime. The main objective of this talk is show the possibilities of this new storage interface, report on the current status of LightNVM, and present the development roadmap for both upcoming kernel functionality and user space support.

### One Line Summary

Introduction to Open-Channels SSDs and LightNVM. It will show the possibilities of this new storage interface, report on the current status of LightNVM, and present the development roadmap.

### 添付資料URL

掲載なし

<a id="session-2841"></a>
## 21. Topics of Interest from the MM Summit

- セッション個別URL: https://blog.linuxplumbersconf.org/2015/ocw/sessions/2841.html
- Track: Refereed Talk
- 日時: Wednesday, August 19, 2015 3:00pm

### Description

The MM summit, held as part of the larger LSF/MM summit gathers the leading memory management developers to get down to the bits and bytes of burning issues and solve them by having a discussion in a forum of other memory management hackers. As Jon Corbet puts it: “The LSF/MM Summit is arguably the most severely technical event on many kernel developers’ schedules.”

This presentation will cover the highlights of the discussions in the summit, and will summarize their aftermath both on the mailing list and upstream. It will also provide insight into various topics by expanding on various “extended hallway track” sessions that happened during the summit.

### One Line Summary

This presentation will cover the highlights of the discussions of the most recent MM the summit and summarize their aftermath both on the mailing list and upstream.

### 添付資料URL

掲載なし

<a id="session-2847"></a>
## 22. Using seccomp to Limit the Kernel Attack Surface

- セッション個別URL: https://blog.linuxplumbersconf.org/2015/ocw/sessions/2847.html
- Track: Refereed Talk
- 日時: Wednesday, August 19, 2015 3:00pm

### Description

The seccomp (secure computing) facility is a means to limit the set of system calls a program may make. Starting from humble beginnings in Linux 2.6.12, seccomp has evolved to the point where it can be used to select exactly which system calls are permitted and to restrict the arguments that may be passed to those system calls. System call filtering is achieved by writing BPF programs—programs written for a small in-kernel virtual machine that is able to examine system call numbers and arguments. Seccomp applications include sandboxing and failure-mode testing, and seccomp is by now used in a number of web browsers, container systems such as Docker, and elsewhere. In this session, we’ll look briefly at the history of seccomp before going on to examine the BPF virtual machine and some practical examples of filtering programs that restrict the set of permitted system calls.

### One Line Summary

This session, will look briefly at the history of seccomp, then examine the BPF virtual machine and some practical examples of filtering programs that restrict the set of permitted system calls.

### 添付資料URL

掲載なし

<a id="session-2853"></a>
## 23. Botching up IOCTLs

- セッション個別URL: https://blog.linuxplumbersconf.org/2015/ocw/sessions/2853.html
- Track: Refereed Talk
- 日時: Wednesday, August 19, 2015 4:00pm

### Description

One clear insight kernel graphics hackers gained in the past few years is that trying to come up with a unified interface to manage the execution units and memory on completely different GPUs is a futile effort. So nowadays every driver has its own set of ioctls to allocate memory and submit work to the GPU. Which is nice, since there’s no more insanity in the form of fake-generic, but actually only used-once interfaces. But the clear downside is that there’s much more potential to screw things up.

To avoid repeating all the same mistakes again this talk will present some of the lessons learned while botching the job for the drm subsystem in general and the i915 driver specifically. The presentation will cover the very basics to avoid busywork and other embarrassment later on, reasonable testing, some higher level concepts and a thicket of stories of what all went wrong thus far in the drm subsystem.

### One Line Summary

This talk will present lessons learned while creating tons userspace interfaces for the drm subsystem and its gpu drivers.

### 添付資料URL

掲載なし

<a id="session-2859"></a>
## 24. Suspend/Resume at the Speed of Light

- セッション個別URL: https://blog.linuxplumbersconf.org/2015/ocw/sessions/2859.html
- Track: Refereed Talk
- 日時: Wednesday, August 19, 2015 4:00pm

### Description

System suspend/resume is the core energy saving strategy for numerous Linux-based systems, including Android, Chrome OS, Ubuntu and Fedora. The faster Linux can suspend/resume, the more often it can be used, and the more energy these systems can save.

We start by presenting analyze_suspend, a tool we developed to measure performance.
Analyze_suspend is freely available in open source, and we are hopeful that the community will embrace it to optimize Linux on a broad range of systems.

Then we explore the kernel and driver optimizations that have been made as a result of using this tool — some are upstream, and some are still in development.

Finally, we look to the challenges ahead in reaching and sustaining Linux suspend/resume at the speed of light.

### One Line Summary

We'll present analyze_suspend, a tool we developed to measure performance, then we'll explore the kernel and driver optimizations that have been made as a result of using this tool.

### 添付資料URL

掲載なし

<a id="session-2865"></a>
## 25. kernelci.org: The Upstream Kernel Validation Project

- セッション個別URL: https://blog.linuxplumbersconf.org/2015/ocw/sessions/2865.html
- Track: Refereed Talk
- 日時: Wednesday, August 19, 2015 4:00pm

### Description

Distributed boards farms across the world are working together to deliver unified build, boot, and test results for every merge of an upstream Linux kernel tree. A community based architecture agnostic effort, kernelci.org aims to detect regressions in a timely manner and report back to kernel developers with a concise summary of the issue(s). On every merge, all defconfigs for x86, arm, and arm64 are built, booted, and tested on over 300 real or virtual hardware platforms. The presentation will cover an introduction to the system, live demos, and how to start consuming the results. Come join in the discussion and help make Linux better!

### One Line Summary

The presentation will cover an introduction to kernelci.org: a community based, architecture agnostic build and boot automation tool for the Linux Kernel.

### 添付資料URL

掲載なし

<a id="session-3333"></a>
## 26. cgroups kernel memory controller

- セッション個別URL: https://blog.linuxplumbersconf.org/2015/ocw/sessions/3333.html
- Track: Containers
- 日時: Thursday, August 20, 2015 

### Description

Containers need resource management and limiting. One of such resources that was overlooked until before recently is kernel memory.

On almost all operations involving interactions with the kernel, it implicitly allocates some memory, that needs to be accounted and controlled. This is something that was present in OpenVZ kernel for more than 10 years (kmemsize user beancounter), but was only recently merged upstream by Virtuozzo engineers, in the form of kmem cgroup controller.

The topic discusses the current status of kmem controller (what is done and what is still missing), why it’s important to use it (including what sorts of attacks can be prevented) and how to use it properly and effectively from the userspace container management tools such as Docker, LXC, CoreOS etc.

### One Line Summary

Kernel memory accounting (kmemcg): status, why important, why and how to use

### 添付資料URL

掲載なし

<a id="session-3339"></a>
## 27. Checkpoint/restore status update (CRIU)

- セッション個別URL: https://blog.linuxplumbersconf.org/2015/ocw/sessions/3339.html
- Track: Containers
- 日時: Thursday, August 20, 2015 

### Description

Checkpoint/restore is a technology that was OpenVZ/Virtuozzo users enjoyed for a long time, but it has made its way to upstream kernel only recently, thanks to CRIU project. In fact it’s so popular that there’s a whole Checkpoint/Restore microconference. This session, though, tries to summarize the current status of CRIU, including integrating it into various container management tools such as Docker, LXC, Virtuozzo 7 etc.

### One Line Summary

CRIU status update, incl. integration (Docker/LXC/LXD/VZ7)

### 添付資料URL

掲載なし

<a id="session-3345"></a>
## 28. Containers in the upstream kernel (as compared to VZ kernel)

- セッション個別URL: https://blog.linuxplumbersconf.org/2015/ocw/sessions/3345.html
- Track: Containers
- 日時: Thursday, August 20, 2015 

### Description

Historically, we have developed our own OpenVZ/Virtuozzo kernels as fork of the upstream (and later RHEL) kernels, with massive patchsets and lots of added functionality. For the last 10 years, though, we work hard to bring these features to the upstream kernel, and it pays both to us (less code to port) as well as to others (say, LXC and Docker can now use vanilla kernel). While upstream kernel is good enough, it’s still not on par with the OpenVZ one.

We have just finished rebasing OpenVZ kernel from RHEL6 (2.6.32-based) to RHEL7 (3.10-based) kernel. This session summarizes our experience and findings,
including answers to what is still missing from upstream kernel. The session also outlines our plans
to contribute to upstream.

### One Line Summary

Comparison of containers features between OpenVZ and upstream kerne

### 添付資料URL

掲載なし

<a id="session-3351"></a>
## 29. Running Docker inside VZ containers

- セッション個別URL: https://blog.linuxplumbersconf.org/2015/ocw/sessions/3351.html
- Track: Containers
- 日時: Thursday, August 20, 2015 

### Description

The session focuses on running Docker inside VZ containers:

what makes our use case different from others — we have to control how Docker accesses to the resources of host system
	devicemapper graphdriver and proxy graphdriver
	how to pass a mount point made on host system to container namespace

### One Line Summary

The session summarizes our experience in making Docker working inside VZ containers.

### 添付資料URL

掲載なし

<a id="session-3357"></a>
## 30. Designing Plugin Systems for Container Runtimes

- セッション個別URL: https://blog.linuxplumbersconf.org/2015/ocw/sessions/3357.html
- Track: Containers
- 日時: Thursday, August 20, 2015 

### Description

Network plugins for application runtimes like rkt and docker are used to customize the network namespace before a process is executed. I will cover the basic use cases of container network setup, the considerations of creating and configuring a network namespace, and plumbing issues encountered and worked around in the design and implementation. Today this discussion revolves around two options: github.com/docker/libnetwork and github.com/appc/cni. Overtime the two approaches should converge.

### One Line Summary

Containers are a spectrum of options and every system wants to configure things differently; to make this configurable runtimes like docker and rkt are using plugins.

### 添付資料URL

- [slides](https://blog.linuxplumbersconf.org/2015/ocw/system/presentations/3357/original/LPC_-_CNI_and_OCI.pdf)（file）


- スケジュール掲載のアーカイブURL: https://blog.linuxplumbersconf.org/2015/ocw//system/presentations/3357/original/LPC_-_CNI_and_OCI.pdf
<a id="session-2667"></a>
## 31. Container-aware Tracing Infrastructure

- セッション個別URL: https://blog.linuxplumbersconf.org/2015/ocw/sessions/2667.html
- Track: Containers
- 日時: Thursday, August 20, 2015 

### Description

Container technology is increasingly becoming important thanks to the
advent of Docker. Over the years, work on containers has largely focused
on security, checkpoint/restart etc. However, given the huge uptake, it
is imperative to focus on tracing infrastructure support around
containers. Such support is required to effectively troubleshoot, debug
and optimize applications running inside containers.

Work has already been done to enhance perf stat/record to filter
container specific events from host 1. It is essential to extend such
support to uprobes, kprobes and ftrace. However, it is also essential to
extend existing Linux infrastructure including PMUs, tracepoints,
probes, ftrace to seamlessly work inside containers. Importantly, such
tracing support from within a container should provide strong security
isolation by suitably filtering events.

One approach to container-aware tracing is to make kernel tracing
namespace aware. We would like to discuss the approach, current state
and future work related to tracing support for containers and solicit
feedback and suggestions for improvement.

1 https://lkml.org/lkml/2011/2/14/40

Initial RFC patches posted: lkml.org/lkml/2015/7/15/192

### One Line Summary

Discussion on enabling tracing infrastructure support for containers.

### 添付資料URL

掲載なし

<a id="session-2925"></a>
## 32. The future of cgroups and containers

- セッション個別URL: https://blog.linuxplumbersconf.org/2015/ocw/sessions/2925.html
- Track: Containers
- 日時: Thursday, August 20, 2015 

### Description

The unified hierarchy is a new, currently optional and experimental, replacement for the legacy cgroup hierarchies.  It aims to solve several problems inherent in the old cgroup implementation, such as the per-controller ad-hoc behavior regarding resource splitting between tasks and sub-cgroups.  It also aims to simplify the cgroups kernel code.

We describe differences between the legacy and unified hierarchies, describe how cgmanager deals with these changes and what other users need to know.

### One Line Summary

This talk will present background and details of the new cgroup unified hierarchy, and what container managers need to do to deal with it.This talk will present background and details of the new cgroup unified hierarchy, and what container managers need to do to deal with it.

### 添付資料URL

掲載なし

<a id="session-2727"></a>
## 33. A brief introduction to LXD

- セッション個別URL: https://blog.linuxplumbersconf.org/2015/ocw/sessions/2727.html
- Track: Containers
- 日時: Thursday, August 20, 2015 

### Description

LXD is a new container manager, it’s built on top of LXC, using its API. It offers remote management capabilities and safe security defaults as well as an image based workflow.

As with LXC, the focus of LXD is on system containers and so about providing a VM-like experience to the user.

This presentation will go through the main features of LXD through a demo of its capabilities.

### One Line Summary

Discover the new container manager built on top of LXC

### 添付資料URL

掲載なし

<a id="session-2733"></a>
## 34. LXC and related projects status update

- セッション個別URL: https://blog.linuxplumbersconf.org/2015/ocw/sessions/2733.html
- Track: Containers
- 日時: Thursday, August 20, 2015 

### Description

A very short overview of what we’ve been up to for the past year, what we’re looking into now and where we can collaborate with the other container projects.

### One Line Summary

Traditional update on LXC and the related projects (CGManager, LXCFS, ...)

### 添付資料URL

掲載なし

<a id="session-3315"></a>
## 35. Open Container Specifications

- セッション個別URL: https://blog.linuxplumbersconf.org/2015/ocw/sessions/3315.html
- Track: Containers
- 日時: Thursday, August 20, 2015 

### Description

Application containers are changing some of the fundamentals of how Linux is used in the server environment. An application container differs from a system container in that the root filesystem for the container is designed to launch a single application instead of a full init.

The open container specifications are an attempt to write-down an interoperable set of specifications for use by different application container runtimes; on Linux this includes Docker, kurma, and rkt. The project involves engineers from a number of different projects and the current status is work-in-progress but there should be some initial releases and significant progress in time for LPC.

### One Line Summary

Summary and future direction of the open container specifications for application focused containers

### 添付資料URL

- [slides](https://blog.linuxplumbersconf.org/2015/ocw/system/presentations/3315/original/LPC_-_CNI_and_OCI.pdf)（file）


- スケジュール掲載のアーカイブURL: https://blog.linuxplumbersconf.org/2015/ocw//system/presentations/3315/original/LPC_-_CNI_and_OCI.pdf
<a id="session-3435"></a>
## 36. State of Wayland

- セッション個別URL: https://blog.linuxplumbersconf.org/2015/ocw/sessions/3435.html
- Track: Graphics, mode setting and Wayland
- 日時: Thursday, August 20, 2015 

### Description

The core Wayland protocol is quite mature, and ready for desktop environments to adopt.  That said, we do have a couple race conditions and a rendering issue relating to damage with rotated surfaces.

Weston serves as a reference implementation and as a testbed for new technology, some of which will eventually migrate to Wayland.  We’ll take a look at some of the things being worked on in Weston and things coming soon.

### One Line Summary

Quick overview of the development status of Wayland and Weston.

### 添付資料URL

- [slides](https://blog.linuxplumbersconf.org/2015/ocw//system/presentations/3435/original/wayland_status.pdf)（file）

<a id="session-3267"></a>
## 37. Gap between Atomic Modesetting / KMS and ADF

- セッション個別URL: https://blog.linuxplumbersconf.org/2015/ocw/sessions/3267.html
- Track: Graphics, mode setting and Wayland
- 日時: Thursday, August 20, 2015 9:30am

### Description

With the 4.2 kernel, the DRM/KMS atomic modesetting API is finally enabled by default, allowing userspace to submit whole configurations across a number of display elements, rather than the previous incremental approach. This session will look at the remaining feature and implementation work to be done on AMS, including the feature gap to Android’s Atomic Display Framework (ADF), and how to enable easy porting of Android drivers and userspace.

For a design over of atomic mode setting please read https://lwn.net/Articles/653071/ and https://lwn.net/Articles/653466/

### One Line Summary

Looking at the KMS atomic modesetting API and examining the feature gap to Android's ADF

### 添付資料URL

掲載なし

<a id="session-3273"></a>
## 38. ION Feature Upstreaming: Issues that remain

- セッション個別URL: https://blog.linuxplumbersconf.org/2015/ocw/sessions/3273.html
- Track: Graphics, mode setting and Wayland
- 日時: Thursday, August 20, 2015 10:15am

### Description

One significant pain point for vendors is the deeply platform-specific knowledge required to allocate buffers which will be suitable for any combination of media decode engines, display engines, GPUs, and similar.

Various ideas have been discussed for ION allocator replacement, and some RFC’ed – lets revisit them and see if we’re on the right path, or is there a path-correction required.

Also, discuss the other ION issues that still remain that must be handled for an upstream-worthy solution.

### One Line Summary

Working towards a common generic display-capable buffer allocation API

### 添付資料URL

- [slides](https://blog.linuxplumbersconf.org/2015/ocw/system/presentations/3273/original/Upstreaming ION- issues that remain.pdf)（file）


- スケジュール掲載のアーカイブURL: https://blog.linuxplumbersconf.org/2015/ocw//system/presentations/3273/original/Upstreaming ION- issues that remain.pdf
<a id="session-3279"></a>
## 39. Live sources and sinks in KMS

- セッション個別URL: https://blog.linuxplumbersconf.org/2015/ocw/sessions/3279.html
- Track: Graphics, mode setting and Wayland
- 日時: Thursday, August 20, 2015 11:00am

### Description

DRM and KMS have always dealt very specifically in terms of buffers and frames, rather than connecting arbitrary streams together. Dealing in streams has always been the domain of userspace, with frameworks such as GStreamer and OpenMAX IL.

Unfortunately some hardware can only work in a stream-based manner, such as media decode engines (or cameras) to display engines, and also ‘writeback’ from display engine outputs back to media encode engines.

This session will look at the work required to support live sources and sinks within KMS.

### One Line Summary

Support for live/stream-based sources and sinks within KMS

### 添付資料URL

掲載なし

<a id="session-2967"></a>
## 40. HWComposer in Weston - need for a pluggable composition accelerator

- セッション個別URL: https://blog.linuxplumbersconf.org/2015/ocw/sessions/2967.html
- Track: Graphics, mode setting and Wayland
- 日時: Thursday, August 20, 2015 11:30am

### Description

When Wayland first took shape, the focus was on the protocol definition rather than the server/compositor aspect. Weston was intended to be a reference implementation for Wayland server.

In the world of embedded systems, especially in Automotive, Wayland has quickly gained traction as the next generation composition mechanism. OEMs who were on a simple graphics stack comprising of OpenGLES + FBDev are migrating to Wayland/Weston on account of it being lightweight, skipping X11 entirely in the process. These organizations are looking at using Weston as-is. Weston has become the defacto compositor for Automotive Linux and not just a reference implementation.

The Weston composition consists of two pieces (I am not considering the other aspects such as seat management, protocol handling, etc).
1. Compositor
2. Display interface

The compositor could use a combination of GPU / 2D GPU / NEON to accelerate the composition. It could even potentially use display overlay planes if supported by the HW.

The Display interface is well defined. In most case, this will use DRM mode setting or FBDev to display something on the glass.

The current Weston implementation does not differentiate between these two pieces. For example, the compositor-drm.c mainly deals with the display interface and calls upon GL / Pixman renderer for actual composition. There is no clean way to introduce a new HWA such as a blitter.

How do we go about this? Android has a ready made solution whose concepts can be applied to Weston. The HWComposer composition policies will be a useful fit to compartmentalize the composition problem.

Let’s talk more on the approach and challenges involved.

### One Line Summary

Accelerating composition in Weston through dedicated HWAs

### 添付資料URL

- [slides](https://blog.linuxplumbersconf.org/2015/ocw//system/presentations/2967/original/HWComposer-Weston.pdf)（file）

<a id="session-2613"></a>
## 41. Thermal subsystem

- セッション個別URL: https://blog.linuxplumbersconf.org/2015/ocw/sessions/2613.html
- Track: Thermal
- 日時: Thursday, August 20, 2015 

### Description

Brief introduction to the topic. Presentation of the problem statement. What is currently possible to do with the Linux Kernel Thermal Subsystem. What is currently missing. Not well solved problems. Open discussion on interactions with other subsystems and roadmap for changes in the thermal subsystems.

### One Line Summary

Thermal subsystem, current status and next improvements

### 添付資料URL

- [slides](https://blog.linuxplumbersconf.org/2015/ocw//system/presentations/2613/original/thermal-framework-status-no-transitioning.pdf)（file）

<a id="session-2931"></a>
## 42. Sensor API

- セッション個別URL: https://blog.linuxplumbersconf.org/2015/ocw/sessions/2931.html
- Track: Thermal
- 日時: Thursday, August 20, 2015 

### Description

The thermal framework has a number of thermal sensors that are duplicating work in their platform code.  They create thermal zones that combine multiple thermal sensors.  We would like the thermal framework to simplify this common operations and provide a sensor API that allows you to easily setup a thermal zone that combines multiple sensors with simple operations, i.e. max of all sensors, average,…  Ideally, this “virtual sensors” would be exposed to user space as well.

This API should also be able to do simple filtering of noisy sensors.

### One Line Summary

Introduce a more versatile thermal sensor API

### 添付資料URL

- [slides](https://blog.linuxplumbersconf.org/2015/ocw//system/presentations/2931/original/lpc15_sensor_api_slides.pdf)（file）

<a id="session-2943"></a>
## 43. Thermal Behaviour Assertions

- セッション個別URL: https://blog.linuxplumbersconf.org/2015/ocw/sessions/2943.html
- Track: Thermal
- 日時: Thursday, August 20, 2015 

### Description

The goal of this session is to introduce a Behaviour assertion framework, based on FTrace data analysis that can be used to confirm certain key behaviours expected to be exhibited by thermal governors.

For example, we may want to assert that a governor regulates the temperature within a threshold of the control temperature, say 95 percent,  during a measured execution of a workload.The framework is also designed to aggregate results across to various thermal sensor topologies and provide a visualisation of the behaviour parameters.

Tools:

https://sinkap.github.io/bart
https://sinkap.github.io/trappy

### One Line Summary

Introduction to the Behaviour Assertion Framework for thermal parameters

### 添付資料URL

- [slides](https://blog.linuxplumbersconf.org/2015/ocw//system/presentations/2943/original/LinuxPlumbers.pdf)（file）

<a id="session-2979"></a>
## 44. Propagating thermal constraints to the scheduler

- セッション個別URL: https://blog.linuxplumbersconf.org/2015/ocw/sessions/2979.html
- Track: Thermal
- 日時: Thursday, August 20, 2015 

### Description

With the development of the power allocator thermal governor, Linux has learned to control SoC power consumption to control temperature. The governor uses models to translate device performance and usage to power consumption and vice versa. As part of the power allocator development, cpufreq cooling device now has the ability to build simple power models for the CPUs using OPPs.

In a SoC, different cores (or groups of cores) can belong to different DVFS domains with independent frequency control. Similarly, any restriction of capacities initiated by the thermal sub-system is also individually applied to the frequency domains.

The scheduler is responsible for assigning tasks to cores. It needs to be made aware of the capacity constraints to provide the available capacity to the highest priority tasks as well as maximise overall system performance.

In this talks, I’d like to discuss a prototype we’ve been working on to propagate the capacity constraints to the scheduler.

This work is based on top of the usage of energy models in the energy aware scheduler patch-set as well as the integration of the scheduler and DVFS.

### One Line Summary

Discussion on maximising performance within the thermal budget

### 添付資料URL

- [slides](https://blog.linuxplumbersconf.org/2015/ocw//system/presentations/2979/original/slides.pdf)（file）

<a id="session-2787"></a>
## 45. Linux Thermal sysfs enhancement

- セッション個別URL: https://blog.linuxplumbersconf.org/2015/ocw/sessions/2787.html
- Track: Thermal
- 日時: Thursday, August 20, 2015 

### Description

Linux thermal management is no longer an isolated condition, so it is important to manage thermal without significantly degrading performance. The thermal management needs a holistically view of the system, which can be better achieved by user space thermal management programs. The current Linux thermal sysfs, exports thermal participants as zones and cooling devices, which can be used by the user space programs. But it needs enhancements to meet the growing requirements for presentation and performance. The sysfs enhancements areas are:
 – Performance improvements by providing a dev interface
 – Provide a method to push instead of pull for thermal samples
 – Provide user space triggers for reevaluation of thermal trip points
 – Separate threshold temperature for notification from trip points
 – Don’t loose precision by using fixed point arithmetic in kernel

### One Line Summary

Enhance thermal sysfs for user space thermal controllers

### 添付資料URL

- [slides](https://blog.linuxplumbersconf.org/2015/ocw//system/presentations/2787/original/LPC_2015_ThermalSysfs_using_IIO.pdf)（file）

<a id="session-3429"></a>
## 46. Legal, Licensing and Enforcement Workshop for Plumbers

- セッション個別URL: https://blog.linuxplumbersconf.org/2015/ocw/sessions/3429.html
- Track: Workshops
- 日時: Thursday, August 20, 2015 1:30pm

### Description

What should you know about Licenses and how should you use them. Join Karen Sandler, Executive Director of Conservancy and Denver Gingerich, License Compliance Engineer of Conservancy, for an in-depth Q&A and discussion session.

You can turn up with any legal or licensing questions you may have about Plumbing code and Karen will endeavour to answer them, though she is not your lawyer and this won’t be legal advice! Denver will provide insight into the nuts and bolts of compliance.

### One Line Summary

What should you know about Licenses and how should you use them. Join Karen Sandler, Executive Director of Conservancy and Denver Gingerich, License Compliance Engineer of Conservancy, for an in-depth Q&A and discussion session.

### 添付資料URL

掲載なし

<a id="session-3411"></a>
## 47. State of Staging

- セッション個別URL: https://blog.linuxplumbersconf.org/2015/ocw/sessions/3411.html
- Track: Android/Mobile I
- 日時: Thursday, August 20, 2015 1:30pm

### Description

General discussion about what the state is of the code in the drivers/staging/android/ portion of the kernel, what needs to be deleted, what needs to be merged to the main portion of the kernel, and what needs to be added to it from external repositories.

### One Line Summary

State of the Android staging tree code

### 添付資料URL

掲載なし

<a id="session-2961"></a>
## 48. USB gadget and ConfigFS - status & future

- セッション個別URL: https://blog.linuxplumbersconf.org/2015/ocw/sessions/2961.html
- Track: Android/Mobile I
- 日時: Thursday, August 20, 2015 1:45pm

### Description

A USB gadget can be connected to a host to extend it with additional functions. Creating a gadget means deciding what configurations there are and which functions each configuration provides. So far the choice has been made at kernel compile time, now it can be made with configfs instead at runtime. Composing a gadget of existing functions does not involve USB maintainers any more, basic shell scripting is enough; there also exists a userspace library for that purpose.
As of now there are 19 functions available for composition with configfs. While the conversion to configfs seems mostly complete, there are a number of things to be discussed before migrating the userspace to use this new interface. In most general terms this boils down to a question “What happens when?”: When network interfaces and tty ports should be allocated – at function creation or function bind? In fact all functions acquire some resources, so similar questions can be asked for other (non-tty and non-network functions). Should function parameters be changed after a function is assigned to a configuration or not? The problem is that the answers are different for different usb functions. Although kernel-wise this does not matter much, the userspace might want some unification – or maybe not?

### One Line Summary

Status and future development of configfs interface in usb gadgets

### 添付資料URL

- [slides](https://blog.linuxplumbersconf.org/2015/ocw/system/presentations/2961/original/Andrzej_Pietrasiewicz-Linux_Plumbers_2015-revised.odp)（file）


- スケジュール掲載のアーカイブURL: https://blog.linuxplumbersconf.org/2015/ocw//system/presentations/2961/original/Andrzej_Pietrasiewicz-Linux_Plumbers_2015-revised.odp
<a id="session-2889"></a>
## 49. Barriers for running mainline kernels on consumer Android devices

- セッション個別URL: https://blog.linuxplumbersconf.org/2015/ocw/sessions/2889.html
- Track: Android/Mobile I
- 日時: Thursday, August 20, 2015 2:00pm

### Description

Android consumer devices are usually released with a heavily patched long-term stable kernel, and while they might get minor fixes to address security issues and major bugs, they are almost never upgraded to newer kernel releases.

This talk will cover some of the general systemic issues making it difficult to run mainline kernels on off-the-shelf devices. As well as a summary of work done in order to get a current mainline kernel booting on a consumer device. We’ll also cover what kernel patches are still needed, and what userspace changes are necessary as well.

### One Line Summary

Will discuss past and current barriers to running mainline kernel on off-the-shelf Android devices, what is improving and what needs to be done.

### 添付資料URL

- [slides](https://blog.linuxplumbersconf.org/2015/ocw//system/presentations/2889/original/(short) Issues w- running mainline on form-factor devices.pdf)（file）

<a id="session-3387"></a>
## 50. Android, partitions and customization

- セッション個別URL: https://blog.linuxplumbersconf.org/2015/ocw/sessions/3387.html
- Track: Android/Mobile I
- 日時: Thursday, August 20, 2015 2:15pm

### Description

Discussion of the ongoing effort within the Android project to make the build and binaries more modular with the goal to make device bringup easier and faster.

### One Line Summary

How the Android project is trying to make builds more modular and allow a wider variety of devices to run on the same binary image.

### 添付資料URL

- [slides](https://blog.linuxplumbersconf.org/2015/ocw/system/presentations/3387/original/Android system, partitions and customization.pdf)（file）


- スケジュール掲載のアーカイブURL: https://blog.linuxplumbersconf.org/2015/ocw//system/presentations/3387/original/Android system, partitions and customization.pdf
<a id="session-2919"></a>
## 51. Running a single Android binary image on multiple devices

- セッション個別URL: https://blog.linuxplumbersconf.org/2015/ocw/sessions/2919.html
- Track: Android/Mobile I
- 日時: Thursday, August 20, 2015 2:30pm

### Description

The Android build system is designed around a BSP mindset, where integrators describe at build time the packages and components that the device they want to support will need at runtime. With that model, most Android vendors end up having to build, ship, maintain and update one Android image for each and every device they have on the market.

As part of the Intel Reference Device for Android (IRDA) autodetection framework we tried to address those shortcomings and aimed at shipping and running a unique Android binary image on all devices that are currently part of that program.

During that presentation, we’ll try to identify the current Android build and runtime BOM scalability limitations and we’ll describe how we addressed them in order to meet the IRDA requirements.

### One Line Summary

Methods for building and running a single Android binary image on many different hardware platforms.

### 添付資料URL

- [slides](https://blog.linuxplumbersconf.org/2015/ocw//system/presentations/2919/original/Single Android Image-1.pdf)（file）

<a id="session-3405"></a>
## 52. Adapting Android for Ara

- セッション個別URL: https://blog.linuxplumbersconf.org/2015/ocw/sessions/3405.html
- Track: Android/Mobile I
- 日時: Thursday, August 20, 2015 2:45pm

### Description

Android has existed for about a decade now and, during that time, it has mostly run on hardware that was fixed at design time. As such, Android images typically contain support for a very specific set of hardware that does not vary at runtime. Project Ara revisits this classic mobile design by introducing a modular handset that allows its user to dynamically change almost everything on his device. To work on such a platform, Android needs to be modified in several ways. This talk/discussion will cover some of the ongoing work in this area.

### One Line Summary

Discussion of how Android is being modified to work for Project Ara.

### 添付資料URL

- [slides](https://blog.linuxplumbersconf.org/2015/ocw/system/presentations/3405/original/projectara-150820.pdf)（file）


- スケジュール掲載のアーカイブURL: https://blog.linuxplumbersconf.org/2015/ocw//system/presentations/3405/original/projectara-150820.pdf
<a id="session-2901"></a>
## 53. Checkpoint and Restore of processes within kernel security mechanisms

- セッション個別URL: https://blog.linuxplumbersconf.org/2015/ocw/sessions/2901.html
- Track: Checkpoint/Restore
- 日時: Thursday, August 20, 2015 1:30pm

### Description

In this time slot we’ll talk about what’s needed to checkpoint and
restore processes using kernel security features like LSMs (AppArmor,
SELinux), seccomp (both STRICT and FILTER modes), and user namespaces.
We have initial basic support for some LSMs, but kernel work will be
needed to support seccomp and user namespaces.

### One Line Summary

A discussion about what to do for c/r of LSMs, selinux, and user namespaces.

### 添付資料URL

掲載なし

<a id="session-2685"></a>
## 54. CRIU in HPC

- セッション個別URL: https://blog.linuxplumbersconf.org/2015/ocw/sessions/2685.html
- Track: Checkpoint/Restore
- 日時: Thursday, August 20, 2015 1:50pm

### Description

In the research project at my previous job different solutions for checkpointing/restarting in HPC where evaluated and this presentation gives a summary why CRIU was selected as basis for checkpointing/restarting and migrating.

### One Line Summary

Why CRIU was used as the basis for checkpointing/restarting and migrating in a HPC research project.

### 添付資料URL

- [slides](https://blog.linuxplumbersconf.org/2015/ocw//system/presentations/2685/original/criu-in-hpc.pdf)（file）

<a id="session-2649"></a>
## 55. CRIU on PowerPC

- セッション個別URL: https://blog.linuxplumbersconf.org/2015/ocw/sessions/2649.html
- Track: Checkpoint/Restore
- 日時: Thursday, August 20, 2015 2:10pm

### Description

Currently running on Intel and ARM64 platforms, CRIU has being ported on PowerPC, in Little Endian.
Porting CRIU on ppc64 raised issues tied to the Power architecture, as for example the linking options, the vDSO usage, the assembly constraints, the endianess issues.
I’ll talk about the issues I faced during this port, and the changes that will be required to get it work on Big Endian, like handling ABIv1 in parasite code which imply dealing with relocation and GOT handling.

### One Line Summary

Discussion about the CRIU port on PowerPC

### 添付資料URL

- [slides](https://blog.linuxplumbersconf.org/2015/ocw//system/presentations/2649/original/CRIU-On-PowerPC-LinuxPlumbers2015.pdf)（file）

<a id="session-2619"></a>
## 56. CRIU Support in Docker for Native Checkpoint and Restore

- セッション個別URL: https://blog.linuxplumbersconf.org/2015/ocw/sessions/2619.html
- Track: Checkpoint/Restore
- 日時: Thursday, August 20, 2015 2:30pm

### Description

Docker has a rich set of commands like start, stop, restart, kill, pause, and unpause to control the execution lifecycle of a container.  Using the Checkpoint/Restore In Userspace (CRIU) tool, it’s possible to complement the command set with checkpoint and restore.  Container checkpoint and restore (C/R) offers the following use cases:

Ability to stop and start the Docker daemon (say for an upgrade) without having to stop the containers and restart them from scratch, losing the work they had done when they were stopped.

Ability to reboot the system without having to restart the containers from scratch. Same benefits as use case 1 above.

Ability to do “forensic debugging” of processes running in a container by examining their checkpoint images (open files, memory segments, etc.).

Ability to migrate containers by restoring them on a different machine than where they were checkpointed.

### One Line Summary

Discussion and live demonstration of how CRIU can be used by Docker to checkpoint and restore containers.

### 添付資料URL

- [slides](http://linuxplumbersconf.org/2015/ocw//system/presentations/2619/original/2015-08-20-CRIU_Support_in_Docker_for_Native_Checkpoint_and_Restore.pdf)（file）


- スケジュール掲載のアーカイブURL: https://blog.linuxplumbersconf.org/2015/ocw//system/presentations/2619/original/2015-08-20-CRIU_Support_in_Docker_for_Native_Checkpoint_and_Restore.pdf
<a id="session-3165"></a>
## 57. P.Haul: live migrating with CRIU

- セッション個別URL: https://blog.linuxplumbersconf.org/2015/ocw/sessions/3165.html
- Track: Checkpoint/Restore
- 日時: Thursday, August 20, 2015 3:00pm

### Description

Doing live migration is not just dump + copy + resume, to decrease the freeze time migration should include some steps that copy data between nodes without freezing the tasks.

CRIU provides all necessary bits and pieces to do it, but doesn’t allow to easily do all of them with one simple call. The P.Haul project is all about it.

In this talk I’d like to describe the current P.Haul architecture and discuss what we plan to do with it to suit all the interested parties.

### One Line Summary

A quick talk about p.haul project that live migrates containers using CRIU

### 添付資料URL

- [slides](https://blog.linuxplumbersconf.org/2015/ocw//system/presentations/3165/original/plumbers-phaul.odp)（file）

<a id="session-2697"></a>
## 58. Rebootless Kernel Update and its verification

- セッション個別URL: https://blog.linuxplumbersconf.org/2015/ocw/sessions/2697.html
- Track: Checkpoint/Restore
- 日時: Thursday, August 20, 2015 3:20pm

### Description

In this talk, I will discuss about the techniques that we have developed to tackle the seamless OS update problem without closing the already running application. Besides this, I will also talk about the work that we are doing to further verify that the updated kernel is correct or not.

### One Line Summary

Seamlessly udpate the Linux kernel by checkpointing the running applications.

### 添付資料URL

掲載なし

<a id="session-2655"></a>
## 59. Using CRIU for Computer Architecture and Software Studies

- セッション個別URL: https://blog.linuxplumbersconf.org/2015/ocw/sessions/2655.html
- Track: Checkpoint/Restore
- 日時: Thursday, August 20, 2015 3:40pm

### Description

Detailed simulations are slow; checkpointing can help, but ideally with few negative side effects. Discuss observed side effects that impact performance analysis, including a distorted kernel/user instruction ratio after checkpoint restore and reduced memory sharing. Discuss anticipated issues regarding perf events and tracing subsystems. Discuss existing and potential solutions to the observed and anticipated issues.

### One Line Summary

How checkpoints can speed up result generation, how CRIU impacts measurements of application performance, and how to mitigate those impacts.

### 添付資料URL

- [slides](https://blog.linuxplumbersconf.org/2015/ocw//system/presentations/2655/original/comparch-software-studies.pdf)（file）

<a id="session-2691"></a>
## 60. Using the DLM as a Distributed In-Memory Database

- セッション個別URL: https://blog.linuxplumbersconf.org/2015/ocw/sessions/2691.html
- Track: File and Storage Systems
- 日時: Thursday, August 20, 2015 

### Description

In a fully redundant SAN setup both initiator and target systems are redundant. A popular approach to decide which initiator system should be active is to use a quorum disk and to control ownership of the quorum disk via persistent reservations. Although several open source SCSI target implementations exist for Linux, none of these subsystems supports this scenario today because persistent reservations are processed locally. One possible approach to keep the persistent reservation state in sync between the SCSI target systems is to use the DLM as a distributed in-memory database. The purpose of this talk is to present an efficient algorithm that synchronizes the persistent reservation state via the DLM.

### One Line Summary

Presentation of an approach for how to use the Linux Distributed Lock Manager (DLM) to implement persistent reservation support for highly available SCSI clusters efficiently.

### 添付資料URL

- [slides](https://blog.linuxplumbersconf.org/2015/ocw//system/presentations/2691/original/Using the DLM as a Distributed In-Memory Database.pdf)（file）

<a id="session-3219"></a>
## 61. SMR in the kernel - Work remaining

- セッション個別URL: https://blog.linuxplumbersconf.org/2015/ocw/sessions/3219.html
- Track: File and Storage Systems
- 日時: Thursday, August 20, 2015 

### Description

We’ll explore a quick summary of what we (Seagate) have done for the adoption of SMR drives, another summary of the proposed changes outstanding that we have scoped, and a list of designs that need some initial thought and scoping.

Addressable topics include:
HBAs – vendor specific

libata/libsas/scsi – mostly done, thanks to Dr. Reinecke and Seagate engineers

drivers – sd (and st?) —Difference between tape, flash, SMR

blockdev changes – again, Dr. Reinecke and Seagate engineers

IO elevator for IO order

FS design (based off ext4): major algorithm changes
     block allocator
     garbage collector – compactor/defragmentor
     b+trees (dynamic inodes, dynamic group sizes, group allocation/purpose updates)
     Journaling

DM shims – {HM,Conv} to {HM,Conv}

mdraid/LVM – Buttressing, Overlapping, Interleaving, and Parity: aggregation of zones to FS.

### One Line Summary

A litany of work remaining for enabling SMR in the Kernel.

### 添付資料URL

掲載なし

<a id="session-3069"></a>
## 62. Dynamic iSCSI at Scale: Remote Paging at Google

- セッション個別URL: https://blog.linuxplumbersconf.org/2015/ocw/sessions/3069.html
- Track: File and Storage Systems
- 日時: Thursday, August 20, 2015 

### Description

Google is experimenting with remotely mounting jobs’ binaries and data packages. Each package is served as an ext4 filesystem atop an iSCSI-mounted block device fed through dm-multipath and dm-verity. A typical job might run on O(1K) machines, employing a N-to-1 multipath configuration yielding O(10K) short-lived iSCSI sessions. Google thus sees O(100K) iSCSI sessions set up and torn down every minute, a rather atypical iSCSI deployment. We will explore the challenges presented by this deployment at scale.

### One Line Summary

Running clusters with millions of short-lived iSCSI sessions.

### 添付資料URL

- [slides](https://blog.linuxplumbersconf.org/2015/ocw//system/presentations/3069/original/Public LPC2015 - Dynamic iSCSI at Scale- Remote paging at Google.pdf)（file）

<a id="session-3447"></a>
## 63. BOF: Potential Userspace Filesystem APIs

- セッション個別URL: https://blog.linuxplumbersconf.org/2015/ocw/sessions/3447.html
- Track: BoF Track
- 日時: Thursday, August 20, 2015 4:00pm

### Description

The objective of this BOF session is to discuss what kinds of new FS & storage APIs could be useful additions for userspace programs.  Things that we can talk about include a more standard syscall for accessing accelerated copy routines (filesystem reflink, the SCSI copy offloading thing); the proposed XFS configurable error handling interface; and anything else that application programmers might want to discuss with kernel engineers.

(There is a separate SMR BOF.)

### One Line Summary

Let's get together to discuss potential userspace APIs for advanced FS & storage systems that we could add to the kernel!

### 添付資料URL

掲載なし

<a id="session-3393"></a>
## 64. BOF: Bittern Disk Cache

- セッション個別URL: https://blog.linuxplumbersconf.org/2015/ocw/sessions/3393.html
- Track: BoF Track
- 日時: Thursday, August 20, 2015 5:00pm

### Description

In this presentation, Fio Cattaneo, will talk about how Twitter Cache takes advantage of Persistent Memory technology (NVDIMM and PCIe-NVRAM) and software RAID to replace the functionality of HW RAID. Its main advantages are lower costs, the use of commodity hardware and open source stack versus proprietary HW RAID solutions. Twitter Cache is tuned towards optimizing the use of persistent memory which is smaller but faster than SSD caching solutions. Eviction algorithms are tuned towards a write buffer to best utilize the smaller size. Cache access uses a low overhead API as opposed to block store. Metadata is kept in memory for fast access. Because of its low latency, it also allows for caching of SSD storage. Twitter Cache is being actively developed and tested on Twitter workloads.

Bittern was already presented at Linuxcon 2014 http://events.linuxfoundation.org/sites/events/files/slides/Bittern_Linuxcon_2014_v0.12.pdf . Bittern is now being deployed within Twitter for transactional workloads.

### One Line Summary

Bittern Disk Cache: replacing Hardware RAID with Persistent  Memory and software RAID stack

### 添付資料URL

掲載なし

<a id="session-3321"></a>
## 65. BOF: Device Mapper for Shingle Magnetic Recording (SMR)

- セッション個別URL: https://blog.linuxplumbersconf.org/2015/ocw/sessions/3321.html
- Track: BoF Track
- 日時: Thursday, August 20, 2015 5:00pm

### Description

Abstract
Any problem in computer science can be solved with another layer of indirection. Shingle magnetic recording is no different – the only “difficulty” is to determine where to add the additional layer of indirection/abstraction to enable maximum flexibility and efficiency. Let’s go over the various SW/FW paradigms that attempt to abstract away SMR behavior (e.g. user space library, device mapper, SMR aware file system, enlightened application). Along the way, we will also explore what deficiencies are holding back SMR adoption in (e.g. ATA sense data reporting) the data center.

### One Line Summary

Approach and progress in developing a device mapper for SMR

### 添付資料URL

掲載なし

<a id="session-3309"></a>
## 66. BOF: Kernel networking and TCP's (ir)relevance in the latest brave new world

- セッション個別URL: https://blog.linuxplumbersconf.org/2015/ocw/sessions/3309.html
- Track: BoF Track
- 日時: Thursday, August 20, 2015 5:00pm

### Description

Defining transport protocols running on userspace over UDP is an emerging trend. QUIC is starting to be deployed, SPUD is being discussed in IETF, there are efforts to implement TCP and SCTP over UDP in userspace.  A key motivation for this trend is to avoid the kernel like the plague. As stated in the QUIC wiki: “As a userspace transport atop UDP, QUIC allows innovations which have proven difficult to deploy with existing protocols as they are hampered by legacy clients and middleboxes, or by prolonged Operating System development and deployment cycles.”

In this BOF, we will raise at least two questions

1) Is there anything we can do from the kernel perspective to address the “prolonged development and development cycles” issue?
2) Other than continuing to provide functional UDP sockets, is there anything we should do in the kernel to support transport protocols in userspace model?

### One Line Summary

Let's talk about the latest trend in transport protocol development which is to expressly avoid relying on the kernel

### 添付資料URL

掲載なし

<a id="session-3285"></a>
## 67. BOF: switchdev offloading

- セッション個別URL: https://blog.linuxplumbersconf.org/2015/ocw/sessions/3285.html
- Track: BoF Track
- 日時: Thursday, August 20, 2015 5:00pm

### Description

The switch device driver model (switchdev) enables offloading of the forwarding plane from the kernel to the hardware tables, where the HW forwarding plane is viewed as a fast path cache of the Linux networking tables.
In this session, we discuss some issues that a vendor may face when implementing a switchdev offloading driver:
Offload policy options:
-	Full synchronization (offload all)
-	Traffic based (cache)
-	LRU based
-	Other?
How/should the application control the offload policy
Out Of Resource management:
What should be the behavior in case the HW resources exhausted?
-	Ignore HW error and leave kernel and HW out of synched ? in that case, how do we synch the forwarding plane back again when HW resource become available ?
-	Force full synchronization of kernel and HW tables i.e. delete the failed entry’s form the kernel as well?
-	Provide some priority mechanism to replace “less important” entries with more important ones? 
-	How to implement a per table priority policy?

### One Line Summary

A look on the common dilemma for offloading Linux network component to HW switches and e-switches using switchdev

### 添付資料URL

掲載なし

<a id="session-2871"></a>
## 68. Toybox in Android

- セッション個別URL: https://blog.linuxplumbersconf.org/2015/ocw/sessions/2871.html
- Track: Android/Mobile II
- 日時: Thursday, August 20, 2015 5:00pm

### Description

Toybox is being merged into Android-M, replacing most if not all of toolbox and providing a more fully fleshed out posix/lsb command line for Android. General status report from the maintainer, followed by Q&A.

### One Line Summary

The state of toybox in Android.

### 添付資料URL

掲載なし

<a id="session-2895"></a>
## 69. Improving vendor AOSP repos

- セッション個別URL: https://blog.linuxplumbersconf.org/2015/ocw/sessions/2895.html
- Track: Android/Mobile II
- 日時: Thursday, August 20, 2015 6:00pm

### Description

Most OEMs fork AOSP (or further fork SoC vendor’s AOSP based BSP) and modify the tree as needed to enable and ship their devices. Unfortunately there isn’t any collaboration or community established best-practices, so these modified trees often collide with upstream AOSP changes and make updating to new AOSP releases difficult.

This discussion session will cover aspects of why this is problematic, and what might be possible to improve the situation.

### One Line Summary

A discussion of issues with vendor AOSP repos, and ideas for how things can be improved.

### 添付資料URL

- [slides](https://blog.linuxplumbersconf.org/2015/ocw//system/presentations/2895/original/Improving AOSP Vendor Trees.pdf)（file）

<a id="session-3417"></a>
## 70. Integrating KDBus in Android

- セッション個別URL: https://blog.linuxplumbersconf.org/2015/ocw/sessions/3417.html
- Track: Android/Mobile II
- 日時: Thursday, August 20, 2015 6:45pm

### Description

Over the course of three months we have experimented with integrating KDBus in Android.  More specifically, considering it as a potential replacement for Binder in the future.  KDBus is being considered for upstream inclusion which makes now the perfect time for us to experiment with it.

We will talk about how Android currently performs IPC with the Binder API.  And then go into a little more details of how this API is implemented on top of the binder kernel driver.  We will also go through KDBus’ capabilities in order to see how it could satisfy Binder’s needs and model.

Finally, we will see a possible approach: Implementing a subset of the Binder API on top KDBUS.  This will allow us to show how Binder’s synchronous nature can be implemented and present a way to move forward with this work.

### One Line Summary

An experiment on using KDBus as a potential replacement for Binder in Android.

### 添付資料URL

- [slides](https://blog.linuxplumbersconf.org/2015/ocw/system/presentations/3417/original/integrating-kdbus-in-android.pdf)（file）


- スケジュール掲載のアーカイブURL: https://blog.linuxplumbersconf.org/2015/ocw//system/presentations/3417/original/integrating-kdbus-in-android.pdf
<a id="session-3063"></a>
## 71. Providing per-task Quality of Service

- セッション個別URL: https://blog.linuxplumbersconf.org/2015/ocw/sessions/3063.html
- Track: Android/Mobile II
- 日時: Thursday, August 20, 2015 7:00pm

### Description

Running Android on systems with varying topologies and compute options (big.LITTLE for example) bears lot of challenges: apps execution predictability, energy/performance tradeoffs, etc. The introduction of per-task Quality of Service may help in solving some of these problems, as it can represent an interface between Android and the Linux scheduler for providing more information to the latter, while giving better runtime guarantees to the former. The basic idea has foundations on the use of the Linux kernel’s deadline scheduler, while the aim is to generate further discussion on the topic.

### One Line Summary

A discussion around interfaces between Linux scheduler and Android to express user-space Quality of Service requirements.

### 添付資料URL

- [slides](https://blog.linuxplumbersconf.org/2015/ocw//system/presentations/3063/original/lelli_slides.pdf)（file）

<a id="session-3399"></a>
## 72. Improving big.LITTLE on Android

- セッション個別URL: https://blog.linuxplumbersconf.org/2015/ocw/sessions/3399.html
- Track: Android/Mobile II
- 日時: Thursday, August 20, 2015 7:15pm

### Description

Discussion of big.LITTLE processors, areas we see as a problem in Android, and improvements we’ve made to Android to make big.LITTLE more efficient. Also, discussion of future improvements we could make in Android to further improve scheduling.

### One Line Summary

Status of heterogeneous CPU support in Android and new features included in Android M to improve it.

### 添付資料URL

- [slides](https://blog.linuxplumbersconf.org/2015/ocw/system/presentations/3399/original/LPC-tkjos.pdf)（file）


- スケジュール掲載のアーカイブURL: https://blog.linuxplumbersconf.org/2015/ocw//system/presentations/3399/original/LPC-tkjos.pdf
<a id="session-3141"></a>
## 73. New ACPI Specification Changes Related to Power Management

- セッション個別URL: https://blog.linuxplumbersconf.org/2015/ocw/sessions/3141.html
- Track: Energy Aware Scheduling II
- 日時: Thursday, August 20, 2015 5:00pm

### Description

I will outline recent changes in the power management part of the ACPI specification and discuss their meaning to Linux.

### One Line Summary

Overview of ACPI 6 changes related to power management

### 添付資料URL

- [slides](https://blog.linuxplumbersconf.org/2015/ocw//system/presentations/3141/original/ACPI_6_and_PM.pdf)（file）

<a id="session-3045"></a>
## 74. ACPI Low-Power Idle states (LPI)

- セッション個別URL: https://blog.linuxplumbersconf.org/2015/ocw/sessions/3045.html
- Track: Energy Aware Scheduling II
- 日時: Thursday, August 20, 2015 5:30pm

### Description

ACPI 6.0 introduced a new way of defining and handling
low-power idle states (LPI), that is a enhancement of
existing C-states specification. The kernel code required
to manage LPI states hinges on the existing ACPI C-states infrastructure
but also needs to augment it so that
hierarchical idle states can be managed in a seamless way.

This topic will provide insights into the kernel patches
aimed at enabling ACPI LPI states in the kernel.

### One Line Summary

ACPI Low-Power Idle States (LPI) kernel implementation

### 添付資料URL

掲載なし

<a id="session-3057"></a>
## 75. DT power domain bindings - idle states

- セッション個別URL: https://blog.linuxplumbersconf.org/2015/ocw/sessions/3057.html
- Track: Energy Aware Scheduling II
- 日時: Thursday, August 20, 2015 6:00pm

### Description

Define DT power domain bindings to link CPU idle states to power domains and the respective devices, in order to define what devices are affected by an idle state entry and implement kernel code to manage the idle state transitions (devices context save/restore, etc…).

### One Line Summary

DT power domain bindings - idle states

### 添付資料URL

- [slides](https://blog.linuxplumbersconf.org/2015/ocw//system/presentations/3057/original/lpc-idle.pdf)（file）

<a id="session-3051"></a>
## 76. Unifying DT wake-up sources management

- セッション個別URL: https://blog.linuxplumbersconf.org/2015/ocw/sessions/3051.html
- Track: Energy Aware Scheduling II
- 日時: Thursday, August 20, 2015 6:30pm

### Description

The way wake-up sources are currently managed in the ARM
kernel (DT systems) is platform specific and not well defined.
In particular the management of interrupt controllers (eg GIC)
on suspend-to-RAM and suspend-to-idle is platform specific
and not easy to generalize, since it depends on the platform
power management capabilities (eg power domains, GPIO wake-up
logic).

The aim of this discussion is to come up with a well
defined way (DT bindings) to represent platform behaviour (interrupt controller,
 wake-up sources configuration, etc…) for suspend-to-RAM and suspend-to-idle.

### One Line Summary

Unifying DT wake-up sources configuration and management

### 添付資料URL

- [slides](https://blog.linuxplumbersconf.org/2015/ocw//system/presentations/3051/original/wakeup_config.pdf)（file）

<a id="session-3075"></a>
## 77. PM: Unify idle management for CPUs and IO devices

- セッション個別URL: https://blog.linuxplumbersconf.org/2015/ocw/sessions/3075.html
- Track: Energy Aware Scheduling II
- 日時: Thursday, August 20, 2015 7:00pm

### Description

Idle CPUs are managed by the CPUidle framework.  Idle IO devices are managed by runtime PM and genpd.  Can we unify them?

The goal of this topic is to discuss goals and challenges of using runtime PM and genpd for CPU and cluster idle management.

### One Line Summary

Can we, and should we unify idle management of CPUs and IO devices

### 添付資料URL

- [slides](https://blog.linuxplumbersconf.org/2015/ocw/system/presentations/3075/original/One idle to rule them all.pdf)（file）


- スケジュール掲載のアーカイブURL: https://blog.linuxplumbersconf.org/2015/ocw//system/presentations/3075/original/One idle to rule them all.pdf
<a id="session-3087"></a>
## 78. BOF: Coordinating software (eBPF/tc/OVS/nft/DPDK) and hardware dataplanes

- セッション個別URL: https://blog.linuxplumbersconf.org/2015/ocw/sessions/3087.html
- Track: BoF Track
- 日時: Thursday, August 20, 2015 6:00pm

### Description

In the network we believe there is a need for a programmable and extensible packet pipeline to support emerging use cases. In this session we want to show existing use cases we are aware of and hopefully add new cases to this list. In addition we can highlight current work using extensible software and hardware components such as languages used to define the pipeline, when we provision this pipeline and the interface we use to configure it at runtime. Finally because we are aware of at least 3 or 4 approaches to accomplish this goal we would like to talk about next steps and possible collaboration opportunities.

### One Line Summary

Discuss directions and open problems in frameworks for building a programmable and extensible pipelines that leverage software and hardware.

### 添付資料URL

掲載なし

<a id="session-3135"></a>
## 79. BOF: Open Hardware

- セッション個別URL: https://blog.linuxplumbersconf.org/2015/ocw/sessions/3135.html
- Track: BoF Track
- 日時: Thursday, August 20, 2015 6:00pm

### Description

We’ll be demoing the Open Processor Foundation’s j2 SOC and walking people through Xilinx VHDL FPGA tool setup on some numato mimas v2 boards, but if you’d rather talk about RISC-V or OpenSPARC or OpenRISC or the $9 CHIP computer or CERN’s Open Hardware Repository, or insist that verilog, clash, chisel, and myhdl are all better hardware languages than each other, the floor’s open.

### One Line Summary

Come talk about royalty Free SOC/processor designs and FPGA development.

### 添付資料URL

掲載なし

<a id="session-2679"></a>
## 80. BOF: PXE Sucks

- セッション個別URL: https://blog.linuxplumbersconf.org/2015/ocw/sessions/2679.html
- Track: BoF Track
- 日時: Thursday, August 20, 2015 6:00pm

### Description

In the data center, the ecosystem of bare metal network switches running Linux is growing rapidly.  A key enabler of this ecosystem is the Open Network Install Environment (ONIE) project, which provides an environment for installing any network OS on disparate hardware platforms.

In his presentation, Curt Brune will describe the benefits of ONIE, explain why Linux is the foundation of ONIE, review how ONIE works, cover the current state of the ONIE project and solicit discussion about the future challenges and directions for ONIE.

Highlights:

- Based on a modern Linux kernel and BusyBox
- Provides an environment for installing any network OS
- Automate large scale data center switch provisioning
- Manage your switches like you manage your Linux servers
- https://github.com/opencomputeproject/onie/wiki

### One Line Summary

Project ONIE - Modern, Scalable, Network Based OS Installations

### 添付資料URL

掲載なし

<a id="session-3453"></a>
## 81. BOF: Distributed file systems

- セッション個別URL: https://blog.linuxplumbersconf.org/2015/ocw/sessions/3453.html
- Track: BoF Track
- 日時: Thursday, August 20, 2015 7:00pm

### Description

Gathering of those interested in discussing their top concerns about distributed filesystem implementations in Linux. Performance, security, user management, new networking technologies, and so on.

### One Line Summary

In-kernel NFS, NFS/Ganesha, Samba, CIFS, Ceph and more

### 添付資料URL

掲載なし

<a id="session-3171"></a>
## 82. BOF: Virtual Routing Framework (VRF)

- セッション個別URL: https://blog.linuxplumbersconf.org/2015/ocw/sessions/3171.html
- Track: BoF Track
- 日時: Thursday, August 20, 2015 7:00pm

### Description

There are multiple possible ways to support multiple Virtual Routers on a single system. The changes impact the networking stack on many levels. Recently discussion between multiple companies and users has centered on how to make a scalable solution. Any result impacts Linux userspace infrastructure and kernel.

### One Line Summary

Discussion of VRF architecture and implementation issues

### 添付資料URL

掲載なし

<a id="session-3363"></a>
## 83. Securing the Entire Boot Chain

- セッション個別URL: https://blog.linuxplumbersconf.org/2015/ocw/sessions/3363.html
- Track: Boot, Init, and Config
- 日時: Friday, August 21, 2015 9:00am

### Description

Secure Boot is a single component of designing a boot process that allows users to feel secure that their systems have not been tampered with. Several other technologies (TPMs, TXT, disk encryption, remote attestation and associations between them) exist, but often require extensive manual configuration and fail to provide a seamless user experience. What would a fully secure boot chain look like, and what should we be doing to get there?"

### One Line Summary

Discussion around a trusted boot chain and how to assure your system is running the software that you intend.

### 添付資料URL

掲載なし

<a id="session-2721"></a>
## 84. PXE: Sucks

- セッション個別URL: https://blog.linuxplumbersconf.org/2015/ocw/sessions/2721.html
- Track: Boot, Init, and Config
- 日時: Friday, August 21, 2015 9:45am

### Description

In the data center, the ecosystem of bare metal network switches running Linux is growing rapidly. A key enabler of this ecosystem is the Open Network Install Environment (ONIE) project, which provides an environment for installing any network OS on disparate hardware platforms.

Let’s discuss the future of installing, provisioning and updating operating systems via the network.

Project ONIE is one such method.  We can discuss the benefits of ONIE, explain why Linux is the foundation of ONIE, review how ONIE works, cover the current state of the ONIE project and solicit discussion about the future challenges and directions for ONIE.  Also the short comings of ONIE and alternate approaches can be discussed.

Highlights:

- Based on a modern Linux kernel and BusyBox
- Provides an environment for installing any network OS
- Automate large scale data center switch provisioning
- Manage your switches like you manage your Linux servers
- https://github.com/opencomputeproject/onie/wiki

### One Line Summary

Project ONIE - Modern, Scalable, Network Based OS Installations

### 添付資料URL

- [slides](http://linuxplumbersconf.org/2015/ocw//system/presentations/2721/original/ONIE-LinuxPlumbers-2015.pdf)（file）


- スケジュール掲載のアーカイブURL: https://blog.linuxplumbersconf.org/2015/ocw//system/presentations/2721/original/ONIE-LinuxPlumbers-2015.pdf
<a id="session-3177"></a>
## 85. Research topics in fastboot

- セッション個別URL: https://blog.linuxplumbersconf.org/2015/ocw/sessions/3177.html
- Track: Boot, Init, and Config
- 日時: Friday, August 21, 2015 10:45am

### Description

There are many opportunities to improve the boot time of Linux systems. This talk will examine some of the more promising
1. Deferring initcalls.  There is already a mechanism to run the initcalls for a module at module installation. This talk will examine how to extend that mechanism for built-in kernel subsystems to defer running the initcall off the fastpath.
2. Examine ways to start drivers in u-boot on multicore CPUs. The driver could run on a core in DSP mode until the kernel was ready to take over its responsibilities.
3. Parallelize CPU and I/O operations.  Examples include decompressing the kernel in parallel with loading it, starting the mount of the rootfs early in kernel bringup, and preloading of applications.

### One Line Summary

Examine low hanging fruit for sub-second booting of systems

### 添付資料URL

- [slides](https://blog.linuxplumbersconf.org/2015/ocw//system/presentations/3177/original/ResearchTopics2015_final.odp)（file）

<a id="session-3369"></a>
## 86. Reducing the ARM Linux kernel size without losing your mind

- セッション個別URL: https://blog.linuxplumbersconf.org/2015/ocw/sessions/3369.html
- Track: Boot, Init, and Config
- 日時: Friday, August 21, 2015 11:30am

### Description

Automatically reducing the Linux kernel size may be achieved in
different ways.  Using LTO (Link Time Optimization) is one such way with many advantages, but it also has major issues. A simpler alternative is linker section garbage collection. However, it turns out that even “simpler” solutions have their share of unsuspected pitfalls, especially on ARM. Those pitfalls and proposed solutions are the subjects of this discussion.

### One Line Summary

Ways to reduce the Linux kernel size and the problems that they face.

### 添付資料URL

- [slides](https://blog.linuxplumbersconf.org/2015/ocw/system/presentations/3369/original/slides.html)（file）


- スケジュール掲載のアーカイブURL: https://blog.linuxplumbersconf.org/2015/ocw//system/presentations/3369/original/slides.html
<a id="session-3129"></a>
## 87. Recent Power Management Core Changes in Linux

- セッション個別URL: https://blog.linuxplumbersconf.org/2015/ocw/sessions/3129.html
- Track: Energy Aware Scheduling I
- 日時: Friday, August 21, 2015 

### Description

A number of significant changes have been made to the Linux kernel’s power management core in the last several months, including suspend-to-idle support, better integration of runtime PM with system suspend/resume, system suspend/resume optimizations and more.  I will outline them and discuss the more important ones in more detail.

### One Line Summary

Overview of changes made to the Linux kernel's PM core over the last few releases

### 添付資料URL

- [slides](https://blog.linuxplumbersconf.org/2015/ocw//system/presentations/3129/original/PM_changes_since_3.14.pdf)（file）

<a id="session-3159"></a>
## 88. Scheduler-driven CPU frequency selection

- セッション個別URL: https://blog.linuxplumbersconf.org/2015/ocw/sessions/3159.html
- Track: Energy Aware Scheduling I
- 日時: Friday, August 21, 2015 9:15am

### Description

Discuss design of a scheduler-driven cpufreq policy based on recent patches introducing cpufreq_sched.c and gather feedback. Includes changes to scheduler and CPUfreq subsystem. If time permits, wander into the weeds regarding multi-scheduler class constraints (e.g. deadline scheduler bandwidth) and peripheral device constraints (e.g. DDR controller driver increasing CPU clock speed).

### One Line Summary

Discuss current design and gather feedback on a cpu capacity-based frequency scaling policy.

### 添付資料URL

- [slides](https://blog.linuxplumbersconf.org/2015/ocw//system/presentations/3159/original/scheduler-driven cpu frequency selection.pdf)（file）

<a id="session-3039"></a>
## 89. Energy-model driven scheduling

- セッション個別URL: https://blog.linuxplumbersconf.org/2015/ocw/sessions/3039.html
- Track: Energy Aware Scheduling I
- 日時: Friday, August 21, 2015 9:45am

### Description

Task scheduling decisions have a large impact on system energy consumption particularly for SoCs, yet the Linux scheduler isn’t energy-aware and there is no coordination between power management frameworks. Having a relatively simple energy model to guide scheduling decisions can add the missing energy-awareness in a generic fashion. Brief overview of ongoing effort, missing bits, open issues, and most importantly discussions about how we want to proceed and get energy-awareness merged.

### One Line Summary

Enabling energy-aware task scheduling and scheduler-driven power management.

### 添付資料URL

掲載なし

<a id="session-2763"></a>
## 90. You can't always get what you want: P-state selection on Intel CPUs

- セッション個別URL: https://blog.linuxplumbersconf.org/2015/ocw/sessions/2763.html
- Track: Energy Aware Scheduling I
- 日時: Friday, August 21, 2015 10:45am

### Description

This will be an overview of how Performance States (P-states) work on Intel platforms.  We will start with how the platform handles p-states.  We will then discuss the OS p-state selection algorithm in intel_pstate.  Finally, we will talk about hardware controlled p-states (HWP). Knowing how p-state selection actually happens should help us understand how energy aware scheduling in the OS may or may not benefit Intel platforms.

### One Line Summary

An overview of how Performance States work on Intel platforms

### 添付資料URL

掲載なし

<a id="session-3081"></a>
## 91. Fast Bounded-Concurrency Hash Tables

- セッション個別URL: https://blog.linuxplumbersconf.org/2015/ocw/sessions/3081.html
- Track: Performance and Scalability
- 日時: Friday, August 21, 2015 

### Description

Non-blocking data structures and their benefits often come at the cost of increased latency because they require additional complexity in the common case. There are plenty of exceptions to this if the requirements of the data structure are relaxed, such as supporting only a bounded level of write or read concurrency.

For this reason, well-designed specialized non-blocking data structures guarantee improved resiliency, throughput and latency in all cases compared to alternatives relying on traditional blocking synchronization primitives such as read-write locks. Specialized concurrent structures are common place in the Linux kernel and other performance critical systems.

This talk introduces a general technique for achieving single-writer non-blocking hash tables at low to negligible cost. The resulting hash table requires no barriers (fences) or locked instructions on architectures such as x86/x86-64. Read operations are lock-free and write operations are fast and bounded. Insertion and deletion are wait-free. Probe sequence mutation is linearized for the common case, bounded and fast. Architectures with relaxed memory models still require barriers.

### One Line Summary

This talk introduces a general technique for achieving single-writer non-blocking hash tables at low to negligible cost.

### 添付資料URL

掲載なし

<a id="session-2913"></a>
## 92. Improving Transactional Memory Performance with Queued Locking

- セッション個別URL: https://blog.linuxplumbersconf.org/2015/ocw/sessions/2913.html
- Track: Performance and Scalability
- 日時: Friday, August 21, 2015 

### Description

In most programs using transactional memory, the gain is poor if the critical section has the property that the probability of abort increases rapidly with number of speculative threads in the critical section. Such property will cause a logjam when just one or two aborts will pile up threads doing speculative execution, resulting in even more aborts, eventually preventing threads from making forward progress. We will discuss a modified queued locking method, which provide a self adaptive quota to control the number of threads we allow in subsequent retries. We will present improvements  with test workloads running with Intel’s TSX transactional memory.

### One Line Summary

We present a new modified queued locking method that improves transactional memory technology (like Intel TSX), by using queued locking to adaptively control the number of threads doing speculative transaction for optimal performance.

### 添付資料URL

- [slides](https://blog.linuxplumbersconf.org/2015/ocw//system/presentations/2913/original/mcs_tsx.pdf)（file）

<a id="session-2745"></a>
## 93. Do Virtual Machines Really Scale?

- セッション個別URL: https://blog.linuxplumbersconf.org/2015/ocw/sessions/2745.html
- Track: Performance and Scalability
- 日時: Friday, August 21, 2015 

### Description

In this talk, I will discuss about the scalability trend observed when we try to run a VM with hundreds of vCPUs. I will discuss some of our findings on a set of benchmarks (Mosbench) and their respective solutions that we have come up with.

A preliminary work is available in the form of blog:

https://sslab.gtisc.gatech.edu/2015/cloud-scalability.html

### One Line Summary

Scalability issue of VMs on 80core and 120core machines.

### 添付資料URL

掲載なし

<a id="session-2751"></a>
## 94. How to apply mutation testing to the RCU for fun and profit

- セッション個別URL: https://blog.linuxplumbersconf.org/2015/ocw/sessions/2751.html
- Track: Performance and Scalability
- 日時: Friday, August 21, 2015 

### Description

Mutation testing is an automated test technique often used in academia to determine the quality of test suites and the robustness of programs. Though seen as the gold standards by academics, it has seldom been applied to programs longer than a few hundred lines of code due to the computational explosion it is prone to as programs grow.

We have been working to adapt this technique to the practical exigencies of the RCU to evaluate its testing harness as well as identify new bugs in a more scalable and automated way. By rapidly triaging and throwing away uninteresting mutants we have been able to use this technique to identify 1 bug and 2 test case modifications in a relatively well-established and solid module of the Linux Kernel over the last few weeks.

In this talk, I will describe mutation testing and its potential, how we overcame the scalability issues associated with this technique, and how this technique can successfully be used to identify hairy bugs in big and complex systems.

### One Line Summary

Learn how we overcame the practical and computational limitations of mutation testing to identify real problems in projects as complex as the Kernel, and how you too can adopt this technique.

### 添付資料URL

掲載なし

<a id="session-3291"></a>
## 95. Unfair Queued Spinlocks and Transactional Locks

- セッション個別URL: https://blog.linuxplumbersconf.org/2015/ocw/sessions/3291.html
- Track: Performance and Scalability
- 日時: Friday, August 21, 2015 

### Description

The qspinlock patch that went into the 4.2 kernel had support for PV qspinlock for paravirtual guests and simple byte unfair lock for other VM guests. On an over-committed guest, the heavy vmexit and vmenter overhead of pvqspinlock can slow down system performance rather significantly. The unfair byte lock performs well on small guest, but it doesn’t scale well when the number of vCPU increases. The unfair qspinlock patch can scale almost as well as the fair qspinlock patch without the performance overhead of the pvqspinlock.

On Intel Haswell-EX and newer CPUs, the TSX technology can enable a new class of transactional locks that can be useful in situation where fine-grained locking is hard. This session will talk about a proposed implementation for a new set of locking APIs that are direct replacement of the spinlock APIs to enable the use of transactional locking for selected locks in the kernel.

### One Line Summary

A performance review on unfair queued spinlocks for virtual guests and transactional locks based on the Intel's TSX technology.

### 添付資料URL

- [slides](https://blog.linuxplumbersconf.org/2015/ocw//system/presentations/3291/original/Unfair Queued Spinlocks and Transactional Locks.pdf)（file）

<a id="session-3243"></a>
## 96. Limitations of various linkers in clang based toolchains

- セッション個別URL: https://blog.linuxplumbersconf.org/2015/ocw/sessions/3243.html
- Track: Performance and Scalability
- 日時: Friday, August 21, 2015 10:40am

### Description

Experiences using various linkers (ld.bfd, ld.gold, MCLinker, and llvm-link) for building the Dronecode PX4 Flight stack when porting to Linux.

The PX4 code makes use of some features of ld.bfd that are difficult to work around using other linkers. This session will be a discussion of the various issues discovered and options to work around the issues.

### One Line Summary

Limitations of various linkers in clang based toolchains

### 添付資料URL

- [slides](https://blog.linuxplumbersconf.org/2015/ocw//system/presentations/3243/original/LPC2015.pdf)（file）

<a id="session-3093"></a>
## 97. Device Tree Overlays

- セッション個別URL: https://blog.linuxplumbersconf.org/2015/ocw/sessions/3093.html
- Track: Device Tree Tools, Validation, and Troubleshooting
- 日時: Friday, August 21, 2015 1:30pm

### Description

Device Tree Overlays are now in the mainline kernel. This session will cover what they are, how they are used.

As part of this session I will examine device tree overlays, device tree changeset, the phandle resolution mechanism, overlay overlap removal checks and finally device tree variants (or quirks).

The Juniper use case will be discussed:

At Juniper, we use devicetree overlays to manage a variety of cards which can be inserted and removed at runtime.

In this session, I will describe the basic system architecture, our requirements, and why we decided to use devicetree overlays to meet those requirements. I will also dive into the actual implementation of our card management framework in the Linux kernel, and explore some of the limitations of the current devicetree overlay code.

### One Line Summary

Device Tree Overlays overview and use cases

### 添付資料URL

- [slides](https://blog.linuxplumbersconf.org/2015/ocw/system/presentations/3093/original/merged--DT-plumbers-2015--Devicetree_Overlays_at_Juniper.pdf)（file）


- スケジュール掲載のアーカイブURL: https://blog.linuxplumbersconf.org/2015/ocw//system/presentations/3093/original/merged--DT-plumbers-2015--Devicetree_Overlays_at_Juniper.pdf
<a id="session-3099"></a>
## 98. Overlays, some times a good idea sometimes not.

- セッション個別URL: https://blog.linuxplumbersconf.org/2015/ocw/sessions/3099.html
- Track: Device Tree Tools, Validation, and Troubleshooting
- 日時: Friday, August 21, 2015 2:00pm

### Description

This session will cover supported and not supported overlay cases.

### One Line Summary

Device Tree Overlays are powerful; some times using them is a good idea and sometimes not. (See "Device Tree Overlays" for slides.)

### 添付資料URL

掲載なし

<a id="session-2991"></a>
## 99. Device Tree Documentation

- セッション個別URL: https://blog.linuxplumbersconf.org/2015/ocw/sessions/2991.html
- Track: Device Tree Tools, Validation, and Troubleshooting
- 日時: Friday, August 21, 2015 2:15pm

### Description

What device tree documentation and tutorials exist and where to find them.  What is needed?

What new documentation is expected this year?

Can we bring consistency to the documentation style/syntax?

### One Line Summary

The current state and future of documentation

### 添付資料URL

- [slides](https://blog.linuxplumbersconf.org/2015/ocw//system/presentations/2991/original/merged--DT_Binding_Documentation--device_tree_doc.pdf)（file）

<a id="session-3021"></a>
## 100. Chat With The dtc Maintainers

- セッション個別URL: https://blog.linuxplumbersconf.org/2015/ocw/sessions/3021.html
- Track: Device Tree Tools, Validation, and Troubleshooting
- 日時: Friday, August 21, 2015 2:30pm

### Description

This session is an opportunity to ask questions of the dtc maintainers or listen to their thoughts on dtc related topics.

### One Line Summary

A discussion with the dtc maintainers. (No slides presented.)

### 添付資料URL

掲載なし

<a id="session-3027"></a>
## 101. device tree break

- セッション個別URL: https://blog.linuxplumbersconf.org/2015/ocw/sessions/3027.html
- Track: Device Tree Tools, Validation, and Troubleshooting
- 日時: Friday, August 21, 2015 2:45pm

### Description

relax, take a break

### One Line Summary

short break

### 添付資料URL

掲載なし

<a id="session-3441"></a>
## 102. Chat With The dtc Maintainers (continued)

- セッション個別URL: https://blog.linuxplumbersconf.org/2015/ocw/sessions/3441.html
- Track: Device Tree Tools, Validation, and Troubleshooting
- 日時: Friday, August 21, 2015 3:00pm

### Description

This session is an opportunity to ask questions of the dtc maintainers or listen to their thoughts on dtc related topics.

### One Line Summary

A discussion with the dtc maintainers. (No slides presented.)

### 添付資料URL

掲載なし

<a id="session-3105"></a>
## 103. Overlays and tools for sanity.

- セッション個別URL: https://blog.linuxplumbersconf.org/2015/ocw/sessions/3105.html
- Track: Device Tree Tools, Validation, and Troubleshooting
- 日時: Friday, August 21, 2015 3:10pm

### Description

Device Tree overlays represent a big change for the device tree in the kernel. Where as of old the device tree was something static, now it’s something that can change at runtime.
We could use some new tools to help us when creating them (compile time) and some kernel tooling to help when applying them (run time).

### One Line Summary

Overlays is a significant change to the kernel device tree capabilities which require new tooling for keeping their use sane. (See "Device Tree Overlays" for slides.)

### 添付資料URL

掲載なし

<a id="session-3003"></a>
## 104. Device Tree Tools

- セッション個別URL: https://blog.linuxplumbersconf.org/2015/ocw/sessions/3003.html
- Track: Device Tree Tools, Validation, and Troubleshooting
- 日時: Friday, August 21, 2015 3:25pm

### Description

What tools exist to support device tree development and debugging?  Where are they?  What new tools have been proposed or requested?

### One Line Summary

Existing and proposed tools, what they do, how to find them

### 添付資料URL

- [slides](https://blog.linuxplumbersconf.org/2015/ocw//system/presentations/3003/original/device_tree_tools.pdf)（file）

<a id="session-3111"></a>
## 105. Device Tree probe order and parallel device probing

- セッション個別URL: https://blog.linuxplumbersconf.org/2015/ocw/sessions/3111.html
- Track: Device Tree Tools, Validation, and Troubleshooting
- 日時: Friday, August 21, 2015 3:40pm

### Description

The new dynamic device tree capabilities entails marking not only the location of phandles but the references made to them. We can use that information to construct a device probe order schedule that can be used to support parallel device probing which is an obvious win for kernel boot time.

If earlier sessions run long, this one may be shortened or deleted.

### One Line Summary

The new dynamic device tree changes track references between devices, which can be used for probe ordering and parallel device probing.  (See "Device Tree Overlays" for slides.)

### 添付資料URL

掲載なし

<a id="session-3033"></a>
## 106. Device tree round up

- セッション個別URL: https://blog.linuxplumbersconf.org/2015/ocw/sessions/3033.html
- Track: Device Tree Tools, Validation, and Troubleshooting
- 日時: Friday, August 21, 2015 3:50pm

### Description

Review previous sessions, round up loose ends

### One Line Summary

Review previous sessions, round up loose ends. (No slides presented.)

### 添付資料URL

掲載なし

<a id="session-3123"></a>
## 107. GENEVE control planes

- セッション個別URL: https://blog.linuxplumbersconf.org/2015/ocw/sessions/3123.html
- Track: Networking
- 日時: Friday, August 21, 2015 

### Description

The current GENEVE implementations in the kernel (OVS and netdev) are not particularly interesting as-is. There is little available beyond unicast point-to-point links, and there is far less flexibility than what is provided by VXLAN.

What functionality do we want for GENEVE? Leave it as it is? Matching VXLAN’s features? Or something beyond? Do we want to wait for standardization? Or innovate on our own? How so?

### One Line Summary

What sort of control planes do we want for GENEVE?

### 添付資料URL

掲載なし

<a id="session-3153"></a>
## 108. Framework for hardware accelerated virtio networking for NFVs

- セッション個別URL: https://blog.linuxplumbersconf.org/2015/ocw/sessions/3153.html
- Track: Networking
- 日時: Friday, August 21, 2015 

### Description

Virtio networking offers a flexible mechanism for sharing I/O interface among virtual machines. Despite the flexibility, there are performance challenges associated with virtio/vhost-net for virtual network functions. While handling high traffic rates, the vhost-net backend can become a  bottleneck, leading to system saturation and in turn impacting virtual network function functionality.
It’s possible to address the performance bottlenecks associated with vhost-net using hardware offloads.

In this talk we present a framework for leveraging hardware features like packet parsing, classification and distribution (zero copy Rx/Tx) for accelerating vhost-net networking. We would also like to share initial results from a proof of concept based on this framework. The framework tries to address the challenges associated with both north-south and east-west based traffic for network virtual functions.

### One Line Summary

Framework is aimed at addressing performance bottlenecks associated with Vhost-net networking using hardware offloads

### 添付資料URL

掲載なし

<a id="session-3183"></a>
## 109. eBPF and tc classifier/actions

- セッション個別URL: https://blog.linuxplumbersconf.org/2015/ocw/sessions/3183.html
- Track: Networking
- 日時: Friday, August 21, 2015 

### Description

This talk/discussion provides an overview and next steps on eBPF integration into the network scheduling layer of the Linux kernel and iproute2’s tc user space tool.

### One Line Summary

Overview and next steps on eBPF tc integration.

### 添付資料URL

掲載なし

<a id="session-3189"></a>
## 110. VRF's in linux : reusing infrastructure

- セッション個別URL: https://blog.linuxplumbersconf.org/2015/ocw/sessions/3189.html
- Track: Networking
- 日時: Friday, August 21, 2015 

### Description

In the context of internet scale routing a requirement that always comes up is the need to partition the available routing tables into disjoint routing planes. A specific use case is the multi-tenancy problem where each tenant has their own unique routing tables and in the very least need different default gateways.

This is an attempt to build the ability to create virtual router domains aka VRF’s (VRF-lite to be specific) in the linux packet forwarding stack. The main observation is that through the use of rules and socket binding to interfaces, all the facilities that we are there in the infrastructure. What is missing is a handle that identifies traffic that is associated with a VRF that preserves the notions of ECMP, and general routing principles.

The driver is a cross between functionality that the IPVLAN driver and the VXLan drivers provide where a device is created and packets into/out of the routing domain are shuttled through this device. The device is then used as a handle to identify the applicable rules. The VRF device is thus the layer3 equivalent of a vlan device.

High Level aspects of proposal :
Simple overlay driver (minimal changes to current stack)
Uses the existing fib tables and fib rules infrastructure
Modeled closely after the ipvlan driver
Uses current API and infrastructure.
Applications can use SO_BINDTODEVICE or cmsg device indentifiers to pick VRF (ping, traceroute just work)
Standard IP Rules work, and since they are aggregated against the device, scale is manageable
Completely orthogonal to Namespaces and only provides separation in the routing plane (and ARP)
Debugging is built-in as tcpdump and counters on the VRF device works as is.

### One Line Summary

Proposal to implment VRF lite using existing linux constructs

### 添付資料URL

掲載なし

<a id="session-3201"></a>
## 111. IPv6: Routing Cache Removal and Going Forward

- セッション個別URL: https://blog.linuxplumbersconf.org/2015/ocw/sessions/3201.html
- Track: Networking
- 日時: Friday, August 21, 2015 

### Description

Facebook has a huge IPv6 deployment. Our internal DC traffic is mostly IPv6 and we also support end-user IPv6 traffic.  This session will talk about the scalability issue we had and the recent routing cache removal from IPv6.  It will also talk about other opportunities that we are looking at.

### One Line Summary

The recent IPv6 routing cache removal and other IPv6 improvements we are looking at in Facebook.

### 添付資料URL

掲載なし

<a id="session-3207"></a>
## 112. IPv6 and 6LoWPAN only networking for sensor devices

- セッション個別URL: https://blog.linuxplumbersconf.org/2015/ocw/sessions/3207.html
- Track: Networking
- 日時: Friday, August 21, 2015 

### Description

Modern IoT sensor devices will operate utilizing 6LoWPAN over 802.15.4 and Bluetooth Low Energy transports. They only require IPv6 and are limited in resources. The topic is on how to create a Linux networking configuration that suits these small devices.

### One Line Summary

IPv6 and 6LoWPAN only networking for sensor devices

### 添付資料URL

掲載なし

<a id="session-3213"></a>
## 113. Identifier locator addressing

- セッション個別URL: https://blog.linuxplumbersconf.org/2015/ocw/sessions/3213.html
- Track: Networking
- 日時: Friday, August 21, 2015 

### Description

Identifier Locator Addressing (or ILA) is a mechanism to implement tunnels or overlay networks that does not require encapsulation. This is done by splitting an IPv6 address into a locator part and an identifier part. The identifier (who) indicates a virtual node in the network, and the locator (where) indicates the location of the node.

ILA is intended to be a key component in virtualizing everything in a data center. This can be thought of as giving every task or container its own IP address and allow seamless migration for that.

In this talk we will discuss the implementation of ILA in the Linux kernel. The key requirements are:
   – Near zero overhead in the data path. 
   – MInimal invasiveness in the stack
   – Scalable interface managing mappings
   – Protocol correctness

### One Line Summary

A method to do network virtualization without encapsulation by leveraging the insanely large address space of IPv6.

### 添付資料URL

掲載なし

<a id="session-3255"></a>
## 114. network virtualization with BPF

- セッション個別URL: https://blog.linuxplumbersconf.org/2015/ocw/sessions/3255.html
- Track: Networking
- 日時: Friday, August 21, 2015 

### Description

The linux kernel already has software bridges, routers, tunnels and others building blocks that can be put together to construct fast and scalable virtual networks for cloud and container environments. This talk describes how one can use a little bit of TC+BPF glue code to connect them into network topologies and beyond.

### One Line Summary

how to create virtual networks by gluing kernel components with BPF

### 添付資料URL

掲載なし

<a id="session-3297"></a>
## 115. Overlay Encryption

- セッション個別URL: https://blog.linuxplumbersconf.org/2015/ocw/sessions/3297.html
- Track: Networking
- 日時: Friday, August 21, 2015 

### Description

Overlay based network virtualization provides a nice way to enable ubiquitous encryption in the data center since it avoids many of the pain points that have historically prevented its deployment. However, while the pieces are mostly there or are coming in the near future, it’s not yet something that is trivial to implement.

This is a follow on to last year’s talk, specifically focusing on what can be done with new protocols and hardware that is starting to emerge.

### One Line Summary

Ensuring that new network architectures have built-in security

### 添付資料URL

掲載なし

<a id="session-2955"></a>
## 116. Introduction to nfit, libnvdimm and libndctl

- セッション個別URL: https://blog.linuxplumbersconf.org/2015/ocw/sessions/2955.html
- Track: Persistent Memory
- 日時: Friday, August 21, 2015 

### Description

Prior to the arrival of the NFIT in ACPI 6.0, non-volatile memory was described to a system in various ad-hoc ways.  Usually only the bare minimum was provided, namely, a single system-physical-address range where writes are expected to be durable after a system power loss.  Now, the NFIT specification standardizes not only the description of PMEM, but also BLK and platform message-passing entry points for control and configuration.  This talk walks through the architecture of this implementation, how resources are presented to the system, and applications of the management library.

### One Line Summary

An overview of the new nfit driver, the libnvdimm kernel sub-system, and the libndctl userspace management library developed in support of non-volatile-memory enabled platforms.

### 添付資料URL

- [slides](https://blog.linuxplumbersconf.org/2015/ocw/system/presentations/2955/original/libnvdimm.pdf)（file）


- スケジュール掲載のアーカイブURL: https://blog.linuxplumbersconf.org/2015/ocw//system/presentations/2955/original/libnvdimm.pdf
<a id="session-2985"></a>
## 117. Persistent Memory and NUMA

- セッション個別URL: https://blog.linuxplumbersconf.org/2015/ocw/sessions/2985.html
- Track: Persistent Memory
- 日時: Friday, August 21, 2015 

### Description

It is well understood that application processes benefit from being placed close to their memory on systems with a Non-Uniform Memory Access (NUMA) architecture.  There is also benefit (albeit smaller) to locating the application and its resident set on the same NUMA node as storage controllers used for accessing data.  This latter point becomes much more important with technology such as persistent memory.  The goals of this session include:
- discuss the basic requirements for applications using persistent memory on NUMA systems
- determine the granularity of data locality
- discuss what APIs, new or existing, would be necessary to support persistent memory.

### One Line Summary

discussion on how persistent memory-aware applications will specify/query NUMA locality

### 添付資料URL

掲載なし

<a id="session-3015"></a>
## 118. Persistent Memory Usages In The Coming Decade

- セッション個別URL: https://blog.linuxplumbersconf.org/2015/ocw/sessions/3015.html
- Track: Persistent Memory
- 日時: Friday, August 21, 2015 

### Description

How will SW developers, both in-kernel and application-level, make use of features like DAX for persistent memory (pmem)?  How do we see the ecosystem around pmem evolving over the next decade?  This discussion will start with Andy describing active work from major ISVs around pmem and continue with an open discussion around some of the interesting future features that have come up.  The intention of this discussion is both to share information on current development around pmem and to brainstorm on where Linux kernel development might focus on future pmem features.

### One Line Summary

A discussion around persistent memory expectations from SW developers looking forward over the next decade.

### 添付資料URL

- [slides](https://blog.linuxplumbersconf.org/2015/ocw/system/presentations/3015/original/plumbers_2015.pdf)（file）


- スケジュール掲載のアーカイブURL: https://blog.linuxplumbersconf.org/2015/ocw//system/presentations/3015/original/plumbers_2015.pdf
<a id="session-2769"></a>
## 119. Providing Atomic Sector Updates in Software for Persistent Memory

- セッション個別URL: https://blog.linuxplumbersconf.org/2015/ocw/sessions/2769.html
- Track: Persistent Memory
- 日時: Friday, August 21, 2015 

### Description

Persistent or non volatile memory technologies are often heralded as the next big leap in storage technologies. A lot of existing software can reap the benefits of these  technologies if the storage were presented as a standard block device. Traditionally, software expects that sector writes will never be torn – either a sector makes it to storage in its entirety, or not at all. Since persistent memory is inherently byte addressable, simply presenting a persistent memory range as a block device using drivers like ‘brd’ or ‘pmem’ does not provide us with this atomicity guarantee. In this presentation, Vishal Verma will present a mechanism to solve the sector tearing problem in software using a lightweight system called the Block Translation Table (BTT), which uses existing software constructs to solve some of the unique problems of providing atomic update semantics for byte addressable memory. He will also talk about performance and scalability hotspots and discuss ideas the audience may have.

### One Line Summary

A discussion of the workings, and performance and scalability problems of the 'BTT' algorithm to provide atomic sector updates.

### 添付資料URL

- [slides](https://blog.linuxplumbersconf.org/2015/ocw//system/presentations/2769/original/lpc2015-btt.pdf)（file）

<a id="session-3459"></a>
## 120. Plumbers PostMortem Discussion

- セッション個別URL: https://blog.linuxplumbersconf.org/2015/ocw/sessions/3459.html
- Track: Workshops
- 日時: Friday, August 21, 2015 5:00pm

### Description

Come and give Audience feedback about what worked and what didn’t work in Plumbers this year.

### One Line Summary

Come and give Audience feedback about what worked and what didn't work in Plumbers this year.  Feedback in person is gratefully received but feedback to mailto:contact@list.linuxplumbersconf.org is also gratefully accepted

### 添付資料URL

掲載なし

# Wiki Topics 補足

2015年はOCW形式。開催スケジュールの個別URL付き枠120件を収録。Descriptionは個別ページのAbstract原文。One Line Summaryは別フィールドに保持。資料URLは個別ページの原記載を保持し、スケジュールに別のアーカイブURLがある場合はschedule_urlも収録。添付ファイル本体の取得・リンク有効性検査は実施していない。Wiki Topicsの採用済み14トピックは補足に収録し、個別セッション数には加算しない。WikiのTentative/Proposed等は原文通り。個別開始時刻が未掲載の38件は空欄のまま保持。全体の16枠も補足に収録。

## Android/Mobile（採用済み）

https://wiki.linuxplumbersconf.org/2015:android

Android/Mobile




The Linux Plumbers 2015 Android/Mobile track focuses on finding solutions for kernel changes and other plumbing related issues that Android and other mobile solutions make use of but are not yet upstream.




Key Attendees (Tentative)


 Karim Yaghmour

 Juri Lelli

 Pierre Langlois

 Serban Constantinescu

 Daniel Vetter

 Rob Clark

 Greg Hackmann

 Rom Lemarchand

 Maarten Lankhorst

 Sumit Semwal

 Colin Cross

 Laura Abbott

 Bahdri Sridharan

 Andrzej Pietrasiewicz

 Bernhard Rosenkränzer

 Zach Pfeffer

 John Stultz

 Greg KH

 Mark Gross





Schedule




The schedule of the 2015 Android/Mobile Plumbers Micro Conference is as follows. Note presentation slides can be found on the Plumbers page by following the links to the abstracts:


 Up-streaming updates:

 State of staging

 ADF/KMS/Sync

 Remaining issues with ION/cenalloc/dma api

 Difficulties remaining on migrating to ConfigFS gadget (tentative)

 Blockers to running mainline (tentative)



 Single binary image for multiple devices:

 Android One

 x86

 Ara



 Binder to KDBus

 Toybox merging in AOSP (tentative)

 How do we improve vendor AOSP forks?





Discussion notes




This is a good place to record notes from your session.  All too often, if notes were not written down, the session might as well not have happened.




Contact




Runner: Karim Yaghmour karim.yaghmour@opersys.com

### 添付資料URL

掲載なし

## Boot, Init, and Config（採用済み）

https://wiki.linuxplumbersconf.org/2015:boot_init_and_config

Boot, Init, and Config



The Linux Plumbers 2015 Boot, Init, and Config track focuses on system bringup.



System bringup is a critical part of the lifecycle of the system.  
There are many different ways to configure the kernel based on how its 
going to be used.   This miniconference will focus on securely bringing up
linux in containers and embedded systems - and ways to improve size, 
timing, and interfaces with other system components.   




Attendees


 John Mehaffey (tiny, boot, config)

 Nicholas Pitre (config)

 Grant Likely (boot)

 Kate Stewart (config, boot) 

 Rony G. Flatscher (dbus)

 Matthew Garrett (secure boot)

 Josh Triplett (tiny, boot)

 Daniel Watkins (init/cloud-init)

 … please add your name and interest area 





Proposed Topics (Tentative)


 Configuring linux to run in containers 
Cloud computing and containerization trends are influencing how a Linux based OS is put together - from how software components are provisioned and configured to how the system initializes.

 Tinification 
Looking at ways build and configure linux to minimize Kernel size and bloat. 

 Tuning systemd for embedded/fastboot 
Looking at improving support for customized boot sequences, including secure boot, kdbus, and proper allocation of resources in size constrained spaces.

 Research topics in fastboot 
- Initializing memory pool off of fastpath 
- Deferring initcalls for certain subsystems 
- Effective use of parallelism and multicore in system bringup

 Modern, scalable network based operating system installation 
Can we do better than PXE? (proposer: Curt Brune curt@cumulusnetworks.com)





Schedule




The actual schedule of the 2015 Boot, Init, and Config Plumbers Micro Conference will be determined once we figure out where the critical mass is, and make sure the sessions align with it.  The following individuals have agreed to present if their session lines up with the themes emerging.



 “Reducing the ARM Linux kernel size without losing your mind” - Nicolas Pitre

 “Making D-Bus easier to use” - Rony G. Flatscher

 etc…





Discussion notes




This is a good place to record notes from your session.  All too often, if notes were not written down, the session might as well not have happened.




Contact




Runners: Kate Stewart stewart@linux.com, John Mehaffey mehaf@gedanken.com, Matthew Wilson mswilson@gmail.com

### 添付資料URL

掲載なし

## Checkpoint-Restart（採用済み）

https://wiki.linuxplumbersconf.org/2015:ckptrestart

Checkpoint/Restore




The Linux Plumbers 2015 Checkpoint/Restore track focuses on…




Key Attendees


 Pavel Emelyanov (Odin, ex Parallels)

 Saied Kazemi (Google)

 Tycho Andersen (Canonical)

 Serge Hallyn (Canonical)

 Kir Kolyshkin (Odin, ex Parallels)

 Christopher Covington (Qualcomm)

 Ruslan Kuprieiev (CloudLinux)

 Sanidhya Kashyap (Georgia Institute of Technology)

 Laurent Dufour (IBM)

 Adrian Reber (Red Hat)





Proposed Topics (Tentative)


 Integration with OpenVZ/LX[CD]/Docker/Weston

 Non-standard usage

 CRIU on Android

 Live migration with p.haul

 Performance

 Testing?

 Lazy memory restore

 New features required for containers C/R

 Live demoes

 CRIT

 PowerPC port





Schedule




TBD




Discussion notes




This is a good place to record notes from your session.  All too often, if notes were not written down, the session might as well not have happened.




Contact




Runner: Pavel Emelyanov xemul@parallels.com

### 添付資料URL

掲載なし

## Containers（採用済み）

https://wiki.linuxplumbersconf.org/2015:containers

Containers




The Linux Plumbers 2015 Containers track focuses on…




Key Attendees


 LXC upstream (Stéphane Graber, Serge Hallyn, Tycho Andersen, …)

 OpenVZ upstream (Kir Kolyshkin, Pavel Emelyanov, James Bottomley, Maxim Patlasov, Sergey Bronnikov, Andrew Vagin)

 Docker upstream

 Google container folks (Saied Kazemi)

 kubernetes upstream (Tim Hockins, Brendan Burns)

 rkt upstream

 systemd upstream (Lennart Poettering, Tom Gundersen, …)

 Kernel namespace/cgroup maintainers (Tejun, Eric, …)

 fs maintainers to talk about overlay, xfs reflinks, etc





Proposed Topics (Tentative)


 Container device isolation

 Resource restrictions: caps, disk quotas, network, io, cpu, memory

 Live migration

 Container project updates

 User namespaces and other container security features

 Systemd-vs-systemd – running an OS container with systemd inside on a systemd managed host





Schedule




TBD




Discussion notes




This is a good place to record notes from your session.  All too often, if notes were not written down, the session might as well not have happened.




Contact




Runners: Stéphane Graber stgraber@ubuntu.com, Kir Kolyshkin kir@openvz.org, Brandon Philips brandon.philips@coreos.com

### 添付資料URL

掲載なし

## Development Tools（採用済み）

https://wiki.linuxplumbersconf.org/2015:development_tools

Development Tools




The Linux Plumbers 2015 Development Tools track focuses on the use of tools in the Linux kernel.



Please note that this track is a tutorial with presentations as opposed to the traditional Plumbers Microconference.  There will be a mixture of interactive tutorials (at least Coccinelle) and shorter presentations on tool-related topics.




Key Attendees


 Julia Lawall

 Shuah Khan

 Michael Godfrey

 Behan Webster





Proposed Topics (Tentative)


 Coccinelle tutorial, Julia Lawall

 Testing and debugging tools, Shuah Khan

 Issues with copy and pasting Linux kernel code, Michael Godfrey

 LLVM/Clang and the Linux kernel, Behan Webster and/or colleagues





Schedule




The schedule of the 2015 Development Tools track is as follows. Note presentation slides can be found on the Plumbers page by following the links to the abstracts:


 Session 1 - TBD

 etc…





Discussion notes




This is a good place to record notes from your session.  All too often, if notes were not written down, the session might as well not have happened.




Contact




Runner: Julia Lawall Julia.Lawall@lip6.fr

### 添付資料URL

掲載なし

## Device Tree Tools, Validation, and Trouble Shooting（採用済み）

https://wiki.linuxplumbersconf.org/2015:device_tree_tools_validation_and_trouble_shooting

Device Tree Tools, Validation, and Troubleshooting




The Linux Plumbers 2015 Device Tree Tools, Validation, and Troubleshooting track focuses on
tools (programs and scripts), techniques, and core support to enable creation of correct device trees
and to support troubleshooting and debugging of incorrect device trees, drivers, and subsystems.



The tools encompass static (build and pre-boot) and dynamic (boot and run-time) environments.



Areas of interest include


 inspection

 verification and validation

 troubleshooting

 debugging

 core support for debugging

 unit tests

 designing and implementing drivers for effective debugging

 impact of overlays (boot and run-time updates to the device tree)

 bindings

 documentation





Topics unrelated to the overall track but of current Device Tree interest may be accepted if there is available time


 ordering of device creation and driver binding





Key Attendees




“y” == expect to attend

conflicts are listed after ”—”



 y Rob Herring (device tree maintainer, bindings) — Android mini conf

 y Grant Likely (device tree maintainer)

 Tomasz Figa (validation)

 y Benoit Cousson (validation)

 Fabien Parent (validation)

 Stephen Warren (validation)

 y David Gibson (dtc) — KVM Forum

 other libfdt and dtc contributors tbd

 y Pantelis Antoniou (overlays)

 y Mark Rutland (bindings)

 Pawel Moll (bindings)

 Ian Campbell (bindings)

 Kumar Gala (bindings)

 y Frank Rowand

 Thomas Petazzoni

 n Geert Uytterhoeven

 Olof Johansson

 n Arnd Bergmann

 y Matt Porter

 y Jon Loeliger

 y Mark Rutland

 y Gaurav Minocha

 y Guenter Roeck

 etc…





Proposed Topics (Tentative)




These are suggestions from email discussion, not yet a proposed schedule…



 Supported and not supported overlay usecases

 I guess Kernel-driven overlay application (it's been called “quirks” elsewhere) would fall under this? It's rather scary, and would need fairly strict rules to be feasible and remain maintainable, which is going to limit where it can be used.



 Tools for overlays - I think overlays has created new challenges in validation and a need for new tools.

 How to test an overlay applies?



 Generating a dtb from dts + overlay dts.

 Generating an overlay from a diff of old and new dts (overlay as a way to update old dtbs)

 Shrinking the binding review fire hose. How to improve binding documentation structure and review.

 Standardizing Android dtb handling.

 If people are going to package a kernel and DTB together, it would be nice if they could at least be easily decomposed (using something like FIT).



 Appended DTB for arm64? Not liked by upstream, but already in use.

 Clean up of existing hardware-specific bindings to conform to the generic bindings, working dts files in the kernel tree, and bring consistency to the documentation style/syntax.

 Create a qemu instance from a device tree description.



 Topic N - TBD

 etc…





Schedule




The schedule is still under construction and should be considered very fluid.



The schedule of the 2015 Tracing Plumbers Microconference is as follows. Note presentation slides can be found on the Plumbers page by following the links to the abstracts:


 Overlays (title TBD) - Pantelis Antoniou, maybe additional

 The below may be incorporated or may be separate sessions

 new tools needed; test, validation, generating

 supported and not supported usecases

 how overlays are used at Juniper - Guenter Roeck





 Future direction of device tree (title TBD) - Pantelis Antoniou

 existing tools, what they do, how to find them (title TBD) - Frank Rowand

 tools that have been proposed by have not gained traction - Frank Rowand, maybe additional

 generate config from DT source

 build version embedded in .dtb

 more…



 binding review firehose (title TBD) - TBD

 Clean up of existing hardware-specific bindings to conform to the generic bindings, working dts files in the kernel tree, and bring consistency to the documentation style/syntax - maybe twist Matt Porter's arm

 standardized Android dtb handling (maybe belongs in the Android track?) - TBD

 Appended DTB for ARM64 - TBD

 what documentation, tutorials exist? what is needed? - TBD





Discussion notes




This is a good place to record notes from your session.  All too often, if notes were not written down, the session might as well not have happened.




Contact




Runner: Frank Rowand frowand.list@gmail.com

### 添付資料URL

掲載なし

## Energy-aware Scheduling and CPU Power Management（採用済み）

https://wiki.linuxplumbersconf.org/2015:energy-aware_scheduling

Power Management and Energy-aware Scheduling




The Linux Plumbers 2015 Power Management and Energy-aware Scheduling track focuses on topics related to power management frameworks, task scheduling in relation to power/energy optimization, and platform power management mechanisms. The goal is to facilitate cross framework and cross platform discussions that can help improve power and energy-awareness in Linux.



Topic proposals may relate to (but not restricted to):


 Frequency/performance scaling (cpufreq).

 CPU idle states (cpuidle).

 Thermal management and scheduling under themal constraints.

 ACPI power management.

 Device Tree representation of platform power management features.

 Energy-aware scheduling decisions (minimize energy).

 Power domains management.

 Integration of system-wide PM (system suspend etc) with runtime PM.

 Measurement techniques and tools.





Key Attendees


 Rafael J. Wysocki

 Morten Rasmussen (confirmed)

 Peter Zijlstra

 Vincent Guittot

 Preeti Murthy

 Lorenzo Pieralisi

 Sudeep Holla

 Kristen Carlson Accardi

 Amit Kucheria

 Kevin Hilman

 Dietmar Eggemann

 Ulf Hansson

 Mike Turquette





Proposed Topics (Tentative)




Please add topic proposals here:



 Energy-model driven scheduling (Morten Rasmussen morten.rasmussen@arm.com): Making the task scheduler energy-aware. Proposed scheduler modifications and necessary steps to get them merged.

 DT power domain bindings (Lorenzo Pieralisi lorenzo.pieralisi@arm.com): Describing linkage between idle states and power domain DT bindings. Interaction between CPU PM notifiers and power domains. Linkage of device idle states to CPUidle state through DT bindings relationship. System suspend state and wake-up sources DT description.

 ACPI power management on arm64 (Lorenzo Pieralisi lorenzo.pieralisi@arm.com): Describing CPUidle states and discuss S-state definition for arm64 systems. CPUfreq arm64 ACPI requirements. Introduction to PSCI. Debate ACPI devices power management on ARM systems.

 New ACPI Specification Changes Related to Power Management (Rafael J. Wysocki rafael@kernel.org): Outilne recent changes in the power management part of the ACPI specification and discuss their meaning to Linux. Discussion.

 Linux Power Management Core Changes in the Last Several Months (Rafael J. Wysocki rafael@kernel.org): Overview of the changes made to the Linux kernel's power management core code over the last few kernel releases.

 Hardware P-States (Kristen Carlson Accardi kristen@linux.intel.com): Overview of the hardware P-states (HWP) mechanism implemented in recent Intel processors and support for it in the intel_pstate driver.

 Power Management On IBM POWER platforms (Preeti U. Murthy preeti@linux.vnet.ibm.com): Results and takeaways of testing and profiling power management on POWER platforms and challenges involved in enabling power management on Open Power platforms. 

 Power Model driven thermal management (Javi Merino javi.merino@arm.com): Overview of the power allocator thermal governor, a simple CPU power model and a few ideas on integrated thermal management in linux.

 Unifiy idle management of CPUs and IO devices (Kevin Hilman khilman@kernel.org): Discuss goals and challenges of using runtime PM and genpd for CPU and cluster idle management.

 Scheduler-driven CPU frequency selection (Michael Turquette mturquette@linaro.org): Discuss current design and gather feedback on a cpu capacity-based frequency scaling policy. Includes changes to scheduler and CPUfreq core. Discussion.





Schedule




The schedule of the 2015 Energy-aware Scheduling and CPU Power Management Plumbers Microconference is as follows. Note presentation slides can be found on the Plumbers page by following the links to the abstracts:


 Session 1 - TBD

 etc…





Discussion notes




This is a good place to record notes from your session.  All too often, if notes were not written down, the session might as well not have happened.




Contact




Runners: Morten Rasmussen morten.rasmussen@arm.com, Rafael J. Wysocki rafael@kernel.org

### 添付資料URL

掲載なし

## File and Storage Systems（採用済み）

https://wiki.linuxplumbersconf.org/2015:file_and_storage_systems

File and Storage Systems




The Linux Plumbers 2015 File and Storage Systems track focuses on userspace interactions with ongoing work in the filesystem and IO stack.  The format will resemble past years, in which a discussion is framed with a few slides or some opening comments before broadening into a larger discussion involving the attendees.




Possible Attendees



Here are some suggestions of people who either have run discussions at past events (not necessarily Plumbers) or might have some interesting things to contribute here.  This list is neither conclusive nor definite.



 The usual suspects (Ted T'so, Dave Chinner, Chris Mason, James Bottomley, Al Viro, Hannes Reincke, Christoph Hellwig, Jens Axboe, Jan Kara, Mingming Cao, Andy Grover, Eric Sandeen, Lukas Czerner, Martin Petersen, Mike Snitzer…)?

 People who might not ordinarily attend a file systems & storage summit?

 You.





Interested/Actual Attendees



Please put your name here if you'd like to attend, so that we can confirm who's coming.  Also, they won't give us a slot or open the talk proposal registration system until there are enough people listed here.



 Darrick Wong

 Boaz Harrosh

 Mingming Cao

 Shirley Ma

 Chuck Lever

 Jaegeuk Kim

 Mike Kravetz

 Adrian Palmer

 Bart Van Assche

 Sergey Senozhatsky

 Chris Mason

 Shaohua Li

 Dan Williams

 Jeff Moyer

 Matias Bjørling

 Martin K. Petersen

 Theodore Ts'o

 Raghu Chandrasekar

 Nick Black

 Albert Chen

 Jim Malina





Plumbers is sold out; there are no more spaces.




Proposed Topics (Tentative)



If you would like to add to this list, use the [Edit] button below.  If you'd like to take a more active role in coordinating discussion of a particular topic, either add your name here or email Darrick.



 Innovative I/O interfaces, throwing better I/O error reports at filesystems, and snapshotting?

 Filesystem-level encryption in ext4/f2fs (Ted Ts'o, Jaeguk Kim)

 Ongoing exploration of SMR drives (Adrian)

 Online filesystem scrub/fsck? (Darrick)

 Persistent memory? In memory database?  In memory filesystems? (Kravetz?) (there's a persistent memory miniconf too, apparently…)

 Progress in exporting the same file system via NFS and Samba  (Shirley?)

 Hot data tracking?

 Smart block layer support for traditional file systems like xfs and ext4 (Dave? Ted?)

 RDMA support in NFS and Samba: bi-directional(?) RDMA (Chuck?)

 Support for user space file systems like Gluster and Ceph

 Continuing themes from the 2015 LSF/MM?

 Rich ACL?

 Persistent reservation support for H.A. SCSI target clusters - see e.g. Using the DLM as a Distributed In-Memory Database. (Bart)

 MD raid 5/6 caching layer (Shaohua)

 Massive numbers of short-lived iSCSI sessions (Nick Black, Google)

 Generic Device Mapper approach for SMR (Albert Chen / Jim Malina - Western Digital)

 …other topics that haven't been discussed lately?





Please create proposals for specific discussion topics here: https://linuxplumbersconf.org/2015/ocw/events/LPC2015/proposals/




Schedule




The schedule of the 2015 File and Storage Systems Plumbers Microconference is as follows. Note presentation slides can be found on the Plumbers page by following the links to the abstracts.  (This won't be possible until this microconf is accepted by the LPC committee.)



 Session 1 - TBD

 etc…





Discussion notes




This is a good place to record notes from your session.  All too often, if notes were not written down, the session might as well not have happened.




Contact




Runner: Darrick Wong darrick dot wong at oracle dot com



(If you also would like to be involved with the organization of this microconf, please contact Darrick.)

### 添付資料URL

掲載なし

## Graphics Mode Settings and Wayland（採用済み）

https://wiki.linuxplumbersconf.org/2015:graphics_modesettings_wayland

Graphics: mode settings, Wayland and more




The Linux Plumbers 2015 Graphics track is focusing on making sure that we discuss next steps regarding graphics/modesetting and standards for the next 6 to 12 months. With so much convergence taking place right now, there is a great opportunity to make things smooth and work across architectures and platforms better than ever.



We should continue the work of improving DRM drivers all around, and make them as cohesive as possible.



To make this microconference a success, representatives from Intel, NVidia, AMD, ARM, Samsung and anyone else with a GPU (or GPU experience) should attend. Interests are running far and wide for better graphics with comprehensive layer management. Let's give it to them.




Dates and Location



You can find out all about Linux Plumbers Conference at https://linuxplumbersconf.org/2015/. It will take place in Seattle, WA, USA from August 19th to 21th at the Sheraton Hotel Downtown.




Participants



Please add yourself to this list if you are interested to attend the microconference. The proposed topics have garnered interest from the following people but additions to the topics are of course welcomed and so is the participation of anyone else willing to contribute to the microconference.



 Daniel Vetter

 Rob Clark

 Daniel Stone (yes)

 Javier Martinez (yes) 

 Thierry Reding

 Jasper St. Pierre (yes)

 Laurent Pinchart (yes)

 Nicolas Dufresne (yes)

 Derek Foreman (yes)

 Bryce Harrington (yes)

 Jon Cruz

 Sumit Semwal (yes)

 Anand Balagopalakrishnan (yes)

 Many others (all welcome) 





Proposed Topics




This Plumbers microconference should cover 


 Atomic Modesetting - current state of affairs, what to do next, feature gaps from ADF

 Buffer allocation - future iteration of GBM

 Secure data paths - allocation and usage of buffers requiring a verified secure pipeline

 Explicit fencing - APIs and implementation strategies for explicitly-fenced usage and integration with legacy implicit pipelines

 Display writeback - interface design and interop with media encode engines

 Media decoding and direct rendering paths (including live sources)

 Wayland/Weston - Adoption review and share real-world experiences

 Testing:

 Automated display testing 

 Hardware availability and pooling together

 Continuous integration testing (including real-world scenarios)



 Khronos privileged conversation (if required) to go over things that could be discussed while in Seattle





Note: The final schedule will be posted on the linuxplumbersconf.org website on the Schedule page. Presentation slides will be available on the Plumbers page by following the links to the abstracts. 




Microconference complementarity




Attendees to this microconference are most likely to be interested in the Android microconference also. It would be great if those two microconference could not overlap from a scheduling stand-point.




Discussion notes




Notes from the discussion are available in the Etherpad: https://etherpad.openstack.org/p/LPC2015_Graphics




Contact




Confirmed runner: Daniel Stone (daniels@collabora.com)



Image credits: Seattle Sunrise by CEBImagery (source: http://bit.ly/1LyXDtZ)

### 添付資料URL

- https://wiki.linuxplumbersconf.org/lib/exe/fetch.php?hash=bb05d6&media=https%3A%2F%2Fwww.collabora.com%2Fassets%2Fimages%2Fmisc%2Flpc-graphics-microconference.png

## LLVM（採用済み）

https://wiki.linuxplumbersconf.org/2015:llvm

LLVM




The Linux Plumbers 2015 LLVM Microconferences is focusing on increasing the use of LLVM related technologies surrounding Linux.



Over the past year there has been a lot of progress in patching LLVM and Clang in order to be able to compile the Linux kernel. Over the same time period progress was made on building both the Linux kernel and Android userspace. Clang is also now distributed as part of the Android NDK. We now need to get patches accepted to support the use of clang/LLVM to build the Linux Kernel and more of the Android code base.



This microconference will gather interested parties from the Linux kernel, LLVM, and Android communities to plan the most expedient way to get support for using Clang upstream.




Key Attendees


 Alexei Starovoitov (eBPF)

 Behan Webster (clang static analyzer)

 Bernhard Rosenkranzer (OpenMandriva)

 Jan-Simon Moeller (LLVMLinux)

 Khem Raj (yocto)

 Konstantin Serebryany (Sanitizers)

 Mark Charlebois (Dronecode)





Proposed Topics (Tentative)




Topics to be discussed at this microconference:


 Adding extensions to LLVM/Clang to be used in the kernel code acceptable to the LLVM/clang community.

 Solutions to getting the Integrated Assembler to work for the Linux and Android code

 Leveraging LLVM tools like Address/Thread/Memory Sanitizers and Static Checker for kernel debugging

 Getting clang support into yocto

 The use of clang for Linux Distributions

 Distro support of patches to clang, or adding recent versions of clang

 Other LLVM technologies like LLD, LLDB, and libstdc++

 Collaboration between LLVM and gcc communities

 Other topics relating to LLVM such as eBPF, openCL, emscripten





Schedule




The schedule of the 2015 LLVM Plumbers Microconference is as follows. Note presentation slides can be found on the Plumbers page by following the links to the abstracts:


 Session 1 - TBD

 etc…





Discussion notes




This is a good place to record notes from your session.  All too often, if notes were not written down, the session might as well not have happened.




Contact




Runner: Behan Webster behanw@converseincode.com

### 添付資料URL

掲載なし

## Networking（採用済み）

https://wiki.linuxplumbersconf.org/2015:networking

Networking




Welcome to the “Networking” microconference of Plumbers 2015. This track was named “Network Virtualization” in previous years. Upon request we are opening up the spectrum for this year. We have however decided to define a list of interesting networking topics that we want to focus on. We will therefore favour discussion topics which fall into the following list of topics:


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

 Alexander Duyck

 Simon Horman

 Daniel Borkmann

 John Linville

 Jesse Gross

 Alexei Starovoitov

 Shrijeet Mukherjee (VRF deux)

 Madhu Challa

 John Fastabend

 Brandon Philips (CoreOS, flannel)

 Marcel Holtmann

 Steffen Klassert

 Nicolas Dichtel

 Sridhar Samudrala

 …







Proposed Topics (Tentative)




List your proposed topics below:



 A new VRF proposal - Shrijeet Mukherjee

 Scalable kernel-only encapsulation for containers: Flow based tunneling with standard net_devices - Thomas Graf

 IPv6 underlays: What is needed? what performance issues will we run into?

 IPv6 routing issues and recent changes - Martin Lau

 Scalable VRF implementation w/ Linux: Is netns+ip rules+routing enough? - Fold into Shrijeet's discussion

 Geneve Openflow API for OVS. - Madhu

 tc and eBPF classifier/action short overview and todo's - Daniel

 Next steps in eBPF - Daniel / Alexei

 Control plane options for GENEVE - John Linville

 Overlay encryption - Jesse

 Kernel framework for hardware accelerated Virtio networking - Varun Sethi

 I/O Accelerator Virtualization for NFVs - Varun Sethi

 Identifier Locator Addressing: Network virtualization without encapsulation using IPv6 - Tom Herbert

 Small footprint 6LoWPAN + IPv6 only networking option - Marcel Holtmann

 Coordinated software (eBPF/tc/OVS/DPDK) and hardware dataplanes - John Fastabend





Schedule




The schedule will be announced closer to the event.




Discussion notes


 Priorities for no overlap:

 Network offload

 Containers

 Wireless network

 Network management







Contact




Runners:


 Thomas Graf tgraf@suug.ch

 Tom Herbert tom@herbertland.com

### 添付資料URL

掲載なし

## Performance and Scalability（採用済み）

https://wiki.linuxplumbersconf.org/2015:performance_and_scalability

Performance and Scalability



The Linux Plumbers 2015 microconference – Performance and Scalability track focuses on scalability, both upwards and downwards as well as up and down the stack. There are quite a few active projects and efforts of a wide range that aim at enhanncing performance and scalability both in the Linux kernel and in user-space projects. In fact, one of the purposes of this forum is for developers from different projects to meet and collaborate – both kernel developers and researchers, doing more experimental work. After all, for the user to see good performance and scalability, all relevant projects must perform and scale well.



Because performance and scalability are very generic topics, this track is aimed at issues that are not addressed in other, more specific sessions, such as networking.



The structure will be similar to what was followed the previous years (2011, 2012 and 2013): about 30 minutes per subject with discussion.




Key Attendees (Tentative)


 Andi Kleen

 Dave Hansen

 Davidlohr Bueso

 Iftekhar Ahmed

 Ingo Molnar

 Mathieu Desnoyers

 Paul McKenney

 Paul Turner

 Peter Zijlstra

 Raghavendra KT

 Rik van Riel

 Tim Chen

 Thomas Gleixner

 Samy Al Bahra

 Steven Rostedt

 Waiman Long





Actual Attendees




 Please put your name here if you'd like to attend, so that we can confirm who's coming. This includes interested folks not in the key attendees list.



 Davidlohr Bueso

 Paul McKenney

 Rik van Riel

 Tim Chen

 Mathieu Desnoyers (unavailable on Aug. 20)

 Peter Hurley

 Waiman Long

 Sanidhya Kashyap





Proposed Topics (Very Tentative)


 Futex scaling – userspace spinlocks (rtmutex spin on owner), state of hb locking.

 Address space scaling – are we there yet?

 Queued spinlocks – assuming still pending and not merged by then. Do we need xen/kvm folks for the paravirt stuff?

 Tooling (ftrace/perf new features?)

 Lockless algorithms

 Testing and validation

 Standardization and RCU

 Queued lock used in conjunction with TSX

 Userspace per-cpu critical sections

 Hypervisor/VMM Locking primitives





Schedule




The schedule of the 2015 Tracing Plumbers Microconference is as follows. Note presentation slides can be found on the Plumbers page by following the links to the abstracts:


 Session 1 - TBD

 Session 2 - TBD

 etc…





Discussion notes




This is a good place to record notes from your session.  All too often, if notes were not written down, the session might as well not have happened.




Contact




Runner: Davidlohr Bueso dave@stgolabs.net

### 添付資料URL

掲載なし

## Persistent Memory（採用済み）

https://wiki.linuxplumbersconf.org/2015:persistent_memory

Persistent Memory




The Linux Plumbers 2015 Persistent Memory track focuses on the kernel and userspace plumbing for byte-addressable (direct cpu load/store) persistent memory.




Key Attendees (Prospective)


 Kernel/Drivers: libnd, pmem, blk, and btt maintainers / reviewers

 Kernel/FS+MM: DAX developers, MM developers

 Userspace/Management: libndctl, storage management app developers, install and init maintainers

 Userspace/Applications: nvml maintainers / reviewers





Interested Attendees / Presenters




List your name here to indicate interest in attending or presenting.  Other topic proposals besides the ones listed above are also welcome.



 Dan Williams

 Vishal Verma

 Andy Rudoff

 Toshi Kani

 Rob Elliott

 Linda Knippers

 Jeff Moyer

 Raghu Chandrasekar

 Betty Dall

 Greg Pearson

 Keith Packard

 Justin Vreeland

 Heather Brown

 Stephan Diestelhorst





Proposed Topics (Tentative)


 Overview: ACPI 6 NFIT (NVDIMM Firmware Interface Table)

 LIBND: non-volatile memory Kernel subsystem

 I/O: PMEM/BLK access mechanisms and cpu cache management

 I/O: Overview of the Block Translation Table (for providing atomic sector updates)

 MM: The “struct page” problem

 Management: userspace infrastructure for device/capacity management, installer support…

 Userspace applications: libraries like NVML for managing DAX

 Kernel applications: RAID stripe cache

 Performance: discuss hotspots in pmem, btt, block layer, and other areas of the kernel, and in applications

 NUMA support: how will applications query numa locality for a given file or memory address?

 Error handling: How are errors propagated to applications?  How are they cleared?





Schedule




The schedule of the Microconference is as follows. Note presentation slides can be found on the Plumbers page by following the links to the abstracts:


 Session 1 - TBD

 etc…





Discussion notes




This is a good place to record notes from your session.  All too often, if notes were not written down, the session might as well not have happened.




Contact




Runner: Dan Williams dan.j.williams@intel.com

### 添付資料URL

掲載なし

## Thermal（採用済み）

https://wiki.linuxplumbersconf.org/2015:thermal

The Linux Plumbers 2015 thermal track focuses on finding solutions for kernel and userland changes for standardized thermal management in Linux systems.




Key Attendees (Tentative)


 Eduardo Valentin 

 Rui Zhang

 Javi Merino

 Punit Agrawal

 Łukasz Majewski

 Kapileshwar Singh

 Srinivas Pandruvada

 Lina Iyer





Proposed Topics (Tentative)


  Overview of the thermal framework - Eduardo Valentin

  Improvements on OF-thermal - Eduardo Valentin

  Thermal class: split of temperature sensor device and thermal driver - Eduardo Valentin

  Devfreq vs. clock cooling - Eduardo Valentin

  Thermal Docbook - Eduardo Valentin

  Closed loop control governors - Javi Merino - ARM

  Power model based policies - Javi Merino - ARM

  Automated thermal subsystem tests - Łukasz Majewski - Samsung

  Per Core/GPU on-chip thermal zones - Łukasz Majewski - Samsung

  User space (tools/governors/interfaces) - Srinivas Pandruvada - Intel

 Better support for virtual temperature sensors which depends on other sensors. 

 Support for Linux IIO style scale and offset in thermal zone temperature calculation.

 /dev interface for pushing thermal samples instead of raw read of temperature to improve performances and push sample instead of pull from user space.



  Co-ordination among cooling devices in the system - Punit Agrawal - ARM

  Open loop control governors

  Sensor API





Schedule




Discussion notes




This is a good place to record notes from your session.  All too often, if notes were not written down, the session might as well not have happened.




Contact




Runner: Eduardo Valentin edubezval@gmail.com

### 添付資料URL

掲載なし


# マイクロカンファレンス・ワークショップ全体枠（16件）

個別セッションとは別の全体枠。DescriptionはスケジュールのOne Line Summary。

## LLVM

- URL: https://blog.linuxplumbersconf.org/2015/ocw/events/LPC2015/schedule/#track-435
- 日時: Wednesday, August 19, 2015 10:00am – 12:30pm

The Linux Plumbers 2015 LLVM Microconferences is focusing on increasing the use of LLVM related technologies surrounding Linux. Etherpad https://etherpad.openstack.org/p/LPC2015_LLVM

## Development Tools Tutorial

- URL: https://blog.linuxplumbersconf.org/2015/ocw/events/LPC2015/schedule/#track-423
- 日時: Wednesday, August 19, 2015 2:00 – 4:30pm

Given how important tools are to productivity of developers and the quality of their code, the time devoted to these tutorials promises to be time well spent! Etherpad: https://etherpad.openstack.org/p/LPC2015_Development_Tools

## Containers

- URL: https://blog.linuxplumbersconf.org/2015/ocw/events/LPC2015/schedule/#track-417
- 日時: Thursday, August 20, 2015 9:30am – Noon

The goal of this microconference is to get these diverse groups together to discuss the long-standing issue of container device isolation, live migration, security features such as user namespaces, and the dueling-systemd challenges stemming from running systemd both within containers and on the host OS Etherpad: https://etherpad.openstack.org/p/LPC2015_Containers

## Graphics, mode setting and Wayland

- URL: https://blog.linuxplumbersconf.org/2015/ocw/events/LPC2015/schedule/#track-483
- 日時: Thursday, August 20, 2015 9:30am – Noon

Although the Year of the Linux Desktop has yet to arrive, Linux graphics support continues to be critically important for a great many users. Automotive, smartphones, digital signage, smart TVs, and more, have come to rely on our display stack. This microconference will cover a number of topics including atomic mdoesetting in KMS, buffer allocation, verified-secure graphics pipelines, fencing and synchronisation, Wayland, and more. Etherpad notes: https://etherpad.openstack.org/p/LPC2015_Graphics

## Thermal

- URL: https://blog.linuxplumbersconf.org/2015/ocw/events/LPC2015/schedule/#track-477
- 日時: Thursday, August 20, 2015 9:30am – Noon

The Linux Plumbers 2015 thermal track focuses on finding solutions for kernel and userland changes for standardized thermal management in Linux systems. Etherpad: https://etherpad.openstack.org/p/LPC2015_Thermal

## Android/Mobile I

- URL: https://blog.linuxplumbersconf.org/2015/ocw/events/LPC2015/schedule/#track-429
- 日時: Thursday, August 20, 2015 1:30 – 4:00pm

So when is the year of the Linux desktop? It seems that these developers are too busy working on mobile devices to have time to ask that question! Etherpad: https://etherpad.openstack.org/p/LPC2015_Android_Mobile

## Checkpoint/Restore

- URL: https://blog.linuxplumbersconf.org/2015/ocw/events/LPC2015/schedule/#track-405
- 日時: Thursday, August 20, 2015 1:30 – 4:00pm

Checkpoint/restart technology is the basis for live migration as well as its traditional use to take a snapshot of a long-running job. Etherpad: https://etherpad.openstack.org/p/LPC2015_Checkpoint_Restore

## File and Storage Systems

- URL: https://blog.linuxplumbersconf.org/2015/ocw/events/LPC2015/schedule/#track-465
- 日時: Thursday, August 20, 2015 1:30 – 4:00pm

The Linux Plumbers 2015 File and Storage Systems track focuses on userspace interactions with ongoing work in the filesystem and IO stack. Etherpad: https://etherpad.openstack.org/p/LPC2015_File_and_Storage_Systems

## Android/Mobile II

- URL: https://blog.linuxplumbersconf.org/2015/ocw/events/LPC2015/schedule/#track-507
- 日時: Thursday, August 20, 2015 5:00 – 7:30pm

So when is the year of the Linux desktop? It seems that these developers are too busy working on mobile devices to have time to ask that question! Etherpad: https://etherpad.openstack.org/p/LPC2015_Android_Mobile

## Energy Aware Scheduling II

- URL: https://blog.linuxplumbersconf.org/2015/ocw/events/LPC2015/schedule/#track-501
- 日時: Thursday, August 20, 2015 5:00 – 7:30pm

This microconference will look at progress on frequency/performance scaling, thermal management, ACPI power management, device-tree representation of power-management features, energy-aware scheduling, management of power domains, integration of system-wide with runtime power management, and of course measurement techniques and tools. Etherpad: https://etherpad.openstack.org/p/LPC2015_Energy_Aware_Scheduling

## Boot, Init, and Config

- URL: https://blog.linuxplumbersconf.org/2015/ocw/events/LPC2015/schedule/#track-459
- 日時: Friday, August 21, 2015 9:00 – 11:30am

The Linux Plumbers 2015 Boot, Init, and Config track focuses on system bringup. Etherpad: https://etherpad.openstack.org/p/LPC2015_Boot_Init_Config

## Energy Aware Scheduling I

- URL: https://blog.linuxplumbersconf.org/2015/ocw/events/LPC2015/schedule/#track-411
- 日時: Friday, August 21, 2015 9:00 – 11:30am

This microconference will look at progress on frequency/performance scaling, thermal management, ACPI power management, device-tree representation of power-management features, energy-aware scheduling, management of power domains, integration of system-wide with runtime power management, and of course measurement techniques and tools. Etherpad https://etherpad.openstack.org/p/LPC2015_Energy_Aware_Scheduling

## Performance and Scalability

- URL: https://blog.linuxplumbersconf.org/2015/ocw/events/LPC2015/schedule/#track-453
- 日時: Friday, August 21, 2015 9:00 – 11:30am

Performance and Scalability track focuses on scalability, both upwards and downwards as well as up and down the stack. Etherpad: https://etherpad.openstack.org/p/LPC2015_Performance_Scalability

## Device Tree Tools, Validation, and Troubleshooting

- URL: https://blog.linuxplumbersconf.org/2015/ocw/events/LPC2015/schedule/#track-441
- 日時: Friday, August 21, 2015 1:30 – 4:00pm

The Linux Plumbers 2015 Device Tree Tools, Validation, and Troubleshooting track focuses on tools (programs and scripts), techniques, and core support to enable creation of correct device trees and to support troubleshooting and debugging of incorrect device trees, drivers, and subsystems. Etherpad: https://etherpad.openstack.org/p/LPC2015_Device_Tree

## Networking

- URL: https://blog.linuxplumbersconf.org/2015/ocw/events/LPC2015/schedule/#track-447
- 日時: Friday, August 21, 2015 1:30 – 4:00pm

This track was named “Network Virtualization” in previous years. Upon request we are opening up the spectrum for this year. We have however decided to define a list of interesting networking topics that we want to focus on. Etherpad: https://etherpad.openstack.org/p/LPC2015_Networking

## Persistent Memory

- URL: https://blog.linuxplumbersconf.org/2015/ocw/events/LPC2015/schedule/#track-471
- 日時: Friday, August 21, 2015 1:30 – 4:00pm

The Linux Plumbers 2015 Persistent Memory track focuses on the kernel and userspace plumbing for byte-addressable (direct cpu load/store) persistent memory. Etherpad: https://etherpad.openstack.org/p/LPC2015_Persistent_Memory
