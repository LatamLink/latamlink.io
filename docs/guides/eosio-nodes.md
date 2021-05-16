---
id: eosio-nodes
title: Infrastructure Considerations 
sidebar_label: Infrastructure Notes
---

`Nodeos` is the core software of an EOSIO blockchain. It is a deamon that performs all the functions of a blockchain node, such as synchronization with other nodes through the `p2p protocol`, provides an` HTTP API` for the client software and optionally `signs blocks` if configured with the account of a validator.

`Nodeos` is available in source code and binary packages in the [GitHub repository](https://github.com/EOSIO/eos/releases). The supported platforms are Ubuntu 16.04 and 18.04, RHEL7 and MacOS.

When planning a server installation, you have several options to select from. Often times, the selection is determined by the existing habits and preferences of the system administrator.

Consult our guide on how to configure the [development environment](../guides/development-environment) to be able to work on the LACChain EOSIO network.

### Hardware Requirements

he characteristics of a server are highly dependent on the requirements of the network. High traffic networks like the EOS mainnet require a dedicated server with directly connected SSD or NVMe, at least for node status files. Some hosting providers allow a combination of HDD and SSD on the same physical server, and lock logging and status history file that can be stored on hard drives.

> A typical server in production would have at least 500GB of SSD storage, 32GB of RAM, and a 3.5Ghz or faster CPU.

Low traffic networks and test networks would be working fine on virtual VPS servers. Usually 8GB of RAM and a couple of CPU cores are sufficient.

### Storage

Block logging and status history can require significant storage space.

Performance wise, nodeos requires access to its shared memory state with the least possible delay. Therefore, the directory containing the status data must reside on SSD or NVMe storage. Other directories, such as blocks and status history, are quite low in performance requirements, and hard drives are fine for this job.

### File System

ZFS is a file system developed by Sun Microsystems and used in its Solaris operating environment. The file system has been ported to the Linux kernel and is available immediately in Ubuntu 18.04

Other file systems of choice would be ext4 and XFS. They are stable and work well, although ZFS offers a number of unique features to take advantage of:

- Fast and cost-efficient backups. It takes a fraction of a second to create a new backup of a ZFS file system, and backups are lighter in size since only changes are added to the node data. The backup content can later be copied to some other media or remote location without interrupting service.

- Fast compression lz4. Even on NVMe, compression does not add any visible lag to disk performance, saving up to 30% in the block log file and up to 50% in the status file. It also reduces storage I / O traffic, allowing increased performance.

- Easy creation of as many file systems as needed, and each file system would have its own mount point, log size, caching policy, and compression settings. This allows storage to be adjusted according to application needs.

LVM may or may not be used, and it is up to the system administrator to define the standard policy. Also, some hosting providers, such as IONOS, are pre-configuring the servers with LVM, making it easier to use than to remove it.

### Containers and Virtualization

Typically, a server would run multiple node processes for different purposes and possibly even for different networks. Each system administrator must select a strategy for placing node processes on a server. Below we include a summary of the main strategies used.

#### Without containers

The nodes will run directly on the main host space. The benefit is easier maintenance and, in some cases, better performance. The downside is that the EOSIO binary package installs the binaries in a common location, and if multiple node processes are running on the server, they all need to be updated simultaneously.

#### LXC containers

Most Linux distributions offer LXC container functionality. Debian assumes that you know how to configure a network for containers, while Ubuntu preconfigures an internal bridge with addresses in the 10.0.3.0/24 range and a DHCP service on it. The addressing is easy to change, and also the DHCP service can be configured with static address assignments for your containers. When created, a container is minimal Linux OS and you need to install additional packages as needed (even syslog and ping are not present from the beginning). Containers are easy to maintain and one of the benefits is that you can select a different Linux distribution or version than the one the host is running.

#### KVM, Xen, VmWare virtualization

There is some overhead in CPU operation, and full virtualization is not normally used in the EOSIO environment. However, it could be usable, especially if it is already part of standard IT processes.

#### Docker containers

They use the same underlying technology as LXC, but there are a number of additional features, such as automatic deployment. For this reason it has been decided to implement the services as docker containers.

### Networking

Network design and security must be carefully planned. Considering

In most hosting provider environments, physical machines face the public internet directly without any firewall in front of them. Some providers offer a firewall in front of a server, optional or mandatory.

A nodeos process usually listens on 2 or 3 TCP ports: the p2p endpoint, the HTTP API, and optionally the status history plugin websocket.

Also, nodeos usually establishes outgoing TCP connections to its p2p peers as specified in its configuration.

#### Load balancers

Some hosting providers offer load balancers in front of the servers. A load balancer generally monitors connectivity to back-end servers and stops sending requests to a server that stops responding, or some custom monitoring condition is met. Typically they also allow you to pause traffic to one of the servers and take it down for maintenance and updates.