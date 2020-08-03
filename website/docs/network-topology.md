---
id: network-topology
title: Network Topology
sidebar_label: Network Topology
---

We present the following proposal for LAC-Chain network configuration using EOSIO nodes.

## Design principles
* **Trustless**, the correct and optimal functioning of the network, should not be based on trust between the entities that make up the network.

* **Horizontal scalability**, to be able to scale the network infrastructure to satisfy the growth of its demand in a simple way.

* **Read and write permissions** Use a permission system to grant permissions to write (push tx) or read (consumption of APIs or blocks by P2P).

* **MVP** This topology can be the base of an MVP without modifications to the native EOSIO network protocol.

## Proposed Topology

<img src="/img/diagramas/topologia-red.png#center" alt="Topologia de Red LatamLink" width="450"/>

- **Layer 1 ([Core](/docs/network-topology#Layer-1---core-network))** Red de validadores y nodos p2p para meshear entre ellos

	- **Layer 2 ([Bridge](/docs/network-topology#Layer-2---bridge))** Distribucion p2p entre validators p2p y boots

		- **Layer 3 ([Satellite](/docs/network-topology#layer-3---satellite))** Layer de consumo para writers y observers


![LatamLink Topology](/img/diagrams/network-topology.png)


## Layer 1 - Core Network
The core network is composed of the blocks producers who have been added to the consensus protocol group. The final computational power source is derived from the network core.


### Block Producers Nodes
In an EOSIO network these nodes are called block producers, they are in charge of generating blocks every 500ms. These nodes should only be connected to other nodes managed by the same entity.

### Validator p2p for other Validators
P2P node configured as part of the internal network of the validators.

## Layer 2 - Bridge

### Validator p2p out
Node configured to only broadcast blocks over p2p connections, allowed p2p out observers connect to this node.

### Validator p2p bidir
Node configured to accept p2p transactions from allowed nodes and send it to the validator.

### Boot p2p out
Node configured to accept blocks from p2p validators and only forward them to p2p and api observers, does not accept transactions.

### Boot p2p bidir
P2p node configured to update writer nodes with new blocks and in turn accept txs to send to validators

## Layer 3 - Satellite

### Writer p2p
Accepts transactions through p2p and sends them to layer 1 through a `boot-p2p-bidir`.
> for example: A wallet manages its own API and connects to the network through a p2p writer.

### Writer API
Accept http transaction push requests and send them to layer 1 through a `boot-p2p-bidir`

### Observer nodes p2p
An observer node p2p is a node that is consuming layer 1 information through a `boot-p2p-out`, it can only read the state of the blockchain.

### Observer nodes API
Node that allows requesting information from the blockchain through an http request, the use of dfuse is recommended.

## Architecture


### Node Discovery

Node Discovery Cycle

1. The entity configures a new node
1. The entity registers a new node with the committee including in its information, node type (`observer-api`,` writer-p2p`, `boot-p2p-bidir`, etc.) along with its public key for peering
1. The committee updates the node table in the smart contract with the node information to add this information
1. Nodes in the network that need it update their list of allowed pairs to add the new node to the nodes that are needed.
1. The new node confirms that it is connected to the network.


### Node Communication

For more information on how communication works between nodes in EOSIO networks, check out the [Developers Portal](https://developers.eos.io/welcome/latest/protocol/network_peer_protocol)

### Transactions

The cycle of a transaction is:

1. A client sends a transaction signed by https or by p2p to a writer node, either api or p2p.

1. The writer verifies the transaction

1. The writer broadcasted the transaction to the `boot-p2p-bidir` nodes

1. the `boot-p2p-bidir`, broadcasted the transaction to layer 1 (core)

1. The validator that is in schedule verifies the transaction and executes it.

1. The validator broadcastes the new block to layer 1 and layer 2

1. Layer 2 Boot Verify the New Block and Broadcast it to Layer 3


## Routes optimizations / Connections
The goal is to manage the network topology in a dynamic way using Smart Contracts.

In the [current BESU LAC-Chain topology](https://github.com/lacchain/besu-network/blob/master/TOPOLOGY_AND_ARCHITECTURE.md), the "boot" nodes can be connected to all nodes in the network (boot, validator and writer). At present, all "boot" nodes are connected to all nodes. This is not scalable and efficient. Alongside, the nodes are not restricted by the network to connect only to correspondent nodes (in other words, a writer with the boot, or validator with validator and boot), nor do they have the information about what kind of node each of them is. We need proportionalities to that information out of the chain.

## Cloud Infrastructure

LAC-Chain is interested in using automatic implementations in several clouds using tools like terraform.
- Take advantage of the tools in the cloud to improve the Layerbilities in the network.
- Explore the use of the key vaults in the cloud.
- Work with partners to open up cloud services in LAC-Chain on a SAAS basis.
