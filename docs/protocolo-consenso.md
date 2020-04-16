---
id: protocolo-consenso
title: Consensus Mechanism
sidebar_label: Consensus Mechanism
---

The consensus mechanism ensures that each new block that is added to the Blockchain be the unique versión of the agreed truth for the whole nodes in the network. Henceforth, a consensus algorithm aims to find a common agreement that is accepted for the whole network.

In the case of LatamLink, there is a group of nodes that have transactions validation authority and write these transactions within new blocks. We call these nodes **Block Producers**.

## Proof of Authority (POA)

The Block Producers group have the authority to write to the blockchain because were granted the privilege by the superior authority, the permissioner committee, who will be the maximum authority and who determines which nodes will be the block producers.

Anyone who meets with a minimum of technical requirements could apply to be a writer or validator.

## Active Blocks Producers

An adequate fixed number is defined

- Up to **125 active blocks producers**, specified through `max_producers` in [config.hpp](https://github.com/EOSIO/eos/blob/master/libraries/chain/include/eosio/chain/config.hpp#L106)


The blocks producers nodes belong to a group that shares the responsibility of validating and writing all the transactions in the network.

Are capable of recognizing the writer nodes signs and verify that the transactions have been issued to the network by authorized writer nodes in the smart contract for its authorization.

This group is organized in one list in alphabetical order.

The new blocks are produced by the first node in the list during 6 seconds (12 blocks) and then pass the next node to produce the next 12 blocks and so on.

### Active nodes rotation

- A Smart Contract based rotation is enabled (random) without the ability to predict who will be (external entropy)

- The nodes also are rotated periodically in function to the decentralization and performance. Weekly?

- The active nodes and the backup ones could be changed automatically when operation failures are detected.


### Blocks Irreversibility

The blocks are not considered irreversible until have been validated by 2/3 + 1 of the active producers. In that way, if a producer of the group inserts an invalid transaction the following nodes will validate the transactions and these will not be included without 2/3 + 1 approval.


## Backup nodes
- If there is a performance problem, a backup node comes in
- Through objective performance metrics.

Manual or automatic?

-  Oracle Smart Contracts
-  Permissioner Committee

An optimal number of backup nodes is required.


## Nodes traceability
The nodes can recognize through that node has inserted the transactions to the network, transactions broadcasters (full nodes)

Verify that the transaction was issued by a node that is permissioned.

This traceability possibly requires to modify the transaction structure to include the node sign.

(actually, this is not allowed in BESU IBFT 2) (empty blocks problem)

Cannot verify who is the validator node that can write.

- Which manages that list?

Nowadays, cannot trace which writer node generated that transaction, so is not possible to hold them legally responsible for it.



## Permissioner Committee

Evals entities that want to be validators (BID)

Eventually will be a legal vehicle, who verifies the identity and sign contracts with blocks producers.

This Central Authority could be derivated from a conjunct of actors through multi-signature approvals (multi-sig), in that way as to require from the consensus of the group through the simple majority approval, namely, that the votes are gathered from the half of the actors plus one additional at least.

- Permissioner committee that has the minimum possible intervention. However, to be a public network that is needed

## System Contracts

The validation mechanism will be available for LAC-Chain via customized system contracts. For this, we will base on EOSIO's native system contracts.  Change from DPOS to POA for LAC-Chain

This change implies disable the use of the token and the characteristics votes of the DPOS protocol. Namely, at the moment when turning over resources, will not be necessary to have tokens. This functionality not necessarily will be removed, but "assert false" function will be used to disable the functions since the platform does not support these functions.

Disabled functions:

 - System Token
 - Votes for Block Producers
 - Blocks Producers Payment
 - "Staking" for resources
 - Resources delegation
 - Name binding
 - Rex

