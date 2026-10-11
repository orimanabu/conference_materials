# Netdev 2.1 全セッション一覧

出典: https://netdevconf.info/2.1/accepted-sessions.html

Sessions一覧の全30個別URLを収録（Opening・Closingを含む）。JavaScriptで読み込むloadsessionsのHTML断片からTitle・Description原文を抽出。相対リンクは表示ページを基準に絶対URL化。XDP Mythbusters・Opening・ClosingはDescription欄が空であり、説明の補完は行わず掲載なしとして保持。Scheduleの29個別URLを照合し、Openingにはリンク付きスケジュール枠がないことを記録。Contentsの資料URLに加え、slides/apr6・apr7・apr8、Workshopサブディレクトリ、papersの公開ファイルを照合し、別版・編集用ファイル・図版・動画を追加。netdev.pdfはPDF表題を確認してMSG_ZEROCOPYへ対応付け。添付資料の網羅的な本体取得・リンク有効性検査は未実施。

セッション: 30件 / Descriptionあり: 27件 / 資料あり: 30件 / 資料項目: 107件

## 目次

1. [Evaluating and improving kernel stack performance for datagram sockets from the perspective of RDBMS applications](#session-varadhan_dave)
2. [Distributed Switch Architecture](#session-lunn_didelot_fainelli)
3. [What's in a name?](#session-hemminger)
4. [Playing BBR with a userspace network stack](#session-tazaki)
5. [XDP in practice: integrating XDP in our DDoS mitigation pipeline](#session-bertin)
6. [Netfilters connection tracking subsystem](#session-westphal)
7. [IOT Without Things: Building virtual 6LoWPAN Mesh Networks](#session-aring)
8. [Kernel HTTP/TCP/IP stack for HTTP DDoS mitigation](#session-krizhanovsky)
9. [OVS without OVS](#session-stringer)
10. [Overlapping Ring Neighbor Monitoring Algorithm in 1000-node Clusters](#session-maloy)
11. [Busypolling next generation](#session-dumazet)
12. [Network Testing with Netesto](#session-brakmo)
13. [Story of Network Virtualization and its future in Software and Hardware.](#session-jain)
14. [Driving Linux TCP Congestion Control algorithms around the LTE network Highway](#session-chung)
15. [Droplet: DDoS countermeasures powered by BPF + XDP](#session-zhou)
16. [Investigating Linux Network Behaviour Using Open-Source Network Emulators](#session-linkletter)
17. [sendmsg copy avoidance with MSG_ZEROCOPY](#session-debruijn)
18. [Increasing reliability in data center network configuration](#session-davis)
19. [Introduction to pipeline debug (dpipe)](#session-sharshevsky)
20. [Real-time IoT networking on the Internet](#session-herbert)
21. [IoT related MAC layers, header compression and routing protocols](#session-schmidt)
22. [Network Performance Workshop](#session-duyck)
23. [Traffic Control Workshop](#session-hadisalim)
24. [Netfilter Mini-Workshop](#session-ayuso)
25. [XDP for the Rest of Us](#session-gospodarek)
26. [XDP Mythbusters](#session-miller)
27. [Journey into Enterprise Networking with Linux](#session-mukherjee)
28. [Linux and the Network](#session-brandeburg)
29. [Opening](#session-opening)
30. [Closing Ceremony](#session-closing)

<a id="session-varadhan_dave"></a>
## 1. Evaluating and improving kernel stack performance for datagram sockets from the perspective of RDBMS applications

- セッション個別URL: https://netdevconf.info/2.1/session.html?varadhan_dave
- Track: Talk
- 日時: 2017-04-06 15:50 - 16:20, Talk

### Description

RDBMS applications heavily use stateless datagram sockets such as RDS
and UDP. These workloads  are typically highly CPU-bound and sensitive
to network latency, so any perf improvements to these parameters is extremely
desirable.



At the same time, since I/O for these RDBMS  applications comes
from various sources (network, disk, local file-system and NFS),
APIs for perf enhancements is also a critical factor.



Motivated by these goals and constraints, we have investigated a few
kernel alternatives to UDP/IP, such as PF_PACKET.  We have used
micro-benchmarks such as netperf, and are currently evaluating PF_PACKET
usage in IPC libraries for actual transaction-oriented RDBMS workloads.



We would like to share some of the findings from these experiments with
the netdev community. In addition to the actual numbers themselves,
interesting points that we'd like to discuss are the gaps between
micro-benchmarks and real-world usage, what works well (and what
doesn't matter so much) for real workloads, and practical factors
that impact deployment for any solution.



This is active work-in-progress, and some of our findings suggest areas
of perf-improvement in the kernel for various datagram sockets
that we'd like to bounce off netdev-ers for input.

### 添付資料URL

- [slides](https://netdevconf.info/2.1/slides/apr6/varadhan-rdbms-perf.pdf)（file）
- [paper](https://netdevconf.info/2.1/papers/rdbms-perf.pdf)（file）
- [video](https://youtu.be/JFvuJySDZdk)（link）

<a id="session-lunn_didelot_fainelli"></a>
## 2. Distributed Switch Architecture

- セッション個別URL: https://netdevconf.info/2.1/session.html?lunn_didelot_fainelli
- Track: Talk
- 日時: 2017-04-06 16:25 - 16:55, Talk

### Description

The Distributed Switch Architecture was first introduced to Linux
nearly 10 years ago and after being mostly quiet for 6 years, it
recently got actively worked on again by a group of tenacious contributors.



In this presentation, we will cover its design goals and paradigms and
why they make it a good fit for supporting small home/office routers and
switches. We will also cover the work that was done over the past 4
years, the relationship with switchdev and the networking stack, and
finally give a heads-up on the upcoming developments to be expected.

### 添付資料URL

- [slides](https://netdevconf.info/2.1/slides/apr6/lunn-dsa-netdev-2.1.pdf)（file）
- [video](https://youtu.be/EK5ZmQOYSpM)（link）
- [paper](https://netdevconf.info/2.1/papers/distributed-switch-architecture.pdf)（file）
- [dsa-netdev-2.1.pdf](https://netdevconf.info/2.1/slides/apr6/dsa-netdev-2.1.pdf)（file）

<a id="session-hemminger"></a>
## 3. What's in a name?

- セッション個別URL: https://netdevconf.info/2.1/session.html?hemminger
- Track: Talk
- 日時: 2017-04-06 8:45 - 9:15, Talk

### Description

Network device names have existed from the earliest days of Unix
networking and their usage has evolved. This talk is a look at some of
the issues with network device names. kernel developers often think the
problem is a userspace issue and nothing can be done but the names are
a key part of the existing ABI.



In the talk, I will cover how the choice of naming policy interacts
with applications and cloud environments, what current expectations
are, and how this interacts with cloud infrastructure. There is no
solution but there are several things that can be done to improve
the user experience. Will also give examples including Amazon, Azure,
  Google Compute as well as other non-Linux environments.

### 添付資料URL

- [slides](https://netdevconf.info/2.1/slides/apr6/hemminger-Eth0.odp)（file）
- [video](https://youtu.be/1SUnpH5Mt4s)（link）
- [paper](https://netdevconf.info/2.1/papers/netdevconf-eth0.pdf)（file）

<a id="session-tazaki"></a>
## 4. Playing BBR with a userspace network stack

- セッション個別URL: https://netdevconf.info/2.1/session.html?tazaki
- Track: Talk
- 日時: 2017-04-07 9:55 - 10:25, Talk

### Description

Linux kernel library (LKL) is aimed to run Linux kernel code upon
        different environment such as Linux userspace, Windows userspace,
        hypervisors, etc.  With the userspace deployments, an application can
        benefit new additional features such as TCP extensions without
        involving the update of host kernel.



        This characteristic of network stack personality is useful since we
        don't have to instantiate a virtual machine instance to use a new
        feature of network stack (e.g., a TCP extension).  Instead, we just
        need a single (userspace) process to introduce new features.



        One concern of userspace network stack in general, and addressed by
        David Miller in the last netdev conference (in Tokyo), is the achieved
        timing accuracy in userspace which the important network feature such
        as packet pacing and transport protocols requires.



        In this talk, we're going to present our performance studies on this
        timing accuracy concern of a userspace network stack. We present the
        result of netperf benchmarks with a couple of congestion control
        algorithm of TCP, BBR and cubic with the LKL-ed netperf and ordinal
        netperf with Linux kernel.



        We're trying to reveal that what is the obstacle of LKL (userspace
        network stack) and what can be fixed to reach the performance goal of
        LKL (i.e., x1 performance of the original kernel network stack).

### 添付資料URL

- [slides](https://netdevconf.info/2.1/slides/apr7/netdev21-tazaki.pdf)（file）
- [video](https://youtu.be/ygsbhRrDwq0)（link）
- [paper](https://netdevconf.info/2.1/papers/netdev21-tazaki.pdf)（file）

<a id="session-bertin"></a>
## 5. XDP in practice: integrating XDP in our DDoS mitigation pipeline

- セッション個別URL: https://netdevconf.info/2.1/session.html?bertin
- Track: Talk
- 日時: 2017-04-06 10:55 - 11:25, Talk

### Description

This talk provides an introduction to how we are planning to integrate
	XDP into our DDoS mitigation pipeline at Cloudflare, which every day helps
	defend our infrastructure from thousands of different attacks, in the range of
	50-150 Gbps (with peaks of 500 Gbps).
      



      
	The main points of the presentation are:
      


      
	introduction to the current architecture: from how attack traffic is
	  sampled, to attack detection and mitigation, to how BPF fits in the
	  current pipeline
	


	
	  architecture changes we are expecting, and new tools required after we
	  move from our current network kernel bypass setup to XDP
	


	
	  issues and questions regarding the current state of XDP

### 添付資料URL

- [slides](https://netdevconf.info/2.1/slides/apr6/bertin_Netdev-XDP.pdf)（file）
- [video](https://youtu.be/7OuOukmuivg)（link）
- [paper](https://netdevconf.info/2.1/papers/Gilberto_Bertin_XDP_in_practice.pdf)（file）

<a id="session-westphal"></a>
## 6. Netfilters connection tracking subsystem

- セッション個別URL: https://netdevconf.info/2.1/session.html?westphal
- Track: Talk
- 日時: 2017-04-08 9:20 - 9:50, Talk

### Description

This talk will take a look at netfilters connection tracking, namely:




  data structures


  conntrack extensions (what are these, how are they used)


  NAT handling


  connection tracking helpers (ftp, sip etc)


  connection tracking events





  The second part of the talk will focus on conntrack
  overflow handling ('table full') under DoS/packet floods
  and how handling of such scenarios could be improved.

### 添付資料URL

- [slides](https://netdevconf.info/2.1/slides/apr8/florian_westphal_conntrack.pdf)（file）
- [video](https://youtu.be/mx2X9mZaZ5A)（link）
- [paper](https://netdevconf.info/2.1/papers/conntrack.pdf)（file）

<a id="session-aring"></a>
## 7. IOT Without Things: Building virtual 6LoWPAN Mesh Networks

- セッション個別URL: https://netdevconf.info/2.1/session.html?aring
- Track: Talk
- 日時: 2017-04-08 15:50 - 16:20, Talk

### Description

Operating IEEE 802.15.4 6LoWPAN IOT networks often requires to deal
  with lossy wireless connections. This often requires to run
  experimental work with IPV6 routing protocols e.g RPL etc. Such
  experimental work requires a physical environment which is difficult
  to create or expensive to setup.





  In this talk we describe our approach to create a virtual networking
  environment to address this challenge.
  We use the virtual IEEE 802.15.4 driver "fakelb" to emulate
  multiple virtual PHYs which can talk to each others.





  The fakelb driver is similar to the mac80211_hwsim driver and doesn't
  require any IEEE 802.15.4 hardware.





  In addition we provide a mechanism to create a mesh network topology
  where these virtual PHYs act as graph edges. Edges are modeled in the
  config as simple 2D-vectors each of which represents the connection between
  one PHY to another PHY. On top of each PHY you can run several 6LoWPAN
  interfaces separated by a network namespace (container).





  It is possible to use AF_PACKET to connect other IEEE 802.15.4
  Stacks(e.g RIOT-OS or OpenThread) to be part of the setup interacting
  with the Linux kernel IEEE 802.15.4 stack implementation.





  In addition to the described static configuration, it is possible to make
  runtime changes on the physical layer e.g. topology changes or
  manipulate link quality parameters on a per connection basis. Upper
  protocols like RPL need to react on these changes and offer new
  routing paths for your 6LoWPAN network. This talk will describe the
  current state of this work and how you can use it. If time permits, We
  will do a live demonstration of some RPL example where we create a
  mesh network with multiple nodes.

### 添付資料URL

- [slides](https://netdevconf.info/2.1/slides/apr8/aring_virtual_mesh.pdf)（file）
- [video](https://www.youtube.com/watch?v=iMYCaqHVmS0)（link）

<a id="session-krizhanovsky"></a>
## 8. Kernel HTTP/TCP/IP stack for HTTP DDoS mitigation

- セッション個別URL: https://netdevconf.info/2.1/session.html?krizhanovsky
- Track: Talk
- 日時: 2017-04-07 16:20 - 16:50, Talk

### Description

Application layer HTTP DDoS attacks are usually mitigated by HTTP
  accelerators or HTTP load balancers. However, the Linux socket
  interface doesn't provide reasonable performance for extreme loads
  caused by DDoS attacks.




  HTTP servers that are based on userland TCP/IP stacks are becoming
  popular because they provide better performance. However, it is
  worth noting that the TCP/IP stack is basically a huge
  and complex piece of code which took years to make robust; so it's
  not wise to implement in user space or run it twice (in  user and
  kernel spaces). The other advantage of the kernel TCP/IP stack is that
  is also well integrated with many powerful tools  like IPTables, IPVS,
  tc, tcpdump and many others. These tools are unavailable for a user
  space TCP/IP stack or require funky complex interfaces.




  This talk describes Tempesta FW [1] which introduces HTTPS processing
  to the kernel. HTTPS is built into Linux TCP/IP stack. As an HTTP
  firewall, Tempesta FW implements reach set of rate limits and
  heuristics to defend against HTTPS floods and Slow HTTP attacks. Also
  HTTP cookie challenge is implemented, JavaScript challenge and several
  other more advanced DDoS mitigation techniques are in development now.




  Due to the infamy of TLS handshake DDoS attacks, it makes sense to
  perform TLS handshake in the kernel to be able to establish TLS
  connections as soon as possible. While TLS is very complex code, it
  doesn't require complex locking, advanced memory management and so on.
  It only took 1 human month for us to move TLS [2] with all necessary
  HTTPS interfaces to the kernel. Thus, it's easier to move TLS to the
  kernel than than it is to move TCP/IP stack to user space.




  To reduce the amount of HTTP processing logic in the kernel we propose
  efficient zero-copy kernel-user space transport for HTTP messages. For
  example, HTTP compression, which isn't crucial for HTTP operation, is
  considered to be implemented in user-space using the transport.




  Tempesta FW's benchmarks [3] show that it processes HTTP messages as
  quickly as an HTTP server using user space TCP/IP. Thus, bypassing
  Linux TCP/IP isn’t the only way to get a fast Web server.




  [1]. Tempesta FW's source code, https://github.com/tempesta-tech/tempesta




  [2]. mbed TLS, https://tls.mbed.org/




  [3]. https://github.com/tempesta-tech/tempesta/wiki/Tempesta-FW-benchmark

### 添付資料URL

- [slides](https://netdevconf.info/2.1/slides/apr7/krizhanovsky-tfw_stack.pdf)（file）
- [paper](https://netdevconf.info/2.1/papers/https_tcpip_stack.pdf)（file）
- [video](https://www.youtube.com/watch?v=3oHMFgUY1iY)（link）

<a id="session-stringer"></a>
## 9. OVS without OVS

- セッション個別URL: https://netdevconf.info/2.1/session.html?stringer
- Track: Talk
- 日時: 2017-04-08 8:45 - 9:15, Talk

### Description

The OVS kernel module provides a user-facing API that models a
datapath bridge that connects multiple ports and is configured through
a single flow table.  This flow table allows policies to be written
around a wide range of fields and provides actions to manipulate and
redirect packets.  A primary goal of this design is to allow flexible
user-defined policies without complicating the kernel for every
use-case; this has been well-aligned with recent industry interest in
SDN.



The most well known user of the the OVS kernel module is ovs-vswitchd,
which is a fairly large userspace program that provides an OpenFlow
API for programming. However, there are a number of other users and
use-cases outside of ovs-vswitchd and SDN for the OVS kernel module.
This paper presents the OVS kernel API, shows how it can be directly
configured with simpler low-level utilities (eg, ovs-dpctl), and looks
at how it compares to similar APIs such as cls_flower.  Finally, this
paper surveys a variety of open source projects which build upon the
OVS kernel API without using the OVS userland utilities.

### 添付資料URL

- [closing slides](https://netdevconf.info/2.1/slides/apr8/netdev21-Joe-Stringer-OVS-minus-OVS.pdf)（file）
- [video](https://youtu.be/8ieoUQI7X88)（link）
- [paper](https://netdevconf.info/2.1/papers/netdev21-ovs.pdf)（file）

<a id="session-maloy"></a>
## 10. Overlapping Ring Neighbor Monitoring Algorithm in 1000-node Clusters

- セッション個別URL: https://netdevconf.info/2.1/session.html?maloy
- Track: Talk
- 日時: 2017-04-07 8:45 - 9:15, Talk

### Description

In Linux 4.7 we introduced a fundamentally new neighbor monitoring
  algorithm to TIPC. This algorithm has several advantages:




  
    It scales better than full mesh monitoring. CPU load increases by
    sqrt(N) instead of by N, network load by sqrt(N)*N instead of N^2.
  


  
    Swift neighbor failure discovery is guaranteed even in the presence
    of a partitioned network, contrary to what regular ring supervision
    algorithms can do.
  


  
    It has short and deterministic failure discovery times, contrary
    to the Gossip algorithm.
  




  The algorithm is completely distributed, self-adaptive and employs no
  centralized or coordinated state. It scales up to at least 1000 nodes
  with a failure discovery time in the order of 1 second. We believe this
  algorithm should be useful in large container or VM clusters, as well
  as in native systems.



A brief summary of the algorithm:



  
    Each node sorts all its N known neighbors into a circular list. The
    algorithm for this is the same on all nodes.
  



  
    The node identifies the next sqrt(N) nodes downstream from itself in
    the list, -its "monitoring domain", and supervises those actively.
  



  
    It distributes a record describing its monitoring domain to all the
    neighbors. A new record is distributed when there is a change, e.g.,
    a lost node, in the local domain.
  



  
    When a node outside a node's local domain is lost, it relies on updates
    from the sqrt(N) nodes actively monitoring that node for discovering
    the loss.
  



  
    In order to handle failures causing a partitioned network, each node
    also selects a set of nodes outside its own domain to monitor actively.
    Those nodes are selected so that no node is more than two active
    supervision hops away. There will be sqrt(n) such nodes. This
    guarantees that a node will discover loss of indirectly monitored
    nodes in a remote partition within a period marginally longer than
    the detection time for actively monitored nodes.
  



  
    Each node will immediately re-calculate a new optimal monitoring
    configuration upon any change in the cluster.

### 添付資料URL

- [slides](https://netdevconf.info/2.1/slides/apr7/maloy-Overlapping-Ring-Monitoring-Netdev-2.1.pdf)（file）
- [video](https://youtu.be/ni-iNJ-njPo)（link）
- [paper](https://netdevconf.info/2.1/papers/Overlapping-Ring-Monitoring_v3.pdf)（file）

<a id="session-dumazet"></a>
## 11. Busypolling next generation

- セッション個別URL: https://netdevconf.info/2.1/session.html?dumazet
- Track: Talk
- 日時: 2017-04-06 9:20 - 9:50, Talk

### Description

In this talk I will present the busy polling principles and history
  in linux kernel, and the ongoing work.




  Back in linux-3.11, Eliezer Tamir added what he called low latency
  socket polling.
  Idea is let recvmsg() callers directly call a driver polling
  function, burning cycles
  an avoiding potential expensive scheduler calls to reduce latencies.
  linux-4.11 has no more ndo_busy_poll() method and busy polling is
  now generic for all NAPI drivers.




  Next work is to opt-in drivers in a mode where one (or multiple)
  cpu would be dedicated to
  run the low-level part of the networking stack, ie shifting from an
  interrupt driven model to
  a busy polling one.

### 添付資料URL

- [slides](https://netdevconf.info/2.1/slides/apr6/dumazet-BUSY-POLLING-Netdev-2.1.pdf)（file）
- [video](https://youtu.be/X0xBCoQGUvg)（link）
- [paper](https://netdevconf.info/2.1/papers/BusyPollingNextGen.pdf)（file）

<a id="session-brakmo"></a>
## 12. Network Testing with Netesto

- セッション個別URL: https://netdevconf.info/2.1/session.html?brakmo
- Track: Talk
- 日時: 2017-04-07 16:55 - 17:25, Talk

### Description

Netesto (NEtwork TESting TOolkit) is a suite of tools for running
multi-host network experiments that supports the collection and
display of relevant data and statistics. It currently supports TCP RPC
and STREAM transfers through netperf. Although the framework itself
can easily be expanded to support other protocols and transfer
programs. It has some similarities to Flent (The Flexible Network
Tester) in that it is based on Python, but unlike Flent, Netesto
supports:




   Multiple senders and receivers


   Detailed flow information: RTTs, cwnds, etc.


   Per host statistics and state


   Creation of csv file with results


   Creation of html file with results in table plus detailed results
         including graphs of cwnds, RTTs, goodput


   Support for creating complex scenarios through macros


   Support for adding delays with netem




Netesto can run complex scenarios consisting of multiple individual
tests with just a few commands due to the use of macros and libraries.
The end result is an HTML page consisting of a table with one or more
lines per test, plus links to pages for individual results which
contain graphs showing goodputs, RTTs and cwnds. Netesto has proved
very valuable for comparing the performance of different TCP variants
(such as Cubic, Reno, BBR, NV). For example, it was used to evaluate
BBR and compare its performance to Cubic
(https://drive.google.com/file/d/0B4YZ_0yTgbJEa21CbUVLWFdrX2c/view)

### 添付資料URL

- [slides](https://netdevconf.info/2.1/slides/apr7/brakmo-Netesto-Slides.pdf)（file）
- [paper](https://netdevconf.info/2.1/papers/Netesto.pdf)（file）
- [video](https://www.youtube.com/watch?v=ySHK5JrRMzo)（link）

<a id="session-jain"></a>
## 13. Story of Network Virtualization and its future in Software and Hardware.

- セッション個別URL: https://netdevconf.info/2.1/session.html?jain
- Track: Talk
- 日時: 2017-04-06 17:35 - 18:05, Talk

### Description

The paper and the presentation will quickly go through a time lapse of
  Network virtualization as it evolved, successes and failures and the
  reasons behind those. Revisiting history and understanding the present
  and future use cases for Network virtualization will fuel the future
  Hardware and Software designs for a better end user experience and
  pushing the envelope on Network virtualization. Intel and the industry
  has seen many generations of Network virtualization.




  The talk will be focused on two important areas:




  Briefly Analyze the past and present


  Make a case for the future technologies




  The talk will go deep dive into HW challenges in two areas of Network
  Virtualization:




  Why the Hardware offloads and getting them just right is important
    (Goldilocks effect), may be SRIOV is little too much.


  Host interface exposed by a network Virtualization device and how do
    we get that just right




  The talk will also cover what the future SW model for Network
  Virtualization is shaping up to be




  The best control and data plane split that works for Network or
    compute intensive VMs/Containers.


  Why less is more in some cases for the Virtual function device.


  Is true SR-IOV a good answer in all cases, are Mediated devices a
    better compromise



To conclude we will go over the upcoming Virtualization technology
  supported by VFIO Mediated devices and  PCIE specification for PASID,
  what problems will that solve. How do we get the software model right
  in this case and learn from our mistakes with SR-IOV.

### 添付資料URL

- [slides](https://netdevconf.info/2.1/slides/apr6/jain-Netdev2.1_NetworkVirtualization5.1-0406.pdf)（file）
- [video](https://youtu.be/PmwOKSgwHtk)（link）
- [paper](https://netdevconf.info/2.1/papers/networkvirtualization.odt)（file）
- [anjali-Netdev2.1_NetworkVirtualization5.pdf](https://netdevconf.info/2.1/slides/apr6/anjali-Netdev2.1_NetworkVirtualization5.pdf)（file）

<a id="session-chung"></a>
## 14. Driving Linux TCP Congestion Control algorithms around the LTE network Highway

- セッション個別URL: https://netdevconf.info/2.1/session.html?chung
- Track: Talk
- 日時: 2017-04-07 9:20 - 9:50, Talk

### Description

Unlike IEEE802.11 (wifi) and traditional 3G wireless links,  LTE networks have
high link variability and large end user mobility. There still exists a huge
gap in understanding how TCP congestion control algorithms variants perform
under such conditions.  Mobile carriers often waste their efforts
to improve throughput by fine tuning parameters of TCP CUBIC although CUBIC
often fails to ramp up rapidly to congestion avoidance needs over LTE links.




To have a better understanding of TCP performance over LTE networks, we conduct
a comprehensive measurement study to compare CUBIC with its latest rival - BBR
over a world leading tier-one mobile network in high speed driving condition.
To our best knowledge, there is no measurement effort to compare performance
of different TCP flavors over LTE networks on highway. In addition to our
measurement contribution, our in-depth measurement result also conclude
that:





CUBIC with Hybrid slow start leads to a low radio resource utilization;


 BBR yields higher throughputs even when SINR is lower and/or hand-off
happens;


BBR's bottle-neck link bandwidth estimation works well for various
conditions (including hand-offs); and 


4)BBR is a promising TCP Congestion Control candidate for
performance enhancement proxies over mobile networks.

### 添付資料URL

- [slides](https://netdevconf.info/2.1/slides/apr7/chung-driving-tcps-on-highway-2.0.pdf)（file）
- [video](https://youtu.be/-ioi3wtl1Gc)（link）
- [paper](https://netdevconf.info/2.1/papers/compare-tcp-highway-netdev-4-final.pdf)（file）

<a id="session-zhou"></a>
## 15. Droplet: DDoS countermeasures powered by BPF + XDP

- セッション個別URL: https://netdevconf.info/2.1/session.html?zhou
- Track: Talk
- 日時: 2017-04-06 11:30 - 12:00, Talk

### Description

Droplet is a generic framework to implement bpf policers to
  drop packets at the earliest stage in the networking stack,
  preferably at line rate. It's born for anti-DDoS and is the
  preferred infrastructure at Facebook to plug in DDoS
  countermeasures. This talk presents the overall architecture
  of Droplet and discusses a few issues in developing and
  rolling out the software.




  At a high level, Droplet takes bpf policer code written in
  restricted C syntax, compiles it at runtime and hooks it into
  the kernel. The framework abstracts out interactions between
  user space and kernel space so the end user only needs to
  write policer code. It could chain bpf programs together so we
  get multiple active DDoS countermeasures at the same time. The
  policer code is shipped as configuration, which enables fast
  response time when under active attacks.

### 添付資料URL

- [slides](https://netdevconf.info/2.1/slides/apr6/zhou-netdev-xdp-2017.pdf)（file）
- [video](https://youtu.be/YEU2ClcGqts)（link）
- [zhou-netdev-xdp-2017.pptx](https://netdevconf.info/2.1/slides/apr6/zhou-netdev-xdp-2017.pptx)（file）

<a id="session-linkletter"></a>
## 16. Investigating Linux Network Behaviour Using Open-Source Network Emulators

- セッション個別URL: https://netdevconf.info/2.1/session.html?linkletter
- Track: Talk
- 日時: 2017-04-07 17:30 - 18:00, Talk

### Description

There are several open source, GUI based, network emulation tools
  that are based on linux containers that could be used to replicate
  network scenarios including failures. This talk will be taking a
  trouble-shooting approach to introduce a sample of these tools.





  
    Show how a complex virtual network topology of virtual bridges,
    Linux hosts, and Linux routers can be created in an ad-hoc fashion
    in minutes using Linux containers and Linux bridging in a
    GUI-based network emulator such as the CORE Network Emulator
  


  
    Create a troubleshooting scenario in the emulated network caused
    by one or more problems (for example: by interfering with traffic
    on links in the virtual network, or by incorrectly configuring
    routers in the network) and show how the network emulator
    integrates with commonly used tools, such as Wireshark, to
    evaluate and identify the problem.
  


  
    Show how the network emulation scenario setup may be automated
    using Python scripts and APIs
  


  
    Briefly show that the CORE network emulation tool, and similar
    tools, may be extended to add new functionality.
    


  
    Briefly show a general overview of other open-source network
    emulation tools that use virtualized Linux nodes to emulate
    networks, emphasizing the use-cases where each is best suited,
    based in hypervisor or container technology used, scripting
    language used, available API's, and integration with complementary
    tools.
  





  At the end of the talk, developers would have an appreciation of the
  open-source network emulation projects available and how to use them
  to replicate network behavior while testing or debugging network
  applications or applications that use a network.

### 添付資料URL

- [slides](https://netdevconf.info/2.1/slides/apr7/Brian-Linkletter-Netdev.pdf)（file）
- [paper](https://netdevconf.info/2.1/papers/Brian-Linkletter-Netdev-paper.pdf)（file）
- [video](https://www.youtube.com/watch?v=lSENBSPjN6M)（link）

<a id="session-debruijn"></a>
## 17. sendmsg copy avoidance with MSG_ZEROCOPY

- セッション個別URL: https://netdevconf.info/2.1/session.html?debruijn
- Track: Talk
- 日時: 2017-04-06 9:55 - 10:25, Talk

### Description

Linux offers various copy avoidance mechanisms, such as sendfile,
vmsplice and tun zerocopy. In this talk I will give an overview of current
interfaces and introduce a new MSG_ZEROCOPY extension to the
socket API. Processes converted to the interface see a cycle reduction
ranging from 90% of process cycles (62% systemwide) for a netperf
micro-benchmark to 5-8% for lightly modified production machine
learning and CDN workloads.




The feature combines a send() flag with a completion notification
channel over the socket error queue. Aside from introducing the
interface, the talk will focus on technical constraints. Primarily,
supporting complex protocols like TCP, where segmentation,
retransmission and reordering introduce a non-trivial relationship
between user buffers and packets on the wire. To handle these,
completion notification requires careful reference counting across
the transmit stack. Other concerns are bounding notification latency
and working set size, avoiding TOCTTOU attacks with shared
read-write page mappings and amortizing the cost of notification
processing over the socket error queue.

### 添付資料URL

- [slides](https://netdevconf.info/2.1/slides/apr6/msgzerocopy-willemdebruijn-20170405.pdf)（file）
- [video](https://youtu.be/9F8I9vYQydU)（link）
- [paper](https://netdevconf.info/2.1/papers/debruijn-msgzerocopy-talk.pdf)（file）
- [netdev.pdf](https://netdevconf.info/2.1/papers/netdev.pdf)（file）

<a id="session-davis"></a>
## 18. Increasing reliability in data center network configuration

- セッション個別URL: https://netdevconf.info/2.1/session.html?davis
- Track: Talk
- 日時: 2017-04-08 16:25 - 16:55, Talk

### Description

This talk is about our quest for a network configuration solution 
  for a large Linux storage application. Our application is based on
  a highly available cluster architecture which requires
  dynamic and reliable software-driven network configuration.




  Further requirements include:




  
    programmatic access to configure the majority of the Linux network
    stack,
  


  
    transaction-like semantics where multiple related configurations
    either fail or succeed as a unit,
  


  
    logic to monitor the system and when it differs from the expected
    configuration, provide notifications and possibly attempt
    automatic repairs,
  


  
    and all of this without becoming entangled with
    application-specific expectations about behaviors and policies.
  




  The talk expands upon the above set of core requirements and discusses
  some of the difficulties around meeting these requirements with
  currently available open source solutions. Our journey leads to a new
  configuration system to meet these requirements, and we discuss some
  key architecture and design aspects of the system.




  We are planning to release our work into the open source community and
  we hope the talk will encourage discussion and provide us feedback on
  making this work better.

### 添付資料URL

- [slides](https://netdevconf.info/2.1/slides/apr8/NetDev-NetworkConfiguration-DistlerDavis.pdf)（file）
- [paper](https://netdevconf.info/2.1/papers/IncreasingNetConfigReliability-DavisDistler.pdf)（file）
- [video](https://www.youtube.com/watch?v=eYp5xAr-irA)（link）

<a id="session-sharshevsky"></a>
## 19. Introduction to pipeline debug (dpipe)

- セッション個別URL: https://netdevconf.info/2.1/session.html?sharshevsky
- Track: Talk
- 日時: 2017-04-06 17:00 - 17:30, Talk

### Description

While doing the hardware offloading process much of the hardware
  specifics cannot be presented. One example for such is the routing LPM
  algorithm used in Mellanox Spectrum ASIC which differs in hardware
  implementation from the kernel software implementation. The only
  information the user receives is whether specific route is offloaded or
  not, but he cannot really understand the underlying implementation nor
  get the specific statistics related to that process.





  Another example is TC classification-action offload which in hardware
  commonly implemented using TCAM memory. Currently there is no capability
  to gain visibility into the TCAM structure and to debug sub-optimal
  resource allocation.





  The new dpipe interface introduces capability for exporting the ASICs
  pipeline abstraction via devlink infrastructure, which should serve as an
  complementary tool. This infrastructure allows the user to get visibility
  into the ASIC by modeling it as a set of match/action tables.



Agenda:




  introduction to dpipe model.


  present/discuss the current hardware blocks modeled in the ASIC.


  discuss future extensions.

### 添付資料URL

- [slides](https://netdevconf.info/2.1/slides/apr6/sharshevsky_dpipe_netdev_2_1_pres.pdf)（file）
- [video](https://youtu.be/RNMDQKcfE7I)（link）
- [paper](https://netdevconf.info/2.1/papers/dpipe_netdev_2_1.odt)（file）

<a id="session-herbert"></a>
## 20. Real-time IoT networking on the Internet

- セッション個別URL: https://netdevconf.info/2.1/session.html?herbert
- Track: Talk
- 日時: 2017-04-08 9:55 - 10:25, Talk

### Description

This talks presents the motivation and direction to support the
  emerging class of IoT applications and protocols that require
  latencies measured in milliseconds on the Internet. These may be
  thought of as "life-critical applications" in the sense that they
  could be a matter of life and death to be correct. For example, a
  camera monitoring an intersection by a school may detect a child
  darting out into traffic. A device attached to the camera may send a
  warning to an autonomous vehicle to apply brakes to avoid hitting the
  child. The difference in reaction time between the an automated system
  and human is stark-- about 40 msecs compared to 500 msecs or more for
  a human.




  Real-time IoT protocols need to be implemented with very low latency
  from hazard detection to response, strict latency bounds, be highly
  available, be secure (critical messages can't be spoofed), and be
  resistant to DDOS. A primary use case for such applications, as
  exhibited in the above example, is so-called Vehicle to Infrastructure
  communications (V2X). This implies that communicating devices may be
  highly mobile needing a solution such as ILA or MobileIP. The
  underlying network may also have different flavors including Dedicated
  Short-Range Communications (DSRC) which is standardized as 802.11p, 4G
  or the emerging 5G standard, as well as traditional WIFI.




  In order to achieve the tight latency bounds the application, network
  stack, network, scheduling, must all be tightly coordinated.
  Information is usually time sensitive with deadlines of usefulness
  such that techniques such as forward error correction are more likely
  to be used than traditional reliable protocols such as TCP. DTLS
  handshake must also be low latency, as well as any hand-off for
  implemented MobileIP.

### 添付資料URL

- [slides](https://netdevconf.info/2.1/slides/apr8/Herbert-Netdev_2_1.pdf)（file）
- [video](https://youtu.be/mLDz-KnExiY)（link）

<a id="session-schmidt"></a>
## 21. IoT related MAC layers, header compression and routing protocols

- セッション個別URL: https://netdevconf.info/2.1/session.html?schmidt
- Track: Workshop
- 日時: 2017-04-08 13:55 - 15:25, Workshop

### Description

This workshop aims to identify generic requirements for the
        networking subsystem for IoT and starting the process of
        addressing the gaps found. The workshop will encompass related
        MAC layers, networking protocols, adaptation layers, header
        compression, routing protocols and application layers.



      As a starting point we will look at existing subsystems
        (Bluetooth, 802.15.4, 6LoWPAN, etc) and discuss a way forward
        to address the gaps posed. An overview of MAC layers and open
        IoT related specifications will help to identify things we
        should probably support in the future (LPWAN, SCHC, RPL,
        Thread, etc). Note: We emphasize only on open protocols and
        specifications as well as IPv6 instead of company grown
        networking layers.



      Additional user-space interfaces might be needed to cater for
        the requirements of application layer stacks (ZigBee,
        IoTivity, etc.). What kind of interfaces besides the normal
        socket API and existing netlink interfaces do they need?
        (header compression configuration, DTLS support in AF_KTLS,
        etc.)



      A primary goal of this workshop is initially to target Linux
        as a gateway or border router at the edge of IoT networks, be
        it industrial or home automation.



      A future scope, starting with discussions at the workshop,
        could be for Linux to replace RTOSes on leaf nodes which
        operate on very constrained hardware and power limits; such an
        effort would need a serious amount of work towards
        tinyfication in all parts of the kernel.



      We expect the workshop to ignite efforts on these topics and
        followup discussions on mailing lists and future netdevs to
        produce results that make it a possibility.

### 添付資料URL

- [Schmidt slides](https://netdevconf.info/2.1/slides/apr8/schmidt-netdev-workshop.pdf)（file）
- [Aring slides](https://netdevconf.info/2.1/slides/apr8/aring_mle.pdf)（file）
- [video](https://www.youtube.com/watch?v=rseB3PsPWHg)（link）

<a id="session-duyck"></a>
## 22. Network Performance Workshop

- セッション個別URL: https://netdevconf.info/2.1/session.html?duyck
- Track: Workshop
- 日時: 2017-04-06 13:55 - 15:25, Workshop

### Description

The network performance performance workshop is a follow-up of
	several mailing list threads on the netdev mailing list as
	well as presentations at Netdev 1.2.  We want to discuss the
	progress made on various efforts to enable better performance
	through enabling new features in the kernel, and changing
	existing APIs to better enable the drivers to handle the ever
	increasing workloads.
      



      
	This is an opportunity to bring together the various network
	device vendors to discuss what has worked and what hasn't in
	terms of enabling better performance in the Linux kernel
	ecosystem.
      



      Topics for the session would include:


      
	Implementing page based receive paths and page recycling and/or reuse


	Zero-copy using AF_PACKET to accelerate user-space networking


	Recent changes to enable better use of build_skb and XDP


	Batching of Tx and Rx workloads


	Kernel memory optimizations

### 添付資料URL

- [Duyck slides](https://netdevconf.info/2.1/slides/apr6/network-performance/01-duyck-Network-Performance-Workshop.pdf)（file）
- [Brouer slides](https://netdevconf.info/2.1/slides/apr6/network-performance/02-brouer-net_perf_workshop2017_jesper_slides.pdf)（file）
- [Fastabend slides](https://netdevconf.info/2.1/slides/apr6/network-performance/03-fastabend-af_packet.pdf)（file）
- [Amir slides](https://netdevconf.info/2.1/slides/apr6/network-performance/04-amir-RX_and_TX_bulking_v2.pdf)（file）
- [video](https://youtu.be/pK60pzbyUHw)（link）

<a id="session-hadisalim"></a>
## 23. Traffic Control Workshop

- セッション個別URL: https://netdevconf.info/2.1/session.html?hadisalim
- Track: Workshop
- 日時: 2017-04-07 13:55 - 15:55, Workshop

### Description

Face to Face discussions on different tc topics



Current WAG agenda (subject to update):




  New tc offloads since netdev 1.2


  New features/requests/improvements


  Performance


  Packet edit/offload discussion


  YATO (Yet another Tunnel offload).

### 添付資料URL

- [netdev-tcwork](https://netdevconf.info/2.1/slides/apr7/tc-workshop/hadisalim-netdev-tcwork.pdf)（file）
- [jpirko-TC](https://netdevconf.info/2.1/slides/apr7/tc-workshop/jpirko-TC.pdf)（file）
- [eran-ATCforNetdev](https://netdevconf.info/2.1/slides/apr7/tc-workshop/eran-ATCforNetdev.pdf)（file）
- [netronome-tc-flow-setup](https://netdevconf.info/2.1/slides/apr7/tc-workshop/netronome-tc-flow-setup.pdf)（file）
- [perf1](https://netdevconf.info/2.1/slides/apr7/tc-workshop/perf1.pdf)（file）
- [kiran_netdev2.1_tc_extension](https://netdevconf.info/2.1/slides/apr7/tc-workshop/kiran_netdev2.1_tc_extension.pdf)（file）
- [vadai-tc-workshop-update](https://netdevconf.info/2.1/slides/apr7/tc-workshop/vadai-tc-workshop-update.pdf)（file）
- [bucur-tc-offload](https://netdevconf.info/2.1/slides/apr7/tc-workshop/Madalin_Bucur_NXP_TC_Offloads_DPAA.pdf)（file）
- [diagram tc-demo](https://netdevconf.info/2.1/slides/apr7/tc-workshop/netdev-tc-demo.jpeg)（file）
- [diagram tc-graph](https://netdevconf.info/2.1/slides/apr7/tc-workshop/netdev-tc-graph.jpeg)（file）
- [video](https://youtu.be/NMxrbVdDcNA)（link）
- [action-hash-bkt.png](https://netdevconf.info/2.1/slides/apr7/tc-workshop/action-hash-bkt.png)（file）
- [filter-time-access.png](https://netdevconf.info/2.1/slides/apr7/tc-workshop/filter-time-access.png)（file）
- [hash-bkt-timefilt.png](https://netdevconf.info/2.1/slides/apr7/tc-workshop/hash-bkt-timefilt.png)（file）
- [jumpx-desc.png](https://netdevconf.info/2.1/slides/apr7/tc-workshop/jumpx-desc.png)（file）
- [netdev-tcwork-agenda.pdf](https://netdevconf.info/2.1/slides/apr7/tc-workshop/netdev-tcwork-agenda.pdf)（file）
- [netdev-tcwork.odp](https://netdevconf.info/2.1/slides/apr7/tc-workshop/netdev-tcwork.odp)（file）
- [netronome-tc-flow-setup.odp](https://netdevconf.info/2.1/slides/apr7/tc-workshop/netronome-tc-flow-setup.odp)（file）
- [perf1.odp](https://netdevconf.info/2.1/slides/apr7/tc-workshop/perf1.odp)（file）

<a id="session-ayuso"></a>
## 24. Netfilter Mini-Workshop

- セッション個別URL: https://netdevconf.info/2.1/session.html?ayuso
- Track: Workshop
- 日時: 2017-04-08 10:55 - 12:05, Workshop

### Description

This workshop will go over new features and things
	that have changed since Netdev1.2

### 添付資料URL

- [Ayuso slides](https://netdevconf.info/2.1/slides/apr8/ayuso-netdev-netfilter-updates-canada-2017.pdf)（file）
- [Westphal slides](https://netdevconf.info/2.1/slides/apr8/florian_westphal_pablo_nf_workshop.pdf)（file）
- [video](https://youtu.be/qXVOA2MKA1s)（link）
- [netdev-netfilter-updates-canada-2017.pdf](https://netdevconf.info/2.1/slides/apr8/netdev-netfilter-updates-canada-2017.pdf)（file）

<a id="session-gospodarek"></a>
## 25. XDP for the Rest of Us

- セッション個別URL: https://netdevconf.info/2.1/session.html?gospodarek
- Track: Tutorial
- 日時: 2017-04-07 10:55 - 12:05, Tutorial

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




  This tutorial will present an example/case-study where a tool such
  as logtrigger or fail2ban will interact with an application and a
  BPF program to make decisions to drop or allow certain packets early
  in the packet processing step for enhanced DDoS prevention over
  traditional methods.  Getting started using XDP, goes hand-in-hand
  with learning eBPF (Extended Berkeley Packet Filter), as this is
  currently the XDP-hook language.  This tutorial will cover the
  process of writing/modifying a simple BPF program, interacting with
  BPF maps in a programmatic manner, and the potential performance
  benefit to early drop with XDP compared to more traditional drop
  operations used on some embedded systems that are placed much higher
  in the network stack.




  Learning to use XDP can feel like a fairly steep learning curve, but
  the goal of this tutorial is to make this process clear to kernel
  developers, sysadmins, or anyone with DevOps responsibilities.

### 添付資料URL

- [slides](https://netdevconf.info/2.1/slides/apr7/gospodarek-Netdev2.1-XDP-for-the-Rest-of-Us_Final.pdf)（file）
- [video](https://www.youtube.com/watch?v=iBkR4gvjxtE)（link）

<a id="session-miller"></a>
## 26. XDP Mythbusters

- セッション個別URL: https://netdevconf.info/2.1/session.html?miller
- Track: Keynote
- 日時: 2017-04-07 12:05 - 12:40, Keynote

### Description

掲載なし

### 添付資料URL

- [slides](https://netdevconf.info/2.1/slides/apr7/miller-XDP-MythBusters.pdf)（file）
- [video](https://youtu.be/8Cxg7mpVIWw)（link）

<a id="session-mukherjee"></a>
## 27. Journey into Enterprise Networking with Linux

- セッション個別URL: https://netdevconf.info/2.1/session.html?mukherjee
- Track: Keynote
- 日時: 2017-04-06 12:05 - 12:40, Keynote

### Description

The talk will be about the Journey where Linux used to exist at the
  edge of networks, was the source and basis of application level
  innovation, but stopped at being a network endpoint.
  

  The talk will cover the steps that were needed, the ecosystem that
  needed to be built and the features we needed to pay attention to,
  to make Linux appealing to the Enterprise customer and appear in the
  core of critical networks.

### 添付資料URL

- [slides](https://netdevconf.info/2.1/slides/apr6/mukherjee-keynote.pdf)（file）
- [video](https://youtu.be/kTbaHOj8z98)（link）

<a id="session-brandeburg"></a>
## 28. Linux and the Network

- セッション個別URL: https://netdevconf.info/2.1/session.html?brandeburg
- Track: Keynote
- 日時: 2017-04-08 12:05 - 12:40, Keynote

### Description

In this talk Jesse will cover topics such as, a brief history of the
  network in Linux, Intel’s expectations of the number of devices on
  the internet causing a dramatic expansion in the number of connected
  devices, and how it will effect Linux networking. He will also cover
  how the data from all these devices will require big investments in
  hardware and software in the network, and why that matters to the
  core Linux networking community. Finally he will talk about what the
  future of networking can hold, and what it means for Intel, and the
  Linux NetDev community.

### 添付資料URL

- [slides with notes](https://netdevconf.info/2.1/slides/apr6/brandeburg-2017IntelKeynote-Final-Notes.pdf)（file）
- [video](https://youtu.be/bXEceMqjVng)（link）
- [brandeburg-2017IntelKeynote-Final.pdf](https://netdevconf.info/2.1/slides/apr6/brandeburg-2017IntelKeynote-Final.pdf)（file）

<a id="session-opening"></a>
## 29. Opening

- セッション個別URL: https://netdevconf.info/2.1/session.html?opening
- Track: Opening
- 日時:  

### Description

掲載なし

### 添付資料URL

- [video](https://youtu.be/BLoAn6ULj54)（link）

<a id="session-closing"></a>
## 30. Closing Ceremony

- セッション個別URL: https://netdevconf.info/2.1/session.html?closing
- Track: Closing Ceremony
- 日時: 2017-04-08 17:00-17:30

### Description

掲載なし

### 添付資料URL

- [closing slides](https://netdevconf.info/2.1/slides/apr8/netdev21-closing.pdf)（file）
- [video](https://www.youtube.com/watch?v=EX8OHga0UG4)（link）
- [Next netdev pdf](https://netdevconf.info/2.1/slides/apr8/Netdev-2.2-in-Seoul-Korea.pdf)（file）
- [Next netdev mov](https://youtu.be/KyC7geDnaVw)（link）
- [Netdev-2.2-in-Seoul-Korea.mov](https://netdevconf.info/2.1/slides/apr8/Netdev-2.2-in-Seoul-Korea.mov)（file）

## 個別ページのない補足セッション

## 出典

- https://netdevconf.info/2.1/accepted-sessions.html
- https://netdevconf.info/2.1/schedule.html
- https://netdevconf.info/2.1/slides/
- https://netdevconf.info/2.1/slides/apr6/
- https://netdevconf.info/2.1/slides/apr7/
- https://netdevconf.info/2.1/slides/apr8/
- https://netdevconf.info/2.1/slides/apr6/network-performance/
- https://netdevconf.info/2.1/slides/apr7/tc-workshop/
- https://netdevconf.info/2.1/papers/
