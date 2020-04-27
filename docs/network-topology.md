---
id: network-topology
title: Network Topology
sidebar_label: Network Topology
---


<img src="/img/diagramas/topologia-red.png" alt="LatamLink Network Typology" width="450" />

## Network Core
The core network is composed of the blocks producers who have been added to the consensus protocol group. The final computational power source is derived from the network core.

![Core Network Typology](/img/diagramas/red-core.png)

### Blocks Producers Nodes
Nodes that execute the Smart Contracts and add new blocks to the chain. They are the network custodians that writes the blockchain that the rest of the network will validate.

### Backup Block Producers
Block Producers that can assume the blocks producers role if anyone of the main group stops responding.

## Access Network

![Network Access typology](/img/diagramas/red-de-acceso.png)

### API Nodes
Provide access to the network through the API server over HTTPS. Can be configured as several nodes behind a proxy/load balancer. Also is recommendable some type of protection against DDOS since it's the service with direct contact with public networks.

### Full Nodes
Maintain a complete full history of the transactions in a conventional database that facilitates the data query of the transactions on the chain.

### Seed Nodes
Provide access to the block producers, they connect directly to the producers and the API nodes.

## Consumer Network

The consumption network uses the access network for writing and reading the blockchain. Is composed of all applications and users that interact with the blockchain. The user's interaction and applications are made through digital signature providers or wallets and library like EOSJS.

![Consumption Network Typology](/img/diagramas/red-consumo.png)

### Routes optimizations / Connections
The goal is to manage the network topology in a dynamic way using Smart Contracts.

In the [actual LAC-Chain's topology](https://github.com/lacchain/besu-network/blob/master/TOPOLOGY_AND_ARCHITECTURE.md), the "boot" nodes can be connected to all nodes in the network (boot, validator and writer). At present, all "boot" nodes are connected to all nodes. This is not scalable and efficient. Alongside, the nodes are not restricted by the network to connect only to correspondent nodes (in other words, a writer with the boot, or validator with validator and boot), nor do they have the information about what kind of node each of them is. We need proportionalities to that information out of the chain.


### Cloud Infrastructure

LAC-Chain is interested in using automatic implementations in several clouds using tools like terraform.
- Take advantage of the tools in the cloud to improve the capabilities in the network.
- Explore the use of the key vaults in the cloud.
- Work with partners to open up cloud services in LAC-Chain on a SAAS basis.
