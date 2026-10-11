# Netdev 0x14 全セッション一覧

出典: https://netdevconf.info/0x14/accepted-sessions.html

Accepted Sessionsの読み込み元generated-sessionsにある全50セッションを収録。個別ページのTitle、Description原文、Contentsの添付資料URL、および埋め込みytVideoIdの動画URLを抽出。相対URLは個別ページを基準に絶対URLへ変換し、空白などをURLエンコード。Workshop内の複数資料も個別に収録。日時は個別ページのsession-dateに掲載されたもののみ記録。Scheduleは外部Sched埋め込み。資料のダウンロード可否・動画の再生可否は未検査。

セッション: 50件 / Descriptionあり: 50件 / 資料あり: 49件 / 資料項目: 128件

## 目次

1. [SONiC and Linux](#session-talk-sonic-and-linux)
2. [Evaluating BBRv2 on the Edge](#session-talk-evaluating-BBRv2-on-the-edge)
3. [Test Your Limits With TRex Traffic Generator](#session-talk-test-your-limits-with-trex-traffic-generator)
4. [Have you ever tried to create complex network service chains with eBPF?](#session-talk-complex-network-service-chains-with-eBPF)
5. [Hardware Acceleration of Container Networking Interfaces](#session-talk-hardware-acceleration-of-container-networking-interfaces)
6. [NVMe-over-TCP ≈ NVMe-over-RDMA](#session-talk-NVMe-over-TCP-is-not-NVMe-over-RDMA)
7. [TLS performance characterization on modern x86 CPUs](#session-talk-TLS-performance-characterization-on-modern-x86-CPUs)
8. [kTLS HW offload - implementation and performance gains](#session-talk-kTLS-HW-offload-implementation-and-performance-gains)
9. [Performance study of kernel TLS handshakes](#session-talk-performance-study-of-kernel-TLS-handshakes)
10. [BP4: Byte-code for Programmable Protocol-independent PDU Processing](#session-talk-BP4-byte-code-for-programmable-protocol-independent-PDU-processing)
11. [Kernels of Splitting TCP in the Clouds](#session-talk-kernels-of-splitting-TCP-in-the-clouds)
12. [Hierarchical QoS Hardware Offload (HTB)](#session-talk-hierarchical-QoS-hardware-offload)
13. [Replacing HTB with EDT and BPF](#session-talk-replacing-HTB-with-EDT-and-BPF)
14. [Implementation of IPv6 IOAM in Linux Kernel](#session-talk-implementation-of-IPv6-IOAM-in-linux-kernel)
15. [Extend segment routing for another source routing protocol named RPL](#session-talk-extend-segment-routing-for-RPL)
16. [Storage application performance boost with zero thrashing networking stack](#session-talk-storage-application-performance-boost-with-zero-thrashing-networking-stack)
17. [Adding MRP to the Linux kernel](#session-talk-adding-MRP-to-the-linux-kernel)
18. [Linux Network Scripting with Lua](#session-talk-linux-network-scripting-with-lua)
19. [Application Device Queues (ADQ) for system-level network I/O performance improvements](#session-talk-ADQ-for-system-level-network-io-performance-improvements)
20. [Taking Control of your SmartNIC](#session-talk-taking-control-of-your-SmartNIC)
21. [Issuing SYN cookies in XDP](#session-talk-issuing-SYN-cookies-in-XDP)
22. [Extending TC with 5-tuple hash offload (dp_hash)](#session-talk-extending-tc-with-5-tuple-hash-offload-dp-hash)
23. [Performance optimization using artificial intelligence methods](#session-talk-performance-optimization-using-artificial-intelligence-methods)
24. [Machine learning in packet routing process using Quagga/Zebra routing SW suite](#session-talk-machine-learning-in-packet-routing-process-using-Quagga-Zebra-routing-sw-suite)
25. [devlink enhancements for sub functions management](#session-talk-devlink-enhancements-for-sub-functions-management)
26. [Time-travel Linux (network) simulation](#session-talk-time-travel-linux-network-simulation)
27. [TC Connection tracking hardware offload - upstream work](#session-talk-tc-connection-tracking-hardware-offload-upstream-work)
28. [Reducing Kernel Queuing Delays with TCP Window Space Events](#session-talk-reducing-kernel-queuing-delays-with-TCP-window-space-events)
29. [Hardware offload for K8s container networking](#session-talk-hardware-offload-for-k8s-container-networking)
30. [Using Upstream MPTCP in Linux Systems](#session-talk-using-upstream-MPTCP-in-linux-systems)
31. [Fast OVS data path with XDP](#session-talk-fast-OVS-data-path-with-XDP)
32. [The Path To TCP 4K MTU and RX ZeroCopy](#session-talk-the-path-to-tcp-4k-mtu-and-rx-zerocopy)
33. [Security and Control of SR-IOV: What’s Our Responsibility if the Kernel is Bypassed?](#session-talk-security-and-control-of-SR-IOV)
34. [Performance improvements for NVMe/TCP](#session-talk-performance-improvements-for-NVMe-TCP)
35. [How to add XDP support to a NIC driver: fundamental aspects to increase performance](#session-tutorial-add-XDP-support-to-a-NIC-driver)
36. [XDP and the cloud: Using XDP on hosts and VMs](#session-tutorial-XDP-and-the-cloud)
37. [Programming QUIC using lsquic](#session-tutorial-programming-QUIC-using-lsquic)
38. [Adding AF_XDP zero-copy support to drivers](#session-tutorial-adding-AF_XDP-zero-copy-support-to-drivers)
39. [Wireless Workshop](#session-wireless-workshop)
40. [Switch ASIC Hardware Offload Workshop](#session-workshop-switch-ASIC-hardware-offload)
41. [Traffic Control Workshop](#session-workshop-Traffic-Control)
42. [IoT Networking Workshop](#session-workshop-iot-networking)
43. [XDP Workshop](#session-workshop-XDP)
44. [Transport Workshop](#session-workshop-transport)
45. [Hardware acceleration and offload Workshop](#session-workshop-hardware-acceleration-and-offload)
46. [Netfilter Workshop](#session-workshop-netfilter)
47. [FRR Workshop](#session-workshop-FRR)
48. [AI/ML Workshop](#session-workshop-ai-ml)
49. [TLS Performance and Implementation Workshop](#session-workshop-TLS-performance-and-implementation)
50. [Creating an End-to-End Programming Model for Packet Forwarding](#session-keynote-mckeown)

<a id="session-talk-sonic-and-linux"></a>
## 1. SONiC and Linux

- セッション個別URL: https://netdevconf.info/0x14/session.html?talk-sonic-and-linux
- Track: Talk
- 日時: Monday, August 17, 2020 

### Description

In this talk we are going to introduce SONiC, a Linux 
based open source NOS. We will discuss the SONiC 
architecture, integration with FRR and kernel routing 
stack. We will describe current status of SONiC and 
challenges we are facing with Linux in general. We wish 
to provide feedback to the kernel community on some of 
the challenges we faced as well as solicit feedback 
from the Linux Networking community on some of the 
issues we are facing.

Some of the open questions include:

Scaling challenges E.g too many netlink messages
  
Model mismatch between the Linux to SoNIC E.g  
5-tuple based and the application model (3 tuple 
based) ,  SAI vs  Switchdev , etc.

### 添付資料URL

- [slides](https://netdevconf.info/0x14/pub/slides/11/SONiC-Intro-Netdev.pdf)（file）
- [video](https://youtu.be/BJGk-Rcdf48)（link）

<a id="session-talk-evaluating-BBRv2-on-the-edge"></a>
## 2. Evaluating BBRv2 on the Edge

- セッション個別URL: https://netdevconf.info/0x14/session.html?talk-evaluating-BBRv2-on-the-edge
- Track: Talk
- 日時: Thursday, August 13, 2020 

### Description

This talk will go over experimental results of BBRv2 on 
the Dropbox Edge Network.  Very quickly I'll go over 
BBR design and its practical effects.  Then I'll switch 
to BBRv2 and changes that it brings in both theoretical 
and practical terms.  For each example, I'll try to 
compare BBRv2 to BBRv1 and CUBIC using practical 
examples.  Finally, in conclusion, I'll re-iterate over 
BBR design principles and see whether theoretical goals 
match with experimental results.

### 添付資料URL

- [slides](https://netdevconf.info/0x14/pub/slides/16/Evaluating%20BBRv2%20on%20the%20Dropbox%20Edge%20Network%20v4.1.pdf)（file）
- [paper](https://netdevconf.info/0x14/pub/papers/16/0x14-paper16-talk-paper.pdf)（file）
- [video](https://youtu.be/inLCBXXRzWk)（link）

<a id="session-talk-test-your-limits-with-trex-traffic-generator"></a>
## 3. Test Your Limits With TRex Traffic Generator

- セッション個別URL: https://netdevconf.info/0x14/session.html?talk-test-your-limits-with-trex-traffic-generator
- Track: Talk
- 日時: Tuesday, August 18, 2020 

### Description

Performance measurement tools are an integral part of 
network testing.  There is no shortage of open source 
tools for network performance testing in the Linux 
world.  To enumerate a few popular tools in the Linux 
world: Netperf, iperf, Linux kernel based pktgen. These 
tools tend to fall into two categories:

- Stateless packet shooting such as the Linux kernel 
pktgen traffic generator 
- Stateful client-server tools such as netperf and 
iperf.

When very high performance network performance testing 
is required (quantified as many 10s of Gigabits per 
second/100MPPS and/or hundreds of thousands of flows) 
or more advanced functionality (e.g. Realistic)
requires the Linux classical tools are insufficient. 
Most organizations will opt for very expensive 
commercial tools such as Ixia, Spirent.  In this paper, 
we will introduce TRex a high performance realistic 
traffic generator and illustrate sample stateless and 
stateful use cases that apply to testing Linux 
networking. We will also discuss its design and tricks 
that help us To achieve such high performance.
TRex is an advanced traffic generator, it has the 
following interesting features:

- It leverages COTS x86/ARM servers and physical NICs 
(Intel, Mellanox etc) for high scale.

- Can support Linux driver or paravirtual (e.g. virtio) 
for low scale with advanced feature PF_PACKET/AF_XDP 
driver It can serve both Stateless and Stateful traffic 
generation.

- tcp stack for stateful traffic and emulation layer to 
  simulate L7 applications. It outperforms all of 
  iperf, netperf and pktgen: 
    
    * It can generate upto 200gbps/100mpps advance 
      traffic pattern and millions of real world 
      tcp/udp flows.

    * High connection rate - order of Millions of 
      Connection/s (CPS). It is extensible:

    * Emulate L7 application (on top of TCP/IP),
      e.g. HTTP/HTTPS/Citrix using a programmable 
      language

    * Ability to change fields in the L7 application,
      for example, change HTTP User-Agent field

    * Support routing protocols like BGP/OSPF/RIP using 
      BIRD [ #1 ]

    * Support high scale client simulation protocols
      (arp,ipv6-nd,dhcp4,dhcp6,802.1x,icmp,igmp,mld) 

Although TRex is implemented on top of DPDK, a lot of 
the issues we had to deal with when writing the tool 
apply equally to scaling Linux networking; we share our 
experiences in that regard and hope to inspire some of 
the techniques to be adopted in Linux.


References:

#1 - https://en.wikipedia.org/wiki/Bird_Internet_routing_daemon

### 添付資料URL

- [slides](https://netdevconf.info/0x14/pub/slides/9/trex_netdev0x14v2.pdf)（file）
- [paper](https://netdevconf.info/0x14/pub/papers/9/0x14-paper9-talk-paper.pdf)（file）
- [video](https://youtu.be/G2v0bk6Wd8w)（link）

<a id="session-talk-complex-network-service-chains-with-eBPF"></a>
## 4. Have you ever tried to create complex network service chains with eBPF?

- セッション個別URL: https://netdevconf.info/0x14/session.html?talk-complex-network-service-chains-with-eBPF
- Track: Talk
- 日時: Monday, August 17, 2020 

### Description

Recently, eBPF has become the de-facto standard for 
Linux observability, allowing people to retrieve 
runtime information of software running on a server at 
unprecedented flexibility and granularity. However, the 
advantages of this technology are not limited only to 
monitoring and tracing applications.  The use of eBPF 
to implement network functions that go beyond the 
traditional switching and routing has been demonstrated 
on different applications such as load balancing (e.g.,
Facebook Katran), DDoS Mitigation (e.g., Cloudflare 
L4Drop), container networking (e.g., Cilium) and 
security (e.g., bpf-iptables), with considerable 
advantages in terms of portability, resource 
consumption, development process and integration with 
the existing services.

However, writing complex network services with eBPF is 
sometimes complex given the lack of a common framework 
that provides a useful abstraction to developers to 
solve common problems or known limitations.  Even if a 
considerable effort is undergoing to improve tools such 
as BCC or libbpf, it does not (yet) exist a common 
structure to implement an eBPF-based networking 
service, which forcibly has to include data as well as 
control/management planes. Furthermore, the complexity 
of creating arbitrary service chains with vanilla eBPF 
is non-negligible. This forces developers to dedicate a 
considerable amount of time, effort and code to handle 
tasks that are outside the core operations of the 
network service they are interested in.

In this talk, we will present Polycube, an open-source 
software framework based on eBPF, that enables the 
creation of arbitrary and complex eBPF-based network 
function chains. Polycube network services have a fixed 
structure made up of a data plane, responsible for 
per-packet processing and forwarding, and a control and 
management plane in charge of the service configuration 
and other non-dataplane tasks. Moreover, Polycube 
provides a model-driven service abstraction that is 
used to automatically generate the internal structure 
of the service and the REST APIs used to interact with 
the service itself. We will first show the design and 
architecture of Polycube together with a detailed 
description of the APIs and abstractions provided to 
the developers to simplify the development and 
instruction between the different services. Finally, we 
demonstrate, with a small live demo, the practical 
benefits of the Polycube programming model and the 
ability to enable the creation of complex networking 
applications, such as a prototypal CNI provider for 
Kubernetes.

### 添付資料URL

- [slides](https://netdevconf.info/0x14/pub/slides/12/20-08-04%20-%20Polycube%20NetDev.pdf)（file）
- [video](https://youtu.be/fiFzljVyUF8)（link）

<a id="session-talk-hardware-acceleration-of-container-networking-interfaces"></a>
## 5. Hardware Acceleration of Container Networking Interfaces

- セッション個別URL: https://netdevconf.info/0x14/session.html?talk-hardware-acceleration-of-container-networking-interfaces
- Track: Talk
- 日時: Monday, August 17, 2020 

### Description

The Linux kernel has various features that have been
developed to provide multi-tenancy on hosts. This paper
explores some commonly used virtual network interface
types and optimal ways of dedicating hardware device
resources to containers.
  
Linux virtual networking interfaces are implemented as
stacked virtual network devices on top of a physical
PCIe PF netdev. These virtual networking interfaces can
be assigned to container namespaces and share some of
the PCI device resources. Hardware acceleration
provides a mechanism to dedicate resources to these
interfaces. Common examples currently used in
deployments are macvlan, ipvlan, veth pair etc.
Container systems have a lower overhead than VMs and
container systems typically target environments where
thousands of containers are in play. For these reasons,
re-purposing SR-IOV virtual function (VF) devices and
assigning VF netdevs  to containers is not a scalable
approach.

This discussion covers the following frequently used
interfaces and some newly proposed generic interfaces
to create virtual interfaces from a parent pci device:
1.  macvlan
2.  ipvlan
3.  subdevice functions

To accelerate these virtual interfaces to hardware, we
consider the Intel VMDq technology. Typical VMDq
implementation supports a set of NIC HW Tx and Rx
queues, MSI-X interrupt per queue, Layer 2 filters for
sorting packets based on MAC Address, VLAN tags.
Assigning the virtual interfaces to containers will
then enable the containerized applications to use these
VMDq hardware resources.

MACVLAN:
With MACVLAN, multiple virtual interfaces can be
created on a single physical interface, each with
unique mac address. A  link up on the virtual interface
adds its unicast address to the lower physical device.
Macvlan acceleration is achieved by supporting L2
forward offloads using ndo_dfwd_add/del_station APIs
when the macvlan interface comes up. The MACVLAN
netdevs are offloaded as VMDq VSIs.

Limitations inherent to macvlan devices:
1. Host connected to the external switch/router has
policy configured that allows only one MAC per port.
2. Virtual devices created on a master exceed the MAC
capacity.
3. Limited  configurability, limited netdev_ops,
ethtool_ops are mostly get_attributes. Multiple
features cannot be controlled from host: TX Rate
Limiting, Link State, Spoof Check, Stats etc.

The same limitations exists with accelerated macvlan,
although this is a method to provide device-level
hardware resource isolation.

IPVLAN:
With IPVLAN, multiple virtual interfaces can be created
on a single physical interface, unlike macvlan which
generates a new MAC address for each virtual interface,
ipvlan devices all share the same MAC. The kernel
driver inspects the IP address of each packet when
making a decision about which virtual interface should
process the packet. At present, the kernel does not
support hardware acceleration via IPVLAN netdev. We
propose extending the kernel for IPVLAN acceleration.
This will enable assigning dedicated hardware resources
to containers, while all containers on a single parent
interface use the same MAC address. However, with
accelerated IPVLAN devices, the configurability
limitations that were seen with offloaded macvlan
devices persists.
  
We also consider the option of creating port
representors for accelerated macvlan/ipvlan interfaces
(switchdev mode) for improved configurability. However,
this has limitations for parameters configurable from
containers for virtual interface specific limits such
as queues, descriptors, interrupt moderation rate,
MSI-X vectors etc.
  
SUBDEVICES:
The netdev community is in favor of devlink for device
creation and control for a variety of devices (PFs,
VFs, hardware virtio-net, storage etc.). The recent
RFCs and patches towards a devlink based subdev
interface as a generic user interface to create/delete
hardware linked sub-devices from a parent pci device
seems like a solution in the right direction. The
subdevice model improves device composability and
provides a mechanism to control and configure device
parameters via netdev/ethtool ops unlike accelerated
macvlan/ipvlan. This talk will explore the hardware
acceleration design of the subdev functions via VMDq
for container network acceleration. 

A subdev function can be created via devlink on a given
PCI function. Binding the subdev function to a driver
creates netdev. These netdevs will be backed by VMDq
VSIs on the host PCI function. The subdevs may be
assigned to containers. In legacy mode, netdev ops and
ethtool ops on the subdevice netdev can be used for
assigning queues, managing rx-usecs, interrupts etc.
Additional control and configurability from the host
can be supported via switchdev mode through port
representors for subdevices.

### 添付資料URL

- [slides](https://netdevconf.info/0x14/pub/slides/27/HW%20Acceleration%20of%20Container%20Networking%20Interfaces.pdf)（file）
- [video](https://youtu.be/da0C4bNl5dU)（link）

<a id="session-talk-NVMe-over-TCP-is-not-NVMe-over-RDMA"></a>
## 6. NVMe-over-TCP ≈ NVMe-over-RDMA

- セッション個別URL: https://netdevconf.info/0x14/session.html?talk-NVMe-over-TCP-is-not-NVMe-over-RDMA
- Track: Talk
- 日時: Wednesday, August 19, 2020 

### Description

Recent adoption of 40-100Gbps network access links and
emergence of high-performance storage devices that
deliver as much as a million read/write operations per
second have resulted in performance bottlenecks
shifting back to software stack. For the case of remote
storage accesses, in particular, CPU requirements have
become unsustainable. For instance, traditional remote
storage access stacks, designed for remote hard disk
accesses and 1Gbps links, require 56 CPU cores to
saturate a 100Gbps link. NVMe-over-TCP, a remote
storage stack recently incorporated within the kernel
stack, achieves better CPU utilization than tradition
stacks. However, its performance is still significantly
worse than NVMe-over-RDMA.

In this talk, we will present design, implementation
and evaluation of several new ideas within
NVMe-over-TCP. Our design maintains all the desirable
properties of NVMe-over-TCP (unmodified applications,
unmodified TCP/IP stack, etc.), and yet, saturates a
100Gbps link for remote accesses using CPU utilization
similar to state-of-the-art user-space and RDMA-based
solutions.

### 添付資料URL

- [slides](https://netdevconf.info/0x14/pub/slides/20/i10_netdev0x14-email.pdf)（file）
- [paper](https://netdevconf.info/0x14/pub/papers/20/0x14-paper20-talk-paper.pdf)（file）
- [video](https://youtu.be/I86ZNKGB1GA)（link）

<a id="session-talk-TLS-performance-characterization-on-modern-x86-CPUs"></a>
## 7. TLS performance characterization on modern x86 CPUs

- セッション個別URL: https://netdevconf.info/0x14/session.html?talk-TLS-performance-characterization-on-modern-x86-CPUs
- Track: Talk
- 日時: Friday, August 14, 2020 

### Description

The volume of network traffic protected by using
various encryption and authentication methods is
growing year by year. One of the most popular method
used for this purpose is Transport Layer Security (TLS)
protocol. This trend generates growing interest in
off-loading TLS data record encryption and
authentication from CPU to network controller.

This talk presents results of performance measurements for
the user and kernel processing of TLS. It characterizes
and compares user mode TLS, KTLS write and kTLS
Sendfile to contrast various bottlenecks in each one
with regards to encryption and authentication, cost of
system calls and the memory bandwidth.  The experiments
further compare application behavior in simple
web-serving model versus a Video-on-Demand (VoD).  The
detailed characterization can help a deployer / user to
decide which of the three software-based encryption
methods is most suitable for a given traffic profile.
The results can also help to understand and potentially
predict the gains from doing the encryption and
authentication on modern x86 CPUs equipped with new
AESNI instructions versus TLS offloading in NIC.
However the results do not include any measurements
executed using NICs supporting TLS offload capability.

### 添付資料URL

- [slides](https://netdevconf.info/0x14/pub/slides/25/TLS%20Perf%20Characterization%20slides%20-%20Netdev%200x14%20v2.pdf)（file）
- [paper](https://netdevconf.info/0x14/pub/papers/25/0x14-paper25-talk-paper.pdf)（file）
- [video](https://youtu.be/vu8LZ5ZSiKc)（link）

<a id="session-talk-kTLS-HW-offload-implementation-and-performance-gains"></a>
## 8. kTLS HW offload - implementation and performance gains

- セッション個別URL: https://netdevconf.info/0x14/session.html?talk-kTLS-HW-offload-implementation-and-performance-gains
- Track: Talk
- 日時: Friday, August 14, 2020 

### Description

Encrypted communication usage is steadily growing
across most internet services. TLS is the leading
security protocol, implemented on top of TCP. kTLS
(kernel TLS) serves as a unit that offers TLS
operations support in the kernel layer. It was
introduced in kernel v4.13 as a SW offload for user
space TLS libraries and was extended in kernel v4.18
with an infrastructure for performing
encryption/decryption in the NIC.

In this talk, we will review the life cycle of a HW
offloaded kTLS connection and the driver-HW interaction
in order to support it. We will demonstrate and analyze
the significant performance speed-up gained by
offloading kTLS operations to the HW. It will be
showcased for the well-known http server application
NginX, using mlx5e driver on top of Mellanox's
ConnectX-6Dx NIC.

### 添付資料URL

- [slides](https://netdevconf.info/0x14/pub/slides/29/Netdev%200x14%20kTLS%20Offload%20Performance%20Enhancements%20for%20Real-life%20Applications%20-%20Bar%20Tuaf%2C%20Tal%20Gilboa%20and%20Tariq%20Toukan.pdf)（file）
- [paper](https://netdevconf.info/0x14/pub/papers/29/0x14-paper29-talk-paper.pdf)（file）
- [video](https://youtu.be/gkKrTXxfImc)（link）

<a id="session-talk-performance-study-of-kernel-TLS-handshakes"></a>
## 9. Performance study of kernel TLS handshakes

- セッション個別URL: https://netdevconf.info/0x14/session.html?talk-performance-study-of-kernel-TLS-handshakes
- Track: Talk
- 日時: Friday, August 14, 2020 

### Description

Tempesta TLS implements TLS handshakes in the Linux
kernel and focuses on performance to filter out
application layer DDoS attacks. We started development
from the fork of mbed TLS library, but it took
significant effort to make it fast, so we ended up with
full reworking of the library. The resulting design of
Tempaesta TLS was discussed in [ 1 ].

The main focus of the talk is to explore how much
performance we can get for TLS handshake itself and the
whole application on example of HTTPS server by moving
into the kernel space.

This talk we will start from the updates of [ 1 ]. In
particular, I'll describe memory pools to reduce
dynamic memory allocations during a TLS handshake and
memory profiles of the whole cryptographic computations
required to complete a handshake of a particular type.
The profiles reduce the cost of big integer allocation
and initialization.

Next, the talk will cover:

* How much memory is required to complete a TLS
* handshake using different underlying math algorithms
* and evaluate the numbers against CPU caches

* Analyze performance of pure TLS handshake as well as
* full HTTPS transaction in the user and kernel spaces

* Analyze memory allocations and copies of the Linux
* crypto API involved in the TLS handshake and early
* data transfers

* Measure performance impact of the FPU state saving
* and restoring to encrypt or decrypt a TLS message in
* the Linux kernel space and discuss an alternative
* approach to save/restore the FPU state for batches of
* TLS messages

* Current TLS handshakes code size and required effort
* to go upstream

[ 1 ]. Kernel TLS handshakes for HTTPS DDoS mitigation,
Netdev 0x12,
https://netdevconf.info/0x12/session.html?kernel-tls-handshakes-for-https-ddos-mitigation

### 添付資料URL

- [slides](https://netdevconf.info/0x14/pub/slides/35/slides.pdf)（file）
- [paper](https://netdevconf.info/0x14/pub/papers/35/0x14-paper35-talk-paper.pdf)（file）
- [video](https://youtu.be/THJ6zC1V10c)（link）

<a id="session-talk-BP4-byte-code-for-programmable-protocol-independent-PDU-processing"></a>
## 10. BP4: Byte-code for Programmable Protocol-independent PDU Processing

- セッション個別URL: https://netdevconf.info/0x14/session.html?talk-BP4-byte-code-for-programmable-protocol-independent-PDU-processing
- Track: Talk
- 日時: Monday, August 17, 2020 

### Description

In this talk we introduce BP4, a Domain Specific 
Language for programmable dataplanes based on unifying 
the best features of eBPF and P4. BP4 combines the 
byte-code approach and C language representation of 
eBPF with the network domain specific constrained 
programming model of P4. The goal of BP4 is “write 
once, run anywhere, run well!” BP4 is intended to 
run in both software and hardware execution 
environments. Performance is afforded by domain 
specific features and constraints along with judicious 
use of compiler optimizations and seamlessly 
integrated hardware accelerations.

Central to a BP4 program is a parser that parses the 
various protocols layers of a packet and drives 
protocol processing. The parser itself is dynamically 
programmed to support a wide variety of protocols and 
permits support for new protocols to be added on the 
fly. The BP4 parser includes native support for 
parsing Variable Length Headers (VLH) that contains 
TLVs, flag-fields, or variable length arrays. Two 
actions can be associated with a parsed protocol 
layer: meta-data extraction and protocol processing. 
Meta-data extraction copies select protocol fields 
into a meta-data structure to be consumed by later 
processing. Protocol processing allows protocol 
specific handling and may use meta-data in its 
processing.

The first PoC for BP4 will be to implement a flow 
dissector as a BP4 program by essentially replicating 
the functionality of the Linux network flow_dissector 
(TLV and flag-field parsing will also be added). This 
entails defining the structure of a BP4 program, tools 
to build BP4 programs, and the infrastructure in the 
kernel to load and execute BP4 programs. For this PoC, 
the existing infrastructure for eBPF will be leveraged 
and extended as necessary. The programmble flow 
dissector will then be used as the basis for generic 
tc-flower which will allow protocols to to be 
programmed and dynamically added for tc-flower 
processing.

### 添付資料URL

- [slides](https://netdevconf.info/0x14/pub/slides/15/BP4%20netdev.pdf)（file）
- [video](https://youtu.be/SOOuo5hpCPo)（link）

<a id="session-talk-kernels-of-splitting-TCP-in-the-clouds"></a>
## 11. Kernels of Splitting TCP in the Clouds

- セッション個別URL: https://netdevconf.info/0x14/session.html?talk-kernels-of-splitting-TCP-in-the-clouds
- Track: Talk
- 日時: Tuesday, August 18, 2020 

### Description

The Pathway project, by VMware Research, constructs a 
global overlay network across public clouds. Pathway 
interconnects geographically- dispersed corporate data 
centers and branches. The project leverages the global 
geographical spread of public clouds and their vast 
compute and networking infrastructure.

Clients using Pathway could see improvements in 
download times sometimes by orders of magnitude. The 
main contributor to improving network performance was 
shown to be the split TCP technique. Unfortunately, 
the available TCP split solutions incur a penalty on 
connection time, and actually hurt the performance of 
short flows.

In addition, available TCP split implementations are 
in user-space, and thus have two expensive system 
calls per forwarded buffer. The redundant system calls 
hurt server performance and limit the scalability of 
such solutions.

This talk describes KTCP, a Linux Kernel module 
running on a modified Linux Kernel. The design of KTCP 
aims to minimize and effectively eliminate any 
overheads of establishing the split TCP connection. 

We define a theoretical model for optimal transmission 
and cover the methods we use to bring KTCP as close as 
possible to this ideal model. We demonstrate that KTCP 
is able to considerably increase the link utilization 
by TCP connections and reduce the connection latency 
close to its theoretical minimum.  

On the OS, KTCP avoids the performance costs 
associated with splicing sockets; system calls, 
context switch costs and memory copying.

### 添付資料URL

- [slides](https://netdevconf.info/0x14/pub/slides/33/KTCP_netdev0x14.pdf)（file）
- [paper](https://netdevconf.info/0x14/pub/papers/33/0x14-paper33-talk-paper.pdf)（file）
- [video](https://youtu.be/QkKFP-W-AJo)（link）

<a id="session-talk-hierarchical-QoS-hardware-offload"></a>
## 12. Hierarchical QoS Hardware Offload (HTB)

- セッション個別URL: https://netdevconf.info/0x14/session.html?talk-hierarchical-QoS-hardware-offload
- Track: Talk
- 日時: Thursday, August 20, 2020 

### Description

Traffic shaping is essential to the correct and 
efficient operation of datacenters. To name a few 
examples, policy-based bandwidth allocation to a group 
of flows, and packet pacing to reduce traffic 
burstiness that can overwhelm router buffers. As 
network bandwidth demand increases so does the number 
of classified flows, exposing scalability limits of 
the HTB implementation. 
 
HTB is quite flexible and versatile, but it comes with 
a cost. HTB does not scale and consumes considerable 
CPU and memory. In our proposed solution, 
classification takes place in software, whereas 
rate-limiting is done by the hardware. By moving the 
classification to clsact egress hook, which is 
thread-safe and does not require locking, we avoid the 
contention induced by the single qdisc lock. 
Furthermore, offloading the shaping logic and the 
maintenance of the intra-class bookkeeping into the 
hardware removes the need for synchronization 
completely from the software.  
 
Our aim is to offload HTB functionally to hardware and 
provide the user with the flexibility and the 
conventional tools offered by TC subsystem while 
scaling to thousands of traffic classes and 
maintaining wire-speed performance. 
 
We would like to present, discuss and solicit feedback 
on some of the outstanding challenges.

### 添付資料URL

- [slides](https://netdevconf.info/0x14/pub/slides/44/HTB%20offload.20200722.pdf)（file）
- [paper](https://netdevconf.info/0x14/pub/papers/44/0x14-paper44-talk-paper.pdf)（file）
- [video](https://youtu.be/HJVPtAuhrNs)（link）

<a id="session-talk-replacing-HTB-with-EDT-and-BPF"></a>
## 13. Replacing HTB with EDT and BPF

- セッション個別URL: https://netdevconf.info/0x14/session.html?talk-replacing-HTB-with-EDT-and-BPF
- Track: Talk
- 日時: Thursday, August 20, 2020 

### Description

In this presentation, we'll talk about how we've 
completely moved away from HTB to BPF+FQ+EDT for rate 
limiting.

Recently, the Linux TCP stack switched to the Early 
Departure Time model. With this model, an HTB qdisc is 
no longer needed. Instead, the departure time of a 
packet can be adjusted in BPF, based on a rate limit, 
leaving the actual delayed send to the FQ qdisc.

Google servers classify, measure, remark (DSCP), and 
rate limit their outgoing traffic. Historically, all 
four functionalities were implemented using an HTB 
hierarchy. Moving classification, measurement and 
remarking to the TC egress hook takes most of the 
traffic out of the root qdisc lock (we dynamically 
insert rate limiting rules only for small portions of 
offending traffic). This improves scalability and 
number of classified flows. It also enables more 
flexible policies. However, rate limited flows still 
had to traverse HTB, contending on the global root 
qdisc lock. Moving to EDT fixed that.

### 添付資料URL

- [slides](https://netdevconf.info/0x14/pub/slides/55/slides.pdf)（file）
- [paper](https://netdevconf.info/0x14/pub/papers/55/0x14-paper55-talk-paper.pdf)（file）
- [video](https://youtu.be/MHkF8Uyctxw)（link）

<a id="session-talk-implementation-of-IPv6-IOAM-in-linux-kernel"></a>
## 14. Implementation of IPv6 IOAM in Linux Kernel

- セッション個別URL: https://netdevconf.info/0x14/session.html?talk-implementation-of-IPv6-IOAM-in-linux-kernel
- Track: Talk
- 日時: Thursday, August 20, 2020 

### Description

In-situ Operations, Administration, and Maintenance 
(IOAM) is currently under standardization at the IETF. 
It allows for collecting telemetry and operational 
information along a path, within the data packet, as 
part of an existing (possibly additional) header. This 
paper discusses the very first implementation of IOAM 
for the Linux kernel with IPv6 as encapsulation 
protocol. We also propose a first preliminary 
evaluation of our implementation under a controlled 
environment. Our IOAM implementation is available as 
open source.

### 添付資料URL

- [slides](https://netdevconf.info/0x14/pub/slides/32/IOAM%20%28IPv6%29%20in%20Linux%20kernel.pdf)（file）
- [paper](https://netdevconf.info/0x14/pub/papers/32/0x14-paper32-talk-paper.pdf)（file）
- [video](https://youtu.be/4cwnje-KThk)（link）

<a id="session-talk-extend-segment-routing-for-RPL"></a>
## 15. Extend segment routing for another source routing protocol named RPL

- セッション個別URL: https://netdevconf.info/0x14/session.html?talk-extend-segment-routing-for-RPL
- Track: Talk
- 日時: Thursday, August 13, 2020 

### Description

RPL [0] is an IPv6 routing protocol for Low-Power and 
Lossy networks and becomes interested to use inside the 
IoT world.

There exists a lot of different open source Linux RPL 
implementations out there which are using RPL with 
storing mode only. Storing mode [1] means that the 
routes are propagated via ICMPv6 RPL messages and 
stored inside the routing table of the Linux kernel.

A new thing which was never possible before without a 
hackish way is to handle non-storing mode [2]. 
Non-storing mode is using source routing by adding 
header information [3] instead storing routes inside 
the routing table.

This talk is about to show an approach how to implement 
RPL source routing for the kernel and offer the 
necessary configuration interface to the user space. As 
implementation we will use rpld [4] to show an example 
RPL implementation which will take use of such 
configuration interface to support non-storing mode. As 
reference we will lookup the Linux segment routing 
implementation and try to extend the existing code with 
the needs of RPL non-storing mode. This approach was 
discussed at Netdevconf 2.1 and we finally came around 
to implement it.

[0] RFC 6550 - RPL: IPv6 Routing Protocol for Low-Power and Lossy Networks
https://datatracker.ietf.org/doc/rfc6550/
[1] RFC 6550 - Section 9.8 Storing Mode
https://tools.ietf.org/html/rfc6550#section-9.8
[2] RFC 6550 - Section 9.7 Non-Storing Mode
https://tools.ietf.org/html/rfc6550#section-9.7
[3] RFC 6554- An IPv6 Routing Header for Source Routes with the Routing Protocol for Low-Power and Lossy Networks (RPL)
https://tools.ietf.org/html/rfc6554
[4] Yet another RPL implementation for Linux
https://github.com/linux-wpan/rpld

### 添付資料URL

- [slides](https://netdevconf.info/0x14/pub/slides/17/slides.pdf)（file）
- [paper](https://netdevconf.info/0x14/pub/papers/17/0x14-paper17-talk-paper.pdf)（file）
- [video](https://youtu.be/P9ho9j0L1mQ)（link）

<a id="session-talk-storage-application-performance-boost-with-zero-thrashing-networking-stack"></a>
## 16. Storage application performance boost with zero thrashing networking stack

- セッション個別URL: https://netdevconf.info/0x14/session.html?talk-storage-application-performance-boost-with-zero-thrashing-networking-stack
- Track: Talk
- 日時: Wednesday, August 19, 2020 

### Description

Copy removal for socket based user-space networking 
applications has been under the works by the netdev 
community over the last few years, resulting in kernel 
support for MSG_ZEROCOPY (transmit) and socket mmap 
(receive) uAPIs.

This talk will discuss the results from applying 
MSG_ZEROCOPY to the spdk nvme/tcp user-space initiator 
in smart nic environment.

We show that for SoC, the improvement in IOPS goes way 
beyond the cpu percentages seen for copy through 
profiler/flame-graphs. We provide/discuss low level 
statistics such as IPC (Instructions-Per-Cycle), L1/L2 
cache misses and instruction-per-IO for the copy vs 
zcopy cases that can explain the improvement.

### 添付資料URL

- [slides](https://netdevconf.info/0x14/pub/slides/36/storage_application_performance_boost.pdf)（file）
- [video](https://youtu.be/GPc1uNLcwZ4)（link）

<a id="session-talk-adding-MRP-to-the-linux-kernel"></a>
## 17. Adding MRP to the Linux kernel

- セッション個別URL: https://netdevconf.info/0x14/session.html?talk-adding-MRP-to-the-linux-kernel
- Track: Talk
- 日時: Friday, August 21, 2020 

### Description

MRP (Media Redundancy Protocol, by IEC 624390-2), is a 
ring protection protocol which allows rings of 
Ethernet switches to overcome any single failure with 
worst case recovery time down to 30 ms.

Recently, we have posted a RFC on the net-next mailing 
presenting how MRP support may be added to the kernels 
bridge implementation (see [1]).

The purpose of the talk is to:
- Explain the MRP protocol in more details, and how we 
  have proposed to implement it in the kernel.

- Cover future work including more complicated MRP 
  features and HW offload support.

- Present some result from our testing of this with 
  and without HW offload support.

- Follow up on the comments posted at [1] (if relevant)

The posted patches provides a SW only implementation 
of the basic roles MRM/MRC (Media Redundancy 
Manager/Client). The MRP implementation is similar 
with the STP, in regards that both STP and MRP are 
build on top of the bridge. Also, both STP and MRP are 
putting the ports in blocking or none blocking state 
avoid loops and to recover from link failure.

[1] - https://www.spinics.net/lists/netdev/msg623647.html

### 添付資料URL

- [slides](https://netdevconf.info/0x14/pub/slides/31/netdev%20-%20MRP%20%282%29.pdf)（file）
- [video](https://youtu.be/R3vQYfwiJ2M)（link）

<a id="session-talk-linux-network-scripting-with-lua"></a>
## 18. Linux Network Scripting with Lua

- セッション個別URL: https://netdevconf.info/0x14/session.html?talk-linux-network-scripting-with-lua
- Track: Talk
- 日時: Thursday, August 20, 2020 

### Description

Scriptable operating system is a design based on the 
idea that operating systems should allow users to 
write scripts to tailor the system to their needs [1].

In this talk we present Lunatik, a kernel-scripting 
framework for Linux that allows users to dynamically 
inject Lua scripts that extend kernel mechanisms. This 
framework has been used to script different Linux 
subsystems such as CPUfreq [1], Sockets [2], RCU [3], 
ULP [7], Netfilter [4, 5, 8] and XDP [6].

We discuss the challenges of scripting the kernel in 
terms of correctness, isolation, and liveness. We then 
discuss NFLua, which allows extending Netfilter with 
kernel-level Lua scripting, and introduce XPDLua, 
which allows users to extend XDP with Lua. 

NFLua is being currently used in over 20 million home 
routers to protect and monitor over 500 million 
devices, filtering, for instance, L7 traffic such as 
HTTP and HTTPS.

XDPLua is a new binding which works similarly, and aims 
to replace NFLua; due to its integration to XDP, it 
allows Lua scripts to filter traffic before it reaches 
the network stack. In this case, Lua can also work as a 
companion language to eBPF, allowing eBPF programs to 
call Lua scripts and Lua scripts to call eBPF helpers. 
We can then benefit from the strengths of both 
languages: expressiveness from Lua and high performance 
from eBPF.

To evaluate our scripting framework, we compared the 
execution of access-control filters implemented for 
Iptables, eBPF, NFLua and XDPLua.


    [1] http://netbsd.org/~lneto/dls14.pdf
    [2] https://github.com/luainkernel/lunatik/pull/10
    [3] https://github.com/caio-messias/lunatik/tree/master/rcu
    [4] https://github.com/cujoai/nflua
    [5] https://www.lua.org/wshop17/Lourival.pdf
    [6] https://victornogueirario.github.io/xdplua/
    [7] https://github.com/luainkernel/ulp-lua
    [8] https://cn.dmi.unibas.ch/pub/doc/2010-msthGraf.pdf

### 添付資料URL

- [slides](https://netdevconf.info/0x14/pub/slides/22/netscript-presentation-200805.pdf)（file）
- [paper](https://netdevconf.info/0x14/pub/papers/22/0x14-paper22-talk-paper.pdf)（file）
- [report](https://lwn.net/Articles/830154/)（link）
- [http://netbsd.org/~lneto/dls14.pdf](http://netbsd.org/~lneto/dls14.pdf)（file）
- [https://www.lua.org/wshop17/Lourival.pdf](https://www.lua.org/wshop17/Lourival.pdf)（file）
- [https://cn.dmi.unibas.ch/pub/doc/2010-msthGraf.pdf](https://cn.dmi.unibas.ch/pub/doc/2010-msthGraf.pdf)（file）
- [video](https://youtu.be/WseulhFNpLE)（link）

<a id="session-talk-ADQ-for-system-level-network-io-performance-improvements"></a>
## 19. Application Device Queues (ADQ) for system-level network I/O performance improvements

- セッション個別URL: https://netdevconf.info/0x14/session.html?talk-ADQ-for-system-level-network-io-performance-improvements
- Track: Talk
- 日時: Wednesday, August 19, 2020 

### Description

ADQ technology enables application-specific data
steering, isolation, signaling, and rate limiting using
scalable device queues and an optimized application
thread to a device queue data path. ADQ goals are to
increase predictability by reducing response time
jitter, lower latency and improve throughput for
applications using standard Linux networking stack and
interfaces. This talk will describe ADQ performance
benefits, how ADQ works and how developers can
implement for applications which may benefit from this
technology using an application example.

ADQ improves performance by:
1)Isolating application traffic to its own
dedicated queues.
2)Affinitizing an application thread to a hardware
device queue, in conjunction with event polling
interfaces like epoll, that creates a single producer
consumer data flow, avoiding costly
synchronizations/contentions.
3)Symmetric queuing ensuring egress/ingress traffic
traverses symmetrically through a pre-configured Tx/Rx
queue pair.
4)Rate limiting egress data traffic per application.
5)Reducing the number of context switches/second.

How does ADQ work?

ADQ provides applications with customizable ranges of
dedicated hardware queues (can be viewed as queue
groups). The TC MQPRIO interface is extended for this
effect. The TC MQPRIO scheduler configures the traffic
classes, queue layout and bandwidth rate limits and
offloads these to the hardware. Hardware channels
(VSIs) are created for the queue groups. Isolation of
traffic to RX queues is achieved using a hardware
switch filter (tc-flower based) redirecting flows to
the queue group based on the application identifier.
The hardware then selects the queue within queue group
using RSS/Flow Director.

For ADQ application specific queuing model to work in
an optimized way, a synchronization-free, single
producer consumer model is desirable. To accomplish
this abstraction, a unique pipe is established between
application thread and device queue using the
following:

1. Aligning application thread to queue which
allows packet processing in application thread context
while the thread is free to move across cores (yet,
hardware queue does not change).  The socket option
SO_INCOMING_NAPI_ID was introduced so the applications
could use this information to split the incoming flows
among the threads based on the receive queue (aka
NAPI_ID). Event polling (epoll) with busy polling
device queues was also enabled in the kernel to
accomplish this.  

2. A symmetric queuing model was then implemented
to align transmit queue with receive queue. Thus,
transmit completion work is locked into the same
queue-association that a given application is polling
on avoiding overhead of triggering an interrupt on
another CPU. When the application cleans up the receive
packets during the busy poll, transmit completion may
be processed along with it in the same thread context
resulting in reduced latency.
        
ADQ avoids resource starvation by allowing bandwidth
management per application. This is done using TC
MQPRIO for configuring the bandwidth rates per traffic
class and offloading them to hardware. The hardware
scheduler guarantees the specified transmit bandwidth
for a given VSI. 

ADQ also enables assigning RSS enabled set of queues to
AF_XDP sockets. Enabling busy polling on AF_XDP sockets
is being planned by associating NAPI_ID to an AF_XDP
socket at the time of bind.

ADQ is supported on next generation Intel 
1/10/25/50/100Gbps
NICs.

### 添付資料URL

- [slides](https://netdevconf.info/0x14/pub/slides/28/Application%20Device%20Queues%20for%20system-level%20network%20IO%20performance%20improvements.pdf)（file）
- [video](https://youtu.be/NWgXJwyKrqs)（link）

<a id="session-talk-taking-control-of-your-SmartNIC"></a>
## 20. Taking Control of your SmartNIC

- セッション個別URL: https://netdevconf.info/0x14/session.html?talk-taking-control-of-your-SmartNIC
- Track: Talk
- 日時: Monday, August 17, 2020 

### Description

Over the last decade, network controllers have added 
significant offload and acceleration capabilities to 
Network Interface Controllers/Cards (NICs).  Many of 
these enhancements were targeted at increasing 
dataplane efficiency.  More recently controllers that 
contained general purpose processors allowed users to 
move control and dataplane processing away from server 
cores adding a new level of abstraction and efficiency 
with these SmartNICs.

Members of the open source networking community have 
worked to contribute patches to software ecosystems 
relevant to these controllers.  Some examples include:
- Hardware steering of flows to specific receive rings 
(ntuple filtering/aRFS)
- Kernel Offload of known flows between PCI functions 
(flow-table offload via tc and nft)
- Upstream kernel and distribution support for the SoC 
and components on the controllers  Enhancements to 
DPDK-based flow offload infrastructure and new driver 
support via RTE Flow API
- Use of Vector Mode (SSE/NEON) instructions for 
batching packet actions to decrease the number of CPU 
cycles needed per packet

This talk and paper are not designed explicitly to 
highlight hardware features of these SmartNICs, but to 
address deployment methods and models if someone were 
to deploy a control-plane offload NIC in their 
infrastructure.  This talk will cover automation 
scripts and recipes that could be used to deploy 
control and dataplane tools like OvS or FRR and along 
with working examples that are available for use 
across devices from multiple, open SmartNIC vendors.  
Progress updates to identification and integration of 
SmartNICs with private cloud orchestration tools like 
OpenStack and Kubernetes will also be provided as 
features like this will allow users to benefit from 
the ability to use these devices without significant 
workflow changes.

### 添付資料URL

- [slides](https://netdevconf.info/0x14/pub/slides/39/Netdev%200x14%20--%20Taking%20Control%20of%20your%20SmartNIC%20v1.pdf)（file）
- [video](https://youtu.be/IZ84h1Uh_tM)（link）

<a id="session-talk-issuing-SYN-cookies-in-XDP"></a>
## 21. Issuing SYN cookies in XDP

- セッション個別URL: https://netdevconf.info/0x14/session.html?talk-issuing-SYN-cookies-in-XDP
- Track: Talk
- 日時: Wednesday, August 19, 2020 

### Description

TCP SYN flood attacks are a type of distributed 
denial-of-service(DDoS) attack in which a high rate of 
SYN packets is sent to a server. If the server 
maintains state for the outstanding connection 
requests, server resources are quickly exhausted and 
legitimate traffic is hindered. Historically, SYN 
cookies have been a popular stateless mitigation 
mechanism in which the sequence number of the first 
ACK is chosen as the result of a cryptographic hash 
function over easily computed parameters. Though 
effective, in Linux this requires traversing a lengthy 
TCP/IP stack, which significantly limits the rate of 
issuing SYN cookies, and leaves room for improvement.

In this talk we will discuss SynGate, an XDP-based 
approach to increasing the rate of SYN cookies a host 
can issue and therefore improving its resilience to 
SYN flood attacks. This approach relies on the early 
placement of the XDP hook on the networking stack to 
bypass much of the existing overhead. We will detail 
the design of this solution, the additional advantages 
eBPF gives us, future areas for improvement, as well 
as some of the challenges we have faced during 
development.

### 添付資料URL

- [slides](https://netdevconf.info/0x14/pub/slides/50/Issuing%20SYN%20Cookies%20in%20XDP.pdf)（file）
- [paper](https://netdevconf.info/0x14/pub/papers/50/0x14-paper50-talk-paper.pdf)（file）
- [video](https://youtu.be/3e2yeyTzh_c)（link）

<a id="session-talk-extending-tc-with-5-tuple-hash-offload-dp-hash"></a>
## 22. Extending TC with 5-tuple hash offload (dp_hash)

- セッション個別URL: https://netdevconf.info/0x14/session.html?talk-extending-tc-with-5-tuple-hash-offload-dp-hash
- Track: Talk
- 日時: Friday, August 14, 2020 

### Description

Network hardware continues to evolve and provide new 
opportunities for offloading a complete stateful 
network pipelines. One of the obstacles of using such 
HW offload was a common API that is expressive, 
flexible, extendable and vendor agnostic on one side, 
and a common API that is a part of the linux network 
path on the other side.  The TC was the natural choice 
for that, and already today, many HW offload 
capabilities are integrated into it. HW offload 
capabilities can be used by TC configuration directly, 
or by using applications such as OVS that are using TC 
to offload their networking. we offer to extend those 
capabilities with packet hashing and matching.

ECMP is a common use case, where next hop can be one 
of few buckets. Since ECMP on L4 must be consistent, 
or else we get packet reorder or network holes, there 
is a hash on 5-tuple and next bucket is selected in a 
consistent manner for L4. Delegating the hashing to 
data path reduces the amount of flows that must be 
configured to the data plane and can increase 
performance significantly. We suggest adding such 
offload capability to TC, namely running hash on 
5-tuple and jump to next chain. On next chain using 
tc-flower we can match the hash result/mask and 
continue the execution, for example setting the next 
hop mac address in ECMP simplest use case.

We would like to discuss the motivation, challenges 
and suggest HW offload TC extension.

### 添付資料URL

- [slides](https://netdevconf.info/0x14/pub/slides/51/netdev-0x14-ppt.pdf)（file）
- [paper](https://netdevconf.info/0x14/pub/papers/51/0x14-paper51-talk-paper.pdf)（file）
- [video](https://youtu.be/krTnLDpjPAo)（link）

<a id="session-talk-performance-optimization-using-artificial-intelligence-methods"></a>
## 23. Performance optimization using artificial intelligence methods

- セッション個別URL: https://netdevconf.info/0x14/session.html?talk-performance-optimization-using-artificial-intelligence-methods
- Track: Talk
- 日時: Friday, August 14, 2020 

### Description

Machine learning provides the ability to learn, 
improve and adapt to a changing environment without 
explicit programming. Optimization is one of usages 
for this domain.

This presentation proposes the use of machine learning 
algorithms to dynamically modify parameters of network 
interfaces and increase quality of service and 
performance. 

As an example use of this method we’ll modify the 
RSS hash parameters in real time. RSS is a feature 
that can optimize CPU usage by spreading the incoming 
traffic amongst different queues and, as a result, 
improve the total available network receive 
performance. Current usage of pre-defined hashes has 
some drawbacks and for some traffic patterns can 
spread the load unevenly, especially in changing 
environment. In this paper we’ll show how an 
AI-based compares and affects the effectiveness of the 
RSS mechanism (among others).

### 添付資料URL

- [slides](https://netdevconf.info/0x14/pub/slides/43/Netdev0x14%20-%20Performance%20optimization%20using%20artificial%20intelligence%20methods.pdf)（file）
- [video](https://youtu.be/vP5KNhYYtkQ)（link）

<a id="session-talk-machine-learning-in-packet-routing-process-using-Quagga-Zebra-routing-sw-suite"></a>
## 24. Machine learning in packet routing process using Quagga/Zebra routing SW suite

- セッション個別URL: https://netdevconf.info/0x14/session.html?talk-machine-learning-in-packet-routing-process-using-Quagga-Zebra-routing-sw-suite
- Track: Talk
- 日時: Friday, August 14, 2020 

### Description

The talk will describe how machine learning can be 
used in routing/forwarding process on Linux powered 
machines using Zebra/Quagga SW suites in user space. 
The goal for using machine learning in routing 
protocols is to make possible better well-balanced and 
optimized network traffic in dynamically-changing 
environment (multiple simultaneous crucial links 
failures or links flapping reported through routing 
protocol).

Our presentation is focused on showing potential pros 
and cons of ML in routing process/protocols.

The talk will cover:
1. Quagga and Zebra Software suite integration with AI 
algorithms (user space).
2. ML in forwarding process. Does it make sense?
3. Routing/forwarding process offload using AI hardware
4. Use case. Possible ML benefits in routing. What are 
we able to improve using ML?
5. Future work

### 添付資料URL

- [slides](https://netdevconf.info/0x14/pub/slides/49/Packet%20Routing%20ML%20v02.pdf)（file）
- [paper](https://netdevconf.info/0x14/pub/papers/49/0x14-paper49-talk-paper.pdf)（file）
- [video](https://youtu.be/eqmPs4A9leQ)（link）

<a id="session-talk-devlink-enhancements-for-sub-functions-management"></a>
## 25. devlink enhancements for sub functions management

- セッション個別URL: https://netdevconf.info/0x14/session.html?talk-devlink-enhancements-for-sub-functions-management
- Track: Talk
- 日時: Tuesday, August 18, 2020 

### Description

PCIe SR-IOV is well known standard for accelerating 
I/O virtualization. Combining SR-IOV with Linux tc 
offloads achieves best of performance, cpu efficiency 
and network isolation. However newer deployment modes 
require high density virtual functions with faster 
life cycle than what PCIe SR-IOV can achieve. We 
discuss use cases which require scalable and high 
performance virtual devices such as bare-metal, 
containers, virtio acceleration and VM live migration.

The following session will showcase how Linux devlink 
subsystem is used to life cycle, configure and deploy 
accelerated sub functions with eswitch offloads 
support. Next, we will discuss the plumbing done using 
virtbus to achieve persistence naming of netdevices 
and rdma devices. We will also cover how such model 
addresses smartnic use case where a sub-function NIC 
is hot plugged in host system in secure manner.

### 添付資料URL

- [slides](https://netdevconf.info/0x14/pub/slides/45/sf_mgmt_using_devlink_netdevconf_0x14.pdf)（file）
- [paper](https://netdevconf.info/0x14/pub/papers/45/0x14-paper45-talk-paper.pdf)（file）
- [video](https://youtu.be/bwu5ED6QcoA)（link）

<a id="session-talk-time-travel-linux-network-simulation"></a>
## 26. Time-travel Linux (network) simulation

- セッション個別URL: https://netdevconf.info/0x14/session.html?talk-time-travel-linux-network-simulation
- Track: Talk
- 日時: Tuesday, August 18, 2020 

### Description

We present “Time Travel mode”, a way of running 
User-Mode-Linux (UML) with a virtual clock that 
isn’t “constrained” by real time, along with an 
application in the testing of the 802.11 stack under 
Linux. The time travel mode allows for faster and more 
reproducible testing inside the virtual machine and 
speeds up test execution significantly.

In addition, we present an implementation of a 
user-space time controller that allows multiple 
virtual machines to run on the same simulated time, 
and then include a virtio/vhost-user network switch 
that presents as devices to the UML virtual machines 
and allows forwarding packets with programmable delay 
parameters inside the virtual time.

As a very simple example, two machines in such a setup 
can simulate 61 pings (at a default 1 second interval) 
in about 1.6 seconds real time (on a slow laptop).

### 添付資料URL

- [slides](https://netdevconf.info/0x14/pub/slides/8/UML%20Time%20Travel%20intro%20-%20netdev%200x14.pdf)（file）
- [video](https://youtu.be/t3LHSVh1kwA)（link）

<a id="session-talk-tc-connection-tracking-hardware-offload-upstream-work"></a>
## 27. TC Connection tracking hardware offload - upstream work

- セッション個別URL: https://netdevconf.info/0x14/session.html?talk-tc-connection-tracking-hardware-offload-upstream-work
- Track: Talk
- 日時: Thursday, August 20, 2020 

### Description

Industry movement towards the use of TC as well as 
openVswitch (OVS) has created new requirements, one of 
which is supporting connection tracking (CT). OVS 
datapath already uses rules to deliver the packet to 
CT and rules to act according to CT State. TC should 
also be extended to support rules according to CT 
state. 

In netdev x12 we discuss the addition of 
Connection-Tracking within TC and in more detail ways 
to implement offloading of connection tracking.

In this talk we want to talk on the upstream work that 
took more than a year. We will go over the changes 
that was submitted upstream in order to support it. 
Show example of use of CT {DESCRIPTION} NAT action and 
compare the performance improvement of HW offload in 
compare to CPU.

### 添付資料URL

- [slides](https://netdevconf.info/0x14/pub/slides/48/Netdev_0x14_CT_offload.pdf)（file）
- [paper](https://netdevconf.info/0x14/pub/papers/48/0x14-paper48-talk-paper.pdf)（file）
- [video](https://youtu.be/gWklbJSk0YI)（link）

<a id="session-talk-reducing-kernel-queuing-delays-with-TCP-window-space-events"></a>
## 28. Reducing Kernel Queuing Delays with TCP Window Space Events

- セッション個別URL: https://netdevconf.info/0x14/session.html?talk-reducing-kernel-queuing-delays-with-TCP-window-space-events
- Track: Talk
- 日時:  

### Description

The combination of TCP auto-tuning and asynchronous 
I/O event notifications (e.g., epoll) allows the Linux 
kernel to generally sustain high-volume TCP 
connections---even for connections with high 
bandwidth-delay products (high link bandwidth and/or 
high path latency). However, bufferbloat can quickly 
become an issue when multiple such connections are in 
use. In particular, high outbound kernel queuing 
delays have been observed in the Tor anonymity 
network, a large distributed system whose relays often 
manage thousands of sockets---many of which are 
simultaneously-active, high-volume TCP connections.

In this work, we propose a new notification event that 
triggers when TCP is ready to send data on a socket 
while seeking to better understand how it can help 
applications to better manage network I/O and improve 
performance. The new event supplements and extends the 
current write event that triggers when a socket buffer 
has free space, and the difference in semantics allows 
more precise control over queuing to the application. 
We describe the problem, detail a proposal for 
extending epoll to support the new semantics 
(including a code patch), and show the effect that 
such a change could have on performance through a 
small scale simulation.

### 添付資料URL

- [paper](https://netdevconf.info/0x14/pub/papers/34/0x14-paper34-talk-paper.pdf)（file）

<a id="session-talk-hardware-offload-for-k8s-container-networking"></a>
## 29. Hardware offload for K8s container networking

- セッション個別URL: https://netdevconf.info/0x14/session.html?talk-hardware-offload-for-k8s-container-networking
- Track: Talk
- 日時: Monday, August 17, 2020 

### Description

Linux Containers have changed the world of cloud 
computing and the way enterprises do software 
development inside and outside the cloud. Kubernetes 
container orchestration platform is one of the leading 
solutions for deploying services on the cloud. 

As a lightweight, standalone, executable package of 
software that includes everything needed to run an 
application, containers can scale as VM never could. 
This enhance the already exists need for network HW 
offloads in the cloud.

Kubernetes networking model consist on CNI (Container 
Network Interface) plugins, where different plugins 
implements different networking solutions. OpenVswitch 
based CNI plugins utilize the rich OpenVswitch feature 
set to implement a full SDN solution for a Kubernetes 
cluster. 

In this session we would like to present the use case 
of a K8s cluster running Linux containers with OVS 
based CNI plugin, and the work that was done both on 
the orchestration and in the Linux kernel in order to 
enable OVS HW offload for the containers. On the 
orchestration level we’ve faced several challenges 
including replacing creation of an unlimited resource 
(Veth) per container with VF allocation, a limited 
resource. In the kernel we enabled NAT and Geneve HW 
offload and working on offloading dp_hash in order to 
achieve full HW offload in all K8s use cases (service 
network, pod to pod network, etc.).

### 添付資料URL

- [video](https://youtu.be/g7D4Xj0klqE)（link）

<a id="session-talk-using-upstream-MPTCP-in-linux-systems"></a>
## 30. Using Upstream MPTCP in Linux Systems

- セッション個別URL: https://netdevconf.info/0x14/session.html?talk-using-upstream-MPTCP-in-linux-systems
- Track: Talk
- 日時: Friday, August 21, 2020 

### Description

Multipath TCP patches have been merged for inclusion in 
the Linux kernel, v5.6 and later. A community effort 
has been ongoing to develop an upstream-friendly kernel 
patch set, with patches merged in 2020 that implement 
MPTCP capability according to RFC 8684 (MPTCP v1). 
Complementing this set of kernel patches is a 
user-space reference implementation for the MPTCP 
generic netlink API called the Multipath TCP Daemon, 
i.e. "mptcpd". The Multipath TCP Daemon provides an 
extensible framework for MPTCP path management.

There are several practical considerations for network 
developers, system administrators, and distribution 
maintainers who want to use or enable MPTCP for their 
applications or systems:
    
    * Coordination with userspace for operating system, 
    platform, and application integration, as well as 
    potentially enabling support for user-space path 
    management by configuring the kernel appropriately,
    and installing a MPTCP path management daemon such 
    as mptcpd
    
    * Compatibility between upstream Linux MPTCP (v1 
    protocol) and other implementations
    
    * Opting in to MPTCP with the socket API
    
    * Phased feature introduction for code review and 
    what that means for server and client devices over 
    time
    
We will cover these kernel considerations, report on 
upstream merge progress to date, and introduce the 
Multipath TCP Daemon to the Linux networking community.

### 添付資料URL

- [slides](https://netdevconf.info/0x14/pub/slides/59/mptcp-netdev0x14-final.pdf)（file）
- [paper](https://netdevconf.info/0x14/pub/papers/59/0x14-paper59-talk-paper.pdf)（file）
- [video](https://youtu.be/3EgtS-lwzso)（link）

<a id="session-talk-fast-OVS-data-path-with-XDP"></a>
## 31. Fast OVS data path with XDP

- セッション個別URL: https://netdevconf.info/0x14/session.html?talk-fast-OVS-data-path-with-XDP
- Track: Talk
- 日時: Thursday, August 20, 2020 

### Description

Recently AF_XDP netdev type has been introduced in OVS 
to bring XDP's flexibility to OVS data path. It enables 
us to update the data path without updating kernel. 
AF_XDP data path is also faster than OVS kernel module. 
However, compared to native XDP in kernel (i.e. 
non-AF_XDP), it imposes some overhead like memory copy 
in userspace on forwarding, and skb conversion on Tx 
due to missing zero-copy support in drivers.

We are trying to bring even faster data path to OVS by 
attaching native in-kernel XDP programs which implement 
subset of OVS data path. There are two different 
approaches to attach such XDP programs from OVS 
userspace daemon.

1. Attach XDP from kernel through UMH (user mode 
helper), reusing TC HW acceleration interface 
(xdp_flow [1])

  This is an approach similar to bpfilter. This 
  introduces a new TC offload driver which actually 
  offload flows to XDP programs through UMH instead of 
  offloading to NICs. As the newly created TC driver is 
  not dedicated to OVS but a generic flow offload 
  engine to XDP, nftables and TC flower (without OVS) 
  also can be offloaded to XDP by introducing this 
  mechanism. The drawback is complexity due to 
  indirection layer and no integration with AF_XDP. 
  Also it's difficult to dynamically modify the XDP 
  program to implement only necessary features for the 
  running system.

2. Attach XDP directly from OVS userspace daemon

  This is a straightforward way to attach XDP programs 
  from userspace. Although this implementation is not 
  reusable for TC or nftables, it can overcome 
  challenges with approach 1 - complexity is lower as 
  indirection layer is not needed, support AF_XDP 
  integration, and can have only necessary flow 
  keys/actions in XDP programs.

[1] - https://lwn.net/Articles/802653/

### 添付資料URL

- [slides](https://netdevconf.info/0x14/pub/slides/41/Netdev0x14_XDP_OVS_200720.pdf)（file）
- [paper](https://netdevconf.info/0x14/pub/papers/41/0x14-paper41-talk-paper.pdf)（file）
- [video](https://youtu.be/DU4POxNfYjM)（link）

<a id="session-talk-the-path-to-tcp-4k-mtu-and-rx-zerocopy"></a>
## 32. The Path To TCP 4K MTU and RX ZeroCopy

- セッション個別URL: https://netdevconf.info/0x14/session.html?talk-the-path-to-tcp-4k-mtu-and-rx-zerocopy
- Track: Talk
- 日時: Tuesday, August 18, 2020 

### Description

In this presentation we will talk of the steps 
followed by Google to increase TCP receiver efficiency 
by 2X in its DataCenters.

TCP had TX zerocopy via sendfile()/splice() for a 
while, and got MSG_ZEROCOPY support for sendmsg() in 
linux-4.14. Even without zerocopy, hardware offload 
like TSO makes TCP TX quite efficient.

Historically getting decent receive performance has 
been more challenging. Our goal was to provide receive 
zerocopy for applications on x86 servers.

First step was to make sure that each Ethernet segment 
would contain exactly 4096 bytes of payload. After 
converting the fabric to ~5K MTU, we had to tweak NIC 
drivers to perform a headers split, so that the 
payload could sit in a 4K page.

Then we performed changes in TCP stack to permit 
testing the 4K MTU, while allowing reverting to 
standard 1500 MTU transparently. We added proper 
monitoring infrastructure.

Then we added TCP_ZEROCOPY_RECEIVE ability to TCP 
stack in linux-4.18.

We will present various issues we hit and tuning we 
had to do, for example in the TCP Congestion Control 
territory.

### 添付資料URL

- [slides](https://netdevconf.info/0x14/pub/slides/62/Implementing%20TCP%20RX%20zero%20copy.pdf)（file）
- [video](https://youtu.be/_ZfiQGWFvg0)（link）

<a id="session-talk-security-and-control-of-SR-IOV"></a>
## 33. Security and Control of SR-IOV: What’s Our Responsibility if the Kernel is Bypassed?

- セッション個別URL: https://netdevconf.info/0x14/session.html?talk-security-and-control-of-SR-IOV
- Track: Talk
- 日時: Friday, August 21, 2020 

### Description

Use of kernel bypass and virtualization mechanisms in 
the form of SR-IOV’s Virtual Functions (VF) are not 
going away any time soon. In fact, these use cases are 
no longer just about bypass of the kernel datapath.  
Solutions are starting to emerge that bypass the 
kernel control plane as well. For instance, rte_flow 
in DPDK “provides a generic means to configure 
hardware to match specific ingress or egress 
traffic”. There is also motivation to bypass the 
kernel and program the device directly from userspace 
under the ostensible rationale that it takes too long 
to develop and enable the kernel for new features.  
Since this has not been addressed by the kernel, there 
is today an assortment of proprietary hacks.  

The kernel is intended to be the resource manager for 
the system and therefore is responsible to ensure that 
device configuration is kept in a sane state and that 
necessary security measures protect host resources. 
When this control plane is circumvented, the saneness 
and security of the system can be compromised. 
Multiple agents (user space and kernel) trying to 
independently manage the same resources is known to be 
problematic. Similarly, extending the system security 
model for “trusted users” to access hardware 
directly is tricky. Additionally, the kernel has the 
nice attribute in that device configuration state has 
fate sharing with the system (i.e. if the kernel 
crashes then devices are reinitialized to a known 
state upon reboot).  Establishing this same level of 
fate sharing with a userspace process is much harder.

This talk will introduce the problems of control and 
security in the context of kernel bypass and initiate 
discussion in the topic area. Some potential solutions 
will be proposed. One solution is to intercept 
commands in the kernel, such as rte_flow, and 
transparently relay them to the device in a controlled 
fashion.  Performance is always something to consider 
in these use cases, but security methods and models 
should keep this requirement at top of mind.  Another 
alternative to be explored, is to define a Virtual 
Function (VF) Security Model with a basic set of 
individual granular VF privileges that allows the 
kernel driver to delegate a specific set of control 
functions to a  specific VF, instead of the current 
approach of all or nothing.  This could allow it to 
manage other VF’s directly in a well-defined and 
controlled sandbox.  This model of combining 
individual privileges also helps customers combine 
specific functionality in one VF while defining a 
potentially different set of privileges for another VF 
responsible for other work.

### 添付資料URL

- [slides](https://netdevconf.info/0x14/pub/slides/19/VF%20Security%20netdev%200x14.pdf)（file）
- [video](https://youtu.be/kMzOSPIQKmE)（link）

<a id="session-talk-performance-improvements-for-NVMe-TCP"></a>
## 34. Performance improvements for NVMe/TCP

- セッション個別URL: https://netdevconf.info/0x14/session.html?talk-performance-improvements-for-NVMe-TCP
- Track: Talk
- 日時: Wednesday, August 19, 2020 

### Description

NVMe/TCP is a young standard that allows for remote 
access with a native NVMe protocol over a standard 
TCP/IP network. NVMe/TCP takes the power of the NVMe 
architecture designed for efficient access to flash 
and next-gen media. A year in since the driver stack 
was introduced to the Linux Kernel, various 
experiments were made to measure the performance and 
more importantly the latency achieved with NVMe/TCP. 

In this talk we would share the different features 
supported by NIC vendors as well as new innovations 
such as Intel ADQ technology to improve the overall 
performance and latency. In addition further useful 
enhancements in the stack/drivers can be proposed 
based on existing experience.

### 添付資料URL

- [slides](https://netdevconf.info/0x14/pub/slides/52/NVMe_TCP%20netdev%200x14.pdf)（file）
- [video](https://youtu.be/KdZLu42oNvA)（link）

<a id="session-tutorial-add-XDP-support-to-a-NIC-driver"></a>
## 35. How to add XDP support to a NIC driver: fundamental aspects to increase performance

- セッション個別URL: https://netdevconf.info/0x14/session.html?tutorial-add-XDP-support-to-a-NIC-driver
- Track: Tutorial
- 日時: Friday, August 14, 2020 

### Description

XDP (eXpress Data Path) is an emerging trend for 
creating network packet services on Linux. XDP runs 
within the driver context before standard network 
buffers (skb) are allocated making it extremely 
performant. In addition, XDP relies on extended 
Berkeley Packet Filter (eBPF) to allow development of 
customized packet processing functions. Due to these 
attributes, XDP has found its way in many use cases 
such as very large scale Distributed Denial of Service 
(DDoS) prevention, load balancing, etc. For XDP to 
work, a Network Interface Card (NIC) driver needs to be 
extended to support the required infrastructure.

Adding XDP to a NIC driver could be challenging 
depending on the underlying hardware's characteristics. 
In this tutorial we are going to describe the basics of 
how a developer would proceed to add  XDP support to a 
NIC driver. We will then proceed to examine some of the 
challenges an author will be faced with by drawing 
inspiration from the work done on the mvneta driver 
(e.g. running XDP on Marvell ESPRSSObin - Marvell 
Armada 3700LP). The tutorial will be interactive and 
dissect code samples while describing architectural 
challenges. Some of the topics that will be analyzed 
include:

- XDP and page pool requirements: buffer memory layout, 
  buffer allocation, locking, etc.

- the most impactful changes in regards to the 
  performance gained on the mvneta driver in contrast 
  to the original codebase.

- Some ideas on how to improve further the performance 
  including but not limited to skb recycling, zero_copy 
  AF_XDP, queue reservation.

### 添付資料URL

- [slides](https://netdevconf.info/0x14/pub/slides/10/add-xdp-on-driver.pdf)（file）
- [video](https://youtu.be/ayFWnFj5fY8)（link）

<a id="session-tutorial-XDP-and-the-cloud"></a>
## 36. XDP and the cloud: Using XDP on hosts and VMs

- セッション個別URL: https://netdevconf.info/0x14/session.html?tutorial-XDP-and-the-cloud
- Track: Tutorial
- 日時: Friday, August 14, 2020 

### Description

XDP has been around for a few years now and touted as a 
means for speeding up networking. But is it really 
ready for production deployments with VMs and 
containers? This tutorial takes a look at the current 
state of XDP through the lens of cloud hosting, 
discussing the advantages, trade-offs, and limitations 
of using XDP on the host with the v5.4 kernel (latest 
LTS).

This tutorial covers:
- configuration of the host,
- walks through an L2 forwarding program,
- management of the fdb and device maps using bpftool,
- simple per-VM/container ACL via eBPF,
- XDP forwarding in the egress path, and
- using XDP in VMs running on the host.

The tutorial will include live demos, and the source 
code will be made available from github.

### 添付資料URL

- [slides](https://netdevconf.info/0x14/pub/slides/24/netdev-0x14-XDP-and-the-cloud.pdf)（file）
- [video](https://youtu.be/l9C-ANkN1-Q)（link）

<a id="session-tutorial-programming-QUIC-using-lsquic"></a>
## 37. Programming QUIC using lsquic

- セッション個別URL: https://netdevconf.info/0x14/session.html?tutorial-programming-QUIC-using-lsquic
- Track: Tutorial
- 日時: Friday, August 14, 2020 

### Description

QUIC is a new encrypted, multiplexed, general-purpose
transport protocol on top of UDP.  It is designed to
improve performance and to be able to evolve rapidly.
HTTP/3 is a new version of HTTP that uses novel
features of QUIC transport protocol to improve on
HTTP/2.  Current QUIC usage on the Internet is
significant.  Once QUIC and HTTP/3 protocols are
standardized by the IETF at the end of 2020, the share
of QUIC traffic is going to rise even more.

This tutorial is aimed at those who want to begin
experimenting with QUIC today.  We introduce lsquic
(LiteSpeed QUIC), an open-source library that
implements QUIC and HTTP/3.  lsquic offers a convenient
way to get started: It has few dependencies, it is
written in vanilla C, and it compiles and works on
several platforms.

The tutorial is organized as follows:
    - A (very) short QUIC and HTTP/3 introduction is
      given.
    - lsquic is described on high level: API philosophy,
      what objects are available to the user, and how
      they are managed by the library.
    - A simple echo server and client programs are
      developed.  In addition to highlights in slides,
      the fully functional programs are available
      on-line (GitHub). This exercise will demonstrate
      how to:
      - Instantiate lsquic engine;
      - Use an event loop with the library;
      - Create and destroy connections;
      - Create, destroy, read from, and write from
        streams using on-read and on-write events; and
      - Use logging modules and make sense out of
        logging output.
    - If time permits, a bonus section will describe
      some more advanced features of the library.
      TBD.  (HTTP/3? UDP kernel bypass?)

The emphasis of the tutorial is using the library
effectively.

### 添付資料URL

- [slides](https://netdevconf.info/0x14/pub/slides/23/lsquic-slides.pdf)（file）
- [video](https://youtu.be/kDwyGNsQXds)（link）

<a id="session-tutorial-adding-AF_XDP-zero-copy-support-to-drivers"></a>
## 38. Adding AF_XDP zero-copy support to drivers

- セッション個別URL: https://netdevconf.info/0x14/session.html?tutorial-adding-AF_XDP-zero-copy-support-to-drivers
- Track: Tutorial
- 日時: Friday, August 14, 2020 

### Description

AF_XDP is a relatively new technology optimized for high
performance packet processing. It provides an
abstraction over hardware rings, so the application can
handle packets in a low-level, yet hardware-agnostic
fashion. With conforming drivers, AF_XDP provides
zero-copy packet handling capabilities to the
application. It still works with other drivers, too,
transparent to the application, but without zero-copy
features.

Initially brought up by Intel, AF_XDP was a great
framework with necessary capabilities to add zero-copy
support to other vendors' drivers. However, different
hardware has different features, peculiarities and
limitations, and also different drivers have different
design, hence some difficulties may arise when trying
to fit some existing driver and AF_XDP together. As
Mellanox was the second to implement AF_XDP in a NIC
driver, some adaptation was required both from the
driver side and AF_XDP side. In this tutorial I'm going
to share my experience on writing the first-after-Intel
AF_XDP-enabled NIC driver, related challenges and
further porting of new features (need_wakeup, unaligned
chunks) to mlx5e. I'll demonstrate the step-by-step
process of adding support of AF_XDP to a NIC driver on
the example of mlx5e.

### 添付資料URL

- [slides](https://netdevconf.info/0x14/pub/slides/37/Adding%20AF_XDP%20zero-copy%20support%20to%20drivers.pdf)（file）
- [video](https://youtu.be/cSdQIISFx08)（link）

<a id="session-wireless-workshop"></a>
## 39. Wireless Workshop

- セッション個別URL: https://netdevconf.info/0x14/session.html?wireless-workshop
- Track: Workshop
- 日時:  

### Description

Johannes Berg and Kalle Valo will chair the netdev
wireless workshop.

A wireless workshop discussing the current topics in 
wireless, e.g:

* 802.3/802.11 encaps offload
* eBPF integration cont'd
* 802.11ax integration - in particular AP side is an 
  ongoing process
* etc.

### 添付資料URL

掲載なし

<a id="session-workshop-switch-ASIC-hardware-offload"></a>
## 40. Switch ASIC Hardware Offload Workshop

- セッション個別URL: https://netdevconf.info/0x14/session.html?workshop-switch-ASIC-hardware-offload
- Track: Workshop
- 日時: Friday, August 14, 2020 

### Description

In the past decade Open Networking and Open       
Disaggregated hardware software architectures have 
gained prominence. Network Operating Systems(NOS) based 
on Linux-native hardware offload for network switching 
ASICs have gained traction. Linux-native kernel 
networking hardware offload model has a big advantage 
in its ability to leverage the tooling ecosystem that 
already exists and is well understood in the Linux 
community. Some of the benefits include: Open Linux 
firmware management, platform driver infrastructure, 
network interface management, variety of Linux tools 
and of course a well established ecosystem and 
community.

Recently announced project DENT [1] is one another step 
in the right direction that leverages Linux-native 
kernel networking and brings together switch ASIC 
vendors, distributors, system integrators and users.

This workshop is similar to previous netdevconf 
switchdev workshops with a larger focus on community 
discussions around building an Open Linux kernel 
switchdev based Network Operating System.

Workshop topics (Work in progress):

- Discuss switchdev driver updates since last 
  netdev0x13:

  - Mellanox mlxsw driver updates

- New Networking features and use-cases

- Open issues and challenges

- New vendors

- Supporting new features down the pike:

  - Eg: EVPN-MH, port security, dynamic NAT and others

- Operationalizing Linux networking:

  - Automation and DevOps

[1] linuxfoundation.org press release: dent launches to simplify...
  https://www.linuxfoundation.org/press-release/2019/12/dent-launches-to-simplify-enterprise-edge-networking-software/

### 添付資料URL

- [agenda](https://netdevconf.info/0x14/pub/slides/18/netdev0x14_switch_asic_offload_workshop_agenda.pdf)（file）
- [DSA and L1 status update](https://netdevconf.info/0x14/pub/slides/18/DSA-L1-status_Andrew_Lunn.pdf)（file）
- [MLXSW updates](https://netdevconf.info/0x14/pub/slides/18/netdev%200x14_Ido_Schimmel_new.pdf)（file）
- [DENT](https://netdevconf.info/0x14/pub/slides/18/nedev0x14_switch_asic_offload_workshop_dent.pptx.pdf)（file）
- [networking updates](https://netdevconf.info/0x14/pub/slides/18/nedev0x14_switch_asic_offload_workshop_networking_updates.pptx.pdf)（file）
- [video](https://youtu.be/NAVNxbC2Kcc)（link）

<a id="session-workshop-Traffic-Control"></a>
## 41. Traffic Control Workshop

- セッション個別URL: https://netdevconf.info/0x14/session.html?workshop-Traffic-Control
- Track: Workshop
- 日時: Friday, August 14, 2020 

### Description

Face to Face discussions on different Traffic Control
topics.

Current WAG agenda (subject to update):

- New features requests/improvements
- Performance
- Testing Progress

### 添付資料URL

- [Agenda-0x14](https://netdevconf.info/0x14/pub/slides/13/Agenda-0x14.pdf)（file）
- [tcandIPfragments](https://netdevconf.info/0x14/pub/slides/13/tcandIPfragments.pdf)（file）
- [TCperf-0x14](https://netdevconf.info/0x14/pub/slides/13/TCperf-0x14.pdf)（file）
- [tdc](https://netdevconf.info/0x14/pub/slides/13/tdc.pdf)（file）
- [video](https://youtu.be/lTwYxrsA3Ss)（link）

<a id="session-workshop-iot-networking"></a>
## 42. IoT Networking Workshop

- セッション個別URL: https://netdevconf.info/0x14/session.html?workshop-iot-networking
- Track: Workshop
- 日時: Thursday, August 13, 2020 

### Description

This workshop serves for follow up discussions and 
status updates on former workshops we have been running 
at earlier NetDev conference editions.

This workshop in general aims to identify generic 
requirements for the networking subsystem for IoT and 
starting the process of addressing the gaps found. The 
workshop will encompass related MAC layers, networking 
protocols, adaptation layers, header compressions and 
routing protocols.

A rough idea on the agenda can be found below. The 
final one depends on who can attend and input from the
attendees. We will post the final agenda closer to the 
conference date:

- Discuss needed kernel interfaces for RPL 
  implementations (unstrung, rpld)

- ieee802154 and 6lowpan subsystems

- More subsystems depending on attendees CAN, LoRa, 
  etc.

### 添付資料URL

- [slides](https://netdevconf.info/0x14/pub/slides/14/2020-08-Netdev-IoT-workshop.pdf)（file）
- [video](https://youtu.be/HYV-0FFf_Jo)（link）

<a id="session-workshop-XDP"></a>
## 43. XDP Workshop

- セッション個別URL: https://netdevconf.info/0x14/session.html?workshop-XDP
- Track: Workshop
- 日時: Thursday, August 13, 2020 

### Description

XDP open general discussion will include, follow ups, 
updates, sharing of new ideas and open issues, with 
a wide variety of XDP scopes and topics, concerning 
acceleration, performance, new features and use cases.

Key participants and XDP active developers will 
discuss:

1) Introduction & Development updates (5 mimutes) 
   [ Saeed Mahameed ]

2) XDP HW hints (15 minutes) [ Saeed Mahameed ]

3) XDP on hosts pain points summary (5 minutes) 
   [ David Ahern ]

4) XDP egress, development status and use case 
   (10 minutes) [ David Ahern ]

5) Multi-buffer for XDP (10 minutes) [ Sameeh Jubran ]

6) XDP for TSN(time sensitive networking) and XDP 
   time-stamping (10 minutes) [ Ilias Apalodimas ]

7) Busy poll support for AF_XDP sockets (10 minutes) 
   [ Sridhar Samudrala ]

8) Open mic for discussion & concluding remarks, 
   6:20 - 6:45pm (25 minutes)
   - Maintaining XDP performance [ Jesper ]
   - Page pool skb recycling & iommu - 
     [ Jonathan Lemon ]
   - 0-copy with header data split - [ Jonathan Lemon ]
   - Open discussions

Will allow 5 minutes Q/A and free discussion after each 
topic.

### 添付資料URL

- [slides 1](https://netdevconf.info/0x14/pub/slides/54/%5B0%5D%20XDP-workshop-2020.pdf)（file）
- [slides 2](https://netdevconf.info/0x14/pub/slides/54/%5B1%5D%20XDP%20meta%20data%20acceleration.pdf)（file）
- [slides 3](https://netdevconf.info/0x14/pub/slides/54/%5B6%5D%20AF_XDP%20busy%20poll.pdf)（file）
- [video](https://youtu.be/vMk0UWFBBlk)（link）

<a id="session-workshop-transport"></a>
## 44. Transport Workshop

- セッション個別URL: https://netdevconf.info/0x14/session.html?workshop-transport
- Track: Workshop
- 日時: Thursday, August 13, 2020 

### Description

This workshop will cover current topics in 
transport-layer issues in the Linux kernel ecosystem, 
including:

- different protocols in the Linux kernel: TCP, MPTCP, 
  SCTP, ...

- congestion control, loss recovery, and protocol 
  improvements

- new development, performance work, measurement, 
  real-world production experience

- eBPF integration with the transport layer
      
Workshop will consist of slide presentations and 
extended group discussions.

A rough idea of the agenda can be found below. The 
final agenda will depend on who can attend and input 
from the attendees. We will post the final agenda 
closer to the conference date.

Topics will include some or all of:

- BBRv2 Alpha for Linux TCP [presenter confirmed]:
  - https://github.com/google/bbr/blob/v2alpha/README.md
  - goals and design
  - how to deploy and test
  - lab and/or production experiment results

- TCP Prague for Linux TCP:
  - https://github.com/L4STeam/linux/commits/tcp_prague
  - motivation and architecture
  - current status of IETF drafts and Linux code

- TCP RACK loss recovery

- transport layer design in mmWave links [speaker has 
  expressed interest]

- TCP zero copy

- current work to integrate MPTCP into Linux 

- new areas for eBPF integration with the transport 
  layer

- implementing TCP congestion control in eBPF

- what would it take to implement a full-fledged 
  transport layer (e.g. QUIC) in eBPF for the extreme 
  flexibility?

- Beyond & below L4 Transport -- vertical 
  instrumentation from application, RPC, and L4 
  transports and below [presenter confirmed]:

  - Existing TCP instrumentation is often not 
    sufficient to diagnose application problems sitting 
    N layers up. 

  - Cloud introduces another challenge: beside 
    exporting at host and user level, what should the 
    interfaces be for host controllers? For example, 
    can a host-controller leverage TCP RTO information 
    to make routing changes, like how TCP changes its 
    v6 flow-label on timeout?

- TCP option for data-center or cloud networking 
  [presenter confirmed]:

  - TCP can use custom optimizations inside 
    data-centers or in Cloud environments. One example 
    is to lower the default timeout from 200ms to match 
    the microsecond DC RTTs. Another example is to use 
    microsecond-precision TCP timestamp options to 
    measure network queuing delays.
  
  - Should datacenter TCP have a general purpose option 
    that allows flexible optimization without getting a 
    new IANA option kind code every time? While 
    intranets are not subject to IETF 
    inter-operatilibity, the VMs in these multi-tenant 
    Cloud datacenters still need a way to 
    inter-operate.

### 添付資料URL

- [slides](https://netdevconf.info/0x14/pub/slides/56/NetDev%200x14%20Transport%20Workshop%20deck.pdf)（file）
- [video](https://youtu.be/goyZF4JmRyA)（link）

<a id="session-workshop-hardware-acceleration-and-offload"></a>
## 45. Hardware acceleration and offload Workshop

- セッション個別URL: https://netdevconf.info/0x14/session.html?workshop-hardware-acceleration-and-offload
- Track: Workshop
- 日時: Thursday, August 13, 2020 

### Description

This workgroup will continue discussions on several 
topics in the area of hardware acceleration and 
hardware offload in NICs.

Possible topics for the workgroup include:
    - New work in checksum and segmentation offloads
    - TC flower offload
    - XDP hints
    - XDP/eBPF offload
    - Receive packet steering
    - Netfilter offload
    - OVS offload
    - Application specific hardware queues

### 添付資料URL

- [slides](https://netdevconf.info/0x14/pub/slides/21/Netdev%200x14%20notes.pdf)（file）
- [video](https://youtu.be/y4Q5B2RGsB4)（link）

<a id="session-workshop-netfilter"></a>
## 46. Netfilter Workshop

- セッション個別URL: https://netdevconf.info/0x14/session.html?workshop-netfilter
- Track: Workshop
- 日時: Thursday, August 13, 2020 

### Description

This workshop will cover updates in the Netfilter land 
since the last NetDev conference such as:

    * Summary of asorted updates.

    * Updates on the next generation packet 
      classification framework.

    * Connection tracking support for bridge.

    * Hardware offloads.

### 添付資料URL

- [slides](https://netdevconf.info/0x14/pub/slides/57/netdev-0x14.pdf)（file）
- [video](https://youtu.be/GqGGo4svj7s)（link）

<a id="session-workshop-FRR"></a>
## 47. FRR Workshop

- セッション個別URL: https://netdevconf.info/0x14/session.html?workshop-FRR
- Track: Workshop
- 日時:  

### Description

Topics for the workshop include:

* Where to put kernel boundary conventions:
    This is items that the kernel doesn’t care about but 
    user space programs need to agree with	each other on

* Current Status of where we are on netconf/yang 
  conversion as well as discussion of some of new yang 
  models

* Status of using kernel nexthop groups FRR has 
  recently gained the ability to use the new 
  kernel nexthop groups
  Describe performance improvements as well as issues 
  run into.  Additionally discussion around how FRR 
  should further expand this model to all FRR daemons.

* FRR feature rundown:
    Recent past and future work

* Installing FRR for kernel developers

### 添付資料URL

- [slides](https://netdevconf.info/0x14/pub/slides/38/FRR%20Workshop.pdf)（file）

<a id="session-workshop-ai-ml"></a>
## 48. AI/ML Workshop

- セッション個別URL: https://netdevconf.info/0x14/session.html?workshop-ai-ml
- Track: Workshop
- 日時: Friday, August 14, 2020 

### Description

Various topics in applying AI and ML to networking.

  - Using ML to optimize host network configuration
  - Applying AI/ML to routing
  - AI/ML in validation, debugging, and testing of 
    networks and implementation

### 添付資料URL

- [slides](https://netdevconf.info/0x14/pub/slides/60/AI_ML%20workshop.pdf)（file）
- [video](https://youtu.be/KqYdH7IFo2I)（link）

<a id="session-workshop-TLS-performance-and-implementation"></a>
## 49. TLS Performance and Implementation Workshop

- セッション個別URL: https://netdevconf.info/0x14/session.html?workshop-TLS-performance-and-implementation
- Track: Workshop
- 日時: Friday, August 14, 2020 

### Description

Topics in TLS performance and implemenation

  - TLS performance in CPU
  - kTLS offload
  - TLS handshake performance

### 添付資料URL

- [slides](https://netdevconf.info/0x14/pub/slides/61/TLS%20performance%20workshop.pdf)（file）
- [video](https://youtu.be/rCiLuCYi4jI)（link）

<a id="session-keynote-mckeown"></a>
## 50. Creating an End-to-End Programming Model for Packet Forwarding

- セッション個別URL: https://netdevconf.info/0x14/session.html?keynote-mckeown
- Track: Keynote
- 日時:  

### Description

Imagine a world where the owner of a large network can express the behavior
        they want in their network using a high-level language.
        The desired programmatic intent is then partitioned and compiled
        to run on different available network elements that make up the network,
        ranging from the end-host Linux user-space and kernel stack, vSwitch,
        physical NICs and switches. 
      


      
        How can we work together to get there?
        Several great techniques and languages exist for expressing packet
        forwarding behavior.
        In this keynote talk Nick will explore how we might work toward this
        vision, hopefully leading to some healthy debate and discussion.

### 添付資料URL

- [slides](https://netdevconf.info/0x14/pub/slides/keynote/Netdev0x14-NM.pptx)（file）
- [report](https://lwn.net/Articles/828056/)（link）
- [video](https://youtu.be/fiBuao6YZl0)（link）