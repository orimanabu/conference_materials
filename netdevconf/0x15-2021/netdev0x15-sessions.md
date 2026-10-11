# Netdev 0x15 全セッション一覧

出典: https://netdevconf.info/0x15/accepted-sessions.html

Accepted Sessionsにある全29セッションを収録。個別ページのTitle、Description原文、Contentsの添付資料URL、および埋め込みytVideoIdの動画URLを抽出。相対URLは個別ページを基準に絶対URLへ変換し、空白などをURLエンコード。Workshop内の複数資料も個別に収録。日時は個別ページのsession-dateに掲載されたもののみ記録。ScheduleはGoogle Calendar埋め込み。ghOSt講演は一覧リンクが壊れているため、正しいloadsessionsページから抽出し個別URLにも使用。公開資料ディレクトリと照合し追加版も収録。資料のダウンロード可否・動画の再生可否は未検査。

セッション: 29件 / Descriptionあり: 29件 / 資料あり: 29件 / 資料項目: 79件

## 目次

1. [Rethinking Zero Copy Networking with MAIO](#session-Rethinking-Zero-Copy-Networking-with-MAIO)
2. [Dynamic Interface Power Management (PowerMAN)](#session-Dynamic-Interface-Power-Management-(PowerMAN))
3. [Autonomous NVMe TCP offload](#session-Autonomous-NVMe-TCP-offload)
4. [Linux ACL Performance Analysis](#session-Linux-ACL-Performance-Analysis)
5. [Introducing Ptables](#session-Introducing-Ptables)
6. [netpen.io visual editor for network environments script generation](#session-netpen.io-visual-editor-for-network-environments-script-generation)
7. [ECONNRESET on a reliable socket and now?](#session-ECONNRESET-on-a-reliable-socket-and-now)
8. [Replacing Flow Dissector with PANDA Parser](#session-Replacing-Flow-Dissector-with-PANDA-Parser)
9. [Syrup: User Defined Scheduling Across the Stack](#session-Syrup:-User-Defined-Scheduling-Across-the-Stack)
10. [Resilient nexthop groups](#session-Resilient-nexthop-groups)
11. [Precision Time Protocol optimization using genetic algorithm](#session-Precision-Time-Protocol-optimization-using-genetic-algorithm)
12. [ghOSt: Fast & Flexible User Space Delegation of Linux Scheduling](#session-ghOSt:-Fast-&-Flexible-User-Space-Delegation-of-Linux-Scheduling)
13. [Enhancing Ping And Traceroute](#session-Enhancing-Ping-And-Traceroute)
14. [Switchdev in the wild](#session-Switchdev-in-the-wild)
15. [Understanding Linux Network Stack Overheads for High Speed Networks](#session-Understanding-Linux-Network-Stack-Overheads-for-High-Speed-Networks)
16. [Accelerating synproxy with XDP](#session-Accelerating-synproxy-with-XDP)
17. [Where turbo boosting TC flower control path had led us to](#session-Where-turbo-boosting-TC-flower-control-path-had-led-us-to)
18. [Network wide visibility with Linux networking and sFlow](#session-Network-wide-visibility-with-Linux-networking-and-sFlow)
19. [TCP HyStart Performance over a Satellite Network](#session-TCP-HyStart-Performance-over-a-Satellite-Network)
20. [BIG TCP](#session-BIG-TCP)
21. [Introduction to time synchronization over Ethernet](#session-Introduction-to-time-synchronization-over-Ethernet)
22. [XDP General Workshop](#session-XDP-General-Workshop)
23. [IoT Networking Workshop](#session-IoT-Networking-Workshop)
24. [Traffic Control Workshop](#session-Traffic-Control-Workshop)
25. [Netfilter Mini Workshop](#session-Netfilter-Mini-Workshop)
26. [FRR Workshop](#session-FRR-Workshop)
27. [Switchdev Offload Workshop](#session-Switchdev-Offload-Workshop)
28. [Industry Perspectives Panel: Smart NICs](#session-panel-industry-perspectives)
29. [Site-to-Site Internet Traffic Control](#session-keynote-balakrishnan)

<a id="session-Rethinking-Zero-Copy-Networking-with-MAIO"></a>
## 1. Rethinking Zero Copy Networking with MAIO

- セッション個別URL: https://netdevconf.info/0x15/session.html?Rethinking-Zero-Copy-Networking-with-MAIO
- Track: Talk
- 日時:  

### Description

Berkeley Sockets (a.k.a, BSD, POSIX sockets) are ubiquitously used for network communication. BSD Sockets have been the de-facto standard API for network I/O since they were introduced almost four decades ago. 
With the advent of high-speed Ethernet, the performance overhead of BSD Sockets became evident. Attempts to avoid these overheads have spurred a trend kernel bypass techniques, e.g., DPDK, AF_XDP, Netmap. By bypassing the kernel, these methods attempt to avoid the performance penalties associated with BSD Sockets, i.e., memory copy, system calls, and a slow network stack. However, with great performance comes the great responsibility of re-creating the same network infrastructure that already exists inside the kernel. Kernel developers attempt to close the performance gap by adding new capabilities, most notably XDP, MSG_ZEROCOPY, and tcp_mmap, but none of the proposed solutions is a panacea. 
In this work, we propose a new paradigm for userspace networking, aiming to shrink the performance gap between BSD Sockets and kernel bypass techniques, allowing application developers to keep the standard BSD sockets API, network stack (e.g., TCP) and network tools without compromising on performance. 
We introduce MAIO, a dedicated memory allocator for networking that inherently facilitates zero-copy I/O operations. We modify the kernel memory management system to implement dynamic memory segregation, introducing I/O only pages that are shared between the user, the kernel, and the device. These I/O pages are used only for I/O and can never be used by the kernel for any other purposes. This scheme facilitates zero-copy I/O while isolating kernel memory from the user. Additionally, we leverage existing HW capabilities (e.g., NVIDIA QPs, Intel ADQ) to facilitate isolation between processes.
MAIO is the first design to provide zero-copy networking while still taking advantage of the robust kernel network stack without compromising the system’s security. It is currently used to facilitate efficient networking for our companies next-generation SD-WAN gateways.

### 添付資料URL

- [slides 1](https://netdevconf.info/0x15/slides/1/maio_netdev0x15.pdf)（file）
- [slides 2](https://netdevconf.info/0x15/slides/1/maio_netdev0x15.pptx)（file）
- [paper](https://netdevconf.info/0x15/papers/1/maio_netdev0x15.pdf)（file）
- [video](https://www.youtube.com/watch?v=NbBg-SMt9h0&list=PLrninrcyMo3L-hsJv23hFyDGRaeBY1EJO)（link）

<a id="session-Dynamic-Interface-Power-Management-(PowerMAN)"></a>
## 2. Dynamic Interface Power Management (PowerMAN)

- セッション個別URL: https://netdevconf.info/0x15/session.html?Dynamic-Interface-Power-Management-(PowerMAN)
- Track: Talk
- 日時:  

### Description

Problem Statement:
As network speeds increase, total packet buffering time is decreasing, but buffering space in hardware is not increasing at the same rate. As a result, manual system configuration and tuning has to be applied to maximize performance of network interface cards, which typically comes at the cost of power consumption. 

Proposal Summary:
The goal of PowerMAN is to be a proof of concept to demonstrate the usefulness with an initial implementation in user space. This tool dynamically manages a network interface via existing APIs to minimize system power consumption while preventing packet drops, minimizing latency and maintaining high throughput.

This presentation will show the results of our initial work in this space, including a demo recording and the analysis of power savings and other gains in resource utilization and savings.

We hope to gain input on the feasibility of managing this in-kernel or whether it should stay in user-space, as much of the work may be more appropriate for the kernel scheduler to be involved.

### 添付資料URL

- [slides 1](https://netdevconf.info/0x15/slides/4/Dynamic%20Network%20Interface%20Power%20Management.pdf)（file）
- [slides 2](https://netdevconf.info/0x15/slides/4/Dynamic%20Network%20Interface%20Power%20Management_v2.pdf)（file）
- [paper](https://netdevconf.info/0x15/papers/4/powerman_final.pdf)（file）
- [video](https://www.youtube.com/watch?v=x4mLzhkmKHE&list=PLrninrcyMo3L-hsJv23hFyDGRaeBY1EJO)（link）

<a id="session-Autonomous-NVMe-TCP-offload"></a>
## 3. Autonomous NVMe TCP offload

- セッション個別URL: https://netdevconf.info/0x15/session.html?Autonomous-NVMe-TCP-offload
- Track: Talk
- 日時:  

### Description

NVMe-TCP is a high-performance pipelined storage protocol over TCP which abstracts remote access to a storage controller, providing hosts with the illusion of local storage. In NVMe-TCP, each storage queue is mapped to a TCP socket. Read and write IOs operations are translated to RPC operations. Each operation has a unique identifier, called capsule identifier (CID) and servers can handle CIDs out of order to allow small IOs to bypass large IOs and improve performance. Additionally, each RPC is protected by application-layer CRC generated by senders and verified on receivers.

Traditional approaches to offload NVMe-TCP require offloading all layer-4 functionality: TCP, IP, routing, QoS, NAT, firewall, tunneling, etc. This is undesirable as all of these are complex, and their overhead on bulky storage operations is easily mitigated using batching as demonstrated last year in "NVMe-over-TCP ≈ NVMe-over-RDMA".

In this talk, we will present how we offload CPU-intensive operations that cannot be optimized away using batching or clever software engineering: copy and CRC. Our offload is independent of layer-4 functionality, i.e. we offload NVMe-TCP autonomously. The main challenges addressed with our approach: (1) handling retransmission and reordering; (2) offloading transparently to software TCP/IP.

### 添付資料URL

- [slides](https://netdevconf.info/0x15/slides/6/netdev_0x15_nvme-tcp.pdf)（file）
- [video](https://www.youtube.com/watch?v=HDkA2o-TzlI&list=PLrninrcyMo3L-hsJv23hFyDGRaeBY1EJO)（link）

<a id="session-Linux-ACL-Performance-Analysis"></a>
## 4. Linux ACL Performance Analysis

- セッション個別URL: https://netdevconf.info/0x15/session.html?Linux-ACL-Performance-Analysis
- Track: Talk
- 日時:  

### Description

Systems that utilize Linux Network Access Control Lists (ACLs) include bare metal compute platforms, virtualized compute platforms supporting virtual machines (VMs),  compute platforms with containerized applications, and VMs. 
ACLs may be enforced at the platform level, the workload level (VM or container), or application level.

This talk describes our work in evaluating the performance of different ACLs subsystems in the Linux kernel from both a control (for ACL programming) and datapath perspective for both  _Forwarding_ and _Host_ workloads.

In our work, the ACL subsystem is the target System Under Test(SUT).  We model the ACL rulesets with the following tuples:

i) groupings of interfaces/ports,
ii)groupings of src IPv4 CIDR addressess,
iii)grouping of dst IPv4 CIDR addresses,
iv)protocol, 
v)groupings of src ports {lists, and ranges} and 
vi)groupings of dst ports   {lists, and ranges}

The following ACL subsystems(SUTs) were reviewed:
- Iptables(with and without conntracking),
- IPtables with IPSet(with and without conntracking),
- XDP/ebpf,
- tc/ebpf,
- tc/flower.

We will detail the effort we put into reducing the number of variables (e.g., turning off hyperthreading, etc) in order to focus the performance assessment on the ACL subsystem itself. We will also describe our effort to ensure that we run a fair comparison among the subsystems, mainly using the same testing methodology, testing environment, traffic patterns, and traffic generator.

Our analysis looks at:
Control path performance with a goal to see the overall system effect (example adding or deleting ACL rules while the kernel tables population varied). Data path performance under a variety of conditions (example different table sizes, worst case lookups etc). 

We collect performance data on multiple dimensions,
for example:
- data rate (bits/sec) and (packets/sec)
- flow connections/sec
- end to end Latency
- CPU utilization
- control path latency and transaction rate

In the case of ebpf, we wrote our own implementation of the ACL subsystem with a control plane that emulates iptables and IPsets.  The ebpf implementation, known  as "Ptables" will be discussed in the talk "Introducing Ptables" at Netdev conf 0x15.

Our contributions:

As far as we know, this is the first extensive study of Linux kernel ACLs for both forwarding and host workloads, comparing all the ACL subsystems listed earlier under the same conditions. We hope our experience will help others in the community to make decisions as to what approach to take under given circumstances. We wish to get community feedback and evolve the work further as well as make available the testing tools we created for this work.

### 添付資料URL

- [slides](https://netdevconf.info/0x15/slides/7/LinuxACLPerformanceAnalysis.pdf)（file）
- [video](https://www.youtube.com/watch?v=9o9Q47XEpMo&list=PLrninrcyMo3L-hsJv23hFyDGRaeBY1EJO)（link）

<a id="session-Introducing-Ptables"></a>
## 5. Introducing Ptables

- セッション個別URL: https://netdevconf.info/0x15/session.html?Introducing-Ptables
- Track: Talk
- 日時:  

### Description

In this talk we are going to describe Ptables, an access control list (ACL)
control subsystem on Linux. 

Ptables is inspired by iptables as an ACL subsystem. Iptables is widely deployed and well understood from a management perspective but has performance challenges (see our submitted netdev 0x15 talk on  “Linux ACL Performance Analysis”[0]). The motivating idea behind Ptables is to overcome the iptables performance challenges while still maintaining
iptables management semantics for continuity. Ptables emulates iptables implicitly-prioritized rulesets (that are grouped using ipset and port ranges) with explicitly defined ruleset priorities. Ptables, as currently implemented, also optionally provides 5-tuple statefulness that may be extended in the future. 

There have been other efforts to replace iptables using eBPF (see: “Toward an eBPF-based clone of iptable”[1] and “Rethinking bpfilter and user-mode helpers”[2][3]). However, these efforts have not yet seen widespread adoption, perhaps due to complexity in their desire to be  fully-compatible clones of iptables i.e to enable eBPF tooling to accept traditional iptables commands which are then transformed at runtime to eBPF semantics. We, instead, opt to take a revolutionary approach to replacing iptables.

Ptables is a minimalistic ACL architecture. We adopt what we feel are sufficient features that iptables presents and nothing more. In its basic form Ptables implements rulesets based on the classical 5 tuples:
source/destination IP address, protocol identifier and source/destination transport port number where the source and destination IP addresses are grouped into CIDR tables (similar to ipset hash) and the source and destination transport ports could be ranges, lists or individual ports (similar to iptables multiports). Rulesets are applied on a group of network ports (one or more) in an ingress or egress direction. We also introduce an optional flow state cache which complements the rulesets. Our stateful cache, as influenced by our minimalist approach, is not as feature-rich as iptables conntracking - but we believe is sufficient.

Ptables is able to handle millions of rules grouped into thousands of ruleset priorities.
In the current version, caching is used to enhance performance in the presence of many rulesets. 

Our initial implementation is based on ebpf (works on both tc and XDP); however, our future plans are to integrate whatever other linux subsystem makes sense to achieve a specific ACL goal (e.g., TC in general, offloading when it makes sense, etc).

In this talk we will go into details of:
* motivation
* The design choices
* Implementation challenges with ebpf
* performance numbers
* future plans

Our intention is to opensource the Ptables code. 


References:
[0]https://netdevconf.info/0x15/session.html?talk-linux-ACL-performance-analysis
[1]https://netdevconf.info/0x12/session.html?toward-an-ebpf-based-clone-of-iptables
[2]https://lwn.net/Articles/822744/
[3]https://lore.kernel.org/bpf/c72bac57-84a0-ac4c-8bd8-08758715118e@fb.com/T/

### 添付資料URL

- [slides](https://netdevconf.info/0x15/slides/10/Introducingptables.pdf)（file）
- [video](https://www.youtube.com/watch?v=CQneYEfHKBE&list=PLrninrcyMo3L-hsJv23hFyDGRaeBY1EJO)（link）

<a id="session-netpen.io-visual-editor-for-network-environments-script-generation"></a>
## 6. netpen.io visual editor for network environments script generation

- セッション個別URL: https://netdevconf.info/0x15/session.html?netpen.io-visual-editor-for-network-environments-script-generation
- Track: Talk
- 日時:  

### Description

Creating network environment scripts for new feature testing or bug reproduction can be cumbersome - defining network namespaces, setting up different network interfaces types, assigning addresses, configuring routes, vrfs, etc..

netpen.io (to be open sourced) aims to facilitate this process by allowing users to visually define network netspaces, veth devices, different tunneling devices, etc. and generates bash scripts usable on fresh vms which include the necessary configuration including address assignments and routes.

For example, a simple routing topology can be seen at:
https://examples.netpen.io/router.png

Downloading the resulting script and running it on a fresh VM yields the following example output:

```
root@(none):/# ./netpen.sh 
 ____                 _               
|  _ \   ___   _   _ | |_   ___  _ __ 
| |_) | / _ \ | | | || __| / _ \| '__|
|  _ < | (_) || |_| || |_ |  __/| |   
|_| \_\ \___/  \__,_| \__| \___||_|   
                                      

+-----------+------------------------------------+
| Namespace | IPv4                               |
+-----------+------------------------------------+
|     a     | 198.51.100.130/25 (atorouter.dev1) |
+-----------+------------------------------------+
|     b     | 198.51.100.2/25 (btorouter.dev1)   |
+-----------+------------------------------------+
|   router  | 198.51.100.129/25 (atorouter.dev2) |
|           | 198.51.100.1/25 (btorouter.dev2)   |
+-----------+------------------------------------+
net.ipv4.route.mtu_expires = 15
net.ipv4.conf.all.forwarding = 1
net.ipv6.conf.all.forwarding = 2
net.ipv4.conf.all.forwarding = 1
net.ipv6.conf.all.forwarding = 2
net.ipv4.conf.all.forwarding = 1
net.ipv6.conf.all.forwarding = 2
[   10.578767] ip (1451) used greatest stack depth: 12224 bytes left
[   10.769523] random: crng init done
[   10.777003] IPv6: ADDRCONF(NETDEV_CHANGE): atorouter.dev1: link becomes ready
[   10.923704] ip (1460) used greatest stack depth: 12096 bytes left
[   11.121881] IPv6: ADDRCONF(NETDEV_CHANGE): btorouter.dev1: link becomes ready
root@(none):/# [   11.578224] IPv6: ADDRCONF(NETDEV_CHANGE): atorouter.dev2: link becomes ready

root@(none):/# ip netns exec a ping 198.51.100.2
PING 198.51.100.1 (198.51.100.2) 56(84) bytes of data.
64 bytes from 198.51.100.2: icmp_seq=1 ttl=63 time=7.00 ms
64 bytes from 198.51.100.2: icmp_seq=2 ttl=63 time=0.956 ms
```

Topologies are described by YAML documents, e.g. the above router YAML document can be seen at:
https://examples.netpen.io/router.yml

Note for example that the subnet is defined as a single CIDR and there's internal routing logic for partitioning the subnet based on L2/L3 connectivity.

Other examples include bridging, VLANs, MACVLAN, XFRM, different IP tunneling, VRFs.

These YAML documents can be converted to BASH scripts or DOT diagrams using an endpoint, e.g.:

curl --data-binary "@examples/router.yml" https://api.netpen.io/v1/bash > router.sh

or:

curl --data-binary "@examples/router.yml" https://api.netpen.io/v1/dot | dot -Tpng | display

Note: the site isn't openly accessible yet.

Future enhancements can include TC filters, Netfilter rules (ipt/nft), MPLS, eBPF programs, etc. etc.

### 添付資料URL

- [slides](https://netdevconf.info/0x15/slides/11/netdev.pdf)（file）
- [video](https://www.youtube.com/watch?v=EJh7-EO6eOA&list=PLrninrcyMo3L-hsJv23hFyDGRaeBY1EJO)（link）

<a id="session-ECONNRESET-on-a-reliable-socket-and-now"></a>
## 7. ECONNRESET on a reliable socket and now?

- セッション個別URL: https://netdevconf.info/0x15/session.html?ECONNRESET-on-a-reliable-socket-and-now?
- Track: Talk
- 日時:  

### Description

title: ECONNRESET on a reliable socket and now?

abstract:

If your application answer is "reconnect and let it run as nothing happened". Additionally your application holds a per peer state. Moreover your application is lacking support to re-synchronize this state on a reconnect. This talk might be interesting for you!

The reason is that you "might" leave the world of your reliable connection and your peer state doesn't reflect the actual view anymore. This kind of problem was discovered in the Linux in-kernel Distributed Lock Manager (DLM) protocol. To solve this issue an application layer change was required, but wouldn't it be nice to have something more painless? This talk will show the method how DLM has solved this issue by introducing a transparent encapsulation header. Furthermore several possible approaches for a more generic solution will be shown whereby no application layer changes would be necessary anymore. Finally we take a look into other Linux in-kernel application layer protocols which might take advantage of such a solution.

### 添付資料URL

- [slides](https://netdevconf.info/0x15/slides/2/aring_slides.pdf)（file）
- [paper](https://netdevconf.info/0x15/papers/2/aring_paper.pdf)（file）
- [video](https://www.youtube.com/watch?v=xqW7t6RS_y4&list=PLrninrcyMo3L-hsJv23hFyDGRaeBY1EJO)（link）

<a id="session-Replacing-Flow-Dissector-with-PANDA-Parser"></a>
## 8. Replacing Flow Dissector with PANDA Parser

- セッション個別URL: https://netdevconf.info/0x15/session.html?Replacing-Flow-Dissector-with-PANDA-Parser
- Track: Talk
- 日時:  

### Description

In this presentation we'll present the project to replace the venerable Linux kernel Flow Dissector with a PANDA Parser. PANDA Parser is a domain specific parser that is "write once, run anywhere, run well". Unlike Flow Dissector, a PANDA Parser with metadata extraction is written in a declarative representation as opposed to imperative instructions. Use of a declarative representation better matches the essence of a parser which is an annotated parse graph. A PANDA parser is written in familiar C and consists of a sequence of data structures that define the nodes of a parser graph and the linkage between them. A parser engine consumes the data structure and manifests an instance of a protocol parser. The source code of a PANDA parser may be compiled to different backends. Currently, there are two implemented backends: optimized userspaces C and XDP/eBPF. As part of this project, we add another which compiles a parser into kernel C code. This kernel C code may then be compiled and linked into the kernel. It follows, that PANDA parsers can be defined that provide the same functionality as various use cases of flow dissector; and hence we endeavour to replace uses of flow dissector with PANDA parsers and ultimately remove flow dissector from the kernel. Why do we need this you ask? Because the flow dissector is hard coded and convoluted logic that has been a bear to maintain and a headache to extend. A PANDA parser is more straightforward code not prone to errors very easy to extend, and is conducive to hardware acceleration. As a bonus, PANDA parser shows better performance than flow dissector!

### 添付資料URL

- [slides](https://netdevconf.info/0x15/slides/16/Flow%20dissector_PANDA%20parser.pdf)（file）
- [video](https://www.youtube.com/watch?v=zVnmVDSEoXc&list=PLrninrcyMo3L-hsJv23hFyDGRaeBY1EJO)（link）

<a id="session-Syrup:-User-Defined-Scheduling-Across-the-Stack"></a>
## 9. Syrup: User Defined Scheduling Across the Stack

- セッション個別URL: https://netdevconf.info/0x15/session.html?Syrup:-User-Defined-Scheduling-Across-the-Stack
- Track: Talk
- 日時:  

### Description

Suboptimal scheduling decisions in operating systems, networking stacks, and application runtimes are often responsible for poor application performance, including higher latency and lower throughput. These poor decisions stem from a lack of insight into the applications and requests the scheduler is handling and a lack of coherence and coordination between the various layers of the stack, including NICs, kernels, and applications.

We propose Syrup, a framework for user-defined scheduling. Syrup enables untrusted application developers to express application-specific scheduling policies across these system layers without being burdened with the low-level system mechanisms that implement them. Application developers write a scheduling policy with Syrup as a set of matching functions between inputs (threads, network packets, network connections) and executors (cores, network sockets, NIC queues) and then leverage eBPF and userspace kernel thread scheduling to deploy it across system layers without modifying their code. Syrup supports multi-tenancy as multiple co-located applications can each safely and securely specify a custom policy. We present several examples of uses of Syrup to define application and workload-specific scheduling policies in a few lines of code, deploy them across the stack, and improve performance up to 8× compared with default policies.

### 添付資料URL

- [slides](https://netdevconf.info/0x15/slides/12/syrup-netdev-no-video.pdf)（file）
- [paper](https://netdevconf.info/0x15/papers/12/main.pdf)（file）
- [video](https://www.youtube.com/watch?v=0dks4mys0-k&list=PLrninrcyMo3L-hsJv23hFyDGRaeBY1EJO)（link）

<a id="session-Resilient-nexthop-groups"></a>
## 10. Resilient nexthop groups

- セッション個別URL: https://netdevconf.info/0x15/session.html?Resilient-nexthop-groups
- Track: Talk
- 日時:  

### Description

Support for resilient nexthop groups was recently added to the Linux
kernel, in version 5.13 [1]. Unlike regular multipath groups, resilient
groups are aimed at minimizing disruption in flow routing across changes
to the group composition and weights of constituent nexthops.

This talk will cover the inner workings of resilient nexthop groups,
including:

* Overview of nexthop objects infrastructure in the Linux kernel
* Extension of nexthop objects infrastructure for resilient nexthop
  groups
* Testing of resilient nexthop groups
* Hardware offload

[1] https://git.kernel.org/pub/scm/linux/kernel/git/netdev/net-next.git/commit/?id=2a0186a37700b0d5b8cc40be202a62af44f02fa2

### 添付資料URL

- [slides](https://netdevconf.info/0x15/slides/20/rnhg.pdf)（file）
- [paper](https://netdevconf.info/0x15/papers/20/isea%20%284%29.pdf)（file）
- [video](https://www.youtube.com/watch?v=PwWlZGhUgUU&list=PLrninrcyMo3L-hsJv23hFyDGRaeBY1EJO)（link）

<a id="session-Precision-Time-Protocol-optimization-using-genetic-algorithm"></a>
## 11. Precision Time Protocol optimization using genetic algorithm

- セッション個別URL: https://netdevconf.info/0x15/session.html?Precision-Time-Protocol-optimization-using-genetic-algorithm
- Track: Talk
- 日時:  

### Description

This paper represents the work in developing an automated methodology of tuning the PI controller used by linuxptp applications to even out timing errors in its implementation of the Precision Time Protocol (PTP).
In most cases, the hardware-accelerated PTP protocol synchronizes the PTP Hardware Clock (PHC) running on the Network controller. Consequently, system time synchronization requires an additional step that synchronizes the system time to the PHC.
PI controller optimization is needed to fulfill the strict phase-synchronization requirement of telecommunication systems introduced by the LTE E-ULTRA TDD and 5G technologies.
This paper explores the use of a genetic algorithm (GA), a stochastic algorithm used in Artificial Intelligence, to optimize the parameters of the PI controller. GA mimics the process of natural evolution and has shown to be capable of locating high-performance areas in complex domains.
This paper presents different approaches to solve the described problem, various data evaluation methods, and the results achieved in the process.
This paper is also a continuation of the Performance optimization using artificial intelligence methods talk presented on the NetDev 0x14.

### 添付資料URL

- [slides](https://netdevconf.info/0x15/slides/24/netDev%200x15%20Precision%20Time%20Protocol%20optimization%20using%20genetic%20algorithm.pdf)（file）
- [paper](https://netdevconf.info/0x15/papers/24/PTP_Optimization.pdf)（file）
- [video](https://www.youtube.com/watch?v=x-LAidU27r0&list=PLrninrcyMo3L-hsJv23hFyDGRaeBY1EJO)（link）

<a id="session-ghOSt:-Fast-&-Flexible-User-Space-Delegation-of-Linux-Scheduling"></a>
## 12. ghOSt: Fast & Flexible User Space Delegation of Linux Scheduling

- セッション個別URL: https://netdevconf.info/0x15/loadsessions/ghOSt%3A-Fast--Flexible-User-Space-Delegation-of-Linux-Scheduling.html
- Track: Talk
- 日時:  

### Description

We present ghOSt, our infrastructure for delegating kernel scheduling decisions to userspace code. ghOSt is designed to support the rapidly evolving needs of our data center workloads and platforms.

Improving scheduling decisions can drastically improve the throughput, tail latency, scalability, and security of important workloads. However, kernel schedulers are difficult to implement, test, and deploy efficiently across a large fleet. Recent research suggests bespoke scheduling policies, within custom data plane operating systems, can provide compelling performance results in a data center setting. However, these gains have proved difficult to realize as it is impractical to deploy a custom OS image(s) at an application granularity, particularly in a multi-tenant environment, limiting the practical applications of these new techniques. 

ghOSt provides general-purpose delegation of scheduling policies to userspace processes in a Linux environment. ghOSt provides state encapsulation, communication, and action mechanisms that allow complex expression of scheduling policies within a userspace agent, while assisting in synchronization. Programmers use any language to develop and optimize policies, which are modified without a host reboot. ghOSt supports a wide range of scheduling models, from per-CPU to centralized, run-to-completion to preemptive, and incurs low overheads for scheduling actions.
We demonstrate ghOSt's performance on both academic and real-world workloads, including Google Snap and Google Search. We show that by using ghOSt instead of the kernel scheduler, we can quickly achieve comparable throughput and latency while enabling policy optimization, non-disruptive upgrades, and fault isolation for our data center workloads. We open-source our implementation to enable future research and development based on ghOSt.

### 添付資料URL

- [slides](https://netdevconf.info/0x15/slides/25/ghOSt%20Talk%20%28Netdev%29.pdf)（file）
- [paper](https://netdevconf.info/0x15/papers/25/ghOSt.pdf)（file）
- [video](https://www.youtube.com/watch?v=auen1MpxxGY&list=PLrninrcyMo3L-hsJv23hFyDGRaeBY1EJO)（link）

<a id="session-Enhancing-Ping-And-Traceroute"></a>
## 13. Enhancing Ping And Traceroute

- セッション個別URL: https://netdevconf.info/0x15/session.html?Enhancing-Ping-And-Traceroute
- Track: Talk
- 日時:  

### Description

PING and TRACEROUTE are the most commonly used IP debugging utilities and have served us well over the years. They do however have shortcomings and in this talk we are going to describe improvements for these utilities.

IETF RFC 8335 with a diagnostic tool called PROBE.
PROBE is similar to PING in that it can be used to query the status of a probed interface, but it differs from PING in that it does not require bidirectional connectivity between the probing and probed interfaces. Instead, PROBE requires bidirectional connectivity between the probing interface and a proxy interface.  The proxy interface can reside on the same node as the probed interface, or it can reside on a node to which the probed interface is directly connected.

IETF RFC 5837 enhances traceroute by defining a data structure that can be appended to selected ICMP messages.  The ICMP extension defined can be used to identify any combination of the following: the IP interface upon which a datagram arrived, the sub-IP component of an IP interface upon which a datagram arrived, the IP interface through which the datagram would have been forwarded had it been forwardable, and the IP next hop to which the datagram would have been forwarded.
Devices can use this ICMP extension to identify interfaces and their components by any combination of the following: ifIndex, IPv4 address, IPv6 address, name, and MTU.  ICMP-aware devices can use these extensions to identify both numbered and unnumbered interfaces.

We have made contributions to the Linux kernel and user space tooling to enable both these extensions. Our talk will describe the tooling details and contributions involved.

### 添付資料URL

- [slides 1](https://netdevconf.info/0x15/slides/27/Enhancing%20PING%20and%20TRACEROUTE.pdf)（file）
- [slides 2](https://netdevconf.info/0x15/slides/27/Enhancing%20PING%20and%20TRACEROUTE.pptx)（file）
- [video](https://www.youtube.com/watch?v=g7nETFruu8o&list=PLrninrcyMo3L-hsJv23hFyDGRaeBY1EJO)（link）

<a id="session-Switchdev-in-the-wild"></a>
## 14. Switchdev in the wild

- セッション個別URL: https://netdevconf.info/0x15/session.html?Switchdev-in-the-wild
- Track: Talk
- 日時:  

### Description

We used Mellanox switches with Cumulus Linux for years for Top-of-Rack switch role in our data centers.
In 2019 we decided to go open source for switch software and evaluated two new opportunities for open source NOS on these switches: Sonic OS and Switchdev.
At the end, we decided to go with Switchdev since it fits well to our requirements.
For several months we updated our network automation to work with new type of NOS and I'd like to share our experience of using it in a real production environment.
- How to create image? How to manage NOS versions and make updates?
- How to deploy it on new switches?
- How to manage config files on the device?
- Drawbacks and pitfalls of Linux network management tools.

### 添付資料URL

- [slides](https://netdevconf.info/0x15/slides/28/netdevconf_final.pdf)（file）
- [video](https://www.youtube.com/watch?v=04as4MT02Lg&list=PLrninrcyMo3L-hsJv23hFyDGRaeBY1EJO)（link）

<a id="session-Understanding-Linux-Network-Stack-Overheads-for-High-Speed-Networks"></a>
## 15. Understanding Linux Network Stack Overheads for High Speed Networks

- セッション個別URL: https://netdevconf.info/0x15/session.html?Understanding-Linux-Network-Stack-Overheads-for-High-Speed-Networks
- Track: Talk
- 日時:  

### Description

Datacenter access link bandwidths have recently increased by an order of magnitude. Building upon the conventional wisdom that kernel network stacks have unsustainable CPU overheads, our community is exploring a multitude of solutions: from partial hardware offload to user-space stacks to specialized hardware design. The design space explored by each of these solutions would benefit from a detailed understanding of precise kernel network stack overheads.
This paper presents analysis and insights from a year-long study on understanding CPU overheads of kernel network stacks for high-speed networks. Our study presents detailed insights on CPU inefficiencies in existing network stacks and has implications on de-
sign of future operating systems, network protocols, and hardware.

### 添付資料URL

- [slides](https://netdevconf.info/0x15/slides/29/Understanding%20Host%20Network%20Stack%20%5BNetDev%200x15%5D.pdf)（file）
- [paper](https://netdevconf.info/0x15/papers/29/paper.pdf)（file）
- [video](https://www.youtube.com/watch?v=TyCbUlWmvL0&list=PLrninrcyMo3L-hsJv23hFyDGRaeBY1EJO)（link）

<a id="session-Accelerating-synproxy-with-XDP"></a>
## 16. Accelerating synproxy with XDP

- セッション個別URL: https://netdevconf.info/0x15/session.html?Accelerating-synproxy-with-XDP
- Track: Talk
- 日時:  

### Description

Netfilter module synproxy allows to build a firewall that protects a server from TCP SYN flood attacks by generating and replying with SYN cookies before reaching conntrack and doing routing. It can be configured on a dedicated firewall machine that stays in front of the server.

Generating SYN cookies is stateless, and it's a perfect example of a task to be accelerated using XDP. Currently there are BPF helpers that allow to generate and check SYN cookies for a listening socket on the same machine. This talk describes adapting BPF for the synproxy use case, which includes adding new helpers to query conntrack information and generate and check SYN cookies without binding to a socket.

### 添付資料URL

- [slides](https://netdevconf.info/0x15/slides/30/Netdev%200x15%20Accelerating%20synproxy%20with%20XDP.pdf)（file）
- [video](https://www.youtube.com/watch?v=XES3bO2rW14&list=PLrninrcyMo3L-hsJv23hFyDGRaeBY1EJO)（link）

<a id="session-Where-turbo-boosting-TC-flower-control-path-had-led-us-to"></a>
## 17. Where turbo boosting TC flower control path had led us to

- セッション個別URL: https://netdevconf.info/0x15/session.html?Where-turbo-boosting-TC-flower-control-path-had-led-us-to
- Track: Talk
- 日時:  

### Description

While a lot of effort is put in the community and industry in general to improve datapath performance, the control path does not get as much attention. In this talk we will describe our journey to improve the TC filter control path performance and in particular the control for hardware offloading of Flower rules.

The ability to create, read, update and delete TC filters that are offloaded in hardware is fundamental in getting efficient datapath packet processing in particular if the hardware is used at runtime to cache flows. There are many use cases (e.g. short lived container
workloads, telco environments, etc) where the rate of churn of rules is high therefore the faster one can update the datapath rules the sooner the datapath can take effect. Efficient statistics are also critical for some use cases. In billing, for example, the sooner the controlling application knows about it, the smaller and more predictable the over usage is.

In this talk we describe the different improvements we made as well as present results for each enhancement we made over several kernel iterations and the impacts they had on OVS learning
rate with HWOL enabled.

### 添付資料URL

- [slides](https://netdevconf.info/0x15/slides/31/Where%20turbo%20boosting%20TC%20flower%20control%20path%20had%20led%20us%20to.pdf)（file）
- [paper](https://netdevconf.info/0x15/papers/31/NetdevConf_0x15___tc_control_path.pdf)（file）
- [video](https://www.youtube.com/watch?v=nQIYx4DJM0M&list=PLrninrcyMo3L-hsJv23hFyDGRaeBY1EJO)（link）

<a id="session-Network-wide-visibility-with-Linux-networking-and-sFlow"></a>
## 18. Network wide visibility with Linux networking and sFlow

- セッション個別URL: https://netdevconf.info/0x15/session.html?Network-wide-visibility-with-Linux-networking-and-sFlow
- Track: Talk
- 日時:  

### Description

Network traffic control requires real-time traffic monitoring, analysis, anomaly detection and response. There are many real time network analytics tools available on Linux and networking hardware today. In this paper we talk about sFlow, an industry standard for real-time network monitoring. We will look at how sFlow can be used to monitor a data center fabric consisting of networking hardware running Linux (switches and routers) and Linux virtual nodes. We will dive into the details of sflow integration into the Linux stack, Linux kernel, ecosystem and oss software. 
sFlow is supported by most networking hardware vendors. Linux native support for packet sampling was introduced in the kernel followed by integrations into hardware support for packet sampling [1,2]. We will look at sFlow data formats, recent extensions to include drops, latency and queue depth and use these to detect and respond to events in the network fabric. 
 
Real-time sFlow analytics can be used to rapidly detect DDoS attacks and filter them (e.g. with BGP FlowSpec or tc rules) before they even ramp up. Buffer-depth and transit-delay as measurements more commonly associated with in-band telemetry,  are now also available out-of-band in standard sFlow. 

[1] netlink psample introduced in the kernel: https://git.kernel.org/pub/scm/linux/kernel/git/torvalds/linux.git/commit/include/net/psample.h?id=6ae0a6286171154661b74f7f550f9441c6008424
[2] additional metadata for psample https://git.kernel.org/pub/scm/linux/kernel/git/torvalds/linux.git/commit/?id=2117fce81f6b862aac0673abe8df0c60dca64bfa

### 添付資料URL

- [slides](https://netdevconf.info/0x15/slides/33/sflow-netdev-0x15.pdf)（file）
- [paper](https://netdevconf.info/0x15/papers/33/netdev-0x15-sflow.pdf)（file）
- [video](https://www.youtube.com/watch?v=n_kal_Roz2Q&list=PLrninrcyMo3L-hsJv23hFyDGRaeBY1EJO)（link）

<a id="session-TCP-HyStart-Performance-over-a-Satellite-Network"></a>
## 19. TCP HyStart Performance over a Satellite Network

- セッション個別URL: https://netdevconf.info/0x15/session.html?TCP-HyStart-Performance-over-a-Satellite-Network
- Track: Talk
- 日時:  

### Description

TCP slow start is designed to begin at a conservative bitrate, but quickly ramp up to the available bandwidth.  To avoid overshooting, TCP slow start has a Hystart mode (on by default in Linux) that may exit slow start before packets are lost.  Unfortunately, Hystart may also exit slow start prematurely, making it take longer for TCP to reach intended bitrates.  This is especially problematic for links with high bandwidth and high latency, such as an satellite Internet connection.  This paper evaluates TCP Hystart performance over a commercial satellite Internet link, first evaluating how sender and receiver buffer size settings might limit throughput and subsequently assessing TCP with Hystart on versus TCP with Hystart off for both isolated and simultaneous flows.  Analysis shows Hystart on (the default) significantly degrades TCP start-up performance, with average throughputs about half that of Hystart off during starting performance.

### 添付資料URL

- [slides 1](https://netdevconf.info/0x15/slides/32/slides-clean.pdf)（file）
- [slides 2](https://netdevconf.info/0x15/slides/32/slides-clean.pptx)（file）
- [paper](https://netdevconf.info/0x15/papers/32/paper-final.pdf)（file）
- [video](https://www.youtube.com/watch?v=4jTRsrriLao&list=PLrninrcyMo3L-hsJv23hFyDGRaeBY1EJO)（link）

<a id="session-BIG-TCP"></a>
## 20. BIG TCP

- セッション個別URL: https://netdevconf.info/0x15/session.html?BIG-TCP
- Track: Talk
- 日時:  

### Description

With 200/400Gbit speeds, size of TSO/GRO packets matters, once usekernel copies have been avoided.

In this talk I will present how we can override current limits and reduce TCP/IP stacks overhead.

### 添付資料URL

- [slides](https://netdevconf.info/0x15/slides/35/BIG%20TCP.pdf)（file）
- [video](https://www.youtube.com/watch?v=OROFNACMxbc&list=PLrninrcyMo3L-hsJv23hFyDGRaeBY1EJO)（link）

<a id="session-Introduction-to-time-synchronization-over-Ethernet"></a>
## 21. Introduction to time synchronization over Ethernet

- セッション個別URL: https://netdevconf.info/0x15/session.html?Introduction-to-time-synchronization-over-Ethernet
- Track: Tutorial
- 日時:  

### Description

The growth of fast LTE and the appearance of 5G networks results in rigorous requirements on timing in packet networks.
This session will introduce the basics of time synchronization in Ethernet networks. It starts with definitions and background of time sync, defines what we can synchronize, and why we need to.
Then it goes over the basics of frequency synchronization done on different levels - Physical layer explained based on SyncE and packet layer based on IEEE 1588 protocol.
The SyncE section explains the physical basics of the protocol, different operation modes of operation (QL-Disabled and QL-Enabled). It gives a brief overview of the ESMC messages that serve as a quality indicator.
The IEEE 1588 explains the basics of time synchronization using packet-based distribution. It describes how the timing information is recovered from the incoming data stream and what are the drawbacks of this method.
In the end, this talk compares different synchronization methods and explains where to use each of them to get the best results. It will also discuss the current gaps in the kernel APIs to enable better support for different synchronization methods and propose the solution to address them.

### 添付資料URL

- [slides](https://netdevconf.info/0x15/slides/19/Introduction%20to%20time%20synchronization%20over%20Ethernet.pdf)（file）
- [video](https://www.youtube.com/watch?v=EceQhoYcdkw&list=PLrninrcyMo3L-hsJv23hFyDGRaeBY1EJO)（link）

<a id="session-XDP-General-Workshop"></a>
## 22. XDP General Workshop

- セッション個別URL: https://netdevconf.info/0x15/session.html?XDP-General-Workshop
- Track: Workshop
- 日時:  

### Description

General discussions on XDP. Current agenda includes discussions on XDP Hints. More to be added later.

### 添付資料URL

- [slides](https://netdevconf.info/0x15/slides/5/XDP-workshop%20agenda_ideas%20%28NetDevConf%202021%29.pdf)（file）
- [video](https://www.youtube.com/watch?v=Cy8RWUe6Dik&list=PLrninrcyMo3L-hsJv23hFyDGRaeBY1EJO&index=2)（link）

<a id="session-IoT-Networking-Workshop"></a>
## 23. IoT Networking Workshop

- セッション個別URL: https://netdevconf.info/0x15/session.html?IoT-Networking-Workshop
- Track: Workshop
- 日時:  

### Description

This 5th workshop serves for follow-up discussions and status updates on former workshops we have been running at earlier NetDev conference editions.

This workshop in general aims to identify generic requirements for the networking subsystem for IoT and starting the process of addressing the gaps found. The workshop will encompass related MAC layers, networking protocols, adaptation layers, header compressions, and routing protocols.

A rough idea of the agenda can be found below. The final one depends on who can attend and input from the attendees. We will post the final agenda closer to the conference date:

- IoT gateway/hub networking requirements
- Discuss needed kernel interfaces for RPL implementations (unstrung, rpld)
- ieee802154 and 6lowpan subsystems
- More subsystems depending on attendees CAN, LoRa, etc.

### 添付資料URL

- [slides](https://netdevconf.info/0x15/slides/9/NetdevConf-0x15-IoT-workshop-final.pdf)（file）
- [video](https://www.youtube.com/watch?v=6mfA6WCakr0&list=PLrninrcyMo3L-hsJv23hFyDGRaeBY1EJO)（link）

<a id="session-Traffic-Control-Workshop"></a>
## 24. Traffic Control Workshop

- セッション個別URL: https://netdevconf.info/0x15/session.html?Traffic-Control-Workshop
- Track: Workshop
- 日時:  

### Description

Agenda for TC workshop at Netdev conf 0x15 July 14/2021 - 3PM UTC.

1) (20 minutes) New Enhancements To The TC Police Action

Simon - talk (20 minutes)
QA/Discussion (10 minutes)

2) Several:
  A) TC updates since 0x14
  B) Some ideas on TC qdisc locking
  C) integrating eBPF qdisc

Cong (30 minutes)
QA/Discussion (10 minutes)

3) Issues in offloading kernel routing/bridging for EVPN using TC

Rohith (15 minutes)

4) Replacing Flow Dissector in TC

Pedro (15 minutes)

5) tdc status

   Davide (10 minutes)

### 添付資料URL

- [slides 1](https://netdevconf.info/0x15/slides/14/EVPN-OFFLOAD-USING-TC.pdf)（file）
- [slides 2](https://netdevconf.info/0x15/slides/14/RecentEnhancementstotheTCPoliceAction.pdf)（file）
- [slides 3](https://netdevconf.info/0x15/slides/14/Replacingflowdissector.pdf)（file）
- [slides 4](https://netdevconf.info/0x15/slides/14/cong-tc.pdf)（file）
- [slides 5](https://netdevconf.info/0x15/slides/14/netdev0x15-tdc.pdf)（file）
- [video](https://www.youtube.com/watch?v=9ZWuAsqW9bE&list=PLrninrcyMo3L-hsJv23hFyDGRaeBY1EJO)（link）

<a id="session-Netfilter-Mini-Workshop"></a>
## 25. Netfilter Mini Workshop

- セッション個別URL: https://netdevconf.info/0x15/session.html?Netfilter-Mini-Workshop
- Track: Workshop
- 日時:  

### Description

This mini-workshop covers updates in the netfilter area
since the last netdevconf.

I will be presenting:
   * Summary of updates in kernel/nftables/iptables
   * Pending changes not yet upstreamed
   * Update on the listify-netfilter-hooks idea

The latter two includes experimental changes that might not work out as-is.
listify-netfilter-hooks was already presented at last years netfilter workshop.
I revisited this, however, there are still fundamental problems of why this isn't viable.

### 添付資料URL

- [slides](https://netdevconf.info/0x15/slides/21/2021_nf_mini_ws.pdf)（file）
- [video](https://www.youtube.com/watch?v=q5nFZSBh9_k&list=PLrninrcyMo3L-hsJv23hFyDGRaeBY1EJO)（link）

<a id="session-FRR-Workshop"></a>
## 26. FRR Workshop

- セッション個別URL: https://netdevconf.info/0x15/session.html?FRR-Workshop
- Track: Workshop
- 日時:  

### Description

FRR Workshop

Agenda is still a Work in Progress.  But we will be discussing the continued abstraction of Nexthop Groups with backup Nexthop Groups and how FRR plans to take advantage of this.  Further work needed on the FRR dataplane plugin and what is needed to get EVPN fully integrated into it.  Finally we'll discuss the recent 8.0 release and what would people like to see from FRR itself in the future.

### 添付資料URL

- [slides](https://netdevconf.info/0x15/slides/22/FRR%20Workshop%20%281%29.pdf)（file）
- [video](https://www.youtube.com/watch?v=_8R1MYP7M48&list=PLrninrcyMo3L-hsJv23hFyDGRaeBY1EJO)（link）

<a id="session-Switchdev-Offload-Workshop"></a>
## 27. Switchdev Offload Workshop

- セッション個別URL: https://netdevconf.info/0x15/session.html?Switchdev-Offload-Workshop
- Track: Workshop
- 日時:  

### Description

Workshop discussing various things switch ASIC hardware offload (or switchdev).

Agenda (WIP):
- Updates
- Modular switch support
- Ethtool module eeprom api enhancements
- New Switchdev drivers

### 添付資料URL

- [slides 1](https://netdevconf.info/0x15/slides/34/01_switchdev_workshop_agenda_and_updates_roopa_prabhu.pdf)（file）
- [slides 2](https://netdevconf.info/0x15/slides/34/02_switchdev_modular_systems_jiri_pirko.pdf)（file）
- [slides 3](https://netdevconf.info/0x15/slides/34/03_switchdev_Marvell_Prestera-DENT_Moti-Nisim.pdf)（file）
- [slides 4](https://netdevconf.info/0x15/slides/34/04_switchdev_the_good_and_the_ugly_zubkov.pdf)（file）
- [video](https://www.youtube.com/watch?v=gonPoiKYHoc&list=PLrninrcyMo3L-hsJv23hFyDGRaeBY1EJO)（link）

<a id="session-panel-industry-perspectives"></a>
## 28. Industry Perspectives Panel: Smart NICs

- セッション個別URL: https://netdevconf.info/0x15/session.html?panel-industry-perspectives
- Track: panel
- 日時:  

### Description

Smart NICs are a new, emerging type of NICs which provide rich offload packet processing pipelines.
  
In this panel, moderated by Nabil Bitar (CTO of Networking at Bloomberg), the merit of smart NICs and relation to the Linux Networking stack will be discussed.

The panel format is in 3 phases:

Phase1: A short technical presentation from each vendor - not to exceed 15 minutes each.

Phase 2:  Moderator poses question to Panelists, who then answer. Discussion may ensue from the question.

Phase 3: Moderator opens the opportunity for the audience to ask questions

### 添付資料URL

- [video](https://www.youtube.com/watch?v=7Dc6HDClWUA)（link）

<a id="session-keynote-balakrishnan"></a>
## 29. Site-to-Site Internet Traffic Control

- セッション個別URL: https://netdevconf.info/0x15/session.html?keynote-balakrishnan
- Track: Keynote
- 日時:  

### Description

Queues allow network operators to control traffic: where queues build, they can enforce scheduling and shaping policies. In the Internet today, however, there is a mismatch between where queues build and where control is most effectively enforced; queues build at bottleneck links that are often not under the control of the data sender. To resolve this mismatch, we propose a new kind of middlebox, called Bundler, which moves queues away from uncontrollable network locations to edge devices. This talk will describe how the use of signal processing methods in congestion control, combined with Linux tricks, can enable an effective and scalable site-to-site traffic controller using Bundler. I will also describe some recent work in using verification methods to improve congestion control robustness.

### 添付資料URL

- [video](https://bit.ly/netdev-0x15)（link）
- [video](https://youtu.be/DAN-7sWFxLw)（link）