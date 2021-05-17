---
id: privacy
title: Privacy on EOSIO Blockchains
sidebar_label: Blockchain Privacy
---

Blockchain technology provides the necessary tools to decentralize the information securely and unwaveringly. The introduction of Bitcoin made possible that thousand of nodes from around the world share and hold the same information. However, in the majority of the Blockchains, the central idea is to hold this information public for everyone accesses to it and verify it, without the necessity of a central authority. Therefore public blockchains are defined as *trustless*(no need to trust). However, a lot of companies and private entities that want to use the blockchain technology encounter with a very important question: how maintain the information private and at the same time keep the security and transparency of a public blockchain?

## Technology Review of Blockchain Data Privacy Solutions
[This report](https://arxiv.org/pdf/2105.01316) reviews existing enterprise blockchain technologies - EOSIO powered systems, Hyperledger Fabric and Besu, Consensus Quorum, R3 Corda and Ernst and Young's Nightfall - that provide data privacy while leveraging the data integrity benefits of blockchain. By reviewing and comparing how and how well these technologies achieve data privacy, a snapshot is captured of the industry's current best practices and data privacy models. Major enterprise technologies are contrasted in parallel to EOSIO to better understand how EOSIO can evolve to meet the trends seen in enterprise blockchain privacy. The following strategies and trends were generally observed in these technologies:

**Cryptography:** the hashing algorithm was found to be the most used cryptographic primitive in enterprise or changeover privacy solutions. 

**Coordination via on-chain contracts:** a common strategy was to use a shared public ledger to coordinate data privacy groups and more generally managed identities and access control.

**Transaction and contract code sharing:** there was a variety of different levels of privacy around the business logic (smart contract code) visibility. Some solutions only allowed authorised peers to view code while others made this accessible to everybody that was a member of the shared ledger.

**Data migrations for data privacy applications:** significant challenges exist when using cryptographically stored data in terms of being able to run system upgrades.

**Multiple blockchain ledgers for data privacy:** solutions attempted to create a new private blockchain for every private data relationship which was eventually abandoned in favour of one shared ledger with private data collections/transactions that were anchored to the ledger with a hash in order to improve scaling.

[**View EOSIO Privacy Report**](https://arxiv.org/pdf/2105.01316)

## Privacy on EOSIO

Privacy in LACChain EOSIO is focused on making data only available to a specific list of participants. In order to accomplish this a mechanism must be implemented that ensures transactions are distributed only to a list of participants who can send private transactions among them.

This brings up a couple of questions:
- Which accounts can see the transaction ?
- Which nodes can see the transaction ?
- Which nodes can see the smart contract ? 
- Who manages the list of permitted actors ? (on chain vs. off-chain)

### LACChain EOSIO ZPK

Zero-Knowledge Proofs or Protocols, also known as ZKP, is one of the alternative methods explored in LACChain EOSIO to solve the privacy in blockchain challenge. ZPK is the method for which nodes operators can demonstrate that a transaction is valid without the necessity to reveal the values of the transaction. The fact that this added value of privacy can be obtained through the cryptography is useful for the people and private entities that benefit from the use of blockchain technology without the fear of sharing confidential information.

LACChain EOSIO aims to integrate new primitives (intrinsics) for the verification of ZKP natively available to the Smart Contracts (Dapps) for the construction of applications with privacy requirements and at the same time can be validated for the same agents in the network (BPs + Full Nodes), without the necessity to add new agents to the network.

### Privacy Transaction Manager

A Privacy Transaction Manager (PTM) is a mechanism used in several blockchain technologies to distribute private transactions by a peer-to-peer side-channel, where only the participants involved in the transaction receive the private payload. A pointer or hash of the transaction is registered in the public blockchain, so the participants can check the integrity and ordering of the private transactions. 

For instance **Hyperledger Besu**, another blockchain technology used in LACChain, Uses a PTM called Orion. Besu provides a pre-compile contract extension of the ethereum client that uses Orion keys to channel private transactions through Orion nodes to prevent data from being visible on the public network.

### Existing EOSIO Privacy Solutions
https://github.com/EOSIO/eosjs-ecc/issues/19#issuecomment-392941963

https://github.com/GetScatter/ScatterDesktop/issues/43

:::note Work in Progress
We are still working on this aspect of the documentation, if you want to improve the content you can learn [how to contribute](../guides/contribute). See the [Project Roadmap](./roadmap).
:::