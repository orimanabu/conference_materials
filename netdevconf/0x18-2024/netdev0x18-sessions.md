# Netdev 0x18 全セッション一覧

出典: https://netdevconf.info/0x18/pages/sessions.html

Sessions一覧にある全46セッションを収録。各個別ページのTitle・Description原文、Contentsのスライド・論文・動画URLとDescription内の資料リンクを抽出。相対URLは各個別ページを基準に絶対URLへ変換。資料のdocsディレクトリ一覧取得はHTTP 403で拒否されたため、個別ページに掲載された資料リンクを収録。Scheduleの個別URLと照合し追加セッションなし。Descriptionは45件。KeynoteのDescription欄は空のため掲載なしとし、登壇者略歴はspeaker_biographyに別途保持。元ページの資料リンクは保持。資料ダウンロード可否・動画再生可否は未検査。

セッション: 46件 / Descriptionあり: 45件 / 資料あり: 46件 / 資料項目: 96件

## 目次

1. [A Linux Implementation of SEARCH -- a New TCP Slow Start Algorithm](#session-a-linux-implementation-of-search-a-new-tcp-slow-start-algorithm)
2. [Drinking From The Host Packet Fire Hose](#session-drinking-from-the-host-packet-fire-hose)
3. [Characterizing IOTLB Wall for Multi-100-Gbps Linux-based Networking](#session-characterizing-iotlb-wall-for-multi-100-gbps-linux-based-networking)
4. [Tailoring eBPF maps for DDoS Protection](#session-tailoring-ebpf-maps-for-ddos-protection)
5. [benefits and drawbacks of syscall hooks](#session-benefits-and-drawbacks-of-syscall-hooks)
6. [vDPA Live Migration Downtime improvements for net devices](#session-vdpa-live-migration-downtime-improvements-for-net-devices)
7. [Scheduling HTTP streams](#session-scheduling-http-streams)
8. [A new lightweight Zero-Copy Notification Mechanism in Linux](#session-a-new-lightweight-zero-copy-notification-mechanism-in-linux)
9. [Transparent Shared Memory Communications with eBPF](#session-transparent-shared-memory-communications-with-ebpf)
10. [AMP To Reduce Network Jitter](#session-amp-to-reduce-network-jitter)
11. [Is it OK to Hijack TCP?](#session-is-it-ok-to-hijack-tcp)
12. [Journey of advancing device migration for virtio PCI hardware devices](#session-journey-of-advancing-device-migration-for-virtio-pci-hardware-devices)
13. [Multi-PF single netdev](#session-multi-pf-single-netdev)
14. [Achieving linear CPU scaling in WireGuard with an efficient multi-tunnel architecture](#session-achieving-linear-cpu-scaling-in-wireguard-with-an-efficient-multi-tunnel-architecture)
15. [Fine-grained TCP Tuning](#session-fine-grained-tcp-tuning)
16. [Exploration of Machine Learning Optimization Algorithms in HTTP Latency Tuning on Nginx](#session-exploration-of-machine-learning-optimization-algorithms-in-http-latency-tuning-on-nginx)
17. [Innovation from Within: The Story of Meta's Host Network Interface and fbnic Driver](#session-innovation-from-within-the-story-of-metas-host-network-interface-and-fbnic-driver)
18. [Linux networking on s390 architecture - Is it very different?](#session-linux-networking-on-s390-architecture-is-it-very-different)
19. [how Linux tracing can use the net/ subsystem](#session-how-linux-tracing-can-use-the-net-subsystem)
20. [The Future of AI Networks: Advancing TCP with Device Memory and Collective Communication](#session-the-future-of-ai-networks-advancing-tcp-with-device-memory-and-collective-communication)
21. [PSP Crypto Protocol and HW Offload](#session-psp-crypto-protocol-and-hw-offload)
22. [AI-Enhanced Reviews for Linux Networking](#session-ai-enhanced-reviews-for-linux-networking)
23. [Interrupt moderation approaches for virtio device](#session-interrupt-moderation-approaches-for-virtio-device)
24. [Architectural considerations for Interplanetary Space Networking](#session-architectural-considerations-for-interplanetary-space-networking)
25. [Introduction to Falcon Reliable Transport](#session-introduction-to-falcon-reliable-transport)
26. [Shared Memory Pool for Representors](#session-shared-memory-pool-for-representors)
27. [State of the union in TCP land](#session-state-of-the-union-in-tcp-land)
28. [Compilers and Linkers for network optimization](#session-compilers-and-linkers-for-network-optimization)
29. [Domain Specific Acclerators for Networking](#session-domain-specific-acclerators-for-networking)
30. [Linux Network Device Testing - An easy to use driver and firmware testing framework](#session-linux-network-device-testing-an-easy-to-use-driver-and-firmware-testing-framework)
31. [Machine Learning Practices in Network Traffic across Data Centers](#session-machine-learning-practices-in-network-traffic-across-data-centers)
32. [Real world tips, tricks, and notes of using epoll-based busy polling to reduce latency](#session-real-world-tips-tricks-and-notes-of-using-epoll-based-busy-polling-to-reduce-latency)
33. [Introduction to PTP on Linux - APIs](#session-introduction-to-ptp-on-linux-apis)
34. [Tutorial: PTP from scratch](#session-tutorial-ptp-from-scratch)
35. [Workshop on Extension Headers](#session-workshop-on-extension-headers)
36. [TC Workshop](#session-tc-workshop)
37. [FRRouting workshop](#session-frrouting-workshop)
38. [IPsec Workshop](#session-ipsec-workshop)
39. [Driver and H/W APIs Workshop](#session-driver-and-hw-apis-workshop)
40. [Netfilter Mini workshop](#session-netfilter-mini-workshop)
41. [My Fu is Better Than Yours!](#session-my-fu-is-better-than-yours)
42. [Netdev Testing & Automation](#session-netdev-testing-automation)
43. [Devmem TCP & io uring zero copy](#session-devmem-tcp-io-uring-zero-copy)
44. [Netdev Processes, Community, and Respect/Reputation](#session-netdev-processes-community-and-respectreputation)
45. [Introduction to Ultra Ethernet Consortium 1.0](#session-introduction-to-ultra-ethernet-consortium-10)
46. [Fireside Chat with Martin Casado](#session-keynote-casado)

<a id="session-a-linux-implementation-of-search-a-new-tcp-slow-start-algorithm"></a>
## 1. A Linux Implementation of SEARCH -- a New TCP Slow Start Algorithm

- セッション個別URL: https://netdevconf.info/0x18/sessions/talk/a-linux-implementation-of-search-a-new-tcp-slow-start-algorithm.html
- Track: Talk
- 日時:  

### Description

TCP slow start is designed to ramp up to the network congestion point quickly, doubling the congestion window each round-trip time until the congestion point is reached, whereupon TCP exits the slow start phase.  Unfortunately, the default Linux TCP slow start implementation – TCP Cubic with HyStart [1] – can cause premature exit from slow start, especially over wireless links, degrading link utilization.  However, without HyStart, TCP exits too late, causing unnecessary packet loss. To improve TCP performance during slow start, we developed the Slow start Exit At Right CHokepoint (SEARCH) algorithm [2] where the congestion point is determined based on bytes delivered compared to the expected bytes delivered, smoothed to account for link latency variation and normalized to accommodate link capacities. In prior work, we implemented SEARCH  and evaluated it over 4G LTE, low earth orbit (LEO), and geosynchronous (GEO) satellite links. In this paper, we implemented search as a Linux kernel v5.16 module, illustrate its performance over GEO satellite links by example, and evaluate SEARCH over Wi-Fi. Overall networks, SEARCH reliably exits from slow after the congestion point is reached but before inducing packet loss. Our Linux kernel module is open-source and available for general use and further evaluation.



[1] Ha, S., and Rhee, I. 2011. Taming the elephants: New tcp slow start. Computer Networks 55(9):2092–2110.
[2] Kachooei, M. A.; Chung, J.; Li, F.; Peters, B.; and Claypool, M. 2023a. Search: Robust tcp slow start performance over satellite networks. In 2023 IEEE 48th Conference on Local Computer Networks (LCN), 1–4.

### 添付資料URL

- [slides](https://netdevconf.info/0x18/docs/netdev-0x18-paper1-talk-slides/SEARCH_netdev_0x18_2024_v1.2.pdf)（file）
- [paper](https://netdevconf.info/0x18/docs/netdev-0x18-paper1-talk-paper.pdf)（file）
- [video](https://www.youtube.com/watch?v=LCq4QMxhBQ4)（link）

<a id="session-drinking-from-the-host-packet-fire-hose"></a>
## 2. Drinking From The Host Packet Fire Hose

- セッション個別URL: https://netdevconf.info/0x18/sessions/talk/drinking-from-the-host-packet-fire-hose.html
- Track: Talk
- 日時:  

### Description

Over the past decade, Ethernet port capacities have experienced a 40x increase, while CPU processing capacity  has only seen a 10x rise and memory bandwidth remained relatively stagnant [1]. In 2024, the IEEE’s ratification of 800 Gbps ports doubled the port capacity from 400 Gbps and highlighted the pressing need to address the growing gap between IO, CPU processing capability and memory bandwidth.  As a result, traditional kernel IO infrastructure processing methods are becoming increasingly inadequate for managing this disparity.



A notable response to this challenge has been the adoption of XPU (DPU/IPU) NICs[2][3][4] by major cloud providers, which offload network infrastructure tasks from host processors. Our work aims to enhance host resource efficiency in environments equipped with multi-100G ports. In the first phase we worked on offloading Access Control Lists (ACL, iptables/tc), Load Balancing and TLS. This effort led us to a conclusion that simply accelerating such functions through XPU offloads is not enough to manage the high IO demands as well as memory bandwidth required for host application processing.



The second phase of our effort(covered in this talk)  is to look into the variety of existing and newer approaches to alleviate the afore-mentioned host-resource strain using XPUs.



In the talk we will briefly share the results from our XPU endeavours and then proceed to provide a comparative analysis of various network processing techniques designed to alleviate host-resource strain. These include GRO/RSC, TSO, Big TCP, and MTU size adjustments, as well as zero-copy methods like MSG_ZEROCOPY, IO_URING, and sendfile. We will examine the impact of these techniques on throughput, CPU, power, and memory bandwidth utilisation, particularly for large transfer traffic patterns common in storage, content delivery and ML training.



In our third phase we plan to develop a comprehensive approach that integrates XPU acceleration(as mentioned above in phase 1) with the techniques from this talk to minimize host CPU load and optimize resources that are made available for application processing. We will briefly discuss our initial thoughts and future work on merging the two worlds. We believe our study is the first public work of its kind and hope it will serve as a valuable resource for the community.



References:
[1] https://netdevconf.info/0x17/sessions/talk/congestion-control-architecture-for-host-congestion.html
[2]https://www.intel.com/content/www/us/en/products/details/network-io/ipu/e2000-asic.html
[3]https://www.amd.com/en/accelerators/pensando
[4]https://www.nvidia.com/en-us/networking/products/data-processing-unit/

### 添付資料URL

- [slides](https://netdevconf.info/0x18/docs/netdev-0x18-paper5-talk-slides/netdev-0x18-drinking-from-host-packet-fire-hose.pdf)（file）
- [video](https://www.youtube.com/watch?v=Us1pxdQeKck)（link）

<a id="session-characterizing-iotlb-wall-for-multi-100-gbps-linux-based-networking"></a>
## 3. Characterizing IOTLB Wall for Multi-100-Gbps Linux-based Networking

- セッション個別URL: https://netdevconf.info/0x18/sessions/talk/characterizing-iotlb-wall-for-multi-100-gbps-linux-based-networking.html
- Track: Talk
- 日時:  

### Description

Many emerging technologies (e.g., AI, VR, and cloud VM hosting) require high network bandwidth. Consequently, NICs’ link speeds are moving quickly toward the 1 Tbps range and higher. Speed increases, in turn, introduce newer bottlenecks in the communication between system components.



In this talk, we focus on the performance impact of latency in transfers between the NIC and host memory—specifically, on how the IOMMU affects performance and how to mitigate its effects.



The core of the problem is that data transfer between the NIC and host memory has to traverse multiple blocks (i.e., PCIe bus, address translation (IOMMU), memory fabric, and memory chips) and is subject to ordering constraints. There is limited buffering (high-speed multiport memories) between these blocks, and when the bandwidth-delay product of the path exceeds the amount of buffering, the system has to throttle traffic or possibly even drop it (e.g., in the case of received packets). As a reference, high-end systems can only cope with 1.5-2us of average latency.



The IOMMU can consume a substantial amount of this budget, especially if each translation needs to actually walk the IOMMU table. The table has a cache (IOTLB) with only a limited number of entries. Depending on the pattern of requests, it is quite possible to overflow the cache and cause a dramatic drop in performance, which we call the “IOTLB wall”. For instance, the buffer management (e.g., PagePool API in the Linux kernel) and various offloading capabilities of modern NICs (e.g., LRO and TSO) could affect the memory request pattern, and consequently the number of IOTLB misses.



In the talk, we will first model the problem, describe scenarios that exhibit the phenomenon, and show experiment data that match our model. More specifically, we characterize IOTLB behavior and its effects on recent Intel Xeon Scalable & AMD EPYC processors at 200 Gbps, by analyzing the impact of different factors contributing to IOTLB misses and causing a throughput drop (up to 20% compared to the no-IOMMU case in our experiments).



Subsequently, we will discuss how the problem can be mitigated with various techniques—some obvious ones, such as using larger IOTLB mappings to reduce the number of IOTLB entries, and some less obvious ones, which try to increase address locality, thus causing better use of the available IOTLB entries. We hope to signify the importance of having a call to arms to rethink Linux-based I/O management at high link rates (which will continue to grow over time).

### 添付資料URL

- [slides](https://netdevconf.info/0x18/docs/netdev-0x18-paper7-talk-slides/iotlb-netdev-no-video.pdf)（file）
- [video](https://www.youtube.com/watch?v=wQbLwXKT8sM)（link）

<a id="session-tailoring-ebpf-maps-for-ddos-protection"></a>
## 4. Tailoring eBPF maps for DDoS Protection

- セッション個別URL: https://netdevconf.info/0x18/sessions/talk/tailoring-ebpf-maps-for-ddos-protection.html
- Track: Talk
- 日時:  

### Description

eBPF maps are powerful enough to express any type of configuration and runtime information for packet processing engines. However, DDoS protection applications may step behind usual usecases, and corner cases of algorithms in the eBPF maps appear more often and strike harder.



Aggressive insertions into maps, exhaustion of preallocated space, and races - typical situations during an incoming DDoS attack. In this talk, we will cover additions that we had to make for the eBPF maps to make them more scalable under attacks and to drop malicious traffic more effectively, and additions that help us monitor situations better and avoid possible degradations.

### 添付資料URL

- [slides](https://netdevconf.info/0x18/docs/netdev-0x18-paper9-talk-slides/tailoring-ebpf-maps-for-ddos.pdf)（file）
- [video](https://www.youtube.com/watch?v=FPP-qJq8GSs)（link）

<a id="session-benefits-and-drawbacks-of-syscall-hooks"></a>
## 5. benefits and drawbacks of syscall hooks

- セッション個別URL: https://netdevconf.info/0x18/sessions/talk/benefits-and-drawbacks-of-syscall-hooks.html
- Track: Talk
- 日時:  

### Description

system call hooks are often used to offer an alternate kernel function instead of currently running host kernel.  by running arbitrary programs at the hooks, regular syscall invocations are not going to the host kernel, but into the appended code instead.  kernel emulators (user mode linux, or gvisor) needs such mechanisms to replace the behaviors, or RDMA library to offer socket-like API by replacing syscall-related symbols to redirect the call path to its own implementation.



the feature of syscall hooks is historically used to monitor, or control userspace application programs from outside of the process, with a dedicated program to inspect and even change the behavior of the target program.  later on, dependency to the external controller  is eliminated and replacing the original syscall became also possible (i.e., by using LD_PRELOAD, or rewriting binary files on the fly).  By applying the syscall hooks, users can benefit existing application programs on the emulated kernel without rewriting the application programs.



But there are still issues to achieve 1) low overhead, and 2) complete hook ability.



in this talk, we will look back the history of this syscall hook feature, how the function has been improved, what is still a problem, and how we can move forward in future.  we will also discuss observed/well-known limitations of running applications with syscall hooks, while benefiting running unmodified application programs.

### 添付資料URL

- [slides](https://netdevconf.info/0x18/docs/netdev-0x18-paper6-talk-slides/netdev0x18-zpoline.pdf)（file）
- [video](https://www.youtube.com/watch?v=v7-JWs7UQxI)（link）

<a id="session-vdpa-live-migration-downtime-improvements-for-net-devices"></a>
## 6. vDPA Live Migration Downtime improvements for net devices

- セッション個別URL: https://netdevconf.info/0x18/sessions/talk/vdpa-live-migration-downtime-improvements-for-net-devices.html
- Track: Talk
- 日時:  

### Description

This talk explores our ongoing efforts to reduce the vDPA-net live migration downtime. Downtime in live migration represents the periods in which a device is not able to process packets due to the switchover procedure of live migration. This can cause large disturbances for applications running inside a virtual machine (timeouts, dropped packets, etc). Furthermore, the downtime can vary depending on the device characteristics, like the number of devices and queues.



First, concepts like VirtIO, vDPA and live migration are defined. Next, the vDPA device characteristics, the challenges they cause for live migration, and the solutions we developed are explored. Finally, future optimizations that are expected to considerably reduce live migration downtime are discussed.



vDPA is an abstraction layer that allows using the standardized VirtIO hardware datapath with a flexible software implementation of the control path. This enables vendors to use the existing control path implementation by simply writing an adaptation layer for the hardware configuration, while achieving full bandwidth for the dataplane.



The majority of the downtime is spent in two areas of the device initialization: dealing with memory maps and device configuration. We will show how we reduced or moved them out of the downtime window. On the source side we reduced the time for configuring the device to track the dirty memory [1]. On the destination side QEMU pre-warms the IOMMU [2] and configures the virtio-net features while the VM is still running at the source [3] [4]. The first changes already reduce the downtime from about 20 seconds to 200 milliseconds for a 128G VM with 2 net devices each with 2 combined queues [5].



It is expected to have a round table with vendors to discuss what is missing from VirtIO / vDPA after the talk.



[1] vq descriptor mapping (https://lore.kernel.org/lkml/20230928164550.980832-2-dtatulea@nvidia.com/T)
[2] map memory ahead of downtime (Eugenio, (https://lists.nongnu.org/archive/html/qemu-devel/2024-01/msg02136.html) 
[3] Sending the device state ahead of time RFC (Yajun Wu, https://lore.kernel.org/qemu-devel/6c8ebb97-d546-3f1c-4cdd-54e23a566f61@nvidia.com/T/ )
[4] VQ suspend/resume (https://lore.kernel.org/virtualization/20231225151203.152687-1-dtatulea@nvidia.com)
[5] qemu LM improvements RFC (Si-Wei, https://lore.kernel.org/qemu-devel/1701970793-6865-1-git-send-email-si-wei.liu@oracle.com)

### 添付資料URL

- [slides](https://netdevconf.info/0x18/docs/netdev-0x18-paper11-talk-slides/vDPA%20Live%20Migration%20Downtime%20improvements%20for%20net%20devices.pdf)（file）
- [video](https://www.youtube.com/watch?v=Tmes5AFJAm0)（link）

<a id="session-scheduling-http-streams"></a>
## 7. Scheduling HTTP streams

- セッション個別URL: https://netdevconf.info/0x18/sessions/talk/scheduling-http-streams.html
- Track: Talk
- 日時:  

### Description

Scheduling problem arise in many subsystems such as the CPU scheduler, disk IO or Qdisc. Despite extensive research during several decades, this problem remain challenging to solve due to varying workload requirements, diversity of scheduled resources, latency versus throughput considerations, scheduler overhead and many others. For instance, the Linux CPU scheduler continues to evolve.



In this talk, we’ll explore another scheduling scenario: HTTP streams prioritization. Having that a busy web server can manage millions of TCP connections, each potentially containing hundreds of HTTP/2 or HTTP/3 streams, a pretty efficient stream is essential. It should be fair, say, for progressive JPEGs, but it should prioritize shorter load times for PNG images. It should also be smart enough, particularly if browsers don’t adequately prioritize streams (which is still could be an issue for mainstream browsers in 2024). Additionally, it must be resilient against DDoS attacks.



This talk will cover the following topics:




  The different nature of resources, their relationships, and how these factrors affect streams scheduling used for delivering these resources


  Fair O(logN) and fast O(1) scheduling algorithms


  Discussions on underlying data structures to optimize the scheduler for a large number of streams


  HTTP/2 streams prioritization in servers such as Nginx, H2O, nghttp2 (Envoy, Apache HTTPD) and Tempesta FW


  Differences between stream prioritization in HTTP/2 and HTTP/3, along with corresponding RFCs


  How modern browsers construct stream priority trees


  Server-side optimizations for streams scheduling in Cloudflare and Tempesta FW


  Known vulnerabilities exploiting the HTTP/2 prioritization mechanisms

### 添付資料URL

- [slides](https://netdevconf.info/0x18/docs/netdev-0x18-paper12-talk-slides/netdev-0x18-paper12.pdf)（file）
- [paper](https://netdevconf.info/0x18/docs/netdev-0x18-paper12-talk-paper.pdf)（file）
- [video](https://www.youtube.com/watch?v=BgrDsIy1o-0)（link）

<a id="session-a-new-lightweight-zero-copy-notification-mechanism-in-linux"></a>
## 8. A new lightweight Zero-Copy Notification Mechanism in Linux

- セッション個別URL: https://netdevconf.info/0x18/sessions/talk/a-new-lightweight-zero-copy-notification-mechanism-in-linux.html
- Track: Talk
- 日時:  

### Description

The quest for optimizing network performance in high-throughput environments continually evolves with technological advancements. One promising avenue is zero-copy, a technique that significantly reduces CPU usage and boosts throughput. Currently, Linux offers various copy avoidance mechanisms, such as sendfile, vmsplice, and a more generic socket solution MSG_ZEROCOPY flag.



However, despite these benefits, the complexity of zero-copy prevents it from gaining broader adoption. This complexity largely stems from the need for significant changes in application architecture and the substantial overhead linked to its notification systems.
This talk introduces a novel approach that integrates zero-copy more seamlessly into Linux systems.  It achieves this by embedding notification mechanisms directly within the user arguments through the sendmsg control message. The new mechanism will not introduce extra system calls. It minimizes the overhead of receiving notifications while maintaining compatibility with the POSIX socket interface.



We update selftests/msg_zerocopy.c to accommodate our new method, and do the performance evaluation. When compared with MSG_ZEROCOPY flag,  there is a 7% performance increase for TCP.



This session will dive into technical implementation, challenges overcome, and the implications for future zerocopy network application development.



https://lore.kernel.org/all/20240708210405.870930-1-zijianzhang@bytedance.com/

### 添付資料URL

- [slides](https://netdevconf.info/0x18/docs/netdev-0x18-paper14-talk-slides/netdev-0x18-paper14.pdf)（file）
- [paper](https://netdevconf.info/0x18/docs/netdev-0x18-paper14-talk-paper.pdf)（file）
- [video](https://www.youtube.com/watch?v=OwlV4Q9ADKE)（link）

<a id="session-transparent-shared-memory-communications-with-ebpf"></a>
## 9. Transparent Shared Memory Communications with eBPF

- セッション個別URL: https://netdevconf.info/0x18/sessions/talk/transparent-shared-memory-communications-with-ebpf.html
- Track: Talk
- 日時:  

### Description

A co-resident VM refers to a virtual machine (VM) that shares physical hardware resources with other VMs on the same physical host. Co-locating containers pertain to the practice of deploying multiple containers within the same physical host or node in a containerized environment, such as Docker or Kata Containers.



First, VMM (virtunal machine monitor) offers significant advantages over native machines when VMs co-resident on the same physical host are non-competing in terms of network and computing resources. However, the performance of VMs is significantly degraded compared to that of native machine when co-resident VMs are competing for resources under high workload demands due to high overheads of switches and  events in host/guest domain and VMM. Second, the communication overhead between co-resident VMs can be as high as the communication cost between VMs located on separate physical machines. This is because the abstraction of VMs supported by VMM technology does not differentiate whether the data request is coming from co-resident VMs or not. More importantly, when using TCP/IP as the communication protocol, the overhead of Linux networking stack itself is also significant for both VM and container cases.



Although vsock or traditional Unix domain sockets already provide an optimized alternative specifically for inter-VM or inter-container communications, we argue that lack of transparency to applications is the reason why vsock or Unix domain socket is not yet widely adopted. Instead of introducing more socket families, we propose a novel and more optimal solution using shared memory with eBPF to bypass TCP/IP stack completely and transparently to bring co-resident VM communications to optimal. Unlike SMC (Shared Memory Communications), it does not even require LD_PRELOAD.



More importantly, with the recent introduction of BPF arena, we could possibly build an eBPF map on top of Inter-VM Shared Memory (IVSHMEM). And with eBPF socket maps and sockops infrastructures, we are armed with all the foundations we need to establish shared memory communications for co-resident VM and containers.

### 添付資料URL

- [slides](https://netdevconf.info/0x18/docs/netdev-0x18-paper15-talk-slides/Transparent%20Shared%20Memory%20Communications%20with%20eBPF.pdf)（file）
- [video](https://www.youtube.com/watch?v=MT7eoK3PgT4)（link）

<a id="session-amp-to-reduce-network-jitter"></a>
## 10. AMP To Reduce Network Jitter

- セッション個別URL: https://netdevconf.info/0x18/sessions/talk/amp-to-reduce-network-jitter.html
- Track: Talk
- 日時:  

### Description

In this paper we will share our analysis of jitter caused by the kernel network stack on datacenter applications which are micro architecture by design and distributed in nature. Usually these applications follow an event driven non-blocking design pattern where connections are multiplexed in a thread that implements the event loop using epoll and performs read system calls. The assumption that the thread which calls the read will also consume the data is not always true because the business logic usually runs on a different thread. Following the assumption that reader will consume the data, the datacenter servers are generically configured in a scaled out manner where NIC (Network Interface Card) queues are mapped to all/maximum possible CPUs. This asymmetricity in userspace and symmetricity in kernel space leads to unnecessary context switches and inefficient use of caches.



In this paper we will also share our findings of using asymmetric multi-processing (AMP) strategy on datacenter workloads. Our AMP strategy reserves CPUs for the kernel network stack and isolates applications to the remaining CPUs. The strategy considers various statistics like SoftIRQ load, overall CPU utilisation, packet throughput and latency to dynamically create the set of isolated CPUs. Such separation is known to provide some performance advantages, but our finding suggests that on above explained application design pattern the performance gains are significant. We identified that the AMP strategy leads to better cache efficiency and interference free execution of NAPI (New API) and the application. We will present these details by taking the Redis cluster and Netpoll RPC framework as a case study where throughput per CPU utilisation improvements are 25% and 12% respectively along with a 10% reduction in 99.9 percentile latency. We will also discuss different design options to implement the AMP strategy and role of io-uring to further complete the pipeline model.

### 添付資料URL

- [slides](https://netdevconf.info/0x18/docs/netdev-0x18-paper17-talk-slides/anp_presentation.pdf)（file）
- [paper](https://netdevconf.info/0x18/docs/netdev-0x18-paper17-talk-paper.pdf)（file）
- [video](https://www.youtube.com/watch?v=ajJY56OC4i8)（link）

<a id="session-is-it-ok-to-hijack-tcp"></a>
## 11. Is it OK to Hijack TCP?

- セッション個別URL: https://netdevconf.info/0x18/sessions/talk/is-it-ok-to-hijack-tcp.html
- Track: Talk
- 日時:  

### Description

This talk will discuss plans for Homa to hijack TCP, transmitting its
packets on the network with the TCP protocol number and then
separating Homa-over-TCP packets from real TCP packets at the
destination. This will allow Homa to share the benefits of hardware support
that has been implemented for TCP over the last several decades.
The goal of the talk is to get feedback from the audience on the
feasibility of this approach.

### 添付資料URL

- [slides](https://netdevconf.info/0x18/docs/netdev-0x18-paper19-talk-slides/HijackTCP.pdf)（file）
- [video](https://www.youtube.com/watch?v=ERmpuu3CE-M)（link）

<a id="session-journey-of-advancing-device-migration-for-virtio-pci-hardware-devices"></a>
## 12. Journey of advancing device migration for virtio PCI hardware devices

- セッション個別URL: https://netdevconf.info/0x18/sessions/talk/journey-of-advancing-device-migration-for-virtio-pci-hardware-devices.html
- Track: Talk
- 日時:  

### Description

Virtio network devices are fundamental to cloud VMs, evolving from para-virtual devices to vDPA and hardware PCI devices, including both physical and virtual functions. These PCI virtual functions are commonly attached as pass-through devices using the VFIO subsystem to VMs. Live migration of VMs with pass-through virtual functions is essential for hypervisor infrastructure. This talk details our journey through various design aspects, implementation challenges, their solutions, and performance benchmarks.



We highlight specific design considerations that influenced the specification draft and its implementation. We also explore the key differences between our approach and both a vdpa vendor-based approach and briefly, the IDPF. This technical paper presents, for the first time globally, performance metrics for virtio PCI devices using IOMMU-based dirty page tracking. We discuss performance benchmark results from single to multiple devices and how the pre-copy approach further reduces migration downtime. Finally, we review the current progress of the Virtio specification developed by the OASIS open standards community. We conclude this talk by sharing lessons learned from developing code and specifications concurrently, closing gaps, and discussing the trade-offs of various approaches.

### 添付資料URL

- [slides](https://netdevconf.info/0x18/docs/netdev-0x18-paper22-talk-slides/virtio-live-migratation-slides.pdf)（file）
- [paper](https://netdevconf.info/0x18/docs/netdev-0x18-paper22-talk-paper.pdf)（file）
- [video](https://www.youtube.com/watch?v=NtLIzAYlNHA)（link）

<a id="session-multi-pf-single-netdev"></a>
## 13. Multi-PF single netdev

- セッション個別URL: https://netdevconf.info/0x18/sessions/talk/multi-pf-single-netdev.html
- Track: Talk
- 日時:  

### Description

The Multi-PF NIC technology enables several CPUs within a multi-socket server to connect directly to the network, each through its own dedicated PCIe interface.



This results in eliminating the network traffic traversing over the internal bus between the sockets, significantly reducing overhead, latency, CPU utilization, and increasing network throughput.



In a recent series that was accepted upstream [1] we added support for combining multiple PFs of the same port in a Multi-PF environment under one netdev instance. It is implemented in the netdev layer of our vendor driver.



The idea was first presented by Achiad Shochat [2] a few years ago in Netdev 2.2 conference (Seoul).



In this talk, we will emphasize the advantages of this solution over the alternatives, like applying a Linux bond/team device on top of the per-socket kernel netdevs.



As the use cases that this feature speeds up are becoming widely spread in modern data centers, we see this feature standardized and transitioned to the generic netdev-layer, in cooperation with other vendors, in the mid/long term.



We will go over some key design decisions, implementation details, performance numbers, and future vision.



[1] https://lore.kernel.org/all/20240215030814.451812-1-saeed@kernel.org/
[2] https://www.netdevconf.info/2.2/session.html?shochat-devicemgmt-talk

### 添付資料URL

- [slides](https://netdevconf.info/0x18/docs/netdev-0x18-paper24-talk-slides/Multi-PF%20Netdev.pdf)（file）
- [video](https://www.youtube.com/watch?v=bjjUGPUzNY4)（link）

<a id="session-achieving-linear-cpu-scaling-in-wireguard-with-an-efficient-multi-tunnel-architecture"></a>
## 14. Achieving linear CPU scaling in WireGuard with an efficient multi-tunnel architecture

- セッション個別URL: https://netdevconf.info/0x18/sessions/talk/achieving-linear-cpu-scaling-in-wireguard-with-an-efficient-multi-tunnel-architecture.html
- Track: Talk
- 日時:  

### Description

Wireguard is one of the most common tunneling technologies used in Linux, thanks to its simplicity and excellent integration in the Linux kernel. Despite its widespread adoption, it proves to be unable to provide high-speed connectivity between two sites when adopting a standard single-tunnel configuration. This represents a significant limitation when a secure, high-speed interconnection is required e.g., between two remote clusters in the cloud. In fact, the capability to scale wireguard performance with the number of available CPU cores is somehow limited, even in presence of a software architecture that is intrinsically parallel.



In this talk we investigate the multi-core scalability properties of WireGuard, identifying current limitations and proposing an improved architecture which facilitates effective scaling, reaching a nearly linear throughput increase depending on the number of involved CPU cores. We first analyze the architecture of a single tunnel setup, underlining how, despite its capability to parallelize encryption and decryption stages, the presence of serial per-tunnel stages still imposes a limit on the use of additional resources. Hence, we attempt to spread flows over multiple tunnels, in order to also scale per-tunnel stages over multiple cores. Our analysis reveals how simply leveraging multiple tunnels can end up not scaling at all, due to a subtle NAPI poll functions “black hole” condition related to the use of the standard softirq-based NAPI. We overcome this limitation by enabling the threaded NAPI on WireGuard interfaces, however, despite being able to leverage all the resources of our nodes, the approach still shows far from linear performance improvement when increasing the number of allocated cores. To push things further we propose a modified architecture which, for each flow, handles all WireGuard stages inline, in a signal processing context on a single core, eliminating the costs of tasks and cache synchronization. This improved architecture, tailored for multi-tunnel support, shows an almost 2x performance improvement over a multi-tunnel deployment based on the vanilla WireGuard implementation, as well as being able to support 18x times the throughput of a single tunnel setup on our machines.



Our approach is not a one-size-fits-all solution, its main limitation currently being the inability to parallelize the en/decryption stages for a single flow, which might end up penalizing elephant flows. However, it provides an interesting starting point for further discussion and represents a first step towards a more scalable WireGuard architecture. For example, a mechanism could be designed that uses traffic patterns to dynamically determine the number of distinct tunnels needed. This would aim to use the fewest tunnels possible and adjust their allocation to associate each tunnel with a specific core, thereby also minimizing the number of cores used. Additionally, a hybrid solution could be considered. This would involve switching between the existing version of WireGuard and our modified module, thereby leveraging the strengths of both implementations.

### 添付資料URL

- [slides](https://netdevconf.info/0x18/docs/netdev-0x18-paper23-talk-slides/Achieving%20Linear%20CPU%20Scaling%20in%20WireGuard%20with%20an%20Efficient%20Multi-Tunnel%20Architecture%20-%20NetDev%200x18.pdf)（file）
- [paper](https://netdevconf.info/0x18/docs/netdev-0x18-paper23-talk-paper.pdf)（file）
- [video](https://www.youtube.com/watch?v=RBene8WBQKs)（link）

<a id="session-fine-grained-tcp-tuning"></a>
## 15. Fine-grained TCP Tuning

- セッション個別URL: https://netdevconf.info/0x18/sessions/talk/fine-grained-tcp-tuning.html
- Track: Talk
- 日時:  

### Description

Flow-based traffic management in the current data center network landscape is facing growing challenges. As the new generation of NICs brings higher throughput, the number of flows also increases. Since more applications with diverse network behavior can be hosted on the same host, traditional flow management may result in under-utilization of the network. For example, when a large number of short and long-lived flows co-exist in a single host, traditional congestion control algorithm like CUBIC will implicitly favor long-lived flows in terms of bandwidth because a short flow may not be able to reach a high send rate due to TCP slow start. In addition, since different applications may have different requirements (e.g., latency, throughput), and operate in different network environments, parameters that respect these factors can potentially better utilize the network.
In this talk, we will discuss how we plan to tackle the challenge by taking factors beyond traditional per-flow information into consideration when tuning TCP parameters. First, we show how we can learn from other flows that share the same path when setting parameters of a new flow. Then, we will discuss how to design a receiver-side flow scheduler that detects incast and host congestion, and proactively adjust the receiving window. Finally, we will discuss how bpf qdisc can be used for tuning.

### 添付資料URL

- [slides](https://netdevconf.info/0x18/docs/netdev-0x18-paper25-talk-slides/Fined-Grained%20TCP%20Tuning.pdf)（file）
- [video](https://www.youtube.com/watch?v=joP7y3JgGVk)（link）

<a id="session-exploration-of-machine-learning-optimization-algorithms-in-http-latency-tuning-on-nginx"></a>
## 16. Exploration of Machine Learning Optimization Algorithms in HTTP Latency Tuning on Nginx

- セッション個別URL: https://netdevconf.info/0x18/sessions/talk/exploration-of-machine-learning-optimization-algorithms-in-http-latency-tuning-on-nginx.html
- Track: Talk
- 日時:  

### Description

Linux kernel engineers often fine-tune sysctl values to optimize workload performance for specific scenarios.  However, given the multitude of parameters per system and the large number of systems in operation, manual tuning may not consistently yield ideal results. To address this, we leverage machine learning, particularly optimization algorithms, to identify the best parameter combinations for different workloads, and streamline the process to minimize human intervention.



In our Proof of Concept, which focuses on optimizing HTTP latency for an Nginx server, multiple kernel parameters are selected for the tuning experiment from Memory Management, CPU scheduler, Networking, Block IO fields. We also have set up a data pipeline to automate the whole iterative experimenting process, which includes triggering the benchmark, collecting the evaluation metrics or benchmark scores, running optimization algorithms, and updating the configurable kernel parameters. The benchmark test results demonstrate improvements over both the average P99 values and witness an obvious shift in data distributions compared to the manual tuning solutions, proving the potential of the autotuning solution.



In this presentation, we’ll delve into the experimental design, data pipeline setups, and benchmark test results. We’ll also juxtapose the performance of manual tuning with that of automated tuning, providing an analysis and discussion of the results.

### 添付資料URL

- [slides](https://netdevconf.info/0x18/docs/netdev-0x18-paper27-talk-slides/Exploration%20of%20Machine%20Learning%20Optimization%20Algorithms%20in%20HTTP%20Latency%20Tuning%20on%20Nginx.pptx)（file）
- [video](https://www.youtube.com/watch?v=pD64lu2o0y8)（link）

<a id="session-innovation-from-within-the-story-of-metas-host-network-interface-and-fbnic-driver"></a>
## 17. Innovation from Within: The Story of Meta's Host Network Interface and fbnic Driver

- セッション個別URL: https://netdevconf.info/0x18/sessions/talk/innovation-from-within-the-story-of-metas-host-network-interface-and-fbnic-driver.html
- Track: Talk
- 日時:  

### Description

Meta Platforms, Inc., the company behind Facebook and other popular social media platforms, has developed its own Host Network Interface (HNI) and accompanying Linux driver called fbnic. With this Meta aims to address the challenges of scaling data center networks to meet the ever-growing demands of modern applications and workloads.



The traditional firmware heavy Network Interface Controller (NIC) designs pose limitations on network performance, observability, and flexibility. By building its own lightweight NIC, HNI, and driver, Meta seeks to overcome these limitations by reducing firmware overhead and achieving better integration between the host and the network. This new approach enables enhanced network visibility, improved reliability, and optimized performance tailored to Meta’s unique workload requirements.



The fbnic driver is designed with flexibility in mind, allowing for easy customization and rapid prototyping of new features. This adaptability is crucial in responding to the constantly evolving needs of Meta’s diverse application landscape. Furthermore, the in-house development enables Meta to control its own destiny regarding network innovation and avoid vendor lock-in.



This presentation will delve into the motivations behind Meta’s decision to develop its own NIC and driver, as well as the key design considerations and challenges encountered during the development process. We will also discuss the potential benefits this approach offers and explore future plans for further optimizing network performance and efficiency within Meta’s data centers.

### 添付資料URL

- [slides](https://netdevconf.info/0x18/docs/netdev-0x18-paper20-talk-slides/Netdev%200x18%20Meta%20Host%20Networking%20Interface.pdf)（file）
- [video](https://www.youtube.com/watch?v=FOoK1vL0UHQ)（link）

<a id="session-linux-networking-on-s390-architecture-is-it-very-different"></a>
## 18. Linux networking on s390 architecture - Is it very different?

- セッション個別URL: https://netdevconf.info/0x18/sessions/talk/linux-networking-on-s390-architecture-is-it-very-different.html
- Track: Talk
- 日時:  

### Description

s390 aka IBM Z aka the mainframe has 80 years of pedigree. Since 20+ years
it is supported in the Linux kernel. In many ways it is just another
processor architecture. In some ways it has its specialities, especially when
it comes to I/O and networking.



Let us tell you about multiple levels of Hipervisors and IO-virtualization.
About sharing resources with non-Linux systems. About network cards that
are not attached via PCI. About network interfaces that are implemented in
Hardware, Firmware or Hipervisor software and protocols that serve special
purposes or predate ethernet.

### 添付資料URL

- [slides](https://netdevconf.info/0x18/docs/netdev-0x18-paper30-talk-slides/Netdev%202024_s390Networking.pdf)（file）
- [video](https://www.youtube.com/watch?v=50jcFYZF9Tc)（link）

<a id="session-how-linux-tracing-can-use-the-net-subsystem"></a>
## 19. how Linux tracing can use the net/ subsystem

- セッション個別URL: https://netdevconf.info/0x18/sessions/talk/how-linux-tracing-can-use-the-net-subsystem.html
- Track: Talk
- 日時:  

### Description

This talk is about a crazy idea that the Linux tracing ring buffers directly operate on your NIC tx/rx ring buffers. You may ask why? Doing that the whole Linux tracing subsystem gets Linux “networkified” as being part of the Linux networking ecosystem and you can do the same things like you do with all your other networking stuff. For example: classification, filtering, etc. Those operations can even be offloaded to your NIC hardware, sending your tracing data directly to a remote machine that analyzes your tracing data, accessing the data over a socket interface and many other things more. At the end you might need to explain to your IT why your “supposedly looking” unused networking card is still being used as a tracing offload engine.



I will explain the idea of how Linux tracing can be adapted into the Linux networking ecosystem and how already existing infrastructure in Linux networking can be used for Linux tracing data. That all makes Linux tracing hopefully faster and easier to use. This is just the beginning of implementing a whole new framework with the goal to handle distributed tracing with time synchronized tracing in Linux in a way that networking hackers like to use to debug their networks.

### 添付資料URL

- [slides](https://netdevconf.info/0x18/docs/netdev-0x18-paper21-talk-slides/netdev_tracing_aring.pdf)（file）
- [video](https://www.youtube.com/watch?v=Qh2ftXh5NvQ)（link）

<a id="session-the-future-of-ai-networks-advancing-tcp-with-device-memory-and-collective-communication"></a>
## 20. The Future of AI Networks: Advancing TCP with Device Memory and Collective Communication

- セッション個別URL: https://netdevconf.info/0x18/sessions/talk/the-future-of-ai-networks-advancing-tcp-with-device-memory-and-collective-communication.html
- Track: Talk
- 日時:  

### Description

In our forthcoming presentation, we will explore significant advancements in network communication protocols, focusing on the extension of TCP to support Collective Communication (CC) semantics. Originally introduced as device memory TCP, or Devmem TCP, by Google at the last NetDev conference, this initiative marks a pivotal evolution in the AI network landscape. NCCL currently predominates in managing the transfer of CC semantics to both RDMA and TCP. Unlike traditional point-to-point configurations, CC enables intra-group communication, which is crucial for enhancing the complexity and performance of AI network interactions.



These enhancements simplify the framework for CC semantics, introducing innovations such as direct device access and the potential for random access, moving beyond conventional stream-only access. These developments are essential for a broad range of applications across AI, high-performance computing (HPC), and storage solutions, including NVMe over TCP. The evolution of TCP semantics is anticipated to inspire diverse implementations within the industry, as exemplified by Google’s Falcon and AWS’s EFA under RDMA semantics. Our efforts extend these innovations to TCP, significantly enhancing its applicability and potential for widespread adoption.



For practical deployment, we have enabled this enhanced TCP on Intel’s NICs, specifically within the Intel IPU series with IDPF driver, to ensure broader utilization in established environments such as HPC MPI and the AI NCCL framework. During our session, we will discuss our implementation strategies for these NICs and provide updates on our progress. Furthermore, we will present detailed performance data to demonstrate the enhanced TCP’s effectiveness, showcasing its comparability to RDMA and its superiority over standard TCP, particularly in handling larger packet sizes. This talk aims to provide a comprehensive overview of our technological advancements and their potential impact on the future of network communications.

### 添付資料URL

- [slides](https://netdevconf.info/0x18/docs/netdev-0x18-paper33-talk-slides/Advancing%20TCP%20for%20AI.pdf)（file）
- [video](https://www.youtube.com/watch?v=sJLnCcy6I2E)（link）

<a id="session-psp-crypto-protocol-and-hw-offload"></a>
## 21. PSP Crypto Protocol and HW Offload

- セッション個別URL: https://netdevconf.info/0x18/sessions/talk/psp-crypto-protocol-and-hw-offload.html
- Track: Talk
- 日時:  

### Description

PSP is a security protocol developed by Google for encrypting data in transit. It shares many concepts with IPSEC such as​ a security association (SA) to identify data traffic, an SA is always unidirectional, etc. It incorporates lessons from experience with currently deployed L2, L3 and L4 crypto protocols. For example, PSP encapsulates in UDP to avoid network issues with less common IP protocols.



PSP is purposely built to scale. It does not store an explicit SA in the ingress direction, but generates the ingress key on NIC from a device master key, combined with the SA SPI embedded in the packet.​ The full PSP Crypto Protocol Specification can be found at https://github.com/google/psp/doc



Software encryption is expensive. Modern NICs can ideally offload this operation.



This session combines two topics.



Part 1. PSP protocol introduction: by Google
Part 2. PSP NIC hardware offload: by Intel




Part two covers



   1. Prerequisites
   2. IDPF device interfaces for generic crypto offload: IPSEC, DTLS and PSP
 	          1. Virtchannel based control API
          2. Dedicated config queue for high-rate SA programming
          3. Keys in descriptor SA programming
   3. Data plane: connection establishment and line rate encryption
   4. Control plane: key management, key rotation, etc.




The device implementation is based on the draft device API available at https://github.com/kuba-moo/linux/tree/psp

### 添付資料URL

- [slides](https://netdevconf.info/0x18/docs/netdev-0x18-paper35-talk-slides/netdev-0x18-paper35.pdf)（file）
- [video](https://www.youtube.com/watch?v=RlsxPMsWdxo)（link）

<a id="session-ai-enhanced-reviews-for-linux-networking"></a>
## 22. AI-Enhanced Reviews for Linux Networking

- セッション個別URL: https://netdevconf.info/0x18/sessions/talk/ai-enhanced-reviews-for-linux-networking.html
- Track: Talk
- 日時:  

### Description

Problem Statement



Open-source projects heavily rely on community contributions, but the sheer volume of 
the patches often overwhelms even the most dedicated reviewers. These reviewers invest 
considerable time in meticulously reviewing each patch, ensuring adherence to guidelines, 
code quality, and semantic correctness. However, contributors frequently overlook 
established guidelines and conventions (such as whitespace issues, comment format 
irregularities, use of imperative mood, commit message inconsistencies, reverse 
Christmas tree patterns (RCT), etc.). This can shift the reviewers’ focus away from more 
significant code aspects and from providing deeper code reviews. Furthermore, reviewers 
find themselves repeatedly addressing these issues, which can slow down the overall 
review process.
While legacy automation tools (checkpatch, et all) are used to enforce certain rules, they 
lack the flexibility to adapt to new practices or understand the context. These tools 
typically concentrate on syntactic correctness but fall short when it comes to semantic 
subtleties and are unable to provide meaningful feedback, leaving this task to manual 
reviewers.



Proposed Solution



To address this challenge, we propose leveraging the advancement in generative Artificial 
Intelligence and Large Language Models (LLM) to provide an AI-based patch review. The 
solution will ingest patch emails, then submit the raw email as context attached to the 
review request prompt. The LLM returned review is generated as an email reply.
This prompt instructs the model about commit message rules and netdev mailing list best 
practices. Initially, the model can scan and comment on commit messages from mailing 
list patch postings. Furthermore, we envision expanding this approach to review entire 
patches, including commit messages and code, in search of standard rule violations and 
obvious mistakes.



Solution Benefits



The following are a few examples of the benefits this solution brings to the review process:
• Efficiency: Leveraging AI-based patch reviews reduces the burden on manual 
reviewers, allowing them to focus on more critical aspects of code. 
• Adaptability: Unlike legacy automation tools, our solution can adapt to new 
practices and understand context, providing meaningful feedback. 
• Semantic Understanding: Large Language Models (LLMs) can identify semantic 
subtleties beyond syntactic correctness. 
• Faster Review Process: By addressing common issues automatically, we 
accelerate the overall review process. 
• Scalability: The approach can be expanded to review entire patches (especially 
large ones), including commit messages and code. 
• Consistency: AI-based reviews maintain consistency in enforcing guidelines and 
conventions.



Potential Future Work



It is essential to emphasize that while this approach will not replace human reviews, it will 
significantly reduce the time spent by human reviewers on mundane comments.
Looking ahead, integrating this AI-based review process into the zero-day bot, or enabling 
direct replies on the mailing list (with maintainers’ permission) could enhance its 
effectiveness.
The AI assistant will (currently) not be adding Acked-by or other tags, but it is interesting to 
discuss what would be the prerequisites and method of doing so (example: Bot-reviewed: 
AI Assistant Formatting Bot ai.bot@company.com)



Examples



The paper will show example patches with problems that were found on the mailing list 
and compare our assistant’s output with the reviewer’s comments.



Plans



Gather netdev mailing list postings on patches from one kernel



  Use a “net-next” kernel-cycle (v6.7..v6.8) of postings from the close of a merge 
window (rc1 release) to the “net-next is closed” announcement (when the merge 
window on the next kernel opens.)
Compare AI-assistant output to real comments from reviewers


  Use lore.kernel.org/netdev git repositories to scan real traffic


  Use a sampling strategy to examine the assistant generated output compared to 
human reviewers

### 添付資料URL

- [slides](https://netdevconf.info/0x18/docs/netdev-0x18-paper26-talk-slides/netdev_0x18_AI_Reviews.pdf)（file）
- [video](https://www.youtube.com/watch?v=dl2bdsT5-9o)（link）

<a id="session-interrupt-moderation-approaches-for-virtio-device"></a>
## 23. Interrupt moderation approaches for virtio device

- セッション個別URL: https://netdevconf.info/0x18/sessions/talk/interrupt-moderation-approaches-for-virtio-device.html
- Track: Talk
- 日時:  

### Description

Interrupt moderation is a key contributor to reduce CPU utilization across low to high packet rates for network device transmission and reception queues. A virtio network device currently has at least three mechanisms for interrupt moderation.



  The first method is based on continuously moving queue indices,


  The second, more modern approach, is based on packet rate and timeout.


  The third approach is based on the device’s internal implementation.
The first two methods introduce their own limitations depending on platform and guest VMs. The indices-based method is extremely hard for the PCI hardware devices, while the second method is impractical for VMs that may not support it. Furthermore, the third, device-based moderation is too complex and resource-intensive for non-virtio devices that are merely emulating virtio data path.




In our talk, we introduce a novel approach that overcomes these system-level & guest VM limitations. We achieve this by utilizing the dynamic interrupt moderation library of the hypervisor kernel to moderate the guest VM interrupts. This approach makes the vDPA device implementation lightweight in nature yet achieve desired interrupt moderation using fraction of hypervisor compute resource. We further extend to offload the Linux kernel netdim library to virtio PCI hardware devices and discuss the performance results.

### 添付資料URL

- [slides](https://netdevconf.info/0x18/docs/netdev-0x18-paper37-talk-slides/Interrupt%20moderation%20approaches%20for%20virtio.pdf)（file）
- [video](https://www.youtube.com/watch?v=w9XLAw1OPlY)（link）

<a id="session-architectural-considerations-for-interplanetary-space-networking"></a>
## 24. Architectural considerations for Interplanetary Space Networking

- セッション個別URL: https://netdevconf.info/0x18/sessions/talk/architectural-considerations-for-interplanetary-space-networking.html
- Track: Talk
- 日時:  

### Description

Interplanetary and space communications (like to Mars) are inherently subject to significant delays and disruptions (i.e. we can’t go faster than the speed of light, and space is a rather hostile and unpredictable environment!). Interplanetary networking falls under the umbrella of Delay-tolerant networking, or DTN. DTN is an approach to network architecture that seeks to address the technical issues in heterogeneous networks that may lack continuous network connectivity. Traditional transport protocols including TCP don’t fare well in the presence of long delays, so alternative protocols are needed. The Licklider Transmission Protocol (LTP) is designed for DTN and is principally aimed at supporting “long-haul” reliable transmission in interplanetary space, but also has applications in mobile or extreme terrestrial environments.



In this paper we discuss the architectural considerations of DTN. We specifically focus on performance aspects of DTN implementation architectures, including domains of application such as the International Space Station (ISS) where DTN experiments with both traditional radio frequency and high data rate laser links are underway. We provide an overview of LTP and show that increasing the LTP segment size results in better DTN performance even when Internet Protocol (IP) fragmentation is invoked. We also show how network services and service differentiation with FAST can be applied to optimize interplanetary communications.

### 添付資料URL

- [slides](https://netdevconf.info/0x18/docs/netdev-0x18-paper42-talk-slides/Netdev0x18-DTN-PERF-final.pdf)（file）
- [video](https://www.youtube.com/watch?v=YVG9SsV7rOI)（link）

<a id="session-introduction-to-falcon-reliable-transport"></a>
## 25. Introduction to Falcon Reliable Transport

- セッション個別URL: https://netdevconf.info/0x18/sessions/talk/introduction-to-falcon-reliable-transport.html
- Track: Talk
- 日時:  

### Description

Falcon is a HW offloaded reliable transport designed by Google and published under the umbrella of Open Compute Project. It has been designed to to satisfy demanding workloads that require high burst bandwidth, high message rates, and low latency. Workloads such as storage have needed some of these attributes for a long time, however, with newer use cases such as massive-scale AI/ML training and high performance computing (HPC), the need has grown significantly. Falcon incorporates our learnings in traffic shaping, congestion control, load balancing, and more. As a hardware-assisted transport layer, Falcon is designed to be reliable, high performance, and low latency and leverages production-proven technologies including Carousel, Snap, Swift, PLB, and CSIG.  Falcon authenticates and encrypts all ULP data on a per-connection basis using the Paddywhack Security Protocol (PSP ) or the IPSEC ESP protocol. Falcon is available on the Intel IPU E2000 series of products.



This talk will focus on Falcon software enablement for the Intel IPU E2000 on Linux. It will include details of connection setup, key exchange and integration with the rdma-core/ibverbs framework. We will also discuss proposed extensions to support advanced features such as unordered connections.

### 添付資料URL

- [slides](https://netdevconf.info/0x18/docs/netdev-0x18-paper43-talk-slides/Introduction%20to%20Falcon%20Reliable%20Transport.pdf)（file）
- [video](https://www.youtube.com/watch?v=5KwY_x0Or94)（link）

<a id="session-shared-memory-pool-for-representors"></a>
## 26. Shared Memory Pool for Representors

- セッション個別URL: https://netdevconf.info/0x18/sessions/talk/shared-memory-pool-for-representors.html
- Track: Talk
- 日時:  

### Description

In switchdev mode, representors are slow-path ports that handle the miss traffic, i.e., traffic not being forwarded by the hardware. Representor ports are regular netdevices, with multiple channels consuming DMA memory. Memory consumption of the representor port’s RX buffers can grow to several GB when scaling to 1k VFs representors. For example, in mlx5 driver, each RQ, with a typical 1K descriptors, consumes 3MB of DMA memory for packet buffer in descriptors, and with four channels, it consumes 4 * 3MB * 1024 = 12GB of memory. Since representor ports are for slow path traffic, most of these representor ports’ RX DMA memory is idle and wasted [1] when flows are forwarded directly in hardware to VFs.



A network device driver consists of several channels and each channel represents a NAPI context and a set of queues. Each device driver receives packets by setting up RQ (receive queue), and each RQ receives packets by pre-allocating a dedicated set of RX ring descriptors, with each descriptor pointing to a memory buffer. The shared memory pool is a descriptor and buffer sharing mechanism. It allows multiple RQs to use the RX ring descriptors from the shared descriptor pool. In other words, the RQ no longer has its own dedicated RX ring descriptors, which might be idle when there is no traffic, but it consumes the descriptors from the descriptor pool only when packets arrive.



We propose a new devlink eswitch attribute named “spool_size”, which enables all representors sharing the same memory pool from the uplink representor port. In the future, we want to explore more fine-grained api for shared memory pool, by introducing a new devlink API, called devlink-sd [4] (devlink shared descriptor). Devlink-sd allows users to differentiate representors: important representors can have its own non-shared RX ring for performance/latency reason.



[1] https://people.kernel.org/kuba/nic-memory-reserve
[2] https://lore.kernel.org/netdev/20240306231253.8100-1-witu@nvidia.com/
[3] https://lore.kernel.org/netdev/39dbf7f6-76e0-4319-97d8-24b54e788435@nvidia.com/
[4] https://lore.kernel.org/netdev/20240125223617.7298-1-witu@nvidia.com/

### 添付資料URL

- [slides](https://netdevconf.info/0x18/docs/netdev-0x18-paper41-talk-slides/slides-netdev18.pdf)（file）
- [paper](https://netdevconf.info/0x18/docs/netdev-0x18-paper41-talk-paper.pdf)（file）
- [video](https://www.youtube.com/watch?v=Uwot9rJgE3A)（link）

<a id="session-state-of-the-union-in-tcp-land"></a>
## 27. State of the union in TCP land

- セッション個別URL: https://netdevconf.info/0x18/sessions/talk/state-of-the-union-in-tcp-land.html
- Track: Talk
- 日時:  

### Description

This talk will describe recent changes in the Linux kernel and user space TCP world.

### 添付資料URL

- [slides](https://netdevconf.info/0x18/docs/netdev-0x18-paper46-talk-slides/State%20of%20the%20union%20in%20TCP%20land%20in%202024.pdf)（file）
- [video](https://www.youtube.com/watch?v=EPpPwlOxfKk)（link）

<a id="session-compilers-and-linkers-for-network-optimization"></a>
## 28. Compilers and Linkers for network optimization

- セッション個別URL: https://netdevconf.info/0x18/sessions/talk/compilers-and-linkers-for-network-optimization.html
- Track: Talk
- 日時:  

### Description

We will show how compilers are able to help with network code
  optimization and abstraction and the techniques we used throughout
  to achieve these.



One such technique is how we integrate Domain Specific Accelerators
  with the compiler stack in order to configure dsa instructions during
  the linking process or application load-time, and how we expanded this
  technique to general purpose instructions. This feature, tentatively
  called dynamic constant instantiation, gives performance of actual
  constants with data that is configurable at load time.



We will also demonstrate how we use pattern matching to turn network
  code written in a general purpose language (C) into highly optimized
  code, or even code for a domain specific architecture. To do this we
  created a custom C++ extension for pattern matching, that we use to
  analyze the Abstract Syntax Tree and LLVM Intermediate Representation
  generated by Clang. This data is then used by our LLVM and MLIR pipeline
  to create the final program for the desired architecture.

### 添付資料URL

- [slides](https://netdevconf.info/0x18/docs/netdev-0x18-paper48-talk-slides/Netdev0x18%20Compilers%20and%20Linkers%20for%20network%20optimization.pdf)（file）
- [video](https://www.youtube.com/watch?v=NWT3uGwo5jc)（link）

<a id="session-domain-specific-acclerators-for-networking"></a>
## 29. Domain Specific Acclerators for Networking

- セッション個別URL: https://netdevconf.info/0x18/sessions/talk/domain-specific-acclerators-for-networking.html
- Track: Talk
- 日時:  

### Description

Domain Specific Accelerators (DSA) is a technology that is revolutionizing the datacenter and server design. While DSA has made inroads in other domains, Domain Specific Accelerators for networking has not yet been fully explored. In this presentation we outline the goals, problems, and solutions to realize the benefits of DSA in networking.



We can define three manifestations of DSA for networking: offloads, acceleration instructions, and accelerator engines. For each of these, we’ll discuss the user API, advantages, and disadvantages of the method. For offload we’ll discuss how disconnects between software and hardware have prevented offloads from reaching their full potential, and propose a solution for a facility in Linux that ensures robust and correct offloads. We will also present two classes of acceleration instructions we’ve implemented in RISC-V to speed up networking processing in a CPU. Next, we present a message based interface over FIFOs for invoking hardware accelerators with an RPC like interface, and a method of accelerator pipelining to create “super accelerators”. We show how these three manifestations are complementary and can work in tandem to realize the benefits of hardware acceleration in the host networking data path.



A first class requirement in DSA for networking is ease-of-use. A programmer should be able to use DSA without having to understand the details of acceleration hardware. In the best case scenario, they just write simple and intuitive code for their datapath and compilers figure out how to turn code into optimized executables using DSA.Accordingly, compilers are an essential part of the solution for DSA for networking, and we will discuss some compiler innovations for dealing with Domain Specific Accelerators.

### 添付資料URL

- [slides](https://netdevconf.info/0x18/docs/netdev-0x18-paper50-talk-slides/Netdev0x18%20Offload%20infrastructure.pdf)（file）
- [video](https://www.youtube.com/watch?v=-36Uiie3c7M)（link）

<a id="session-linux-network-device-testing-an-easy-to-use-driver-and-firmware-testing-framework"></a>
## 30. Linux Network Device Testing - An easy to use driver and firmware testing framework

- セッション個別URL: https://netdevconf.info/0x18/sessions/talk/linux-network-device-testing-an-easy-to-use-driver-and-firmware-testing-framework.html
- Track: Talk
- 日時:  

### Description

In order to produce high quality drivers and firmware frequent testing
  must be done. This testing needs to happen not only in development CI’s
  but during NPI testing, kernel testings, manufacturing, and various
  other places where engineers are not network or even Linux experts.
  LNDT is an easy to use framework for driver and firmware testing
  allowing testing to be run with limited networking or Linux knowledge
  and developers to create tests easily quickly.

### 添付資料URL

- [slides](https://netdevconf.info/0x18/docs/netdev-0x18-paper52-talk-slides/LNDT.pdf)（file）
- [video](https://www.youtube.com/watch?v=XljPRmHXNv8)（link）

<a id="session-machine-learning-practices-in-network-traffic-across-data-centers"></a>
## 31. Machine Learning Practices in Network Traffic across Data Centers

- セッション個別URL: https://netdevconf.info/0x18/sessions/talk/machine-learning-practices-in-network-traffic-across-data-centers.html
- Track: Talk
- 日時:  

### Description

With the growth of users and increase of product lines, the demands of the network bandwidths also expands, making it a great challenge for the network engineers in network traffic management and capacity planning. Meanwhile, network traffic across data centers in different regions always has a higher cost than the network traffic within the same data center. Optimizing such traffic with a clear priority focus on networking landscape will help save the costs during the resource planning and operations. The network traffic data itself is also insightful by having different feature dimensions, such as the region and product pairs in source and destination, capacity, and traffic data with timestamps. With such data information, we are able to study the normal time series trends, and abnormal trends of unexpected increase or drop, which will help deliver a smoother product experience and save costs in the long run.



In this talk, we will share our practices of how machine learning, statistical profiling, and visualization techniques are applied with network traffic data. The following topics will be discussed:



  The discovery of trends in network traffic across different data centers, especially in the mid-term time range.


  Alerting system when network traffic will hit the “water level” or get close to the capacity in the recent future.


  Major contributors to the unexpected traffic to be labeled as a high priority focus.


  Projection tool to check capacity capability given the number of servers and product pairs on source and destination ends.




We will also briefly talk about the automation to make such practices a routine to enhance productivity.

### 添付資料URL

- [slides](https://netdevconf.info/0x18/docs/netdev-0x18-paper16-talk-slides/Machine%20Learning%20Practices%20in%20Network%20Traffic%20across%20Data%20Centers.pptx)（file）
- [video](https://www.youtube.com/watch?v=_BiuGrvAFkE)（link）

<a id="session-real-world-tips-tricks-and-notes-of-using-epoll-based-busy-polling-to-reduce-latency"></a>
## 32. Real world tips, tricks, and notes of using epoll-based busy polling to reduce latency

- セッション個別URL: https://netdevconf.info/0x18/sessions/tutorial/real-world-tips-tricks-and-notes-of-using-epoll-based-busy-polling-to-reduce-latency.html
- Track: Tutorial
- 日時:  

### Description

epoll-based busy polling can be a powerful way to reduce latency in network applications. Using it in your app is now easier since it can be enabled on a per-epoll context basis, but using it is still tricky without doing a deeper dive of the kernel networking code.



This talk will show what I learned trying to modify an open source application to use epoll-based busy polling, how to get it working on a machine with multiple NICs, what NIC features you may want to use alongside busy polling (like custom RSS contexts, per queue coalescing, etc), which metrics are helpful to measure in a production setting, and future directions the kernel can take to enhance busy polling further.

### 添付資料URL

- [slides](https://netdevconf.info/0x18/docs/netdev-0x18-paper10-talk-slides/Real%20world%20tips%2C%20tricks%2C%20and%20notes%20of%20using%20epoll-based%20busy%20polling%20v2.pdf)（file）
- [video](https://www.youtube.com/watch?v=3jvoWH481Dg)（link）

<a id="session-introduction-to-ptp-on-linux-apis"></a>
## 33. Introduction to PTP on Linux - APIs

- セッション個別URL: https://netdevconf.info/0x18/sessions/tutorial/introduction-to-ptp-on-linux-apis.html
- Track: Tutorial
- 日時:  

### Description

Are you looking for a way to achieve precise time? Then this talk is for you! It aims to provide a fundamental understanding of the components essential for synchronization and how they work together to achieve accurate time synchronization.



This presentation provides an overview of the Precision Time Protocol (PTP) APIs within the Linux Kernel, including key components such as POSIX clock APIs, relevant IOCTLs, and netdev socket options. It also examines the lifecycle of hardware timestamps on both the transmit and receive sides.



With socket options, users can manipulate timestamping behavior and enable various methods of generating timestamps, from hardware to software generated by the Networking stack. This allows for the seamless integration of time synchronization capabilities into applications using POSIX clock APIs.



In addition, it discusses the role of IOCTLs in configuring and interacting with PTP-enabled devices.



Finally, it concludes by addressing the major limitations of current APIs, specifically the lack of information about the quality of time on synchronized devices. We propose extensions that will make the APIs more robust and offer a solution to the problem of inaccurate time synchronization.



Join us for this informative talk and learn how to achieve precise time synchronization easily.

### 添付資料URL

- [slides](https://netdevconf.info/0x18/docs/netdev-0x18-paper39-talk-slides/netdev-intro-ptp-api.pdf)（file）
- [video](https://www.youtube.com/watch?v=R-IlVjza9gM)（link）

<a id="session-tutorial-ptp-from-scratch"></a>
## 34. Tutorial: PTP from scratch

- セッション個別URL: https://netdevconf.info/0x18/sessions/tutorial/tutorial-ptp-from-scratch.html
- Track: Tutorial
- 日時:  

### Description

This interactive session will teach you how to create and implement a driver for a PTP Hardware Clock (PHC) and link it with a network device capable of hardware timestamping.



The presentation will provide a step-by-step guide to accomplish this task based on the implementation in the netdevsim driver. The main focus will be on exposing the clock and timestamping functionality. You will gain hands-on experience with the process and insights into enabling the PHC and implementing the PTP-related kernel APIs.



The workshop will show how to integrate the ptp_mock driver with netdevsim and create a fully functional PTP implementation from scratch.



Additionally, you will grasp how to overcome the most common PTP-related issues that may arise in everyday work with the PTP stack.

### 添付資料URL

- [slides](https://netdevconf.info/0x18/docs/netdev-0x18-paper40-talk-slides/ptp-from-scratch.pdf)（file）
- [video](https://www.youtube.com/watch?v=txgekOBen6c)（link）

<a id="session-workshop-on-extension-headers"></a>
## 35. Workshop on Extension Headers

- セッション個別URL: https://netdevconf.info/0x18/sessions/workshop/workshop-on-extension-headers.html
- Track: Workshop
- 日時:  

### Description

This work shop is about IPv6 (and potentially IPv4) Extension Headers. Extension Headers, or EH, are a core part of IPv6 to make it an extensible protocol. This is an active area of interest as vairous forms of Extension Headers, especially Hop-by-Hop and Destination Options, are now being developed and deployed.



Some of the topics might include:




  Created and processing EH in eBPF


  Work to mitigate packet drop in the Internet due to the presence of EH


  Changes to Linux kernel to make them usable


  Use cases of Hop-by-Hop Options for host to network signaling (like QoS) or network to host signaling like (like switch congestion signaling)

### 添付資料URL

- [slides](https://netdevconf.info/0x18/docs/netdev-0x18-paper4-talk-slides/Extension%20headers.pdf)（file）
- [video](https://www.youtube.com/watch?v=WFmt49C45Y0)（link）

<a id="session-tc-workshop"></a>
## 36. TC Workshop

- セッション個別URL: https://netdevconf.info/0x18/sessions/workshop/tc-workshop.html
- Track: Workshop
- 日時:  

### Description

Face to Face discussions on different Traffic Control topics.



Agenda:
Review and continuation from the biweekly P4TC hardware offload discussions

### 添付資料URL

- [video](https://www.youtube.com/watch?v=ondwfGkwqNM)（link）

<a id="session-frrouting-workshop"></a>
## 37. FRRouting workshop

- セッション個別URL: https://netdevconf.info/0x18/sessions/workshop/frrouting-workshop.html
- Track: Workshop
- 日時:  

### Description

Edition ‘x18 of the FRRouting workshop is planned to cover:




  
    a dive into mgmtd, configuration dispatch, YANGification status et al.


  


  
    elaborations regarding the debug & tracing framework and further direction from the 3 independent approaches by this point


  


  
    ~next-hop group adaptation towards use for prefix-independent convergence and multistep/recursive-capable dataplanes~ this topic unfortunately did not make it into the workshop

### 添付資料URL

- [slides](https://netdevconf.info/0x18/docs/netdev-0x18-paper18-talk-slides/0x18-frr-combined.pdf)（file）
- [video](https://www.youtube.com/watch?v=jnIW5CXQs9w)（link）

<a id="session-ipsec-workshop"></a>
## 38. IPsec Workshop

- セッション個別URL: https://netdevconf.info/0x18/sessions/workshop/ipsec-workshop.html
- Track: Workshop
- 日時:  

### Description

The IPsec Workshop brings together IPsec specialists from the Linux
and IETF community. Topics for presentation and/or discussion can
be everything related to IPsec, like crypto, network security,
Linux xfrm, the IPsec protocol suite, or whatever else comes up.
We plan to have presentations, discussion and hacking hours.



The IPsec Workshop is an annual event. It was invitation based
in the past. This year we plan to open it for the Netdev conference
attendees to get new people into the community. The only requirement
we have is that everybody who plan to attend should contribute
with a presentation or discussion topic.

### 添付資料URL

- [video](https://www.youtube.com/watch?v=rLbJXPo1oqw)（link）

<a id="session-driver-and-hw-apis-workshop"></a>
## 39. Driver and H/W APIs Workshop

- セッション個別URL: https://netdevconf.info/0x18/sessions/workshop/driver-and-hw-apis-workshop.html
- Track: Workshop
- 日時:  

### Description

The driver and H/W APIs workshop is a forum for discussing issues
related to driver development and APIs (user and kernel) for
configuring, monitoring and debugging hardware. Discussion will be open
to anyone to present, though speakers will need to submit topics ahead
of time.



Suggested topics include



  devlink - extensions, shortcomings, …


  extension to memory pools


  new APIs for managing queues


  challenges of netdev / IB co-existence (e.g., driven by AI workloads)


  fwctl - a proposal for direct firmware access

### 添付資料URL

- [slides 1](https://netdevconf.info/0x18/docs/netdev-0x18-paper44-talk-slides/netdevconf-0x18.pdf)（file）
- [slides 2](https://netdevconf.info/0x18/docs/netdev-0x18-paper44-talk-slides/TimeUncertaintyAPI.pdf)（file）
- [video](https://www.youtube.com/watch?v=LfaQ12IqmoE)（link）

<a id="session-netfilter-mini-workshop"></a>
## 40. Netfilter Mini workshop

- セッション個別URL: https://netdevconf.info/0x18/sessions/workshop/netfilter-mini-workshop.html
- Track: Workshop
- 日時:  

### Description

TBA

### 添付資料URL

- [slides](https://netdevconf.info/0x18/docs/netdev-0x18-paper45-talk-slides/netdev-netfilter.pdf)（file）
- [video](https://www.youtube.com/watch?v=Ykx_XwNXt9A)（link）

<a id="session-my-fu-is-better-than-yours"></a>
## 41. My Fu is Better Than Yours!

- セッション個別URL: https://netdevconf.info/0x18/sessions/bof/my-fu-is-better-than-yours.html
- Track: Bof
- 日時:  

### Description

Back by popular demand!  Started at NetDev 0x17, it was such a big hit, we decided to try again.



This BoF is a free-form, guilt-free, open collaboration forum for people to come and share their cool hacks, development flows, testing flows, or whatever else seems neat that you want others to see.  Open sharing of these ideas can help someone optimize their own workflows, or you can optimize yours by hearing feedback or input on yours!



All are welcome to participate, in fact it’s encouraged!  Rumor has it that Jamal may even share something!!

### 添付資料URL

- [video](https://www.youtube.com/watch?v=SiLl7mwejzw)（link）

<a id="session-netdev-testing-automation"></a>
## 42. Netdev Testing & Automation

- セッション個別URL: https://netdevconf.info/0x18/sessions/bof/netdev-testing-automation.html
- Track: Bof
- 日時:  

### Description

A lot of effort went into improving our testing and automation over the last 12 months.
This talk will cover all aspects of our testing from the tests themselves, and the helper libraries we have, to the infrastructure which runs the test on patches posted to the list.



The talk will also include a quick update on the development statistics since netdev 0x17.

### 添付資料URL

- [slides](https://netdevconf.info/0x18/docs/netdev-0x18-paper29-talk-slides/NIPA%20%2724%20%281%29.pdf)（file）
- [video](https://www.youtube.com/watch?v=OgDgi4qo_U4)（link）

<a id="session-devmem-tcp-io-uring-zero-copy"></a>
## 43. Devmem TCP & io uring zero copy

- セッション個別URL: https://netdevconf.info/0x18/sessions/bof/devmem-tcp-io-uring-zero-copy.html
- Track: Bof
- 日時:  

### Description

We’d like to give a follow up talk on devmem TCP & io uring zero copy, without recycling any of the material shared in last year’s talks:



Devmem TCP: https://netdevconf.info/0x17/sessions/talk/device-memory-tcp.html



io uring zero copy: https://netdevconf.info/0x17/sessions/talk/fast-zc-rx-data-plane-using-io-uring.html



We’d like to talk about the introduction of the ‘network memory’ abstraction (netmem). Netmem is an abstraction over the struct page currently used by the page_pool and drivers. By shifting those components to use netmem instead of ‘struct page’ directly, we open the possibility for support of non-struct paged memory in the net stack. This abstraction will be used to support these currently undergoing efforts:




  dma-buf memory used in devmem TCP.


  io uring user memory used in zero copy io uring.




But also can be considered in other use cases, such as:




  Storage/NVMe/SSD memory.


  ‘remote’ memory (DRAM that happens to be not on the current host).


  GPU virtual addresses (not dma-buf).


  etc?




Additionally, we would like to talk about real world application results for the io uring zero copy. We would like to share performance results for our disaggregated storage service application utilizing io uring zero copy, as well as challenges in adopting the kernel feature.



Additionally we’d like to talk about the recently merged queue-management ndos:



https://patchwork.kernel.org/project/netdevbpf/list/?series=849760&state=*



The initial version of the queue management ndos allows the core net stack restart individual RX queues on a net device. This is useful for triggering a refill of the RX queue buffers after re configuring the RX queue. We plan to use these ndos to restart RX queues after they have been reconfigured for devmem TCP or io uring ZC. Additionally there are proposals to extend the queue management ndos to be the basic ops that execute various ethtool configurations as well as ndo_open/ndo_stop.

### 添付資料URL

- [slides](https://netdevconf.info/0x18/docs/netdev-0x18-paper36-talk-slides/io_uring%20ZC%20-%20NetDevConf%202024.pdf)（file）
- [video](https://www.youtube.com/watch?v=5hS4g8D6oa0)（link）

<a id="session-netdev-processes-community-and-respectreputation"></a>
## 44. Netdev Processes, Community, and Respect/Reputation

- セッション個別URL: https://netdevconf.info/0x18/sessions/bof/netdev-processes-community-and-respectreputation.html
- Track: Bof
- 日時:  

### Description

This talk will discuss how netdev operates, based around three things
which are happening all the time within netdev:



Submitting patches to netdev for merging
Being a Maintainer
Being a Reviewer



While discussing netdev specific things for these three topics, there
will be side discussions about how the Community operates and how
respect and reputation, often overlooked in discussions about
processes, is a key part of the operation of netdev, and Linux as a
whole.



The aim of this talk is not a detailed tutorial, although some hints
and tips will be presented. The aim is to highlight why things operate
as they do, and to form a framework to trigger community discussion
and questioning of what works well and where we have problems, what
can be improved in our processes and community.

### 添付資料URL

- [slides](https://netdevconf.info/0x18/docs/netdev-0x18-paper38-talk-slides/presentation.pdf)（file）
- [video](https://www.youtube.com/watch?v=i378gekg5rk)（link）

<a id="session-introduction-to-ultra-ethernet-consortium-10"></a>
## 45. Introduction to Ultra Ethernet Consortium 1.0

- セッション個別URL: https://netdevconf.info/0x18/sessions/bof/introduction-to-ultra-ethernet-consortium-10.html
- Track: Bof
- 日時:  

### Description

Introduction to Ultra Ethernet Consortium 1.0

### 添付資料URL

- [slides](https://netdevconf.info/0x18/docs/netdev-0x18-paper51-talk-slides/UEC%204%20NetDev%20summer%2724.pdf)（file）
- [video](https://www.youtube.com/watch?v=ogUV0UFw07U)（link）

<a id="session-keynote-casado"></a>
## 46. Fireside Chat with Martin Casado

- セッション個別URL: https://netdevconf.info/0x18/sessions/keynote/keynote-casado.html
- Track: Keynote
- 日時:  

### Description

掲載なし

### 添付資料URL

- [video](https://youtu.be/6ibBapb44Dk)（link）