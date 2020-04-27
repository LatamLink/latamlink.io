---
id: consensus-mechanism
title: Consensus Mechanism
sidebar_label: Consensus Mechanism
---

A consensus mechanism ensures that each new block that is added to the blockchain is accepted as the only version of the truth by all nodes on the network. In essence, a consensus algorithm aims to find a common agreement that is accepted for the whole network.

LatamLink will delegate the the authority to validate and write new blocks to a group of nodes that we call **Block Producers**.

## Proof of Authority (POA)

The group of block producers have the authority to write to the blockchain because this privilege was granted by a higher authority, the **permisioning committee**, who will be the maximum authority and who determines which nodes will be the block producing nodes.

### Permisioning Committee

LACChain is a public / permissioned blockchain which aims to become a legally supervised network. This objective requires a central authority to govern the activity of the network.

LACChain is designed under the principle that the permisioning committee is transparent and has as little intervention as possible.

The authority of the permisioning committee can be derived from a set of actors through multi-signature [`multisig`]( https://developers.eos.io/manuals/eosjs/v21.0/how-to-guides/how-to-propose-a-multisig-transaction/#gatsby-focus-wrapper) approvals so that the group's consensus is required by way of a simple majority, that is, the votes gathered sum 1/2 +1 of the actors.

One of the main functions of the permisioning committee is to evaluate the entities that want to register as block producers.

> Any entity that meets a minimum of technical and legal requirements can apply to be a block producer on LatamLink.

Eventually there will be a legal vehicle, who verifies identity and signs contracts with block producers.

## Active Blocks Producers

The accounts authorized as active block producers belong to a group that shares the responsibility of validating and writing all the transactions in the network.

They are able to recognize the signatures of other nodes and verify that the transactions have been transmitted to the network by authorized nodes through white lists in smart contracts.

An EOSIO network is configured by default to use 21 active producers and a series of reserve producers for stable operation.

**The appropriate fixed number of active producers for the LatamLink network remains to be defined.**

> EOSIO allows up to 125 active block producers, specified by `max_producers` in [config.hpp](https://github.com/EOSIO/eos/blob/master/libraries/chain/include/eosio/chain/config.hpp#L106)

## Block producer schedule

In EOSIO networks, active block producers are listed on a list, called **`schedule`**.

The schedule is arranged alphabetically and thus defines the sequence in which block producers must sign blocks.

Each producer receives a 12 block window to sign before the next producer starts their window. New blocks are produced by the first node in the list for a period of 6 seconds (12 blocks) and then the next node continues to produce the next 12 blocks and so on.

If a producer node is not ready or unavailable, there is no one to produce the 12 blocks, so all speculative transactions are delayed until the next producer starts signing.


### Byzantine Fault Tolerance

New blocks are considered reversible until they have been validated by 2/3 +1 of the active producers. This way if a producer node inserts an invalid block, the following nodes will reject it and the block will not be included unless 2/3 +1 of the producers group approve it.

> **Example:** A network of 21 active producers requires validation of 15 nodes (2/3 +1), which takes on average 90 seconds to obtain irreversibility of a new block.

### Node Fault Tolerance

Once a block is signed, other producers on the schedule validate it and it goes into an irreversible state after 2/3 + 1 producers have signed. So if 1/3 or more of all producers are offline, the last irreversible block number, known as **Last Irreversible Block** or **LIB**, would not increase and the blockchain will stop.

Servers sometimes fail, and sometimes must be decommissioned for software updates and system maintenance, which is important to consider on small EOSIO networks.

With only 5 producers, the network will tolerate 1 producer going offline. If more than one is offline, the number of the Last Irreversible Block will stop increasing and the network will stop. With 4 nodes, a single failed a node will stall the network. With 9 producers, two nodes can be disconnected without breaking the network.

It is also important that private keys used by production nodes are properly backed up. If block producer keys are lost due to a system disaster, there is a chance that the network will stop working forever.


## Stand-By Block Producers

EOSIO networks keep a list of registered block producer accounts that run nodes that can successfully produce blocks just by being added to the schedule of active producers by the permisioning committee.

### Block Producer Rotation 

The periodic rotation of active block producing nodes in the schedule favors decentralization. For this reason, the permisioning committee will have a [network management tool](https://latamlink.io/docs/network-governance) that allows selecting the block producers that it wants to include or exclude in the schedule.

> **For example:** You can define a weekly active node rotation policy.

Later on, periodic and automatic rotation based on smart contracts will be enabled. In such a way that it is impossible to predict who are the producers of selected active blocks. (external entropy)

### Replacement of an active Block Producer
If a node on the schedule stops responding. The permisioning committee may manually replace block producers with performance or security issues.

Eventually, a smart contract may be implemented to replace a block producer's account in the schedule automatically based on objective performance metrics.

**An optimal number of backup blocks producers is still undefined for LACChain.**


## Node traceability
LACCHain currently runs a Hyperledger BESU IBFT 2 network, where it cannot trace which node relayed a transaction, so it is not possible to make them legally responsible for it.

It is necessary to verify that in LatamLink any transaction that is issued is propagated by a node that is in the list of accounts authorized by the permitting committee.

This traceability may require modifying the EOSIO transaction protocol to include the signature of the front node so that the other nodes are able to recognize through which node the transactions have entered the network. 

**This requires further investigation**



## Custom EOSIO system contracts

LACChain will use tailored system contracts. Building over the native EOSIO system contracts, where the main changes lie replacing native **Delegated Proof of Stake (dPOS)** mechanism with LAC-Chain **Proof of Authority (POA)**.

This change involves disabling the use of tokens and voting features of the DPOS protocol. It will also no longer be necessary to issue a system token.

### Disabled dPOS functions :
- System Token
- Block Producer Voting
- Block Producer Payment
- Staking for resources
- Delegation of Resources
- Namebiding
- Resource Exchange (REX)

This functionality will not necessarily be removed, but an “assert false” function will be used to disable the functions since these functions are not required.

In essence, the LAC Chain system contracts define a mechanism to register the block producers as well as allocate **system resources** required by the network user accounts to execute their smart contracts.

