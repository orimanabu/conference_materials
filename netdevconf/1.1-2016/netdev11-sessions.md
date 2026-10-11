# Netdev 1.1 全セッション一覧

出典: https://netdevconf.info/1.1/accepted-sessions.html

Accepted Sessionsの全41個別URLを収録し、Scheduleの全41セッションと照合。Titleは講演名、page_titleには個別ページの見出しを保持。Descriptionは原文を収録し、詳細要旨がないLinux Wireless Workshop・Keynote 2件は告知文を保持（description_statusで区別）。Contentsのスライド・論文・動画URLを抽出し、Proceedingsのslides/papersディレクトリにある全ファイルを照合。Linux Wireless Workshopの3枠は1セッションとしてscheduled_slotsに保持。告知文の日付とスケジュールの日付が異なる場合はスケジュールを採用。個別ページがないWelcoming・Closingは補足に収録。添付本体の取得・リンク有効性検査は未実施。

セッション: 41件 / Descriptionあり: 41件 / 資料あり: 40件 / 資料項目: 93件

## 目次

1. [Linux TC](#session-workshop-linux-tc-jamal-hadi-salim)
2. [Linux Wireless Workshop](#session-linux-wireless-workshop-confirmed)
3. [Speeding up the Linux TCP/IP stack with a fast packet I/O framework](#session-talk-speeding-linux-tcpip-stack-fast-packet-io-framework-michio-honda)
4. [Virtual switch HW acceleration](#session-talk-virtual-switch-hw-acceleration-rony-efraim)
5. [Challenges in Testing - How OpenSourceRouting tests Quagga](#session-talk-challenges-testing-how-opensourcerouting-tests-quagga-martin-winter)
6. [HW High-Availability and Link Aggregation for Ethernet switch and NIC RDMA using Linux bonding/team](#session-talk-hw-high-availability-and-link-aggregation-ethernet-switch-and-nic-rdma-using-linux-bondingteam)
7. [nftables switchdev support](#session-talk-nftables-switchdev-support-pablo-neira-ayuso)
8. [On getting tc classifier fully programmable with cls_bpf](#session-talk-getting-tc-classifier-fully-programmable-clsbpf-daniel-borkmann)
9. [Flow-based tunneling for SR-IOV using switchdev API](#session-talk-flow-based-tunneling-sr-iov-using-switchdev-api-ilya-lesokhin-haggai-eran-or-gerlitz)
10. [Scaling the Number of Network Interfaces on Linux](#session-talk-scaling-number-network-interfaces-linux-david-ahern-nikolay-aleksandrov-roopa-prabhu)
11. [Zebra 2.0 and Lagopus: newly-designed routing stack on high-performance packet forwarder](#session-talk-zebra-20-and-lagopus-newly-designed-routing-stack-high-performance-packet-forwarder-yoshihiro)
12. [Reducing Latency in Linux Wireless Network Drivers](#session-talk-reducing-latency-linux-wireless-network-drivers-tim-shepard)
13. [Deterministic network emulation using KauNetEm](#session-talk-deterministic-network-emulation-using-kaunetem-hurtig-johan-garcia)
14. [Suricata IDPS and its interaction with Linux kernel](#session-talk-suricata-idps-and-its-interaction-linux-kernel-eric-leblond-giuseppe-longo)
15. [The CLASShoFIREs: who's got your back?](#session-talk-classhofires-whos-got-your-back-jamal-hadi-salim-lucas-bates)
16. [MACsec: encryption for the wired LAN](#session-talk-macsec-encryption-wired-lan-sabrina-dubroca)
17. [Bridge filtering with nftables](#session-talk-bridge-filtering-nftables-florian-westphal)
18. [IPv6 route lookup performance and scaling](#session-talk-ipv6-route-lookup-performance-and-scaling-michal-kube%c4%8dek)
19. [Measuring wifi performance across all Google Fiber customers](#session-talk-measuring-wifi-performance-across-all-google-fiber-customers-avery-pennarun)
20. [Load balancing with nftables](#session-talk-load-balancing-nftables-laura-garcia)
21. [Networking in your pocket: how the Linux networking stack is made to work on Android devices](#session-talk-networking-your-pocket-how-linux-networking-stack-made-work-android-devices-lorenzo-colitti)
22. [Kernel-level GTP (Generic Tunneling Protocol) implementation](#session-talk-kernel-level-gtp-generic-tunneling-protocol-implementation-harald-welte-andreas-schultz)
23. [State and Future of generic 6LoWPAN branch](#session-talk-state-and-future-generic-6lowpan-branch-alexander-aring)
24. [An adventure of analysis and optimisation of the Linux networking stack](#session-talk-adventure-analysis-and-optimisation-linux-networking-stack-marco-varlese-kim-marie-jones)
25. [Securing traffic tunnelled over L3](#session-talk-securing-traffic-tunnelled-over-l3-sowmini-varadhan)
26. [nftables from ingress](#session-tutorial-nftables-ingress-pablo-neira-ayuso)
27. [Deploying MPLS with Linux](#session-tutorial-deploying-mpls-linux-roopa-prabhu)
28. [Namespaces and CGroups, the basis of Linux containers](#session-tutorial-namespaces-and-cgroups-basis-linux-containers-rami-rosen)
29. [Running Cellular Network Infrastructure on Linux](#session-tutorial-running-cellular-network-infrastructure-linux-harald-welte)
30. [Ipset - a tool for faster, more efficient firewalling with iptables](#session-tutorial-ipset-tool-faster-more-efficient-firewalling-iptables-jozsef-kadlecsik)
31. [Using SR-IOV on OpenStack](#session-tutorial-using-sr-iov-openstack-alexander-duyck)
32. [LibOS as a regression test framework for Linux networking](#session-tutorial-libos-regression-test-framework-linux-networking-hajime-tazaki)
33. [In-tree support for 100G switch, no more SDK](#session-tutorial-tree-support-100g-switch-no-more-sdk-elad-raz-jiri-pirko)
34. [Using the VRF Implementation in Linux](#session-tutorial-confirmed-using-vrf-implementation-linux-david-ahern)
35. [Describing datapath processing from userspace policy](#session-bof-describing-datapath-processing-userspace-policy-brenden-blanco-john-fastabend)
36. [Network Performance BoF](#session-bof-network-performance-bof-jesper-dangaard-brouer)
37. [switchdev](#session-bof-switchdev-roopa-prabhu-shrijeet-mukherjee)
38. [IPsec performance](#session-bof-ipsec-performance-steffen-klassert)
39. [Unlocking SR-IOV in Linux](#session-bof-unlocking-sr-iov-linux-john-fastabend)
40. [Linux Networking and Data Center Operations Challenges](#session-keynote-linux-networking-and-data-center-operations-challenges-damascene-joachimpillai)
41. [Hardware Checksumming: Less is More](#session-keynote-hardware-checksumming-less-more-david-s-miller)

<a id="session-workshop-linux-tc-jamal-hadi-salim"></a>
## 1. Linux TC

- セッション個別URL: https://netdevconf.info/1.1/workshop-linux-tc-jamal-hadi-salim.html
- Track: Workshops
- 日時: 2016-02-10 15:00 - 16:00

### Description

An open session on Linux Traffic control for contributing developers. This is a working session that will be open to all but discussion is open only on details of the code and architecture internals of linux tc which is advanced in nature (this is not a user session).



Agenda is open and pending. Format is round table with each agenda item constituting 0-3 slides and no more; code or demo prefered.



Since this is the first time tc developers will get together we hope to learn and draw for future netdevxx workshops.

### 添付資料URL

- [video](https://youtu.be/M6l1rxZCqLM)（link）

<a id="session-linux-wireless-workshop-confirmed"></a>
## 2. Linux Wireless Workshop

- セッション個別URL: https://netdevconf.info/1.1/linux-wireless-workshop-confirmed.html
- Track: Workshops
- 日時: 2016-02-11 9:00 - 11:00

### Description

We are happy to announce that Netdev 1.1 will be host the Linux Wireless Workshop on Wednesday Feb 10th. More information here.

### 添付資料URL

掲載なし

<a id="session-talk-speeding-linux-tcpip-stack-fast-packet-io-framework-michio-honda"></a>
## 3. Speeding up the Linux TCP/IP stack with a fast packet I/O framework

- セッション個別URL: https://netdevconf.info/1.1/talk-speeding-linux-tcpip-stack-fast-packet-io-framework-michio-honda.html
- Track: Talks
- 日時: 2016-02-12 16:30 - 17:00

### Description

Linux network stack has provided the most innovative TCP implementation, adopting a large number of protocol extensions and optimizations. However, we’ve known for a while that it does not perform well for transaction workloads, which involve a lot of small packets and large number of concurrent TCP connections.



We are not going to OS-bypass TCP/IPs, because none of them implements rich features Linux TCP has, including DCTCP, Fast Open, to name a few. In this talk, we show that we can improve Linux TCP/IP performance by integrating the netmap framework.

### 添付資料URL

- [slides](https://netdevconf.info/1.1/proceedings/slides/honda-fast-packet-framework-netapp.pdf)（file）
- [video](https://youtu.be/EZdUgruuz7A)（link）

<a id="session-talk-virtual-switch-hw-acceleration-rony-efraim"></a>
## 4. Virtual switch HW acceleration

- セッション個別URL: https://netdevconf.info/1.1/talk-virtual-switch-hw-acceleration-rony-efraim.html
- Track: Talks
- 日時: 2016-02-10 12:30 - 13:00

### Description

Software based switching consumes CPU resources that can instead be offloaded to modern network adapters.



In this talk we propose switch acceleration where functionality is done by software and when possible/sensible to offload to HW utilizing the switchdev framework when possible. Our approach can be implemented using existing functionality of most modern NICs that already support packet classification, multiple send and receive rings, traffic shapers and L2/L3/L4 overlay networks encapsulation / decapsulation.



The proposed framework does HW classification of packets and associating an action per classification rule (for example, through 12 tuple classification). The following are the initial proposed actions:




1.Mark a packet - use the HW based classification to tag the packet according using skbedit TC action.


2.Send and Receive rings mapping - use dedicated HW rings per VM/MAC/other.


3.QoS (Scheduling, Shaping, Metering, Rate limiting ...).


4.Overlay networks encapsulation/decapsulation insert and strip in HW for non SRIOV VMs (VXLAN, NVGRE MPLS, QinQ....).


5.Drop (e.g., accelerating a SW firewall implementation etc.).


6.Count (Packets, bytes...).




In this talk we will discuss how the proposed framework for HW acceleration is transparently mapped into the TC subsystem Filter&Action framework. Additionally we will suggest virtual switch control and data plane interfaces for enabling the acceleration framework.

### 添付資料URL

- [slides](https://netdevconf.info/1.1/proceedings/slides/efraim-virtual-switch-hw-acceleration.pdf)（file）
- [video](https://youtu.be/ndRChzqTWns)（link）

<a id="session-talk-challenges-testing-how-opensourcerouting-tests-quagga-martin-winter"></a>
## 5. Challenges in Testing - How OpenSourceRouting tests Quagga

- セッション個別URL: https://netdevconf.info/1.1/talk-challenges-testing-how-opensourcerouting-tests-quagga-martin-winter.html
- Track: Talks
- 日時: 2016-02-10 10:30 - 11:00

### Description

The talk gives an overview on how NetDEF/OpenSourceRouting tests the Quagga projects and discusses some of the challenges. In the talk we’ll go into the details on how we (as OpenSourceRouting) tests Quagga and the challenges we have with a multiplatform tool, supporting many different OS variations, CPU architectures and a community of various volunteers and commercial users. The goal of the talk is to give some inspiration to other projects on how to approach this and start a discussion.

### 添付資料URL

- [slides](https://netdevconf.info/1.1/proceedings/slides/winter-routing-test-quagga.pdf)（file）
- [paper](https://netdevconf.info/1.1/proceedings/papers/Challenges-in-Testing-How-OpenSourceRouting-tests-Quagga.pdf)（file）
- [video](https://youtu.be/aACmHhhwnrU)（link）

<a id="session-talk-hw-high-availability-and-link-aggregation-ethernet-switch-and-nic-rdma-using-linux-bondingteam"></a>
## 6. HW High-Availability and Link Aggregation for Ethernet switch and NIC RDMA using Linux bonding/team

- セッション個別URL: https://netdevconf.info/1.1/talk-hw-high-availability-and-link-aggregation-ethernet-switch-and-nic-rdma-using-linux-bondingteam.html
- Track: Talks
- 日時: 2016-02-10 13:00 - 13:30

### Description

The Linux networking stack support High-Availability (HA) and Link Aggregation (LAG) through usage of bonding/teaming drivers, where both set a software netdevice on top of two or more netdevs.



Those HA devices are set as "upper" devices acting over "lower" devices. The core networking stack uses notifier mechanism to announce setup/tear-down of such relations.



We show how to take advantage of standard bonding/team and their associated notifiers to reflect HW/LAG into HW and achieve enhanced functionality.



We present four use cases dealing with RDMA, SR-IOV Virtual Functions (VFs) and physical switch.



In the 1st RDMA case, the RDMA stack presents a RoCE (RDMA-over-Ethernet) device with one port where this device is backed-up by two bonded Ethernet NICs, and the HW goes through setup that makes RDMA connections set over this device (are offloaded from the networking stack) to be subject to HA and LAG.



In the SRIOV case, the PF host net-devices are bonded while the VF sees a HW device with one port. The HW setup done by the PF driver causes the overall VF traffic (both conventional TCP/IP and offloaded RDMA) to be subject to HA and LAG.



In the physical switch case, the creation of a LAG above the port netdevices is propagated to the device driver using network notifiers.



The device driver can either program the device to create the hardware LAG, or forbid the operation in case hardware resources were exceeded or because it lacks support for certain LAG parameters.



The creation of further upper devices on top the LAG is propagated to the lower port netdevices in the same way as if the upper device was created directly on top of them.



In the 2nd RDMA case, we propose an architecture for OS bypass Ethernet and RDMA bonding driver as a new kernel module for aggregating IB Devices network interfaces.



IB Device (struct ib_device) exposes verbs programing network API which allows OS bypass for RAW Ethernet networking and RDMA operations.



The driver will provide method for aggregating multiple IB device interfaces into a single logical bonded interface. This aggregation will allow existing verbs applications to use single logical device transparently and enjoy networking HA, load balancing and NUMA locality.



The IB bonding driver works similarly and in conjunction with the Linux standard bonding/team drivers and with the latter continue to support standard network aggregation.



In the talk we will present the architecture of the planned driver along with several configurations and offloads support as well as articulate various aggregation modes including Active-Active, Active Passive, resource allocation according to device affinity, and SRIOV bonding configuration.

### 添付資料URL

- [slides](https://netdevconf.info/1.1/proceedings/slides/oved-gerlitz-high-availabity-eth-switch-nic-rdma.pdf)（file）
- [paper](https://netdevconf.info/1.1/proceedings/papers/HW-High-Availability-and-Link-Aggregation.pdf)（file）
- [video](https://youtu.be/eiQCiJrC8Fk)（link）

<a id="session-talk-nftables-switchdev-support-pablo-neira-ayuso"></a>
## 7. nftables switchdev support

- セッション個別URL: https://netdevconf.info/1.1/talk-nftables-switchdev-support-pablo-neira-ayuso.html
- Track: Talks
- 日時: 2016-02-11 11:30 - 12:00

### Description

This talk covers the design and implementation of the nftables switchdev support. The goal is to introduce the audience to the new in-kernel infrastructure to represent the rulesets through a generic abstract syntax tree that can be easily transformed from the drivers into the hardware specific representation.



Whenever a netdevice comes with ACL offload capabilities and switchdev support, nftables transparently offloads the ACL configuration to the hardware. The expressiveness is restricted to the hardware capabilities. The frontend Netlink API remains the same as in pure software mode, in order to hide all the complexity to ensure easy extensibility in the long run.



This implementation relies on the rocker switch prototype and it should open the window for other new possible clients already available in the networking tree.



This infrastructure can also be potentially used to provide just-in-time (jit) compilation from the kernel backend in a way that avoids the exposition of this internal representation to userspace.

### 添付資料URL

- [slides](https://netdevconf.info/1.1/proceedings/slides/pablo-neira-nft-switchdev.pdf)（file）
- [video](https://youtu.be/_mpPvKsxOho)（link）

<a id="session-talk-getting-tc-classifier-fully-programmable-clsbpf-daniel-borkmann"></a>
## 8. On getting tc classifier fully programmable with cls_bpf

- セッション個別URL: https://netdevconf.info/1.1/talk-getting-tc-classifier-fully-programmable-clsbpf-daniel-borkmann.html
- Track: Talks
- 日時: 2016-02-12 10:00 - 10:30

### Description

In this talk/paper, we provide a technical deep-dive into the eBPF architecture, comparing it to the classic BPF framework and how tc's (traffic control) packet classification in the kernel is making use of it.



The talk will discuss recently upstreamed features to the kernel and iproute2 and walk through some examples on how classifier/actions can be programmed in restricted C and loaded into the kernel on ingress/egress side with the help of llvm and tc. It'll also cover the topic of sharing eBPF maps and working with eBPF tail calls.

### 添付資料URL

- [slides](https://netdevconf.info/1.1/proceedings/slides/borkmann-tc-classifier-cls-bpf.pdf)（file）
- [paper](https://netdevconf.info/1.1/proceedings/papers/On-getting-tc-classifier-fully-programmable-with-cls-bpf.pdf)（file）
- [video](https://youtu.be/KHXxSN5vwHY)（link）

<a id="session-talk-flow-based-tunneling-sr-iov-using-switchdev-api-ilya-lesokhin-haggai-eran-or-gerlitz"></a>
## 9. Flow-based tunneling for SR-IOV using switchdev API

- セッション個別URL: https://netdevconf.info/1.1/talk-flow-based-tunneling-sr-iov-using-switchdev-api-ilya-lesokhin-haggai-eran-or-gerlitz.html
- Track: Talks
- 日時: 2016-02-12 15:00 - 15:30

### Description

SR-IOV devices present improved performance for network virtualization, but pose limitations today on the ability of the hypervisor to manage the network. For instance, UDP and IP tunnels that are commonly used on the cloud are not supported today with SR-IOV. Flow based approaches like Open vSwitch and TC are common in managing virtual machine traffic. Both technologies are not supported with today's SR-IOV Linux driver model, which only allows to program MAC or MAC+VLAN based forwarding for virtual function traffic.



We present a design that facilitates SR-IOV performance while maintaining flow-based management for both non-tunneled and VXLAN tunneled flows and uses the switchdev framework to program the SR-IOV eSwitch. Our prototype uses hardware offloads for most traffic, and a software fallback for traffic we cannot offload.



We expose a representor netdev for each port in the SR-IOV eSwitch, one per virtual function and another for the uplink, to enable the management of these ports by the kernel and also the send and receive packets through the software fallback path. Our implementation currently uses open-vswitch for managing flows. It should be possible to extend it to other management schemes such as TC. A flow's match and actions are reflected to the underlying device using extended switchdev APIs. For tunneling we also propagate information about the tunnel FDB, and the kernel routing table and neighbor table.

### 添付資料URL

- [slides](https://netdevconf.info/1.1/proceedings/slides/lesokhin-eran-gerlitz-tunneling-sr-iov-switchdev.pdf)（file）
- [paper](https://netdevconf.info/1.1/proceedings/papers/Flow-based-tunneling-for-SR-IOV-using-switchdev-API.pdf)（file）
- [video](https://youtu.be/RDJJN5wUQUM)（link）

<a id="session-talk-scaling-number-network-interfaces-linux-david-ahern-nikolay-aleksandrov-roopa-prabhu"></a>
## 10. Scaling the Number of Network Interfaces on Linux

- セッション個別URL: https://netdevconf.info/1.1/talk-scaling-number-network-interfaces-linux-david-ahern-nikolay-aleksandrov-roopa-prabhu.html
- Track: Talks
- 日時: 2016-02-10 10:00 - 10:30

### Description

Linux is a popular OS for network switches, routers, hypervisors and other devices in the data center today. These deployments are using an increasing number of network interfaces, both physical and logical, pushing scaling and performance boundaries with the implementation.



This paper examines problems with increasing the number of network interfaces on Linux. We will mostly look at deployment and configurations on network switches, though the content discussed applies to all Linux deployments.



We plan to cover:



Large scale network interface deployment scenarios.


Performance data/numbers.


Problem areas in the kernel.


Possible solutions.


Possible solutions to scale netlink notifications and dumps.


Managing network interfaces at scale in user space.

### 添付資料URL

- [slides](https://netdevconf.info/1.1/proceedings/slides/ahern-aleksandrov-prabhu-scaling-network-cumulus.pdf)（file）
- [video](https://youtu.be/_t41_dlBO7Q)（link）

<a id="session-talk-zebra-20-and-lagopus-newly-designed-routing-stack-high-performance-packet-forwarder-yoshihiro"></a>
## 11. Zebra 2.0 and Lagopus: newly-designed routing stack on high-performance packet forwarder

- セッション個別URL: https://netdevconf.info/1.1/talk-zebra-20-and-lagopus-newly-designed-routing-stack-high-performance-packet-forwarder-yoshihiro.html
- Track: Talks
- 日時: 2016-02-10 16:00 - 16:30

### Description

Zebra 2.0 is new version of open source networking software which is implemented from scratch. Planning to support BGP/OSPF/LDP/RSVP-TE and co-working with Lagopus as fast packet forwarder with OpenFlow support.



In this new version of Zebra, it adapts new architecture which is mixture of thread model and task completion model to achieve maximum scalability with multi-core CPUs. Zebra has separate independent configuration manager that supports commit/rollback and validation functionality. The configuration manager understand YANG based configuration model so we can easily add a new configuration written in YANG.



Lagopus is an SDN/OpenFlow software switch that is designed to achieve high-performance packet processing and high-scalable flow handling leveraging multi-core CPUs and DPDK on commodity servers. Lagopus supports match/action-based packet forwarding and processing as well as encapsulation/decapsulation operation for MPLS, VxLAN, and NSH. The interwork mechanism of the userspace dataplane of Lagopus and the network stack in kernel allows easy integration with Zebra 2.0 as well as the existing routing software.



The live demo of Zebra 2.0 as networking software and Lagopus as fast packet forwarder is presented.

### 添付資料URL

- [slides](https://netdevconf.info/1.1/proceedings/slides/ishiguro-nakajima-oki-takahashi-zebra2.0-routing-software.pdf)（file）
- [paper](https://netdevconf.info/1.1/proceedings/papers/Zebra-2-0-and-Lagopus.pdf)（file）
- [video](https://youtu.be/I-5E-H1sD7U)（link）

<a id="session-talk-reducing-latency-linux-wireless-network-drivers-tim-shepard"></a>
## 12. Reducing Latency in Linux Wireless Network Drivers

- セッション個別URL: https://netdevconf.info/1.1/talk-reducing-latency-linux-wireless-network-drivers-tim-shepard.html
- Track: Talks
- 日時: 2016-02-10 10:00 - 10:30

### Description

Qdiscs such as fq_codel can be used to reduce latency in the Linux network queues. But a network device driver that has (perhaps good) reason to pull packets out of the Linux qdisc before it is actually time to transmit them can reintroduce queuing latency (in some cases much more than we would like) and result in head-of-line blocking for traffic for which the qdisc configuration is supposed to provide prioritized low-latency service.



Good reasons for a network device driver to pull packets early out of the qdisc include: (1) it needs to schedule transmissions to different destinations subject to constraints that vary per destination, (2) it needs to aggregate packets together for transmission in lower-layer bundles (to better amortize per-transmission overhead and achieve good throughput), and (3) it needs to make sure it has chained enough packets up for device DMA ahead of time so that it doesn't risk leaving the channel idle while there are more packets queued for transmission. Wireless network device drivers have all three of these, and another wrinkle: the transmission rates vary.



Byte Queue Limits (BQL) already provides a good auto-tuning solution for device drivers which only have reason (3) and whose transmission rates are not varying. Many wired network device drivers have already been enhanced with BQL to automatically figure out just the right amount of bytes to commit to the DMA queues to achieve high throughput without adding unnecessary latency. But adapting Byte Queue Limits for wireless network device drivers is not so straightforward. Besides (1) through (3) above and the extra wrinkle of varying transmission rates, wireless devices (in hardware, below the device driver) can also take varying lengths of time per transmitted packet at a given rate because of hardware retransmissions and unpredictable channel access times (e.g. on a busy channel).



We review some work towards solving this problem (e.g. mac80211 intermediate software queues), explain what is still missing, and discuss our work underway to deveop a BQL-like solution appropriate for mac80211 wireless drivers and demonstate its operation.

### 添付資料URL

- [slides](https://netdevconf.info/1.1/proceedings/slides/shepard-reducing-latency-wireless-drivers.pdf)（file）
- [video](https://youtu.be/3Rg5ONo3_Do)（link）

<a id="session-talk-deterministic-network-emulation-using-kaunetem-hurtig-johan-garcia"></a>
## 13. Deterministic network emulation using KauNetEm

- セッション個別URL: https://netdevconf.info/1.1/talk-deterministic-network-emulation-using-kaunetem-hurtig-johan-garcia.html
- Track: Talks
- 日時: 2016-02-12 12:30 - 13:00

### Description

The netem qdisc has, for a long time, been the basic building block for network emulation in Linux. While netem supports many emulation effects, there is still room for improvements. KauNetEm is an extension to netem that provides per-packet, or per-millisecond, control over emulation effects. This results in a high level of control and repeatability which can be useful in a variety of performance evaluation, and protocol implementation verification, scenarios. To control what effects, and when to apply them, KauNetEm makes use of emulation patterns.



These patterns are created ahead of time using a helper program that supports both the creation of random but repeatable patterns, and the input of lists of effects and the packets to apply them to. These lists may for example be hand-crafted to examine a particular protocol aspect, or come from various other sources. The current KauNetEm Linux implementation provides deterministic control of loss, delay, rate, bit-error, duplication and reordering emulation effects. This talk outlines and demonstrates KauNetEm's features, why they are important, and the plans going forward.

### 添付資料URL

- [slides](https://netdevconf.info/1.1/proceedings/slides/hurtig-garcia-deterministic-network-emulation-linux.pdf)（file）
- [paper](https://netdevconf.info/1.1/proceedings/papers/KauNetem-Deterministic-Network-Emulation-in-Linux.pdf)（file）
- [video](https://youtu.be/nt0G48lizUQ)（link）

<a id="session-talk-suricata-idps-and-its-interaction-linux-kernel-eric-leblond-giuseppe-longo"></a>
## 14. Suricata IDPS and its interaction with Linux kernel

- セッション個別URL: https://netdevconf.info/1.1/talk-suricata-idps-and-its-interaction-linux-kernel-eric-leblond-giuseppe-longo.html
- Track: Talks
- 日時: 2016-02-10 15:30 - 16:00

### Description

Suricata is an open source network intrusion detection and prevention system. It analyzes the traffic content against a set of signatures to discover known attacks and also journalize protocol information.



One specificity of IDS systems is that they need to analyze the traffic as it is seen by the target. For example, the TCP streaming reconstruction has to be done the same way it is done on the target operating systems and for this reason it can't rely on its host operating system to do it.



Suricata interacts in a number of ways with the underlying operating system to capture network traffic. Under Linux it supports a wide range of capture methods ranging from AF_PACKET to NFQUEUE or NFLOG.



The purpose of this talk is to describe how some different performance challenges and interactions have been addressed with the Linux kernel and to show which works are in progress to increase performance. We will also explain in detail which are the current limitation, and some ideas that looked good at first, but wrong at the end. Finally, we will cover some possible evolutions like the offloading of some known good traffic.

### 添付資料URL

- [slides](https://netdevconf.info/1.1/proceedings/slides/leblond-longo-suricata-idps-linux.pdf)（file）
- [paper](https://netdevconf.info/1.1/proceedings/papers/Suricata-IDPS-and-its-interaction-with-Linux-kernel.pdf)（file）
- [video](https://youtu.be/hCY39jjnHUY)（link）

<a id="session-talk-classhofires-whos-got-your-back-jamal-hadi-salim-lucas-bates"></a>
## 15. The CLASShoFIREs: who's got your back?

- セッション個別URL: https://netdevconf.info/1.1/talk-classhofires-whos-got-your-back-jamal-hadi-salim-lucas-bates.html
- Track: Talks
- 日時: 2016-02-10 9:30 - 10:00

### Description

In this paper we are going to do performance comparison between two new tc packet classification approaches added to the kernel recently, ebpf and flower in comparison with old lady u32. The talk is going to briefly discuss their differing philosophical approaches in solving the packet classification problem and then focus on their respective compute overheads from a black box perspective in a methodical way.



Different data path insertion points will be analyzed from a throughput perspective in conjunction with control plane overhead.



If time permits, the talk will dig into the algorithmic overheads inside each classifier black box and discuss any fixes or suggested fixes.

### 添付資料URL

- [slides](https://netdevconf.info/1.1/proceedings/slides/hadi-bates-linux-traffic-control.pdf)（file）
- [paper](https://netdevconf.info/1.1/proceedings/papers/The-CLASHoFIRES-Who-s-Got-Your-Back.pdf)（file）
- [video](https://youtu.be/I5BOJO5ibRY)（link）

<a id="session-talk-macsec-encryption-wired-lan-sabrina-dubroca"></a>
## 16. MACsec: encryption for the wired LAN

- セッション個別URL: https://netdevconf.info/1.1/talk-macsec-encryption-wired-lan-sabrina-dubroca.html
- Track: Talks
- 日時: 2016-02-12 16:00 - 16:30

### Description

MACsec, or IEEE 802.1AE, is an encryption standard for wired LANs. It can also secure VLANs, protect DHCP traffic, prevent tampering on ethernet headers, on real devices or over VXLAN. It can be used on its own, or rely on 802.1X for authentication and key distribution via the MACsec Key Agreement (MKA) extension.



In a cloud setting, MACsec over VXLAN could allow encryption to be performed by the tenants themselves instead of relying on the provider's hypervisor.



This talk will give an overview of MACsec, present some use cases, describe MACsec's proposed implementation for the Linux kernel, and areas of future work.

### 添付資料URL

- [slides](https://netdevconf.info/1.1/proceedings/slides/dubroca-macsec-encryption-wire-lan.pdf)（file）
- [paper](https://netdevconf.info/1.1/proceedings/papers/MACsec-Encryption-for-the-wired-LAN.pdf)（file）
- [video](https://youtu.be/LZTxmOMGpwc)（link）

<a id="session-talk-bridge-filtering-nftables-florian-westphal"></a>
## 17. Bridge filtering with nftables

- セッション個別URL: https://netdevconf.info/1.1/talk-bridge-filtering-nftables-florian-westphal.html
- Track: Talks
- 日時: 2016-02-11 12:00 - 12:30

### Description

The current Linux bridge/ebtables architecture has several shortcomings. In the past those were worked around by adding 'header stripping' features to the bridge netfilter core or by invoking ip(6)tables hooks directly from the bridge layer.


Nftables, a framework to replace and unify the various packet filtering tools in the Linux kernel offers an opportunity to provide a more flexible approach to handling bridge filtering needs.


After a brief summary of the ebtables and bridge filtering issues, this will show some of the advantages that nft bridge offers over ebtables and present some features that are currently being worked on. Two of these will be presented in detail:



Stateful filtering (connection tracking) on a bridge.
We will examine current state of netfilter conntrack in the linux kernel and the problems we have, then see how this could be addressed in nftables bridge.


Nfqueue (userspace queuing) for the nft bridge family.
Often requested for ebtables, but nothing ever materialized. Two possible implementation approaches and their different pros/cons from userspace usability/convenience point of view will be discussed. This also touches on the old topic on how VLAN headers should be presented to userspace.

### 添付資料URL

- [slides](https://netdevconf.info/1.1/proceedings/slides/westphal-bridge-filtering-nftables.pdf)（file）
- [paper](https://netdevconf.info/1.1/proceedings/papers/Bridge-filter-with-nftables.pdf)（file）
- [video](https://youtu.be/fcQikLA6Tjg)（link）

<a id="session-talk-ipv6-route-lookup-performance-and-scaling-michal-kube%c4%8dek"></a>
## 18. IPv6 route lookup performance and scaling

- セッション個別URL: https://netdevconf.info/1.1/talk-ipv6-route-lookup-performance-and-scaling-michal-kube%c4%8dek.html
- Track: Talks
- 日時: 2016-02-10 15:00 - 15:30

### Description

Some of our customers have been observing IPv6 performance problems on their high load routers; these could be tracked down to IPv6 route lookup and its scaling to higher number of CPU.


To get an idea how serious the problem is, we performed series of microbenchmarks of IPv4 and IPv6 route lookup. While IPv4 route lookup is really efficient in recent kernels and scales nicely both with respect to size of FIB and to the number of benchmark threads running in parallel, IPv6 results were disappointing. Even single-thread lookups are much slower and with higher number of threads (16 and more), the performance is sometimes worse than if all lookups were run in one thread.


This direct comparison of IPv4 and IPv6 route lookup performance suggests one possible solution: to redesign IPv6 data structures and algorithms to follow the LPC trie implementation used for IPv4.


The talk presents benchmark results, attempts to explain the difference and presents results with a proof of concept implementation based on the IPv4 FIB.

### 添付資料URL

- [slides](https://netdevconf.info/1.1/proceedings/slides/kubecek-ipv6-route-lookup-performance-scaling.pdf)（file）
- [video](https://youtu.be/7SD4GKhSmxE)（link）

<a id="session-talk-measuring-wifi-performance-across-all-google-fiber-customers-avery-pennarun"></a>
## 19. Measuring wifi performance across all Google Fiber customers

- セッション個別URL: https://netdevconf.info/1.1/talk-measuring-wifi-performance-across-all-google-fiber-customers-avery-pennarun.html
- Track: Talks
- 日時: 2016-02-10 12:00 - 12:30

### Description

In the last year, Google Fiber has added lots of interesting (and open source) self-analysis features to our fleet of wifi access points in customers' homes in Kansas City, Provo, and Austin. In the background we collect data like transfer speeds, signal strength, device capabilities, background interference, and so on.  We also have a "device taxonomy" that allows us to break down the data by device types such as tablets, iPhones, Windows PCs, Chromecasts, etc. Avery will show lots of surprising and unsurprising charts and show how they
lead to some important suggestions for the future of wifi on Linux.

### 添付資料URL

- [slides](https://netdevconf.info/1.1/proceedings/slides/pennarun-google-fiber-wifi-data.pdf)（file）
- [video](https://youtu.be/yZcHbD84j5Y)（link）

<a id="session-talk-load-balancing-nftables-laura-garcia"></a>
## 20. Load balancing with nftables

- セッション個別URL: https://netdevconf.info/1.1/talk-load-balancing-nftables-laura-garcia.html
- Track: Talks
- 日時: 2016-02-12 10:30 - 11:00

### Description

Description
IPVS allows very easy deployment of Linux-based load-balancers. Probably less well-known is the fact that you can also use iptables rules using the existing matches and targets to implement many of the core load-balancing features such as different scheduling approaches and dispatching methods, flow persistency, etc.



This talk discusses the implementation of a Linux-based load-balancers using iptables, we will describe our ruleset configurations, lessons learnt from integration issues with Netfilter and other networking software and existing limitations. Moreover, we plan outline a prototype based on nftables, detailing what is missing and what we consider good to have to improve its load-balancing capabilities.

### 添付資料URL

- [slides](https://netdevconf.info/1.1/proceedings/slides/garcia-load-banlancing-nftables.pdf)（file）
- [paper](https://netdevconf.info/1.1/proceedings/papers/Load-balancing-with-nftables.pdf)（file）
- [video](https://youtu.be/Jq6sxsnOt6g)（link）

<a id="session-talk-networking-your-pocket-how-linux-networking-stack-made-work-android-devices-lorenzo-colitti"></a>
## 21. Networking in your pocket: how the Linux networking stack is made to work on Android devices

- セッション個別URL: https://netdevconf.info/1.1/talk-networking-your-pocket-how-linux-networking-stack-made-work-android-devices-lorenzo-colitti.html
- Track: Talks
- 日時: 2016-02-10 11:30 - 12:00

### Description

The Linux networking stack is regularly used by over a billion mobile devices such as phones, tablets, and watches. The networking problems faced by these devices are very different from non-mobile hosts such as workstations, servers and routers.



The challenges posed by inescapable requirements such as simultaneous connection to multiple networks in different administrative domains, intermittent connectivity, fast seamless mobility, untrusted networks, captive portals and disconnected hotspots, per-application network policies, accounting and metering, and the need for good battery life - features that users are not willing to compromise on - may not be obvious to the kernel networking development community. Perhaps owing to the lack of a clear problem statement, some of the currently-shipping solutions to those problems have been seen as inappropriate for inclusion in mainline Linux networking.



This talk will cover how the Android networking stack has addressed some of the challenges and how much userspace configuration and out-of tree work was necessary to do so. We will cover the current state of Android networking today - particularly the amount of complex
userspace configuration necessary to support connection to multiple administrative domains using a networking stack that implements the weak host model - and work that was successfully upstreamed. We will also cover current features that were not accepted upstream and
potential alternative approaches that could be implemented. We will touch on the limitations of the current design and how kernel support would help resolve them. Finally, we will cover future work, such as the IETF multiple provisioning domain API work, which has the potential to pose even greater challenges.

### 添付資料URL

- [slides](https://netdevconf.info/1.1/proceedings/slides/colitti-kline-linux-networking-android-devices.pdf)（file）
- [video](https://youtu.be/dMp21rAp9Hw)（link）

<a id="session-talk-kernel-level-gtp-generic-tunneling-protocol-implementation-harald-welte-andreas-schultz"></a>
## 22. Kernel-level GTP (Generic Tunneling Protocol) implementation

- セッション個別URL: https://netdevconf.info/1.1/talk-kernel-level-gtp-generic-tunneling-protocol-implementation-harald-welte-andreas-schultz.html
- Track: Talks
- 日時: 2016-02-11 15:00 - 15:30

### Description

When users access the Internet via cellular networks from their mobile devices, all this traffic is encapsulated and tunneled through a variety of cellular-network specific protocol layers.  Many of those protocol implementations run on proprietary special-purpose hardware and software.



One protocol has been in use between certain network elements ever since the advent of GPRS services.  This protocol remained in use with EDGE, UMTS, HSPA and is even still in use in LTE:  The GPRS Tunneling Protocol (GTP).



GTP is split in a control plane and a user plane.  The user plane at todays cellular internet speeds can no longer be implemented efficiently in userspace but requires a kernel-level implementation, much the same like we have kernel-level implementations for GRE, IPIP, PPP, L2TP and others.



This presentation is about a Linux kernel level implementation of GTP-U that was started by Harald Welte and Pablo Neira within the Osmocom (Open Source Mobile Communications, http://www.osmocom.org/) project.



After being abandoned for some time, recent interest (and contributions, particularly by Andreas Schultz) to this kernel GTP code has brought it back on track, and its authors aim for Linux kernel mainline inclusion.



We will also cover some context in terms of where GTP is used in practise, and which programs are already using the kernel-level GTP code.

### 添付資料URL

- [slides](https://netdevconf.info/1.1/proceedings/slides/schultz-welte-osmocom-gtp.pdf)（file）
- [video](https://youtu.be/puCMipd8fck)（link）

<a id="session-talk-state-and-future-generic-6lowpan-branch-alexander-aring"></a>
## 23. State and Future of generic 6LoWPAN branch

- セッション個別URL: https://netdevconf.info/1.1/talk-state-and-future-generic-6lowpan-branch-alexander-aring.html
- Track: Talks
- 日時: 2016-02-10 16:30 - 17:00

### Description

6LoWPAN stands for IPv6 over Low-Rate Wireless Area Network and was original specified for 802.15.4 wireless networks. The IEEE 802.15.4 wireless standard is such Low-Rate WPAN standard. The 6LoWPAN stack provides an adaptation layer to run IPv6 on top of a specific link-layer like 802.15.4.



Nowadays 6LoWPAN isn't only an acronym for running IPv6 on top of WPANs anymore. There are several upcoming RFCs to run 6LoWPAN on various link-layers like NFC, Powerline, DECT, etc. The most link-layer 6LoWPAN RFCs for each new link-layer adaptation refers to the first original RFCs which is the 802.15.4 6LoWPAN specification. The reason behind that is to keeping same mechanism with slightly link-layer specific changes. The generic 6LoWPAN branch offers these mechanism which are specified by more than one link-layer 6LoWPAN specifications.



Planned Agenda:



This talk will start with the current state of generic 6LoWPAN and how link-layers subsystems use it. After that the talk will show the future plans for the 6LoWPAN generic branch which contains a simple 6LoWPAN netdevice registration framework and offering a unify userspace abstraction. Also it will point out issues by doing 6LoWPAN adaptation to the Linux IPv6 stack.

### 添付資料URL

- [slides](https://netdevconf.info/1.1/proceedings/slides/aring-generic-6lowpan-branch.pdf)（file）
- [paper](https://netdevconf.info/1.1/proceedings/papers/State-and-Future-of-generic-6LoWPAN-branch.pdf)（file）
- [video](https://youtu.be/DPpadPa6IB8)（link）

<a id="session-talk-adventure-analysis-and-optimisation-linux-networking-stack-marco-varlese-kim-marie-jones"></a>
## 24. An adventure of analysis and optimisation of the Linux networking stack

- セッション個別URL: https://netdevconf.info/1.1/talk-adventure-analysis-and-optimisation-linux-networking-stack-marco-varlese-kim-marie-jones.html
- Track: Talks
- 日時: 2016-02-10 10:30 - 11:00

### Description

There are plenty of blogs and documentation detailing how to fine tune the Linux networking stack for improved performance (throughput, latency, scalability, etc.). Some of them contradict each other and most of them are definitely not up-to-date with the latest changes
available on Linux today, nor with the latest CPU families.



We have taken a step back; starting from what is known to be the best-in-class setup for throughput (and similarly for latency), we began analysing the Linux networking stack performance via the Linux profiling tool Perf.



Our objectives were to identify bottlenecks (i.e. locks, memory copies, interrupt handlers, cache misses, TLB misses, etc.) and to possibly enhance the existing code based on our findings.



Agenda:



Purpose of this work.


HW, SW, lab setup and use cases overview.


Impact of different settings and values on system throughput and latency.


Our recipe for success.


Recommended code changes/enhancements

### 添付資料URL

- [slides](https://netdevconf.info/1.1/proceedings/slides/varlese-jones-analysis-optimisation-networking-stack.pdf)（file）
- [video](https://youtu.be/e94kSaDItZE)（link）

<a id="session-talk-securing-traffic-tunnelled-over-l3-sowmini-varadhan"></a>
## 25. Securing traffic tunnelled over L3

- セッション個別URL: https://netdevconf.info/1.1/talk-securing-traffic-tunnelled-over-l3-sowmini-varadhan.html
- Track: Talks
- 日時: 2016-02-10 9:30 - 10:00

### Description

We have a number of L3 tunnelling mechanisms for the cloud such as VXLAN, Geneve, GUE etc.  In addition we also have have new socket types like PF_RDS and the kcm proposal which tunnel over tcp from the socket layer and have their own set of challenges. See http://www.spinics.net/lists/netdev/msg347648.html.



In all these cases, the L3 socket is a kernel socket that is transparently created in the kernel, and over which tenant/user-space/application data is tunnelled.



The challenge here is "how to encrypt/secure the traffic". Minimally want to encrypt application payload, you may additionally want to secure the tunnelling protocol itself.



Since these are kernel sockets, TLS is not easily available.

Some possible options are:




TLS in kernel?  Historically, Solaris tried this with kssl in 1999, I can supply some history on the techincal problems that were encountered and why it is eventually being EOF'ed.


Netflix has investigated the client side implementation of a kernel-TLS to an extent [https://people.freebsd.org/~rrs/asiabsd_2015_tls.pdf] and their results, which are based on using a very restricted version of TLS, needs some examination. However, the assumption is hat even if a kernel-TLS were feasible/interesting, it would eventually use existing kernel crypto APIs, which are also used by ipsec today (see below).


You could use IPSEC in transport mode, and encrypt both the application data and the L3 header itself. IPSEC is well-understood, commonly deployed technology which makes it attractive as a solution here.

I will share some result of the benefits and drawbacks of using IPSEC for L3 tunnelling techniques, and the performance profiles using a few crytpo algorithms and platforms. Our test results will be based on micro-benchmarking tools like iperf/netperf, as well as typical database workloads using PF_RDS sockets. The objective will be to generate some focussed discussion on the areas where we need to improve ipsec performance and/or come up with config utilities to make this easier to use.




In this talk, I'll be providing an analysis of these possible solutions.

### 添付資料URL

- [slides](https://netdevconf.info/1.1/proceedings/slides/varadhan-securing-tunneled-kenel-tcp-udp-sockets.pdf)（file）
- [paper](https://netdevconf.info/1.1/proceedings/papers/Securing-Traffic-Tunnelled-over-TCP-or-UDP.pdf)（file）
- [video](https://youtu.be/0x67kqF9DpM)（link）
- [https://people.freebsd.org/~rrs/asiabsd_2015_tls.pdf](https://people.freebsd.org/~rrs/asiabsd_2015_tls.pdf)（file）

<a id="session-tutorial-nftables-ingress-pablo-neira-ayuso"></a>
## 26. nftables from ingress

- セッション個別URL: https://netdevconf.info/1.1/tutorial-nftables-ingress-pablo-neira-ayuso.html
- Track: Tutorials
- 日時: 2016-02-11 10:00 - 11:00

### Description

nftables was merged to Linux kernel 3.13, being announced as an ongoing development effort to overcome the existing limitations of the popular {ip,ip6,arp,eb}tables userspace tools and the xtables kernel framework.



nftables provides a new kernel framework for packet classification based on a virtual machine with an extensible network-specific instruction set that is accessible through a Netlink API. This comes with a new extended tracing infrastructure, dynamic ruleset updates through a 2-phase commit protocol, rule update monitoring, dynamic set instantiation to build flow tables.



From userspace, the project provides libraries for third party applications and the userspace nft utility that provides an expressive and extensible compiler for our rule-based network language with a human-friendly syntax which comes with scripting support as well as an interactive native shell.



Since 4.2, the Netfilter infrastructure now comes with a new ingress hook before prerouting that opens the window to adopt nftables to classify and filter traffic as alternative to tc. This tutorial introduces you to nf_tables features in general, and more specifically this will cover use-case examples from this new hook.

### 添付資料URL

- [slides](https://netdevconf.info/1.1/proceedings/slides/pablo-neira-nft-ingress.pdf)（file）
- [video](https://youtu.be/Y3C1BvP2KN8)（link）

<a id="session-tutorial-deploying-mpls-linux-roopa-prabhu"></a>
## 27. Deploying MPLS with Linux

- セッション個別URL: https://netdevconf.info/1.1/tutorial-deploying-mpls-linux-roopa-prabhu.html
- Track: Tutorials
- 日時: 2016-02-12 10:00 - 11:00

### Description

The Linux kernel recently added a new MPLS datapath driver and API to configure MPLS fib. This tutorial introduces users to these recent MPLS developments in the Linux kernel and walks through the process of setting up and deploying MPLS with Linux.


Agenda:



A brief introduction to MPLS.


Linux kernel MPLS infrastructure.


Light weight tunnel infrastructure.


MPLS ip tunnels using the light weight tunnel infrastructure.


Deploying Linux MPLS LSP and LER routers.


Futures.

### 添付資料URL

- [slides](https://netdevconf.info/1.1/proceedings/slides/prabhu-mpls-tutorial.pdf)（file）
- [video](https://youtu.be/8LcniEuCuGM)（link）

<a id="session-tutorial-namespaces-and-cgroups-basis-linux-containers-rami-rosen"></a>
## 28. Namespaces and CGroups, the basis of Linux containers

- セッション個別URL: https://netdevconf.info/1.1/tutorial-namespaces-and-cgroups-basis-linux-containers-rami-rosen.html
- Track: Tutorials
- 日時: 2016-02-10 11:30 - 12:30

### Description

It is clear to everyone that containers are getting a growing part in our world. This tutorial will describe the kernel infrastructure of Linux Container projects, namely the Namespaces and CGroups subsystems, focusing on its network aspects (like Network namespaces and CGouprs networking kernel modules).



This is the suggested agenda of the talk:




Background: Namespaces/CGroups, the basis of containers virtualization.


Kernel Namespaces implementation.


The 6 kernel namespaces - some implementation details.


System calls for namespaces.


Namespaces usage examples, especially detailed examples of network namespaces, the ip netns command, etc.


CGroups kernel implementation.


CGroups VFS.


CGroups filesystem ops for handling cgroups examples.


The CGroups implementation.


3 CGroups userspace examples


A very brief overview of Linux Containers projects and how they use Namespaces and CGroups.


Summary.




I gave this talk voluntarily three times in the past, in a LUG  and in 2 meetups, and got a very good feedback from the audience. You can see the very detailed presentations here: http://haifux.org/lectures/299/.



These are links to the talks in the two meetups I mentioned earlier:



http://www.meetup.com/Docker-Tel-Aviv/events/170674332/


http://www.meetup.com/Tel-Aviv-Yafo-Linux-Kernel-Meetup/events/226778388/.

### 添付資料URL

- [slides](https://netdevconf.info/1.1/proceedings/slides/rosen-namespaces-cgroups-lxc.pdf)（file）
- [video](https://youtu.be/zMJD8PJKoYQ)（link）

<a id="session-tutorial-running-cellular-network-infrastructure-linux-harald-welte"></a>
## 29. Running Cellular Network Infrastructure on Linux

- セッション個別URL: https://netdevconf.info/1.1/tutorial-running-cellular-network-infrastructure-linux-harald-welte.html
- Track: Tutorials
- 日時: 2016-02-10 12:30 - 13:30

### Description

Traditionally, much unlike the Ethernet/IP network, classic telecom infrastructure has been running proprietary hardware, operating systems and protocol stacks.



In recent years, some Free Software projects have set out to implement some of the related protocol stacks and network elements on top of Linux, including the unrelated OpenBTS and OpenBSC projects, as well as the less known other members of the Osmocom umbrella project: OsmoBSC, OsmoNITB, OsmoBTS, OsmoPCU, OsmoSGSN, OpenGGSN, and many more.



As signalling protocols tend to be complex and in many use cases the signalling performance is not super critical, those projects primarily implement the protocol stacks and network interfaces in user-space.



This presentation will cover an overview of the many different projects out there, which of the cellular network elements they implement.

### 添付資料URL

- [slides](https://netdevconf.info/1.1/proceedings/slides/welte-foss-cellular-network-linux.pdf)（file）
- [video](https://youtu.be/I4i2Gy4JhDo)（link）

<a id="session-tutorial-ipset-tool-faster-more-efficient-firewalling-iptables-jozsef-kadlecsik"></a>
## 30. Ipset - a tool for faster, more efficient firewalling with iptables

- セッション個別URL: https://netdevconf.info/1.1/tutorial-ipset-tool-faster-more-efficient-firewalling-iptables-jozsef-kadlecsik.html
- Track: Tutorials
- 日時: 2016-02-12 11:30 - 12:30

### Description

Building a firewall with netfilter/iptables is an easy task: there are countless of extensions and just imagination limits us. However, in practice the goal is to build a fast and efficient firewall, usually with a large number of rules and that is a not so trivial task. ipset comes to help in that case: most of the rules can be collapsed into fast matches in sets. In this tutorial ipset will be explained in details, both the features with which efficient firewalls can be built up and the internals which provides the fast evaluations.

### 添付資料URL

- [slides](https://netdevconf.info/1.1/proceedings/slides/kadlecsik-ipset-firewalling-iptables.pdf)（file）
- [video](https://youtu.be/dMz9A4Jh0_c)（link）

<a id="session-tutorial-using-sr-iov-openstack-alexander-duyck"></a>
## 31. Using SR-IOV on OpenStack

- セッション個別URL: https://netdevconf.info/1.1/tutorial-using-sr-iov-openstack-alexander-duyck.html
- Track: Tutorials
- 日時: 2016-02-12 9:00 - 10:00

### Description

The purpose of this tutorial is to demonstrate the current state of the art in terms of Linux SR-IOV support. While OpenStack is used to configure the environment, the tutorial content is applicable for other uses of SR-IOV as well.



The tutorial will provide clarity on what can be achieved with SR-IOV today.



Issues found by the author in the OpenStack use case will be highlighted and work in progress to fix them will be discussed.



Agenda:



Introduction to SR-IOV 101.


Present the current architecture of SR-IOV with on OpenStack.


Demo SR-IOV enabled DevStack configuration.



Discuss future plans including:



SR-IOV Hotplug.


Live Migration w/ VFs.


Discuss limitations of SR-IOV.


Lack of PF promiscuous support.

### 添付資料URL

- [slides](https://netdevconf.info/1.1/proceedings/slides/duyck-sr-iov-openstack.pdf)（file）
- [video](https://youtu.be/ZEoTlC-gLBE)（link）

<a id="session-tutorial-libos-regression-test-framework-linux-networking-hajime-tazaki"></a>
## 32. LibOS as a regression test framework for Linux networking

- セッション個別URL: https://netdevconf.info/1.1/tutorial-libos-regression-test-framework-linux-networking-hajime-tazaki.html
- Track: Tutorials
- 日時: 2016-02-12 15:00 - 16:00

### Description

Linux library operating system, a.k.a. LibOS, has been proposed in the linux-kernel communities with two specific applications and usecases, 1) regression testing environment with a network simulator, and 2) network stack personality with the ad-hoc replacement of network stack (i.e., NUSE). After the patch proposal and the presentation at the last netdev 0.1, it also got may feedback ranging from concerns about maintenance burden to future possibilities such as small operating systems for cloud (*1 *2).



In this tutorial, we provide one of the interesting use case which is a regression testing framework of kernel network stack in userspace programs. With the simplicity of test scripts/programs written as a network simulator script, and the reproducibility by using virtual clock of network simulator, the testing framework is useful to check regressions in frequently-changing code bases: we have detected a couple of actual regressions during the growth of net-next repository.



We will firstly introduce a brief overview of what LibOS is, its history including recent discussion with LKL (Linux kernel library), and updates including trial running on QEMU without booting kernel, vfs support etc (if everything goes well). Then go through how many regressions we have found with the tool, and how our testing framework is useful, how other testing framework couldn't detect such regressions, and then how we can implement our own test than our pre-installed tests. We are not going to discuss why we should apply
test-driven-development (TDD) or what kind of software development process is great, etc, but will try to focus on presenting our experience of bug hunting and introduction to extend tests.



Target audience is (of course) the developer of all of network stack subsystem (under net/ directory) and any people who are interested in testing of software in a large network with complex configurations. I'm not going to give a hands-on tutorial but give a material which everybody can follow the tutorial later.



Reference:



*1: http://lwn.net/Articles/639333/


*2: http://www.linux-magazine.com/Issues/2015/176/Kernel-News

### 添付資料URL

- [slides](https://netdevconf.info/1.1/proceedings/slides/tazaki-libos-regression-test-framework.pdf)（file）
- [video](https://youtu.be/FNGkMFmboEc)（link）

<a id="session-tutorial-tree-support-100g-switch-no-more-sdk-elad-raz-jiri-pirko"></a>
## 33. In-tree support for 100G switch, no more SDK

- セッション個別URL: https://netdevconf.info/1.1/tutorial-tree-support-100g-switch-no-more-sdk-elad-raz-jiri-pirko.html
- Track: Tutorials
- 日時: 2016-02-11 9:00 - 10:00

### Description

Purpose of this tutorial is to demonstrate setup of 100G switch based on Mellanox Spectrum ASIC. There is no "SDK", no proprietary software, switch is running FOSS, namely Fedora distribution and upstream kernel, including switchdev-based mlxsw driver.



Agenda:



Quick HW and topology overview.


Demonstrate mlxsw architecture based on switchdev kernel infrastructure.


Demo with HW - Spectrum ASIC based switch - bootup, configuration of bridge, VLANs, bonding, run traffic, show statistics etc.

### 添付資料URL

- [slides](https://netdevconf.info/1.1/proceedings/slides/raz-pirko-switchdev.pdf)（file）
- [video](https://youtu.be/WBYOWeFZqQ4)（link）

<a id="session-tutorial-confirmed-using-vrf-implementation-linux-david-ahern"></a>
## 34. Using the VRF Implementation in Linux

- セッション個別URL: https://netdevconf.info/1.1/tutorial-confirmed-using-vrf-implementation-linux-david-ahern.html
- Track: Tutorials
- 日時: 2016-02-12 9:00 - 10:00

### Description

Support for Virtual Routing and Forwarding (VRF) was recently added to the Linux kernel. Core IPv4 support is in v4.3 and core IPv6 support is in v4.4. This tutorial introduces users to the VRF implementation, showing them how to create and configure VRFs, expectations for processes, and commands to show VRF based configuration and debugging.  A few typical VRF use cases will be covered, such as basic management VRF, VRFs with VLANs, VRFs with MPLS and inter-VRF routing.

### 添付資料URL

- [slides](https://netdevconf.info/1.1/proceedings/slides/ahern-vrf-tutorial.pdf)（file）
- [video](https://youtu.be/zxPFFdRN_x4)（link）

<a id="session-bof-describing-datapath-processing-userspace-policy-brenden-blanco-john-fastabend"></a>
## 35. Describing datapath processing from userspace policy

- セッション個別URL: https://netdevconf.info/1.1/bof-describing-datapath-processing-userspace-policy-brenden-blanco-john-fastabend.html
- Track: BoFs
- 日時: 2016-02-11 15:30 - 17:00

### Description

There is an increasing demand for languages and tools to describe datapath processing from userspace policy. This includes packet parsing, mangling, lookups and forwarding actions. This BoF will collect the experience of ongoing efforts from different fronts to resolve this problem in the Linux networking area.

### 添付資料URL

- [slides](https://netdevconf.info/1.1/proceedings/slides/blanco-Fastabend-datapath-processing-userspace-policy.pdf)（file）
- [video](https://youtu.be/8nsMJ6SeLbc)（link）

<a id="session-bof-network-performance-bof-jesper-dangaard-brouer"></a>
## 36. Network Performance BoF

- セッション個別URL: https://netdevconf.info/1.1/bof-network-performance-bof-jesper-dangaard-brouer.html
- Track: BoFs
- 日時: 2016-02-12 11:30 - 13:00

### Description

This BoF is not about the amazing performance improvements we have completed over the last year. This BoF is about existing bottlenecks observed in the kernel network-stack, and how to tackle these.



It is a forum where we discuss how to address and tackle these existing bottlenecks.



We call for speakers, wanting to share their observations and who seek input from the community and the kernel network developers present at this conference.



The format; for each subject area, the speaker must limit the number of slides (2-5) describing the bottleneck and use-case it occurs in. We do encourage speakers to propose several possible ways they imagine to tackle the bottleneck, but leaves it up to the audience to discuss which path is the most fruitful. We do encourage new bold and crazy ideas to surface.



This session hope to see kernel developers with deep code level knowledge of the Linux kernel network stack.

### 添付資料URL

- [slides](https://netdevconf.info/1.1/proceedings/slides/dangaard-network-performance.pdf)（file）
- [video](https://youtu.be/5eWmExBxidA)（link）

<a id="session-bof-switchdev-roopa-prabhu-shrijeet-mukherjee"></a>
## 37. switchdev

- セッション個別URL: https://netdevconf.info/1.1/bof-switchdev-roopa-prabhu-shrijeet-mukherjee.html
- Track: BoFs
- 日時: 2016-02-10 16:00 - 17:30

### Description

The switchdev project in the Linux Kernel has come a long way in preserving the Linux networking API across devices with differing capabilities. It has provided a path to unify networking configuration across all devices running Linux (Servers, small wireless devices and data center switches). Over the past year (thanks to its maintainers and the community!) the project has seen many networking drivers (notably dsa) move to this new infrastructure and it also recently received a 100G switch driver user!



The purpose of this BOF is to discuss status/open-issues and HW offload API's and support for newer networking features:



Offloading ACL's to HW: choices and the offload API.


HW resource accounting.


Offload error handling policy.


New offload API's for vxlan, IGMP snooping and policy routing.

### 添付資料URL

- [slides](https://netdevconf.info/1.1/proceedings/slides/prabhu-Mukherjee-hardware-offload.pdf)（file）
- [video](https://youtu.be/nEt9kONveXY)（link）

<a id="session-bof-ipsec-performance-steffen-klassert"></a>
## 38. IPsec performance

- セッション個別URL: https://netdevconf.info/1.1/bof-ipsec-performance-steffen-klassert.html
- Track: BoFs
- 日時: 2016-02-11 12:30 - 13:00

### Description

IPsec suffers from poor performance compared to non IPsec protocols. This is mostly because the needed crypto operations are cpu intensive, but also the IPsec networking path is not well optimized.


This BoF is to discuss possible improvements of the IPsec networking path.


Here we want to consider pure software improvements as well as hardware support for IPsec.


Possible improvements could be:



Avoid copying most of the data frames before doing crypto.


Adding a software GRO/GSO codepath for IPsec.


Support IPsec offloading to NICs.


Change xfrm_policy_lock from rwlock to rcu.



The following people should attend:



Network developers with IPsec background.


Network driver developers whose hardware supports IPsec.


IPsec users.

### 添付資料URL

- [slides](https://netdevconf.info/1.1/proceedings/slides/klassert-ipsec-performance.pdf)（file）
- [video](https://youtu.be/JSbU5YE8Hc0)（link）

<a id="session-bof-unlocking-sr-iov-linux-john-fastabend"></a>
## 39. Unlocking SR-IOV in Linux

- セッション個別URL: https://netdevconf.info/1.1/bof-unlocking-sr-iov-linux-john-fastabend.html
- Track: BoFs
- 日時: 2016-02-12 15:30 - 17:00

### Description

The Linux kernel does not fully utilize existing hardware capabilities provided by SR-IOV. As a result user-space consumers (such as libvirt) end up only supporting the most basic of features. The result is serious users of SR-IOV end up depending on proprietary implementations outside of Linux.


The purpose of this BOF is to get SR-IOV on Linux unstuck from the current stall.


Any of the following are highly encouraged to attend:



Driver developers.


Network developers.


User space developers consuming SR-IOV.


Users interested in consuming SR-IOV.



A tentative agenda (we would like to solicit topics as well):



Layer 3 support for virtual functions.


Wildcard lookups for ACLs and forwarding.


Tunnel support, including encap/decap.


Virtual function live migration.


PF promiscuous support.


Monitoring support.


Integration with OVS, bridge, 'tc', and netfilter.



Note: Alex Duyck's tutorial is a good introduction to SR-IOV and both beginners and experienced netdevers are encouraged to attend that tutorial before showing up for the BOF.

### 添付資料URL

- [video](https://youtu.be/z-cfGXJ3iTs)（link）

<a id="session-keynote-linux-networking-and-data-center-operations-challenges-damascene-joachimpillai"></a>
## 40. Linux Networking and Data Center Operations Challenges

- セッション個別URL: https://netdevconf.info/1.1/keynote-linux-networking-and-data-center-operations-challenges-damascene-joachimpillai.html
- Track: Keynotes
- 日時: 2016-02-11 13:00 - 13:30

### Description

DJ is responsible for Software and Systems Architecture of Verizon’s Network Evolution program. He has paid for his sins already with many years of Network Development and is now focused on large scale network deployment. He has a keen interest in parallelism of the Network Processing applications and is a big fan of open networking in which he believes Linux plays an important role.

### 添付資料URL

- [slides](https://netdevconf.info/1.1/proceedings/slides/joachimpillai-linux-networking-data-center-operation-challenges.pdf)（file）
- [paper](https://netdevconf.info/1.1/proceedings/papers/)（link）
- [video](https://youtu.be/FLXafTTrlfY)（link）

<a id="session-keynote-hardware-checksumming-less-more-david-s-miller"></a>
## 41. Hardware Checksumming: Less is More

- セッション個別URL: https://netdevconf.info/1.1/keynote-hardware-checksumming-less-more-david-s-miller.html
- Track: Keynotes
- 日時: 2016-02-12 13:00 - 13:30

### Description

We are happy to confirm that David S. Miller (Linux Networking Maintainer) will be giving the following keynote speech: "Hardware Checksumming: Less is More".

### 添付資料URL

- [slides](https://netdevconf.info/1.1/proceedings/slides/miller-hardware-checksumming.pdf)（file）
- [video](https://youtu.be/6VgmazGwL_Y)（link）

## 個別ページのない補足セッション

### Welcoming (includes restaurants and social events information)

個別URL: 掲載なし

日時: 2016-02-10 9:00 - 9:30 / Location: Actos (300 people capacity)

Description: 掲載なし

添付資料: 掲載なし

### Closing session

個別URL: 掲載なし

日時: 2016-02-12 17:00 - 17:30 / Location: Actos (300 people capacity)

Description: We are adding to the schedule a closing session at the Actos room (17:00 to 17:30)

添付資料: 掲載なし

告知URL: https://netdevconf.info/1.1/closing-session-added-schedule.html

## 出典

- https://netdevconf.info/1.1/accepted-sessions.html
- https://netdevconf.info/1.1/schedule.html
- https://netdevconf.info/1.1/proceedings/
- https://netdevconf.info/1.1/proceedings/slides/
- https://netdevconf.info/1.1/proceedings/papers/
- https://netdevconf.info/1.1/closing-session-added-schedule.html
