# Linux Plumbers Conference 2017 全セッション一覧

出典: https://blog.linuxplumbersconf.org/2017/ocw/events/LPC2017/schedule.html

2017年はOCW形式。開催スケジュールの個別セッション130件を収録。Descriptionは個別ページのAbstract原文。One Line Summaryは別フィールドに保持。資料URLは個別ページの原記載を保持し、スケジュールに別のアーカイブURLがある場合はschedule_urlも収録。添付ファイル本体の取得・リンク有効性検査は実施していない。Wiki Topicsは採用済み11件と提案24件を補足に区別して収録し、開催セッションの件数には加算しない。Wiki本文のTentative/Proposed等の予定表記は原文通りで、開催確定とみなさない。

セッション: 130件 / Descriptionあり: 130件 / 資料あり: 56件 / 資料項目: 59件

## 目次

1. [Introduction](#session-4827)
2. [TPM2 Software Stack: Status Report and Future Work](#session-4818)
3. [Trusted Boot on Linux](#session-4798)
4. [EFI + Intel TXT and TPM + Xen/Linux - how to make it work](#session-4802)
5. [Tying TPMs into the EFI boot stub](#session-4829)
6. [Crypto System Integration for TPM 2.0](#session-4817)
7. [The kernel's limits to growth](#session-4689)
8. [email2git: A cregit Plugin to Link Reviews to Commits](#session-4688)
9. [Performance Analysis Superpowers with Enhanced BPF](#session-4697)
10. [Welcome to the containers micro-conference](#session-4793)
11. [Exposing resource limits to containers with LXCFS](#session-4740)
12. [AppSwitch: Application Level Network Namespacing](#session-4725)
13. [Namespacing and Stacking the LSM](#session-4768)
14. [Running OCI containers with LXC](#session-4726)
15. [CGroup v2 and its impact for containers](#session-4781)
16. [Namespacing IMA](#session-4716)
17. [Defensively designed container runtimes](#session-4710)
18. [UID/GID shifting filesystem overlays](#session-4794)
19. [Privileged actions in unprivileged containers](#session-4795)
20. [hugetlbfs, Still Alive and Kicking](#session-4672)
21. [SCHED_DEADLINE: Open Issues](#session-4658)
22. [How will Linux handle quantum computing?](#session-4704)
23. [TPM software stack status: device driver to event driven applications](#session-4675)
24. [Scheduling under CPU capacity constraints](#session-4787)
25. [schedutil usage/aggregation of utilization signals](#session-4762)
26. [Improving estimation of Task/CPU's utilization](#session-4771)
27. [Utilization clamping support for the CPU controller](#session-4770)
28. [Userspace task placement on big.LITTLE systems](#session-4763)
29. [Targetted CPU thermal throttling](#session-4713)
30. [Atomic cpufreq set operation using platform firmware interface on ARM](#session-4759)
31. [Using runtime PM callbacks for system suspend/resume in PM core](#session-4814)
32. [Update on CPU cluster idling](#session-4758)
33. [Update on the generic PM domain](#session-4757)
34. [Linux Power Management Frameworks Status Report](#session-4714)
35. [Backporting issues with multi-subsystem device (RDMA + netdev + more)](#session-4736)
36. [kABI Update](#session-4735)
37. [Paravirtual RDMA device](#session-4730)
38. [System Boot and RDMA](#session-4738)
39. [OpenFabrics Alliance - Status and New Directions](#session-4731)
40. [BOF - Open Discussion](#session-4783)
41. [Intro](#session-4801)
42. [Treble and Kernel](#session-4807)
43. [LTS Efforts](#session-4796)
44. [Testing Android common and LTS kernels](#session-4805)
45. [Update on Devboards in AOSP (HiKey/HiKey960)](#session-4784)
46. [The Android Emulator and Upstream QEMU](#session-4797)
47. [Replacing xt_qtaguid with an upstream eBPF implementation](#session-4786)
48. [LIve (Kernel) Patching: future development](#session-4674)
49. [Commit Rights in the DRM Subsystem](#session-4639)
50. [HIERARCHICAL NUMA](#session-4656)
51. [Clang built kernels](#session-4799)
52. [Binder Enhancements in Oreo](#session-4785)
53. [Energy Aware Scheduling](#session-4790)
54. [Ion 2017](#session-4789)
55. [SDCardFS Upstreaming](#session-4800)
56. [BoF - Open Discussion](#session-4816)
57. [Use rt-app to run mobile-like (and other types of) synthetic workloads](#session-4741)
58. [Power alongside performance (latency)](#session-4742)
59. [Using bpf to model application behavior](#session-4744)
60. [Tools to analyze scheduler behavior based on tracing and scheduler model](#session-4776)
61. [Workloads for evaluation CPU PM modifications](#session-4782)
62. [RT IPI schedule push/pull rework](#session-4788)
63. [Safe multicore scheduling in a Linux cluster environment](#session-4819)
64. [vSVM: High Level Component Breakdown and Technical Challenges](#session-4747)
65. [vSVM: IOMMU API extensions](#session-4748)
66. [SVM on ARM SMMUv3](#session-4812)
67. [virtio-iommu: a paravirtualized IOMMU](#session-4811)
68. [PCIe error statistics reporting](#session-4803)
69. [Configuration Request Retry Status (CRS) handling](#session-4732)
70. [Maximum payload size vs. Maximum Read Request Size](#session-4737)
71. [PCI Endpoint Subsystem Status](#session-4792)
72. [NVMe Surprise Removal](#session-4809)
73. [userfaultfd: post-copy VM migration and beyond](#session-4699)
74. [Reader/writer Range Locking](#session-4683)
75. [MD raid general discussion](#session-4711)
76. [Modular Overlay Networking Solutions with the Container Network Interface](#session-4701)
77. [Move your routing inside container](#session-4643)
78. [NVMe Surprise Removal](#session-4698)
79. [Real-Time Linux Users Discussion](#session-4657)
80. [State of UEFI Technology](#session-4679)
81. [AVX technology and performance challenges](#session-4712)
82. [DRM/KMS open source userspace support](#session-4715)
83. [IPMI, MCTP, and building the BMC interface](#session-4723)
84. [Improving Real Time Communication on Linux platform](#session-4717)
85. [Overview and Feedback of ARM EBBR](#session-4721)
86. [Testing for stable+distro kernels](#session-4722)
87. [BIOS Manageability discussion](#session-4815)
88. [Evangelizing Kernel Programming to Students and New Developers](#session-4749)
89. [Zero-copy Receive for virtio-net/vhost devices](#session-4831)
90. [membarrier: core serialization for reclaim of JIT code memory](#session-4813)
91. [User space contiguous memory allocation for DMA](#session-4669)
92. [LKMM overview](#session-4708)
93. [LKMM Installation and Use Workshop](#session-4709)
94. [ktest - How is it used and what more can be done](#session-4821)
95. [Fuzzers Panel](#session-4822)
96. [Update on Distro/Stable testing](#session-4823)
97. [Kernel ABI](#session-4824)
98. [KernelMemorySanitizer against uninitialized memory](#session-4825)
99. [syzkaller status update](#session-4826)
100. [Unit Testing and Mocking](#session-4830)
101. [A unit test framework for the Linux kernel](#session-4832)
102. [Automated testing of LKML patches with Clang](#session-4836)
103. [Support for adding DT based thermal zones at runtime](#session-4834)
104. [ktask: multithread cpu-intensive kernel work](#session-4837)
105. [ZUFS - Zero-copy (Low Latency) User-mode FS](#session-4703)
106. [FB modifiers (supporting end-to-end graphics compression)](#session-4694)
107. [Power Management Challenges in Linux](#session-4652)
108. [Checkpoint/Restart for distributed applications](#session-4767)
109. [Improving JVM Application Migration and Profiling with Checkpoint/Restore](#session-4739)
110. [Popcorn Linux: Compiler, Operating System and Virtualization Support for Application/Thread Migration in Heterogeneous ISA Environments](#session-4719)
111. [Opened questions about container live-migration](#session-4751)
112. [Memory tracking for iterative container migration](#session-4724)
113. [Towards perfect testing of applications checkpoint-restore](#session-4752)
114. [Debugging with BPF sucks if you aren't a kernel developer](#session-4745)
115. [addr->sym resolution by kernel in stack traces](#session-4764)
116. [Hardware trace re-construction support in kernel](#session-4766)
117. [Hypertracing: Tracing Through Virtualization Layers](#session-4769)
118. [Tackling bpf uprobe performance](#session-4773)
119. [Next BPF Tools](#session-4774)
120. [BPF Introspection with CTF](#session-4775)
121. [Common Trace Format 2.0](#session-4777)
122. [Trace Visualization: Analyze perf, bpf, kernel and userspace traces with Trace Compass](#session-4780)
123. [eBPF cgroup filters for data usage accounting on Android](#session-4791)
124. [Tracing and Kernel ABI](#session-4804)
125. [new kprobe api](#session-4808)
126. [uftrace: function tracer for user + kernel space](#session-4779)
127. [Test driven development (TDD) in the kernel](#session-4833)
128. [Soft Affinity for Workloads](#session-4835)
129. [Managing the impact of growing CPU register state on the user ABI](#session-4671)
130. [Supporting newer toolchains in the kernel](#session-4681)

<a id="session-4827"></a>
## 1. Introduction

- セッション個別URL: https://blog.linuxplumbersconf.org/2017/ocw/sessions/4827.html
- Track: Trusted Platform Module
- 日時: Wednesday, September 13, 2017 9:30am

### Description

Introduction

### One Line Summary

Introduction

### 添付資料URL

掲載なし

<a id="session-4818"></a>
## 2. TPM2 Software Stack: Status Report and Future Work

- セッション個別URL: https://blog.linuxplumbersconf.org/2017/ocw/sessions/4818.html
- Track: Trusted Platform Module
- 日時: Wednesday, September 13, 2017 9:40am

### Description

This talk will describe the last year of development in Intel’s implementation of the TCG TPM2 Software Stack specifications and the work we have planned for the upcoming year. We’ll cover everything from community building, our new test harness, our continuous integration system to language bindings and integrating the APIs into event driven application environments like GLib.

### One Line Summary

TPM2 Software Stack: Retrospective and Future Work

### 添付資料URL

- [slides](http://www.linuxplumbersconf.net/2017/ocw//system/presentations/4818/original/TPM2-kernel-evnet-app_tricca-sakkinen.pdf)（file）


- スケジュール掲載のアーカイブURL: https://blog.linuxplumbersconf.org/2017/ocw/system/presentations/4818/original/TPM2-kernel-evnet-app_tricca-sakkinen.pdf
<a id="session-4798"></a>
## 3. Trusted Boot on Linux

- セッション個別URL: https://blog.linuxplumbersconf.org/2017/ocw/sessions/4798.html
- Track: Trusted Platform Module
- 日時: Wednesday, September 13, 2017 10:40am

### Description

Trusted Boot on Linux has not been in a great state for years, but we’re finally getting the pieces together. This presentation will give an overview of where we are, along with the work that still needs to be done and how distributions can make use of it.

### One Line Summary

What's been done over the past year, and what's still needed?

### 添付資料URL

掲載なし

<a id="session-4802"></a>
## 4. EFI + Intel TXT and TPM + Xen/Linux - how to make it work

- セッション個別URL: https://blog.linuxplumbersconf.org/2017/ocw/sessions/4802.html
- Track: Trusted Platform Module
- 日時: Wednesday, September 13, 2017 11:10am

### Description

After some investigation it looks that EFI
+ tboot + Xen does not work. The problem is that
tboot treats EFI as untrusted stuff and shuts down
all services. However, these services are needed
to boot Xen properly. So, this tboot behavior
makes it completely unusable with Xen. Linux is
hit by this issue, too. It is less severe because
it boots but due to a lack of EFI runtime services
it is not possible to run e.g. efibootmgr which
manages machine boot config. Hence, this means
that we should hammer out proper approach to that
problem. At the beginning of discussion we should
review EFI infrastructure security. This should
lead to a decision about EFI availability in
measured environments. If yes, then we should
decide what and how should be exposed. It is also
worth considering here solutions providing
functionality similar to tboot, e.g. TrustedGRUB,
EFI TBOOT, etc.

### One Line Summary

EFI + Intel TXT and TPM + Xen/Linux - how to make it work

### 添付資料URL

- [slides](https://blog.linuxplumbersconf.org/2017/ocw/system/presentations/4802/original/efi_intel_txt_and_tpm_xen_linux-how_to_make_it_work_20170709.final.pdf)（file）

<a id="session-4829"></a>
## 5. Tying TPMs into the EFI boot stub

- セッション個別URL: https://blog.linuxplumbersconf.org/2017/ocw/sessions/4829.html
- Track: Trusted Platform Module
- 日時: Wednesday, September 13, 2017 11:40am

### Description

Tying TPMs into the EFI boot stub

### One Line Summary

Tying TPMs into the EFI boot stub

### 添付資料URL

掲載なし

<a id="session-4817"></a>
## 6. Crypto System Integration for TPM 2.0

- セッション個別URL: https://blog.linuxplumbersconf.org/2017/ocw/sessions/4817.html
- Track: Trusted Platform Module
- 日時: Wednesday, September 13, 2017 12:10pm

### Description

One of the most useful functions of the TPM would be correct integration with the crypto systems.  The first issue to solve before doing this is the form of the TPM key, which should really be standardised.

Based on this, I’ll show integrations for openssl (with gnutls easily done as well), gnome-keyring via pkcs11 and possibly openssl.

### One Line Summary

status and next steps for crypto system integration of TPM 2.0

### 添付資料URL

掲載なし

<a id="session-4689"></a>
## 7. The kernel's limits to growth

- セッション個別URL: https://blog.linuxplumbersconf.org/2017/ocw/sessions/4689.html
- Track: Refereed Presentations
- 日時: Wednesday, September 13, 2017 11:00am

### Description

The kernel development community has dealt with a number of scalability crises over the years as it has grown into one of the largest software-development projects on the planet.  We have not had a serious scalability issue for over a decade, but there may be another one sooner than many expect.  This talk will point out the places where the process is under stress and contemplate what can be done to improve the situation.

### One Line Summary

What factors might interfere with the kernel development community's future growth?

### 添付資料URL

- [slides](https://blog.linuxplumbersconf.org/2017/ocw/system/presentations/4689/original/ossna_maint.pdf)（file）

<a id="session-4688"></a>
## 8. email2git: A cregit Plugin to Link Reviews to Commits

- セッション個別URL: https://blog.linuxplumbersconf.org/2017/ocw/sessions/4688.html
- Track: Refereed Presentations
- 日時: Wednesday, September 13, 2017 11:50am

### Description

The Linux project’s email-based reviewing process is highly effective in filtering open source contributions on their way from mailing list discussions towards Linus’ Git repository. However, once integrated, it is difficult to link Git commits back to their review comments in mailing list discussions, especially when considering commits that underwent multiple versions (and hence review rounds), that belonged to multi-patch series or that were cherry-picked. email2git is a plugin on top of the cregit platform (https://cregit.linuxsources.org/) that uses different algorithms to match review emails to Git commits, then enables clicking on a particular token in a source code file to obtain links to relevant email discussions about the commit that introduced this token. Understanding the context of commits is helpful for new contributors to understand existing code, new maintainers in a subsystem to understand the rationale of older commits, and security experts in to understand the context around code where a vulnerability has been detected.

### One Line Summary

As new kernel maintainers and developers work with a 25 year old code base, email2git helps them understand better the context in which code changes were made by linking those changes' Git commits back to their reviews.

### 添付資料URL

- [slides](http://www.linuxplumbersconf.net/2017/ocw//system/presentations/4688/original/tmp.pdf)（file）


- スケジュール掲載のアーカイブURL: https://blog.linuxplumbersconf.org/2017/ocw/system/presentations/4688/original/tmp.pdf
<a id="session-4697"></a>
## 9. Performance Analysis Superpowers with Enhanced BPF

- セッション個別URL: https://blog.linuxplumbersconf.org/2017/ocw/sessions/4697.html
- Track: Refereed Presentations
- 日時: Wednesday, September 13, 2017 2:00pm

### Description

Advanced performance analysis superpowers have arrived in the Linux 4.x series, thanks to enhancements to Berkeley Packet Filter (BPF, or eBPF) and the use of its sandboxed virtual machine to provide programmatic capabilities to system tracing. Netflix has been investigating its use for new observability tools, monitoring, security uses, and more. This talk will dive into advanced tracing uses, and the new observability that it provides.

This talk will also demonstrate the new open source tools that have been developed, which make use of kernel- and user-level dynamic tracing (kprobes and uprobes), and kernel- and user-level static tracing (tracepoints). These tools provide new insights for file system and storage performance, CPU scheduler performance, TCP performance, and a whole lot more. Some long standing problems in performance analysis can now be solved, such as deeper off-CPU analysis: associating waker stacks to blocked stacks in kernel context, and creating chains of wakeup stacks. This explains not just why a task blocked, but who it was waiting for, and who they were waiting for, and so on. This is the beginning of a new generation of tools and visualizations.

Next steps in enhanced BPF development for tracing will be discussed, both kernel features and user tooling.

### One Line Summary

This talk will discuss new performance analysis capabilities and tools using enhanced BPF, including scheduler, FS, and TCP analysis, beginning a new generation of advanced tools and visualizations.

### 添付資料URL

- [slides](https://blog.linuxplumbersconf.org/2017/ocw/system/presentations/4697/original/OSS2017_BPF_superpowers.pdf)（file）

<a id="session-4793"></a>
## 10. Welcome to the containers micro-conference

- セッション個別URL: https://blog.linuxplumbersconf.org/2017/ocw/sessions/4793.html
- Track: Containers
- 日時: Wednesday, September 13, 2017 2:00pm

### Description

This will introduce the containers micro-conference, the format for this year’s edition, make sure someone is taking notes and then introduce the first speaker.

### One Line Summary

The usual introduction talk

### 添付資料URL

掲載なし

<a id="session-4740"></a>
## 11. Exposing resource limits to containers with LXCFS

- セッション個別URL: https://blog.linuxplumbersconf.org/2017/ocw/sessions/4740.html
- Track: Containers
- 日時: Wednesday, September 13, 2017 2:05pm

### Description

There are some difficult challenges ahead for LXCFS, if it chooses to accept them: 
 1. implementing support for /sys/devices/system/cpu
 2. addressing loadavg
 3. whether/how to help address sysinfo(2) system call (not in scope for fs, but in scope for LXCFS’s missions).

In this talk we’d like to spend some time discussing possible approaches to each of these three, as well as, maybe, possibly, encouraging future contributors to join in.

### One Line Summary

Introduction to the problem of cgroup limits visibility to userspace and the approach taken by LXCFS.

### 添付資料URL

- [slides](https://blog.linuxplumbersconf.org/2017/ocw//system/presentations/4740/original/lxcfs.pdf)（file）


- スケジュール掲載のアーカイブURL: https://blog.linuxplumbersconf.org/2017/ocw/system/presentations/4740/original/lxcfs.pdf
<a id="session-4725"></a>
## 12. AppSwitch: Application Level Network Namespacing

- セッション個別URL: https://blog.linuxplumbersconf.org/2017/ocw/sessions/4725.html
- Track: Containers
- 日時: Wednesday, September 13, 2017 2:20pm

### Description

This talk presents AppSwitch, a completely new network element that operates at TCP layer, similar to a router at IP layer or a bridge at link layer.  The key idea is that it decouples applications from underlying network at the system call layer rather than at the network device or packet level as traditional overlay mechanisms do.  That provides the applications a distinct identity independent of the host and provides several advantages including significantly more efficient implementation of application-level network functions such as application firewall and load balancer, reduced operational cost and complexity by minimizing unnecessary friction between applications and operations teams, ability to seamlessly run applications across heterogeneous infrastructure backends including bare metal, VMs, containers and cloud, and improved performance by selecting most suitable network medium.  It would also effectively remove the performance penalty associated with unnecessary data path processing that is typical in microservice application environments.

In this session, we’d like to discuss the kernel support required to implement AppSwitch.  There are a few candidate approaches that could be considered.  It could be made to work with tracepoints but the implementation turns out somewhat hacky.  Extending Netlink is cleaner but requires deeper changes.

### One Line Summary

This talk presents AppSwitch, a completely new TCP-layer network element similar to a router at IP layer or a bridge at link layer, that addresses a number of issues in modern environments, especially ones based on microservices.

### 添付資料URL

掲載なし

<a id="session-4768"></a>
## 13. Namespacing and Stacking the LSM

- セッション個別URL: https://blog.linuxplumbersconf.org/2017/ocw/sessions/4768.html
- Track: Containers
- 日時: Wednesday, September 13, 2017 2:35pm

### Description

Containers would like to be able to make use of Linux Security
Modules (LSMs), from providing more complete system virtualization
to improving container confinement. To date containers access to the
LSM has been limited but there has been work to change the situation.

This presentation will discuss the current state of LSM namespacing
and stacking. The work being done on various security modules to
support namespacing, the infrastructure work being done to improve the
LSM, followed by an examination of the remaining problems.

### One Line Summary

Making Linux Security Modules available to containers.

### 添付資料URL

- [slides](https://blog.linuxplumbersconf.org/2017/ocw//system/presentations/4768/original/Namespacing and Stacking the LSM.pdf)（file）


- スケジュール掲載のアーカイブURL: https://blog.linuxplumbersconf.org/2017/ocw/system/presentations/4768/original/Namespacing and Stacking the LSM.pdf
<a id="session-4726"></a>
## 14. Running OCI containers with LXC

- セッション個別URL: https://blog.linuxplumbersconf.org/2017/ocw/sessions/4726.html
- Track: Containers
- 日時: Wednesday, September 13, 2017 2:50pm

### Description

For years, LXC has pushed the envelope of Linux containers support by focusing on system containers.  In the meantime it has ignored its original use case, application containers.  Thanks to work by Docker, CoreOS, and many others, we are at a point now where we can re-use existing standards, formats, and tools to enhance application container support in LXC  We will present here some small enhancements which are in progress:
	1. OCI container creation template
	2. Network support for application containers which come without network admin tools
but the main point of this discussion will be to get feedback on other things lxc needs to do to improve application container support.

### One Line Summary

Can LXC be used to run OCI application container images?

### 添付資料URL

- [slides](https://blog.linuxplumbersconf.org/2017/ocw//system/presentations/4726/original/oci.pdf)（file）


- スケジュール掲載のアーカイブURL: https://blog.linuxplumbersconf.org/2017/ocw/system/presentations/4726/original/oci.pdf
<a id="session-4781"></a>
## 15. CGroup v2 and its impact for containers

- セッション個別URL: https://blog.linuxplumbersconf.org/2017/ocw/sessions/4781.html
- Track: Containers
- 日時: Wednesday, September 13, 2017 3:05pm

### Description

With the release of kernel 4.5 the new cgroupfs v2 API was declared non-experimental. But the missing feature parity between cgroupfs v2 with cgroupfs v1 makes it nearly impossible for container runtimes to use it. Especially before the cpu controller is merged, no runtime is expected to switch to it by default. Nonetheless cgroupfs v2 is slowly making its way into various distributions. This brings with it a new set of problems and challenges which container runtimes must tackle. For example, one of the core problems container runtimes will have to face is how to support running cgroupfs v1 hierarchies inside a container while the host is running a cgroupfs v2 hierarchy and vica versa. This talk will try to outline some of these problems more clearly, and suggest possible solutions and hopefully inspire a fruitful discussion that leads to further solutions or at least helps to identify and specify various problems more clearly.

### One Line Summary

CGroup V2 is pretty different from CGroup V1 and the two can't fully operate in parallel leading to problems running containers which only support one or the other.

### 添付資料URL

掲載なし

<a id="session-4716"></a>
## 16. Namespacing IMA

- セッション個別URL: https://blog.linuxplumbersconf.org/2017/ocw/sessions/4716.html
- Track: Containers
- 日時: Wednesday, September 13, 2017 4:00pm

### Description

In this talk we will give a high level overview of namespacing the Linux Integrity Measurement Architecture (IMA), present use cases for namespacing IMA, and discuss the current challenges. We will talk about the individual parts of this subsystem that we need to modify and show a demo of the current status of a container making use of namespaced IMA.

### One Line Summary

Current status of namespacing of the Linux Integrity Measurement Architecture

### 添付資料URL

掲載なし

<a id="session-4710"></a>
## 17. Defensively designed container runtimes

- セッション個別URL: https://blog.linuxplumbersconf.org/2017/ocw/sessions/4710.html
- Track: Containers
- 日時: Wednesday, September 13, 2017 4:15pm

### Description

In contrast to other operating systems the Linux kernel  does not attempt to define what a container is. Rather than implementing a first-class container object in the kernel itself Linux exposes various interfaces to user space that can be combined in various ways to define a container. This gives user space the flexibility to work with different container concepts and is one explanation for the variety of container runtimes out there. This liberty is one of the strengths of Linux when implementing a container runtime, and has lead to the usage of these interfaces in non-container contexts such as web browsers. However, a lot of the interfaces that are used in creating containers were not necessarily designed with containers in mind. Additionally, it is not always obvious how the various containerization interfaces are to be combined to guarantee a secure container runtime implementation. The consequence of this conceptual liberty is that there are multiple classes of theoretical vulnerabilities that affect container runtimes such as runC and LXC. In this talk we will present current roadblocks to a more defensive design that affect all container runtimes. Furthermore, we will look at specific roadblocks that are inherent to the design of LXC and runC to open the floor to discussions on topics of runtime design as well as discussions of alternative solutions to some of the roadblocks identified in this talk. In addition, we hope to open the door to even more discussions between container runtimesand kernel containerization primitives.

### One Line Summary

In this talk we will present current roadblocks to a more
defensive design that affect all container runtimes.

### 添付資料URL

掲載なし

<a id="session-4794"></a>
## 18. UID/GID shifting filesystem overlays

- セッション個別URL: https://blog.linuxplumbersconf.org/2017/ocw/sessions/4794.html
- Track: Containers
- 日時: Wednesday, September 13, 2017 4:30pm

### Description

Containers using the user namespace have a different view of uid/gid than processes in the initial namespace.

This makes it difficult to share data between the initial namespace and other user namespaces as any unmapped uid/gid will show as -1.

Shiftfs is an overlay filesystem which remaps UIDs and GIDs transparently for you.

This presentation will go over the current state of shiftfs and the next steps needed to get it or something like it merged in the upstream Linux kernel.

### One Line Summary

An update on shiftfs and the next steps for remapping overlay filesystems.

### 添付資料URL

掲載なし

<a id="session-4795"></a>
## 19. Privileged actions in unprivileged containers

- セッション個別URL: https://blog.linuxplumbersconf.org/2017/ocw/sessions/4795.html
- Track: Containers
- 日時: Wednesday, September 13, 2017 4:45pm

### Description

Unprivileged containers, that is, containers which use a user namespace to map their UIDs and GIDs to an unprivileged range, have very limited kernel privileges.

Those privileges are no higher than what a normal unprivileged user would have on the system and are restricted to the container’s namespaces.
Anything which isn’t owned by the container and isn’t part of a namespace will typically be rejected by the kernel.

Some common examples include:
 – Creating device nodes
 – Mounting filesystems
 – Setting up loop devices
 – Raising a process nice level
 – Raising the OOM score of a process

In this presentation, we’ll go over the most common sources of frustration and look at a few approaches that could be used for the container runtime to decide whether those privileged actions should be allowed or not.

### One Line Summary

How to selectively allow privileged actions from otherwise unprivileged containers?

### 添付資料URL

- [slides](http://www.linuxplumbersconf.net/2017/ocw//system/presentations/4795/original/LinuxPlumbers 2017- Privileged actions in unprivileged containers.pdf)（file）


- スケジュール掲載のアーカイブURL: https://blog.linuxplumbersconf.org/2017/ocw/system/presentations/4795/original/LinuxPlumbers 2017- Privileged actions in unprivileged containers.pdf
<a id="session-4672"></a>
## 20. hugetlbfs, Still Alive and Kicking

- セッション個別URL: https://blog.linuxplumbersconf.org/2017/ocw/sessions/4672.html
- Track: Refereed Presentations
- 日時: Wednesday, September 13, 2017 2:50pm

### Description

Linux support for huge pages has been around since the early 2.6 time frame.  When support was added, it followed the ‘everything is a file’ model and the result was hugetlbfs.  hugetlbfs represents a pool of huge pages that are best pre-allocated at boot time.  Because of this need for pre-allocation, special management and (minimal) application code modification, few applications actually use hugetlbfs.  The early adopters and most prominent current users of hugetlbfs are large databases.  Databases like to control as much of the system as possible and may even enjoy the extra control that hugetlbfs provides.

Recent efforts in the area of huge page support have been centered around Transparent Huge Pages(THP), where recent patches have added page cache support, and work is underway to even add support to the ext4 filesystem.  With THP’s ease of use, one would think that few people care about the older and more difficult to manage hugetlbfs.  However, some new features have been added to hugetlbfs mostly at the request of database developers.  Surprisingly, some of these new features have found successful use in other areas such as Qemu Post Copy Live Migration.

This talk will discuss the new hugetlbfs features.  In addition, it will include a general hugetlbfs presentation.  At this year’s LSF/MM summit it was noted that hugetlbfs is “its own vm”.  In a sense, it is true.  Within the mm subsystem, there are many places that have code such as:
if (hugetlbpage()) call special hugetlbfs code
else normal mm code

Therefore, some assumptions one makes about general Linux mm do not apply to hugetlbfs.  Some of the most prominent differences will be presented.

The goal for this presentation is to expose more people to this often forgotten functionality so that perhaps it can be employed in more creative ways.

### One Line Summary

Recent hugetlbfs features and unique characteristics

### 添付資料URL

- [slides](http://www.linuxplumbersconf.net/2017/ocw//system/presentations/4672/original/hugetlbfs_oss.pdf)（file）


- スケジュール掲載のアーカイブURL: https://blog.linuxplumbersconf.org/2017/ocw/system/presentations/4672/original/hugetlbfs_oss.pdf
<a id="session-4658"></a>
## 21. SCHED_DEADLINE: Open Issues

- セッション個別URL: https://blog.linuxplumbersconf.org/2017/ocw/sessions/4658.html
- Track: Refereed Presentations
- 日時: Wednesday, September 13, 2017 4:00pm

### Description

The deadline scheduler adds the ability of scheduling tasks, not according to a fixed priority, but according to a dynamic priority, based on the task’s deadline. To be able to use this scheduler, a task needs to inform three parameters: the period, the runtime, and the relative deadline.

Using these parameters, the scheduler tries to provide the runtime CPU time, at each period for each deadline task. Under the perfect conditions, the sched deadline is able to schedule all tasks within their deadline, providing the timing guarantee real-time tasks need. Did you notice the under the perfect conditions part? The conditions are:

- Implicit deadline tasks – or constrained being quite a pessimist.
- Tasks should not self-suspend;
- All the system’s delay must be taken into account.
- The runtime must represent the worst-case execution time;
- The system should not be overload – which requires some very restrictive setup.

All these restrictions open the opportunity for improvements in the deadline scheduler. This presentation aims to list these points of improvement, point directions and challenges. Such as:

- Constrained deadline tasks guarantees
- Arbitrary affinity tasks
- Hierarchical scheduling – RT Throttling
- Tracepoints
- Precise way to define task’s runtime
- Other possibilities for admission tests

There are many points of improvement in the deadline scheduler, and discussing them is fundamental for a wider and safer adoption of this powerful scheduler.

### One Line Summary

Discussion about the open issues of the deadline scheduler.

### 添付資料URL

- [slides](https://blog.linuxplumbersconf.org/2017/ocw/system/presentations/4658/original/Sched Deadline - Open Issues.pdf.html)（file）
- [slides](https://blog.linuxplumbersconf.org/2017/ocw/system/presentations/4658/original/Sched Deadline - Open Issues.pdf)（file）

<a id="session-4704"></a>
## 22. How will Linux handle quantum computing?

- セッション個別URL: https://blog.linuxplumbersconf.org/2017/ocw/sessions/4704.html
- Track: Refereed Presentations
- 日時: Wednesday, September 13, 2017 4:50pm

### Description

First, a few words about what this talk is not. It is not a tutorial on how to program quantum computers.  For that, you should find a D-Wave machine or go to http://research.ibm.com/ibm-q/, either of which should provide an excellent hands-on introduction to the current practice of quantum computing.  Either way, highly recommended!

This talk instead gives an overview of the current state and trends of quantum-computing technology.  It then uses these trends to make some educated guesses about the challenges facing the use of quantum computing in production.  Of course, the bigger the killer app, the more effort will be invested in overcoming these challenges.  This talk therefore also gives an overview of quantum computing’s most likely killer apps.  This will lead into some possibilities of how quantum computing might affect the Linux plumbing, and vice versa.  The talk will conclude with the usual free advice, which will be worth every penny that you pay for it.

### One Line Summary

What must Linux do for quantum computing and vice versa, and where is quantum computing most likely to succeed?

### 添付資料URL

- [slides](http://www.linuxplumbersconf.net/2017/ocw//system/presentations/4704/original/QC-slides.2017.09.13f.pdf)（file）


- スケジュール掲載のアーカイブURL: https://blog.linuxplumbersconf.org/2017/ocw/system/presentations/4704/original/QC-slides.2017.09.13f.pdf
<a id="session-4675"></a>
## 23. TPM software stack status: device driver to event driven applications

- セッション個別URL: https://blog.linuxplumbersconf.org/2017/ocw/sessions/4675.html
- Track: Refereed Presentations
- 日時: Thursday, September 14, 2017 9:45am

### Description

In this talk Jarkko and Phil give an overview of the current work in the TPM software stack from kernel driver up to event driven application programming. Jarkko will discuss the latest developments in the TPM kernel subsystem including the in-kernel resource manager and event log handling. Phil will cover the status of the open source implementation of the TCG TSS including the user-space resource management daemon and the plumbing required to support event driven application environments. Jarkko and Phil will then discuss efforts to align the in-kernel and user-space resource managers and the use-cases driving various features.

### One Line Summary

In this talk Jarkko Sakkinen & Philip Tricca give overview and status report on current TPM2 software stack development from kernel to user space applications.

### 添付資料URL

掲載なし

<a id="session-4787"></a>
## 24. Scheduling under CPU capacity constraints

- セッション個別URL: https://blog.linuxplumbersconf.org/2017/ocw/sessions/4787.html
- Track: Power Management and Energy Awareness
- 日時: Thursday, September 14, 2017 

### Description

CPU performance constraints imposed by the Linux thermal framework, or hardware/firmware are not currently considered by the Linux task scheduler despite that many modern systems are operating under such constraints on a regular basis. The assumption all CPUs can always be fully utilized at their highest performance point (OPP, P-state, frequency) is no longer valid and can lead to suboptimal task placement decisions. Should we introduce static “guaranteed” CPU capacity in the scheduler as it already exist in ACPI or let the thermal framework inform the scheduler about current constraints?

### One Line Summary

The potential difference in max and delivered CPU performance (capacity) is growing (thermal and peak current management), can we keep ignoring it, or should load-balancing factor the constraints in?

### 添付資料URL

掲載なし

<a id="session-4762"></a>
## 25. schedutil usage/aggregation of utilization signals

- セッション個別URL: https://blog.linuxplumbersconf.org/2017/ocw/sessions/4762.html
- Track: Power Management and Energy Awareness
- 日時: Thursday, September 14, 2017 9:50am

### Description

How do we aggregate utilization signals coming from different scheduling classes?
Do we need an additional rt_rq/rt_se signal?

### One Line Summary

schedutil usage/aggregation of utilization signals

### 添付資料URL

掲載なし

<a id="session-4771"></a>
## 26. Improving estimation of Task/CPU's utilization

- セッション個別URL: https://blog.linuxplumbersconf.org/2017/ocw/sessions/4771.html
- Track: Power Management and Energy Awareness
- 日時: Thursday, September 14, 2017 10:10am

### Description

The “dynamic” nature of PELT makes it not completely generic to properly describe the utilization of all possible classes of tasks, and a prototype of the “decay clamping” solution, discussed at last year’s LPC, has been evaluated to be not suitable to properly fix these PELT’s behaviours.

Recently, a possible alternative solution has been posted on LKML 1 as a follow-up of an interesting discussion we had at the OSPM Summit [2,3].

Let’s review together if the idea to add a filter on top of PELT is a viable solution.

1 https://lkml.org/lkml/2017/8/25/195
2 http://retis.sssup.it/ospm-summit/Downloads/OSPM_PELT_DecayClampingVsUtilEst.pdf
3 http://youtu.be/adnSHPBGS-w

### One Line Summary

Review of a possible alternative solution to the "decay-clamp" idea.

### 添付資料URL

掲載なし

<a id="session-4770"></a>
## 27. Utilization clamping support for the CPU controller

- セッション個別URL: https://blog.linuxplumbersconf.org/2017/ocw/sessions/4770.html
- Track: Power Management and Energy Awareness
- 日時: Thursday, September 14, 2017 10:20am

### Description

A recently updated proposal has been posted on LKML 1 to support per-task boosting and capping of CPU frequencies.

As a follow up of the discussion we had at the  OSPM Summit [2,3], it would be useful to review these main points:
- Is the concept of “utilization clamping” acceptable?
- Are the identified use-cases good enough to justify the new API?
- Is the CGroups interface ok or should we add also another “primary” interface?
- Is the reference-counting based implementation ok?

1 https://lkml.org/lkml/2017/8/24/721
2 http://retis.sssup.it/ospm-summit/Downloads/OSPM_SchedTune.pdf
3 https://youtu.be/6MC1jbYbQTo

### One Line Summary

Discussion on the proposal for a per-task API to bias OPP selection.

### 添付資料URL

掲載なし

<a id="session-4763"></a>
## 28. Userspace task placement on big.LITTLE systems

- セッション個別URL: https://blog.linuxplumbersconf.org/2017/ocw/sessions/4763.html
- Track: Power Management and Energy Awareness
- 日時: Thursday, September 14, 2017 10:30am

### Description

Present findings and status of a userspace daemon to place tasks on CPUs based on per-task utilization as well as predefined rules. The daemon was written to improve performance on big.LITTLE systems that are either on older kernels without EAS, or for newer kernels that have not yet finished integrating and tuning EAS for production.

### One Line Summary

Discuss simple userspace daemon for placing tasks in heterogenous CPU systems

### 添付資料URL

掲載なし

<a id="session-4713"></a>
## 29. Targetted CPU thermal throttling

- セッション個別URL: https://blog.linuxplumbersconf.org/2017/ocw/sessions/4713.html
- Track: Power Management and Energy Awareness
- 日時: Thursday, September 14, 2017 10:50am

### Description

The current CPU thermal throttling mechanism involves either changing CPU frequency or power limits. But all of these methods penalize every process in the system, which results in poor user experience in a thermally constrained system. For example once CPU is forced to lowest frequency, this is possible that touch screen becomes less responsive and graphics updates become slower. Just with simple heuristics with a test patch, I can see that usability can be improved.
With higher thermal design power in a small form factor devices, this problem will be more noticeable. So I want to start a general discussion on this topic.

### One Line Summary

Discussion on throttling only processes, which are causing thermal issues

### 添付資料URL

掲載なし

<a id="session-4759"></a>
## 30. Atomic cpufreq set operation using platform firmware interface on ARM

- セッション個別URL: https://blog.linuxplumbersconf.org/2017/ocw/sessions/4759.html
- Track: Power Management and Energy Awareness
- 日時: Thursday, September 14, 2017 11:10am

### Description

The schedutil governor supports fast frequency switching if that is supported by the cpufreq driver in use and possible for the given policy. Generally most of the traditional ARM platforms drive the PMIC to set OPP using slow bus like I2C. However, newer platforms have dedicated processor or atleast firmware to drive CPU OPP.

Since ARM SCMI also standardize the firmware interface, can we use it to provide fast switch mechanism on ARM platforms.

### One Line Summary

How to achieve or make operations in OSPM atomic for CPU frequency scaling using platform firmware interface on ARM platforms ?

### 添付資料URL

- [slides](http://www.linuxplumbersconf.net/2017/ocw//system/presentations/4759/original/fast_dvfs_scmi.pdf)（file）


- スケジュール掲載のアーカイブURL: https://blog.linuxplumbersconf.org/2017/ocw/system/presentations/4759/original/fast_dvfs_scmi.pdf
<a id="session-4814"></a>
## 31. Using runtime PM callbacks for system suspend/resume in PM core

- セッション個別URL: https://blog.linuxplumbersconf.org/2017/ocw/sessions/4814.html
- Track: Power Management and Energy Awareness
- 日時: Thursday, September 14, 2017 11:30am

### Description

The integration of the system suspend/resume infrastructure with the runtime PM framework has been a popular topic over the last few years, but there still is quite a lot to do in that area.  The problems that have come up most recently are the lack of a sufficiently clean way to reuse runtime PM callbacks for system suspend/resume in some configurations (e.g. if the ACPI PM domain is used) and suboptimal behavior in some cases when devices are already runtime-suspended during system resume and may stay suspended or when devices suspended for system sleep may stay suspended (in runtime suspend) after system wakeup.

The latest idea on how to deal with these issues is to allow drivers to set flags informing the PM core on the driver capabilities and/or preferences and modify the PM core (and possibly middle-layer code) to adjust its behavior in accordance with the driver flags.

### One Line Summary

Discussion on a recent proposal to change the PM core so that it can reuse runtime PM callbacks directly for system suspend/resume in some situations.

### 添付資料URL

掲載なし

<a id="session-4758"></a>
## 32. Update on CPU cluster idling

- セッション個別URL: https://blog.linuxplumbersconf.org/2017/ocw/sessions/4758.html
- Track: Power Management and Energy Awareness
- 日時: Thursday, September 14, 2017 11:50am

### Description

The current cpuidle framework doesn’t scale for modern ARM32/ARM64 multi-cluster SMP systems and for heterogeneous systems like big.LITTLE. In the CPU cluster idling patchset, which has evolved through several iterations by now, these issues are being addressed.

Unfortunately the progress has moved slowly forward since last LPC. However this session gives an update on the how far we have come and what to expect next.

### One Line Summary

Update on CPU cluster idling

### 添付資料URL

掲載なし

<a id="session-4757"></a>
## 33. Update on the generic PM domain

- セッション個別URL: https://blog.linuxplumbersconf.org/2017/ocw/sessions/4757.html
- Track: Power Management and Energy Awareness
- 日時: Thursday, September 14, 2017 12:00pm

### Description

The genpd is widely deployed for ARM SoCs. This session walks through the recent important changes made for genpd, provides a summary of the current ongoing and next developments.

### One Line Summary

A highlight of the recent changes made to genpd and an update of ongoing/next developments.

### 添付資料URL

掲載なし

<a id="session-4714"></a>
## 34. Linux Power Management Frameworks Status Report

- セッション個別URL: https://blog.linuxplumbersconf.org/2017/ocw/sessions/4714.html
- Track: Power Management and Energy Awareness
- 日時: Thursday, September 14, 2017 12:10pm

### Description

Overview of the current status of high-level PM frameworks in the Linux kernel and maintenance workflows related to them.

### One Line Summary

Status report of high-level PM frameworks in the Linux kernel.

### 添付資料URL

掲載なし

<a id="session-4736"></a>
## 35. Backporting issues with multi-subsystem device (RDMA + netdev + more)

- セッション個別URL: https://blog.linuxplumbersconf.org/2017/ocw/sessions/4736.html
- Track: RDMA
- 日時: Thursday, September 14, 2017 9:30am

### Description

Don will share his experience of backporting with multi-subsystem devices (RDMA + netdev) on per-RHEL-minor-release basis. Other subsystem dependencies will be presented as well.

### One Line Summary

More and more devices in RDMA are dependent on netdev as well as other subsystems -- target, NFS, scsi, block, cgroups, SELinux.... Can we make backporting task for distro people easier ?

### 添付資料URL

掲載なし

<a id="session-4735"></a>
## 36. kABI Update

- セッション個別URL: https://blog.linuxplumbersconf.org/2017/ocw/sessions/4735.html
- Track: RDMA
- 日時: Thursday, September 14, 2017 10:00am

### Description

The RDMA subsystem provides high performance networking by direct user-level access to HW. RDMA hardware typically relies on the kernel to securely setup resources, while the data path is executed in user-space only. Setting up resources usually consists of creating and mapping them to the user-space. Currently, this is done using more than forty detailed API calls, multiplexed over a single write() system call.

The RDMA subsystem is evolving with new features and fabrics. In order to make RDMA the de facto standard for direct access user-space networking, the kABI should be secured and easily extensible while maintaining its high performance nature.
We propose a new flexible and secure RDMA kABI, based on the ioctl() interface. The new ABI is based on object oriented approach and allows drivers to extend the common system with new objects, methods and attributes, maintaining compatibility with the current user-space drivers.

### One Line Summary

Going forward with a flexible and secure RDMA kABI

### 添付資料URL

掲載なし

<a id="session-4730"></a>
## 37. Paravirtual RDMA device

- セッション個別URL: https://blog.linuxplumbersconf.org/2017/ocw/sessions/4730.html
- Track: RDMA
- 日時: Thursday, September 14, 2017 10:30am

### Description

In this topic, Yuval and Marcel will present the design of paravirtual RDMA device

### One Line Summary

QEMU's limited RDMA support leaves it behind other modern hypervisors. Marcel and/or Yuval will present the implementation of an emulated RDMA device, analyze its performance and usability, and finally talk about future plans for a possible virtio-rdma device.

### 添付資料URL

- [slides](https://blog.linuxplumbersconf.org/2017/ocw//system/presentations/4730/original/lpc-2017-pvrdma-marcel-apfelbaum-yuval-shaia.pdf)（file）


- スケジュール掲載のアーカイブURL: https://blog.linuxplumbersconf.org/2017/ocw/system/presentations/4730/original/lpc-2017-pvrdma-marcel-apfelbaum-yuval-shaia.pdf
<a id="session-4738"></a>
## 38. System Boot and RDMA

- セッション個別URL: https://blog.linuxplumbersconf.org/2017/ocw/sessions/4738.html
- Track: RDMA
- 日時: Thursday, September 14, 2017 11:00am

### Description

Like the networking system, the RDMA subsystem requires some boot time configuration and initialisation. Provide a brief overview of the latest work in this area and discuss design options for the next steps. Topics include persistent naming of RDMA devices, kernel module auto-loading for uAPIs, systemd boot time ordering challenges.

Several design options revolve around the new RDMA netlink interface.

### One Line Summary

Discuss boot-time issues with the RDMA subsystem

### 添付資料URL

掲載なし

<a id="session-4731"></a>
## 39. OpenFabrics Alliance - Status and New Directions

- セッション個別URL: https://blog.linuxplumbersconf.org/2017/ocw/sessions/4731.html
- Track: RDMA
- 日時: Thursday, September 14, 2017 11:30am

### Description

In last Open Fabrics 2017 workshop, Jason was elected to the OFA board of directors to represent the interests of the community.

In this talk Jason will present a brief update on the OFA organisation and lead a discussion on the future of the OFA, focusing on improving how the OFA supports the RDMA developer community.

### One Line Summary

Open Fabrics Alliance - Status and New Directions

### 添付資料URL

掲載なし

<a id="session-4783"></a>
## 40. BOF - Open Discussion

- セッション個別URL: https://blog.linuxplumbersconf.org/2017/ocw/sessions/4783.html
- Track: RDMA
- 日時: Thursday, September 14, 2017 11:45am

### Description

If the time permit, we will use this session to discuss our community plans for the coming year.

### One Line Summary

Open Discussion

### 添付資料URL

掲載なし

<a id="session-4801"></a>
## 41. Intro

- セッション個別URL: https://blog.linuxplumbersconf.org/2017/ocw/sessions/4801.html
- Track: Android/Mobile I
- 日時: Thursday, September 14, 2017 9:00am

### Description

Quick introduction and overview of the microconference.

### One Line Summary

Introduction to the Android Microconference

### 添付資料URL

掲載なし

<a id="session-4807"></a>
## 42. Treble and Kernel

- セッション個別URL: https://blog.linuxplumbersconf.org/2017/ocw/sessions/4807.html
- Track: Android/Mobile I
- 日時: Thursday, September 14, 2017 9:15am

### Description

Discussion around changes made to Android and to the tests / requirements as part of Project Treble

VTS

### One Line Summary

Discussion around changes made to Android and to the tests / requirements as part of Project Treble

### 添付資料URL

- [slides](https://blog.linuxplumbersconf.org/2017/ocw/system/presentations/4807/original/Treble & Kernel - Plumbers.pdf)（file）

<a id="session-4796"></a>
## 43. LTS Efforts

- セッション個別URL: https://blog.linuxplumbersconf.org/2017/ocw/sessions/4796.html
- Track: Android/Mobile I
- 日時: Thursday, September 14, 2017 9:55am

### Description

We will talk about focused efforts around LTS in the context of Android Kernels – why do we need them, what are we doing, and how.

### One Line Summary

Focused Efforts around LTS

### 添付資料URL

- [slides](https://140.211.166.22/2017/ocw//system/presentations/4796/original/Linux Plumbers 2017 - LTS Efforts.pdf)（file）


- スケジュール掲載のアーカイブURL: https://blog.linuxplumbersconf.org/2017/ocw/system/presentations/4796/original/Linux Plumbers 2017 - LTS Efforts.pdf
<a id="session-4805"></a>
## 44. Testing Android common and LTS kernels

- セッション個別URL: https://blog.linuxplumbersconf.org/2017/ocw/sessions/4805.html
- Track: Android/Mobile I
- 日時: Thursday, September 14, 2017 10:20am

### Description

In this session Marissa will talk about the test coverage of vanilla Android common kernels, their plan to catch regressions with each new patch before it can be merged.

Amit will provide a quick overview of linux kernel functional testing efforts at Linaro, test suites (LTP, kselftests, hugetlbfs, Android VTS etc) currently deployed in the lab, pain points, future plans and how can you join/help.

### One Line Summary

A quick overview of Android common and LTS testing efforts.

### 添付資料URL

- [slides](https://blog.linuxplumbersconf.org/2017/ocw//system/presentations/4805/original/LPC-TestingAndroid.pdf)（file）


- スケジュール掲載のアーカイブURL: https://blog.linuxplumbersconf.org/2017/ocw/system/presentations/4805/original/LPC-TestingAndroid.pdf
<a id="session-4784"></a>
## 45. Update on Devboards in AOSP (HiKey/HiKey960)

- セッション個別URL: https://blog.linuxplumbersconf.org/2017/ocw/sessions/4784.html
- Track: Android/Mobile I
- 日時: Thursday, September 14, 2017 10:45am

### Description

Covering recent developments with new devboards and mezzanine peripherals supported by AOSP. Overview of benefits to Android developers, the upstream kernel community, pain points, discussion and feedback.

### One Line Summary

Recent and future developments on devboards supported in AOSP.

### 添付資料URL

- [slides](http://www.linuxplumbersconf.net/2017/ocw//system/presentations/4784/original/AOSP Devboards.pdf)（file）


- スケジュール掲載のアーカイブURL: https://blog.linuxplumbersconf.org/2017/ocw/system/presentations/4784/original/AOSP Devboards.pdf
<a id="session-4797"></a>
## 46. The Android Emulator and Upstream QEMU

- セッション個別URL: https://blog.linuxplumbersconf.org/2017/ocw/sessions/4797.html
- Track: Android/Mobile I
- 日時: Thursday, September 14, 2017 11:10am

### Description

We will briefly cover the history of the Android emulator and its relationship to QEMU, as well as discuss what the Goldfish platform is. We will then discuss the challenge we had with the Android emulator when AAarch64 was introduced (64-bit ARM), and how Google had to make a non-trivial choice between backporting functionality from upstream QEMU or move to a newer QEMU.  Google eventually changed the basis of their Android emulator to a (much) newer QEMU which included AArch64 support. We will briefly cover the differences between the Google Android emulator and upstream QEMU and what it would it would take to bridge the gap between these two code bases.  We open up to discussions about interests in upstreaming more Android emulator support to the QEMU project or other interests and challenges the community has with the Android emulator today.

### One Line Summary

A historical perspective and future outlook of the Android emulator and upstream QEMU and their differences.

### 添付資料URL

- [slides](https://blog.linuxplumbersconf.org/2017/ocw//system/presentations/4797/original/LPC17 Android Emulator.pdf)（file）


- スケジュール掲載のアーカイブURL: https://blog.linuxplumbersconf.org/2017/ocw/system/presentations/4797/original/LPC17 Android Emulator.pdf
<a id="session-4786"></a>
## 47. Replacing xt_qtaguid with an upstream eBPF implementation

- セッション個別URL: https://blog.linuxplumbersconf.org/2017/ocw/sessions/4786.html
- Track: Android/Mobile I
- 日時: Thursday, September 14, 2017 11:50am

### Description

The xt_qtaguid kernel code is the foundation of data usage accounting and per-app network policy on Android, but it consists of ~3000 lines of out-of-tree kernel code and is a maintenance, stability and performance burden. Work is underway to replace xt_qtaguid with a mixed kernel/userspace solution based on eBPF cgroup filters.

This talk will cover the basic design, the progress we’ve made so far (most of the kernel infrastructure is already in place), and the impact on Android userspace.

### One Line Summary

Describes current efforts to replace the out-of-tree Android xt_qtaguid kernel code with an upstream solution based on eBPF cgroup filters.

### 添付資料URL

- [slides](http://linuxplumbersconf.org/2017/ocw//system/presentations/4786/original/Replacing xt_qtaguid with an upstream eBPF implementation.pdf)（file）


- スケジュール掲載のアーカイブURL: https://blog.linuxplumbersconf.org/2017/ocw/system/presentations/4786/original/Replacing xt_qtaguid with an upstream eBPF implementation.pdf
<a id="session-4674"></a>
## 48. LIve (Kernel) Patching: future development

- セッション個別URL: https://blog.linuxplumbersconf.org/2017/ocw/sessions/4674.html
- Track: Refereed Presentations
- 日時: Thursday, September 14, 2017 11:00am

### Description

Live Kernel Patching is currently present in Linus’ tree in a shape that basically covers the most crucial features of “vendor specific” implementations (SUSE’s kGraft, RedHat’s kpatch, …). Therefore it’s time to look forward and identify where the next biggest challenges are.

The topics of special interest:

- Extending the set of supported architectures, with one of the necessary preparatory steps being implementing reliable stack traces for every given architecture

- Possibilities of applying live patches that change data structures / layout are currently very limited. There are ideas how to fix this (load hooks, shadow data structures, etc.), but this requires more research and actual implementation.

- Userspace patch creation tooling is currently rather crude, imposing a lot of manual work on the patch creator, leaving a lot of possibilities for toolchain automation.

- Extending the idea of live patching to cover userspace processess as well

The purpose of this talk is to identify and describe those coming challenges, and ideally provoke enough interest in the audience to eventually extend the developer (and user) community.

Audio

### One Line Summary

The purpose of this talk is to describe status quo of the Live Kernel Patching implementation and identify future steps needed to improve the implementation

### 添付資料URL

- [slides](http://linuxplumbersconf.com/2017/ocw//system/presentations/4674/original/lpc2017.pdf)（file）


- スケジュール掲載のアーカイブURL: https://blog.linuxplumbersconf.org/2017/ocw/system/presentations/4674/original/lpc2017.pdf
<a id="session-4639"></a>
## 49. Commit Rights in the DRM Subsystem

- セッション個別URL: https://blog.linuxplumbersconf.org/2017/ocw/sessions/4639.html
- Track: Refereed Presentations
- 日時: Thursday, September 14, 2017 11:50am

### Description

Since about 2 years the drm/i915 kernel driver is maintained by 2 maintainers and a team of 15 people who can apply patches directly to the main branch – in a way it’s just group maintainership, but with a fairly large group, by kernel standards. In the past year we’ve extended this within the DRM subsystem and now also maintain the subsystem core and a lot of small drivers with different, but similarly sized group of people in the drm-misc tree.

This talk will cover why we’re doing this, what seem to be the key ingredients to make such a committer model work in the context of the Linux kernel and what new lessons we’ve learned by applying the committer model to more trees and areas in the kernel.

Audio

### One Line Summary

New lessons learned after handin out even more commit rights.

### 添付資料URL

- [slides](http://www.linuxplumbersconf.net/2017/ocw//system/presentations/4639/original/lpc-2017-maintainer.odp)（file）


- スケジュール掲載のアーカイブURL: https://blog.linuxplumbersconf.org/2017/ocw/system/presentations/4639/original/lpc-2017-maintainer.odp
<a id="session-4656"></a>
## 50. HIERARCHICAL NUMA

- セッション個別URL: https://blog.linuxplumbersconf.org/2017/ocw/sessions/4656.html
- Track: Refereed Presentations
- 日時: Thursday, September 14, 2017 2:00pm

### Description

NUMA (Non Uniform Memory Access) traditionally has been built around
the assumption that inter node distance is the primary factor deciding
the applicable latency and also latency being the only property to be
considered for allocation and placement of memory. New emerging systems
come equipped with variety of memory devices connected with the core
through different kind of interconnects (industry standard and
proprietary) which breaks away from traditional notion of NUMA. Though
they are all coherently accessible from the processor, they possess
different properties like latency, bandwidth, reliability, typical
available size etc. The present notion of NUMA in kernel is unable to
accommodate these variety of properties present in these new memory
devices and give an appropriate abstraction for it’s usage which calls
for a redesign of NUMA for memory representation.

I have been working for some time on CDM (Coherent Device Memory)
representation as a NUMA node in the kernel and proposed various
solutions in this regard. The merits of the proposals got debated
and reviewed from current NUMA design and memory interface perspective,
it seems like while this may be a good solution for short and medium
term but kernel would definitely need a long term NUMA redesign to
accommodate emerging memory technologies.

This presentation will cover a proposed redesign of NUMA memory
representation in kernel which will accommodate different properties
of memory along side their inter nodal distances. It will cover kernel
expectations from the platform firmware how various properties of the
memory devices should be communicated, how they will be represented in
the kernel, how buddy allocator data structure need to be changed, how
NUMA memory API will be augmented to accommodate new user controllable
memory allocations based on requested properties etc. This presentation
will also give an overall idea about how this redesigned NUMA will
benefit user space, its control over memory allocations and its possible
impact on emerging and traditional workloads.

This presentation will try to help build consensus in the kernel
community towards a redesigned NUMA. Developers from kernel development
community especially from memory management background and others who
develop applications on heterogeneous systems will benefit from this
presentation.

Audio

### One Line Summary

Redesigning the memory NUMA abstraction taking into account new memory technologies where inter node distance will no longer be the only deciding factor for memory allocation and placement.

### 添付資料URL

- [slides](http://linuxplumbersconf.org/2017/ocw//system/presentations/4656/original/Hierarchical_NUMA_Design_Plumbers_2017.pdf)（file）


- スケジュール掲載のアーカイブURL: https://blog.linuxplumbersconf.org/2017/ocw/system/presentations/4656/original/Hierarchical_NUMA_Design_Plumbers_2017.pdf
<a id="session-4799"></a>
## 51. Clang built kernels

- セッション個別URL: https://blog.linuxplumbersconf.org/2017/ocw/sessions/4799.html
- Track: Android/Mobile II
- 日時: Thursday, September 14, 2017 2:00pm

### Description

In 2017 we started recommending to Android vendors and OEMs that we’d like to transition Android’s toolchain to be entirely Clang/LLVM based.  We plan to hold a discussion on what this means and looks like for building the Linux kernel.  Our patch-set, common issues, and benefits will be reviewed.

### One Line Summary

A talk on compiling the Linux kernel with Clang/LLVM.

### 添付資料URL

- [slides](https://blog.linuxplumbersconf.org/2017/ocw/system/presentations/4799/original/LPC 2017- Clang built kernels.pdf)（file）

<a id="session-4785"></a>
## 52. Binder Enhancements in Oreo

- セッション個別URL: https://blog.linuxplumbersconf.org/2017/ocw/sessions/4785.html
- Track: Android/Mobile II
- 日時: Thursday, September 14, 2017 2:25pm

### Description

Discussion of recent enhancements made to the binder driver to support Treble in ‘Oreo’:
- Multiple domains
- scatter-gather
- fine-grained locking
- RT priority inheritance

### One Line Summary

Binder performance enhancements in 'Oreo' to support Treble

### 添付資料URL

- [slides](http://linuxplumbersconf.org/2017/ocw//system/presentations/4785/original/LPC2017 Binder Enhancements (1).pdf)（file）


- スケジュール掲載のアーカイブURL: https://blog.linuxplumbersconf.org/2017/ocw/system/presentations/4785/original/LPC2017 Binder Enhancements (1).pdf
<a id="session-4790"></a>
## 53. Energy Aware Scheduling

- セッション個別URL: https://blog.linuxplumbersconf.org/2017/ocw/sessions/4790.html
- Track: Android/Mobile II
- 日時: Thursday, September 14, 2017 2:45pm

### Description

This talk is to provide a status update of the EAS (Energy Aware scheduling) development efforts in the Android common kernel, eas-dev and LKML. The talk will go over recent features and fixes proposed, in-flight, merged along with discussion of features in EAS that Android leverages such as Schedtune (which is a way to bias the scheduler to be more performance centric or viceversa than energy centric for certain tasks).

### One Line Summary

Energy Aware scheduler development

### 添付資料URL

- [slides](http://www.linuxplumbersconf.net/2017/ocw//system/presentations/4790/original/LPC2017 Android u-conf.pdf)（file）


- スケジュール掲載のアーカイブURL: https://blog.linuxplumbersconf.org/2017/ocw/system/presentations/4790/original/LPC2017 Android u-conf.pdf
<a id="session-4789"></a>
## 54. Ion 2017

- セッション個別URL: https://blog.linuxplumbersconf.org/2017/ocw/sessions/4789.html
- Track: Android/Mobile II
- 日時: Thursday, September 14, 2017 3:30pm

### Description

One slide of status of what was accomplished last year, discussion about other pressing Ion matters

### One Line Summary

What is Ion in 2017

### 添付資料URL

- [slides](https://blog.linuxplumbersconf.org/2017/ocw/system/presentations/4789/original/Ion@LPC2017.pdf.html)（file）
- [slides](https://blog.linuxplumbersconf.org/2017/ocw/system/presentations/4789/original/Ion@LPC2017.pdf)（file）

<a id="session-4800"></a>
## 55. SDCardFS Upstreaming

- セッション個別URL: https://blog.linuxplumbersconf.org/2017/ocw/sessions/4800.html
- Track: Android/Mobile II
- 日時: Thursday, September 14, 2017 3:50pm

### Description

Android has recently switched from using FUSE for its emulated sdcard layer to using SDCardfs. This talk will talk about that transition, and the future plans to upstream the replacement.

### One Line Summary

A description of SDCardfs and the plans to upstream it.

### 添付資料URL

- [slides](https://blog.linuxplumbersconf.org/2017/ocw//system/presentations/4800/original/Linux Plumbers 2017—Sdcardfs.pdf)（file）
- [slides](https://blog.linuxplumbersconf.org/2017/ocw/system/presentations/4800/original/Linux Plumbers 2017�%2580%2594Sdcardfs.pdf)（file）

<a id="session-4816"></a>
## 56. BoF - Open Discussion

- セッション個別URL: https://blog.linuxplumbersconf.org/2017/ocw/sessions/4816.html
- Track: Android/Mobile II
- 日時: Thursday, September 14, 2017 4:10pm

### Description

Open Discussion for issues not covered or continuation of discussions not finished

### One Line Summary

Open Discussion for issues not covered

### 添付資料URL

掲載なし

<a id="session-4741"></a>
## 57. Use rt-app to run mobile-like (and other types of) synthetic workloads

- セッション個別URL: https://blog.linuxplumbersconf.org/2017/ocw/sessions/4741.html
- Track: Scheduler Workloads
- 日時: Thursday, September 14, 2017 

### Description

Mobile workloads usually require Android. Remove such dependency by simulating such workloads with rt-app.
https://github.com/scheduler-tools/rt-app

### One Line Summary

Simulate workloads with rt-app

### 添付資料URL

掲載なし

<a id="session-4742"></a>
## 58. Power alongside performance (latency)

- セッション個別URL: https://blog.linuxplumbersconf.org/2017/ocw/sessions/4742.html
- Track: Scheduler Workloads
- 日時: Thursday, September 14, 2017 

### Description

On the importance to check for power/energy regressions alongside performance.
How to check across different archs/platforms?

### One Line Summary

Check for power/perf regressions.

### 添付資料URL

掲載なし

<a id="session-4744"></a>
## 59. Using bpf to model application behavior

- セッション個別URL: https://blog.linuxplumbersconf.org/2017/ocw/sessions/4744.html
- Track: Scheduler Workloads
- 日時: Thursday, September 14, 2017 

### Description

Talk about work I’ve done using BPF to model large applications for building test cases for scheduler issues we hit in production. Discuss how the tool can be improved and used to help keep regressions from happening.

### One Line Summary

Discuss the various ways BPF can be used to categorize workloads and use it to build generic workload simulators.

### 添付資料URL

掲載なし

<a id="session-4776"></a>
## 60. Tools to analyze scheduler behavior based on tracing and scheduler model

- セッション個別URL: https://blog.linuxplumbersconf.org/2017/ocw/sessions/4776.html
- Track: Scheduler Workloads
- 日時: Thursday, September 14, 2017 

### Description

Event tracing, post-processing tools and scheduler models: how can we improve instrumentation and improve the tools/models to better understand the scheduler behavior ?

### One Line Summary

Improving event tracing, post-processing tools and scheduler models.

### 添付資料URL

- [slides](http://www.linuxplumbersconf.net/2017/ocw//system/presentations/4776/original/LPC-sched.pdf)（file）


- スケジュール掲載のアーカイブURL: https://blog.linuxplumbersconf.org/2017/ocw/system/presentations/4776/original/LPC-sched.pdf
<a id="session-4782"></a>
## 61. Workloads for evaluation CPU PM modifications

- セッション個別URL: https://blog.linuxplumbersconf.org/2017/ocw/sessions/4782.html
- Track: Scheduler Workloads
- 日時: Thursday, September 14, 2017 

### Description

What workloads are typically used for this purpose on mobile/laptops/workstations/servers?  Are synthetic benchmarks useful at all?  How to measure energy usage reliably and in a “portable” way?

### One Line Summary

Discussion on which workloads to use (or what is recommended etc) for the evaluation of CPU PM changes in the kernel.

### 添付資料URL

掲載なし

<a id="session-4788"></a>
## 62. RT IPI schedule push/pull rework

- セッション個別URL: https://blog.linuxplumbersconf.org/2017/ocw/sessions/4788.html
- Track: Scheduler Workloads
- 日時: Thursday, September 14, 2017 

### Description

When at Red Hat, we found that with lots of RT tasks that can migrate, and running for lots of short intervals, it can cause an IPI storm on a single CPU having that one end up having a large latency. I have reworked the code to have a single “token” IPI that circles the CPUs that have overloaded RT tasks (more than one scheduled to run). I have some benchmarks that show this works. I would like to discuss the current implementation as well as any improvements we would like to make on it.

### One Line Summary

Reworking the IPI logic to implement the RT (and deadline) scheduler for push/pull logic

### 添付資料URL

掲載なし

<a id="session-4819"></a>
## 63. Safe multicore scheduling in a Linux cluster environment

- セッション個別URL: https://blog.linuxplumbersconf.org/2017/ocw/sessions/4819.html
- Track: Scheduler Workloads
- 日時: Thursday, September 14, 2017 

### Description

Modern clusters rely on servers containing dozens of cores that have high infrastructure cost and energy consumption. Therefore, it is economically essential to exploit their full potential at both the application and the system level. While today’s clusters typically rely on Linux, recent research shows that the Linux scheduler suffers from performance bugs that lead to core under-usage. The consequences are wasted energy, bad infrastructure usage, and lower service response time.

The fundamental source of such performance bugs is that the Linux scheduler, being monolithic, has become too complex. In this talk, we present ongoing work on the Ipanema project that proposes to switch to a set of simple schedulers, each tailored to a specific application. Our vision raises scientific challenges in terms of easily developing schedulers and proving them safe. The key to our approach is designing a Domain-Specific Language for multicore kernel scheduling policy development, associated verification tools and a Linux runtime system.

### One Line Summary

The Linux scheduler has become fairly complex and is not always able to preserve work-conservation. We present Ipanema, a DSL to write simple and safe schedulers with proven properties.

### 添付資料URL

- [slides](http://www.linuxplumbersconf.net/2017/ocw//system/presentations/4819/original/eusys17_talk_splitted.pdf)（file）


- スケジュール掲載のアーカイブURL: https://blog.linuxplumbersconf.org/2017/ocw/system/presentations/4819/original/eusys17_talk_splitted.pdf
<a id="session-4747"></a>
## 64. vSVM: High Level Component Breakdown and Technical Challenges

- セッション個別URL: https://blog.linuxplumbersconf.org/2017/ocw/sessions/4747.html
- Track: VFIO/IOMMU/PCI
- 日時: Thursday, September 14, 2017 2:00pm

### Description

Exposing SVM capable devices to VM’s require virtual IOMMU exposed in the VMcareful thought into specific use cases and the different component’s involved interact with each other. The goal of this topic is to introduce the different components involved, expected use cases for vSVM and top technical challenges. Expect the discussion to set direction for future work to solve some of the top issues and facilitate discussion for subsequent topics in the agenda.

### One Line Summary

Review vSVM requirements, use cases and technical challenges

### 添付資料URL

- [slides](http://linuxplumbersconf.com/2017/ocw//system/presentations/4747/original/Plumbers-uConf-iommu-challenges.pdf)（file）


- スケジュール掲載のアーカイブURL: https://blog.linuxplumbersconf.org/2017/ocw/system/presentations/4747/original/Plumbers-uConf-iommu-challenges.pdf
<a id="session-4748"></a>
## 65. vSVM: IOMMU API extensions

- セッション個別URL: https://blog.linuxplumbersconf.org/2017/ocw/sessions/4748.html
- Track: VFIO/IOMMU/PCI
- 日時: Thursday, September 14, 2017 2:30pm

### Description

This topic is part of the vSVM discussion, which brings new requirements to the IOMMU subsystem. The proposed extensions are as follows:
- bind guest PASID table
- passdown guest vIOMMU invalidation of various caching structures
- device and IOMMU fault propagation/response between host physical IOMMU and guest or other in-kernel users
We would like to discuss interfaces which needs to scale among vendors and future extensions.

### One Line Summary

Discuss IOMMU changes needed for supporting guest use of shared virtual memory (SVM)

### 添付資料URL

- [slides](http://linuxplumbersconf.org/2017/ocw//system/presentations/4748/original/Shared Virtual Memory (SVM) in KVM - IOMMU-API-combined.pdf)（file）


- スケジュール掲載のアーカイブURL: https://blog.linuxplumbersconf.org/2017/ocw/system/presentations/4748/original/Shared Virtual Memory (SVM) in KVM - IOMMU-API-combined.pdf
<a id="session-4812"></a>
## 66. SVM on ARM SMMUv3

- セッション個別URL: https://blog.linuxplumbersconf.org/2017/ocw/sessions/4812.html
- Track: VFIO/IOMMU/PCI
- 日時: Thursday, September 14, 2017 3:00pm

### Description

Earlier this year I proposed an implementation of ATS, PRI and PASID in the ARM SMMUv3 driver. Along with that, I proposed to consolidate the API for host SVM, and add an interface to VFIO for userspace drivers.

In this session I’d like to talk about the differences between ARM SMMU and other architectures with regard to SVM, and discuss the requirements of the host SVM interface.

### One Line Summary

A brief overview of SVM on ARM.

### 添付資料URL

- [slides](https://blog.linuxplumbersconf.org/2017/ocw//system/presentations/4812/original/plumbers17-smmu-svm.pdf)（file）


- スケジュール掲載のアーカイブURL: https://blog.linuxplumbersconf.org/2017/ocw/system/presentations/4812/original/plumbers17-smmu-svm.pdf
<a id="session-4811"></a>
## 67. virtio-iommu: a paravirtualized IOMMU

- セッション個別URL: https://blog.linuxplumbersconf.org/2017/ocw/sessions/4811.html
- Track: VFIO/IOMMU/PCI
- 日時: Thursday, September 14, 2017 3:30pm

### Description

Virtio-iommu is a new IOMMU architecture introduced in early 2017, that focuses on virtualization.

Being paravirtualized and relying on an existing transport mechanism, it is efficient and easy to implement. It is designed to integrate seamlessly with software APIs such as VFIO, removing the need for page table emulation.

I will briefly describe how it works at the moment. Then I’ll discuss future extensions for SVM virtualization, how they fit with current vSVM work and the few challenges that stem from using hardware acceleration in a multi-arch IOMMU.

### One Line Summary

Status report on virtio-iommu, introduction of extensions for vSVM: page table handover, PASID and fault reporting.

### 添付資料URL

- [slides](http://www.linuxplumbersconf.net/2017/ocw//system/presentations/4811/original/plumbers17-virtio-iommu.pdf)（file）


- スケジュール掲載のアーカイブURL: https://blog.linuxplumbersconf.org/2017/ocw/system/presentations/4811/original/plumbers17-virtio-iommu.pdf
<a id="session-4803"></a>
## 68. PCIe error statistics reporting

- セッション個別URL: https://blog.linuxplumbersconf.org/2017/ocw/sessions/4803.html
- Track: VFIO/IOMMU/PCI
- 日時: Thursday, September 14, 2017 4:00pm

### Description

PCI Express Root Port Advanced Error Reporting currently only supports reporting errors to the console. Having to monitor console logs is tedious and complicated when running a large data center.

We would like to propose adding software counters to the PCIAER driver and make these accessible via sysfs.

### One Line Summary

Report PCIe error statistics via sysfs

### 添付資料URL

掲載なし

<a id="session-4732"></a>
## 69. Configuration Request Retry Status (CRS) handling

- セッション個別URL: https://blog.linuxplumbersconf.org/2017/ocw/sessions/4732.html
- Track: VFIO/IOMMU/PCI
- 日時: Thursday, September 14, 2017 4:40pm

### Description

An endpoint is allowed to issue Configuration Request Retry Status (CRS) following a FLR request to indicate that it is not ready to accept new requests. CRS is defined in PCIe r3.1, sec 2.3.1. Request Handling Rules and CRS usage in FLR context is mentioned in PCIe r3.1, sec 6.6.2. Function-Level Reset.

A CRS indication will only be given if the address to be read is vendor ID register. pci_bus_read_dev_vendor_id() knows how to deal with CRS returned 0xFFFF0001 value and will continue polling until a value other than 0xFFFF0001 is returned within a given timeout.

Kernel is handling CRS in some cases but there are holes that we need to fill in.

### One Line Summary

Configuration Request Retry Status (CRS)

### 添付資料URL

- [slides](https://blog.linuxplumbersconf.org/2017/ocw/system/presentations/4732/original/crs.pdf)（file）

<a id="session-4737"></a>
## 70. Maximum payload size vs. Maximum Read Request Size

- セッション個別URL: https://blog.linuxplumbersconf.org/2017/ocw/sessions/4737.html
- Track: VFIO/IOMMU/PCI
- 日時: Thursday, September 14, 2017 5:00pm

### Description

PCIe specification defines Maximum Payload Size (MPS) in Rev 3.1 Sec 2.2.2 TLPs with Data Payloads – Rules as a limiter on the TLP size.

Maximum Read Request Size (MRS) is the application layer size of a data that can be transferred at a given time. MRS value needs to be a multiple of MPS and MRS request is sent in chunks of data with MPS size.

Endpoints typically support 4k MRS size.
Linux is currently matching MPS and MRS value. This is causing HW resources to be inefficiently used.

### One Line Summary

Maximum payload size vs. Maximum Read Request Size

### 添付資料URL

- [slides](https://blog.linuxplumbersconf.org/2017/ocw/system/presentations/4737/original/mps.pdf)（file）

<a id="session-4792"></a>
## 71. PCI Endpoint Subsystem Status

- セッション個別URL: https://blog.linuxplumbersconf.org/2017/ocw/sessions/4792.html
- Track: VFIO/IOMMU/PCI
- 日時: Thursday, September 14, 2017 5:20pm

### Description

The PCI Endpoint Subsystem can now be used to validate PCI Endpoint Controller in a linux environment. The talk aims to start the discussion on the following challenges:

The PCI Endpoint controller can be configured to work as different Endpoint Functions. In such case what is the best way to get device ID (since getting a device id for all possible use cases might not be possible)?

The PCI Endpoint Subsystem for programming NVM controller

Overlaps with NTB framework and possible unification strategies

### One Line Summary

Status update on the PCI Endpoint Framework and next set of challenges

### 添付資料URL

- [slides](https://blog.linuxplumbersconf.org/2017/ocw/system/presentations/4792/original/ep framework.pdf)（file）

<a id="session-4809"></a>
## 72. NVMe Surprise Removal

- セッション個別URL: https://blog.linuxplumbersconf.org/2017/ocw/sessions/4809.html
- Track: VFIO/IOMMU/PCI
- 日時: Thursday, September 14, 2017 5:40pm

### Description

Over the years surprise drive removal has been solved multiple times for various storage stacks like SCSI, SATA, SAS as a collective community effort involving drive vendors, OEMs, OS vendors and kernel developers. This problem has largely remained unsolved for NVMe flash controllers.

Recent work like https://www.spinics.net/lists/linux-pci/msg58123.html have been welcome changes towards solving this problem in the kernel PCI subsystem.
However, there are many other scenarios that can break the system on a NVMe drive surprise removal.

In this talk and discussion we bring to fore the challenges, test case scenarios and related stack problems that impede support for NVMe drive surprise removal. We also discuss possible solutions and steps the community as a whole could take to solve this problem. Solving this problem will go a long way in plumbing the storage stack for NVMe devices.

### One Line Summary

Discussion on problems related to supporting NVMe surprise removal

### 添付資料URL

掲載なし

<a id="session-4699"></a>
## 73. userfaultfd: post-copy VM migration and beyond

- セッション個別URL: https://blog.linuxplumbersconf.org/2017/ocw/sessions/4699.html
- Track: Refereed Presentations
- 日時: Thursday, September 14, 2017 2:50pm

### Description

Userfaultfd is a mechanism that allows user-space paging implementation.

Userfaultfd was originally designed for post-copy migration of virtual machines, but applies to different use cases, such as implementation of volatile ranges, containers migration, improvement of robustness of shared memory, efficient memory snapshotting etc.

This talk will cover the current status and supported features of userfaultfd, work being in progress and future development plans.

Audio

### One Line Summary

userfaultfd: current features and limitations and future development

### 添付資料URL

- [slides](https://blog.linuxplumbersconf.org/2017/ocw/system/presentations/4699/original/userfaultfd_ post-copy VM migration and beyond.pdf)（file）

<a id="session-4683"></a>
## 74. Reader/writer Range Locking

- セッション個別URL: https://blog.linuxplumbersconf.org/2017/ocw/sessions/4683.html
- Track: Refereed Presentations
- 日時: Thursday, September 14, 2017 4:00pm

### Description

Range locking improves parallelism by fine graining locks which can cause bottlenecks and loss of performance, such as the infamous mmap_sem. As such there as been active efforts to upstream a scalable reader/writer range lock (which can also aid DAX and lustre, to mention some users). The session will update and discuss key implementation details such as fairness, performance and comparisons with a more traditional rw-semaphore.

Audio

### One Line Summary

Discuss features and design of a fair, sleepable range reader/writer lock for the linux kernel.

### 添付資料URL

- [slides](https://blog.linuxplumbersconf.org/2017/ocw//system/presentations/4683/original/dbueso-lpc17-rangelock-v1.pdf)（file）


- スケジュール掲載のアーカイブURL: https://blog.linuxplumbersconf.org/2017/ocw/system/presentations/4683/original/dbueso-lpc17-rangelock-v1.pdf
<a id="session-4711"></a>
## 75. MD raid general discussion

- セッション個別URL: https://blog.linuxplumbersconf.org/2017/ocw/sessions/4711.html
- Track: BoFs
- 日時: Thursday, September 14, 2017 5:30pm

### Description

In the last years, we have many development activities in md raid, e.g.
- Raid5 cache
This is an effort to close raid5 writing hole (data lost when system crash happens), the original idea was from Ext4 file system journal (this is why its earlier name was raid5-journal). Now raid5 cache can be used to improve performance for writing burst and improve tolerance of writing hole.
- Partial parity log
This is another effort to close raid5 writing hole. In degraded state, there is no way to recalculate parity, because one of the disks is missing. Raid5 partial parity log allows recalculating the parity, it does not protect on-flight data, just make data consistency on disks.
- Raid1 clustering
This is an in kernel distributed data mirroring implementation, mirror devices of the raid1 can be from different servers far from each other in different data center. Users may have distribted clustering data duplication on md raid1.
- Sysfs interface for mdadm
Currently mdadm tool mixes ioctl and sysfs interface together to communicate with kernel code. And kernel code has to serve for both interface with different code paths. Now mdadm developers want to unify the interface to a set of sysfs files, it requires effort from both kernel space and user space. The benefit is, we can have a unified code path in both kernel space and user space, which is more clear when communication happens between mdadm and md kernel code.
- Performance improvement for NVMe devices
Lockless I/O submission on RAID1, DISCARD improvement on RAID0, which improvements performance on fast NVMe SSDs.
- Device-mapper (dm-raid target) interface

Here are discussion topics in mind, feel free to add more topics into,
- Road map of Partial Parity Log development
- Road map of clustered raid development
- Sysfs interface improvement for mdadm and MD Raid
- Mdadm test suite
- Sync up between raid1 and raid10, there are some features which is only available in raid1 such as new I/O barrier and Write behind (maybe more).
- dm raid interface

Proposed schedule
1) Roadmap sharing for:
 – raid5 partial parity log
 – md clustering
 – sysfs interface improvement
 – mdadm test suite
2) Problem disucssion
 – Kernel space and user space collaboration for sysfs interface improvement
 – raid1 & raid10 sync up
 – dm raid interface

### One Line Summary

In the last years, there are many development activities in md raid, we need to sit together to discuss development road map, kernel and user space tool collaboration, and how to work with development of other subsystems. It is also open to other developers to join, all constructive comments are warmly welcome.

### 添付資料URL

掲載なし

<a id="session-4701"></a>
## 76. Modular Overlay Networking Solutions with the Container Network Interface

- セッション個別URL: https://blog.linuxplumbersconf.org/2017/ocw/sessions/4701.html
- Track: BoFs
- 日時: Thursday, September 14, 2017 5:30pm

### Description

The Container Network Interface (CNI) is becoming the de facto standard for implementing plugins for container runtimes, and is used by Mesos, Kubernetes, and Cloud Foundry. The same CNI standard makes it possible to implement networking as a modular component of your environment, enabling teams to swap in the best networking solution based on the infrastructure used.
This talk will walk through the process of building and implementing modular networking solutions, designed to swapped out based on use case. We’ll conclude with a demo of the solutions built, and include important takeaways for determining which overlay networking solutions are best suited for certain use cases.

### One Line Summary

Details of CNI, overview of IPSec and VXLAN plugins

### 添付資料URL

掲載なし

<a id="session-4643"></a>
## 77. Move your routing inside container

- セッション個別URL: https://blog.linuxplumbersconf.org/2017/ocw/sessions/4643.html
- Track: BoFs
- 日時: Thursday, September 14, 2017 5:30pm

### Description

A lot of people are using Linux for their routers. But the more advanced the router is, the more complex is the situation for the running software on the machine doing the routing.

Marian will show us, how moving the main purpose of the machine(routing) inside a container can:
- greatly simplify firewall setup
- solve some connectivity issues for the software running on the machine
- improve the security of the machine
- add new possibilities for the machine

Slides: https://www.slideshare.net/azilian/moving-your-router-inside-container

### One Line Summary

You will learn about the benefits of moving all your routing from the host machine to a container running on the host.

### 添付資料URL

掲載なし

<a id="session-4698"></a>
## 78. NVMe Surprise Removal

- セッション個別URL: https://blog.linuxplumbersconf.org/2017/ocw/sessions/4698.html
- Track: BoFs
- 日時: Thursday, September 14, 2017 5:30pm

### Description

Over the years surprise drive removal has been solved multiple times for various storage stacks like SCSI, SATA, SAS as a collective community effort involving drive vendors, OEMs, OS vendors and kernel developers. This problem has largely remained unsolved for NVMe flash controllers.

Recent work like https://www.spinics.net/lists/linux-pci/msg58123.html  have been welcome changes towards solving this problem in the kernel PCI subsystem.
However, there are many other scenarios that can break the system on a NVMe drive surprise removal.

In this talk and discussion we bring to fore the challenges, test case scenarios and related stack problems that impede support for NVMe drive surprise removal. We also discuss possible solutions and steps the community as a whole could take to solve this problem. Solving this problem will go a long way in plumbing the storage stack for NVMe devices.

### One Line Summary

A discussion on the challenges, stack plumbing required to support NVMe Surprise removal

### 添付資料URL

掲載なし

<a id="session-4657"></a>
## 79. Real-Time Linux Users Discussion

- セッション個別URL: https://blog.linuxplumbersconf.org/2017/ocw/sessions/4657.html
- Track: BoFs
- 日時: Thursday, September 14, 2017 5:30pm

### Description

Informal face to face forum to discuss user experiences, issues, and feature requests, together with the developers and the stable maintainer.

The agenda will be led by the group, but we can get things started with a PREEMPT_RT status update, including what has been merged, what has been added, and what remains to merge into mainline.

### One Line Summary

Open discussion with Real-Time Linux users, developers, and the stable RT maintainer.

### 添付資料URL

掲載なし

<a id="session-4679"></a>
## 80. State of UEFI Technology

- セッション個別URL: https://blog.linuxplumbersconf.org/2017/ocw/sessions/4679.html
- Track: BoFs
- 日時: Thursday, September 14, 2017 5:30pm

### Description

This talk will cover the latest updates to the UEFI specifications released this year. Covering features such as UEFI variables, HTTP Network Boot, NVDIMM, Secure Boot, and capsule update. Additionally, it will cover which features were submitted to the Linux distributions. Lastly, the talk will conclude with UEFI SCT updates and other tests like the Linux UEFI Validation (LUV) and the Linux Firmware Test Suite (FWTS).

### One Line Summary

Updates on UEFI new features in the latest released UEFI specifications

### 添付資料URL

- [slides](https://blog.linuxplumbersconf.org/2017/ocw//system/presentations/4679/original/StateofUEFI2017LinuxPlumbers.pdf)（file）


- スケジュール掲載のアーカイブURL: https://blog.linuxplumbersconf.org/2017/ocw/system/presentations/4679/original/StateofUEFI2017LinuxPlumbers.pdf
<a id="session-4712"></a>
## 81. AVX technology and performance challenges

- セッション個別URL: https://blog.linuxplumbersconf.org/2017/ocw/sessions/4712.html
- Track: BoFs
- 日時: Thursday, September 14, 2017 6:30pm

### Description

A few weeks ago a basic patch to set dl_platform and dl_hwcap from CPU features in dynamic linker was merged in glibc master for 2.26 release. This gives the capability to set optimized libraries at runtime. This BoF is for discuss the performance opportunities and how to adapt the Linux distributions to this new glibc feature

### One Line Summary

Discussion the challenges and plumbing required to support AVX in multiple Linux packages and distributions

### 添付資料URL

掲載なし

<a id="session-4715"></a>
## 82. DRM/KMS open source userspace support

- セッション個別URL: https://blog.linuxplumbersconf.org/2017/ocw/sessions/4715.html
- Track: BoFs
- 日時: Thursday, September 14, 2017 6:30pm

### Description

The DRM/KMS subsystem in the Linux kernel mandates that driver’s features implemented in the mainline need to be supported by userspace applications that are non-trivial and available under a Free/Open Source license.

Currently there are no open source apps or graphical stacks in the userspace that make use or exercise all the functionality exposed by DRM/KMS (atomic updates, fences, writeback in the future). Android’s HWComposer has been driving the requirements for non-x86 graphics hardware for a few years and only recently efforts have been made to create a version that uses DRM/KMS APIs. Wayland/Weston is an alternative graphics stack that is catching up quickly in terms of features, but it still has no established support for new DRM/KMS features.

This session is an open forum for getting up-to-date on the latest development in the userspace and for discussions on the support they need to implement the latest DRM/KMS APIs.

### One Line Summary

Discussion on the available open source userspace apps that fully supports DRM/KMS features (atomic, fences, writeback, etc)

### 添付資料URL

掲載なし

<a id="session-4723"></a>
## 83. IPMI, MCTP, and building the BMC interface

- セッション個別URL: https://blog.linuxplumbersconf.org/2017/ocw/sessions/4723.html
- Track: BoFs
- 日時: Thursday, September 14, 2017 6:30pm

### Description

Almost all of the work in the Linux kernel surrounding interfacing between the host CPU and the BMC has so far been focussed on the host side and even then has been almost completely restricted to IPMI.

In this session we will discuss what the BMC side of IPMI and sister protocols such as IPMB should look like and how this might fit into the OpenBMC ecosystem. We will discuss adopting MCTP and possible implementations. Although these topics are a logical place to start this conversation; the main purpose is figuring out what the interface between the host and the BMC should look like from the BMC’s perspective.

Etherpad: https://etherpad.openstack.org/p/LPC2017_BMC

### One Line Summary

Starting a conversation about what the interface from the host to the BMC should look like from the perspective of the BMC.

### 添付資料URL

掲載なし

<a id="session-4717"></a>
## 84. Improving Real Time Communication on Linux platform

- セッション個別URL: https://blog.linuxplumbersconf.org/2017/ocw/sessions/4717.html
- Track: BoFs
- 日時: Thursday, September 14, 2017 6:30pm

### Description

When it comes to voice and video over IP, most people nowadays are quick to use
Skype, Whatsapp, or Viber. These systems come with a big community of people
though this Software is only free as free as in beer. Protocols and proprietary,
privacy is basically non existent. There are though several free alternatives like
Jitsi, Linphone, Ekiga, Tox (qtox) and Mumble. However, the communities are
often small and due to a lack of servers firewall traversal can be very cumbersome.
Even if all these techniques are also available as open source software, bootstrapping any business relevant network based on these free alternatives is still hard.

Do you have phone numbers in email messages that you have never copied to your address book?  Would you like
a systematic way to find them and compare the to your address book?
The talk will be about the project worked for Google Summer of Code on improving real time communication and the first part of it is email mining in order to extract necessary details from the mail and make it into web interface.

### One Line Summary

Web interface for e-mail mining

### 添付資料URL

掲載なし

<a id="session-4721"></a>
## 85. Overview and Feedback of ARM EBBR

- セッション個別URL: https://blog.linuxplumbersconf.org/2017/ocw/sessions/4721.html
- Track: BoFs
- 日時: Thursday, September 14, 2017 6:30pm

### Description

In the embedded space, general purpose Linux distributions have difficulty supporting embedded hardware. Often this is due to the absence of standard firmware interfaces and behaviour required to boot and install an OS. This isn’t a problem when the OS is custom built for the hardware, but there are many cases where using an existing distribution would simplify development and maintenance of the final system.

As part of an effort to improve distribution support for embedded platforms, ARM is drafting a new specification called Embedded Base Boot Requirements to document the required firmware core functionality and behaviour on ARM platforms to be supportable by Distributions. This BoF  will provide an overview of the current EBBR draft and collect feedback from Linux and distro engineers. ARM is collecting this feedback to make sure the document is realistic and useful to embedded Linux developers.

### One Line Summary

Overview and feedback session on ARM Embedded Base Boot Requirements (EBBR)

### 添付資料URL

掲載なし

<a id="session-4722"></a>
## 86. Testing for stable+distro kernels

- セッション個別URL: https://blog.linuxplumbersconf.org/2017/ocw/sessions/4722.html
- Track: BoFs
- 日時: Thursday, September 14, 2017 6:30pm

### Description

A lot of the testing today is focused on upstream kernels. There is a lot of interesting work there, which is exposing a number of bugs, security or otherwise. A lot of these are also being backported to stable, or to distro kernels.

We are interested in talking about how much of this work can be used for stable kernels. How many distros are already adopting something similar?

### One Line Summary

How are we testing stable and distro kernels today?

### 添付資料URL

掲載なし

<a id="session-4815"></a>
## 87. BIOS Manageability discussion

- セッション個別URL: https://blog.linuxplumbersconf.org/2017/ocw/sessions/4815.html
- Track: BoFs
- 日時: Thursday, September 14, 2017 7:30pm

### Description

After a heated discussion on LKML a few months ago, this is to discuss more about what an interface that can manage BIOS setup options can look like.

Some manufacturers are pushing for cross-OS industry standard manageability interfaces with the goals of having parity at the options that can be manipulated without compromising security.

### One Line Summary

Discussion around how to present interfaces that manage BIOS settings to the kernel and userspace

### 添付資料URL

掲載なし

<a id="session-4749"></a>
## 88. Evangelizing Kernel Programming to Students and New Developers

- セッション個別URL: https://blog.linuxplumbersconf.org/2017/ocw/sessions/4749.html
- Track: BoFs
- 日時: Thursday, September 14, 2017 7:30pm

### Description

We want to bring together people who are interested in teaching kernel programming to aspiring kernel programmers. The best way to do this is for newcomers to start work on small kernel patches that get accepted upstream, along with proper mentorship. There is much code still in the kernel for old hardware that is perfect for such work. We want to collaborate with veteran programmers to identify kernel subsystems that have lots of opportunities to ‘polish’ older, less-used code.

### One Line Summary

Create a community that provides students and new developers the necessary tools and opportunities to write kernel patches that get accepted upstream.

### 添付資料URL

掲載なし

<a id="session-4831"></a>
## 89. Zero-copy Receive for virtio-net/vhost devices

- セッション個別URL: https://blog.linuxplumbersconf.org/2017/ocw/sessions/4831.html
- Track: BoFs
- 日時: Thursday, September 14, 2017 7:30pm

### Description

In para-virtual networking with virtio-net/vhost, the copying of packets between the hypervisor and the guest is one of the major sources of overhead, especially for large packets. Although zero-copy transmit was merged into the Linux kernel a few years ago, the “receive side zero copy” item is still in the KVM NetworkingTodo. This BoF discusses issues in implementing zero-copy receive for virtio-net and vhost that leverages receive-side steering abilities of modern high speed network cards.

### One Line Summary

Leverage receive-side steering abilities of modern high speed network cards to implement zero-copy receive for virtio-net and vhost.

### 添付資料URL

- [slides](https://blog.linuxplumbersconf.org/2017/ocw/system/presentations/4831/original/Zero-copy Receive Path in Virtio v4.pptx)（file）

<a id="session-4813"></a>
## 90. membarrier: core serialization for reclaim of JIT code memory

- セッション個別URL: https://blog.linuxplumbersconf.org/2017/ocw/sessions/4813.html
- Track: BoFs
- 日時: Thursday, September 14, 2017 7:30pm

### Description

(Issue resolved in Hallway track due to unscheduled resolution of problem)

This is an attempt to gather scheduler maintainers, and architecture maintainers, in the same room to get feedback on core serialization guarantees from each architecture when the scheduler is executed, and the requirements each architecture has with respect to core serialization in situations of reclaim of JIT code.

### One Line Summary

We need input from architecture maintainers about the best way to proceed to guarantee core serialization instructions within the membarrier system call (and possibly within the scheduler).

### 添付資料URL

掲載なし

<a id="session-4669"></a>
## 91. User space contiguous memory allocation for DMA

- セッション個別URL: https://blog.linuxplumbersconf.org/2017/ocw/sessions/4669.html
- Track: Refereed Presentations
- 日時: Friday, September 15, 2017 9:45am

### Description

While there are several ways for a user to allocate memory in user-space, none allows for contiguous physical memory allocation of multiple page frames. Allocations of this type are needed to meet the challenges raised by today’s high bandwidth network, storage improvements, and new graphics devices. Each of these technologies can be aided by applying new contiguous memory allocation methodologies that will enable faster DMA transfers. As a side benefit, contiguous memory also delivers better performance for real-time applications that could greatly benefit from CPU cache predictions. In the presentation we discuss multiple approaches to obtaining contiguous memory and suggest an implementation of a new mmap flag (MAP_CONTIG), first introduced in IEEE Std 1003.1.

Audio

### One Line Summary

A discussion of approaches to obtain contiguous memory in user space for DMA including a POSIX conformant mmap API

### 添付資料URL

- [slides](http://linuxplumbersconf.org/2017/ocw//system/presentations/4669/original/Support user space POSIX conformant contiguous__v1.00.pdf)（file）


- スケジュール掲載のアーカイブURL: https://blog.linuxplumbersconf.org/2017/ocw/system/presentations/4669/original/Support user space POSIX conformant contiguous__v1.00.pdf
<a id="session-4708"></a>
## 92. LKMM overview

- セッション個別URL: https://blog.linuxplumbersconf.org/2017/ocw/sessions/4708.html
- Track: Linux-Kernel Memory Model Workshop
- 日時: Friday, September 15, 2017 

### Description

This overview will provide a very brief review of the Linux kernel memory model (LKMM) purpose, installation instructions, litmus tests construction, and other hints.

Slides containing this information will be posted ahead of time, allowing participants to install and run this tool at their own pace.

### One Line Summary

Quick overview of Linux kernel memory model: How to install and use

### 添付資料URL

- [slides](https://blog.linuxplumbersconf.org/2017/ocw//system/presentations/4708/original/LKMM-overview.2017.09.15b.pdf)（file）


- スケジュール掲載のアーカイブURL: https://blog.linuxplumbersconf.org/2017/ocw/system/presentations/4708/original/LKMM-overview.2017.09.15b.pdf
<a id="session-4709"></a>
## 93. LKMM Installation and Use Workshop

- セッション個別URL: https://blog.linuxplumbersconf.org/2017/ocw/sessions/4709.html
- Track: Linux-Kernel Memory Model Workshop
- 日時: Friday, September 15, 2017 

### Description

This is a free-form workshop to help developers install and use the Linux kernel memory model (LKMM).  There will be several people attending who have installed and used LKMM to help out.

### One Line Summary

Get LKMM installed and make use of it!

### 添付資料URL

- [slides](http://linuxplumbersconf.org/2017/ocw//system/presentations/4709/original/LKMM-overview.2017.09.15a.pdf)（file）


- スケジュール掲載のアーカイブURL: https://blog.linuxplumbersconf.org/2017/ocw/system/presentations/4709/original/LKMM-overview.2017.09.15a.pdf
<a id="session-4821"></a>
## 94. ktest - How is it used and what more can be done

- セッション個別URL: https://blog.linuxplumbersconf.org/2017/ocw/sessions/4821.html
- Track: Testing and Fuzzing
- 日時: Friday, September 15, 2017 

### Description

ktest.pl has been in the kernel since 2.6.38. It is a testing framework to automate various testing. It can test patch sets, individual builds, bisecting and more. The focus of this discussion will be on how people currently use ktest.pl and what more can be added to it.

### One Line Summary

Discussion on ways to improve ktest and how it is used

### 添付資料URL

掲載なし

<a id="session-4822"></a>
## 95. Fuzzers Panel

- セッション個別URL: https://blog.linuxplumbersconf.org/2017/ocw/sessions/4822.html
- Track: Testing and Fuzzing
- 日時: Friday, September 15, 2017 

### Description

Get the maintainers of the various Fuzzers to talk about where fuzzing is going

### One Line Summary

Fuzzers Panel

### 添付資料URL

掲載なし

<a id="session-4823"></a>
## 96. Update on Distro/Stable testing

- セッション個別URL: https://blog.linuxplumbersconf.org/2017/ocw/sessions/4823.html
- Track: Testing and Fuzzing
- 日時: Friday, September 15, 2017 

### Description

A summary of the discussions during the BoF and discussions arising from that.

### One Line Summary

Update from the BoF

### 添付資料URL

掲載なし

<a id="session-4824"></a>
## 97. Kernel ABI

- セッション個別URL: https://blog.linuxplumbersconf.org/2017/ocw/sessions/4824.html
- Track: Testing and Fuzzing
- 日時: Friday, September 15, 2017 

### Description

Last year we discussed creating a specification for the kernel’s ABI.

We have a working skeleton, but are missing the meat – actual syscall and ioctl definitions (and the skeleton could use some work too).

Let’s discuss that for a bit…

### One Line Summary

Kernel ABI

### 添付資料URL

掲載なし

<a id="session-4825"></a>
## 98. KernelMemorySanitizer against uninitialized memory

- セッション個別URL: https://blog.linuxplumbersconf.org/2017/ocw/sessions/4825.html
- Track: Testing and Fuzzing
- 日時: Friday, September 15, 2017 

### Description

KernelMemorySanitizer is a new tool that detects uses of uninitialized values in the Linux kernel.
The tool is based on compiler instrumentation and is times faster than kmemcheck, so one can use it with fuzzers or other load.
I’ll outline some implementation details and the possible applications of the same approach to other problems in the kernel.

### One Line Summary

I'll present KernelMemorySanitizer, a new tool for detecting uses of uninitialized values in the kernel.

### 添付資料URL

- [slides](https://blog.linuxplumbersconf.org/2017/ocw/system/presentations/4825/original/KMSAN presentation for LPC 2017.pdf)（file）

<a id="session-4826"></a>
## 99. syzkaller status update

- セッション個別URL: https://blog.linuxplumbersconf.org/2017/ocw/sessions/4826.html
- Track: Testing and Fuzzing
- 日時: Friday, September 15, 2017 

### Description

Syzkaller is a coverage-guided system call fuzzer for the Linux kernel. We give a quick update on what has been done in the last year and what are the directions for the future work.

### One Line Summary

A quick update on syzkaller

### 添付資料URL

掲載なし

<a id="session-4830"></a>
## 100. Unit Testing and Mocking

- セッション個別URL: https://blog.linuxplumbersconf.org/2017/ocw/sessions/4830.html
- Track: Testing and Fuzzing
- 日時: Friday, September 15, 2017 

### Description

Currently most testing in the kernel is done on a booted kernel and is primarily driven by the userland. Some portions of the kernel may be well tested, but in practice many code paths in the kernel are not exercised before code is submitted. Unit testing and mocking is one possible way to make it much easier to exercise arbitrary code paths.

### One Line Summary

Discussion on the possible value of adding unit tests to the kernel.

### 添付資料URL

掲載なし

<a id="session-4832"></a>
## 101. A unit test framework for the Linux kernel

- セッション個別URL: https://blog.linuxplumbersconf.org/2017/ocw/sessions/4832.html
- Track: Testing and Fuzzing
- 日時: Friday, September 15, 2017 

### Description

This talk will present and demonstrate a simple and nonintrusive framework 
for writing and selectively running unit tests on external and internal 
kernel APIs.

### One Line Summary

A unit test framework for the Linux kernel

### 添付資料URL

掲載なし

<a id="session-4836"></a>
## 102. Automated testing of LKML patches with Clang

- セッション個別URL: https://blog.linuxplumbersconf.org/2017/ocw/sessions/4836.html
- Track: Unconference I
- 日時: Friday, September 15, 2017 9:30am

### Description

It’s useful to have bots automatically test proposed patches and notify authors when they
fail to compile in certain configurations.  Currently for Clang, a few folks interested in supporting it email
authors when patches break things, but regression finding is currently not automated for Clang.  I’d like to
pick some brains as to what is a smart way to automatically test proposed patches for a seemingly limitless
number of kernel configurations.

### One Line Summary

It's useful to have bots automatically test proposed patches and notify authors when they
fail to compile in certain configurations.  Currently for Clang, a few folks interested in supporting it email
authors when patches break things, but regression finding is currently not automated for Clang.  I'd like to
pick some brains as to what is a smart way to automatically test proposed patches for a seemingly limitless
number of kernel configurations.

### 添付資料URL

掲載なし

<a id="session-4834"></a>
## 103. Support for adding DT based thermal zones at runtime

- セッション個別URL: https://blog.linuxplumbersconf.org/2017/ocw/sessions/4834.html
- Track: Unconference I
- 日時: Friday, September 15, 2017 11:00am

### Description

During a recent project I encountered an issue where I needed support for thermal
zones that get instantiated by a devicetree overlay. In our specific case we had temperature sensors
on a daughtercard that is swap-able. I haven’t found a good solution on how to make the current
of-thermal code work with runtime added thermal-zones, (assumption is all thermal zones present at boot)
 and was wondering if people have clever ideas.

### One Line Summary

During a recent project I encountered an issue where I needed support for thermal
zones that get instantiated by a devicetree overlay. In our specific case we had temperature sensors
on a daughtercard that is swap-able. I haven't found a good solution on how to make the current
of-thermal code work with runtime added thermal-zones, (assumption is all thermal zones present at boot)
 and was wondering if people have clever ideas.

### 添付資料URL

掲載なし

<a id="session-4837"></a>
## 104. ktask: multithread cpu-intensive kernel work

- セッション個別URL: https://blog.linuxplumbersconf.org/2017/ocw/sessions/4837.html
- Track: Unconference I
- 日時: Friday, September 15, 2017 11:40am

### Description

As memory size and CPU counts increase on the largest systems, certain paths in the kernel that are single-threaded today are not scaling well and will become even bigger bottlenecks in the future.  Examples include zeroing the biggest huge pages (e.g. 1G on x86), walking a process’s entire page table, and freeing large ranges of pages.

These paths have been well optimized in one thread, so now it’s a matter of scaling up the CPUs to match the amount of work to be done.

One solution to this problem is ktask, a generic framework built on top of workqueues that takes care of splitting up a large task, starting a number of threads appropriate for the size of the task and the system, and load balancing the work between these threads.  ktask uses internal limits to maintain an appropriate level of concurrency across the system.

I want to get feedback on the overall approach and discuss similar scalability issues others are having in the kernel.

### One Line Summary

As memory size and CPU counts increase on the largest systems, certain paths in the kernel that are single-threaded today are not scaling well and will become even bigger bottlenecks in the future.  Examples include zeroing the biggest huge pages (e.g. 1G on x86), walking a process’s entire page table, and freeing large ranges of pages.

These paths have been well optimized in one thread, so now it's a matter of scaling up the CPUs to match the amount of work to be done.

One solution to this problem is ktask, a generic framework built on top of workqueues that takes care of splitting up a large task, starting a number of threads appropriate for the size of the task and the system, and load balancing the work between these threads.  ktask uses internal limits to maintain an appropriate level of concurrency across the system.

I want to get feedback on the overall approach and discuss similar scalability issues others are having in the kernel.

### 添付資料URL

掲載なし

<a id="session-4703"></a>
## 105. ZUFS - Zero-copy (Low Latency) User-mode FS

- セッション個別URL: https://blog.linuxplumbersconf.org/2017/ocw/sessions/4703.html
- Track: Refereed Presentations
- 日時: Friday, September 15, 2017 11:00am

### Description

FUSE enables user space file systems ever since kernel 2.6.14. It is a widely popular vehicle for rapid development and tens of file systems have used it to date. FUSE is asynchronous in nature and heavily relies on the operating system page cache. It was designed with hard drive latency in mind and was measured to add penalty of 12.5 to 1000 micro second [us], depending on the load.

Emerging persistent memory technologies, such as NVDIMM-N and 3D XPoint / MRAM / ReRAM based NVDIMM, operate at near memory speed and require a different user space file system mechanism. One that is tuned to latency.

The motivation of this work is to enable new bread of User-mode work, based on above Technologies that typically respond within a single micro second – faster than any caching, redundant data copying and queuing.

ZUFS, pronounced Zoo-FS and stands for Zero-copy User-mode FS is a new kernel project designed to fill that gap.

ZUFS is designed from the get go to provide an example of a full, PMEM based, FS, to demonstrate Speed, behavior and correctness. But the motivation is that not only full flagged Filesystems need apply. Any other User-Mode Service that wants to very effectively with modern direct mmapped access, service many applications and can enjoy a filesystem like interface. Can enjoy this new ABI from Kernel.
The emphasis here is on multi-threaded, Low Latency, synchronous, Zero copy, direct mapped type access from the application to the Server-Application. And vise versa direct mapping of Server resources into the application.

All this without sacrificing security or robustness.

And how we think we can do this? Please see the attached paper, and come to our talk. But mainly this is more of an open question then a ready made proposal.

Have a good day
Boaz

Audio

### One Line Summary

A new interface for a new bread of User-mode filesystems that require extremely Low-Latency, synchronous, NUMA aware, DAX capable FileSystems.

### 添付資料URL

- [slides](http://linuxplumbersconf.org/2017/ocw//system/presentations/4703/original/ZUFS_for_LinuxPlumbers_LPC.pptx)（file）


- スケジュール掲載のアーカイブURL: https://blog.linuxplumbersconf.org/2017/ocw/system/presentations/4703/original/ZUFS_for_LinuxPlumbers_LPC.pptx
<a id="session-4694"></a>
## 106. FB modifiers (supporting end-to-end graphics compression)

- セッション個別URL: https://blog.linuxplumbersconf.org/2017/ocw/sessions/4694.html
- Track: Refereed Presentations
- 日時: Friday, September 15, 2017 11:50am

### Description

Framebuffer modifiers are a relatively new concept introduced into the DRM core which allows graphics clients a way of specifying to the KMS implementation layout constraints or additions to the framebuffer. In some cases, these modifiers don’t have many implications outside of telling the display about the memory layout. In other cases, the entire graphics stack need to be aware of the modifiers and interoperate with the layers.

Modern GPUs are capable of working with [lossless] compressed data sets throughout their pipeline with the purpose of reducing memory bandwidth requirements. Rendered content is stored in memory in a compressed format, and operated on throughout the pipeline without requirement decompression. Finally, the display will decompress the data on the fly. This talk will specifically explore how we’re plumbing modifiers through in support of this end to end lossless compression for Intel platforms (AFBC in ARM parlance).

Several developers from different employers have contributed to the code, and design to support this feature through all levels of the stack (X, Wayland/Weston, Mutter, Mesa, DRM core, and i915).

(This code may or may not be landed by the time of the talk)

Audio

### One Line Summary

Summarize the design and challenges in implementing end to end lossless compression in the graphics stack.

### 添付資料URL

- [slides](http://www.linuxplumbersconf.net/2017/ocw//system/presentations/4694/original/Framebuffer modifiers.pdf)（file）


- スケジュール掲載のアーカイブURL: https://blog.linuxplumbersconf.org/2017/ocw/system/presentations/4694/original/Framebuffer modifiers.pdf
<a id="session-4652"></a>
## 107. Power Management Challenges in Linux

- セッション個別URL: https://blog.linuxplumbersconf.org/2017/ocw/sessions/4652.html
- Track: Refereed Presentations
- 日時: Friday, September 15, 2017 2:00pm

### Description

Support for a number of key power management features, like system suspend and hibernation, CPU idle states management, CPU performance scaling, runtime power management of I/O devices and more, has been added to Linux over the last several years.  However, there are still challenges facing Linux power management developers.  For example, well-established system suspend code flows have had to be modified quite recently in response to new hardware design trends and the kernel’s system hibernation implementation, which turns out to be missing some desirable features, will need to be rethought with the advent of byte-addressable persistent memory.  Moreover, challenges related to dependencies between different system components resulting from ever-increasing hardware integration remain relevant.  In the CPU power management area there are novel design ideas, like heterogeneous configurations, and new hardware features, like hardware-managed performance scaling, that need to be addressed at the operating system level.  In some cases, there are timing-related limitations, like response time deadlines that cannot be exceeded or sustained throughput requirements that have to be taken into account.  In addition to that, problems appear when systems are thermally challenged or when their power supplies are not capable of supporting all of the system components at full capacity at the same time and they often need to be addressed by reducing the capacity of specific parts of the system on demand.  All of this means that the future of power management in Linux will certainly be interesting.

Audio

### One Line Summary

There are still challenges facing Linux power management developers in both system-wide and working-state PM areas.

### 添付資料URL

- [slides](https://blog.linuxplumbersconf.org/2017/ocw/system/presentations/4652/original/linux_pm_challenges.pdf)（file）

<a id="session-4767"></a>
## 108. Checkpoint/Restart for distributed applications

- セッション個別URL: https://blog.linuxplumbersconf.org/2017/ocw/sessions/4767.html
- Track: Checkpoint-Restart
- 日時: Friday, September 15, 2017 2:00pm

### Description

Scaling up the single application checkpoint/restart to extend it to parallel applications running across distributed resources is a delicate operation, one that can easily incur a significant, and certainly undesirable performance impact. From coordination between distributed processes, to ensuring no message has been lost or duplicated, several checkpoint/restart challenges are addressed and detailed. The talk covers in details different distributed checkpoint/restart protocols, and gives details about ongoing efforts to incorporate and optimize support for checkpoint/restart into an existing MPI implementation, Open MPI.

### One Line Summary

distributed checkpoint restart protocols

### 添付資料URL

掲載なし

<a id="session-4739"></a>
## 109. Improving JVM Application Migration and Profiling with Checkpoint/Restore

- セッション個別URL: https://blog.linuxplumbersconf.org/2017/ocw/sessions/4739.html
- Track: Checkpoint-Restart
- 日時: Friday, September 15, 2017 2:30pm

### Description

Managed runtimes such as the Java Virtual Machine represent increasingly used environments to run a variety of applications, ranging from simple end-user applications to Big Data server-side applications. These platforms, the JVM in particular, lack tools to efficiently: i) migrate applications between hosts (for example, in cloud environments) and ii) analyze/profile application’s memory. This talk covers some lines of research and real use cases that benefit from the collaboration between the JVM and Checkpoint/Restore tools, such as CRIU, to improve application migration and memory profiling.

### One Line Summary

Improving JVM migration and profiling by comibing C/R with internal JVM knowledge/techniques.

### 添付資料URL

- [slides](http://linuxplumbersconf.org/2017/ocw//system/presentations/4739/original/LinuxPlumbers'17.pdf)（file）


- スケジュール掲載のアーカイブURL: https://blog.linuxplumbersconf.org/2017/ocw/system/presentations/4739/original/LinuxPlumbers'17.pdf
<a id="session-4719"></a>
## 110. Popcorn Linux: Compiler, Operating System and Virtualization Support for Application/Thread Migration in Heterogeneous ISA Environments

- セッション個別URL: https://blog.linuxplumbersconf.org/2017/ocw/sessions/4719.html
- Track: Checkpoint-Restart
- 日時: Friday, September 15, 2017 3:00pm

### Description

The Popcorn Linux project (http://www.popcornlinux.org/) aims to help developers, system administrators, and users reap the performance and energy consumption benefits of heterogeneous hardware using highly programmable shared-memory programming languages like C and C++.  Popcorn Linux targets OS-capable processors, including clusters of machines equipped with CPUs of different Instruction Set Architectures (ISAs), as well as future Chip Multiprocessors integrating cores of multiple ISAs. Popcorn Linux aims to reach this objective while still maintaining high programmability, i.e. without requiring modification of existing application code.

To achieve this goal, a cornerstone of our work is to enable migration of C/C++ applications from one ISA to another. Popcorn Linux currently implements this feature between the x86-64 and ARM64 ISAs, using a compiler toolchain (based on LLVM) which produces multi-ISA binaries, a distributed operating system (based on Linux), and a set of components which transform the state of an application from one ISA to the other at runtime. Taken together, this infrastructure enables POSIX/OpenMP C/C++ applications, including legacy code, to transparently execute in multi-ISA environments with little architecture-specific code, allowing high performance and energy gains.

The first part of the talk will put the focus on the compiling infrastructure and present more generally the current implementation of our Arm64/x86-64 migration setup. The second part of the talk will depict the design and implementation of an in-kernel distributed shared memory system to ease thread migration. Finally, the third part of the talk will present ongoing work related
to migration of simple virtual machines (unikernels) across ISAs.

### One Line Summary

This talk will present the Popcorn Linux infrastructure, composed of compiler/operating system/virtualization support to enable application and thread migration across cores or machines of different Instruction-Set-Architecture.

### 添付資料URL

掲載なし

<a id="session-4751"></a>
## 111. Opened questions about container live-migration

- セッション個別URL: https://blog.linuxplumbersconf.org/2017/ocw/sessions/4751.html
- Track: Checkpoint-Restart
- 日時: Friday, September 15, 2017 3:30pm

### Description

= P.Haul =
Many users asks us how to migrate Docker containers. Unfortunately this feature isn’t implemented yet. You probably know about the P.Haul project, which is an extension for CRIU to implement a live-migration logic. Its first version is used in OpenVZ, but we found that it may be better to have another version in Go to implement live-migration of Docker containers. Pavel introduced a second version a few month ago and now we are looking for a volunteer, who are ready to integrate it with Docker (Containerd?). In this part, I’m going to briefly describe how P.Haul works and how to integrate it with Docker. Any ideas about live-migration are welcome.

= Pre-dump vs Pipes =
It’s one more topic about live-migration. Current pre-dump mode suffers from several issues
It keeps all the memory in pipes, and their number can be huge due to limited one pipe size
It keeps all the memory in pipes and this memory is unreclaimable for that period
It infects tasks to drain memory from
We can try to use sys_read_process_vm() syscall to mitigate all of the above
No pipes, just copy data into temp buffer and send
Memory is always reclaimable
No infection is needed, just freeze, reset the tracker and proceed
The second way is less effective, because data are copied into a temporary user-space buffer, so a new syscall  sys_process_vmsplice() was introduced, it allows to splice memory of any process into a pipe. There is a few other ideas how to optimize live-migration.

= Nested-namespaces =
Last year we did a lot of work to support nested-namespaces. I want to describe the current status of this work. The main question here is how many people are interested in this feature. The code becomes much more complex and it is a big question whether to merge it to the master branch or not. By the way, this work may be useful to integrate CRIU with Kubernetes.

### One Line Summary

How to integrate P.Haul with Docker and how to fix criu pre-dump.

### 添付資料URL

- [slides](http://www.linuxplumbersconf.net/2017/ocw//system/presentations/4751/original/LPC2017.pdf)（file）


- スケジュール掲載のアーカイブURL: https://blog.linuxplumbersconf.org/2017/ocw/system/presentations/4751/original/LPC2017.pdf
<a id="session-4724"></a>
## 112. Memory tracking for iterative container migration

- セッション個別URL: https://blog.linuxplumbersconf.org/2017/ocw/sessions/4724.html
- Track: Checkpoint-Restart
- 日時: Friday, September 15, 2017 4:00pm

### Description

Iterative migration of containers requires ability to track changes in the process memory in order to transfer only pages that were changed between the iterations.

Currently the only mechanism available for process/container memory tracking is soft-dirty. It has problems and limitations that (hopefully) may be resolved with userfaultfd-WP.

This discussion is intended for to identify what is needed to use userfaultfd-WP for memory tracking in the iterative migration use-case, both on the kernel and the user-land sides.

### One Line Summary

Discuss usage of userfaultfd-WP for iterative container migration

### 添付資料URL

- [slides](https://blog.linuxplumbersconf.org/2017/ocw//system/presentations/4724/original/Memory tracking for iterative container migration.pdf)（file）


- スケジュール掲載のアーカイブURL: https://blog.linuxplumbersconf.org/2017/ocw/system/presentations/4724/original/Memory tracking for iterative container migration.pdf
<a id="session-4752"></a>
## 113. Towards perfect testing of applications checkpoint-restore

- セッション個別URL: https://blog.linuxplumbersconf.org/2017/ocw/sessions/4752.html
- Track: Checkpoint-Restart
- 日時: Friday, September 15, 2017 4:30pm

### Description

Since the project start the whole testing was about writing individual tests that exploit some Linux API bit and checking that criu saves it and restores well.

Eventually we’ve come to the conclusion, that this approach doesn’t work well, since the variety of API combinations exceeds the human ability to write tests.

In this talk I will try to outline the way to test CR and problems that appear while going one.

### One Line Summary

The talk is about our experience at CRIU with testing C/R technology.

### 添付資料URL

掲載なし

<a id="session-4745"></a>
## 114. Debugging with BPF sucks if you aren't a kernel developer

- セッション個別URL: https://blog.linuxplumbersconf.org/2017/ocw/sessions/4745.html
- Track: Tracing / BPF
- 日時: Friday, September 15, 2017 

### Description

BPF/BCC have weird gotchas that often bite even experienced developers in the ass.  In addition to that you often need a very intimate working knowledge of the kernel in order to even know where to look for a problem.  We are getting better at solving these problems, but it would be good to look at what problems we currently have and where we need to go to solve them.

### One Line Summary

Talk about ways to make using BPF less awful for non-kernel hackers.

### 添付資料URL

掲載なし

<a id="session-4764"></a>
## 115. addr->sym resolution by kernel in stack traces

- セッション個別URL: https://blog.linuxplumbersconf.org/2017/ocw/sessions/4764.html
- Track: Tracing / BPF
- 日時: Friday, September 15, 2017 

### Description

kernel reported user address are often hard to resolve in stack traces. let’s fix kernel to report resolved symbols/names instead of raw addresses.
This topic is a brainstorming discussion which will outline the problem and proposed solutions.

### One Line Summary

user stack trace to name resolution is hard. Thankfully kernel can help

### 添付資料URL

掲載なし

<a id="session-4766"></a>
## 116. Hardware trace re-construction support in kernel

- セッション個別URL: https://blog.linuxplumbersconf.org/2017/ocw/sessions/4766.html
- Track: Tracing / BPF
- 日時: Friday, September 15, 2017 

### Description

We begin with a discussion of shortcomings in  hardware trace reconstruction in scenarios where runtime compiled code is used. Two examples with Intel PT would be shown – static-key instrumentation (in kernel) and userspace JIT machines (such as uBPF) which either yield incorrect program flow or don’t yield a flow at all when used in conjunction with hardware traces. This is evident in other sites in kernel also when perf is used with intel PT and we try to reconstruct trace offline. To begin fixing this, a possible solution is discussed as a PoC patch to kernel ( https://github.com/tuxology/flowjit ) which would allow copies of JIT’ed pages to be saved and then queried during reconstruction. Feedback on this FlowJIT approach and inspirations from other approaches such as kmmiotrace ( https://www.kernel.org/doc/Documentation/trace/mmiotrace.txt ) or any other technique that comes up in discussion could be very helpful for implementing this feature.

### One Line Summary

Kernel-assisted trace re-construction for JITed code

### 添付資料URL

掲載なし

<a id="session-4769"></a>
## 117. Hypertracing: Tracing Through Virtualization Layers

- セッション個別URL: https://blog.linuxplumbersconf.org/2017/ocw/sessions/4769.html
- Track: Tracing / BPF
- 日時: Friday, September 15, 2017 

### Description

Tracing only inside virtual machine is not enough because  VMs have the illusion of absolute control over the physical resources. Previous work used trace merging of recorded host and guest traces with synchronization techniques to bring guest’s trace timestamps back to the same timespan as the host. However, this technique introduce much higher overhead in order to get nanoseconds degree of synchronization.

Hypertracing is a syncless tracing technique, which offload guest events, that will be recorded directly using host timestamps.

We Implemented Hypertracing in ftrace infrastructure for function tracing across all virtualization layers.

Performance overhead of Hypertracing will also be presented comparing it with Lttng, Ftrace and Perf.

### One Line Summary

Syncless technique for tracing virtual machine on any layer (nested too)

### 添付資料URL

- [slides](http://www.linuxplumbersconf.net/2017/ocw//system/presentations/4769/original/linux-plumbers-slides-short.pdf)（file）


- スケジュール掲載のアーカイブURL: https://blog.linuxplumbersconf.org/2017/ocw/system/presentations/4769/original/linux-plumbers-slides-short.pdf
<a id="session-4773"></a>
## 118. Tackling bpf uprobe performance

- セッション個別URL: https://blog.linuxplumbersconf.org/2017/ocw/sessions/4773.html
- Track: Tracing / BPF
- 日時: Friday, September 15, 2017 

### Description

Will present the initial dyninst based study to help improve performance of a subset of uprobe-attaching bpf programs. Pros and Cons will be presented. And then open the discussion on what are typical use cases, and whether dyninst approach is good or we need better one, etc.

### One Line Summary

Briefing the preliminary dyninst based study, and then discussions.

### 添付資料URL

掲載なし

<a id="session-4774"></a>
## 119. Next BPF Tools

- セッション個別URL: https://blog.linuxplumbersconf.org/2017/ocw/sessions/4774.html
- Track: Tracing / BPF
- 日時: Friday, September 15, 2017 

### Description

What BPF-based analysis tools can we develop next, and are we lacking any capabilities to implement them? This will be a quick discussion on upcoming tools, like chaingraphs and real-time heat maps, and any road blocks encountered. The speaker is also giving a talk on the current state of BPF tools for OSSNA1 shared with plumbers. This will be a short discussion on future work.

1 https://ossna2017.sched.com/event/BD1j/performance-analysis-superpowers-with-linux-bpf-brendan-gregg-netflix?iframe=no&w=100%&sidebar=yes&bg=no

### One Line Summary

Quick discussion of future BPF analysis tools

### 添付資料URL

掲載なし

<a id="session-4775"></a>
## 120. BPF Introspection with CTF

- セッション個別URL: https://blog.linuxplumbersconf.org/2017/ocw/sessions/4775.html
- Track: Tracing / BPF
- 日時: Friday, September 15, 2017 

### Description

While more and more BPF progs are running in production, there is growing need to have ways for trouble shooting.   We will discuss ideas about using CTF to do that.

### One Line Summary

Discuss about using CTF to do BPF introspection

### 添付資料URL

掲載なし

<a id="session-4777"></a>
## 121. Common Trace Format 2.0

- セッション個別URL: https://blog.linuxplumbersconf.org/2017/ocw/sessions/4777.html
- Track: Tracing / BPF
- 日時: Friday, September 15, 2017 

### Description

The work on Common Trace Format (CTF) 2.0 is ongoing (https://lists.linuxfoundation.org/pipermail/diamon-discuss/2016-October/000099.html). This would be a presentation of the main improvements to expect over CTF 1.8, and discussion in order to ensure the new major version of the format is a good fit for the audience use-cases.

### One Line Summary

Presentation of upcoming Common Trace Format (CTF) 2.0, discussion of use-cases.

### 添付資料URL

- [slides](http://www.linuxplumbersconf.net/2017/ocw//system/presentations/4777/original/plumbers-2017-ctf.pdf)（file）


- スケジュール掲載のアーカイブURL: https://blog.linuxplumbersconf.org/2017/ocw/system/presentations/4777/original/plumbers-2017-ctf.pdf
<a id="session-4780"></a>
## 122. Trace Visualization: Analyze perf, bpf, kernel and userspace traces with Trace Compass

- セッション個別URL: https://blog.linuxplumbersconf.org/2017/ocw/sessions/4780.html
- Track: Tracing / BPF
- 日時: Friday, September 15, 2017 

### Description

The Common Trace Format (CTF) is a compact, yet flexible, binary trace format used by tracers. LTTng, perf, gdb and now ebpf can generate traces in this format. Trace Compass is a tool to visualize traces in various trace formats, including CTF. We’ll demo how we can take advantage of perf sampling data along with a userspace trace to eliminate the noise from samples. Recent improvements to Trace Compass now allow it to scale much better for large trace sets, so that the experience of analyzing large systems is more responsive.

We’d like to discuss the visualization needs for developers. Now that we can get data from various sources and correlate it, there is still a lot of room for improvement to actually help resolve issues and that’s where we’d like to help.

### One Line Summary

Correlate traces from ebpf, perf and LTTng of large systems using the Trace Compass tool

### 添付資料URL

掲載なし

<a id="session-4791"></a>
## 123. eBPF cgroup filters for data usage accounting on Android

- セッション個別URL: https://blog.linuxplumbersconf.org/2017/ocw/sessions/4791.html
- Track: Tracing / BPF
- 日時: Friday, September 15, 2017 

### Description

The xt_qtaguid kernel code is the foundation of data usage accounting and per-app network policy on Android, but it consists of ~3000 lines of out-of-tree kernel code and is a maintenance, stability and performance burden. Work is underway to replace xt_qtaguid with a mixed kernel/userspace solution based on eBPF cgroup filters.

This talk will cover the basic design, the progress we’ve made so far (most of the kernel infrastructure is already in place), and the challenges faced by the design, such as the limited granularity of security policies and the fact that maps are not resizable.

### One Line Summary

Describes current efforts to replace the out-of-tree Android xt_qtaguid kernel code with an upstream solution based on eBPF cgroup filters.

### 添付資料URL

- [slides](http://www.linuxplumbersconf.net/2017/ocw//system/presentations/4791/original/eBPF cgroup filters for data usage accounting on Android.pdf)（file）


- スケジュール掲載のアーカイブURL: https://blog.linuxplumbersconf.org/2017/ocw/system/presentations/4791/original/eBPF cgroup filters for data usage accounting on Android.pdf
<a id="session-4804"></a>
## 124. Tracing and Kernel ABI

- セッション個別URL: https://blog.linuxplumbersconf.org/2017/ocw/sessions/4804.html
- Track: Tracing / BPF
- 日時: Friday, September 15, 2017 

### Description

Have a discussion about how important it is to maintain consistent trace points and how to deal with changing them as the code in the kernel changes around them.

### One Line Summary

Talk about how we want to deal with trace points as a user space interface

### 添付資料URL

掲載なし

<a id="session-4808"></a>
## 125. new kprobe api

- セッション個別URL: https://blog.linuxplumbersconf.org/2017/ocw/sessions/4808.html
- Track: Tracing / BPF
- 日時: Friday, September 15, 2017 

### Description

As a heavy user of kprobe, uprobe, tracepoints together with bpf tracing, we’ve hit a number of issues with text (tracefs) based kprobe api that led us to propose new binary (file descriptor based) api to address them

### One Line Summary

lessons from using kprobe text based api and proposed extensions

### 添付資料URL

掲載なし

<a id="session-4779"></a>
## 126. uftrace: function tracer for user + kernel space

- セッション個別URL: https://blog.linuxplumbersconf.org/2017/ocw/sessions/4779.html
- Track: Tracing / BPF
- 日時: Friday, September 15, 2017 4:30pm

### Description

uftrace can trace functions in user program as well as kernel (with help of the function graph tracer in the kernel).  Also it provides various filter options and useful features to trace program execution easily.  In this talk Namhyung will share current status of uftrace and future direction of the work.

### One Line Summary

overview and discussion of uftrace tracing both user and kernel space

### 添付資料URL

掲載なし

<a id="session-4833"></a>
## 127. Test driven development (TDD) in the kernel

- セッション個別URL: https://blog.linuxplumbersconf.org/2017/ocw/sessions/4833.html
- Track: Unconference II
- 日時: Friday, September 15, 2017 2:00pm

### Description

Test driven development is a proven concept for user land 
projects, and is as far as I have seen to some extent used for kernel development,
but is currently limited to what can be tested from user land, either via system call interfaces 
or by creating mock environments to compile selected kernel code in user land.
Testing for instance kernel internal algorithms or usage of them, such as rbtrees, radix trees or sg lists cannot easily be 
done this way. Also, once the test is in kernel code, there are some very interesting low hanging 
opportunities such as for instance error injection and simple code coverage.
I’d like to demonstrate a tool I created for this purpose, and that we develop and use
internally in Oracle. It will be made available on Github for people to look at ahead of this 
unconference. I submitted a talk proposal for this, but it did not reach up, but I modestly think 
it is such a simple and good idea that I simply cannot wait yet another year without talking about it!

### One Line Summary

Test driven development is a proven concept for user land 
projects, and is as far as I have seen to some extent used for kernel development,
but is currently limited to what can be tested from user land, either via system call interfaces 
or by creating mock environments to compile selected kernel code in user land.
Testing for instance kernel internal algorithms or usage of them, such as rbtrees, radix trees or sg lists cannot easily be 
done this way. Also, once the test is in kernel code, there are some very interesting low hanging 
opportunities such as for instance error injection and simple code coverage.
I'd like to demonstrate a tool I created for this purpose, and that we develop and use
internally in Oracle. It will be made available on Github for people to look at ahead of this 
unconference. I submitted a talk proposal for this, but it did not reach up, but I modestly think 
it is such a simple and good idea that I simply cannot wait yet another year without talking about it!

### 添付資料URL

掲載なし

<a id="session-4835"></a>
## 128. Soft Affinity for Workloads

- セッション個別URL: https://blog.linuxplumbersconf.org/2017/ocw/sessions/4835.html
- Track: Unconference II
- 日時: Friday, September 15, 2017 4:00pm

### Description

For weak performance isolation with multi-tenancy for some applications
by allowing space partitioning of CPUs, there is a need for applications
to specify soft affinity to some CPUs. So that one “group” does not
interfere with other “groups”, yet allow the group to occupy the full
set of CPUs when no one else is using it. Currently, CFS allows time
sharing of CPUs and sched_setaffinity allows for “hard” affinity (or
restricting CPUs to a given mask or set).
One solution could be to to add a new cpumask other than cpus_allowed
(which is used for “hard” affinity). Let’s say cpus_preferred. And allow
an application to set a preference to a set of CPUs if it so desires.

### One Line Summary

For weak performance isolation with multi-tenancy for some applications
by allowing space partitioning of CPUs, there is a need for applications
to specify soft affinity to some CPUs. So that one "group" does not
interfere with other "groups", yet allow the group to occupy the full
set of CPUs when no one else is using it. Currently, CFS allows time
sharing of CPUs and sched_setaffinity allows for "hard" affinity (or
restricting CPUs to a given mask or set).
One solution could be to to add a new cpumask other than cpus_allowed
(which is used for "hard" affinity). Let's say cpus_preferred. And allow
an application to set a preference to a set of CPUs if it so desires.

### 添付資料URL

掲載なし

<a id="session-4671"></a>
## 129. Managing the impact of growing CPU register state on the user ABI

- セッション個別URL: https://blog.linuxplumbersconf.org/2017/ocw/sessions/4671.html
- Track: Refereed Presentations
- 日時: Friday, September 15, 2017 2:50pm

### Description

There is an ongoing trend to increase the number and size of user-accessible CPU registers as architectures evolve.  ARM SVE 1 and Intel AVX-512 2 are recent examples.

Many parts of the user/kernel interface that describe CPU register state are straightforward to extend, but there are some pain points — in particular, the signal frame and related APIs (sigaltstack, threading APIs, ucontext etc.)

To size stacks correctly, userspace needs to know how much space the kernel will use to push the signal frame when delivering a signal. This becomes particularly important in many-threaded environments where allocating a giant slab of VA space for each thread stack may not be acceptable, or when using sigaltstack or the ucontext API.

struct sigcontext (which defines the signal frame layout) and struct ucontext (which typically embeds sigcontext) are also ABI and not trivially extensible.

There is a traditional POSIX answer (or two) for the size of the signal frame: the MINSIGSTKSZ and SIGSTKSZ #defines 3.  Because they are #defines, these get baked into all userspace programs at compile time, and form part of the ABI.

Initial arch guesses for MINSIGSTKSZ seemed generous initially, but can turn out to be unlucky: for example, SVE massively grows the SIMD vector registers, but leaves the exact number of vector lanes as a hardware implementation choice: this means that saving the SIMD vector registers in the signal frame may require a lot more space in the maximum case than in the typical case.  As it happens, the arm64 signal frame overflows well before the maximum SVE vector size is reached.  Worse, the architecture also leaves open the possibility of growing the maximum vector size further in the future.

MINSIGSTKSZ could be increased but this is still an ABI break, and it is unclear what it should be increased to in this case.  This also doesn’t solve the underlying extensibility problem.

This presentation will outline the problem, and I will describe the current approach proposed for SVE and arm64 to mitigate the ABI impact of extending the signal frame.  However, this approach may miss issues that need to be taken into account in order to be usable across multiple architectures.

Ideally, the solution should not be wholly arch-specific.  If we can come up with a common approach, this also gives more force to adoption of a better interface in POSIX/libc land.



1 ARM Scalable Vector Extension

https://community.arm.com/groups/processors/blog/2016/08/22/technology-update-the-scalable-vector-extension-sve-for-the-armv8-a-architecture

2 Intel AVX-512

https://software.intel.com/en-us/blogs/2013/avx-512-instructions

3 sigaltstack(2)

### One Line Summary

Extending the user/kernel ABI to cope with increasingly large and numerous CPU registers turns out to be non-trivial, yet CPU architectures are already evolving to require it.  How do we minimise ABI breakage?

### 添付資料URL

- [slides](https://blog.linuxplumbersconf.org/2017/ocw//system/presentations/4671/original/plumbers-dm-2017.pdf)（file）


- スケジュール掲載のアーカイブURL: https://blog.linuxplumbersconf.org/2017/ocw/system/presentations/4671/original/plumbers-dm-2017.pdf
<a id="session-4681"></a>
## 130. Supporting newer toolchains in the kernel

- セッション個別URL: https://blog.linuxplumbersconf.org/2017/ocw/sessions/4681.html
- Track: Refereed Presentations
- 日時: Friday, September 15, 2017 4:00pm

### Description

The Linux kernel currently requires gcc and binutils to be built. These days, other toolchain options, such as clang and lld, are available and compelling for some use cases (e.g. Android, where clang is used for all userland compiles).

Patch sets that make the kernel build with clang and link with lld currently exist (and need some cleanup).

Some additional changes in the kernel, such as getting rid of -std=gnu89, would likely benefit the optimizers of both clang and current (7.x+) gcc.

This presentation looks at what can be done and tries to encourage upstream adoption of the patches.

Audio

### One Line Summary

A few years ago, things were "easy": There was gcc and binutils. Now we have gcc, clang, binutils, lld, and more.

### 添付資料URL

- [slides](https://blog.linuxplumbersconf.org/2017/ocw/system/presentations/4681/original/LPC17 - Supporting newer toolchains.pdf)（file）

# Wiki Topics 補足

2017年はOCW形式。開催スケジュールの個別セッション130件を収録。Descriptionは個別ページのAbstract原文。One Line Summaryは別フィールドに保持。資料URLは個別ページの原記載を保持し、スケジュールに別のアーカイブURLがある場合はschedule_urlも収録。添付ファイル本体の取得・リンク有効性検査は実施していない。Wiki Topicsは採用済み11件と提案24件を補足に区別して収録し、開催セッションの件数には加算しない。Wiki本文のTentative/Proposed等の予定表記は原文通りで、開催確定とみなさない。

## Android/Mobile（採用済み）

https://wiki.linuxplumbersconf.org/2017:android_mobile

Android/Mobile




The Linux Plumbers 2017 Android/Mobile track focuses on finding solutions for kernel changes and other plumbing related issues that Android and other mobile solutions make use of but are not yet upstream.




Key Attendees


 Sandeep Patil

 Greg KH

 Amit Pundir

 Arnd Bergmann

 Marissa Wall

 Tim Murray

 Suren Baghdasaryan

 Chenbo Feng

 Lorenzo Colitti

 Juri Lelli

 Patrick Bellasi

 Joel Fernandes

 Andres Oportus

 Daniel Rosenberg

 Ted Ts'o (tbd)

 Dmitry Shmidt

 Christoffer Dall

 Jian Qian

 Bernhard Rosenkränzer

 Nick Desaulniers

 Behan Webster

 Laura Abbott

 Benjamin Gaignard

 John Reitan

 Rom Lemarchand

 Todd Kjos

 John Stultz

 Serban Constantinescu

 Karim Yaghmour

 Manoj Rao

 Sumit Semwal





Schedule (tentative)



The following is the list of items presently considered as candidate topics for the microconf. Still very much subject to change.


 Treble

 LTS efforts

 Update on devboards in AOSP

 Testing AOSP (CTS, GCE, more)

 Clang & the Upstream Kernel

 memcg/lowmemorykiller

 xt_qtaguid → eBPF

 ION's Destaging and ABI changes

 EAS/SCHED_DEADLINE Android integration and Upstreaming

 SDCardFS upstreaming

 Binder changes

 Emulator(goldfish, pipe, etc) vs Qemu (virgil, etc)





Committee


 John Stultz

 Rom Lemarchand

 Todd Kjos

 Serban Constantinescu

 Karim Yaghmour (Runner) karim.yaghmour@opersys.com

### 添付資料URL

掲載なし

## Linux-Kernel Memory Model Workshop（採用済み）

https://wiki.linuxplumbersconf.org/2017:linux-kernel_memory_model_workshop

Linux-Kernel Memory Model Workshop




Why frighten small children by reading memory-barriers.txt to them when you can now automate this process with a shiny new tool allegedly implementing the Linux-kernel memory model?  This tool takes a “litmus test” that contains concurrent quasi-C code along with an assertion.  The tool then tells you whether this assertion always, sometimes, or never triggers after the concurrent quasi-C code completes execution.



To this end, the Linux Plumbers 2017 Linux-Kernel Memory Model Workshop is intended to help Linux-kernel developers with the prototype tooling that has been developed over the past couple of years.  A video of a recent presentation is available, as are slides.
Slide 98 contains instructions for installing the tool and its dependencies, and attendees should feel free to do the installation before the workshop. Both the first and second articles in a two-part LWN series have also appeared.




Key Attendees (tentative)


 Alan Stern [*]

 Paul E. McKenney [*]

 Will Deacon [*]

 Steve Rostedt

 Andrea Parri [*]

 Dhaval Giani

 Josh Triplett

 Jade Alglave [*]

 Waiman Long

 Davidlohr Bueso





[*] People so marked have installed and used the tools.




Key Topics for Discussion (tentative)



The following is the list of items presently considered as candidate topics for the microconf. Still very much subject to change.

Installing the memory model and related tools:
* ocaml v4.02.0 or better: http://caml.inria.fr/download.en.html (Or, likely easier, install your distro's version)
  * But if you choose to build it yourself, do yourself a favor and read -all- of Step 5 before starting, or you will miss the "make world.opt" shortcut
  * In addition, recent versions of ocaml require opam (see "herd" README from next step)
* Download and install "herd" tool: http://diy.inria.fr/sources/index.html
* Download and install memory model itself: https://github.com/aparri/memory-model
* (Optional) Download litmus tests: https://github.com/paulmckrcu/litmus
Using the memory model:
* Running the model against existing litmus tests (for example, this one: https://raw.githubusercontent.com/paulmckrcu/litmus/master/auto/C-RW-G%2BRW-Rr%2BRW-Ra.litmus)
  * herd7 -conf linux-kernel.cfg litmus/auto/C-RW-G+RW-Rr+RW-Ra.litmus
* Hardware vs. kernel model
* Constructing litmus tests to use memory model as a design/debugging aid
* Feedback, including from architecture maintainers
* ...



If you wish to try out the snazzy new klitmus7 tool (and you most definitely should!), please bring a running Linux environment that you care so little about that you would be happy to install and run a kernel module generated by a new tool that has not been tested all that thoroughly.  (As far as we know, this tool has not yet frightened any small children or eaten any pets, but it is probably only a matter of time.)




Proposed Schedule (tentative)


 Short overview of the Linux-kernel memory model

 Assistance installing and using the tools

 Possible short presentations from users on their experience with and questions about these tools (add your name and topic if you are interested)





Contact




Runner: Paul E. McKenney paulmck@linux.vnet.ibm.com

### 添付資料URL

- http://www.rdrop.com/users/paulmck/scalability/paper/LinuxMM.2017.01.19a-ext.LCA.pdf

## RDMA（採用済み）

https://wiki.linuxplumbersconf.org/2017:rdma

RDMA




The Linux Plumbers 2017 RDMA mini-conference track continues tradition established in 2016, where we discussed different range of topics, starting from kernel core (integration into netdev, new fabrics, …) through kernel ABI changes upto userspace libraries.



That mini-conference was extremely fruitful with a lot of code proposed and merged afterwards.




Key Attendees (add yourself)


 Leon Romanovsky

 Christoph Lameter

 Ira Weiny

 Jason Gunthorpe

 Liran Liss

 Tzahi Oved

 Yuval Shaia

 Marcel Apfelbaum

 Denny Dalessandro

 Bart Van Assche

 Don Dutile

 Jon Toppins

 Santosh Shilimkar(Oracle)





Key Topics for Discussion (tentative)



It is partially based on previous year and it is updated constantly.
Feel free to add your topics.  



 RDMA vs. Kernel CORE - gaps

 NVMeF RDMA

 RDMA core (consolidated library) - gaps and how to unify UAPI header

 Contiguous memory 

 Exposing device memory directly to application

 Containers: GID isolations

 KVM RDMA

 Scope of RDMA subsystem (new fabrics)

 RDMA as part of netdev stack

 RDMAtool

 RDMA userspace library

 Kernel ABI

 Documentation effort

 Testing





Proposed Schedule (tentative)


 Paravirtual RDMA device by Marcel and Yuval.

 Device statistics information (counters) through RDMAtool by Dennis.

 Connection information through RDMAtool by Leon.

 kABI update by Matan.

 Persistent RDMA device names by Leon

 Backporting issues with multi-subsystem device (RDMA + netdev) by Don





Topics which is nice to discuss, but we need speakers/audience


 Adding NUMA hints to *all* rdma resources. 

 SRQ sizing. No one knows what is a correct SRQ size. 

 Adaptive interrupt moderation. 

 Striding receive queue in core API





Contact



Runner: Leon Romanovsky leon@kernel.org

### 添付資料URL

掲載なし

## Containers（採用済み）

https://wiki.linuxplumbersconf.org/2017:containers

Containers



The Linux Plumbers 2017 containers track is focusing on Linux containers, both kernel space and user space.



This is a good opportunity for maintainers of container runtimes to interact with kernel developers and users.



CFP can be found here https://discuss.linuxcontainers.org/t/containers-micro-conference-at-linux-plumbers-2017/262
Submissions will be taken until the 4th of August 2017.




Tentative Schedule




This year we'll try to focus on short technical talks and demos and more general discussion topics such as (feel free to add to the list):


 Unprivileged filesystem mounting

 Container filesystem uid/gid shifting

 Transition to CGroupV2

 Alternative approach (than blkio) to restricting filesystem access throughput

 cgroups

 Cgmanager reborn?

 V1 and V2



 Namespaced LSMs

 Apparmor namespaces (intro)

 Smack namespaces (intro)

 Namespaced SELinux

 Namespaced IMA (intro and status)

 Namespaced file capabilities status



 Designing secure and sane container runtimes from first principles.

 Limitations of kernel interfaces.







Note: The final schedule will be posted on the linuxplumbersconf.org website on the Schedule page. Presentation slides will available on the Plumbers page by following the links to the abstracts. 




Potential attendees (from past years, add yourself!)


 Stéphane Graber (LXC & LXD)

 Serge Hallyn (LXC & LXD, capabilities, cgroup namespace)

 Christian Brauner (LXC & LXD)

 Tycho Andersen (Docker)

 Aleksa Sarai (SUSE, OCI & runc)

 Seth Forshee (unprivileged ext4, unprivileged fuse and unprivileged loops patches)

 Tejun Heo (cgroups)

 Dinesh Subhraveti (Fermat)

 Eric Biederman (namespaces)

 Kir Kolyshkin (OpenVZ & CRIU)

 Dmitry Monakhov (OpenVZ)

 Andrey Vagin (OpenVZ & CRIU)

 Pavel Emelyanov (OpenVZ & CRIU)

 James Bottomley (IBM)

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

 Mrunal Patel (Red Hat, OCI, runc)

 James Morris (Oracle / kernel security maintainer)





Discussion notes




Notes from the sessions will be recorded using Etherpads (links will be provided). It is very important that each session has good notes.  All too often, if notes were not written down, the session might as well not have happened.




Contact




Proposal added by Stéphane Graber <stgraber at ubuntu dot com>

### 添付資料URL

掲載なし

## Power Management and Energy-awareness（採用済み）

https://wiki.linuxplumbersconf.org/2017:power_management_and_energy-awareness

Power Management and Energy-awareness




The Linux Plumbers 2017 Power Management and Energy-awareness track focuses on topics related to power management frameworks, task scheduling in relation to power/energy optimization, and platform power management mechanisms. The goal is to facilitate cross framework and cross platform discussions that can help improve power and energy-awareness in Linux.



Topic proposals may relate to (but not restricted to):


 Frequency/performance scaling (cpufreq).

 CPU idle states (cpuidle).

 Thermal management and scheduling under thermal constraints.

 ACPI power management.

 Device Tree representation of platform power management features.

 Energy-aware scheduling decisions (minimize energy consumption).

 Power domains management.

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

 Dietmar Eggemann

 Juri Lelli

 Patrick Bellasi

 Viresh Kumar

 Lina Iyer

 Manoj Rao





Proposed Topics (Tentative)




Please add topic proposals here:



 Linux Power Management Frameworks Status Report (Rafael J. Wysocki rafael@kernel.org): Overview of the current status of high-level PM frameworks in the Linux kernel.

 Workloads for evaluation CPU PM modifications (Rafael J. Wysocki rafael@kernel.org): Discussion on which workloads to use (or what is recommended etc) for the evaluation of CPU PM changes in the kernel.

 Energy-aware scheduling in user space (Len Brown lenb@kernel.org): Is it viable or can the kernel do much better? When is it better to use a “core packing” policy?

 There are userspace implementations of EAS in the wild. I'm happy to talk about the one we wrote. (Michael Turquette mturquette@baylibre.com)



 Identification of power-hungry system components (Srinivas Pandruvada srinivas.pandruvada@linux.intel.com): In thermally constrained situations it would be better to throttle the system components that draw more power instead of throttling everything equally.  The problem is how to identify them reliably.

 Resume from hibernation in a boot loader (Rafael J. Wysocki rafael@kernel.org): Is it viable at all? How much time can we save anyway?

 schedutil usage/aggregation of utilization signals (Juri Lelli juri.lelli@arm.com): How do we aggregate utilization signals coming from different scheduling classes? Do we need an additional rt_rq/rt_se signal?

 Adding a CPPC/HWP interface to cpufreq (Juri Lelli juri.lelli@arm.com): How to modify cpufreq to allow the setting of minimum guaranteed performance and desired performance level?

 Atomic cpufreq set operation using platform firmware  (Sudeep Holla sudeep.holla@arm.com): How to achieve or at-least make operations in OSPM atomic for CPU frequency scaling using platform firmware interface ?

 Exploring aperf/mperf feature like on ARM systems  (Sudeep Holla sudeep.holla@arm.com): With newer ARM platforms implementing some related counters, can we make use of them until interface is completely standardized ?

 Scheduling under CPU capacity constraints  (Morten Rasmussen morten.rasmussen@arm.com): The potential difference in max and delivered CPU performance (capacity) is growing (thermal and peak current management). Can we keep ignoring it, or should load-balancing factor the constraints in?

 Per-Task capacity clamping (Patrick Bellasi patrick.bellasi@arm.com): Status update on the proposal to have a per-task API to based bias OPP selection and, in the future, task placement at wake-up time.

 Improving the estimation of tasks utilization (Patrick Bellasi patrick.bellasi@arm.com): The dynamic nature of PELT makes it not completely suitable to describe the bandwidth requirements of long sleeping tasks and a prototype for “decay clamping” has been evaluated to be not suitable to tackle this issue. Let's review the status for a different proposal to add a filter on top of PELT.

 An update on Window Assisted Load Tracking (Vikram Mulukutla markivx@codeaurora.org): There were a number of discussions on WALT and PELT in LPC 2016. We will present data on a recent Snapdragon 835 platform comparing PELT and WALT with the proposed PELT improvements. This will include a comparison of both task placement as well as CPU frequency guidance. We believe this discussion will be valuable to the continued effort to improve PELT, as well as the discussion of WALT's upstream-implementation potential, given its continued inclusion in the android-common kernels.

 Next steps for PELT (Vincent Guittot vincent.guittot@linaro.org): Present and discuss the next steps for improving PELT.

 Enable the runtime PM centric path for ACPI (Ulf Hansson ulf.hansson@linaro.org) Discuss about the benefits of using the runtime PM centric path for system sleep and in particular how it impacts the ACPI PM domain.

 Next steps on CPU cluster idling (Ulf Hansson ulf.hansson@linaro.org) Unfortunately the work has moved slowly forward, however let's talk briefly on how far we have come and what to expect next.

 Update on the generic PM domain (Ulf Hansson ulf.hansson@linaro.org) Highlight recent changes for genpd and an update on current ongoing developments.

 The quest for faster Linux suspend/resume (Zhang Rui rui.zhang@intel.com) With test result from analyze_suspend tool, share some of the key issues fixed, and those still outstanding, especially some typical failures, which are likely to be repeated.

 The current status of hibernation (Yu Chen yu.c.chen@intel.com) Collect/summarize the bugs information reported against hibernation, which are either fixed, or do not have proper solution, or not root caused yet, may also be related to other components such as memory subsystem, interrupt subsystem, cpu hotplug etc, which are more likely to be triggered with the increasing of cpu number.

 Performance-centric “energy” model (Michael Turquette mturquette@baylibre.com) How to support heterogenous multicore systems that are not energy-sensitive, but are performance sensitive? Can the energy cost model be used?





Schedule


 Scheduling under CPU capacity constraints (Morten Rasmussen morten.rasmussen@arm.com)

 schedutil usage/aggregation of utilization signals (Juri Lelli juri.lelli@arm.com)

 Improving estimation of Task/CPU's utilization  +  Utilization clamping support for the CPU controller (Patrick Bellasi patrick.bellasi@arm.com)

 Userspace task placement on big.LITTLE systems (Michael Turquette mturquette@baylibre.com)

 Targetted CPU thermal throttling (Srinivas Pandruvada srinivas.pandruvada@linux.intel.com)

 Atomic cpufreq set operation using platform firmware interface on ARM (Sudeep Holla sudeep.holla@arm.com)

 Using runtime PM callbacks for system suspend/resume in PM core (Rafael J. Wysocki rafael@kernel.org)

 Update on CPU cluster idling and the generic PM domain (Ulf Hansson ulf.hansson@linaro.org)

 Linux Power Management Frameworks Status Report (Rafael J. Wysocki rafael@kernel.org)





Discussion notes




Will be added here when available.




Contact




Runners: Rafael J. Wysocki rafael@kernel.org, Morten Rasmussen morten.rasmussen@arm.com, Kevin Hilman khilman@baylibre.com

### 添付資料URL

掲載なし

## VFIO/IOMMU/PCI（採用済み）

https://wiki.linuxplumbersconf.org/2017:vfio_iommu_pci

VFIO/IOMMU/PCI




The introduction of system technologies that improve devices capabilities and
performance (eg PCI ATS (Address Translation Service)/PRI(Page Request
Interface), enabling Shared Virtual Memory (SVM) between devices and CPUs) is
making PCI devices, the system IOMMUs they are connected to and the VFIO layer
used to managed them (for userspace and device passthrough) more and more
tightly coupled, with related kernel interfaces that have to be designed
in-sync for all three subsystems.



The kernel patches aimed at enabling the related technologies affect
VFIO/IOMMU/PCI subsystems and interfaces, which require a certain amount of
coordination between kernel subsystems to make sure that the related
interfaces are designed to work in a seamless manner.



The Linux Plumbers 2017 VFIO/IOMMU/PCI track will therefore focus on promoting
discussions on the current kernel patches aimed at VFIO/IOMMU/PCI subsystems
with specific sessions targeting discussion for kernel patches that enable
technology (ie Shared Virtual Memory - SVM) requiring the three subsystems
coordination; the microconference will also cover VFIO/IOMMU/PCI subsystem
specific tracks to debate patches status for the respective subsystems plumbing.




Tentative Schedule




The tentative schedule will provide an update on the current state of
VFIO/IOMMU/PCI kernel subsystems followed by discussion of current issues
in the proposed topics, starting with a joint discussion on patches
aimed at enabling Shared Virtual Memory (SVM) technologies.



Topics that are under consideration for this microconf include (but
are not limited to):



* VFIO


 Shared Virtual Memory (SVM) interface

 Sharing host or guest page tables with devices

 Reporting I/O page faults to userspace







* IOMMU


 IOMMU drivers SVM interface consolidation

 IOMMUs virtualization





* PCI


 PCI ATS (Address Translation Service)/PASID (Process Address Space ID)/PRI (Page Request Interface) interface

 PCI resources allocation refactoring

 Consolidation of different arches resource allocation code into PCI core code

 Improvements/refactoring of the current resources allocation code (PCI_PROBE_ONLY, IORESOURCE_PCI_FIXED handling, PCIe Enhanced Allocation)

 FW/OS resource handover interface (BIOS PCI BARs allocation and related kernel policy for resources claiming)

 Bridges apertures sizing

 Resources resizing



 PCI resets management improvements

 peer-to-peer enablement

 https://lkml.org/lkml/2016/11/21/709







* NVMe Surprise Removal


 Discuss issues around supporting NVMe surprise removal

 PCIe DPC, PCIe error handling, PCIe non-posted transactions, Platform considerations, Test cases/scenarios

 NVMe specific usecases





Proposed topics




Please add your topics here:



 * SVM Virtualization (Yi Liu yi.l.liu@intel.com): status update based on Intel vIOMMU implementation. take the chance to finalize IOMMU/VFIO APIs which should support both emulated IOMMUs and also virtio-IOMMU.



 * IOMMU API (Jacob Pan jacob.jun.pan@linux.intel.com): IOMMU API extensions for supporting guest SVM, bind PASID, fault notifications, and invalidation passdown.



 * Zero-copy Receive API (Kalman Methmeth@il.ibm.com): Define interfaces needed to leverage receive-side steering abilities of modern high speed network cards to implement zero-copy receive for virtio-net and vhost.



 * PCI error reporting (Kyle McMartin jkkm@fb.com, Jes Sorensen jsorensen@fb.com): PCI Express Root Port Advanced Error Reporting currently only supports reporting errors to the console. Having to monitor console logs is tedious and complicated when running a large data centre. We would like to propose adding software counters to the PCIAER driver and make these accessible via sysfs.



 * NVMe Surprise removal (Shyam Iyer shyam.iyer@dell.com): Discuss issues related to supporting NVMe surprise removal.




Key Attendees (add yourself)


 Jean-Philippe Brucker

 Keith Busch

 Will Deacon

 Bjorn Helgaas

 Yinghai Lu

 Lorenzo Pieralisi

 Joerg Roedel

 Alex Williamson

 Marc Zyngier

 Leon Romanovsky

 Alexander Deucher

 Ashok Raj

 Kevin Tian

 Yi L.Liu

 Myron Stowe

 Jacob Jun Pan

 Don Dutile

 Kalman Meth

 Ben Serebrin

 Jes Sorensen

 Kyle McMartin

 Kishon Vijay Abraham I

 Shyam Iyer

 Jon Derrick

 Jonathan Cameron





Contacts




Bjorn Helgaas bhelgaas@google.com
Lorenzo Pieralisi lorenzo.pieralisi@arm.com
Joerg Roedel joro@8bytes.org
Alex Williamson alex.williamson@redhat.com

### 添付資料URL

掲載なし

## Checkpoint-Restart（採用済み）

https://wiki.linuxplumbersconf.org/2017:checkpoint-restart

Overview



The MC is about checkpoint-restore and process and container migration in the Linux esocsystem.



We cover C/R in the world of containers (CRIU) and in the world of HPC (Slurm, OpenMPI and BLCR)



This year we also going to discuss how ideas from academic research about heterogeneous computing, for instance Popcorn Linux project, may be (or maybe not) brought into the Linux ecosystem.




Potential invitees


 CRIU people

 Popcorn Linux

 Slurm project

 BLCR (missed them last time)

 Rodrigo HPC live migration

 George from OpenMPI

 IBM cross-arch live migration

 Docker C/R integration

 undo.io / RR project from Mozilla / Dinesh





Attendees


 Mike Rapoport, IBM (CRIU and cross-arch migration, hackathon)

 Andrey Vagin, Virtuozzo (CRIU, hackathon)

 Pavel Emelyanov, Virtuozzo (Tutorials, P.Haul, hackathon)

 Kir Kolyshkin, OpenVZ (Tutorials, hackathon)

 Popcorn Linux team, Virginia Tech

 George Bosilca (OpenMPI, is willing to join)

 Rodrigo Bruno, Distributed Systems Group, INSEC-ID

 Manuel Rodriguez Pascual, (CIEMAT, SLURM project, is willing to join)

 Dinesh Subhraveti, Fermat Inc.

 Tycho Andersen, Docker.

 Saied Kazemi, Google

 Michael Holzheu, IBM, s390

 Eric Biederman, (namespaces)





Key Topics for Discussion (tentative)


 Checkpoint-restore in HPC

 HPC requirements from C/R and gaps that exist with current technologies

 What can we do to make CRIU suitable for HPC, discuss integration opportunities :)

 We've had some time ago a patch to openMPI that called criu to C/R. How about resurrecting this discussion?

 Explore the possibilities that checkpoint/restart brings to the field of job scheduling. How can we benefit from being able to save the status of a running job in a cluster and restore it at some other time and place?





 C/R in jobs scheduling

 Exploring the possibilities that checkpoint/restart brings to the field of job scheduling. How can we benefit from being able to save the status of a running job in a cluster and restore it at some other time and place?

 Server-less computing could use C/R to decrease startup time for interpreter engines.





 Heterogeneous computing, checkpoint-restore and process migration

 How can we bring ideas from academic research to Linux ecosystem

 Popcorn Linux approach for thread migration

 Cross-architecture container migration

 This brigs another topic into the game – user-friendly access to the images. Right now criu images are a big mess :(









 Checkpoint-restore, migration and userfaultfd

 Userfaultfd-WP for dirty memory tracking (current soft-dirt scheme is error prone and not flexible)

 Extensions to non-cooperative userfautlfd

 The most important one is restoring COW memory areas. There's currently no API in uffd to restore one page into two mms.



 Checkpoint-restore of userfault-enabled applications





 Keep up the pace

 We constantly see that kernel guys break backward compatibility. And since criu uses quite strange and rare APIs nobody except us complain. Need to discuss what can be done about it if anything.





 Performance

 Restoring a single task now takes too much operations. What can be the options to speed things up?

 There are many places where we need to call A LOT of syscalls mostly in vain. E.g. – to restore socket params. Most of them will remain defaults from creation, but how can we detect this to skip relevant sockopt?

 Can we somehow benefit from parallel dump?

 Is there any way to do pre-restore? We do have pre-dump that dumps only the memory keeping the processes running. Restore is 100% synchronous.

 Pre-dumps now generate too much pipes. Which is bad by itself and also pins tasks memory in ram. We need to make pre-dumps w/o this. On of the options is to use sys_read_process_vm() syscall, but this duplicates the mem. May we have sys_vmsplice_process_vm() in the kernel please?

 Virtuozzo devs report, that restoring a container with 5GiGs or RSS on 8GiGs host eats all the memory and causes the existing application starve and sometimes OOM-ed. Need to discuss this problem.





 Security

 The hottest topic here is user-mode checkpoint-restore. Although for checkpoint we more or less have enough APIs in the kernel, for restore we cannot do the simple “fork with pid” operation without diving into enormous complexity (in particular – to do this, we need a pid namespace, for pid namespace we need mount namespace to have relevant /proc mount, and for both we need user namespace. Said that user-mode restore is for now unreachable dream.





 Revert to snapshot



 C/R-aware applications

 Rodrigo is researching the ways to friend JVM with C/R for more effective live migration. Long time ago Xemul had an idea of libcrassist.so that applications can link with thus helping criu to dump and restore them.

 On of the examples of the above is – triggering GC before live migration to reduce memory footprint.







Contact


 Andrei Vagin <avagin (at) openvz (dot) org>

 Mike Rapoport <rppt (at) linux (dot) vnet (dot) ibm (dot) com>

 Kir Kolyshkin <kir (at) openvz (dot) org>

 Pavel Emelyanov <xemul (at) virtuozzo (dot) com>

### 添付資料URL

掲載なし

## Scheduler workloads（採用済み）

https://wiki.linuxplumbersconf.org/2017:scheduler_workloads

Scheduler Workloads



The Linux Plumbers 2017 scheduler workload track will focus on understanding various workloads and their impact on the scheduler. Our objective is to initiate a cross organizational and architectural discussion involving currently available(or in development) benchmarks and their effectiveness in evaluating the scheduler for these workloads.



A reliable and scalable benchmark that can be run without too much setup overhead will always help in identifying scheduler issues for different architectures. 
Some of the questions we hope can be answered, whether we have all the benchmarks we need or new ones need to be developed. In the long run, this will help in achieving higher scalability and debug performance related issues easily.




Key Attendees (tentative)


 Paul E. McKenney  (confirmed)

 Steven Rostedt (Confirmed)

 Peter Zijlstra

 Srikar Dronamraju (confirmed)

 Tim Chen          (confirmed)

 Stephen Hemminger (confirmed)

 Andi Kleen

 Mike Galbraith

 Paul Turner

 Atish Patra (Confirmed)

 Dhaval Giani (confirmed)

 Chris Mason (confirmed)

 Josef Bacik (confirmed)

 Juri Lelli (confirmed)

 Tejun Heo (confirmed)

 Morten Rasmussenn (confirmed)

 Dietmar Eggemann (confirmed)

 Patrick Bellasi (confirmed)

 Viresh Kumar (confirmed)

 Vincent Guittot (confirmed)

 Mathieu Desnoyers

 Daniel Bristot de Oliveira (confirmed)

 Rafael J. Wysocki (Confirmed)





Problem space



The following is the list of items presently considered as candidate topics for the microconf. Still very much subject to change.



Some of the workloads that can be discussed:



 Database workload (Real database workloads takes longer time to setup, run and debug.A simulation program of intended behavior in Open Source C program would be great)

 Interactive workload (mainly for desktops)

 Network throughput workload (Networking applications)

 Mobile workloads (usually require Android; power consumption very important alongside latency)





Some of the interesting benchmarks that can be discussed are described here.



https://lwn.net/Articles/725238/



Here are some details on the benchmarks:



rt-app: Source



schbench: Details
Source




Proposed Topics



Please add topic proposals here:



 Use rt-app to run mobile-like (and other types of) synthetic workloads (Juri Lelli juri.lelli@arm.com): mobile workloads usually require Android; remove the dependency by simulating such workloads with rt-app

 Power alongside performance (latency) (Juri Lelli juri.lelli@arm.com): on the importance to check for power/energy regressions alongside performance; how to check across different archs/platforms?

 RT applications on 10s of CPUs (Steven Rostedt rostedt@goodmis.org): The IPI work load of RT push/pull scheduling logic can cause IPI storms with RT tasks running on 10s of CPUs. Discuss ways to deal with this.

 Using bpf to model application behavior (Josef Bacik jbacik@fb.com): Talk about work I've done using BPF to model large applications for building test cases for scheduler issues we hit in production.  Discuss how the tool can be improved and used to help keep regressions from happening.

 Test and develop running opensource applications (Paul E. McKenney paulmck@linux.vnet.ibm.com): Scheduler benchmarks and tests that can allow the scheduler developers and maintainers to check their work without having to have one each proprietary application.

 Tools to analyze scheduler behavior based on tracing and scheduler model (Mathieu Desnoyers mathieu.desnoyers@efficios.com): Event tracing, post-processing tools and scheduler models: how can we improve instrumentation and improve the tools/models to better understand the scheduler behavior ?

 Workloads for evaluation CPU PM modifications ( Rafael J. Wysocki rafael@kernel.org): Discussion on which workloads to use (or what is recommended etc) for the evaluation of CPU PM changes in the kernel.





Tentative schedule




Contact



Runner: Atish Patra atish.patra@oracle.com, Dhaval Giani dhaval.giani@oracle.com,  Juri Lelli juri.lelli@arm.com

### 添付資料URL

掲載なし

## TPMs（採用済み）

https://wiki.linuxplumbersconf.org/2017:tpms

Trusted Platform Modules




The Linux Plumbers 2017 Trusted Platform Module microconference aims to provide a forum to discuss the next steps in improving TPM support under Linux, including discussion of a standardised TPM2 middleware layer and higher level APIs.




Key Attendees (tentative)


 Matthew Garrett

 Jerry Snitselaar (unable to attend)

 Philip Tricca

 George Wilson (confirmed)

 Mimi Zohar

 James Bottomley (confirmed)

 David Woodhouse (confirmed)

 Jarkko Sakkinen (confirmed)

 Daniel Kiper (confirmed)





Key Topics for Discussion (tentative)



The following is the list of items presently considered as candidate topics for the microconf. Still very much subject to change.



 Can we choose a default TSS layer yet

 Progress in adding TPM to the various higher level crypto systems (openssl, openssh, gnutls etc)

 crypto system integration: can we agree on a DER description for the TPM2.0 key file for them all to use?

 Should TPM key integration just be pkcs11? (see this document by David Woodhouse)

 How can we get a usable higher level API

 What's the state of measured boot

 EFI + Intel TXT and TPM + Xen/Linux - how to make it work (Daniel Kiper)

 Best practices for bootloaders in handing off to the OS

 How to get the TPM 2 event log exposed

 TPM Performance

 TPM 1.2 do we need an in-kernel resource manager for it?

 TPM In Containers. Probably requires resource manager, so can share access, but what about hostile tenant unsafe commands?





Proposed Schedule (tentative)




Contact




Runner: Matthew Garrett mjg59@google.com

### 添付資料URL

掲載なし

## Tracing（採用済み）

https://wiki.linuxplumbersconf.org/2017:tracing

Tracing / BPF




The Linux Plumbers 2017 Tracing track is focusing on the various tracing infrastructures in Linux today and how various people and companies use them.




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


 Arnaldo Carvalho de Melo (declined)

 Ingo Molnar (declined)

 Steve Rostedt (accepted)

 Brendan Gregg (accepted)

 Martin Lau (accepted)

 Daniel Borkmann (accepted)

 Brenden Blanco

 Mathieu Desnoyers (accepted)

 David Ahern (tentative)

 Sasha Goldshtein (declined)

 Suchakra Sharma (attending)

 Allan McAleavy

 Yonghong Song (accepted)

 Wang Nan (declined)

 He Kuang

 Ming Lei (declined)

 Daniel Wagner

 Josh Poimboeuf (tentative)

 Mark Drayton

 Teng Qin (accepted)

 Marek Vavrusa

 Andi Kleen (declined)

 Mathieu Poirier (accepted - unless clashes with “power management and energy awareness”)

 Jim Mauro

 Abderrahmane [Abder] Benbachir (attending)

 Namhyung Kim (attending)

 Masami Hiramatsu (attending)

 Geneviève Bastien (attending)

 Daniel Bristot de Oliveira

 Staffan Tjernstrom

 Manoj Rao





Talk proposals



Please feel free to add your name and proposal here.



 Next BPF tools, eg, chaingraphs (Brendan)

 CTF for maps (Brenden)

 Faster uprobes/kerninst (Brenden/Yonghong)

 Hardware Tracing with PT (VM Analysis and kernel-assisted trace re-construction for JITed code) (Suchakra)

 Trace Visualization: eBPF to CTF (Common Trace Format), perf to CTF and trace analysis with Trace Compass (Suchakra/Geneviève)

 LLVM for BPF (Yonghong)

 Hypertracing: Tracing through virtualization layers (Abder)

 Demo of a mechanism to trace VMs on any nested level using hypercalls and ftrace infrastructure

 Presentation on performance overhead of hypertracing and visualizations



 user + kernel tracing w/ uftrace (Namhyung)

 addr→sym resolution by kernel in stack traces (Alexei)

 Challenges related to doing real world debugging for non-kernel engineers (Josef)

 Debugging BPF programs on production systems remotely, even when you are a kernel engineer (JohnF)





Tentative Schedule




No schedule as of yet.



Note: The final schedule will be posted on the linuxplumberscong.org website on the Schedule page. Presentation slides will available on the Plumbers page by following the links to the abstracts. 




Discussion notes




Notes from the sessions will be recorded using Etherpads (links will be provided). It is very important that each session has good notes.  All too often, if notes were not written down, the session might as well not have happened.




Contact




Proposal added by Josef Bacik jbacik@fb.com and I will run this microconf along with Alexei Starovoitov ast@fb.com and Brendan Gregg bgregg@netflix.com.

### 添付資料URL

掲載なし

## Testing & Fuzzing（採用済み）

https://wiki.linuxplumbersconf.org/2017:testing_fuzzing

Testing and Fuzzing




The Linux Plumbers 2017 Testing and Fuzzing track focuses on advancing the current state of testing of the Linux Kernel.



Our objective is to gather leading developers of the kernel and it's related testing infrastructure and utilities in an attempt to advance the state of the various utilities in use (and possibly unify some of them), and the overall testing infrastructure of the kernel. We are hopeful that we could build on the experience of the participants of this MC to create solid plans for the upcoming year.




Key Attendees (tentative)


 Dmitry Vyukov

 Alexander Potapenko (confirmed)

 Fengguang Wu

 Dave Jones (confirmed)

 Shuah Khan

 Guenter Roeck (confirmed)

 Paul E. McKenney (confirmed)

 Sasha Levin (confirmed)

 Dhaval Giani (confirmed)

 Greg KH (Confirmed)

 Masami Hiramatsu (Confirmed)

 Justin Forbes (Confirmed)

 Steven Rostedt (Confirmed)

 Daniel Vetter (confirmed)

 Philip Li (confirmed)





Key Topics for Discussion (tentative)


 Fuzzing

 Trinity

 syzkaller

 perf fuzzer



 Upstream testing - 0day project

 Distro testing - Fuzz testing, security testing

 Status update on formal-verification tools

 KernelMemorySanitizer: a new detector of uninitialized memory reads

 How are stable trees tested and is there any active fuzzing done there?

 Kernel ABI

 Ktest: A framework to drive automated testing

 drm/i915 igt test suite and Intel GFX CI as examples for testing hw drivers and hw specific issues (Daniel Vetter)





Proposed Schedule (tentative)


 Fuzzers panel: Panel + open discussion regarding progress since last year and future goals

 Upstream testing

 The 0day testing project

 ktest

 KMSAN

 Updates on KASAN/KTSAN

 drm/i915 testing

 Status update on formal verification tools

 (BoF?) Stable/distro testing





Contact




Runner: Sasha Levin alexander.levin@verizon.com with assistance from Dhaval Giani dhaval.giani@oracle.com

### 添付資料URL

掲載なし

## FPGAs and programmable logic devices（提案）

https://wiki.linuxplumbersconf.org/2017:fpgas_and_programmable_logic_devices

リンク先ページは未作成。

### 添付資料URL

掲載なし

## git（提案）

https://wiki.linuxplumbersconf.org/2017:git

リンク先ページは未作成。

### 添付資料URL

掲載なし

## Live kernel patching（提案）

https://wiki.linuxplumbersconf.org/2017:live_kernel_patching

リンク先ページは未作成。

### 添付資料URL

掲載なし

## Boot, Init, and Config（提案）

https://wiki.linuxplumbersconf.org/2017:boot_init_and_config

リンク先ページは未作成。

### 添付資料URL

掲載なし

## Booting from Remote Storage（提案）

https://wiki.linuxplumbersconf.org/2017:booting_from_remote_storage

Linux Remote Boot Over Ethernet: Getting It Right




The Linux Plumbers 2017 Remote Boot track focuses on finding solutions for kernel changes and other plumbing related issues that will help the ecosystem of the kernel installation on a remote root device. This generally means either iSCSI or FCoE. This seemingly-simple task is complicated by the fact that systemd needs to sequence things in such a way that the system can reliably boot and shutdown, i.e. as if the root disc was local.



This is an industry-wide issue that can only be solved with agreement from interested parties.




Key Attendees (tentative)


 Lee Duncan, SUSE (organizer)

 Hannes Reinecke, SUSE (storage expert)

 James Bottomley, SCSI subsystem mainter

 Chris Leech, RedHat (storage expert)

 Andy Grover, RedHat (storage expert)

 Somebody from Ununtu

 Somebody from QLogic/Cavium (i.e. card manufacturer)





Key Topics for Discussion (tentative)



The following is the list of items presently considered as candidate topics for the microconf. Still very much subject to change.

User Visible Problems:
* install on remote storage hard to set up
* install on remote storage works until first reboot, where systemd gives mysterious message
Areas of Difficulty:
* iSCSI has a standard, iBFT, but it is loosely followed if at all
* FCoE has no standard at all
* It is difficult to test, since it is difficult to virtualize



Proposed Schedule (tentative)




To be determined




Contact




Runner: Lee Duncan lduncan@suse.com

### 添付資料URL

掲載なし

## CPU isolation（提案）

https://wiki.linuxplumbersconf.org/2017:cpu_isolation

リンク先ページは未作成。

### 添付資料URL

掲載なし

## Development Tools（提案）

https://wiki.linuxplumbersconf.org/2017:development_tools

Development tools



The Linux Plumbers 2017 containers track is focusing on Linux development tools.



This is a good opportunity for collaboration on development environments.




Tentative Schedule




This year we'll try to follow on short technical talks and demos and more general discussion topics such as (feel free to add to the list):


 Kernel crash dumps

 Debugging kernel in VM

 Capturing crash information

 Integration with IDE environments





Note: The final schedule will be posted on the linuxplumbersconf.org website on the Schedule page. Presentation slides will available on the Plumbers page by following the links to the abstracts. 




Potential attendees (from past years, add yourself!)


 Stephen Hemminger (Microsoft)

 Dhaval Giani (Oracle)





Discussion notes




Notes from the sessions will be recorded using Etherpads (links will be provided). It is very important that each session has good notes.  All too often, if notes were not written down, the session might as well not have happened.




Contact




Proposal added by Stephen Hemminger <sthemmin at microsoft.com>

### 添付資料URL

掲載なし

## File and Storage Systems（提案）

https://wiki.linuxplumbersconf.org/2017:file_and_storage_systems

リンク先ページは未作成。

### 添付資料URL

掲載なし

## Graphics Mode Setting and Wayland（提案）

https://wiki.linuxplumbersconf.org/2017:graphics_mode_setting_and_wayland

リンク先ページは未作成。

### 添付資料URL

掲載なし

## Internet of Things（提案）

https://wiki.linuxplumbersconf.org/2017:internet_of_things

リンク先ページは未作成。

### 添付資料URL

掲載なし

## LLVM（提案）

https://wiki.linuxplumbersconf.org/2017:llvm

リンク先ページは未作成。

### 添付資料URL

掲載なし

## Networking（提案）

https://wiki.linuxplumbersconf.org/2017:networking

リンク先ページは未作成。

### 添付資料URL

掲載なし

## Network offloading（提案）

https://wiki.linuxplumbersconf.org/2017:network_offloading

リンク先ページは未作成。

### 添付資料URL

掲載なし

## Ethernet drivers（提案）

https://wiki.linuxplumbersconf.org/2017:ethernet_drivers

Linux-Kernel Ethernet Drivers Workshop



The Linux Plumbers 2017 Ethernet Drivers track focuses on finding solutions for drivers changes and other plumbing related issues that will help the ecosystem of the Ethernet drivers and Networking.




Key Attendees (TBD)




Key Topics for Discussion (tentative)

Maintenance & Technical Dept
* The existence of different hardware/chips that uses the same IP but using different drivers
* Same/similar code repeated: avoid replication of code Technical dept
* Discuss merging strategies: maintenance becomes easier
* Drivers maintainers: Work better together and achieve better results



Proposed Schedule (tentative)




Contact (TBD)




Runner: TBD

### 添付資料URL

掲載なし

## Open Hardware（提案）

https://wiki.linuxplumbersconf.org/2017:open_hardware

リンク先ページは未作成。

### 添付資料URL

掲載なし

## Performance and Scalability（提案）

https://wiki.linuxplumbersconf.org/2017:performance_and_scalability

Performance and Scalability




The Linux Plumbers 2017 microconference – Performance and Scalability track focuses on scalability, both upwards and downwards as well as up and down the stack. There are quite a few active projects and efforts of a wide range that aim at enhancing performance and scalability both in the Linux kernel and in user-space projects. In fact, one of the purposes of this forum is for developers from different projects to meet and collaborate – both kernel developers and researchers, doing more experimental work. After all, for the user to see good performance and scalability, all relevant projects must perform and scale well.



Because performance and scalability can be very generic topics spanning a range of subsystems, this track is aimed at issues that are not addressed in other, more specific sessions.



The structure will be similar to what was followed the previous years: about 30 minutes per subject with discussion.




Key Attendees (tentative)


 Peter Zijlstra

 Thomas Gleixner

 Paul McKenney

 Waiman Long

 Tim Chen

 Davidlohr Bueso

 Huang Ying

 Samy Al Bahra

 Andi Kleen





Key Topics for Discussion (tentative)



Here is a very raw and preliminary list of possible topics to be exposed. If interested in other areas or any specific relevant topic, please just add it to the list: 



 Pain points in the kernel (known bottlenecks, workloads, etc.).

 Throughput-optimized (TP) futexes.

 Lockstat overhead.

 Range rw-locking.

 Address space scaling – are we there yet?

 rwsem reader spin-on-owner.

 swap device scaling.

 Lockless algorithms.





Proposed Schedule (tentative)




Contact




Runner: Davidlohr Bueso dave@stgolabs.net

### 添付資料URL

掲載なし

## Persistent Memory（提案）

https://wiki.linuxplumbersconf.org/2017:persistent_memory

リンク先ページは未作成。

### 添付資料URL

掲載なし

## Real Time（提案）

https://wiki.linuxplumbersconf.org/2017:real_time

リンク先ページは未作成。

### 添付資料URL

掲載なし

## Security（提案）

https://wiki.linuxplumbersconf.org/2017:security

リンク先ページは未作成。

### 添付資料URL

掲載なし

## Thermal（提案）

https://wiki.linuxplumbersconf.org/2017:thermal

リンク先ページは未作成。

### 添付資料URL

掲載なし

## Container Networking（提案）

https://wiki.linuxplumbersconf.org/2017:container_networking

Container networking is a very hot topic, as evidenced by numerous recent techniques to provide container networking, as well as numerous CNI plugins.  The key questions are how can we best support:



 Minimum performance impact

 Programmability

 Unprivileged use

 Transparent cross-cloud connectivity

 Service discovery

 Live workload migration

 Security

 Transparent legacy application support





In this miniconf we will bring together the innovators of new container-relevant network technologies with those writing container orchestration managers.




Tentative schedule


 Presentations: Each will be invited to give a short (15 minutes?) presentation about their offering and/or needs

 Short break

 Moderated (one hour?) moderated [fishbowl|https://lwn.net/Articles/443279/] discussion





The goal is to get an idea of which container networking goals are furthest from being met, and how we might address them.




Talks


 Introduction, Dinesh Subhraveti

 Container networking in LXD, Stéphane Graber

 Routes between network namespaces, Eric Biederman

 [If travel works out] Container networking versus live migration, Pavel Emelyanov

 Evolution and current state of networking in Docker, Jérôme Petazzoni, Madhu Venugopal

 Unprivileged container networking, Serge Hallyn

 Running VPN in a container, Marian Marinov

 Wrap-up, Serge Hallyn and Dinesh Subhraveti





Contact




Proposal added by Serge Hallyn <serge at fermat dot io> and Dinesh Subhraveti <dinesh at fermat dot io>

### 添付資料URL

掲載なし

## md raid general discussion（提案）

https://wiki.linuxplumbersconf.org/2017:md_raid_general_discussion

MD Raid General Discussion



A micro conference proposal for general MD raid discussion.




Why people should be here



In the last years, we have many development activities in md raid, e.g.


 Raid5 cache

 This is an effort to close raid5 writing hole (data lost when system crash happens), the original idea was from Ext4 file system journal (this is why its earlier name was raid5-journal). Now raid5 cache can be used to improve performance for writing burst and improve tolerance of writing hole. 



 Partial parity log

 This is another effort to close raid5 writing hole. In degraded state, there is no way to recalculate parity, because one of the disks is missing. Raid5 partial parity log allows recalculating the parity, it does not protect on-flight data, just make data consistency on disks. 



 Raid1 clustering

 This is an in kernel distributed data mirroring implementation, mirror devices of the raid1 can be from different servers far from each other in different data center. Users may have distribted clustering data duplication on md raid1.



 Sysfs interface for mdadm

 Currently mdadm tool mixes ioctl and sysfs interface together to communicate with kernel code. And kernel code has to serve for both interface with different code paths. Now mdadm developers want to unify the interface to a set of sysfs files, it requires effort from both kernel space and user space. The benefit is, we can have a unified code path in both kernel space and user space, which is more clear when communication happens between mdadm and md kernel code.



 Performance improvement for NVMe devices

 Lockless I/O submission on RAID1, DISCARD improvement on RAID0, which improvements performance on fast NVMe SSDs.



 Device-mapper (dm-raid target) interface




We need to sit together to discuss development road map, kernel and user space tool collaboration, and how to work with development of other subsystems.



It is also open to other developers to join, all constructive comments are warmly welcome.




Key Attendees (tentative)


 Neil Brown (SUSE)

 Shaohua Li (Facebook) - confirmed

 Jes Sorensen (Facebook) - confirmed

 Hannes Reinecke (SUSE)

 Coly Li (SUSE)

 Guoqing Jiang (SUSE)

 Heinz Mauelshagen (Redhat) - confirmed





Potential Attendees (tentative)


 Song Liu (Facebook)

 Pawel Baldysiak (Intel)

 Artur Paszkiewicz (Intel)

 Lijun Pan (DellEMC)





Key Topics for Discussion (tentative)



Here are discussion topics in mind, feel free to add more topics into,


 Road map of Partial Parity Log development

 Road map of clustered raid development

 Sysfs interface improvement for mdadm and MD Raid

 Mdadm test suite

 Sync up between raid1 and raid10, there are some features which is only available in raid1 such as new I/O barrier and Write behind (maybe more).





Note: The final schedule will be posted on the linuxplumbersconf.org website on the Schedule page. We suggest to provide a slide file with 1~2pages out lines.




Proposed Schedule (tentative)


 Roadmap sharing for:

 raid5 partial parity log

 md clustering

 sysfs interface improvement

 mdadm test suite



 Problem disucssion

 Kernel space and user space collaboration for sysfs interface improvement

 raid1 & raid10 sync up







Notes from the sessions will be recorded in text mode and shared by email or some other website. We will decide a people to record before each session start, volunteers are warmly welcome.




Contact




Runner: Coly Li colyli@suse.de

### 添付資料URL

掲載なし

## Device Tree（提案）

https://wiki.linuxplumbersconf.org/2017:device_tree

Devicetree (& Embedded) Mini-conference




STATUS: A Devicetree Workshop will be held in conjunction with Kernel Summit in Prague. The Devicetree workshop will be held Thursday afternoon, 26 October 2017. This page is being used to organise the workshop agenda



There will not be a Devicetree miniconference at Linux Plumbers Conference this year.




Proposed Topics



Agenda for this microconference is being worked out now. To propose a topic, please add the topic title and your name to the list below.


 YAML DT encoding (Grant & Pantelis)

 Validation using JSON Schema (Grant)

 Devicetree.org Update (Grant & Mark R.)

 Advanced Tooling for DT (Julia)

 <Title> (lead and other key participants)





Possible topics of interest



Other possible topics for this miniconference are:


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

 David Gibson (dtc and other tools maintainer)

 Jon Loeliger (dtc and other tools maintainer)

 Thomas Petazzoni

 Geert Uytterhoeven

 Olof Johansson

 Lucas Stach

 Julia Lawall

 other subsystem maintainers





Schedule




The schedule of the 2017 DeviceTree Plumbers Microconference is as follows. Note presentation slides can be found on the Plumbers page by following the links to the abstracts:


 Session 1 - TBD

 etc…





Discussion notes




This is a good place to record notes from your session.  All too often, if notes were not written down, the session might as well not have happened.



https://etherpad.net/p/Devicetree_Workshop_2017




Contact




Runner: Grant Likely grant.likely@arm.com

### 添付資料URL

掲載なし

## Wildcard Topics（提案）

https://wiki.linuxplumbersconf.org/2017:wildcard_topics

Wildcard Topics

### 添付資料URL

掲載なし


# マイクロカンファレンス全体枠（14件）

個別セッションとは別の全体枠。DescriptionはスケジュールのOne Line Summary。

## Trusted Platform Module

- URL: https://blog.linuxplumbersconf.org/2017/ocw/events/LPC2017/schedule.html#track-639
- 日時: Wednesday, September 13, 2017 9:30am – 12:30pm

The Linux Plumbers 2017 Trusted Platform Module microconference aims to provide a forum to discuss the next steps in improving TPM support under Linux, including discussion of a standardised TPM2 middleware layer and higher level APIs.

## Containers

- URL: https://blog.linuxplumbersconf.org/2017/ocw/events/LPC2017/schedule.html#track-634
- 日時: Wednesday, September 13, 2017 2:00 – 5:00pm

The Linux Plumbers 2017 containers track is focusing on Linux containers, both kernel space and user space.

## Power Management and Energy Awareness

- URL: https://blog.linuxplumbersconf.org/2017/ocw/events/LPC2017/schedule.html#track-635
- 日時: Thursday, September 14, 2017 9:30am – 12:30pm

The Linux Plumbers 2017 Power Management and Energy-awareness track focuses on topics related to power management frameworks, task scheduling in relation to power/energy optimization, and platform power management mechanisms.

## RDMA

- URL: https://blog.linuxplumbersconf.org/2017/ocw/events/LPC2017/schedule.html#track-633
- 日時: Thursday, September 14, 2017 9:30am – 12:30pm

The Linux Plumbers 2017 RDMA mini-conference track continues tradition established in 2016, where we discussed different range of topics, starting from kernel core (integration into netdev, new fabrics, …) through kernel ABI changes upto userspace libraries.

## Android/Mobile I

- URL: https://blog.linuxplumbersconf.org/2017/ocw/events/LPC2017/schedule.html#track-631
- 日時: Thursday, September 14, 2017 9:00am – 12:30pm

The Android/Mobile track focuses on finding solutions for kernel changes and other plumbing related issues that Android and other mobile solutions make use of but are not yet upstream.

## Android/Mobile II

- URL: https://blog.linuxplumbersconf.org/2017/ocw/events/LPC2017/schedule.html#track-643
- 日時: Thursday, September 14, 2017 2:00 – 5:00pm

The Android/Mobile track focuses on finding solutions for kernel changes and other plumbing related issues that Android and other mobile solutions make use of but are not yet upstream.

## Scheduler Workloads

- URL: https://blog.linuxplumbersconf.org/2017/ocw/events/LPC2017/schedule.html#track-638
- 日時: Thursday, September 14, 2017 2:00 – 5:00pm

The Linux Plumbers 2017 scheduler workload track will focus on understanding various workloads and their impact on the scheduler.

## VFIO/IOMMU/PCI

- URL: https://blog.linuxplumbersconf.org/2017/ocw/events/LPC2017/schedule.html#track-636
- 日時: Thursday, September 14, 2017 2:00 – 5:00pm

The introduction of system technologies that improve devices capabilities and performance (eg PCI ATS (Address Translation Service)/PRI, enabling Shared Virtual Memory (SVM) between devices and CPUs) is making PCI devices, the system IOMMUs they are connected to and the VFIO layer used to managed them (for userspace and device passthrough) more and more tightly coupled, with related kernel interfaces that have to be designed in-sync for all three subsystems.

## Linux-Kernel Memory Model Workshop

- URL: https://blog.linuxplumbersconf.org/2017/ocw/events/LPC2017/schedule.html#track-632
- 日時: Friday, September 15, 2017 9:30am – 12:30pm

The Linux-Kernel Memory Model Workshop is intended to help Linux-kernel developers with the prototype tooling that has been developed over the past couple of years.

## Testing and Fuzzing

- URL: https://blog.linuxplumbersconf.org/2017/ocw/events/LPC2017/schedule.html#track-641
- 日時: Friday, September 15, 2017 9:30am – 12:30pm

The Linux Plumbers 2017 Testing and Fuzzing track focuses on advancing the current state of testing of the Linux Kernel.

## Unconference I

- URL: https://blog.linuxplumbersconf.org/2017/ocw/events/LPC2017/schedule.html#track-642
- 日時: Friday, September 15, 2017 9:30am – 12:30pm

LPC Unconference

## Checkpoint-Restart

- URL: https://blog.linuxplumbersconf.org/2017/ocw/events/LPC2017/schedule.html#track-637
- 日時: Friday, September 15, 2017 2:00 – 5:00pm

The MC is about checkpoint-restore and process and container migration in the Linux esocsystem.

## Tracing / BPF

- URL: https://blog.linuxplumbersconf.org/2017/ocw/events/LPC2017/schedule.html#track-640
- 日時: Friday, September 15, 2017 2:00 – 5:00pm

The Linux Plumbers 2017 Tracing track is focusing on the various tracing infrastructures in Linux today and how various people and companies use them.

## Unconference II

- URL: https://blog.linuxplumbersconf.org/2017/ocw/events/LPC2017/schedule.html#track-644
- 日時: Friday, September 15, 2017 2:00 – 5:00pm

LPC Unconference
