# Netdev 2.2 全セッション一覧

出典: https://netdevconf.info/2.2/accepted-sessions.html

Accepted Sessionsの全34個別URLを収録し、Scheduleの全34個別URLと照合。JavaScriptで読み込むloadsessionsのHTML断片からTitle・Description原文を抽出。相対リンクは表示ページを基準に絶対URL化。全34件にDescription掲載あり。Contentsのスライド・論文・動画URLを抽出し、slides・papersディレクトリの全セッション資料と照合。全体ダウンロード用アーカイブ・動画プレイリストは共通資料として保持。個別ページのないOpening（原文Openning）・Closing・Wireless Workshop Status Update・Lightning Talks・Good Morning・TBDの計7枠は、スケジュール原文と掲載資料を補足に収録。Wireless WorkshopとStatus Updateの同じ資料は両方に保持。添付本体の取得・リンク有効性検査は未実施。

セッション: 34件 / Descriptionあり: 34件 / 資料あり: 34件 / 資料項目: 97件

## 目次

1. [Linux Networking Dietary Restrictions](#session-miller-datastructurebloat-keynote)
2. [netf‌ilter archeology: 18 years from Linux 2.3 to 4.x](#session-welte-netfilterhistory-keynote)
3. [Whatever Happens in Netconf behind the Closed Door?](#session-panelists-roundtable)
4. [Automating auto-scaled load balancer based on linux and vm orchestraton](#session-kong-loadbalancingautomation-talk)
5. [Comprehensive XDP off‌load-handling the edge cases](#session-viljoen-xdpoffload-talk)
6. [Resource Management for Hardware Accelerated Linux Kernel Network Functions](#session-roulin-hardwareresourcesmgmt-talk)
7. [TC f‌ilters (rules) insertion rate](#session-efraim-tcfiltersinsertionrate-talk)
8. [Extend TC to support conntrack (CT)](#session-efraim-extendtctoct-talk)
9. [TC Flower Off‌load](#session-horman-tcflower-talk)
10. [Multi-PCI socket network device](#session-shochat-devicemgmt-talk)
11. [Highly-Scalable Transparent Performance Enhancing Proxy](#session-chung-highscalablepep-talk)
12. [Performance improvements of Virtual Machine Networking](#session-wang-vmperformance-talk)
13. [WireGuard: Next-generation Secure Kernel Network Tunnel](#session-donenfeld-wireguard-talk)
14. [Analysis and Evaluation of TCP Congestion Algorithms](#session-brakmo-tcpcongestionanalysis-talk)
15. [TCP-BPF: Programmatically tuning TCP behavior through BPF](#session-brakmo-tcpbpf-talk)
16. [TTCN-3 and Eclipse TITAN for testing protocol stacks](#session-welte-ttcn3-talk)
17. [Accelerating XDP programs using HW-based hints](#session-waskiewicz-xdpacceleration-talk)
18. [AF_PACKET V4 and PACKET_ZEROCOPY](#session-karlsson-afpacket-talk)
19. [State of ECN and improving congestion feedback with AccECN in Linux](#session-kuhlewind-accecn-talk)
20. [Network stack personality in Android phone](#session-tazaki-mptcp-talk)
21. [Bufferbloat mitigation in the WiFi stack - status and next steps](#session-jorgensen-wifistack-talk)
22. [Arachne: Large Scale Data Centre SDN Testing](#session-aring-arachne-talk)
23. [TLS Receive Side Crypto Oﬄoad](#session-pismenny-tlscrypto-talk)
24. [RTNL mutex, the network stack big kernel lock](#session-westphal-rtnlmutex-talk)
25. [XDP + Netem = XNetem](#session-hemminger-XNetem-talk)
26. [Extending Linux network stack for persistent memory](#session-honda-extendlinuxstack-talk)
27. [Netf‌ilter mini-workshop](#session-ayuso-netfilter-workshop)
28. [Wireless Workshop](#session-berg-wireless-workshop)
29. [IPsec Workshop](#session-klassert-ipsec-workshop)
30. [TC Workshop](#session-salim-tc-workshop)
31. [XDP for the Rest of Us](#session-gospodarek-xdp-workshop)
32. [Linux networking on network switch](#session-kim-devicemgmt-tutorial)
33. [Linux bridge, Layer-2 gateways and Ethernet VPN’s!](#session-prabhu-linuxbridge-tutorial)
34. [Status, Open Issues and Extensions for switchdev SR-IOV mode](#session-gerlitz-sriov-bof)

<a id="session-miller-datastructurebloat-keynote"></a>
## 1. Linux Networking Dietary Restrictions

- セッション個別URL: https://netdevconf.info/2.2/session.html?miller-datastructurebloat-keynote
- Track: Keynote
- 日時: 2017-11-10 9:15 - 10:00, Keynote

### Description

The longest and most difficult battle, still being fought even to this
  day, is that of data structure bloat.  Nowhere more is this felt than
  in the core networking datastructures exercised in the primary data
  path of the stack.  This includes sk_buff, routes, sockets, etc..



It is easy to just throw together the most straightforward mechanism
  by which to manage a new piece of state, and bloat up our
  datastructures as a result.  Whereas it takes a real hero to do the
  work necessary to minimize the impact of this new state..



Human beings can execute a task efficiently when they have a pattern
  to operate upon.  And such patterns exist for compressing, reducing,
  or even completely eliminating state.  With these tools in hand,
  anyone can hunt around for ways to make our core datastructures smaller.

### 添付資料URL

- [slides](https://netdevconf.info/2.2/slides/miller-datastructurebloat-keynote.pdf)（file）
- [video](https://youtu.be/GgTwx1399Dc)（link）

<a id="session-welte-netfilterhistory-keynote"></a>
## 2. netf‌ilter archeology: 18 years from Linux 2.3 to 4.x

- セッション個別URL: https://netdevconf.info/2.2/session.html?welte-netfilterhistory-keynote
- Track: Keynote
- 日時: 2017-11-08 9:30 - 10:15, Keynote

### Description

netfilter was first introduced
  (together with iptables) during the 2.3.x development kernel series.  Before
  that, every stable kernel series came with a new, different packet filter
  implementation: ipfwadm (2.0.x), ipchains (2.2.x) and iptables (2.4.x)



We must have done something right with netfilter at the time, as it's
  sticking with us since 1999.  It's classic companion iptables has lasted more
  than 15 years before its eventual successor (nftables) came about in 2014.



Let's review the netfilter project history, it's major milestones and
  achievements.  Let's review the key people behind it, as well as [unfiltered!]
  anecdotes and fairy tales from the mailing list and commit log archives.

### 添付資料URL

- [slides](https://netdevconf.info/2.2/slides/welte-netfilterhistory-keynote.pdf)（file）
- [video](https://youtu.be/D1eMqKyn09Y)（link）

<a id="session-panelists-roundtable"></a>
## 3. Whatever Happens in Netconf behind the Closed Door?

- セッション個別URL: https://netdevconf.info/2.2/session.html?panelists-roundtable
- Track: Roundtable
- 日時: 2017-11-09 9:15 - 10:00, Roundtable

### Description

Panelists chosen for the Roundtable are multi-year veterans of the Netconf, a Linux community conference by-invitation-only,
  running since 2004.  As the main maintainers and developers of the Linux networking subsystem,  they've been hashing out new
  features and stubborn bugs of linux networking modules at the Netconf 2-day sessions for years.



The Roundtable offers an open Q&A session for the audiences to ask what they wanted to know about the Netconf.



 Audiences are encouraged to ask questions on, but not limited to, following topics:
  


     How netconf discussion topics are chosen 


     How conflicts in discussions are resolved  


     What, in your opinion, generated most lively discussion 


     How much of discussions happen in session vs in hallway talk?


     What gets discussed more at the Netconf, bugs or new features?




To process early questions/comments, in addition to in-session participation, there will be a comment box setup at the
   registration station.

### 添付資料URL

- [video](https://youtu.be/EcdNpyqS5b4)（link）

<a id="session-kong-loadbalancingautomation-talk"></a>
## 4. Automating auto-scaled load balancer based on linux and vm orchestraton

- セッション個別URL: https://netdevconf.info/2.2/session.html?kong-loadbalancingautomation-talk
- Track: Talk
- 日時: 2017-11-08 13:30 - 14:15, Talk

### Description

In micro-service architectures, where horizontal scaling of services is
  a requirement, there is huge need for a load balancing system that scales.
  Typically, reverse proxy servers are adopted to meet this requirement. A
  reverse proxy server has an upper bound of how many requests it can serve.
  It is a challenge dealing with situations where the available proxy server
  processing capacity is exceeded.



We have created a design we call CBL(Cloud Based Loadbalancer) which addresses
  the proxy server overload.
  CBL has been deployed on top of Kakao's /32 bit based networking (presented in
  netdev 1.2). CBL is an auto-scalable load balancer which utilizes the linux
  kernel, iptables and quagga.



In this talk we will share the design and implementation details of CBL.
  The talk will cover:
  


     The model’s details


     Clustering and Health checking of the loadbalancer cluster


     Mechanisms for announcing VIPs through the router and Iptables


     Mechanisms for detecting the autoscaling threshold point to trigger scale-in/out


     Illustrating scale-in/out of the loadbalancer instance

### 添付資料URL

- [video](https://youtu.be/C6nKSkuDD_0)（link）

<a id="session-viljoen-xdpoffload-talk"></a>
## 5. Comprehensive XDP off‌load-handling the edge cases

- セッション個別URL: https://netdevconf.info/2.2/session.html?viljoen-xdpoffload-talk
- Track: Talk
- 日時: 2017-11-10 15:00 - 15:45, Talk

### Description

While XDP is less complex to offload than other forms of kernel
  functionality due to the fact that it sits at the bottom of the stack, there are a
  number of items that lead to complexity when dealing with XDP offload.




   Map offload
    
Architecture-kernel
    
Architecture-FW overview
    
Limitations
  


   Tooling and debuggability
    
bpftool-how to inspect offloaded programs
    
Challenges and future work
  


   Implementation on 32 bit embedded architectures
    
LLVM and its relevance
    
Performance improvements
  


   Handling tail calls and multiple programs

  

 Partial offload-determining when to offload
    
One of the greatest challenges is determining which
    
programs to offload in a transparent and efficient way
  




This talk will explore some of the ideas around how to implement these concepts
  as well as share some of the results we have seen while implementing offload
  on a 32 bit architecture.

### 添付資料URL

- [slides](https://netdevconf.info/2.2/slides/viljoen-xdpoffload-talk.pdf)（file）
- [paper](https://netdevconf.info/2.2/papers/viljoen-xdpoffload-talk.pdf)（file）
- [video](https://youtu.be/mDSMbyb_xlg)（link）

<a id="session-roulin-hardwareresourcesmgmt-talk"></a>
## 6. Resource Management for Hardware Accelerated Linux Kernel Network Functions

- セッション個別URL: https://netdevconf.info/2.2/session.html?roulin-hardwareresourcesmgmt-talk
- Track: Talk
- 日時: 2017-11-09 10:00 - 10:45, Talk

### Description

The Linux kernel supports offloading of networking functions such as bridging
  and routing to switches (and NICs), but it lacks a way to represent and manage
  the hardware resources of these devices. Furthermore, while the resource limits
  and their current usage can be queried through a vendor's SDK or to a more
  limited extent from a kernel driver, the data are not in a form that can be
  directly used by the kernel: i.e., there is currently no way to associate
  networking resources to the hardware resources they will occupy and hence know a
  priori that a networking resource can be offloaded. Thus, there is a need for a
  generic model and resource manager that can map networking objects used in an
  offload to the corresponding hardware resources. This model will allow the
  kernel to compute how much of a given resource an offload takes and to get a
  high degree of confidence that an offload will succeed.



This talk describes a generic model for resource accounting and management in
  the kernel. The model can be driven by user-specified policies to manage
  hardware resources with reliable feedback to the user on overload.

### 添付資料URL

- [slides](https://netdevconf.info/2.2/slides/roulin-hardwareresourcesmgmt-talk.pdf)（file）
- [paper](https://netdevconf.info/2.2/papers/roulin-hardwareresourcesmgmt-talk.pdf)（file）
- [video](https://youtu.be/FhmhY48hsI4)（link）

<a id="session-efraim-tcfiltersinsertionrate-talk"></a>
## 7. TC f‌ilters (rules) insertion rate

- セッション個別URL: https://netdevconf.info/2.2/session.html?efraim-tcfiltersinsertionrate-talk
- Track: Talk
- 日時: 2017-11-09 13:00 - 13:30, Talk

### Description

Recent industry movement towards the use of virtual machines in general and
  SR-IOV in particular has led to a new requirements which did not exist recently:
  the necessity for rapid update of steering rules. Until recently - the existing
  TC code allowed for a poor rate of merely 100 rules-updates/sec per priority. A
  work done recently has improved the insertion rate to 50K/sec. However - this
  rate still does not satisfy the users who yearn for quantum leap, A rate of
  1M/sec or better. In this session we will discuss the existing situation, work
  done so far and ideas on adding batching operation to TC and more future
  architecture enhancements towards achieving this goal.

### 添付資料URL

- [slides](https://netdevconf.info/2.2/slides/efraim-tcfiltersinsertionrate-talk.pdf)（file）
- [paper](https://netdevconf.info/2.2/papers/efraim-tcfiltersinsertionrate-talk.pdf)（file）
- [video](https://youtu.be/mAmEwm21e9Q)（link）

<a id="session-efraim-extendtctoct-talk"></a>
## 8. Extend TC to support conntrack (CT)

- セッション個別URL: https://netdevconf.info/2.2/session.html?efraim-extendtctoct-talk
- Track: Talk
- 日時: 2017-11-08 16:15 - 17:00, Talk

### Description

Recent industry movement towards the use of TC as well as openVswitch (OVS) has created
  new requirements, one of which is supporting connection tracking (CT).  OVS datapath already
  uses rules to deliver the packet to CT and rules to act according to CT State.  TC should also be
  extended to support rules according to CT state.  In this talk, we'd like to present how TC API should
  be extended in order to use CT as an action and the ability to classify on connection state.

### 添付資料URL

- [slides](https://netdevconf.info/2.2/slides/efraim-extendtctoct-talk.pdf)（file）
- [paper](https://netdevconf.info/2.2/papers/efraim-extendtctoct-talk.pdf)（file）
- [video](https://youtu.be/2CcKzGOdyP0)（link）

<a id="session-horman-tcflower-talk"></a>
## 9. TC Flower Off‌load

- セッション個別URL: https://netdevconf.info/2.2/session.html?horman-tcflower-talk
- Track: Talk
- 日時: 2017-11-08 15:00 - 15:45, Talk

### Description

The TC Flower Classifier allows control of packets based on flows
  determined by matching of well-known packet fields and metadata. This is
  inspired by similar flow classification described by OpenFlow and
  implemented by Open vSwitch. Offload of the TC Flower classifier and
  related modules provides a powerful mechanism to both increase throughput
  and reduce CPU utilisation for users of such flow-based systems. This
  presentation will give an overview of the evolution of offload of the TC
  Flower classifier: where it came from, the current status and possible
  future directions.

### 添付資料URL

- [slides](https://netdevconf.info/2.2/slides/horman-tcflower-talk.pdf)（file）
- [paper](https://netdevconf.info/2.2/papers/horman-tcflower-talk.pdf)（file）
- [video](https://youtu.be/vCmpSLL-O8Y)（link）

<a id="session-shochat-devicemgmt-talk"></a>
## 10. Multi-PCI socket network device

- セッション個別URL: https://netdevconf.info/2.2/session.html?shochat-devicemgmt-talk
- Track: Talk
- 日時: 2017-11-08 16:15 - 17:00, Talk

### Description

Connecting a network port to the host via multiple PCIe sockets might be desired in these cases:

  

1) Systems where the network port speed is higher than that of any available PCIe socket
  2) NUMA (Non Uniform Memory Access) systems

The first case gets more frequent as network device vendors now introduce 200g ports while most server vendors do not yet provide PCIe sockets with that speed.



In the second case (NUMA systems) a PCIe socket is usually deployed per memory instance.
  But as long as a network device is connected to just one socket network applications running on remote CPU cores (not local to this socket memory) cannot benefit the NUMA architecture and overload the memories interconnect bus (e.g Intel’s QPI).
  This may even cause performance degradation of network applications running on local CPU cores.



So far in the kernel, one (or more) network device is created per PCIe network function, upon PCI device probe.
  This is perfectly fine as long as each PCIe function represents one (or more) network port.
  Applying this approach to a multi-PCI socket device port is problematic however.
  One could suggest to apply a Linux bond/team device on top of the per-socket kernel netdevs.
  But this is not optimal as it (1) does not allow to affine network traffic to the application’s local memory, e.g by using aRFS (2) requires a non-standard method for load-balancing ingress traffic over the PCIe sockets (3) requires a non-standard method to instantiate a single TX/RX queue per CPU core as desired and (4) imposes a cumbersome OS view of multiple netdevs representing a single network port.



In this talk I would like to show a solution that resolves all those issues by representing each multi-PCI socket network device port as a single kernel network device, thus encapsulating and hiding the PCI topology details inside the device driver and relieving the kernel networking stack and the OS from them.

### 添付資料URL

- [slides](https://netdevconf.info/2.2/slides/shochat-devicemgmt-talk.pptx)（file）
- [paper](https://netdevconf.info/2.2/papers/shochat-devicemgmt-talk.pdf)（file）
- [video](https://youtu.be/nYGl1o4Vn_U)（link）

<a id="session-chung-highscalablepep-talk"></a>
## 11. Highly-Scalable Transparent Performance Enhancing Proxy

- セッション個別URL: https://netdevconf.info/2.2/session.html?chung-highscalablepep-talk
- Track: Talk
- 日時: 2017-11-10 10:00 - 10:45, Talk

### Description

Performance Enhancing Proxies (PEPs) often employed to improve degraded TCP
  performance caused by characteristics of specific link environments, for
  example, in satellite, wireless WAN, and wireless LAN environments.  A classical
  PEP use case is to bridge two different TCP congestion avoidance algorithms; one
  suitable for wireless and another for wired network.  By terminating an
  end-to-end TCP flow at the boundary of the networks, PEP allows to use TCP
  congestion avoidance algorithms designed/tuned for the environment irrespective
  of TCP versions used by the end-systems.  One of the important traits of such
  PEP includes IP address transparency to avoid masking the clients from the
  Internet content servers.  In this talk, we introduce a simple but effective way
  to build a highly scalable transparent PEP on Linux using HAProxy, an
  open-source TCP proxy, tc, containers and tproxy module.  This configuration
  does not require tproxy netfilter hooks to NAT and plumb TCP traffic to the
  proxy.  The transparent PEP achieved closed to 100K TCP proxy transactions per
  second with 8KB object download per connection on a single server with 14 core
  Sandy Bridge CPUs and a RSS enabled NIC.   This is a significant milestone in
  transparent PEP tuning.  This talk presents performance analysis of the chosen
  and alternative design options we considered.

### 添付資料URL

- [slides](https://netdevconf.info/2.2/slides/chung-highscalablepep-talk.pdf)（file）
- [paper](https://netdevconf.info/2.2/papers/chung-highscalablepep-talk.pdf)（file）
- [video](https://youtu.be/w2hmr6ndj2k)（link）

<a id="session-wang-vmperformance-talk"></a>
## 12. Performance improvements of Virtual Machine Networking

- セッション個別URL: https://netdevconf.info/2.2/session.html?wang-vmperformance-talk
- Track: Talk
- 日時: 2017-11-09 16:30 - 17:00, Talk

### Description

As the high performance userspace networking VM backend
  becomes popular, it would be more and more interesting to optimize
  kernel networking data-path. In this talk, the design, implementation,
  performance and of traditional kernel networking data-path for VM will
  be first analyzed and discussed. Then various technologies that can
  improve kernel data-path performance will be proposed and
  discussed. To explore best parallelism, several new vhost threading
  models and their prons/cons will be analyzed and discussed. To reduce
  the latency, busy polling and the possible integration with host
  networking stack will be talked. To get better cache utilization,
  batching in various layers from virtio ring to host networking stack
  will be described and discussed. To get extreme performance, XDP
  support for virtio-net driver and tap will be analyzed and
  discussed. At the end of the talk, performance numbers, testing
  methodology future work will be presented. The audience should be
  who is interested in kernel networking stack, performance optimization
  or NFV.

### 添付資料URL

- [slides](https://netdevconf.info/2.2/slides/wang-vmperformance-talk.pdf)（file）
- [video](https://youtu.be/OsEaSEUySP8)（link）

<a id="session-donenfeld-wireguard-talk"></a>
## 13. WireGuard: Next-generation Secure Kernel Network Tunnel

- セッション個別URL: https://netdevconf.info/2.2/session.html?donenfeld-wireguard-talk
- Track: Talk
- 日時: 2017-11-09 15:00 - 15:45, Talk

### Description

WireGuard is a new network tunneling mechanism written for
  Linux, which, after two years of development, is eyeing upstream
  inclusion soon. It uses a formally proven cryptographic protocol and
  has already seen very widespread deployment. WireGuard uses a novel
  timer mechanism to hide state from userspace, and in general presents
  userspace with a "stateless" and "declarative" system of establishing
  secure tunnels. The codebase is also remarkably small and has been
  written to maintain a secure and compact TCB. This talk will focus on
  WireGuard's integration into the netdev subsystem, its integration
  with namespaces, how it differs from xfrm and what that means, why
  doing this in the kernel is necessary, and the various hurdles that
  have gone into designing a cryptographic protocol specifically with
  kernel concerns in mind. This talk is intended to spur discussions
  with the upstream netdev community.

### 添付資料URL

- [slides](https://netdevconf.info/2.2/slides/donenfeld-wireguard-talk.pdf)（file）
- [paper](https://netdevconf.info/2.2/papers/donenfeld-wireguard-talk.pdf)（file）
- [video](https://youtu.be/54orFwtQ1XY)（link）

<a id="session-brakmo-tcpcongestionanalysis-talk"></a>
## 14. Analysis and Evaluation of TCP Congestion Algorithms

- セッション個別URL: https://netdevconf.info/2.2/session.html?brakmo-tcpcongestionanalysis-talk
- Track: Talk
- 日時: 2017-11-10 11:00 - 12:00, Talk

### Description

As the number of TCP congestion control algorithms continues to
  increase, it is important that we have a good understanding of their
  strengths and limitations. For example, while BBR has demonstrated
  its ability to control buffer bloat and increase throughput under
  many scenarios, there have been reports of massive retransmissions
  (10-30%) under other scenarios.



In this talk I will describe the basic problems facing any congestion
  control algorithm followed by an evaluation and comparison of a
  subset of them including New Reno, Cubic, DCTCP and BBR under many
  different scenarios. Examples of these scenarios are 1, 2, 3, 4, 8,
  16 and 32 flows at various RTTs and bottleneck bandwidths, Cubic vs.
  other to see how they interact and how new CAs affect legacy traffic,
  large vs. small transfers, large vs. small RTTs, etc.



Netesto, a Network Testing Toolkit, is used to run the different
  scenarios and to collect performance data and to create various
  graphs. I will make these Netesto scenarios available so others can
  use them to reproduce the results, regression testing or to evaluate
   other congestion algorithms.

### 添付資料URL

- [slides](https://netdevconf.info/2.2/slides/brakmo-tcpcongestionanalysis-talk.pdf)（file）
- [paper](https://netdevconf.info/2.2/papers/brakmo-tcpcongestionanalysis-talk.pdf)（file）
- [video](https://youtu.be/5iC7j7G8wsw)（link）

<a id="session-brakmo-tcpbpf-talk"></a>
## 15. TCP-BPF: Programmatically tuning TCP behavior through BPF

- セッション個別URL: https://netdevconf.info/2.2/session.html?brakmo-tcpbpf-talk
- Track: Talk
- 日時: 2017-11-09 14:15 - 14:45, Talk

### Description

Linux provides global and per-connection parameters to fine tune TCP's
  behavior. Examples of these parameters are buffer sizes, congestion control, and
  window clamp. Global parameters are useful for setting default parameters, but
  cannot be tuned for each connection's characteristics. For example, large RTT
  connections require more buffer space than short RTT connections. There are two
  mechanisms for setting per-connection TCP parameters: setsockopt and ip route.
  Setsockopt requires changes in the application and ip route sets the parameters
  based on route prefixes.



In this talk I will describe TCP-BPF, also known as BPF sockops, as a new
  mechanism for setting TCP parameters through BPF programs. In addition to the
  flexibility of using BPF programs to determine the optimal parameters for a TCP
  connection, TCP-BPF also adds support for new parameters such as SYN RTO and
  SYN-ACK RTO. A TCP-BPF program can use socket information, such as IP addresses
  and port numbers, for determining optimal values for TCP parameters. For
  example, setting buffer sizes to 80KB, SYN and SYN-ACK RTOs to 10ms and TCP's
  congestion control to DCTCP when both hosts reside within the same ECN
  supporting datacenter.



In addition to describing the parameter tuning capabilities of TCP-BPF, I will
  also describe upcoming features such as conditional calling the TCP-BPF program
  when a packet is retransmitted, when an RTO occurs, when a packet is sent or
  received, etc. In order to decrease overheads, a per-connection decision can be
  made at connection establishment regarding which callbacks should be enabled for
  the connection. Possible uses of this feature are: changing connection
  parameters when there are too many retransmits (such as flowlabels), statistical
  data collection and analysis, etc.

### 添付資料URL

- [slides](https://netdevconf.info/2.2/slides/brakmo-tcpbpf-talk.pdf)（file）
- [paper](https://netdevconf.info/2.2/papers/brakmo-tcpbpf-talk.pdf)（file）
- [video](https://youtu.be/bPw440ybp-c)（link）

<a id="session-welte-ttcn3-talk"></a>
## 16. TTCN-3 and Eclipse TITAN for testing protocol stacks

- セッション個別URL: https://netdevconf.info/2.2/session.html?welte-ttcn3-talk
- Track: Talk
- 日時: 2017-11-09 13:30 - 14:15, Talk

### Description

TTCN-3 is a domain specific language developed specifically for testing
  protocol stacks.  It originates in ITU and is now maintained in ETSI.
  Since the open source release of the Ericsson TTCN-3 compiler as Eclipse
  TITAN, we can use a Free Software toolchain to develop test suites in
  this language.  While used for decades in the ITU/ETSI telecom world,
  TTCN-3 has recently seen adoption in other areas.  Comprehensive test
  suites are published in source form for IPv6, SIP, WiMax, DIAMETER as
  well as ePassports.



This talk introduces key aspects of the TTCN-3 language and what it
  makes particularly well-suited for protocol testing.  It also introduces
  the Eclipse TITAN compiler and toolchain, as well as some real-world
  examples on how TTCN-3 can be used to test protocol stacks, together
  with integration into continuous integration via Jenkins.

### 添付資料URL

- [slides](https://netdevconf.info/2.2/slides/welte-ttcn3-talk.pdf)（file）
- [paper](https://netdevconf.info/2.2/papers/welte-ttcn3-talk.pdf)（file）
- [video](https://youtu.be/GSosAKreMBI)（link）

<a id="session-waskiewicz-xdpacceleration-talk"></a>
## 17. Accelerating XDP programs using HW-based hints

- セッション個別URL: https://netdevconf.info/2.2/session.html?waskiewicz-xdpacceleration-talk
- Track: Talk
- 日時: 2017-11-09 15:45 - 16:30, Talk

### Description

As XDP workloads continue to evolve, they are becoming more complex.
  They can parse deeper into a packet to make more complex decisions, plus
  they may compute more complex hashing or other CPU-intensive operations
  to make flow-based decisions.



This talk will focus on immediate efforts to extend the XDP framework to
  pass HW-based hints that have been computed by the underlying network
  device.  The intent is to build a framework that is vendor agnostic, so
  XDP programs don't need to comprehend the underlying device they're
  running against.  We also intend to share any performance increases on
  these certain workloads, showing the benefit of using HW hints.



To wrap up, the talk would like to generate discussion on a common
  interface between eBPF programs and underlying drivers to program what
  HW hints to actually compute and send to XDP and the eBPF core.  This
  would include programmability, along with defining a standardized list
  of protocol id’s, so HW and eBPF programs are fully aligned with data
  being shared between them.

### 添付資料URL

- [slides](https://netdevconf.info/2.2/slides/waskiewicz-xdpacceleration-talk.pdf)（file）
- [paper](https://netdevconf.info/2.2/papers/waskiewicz-xdpacceleration-talk.pdf)（file）
- [video](https://youtu.be/uD1_oAHpUmU)（link）

<a id="session-karlsson-afpacket-talk"></a>
## 18. AF_PACKET V4 and PACKET_ZEROCOPY

- セッション個別URL: https://netdevconf.info/2.2/session.html?karlsson-afpacket-talk
- Track: Talk
- 日時: 2017-11-09 11:00 - 12:00, Talk

### Description

In this talk, the RFC of AF_PACKET V4 and PACKET_ZEROCOPY is presented
  and discussed. AF_PACKET V4 is a proposed new interface optimized for
  high performance packet processing. The interface supports zero-copy
  semantics, to remove expensive memcpy operations, as well as optimized
  memcpy semantics to support cases where hardware cannot support
  zero-copy. When a V4 socket is created without the PACKET_ZEROCOPY
  option, each packet is sent to the Linux stack and a copy of it is
  sent to user space, so V4 behaves in the same way as V2 and V3.



We then introduce a new optional setsockopt called PACKET_ZEROCOPY,
  enabling zero-copy and zero syscall semantics on the socket, while
  still maintaining Linux security and isolation properties. This is
  achieved by mapping the NIC packet buffers into the user space process
  memory space, but the HW descriptors are only mapped to kernel
  space. User space only sees HW-agnostic virtual descriptors and it is
  the kernel's responsibility to translate between the virtual user
  space descriptors and HW descriptors. By default in this mode, a
  packet destined for this socket goes only to user space. Any packet
  destined for the kernel stack is copied out of the packet buffer (not
  zero-copy anymore) or filtered out by the NIC (still zero-copy) to
  another ring even before it gets to the user space packet buffer. This
  way user space cannot manipulate or see kernel data. The packet
  destination is determined by programming flow director with tc or RSS
  with ethtool. With some possible future extensions, XDP is also a
  great, flexible candidate for determining destination.



The approach provides a performance increase of one to two orders of
  magnitude for some microbenchmarks compared to previous AF_PACKET
  versions. We will also have some initial case studies from commercial
  application vendors. To illustrate the approach, we have implemented
  support on i40e NICs and veth, but it should hopefully be easy to port
  to other NICs and virtual devices too. The approach plugs into the
  existing XDP infrastructure even when PACKET_ZEROCOPY is enabled. XDP
  programs will be executed on a supplied page from the V4 packet buffer
  and XDP_PASS passes a packet to the V4 user-space packet buffer
  without any copies, when a packet is destined for a V4 process with
  PACKET_ZEROCOPY enabled.

### 添付資料URL

- [slides](https://netdevconf.info/2.2/slides/karlsson-afpacket-talk.pdf)（file）
- [paper](https://netdevconf.info/2.2/papers/karlsson-afpacket-talk.pdf)（file）
- [video](https://youtu.be/RSFX7z1qF2g)（link）

<a id="session-kuhlewind-accecn-talk"></a>
## 19. State of ECN and improving congestion feedback with AccECN in Linux

- セッション個別URL: https://netdevconf.info/2.2/session.html?kuhlewind-accecn-talk
- Track: Talk
- 日時: 2017-11-10 15:45 - 16:15, Talk

### Description

Explicit Congestion Notification (ECN) is a TCP extension that allows networks to mark packets when congested instead of dropping them. While ECN provides a clear benefit by avoiding packet loss and subsequent retransmission delays, ECN was never widely deployed due to initial problems with network notes/home routers that would react incorrectly to ECN markings due to implementation errors. These initial problems were overcome and Apple announced in June 2016 that iOS and macOS devices would begin probabilistic attempts to negotiate ECN by default on the client side [1]. While they actually detected some additional deployment problems, leading to reordering or limited throughput with a small number of operators during their beta testing, these operators fixed their networks and no further problems were reported from Apple since.



In addition to the benefits provided by the ECN base extension, there is currently the More Accurate ECN (AccECN) extension under development in the IETF [2], providing more fine grained congestion feedback to the sender. AccECN introduces a new negotiation scheme that both endpoints have to support and changes the feedback format of the receiver to provide the exact number of markings observed to the sender, rather than just providing one indication of congestion per RTT. The sender can use this information as input for advanced and more scalable congestion control that reacts more gradually to the congestion level on the path. One example of such an congestion control, for data center environments, is Data Center TCP (DCTCP) [3]. One of the reasons that DCTCP can only be used in data centers is that there is no negotiation phase in DCTCP that ensures that both ends support the needed ECN feedback format. AccECN addresses this problem and can be easily integrated with DCTCP. Further, there are other current efforts in the IETF [4] that target deployment of more scalable congestion control in the Internet and would also require the more accurate feedback information provided by AccECN.



The AccECN development is basically completed in the IETF, facing the last processing steps before publication, and a proof-of-concept Linux implementation exists [5]. This talk presents AccECN as a proposal for integration in the Linux kernel and aims to foster a discussion on activating ECN by default on the client side, similar as already deployed by Apple, enabling ECN for a proportion of all connections together with careful monitoring and potentially error detection/fallback.

### 添付資料URL

- [slides](https://netdevconf.info/2.2/slides/kuhlewind-accecn-talk.pdf)（file）
- [video](https://youtu.be/CVvKWSGx3fc)（link）

<a id="session-tazaki-mptcp-talk"></a>
## 20. Network stack personality in Android phone

- セッション個別URL: https://netdevconf.info/2.2/session.html?tazaki-mptcp-talk
- Track: Talk
- 日時: 2017-11-08 10:15 - 10:45, Talk

### Description

Operating systems for mobile devices have always tried to find a
  trade-off between performance, security and power consumption. Android
  is actively the most popular smartphone OS, running more than 2
  billion devices, but while the Linux kernel used by Android benefits
  from the wide range of hardware devices it supports, its monolithic
  architectural design inserts some key limitations in resource
  efficiency, updates delivery (patches - even critical security -
  inconsistently reaching end devices) and fragmentation.



Linux Kernel Library (LKL) is an open source project that allows us to
  reuse kernel code in userspace in a modular approach. While running
  networking operations in userspace is an old concept, its benefits on
  mobile devices could be major, taking in consideration the OS's fast
  development cycle. Using LKL, we are able to introduce kernel
  extensions easier, independently of the hardware platform we run onto,
  which is of a significant importance for networking and protocol
  extensions.



A good example is the adoption of Multipath TCP (MPTCP), which runs as
  a TCP extension and has shown important throughput increase by using
  multiple paths, especially on smartphones, where we benefit from both
  cellular and WiFi connections. Vendors have started deploying it, but
  the process is very heavy since they need to change the kernel of the
  host in order to use the new features. Another example is represented
  by congestion control algorithms, where legacy control mechanisms fail
  to apply due to the limited resources found on smartphones.



We present our efforts to extending LKL on Android. We run MPTCP over
  LKL in order to demonstrate that it is easy to add kernel extensions
  by taking advantage of the networking stack personality feature
  imposed by the library.  We plan to present our experimental results
  on achieved goodput and processor utilization in both native kernel
  and LKL under various environment conditions, and hopefully have a
  demonstration.

### 添付資料URL

- [slides](https://netdevconf.info/2.2/slides/tazaki-mptcp-talk.pdf)（file）
- [paper](https://netdevconf.info/2.2/papers/tazaki-mptcp-talk.pdf)（file）
- [video](https://youtu.be/oxgoKKjM5c0)（link）

<a id="session-jorgensen-wifistack-talk"></a>
## 21. Bufferbloat mitigation in the WiFi stack - status and next steps

- セッション個別URL: https://netdevconf.info/2.2/session.html?jorgensen-wifistack-talk
- Track: Talk
- 日時: 2017-11-10 13:00 - 13:45, Talk

### Description

Over the last year, patches for bufferbloat mitigation and airtime
  fairness have landed in the WiFi stack. The bufferbloat patches improve
  performance across the board, and airtime fairness further improves
  performance in the presence of slow stations. In this talk I will go
  over these improvements and explain the rationale behind them (such as
  why it was necessary to replace the qdisc with a new internal queueing
  structure in the WiFi stack), as well as the current status of the
  implementation.



Following this overview, I will talk about some of the proposed next
  steps in this line of work. This includes a proposal for a mechanism to
  set different policies for the airtime usage of stations, as well as a
  revamped queueing mechanism for smarter QoS priority scheduling.

### 添付資料URL

- [slides](https://netdevconf.info/2.2/slides/jorgensen-wifistack-talk.pdf)（file）
- [paper](https://netdevconf.info/2.2/papers/jorgensen-wifistack-talk.pdf)（file）
- [video](https://youtu.be/sZ-l_nBX1VQ)（link）

<a id="session-aring-arachne-talk"></a>
## 22. Arachne: Large Scale Data Centre SDN Testing

- セッション個別URL: https://netdevconf.info/2.2/session.html?aring-arachne-talk
- Track: Talk
- 日時: 2017-11-08 13:30 - 14:15, Talk

### Description

Current state of the art in modern Data Centre structure makes
  use of multi-stage switching known as a Clos Network. One advantage
  of a Clos network is it allows for modularity in scaling upgrades.
  A properly designed Clos network can be upgraded by adding more
  racks or PODs(Point of Delivery) level without any need for
  re-arranging the existing connections.



Control of the datapath and other resources in a Clos Network is
  typically constructed using SDN. A classical SDN setup includes one
  or more software daemons/agents that run on the control and
  resource path.



To test scale and robustness of a large SDN deployment
  requires a large investment in a lot of real switch and
  server equipment.  Alternatively, one could reduce the amount of
  equipment needed by using a VM based setup such as [1].
  For a scale where we need to test 10s of thousands of nodes, using
  VMs is still a very expensive proposition. Naturally our
  struggle led us to look at containers.
  We looked at alternative container-based approaches and concluded
  the complexity in adjusting them for our needs would be more work
  and larger maintenance effort.



In this talk we will describe Arachne, a basic SDN test tool, which
  uses basic linux namespaces.
  A Linux bridge is created within a Linux net namespace container
  to emulate either of spine and leaf switches; and basic net namespaces
  are created to emulate end hosts residing within a data centre rack.



Our focus is to test the scaling of the control-to-resource path
  domain and not necessarily the scale of datapath traffic.



Arachne takes as its input a Clos Network description. A dot file is generated
  by Arachne to describe the topology. The dot file is then consumed
  to construct a Data Centre POD using basic tools such as iproute2.



We will describe Arachne, the challenges we faced during its creation
  from a networking perspective as well as kernel level issues
  we had to overcome.



We plan to open source this tool at netdev 2.2

### 添付資料URL

- [slides](https://netdevconf.info/2.2/slides/aring-arachne-talk.pdf)（file）
- [paper](https://netdevconf.info/2.2/papers/aring-arachne-talk.pdf)（file）
- [video](https://youtu.be/JJbnCrqtp8M)（link）

<a id="session-pismenny-tlscrypto-talk"></a>
## 23. TLS Receive Side Crypto Oﬄoad

- セッション個別URL: https://netdevconf.info/2.2/session.html?pismenny-tlscrypto-talk
- Track: Talk
- 日時: 2017-11-08 13:00 - 13:30, Talk

### Description

Internet encryption is becoming ubiquitous, spearheaded by the Transport Layer
  Socket (TLS) protocol. TLS provides the advantages of data confidentiality and
  integrity. However, it increases CPU utilization significantly.



In the past, we have presented crypto offload for TLS transmission on network
  devices, which allows systems to offload the data-path encryption and
  authentication of TLS to hardware without modifying TCP.



In this talk we present the challenges of TLS receive side crypto offload, such
  as reordering and packet loss. Similarly to transmission, our goal is to assist
  the kernel with offloading the compute-intensive cypto tasks while leaving TCP
  processing unmodified. We present a design and implementation of a solution that
  addresses these problems. We evaluate the performance of full TLS offload from
  several aspects.

### 添付資料URL

- [slides](https://netdevconf.info/2.2/slides/pismenny-tlscrypto-talk.pptx)（file）
- [paper](https://netdevconf.info/2.2/papers/pismenny-tlscrypto-talk.pdf)（file）
- [video](https://youtu.be/ZsBrNsKrAag)（link）

<a id="session-westphal-rtnlmutex-talk"></a>
## 24. RTNL mutex, the network stack big kernel lock

- セッション個別URL: https://netdevconf.info/2.2/session.html?westphal-rtnlmutex-talk
- Track: Talk
- 日時: 2017-11-08 14:15 - 14:45, Talk

### Description

The so-called RTNL mutex is used to serialize rtnetlink requests.
  rtnetlink is a netlink subsystem used to inspect or change networking
  related configuration.



Types of rtnetlink requests range from changing link state,
  adding/removing ipv4 or ipv6 addresses and routes to qdiscs and
  traffic classifiers.



The widespread use of the RTNL mutex in all major network configuration
  paths is a growing pain point, f.e. a task adding an ip address prevents
  another from from seemingly unrelated tasks such as dumping tc classifiers.
  Furthermore, some code paths can hold the rtnl mutex for very long times
  (in the order of several hundreds of milliseconds in some cases).



Since 4.14 kernel there is basic infrastructure in place to elide the rtnl
  mutex for some operations.



This talk dives into the history of the rtnl mutex, explains why its widely
  used, and discusses needed steps to further reduce rtnl mutex usage in the
  kernel with the goal to improve concurreny and reduce latencies.

### 添付資料URL

- [slides](https://netdevconf.info/2.2/slides/westphal-rtnlmutex-talk.pdf)（file）
- [paper](https://netdevconf.info/2.2/papers/westphal-rtnlmutex-talk.pdf)（file）
- [video](https://youtu.be/M6RiQGNz4HE)（link）

<a id="session-hemminger-XNetem-talk"></a>
## 25. XDP + Netem = XNetem

- セッション個別URL: https://netdevconf.info/2.2/session.html?hemminger-XNetem-talk
- Track: Talk
- 日時: 2017-11-08 11:00 - 12:00, Talk

### Description

One of the network testing tools in Linux is netem which provides
  ability to simulate network impairments such as delay, loss, and
  corruption. XNetem is a new version which used the Linux kernel XDP
  facility to implement network impairments using eBPF. Original netem
  performance was limited by Linux kernel. By evolving to use XDP, netem
  is able to scale to higher bandwidths such as 10Gbit.
  Implementing XNetem stretches the limits of what is possible
  with current XDP infrastructure. This talk will also talk about
  tradeoff's and potential upstream problems.

### 添付資料URL

- [slides](https://netdevconf.info/2.2/slides/hemminger-XNetem-talk.pdf)（file）
- [paper](https://netdevconf.info/2.2/papers/hemminger-XNetem-talk.pdf)（file）
- [video](https://youtu.be/RY6mzwHUKCA)（link）

<a id="session-honda-extendlinuxstack-talk"></a>
## 26. Extending Linux network stack for persistent memory

- セッション個別URL: https://netdevconf.info/2.2/session.html?honda-extendlinuxstack-talk
- Track: Talk
- 日時: 2017-11-10 16:15 - 16:45, Talk

### Description

The socket API was designed to be analogous to disk I/O API, implementing
  read(), write() and splice() and so on. It is now evolving towards being more
  optimized for message-oriented workloads, which we have seen in recent patches
  like KCM, MSG_ZEROCOPY, etc.



Persistent Memory (PM) devices, also known as NVDIMM as well as storage-class
  memory (SCM), are becoming more common; the interaction of such storage I/O to
  networking presents new challenges and opportunities for new abstractions on the
  network stack. With existing APIs, for example, when a server receives data to
  be durably stored from a client over the network, it must 1.) read data from the
  network stack, 2.) copy it to a file, then 3.) fsync(), msync() or clflush to
  physically flush the data, often before acknowledging to the client. There was
  nothing else someone could do with networking side because the latency of
  disks/SSDs totally dominated the end-to-end latency. The game changes when PMs
  are used in place of SSDs/disks: The overhead of the latency is now dominated by
  end-to-end networking latency.



To address this problem, we introduce PASTE, a network stack design for
  persistent memory which replace buffer management and APIs. PASTE directly
  DMA-writes receiving data into a PM region which is organized by DAX-enabled
  file system, has TCP/IP process the packets, and lets applications read and
  flush data without data copy. We show its performance improvements as well as
  implementation details.

### 添付資料URL

- [slides](https://netdevconf.info/2.2/slides/honda-extendlinuxstack-talk.pdf)（file）
- [video](https://youtu.be/mAmEwm21e9Q)（link）

<a id="session-ayuso-netfilter-workshop"></a>
## 27. Netf‌ilter mini-workshop

- セッション個別URL: https://netdevconf.info/2.2/session.html?ayuso-netfilter-workshop
- Track: Workshop
- 日時: 2017-11-08 15:00 - 16:15, Workshop

### Description

Netfilter is the community-driven FOSS software project,
  launched in 1998, that provides firewalling tools for the Linux
  kernel. This mini-workshop will make summary of our annual meeting
  that took place in Faro, Portugal in July 2017. This spot will also
  leave room to discuss recent Netfilter updates and to detail ongoing
  development efforts, with specific focus on nf_tables.

### 添付資料URL

- [slides](https://netdevconf.info/2.2/slides/ayuso-netfilter-workshop.pdf)（file）
- [video](https://youtu.be/iCj10vEKPrw)（link）

<a id="session-berg-wireless-workshop"></a>
## 28. Wireless Workshop

- セッション個別URL: https://netdevconf.info/2.2/session.html?berg-wireless-workshop
- Track: Workshop
- 日時: 2017-11-09 10:00 - 17:00, Workshop

### Description

The wireless workshop will bring together the core wireless maintainers, developers and other
  interested people to discuss current topics in Linuxwireless.

### 添付資料URL

- [slides](https://netdevconf.info/2.2/slides/berg-wireless-workshop.pdf)（file）
- [video](https://youtu.be/WHnvkdf8TOs)（link）

<a id="session-klassert-ipsec-workshop"></a>
## 29. IPsec Workshop

- セッション個別URL: https://netdevconf.info/2.2/session.html?klassert-ipsec-workshop
- Track: Workshop
- 日時: 2017-11-08 10:15 - 12:00, Workshop

### Description

We have the following (tentative) speakers and topics:
  


    Steffen Klassert:
      
Presentation: The IPsec status update.
      
Discussion: Redesigning the IPsec VTI interfaces.



    Donald Skidmore:
      
Presentation: The intel implementation of the IPsec offload support.
      
Discussion: Virtualization with IPsec offload, IPsec offload with OVS



    Boris Pismenny:
      
Presentation: Describe trailer removal, Describe ESN, show performance numbers.
      
Discussion: Full device terminated IPsec offload, software fallback problems common
      to TLS and IPsec, auth failure using decrypted packet vs. plaintext packet



    Sowmini Varadhan:
      
Presentation: IPsec offload status update for Intel Niantic

### 添付資料URL

- [slides 1](https://netdevconf.info/2.2/slides/klassert_ipsec_workshop01.pdf)（file）
- [slides 2](https://netdevconf.info/2.2/slides/klassert_ipsec_workshop02.pdf)（file）
- [slides 3](https://netdevconf.info/2.2/slides/klassert_ipsec_workshop03.pdf)（file）
- [slides 4](https://netdevconf.info/2.2/slides/klassert_ipsec_workshop04.pptx)（file）
- [video](https://youtu.be/AOEpCRsBTIo)（link）

<a id="session-salim-tc-workshop"></a>
## 30. TC Workshop

- セッション個別URL: https://netdevconf.info/2.2/session.html?salim-tc-workshop
- Track: Workshop
- 日時: 2017-11-10 13:00 - 16:15, Workshop

### Description

Face to Face discussions on different Traffic Control
  topics. Current WAG agenda (subject to update):
  


     New tc feature offloads since netdev 2.1 


     New features requests/improvements 


     Performance

### 添付資料URL

- [slides 1](https://netdevconf.info/2.2/slides/salim-tc-workshop01.pdf)（file）
- [slides 2](https://netdevconf.info/2.2/slides/salim-tc-workshop02.pdf)（file）
- [slides 3](https://netdevconf.info/2.2/slides/salim-tc-workshop03.pdf)（file）
- [slides 4](https://netdevconf.info/2.2/slides/salim-tc-workshop04.pdf)（file）
- [slides 5](https://netdevconf.info/2.2/slides/salim-tc-workshop05.pdf)（file）
- [slides 6](https://netdevconf.info/2.2/slides/salim-tc-workshop06.pdf)（file）
- [slides 7](https://netdevconf.info/2.2/slides/salim-tc-workshop07.pdf)（file）
- [slides 8](https://netdevconf.info/2.2/slides/salim-tc-workshop08.pdf)（file）
- [slides 9](https://netdevconf.info/2.2/slides/salim-tc-workshop09.pdf)（file）
- [slides 10](https://netdevconf.info/2.2/slides/salim-tc-workshop10.pdf)（file）
- [video](https://youtu.be/1ZskZfIjEUs)（link）

<a id="session-gospodarek-xdp-workshop"></a>
## 31. XDP for the Rest of Us

- セッション個別URL: https://netdevconf.info/2.2/session.html?gospodarek-xdp-workshop
- Track: Workshop
- 日時: 2017-11-08 15:45 - 16:15, Workshop

### Description

XDP (eXpress Data Path) has been one of the most widely discussed
  topics for the last few netdev conferences.  XDP is the Linux
  kernels answer to operating at the same speeds as kernel bypass
  solutions like DPDK.  The typical use-case discussed for XDP is a
  large datacenter or clustered environment, but XDP is obviously not
  limited to those workloads.  Since support for XDP now appears in
  multiple network drivers (with more patches landing between the time
  of this writing and the conference date) and is available on x86 and
  arm64 architectures, there now exists the possibility to allow a
  greater number of systems to benefit from this technology.




  This workshop will reprise NetDev 2.1's Tutorial with the same topic by same speakers.




  Learning to use XDP can feel like a fairly steep learning curve, but
  the goal of this workshop is to make this process clear to kernel
  developers, sysadmins, or anyone with DevOps responsibilities.

### 添付資料URL

- [slides](https://netdevconf.info/2.2/slides/gospodarek-xdp-workshop.pdf)（file）
- [video](https://youtu.be/mGjz3lPgt8I)（link）

<a id="session-kim-devicemgmt-tutorial"></a>
## 32. Linux networking on network switch

- セッション個別URL: https://netdevconf.info/2.2/session.html?kim-devicemgmt-tutorial
- Track: Talk
- 日時: 2017-11-10 10:00 - 10:45, Talk

### Description

Currently linux networking technolgy is widely used on network device such as Network switches & routers.
  In this tutorial, I'll cover the examples how to use linux networking features on network devices and install & configure
  opensource 3rd party linux software packages to leverage vendor's network devices's functionality.
  And I'll give an exmaples how to use NETCONF & RESTCONF for network device management.

### 添付資料URL

- [slides](https://netdevconf.info/2.2/slides/kim-devicemgmt-tutorial.pptx)（file）
- [video](https://youtu.be/AJN2uLmQ_hI)（link）

<a id="session-prabhu-linuxbridge-tutorial"></a>
## 33. Linux bridge, Layer-2 gateways and Ethernet VPN’s!

- セッション個別URL: https://netdevconf.info/2.2/session.html?prabhu-linuxbridge-tutorial
- Track: Talk
- 日時: 2017-11-10 13:45 - 14:45, Tutorial

### Description

The Linux kernel bridge is being deployed at the center of many L2
  technologies in the data center today. It is complete in its feature
  set with forwarding, learning and snooping functions. It can extend L2
  Vlan based switched network on top of a L3 routed network and
  participate in L2 VPN’s. With recent standardization of EVPN (ethernet
  VPN), we now have a standard way to learn and distribute mac addresses
  across overlays via BGP as the control plane. In this tutorial we will
  look at deploying these L2 gateways and ethernet VPN technologies with
  Linux bridge and various tunneling technologies in the Linux kernel.
  We will look at deployment scenarios, troubleshooting such networks
  and also hardware accelerating such deployments.

### 添付資料URL

- [slides](https://netdevconf.info/2.2/slides/prabhu-linuxbridge-tutorial.pdf)（file）
- [video](https://youtu.be/OXqJnqH7ZTU)（link）

<a id="session-gerlitz-sriov-bof"></a>
## 34. Status, Open Issues and Extensions for switchdev SR-IOV mode

- セッション個別URL: https://netdevconf.info/2.2/session.html?gerlitz-sriov-bof
- Track: BoF
- 日時: 2017-11-08 14:15 - 14:45, BoF

### Description

When using the switchdev SR-IOV mode for Ethernet drivers, NIC hardware
  e-switch programming is done as an offload for the kernel software
  data-path. The concept uses VF port representor netdevs which allow for
  standard slow path TX and RX, and an NDO to facilitate offload of TC
  match/action flows to hardware.



The switchDev SR-IOV mode was introduced in v4.8 of the kernel for the mlx5
  driver and since then support for it has been added to the nfp and bnxtdrivers.



In this BoF we will review what use-cases are currently supported upstream
  for flow offloading. We will discuss where better alignment between the
  different implementations can take place including:
  

- The port model for CPU and physical ports
  - Representor netdev naming conventions

We will also discuss possible extensions to cover more use cases, among them:
  

- e-switch HA/LAG model challenges
  - L2 FDB virtual switch offload
  - L3 FIB virtual router offload
  - Scalability/applicability for switching container networking

### 添付資料URL

- [slides](https://netdevconf.info/2.2/slides/gerlitz-sriov-bof.pdf)（file）
- [video](https://youtu.be/Thx31C-V-CU)（link）

## 個別ページのない補足枠

### Openning Session (video)

個別URL: 掲載なし

日時: 2017-11-08 9:00 - 9:30 / LOCATION: 14F

Description: 掲載なし

添付資料:

- [video](https://www.youtube.com/watch?v=76tNho043DI)

### TBD

個別URL: 掲載なし

日時: 2017-11-08 13:00 - 13:30, Talk / LOCATION: 5F

Description: 掲載なし

添付資料:

掲載なし

### Good Morning

個別URL: 掲載なし

日時: 2017-11-09 9:00 - 9:15 / LOCATION: 14F

Description: 掲載なし

添付資料:

掲載なし

### Good Morning

個別URL: 掲載なし

日時: 2017-11-10 9:00 - 9:15 / LOCATION: 14F

Description: 掲載なし

添付資料:

掲載なし

### Closing

個別URL: 掲載なし

日時: 2017-11-10 16:45 - 17:15 / LOCATION: 14F

Description: 掲載なし

添付資料:

- [Closing](https://netdevconf.info/2.2/slides/netdev22-closing.pdf)

### Wireless Workshop Status Update (video)

個別URL: 掲載なし

日時: 2017-11-10 11:00 - 12:00, Talk / LOCATION: 5F

Description: 掲載なし

添付資料:

- [Wireless Workshop Status Update](https://netdevconf.info/2.2/slides/berg-wireless-workshop.pdf)
- [video](https://www.youtube.com/watch?v=WHnvkdf8TOs)

### Lightning Talks (video)

個別URL: 掲載なし

日時: 2017-11-10 16:15 - 16:45, Talk / LOCATION: 5F

Description: 掲載なし

添付資料:

- [video](https://www.youtube.com/watch?v=NE9j74M0P7w)

## 共通資料

- [slides](https://netdevconf.info/2.2/slides/netdev22slides.tgz)
- [papers](https://netdevconf.info/2.2/papers/netdev22papers.tgz)
- [NetDev 2.2 videos playlist](https://www.youtube.com/playlist?list=PLrninrcyMo3K-lAKSMzbjD2P5u2dDzUxI)

## 出典

- https://netdevconf.info/2.2/accepted-sessions.html
- https://netdevconf.info/2.2/schedule.html
- https://netdevconf.info/2.2/slides/
- https://netdevconf.info/2.2/papers/
