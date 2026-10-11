# Netdev 0.1 全セッション一覧

出典: https://netdevconf.info/0.1/sessions.html

Sessions一覧の全36個別URLを収録（Reception等も元分類のまま保持）。Descriptionは個別ページの説明原文。スライド・論文・動画URLを個別ページから抽出し、DownloadsとRecent arrivalsのファイルを照合。形式違いの同名資料は対応するセッションへ追加し、対応未確定の資料は補足へ分離。日付・時刻はスケジュールから取得し、複数枠はscheduled_slotsに保持。添付本体の取得・リンク有効性検査は未実施。

セッション: 36件 / Descriptionあり: 36件 / 資料あり: 29件 / 資料項目: 66件

## 目次

1. [Keynote](#session-8)
2. [Reception](#session-37)
3. [Rocker: switchdev prototyping vehicle](#session-2)
4. [How to not just do a demo with DPDK or Lessons learned making a software dataplane](#session-3)
5. [Picking low hanging fruit from the FIB tree](#session-4)
6. [Rtnetlink dump filtering](#session-5)
7. [hardware switches - the opensource approach](#session-6)
8. [Library operating system with mainline Linux kernel](#session-7)
9. [Distributing TC Classifier Action](#session-9)
10. [UDP encapsulation, FOU, GUE, & RCO](#session-11)
11. [Offloading to yet another software switch](#session-13)
12. [Implementing Open vSwitch datapath using TC](#session-14)
13. [MPTCP Upstreaming](#session-16)
14. [Breaking Open Linux Switching Drivers](#session-19)
15. [TC Classifier Action Subsystem Architecture](#session-21)
16. [MLAG (or Multi-Chassis Link aggregation Group) integration with Linux](#session-22)
17. [MLAG on Linux - Lessons Learned](#session-23)
18. [The case for eliminating inconsistencies between Linux kernel IPv4/IPv6 API](#session-25)
19. [Networking in Containers and Container Clusters](#session-27)
20. [ipvlan](#session-28)
21. [BIRD Internet Routing Daemon](#session-29)
22. [Cooperative networking virtualization for the industrial server applications](#session-31)
23. [Flow API: An abstraction for hardware flow tables](#session-34)
24. [Wireless Workshop](#session-1)
25. [Hardware Offloading BoF](#session-10)
26. [TCP stack instrumentation BoF](#session-17)
27. [802.1ad HW acceleration and MTU handling](#session-18)
28. [Netfilter BoF](#session-26)
29. [Hacker Ice Skating BoFS](#session-36)
30. [IPsec BoF](#session-38)
31. [Tutorial on perf Usage](#session-12)
32. [BPF In-kernel Virtual Machine](#session-15)
33. [Hardware Accelerating Linux Network Functions](#session-24)
34. [nftables tutorial](#session-30)
35. [Introduction to basics of TIPC](#session-33)
36. [Winter Cycling Tutorial](#session-35)

<a id="session-8"></a>
## 1. Keynote

- セッション個別URL: https://netdevconf.info/0.1/sessions/8.html
- Track: keynote
- 日時: Monday, February 16 9:00 - 10:15

### Description

State of the union on Linux kernel networking.

### 添付資料URL

- [/docs/miller-Ottawa2015-Keynote.pdf](https://netdevconf.info/0.1/docs/miller-Ottawa2015-Keynote.pdf)（file）
- [https://www.youtube.com/watch?v=QDxM83YaI0E](https://www.youtube.com/watch?v=QDxM83YaI0E)（link）

<a id="session-37"></a>
## 2. Reception

- セッション個別URL: https://netdevconf.info/0.1/sessions/37.html
- Track: keynote
- 日時:  

### Description

There will be a reception after the last tutorial on Saturday.  It is your chance
	  to renew ties with old friends and acquaintances and strike up conversations with
	  like-minded strangers, before heading out to dinner.  There will be appetizers
	  and a cash bar.

Looking forward to seeing you there!

### 添付資料URL

掲載なし

<a id="session-2"></a>
## 3. Rocker: switchdev prototyping vehicle

- セッション個別URL: https://netdevconf.info/0.1/sessions/2.html
- Track: talk
- 日時: Tuesday, February 17 13:45 - 14:25

### Description

Rocker is an emulated network switch platform created to accelerate
development of an in-kernel network switch driver model.  Rocker has
two parts: an Qemu emulation of a 62-port switch chip with PCI host
interface and a Linux device driver.  The goal is to emulate
capabilities of contemporary network switch ASICs used in
data-center/enterprise so the community can develop the device driver
interfaces in the kernel.  The initial capabilities targeted are L2 bridging
function offload and L3 routing function offload.  In both cases, the
forwarding (data) plane is offloaded to the switch device but the
control and management planes remain in Linux.  Additional
capabilities such as L2-over-L3 tunneling, L2 bonding, ACL support,
and flow-based networking are planned or in-progress.  This paper/talk
will cover overview of Rocker, current status, and future work.

### 添付資料URL

- [/docs/feldman-Rocker.pdf](https://netdevconf.info/0.1/docs/feldman-Rocker.pdf)（file）
- [/papers/Rocker-switchdev-prototyping-vehicle.pdf](https://netdevconf.info/0.1/papers/Rocker-switchdev-prototyping-vehicle.pdf)（file）

<a id="session-3"></a>
## 4. How to not just do a demo with DPDK or Lessons learned making a software dataplane

- セッション個別URL: https://netdevconf.info/0.1/sessions/3.html
- Track: talk
- 日時: Tuesday, February 17 9:00 - 9:40

### Description

The Intel Dataplane Developers Kit (DPDK) provides useful
infrastructure for building network applications. With the toolkit it
is possible to build applications that perform at the full packet rate
of a 10G network but there are many challenges. This paper covers the
lessons learned while using the DPDK to create a routing and switching
dataplane in software.  Most of this involved applying lessons already
learned in how to make Linux go faster to a new environment. I will
also cover some of the things that turned out to be surprisingly much
slower that developers originally expected. The lessons learned go
both ways: some of these DPDK lessons can (and have been) applied to
making the kernel networking stack go faster, and some are areas where
DPDK applications can learn from the Linux kernel. Will also highlight
some of the tradeoffs made in dedicated networking which may not be
applicable to general purpose kernel.

### 添付資料URL

掲載なし

<a id="session-4"></a>
## 5. Picking low hanging fruit from the FIB tree

- セッション個別URL: https://netdevconf.info/0.1/sessions/4.html
- Track: talk
- 日時: Tuesday, February 17 11:20 - 12:00

### Description

As network rates continue to increase the amount of time to
process packets decreases.  This puts pressure on a number of areas in
the kernel, but one areas where this particularly stands out is the IPv4
forwarding information base lookup.  This proposal will go over a
number of changes recently made to the fib_trie processing code and data
structures to improve both the performance and reliability of processing
the IPv4 addresses.  In addition it will propose some possible approaches
under consideration in order to improve performance further enabling
processing at higher packet rates.

### 添付資料URL

- [/docs/duyck-fib-trie.pdf](https://netdevconf.info/0.1/docs/duyck-fib-trie.pdf)（file）
- [/papers/Picking-the-low-hanging-fruit-from-the-FIB-tree.pdf](https://netdevconf.info/0.1/papers/Picking-the-low-hanging-fruit-from-the-FIB-tree.pdf)（file）
- [.odp file](https://netdevconf.info/0.1/docs/duyck-fib-trie.odp)（file）

<a id="session-5"></a>
## 6. Rtnetlink dump filtering

- セッション個別URL: https://netdevconf.info/0.1/sessions/5.html
- Track: talk
- 日時: Monday, February 16 16:30 - 17:45

### Description

Rtnetlink dump handlers
supported by the kernel are a useful way to
query state of the kernel network objects. Most rtnetlink dump handlers
return data for all network objects in the corresponding networking
subsystem today, e.g. RTM_GETLINK returns data for all network
interfaces in the system. With no rtnetlink dump filtering support in
the kernel, the burden is on userspace to filter such dumps. This does
not scale on systems with large number of network interfaces or large
routing databases. Such systems are not uncommon given that linux is
being deployed on network switches, routers, hypervisors and other
devices in the data center today. Filtering in userspace is not
scalable. This paper looks at scalability problems with rtnetlink dumps
and discusses possible solutions to filter such dumps in the kernel. We
will look at a consistent way to filter such dumps across all network
object types using existing infrastructure provided by the kernel.

### 添付資料URL

- [/docs/prabhu-rtnetlink_dump_filtering_in_kernel_talk_slides.pdf](https://netdevconf.info/0.1/docs/prabhu-rtnetlink_dump_filtering_in_kernel_talk_slides.pdf)（file）
- [/papers/Rtnetlink-dump-filtering-in-the-kernel.pdf](https://netdevconf.info/0.1/papers/Rtnetlink-dump-filtering-in-the-kernel.pdf)（file）

<a id="session-6"></a>
## 7. hardware switches - the opensource approach

- セッション個別URL: https://netdevconf.info/0.1/sessions/6.html
- Track: talk
- 日時: Tuesday, February 17 9:50 - 10:30

### Description

Imagine buying off the shelf switch hardware, install Fedora (or any other
distribution) and configure it using standard linux tools. This is not
possible at the moment primarily because of lack of unified and consistent
platforms and driver interfaces. We are working to change that.

The current state of support for switch chips in Linux is not good. Each
vendor provides userspace binary sdk blob that only works with their
chips. Each of this blobs has proprietary APIs. To get switch chips
properly supported there's need to introduce a new infrastructure directly
into Linux kernel and to work with vendors to adopt it.

This talk presents the current effort to unify and uphold the Linux
networking model across the spectrum of devices which is necessary to make
Linux the cornerstone of industrial grade networking. The scope of this
talk covers state of art with current implementation of standard commodity
switches such as top of rack switches, small home gateway device as well
as SR-IOV NIC embedded switches.

A device model and driver infrastructure will be presented for
accelerating the Linux bridge, Linux router, accelerated host virtual
switches and flow level offloads when supported by the hardware
underneath.

### 添付資料URL

- [/docs/pirko-switchdev-slides.pdf](https://netdevconf.info/0.1/docs/pirko-switchdev-slides.pdf)（file）
- [/papers/Hardware-switches-the-open-source-approach.pdf](https://netdevconf.info/0.1/papers/Hardware-switches-the-open-source-approach.pdf)（file）

<a id="session-7"></a>
## 8. Library operating system with mainline Linux kernel

- セッション個別URL: https://netdevconf.info/0.1/sessions/7.html
- Track: talk
- 日時: Monday, February 16 13:45 - 14:25

### Description

Library operating system (LibOS) is a userspace version of Linux
kernel to provide an operating system personalization as well as
yet-another virtualization primitive. The idea is adding a hardware
independent architecture (i.e., arch/lib) into Linux kernel tree and
reusing the rest of networking code in order to avoid 'reinventing a
wheel'. Unlike conventional Linux kernel/userspace model, system calls
are redirected to the library in the same process or the other
userspace processes, but the framework tries to be transparent so that
all of the existing userspace applications like nginx and iproute2 are
able to be used as-is.  The LibOS framework provides several
interesting use cases such as 1) a fast-path for the new protocol
deployment (no need to replace or insert new kernel code), 2) a
feature-rich network stack for a high-speed packet I/O mechanism like
Intel DPDK, 3) a continuous integration for testing networking code
implemented in Linux kernel tree. Right now, most of in-kernel
protocols like TCP, SCTP, DCCP, and MPTCP are tested to work on top of the
LibOS. Newly implemented protocol may also work on depending on the
POSIX API coverage and kernel glue code.

This paper covers the introduction of the LibOS framework and two sub
projects, Network stack in userspace (NUSE) and Direct Code Execution
(DCE), with the internal design of the indirections, and presents the
ongoing work on the multi-process support to share a single userspace
network stack (e.g., share a userspace routing table between two
processes) via inter-process communication implemented by rumpkernel
IPC/RPC framework. Then finalizes with the future work including the
performance improvement.

### 添付資料URL

- [/docs/netdev01-tazaki-libos.pdf](https://netdevconf.info/0.1/docs/netdev01-tazaki-libos.pdf)（file）
- [/papers/Library-Operating-System-with-Mainline-Linux-Network-Stack.pdf](https://netdevconf.info/0.1/papers/Library-Operating-System-with-Mainline-Linux-Network-Stack.pdf)（file）

<a id="session-9"></a>
## 9. Distributing TC Classifier Action

- セッション個別URL: https://netdevconf.info/0.1/sessions/9.html
- Track: talk
- 日時: Tuesday, February 17 10:35 - 11:15

### Description

This proposal will discuss distributing the Linux Traffic Control (tc)
filter-action subsystem packet processing across disparate nodes. The
nodes could be a mix and match of containers, VMs, bare metal machines
or ASICs.

A new tc Inter-Forwarding Engine (IFE) action is introduced based on ForCES WG  Inter-FE LFB work
(https://datatracker.ietf.org/doc/draft-ietf-forces-interfelfb/).
The paper will go into both the implementation as well as the usage of
the IFE tc action. Details on how to add new extensions to the IFE
action will also be discussed.

### 添付資料URL

- [/docs/hadi-salim-dj-DTCCA-slides.pdf](https://netdevconf.info/0.1/docs/hadi-salim-dj-DTCCA-slides.pdf)（file）
- [/papers/Distributing-Linux-Traffic-Control-Classifier-Action-Subsystem.pdf](https://netdevconf.info/0.1/papers/Distributing-Linux-Traffic-Control-Classifier-Action-Subsystem.pdf)（file）
- [https://www.youtube.com/watch?v=BSlUOBxYjPY](https://www.youtube.com/watch?v=BSlUOBxYjPY)（link）

<a id="session-11"></a>
## 10. UDP encapsulation, FOU, GUE, & RCO

- セッション個別URL: https://netdevconf.info/0.1/sessions/11.html
- Track: talk
- 日時: Monday, February 16 14:45 - 15:25

### Description

A discussion about recent efforts to make UDP encapsulation performant
and well supported in the Linux networking stack, and also an
introduction of foo-over UDP (FOU) and Generic UDP Encapsulation(GUE).

UDP based encapsulation is likely to become ubiquitous in data
centers, not just for virtualization use case but also for
non-virtualization. The reasons for this are simple: it's a low
overhead protocol and allows us to leverage several UDP specific
optimizations commonly supported by networking hardware (RSS and ECMP
for instance). In part one of this this talk, we'll review the
additions to the Linux kernel to make UDP encapsulation efficient and
a first class citizen of the stack.

For part two of this discussion, we'll look at foo-over-UDP (FOU). FOU
is an encapsulation method to where IP protocol packets are directly
encapsulated in a UDP payload. The first support of this is IPIP, sit,
GRE tunnels which can be configured to transmit using FOU
encapsulation. The GRE part implements the GRE/UDP draft.

For part three of this discussion, we'll look at Generic UDP
Encapsulation (GUE) and Remote Checksum Offload. GUE is a lightweight,
extensible, and performant encapsulation mechanism of IP protocol
packets (indicated in a header field). The GUE header allows for
optional data fields which which we intend to use for virtualization,
security, and congestion control.

### 添付資料URL

- [/docs/herbert-UDP-Encapsulation-Linux.pdf](https://netdevconf.info/0.1/docs/herbert-UDP-Encapsulation-Linux.pdf)（file）
- [/papers/UDP-Encapsulation-in-Linux.pdf](https://netdevconf.info/0.1/papers/UDP-Encapsulation-in-Linux.pdf)（file）
- [https://www.youtube.com/watch?v=hKTD9W2C5s8](https://www.youtube.com/watch?v=hKTD9W2C5s8)（link）

<a id="session-13"></a>
## 11. Offloading to yet another software switch

- セッション個別URL: https://netdevconf.info/0.1/sessions/13.html
- Track: talk
- 日時: Monday, February 16 16:30 - 17:10

### Description

Recent software switches, such as VALE and DPDK-based Open vSwitch
have significant advantages over traditional Linux bridge in terms of
throughput, scalability and/or flexibility.  For example, VALE, a
software switch based on netmap, forwards 64 byte frames at ~10 Mpps
with L2 learning logic, which is approximately 10 times faster than
Linux bridge; and it scales to hundreds of switch ports using a novel
packet switching algorithm, which is important when we use a software
switch as a backend to interconnect VMs and NICs.

In this session we present experience with offloading packet switching
to VALE under familiar Linux bridge control.  We exploit recent
extensions in Linux bridge to offload packet switching to switch ASICs
like Rocker while keeping control in Linux.  Offloading to software
switches improves packet switching without switch ASICs. It also
improves packet switching for software ports where VMs or applications
attach.

### 添付資料URL

- [/papers/Offloading-to-yet-another-software-switch.pdf](https://netdevconf.info/0.1/papers/Offloading-to-yet-another-software-switch.pdf)（file）

<a id="session-14"></a>
## 12. Implementing Open vSwitch datapath using TC

- セッション個別URL: https://netdevconf.info/0.1/sessions/14.html
- Track: talk
- 日時: Tuesday, February 17 13:00 - 13:40

### Description

This is a proposal to illustrate how to implement the Open vSwitch datapath
using the Linux traffic control (TC) subsystem. The TC subsystem existed long
before OVS and offers more flexibility. As an example it allows creating
multiple types of classifiers which can be added as plugins. It offers
capability of working on the ingress or egress path of any Linux netdev
which means the datapath does not require the central focus to be a switch.

This talk will go into covering the missing classifiers and actions
that are implemented in OVS datapath and needed by TC to achieve this goal.
The talk will describe recent updates being done and also the planned ones
to add code-reusability to some of the ovs datapath actions and how they are
used by tc to achieve the stated goal.

### 添付資料URL

- [/docs/pirko-ovstc-slides.pdf](https://netdevconf.info/0.1/docs/pirko-ovstc-slides.pdf)（file）
- [/papers/Implementing-Open-vSwitch-datapath-using-TC.pdf](https://netdevconf.info/0.1/papers/Implementing-Open-vSwitch-datapath-using-TC.pdf)（file）

<a id="session-16"></a>
## 13. MPTCP Upstreaming

- セッション個別URL: https://netdevconf.info/0.1/sessions/16.html
- Track: talk
- 日時: Monday, February 16 11:20 - 12:00

### Description

MultiPath TCP is a transport layer protocol which takes advantage of
today's Internet architecture where multiple paths exist between
endpoints. The application uses a single TCP-like socket with multiple
subflows being started in kernel-space for the same connection. These
subflows are implemented as normal TCP connections and are completely
transparent to the application. MPTCP is implemented in the Linux
Kernel in an off-tree open-source repository maintained by the
academic community.

Our aim is to bring the off-tree Linux Kernel MPTCP implementation in
the official tree in order to gain additional contributors and
accelerate innovation. The problem is that the code from the off-tree
implementation heavily modifies the TCP stack such that an upstream
submission can't be accepted without cleaning the TCP stack and moving
the MPTCP related operations to a separate layer. Since MPTCP subflows
are based on regular TCP connections, the new architectural approach
is to call TCP code from the new layer instead of modifying it. Apart
from removing the mix between the TCP and MPTCP code and making it a
successful candidate for the upstream process, this new layer brings
other advantages like allocating the MPTCP data structures at the
socket creation and avoiding the overhead of switching from TCP to
MPTCP at connection time. In order to implement the MPTCP separate
layer, a series of problems must be solved: passing data to/from the
subflow level, locking scenarios, performance penalties, switching
between TCP and MPTCP, separation of data structures and allocating
them at the right moment.

### 添付資料URL

- [/docs/octavian-mptcp-netdev-final.pdf](https://netdevconf.info/0.1/docs/octavian-mptcp-netdev-final.pdf)（file）
- [/papers/Shaping-the-Linux-kernel-MPTCP-implementation-towards-upstream.pdf](https://netdevconf.info/0.1/papers/Shaping-the-Linux-kernel-MPTCP-implementation-towards-upstream.pdf)（file）
- [https://www.youtube.com/watch?v=wftz2cU5SZs](https://www.youtube.com/watch?v=wftz2cU5SZs)（link）
- [.odp file](https://netdevconf.info/0.1/docs/octavian-mptcp-netdev-final.odp)（file）

<a id="session-19"></a>
## 14. Breaking Open Linux Switching Drivers

- セッション個別URL: https://netdevconf.info/0.1/sessions/19.html
- Track: talk
- 日時: Monday, February 16 10:30 - 11:10

### Description

Linux has been the operating system of choice for hardware switches and
routers for the last decade.  Most users did not know this as direct
access to the operating system and hardware were hidden behind a shiny
UI.  Community projects like (OpenWRT/DD-WRT/etc) provided users the
first chance to use standard FOSS networking tools to configure and
manage devices and products like Cumulus Linux and projects like Open
Route Cache have taken this a step further to support enterprise and
data-center grade top of rack switches using open-source tools and
infrastructure -- though today they still rely on out-of-tree kernel
drivers and a vendor-licensed SDK.

The goal of this talk is to present a viable alternative for how current
vendor switching and routing hardware can be made significantly more
usable by kernel and application developers by moving away from the
current model.  Today, most Linux users of datacenter hardware currently
interact with network devices that are presented as tun/tap devices and
use of tree kernel drivers to access hardware. This combination does not
allow access to hardware information or configuration (how are the
ethtool_ops for tun/tap working?) and it currently provides no ability
to leverage the recently merged dataplane offload (switching and
routing) infrastructure has that has recently made it into the upstream
kernel.  Though the short-term solution requires the unfortunate
reliance on a vendor-licensed SDK, releasing and adding this driver to
the upstream kernel is the first step towards a goal of simplified
data-plane programming.  This talk includes a description of the
architecture of this driver for as it compares to some of the vendor
options available today, the relationship and communication between this
driver and the current vendor-licensed SDK, and plans for the future
growth of this into a stand-alone driver with minimal (if any) SDK
reliance.

### 添付資料URL

- [/docs/gospodarek-Evolution-Not-Revolution.pdf](https://netdevconf.info/0.1/docs/gospodarek-Evolution-Not-Revolution.pdf)（file）
- [/papers/Breaking-Open-Linux-Switching-Drivers.pdf](https://netdevconf.info/0.1/papers/Breaking-Open-Linux-Switching-Drivers.pdf)（file）

<a id="session-21"></a>
## 15. TC Classifier Action Subsystem Architecture

- セッション個別URL: https://netdevconf.info/0.1/sessions/21.html
- Track: talk
- 日時: Saturday, February 14 14:05 - 16:00

### Description

This talk is about the Linux Traffic Control (tc) filter-action subsystem.
Although it has been around for about a decade, this subsystem was never
formally documented. Given that two other netdev01 talks refer to this subsystem, we feel obligated to discuss the history, architecture and
usage of tc filter-actions.

We will describe the packet-processing-graph architecture and the underlying extensibility offered; we will further discuss the formal
"graph language" that  makes it an awesome packet processing
architecture (in our view is still technically ahead of heavily
marketted approaches like P4 or  OF).

### 添付資料URL

- [/docs/hadi-salim-TC-act-arch-slides.pdf](https://netdevconf.info/0.1/docs/hadi-salim-TC-act-arch-slides.pdf)（file）
- [/papers/Linux-Traffic-Control-Classifier-Action-Subsystem-Architecture.pdf](https://netdevconf.info/0.1/papers/Linux-Traffic-Control-Classifier-Action-Subsystem-Architecture.pdf)（file）
- [https://www.youtube.com/watch?v=cyeJYjZHv5M](https://www.youtube.com/watch?v=cyeJYjZHv5M)（link）

<a id="session-22"></a>
## 16. MLAG (or Multi-Chassis Link aggregation Group) integration with Linux

- セッション個別URL: https://netdevconf.info/0.1/sessions/22.html
- Track: talk
- 日時: Monday, February 16 14:45 - 15:25

### Description

MLAG extends the implementation of LAG beyond a single device to
provide another level of redundancy that extends from link-level
to the node level.  MLAG is widely used in a modern data center
in order to provide ToR-level active-active redundancy.

-------------                         -------------
    | switch A  | --------- IPL --------- | switch B  |
    -------------                         -------------
          \ (              MLAG              ) /
           \                                  /
            \                                /
             \                              /
              \                            /
               \                          /
                \                        /
                 \ (       Bond       ) /
                  \                    /
                 ------------------------
                 |    Host \ Switch     |
                 ------------------------

This talk presents the changes needed from the Linux kernel in order
to support MLAG both in the control plane.  E.g. providing the system
ID to the bond driver, supporting  Multi-Chassis  STP, and in the data
plan  E.g. IPL link requirements.  The talk will be based on open
source MLAG implementation and the enhancements that should be done to
revert the code to native Linux solution

https://github.com/open-ethernet/MLAG

### 添付資料URL

掲載なし

<a id="session-23"></a>
## 17. MLAG on Linux - Lessons Learned

- セッション個別URL: https://netdevconf.info/0.1/sessions/23.html
- Track: talk
- 日時: Monday, February 16 15:30 - 16:10

### Description

MLAG is a networking technology which allows for increased redundancy
and bandwidth in layer 2 networks. This talk will begin with an
overview of MLAG, the problems it solves, and the common use
cases. This leads to the important design considerations and caveats
of a properly functioning MLAG implementation, especially with respect
to MAC address learning and packet forwarding. This requires
additional capabilities to be added to the Linux kernel bridging and
bonding drivers for proper MLAG operation. Each of these enhancements
will be enumerated and described in detail. Then, an example of a
recent implementation of MLAG on a Linux system will be used to
describe the types of data which must be synchronized between bridges
and the interactions with other system components, such as spanning
tree, iproute2/Netlink, and ifupdown2.

### 添付資料URL

- [/docs/MLAG%20on%20Linux%20-%20Lessons%20Learned.pdf](https://netdevconf.info/0.1/docs/MLAG%20on%20Linux%20-%20Lessons%20Learned.pdf)（file）
- [/papers/MLAG-on-Linux.pdf](https://netdevconf.info/0.1/papers/MLAG-on-Linux.pdf)（file）

<a id="session-25"></a>
## 18. The case for eliminating inconsistencies between Linux kernel IPv4/IPv6 API

- セッション個別URL: https://netdevconf.info/0.1/sessions/25.html
- Track: talk
- 日時: Monday, February 16 16:30 - 17:45

### Description

The case for eliminating inconsistencies between Linux kernel
IPv4/IPv6 API:

The Linux kernel provides a rich Netlink based API to configure,
deploy and manage IPv4 and IPv6.

However, the APIs for IPV4 and IPv6 are not consistent in some cases.

Some of these inconsistencies include:

IPV6 addresses are removed on link down. IPV4 addresses
    stay


    IPV4 multipath route handling API is different from IPV6
    Netlink route replace/append handling is different between
    IPV4 and IPV6

Over the years user-space components have worked around these
inconsistencies.

In this paper we survey the inconsistencies in the kernel API between
IPV4 and IPV6 and present the solutions we adopted to workaround these
inconsistencies in user space.  We show how these inconsistencies
cascade into multiple components (routing daemons, user-space netlink
caches and hardware offload drivers) in a system. We show that the
resulting implementation is complex enough to justify an effort to
eliminate these inconsistencies in the future by unifying the
IPv4/IPv6 kernel API

### 添付資料URL

- [/docs/prabhu-linux_ipv4_ipv6_inconsistencies_talk_slides.pdf](https://netdevconf.info/0.1/docs/prabhu-linux_ipv4_ipv6_inconsistencies_talk_slides.pdf)（file）
- [/papers/The-case-for-eliminating-inconsistencies-between-IPv4-and-IPv6-kernel-User-API.pdf](https://netdevconf.info/0.1/papers/The-case-for-eliminating-inconsistencies-between-IPv4-and-IPv6-kernel-User-API.pdf)（file）

<a id="session-27"></a>
## 19. Networking in Containers and Container Clusters

- セッション個別URL: https://netdevconf.info/0.1/sessions/27.html
- Track: talk
- 日時: Monday, February 16 15:30 - 16:10

### Description

Containers have recently risen in popularity tremendously in the Linux
world. Their promise of fast, light, isolated, and secure runtime and
deployment appeals to many user space developers. One of the most
important aspects of containers today is networking. Container
networking configurations are almost as varied as there are container
users, but there is a common emphasis on flexibility, performance, and
security. Using Docker's libcontainer we will present and showcase
many of the popular networking setups, their uses, and their problems
today.

A second aspect we will explore are containers in clusters. Systems
like Kubernetes manage containers across clusters of
machines. Container-based applications in these clusters communicate
almost exclusively through the network; discovery, linking, and
synchronization happen all in the network. We will present and
showcase the history, the setups, and the problems of networking in
Kubernetes clusters. We will also cover common patterns of handling
networking for multi-container applications in clusters.

### 添付資料URL

- [/docs/Networking%20in%20Containers%20and%20Container%20Clusters.pdf](https://netdevconf.info/0.1/docs/Networking%20in%20Containers%20and%20Container%20Clusters.pdf)（file）
- [/papers/Networking-in-Containers-and-Container-Clusters.pdf](https://netdevconf.info/0.1/papers/Networking-in-Containers-and-Container-Clusters.pdf)（file）
- [https://www.youtube.com/watch?v=Mpx-azJSmOE](https://www.youtube.com/watch?v=Mpx-azJSmOE)（link）

<a id="session-28"></a>
## 20. ipvlan

- セッション個別URL: https://netdevconf.info/0.1/sessions/28.html
- Track: talk
- 日時: Monday, February 16 10:30 - 11:10

### Description

The commonly used method to connect namespaces to the outside world
without going through the forwarding setup on the host used to be the
macvlan. This setup is simple and efficient except when the next-hop
devices apply policies barring host to act like a forwarding device.
This is especially problematic where the connected next-hop e.g.
switch is expecting frames from a specific mac from a specific port.
In a situation like this the macvlan setup does not work. The host
will either have to fall back non-efficient forwarding methods or
something else. ipvlan was designed to address this specific need
along with few other mentioned in next few sections. This paper
attempts to describe these use cases and highlights differences with
macvlan devices and briefly talk about future enhancements planned.

### 添付資料URL

- [/docs/bandewar-IPvlan-presentation-Netdev01.pdf](https://netdevconf.info/0.1/docs/bandewar-IPvlan-presentation-Netdev01.pdf)（file）
- [/papers/IPVLAN-The-beginning.pdf](https://netdevconf.info/0.1/papers/IPVLAN-The-beginning.pdf)（file）

<a id="session-29"></a>
## 21. BIRD Internet Routing Daemon

- セッション個別URL: https://netdevconf.info/0.1/sessions/29.html
- Track: talk
- 日時: Tuesday, February 17 9:00 - 9:40

### Description

The BIRD is a free, open source internet routing daemon running on Linux
  and *BSD with support for commonly used routing protocols (OSPF, BGP,
  RIP), easy to use configuration interface and powerful route filtering
  language. It is deployed as a route server in many internet exchange
  points around the world.

This talk presents the overview of BIRD project, its basic concepts and
  design decisions and common applications and use cases. We will also
  discuss pitfalls in userspace/kernel interfaces encountered during BIRD
  development.

### 添付資料URL

- [/docs/ondrej-zajicek-slides-netdev01.pdf](https://netdevconf.info/0.1/docs/ondrej-zajicek-slides-netdev01.pdf)（file）
- [/papers/BIRD-Internet-Routing-Daemon.pdf](https://netdevconf.info/0.1/papers/BIRD-Internet-Routing-Daemon.pdf)（file）

<a id="session-31"></a>
## 22. Cooperative networking virtualization for the industrial server applications

- セッション個別URL: https://netdevconf.info/0.1/sessions/31.html
- Track: talk
- 日時: Monday, February 16 13:45 - 14:25

### Description

The industrial network server applications the authors encounter in
their practice differ from the usual small separate process ones. In
most cases, separation of traffic coming from/to the single-process
highly optimized application becomes a strong requirement. The network
needs be seen differently depending of which virtual entity inside the
application accesses it. Traffic reflection (auto routing for the
inbound connections) is also highly desired. Usually, confining the
application to a container is not possible but some level of
cooperation could be ensured instead.

A few prototypes were built, using Linux policy-based routing and
Linux kernel namespaces, combined with use of socket options and
netfilter. Tests show good performance of these solutions, however,
open questions still remain. This paper/talk explains the use case,
goes over the techniques applied and highlights the networking
subsystem limitations encountered.

### 添付資料URL

- [/papers/Cooperative-network-virtualization-in-the-industrial-server-applications-on-Linux.pdf](https://netdevconf.info/0.1/papers/Cooperative-network-virtualization-in-the-industrial-server-applications-on-Linux.pdf)（file）

<a id="session-34"></a>
## 23. Flow API: An abstraction for hardware flow tables

- セッション個別URL: https://netdevconf.info/0.1/sessions/34.html
- Track: talk
- 日時: Monday, February 16 13:00 - 13:40

### Description

There is ongoing work to create a hardware offload API for Linux with
the goal of being generic enough to support a wide range of networking
hardware and use cases. In this paper we outline some of the insights
that have guided the development of this API. As well as illustrate
how the Flow API can be used by developers to write programs that can
work across a wide array of devices without having to resort to
writing device specific code. To demonstrate this we have implemented
the API using the rocker switch an emulated switch device and provided
sample code that readers can download.

### 添付資料URL

- [/docs/fastabend-netdev0.1-slides_v3.pdf](https://netdevconf.info/0.1/docs/fastabend-netdev0.1-slides_v3.pdf)（file）
- [/papers/A-Flow-API-for-Linux-Hardware-Devices.pdf](https://netdevconf.info/0.1/papers/A-Flow-API-for-Linux-Hardware-Devices.pdf)（file）

<a id="session-1"></a>
## 24. Wireless Workshop

- セッション個別URL: https://netdevconf.info/0.1/sessions/1.html
- Track: workshop
- 日時: Saturday, February 14 9:00 - 18:00

### Description

The wireless workshop will bring together the Linux wireless stack and
driver maintainers to discuss the continued development of the stack
regarding Linux implementation of existing standards, new requirements
coming from 802.11 specification development, Android integration, new
products and similar.

Please see the
agenda
to get an idea of what will be talked about.

### 添付資料URL

掲載なし

<a id="session-10"></a>
## 25. Hardware Offloading BoF

- セッション個別URL: https://netdevconf.info/0.1/sessions/10.html
- Track: BoF
- 日時: Sunday, February 15 13:00 - 14:00

### Description

Networking is all about interoperation and best way to achieve that is to
use an open implementation with consistent interfaces as provided by
the Linux kernel.

Currently packet processing offloading in Linux networking is being
extended to support different capabilities which may have conflicting
interests. A sample space is by:

NICs that support acceleration of certain packet paths
           
              May include basic L2 processing


              May include flow processing




        Switches that support basic managed L2 support


        ASICs that support L2/3 and ACLs


        Switches that can pretend to be a multi-ported nic


        NICs that are multiported
            
                And support VEPA mode


                And support EVB mode
                

Can learn, manage timers or need hypervisor/OS support
to manage them


                PCIe level virtualization




        NPUs and speacial purpose packet processors that
            
                 mangling operations in


                 Load balancing at Application/L3/L2 layers


                 IPSEC offload


                 More complex flow graph offload

To provide uniformity in interfaces, the control interfaces via
standard kernel APIs are used; and consensus needs to be reached
on the different offload interfaces.

This BOF intends to bring together all the stakeholders and gather
guidelines that need to be agreed upon so as to not stifle innovation, but
also ensure that the concept of a Linux networking interfaces do not get
diluted in the process.

### 添付資料URL

- [/docs/mukherjee-BOF-agenda.pdf](https://netdevconf.info/0.1/docs/mukherjee-BOF-agenda.pdf)（file）
- [/docs/sane-ocp-sai-status.pdf](https://netdevconf.info/0.1/docs/sane-ocp-sai-status.pdf)（file）
- [/docs/mihai-budiu-netdev01-p4.pdf](https://netdevconf.info/0.1/docs/mihai-budiu-netdev01-p4.pdf)（file）
- [/docs/mihai-budiu-netdev01-p4-demo.pdf](https://netdevconf.info/0.1/docs/mihai-budiu-netdev01-p4-demo.pdf)（file）
- [/docs/IPQ806x-Hardware-acceleration_v3.pdf](https://netdevconf.info/0.1/docs/IPQ806x-Hardware-acceleration_v3.pdf)（file）
- [.pptx file](https://netdevconf.info/0.1/docs/sane-ocp-sai-status.pptx)（file）
- [Shrijeet Mukherjee, Neil Hormal | mukherjee-horman-hw-offload-BOF-agenda.pptx](https://netdevconf.info/0.1/docs/mukherjee-horman-hw-offload-BOF-agenda.pptx)（file）

<a id="session-17"></a>
## 26. TCP stack instrumentation BoF

- セッション個別URL: https://netdevconf.info/0.1/sessions/17.html
- Track: BoF
- 日時: Sunday, February 15 11:00 - 12:00

### Description

The TCP stack, by design, hides much of the information about it's functioning and performance from userland. As such, unearthing the root cause of performance problems can be both frustrating and time consuming. While some instrumentation is available through the current TCP_INFO struct a more extensive set of instruments may provide better data for TCP diagnostics and performance monitoring.

This BoF intends to bring together interested parties and stakeholders in order to discuss the need and requirements for extending the current set of TCP instruments. The discussion will include potential instruments, use case scenarios, access methods, metric validation, and other issues.

### 添付資料URL

- [/docs/rapier-netdev01_stack_instrumentation_bof.pdf](https://netdevconf.info/0.1/docs/rapier-netdev01_stack_instrumentation_bof.pdf)（file）
- [https://www.youtube.com/watch?v=6VuniIff9z0](https://www.youtube.com/watch?v=6VuniIff9z0)（link）
- [.pptx file](https://netdevconf.info/0.1/docs/rapier-netdev01_stack_instrumentation_bof.pptx)（file）

<a id="session-18"></a>
## 27. 802.1ad HW acceleration and MTU handling

- セッション個別URL: https://netdevconf.info/0.1/sessions/18.html
- Track: BoF
- 日時: Saturday, February 14 11:00 - 11:55

### Description

Since 802.1ad was introduced back in 3.10, stacked vlan has been getting
common on Linux. It can be used not only inside a data center network,
but also in integrating Linux into Metro Ethernet, which often consists
of 802.1ad switches.

However, there still remain a couple of challenges around stacked vlan.

This discussion focuses how to handle these issues.

### 添付資料URL

- [/docs/netdev01_bof_8021ad_makita_150212.pdf](https://netdevconf.info/0.1/docs/netdev01_bof_8021ad_makita_150212.pdf)（file）

<a id="session-26"></a>
## 28. Netfilter BoF

- セッション個別URL: https://netdevconf.info/0.1/sessions/26.html
- Track: BoF
- 日時: Sunday, February 15 9:00 - 10:55

### Description

This BoF intends to bring together interested parties and stakeholders
to discuss the current state of iptables, ipset, and nftables when
used in a large-scale environment. The discussion will focus around
the use and issues with the current netfilter tools in such an
environment and what we can do to improve them.

Some examples of those topics are:

Supported Interfaces
   
     
       The need for solid, supported development libraries for iptables,
       ipset, nftables allowing applications to fully take advantage of their
       features.
     


   
 


 Improvements to existing components
   
     
       Handling very large sets (1 million to 25 million entries).  Discuss alternatives to ipset (such as nft set implementation).
     


     
       Limitations in existing iptables functionality.
     


   
 


 
   nftables considerations
   
     Performance


     Backwards compatibility


     New features

### 添付資料URL

- [/docs/hunt-netfilter-bof.pdf](https://netdevconf.info/0.1/docs/hunt-netfilter-bof.pdf)（file）
- [https://www.youtube.com/watch?v=e-U9yCE08Cg](https://www.youtube.com/watch?v=e-U9yCE08Cg)（link）

<a id="session-36"></a>
## 29. Hacker Ice Skating BoFS

- セッション個別URL: https://netdevconf.info/0.1/sessions/36.html
- Track: BoF
- 日時: Monday, February 16 18:30 - 20:00

### Description

Does anyone remember the Hacker Bike Rides in Canberra, OLS or LCA?

http://tricolour.net/hackerbikeride.html

This is the same idea, except ice skating on the world's *largest*
skating rink.  It used to be the *longest* at 7.8km, but then Winnipeg
had to run a plough up the Red River just slightly longer (9km) and
claim the *longest* record.  Ottawa still clears a *much* wider path,
making it a larger area by a factor of four!

Those who have ice skates are invited to bring them.  For the rest,
there are skate rentals just across the street from the conference
venue, $17 for a couple of hours.  This is a family-friendly event, and
there are likely to be small children that will be faster than many of
the adults!  Even if you are a novice, you are encouraged to try out
this quintessential canadian past-time, including beavertails, maple
taffy and hot chocolate afterwards.  For those who are really novice or
not as strong, we'll be also renting some ice-going sleighs so we can
all have fun together and not leave anyone behind.

Where: Meet on the canal ice surface just west of Colonel By Drive and
Daly Avenue.  We will then change into our skates in the shelter
provided, skate for an hour or two and return for refreshments.

What to bring: Skates or money for skate rental.  Water or other
beverage, maybe hot, in a thermos.  A snack or money for confections.
Warm clothes: Pay special attention to heads, ears, necks, hands.

There will likely be a strong group that will be able to do the full
14km length of the canal in an hour.  There certainly will be a more
leisurely group that are there simply to try out this culturally
important activity and socialize with other netheads and their families.

You don't need to be registered with the conference to be welcome to
join us.  Please join us!  Local guides would be welcome.

Thanks!  See you on the canal ice!

### 添付資料URL

掲載なし

<a id="session-38"></a>
## 30. IPsec BoF

- セッション個別URL: https://netdevconf.info/0.1/sessions/38.html
- Track: BoF
- 日時: Tuesday, February 17 15:25 - 16:25

### Description

Discuss latest news/directions on IPsec.

### 添付資料URL

掲載なし

<a id="session-12"></a>
## 31. Tutorial on perf Usage

- セッション個別URL: https://netdevconf.info/0.1/sessions/12.html
- Track: tutorial
- 日時: Sunday, February 15 14:05 - 16:05

### Description

This tutorial will try to demonstrate the power of performance profiling
features within the linux kernel. We will use the networking subsystem
as a use case for demonstrating the performance profiling features.

The focus will be on the perf framework which has emerged as
the de facto standard for performance analysis on Linux. The tutorial
will cover well documented as well as hidden gems of the perf
infrastructure.

We will provide a short overview of perf components and how they
work by design. Afterwards the well defined tracepoints in the
kernel will be explored, specifically the few available in the
networking subsystem. We will proceed to learn how to add custom probes.
Often finding a good spot in the kernel to add a probe could be
difficult; therefore we will try to demonstrate on how one can try to
find
a good location for new probes.

Modern CPUs are constantly adding more features to their performance
monitoring counters, as an example:
PMC units were imprecise, so vendors of x86 compatible CPUs improved
that situation by adding features to improve precision, called PEBS by
Intel and IBS by AMD and what additional data they provide.

In the outlook we explore which additional raw counters the CPUs provide
and how it is possible to sample events from the memory controller and
northbridge and how data is moved around CPU caches (by tracing cache
coherency protocols). We will discuss how to write perf scripting to
achieve this goal. Participants should be able to understand the PMC
documentation provided by the processor vendors and apply them to perf.

We will conclude with infrastructure issues around perf, mainly how to
deal with debugging information in heterogeneous environments mainly
using different and ever changing kernel versions, mismatching debug
information and how to deal with that. I hope for insights from the
audience because this problem isn't yet solved by us.

The tutorial is intended to be interactive and we hope to gain insights
from people attending the tutorial as it applies to their environments.

Bring a laptop or remote access to fancier equipment and lets have
fun.

### 添付資料URL

- [/docs/sowa-perf-analytics.pdf](https://netdevconf.info/0.1/docs/sowa-perf-analytics.pdf)（file）
- [https://www.youtube.com/watch?v=W0gtG67GUIw](https://www.youtube.com/watch?v=W0gtG67GUIw)（link）

<a id="session-15"></a>
## 32. BPF In-kernel Virtual Machine

- セッション個別URL: https://netdevconf.info/0.1/sessions/15.html
- Track: tutorial
- 日時: Saturday, February 14 13:00 - 14:00

### Description

BPF or Berkeley Packet Filter mechanism was first introduced in
linux in 1997 in version 2.1.75 inspired by BSDs to handle network
packet filtering. The main user of BPF interface was initially
the packet capture tool tcpdump. Over the years other tools adopted
it. As its need to solve different networking filtering evolved,
a number of extensions were added.

Recently in kernel versions 3.15 - 3.19 it received a major overhaul
which drastically expanded its applicability. This tutorial will cover
how the instruction set looks today and why. Its architecture,
capabilities, interface, just-in-time compilers. The audience will
learn how it's being used in different areas of the kernel like
tracing and networking. What user space tools exist and
how they can be used. How to write and debug programs.
What future plans are for X+BPF, where X is tracing, OVS,
sockets, netdevices, etc. Where it makes sense to use BPF
and where it is not. Live demos included.

### 添付資料URL

- [/docs/starovoitov-bpf_netdev01_2015feb13.pdf](https://netdevconf.info/0.1/docs/starovoitov-bpf_netdev01_2015feb13.pdf)（file）

<a id="session-24"></a>
## 33. Hardware Accelerating Linux Network Functions

- セッション個別URL: https://netdevconf.info/0.1/sessions/24.html
- Track: tutorial
- 日時: Saturday, February 14 9:00 - 10:55

### Description

Linux Kernel Switchdev API being discussed recently in the context of supporting networking
switch ASIC's is the future of offload API's. And existing standard Linux interfaces
can be used to offload Linux network functions to a network switch ASIC.

In this tutorial we will demonstrate this with an existing implementation.

We will show how existing Linux networking tools like iproute2/brctl/ethtool can be used to
offload to a network switch ASIC.

We will start by talking and demonstrating various virtual switching
technologies around the Linux bridge and related technologies
(SRIOV, macvlan etc).

We will then proceed to demonstrate how Linux bridge can be accelerated with
commodity network switch ASICs utilizing the same control tools:

Create bridge device, add network switch ports using `ip link` or `brctl`


    Set vlans on bridge ports using `bridge vlan add`


    Vlans programmed in hardware


    hardware learning, software aging of fdb entries


    Dumping hardware fdb tables using `bridge fdb show`

We plan to cover L3 as well.

Most of the network switch drivers available today rely on a closed vendor SDK API.
We will not be able to cover all hardware details, but we hope to show enough details of
kernel structures offloaded to hardware for easier API development.

We will use an industry standard network switch running Debian based Cumulus Linux distribution.
We are also looking at possibilities of showing this on other devices running Linux.

### 添付資料URL

- [/docs/prabhu-kok-hardware_acceleration_tutorial_netdev01-1.pdf](https://netdevconf.info/0.1/docs/prabhu-kok-hardware_acceleration_tutorial_netdev01-1.pdf)（file）
- [/docs/netdev_tutorial_bridge_makita_150213.pdf](https://netdevconf.info/0.1/docs/netdev_tutorial_bridge_makita_150213.pdf)（file）

<a id="session-30"></a>
## 34. nftables tutorial

- セッション個別URL: https://netdevconf.info/0.1/sessions/30.html
- Track: tutorial
- 日時: Saturday, February 14 16:30 - 18:00

### Description

nftables is the next generation Netfilter packet filtering software
that aims to replace {ip,ip6,eb,arp}tables. This project comes with
the new libnftnl userspace library, the nft userspace configuration
utility and backward compatibility utilities.

nftables reuses the main building blocks of the Netfilter
infrastructure such as the existing hooks, the connection tracking
system, NAT, the userspace queueing infrastructure and the logging
subsystems.

This tutorial will describe its features, architecture, interface,
what it is currently cooking and future plans. This will also include
examples both from the application programming and the user
interfaces.

### 添付資料URL

- [/docs/nftables-rmll-2014.pdf](https://netdevconf.info/0.1/docs/nftables-rmll-2014.pdf)（file）
- [https://www.youtube.com/watch?v=cODU94yVxDs](https://www.youtube.com/watch?v=cODU94yVxDs)（link）

<a id="session-33"></a>
## 35. Introduction to basics of TIPC

- セッション個別URL: https://netdevconf.info/0.1/sessions/33.html
- Track: tutorial
- 日時: Saturday, February 14 11:00 - 11:55

### Description

TIPC (Transparent Inter Process Communication) is a cluster wide IPC
service that is specially designed to be used by distributed services
and applications. The code consists of a kernel module and a user
space configuration tool.

The service provides a location transparent addressing scheme, where
logical service instances, rather than interfaces and ports, are the
targets of sent messages.  Using this scheme, TIPC provides both
connection oriented, reliable datagram and multicast communication
modes.  It also provides a topology subscription server, making it
easy to keep continuous track of changes in both functional and
physical topology within the cluster.

In this this tutorial we will describe the features, the API, and the
architecture of TIPC. We will also show a demo that emphasizes the
strengths and the ease of use of this service.  Finally, we will
describe the improvements we have made both to the protocol and the
code over the last couple of years, and outline our fairly ambitious
plans for the future (L3 support, scalability, traffic management,
performance...)

### 添付資料URL

- [/docs/maloy-TIPC%20Overview_NDEV2015.pdf](https://netdevconf.info/0.1/docs/maloy-TIPC%20Overview_NDEV2015.pdf)（file）

<a id="session-35"></a>
## 36. Winter Cycling Tutorial

- セッション個別URL: https://netdevconf.info/0.1/sessions/35.html
- Track: tutorial
- 日時: Saturday, February 14 18:00 - 20:00

### Description

Bicycle commuting year-round in the second coldest capital on the planet.

After spending a year in Australia, two months of that chasing sheep on
a motorcycle in deep sand, the author had the insight that he had gained
the skill necessary to bicycle commute in snow and has been doing
exactly that for the last two decades.

Winter cycling may seem ridiculous to some, but then so does driving
a car in warm sunny weather to others.

With the right equipment, it is fun, healthy and safe.  In fact, the
presenter has found it to be safer to be a winter cyclist than to be a
winter pedestrian in Ottawa.

This tutorial (which could be during a meal) will focus on clothing,
the vehicle and technique.

### 添付資料URL

掲載なし

# 出典

- https://netdevconf.info/0.1/sessions.html
- https://netdevconf.info/0.1/schedule.html
- https://netdevconf.info/0.1/downloads.html
- https://netdevconf.info/0.1/docs/recent/index.html


# 個別URL未掲載のスケジュール項目

## Closing ceremony

- 個別URL: 未掲載
- Description: 未掲載
- 日時: Tuesday, February 17, 2015 14:35 - 15:15

### 添付資料URL

- https://netdevconf.info/0.1/docs/hadi-salim-netdev01-closing.pdf

## BoF HW netlink async

- 個別URL: 未掲載
- Description: 未掲載
- 日時: Tuesday, February 17, 2015 15:25 - 16:25

### 添付資料URL

掲載なし
