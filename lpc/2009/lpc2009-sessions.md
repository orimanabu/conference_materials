# Linux Plumbers Conference 2009 全セッション一覧

出典: https://blog.linuxplumbersconf.org/2009/program/index.html

2009年はプログラムの発表・資料一覧と静的な日別スケジュールを照合。両ページの個別URL69件を重複排除して収録。Descriptionは個別ページのDescription原文、Excerptは別項目。プログラムのみの2件とスケジュールのみの4件も保持しsource_listingで区別。個別ページのTitle、プログラム表記、スケジュール表記は別フィールドに保持。個別URL未掲載の基調講演2件とGitチュートリアルは追加項目として収録。LinuxConとの合同Keynote/Lightning Talksは補足。リンクのない[slides]・[video coming]等からURLは推測しない。スライド・動画のURLを原掲載元から抽出。Waylandのプログラム側リンクは発表者ページを指しているためスケジュールの個別セッションURLに対応付け、original_program_linkを保持。資料URL1件でhttp://が重複しているため原URLと修正URLおよびアーカイブ候補を併記（候補の有効性未確認）。添付本体の取得・リンク有効性検査は未実施。

セッション: 69件 / Descriptionあり: 69件 / 資料あり: 51件 / 資料項目: 60件

## 目次

1. [Origins and Futures for Linux Audio infrastructure](#session-67)
2. [State of Linux Audio in 2009](#session-51)
3. [Linux audio for mobile and consumer devices: challenges and evolutions](#session-42)
4. [Practical Experiences from Using PulseAudio in Embedded Handheld Devices](#session-105)
5. [Modern Configuration API for Wireless Networking](#session-64)
6. [Why network namespace sucks and how to make it suck faster](#session-81)
7. [Receive Packet Steering: A software solution to scaling the network receive path](#session-52)
8. [Threaded Network Device Interrupts](#session-53)
9. [Threaded interrupt handlers](#session-50)
10. [The state of preempt-rt](#session-49)
11. [Running without Systems Management Interrupts](#session-90)
12. [Real-Time Benchmarking - an Open, Cross-Language Micro-Benchmark Suite](#session-88)
13. [Status of SELinux in Ubuntu](#session-79)
14. [Introducing the SELinux Sandbox](#session-26)
15. [Linux Kernel Crypto API](#session-72)
16. [Using IMA for Integrity Measurement and Attestation](#session-34)
17. [A New SELinux Policy Infrastructure](#session-56)
18. [Smack and the Application Ecosystem](#session-28)
19. [SELinux policy within package managers, why policy is special](#session-58)
20. [XACE Demonstration and Discussion](#session-87)
21. [Making SELinux Easier to Use](#session-43)
22. [Lazy boot](#session-66)
23. [Upstart 1.0](#session-71)
24. [Dracut - a generic initramfs infrastructure](#session-69)
25. [Power management: Communicating needs and desires](#session-27)
26. [USB 3.0 for Linux](#session-62)
27. [Checkpoint/Restart in Linux mainline](#session-39)
28. [Evaluating Linux storage APIs for use in QEMU/KVM](#session-38)
29. [Locking issues on Clustering File Systems](#session-76)
30. [Linux Data de-duplication](#session-37)
31. [Embedded Linux development: a glance from inside](#session-24)
32. [Asymmetric Multiprocessing Issues](#session-44)
33. [Flattened Device Tree for all architectures](#session-47)
34. [Lessons Learned Designing an Open Source UMPC](#session-61)
35. [Video API Deathmatch: VDPAU vs. VAAPI](#session-109)
36. [Compositing, OpenGL, double-buffering, and dragons](#session-70)
37. [The Battle for 2D Acceleration](#session-29)
38. [Xorg State Tracker: The last Xorg driver](#session-60)
39. [Re-plugging the Modern Desktop](#session-41)
40. [Unified error reporting -- A worthy goal?](#session-86)
41. [Merging KGDB, KDB and Kernel Mode Setting](#session-77)
42. [Scaling the VFS](#session-17)
43. [video4linux stream sharing with a server daemon](#session-92)
44. [Out of Memory - Helping applications survive the axe or report the aftermath.](#session-33)
45. [Per backing device dirty data writeback](#session-22)
46. [Userspace RCU library : what linear multiprocessor scalability means for your application](#session-46)
47. [PORTAL Case Study](#session-91)
48. [Scalable Concurrent Hash Tables via Relativistic Programming](#session-85)
49. [Managing KVM guests with the Common Information Model (CIM)](#session-40)
50. [oFono - Open Source Telephony](#session-21)
51. [Challenges with Userspace USB Embedded Device Interfacing](#session-68)
52. [Nesting the virtualized world](#session-74)
53. [libv4l2 recent changes and future and v4l stream sharing](#session-30)
54. [Performance counters on Linux: The tools](#session-108)
55. [Painless kernel - removing the HZ](#session-103)
56. [Packaging Linux](#session-101)
57. [Plug and play multiseat](#session-110)
58. [Virtual Ethernet switch enhancements and configuration](#session-99)
59. [DRBD 8.3 and Beyond](#session-96)
60. [OFFLINE SCHEDULER](#session-100)
61. [Linux-iSCSI.org BoF discussion](#session-102)
62. [Paravirt I/O Drivers for Linux BoF](#session-113)
63. [Audio BoF](#session-112)
64. [Checkpoint/Restart BOF](#session-111)
65. [Real Time Linux](#session-95)
66. [Data Center Bridging](#session-114)
67. [A new V4L2 core framework: an overview and future plans](#session-98)
68. [Issues with Linux and large NUMA/COMA factor architectures](#session-97)
69. [Wayland - A New Display Server for Linux](#session-57)

<a id="session-67"></a>
## 1. Origins and Futures for Linux Audio infrastructure

- セッション個別URL: https://blog.linuxplumbersconf.org/ocw/proposals/67
- Track: Audio
- 日時: Wednesday, September 23, 2009 10:00 – 10:45am

### Description

Most Linux plumbers will be aware that the audio environment is a mess. But how did it get to be this way? Because you can’t understand the future without understanding the past, this talk will start by examining history of the OSS kernel drivers, how they were replaced by ALSA, and the design assumptions and goals that went into ALSA. I will then talk about early sound servers such as esd and artsd and how these represented an extremely limited conception of what “audio on a computer” meant. Many of the problems faced within the Linux audio environment come from an inadequate understanding of the many different kinds of audio applications that exist, so I will survey the dramatic range of these apps both in terms of use cases and technical requirements, and discuss why solutions like JACK and PulseAudio are so different. I will then leap into the bigger question that arises from a casual glance at OS X – how did Apple “solve” the problems that appear to exist on Linux for audio applications and users, and what can we learn from their approach? Similar consideration will be given to Windows. Finally, I would like to discuss whether the fundamental problem is technical, or political inasmuch as it reflects the federated nature of Linux rather than the heirarchical model of Apple Inc. and Microsoft.

### 添付資料URL

- [[slides](https://blog.linuxplumbersconf.org/2009/slides/Paul-Davis-lpc2009.pdf)（file）


### Excerpt

The Linux audio environment is a mess. Everybody who develops Linux audio software knows this; anybody who uses anything more than basic desktop playback applications (and maybe even just that) knows this too. How did things get to be this way? Can it be solved? What is required to solve it? This talk will be less of a presentation of novel technical material and will instead focus more on the differences (and similarities) between Linux, OS X and Windows and how this has affected the audio environment on each platform.
<a id="session-51"></a>
## 2. State of Linux Audio in 2009

- セッション個別URL: https://blog.linuxplumbersconf.org/ocw/proposals/51
- Track: Audio
- 日時: Wednesday, September 23, 2009 10:45 – 11:30am

### Description

Some of the big audio infrastructure issues that were discussed at the audio track at LPC 2008 have been tackled since then. In this talk I want to give an overview what has been solved, what’s still outstanding and which new problems have become visible.

### 添付資料URL

- [slides](https://blog.linuxplumbersconf.org/2009/slides/Lennart-Poettering-audio-lpc2009.pdf)（file）


### Excerpt

What happened in the last year in Linux audio?
<a id="session-42"></a>
## 3. Linux audio for mobile and consumer devices: challenges and evolutions

- セッション個別URL: https://blog.linuxplumbersconf.org/ocw/proposals/42
- Track: Audio
- 日時: Wednesday, September 23, 2009 11:30am – 12:15pm

### Description

We will first present challenges encountered when enabling hardware accelerators to reduce power-consumption or handle DRM-protected premium content. We show difficulties encountered with gstreamer auto-pluggin, sinks and dynamic re-routing between audio accessories.

In the next section, we will focus on platform volume control and hierarchical mixing. On most devices, the final output is the result of both digital and analog mixing in a companion chip; we present examples and show the need for PulseAudio to control not only the native streams it processes, but also additional streams that are mixed in hardware, so that the user can control volumes all the way to the speaker. We will suggest several proposals based on ALSA controls or PulseAudio extensions.

After we review several existing solutions, we will then show the need for standard communication channels between PulseAudio and audio apps to handle audio policy in a generic manner, and we will present the need to leave the choice of policy rules to the OEM or distribution maintainers. We believe such standardization would benefit not only the mobile community but improve the audio experience on all Linux devices.

Last, we will discuss a generic plumbing issue when transmitting audio/video content to a distant renderer. In the case of HDMI v1.3 for example, the receiver can provide information on the latency of audio and video rendering; this lip-sync delay information is however not channeled from the ALSA driver back to PulseAudio or gstreamer. Likewise, the receiver capabilities in terms of supported channels, frequencies and formats are not forwarded to PulseAudio. The intent of this last section is to stimulate discussions in the Linux audio community on where lip-sync handling and receiver adaptation make the most sense.

Back to list of proposals

### 添付資料URL

- [slides](https://blog.linuxplumbersconf.org/2009/slides/Lennart-Poettering-LPC-plb-20090923-2.pdf)（file）


### Excerpt

This presentation aims at sharing lessons learned with the Linux audio stack (gstreamer, PulseAudio, ALSA) on recent consumer and mobile Intel devices.
<a id="session-105"></a>
## 4. Practical Experiences from Using PulseAudio in Embedded Handheld Devices

- セッション個別URL: https://blog.linuxplumbersconf.org/ocw/proposals/105
- Track: Audio
- 日時: Wednesday, September 23, 2009 Noon – 12:45pm

### Description

Nokia announced its first Linux phone couple of weeks ago. This presentation gives a brief look to its audio architecture and Pulseaudio’s role in it. I will give an idea what is unique about the approach we took and the reasoning behind it. I also go through the biggest challenges in the implementation and try to explain some of the not so elegant hacks we needed to make to create the product.

Back to list of proposals

### 添付資料URL

- [[slides](https://blog.linuxplumbersconf.org/2009/slides/Jyri-Sarha-audio_miniconf_slides.pdf)（file）


### Excerpt

This presentation gives an example how to integrate complex audio enhancement algorithms like acoustic echo canceler to Pulseaudio and how to implement really low audio latency applications as PA modules.
<a id="session-64"></a>
## 5. Modern Configuration API for Wireless Networking

- セッション個別URL: https://blog.linuxplumbersconf.org/ocw/proposals/64
- Track: Networking
- 日時: Wednesday, September 23, 2009 10:00 – 10:25am

### Description

This talk will describe the status of the cfg80211 API and what is being done to finalize it development and spread its adoption.  It will discuss the features available both inside the kernel and to userland application as part of that API.  Finally, it will talk about adapting drivers to the cfg80211 API and discuss what needs to happen to put a stake in the heart of the wireless extensions API for good.

### 添付資料URL

- [slides](https://blog.linuxplumbersconf.org/2009/slides/John-Linville-lpc2009.pdf)（file）


### Excerpt

The wireless extensions API is universally hated by wireless developers on both sides of the user/kernel divide.  Fortunately the cfg80211 API is maturing as a modern alternative.  What is needed is for drivers (both new and old) to adopt cfg80211 as their configuration mechanism so that the long wireless extensions nightmare can finally end.
<a id="session-81"></a>
## 6. Why network namespace sucks and how to make it suck faster

- セッション個別URL: https://blog.linuxplumbersconf.org/ocw/proposals/81
- Track: Networking
- 日時: Wednesday, September 23, 2009 10:30 – 10:55am

### Description

Each namespace implements its own isolated network stack.

Network packets comes to a network stack from network device.

Five different device types that can be used as a packets

sources for containers are demonstrated. Their properties

(mostly performance and maintainability) and features are

compared.

In addition, one more device type is described — the one that is currently only implemented in the OpenVZ containers. Its pros and cons, and ways it can be implemented in the mainline kernel are discussed.

### 添付資料URL

- [video](http://video.linuxfoundation.org/video/1574)（link）


### Excerpt

The talk outlines various ways of establishing a networking

communication between a network namespace (a container)

and the outer world, compares their performance and features.
<a id="session-52"></a>
## 7. Receive Packet Steering: A software solution to scaling the network receive path

- セッション個別URL: https://blog.linuxplumbersconf.org/ocw/proposals/52
- Track: Networking
- 日時: Wednesday, September 23, 2009 11:00 – 11:25am

### Description

The networking stack does not scale well with a single queue NIC on a multi-core system.  The interrupt processing as well as the NAPI processing for a device, including protocol processing, are essentially single threaded on a CPU.  In this talk we discuss a design that introduces parallelism in the networking receive path without the need for multi-queue NIC support.  In essence this will emulate the capablities of hardware multi-queue NIC in that protocol processing of packets for different flows to be done in parallel.  Applying this solution, we can show up to a 300% increase in the packets-per-second that can be handled with a single queue NIC.

Back to list of proposals

### 添付資料URL

- [video](http://video.linuxfoundation.org/video/1577)（link）


### Excerpt

The subject of this talk is a software based solution for scaling performance of the networking receive path.  This is particularly useful with a single queue (legacy) NIC on a multi-core computer.
<a id="session-53"></a>
## 8. Threaded Network Device Interrupts

- セッション個別URL: https://blog.linuxplumbersconf.org/ocw/proposals/53
- Track: Networking
- 日時: Wednesday, September 23, 2009 11:30am – 12:15pm

### Description

Several in the networking community are skeptical on using interrupt threads for the network devices. I will argue that not only does it make the solution more simplex, but also increases network throughput. With the introduction of the threaded interrupt infrastructure into 2.6.30, the path has been paved to allow networking devices to take advantage of this. The threaded interrupt may then do all the work needed to hand off the packet to the thread code without all the complexities needed in locking while using the softirqs.

I will present my ideas and even a working proof of concept, to convince those that still have doubts that the future of the network and Linux in general, is a kernel free from softirqs.

### 添付資料URL

- [slides](https://blog.linuxplumbersconf.org/2009/slides/Steven-Rostedt-network-thread-irqs.pdf)（file）
- [video](http://video.linuxfoundation.org/video/1576)（link）


### Excerpt

Increasing networking performance by using threaded interrupts for the network devices.
<a id="session-50"></a>
## 9. Threaded interrupt handlers

- セッション個別URL: https://blog.linuxplumbersconf.org/ocw/proposals/50
- Track: Real Time
- 日時: Thursday, September 24, 2009 10:00 – 10:25am

### Description

Support for threaded interrupt handlers has been merged into mainline, but there is still work left to convert potential users and explore the full possibilities

Back to list of proposals

### 添付資料URL

掲載なし


### Excerpt

State of threaded interrupt handlers in mainline. What is there and what needs to be dome.
<a id="session-49"></a>
## 10. The state of preempt-rt

- セッション個別URL: https://blog.linuxplumbersconf.org/ocw/proposals/49
- Track: Real Time
- 日時: Thursday, September 24, 2009 10:30 – 10:55am

### Description

preempt-rt is a kernel community project to provide deterministic real-time support for the Linux kernel. Parts of preempt-rt have been merged into mainline already, but there are still key components of the patch to be merged. Give an overview about the state and the parts which need to be worked on for mainline acceptance along with general information about the key changes of preempt-rt and some insight about the challenges of providing real-time support for a general purpose OS.

Back to list of proposals

### 添付資料URL

掲載なし


### Excerpt

Overview over the state of preempt-rt, the mainline merge status and key changes required.
<a id="session-90"></a>
## 11. Running without Systems Management Interrupts

- セッション個別URL: https://blog.linuxplumbersconf.org/ocw/proposals/90
- Track: Real Time
- 日時: Thursday, September 24, 2009 11:10 – 11:35am

### Description

ECC

### 添付資料URL

- [[slides](https://blog.linuxplumbersconf.org/2009/slides/Keith-Mannthey-SMI-plumers-2009.pdf)（file）


### Excerpt

Describe the implementation, benefits and trade-offs of running without non-fatal System Management Interrupts in a Real-Time Enterprise level environment.
<a id="session-88"></a>
## 12. Real-Time Benchmarking - an Open, Cross-Language Micro-Benchmark Suite

- セッション個別URL: https://blog.linuxplumbersconf.org/ocw/proposals/88
- Track: Real Time
- 日時: Thursday, September 24, 2009 11:50am – 12:15pm

### Description

This set of real-time benchmarks was designed with the hopes of becoming an accepted industry standard micro-benchmark suite to compare many of the common metrics of real-time performance across several platforms and several languages (C, C++ and Java).  This allows for a comprehensive look at how these metrics compare across the platform axis and the languages axis.  Most benchmarks, until now, have been throughput oriented, which does not help promote the strengths of real-time Linux.  This benchmark suite introduces many more latency benchmarks which give a better view of how much more deterministic real-time Linux is compared to standard Linux.

In addition to benchmarking these metrics, the benchmark suite can provide a great way to keep watch on kernel regressions and new bugs.  By exercising the same kernel interfaces in a variety of ways with a variety of timings, we may be able to expose more kernel and glibc bugs.  By adding the benchmark suite to an automated test server, such as test.kernel.org, we can keep an eye on the release-to-release performance of the real-time kernel.

While the real-time tests in the Linux Test Project (LTP) do cover some of the same things, one of the major goals of this RT benchmark suite was to have a set of benchmarks that could run in a variety of languages, with a common test harness.

### 添付資料URL

- [slides](https://blog.linuxplumbersconf.org/2009/slides/Vernon-Mauery_rtmb_lpc09.pdf)（file）


### Excerpt

Discussion on a new real-time micro-benchmark suite and how it can help real-time overcome some challenges it faces, such as making apples-to-apples comparisons with other platforms, and how various programming languages compare in the real-time arena.
<a id="session-79"></a>
## 13. Status of SELinux in Ubuntu

- セッション個別URL: https://blog.linuxplumbersconf.org/ocw/proposals/79
- Track: Security
- 日時: Thursday, September 24, 2009 10:05 – 10:30am

### Description

We’ll cover some of the unique features of SELinux in Ubuntu including the update-selinux tools, policy configuration in /etc/selinux.d, and interaction with AppArmor. We’ll also cover recent improvements such as the additional policy modules available in Jaunty and plans for future improvements.

### 添付資料URL

- [slides](https://blog.linuxplumbersconf.org/2009/slides/caleb-case-ubuntu.2009.3.pdf)（file）
- [video](http://video.linuxfoundation.org/video/1563)（link）


### Excerpt

A talk and demo on the current status of SELinux integration in Ubuntu.
<a id="session-26"></a>
## 14. Introducing the SELinux Sandbox

- セッション個別URL: https://blog.linuxplumbersconf.org/ocw/proposals/26
- Track: Security
- 日時: Thursday, September 24, 2009 10:35 – 11:00am

### Description

Fedora 11 introduced the concept of the General purpose sandbox.  The idea is you can run processes within the sandbox that work on untrusted data or even the tools is untrusted and guarantee that the tools has access to only Stdin and STDOUT and very little of the system.  We also plan to demonstrate the SELinux Xwindows Sabdbox at this time.

### 添付資料URL

- [slides](https://blog.linuxplumbersconf.org/2009/slides/dan-walsh-selinux-sandbox.pdf)（file）
- [video](http://video.linuxfoundation.org/video/1565)（link）


### Excerpt

We have introduced the concept of the general purpose sandbox using SELinux.
<a id="session-72"></a>
## 15. Linux Kernel Crypto API

- セッション個別URL: https://blog.linuxplumbersconf.org/ocw/proposals/72
- Track: Security
- 日時: Thursday, September 24, 2009 11:05 – 11:30am

### Description

This talk surveys the recent developments in the Crypto API, and looks at ongoing work and future directions.  Topics covered include hardware support, user-space APIs, and generalisation beyond cryptographic algorithms.

Back to list of proposals

### 添付資料URL

- [slides](https://blog.linuxplumbersconf.org/2009/slides/herbert-xu-crypto-200909.pdf)（file）
- [video](http://video.linuxfoundation.org/video/1567)（link）


### Excerpt

The Linux kernel Crypto API has come a long way since it was first added as a part of the IPsec stack.
<a id="session-34"></a>
## 16. Using IMA for Integrity Measurement and Attestation

- セッション個別URL: https://blog.linuxplumbersconf.org/ocw/proposals/34
- Track: Security
- 日時: Thursday, September 24, 2009 11:35am – Noon

### Description

This talk will cover configuration and use of 2.6.30’s new Integrity Measurement Architecture (IMA). It will discuss IMA measurement policies, use and configuration of a hardware TPM for report signature and validation, and how to generate and use Trusted Computing Group standard formats and protocols for network admission and health-check. The talk will include demonstration of open source applications and libraries for these capabilities.

### 添付資料URL

- [slides](https://blog.linuxplumbersconf.org/2009/slides/David-Stafford-IMA_LPC.pdf)（file）


### Excerpt

Linux 2.6.30 includes the Integrity Measurement Architecture (IMA) system, which measures (hashes) files before they are accessed, and which can use a TPM for hardware signed attestation for centralized management of client integrity.
<a id="session-56"></a>
## 17. A New SELinux Policy Infrastructure

- セッション個別URL: https://blog.linuxplumbersconf.org/ocw/proposals/56
- Track: Security
- 日時: Thursday, September 24, 2009 12:05 – 12:30pm

### Description

The SELinux experience has greatly improved since SELinux’s first appearance in distributions.  Many people now run SELinux without even knowing, or even caring, that it exists.  It still, however, has a reputation for being extremely complicated and heavy-weight, and very few people ever attempt to actually customize the SELinux policy to meet their specific security goals.  While part of the perception of complexity is real and a consequence of the complexity of the typical modern system which SELinux is controlling, the policy infrastructure, which has grown organically over time, contributes to the problem by being brittle and inflexible, hampering efforts to add new features and hindering experimentation in such things as higher-level policy languages.  If the SELinux experience is going to continue to improve, the policy infrastructure must be improved.

A new architecture for the policy infrastructure has been designed and is being implemented.  This architecture will support higher-level languages by providing a better intermediate language that provides more flexible and useful language abstractions to build higher-level language constructs.  It will better support the use of additional tools (such as policy goal verifiers) during a policy build.  It will allow for the separation of the distribution’s policy from the local customizations of that policy.  In general, this new architecture will eliminate the brittleness and inflexibility that is currently hindering improvements to SELinux.

### 添付資料URL

- [slides](http://linuxplumbersconf.org/2009/slides/Carter_2009_LPC_talk_final.pdf)（file）


### Excerpt

This talk will discuss the requirements and design of a new SELinux policy infrastructure.  It is hoped that this talk will lead to the SELinux community validation of the requirements, acceptance of the new architecture, and a plan to replace the old infrastructure.

- 原掲載URL（形式誤り）: http://http://linuxplumbersconf.org/2009/slides/Carter_2009_LPC_talk_final.pdf
- アーカイブ候補URL: https://blog.linuxplumbersconf.org/2009/slides/Carter_2009_LPC_talk_final.pdf
<a id="session-28"></a>
## 18. Smack and the Application Ecosystem

- セッション個別URL: https://blog.linuxplumbersconf.org/ocw/proposals/28
- Track: Security
- 日時: Thursday, September 24, 2009 1:30 – 1:55pm

### Description

This talk provides an overview of the requirements, challenges, and progress of bringing the promise of the Simplified Mandatory Access Contorl Kernel (Smack) to user space. The talk uses a well known commercial application as an example of both how using Smack can add value and how it can be done. The talk covers modest changes that make applciations more friendly in a Smack environment. Additionally, the implications of adding Smack support to the Xorg server as a policy enforcing application are covered.

There is a brief overview of Smack and its design goals to ensure no one gets lost. This includes Mandatory Access Control, Smack interfaces, and the security model. Networking receives special attention due to the importance it plays in application deployment.

### 添付資料URL

- [slides](https://blog.linuxplumbersconf.org/2009/slides/Casey-SmackPlumbers2010.pdf)（file）


### Excerpt

Our sample application is a commercial database server. It provides database services over the network using TCP connections. The security goal we're using Smack to address is the isolation of the database files from the users on the server.



We'll cover two different ways to provide access to the database, allowing either remote or local users access to the services of the database while protecting the database itself.
<a id="session-58"></a>
## 19. SELinux policy within package managers, why policy is special

- セッション個別URL: https://blog.linuxplumbersconf.org/ocw/proposals/58
- Track: Security
- 日時: Thursday, September 24, 2009 2:00 – 2:25pm

### Description

SELinux policy is currently treated as if it were another application. In most distributions, it is a single package that exists on its own as if it did not relate to the software to which it applies. Consequently, there is no way to ensure that policy matches installed applications. Further, any maintenance of policy must be performed manually via post install scripts, which is both tedious and error-prone. It is also very difficult to ensure that policy and the applications it confines are installed in the proper order, meaning that applications can be labeled improperly for a window of time.

We propose solving this for package managers to treat policy as metadata rather than an application. This metadata can exist in the package of the application it applies to, or in system packages for more broad policy. This solution alleviates the pain of manually maintaining policy in scripts by giving the package manager enough information to manage policy automatically. By treating policy as metadata, it can be installed at the appropriate time in order to avoid ordering issues. As a side benefit, all policy module installations can be combined during a package manager transaction, reducing the performance hit taken when splitting policy into multiple packages.

### 添付資料URL

- [slides](https://blog.linuxplumbersconf.org/2009/slides/brindle-selinux-distribution-lpc-slides.pdf)（file）
- [video](http://video.linuxfoundation.org/video/1569)（link）


### Excerpt

SELinux policy is currently installed from a single or multiple package(s) as an application which breaks the linkage between policy and the software they are constraining. We will talk about a way to treat policy specially without adding downfalls such as a large increase in packages.
<a id="session-87"></a>
## 20. XACE Demonstration and Discussion

- セッション個別URL: https://blog.linuxplumbersconf.org/ocw/proposals/87
- Track: Security
- 日時: Thursday, September 24, 2009 2:30 – 2:55pm

### Description

A brief demonstration of X Access Control Extension (XACE) functionality using the SELinux extension for Xorg and a few supporting applications, including a compiz plugin for displaying window labels and input manager that supports the new XI2 extension and multiple mouse pointers.

Afterwards, a discussion about the movement of memory management, command submission, and mode setting interfaces into the kernel, as they relate to fine-grained security controls.  Is XACE relevant in  environments such as Wayland?  Would instrumentation of the kernel interfaces with LSM hooks be possible or appropriate?

### 添付資料URL

- [video](http://video.linuxfoundation.org/video/1566)（link）


### Excerpt

XACE can be used to make a nifty secure desktop on Xorg.  But is XACE relevant with graphics interfaces moving into the kernel?
<a id="session-43"></a>
## 21. Making SELinux Easier to Use

- セッション個別URL: https://blog.linuxplumbersconf.org/ocw/proposals/43
- Track: Security
- 日時: Thursday, September 24, 2009 3:00 – 3:25pm

### Description

Inadequate documentation was recently listed as one of problems related to using SELinux on

the SELinux mailing list. Although many tools for SELinux have been created, there is still a

perception that SELinux is too complicated to use. This talk will present a list of possible documentation

improvements that can help change this perception.

Note: Co-author Debora Velarde

### 添付資料URL

- [slides](https://blog.linuxplumbersconf.org/2009/slides/Bryan-Jacobson-Debora-Velarde-Plumbers09_SELinux_docs.pdf)（file）
- [video](http://video.linuxfoundation.org/video/1562)（link）


### Excerpt

SELinux is often disabled immediately or at the first sign of trouble. How can we make SELinux something users actually want to leave on?
<a id="session-66"></a>
## 22. Lazy boot

- セッション個別URL: https://blog.linuxplumbersconf.org/ocw/proposals/66
- Track: Boot and Init
- 日時: Thursday, September 24, 2009 1:30 – 2:15pm

### Description

Specialized distros, and stripped down default installs have resulted in impressive boot speeds; but what is a bog-standard distro to do? This talk examines some of the gains made to Fedora (and upstream) by improving what is done during boot, and what can be deferred for later.

For instance, why do we need to load sound drivers before we have a filesystem mounted read-write? Why do we need cups running without any printers attached? And if you do have a printer, why do you need it before your network is up? When is an appropriate time to start system services?

This talk seeks to address some of these questions for the general purpose desktop or laptop machine.

Back to list of proposals

### 添付資料URL

掲載なし


### Excerpt

The moral of the story is, we still load too much stuff, and it takes too long to do it. Users (and developers) want time to go down, while things continue to get more complicated. How can we sort that out?
<a id="session-71"></a>
## 23. Upstart 1.0

- セッション個別URL: https://blog.linuxplumbersconf.org/ocw/proposals/71
- Track: Boot and Init
- 日時: Thursday, September 24, 2009 2:20 – 3:05pm

### Description

Upstart is an event-driven replacement init daemon used by Ubuntu, Fedora, Maemo and Palm WebOS.  This talk presents information about Upstart 1.0: what’s new in that release and how far along the roadmap I am to it.

Back to list of proposals

### 添付資料URL

掲載なし


### Excerpt

Presenting Upstart 1.0
<a id="session-69"></a>
## 24. Dracut - a generic initramfs infrastructure

- セッション個別URL: https://blog.linuxplumbersconf.org/ocw/proposals/69
- Track: Boot and Init
- 日時: Thursday, September 24, 2009 3:10 – 3:55pm

### Description

Dracut is a generic, modular initramfs generation tool, that can be used across various distributions.

Unlike existing initramfs’s, this is an attempt at having as little as possible hard-coded into the initramfs as possible. The initramfs has (basically) one purpose in life — getting the rootfs mounted so that we can transition to the real rootfs. This is all driven off of device availability. Therefore, instead of scripts hard-coded to do various things, we depend on udev to create device nodes for us and then when we have the rootfs’s device node, we mount and carry on. This helps to keep the time required in the initramfs as little as possible so that things like a 5 second boot aren’t made impossible as a result of the very existence of an initramfs.

### 添付資料URL

- [slides](https://blog.linuxplumbersconf.org/2009/slides/Harald-Hoyer-dracut.pdf)（file）


### Excerpt

Introduction of a new initramfs generation tool, which creates a general purpose udev event based initramfs.
<a id="session-27"></a>
## 25. Power management: Communicating needs and desires

- セッション個別URL: https://blog.linuxplumbersconf.org/ocw/proposals/27
- Track: Kernel/Userspace/User Interfaces
- 日時: Friday, September 25, 2009 10:00 – 10:45am

### Description

Power management is still often thought of as a set of static policies that will be enacted whenever the system becomes idle. However, much of the power savings in a modern system are adaptive and entirely transparent to the user. The aim now is to take this even further. Even greater power savings can be achieved if we can disable certain aspects of hardware functionality. But how can we infer when it’s safe to do so? How can we identify userspace’s needs and make sure that they’re satisfied? How aggressive can we be at entering these lower power states?

This presentation will discuss some of the existing interfaces (such as pm_qos) that exist for userspace to inform the kernel of requirements. It will also discuss what other sources of information already exist and can be tied into power management, along with cases where we lack any infrastructure to communicate desires and hence sacrifice one of either functionality or power. The aim is to identify our current shortcomings and propose ways to allow userspace to communicate its desires to the kernel.

Back to list of proposals

### 添付資料URL

掲載なし


### Excerpt

Implementing power management is the job of the kernel - however, it's userspace's job to let it know what functionality is needed. What interfaces do we need to expose, and how should userspace be making use of them?
<a id="session-62"></a>
## 26. USB 3.0 for Linux

- セッション個別URL: https://blog.linuxplumbersconf.org/ocw/proposals/62
- Track: Kernel/Userspace/User Interfaces
- 日時: Friday, September 25, 2009 10:45 – 11:30am

### Description

USB 3.0 promises wirespeeds of 5Gbps, and supports new link power management and function power management.  For Linux to take advantage of this new speed and PM features, both the USB and storage kernel subsystems and the USB userspace interface will need to be modified.  This talk will provide a brief overview of USB 3.0 before diving into development issues.

### 添付資料URL

- [slides](https://blog.linuxplumbersconf.org/2009/slides/Sarah-A-Sharp-lpc-usb3-pres.pdf)（file）


### Excerpt

USB 3.0 promises a faster, more power efficient common device bus.  Is Linux ready for it?
<a id="session-39"></a>
## 27. Checkpoint/Restart in Linux mainline

- セッション個別URL: https://blog.linuxplumbersconf.org/ocw/proposals/39
- Track: Kernel/Userspace/User Interfaces
- 日時: Friday, September 25, 2009 11:30am – 12:15pm

### Description

Checkpoint/Restart is the ability to save the entire state of a running application and then resume the application either on the same system or a completely different system with a similar operating environment.

A transparent C/R requires absolutely no changes to an application and does not even require a rebuild of the application.

C/R provides several benefits to system administrators and users. Critical applications can be checkpointed at regular intervals and restarted from a recent checkpoint after a software/hardware upgrade or an application or system failure.  The checkpointed application may even be restarted on second system with a similar operating environment during extended down times of the original system.

C/R is especially useful to applications that have a long start-up times or incur significant performance penalty on startup due to parsing configuration information or populating a cache. Such applications can be checkpointed

when running at optimal speed and can be resumed from the checkpoint when it becomes necessary to restart the application.

C/R also enables significantly improved load-balancing and consolidation. When the load on a server goes up some applications on the server can be checkpointed and stopped on that server and the application can quickly be resumed on a new server.

Similarly, when the load on several servers is low, the applications on those could be checkpointed and restarted on fewer servers, improving system utilization.

For all its benefits, implementation of general purpose and transparent Checkpoint/Restart presents several complex and interesting challenges due to the vast and varied application state that needs to be saved and restored.  The application state includes process memory, CPU registers, open file state, task relationships, signals state, SYSV IPC, sockets, network stack, device state etc.

We are actively seeking to implement C/R in mainline, based on two existing out-of-tree implementations: Zap and OpenVZ.  We would like to briefly go over our current implementation and present some major requirements, challenges and design decisions for broader review.

But more importantly, we would like to understand and prioritize the devices, resources and state of HPC, X, Clusters and other applications that would need to be checkpointed and restarted. To that end, we would like to get input from administrators and users of such applications as well as from administrators and users of other C/R implementations.

We would also like input from developers of the various subsystems in the Linux kernel on how C/R may impact their subsystems and how we could improve/stage the implementation.

### 添付資料URL

- [[slides](https://blog.linuxplumbersconf.org/2009/slides/Sukadev-Bhattiprolu-Plumbers.pdf)（file）


### Excerpt

Requirements and challenges in implementation of Checkpoint/ Restart in Linux mainline.
<a id="session-38"></a>
## 28. Evaluating Linux storage APIs for use in QEMU/KVM

- セッション個別URL: https://blog.linuxplumbersconf.org/ocw/proposals/38
- Track: Storage
- 日時: Friday, September 25, 2009 10:00 – 10:45am

### Description

KVM is a Linux kernel module that exposes hardware virtualization support to userspace.  QEMU is a full system simulator that runs as a user space process and emulates/virtualizes many types of machines including a standard PC.  Together, KVM and QEMU enable Linux to act as a hypervisor.

As a hypervisor, I/O performance is a weak area today in Linux.  Since all I/O for guests are generated from QEMU, we are largely limited by the I/O interfaces provided by the Linux kernel to userspace.  The current set of storage I/O interfaces have proven to not map well to QEMU’s requirements.

This talk will cover how we are currently using the storage I/O interfaces provided by Linux.  It will focus on the mechanisms to generate multiple asynchonrous, scatter/gather I/O requests to buffered and non-buffered files along with physical devices.  It will also cover topics like request tagging and barriers.

The goal of the talk will be to generate discussion about proposed future interfaces (syslets, acalls, etc.) and to discuss whether current interfaces like linux-aio are at all salvagable.

Virtualization is perhaps one of the more demanding userspace I/O workloads available so it serves as a particularly good canary in evaluating future I/O interfaces.

### 添付資料URL

- [slides](https://blog.linuxplumbersconf.org/2009/slides/Anthony-Liguori-qemu-block.pdf)（file）
- [video](http://video.linuxfoundation.org/video/1561)（link）


### Excerpt

Discussing limitations of current userspace storage APIs for use in QEMU/KVM.
<a id="session-76"></a>
## 29. Locking issues on Clustering File Systems

- セッション個別URL: https://blog.linuxplumbersconf.org/ocw/proposals/76
- Track: Storage
- 日時: Friday, September 25, 2009 10:40 – 11:25am

### Description

User space clustering stack brings advanced and flexible cluster file systems (e.g. OCFS2), which involved in the usage of unified Distributed Lock Manager code in Linux Kernel (a.k.a fs/dlm).

This talk intends to invoke the open discussion on (but not limited to) DLM and clustering file system realted issues. For examples, the lock mastering expense, lock communication cost, dlm compatible issue between fs/dlm and OCFS2, deadlocking detection …

### 添付資料URL

- [video](http://video.linuxfoundation.org/video/1572)（link）


### Excerpt

open discussion on locking issue on clustering file systems, especially associated with fs/dlm code
<a id="session-37"></a>
## 30. Linux Data de-duplication

- セッション個別URL: https://blog.linuxplumbersconf.org/ocw/proposals/37
- Track: Storage
- 日時: Friday, September 25, 2009 10:50 – 11:35am

### Description

By Data de-duplication,only one unique instance of the data is actually retained on storage media, such as disk or tape or a virtual machine image. This not only reduces large storage needs but also  and reduce the corresponding cost of backup, disaster recovery and power consumption. It becomes a hot topic with increasing need for large storage.  Adding support of data de-duplication today makes Linux much stronger in enterprise environment.  Whether support data de-duplication on the air within filesystem or perform delayed user-space de-duplication have different challenges. This talk will discuss about the challenges of both methods, options, describe several ideas discussed in the btrfs community. This talk encourages inputs and ideas from audience about future plans about data deduplication for linux.

### 添付資料URL

- [slides](https://blog.linuxplumbersconf.org/2009/slides/Mingming-Cao-lpc-09-dedup.pdf)（file）
- [video](http://video.linuxfoundation.org/video/1573)（link）


### Excerpt

Data de-duplication is a effective way to reduce large storage needs by eliminating redundant data, a hot demanded feature for virtualization OS image sharing and efficient data storage backups. It's really valuable  to add data de-duplication support to Linux filesystem, however the feature is quite challenging too. How to get it right? What's the performance impact? Block level or file level? On the fly data de-duplication in filesystem or background userspace de-duplication?
<a id="session-24"></a>
## 31. Embedded Linux development: a glance from inside

- セッション個別URL: https://blog.linuxplumbersconf.org/ocw/proposals/24
- Track: Embedded Systems
- 日時: Friday, September 25, 2009 1:30 – 2:15pm

### Description

The “Embedded Systems track” title says: “Linux is embedded in everything, but where are the developers?”

I’d like to try answering this question from point of view of small Linux developer in small embedded company.

Indeed, there are quite a few companies that “do the right thing” and work hard to make their patches hit the mainline. However, the number of embedded developers involved in open source projects is small relatively to the number of devices that run Linux.

I’ll cover the process of embedded device development, constraints the embedded developers have and will try to analyze reasons for low number of contributions from the embedded world to open source.

Back to list of proposals

### 添付資料URL

- [slides](https://blog.linuxplumbersconf.org/2009/slides/Mike-Rapoport-talk.odp)（file）


### Excerpt

This talk addresses relationship between embedded developers and the Linux community
<a id="session-44"></a>
## 32. Asymmetric Multiprocessing Issues

- セッション個別URL: https://blog.linuxplumbersconf.org/ocw/proposals/44
- Track: Embedded Systems
- 日時: Friday, September 25, 2009 2:15 – 3:00pm

### Description

Embedded system designers want to use asymmetric multiprocessing to supplement Linux with more specialized capabilities (e.g. tighter real-time bounds or better network throughput). In a nutshell, the idea is “co-operative partitioning”: run multiple kernels, without isolation, on a multicore system.

There are a number of issues in adapting Linux to ASMP environments, such as exactly how to get both kernels loaded, how to convince them to leave some hardware resources for each other, how to share hardware devices, and how to communicate. Especially this last point is very similar to issues found in traditional coprocessor (e.g. CompactPCI) or FPGA systems.

Using existing solutions, such as Open Firmware-inspired device trees and virtio drivers, can save developer time and make Linux better faster for these applications.

Back to list of proposals

### 添付資料URL

- [slides](https://blog.linuxplumbersconf.org/2009/slides/Hollis-Blanchard-LPC-2009-ASMP.pdf)（file）


### Excerpt

This talk will discuss problems faced by designers of multicore systems with multiple kernels, with an emphasis on solutions across developer communities.
<a id="session-47"></a>
## 33. Flattened Device Tree for all architectures

- セッション個別URL: https://blog.linuxplumbersconf.org/ocw/proposals/47
- Track: Embedded Systems
- 日時: Friday, September 25, 2009 3:00 – 3:45pm

### Description

One of the compelling features of the OpenFirmware design is that it makes a structured description of the hardware called the “device tree” available to the operating system.  The operating system reads the device tree and uses it to figure out such things like how much memory is available, bus layout, list of devices, and how interrupts are connected.  By encoding the platform layout in hardware, it removes the requirement to hardcode all known board configurations into the kernel itself, a pattern which is common in the embedded Linux world.

The data structure is useful enough that a decision was made to require all PowerPC platforms to pass a device tree to the Linux kernel at boot time and the Flattened Device Tree (FDT) data format was developed for providing a device tree on systems without OpenFirmware (ie. almost every embedded PowerPC).  See this paper for a detailed description of the switch to FDT for embedded PowerPC platforms, and a discussion of the tradeoffs.

http://ols.fedoraproject.org/OLS/Reprints-2008/likely2-reprint.pdf

Other architectures also make use of the FDT data format.  The Microblaze arch requires an FDT to be passed at boot time, and some out-of-mainline ARM and MIPS board ports use it too.

In this session we will discuss the possibility of making the Flattened Device Tree data structure available as a ‘stock’ method for describing hardware for platforms which don’t already have a firmware interface for describing configuration (in particular embedded non-x86).  We will discuss how to manage and standardize data format of for new types of devices, impact (or lack thereof) on firmware, and work needed to make FDT infrastructure available on all architectures.  Goal of session is to coordinate FDT development and make decisions about how common FDT support should be organized in the kernel.

### 添付資料URL

- [http://ols.fedoraproject.org/OLS/Reprints-2008/likely2-reprint.pdf](http://ols.fedoraproject.org/OLS/Reprints-2008/likely2-reprint.pdf)（file）


### Excerpt

Session to discuss the work required to make the Flattened Device Tree method of describing hardware available to all architectures.
<a id="session-61"></a>
## 34. Lessons Learned Designing an Open Source UMPC

- セッション個別URL: https://blog.linuxplumbersconf.org/ocw/proposals/61
- Track: Embedded Systems
- 日時: Friday, September 25, 2009 3:45 – 4:30pm

### Description

The OSWALD was developed to encourage students to experiment and explore every aspect of computing. The OSWALD provides a flexible, yet powerful platform that can adapt to meet the needs of a large number of course topics and student interests. The OSWALD is also open and available to the greater Open Source community.

The OSWALD is open from the ground up, from the hardware layer to the application layer. Every bit is

available for students and enthusiasts to study and modify as needed.

This talk will give you a quick overview of the architectural design of the OSWALD, and a discussion of the challenges we faced, and are still facing in getting a stable, complete, and usable software distribution for our Linux-based UMPC.

### 添付資料URL

- [slides](https://blog.linuxplumbersconf.org/2009/slides/Tim-Harder-oswald-linux-plumbers-presentation.pdf)（file）


### Excerpt

The Oregon State Wireless Active Learning Device (OSWALD) is an open, fully featured Ultra-Mobile Personal Computer (UMPC) platform designed by and for students. Come learn about the design, the software hacks, and issues in getting Linux to run smoothly on a custom made hand-held platform.
<a id="session-109"></a>
## 35. Video API Deathmatch: VDPAU vs. VAAPI

- セッション個別URL: https://blog.linuxplumbersconf.org/ocw/proposals/109
- Track: X Window System
- 日時: Friday, September 25, 2009 1:30 – 2:15pm

### Description

This talk is the infamous “Video API Deathmatch: VDPAU vs. VAAPI”, where “VDPAU” is NVIDIA’s Video Decode and Presentation API for Unix, and “VAAPI” is the Video Acceleration API led by Intel, and (not surprisingly) supported by recent Intel integrated graphics hardware, but also supported by recent S3 Graphics hardware. Stephen Warren will be putting on the gloves for VDPAU and Jonathan Bian will be defending VAAPI’s honor. Keith will then moderate the Q&A session, with questions taken from any surviving members of the audience.

Back to list of proposals

### 添付資料URL

- [slides](https://blog.linuxplumbersconf.org/2009/slides/Bian-Jonathan-VAAPI_LPC2009.pdf)（file）
- [video](http://video.linuxfoundation.org/video/1575)（link）


### Excerpt

Video API Deathmatch: VDPAU vs. VAAPI
<a id="session-70"></a>
## 36. Compositing, OpenGL, double-buffering, and dragons

- セッション個別URL: https://blog.linuxplumbersconf.org/ocw/proposals/70
- Track: X Window System
- 日時: Friday, September 25, 2009 2:45 – 3:10pm

### Description

Currently, OpenGL, compositing window systems, and vertical refresh synchronized buffer swapping combine to make a giant mess.  The current interfaces provided by GLX to synchronize buffer swaps don’t work well with multi-monitor displays and don’t really provide the functionality that applications want.  Compositing window managers aren’t able to get or provide the necessary information to ensure tear-free buffer swaps to all applications in a performant manner.  At the intersection is disappointed users and frustrated application developers.

This talk will present a brief overview of where we are and how we got here.  The deficient software interfaces will then be enumerated, and possible enhancements to these interfaces will be presented.  The talk will conclude by soliciting input from the audience.  The problems highlighted by this talk have been growing over the past several years.  It is clear that more input is needed to create a robust solution.

### 添付資料URL

- [video](http://video.linuxfoundation.org/video/1568)（link）


### Excerpt

Overview of the current state of compositor interfaces and their interactions with OpenGL double-buffering.
<a id="session-29"></a>
## 37. The Battle for 2D Acceleration

- セッション個別URL: https://blog.linuxplumbersconf.org/ocw/proposals/29
- Track: X Window System
- 日時: Friday, September 25, 2009 3:10 – 3:35pm

### Description

Today we have several competing technologies with which to build a fully-accelerated cairo backend.

Over the last year just a single technology has matured that makes 2D client-side rendering palatable, GEM. By moving the memory management, command scheduling and execution into the kernel, any number of process can co-operate and focus on performing their own rendering via the GPU. cairo-drm-i915 has demonstrated just how easy it is to take an existing EXA driver, implement it as a cairo backend and supercharge its performance. Though people may prefer such work be done in a pixman-drm backend…

Then competing against cairo-drm are the various efforts to write a true cairo-gl backend.  (glitz’s design of implementing XRender on top of OpenGL has proven to be too limiting.)  Here people speculate whether interfacing directly with gallium (i.e. cairo being just another state-tracker) will be our panacea.

The goal is a fully-accelerated tessellator for high quality 2D interfaces, cairo on the gpu.  The question is how?

### 添付資料URL

- [video](http://video.linuxfoundation.org/video/1564)（link）


### Excerpt

The initial impetus for cairo-drm came from a desire to experiment with GEM on my i915, and a need to provide an acceleration architecture for the wayland system compositor. (wayland is a minimalistic compositor and input multiplexer that requires client-side rendering.) It proved very easy to incorporate a drm/i915 backend into cairo; first by adapting the existing EXA driver, then to extend it to provide full acceleration for all patterns and to accelerate some of cairo's higher level operations. (The i915 hardware does not seem amenable for offloading tessellation, which has limited just how much we can accelerate in the backend.  On more capable hardware, such as the fully programmable i965, we should be able to achieve much more.)
<a id="session-60"></a>
## 38. Xorg State Tracker: The last Xorg driver

- セッション個別URL: https://blog.linuxplumbersconf.org/ocw/proposals/60
- Track: X Window System
- 日時: Friday, September 25, 2009 3:35 – 4:00pm

### Description

Gallium is a open source 3D stack has become the standard driver infrastructure for writing new 3D drivers. And one can layer several rendering APIs on top of Gallium. These API interfaces are called state trackers, several exist: OpenGL, OpenVG, OpenGL ES and a video acceleration interface.

So why not layer the X rendering on top of Gallium, use kernel side modesetting for bringing up display and write the last Xorg driver. Should we only accelerate parts of the EXA interface, try to strive for full EXA implementation or do our own X acceleration architecture and cover as much as possible of what is used by modern applications.

### 添付資料URL

掲載なし


### Excerpt

A talk about Gallium and the Xorg state tracker and where they fit in and where they are going.
<a id="session-41"></a>
## 39. Re-plugging the Modern Desktop

- セッション個別URL: https://blog.linuxplumbersconf.org/ocw/proposals/41
- Track: General
- 日時: Friday, September 25, 2009 1:30 – 2:15pm

### Description

Showing in detail the flow of actions from the kernel up into the end user applications and back. Major changes happened recently to the entire device handling stack. Abstractions of abstractions which didn’t work out got removed from the system. HAL is no longer part of the game and replaced by the kernel, udev, DeviceKit and ConsoleKit. The basic idea stays the same, but the cake is cut into different pieces, and this is what will be explained here.

### 添付資料URL

- [slides](https://blog.linuxplumbersconf.org/2009/slides/Kay-Sievers-David-Zeuthen-plugging-the-modern-desktop.pdf)（file）


### Excerpt

A walk through the pieces of a modern Linux desktop, which manage the hardware that is coming and going and failing.
<a id="session-86"></a>
## 40. Unified error reporting -- A worthy goal?

- セッション個別URL: https://blog.linuxplumbersconf.org/ocw/proposals/86
- Track: General
- 日時: Thursday, September 24, 2009 10:45 – 11:30am

### Description

Modern hardware platforms have various error sources, including

chipsets, CPUs, memory, PCI-AER and others. Currently all of these (if they are reported) are reported in a ad-hoc fashion 

to various different log files.  This can can make it difficult

to write error analysis tools and backends and also cause

various other problems.

The talk will discuss the pros and cons of a possible unified

error reporting method for platform errors and how user 

space infrastructure for it could look like.

This will discuss both existing code, some prototypes

and also some pie-in-the-sky.

Back to list of proposals

### 添付資料URL

- [slides](https://blog.linuxplumbersconf.org/2009/slides/Andi-Kleen-plumbers-error.pdf)（file）


### Excerpt

Discusses pro and cons of a unified mechanism to report platform

errors.
<a id="session-77"></a>
## 41. Merging KGDB, KDB and Kernel Mode Setting

- セッション個別URL: https://blog.linuxplumbersconf.org/ocw/proposals/77
- Track: General
- 日時: Thursday, September 24, 2009 10:00 – 10:45am

### Description

For years kdb, kgdb and various other kernel debuggers have lived in different worlds, with different development communities.  The time has come to try and merge these technologies so as to use a common low level API (the kernel debug core).

This talk will explain the architectural differences between kgdb and kdb as well as to lay out a plan of how to combine the technologies to create a mostly architecture independent debugger.

The talk will also explain the challenges that remain for adoption of the remaining pieces of kgdb that live outside the kernel.org tree today.  The goal is to bring about awareness of the need for collaboration to continue to build an easy to use, robust kernel debugger, while not sacrificing kernel performance.

In the spirit of building something at the conference the Jesse and Jason will collaborate to try and get a prototype working in order to demonstrate kernel mode setting and debugging some portion of the kernel.

### 添付資料URL

- [slides](https://blog.linuxplumbersconf.org/2009/slides/kgdb_kdb_modesetting.ppt)（file）


### Excerpt

Explain the current state of kgdb, kdb.  Discuss the future architectural plans for combining kgdb, kdb and kernel mode settings and proposed advanced single stepping APIs.
<a id="session-17"></a>
## 42. Scaling the VFS

- セッション個別URL: https://blog.linuxplumbersconf.org/ocw/proposals/17
- Track: General
- 日時: Thursday, September 24, 2009 1:30 – 2:15pm

### Description

The Linux VFS contains a number of complex data structures to represent and manage filesystem and namespace details. This includes “dcache”, which is a cache of the directory entry layout of mounted filesystems, “inode cache” to cache filesystems’ inode metadata, among others. These data structures tend to be protected with global locks which do not scale well as CPU core count increases. I am working on implementing fine grained locking for some of the important cases. To date I have posted patches to remove the global dcache lock for initial review. These already provide about 50% performance gain on the dbench workload on an 8 core system. I would like to give a presentation on my progress on this project.

This presentation should describe my designs and give some results, but also implementation problems that I am encountering, with a mind to getting vfs and filesystem developers interested and hopefully helping with ideas.

Back to list of proposals

### 添付資料URL

- [slides](https://blog.linuxplumbersconf.org/2009/slides/Nick-Piggin-presentation.pdf)（file）


### Excerpt

Fine grained locking to improve scalability of the Linux VFS
<a id="session-92"></a>
## 43. video4linux stream sharing with a server daemon

- セッション個別URL: https://blog.linuxplumbersconf.org/ocw/proposals/92
- Track: General
- 日時:  

### Description

Last year Brandon presented on the need for a video4linux server and some details on how it might be done. This session will build on that initial discussion and will include details and research done by Hans and Brandon about specific approaches over the coming months before the conference.

### 添付資料URL

- [slides](https://blog.linuxplumbersconf.org/2009/slides/Brandon-Philips-v4l2-stream-sharing-2009.pdf)（file）


### Excerpt

Video devices currently can only be open by one process at a time. This makes it impossible to do necessary things like software auto-focus or recording video while using ekiga.
<a id="session-33"></a>
## 44. Out of Memory - Helping applications survive the axe or report the aftermath.

- セッション個別URL: https://blog.linuxplumbersconf.org/ocw/proposals/33
- Track: General
- 日時: Wednesday, September 23, 2009 10:00 – 10:45am

### Description

Click Here to View the Slides

The Out of Memory (OOM) killer has consistently been a hotly debated topic in Linux. Having the wrong application killed as a result of an OOM condition can be very frustrating, and the root cause often remains elusive. Several knobs and controls have been exported but even these can be unsuitable for some.  Many users dislike the default behavior and will either customize the code or replace it entirely. The OOM killer’s

behavior has also changed over time to the point where its appearance no longer indicates a true “out of memory” situation.

There have been several patches to address these issues: the mem notify interface, per cgroup OOM controller, and various patches to change the OOM killer’s log output.  The goal of this session is to gather together

the kernel developers interested in these features, other core VM

developers, and the many users affected by OOM situations.

Kernel developers know that, despite the hard work, some aspects of the OOM killer are still in need of improvement.  This session will solicit user feedback to help the kernel developers properly gauge the past work and direct any efforts in the future.

Kernel developers will come out of this session with an improved idea of how OOM situations affect users, how to best tailor the kernel’s output for user consumption, and what features to work on next.  Users will

benefit from the session by learning how to better interpret the OOM situations to distinguish kernel from application bugs.  They should

also be much better prepared to use the kernel’s new OOM-related

features in their own environments.

### 添付資料URL

- [slides](https://blog.linuxplumbersconf.org/2009/slides/Dave-Hansen-oom-v3.pdf)（file）


### Excerpt

The Out of Memory (OOM) killer has consistently been a hotly debated topic in Linux.  Why does it kill?  What is being done to improve it?  What do users really need it to do?
<a id="session-22"></a>
## 45. Per backing device dirty data writeback

- セッション個別URL: https://blog.linuxplumbersconf.org/ocw/proposals/22
- Track: General
- 日時: Thursday, September 24, 2009 11:30am – 12:15pm

### Description

The current 2.6 kernels use a pdflush driven approach to writing out dirty data on. pdflush is a thread pool implementation that by default has anywhere from 2 to 8 threads running in the system. Each pdflush thread can be working a number of devices, however there can only be one pdflush active against a specific device at the time.

This approach worked well and was a big step up from the 2.4 days where we had a single bdflush working all devices. There are, however, some problems with our current setup. pdflush has to work in non-blocking mode since it handles multiple devices, which can cause request starvation against a particular device since it cannot afford to wait for request allocation. There have also been reports on really fast devices out running pdflush, more than one thread would be needed to keep them running at full speed. This is not possible with the current design.

I have implemented a new design for flushing dirty data, in which dirty inodes and flushing is tracked on a per-backing device basis. This reduces both locking scope and improves locality by keeping the flushing local to one (or a set) of thread(s). Keeping the dirty inode list local to the device instead of per-superblock also reduces the amount of scanning we have to do. No request starvation can happen with this design, as local threads are allowed to block on a single device.

An experimental feature of this patch set is the ability to have multiple threads per backing device, with the file system directing the placement of inodes. Involvement from parties that suffer from pdflush being too slow for a single device will be required to finalize this.

And finally, the new approach is a lot more flexible. Threads are created and exit lazily if no work has happened for a period of time. So it should be more flexible at both ends of the spectrum, having zero threads active on an writeback idle system and scaling to more threads than pdflush should it be needed.

### 添付資料URL

- [slides](https://blog.linuxplumbersconf.org/2009/slides/Jens-Axboe-lpc2009-slides-axboe.pdf)（file）


### Excerpt

Per backing device dirty data writeback replaces pdflush driven writeback in an attempt to speed up this operation.
<a id="session-46"></a>
## 46. Userspace RCU library : what linear multiprocessor scalability means for your application

- セッション個別URL: https://blog.linuxplumbersconf.org/ocw/proposals/46
- Track: General
- 日時: Thursday, September 24, 2009 2:20 – 3:05pm

### Description

RCU is well-known at the kernel-level for providing a way to synchronize shared data structures in read-often, update-rarely scenarios.

The development of a RCU library at the userspace application level has been mainly driven by the need for efficient synchronization of userspace tracing control data structures.

IBM kindly agreed to allow distribution of RCU-related code in a LGPL library, which makes it available for everyone to use. This can have large impact on the design of highly scalable applications performing caching of frequent requests, like domain name servers, proxy and web servers.

This presentation will discuss about the class of applications which could benefit from using the userspace RCU library.

The userspace RCU library is available under the LGPL license at http://www.lttng.org/urcu .

### 添付資料URL

- [slides](https://blog.linuxplumbersconf.org/2009/slides/Mathieu-Desnoyers-talk-lpc2009.pdf)（file）


### Excerpt

What can the Userspace RCU LGPL library do to help your application scale well on large multiprocessor systems ?
<a id="session-91"></a>
## 47. PORTAL Case Study

- セッション個別URL: https://blog.linuxplumbersconf.org/ocw/proposals/91
- Track: General
- 日時: Friday, September 25, 2009 2:15 – 3:00pm

### Description

The Portland Oregon Regional Transportation Archive Listing (PORTAL) is the official transportation data archive for the Portland metropolitan region. PORTAL is being developed at Portland State University (PSU) by students and faculty in the Intelligent Transportation Systems Laboratory in cooperation with the Oregon Department of Transportation, Metro, the City of Portland, TriMet and other regional partners.  PORTAL contains almost one terabyte of transportation-related data for the Portland metropolitan region. The data includes freeway speed and volume data as well as incident, weather, transit and freight-related data. In addition to the data archive, PORTAL has a web site that provides dynamic, user-customizable graphs and reports for analyzing transportation including plots of congestion, bottlenecks, speed maps and incident analysis. Presented here is a performance study showing how PostgreSQL and Linux handle the demands of all the PORTAL archive and web site.

Back to list of proposals

### 添付資料URL

- [slides](https://blog.linuxplumbersconf.org/2009/slides/Mark_Wong,_Kristin_Tufte_-_Portal.pdf)（file）


### Excerpt

A case study of the Portland Oregon Regional Transportation Archive Listing (PORTAL) database on PostgreSQL and Linux.
<a id="session-85"></a>
## 48. Scalable Concurrent Hash Tables via Relativistic Programming

- セッション個別URL: https://blog.linuxplumbersconf.org/ocw/proposals/85
- Track: General
- 日時: Thursday, September 24, 2009 3:10 – 3:55pm

### Description

Existing approaches to concurrent programming often fail to account for synchronization costs on modern shared-memory multiprocessor architectures.  A new approach to concurrent programming, known as relativistic programming, can reduce or in some cases eliminate synchronization overhead on such architectures.  This approach avoids the costs of inter-processor communication and memory access by permitting processors to operate from a relativistic view of memory provided by their own caches, rather than from an absolute reference frame of memory as seen by all processors.  This research shows how relativistic programming techniques can provide the perceived advantages of optimistic synchronization without the useless parallelism caused by rollbacks and retries.

Descriptions of several implementations of a concurrent hash table illustrate the differences between traditional and relativistic approaches to concurrent programming.  An analysis of the fundamental performance bottlenecks in existing concurrent programming techniques, both optimistic and pessimistic, directly motivates the key ideas of relativistic programming.  Relativistic techniques provide performance and scalability advantages over traditional synchronization, demonstrated through benchmarks of concurrent hash tables implemented in the Linux kernel.  The demonstrated relativistic hash table makes use of a novel relativistic hash table move operation.

### 添付資料URL

- [slides](https://blog.linuxplumbersconf.org/2009/slides/Josh-Triplett-rphash.pdf)（file）


### Excerpt

I present a new algorithm for scalable concurrent hash tables, performance results for this algorithm (2-10x more scalable than Linux), and potential applications.
<a id="session-40"></a>
## 49. Managing KVM guests with the Common Information Model (CIM)

- セッション個別URL: https://blog.linuxplumbersconf.org/ocw/proposals/40
- Track: General
- 日時: Wednesday, September 23, 2009 10:45 – 11:30am

### Description

Hypervisors each have their own set of command line tools, APIs, and interfaces – all of which are typically inoperable with other virtualization offerings.  This can provide a difficult challenge for users with multiple hypervisor types within a given managed environment.

One solution to this issue is to provide an abstraction layer that conforms to the Common Information Model (CIM).  CIM is an open standard defined and published by the Distributed Management Task Force (DMTF) that describes how to control (and exchange information about) managed elements. Through the use of specification conformance, an administration client can interface with any CIM implementation using one set of APIs.

The libvirt-cim project aims to provide such an abstraction layer for KVM, Xen, and Linux Containers.  This talk will cover how libvirt-cim uses CIM, the DMTF specifications, and libvirt to manage guests and maintain hypervisor neutrality.  The discussion will also include information on libcmpiutil – a library of utility functions, the goal of which is to reduce the amount of repetitive work typically done in most CMPI-style CIM providers.

As KVM comes to the forefront, it has become increasingly important to provide ways to easily incorporate KVM into existing virtualization environments.  The goal of this talk is to discuss ways in which CIM can be leveraged for that purpose.

### 添付資料URL

- [slides](https://blog.linuxplumbersconf.org/2009/slides/Kaitlin-Rupert-Plumbers_2009_Managing_KVM_with_CIM.pdf)（file）


### Excerpt

A discussion on how to manage KVM guests using CIM.
<a id="session-21"></a>
## 50. oFono - Open Source Telephony

- セッション個別URL: https://blog.linuxplumbersconf.org/ocw/proposals/21
- Track: General
- 日時: Friday, September 25, 2009 11:30am – 12:15pm

### Description

Open source telephony stack for embedded/mobile devices and desktop/laptop computers.

Back to list of proposals

### 添付資料URL

掲載なし


### Excerpt

oFono telephony stack
<a id="session-68"></a>
## 51. Challenges with Userspace USB Embedded Device Interfacing

- セッション個別URL: https://blog.linuxplumbersconf.org/ocw/proposals/68
- Track: General
- 日時: Friday, September 25, 2009 3:00 – 3:45pm

### Description

The Portland State Aerospace Society is developing a Linux based flight computer with sensor and operational nodes connected to the system through USB in isochronous mode.

Most designs have margin to trade performance for reliability. Which choices in the Linux USB userspace interface will present which options? Is it better to write a kernelspace driver for known reliability or would it only be good for performance, or neither? There exists a finite amount of time in any design cycle to analyze these ideas for a given system.

Once a designer makes a choice what monitoring and analysis options are available in the api? How can a developer ensure they are following userspace

to kernel semantics, without intensive study of the kernel source code.

Many people want to interface USB devices to host computers. Reducing the time and complexity involved in such integration can make it economical for manufacturers to write and provide drivers for their devices. Can the userspace api develop in a direction to support this?

Discussing some of the challenges of the userspace interface to the Linux USB subsystem may provide some insight and ideas for improvement and encourage further use of Linux as a host system.

### 添付資料URL

- [slides](https://blog.linuxplumbersconf.org/2009/slides/Dave_Camarillo_K_Wilson_Challenges_with_USB_Userspace_Device_Interfaces.pdf)（file）


### Excerpt

It is compelling to integrate complex embedded systems

with Linux USB userspace code. However, the complexity of userspace interface adds significant risk to the development cycle.



Integrating a USB2.0 Isochronous mode ARM embedded system with Linux host software presents an end to end design challenge requiring not just a view of Linux from the 'inside' but also from the 'outside'. Some of the challenges Linux added to an already complex embedded system development will be presented, with some ideas to reduce the barries to entry and learning curve for embedded systems and host communication.
<a id="session-74"></a>
## 52. Nesting the virtualized world

- セッション個別URL: https://blog.linuxplumbersconf.org/ocw/proposals/74
- Track: General
- 日時: Wednesday, September 23, 2009 11:30am – 12:15pm

### Description

Virtualization is usually only one level deep. So in a normal virtual environment you can not run a hypervisor again.

While that is reasonable for most use cases, it can come in handy to have virtualization support within your virtual machine. Especially when you develop a virtualization product.

So I implemented nested SVM. Basically, that exposes virtualization capabilities within the virtual machine and allows you to run any hypervisor within your VM that would work on a real machine, as long as you’re running on AMD hardware.

This talk will give you an overview on how this is achieved (technically), what limitations there are and how fast we can get.

### 添付資料URL

掲載なし


### Excerpt

Running KVM in KVM, Xen in KVM, Hyper-V in KVM, ...
<a id="session-30"></a>
## 53. libv4l2 recent changes and future and v4l stream sharing

- セッション個別URL: https://blog.linuxplumbersconf.org/ocw/proposals/30
- Track: General
- 日時: Friday, September 25, 2009 10:45 – 11:30am

### Description

Last years libv4l2 presentation ended with a slide future with

the following bullet points (abbreviated):

Add emulated controls


	Better handle rotation


	Software image quality enhancements:

  – White balance

  – Normalize


	Emulated controls persistency

Actually quite a few of these have materialized in the recent

0.5.9x releases of libv4l. The talk will start with a short

talk on what has been implemented, and more importantly how

and the impact of this on existing applications and drivers.

Last year Brandon Philips gave a talk about sharing video devices between multiple applications using a userspace video server. This is the next frontier for v4l userspace, the second

part of this talk will describe several ideas how to handle

this and the advantages and disadvantages of each, after which

the intent is to further discuss this with the audience.

Back to list of proposals

### 添付資料URL

- [slides](https://blog.linuxplumbersconf.org/2009/slides/Hans-de-Goede-libv4l.pdf)（file）


### Excerpt

Last years libv4l2 presentation ended with a slide future with

bullet points of features to be added, so where we stand today? And what will happen in the coming year?
<a id="session-108"></a>
## 54. Performance counters on Linux: The tools

- セッション個別URL: https://blog.linuxplumbersconf.org/ocw/proposals/108
- Track: General
- 日時: Friday, September 25, 2009 10:00 – 10:45am

### Description

Modern CPUs have hardware dedicated to counting events associated with performance, special registers that allow pinpointing hotspots that can possibly be optimized. Recent developments in the Linux kernel explore these features, solving problems found in previous attempts, such as OProfile. The new tools developed to use it will be described and briefly demonstrated.

### 添付資料URL

- [[slides](https://blog.linuxplumbersconf.org/2009/slides/Arnaldo-Carvalho-de-Melo-perf.pdf)（file）


### Excerpt

The perfcounters infrastructures is fast moving into being the unifying channel for hw and software performance analisys
<a id="session-103"></a>
## 55. Painless kernel - removing the HZ

- セッション個別URL: https://blog.linuxplumbersconf.org/ocw/proposals/103
- Track: BoF
- 日時: Wednesday, September 23rd, 2009 13:30

### Description

When a process does some number crunching for a while, without involving the kernel, the kernel still interrupts it HZ times per second to figure out if it has any work to do. With a system dedicated to doing such number crunching, the answer will almost always come up “no”; however, the kernel takes a while figuring out all the "no"s from various subsystems, every timer tick. On my system, the timer tick takes about 80us, every 1/HZ seconds; that represents a significant overhead. 80us out of every 1ms, for instance, means 8% overhead.  Furthermore, the time taken varies, and the timer interrupts lead to jitter in the performance of the number crunching.

The kernel has long had a “tickless” or “nohz” mechanism to shut down the timer tick when not needed, but this mechanism only works when idle, not when running.  If every function currently polling from the timer tick could instead make use of an appropriate event, or just wait to get updated until the next time the kernel has work to do, the kernel could become entirely event-driven.

A prototype1 of a truly tickless Linux kernel demonstrated the improvement in performance and consistency demonstrated by removing the timer tick23.  Making this a reality, though, requires reworking all the bits hanging off the timer tick.

1 http://lkml.org/lkml/2009/9/1/229

2 http://lkml.org/lkml/2009/9/3/7

3 http://ozlabs.org/~anton/linux/osjitter/

An event-driven kernel would improve throughput by decreasing interruptions, improve latency by removing large non-preemptible regions, improve consistency by eliminating the primary source of jitter, and improve power savings by getting done and back to sleep sooner.

So, if the kernel has you ticked, come to this BoF, and we’ll get you ticked off in a jiffy.

Back to list of proposals

### 添付資料URL

- [slides](https://blog.linuxplumbersconf.org/2009/slides/Josh-Triplett-painless-kernel.pdf)（file）


### Excerpt

The scheduler tick must die.



The kernel has long had a “tickless” or “nohz” mechanism to shut down the timer tick when not needed, but this mechanism only works when idle, not when running. If every function currently polling from the timer tick could instead make use of an appropriate event, or just wait to get updated until the next time the kernel has work to do, the kernel could become entirely event-driven.



An event-driven kernel would improve throughput by decreasing interruptions, improve latency by removing large non-preemptible regions, improve consistency by eliminating the primary source of jitter, and improve power savings by getting done and back to sleep sooner.
<a id="session-101"></a>
## 56. Packaging Linux

- セッション個別URL: https://blog.linuxplumbersconf.org/ocw/proposals/101
- Track: BoF
- 日時: Wednesday, September 23rd, 2009 13:30

### Description

There are many decisions to make in packaging and maintaining Linux in distributions:

- which version to release with

- configuration options

  – how many different configurations

- drivers to backport

- bug fixes to backport (after the end of a stable series)

How do we make this choices?

What can we learn from other distributions?

Can we cooperate to improve support over the lifetime of long-term releases?

Back to list of proposals

### 添付資料URL

掲載なし


### Excerpt

BoF for Linux distributors involved in packaging the kernel
<a id="session-110"></a>
## 57. Plug and play multiseat

- セッション個別URL: https://blog.linuxplumbersconf.org/ocw/proposals/110
- Track: BoF
- 日時: Wednesday, September 23rd, 2009 13:30

### Description

Multiseat holds tons of promise, but it has been very hard for end-users to configure for each different hardware setup. To take off, it must get easier.

Inspired by the Ndiyo project involving Dr. Quentin Stafford-Fraser and others, good progress has been made.

This BoF session will start with a demonstration of plug and play multiseat running today on Ubuntu 9.04, showing several sets of USB displays, keyboards, and mice, each being plugged into the PC to pop up an additional terminal.

The solution uses a DisplayLink USB kernel framebuffer device and open source driver, per these instructions

The BoF session will then open discussion up to the room on remaining problems — including better integration with coming ConsoleKit & other changes, how best to tackle those problems, and how we can get this support widely integrated into Linux distros.

Back to list of proposals

### 添付資料URL

- [slides](https://blog.linuxplumbersconf.org/2009/slides/Bernie-Thompson-Plug-And-Play-Multiseat.pdf)（file）


### Excerpt

Linux multiseat configurations hold the potential to get the cost per Linux user down to half or less of even the cheapest PCs.  But can we make multiseat plug and play?
<a id="session-99"></a>
## 58. Virtual Ethernet switch enhancements and configuration

- セッション個別URL: https://blog.linuxplumbersconf.org/ocw/proposals/99
- Track: BoF
- 日時: Wednesday, September 23rd, 2009 17:00

### Description

Extensions to KVM and kernel bridge support of adapter based virtual switch, SNMP MIBs for bridges, network filtering in sr-iov switch and linux bridge using libvirt extensions, external network switching (VEPA)

### 添付資料URL

掲載なし


### Excerpt

Linux Virtual Ethernet switch enhancements, configuration of management including embedded switches in NICs, support for MIBs and ACLs
<a id="session-96"></a>
## 59. DRBD 8.3 and Beyond

- セッション個別URL: https://blog.linuxplumbersconf.org/ocw/proposals/96
- Track: BoF
- 日時: Thursday, September 24th, 2009 09:00

### Description

I want to give insights into the challenges of a “shared nothing” clustering storage replication solution has deal with. Besides the challenges some of the methods and algorithms used in DRBD-8 might get presented: data generation UUDIs, resync-bitmap, the activity log, detection of conflicting writes and barrier semantics mapping. The features that became available with the release of DRBD-8.3 will of course be presented as well: device stacking, checksum based resync. Which can be used to set up disaster recovery nodes in addition to a conventional cluster. DRBD can also be used to implement the “follow the sun” model.

Back to list of proposals

### 添付資料URL

掲載なし


### Excerpt

We aim for inclusion of DRBD 8.3 into Linux-2.6.32
<a id="session-100"></a>
## 60. OFFLINE SCHEDULER

- セッション個別URL: https://blog.linuxplumbersconf.org/ocw/proposals/100
- Track: BoF
- 日時:  

### Description

In today’s computer world, we find that most processors have several embedded cores and hyper-threading. Most programmers do not really use these powerful features and let the operating system do the work.

At most, a programmer will bound an application to a certain processor or assign an interrupt to a different processor. At the end, we get system busy in maintaining tasks across processors, balancing interrupts, flushing TLBs and DTLBs1 using atomic operations even when not needed and worst of all, spin locks across processors in vein; and the more processors the merrier. I argue that in some cases, part of this behavior is due to fact the multiple core operating system is not service oriented but a system oriented. There is no easy way to assign a processor to do a distinct service, undisturbed, accurate, and fast as long as the processor is an active part of an operating system and still be a part of most of the operating system address space.

 

OFFSCHED Purpose

The purpose of the OFFSCHED is to create a platform for services. For example, assume a firewall is being attacked; the Linux operating system will generate endless number of interrupts and/or softirqs to analyze the traffic and throw out bad packets. This is on the expense of “good” packets. Have you ever tried to “ssh” to an attacked machine?  

What if we can simply do the packet analysis outside the operating system, without interrupts and still fast enough?

Why not assign a core to do only “firewalling”? Or just routing? Design a new type of Real Time system? Maybe assign it as an ultra accurate timer?  Create a delaying service that does not just spin? Offload a TCP stack?  perhaps a new type of a locking scheme? New type bottom-halves? Debug a running kernel through an offloaded processor? Maybe assign a GPU to do other things than just graphics? 

Amdahl Law teaches us that linear speed-up is not very feasible 2 3, so why not spare a processor to do certain tasks better? 

Technologically speaking, I am referring to the Linux kernel ability to virtually hot plug a (SMT) processor but instead of letting it wonder in endless “halts”, assign it a service.

OFFSCHED project can be found at :

http://sos-linux.svn.sourceforge.net/viewvc/sos-linux/offsched/

I have implemented:

1. OFFSCHED-RT. A different kind of a real time system.

2. OFFSCHED-TIMER. a 1us timer. 

3. OFFSCHED-RTOP. remote top. OFFSCHED throws top-like information to a nother machine, while the OFFSCHED machine is not accessible

4. OFFSCHED NAPI. offloaded NAPI

5. OFFCSHED SECURED. a firewall that protects the operating system.

### 添付資料URL

- [slides](https://blog.linuxplumbersconf.org/2009/slides/Raz-Ben-Yehuda-OFFSCHED.pdf)（file）


### Excerpt

offsched is a platform aimed to assign an assignment to an offloaded processor. offloaded processor is a processor that is hot un-plugged from the operating system.
<a id="session-102"></a>
## 61. Linux-iSCSI.org BoF discussion

- セッション個別URL: https://blog.linuxplumbersconf.org/ocw/proposals/102
- Track: BoF
- 日時: Friday, September 25th, 2009 09:00

### Description

There has been much work completed since the LPC 2008 decision to move LIO kernel code into to a generic target engine infrastructure using upstream configfs infrastructure as it’s base.   The Two major SPC-4 SCSI

target mode fabric features that have been completed: Persistent Reservation APTPL and implict/explict ALUA are

now the first all optional SPC4 defined feature implementation of PR and ALUA in the Linux OSS target theatre using an upstream user-driven virtual filesystem directory hierarchy structure that can be configured in realtime in combination with interpreted userspace code.

### 添付資料URL

- [slides](https://blog.linuxplumbersconf.org/2009/slides/Nicholas-A.-Bellinger-LIO-LPC-2009.pdf)（file）


### Excerpt

I) Milestones in LIO 3.1 since LPC 2008



	*) A complete configfs enabled kernel-level codebase in lio-core-2.6.git consisting of a generic target engine (target_core_mod) and iSCSI Target fabric fabric module (iscsi_target_mod) including a fabric independent target engine and iSCSI Target python CLI API for real-time configuration and

management of running Linux systems using k.o v2.6.3x code that is capable of scaling up to 10,000 unique virtual HBA+FILEIO objects and LIO-Target iSCSI fabric endpoints within a single KVM guest instance using 10 Gb/sec IOV capable hardware.
<a id="session-113"></a>
## 62. Paravirt I/O Drivers for Linux BoF

- セッション個別URL: https://blog.linuxplumbersconf.org/ocw/proposals/113
- Track: BoF
- 日時: Thursday, September 24th, 2009 17:30

### Description

Paravirt I/O Drivers for Linux BoF

Back to list of proposals

### 添付資料URL

掲載なし


### Excerpt

Paravirt I/O Drivers for Linux BoF
<a id="session-112"></a>
## 63. Audio BoF

- セッション個別URL: https://blog.linuxplumbersconf.org/ocw/proposals/112
- Track: BoF
- 日時: Thursday, September 24th, 2009 09:00

### Description

Audio BoF

Back to list of proposals

### 添付資料URL

掲載なし


### Excerpt

Audio BoF
<a id="session-111"></a>
## 64. Checkpoint/Restart BOF

- セッション個別URL: https://blog.linuxplumbersconf.org/ocw/proposals/111
- Track: BoF
- 日時: Thursday, September 24th, 2009 17:30

### Description

Several developers working on the implementation of Checkpoint/Restart plan to be at the Plumbers Conference. This offers a good opportunity to discuss

design, implementation, plans and priorities.

A few other developers are interested in joining the

discussion remotely, if teleconferencing facility is

available.

Back to list of proposals

### 添付資料URL

掲載なし


### Excerpt

Discuss design and plans for the ongoing implementation of Checkpoint/Restart in mainline linux
<a id="session-95"></a>
## 65. Real Time Linux

- セッション個別URL: https://blog.linuxplumbersconf.org/ocw/proposals/95
- Track: BoF
- 日時: Thursday, September 24th, 2009 09:00

### Description

Real Time Linux

OFFLINE SCHEDULER

In today’s computer world, we find that most processors have several embedded cores and hyper-threading. Most programmers do not really use these powerful features and let the operating system do the work.

At most, a programmer will bound an application to a certain processor or assign an interrupt to a different processor. At the end, we get system busy in maintaining tasks across processors, balancing interrupts, flushing TLBs and DTLBs1 using atomic operations even when not needed and worst of all, spin locks across processors in vein; and the more processors the merrier. I argue that in some cases, part of this behavior is due to fact the multiple core operating system is not service oriented but a system oriented. There is no easy way to assign a processor to do a distinct service, undisturbed, accurate, and fast as long as the processor is an active part of an operating system and still be a part of most of the operating system address space.

 

OFFSCHED Purpose

The purpose of the OFFSCHED is to create a platform for services. For example, assume a firewall is being attacked; the Linux operating system will generate endless number of interrupts and/or softirqs to analyze the traffic and throw out bad packets. This is on the expense of “good” packets. Have you ever tried to “ssh” to an attacked machine?  

What if we can simply do the packet analysis outside the operating system, without interrupts and still fast enough?

Why not assign a core to do only “firewalling”? Or just routing? Design a new type of Real Time system? Maybe assign it as an ultra accurate timer?  Create a delaying service that does not just spin? Offload a TCP stack?  perhaps a new type of a locking scheme? New type bottom-halves? Debug a running kernel through an offloaded processor? Maybe assign a GPU to do other things than just graphics? 

Amdahl Law teaches us that linear speed-up is not very feasible 2 3, so why not spare a processor to do certain tasks better? 

Technologically speaking, I am referring to the Linux kernel ability to virtually hot plug a (SMT) processor but instead of letting it wonder in endless “halts”, assign it a service.

OFFSCHED project can be found at :

http://sos-linux.svn.sourceforge.net/viewvc/sos-linux/offsched/

I have implemented:

1. OFFSCHED-RT. A different kind of a real time system.

2. OFFSCHED-TIMER. a 1us timer. 

3. OFFSCHED-RTOP. remote top. OFFSCHED throws top-like information to a nother machine, while the OFFSCHED machine is not accessible

4. OFFSCHED NAPI. offloaded NAPI

5. OFFCSHED SECURED. a firewall that protects the operating system.

Back to list of proposals

### 添付資料URL

掲載なし


### Excerpt

Real Time Linux (and Raz Ben Yehuda's Offline Scheduler)
<a id="session-114"></a>
## 66. Data Center Bridging

- セッション個別URL: https://blog.linuxplumbersconf.org/ocw/proposals/114
- Track: BoF
- 日時: Thursday, September 24th, 2009 17:30

### Description

Data Center Bridging

Back to list of proposals

### 添付資料URL

掲載なし


### Excerpt

Data Center Bridging
<a id="session-98"></a>
## 67. A new V4L2 core framework: an overview and future plans

- セッション個別URL: https://blog.linuxplumbersconf.org/ocw/proposals/98
- Track: BoF
- 日時: Friday, September 25th, 2009 09:00

### Description

In order to support the much more complex media hardware like the omap or davinci SoCs a new framework is needed. The initial ideas were formed during last year’s Plumbers and I will give an overview of what has happened since then.

During this year’s Plumbers we discussed the next phase: how to give embedded developers access to the hardware allowing them to control it optimally. I will present our plans to implement this. There will also be an overview of other proposals such as HDTV support.

Back to list of proposals

### 添付資料URL

掲載なし


### Excerpt

A new V4L2 core framework: an overview and future plans
<a id="session-97"></a>
## 68. Issues with Linux and large NUMA/COMA factor architectures

- セッション個別URL: https://blog.linuxplumbersconf.org/ocw/proposals/97
- Track: BoF
- 日時: Friday, September 25th, 2009 09:00

### Description

ScaleMP vSMP Foundation is a form of aggregation virtualization. vSMP Foundation is a distributed virtual machine monitor (VMM) aggregating multiple similar x86-64 systems to make a single large shared memory system. The multiple systems are interconnected to each other with a commodity fast interconnect (currently Infiniband). The vSMP Foundation VMM takes care of aggregating all the constituent hardware of the aggregated system. This implies that the VMM also takes care of the memory/cache coherency among the constituent systems. Currently Linux is the only guest operating system that is supported by the vSMP Foundation.

The vSMP Foundation VMM implements multiple inter-node coherency mechanisms. The resulting shared memory architecture is both “NUMA” and “COMA” in nature. The

coherency mechanism chosen is transparent as far as the guest kernel is concerned (Applications can explicity choose a coherency mechanism though). Due to the software approach to coherency, and speeds of the existing commodity interconnects the NUMA factor of the aggregated system is fairly large. The COMA coherency domain results in a large internode cacheline size — 4kB usually. Due to the above two reasons, cache misses and cacheline ping-pongs are a major issue. This BoF will focus on solutions employed in the kernel and applications to overcome performance penalties due to the NUMA factors and large cacheline. The effects due to the large cacheline show up in different ways — from the classical false sharing cases where traditional solutions based on padding could be employed to true sharing/lock contention cases where workarounds based on certain features in the Linux kernel and userspace libraries like hugetlb, libhugetlbfs, arena based allocations, third party malloc replacements, make more sense. This BoF will surmise all these workarounds and techniques used to date, some of the techniques we plan to use, and solicit suggestions on some unsolved issues.

### 添付資料URL

掲載なし


### Excerpt

This is a large SMP BoF where the speaker/moderator will be presenting his experience with performance issues and solutions employed on ScaleMP vSMP Foundation based large SMP/NUMA systems.  These issues are relevant to other large SMP/NUMA architectures as well.
<a id="session-57"></a>
## 69. Wayland - A New Display Server for Linux

- セッション個別URL: https://blog.linuxplumbersconf.org/ocw/proposals/57
- Track: X Window System
- 日時: Friday, September 25, 2009 2:20 – 2:45pm

### Description

Over the last 10 years, a lot of functionality have slowly moved out of the X server and into libraries or kernel drivers.  It started with freetype and fontconfig providing an alternative to the core X fonts and direct rendering OpenGL as a graphics driver in a client side library.  Then cairo came along and provided a modern 2D rendering library independent of X and compositing managers took over control of the rendering of the desktop.  Recently with GEM and KMS in the Linux kernel, we can do modesetting outside X and schedule several direct rendering clients.  The end result is a highly modular graphics stack.

Wayland is a new display server building on top of all those components.  We’re trying to distill out the functionality in the X server that is still used by the modern Linux desktop.  This turns out to be not a whole lot.  Applications can allocate their own off-screen buffers and render their window contents by themselves.  In the end, what’s needed is a way to present the resulting window surface to a compositor and a way to receive input.  This is what Wayland provides, by piecing together the components already in the eco-system in a slightly different way.

X will always be relevant, in the same way Fortran compilers and VRML browsers are, but it’s time that we think about moving it out of the critical path and provide it as an optional component for legacy applications.

### 添付資料URL

- [video](http://video.linuxfoundation.org/video/1571)（link）
### Excerpt

Over the last few years the graphics stack have been split up and refactored into shared libraries, kernel drivers and other components.  The X server provides a lot of legacy functionality that isn't used by the modern, composited Linux desktop.  Wayland is a new display server that builds on top of all those components to provide a minimal foundation for a composited destkop.  X can run under Wayland with very little overhead for legacy applications.


# 個別URL未掲載の基調講演・チュートリアル

## Networking Futures : Multiqueue Networking

- 個別URL: 掲載なし
- 出典URL: https://blog.linuxplumbersconf.org/2009/program/index.html

### Description

未掲載

### 添付資料URL

- [Networking Futures : Multiqueue Networking](https://blog.linuxplumbersconf.org/2009/slides/Dave-Miller-davem_plumbers09.pdf)


## X Version 11, 22 Years and Counting

- 個別URL: 掲載なし
- 出典URL: https://blog.linuxplumbersconf.org/2009/program/index.html

### Description

未掲載

### 添付資料URL

掲載なし


## An Advanced Git Tutorial

- 個別URL: 掲載なし
- 出典URL: https://blog.linuxplumbersconf.org/2009/program/index.html

### Description

As a follow on to his git tutorial in 2008, Linus Torvalds, founder of the Linux kernel and git projects, will be describing some more advanced features of git.

### 添付資料URL

- [video](http://video.linuxfoundation.org/video/1578)



# LinuxCon合同枠

## Lightning Talks (With LinuxCon)

- 個別URL: 掲載なし
- 出典URL: https://blog.linuxplumbersconf.org/2009/schedule/index.html

### Description

未掲載

### 添付資料URL

掲載なし
- 参考URL: http://linuxcon.linuxfoundation.org/meetings/1568

## Keynote: Mark Shuttleworth (with LinuxCon)

- 個別URL: 掲載なし
- 出典URL: https://blog.linuxplumbersconf.org/2009/schedule/index.html

### Description

未掲載

### 添付資料URL

掲載なし
- 参考URL: http://events.linuxfoundation.org/lc09k3


# 出典

https://blog.linuxplumbersconf.org/2009/program/index.html

https://blog.linuxplumbersconf.org/2009/schedule/index.html
