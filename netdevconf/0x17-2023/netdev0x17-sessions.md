# Netdev 0x17 全セッション一覧

出典: https://netdevconf.info/0x17/pages/sessions.html

Sessions一覧にある全46セッションを収録。各個別ページのTitle・Description原文、Contentsのスライド・論文・動画URLとDescription内の資料リンクを抽出。相対URLは各個別ページを基準に絶対URLへ変換。資料のdocsディレクトリ一覧取得はHTTP 403で拒否されたため、個別ページに掲載された資料リンクを収録。元ページの資料リンクは保持。資料ダウンロード可否・動画再生可否は未検査。

セッション: 46件 / Descriptionあり: 46件 / 資料あり: 46件 / 資料項目: 114件

## 目次

1. [Improving multi-phy and multi-port interfaces](#session-improving-multi-phy-and-multi-port-interfaces)
2. [NIC offloads at Hyperscale: experience, new offloads and validation](#session-nic-offloads-at-hyperscale-experience-new-offloads-and-validation)
3. [Congestion control architecture for host congestion](#session-congestion-control-architecture-for-host-congestion)
4. [Firewall and Service Tickets (FAST)](#session-firewall-and-service-tickets-fast)
5. [Unstoppable Session Layer](#session-unstoppable-session-layer)
6. [Genetic Algorithm based PI controller tuning with stability analysis for Linux ptp4l optimisation](#session-genetic-algorithm-based-pi-controller-tuning-with-stability-analysis-for-linux-ptp4l-optimisation)
7. [Quantum-Proofing Data: The Power Of Post-Quantum Cryptography](#session-quantum-proofing-data-the-power-of-post-quantum-cryptography)
8. [Device Memory TCP](#session-device-memory-tcp)
9. [Unleashing SR-IOV Offload on Virtual Machines](#session-unleashing-sr-iov-offload-on-virtual-machines)
10. [Integrating eBPF Into The P4TC Datapath](#session-integrating-ebpf-into-the-p4tc-datapath)
11. [SO_TIMESTAMPING: powering fleetwide RPC monitoring](#session-so_timestamping-powering-fleetwide-rpc-monitoring)
12. [Is scaling eBPF easy yet? A small step to one server, but giant leap to distributed network.](#session-is-scaling-ebpf-easy-yet-a-small-step-to-one-server-but-giant-leap-to-distributed-network)
13. [Lightweight Implementation of Per-packet Service Protection in eBPF/XDP](#session-lightweight-implementation-of-per-packet-service-protection-in-ebpfxdp)
14. [Fast ZC Rx Data Plane using io uring](#session-fast-zc-rx-data-plane-using-io-uring)
15. [Synce4l: open-source implementation of Synchronous Ethernet](#session-synce4l-open-source-implementation-of-synchronous-ethernet)
16. [Assessing the impact of Linux networking on CPU consumption](#session-assessing-the-impact-of-linux-networking-on-cpu-consumption)
17. [Leveraging Homa: Enhancing Datacenter RPC Transport Protocols](#session-leveraging-homa-enhancing-datacenter-rpc-transport-protocols)
18. [Kernel-Managed User Buffers in Homa](#session-kernel-managed-user-buffers-in-homa)
19. [P4 Compatible Control Plane Driver for Linux Kernel](#session-p4-compatible-control-plane-driver-for-linux-kernel)
20. [IDPF Live Migration Support](#session-idpf-live-migration-support)
21. [Using eBPF to inject IPv6 Extension Headers](#session-using-ebpf-to-inject-ipv6-extension-headers)
22. [eBPF Qdisc: a generic building block for traffic control](#session-ebpf-qdisc-a-generic-building-block-for-traffic-control)
23. [Netlink APIs to Expose/Configure Netdev Objects](#session-netlink-apis-to-exposeconfigure-netdev-objects)
24. [TCP Offload via AF_XDP sockets– Not your grandmother’s TCP Offload!](#session-tcp-offload-via-af_xdp-sockets-not-your-grandmothers-tcp-offload)
25. [Nanotube: Turning XDP Code into Custom Hardware Pipelines for FPGA SmartNICs](#session-nanotube-turning-xdp-code-into-custom-hardware-pipelines-for-fpga-smartnics)
26. [kernel offload with complete host kernel functionalities](#session-kernel-offload-with-complete-host-kernel-functionalities)
27. [Scripting the Linux Routing Table with Lua](#session-scripting-the-linux-routing-table-with-lua)
28. [netdev development stats and process changes](#session-netdev-development-stats-and-process-changes)
29. [Multi-core IPsec tunnels](#session-multi-core-ipsec-tunnels)
30. [OSPFv3 over IPv4](#session-ospfv3-over-ipv4)
31. [Introduction to time synchronization pt. 3](#session-introduction-to-time-synchronization-pt-3)
32. [Lightweight Approach to Kickstart Development of a NIC Driver](#session-lightweight-approach-to-kickstart-development-of-a-nic-driver)
33. [Rust for Linux Networking Tutorial](#session-rust-for-linux-networking-tutorial)
34. [XDP Workshop](#session-xdp-workshop)
35. [Artificial Intelligence and Machine Learning in Networking](#session-artificial-intelligence-and-machine-learning-in-networking)
36. [TC Workshop](#session-tc-workshop)
37. [Compiler-networking workshop](#session-compiler-networking-workshop)
38. [Netfilter Mini Workshop](#session-netfilter-mini-workshop)
39. [FRR Workshop](#session-frr-workshop)
40. [Security Workshop](#session-security-workshop)
41. [Power-Aware Network Performance BoF](#session-power-aware-network-performance-bof)
42. [TLS handshake for in-kernel consumers](#session-tls-handshake-for-in-kernel-consumers)
43. [My foo is just way better!](#session-my-foo-is-just-way-better)
44. [Music BoF](#session-music-bof)
45. [BOF :: CXL : An overview and applicability to high performance networking](#session-bof-cxl-an-overview-and-applicability-to-high-performance-networking)
46. [Machine Learning Workloads And Networking](#session-keynote-ghobadi)

<a id="session-improving-multi-phy-and-multi-port-interfaces"></a>
## 1. Improving multi-phy and multi-port interfaces

- セッション個別URL: https://netdevconf.info/0x17/sessions/talk/improving-multi-phy-and-multi-port-interfaces.html
- Track: Talk
- 日時:  

### Description

This talk will describe current use-cases where one MAC is connected to multiple PHYs (chained, or in parallel) and multiple front-facing ports, either through multiple PHYs or through a single multi-port PHY. There exist support for some of these scenarios already, but it is limited by the fact that the PHY device is hidden behind a net_device from userspace’s point of view. We therefore can’t configure an individual PHY when multiple PHYs are present on a link (through SFP transceivers for example), and selecting which front-facing port to use is also limited. This talk will describe ongoing work to support these complex topologies, the challenges faced and expected improvements.

### 添付資料URL

- [slides](https://netdevconf.info/0x17/docs/netdev-0x17-paper2-talk-slides/multi-port-multi-phy-interfaces.pdf)（file）
- [video](https://youtu.be/JcvP1Ck9lR4)（link）

<a id="session-nic-offloads-at-hyperscale-experience-new-offloads-and-validation"></a>
## 2. NIC offloads at Hyperscale: experience, new offloads and validation

- セッション個別URL: https://netdevconf.info/0x17/sessions/talk/nic-offloads-at-hyperscale-experience-new-offloads-and-validation.html
- Track: Talk
- 日時:  

### Description

NIC offloads are essential at current speeds, but can be hard to deploy at scale. Issues seen when deploying in hyperscale data centers are inconsistency between devices, scalability limits, incompatibility with real production workloads, and simply hardware bugs. A lot of this stems from lack of clear operating conditions, vague feature definitions and dearth of publicly available tests.



In this talk we review critical offloads, from established to novel ongoing work, such as pacing and inline crypto. We give examples of how they can fail in practice. It turns out, even checksum offload is not as well defined if you look closely.



To address this class of problems, we now define these offloads precisely, in a way that scales, works well with others and avoids common bugs. And we present an open source testsuite that anyone can use to validate their hardware. We have contributed tests for RSS, HW-GRO, TSO and others. Many of these already ship with the Linux kernel source tree.



Finally, we describe how we are collecting all this information in one place, combining expertise from vendors and users and sharing that with all in an open and unencumbered format. The OCP NIC Core Offloads specification defines a common core feature set, a comprehensive testsuite and concise checklist to enable self-validation and to make it easy to compare and incorporate devices. This is an on-going effort intended to capture expertise from across the industry. We encourage everyone to contribute through text, feedback and by contributing open source tests.

### 添付資料URL

- [slides](https://netdevconf.info/0x17/docs/netdev-0x17-paper4-talk-slides/netdevconf%202023_%20NIC%20offloads.pdf)（file）
- [video](https://youtu.be/w5Ulv4AtKkM)（link）

<a id="session-congestion-control-architecture-for-host-congestion"></a>
## 3. Congestion control architecture for host congestion

- セッション個別URL: https://netdevconf.info/0x17/sessions/talk/congestion-control-architecture-for-host-congestion.html
- Track: Talk
- 日時:  

### Description

Several recent studies from large-scale production clusters (e.g., from Google, Microsoft and Alibaba) demonstrate the existence of congestion within the network that delivers the data from the NIC to the CPU/memory (referred to as the host network). These studies show that adoption of high-bandwidth access links, coupled with relatively stagnant technology trends for resources within the host—CPU speeds, cache sizes, memory access latency, memory bandwidth per core, NIC buffer sizes, etc.—has led to the emergence of congestion within the host network, that is, congestion within the processor, memory and peripheral interconnects of the host network. For instance, Google demonstrates that host congestion in their production clusters leads to significant queueing and packet drops at hosts, resulting in application-level performance degradation in terms of latency and throughput. We reproduce the host congestion phenomenon using Linux DCTCP; we observe that host congestion can lead to as much as 1% packet drops at the host, 35-55% throughput degradation, and 120-5000x tail latency inflation.



The regime of host congestion forces us to revisit the many fundamental assumptions entrenched within practice of congestion control. For instance, classical congestion control mechanisms assumes that packet drops happen at the congestion point; in contrast, host congestion results in queueing and drops away from the actual congestion point (since the host network is lossless). Thus, we must rethink congestion signals to capture the precise time, location, and reason for host congestion. As another example, an unspoken assumption in classical congestion control mechanisms is that all competing traffic adheres to the congestion control protocol; such is not the case in the host congestion regime where traffic from ``outside the network’’ (eg., applications generating CPU-to-memory traffic) does not employ congestion control mechanisms, is much closer to the congestion point, and can thus change dramatically at sub-RTT granularity. This has powerful implications in terms of rethinking congestion response: existing congestion control protocols that operate at RTT granularity may achieve performance far from optimal in the host congestion regime. Thus, host congestion requires us to revisit congestion control architecture and protocols.



In this talk, we present hostCC, a congestion control architecture that handles both host congestion and network fabric congestion by allocating both host and network resources among competing traffic. HostCC embodies three key technical ideas. First, in addition to congestion signals from within the network fabric, hostCC generates host-local congestion signals at processor, memory, and peripheral interconnects at sub-microsecond timescales. These host congestion signals enable hostCC to precisely capture the time, location, and reason for host congestion. The second key technical idea in hostCC is a sub-RTT granularity host-local congestion response: at both the sender and the receiver, hostCC uses host-local congestion signals to allocate host resources between network traffic and host-local traffic. At the sender, hostCC uses host-local congestion response to ensure that network traffic is not starved, even at sub-RTT granularity; at the receiver, hostCC uses host-local congestion response to minimize queueing and packet drops at the host: it modulates host resources allocated to the network traffic at sub-RTT granularity to ensure that NIC queues are drained at the same rate at which network traffic arrives at the NIC. Finally, the third key technical idea in hostCC is to use both host and network congestion signals to perform efficient network resource allocation at RTT timescales.



hostCC admits efficient realization within existing host network stacks, without any modifications in applications, host hardware, and/or network hardware; moreover, hostCC can be integrated with existing congestion control protocols to efficiently handle both host and network fabric congestion. To demonstrate this, we perform an end-to-end implementation of hostCC in the Linux kernel using ~800LOC, and evaluate it along with unmodified Linux DCTCP. Our evaluation demonstrates that, in the presence of host congestion, hostCC avoids network underutilization (achieving values close to a user-specified network utilization guarantee, enabled by hostCC), while simultaneously reducing packet drops by multiple orders of magnitude. hostCC also significantly reduces tail latencies—with >75-3000x improvements under evaluated settings. Further, we demonstrate that hostCC interpolates well with network congestion control—maintaining the above-mentioned benefits in the presence of both network congestion and host congestion. And finally, we also showcase that hostCC benefits are robust across a wide variety of employed workload/hardware settings (for eg., number of active connections, MTU sizes, enabling direct cache access, etc.). The end-to-end implementation of hostCC, along with all the documentation needed to reproduce our results, is available at https://github.com/Terabit-Ethernet/hostCC.

### 添付資料URL

- [slides](https://netdevconf.info/0x17/docs/netdev-0x17-paper6-talk-slides/hostcc-netdev.pdf)（file）
- [video](https://youtu.be/D1rNNBQNGj4)（link）

<a id="session-firewall-and-service-tickets-fast"></a>
## 4. Firewall and Service Tickets (FAST)

- セッション個別URL: https://netdevconf.info/0x17/sessions/talk/firewall-and-service-tickets-fast.html
- Track: Talk
- 日時:  

### Description

In this presentation we introduce Firewall and Service Tickets (FAST).



FAST is a method to allow applications to signal the network for services, like QoS, that it wants applied to packets. The method is secure, expressive, stateless, not spoofable, deployable, efficient, dynamic, requires no DPI, doesn’t disclose internals of the network, and works with any transport protocol. A core element of FAST are “tickets”. Tickets are attached to packets and describe the services and grants of admission that the application has requested from the network.



We will present the datapath protocol of FAST (being developed in IETF). Tickets are sent in IPv6 Hop-by-Hop options, and we’ll provide rationale why Hop-by-Hop options are really the best choice compared to proposed alternatives despite concerns about them being dropped in the Internet. FAST also allows for “ticket reflection” that is useful to apply requested service in the reply path of a flow, and also allows for symmetric or non-symmetric use between two endpoints of a flow..



We will discuss support for FAST in Linux. Mostly, this amounts to allowing non-privileged users to set Hop-by-Hop options (and Destination options as well). We will present the patches that enable this that still allow sufficient management controls and restrictions on what applications can send.



Finally, we’ll tie all this together with some sample applications using FAST– how the tickets are requested and provided, how they’re set and transmitted in packets, how a network node can process the FAST ticket in the packet and apply network mechanisms to satisfy the service requests.

### 添付資料URL

- [slides](https://netdevconf.info/0x17/docs/netdev-0x17-paper11-talk-slides/Netdev_%20Firewall%20and%20Service%20Tickets.pdf)（file）
- [paper](https://netdevconf.info/0x17/docs/netdev-0x17-paper11-talk-paper.pdf)（file）
- [video](https://youtu.be/wLNoB87o13s)（link）

<a id="session-unstoppable-session-layer"></a>
## 5. Unstoppable Session Layer

- セッション個別URL: https://netdevconf.info/0x17/sessions/talk/unstoppable-session-layer.html
- Track: Talk
- 日時:  

### Description

In the Netdev 0x15 talk “ECONNRESET on a reliable socket and now?” [0] the authors described circumstances to give up handling connection errors like ECONNRESET on a reliable socket. The authors made the argument that when an application encounters connection errors, the act of merely reconnecting reduces the likelihood of the application being considered reliable. In those re-connections drops could occur in your stream-oriented socket.



A solution is a session layer on the application to deal with such scenarios and re-synchronize. Depending on your application there might be several techniques to do that. However in case you forgot about these circumstances and your application depends on a reliable connection it would be nice to have a small switch to introduce a generic session layer to provide reliability even if connection errors happen.



This talk will show the Unstoppable Session Layer (USL) to easily switch your networking application to provide a session layer between application and transport layer. It also provides a half-closed session termination implementation to provide such handling on top of the socket layer instead of in the socket layer. There exists two reasons: TCP is broken (on misbehaving middle boxes) and some transport layers like SCTP do not support such handling at all.



This talk will show how to easily put such a session layer on your networking application. It will be demonstrated by a basic TCP ping-pong application while tcpkill [1] tries to run crazy and interfere with the TCP application by sending TCP resets. The goal is to port this implementation even into the Linux kernel that several kernel application can easily converted to protect regarding connection errors.



[0] https://netdevconf.info/0x15/session.html?ECONNRESET-on-a-reliable-socket-and-now?
[1] https://en.wikipedia.org/wiki/Tcpkill

### 添付資料URL

- [slides](https://netdevconf.info/0x17/docs/netdev-0x17-paper14-talk-slides/USL.pdf)（file）
- [video](https://youtu.be/CgDS1vs17ac)（link）

<a id="session-genetic-algorithm-based-pi-controller-tuning-with-stability-analysis-for-linux-ptp4l-optimisation"></a>
## 6. Genetic Algorithm based PI controller tuning with stability analysis for Linux ptp4l optimisation

- セッション個別URL: https://netdevconf.info/0x17/sessions/talk/genetic-algorithm-based-pi-controller-tuning-with-stability-analysis-for-linux-ptp4l-optimisation.html
- Track: Talk
- 日時:  

### Description

This paper presents the research results of ptp4l Proportional-Integral (PI) controller tuning using a Genetic Algorithm. Furthermore, it describes recent advancements in the PTP-optimization framework.
PI controller optimization is required to meet the strict phase synchronization industry standards introduced by the LTE E-ULTRA TDD, 5G, and O-RAN technologies.
The ptp4l is a part of the linuxptp toolbox and implements Precision Time Protocol (PTP) according to IEEE standard 1588 for Linux.
The tool implements a PI controller and an API to tune its Proportional (P) and Integral (I) terms.
The developed framework implements Genetic Algorithm (GA), a stochastic algorithm used in Artificial Intelligence (AI), to optimize the parameters of the PI controller.
Stability condition checks are incorporated into the framework to accelerate the discovery of optimal and stable outcomes.
The enhancements resulting from utilizing the tool are presented in the article.
This paper continues research for tuning the Proportional-Integral (PI) controller configurable in the phc2sys application using Genetic Algorithm presented on Netdev 0x15.

### 添付資料URL

- [slides](https://netdevconf.info/0x17/docs/netdev-0x17-paper15-talk-slides/ptp4l_optimization_slides.pdf)（file）
- [paper](https://netdevconf.info/0x17/docs/netdev-0x17-paper15-talk-paper.pdf)（file）
- [video](https://youtu.be/9FEUY0DxZ0E?si=c7kkzjYrMTN943ln&t=1618)（link）

<a id="session-quantum-proofing-data-the-power-of-post-quantum-cryptography"></a>
## 7. Quantum-Proofing Data: The Power Of Post-Quantum Cryptography

- セッション個別URL: https://netdevconf.info/0x17/sessions/talk/quantum-proofing-data-the-power-of-post-quantum-cryptography.html
- Track: Talk
- 日時:  

### Description

Quantum computers leverage principles from quantum mechanics to formulate and execute quantum algorithms. Currently, there are no quantum computers capable of compromising existing cryptographic techniques.



Nevertheless, quantum algorithms can efficiently solve intricate problems within a relatively brief time frame. Notably, Shor’s algorithm has the potential to break the RSA and Elliptic Curve Diffie-Hellman algorithms, which are pivotal for key exchange in Transport Layer Security (TLS).



Furthermore, quantum algorithms pose a threat to the cryptography utilized in the TLS protocol in two critical areas: key exchange and client/server authentication. As a result, the security of the TLS handshake process can be compromised, necessitating the adoption of post-quantum cryptography (PQC) algorithms.



The National Institute of Standards and Technology selected CRYSTALS-Kyber algorithm as the Key Encapsulation Mechanism (KEM) resistant to cryptanalytic attacks with powerful quantum computers.



This paper outlines the mathematical foundation of the CRYSTALS-Kyber algorithm and illustrates its application in the TLS handshake. In order to assess the efficacy of post-quantum cryptography (PQC), a comprehensive comparison between traditional cryptographic methods and post-quantum alternatives has been conducted. The study analyzes the outcomes and provides a condensed summary of the findings.

### 添付資料URL

- [slides](https://netdevconf.info/0x17/docs/netdev-0x17-paper17-talk-slides/PQC.pdf)（file）
- [paper](https://netdevconf.info/0x17/docs/netdev-0x17-paper17-talk-paper.pdf)（file）
- [video](https://youtu.be/K-ukGQGmGxY)（link）

<a id="session-device-memory-tcp"></a>
## 8. Device Memory TCP

- セッション個別URL: https://netdevconf.info/0x17/sessions/talk/device-memory-tcp.html
- Track: Talk
- 日時:  

### Description

TL;DR:




Device memory TCP (devmem TCP) is a proposal for transferring data to and/or
from device memory efficiently, without bouncing the data to a host memory
buffer.




  Problem:




A large amount of data transfers have device memory as the source and/or
destination. Accelerators drastically increased the volume of such transfers.
Some examples include:



  
    ML accelerators transferring large amounts of training data from storage into
GPU/TPU memory. In some cases ML training setup time can be as long as 50% of
TPU compute time, improving data transfer throughput & efficiency can help
improving GPU/TPU utilization.


  


  
    Distributed training, where ML accelerators, such as GPUs on different hosts,
exchange data among them.


  


  
    Distributed raw block storage applications transfer large amounts of data with
remote SSDs, much of this data does not require host processing.


  




Today, the majority of the Device-to-Device data transfers the network are
implemented as the following low level operations: Device-to-Host copy,
Host-to-Host network transfer, and Host-to-Device copy.



The implementation is suboptimal, especially for bulk data transfers, and can
put significant strains on system resources, such as host memory bandwidth,
PCIe bandwidth, etc. One important reason behind the current state is the
kernel’s lack of semantics to express device to network transfers.




  Proposal:




In this patch series we attempt to optimize this use case by implementing
socket APIs that enable the user to:




  send device memory across the network directly, and


  receive incoming network packets directly into device memory.




Packet payloads go directly from the NIC to device memory for receive and from
device memory to NIC for transmit.
Packet headers go to/from host memory and are processed by the TCP/IP stack
normally. The NIC must support header split to achieve this.



Advantages:




  
    Alleviate host memory bandwidth pressure, compared to existing
 network-transfer + device-copy semantics.


  


  
    Alleviate PCIe BW pressure, by limiting data transfer to the lowest level
of the PCIe tree, compared to traditional path which sends data through the
root complex.


  




With this proposal we’re able to reach ~96.6% line rate speeds with data sent
and received directly from/to device memory.

### 添付資料URL

- [slides](https://netdevconf.info/0x17/docs/netdev-0x17-paper5-talk-slides/netdev%200x17_%20Device%20Memory%20TCP%20%282%29.pdf)（file）
- [video](https://youtu.be/1xCk_aTtQ6U)（link）

<a id="session-unleashing-sr-iov-offload-on-virtual-machines"></a>
## 9. Unleashing SR-IOV Offload on Virtual Machines

- セッション個別URL: https://netdevconf.info/0x17/sessions/talk/unleashing-sr-iov-offload-on-virtual-machines.html
- Track: Talk
- 日時:  

### Description

Hardware offloading through Single Root I/O Virtualization (SR-IOV) is one of the methods to accelerate virtual networks, used by platforms like OpenStack and Kubernetes. It is super fast and useful for performance-sensitive applications. However, currently it can only offload Linux network functions on physical machines and can’t be used for Linux network functions on virtual machines (VMs). Thus, offloading virtual networks for containers running on VMs is not possible although there are cases where deploying containers to VMs rather than physical machines is preferred for high flexibility.
The same is true for nested VMs.



We aim to achieve offloading Linux network on VMs to SR-IOV physical NICs. The reason why Linux network on VMs can’t be offloaded is that network construction software for SR-IOV offload (e.g. SR-IOV CNI plug-in) creates and configures Virtual Functions (VFs) by accessing Physical Functions (PFs). One naive way to solve this is assigning PFs to VMs and allowing the VMs to exclusively access PFs, but this lacks scalability (one VM per PF) and also introduces security concerns as guests can control the entire NIC hardware.



We propose a method that emulates PFs that have SR-IOV feature while offloading data plane to hardware. This can be achieved by emulating SR-IOV virtio_net devices in QEMU with vDPA, which can offload only data plane without offloading control plane,  as its backend. With our method, we can use embedded switch on the physical SR-IOV NIC and it’s possible to offload Linux network functions on VMs in a scalable way without security concerns stated above. Our PoC implementation employs an L2 switching feature in the SR-IOV’s legacy mode. We measured throughput and latency of container networks on VMs with our PoC. The results were several times better compared to when not using SR-IOV.



In this talk we’ll show the details of our approach, the performance numbers of our PoC and the plans for future switchdev mode.

### 添付資料URL

- [slides](https://netdevconf.info/0x17/docs/netdev-0x17-paper20-talk-slides/Netdev_0x17.pdf)（file）
- [paper](https://netdevconf.info/0x17/docs/netdev-0x17-paper20-talk-paper.pdf)（file）
- [video](https://youtu.be/HXUngGL3GN8)（link）

<a id="session-integrating-ebpf-into-the-p4tc-datapath"></a>
## 10. Integrating eBPF Into The P4TC Datapath

- セッション個別URL: https://netdevconf.info/0x17/sessions/talk/integrating-ebpf-into-the-p4tc-datapath.html
- Track: Talk
- 日時:  

### Description

P4TC[1][2][3][4], is a P4 kernel-native implementation on top of the Linux 
Traffic Control (TC) that facilitates both a kernel-based software datapath and a hardware datapath offload.



By virtue of using TC, an operator could execute one or more P4 programs:



1) entirely in the kernel datapath (baremetal, containers, VMs)



2) offload them entirely to hardware or run in a hybrid mode where some programs
run in software and others in hardware



3) for each P4 program put part of the pipeline or table in hardware and part in a software exception datapath.



Starting with a P4 program definition, one would use the P4C[5] tc backend compiler to generate the necessary artifacts that are used not only to manifest the P4 program in the kernel but also the necessary control details for iproute2::tc.



Context For The Talk



There was no iproute2 or kernel code compilation required in our original approach.
The entire kernel datapath definition was “scripted” (in the same nature as the
u32 classifier or pedit packet editor are) and iproute2::tc control used a
generated “introspection” json file to translate human friendly names to netlink
wire format.



When we first posted our patches on the mailing list we received comments that
suggested, that for the s/w datapath, we should look at using eBPF instead of
our original scripting approach. It should be noted that we had looked at eBPF
in the early stages of the project and abandoned it due to (at that time)
challenges, most prominent being:



1) integrating all possible P4 programs required engaging in verifier-combat
or loosing functionality just so we could use eBPF for the sake of using it.



2) the general operational complexity of a) using ebpf which is still evolving
meaning: compiler and kernel changes still ongoing b)one has to become
knowledgeable in two domains: ebpf and tc c) the need to compile and dealing
with permutations of the compiler, libbpf and kernel instead of simply running
a shell script and having to deal with.



The main argument made for eBPF on the list discussion was that it would provide
better performance for the s/w datapath compared to the scripting approach we
took.



So what changed?
The presence of kfuncs[7] which allows us to access kernel proper function resolves
challenge #1. Kfuncs didnt exist at the beginning of our  project. We were motivated to proceed on integrating kfuncs in order to validate  the “performance” claim.
We embarked on coding and experimenting for a few months with various approaches 
documented in[10] using for our basis [8][9]. Our  conclusion was:
a) eBPF did give us performance improvement in generic tests but b) it was not
always the case in larger P4 programs in presence of a combination of LPM and
ternary lookups the datapath in those cases the workload was more compute
intensive. We settled on a hybrid approach which uses P4 objects residing in
the P4TC kernel domain made accessible to the eBPF s/w datapath via kfuncs.



The challenge of operational complexity(#2) is still, unfortunately, lurking.
Although the effort was a diversion over many more months invested into a project
that was already functional (and it added more months into the project’s time
and resources investment), we justified the value of integrating eBPF using 
kfuncs with the following reasoning:



A) as a non-technical compromise to the community feedback



B) it reduces the amount of initial code we need to upstream



C) that the operational usability of eBPF will improve over time given the
resource investment eBPF is getting.



D) The fact that we are putting rail guards around eBPF by using the compiler
as a shield to remove the need for knowledge of eBPF and its evolution.



This Talk



In this talk we are going to describe in more details about the new architecture 
of the P4TC software datapath and how we integrate eBPF. We will discuss some of
the challenges we faced in the conversion and integration, their respective
resolutions and lessons learnt. We hope this talk will be a good reference for
P4TC which we hope to be upstreaming by the conference time. Current kernel tree 
can be found at [6].



references




  https://netdevconf.info/0x16/session.html?Your-Network-Datapath-Will-Be-P4-Scripted


  https://netdevconf.info/0x16/session.html?P4TC-Workshop


  https://opennetworking.org/wp-content/uploads/2022/05/Jamal-Salim-Final-Slide-Deck.pdf


  https://github.com/p4tc-dev/docs/blob/main/why-p4tc.md


  https://github.com/p4lang/p4c/tree/main/backends/tc


  https://github.com/p4tc-dev/linux-p4tc-pub


  https://docs.kernel.org/bpf/kfuncs.html


  https://github.com/p4lang/p4c/tree/main/backends/ebpf/psa


  https://github.com/NIKSS-vSwitch/nikss

### 添付資料URL

- [slides](https://netdevconf.info/0x17/docs/netdev-0x17-paper22-talk-slides/P4TC_0x17.pdf)（file）
- [video](https://youtu.be/rAeIEXGN2Z0)（link）

<a id="session-so_timestamping-powering-fleetwide-rpc-monitoring"></a>
## 11. SO_TIMESTAMPING: powering fleetwide RPC monitoring

- セッション個別URL: https://netdevconf.info/0x17/sessions/talk/so_timestamping-powering-fleetwide-rpc-monitoring.html
- Track: Talk
- 日時:  

### Description

SO_TIMESTAMPING: powering fleetwide RPC monitoring



Timestamping is key to debugging network stack latency.



With SO_TIMESTAMPING, bugs that are otherwise incorrectly assumed to be network issues can be attributed to the kernel. It can isolate transmission, reception and even scheduling sources. Capturing connection state along with timestamps further enables root cause discovery, such as TCP receive window size. Capturing timestamps at more points, such as traffic shaping and NIC hardware, expands visibility to tough issues like incast.



SO_TIMESTAMPING has seen iterative development to enable fleetwide RPC monitoring. The Fathom monitoring system was recently presented at SIGCOMM. This talk complements that, and begins where that paper ends: by taking a deep dive on the Linux kernel infrastructure that makes fleetwide continuous latency analysis and attribution possible.



API extensions include covering TCP bytestreams, capturing transport protocol state along with events (OPT_STAT), and supporting selective sampling (OPT_CMSG). This talk reviews the core SO_TIMESTAMPING API, discusses non-obvious extensions (MSG_EOR, SO_RCVLOWAT), summarizes gotchas from the field (OPT_ID_TCP), and explains how all this combines to enable robust continuous RPC monitoring. It touches on clock synchronization and precision. Finally, it compares this UAPI to dynamic tracing with uprobes, kprobes, tracepoints and BPF.

### 添付資料URL

- [slides](https://netdevconf.info/0x17/docs/netdev-0x17-paper23-talk-slides/netdevconf%202023_%20SO_TIMESTAMPING.pdf)（file）
- [video](https://youtu.be/06asO57RzEQ)（link）

<a id="session-is-scaling-ebpf-easy-yet-a-small-step-to-one-server-but-giant-leap-to-distributed-network"></a>
## 12. Is scaling eBPF easy yet? A small step to one server, but giant leap to distributed network.

- セッション個別URL: https://netdevconf.info/0x17/sessions/talk/is-scaling-ebpf-easy-yet-a-small-step-to-one-server-but-giant-leap-to-distributed-network.html
- Track: Talk
- 日時:  

### Description

This talk will focus on the more practical aspects of developing networking applications based on eBPF/XDP/TC. Many aspects create challenges during development with eBPF: the learning curve is steep; total novelty and the rapid development of mainstream keeps you in shape; efficient implementation of packet processing requires some effort.



However, having eBPF for more than one year in a distributed production
environment, we realized that it is only the tip of the iceberg. Drawing so much attention to interesting and complicated tasks inside eBPF packet processing makes the whole picture foggy. In this talk, we cover other important topics for development, such as application lifetime management, configuration management and delivery, monitoring and observability, and scaling in the service providers’ network. Although these questions are relevant to distributed system development, eBPF adds extra spice to the process.

### 添付資料URL

- [slides](https://netdevconf.info/0x17/docs/netdev-0x17-paper1-talk-slides/xdp_scaling.pdf)（file）
- [video](https://youtu.be/TGgIT9rMsns)（link）

<a id="session-lightweight-implementation-of-per-packet-service-protection-in-ebpfxdp"></a>
## 13. Lightweight Implementation of Per-packet Service Protection in eBPF/XDP

- セッション個別URL: https://netdevconf.info/0x17/sessions/talk/lightweight-implementation-of-per-packet-service-protection-in-ebpfxdp.html
- Track: Talk
- 日時:  

### Description

Deterministic communication means reliable packet forwarding with close to zero packet loss and bounded latency.
Packet loss or delay above a threshold caused by, e.g., equipment failure or malfunction could be catastrophic for applications that require deterministic communication.
To meet loss related targets, per-packet service protection has been introduced by deterministic communications standards;
it is provided by Frame Replication and Elimination for Reliability (FRER) for Layer 2 Ethernet networks and by Packet Replication, Elimination, and Ordering Functions (PREOF) for Layer 3 IP/MPLS networks.



We have implemented FRER with two conceptually different methods: 
(1) in eBPF/XDP as a lightweight software implementation; 
and (2) in userspace.
We evaluate our XDP FRER via an experimental analysis and compare the two FRER implementations.

### 添付資料URL

- [slides](https://netdevconf.info/0x17/docs/netdev-0x17-paper25-talk-slides/netdev0x17_xdpfrer_slides.pdf)（file）
- [paper](https://netdevconf.info/0x17/docs/netdev-0x17-paper25-talk-paper.pdf)（file）
- [video](https://youtu.be/zB5sH2FwUts)（link）

<a id="session-fast-zc-rx-data-plane-using-io-uring"></a>
## 14. Fast ZC Rx Data Plane using io uring

- セッション個別URL: https://netdevconf.info/0x17/sessions/talk/fast-zc-rx-data-plane-using-io-uring.html
- Track: Talk
- 日時:  

### Description

Memory bandwidth is a bottleneck in many distributed services running at scale as I/O bandwidth has not kept up with CPU or NIC speeds over time. One of the limitations of kernel socket-based networking is that data is first copied into kernel memory via DMA, and then again into user memory, adding pressure to overall memory bandwidth and comes with a CPU cost. There are historically two ways to improve this performance: kernel bypass (e.g. DPDK, PF_RING and XDP) and RDMA (e.g. RoCE and InfiniBand), each having its own downsides in exchange for such improvements. For kernel bypass, there’s often a need to run custom or patched drivers, kernel modules, or kernels, and requires userspace to re-implement a networking stack. For RDMA, with the NIC now responsible for storing state and handling flows in hardware, it is harder to debug when things go wrong or to patch leading to “ossification”. Plus, the solutions are often proprietary.



There are benefits to using the kernel networking stack: it is free, open, highly debuggable and patchable. With newer hardware support for technologies such as flow steering, it is now possible to have a zero copy network RX solution that sits in between kernel bypass and RDMA. Using header splitting, the kernel handles the stateful networking but data is written directly into its intended destination without copying using DMA. Flows are directed to specific RX queues configured for this using flow steering. This paper proposes an implementation of zero copy network RX into host userspace memory, using io_uring as the user facing API.



In the first part of this paper, we first discuss the overall approach to zero copy in the network RX path and the requirements a user might have. For example, users may have alignment requirements, dynamic resizing of zero copy destinations as network traffic can be bursty, and a way to fall back to copying. This sets the stage for what changes need to be made in the kernel, and how the user facing API should ideally look like.



In the second part of the paper, we survey the existing implementations of zero copy network RX that are both already merged into mainline and still work in progress. We talk about the shared parts in the networking layer: resource registration, page pool memory provider backends, page pool buffer/iov representations and proper lifetime management.



In the third part of the paper, we discuss our implementation in detail. We’ll look at the various options for user API in the kernel, and focus on the pros/cons that led us to choose io_uring. After that, we will share some preliminary performance results of our implementation compared against non-ZC and other ZC implementations.



In the last part of the paper, we discuss the limitations of zero copy and the challenges to deploying it effectively to userspace. Unlike TX where data size is known ahead of time, RX is unpredictable and potentially bursty. To get the most out of zero copy receive, the write end has to coordinate closely with the receive end on the shape of the data in order to avoid more userspace copies. For example, if the final destination is to write to a block device, then there are requirements for O_DIRECT to work. Finally, we talk about our plans for further work e.g. extending support to GPU device memory.

### 添付資料URL

- [slides](https://netdevconf.info/0x17/docs/netdev-0x17-paper24-talk-slides/Zero%20Copy%20Rx%20with%20io_uring%20-%20NetDev%20Conf%202023-1.pdf)（file）
- [paper](https://netdevconf.info/0x17/docs/netdev-0x17-paper24-talk-paper.pdf)（file）
- [video](https://youtu.be/x1cY9E026co)（link）

<a id="session-synce4l-open-source-implementation-of-synchronous-ethernet"></a>
## 15. Synce4l: open-source implementation of Synchronous Ethernet

- セッション個別URL: https://netdevconf.info/0x17/sessions/talk/synce4l-open-source-implementation-of-synchronous-ethernet.html
- Track: Talk
- 日時:  

### Description

Almost a quarter of the world-wide consumer Internet traffic is pushed through mobile networks (roughly 75 exabytes per month in 2022 [1]). Such traffic creates a demand for high data rates and continuous development of telecommunications standards. High traffic requires not only efficient bandwidth utilization but also a good synchronization between wired components of 5G/6G network. Well-known PTP (Precision Time Protocol [2]) with its sub-microsecond synchronization needs to be improved even more. To achieve sub-nanosecond synchronization, it needs to be coupled with Synchronous Ethernet (e.g., White Rabbit Project [3][4]).



Synchronous Ethernet (SyncE) is a technology that allows transport clock signal through the Ethernet physical layer. This prevents the clock skew and clock jitter between adjacent network nodes. SyncE signaling protocol itself is defined by a series of ITU-T recommendations (ITU-T Rec. G.8261, G.8262, G.8264).



The presentation aims to describe the need of having frequency synchronization and its role when coupled with PTP in 5G/6G networks [5]. Its focus is SyncE signaling protocol implemented by Linux open-source project synce4l [6]. The application can work either as a source for frequency synchronization hierarchy (leader) or as on the node synchronizing to it (follower). The presentation shows the synce4l project, focusing mainly on the features, requirements (both in software and hardware), and configuration in a real network. Finally, it describes how synce4l corresponds with the currently discussed new DPLL (Digital Phase Locked Loop) subsystem [7] in the Linux kernel and user-space networking community.



[1] https://twiki.cern.ch/twiki/pub/HEPIX/TechwatchNetwork/HtwNetworkDocuments/white-paper-c11-741490.pdf 
[2] https://en.wikipedia.org/wiki/Precision_Time_Protocol 
[3] https://white-rabbit.web.cern.ch/ 
[4] https://ohwr.org/projects/white-rabbit/wiki/WRpublications 
[5] https://moniem-tech.com/2023/02/20/time-synchronization-is-critical-in-5g-open-ran-network/ 
[6] https://github.com/intel/synce4l 
[7] https://lore.kernel.org/netdev/20230824213132.827338-1-vadim.fedorenko@linux.dev/#r

### 添付資料URL

- [slides](https://netdevconf.info/0x17/docs/netdev-0x17-paper33-talk-slides/netdev_0x17_synce4l_dpll.pdf)（file）
- [video](https://youtu.be/sbR-pf3sWuc)（link）

<a id="session-assessing-the-impact-of-linux-networking-on-cpu-consumption"></a>
## 16. Assessing the impact of Linux networking on CPU consumption

- セッション個別URL: https://netdevconf.info/0x17/sessions/talk/assessing-the-impact-of-linux-networking-on-cpu-consumption.html
- Track: Talk
- 日時:  

### Description

We all understand that software networking is expensive, but do you know just how much of your Linux servers’ CPU time is being spent moving packets around? We feel like this is an important question to answer, in a world where network interfaces keep getting faster at a rate higher than that of our processors, and considering the increasing amount of network services being implemented in software. Additionally, some SmartNIC vendors claim that the total CPU utilization due to networking tasks in a typical server can be as high as 30%, a number which seems to be backed up by the relative popularity of such hardware accelerators in hyperscalers’ data-center networks.



Unfortunately, no dedicated tool was available to isolate the network stack’s CPU load from unrelated kernel functionality… Until now! This talk presents design and architecture of Netto, a novel tool that uses eBPF probes to trace the Linux kernel’s network stack, enabling in depth observation and monitoring of its CPU utilization. It is also shown how Netto can estimate a breakdown of this monolithic cost into the composing network functions like bridging and forwarding while overcoming the expensive eBPF instrumentation overhead by collecting and analyzing CPU stack traces.

### 添付資料URL

- [slides](https://netdevconf.info/0x17/docs/netdev-0x17-paper34-talk-slides/NetDev%200x17%20Assessing%20the%20Impact%20of%20Linux%20Networking%20on%20CPU%20Consumption.pdf)（file）
- [paper](https://netdevconf.info/0x17/docs/netdev-0x17-paper34-talk-paper.pdf)（file）
- [video](https://youtu.be/0Wk5iZkIe74)（link）

<a id="session-leveraging-homa-enhancing-datacenter-rpc-transport-protocols"></a>
## 17. Leveraging Homa: Enhancing Datacenter RPC Transport Protocols

- セッション個別URL: https://netdevconf.info/0x17/sessions/talk/leveraging-homa-enhancing-datacenter-rpc-transport-protocols.html
- Track: Talk
- 日時:  

### Description

Abstract:
In hyper-scale data centers, there’s an emerging need for transport protocols tailored for optimal RPC performance. Homa, a distinctive transport protocol, is purpose-built for such environments, prioritizing the swift performance of request/reply messages. 
Our comparative study of gRPC’s performance on Homa versus TCP underscores pronounced advantages, especially for RPC messages under 50k, in terms of both latency and throughput. Furthermore, we’ve integrated enhancements to Homa to optimize longer RPC messages and to bolster bidirectional streaming support.
During this presentation, we’ll traverse through these comparative performance insights, spotlight our innovations to Homa, and guide participants through the tangible benefits of integrating Homa into their RPC transport framework.
 We will punctuate our discussion with real-world illustrations and demonstrations, ensuring a comprehensive understanding of the merits of Homa in RPC transport scenarios.
outline:



  Homa Congestion Control introduction


  Limitation of Homa in RPC context


  Homa Congestion Control enhancements


  Homa RPC streaming enhancements


  Performance evaluation


  Future improvements


  Conclusion


  Q&A

### 添付資料URL

- [slides](https://netdevconf.info/0x17/docs/netdev-0x17-paper36-talk-slides/HomaNetdevv2.pdf)（file）
- [paper](https://netdevconf.info/0x17/docs/netdev-0x17-paper36-talk-paper.pdf)（file）
- [video](https://youtu.be/h6K9iVp6hdY)（link）

<a id="session-kernel-managed-user-buffers-in-homa"></a>
## 18. Kernel-Managed User Buffers in Homa

- セッション個別URL: https://netdevconf.info/0x17/sessions/talk/kernel-managed-user-buffers-in-homa.html
- Track: Talk
- 日時:  

### Description

Tha Homa transport protocol provides significantly higher performance than TCP, particularly when considering tail latency for short messages. In order to achieve its performance benefits,
both Homa’s API and its internal design are quite different from TCP. One of the most important differences is that Homa is message-oriented, whereas TCP is stream-oriented. Homa’s message orientation provides many benefits, but it also creates challenges. This talk will discuss how Homa’s message orientation makes pipelining difficult, which impacts throughput for large messages, and how the problem was solved by introducing a new approach to buffering, where
user-space buffers are allocated and managed by the kernel.

### 添付資料URL

- [slides](https://netdevconf.info/0x17/docs/netdev-0x17-paper38-talk-slides/HomaBuffersNetDev.pdf)（file）
- [video](https://youtu.be/yiUO3nYJNoA)（link）

<a id="session-p4-compatible-control-plane-driver-for-linux-kernel"></a>
## 19. P4 Compatible Control Plane Driver for Linux Kernel

- セッション個別URL: https://netdevconf.info/0x17/sessions/talk/p4-compatible-control-plane-driver-for-linux-kernel.html
- Track: Talk
- 日時:  

### Description

P4 is a domain specific language to express data plane for network devices. P4-TC is a new classifier that helps to create a data plane as described by a P4 program in the Linux kernel. In this talk, we will focus on detailing device driver interfaces/APIs to support P4-TC.



The main goal of a P4-TC enabled device driver is to program underlying hardware pipeline using abstractions provided by P4-TC. To be able to achieve this, we propose changes to existing TC runtime interfaces to be more P4 friendly and as well as extend support to multiple P4 pipelines. We will also elaborate on the association of a P4 dataplane initialization on to a P4 compliant device using a newly proposed P4-TC extension to devlink interface.



The device driver can support a mode called “p4-tc”. This mode will enable shimming of legacy kernel events such as tc-flower on to P4-TC interfaces. This removes the overhead of supporting both tc-flower and p4-tc as separate entities in each driver and instead all drivers can opt in or out of the p4-tc mode. Additionally, we will talk about interfaces to support legacy hooks (switchdev ops, FDB ops) and coexistence of these with P4-TC compatible driver.



We will make a reference code available at https://github.com/p4tc-dev intime for the conference to showcase the driver hooks from the kernel.

### 添付資料URL

- [slides](https://netdevconf.info/0x17/docs/netdev-0x17-paper39-talk-slides/P4%20Compatible%20Control%20Plane%20Driver%20for%20Linux%20Kernel.pdf)（file）
- [video](https://youtu.be/XC2FWPPlE9Q)（link）

<a id="session-idpf-live-migration-support"></a>
## 20. IDPF Live Migration Support

- セッション個別URL: https://netdevconf.info/0x17/sessions/talk/idpf-live-migration-support.html
- Track: Talk
- 日時:  

### Description

IDPF is a standardized Network function device Interface that can support high throughput over Ethernet and RDMA, and is an orchestrated and scalable solution for hyperscalers.



Live migration is a mandatory feature for Virtualized network device which gives hyperscalers great flexibility for maintenance. IDPF supports bare metal & virtualized deployment while live migration is not required for bare metal. Even in virtualized environment, live migration is not essential to VF and it should be a feature only exported to and supported by PF Interface. In this talk we go over some of the solutions as well as varied amounts of support an IDPF compliant device might provide for migrating a VM with IDPF interface.



A device may provide not just Interface state retrieval and replay capability but also capability to do dirty page tracking and also flow state retrieval and replay.  We would like to discuss how do we support devices with different levels of live migration capabilities in the HW.



We will also discuss some of the implementation choices that we are considering in the IDPF driver to help make Live migration support generic enough for all venodrs that plan to support IDPF easy to implement.

### 添付資料URL

- [slides](https://netdevconf.info/0x17/docs/netdev-0x17-paper30-talk-slides/idpf_live_migration_support.pdf)（file）
- [video](https://youtu.be/uH7cMqhz5Uw)（link）

<a id="session-using-ebpf-to-inject-ipv6-extension-headers"></a>
## 21. Using eBPF to inject IPv6 Extension Headers

- セッション個別URL: https://netdevconf.info/0x17/sessions/talk/using-ebpf-to-inject-ipv6-extension-headers.html
- Track: Talk
- 日時:  

### Description

While IPv6 was already standardized in the 90’s, only the last decade has seen a growth in its global adoption.  In addition to dealing with IPv4 addresses exhaustion, IPv6 comes with a mechanism, called IPv6 Extension Header (IPv6 EH), allowing the protocol to be more flexible and extensible. However, according to recent studies trying to evaluate the survivability of IPv6 EHs, most of these IPv6 EHs do not easily survive over the global Internet (i.e., outside limited/controlled domains), which might be problematic if a specific service requires such an IPv6 EH.  This paper discusses a use case in which an operator needs to test the survivability of specific IPv6 EHs, as a proof-of-concept, prior to service deployment.  This paper explains how an eBPF program can find a suitable usage in building the service quickly as a proof-of-concept, by easily injecting IPv6 EHs in network traffic and without the need to modify existing tools or the kernel.  We also evaluate our program for IPv6 EHs injection in terms of throughput.

### 添付資料URL

- [slides](https://netdevconf.info/0x17/docs/netdev-0x17-paper40-talk-slides/eBPF%20IPv6%20EHs%20-%20netdev%200x17.pdf)（file）
- [paper](https://netdevconf.info/0x17/docs/netdev-0x17-paper40-talk-paper.pdf)（file）
- [video](https://youtu.be/tZs1AICOYS0)（link）

<a id="session-ebpf-qdisc-a-generic-building-block-for-traffic-control"></a>
## 22. eBPF Qdisc: a generic building block for traffic control

- セッション個別URL: https://netdevconf.info/0x17/sessions/talk/ebpf-qdisc-a-generic-building-block-for-traffic-control.html
- Track: Talk
- 日時:  

### Description

Packet scheduling in the Linux kernel is managed by queuing disciplines (Qdisc). Different Qdiscs implement different algorithms, which dictate how input packets from the network stack are arranged and when to output them to the driver queue to be consumed by the network interface controller (NIC).
Developing and deploying Qdiscs are cumbersome. Adding a new packet scheduling algorithm requires implementing a Qdisc kernel module from scratch. Combining different packet scheduling algorithms is possible but usually requires a complicated Qdisc hierarchy. On top of Qdiscs, different classifiers and rules can be applied to packets as well, which further complicates the combination of choices.
In this paper, we introduce eBPF Qdisc, a fully programmable Qdisc with eBPF. With the recent introduction of user-defined local objects (local kptr), BPF linked list and red-black tree, and the shared ownership of local kptr to the eBPF subsystem, we believe it is time to bring the programmability of eBPF to Qdisc. This will provide developers not only a more flexible and safer way to implement packet schedulers, but also orchestrating packets in coordination with other networking components.
In this paper, we first show that eBPF Qdisc is capable of realizing a sophisticated Qdisc by implementing fair queueing (fq) Qdisc. Then, we evaluate the performance of the fq against the existing fq in the Linux kernel. Finally, we show how eBPF Qdisc can help developers implement Qdisc’s with diverse functionalities through two use cases. Firstly, we build a more robust earliest departure time (EDT) rate limiter by coordinating with a fq Qdisc through eBPF maps. Secondly, we show eBPF Qdisc as a flexible way to create network emulators.

### 添付資料URL

- [slides](https://netdevconf.info/0x17/docs/netdev-0x17-paper37-talk-slides/eBPF%20Qdisc.pdf)（file）
- [video](https://youtu.be/np9AQjrDDc8)（link）

<a id="session-netlink-apis-to-exposeconfigure-netdev-objects"></a>
## 23. Netlink APIs to Expose/Configure Netdev Objects

- セッション個別URL: https://netdevconf.info/0x17/sessions/talk/netlink-apis-to-exposeconfigure-netdev-objects.html
- Track: Talk
- 日時:  

### Description

Netlink protocol specifications in YAML with genetlink family has now
been widely used for subsystems such as devlink, ethtool, DPLL, FOU etc.
The introduction of a genetlink spec-compatible family (netdev-genl) for
netdevices has made it possible to have a truly generic netlink
interface to configure netdev objects. Currently, the netdev-genl
interface is used to expose the XDP features supported by a NIC. In this
paper, we will discuss extending the netdev-genl interface to support
additional netdev objects such as queue and NAPI.



Queues as netlink objects enables exposing per queue attributes
(example, NAPI instance servicing the queue, stats, memory model etc.).
This could be followed up with commands such as get/set/create queues
etc. for multiple usecases (RSS context handling, Rx zerocopy, XDP).



NAPI instance as netlink object can be used to export NAPI information
supported by the device. Exposing NAPI attributes (such as NAPI id, NAPI
device, interrupt number associated with the NAPI instance, PID of the
NAPI thread) to the userspace serves multiple usecases. Example,
adjusting the NAPI thread priorities and SMP affinity. Additionally, one
could also configure NAPI pollers to queues from the userspace. This
could be used to limit the number of NAPI instances by configuring a
poller to be shared among queues that are on an interrupt vector.

### 添付資料URL

- [slides](https://netdevconf.info/0x17/docs/netdev-0x17-paper41-talk-slides/Netdev0x17_Netlink%20APIs%20to%20Expose%20Netdev%20Objects.pdf)（file）
- [video](https://youtu.be/F4EqcISX8HQ)（link）

<a id="session-tcp-offload-via-af_xdp-sockets-not-your-grandmothers-tcp-offload"></a>
## 24. TCP Offload via AF_XDP sockets– Not your grandmother’s TCP Offload!

- セッション個別URL: https://netdevconf.info/0x17/sessions/talk/tcp-offload-via-af_xdp-sockets-not-your-grandmothers-tcp-offload.html
- Track: Talk
- 日時:  

### Description

In this presentation we present “TCP Offload via AF_XDP sockets”. This is an innovative, elegant, and generic solution for TCP connection offload that addresses long standing issues associated with TCP offload and TCP Offload Engines (TOE). The key of this approach is to offload TCP connection processing and TCP state machine from a host CPU to a SmartNIC CPU running Linux. AF_XDP sockets are used to provide a generic and extensible offload messaging interface. The use of AF_XDP sockets for messaging is a novel approach to managing TCP Offload that has a big advantage that no kernel changes are required, and we can leverage eBPF and XDP to optimize data flow operations. The primary benefit of TCP connection offload via AF_XDP sockets is that it substantially reduces the network processing on the host CPU; this is relevant to cloud providers who want to free up host CPU cycles and sell them to their customers. A second advantage is that the TCP stack is tightly co-located with the hardware in the SmartNIC and that creates opportunities for optimizations and features that wouldn’t be possible otherwise.



In this talk we cover the overall design, the messaging API used over AF_XDP sockets, the client library, the TCP “proxy” running in the SmartNIC CPU, and example application code. The full lifetime of an offloaded connection is described including connection setup and tear down, data operations, flow control over the messaging interface. We’ll also discuss the hardware requirements (there’s not a lot!).

### 添付資料URL

- [slides](https://netdevconf.info/0x17/docs/netdev-0x17-paper42-talk-slides/netdev-0x17-paper42.pdf)（file）
- [paper](https://netdevconf.info/0x17/docs/netdev-0x17-paper42-talk-paper.pdf)（file）
- [video](https://youtu.be/IKMN82mhyoY)（link）

<a id="session-nanotube-turning-xdp-code-into-custom-hardware-pipelines-for-fpga-smartnics"></a>
## 25. Nanotube: Turning XDP Code into Custom Hardware Pipelines for FPGA SmartNICs

- セッション個別URL: https://netdevconf.info/0x17/sessions/talk/nanotube-turning-xdp-code-into-custom-hardware-pipelines-for-fpga-smartnics.html
- Track: Talk
- 日時:  

### Description

Network packet processing with EBPF XDP on the CPU reduces context switching, data copying, memory overheads and wasted software parsing of the packet data, greatly improving efficiency for some use cases.  However, the hardware overheads of delivering packets from a NIC to the CPU are still present and in high bandwidth data centre environments can present significant costs.  Many modern NICs have built-in packet processing capabilities that can effectively perform the type of use case that XDP is often used for. Being able to seamlessly offload the standard EBPF C code from the host to the NIC – under the control of the Linux networking subsystem and tooling – would increase server efficiency and performance without affecting the user experience.



We present Nanotube: an open-source compiler that consumes standard EBPF XDP C code and produces a tailor-made, application-specific dataflow pipeline suitable for execution on FPGA NIC platforms. To achieve that Nanotube unrolls the XDP programs spatially into a pipeline with packets flowing in fixed size blocks (packet words) every clock cycle.  Nanotube processes the application source with multiple steps performing: memory / pointer conversion, control flow restructuring, API lowering, packet and map access merging, control plane logic addition, automatic application splitting into multiple stages and generation of HLS C++ code.  It is written as a set of LLVM passes.



We have demonstrated its use on AMD / Xilinx FPGA-based NICs to offload XDP from the Linux kernel, expecting to show throughput at line rate (100 Gbps) on AMD NICs and provide results for applications such as Katran.



This talk outlines (i) the structure of the compiler; (ii) performance of typical workloads; and (iii) how map accesses by host software are supported using specially annotated packets over the normal host data path.



Finally, we outline areas for discussion around how an offloaded XDP program can be better integrated and supported by the Linux kernel, in particular the validator, map handling, and vendor-neutral support

### 添付資料URL

- [slides](https://netdevconf.info/0x17/docs/netdev-0x17-paper10-talk-slides/Nanotube-Netdev-0x17.pdf)（file）
- [video](https://youtu.be/e8zv-F2VL5g)（link）

<a id="session-kernel-offload-with-complete-host-kernel-functionalities"></a>
## 26. kernel offload with complete host kernel functionalities

- セッション個別URL: https://netdevconf.info/0x17/sessions/talk/kernel-offload-with-complete-host-kernel-functionalities.html
- Track: Talk
- 日時:  

### Description

Offloading to external devices is attractive to not only accelerate
the performance of a particular function but also release a computing
resource of the host which allows us to allocate it for additional
acomputations to programs.  But there is also a serious concern
that offloaded functions/programs do not have an identical
feature-set, resulting in incompatibility to the host programs.
An example of such concern appeared in an implementation of TCP
offload engine (ToE) to NIC, which were extensively discussed in
the community*1.



The kernel offload, which we propose in this talk, addresses the
concern by forwarding syscalls to an external device, which runs a
Linux kernel instance preserving the compatibility to the host kernel.
The kernel offload uses a system call hook to intercept syscalls at
the original userspace programs, and request the syscalls to the
remote Linux kernel, which serves as a syscall proxy.  Thus all the
load of the original kernel after syscall handler is outsourced to an
external device.  We implemented this in a lightweight userspace
program to be able to run on a recent SmartNIC device (we used
Bluefield2 for the prototype).  The userspace program involves Linux
kernel in the form of Linux Kernel Library (LKL). A program running on
the host system can remotely invoke syscalls inside an LKL instance of
the userspace program running on a remote host (SmartNIC).
Furthermore, we have developed optimized code paths of packet handling
in LKL to improve offloaded performance.



In this talk, we will present the design of initial implementation
the kernel offload, and the result of benchmarks
with several workload: 1) a typical TCP transmission flow with
existing offloading feature (TSO/LRO, checksum), 2) avoiding data
copying between host and NIC with sendfile syscalls, and 3) kTLS
offload with sendfile syscall (but not optimized as no hardware crypto
offloading) over existing implementations (nginx and openssl).  We
will also briefly discuss the room for the future improvements,
including further offload (crypto, larger segmentation size for
TCP, our RDMA channel implementation, and a choice of passthrough
method, etc), which we cannot cover at this moment.



*1: https://wiki.linuxfoundation.org/networking/toe

### 添付資料URL

- [slides](https://netdevconf.info/0x17/docs/netdev-0x17-paper31-talk-slides/netdev-0x17-paper31.pdf)（file）
- [video](https://youtu.be/5nBb6UIXBCQ)（link）

<a id="session-scripting-the-linux-routing-table-with-lua"></a>
## 27. Scripting the Linux Routing Table with Lua

- セッション個別URL: https://netdevconf.info/0x17/sessions/talk/scripting-the-linux-routing-table-with-lua.html
- Track: Talk
- 日時:  

### Description

Lunatik is a framework for scripting the Linux kernel with Lua [1], based on the design concept of Scriptable Operating Systems [2]. This framework was previously used for scripting Netfilter and XDP subsystems [3], allowing users to create complex network filters using Lua. For instance, it has been used for filtering L7 traffic such as HTTP and HTTPS.



In this talk we present the evolution of this framework and its usage on implementing a kernel-level adaptive routing service. This service allows the system to monitor the reliability of a network route and adjust its routing table dynamically in case of failure. For instance, a home router might use such service to fall back to the cellular network using a mobile phone as a gateway. For implementing this adaptive routing service, we relied on Lunatik libraries for binding kernel subsystems, such as netdevice notification chain, kthread, socket, RCU and FIB. This service also implements a protocol that allows nodes to advertise themselves as alternative gateways and the router to notify a node that it has been elected as the new gateway (or that the network has been reestablished and using that node as gateway is not necessary anymore).



[1] https://github.com/luainkernel/lunatik
[2] http://netbsd.org/~lneto/dls14.pdf
[3] https://netdevconf.info/0x14/session.html?talk-linux-network-scripting-with-lua

### 添付資料URL

- [slides](https://netdevconf.info/0x17/docs/netdev-0x17-paper35-talk-slides/routescript-slides.pdf)（file）
- [paper](https://netdevconf.info/0x17/docs/netdev-0x17-paper35-talk-paper.pdf)（file）
- [video](https://youtu.be/ePEsSH72OKw)（link）

<a id="session-netdev-development-stats-and-process-changes"></a>
## 28. netdev development stats and process changes

- セッション個別URL: https://netdevconf.info/0x17/sessions/talk/netdev-development-stats-and-process-changes.html
- Track: Talk
- 日時:  

### Description

Look back at the last year of development in netdev through
the lens of development statistics and process changes.
Discussion on challenges ahead.

### 添付資料URL

- [slides](https://netdevconf.info/0x17/docs/netdev-0x17-paper48-talk-slides/netdev.pdf)（file）
- [video](https://youtu.be/xXbVwyQk1x8)（link）

<a id="session-multi-core-ipsec-tunnels"></a>
## 29. Multi-core IPsec tunnels

- セッション個別URL: https://netdevconf.info/0x17/sessions/talk/multi-core-ipsec-tunnels.html
- Track: Talk
- 日時:  

### Description

Single pair Child Security Association (SA) IPsec tunnels, while being the de
facto standard in network security, have a notable limitation: their design
constrains them to a single CPU. This fails to take advantage of modern
multi-core systems.



Our solution uses multiple identical child SAs which has the benefit that each
stream has its own Sequence Number Counter, ensuring that CPUs don’t have to
synchronize their crypto state or disable their packet replay protection.



This presentation will dive into the design, implementation, and performance
of multi-child-SA IPsec tunnels.

### 添付資料URL

- [video](https://youtu.be/K-ukGQGmGxY?si=nfZ72_7rZOGcHZn6&t=1493)（link）

<a id="session-ospfv3-over-ipv4"></a>
## 30. OSPFv3 over IPv4

- セッション個別URL: https://netdevconf.info/0x17/sessions/talk/ospfv3-over-ipv4.html
- Track: Talk
- 日時:  

### Description

The Open Shortest Path First (OSPF) interior routing protocol is an open-standard that is widely deployed in enterprise and tactical networks.  OSPFv2 only supports IPv4, while OSPFv3 originally only supported IPv6.  More recently, OSPFv3 standards have been enhanced so that OSPFv3 can carry both IPv4 and IPv6 topology information and so that OSPFv3 can be deployed over IPv4.  By implementing RFC7949, OSPFv3 becomes the routing protocol of choice over both IPv4 and IPv6 transports.  This paper shows that in low-speed tactical networks, replacing OSPFv2 with OSPFv3 over IPv4 transport not only facilitates the eventual migration to IPv6, but also enables reduction in overhead bandwidth when compared to OSPFv3 over IPv6 transport.  The needed enhancements were implemented based on an open-source routing software called FRRouting.

### 添付資料URL

- [slides](https://netdevconf.info/0x17/docs/netdev-0x17-paper57-talk-slides/ospfv3_ipv4_netdev_2023.pdf)（file）
- [paper](https://netdevconf.info/0x17/docs/netdev-0x17-paper57-talk-paper.pdf)（file）
- [video](https://youtu.be/Y3Az9AHvf68)（link）

<a id="session-introduction-to-time-synchronization-pt-3"></a>
## 31. Introduction to time synchronization pt. 3

- セッション個別URL: https://netdevconf.info/0x17/sessions/tutorial/introduction-to-time-synchronization-pt-3.html
- Track: Tutorial
- 日時:  

### Description

The third part of the “Introduction to time synchronization” trilogy [1][2] introduces the latest advancements in linuxptp 4.0, such as dynamic clock reconfiguration in ts2phc or support for virtual clocks in the tool and the Linux Kernel.



In this episode, we’ll start with a guide to IEEE 1588 profiles - what can you choose from and how will it work under the hood.



This session will explain the fundamental concepts of Precision Time Measurement (PTM), which offers a pathway to enhance the synchronization of time between the Network Interface Card (NIC) and the Central Processing Unit (CPU), and briefly introduce kernel APIs dedicated to supporting it.



The guide will talk about practical techniques for effectively monitoring a PTP-synchronized system and conducting tests on a PTP Hardware Clock (PHC) through the utilization of diverse tools. Notably, tools like “phc_ctl” and “testptp”.



The talk concludes with a practical example of deploying ptp4l and phc2sys in combination with chronyd or ntpd to synchronize the system clock to NTP and PTP time sources using a timemaster tool. This approach can ease the deployment of PTP amongst existing NTP and improve the dependability of time synchronization within a given system.



[1] Part 1: https://netdevconf.info/0x15/session.html?Introduction-to-time-synchronization-over-Ethernet
[2] Part 2: https://netdevconf.info/0x16/sessions/talk/introduction-to-time-synchronization.html

### 添付資料URL

- [slides](https://netdevconf.info/0x17/docs/netdev-0x17-paper18-talk-slides/intro_to_timesync3.pdf)（file）
- [video](https://youtu.be/0_Uu3APIHuk)（link）

<a id="session-lightweight-approach-to-kickstart-development-of-a-nic-driver"></a>
## 32. Lightweight Approach to Kickstart Development of a NIC Driver

- セッション個別URL: https://netdevconf.info/0x17/sessions/tutorial/lightweight-approach-to-kickstart-development-of-a-nic-driver.html
- Track: Tutorial
- 日時:  

### Description

Typically, writing S/W drivers for H/W in development involves building the PCIe stubs for qemu, building the actual data pipeline models, writing S/W drivers which use the pipeline, and eventually getting to system effects and integration with the kernel networking stack - both control plane and data plane APIs. However, the most interesting initial questions are around the system effects and what changes to the H/W-S/W interfaces will cause.



This tutorial shows a lighter weight approach for developing S/W and H/W in parallel. As H/W design discussions progress, a simplified software model can be built in parallel, capturing the essence of the data pipeline and descriptors. When run with the Linux networking stack, design proposals can be examined from a S/W perspective with actual data based on a networking load.



There are limitations to the approach of course - no interrupts, DMA setup, and such - but those fall into the standardized domain of NIC driver operation. The limitations can be managed to allow exercising what is important for the specific hardware under development, as well as allowing code to be written for many of the Linux APIs associated with ethernet drivers.



This tutorial will show how to integrate a S/W only device model with Linux and the networking stack - from mimicking PCI probe and init, creating a netdevice, configuring queues and using those queues to send and receive data. Namespaces are used to imitate hosts and allow end-to-end connectivity, facilitating a complete, closed-loop datapath.

### 添付資料URL

- [slides](https://netdevconf.info/0x17/docs/netdev-0x17-paper46-talk-slides/netdevconf-0x17-kickstart-driver.pdf)（file）
- [video](https://youtu.be/AyjJAsNDN4E)（link）

<a id="session-rust-for-linux-networking-tutorial"></a>
## 33. Rust for Linux Networking Tutorial

- セッション個別URL: https://netdevconf.info/0x17/sessions/tutorial/rust-for-linux-networking-tutorial.html
- Track: Tutorial
- 日時:  

### Description

Rust is a systems programming language that is making great strides in
becoming the next big one in the domain. Rust for Linux is the project
adding support for the Rust language to the Linux kernel.



Rust has a key property that makes it very interesting as the second
language in the kernel: it guarantees no undefined behavior takes
place (as long as unsafe code is sound). This includes no
use-after-free mistakes, no double frees, no data races, etc. It also
provides other important benefits, such as improved error handling,
stricter typing, sum types, pattern matching, privacy, closures,
generics, etc.



In this tutorial we will build an example kernel side C server. Then,
we will migrate it to Rust step-by-step, explaining how the language
works at a high-level as well as giving practical tips to get started
with Rust for networking in the kernel.



We will also see how Rust prevents some of the mistakes that could
have been made in the C version, some of which could become
vulnerabilities. We will discover how much code we managed to write in
the safe Rust subset for our server, which prevents those issues.



There is no prerequisite Rust knowledge needed for this tutorial.

### 添付資料URL

- [slides](https://netdevconf.info/0x17/docs/netdev-0x17-paper52-talk-slides/2023-10-31%20-%20Netdevconf%200x17%20-%20Rust%20for%20Linux%20Networking%20Tutorial.pdf)（file）
- [video](https://youtu.be/kEIs4jyxEQU)（link）

<a id="session-xdp-workshop"></a>
## 34. XDP Workshop

- セッション個別URL: https://netdevconf.info/0x17/sessions/workshop/xdp-workshop.html
- Track: Workshop
- 日時:  

### Description

Our yearly classic XDP Workshop.
This time’s main topic will be XDP metadata, but not only.

### 添付資料URL

- [slides](https://netdevconf.info/0x17/docs/netdev-0x17-paper7-talk-slides/XDP_workshop-netdev0x17-final.pdf)（file）
- [video](https://youtu.be/y2UDh9zbX_Y)（link）

<a id="session-artificial-intelligence-and-machine-learning-in-networking"></a>
## 35. Artificial Intelligence and Machine Learning in Networking

- セッション個別URL: https://netdevconf.info/0x17/sessions/workshop/artificial-intelligence-and-machine-learning-in-networking.html
- Track: Workshop
- 日時:  

### Description

In this workshop we have a lineup of talks and tutorials on Artificial Intelligence and Machine learning (AI/ML) algorithms and techniques applied to Networking in the areas of optimizations, security, operations and more.



Talk list:
(a) We will start with a tutorial by Marta Plantykow m.plantykow@gmail.com
“Bridging networking and AI: Empowering Networking Engineers with Artificial Intelligence”:
 Overview of the fundamental concepts of AI/ML and their relevance to networking. Through relatable examples and approachable explanations, attendees will better understand how AI can enhance networking. While the discourse maintains a high-level perspective, it aims to demystify the notion that AI is overly complex and inaccessible.



Key takeaways from this tutorial will include:



  An overview of the fundamental concepts of AI/ML and their relevance to networking engineering


  Illustrative use cases showcasing how AI-driven applications in networking




(b) Genetic Algorithm based PI controller tuning with stability analysis for Linux ptp4l optimization



  Milena Olech (Intel) milena.olech@intel.com, Marta Plantykow (Synopsys) m.plantykow@gmail.com, Maciek Machnikowski (Nvidia) maciek@machnikowski.net




This talk presents the research results of ptp4l Proportional-Integral (PI) controller tuning using a Genetic Algorithm. Furthermore, it describes recent advancements in the PTP-optimization framework. PI controller optimization is required to meet the strict phase synchronization industry standards introduced by the LTE E-ULTRA TDD, 5G, and O-RAN technologies. The ptp4l is a part of the linuxptp toolbox and implements Precision Time Protocol (PTP) according to IEEE standard 1588 for Linux. The tool implements a PI controller and an API to tune its Proportional (P) and Integral (I) terms. The developed framework implements Genetic Algorithm (GA), a stochastic algorithm used in Artificial Intelligence (AI), to optimize the parameters of the PI controller. Stability condition checks are incorporated into the framework to accelerate the discovery of optimal and stable outcomes. The enhancements resulting from utilizing the tool are presented in the article. This paper continues research for tuning the Proportional-Integral (PI) controller configurable in the phc2sys application using Genetic Algorithm presented on Netdev 0x15.



(c) A generic ML-enhanced controller that optimizes network application efficiency by automatically controlling performance and energy trade-offs - Han Dong



(d) Towards an Autonomous Data Center - Hanan Shteingart



(e) Generative AI and LLMs in networking and security - Roopa Prabhu

### 添付資料URL

- [slides 1](https://netdevconf.info/0x17/docs/netdev-0x17-paper16-talk-slides/netdev0x17_Han.pdf)（file）
- [slides 2](https://netdevconf.info/0x17/docs/netdev-0x17-paper16-talk-slides/Towards%20Autonomous%20Data%20Centers.pdf)（file）
- [slides 3](https://netdevconf.info/0x17/docs/netdev-0x17-paper16-talk-slides/GenAI_and_LLM_in_networking_and_security.pdf)（file）
- [slides 4](https://netdevconf.info/0x17/docs/netdev-0x17-paper16-talk-slides/AI_ML_networking_netdev0x17_agenda.pdf)（file）
- [paper](https://netdevconf.info/0x17/docs/netdev-0x17-paper16-talk-paper.pdf)（file）
- [video](https://youtu.be/9FEUY0DxZ0E)（link）

<a id="session-tc-workshop"></a>
## 36. TC Workshop

- セッション個別URL: https://netdevconf.info/0x17/sessions/workshop/tc-workshop.html
- Track: Workshop
- 日時:  

### Description

Inaugural Face to Face discussions on different Traffic Control topics.
Agenda for 0x17:




  Deprecation of tc qdiscs, filters and actions (5-10 minutes)


  Testing, testing, testing
    
      Tuxsuite by Vishal and Anders (15-20 minutes)


      TDC parallelization by Pedro (10 minutes)


      Control plane performance testing by Victor (10 minutes)


    
  


  Buffer bloat revisited by Dave Taht (20 minutes)

### 添付資料URL

- [slides 1](https://netdevconf.info/0x17/docs/netdev-0x17-paper19-talk-slides/Parallel%20TDC.pdf)（file）
- [slides 2](https://netdevconf.info/0x17/docs/netdev-0x17-paper19-talk-slides/NlTestsTcWorkshop.pdf)（file）
- [slides 3](https://netdevconf.info/0x17/docs/netdev-0x17-paper19-talk-slides/TCtestingwithTuxSuite.pdf)（file）
- [slides 4](https://netdevconf.info/0x17/docs/netdev-0x17-paper19-talk-slides/Low%20Latency%20Life%20Lessons%20Learned.pdf)（file）
- [video](https://youtu.be/rWnb543Sdk8)（link）

<a id="session-compiler-networking-workshop"></a>
## 37. Compiler-networking workshop

- セッション個別URL: https://netdevconf.info/0x17/sessions/workshop/compiler-networking-workshop.html
- Track: Workshop
- 日時:  

### Description

Compilers are the future of networking!



In this workshop we will discuss how compilers are developing to accelerate network processing with new technicques, and how essential they are for the higher throughput and flexibility that datacenters need.



We will discuss different abstractions for network problems that compilers can leverage to optimize networking and how different abstractions and languages transform to actual programs and instructions for optimal execution on next-generation network devices.



Topics might include: eBPF compilers, P4 compilers, MLIR, new intermediate representations, data flow analysis, multi-platform support, static analysis, and other advanced topics related to compilers and networking.

### 添付資料URL

- [slides 1](https://netdevconf.info/0x17/docs/netdev-0x17-paper47-talk-slides/Compilers.pdf)（file）
- [slides 2](https://netdevconf.info/0x17/docs/netdev-0x17-paper47-talk-slides/P4TC_Compiler_Backend_netdev_final.pdf)（file）
- [video](https://youtu.be/e8zv-F2VL5g)（link）

<a id="session-netfilter-mini-workshop"></a>
## 38. Netfilter Mini Workshop

- セッション個別URL: https://netdevconf.info/0x17/sessions/workshop/netfilter-mini-workshop.html
- Track: Workshop
- 日時:  

### Description

A miscellany of updates in the Netfilter subsystem landscape.

### 添付資料URL

- [slides](https://netdevconf.info/0x17/docs/netdev-0x17-paper49-talk-slides/netdev.pdf)（file）
- [video](https://youtu.be/M428IL6RNqU)（link）

<a id="session-frr-workshop"></a>
## 39. FRR Workshop

- セッション個別URL: https://netdevconf.info/0x17/sessions/workshop/frr-workshop.html
- Track: Workshop
- 日時:  

### Description

This years FRR workshop will cover recent Scale/Memory optimizations for BGP.  Conversion of BGP bestpath and multipath processing to be a one time scan of BGP routes and how Nexthop Group Integration can be achieved via this in BGP.   How Zebra has been changed to further accommodate the separation of the data plane into zebra. Finally we will discuss recent releases and what would people like to see from FRR itself in the future

### 添付資料URL

- [slides](https://netdevconf.info/0x17/docs/netdev-0x17-paper51-talk-slides/FRR%20Workshop%2010-30.pdf)（file）
- [video](https://youtu.be/Y3Az9AHvf68)（link）

<a id="session-security-workshop"></a>
## 40. Security Workshop

- セッション個別URL: https://netdevconf.info/0x17/sessions/workshop/security-workshop.html
- Track: Workshop
- 日時:  

### Description

The security workshop will focus on recent development in the
Linux network security area. Topics can be everything related
to network security. The format will be a combination of
presentations and discussions.



Presentations:



1.Quantum-Proofing Data: The Power Of Post-Quantum Cryptography



Speaker: Milena Olech



Quantum computers leverage principles from quantum mechanics to formulate and execute quantum algorithms. Currently, there are no quantum computers capable of compromising existing cryptographic techniques.



Nevertheless, quantum algorithms can efficiently solve intricate problems within a relatively brief time frame. Notably, Shor’s algorithm has the potential to break the RSA and Elliptic Curve Diffie-Hellman algorithms, which are pivotal for key exchange in Transport Layer Security (TLS).



Furthermore, quantum algorithms pose a threat to the cryptography utilized in the TLS protocol in two critical areas: key exchange and client/server authentication. As a result, the security of the TLS handshake process can be compromised, necessitating the adoption of post-quantum cryptography (PQC) algorithms.



The National Institute of Standards and Technology selected CRYSTALS-Kyber algorithm as the Key Encapsulation Mechanism (KEM) resistant to cryptanalytic attacks with powerful quantum computers.



This paper outlines the mathematical foundation of the CRYSTALS-Kyber algorithm and illustrates its application in the TLS handshake. In order to assess the efficacy of post-quantum cryptography (PQC), a comprehensive comparison between traditional cryptographic methods and post-quantum alternatives has been conducted. The study analyzes the outcomes and provides a condensed summary of the findings.




  Multi-core IPsec tunnels




Speakers: Daniel Xu, Vlad Dumitrescu, Antony Antony



Single pair Child Security Association (SA) IPsec tunnels, while being the de
facto standard in network security, have a notable limitation: their design
constrains them to a single CPU. This fails to take advantage of modern
multi-core systems.



Our solution uses multiple identical child SAs which has the benefit that each
stream has its own Sequence Number Counter, ensuring that CPUs don’t have to
synchronize their crypto state or disable their packet replay protection.



This presentation will dive into the design, implementation, and performance
of multi-child-SA IPsec tunnels.

### 添付資料URL

- [slides](https://netdevconf.info/0x17/docs/netdev-0x17-paper54-talk-slides/sec_ws_slides.pdf)（file）
- [video](https://youtu.be/K-ukGQGmGxY)（link）

<a id="session-power-aware-network-performance-bof"></a>
## 41. Power-Aware Network Performance BoF

- セッション個別URL: https://netdevconf.info/0x17/sessions/bof/power-aware-network-performance-bof.html
- Track: Bof
- 日時:  

### Description

Traditionally, network performance analysis has been primarily based on throughput (bps or
pps) and latency measurements. In host endpoints, CPU utilization is often considered as a
secondary performance metric. For example, a packet processing application which is able to
achieve 10 Mpps while consuming 10% of the available CPU is considered to be more
performant than one which uses 20-30% cpu.



Packet processing infrastructure in software, running on the CPU, consumes CPU cycles and consequently contributes to increased power consumption that could reach as high as the hosting server’s maximum power. A kWh average cost in the US, based on publicly available 2021 data[0], is $0.23. With current global energy crisis, these prices will continue to rise significantly in some parts of the world. In a large data center with many servers running 24/7/365, the operational cost adds up pretty fast. More importantly, carbon emissions are directly proportional to the wattage a server consumes; In 2021, the amount of carbon emission in the US ranged from 0.97 pounds per kWh (when natural gas is used as the source) to 2.44 pounds per kWh (when petroleum is used as the source of power) [1]. Imagine the impact of the carbon footprint of a large data center with 10s to 100s of thousands of servers (not including middleboxes and other infra): It is the ballpark equivalent to killing a mature tree every 24 hours, or 365 trees annually[3].



It should be noted that this challenge is not  specific to just data centre networking but also to embedded devices: The Europe Union has been putting a lot of effort for years on getting devices in standby[5] to use less power.  EEE and WoL are partially attributed to this effort.



For this reason it is of great importance to have networking infrastructure that consumes less
power, not only for capex or operational costs, such as electricity bills, but also for cutting
carbon emissions and contributing to a more sustainable environment.



The massive growth of networking infrastructure utilization[2], hunger for more energy, as a result of the AI revolution, and rising cost of power generation all call out for the need to optimize for energy consumption across the application and network processing stack.



In this BoF, we focus on the network processing infrastructure (stack) on the host, where
compute, IO  and memory operations are performed on received and transmitted packets and their effect on power consumption.



We introduce a new metric for network performance analysis: power consumption at the host level.
How would one go about measuring power utilization for network workloads?
How do we correlate to the metrics such as perf, throughput, etc to the power utilized?
How would one go about saving power while still achieving an applications stated end goals?



We will share our approach and hope to inspire a discussion.



Although academia is starting to have discussions on this topic[4], there is hardly any literature on this topic that we could find to provide us guidance on how to collect this metric(or other metrics) and attribute it to different packet processing actions in the network infrastructure, let alone providing such data. Understanding the correlation between packet processing actions and host level power consumption, in addition to understanding CPU compute cycles spent for such actions, help better guide the optimization for throughput relative to CPU utilization and relative to power consumption.



References
[0]How much does electricity cost by state?
https://www.energysage.com/local-data/electricity-cost/#:~:text=As%20of%20February%202023%2C%20the,based%20on%20where%20you%20live.



[1] according to US government EIA data found here:
https://www.eia.gov/tools/faqs/faq.php?id=74&t=11



[2]https://blogs.marvell.com/2023/02/the-three-things-next-generation-data-centers-need-from-networking/



[3] Viessmann. (2021). How much CO2 does a tree absorb. Retrieved August 8, 2021 from
viessmann.co.uk:
https://www.viessmann.co.uk/heating-advice/how-much-co2-does-tree-absorb



[4] https://eng.ox.ac.uk/carbonawarenetworksworkshop/programme/



[5] https://commission.europa.eu/energy-climate-change-environment/standards-tools-and-labels/products-labelling-rules-and-requirements/energy-label-and-ecodesign/energy-efficient-products/mode-standby-and-networked-standby-devices_en

### 添付資料URL

- [slides 1](https://netdevconf.info/0x17/docs/netdev-0x17-paper9-talk-slides/NetdevConf%200x17%20A%20study%20on%20ARM%20vs%20Intel%20networking%20performance%20on%20the%20Linux%20kernel%20networking%20stack.pdf)（file）
- [slides 2](https://netdevconf.info/0x17/docs/netdev-0x17-paper9-talk-slides/Netdev-power-BoF.pdf)（file）
- [slides 3](https://netdevconf.info/0x17/docs/netdev-0x17-paper9-talk-slides/TutorialonNetworkingandPowerManagement.pdf)（file）
- [video](https://youtu.be/wpa8hSoH_Uw)（link）

<a id="session-tls-handshake-for-in-kernel-consumers"></a>
## 42. TLS handshake for in-kernel consumers

- セッション個別URL: https://netdevconf.info/0x17/sessions/bof/tls-handshake-for-in-kernel-consumers.html
- Track: Bof
- 日時:  

### Description

Overview via slides:



  Why kernel consumers want TLS handshake (our use cases)


  Alternative approaches to providing TLS handshake in the kernel


  The netlink upcall and the user space agent we implemented (now upstream)


  Thoughts on the use of TPM, NIC offload, keyrings, and other technologies




Followed by open discussion, questions, and rotten fruit projectiles.



More technically:



The SunRPC, SMB, and NVMe protocols all now support the use of TLS, and Linux implements those protocols in the kernel proper. QUICv1 is also a potential consumer of a handshake service.



The authors implemented a netlink upcall mechanism that passes an open socket to user space so that an existing library implementation of TLS handshake can be used rather than adding handshake code to the kernel. The purpose of this mechanism is to provide a handshake service for kernel consumers of TLS, it is not for use by user space applications.



We will discuss work that has already been merged upstream, starting with 3b3009ea8abb (“net/handshake: Create a NETLINK service for handling handshake requests”). During the BoF we will discuss the architecture and usage of this new mechanism in addition to kernel consumers that have already adopted the new mechanism.

### 添付資料URL

- [slides](https://netdevconf.info/0x17/docs/netdev-0x17-paper21-talk-slides/NetDev%200x17%20-%20TLS%20handshakes.pdf)（file）
- [video](https://youtu.be/3aS_ly9-RtU)（link）

<a id="session-my-foo-is-just-way-better"></a>
## 43. My foo is just way better!

- セッション個別URL: https://netdevconf.info/0x17/sessions/bof/my-foo-is-just-way-better.html
- Track: Bof
- 日時:  

### Description

This is a fun BOF. 
The idea is to give someone the stage for 10-15 minutes to demonstrate how they do kernel development and debugging. Since there are so many different approaches out there - ranging from people still debugging on baremetal to uml, to variants of VMs etc - i am sure we’ll see crazies..



Who is the prettiest of them all?

### 添付資料URL

- [video](https://youtu.be/D7YBDQiR2X4)（link）

<a id="session-music-bof"></a>
## 44. Music BoF

- セッション個別URL: https://netdevconf.info/0x17/sessions/bof/music-bof.html
- Track: Bof
- 日時:  

### Description

Open Source and Music

### 添付資料URL

- [video](https://youtu.be/D9RGX6QFm5E)（link）

<a id="session-bof-cxl-an-overview-and-applicability-to-high-performance-networking"></a>
## 45. BOF :: CXL : An overview and applicability to high performance networking

- セッション個別URL: https://netdevconf.info/0x17/sessions/bof/bof-cxl-an-overview-and-applicability-to-high-performance-networking.html
- Track: Bof
- 日時:  

### Description

This BOF will cover the increasingly popular Compute eXpress Link status and it’s applicability to networking.
Merging the IO and Compute expansion protocols has always been a desired attribute as it allows dis-aggregation of the memory capacity from the compute capacity, and specifically for networking it allows buffer and control state placement to be moved closer to IO and offload devices. 
This BOF invites speakers to cover the state of the art of CXL and the platforms that support it, and invites speakers to talk about innovative solutions that CXL enables

### 添付資料URL

- [slides 1](https://netdevconf.info/0x17/docs/netdev-0x17-paper53-talk-slides/CXL_SmartNIC_presentation-1.pdf)（file）
- [slides 2](https://netdevconf.info/0x17/docs/netdev-0x17-paper53-talk-slides/Netdev%200x17%20-%20CXL%20BoF.pdf)（file）
- [slides 3](https://netdevconf.info/0x17/docs/netdev-0x17-paper53-talk-slides/A%20brief%20introduction%20to%20CXL%20and%20why%20networking%20people%20should%20care.pdf)（file）
- [paper](https://netdevconf.info/0x17/docs/netdev-0x17-paper53-talk-paper.pdf)（file）
- [video](https://youtu.be/M3aPgGCW9JA)（link）

<a id="session-keynote-ghobadi"></a>
## 46. Machine Learning Workloads And Networking

- セッション個別URL: https://netdevconf.info/0x17/sessions/keynote/keynote-ghobadi.html
- Track: Keynote
- 日時:  

### Description

What makes machine learning workloads challenging? Manya will explore
three dimensions of designing next-generation machine learning
systems: congestion control, network topology, and computation
frequency.

More details later.

### 添付資料URL

- [slides](https://netdevconf.info/0x17/sessions/keynote/ghobadi_netdev.pdf)（file）
- [video](https://youtu.be/eskWu8sjnkE)（link）