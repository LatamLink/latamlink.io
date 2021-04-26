---
id: privacy
title: Privacy
sidebar_label: Privacy
---

:::note Work in Progress
We are still working on this aspect of the network. Please refer to the [Project Roadmap](./roadmap).
:::

Blockchain technology provides the necessary tools to decentralize the information securely and unwaveringly. The introduction of Bitcoin made possible that thousand of nodes from around the world share and hold the same information. However, in the majority of the Blockchains, the central idea is to hold this information public for everyone accesses to it and verify it, without the necessity of a central authority. Therefore public blockchains are defined as *trustless*(no need to trust). However, a lot of companies and private entities that want to use the blockchain technology encounter with a very important question: how maintain the information private and at the same time keep the security and transparency of a public blockchain?

Privacy in LatamLink is focused on making data only available to a specific list of participants. In order to accomplish this a mechanism must be implemented that ensures transactions are ditributed only to a list of participants who can send private transactions among them.

This brings up a couple of questions:

- Which accounts can see the transaction ?
- Which nodes can see the transaction ?
- Which nodes can see the smart contract ? 
- Who manages the list of permitted actors ? (on chain vs. off-chain)

## LatamLink ZPK

Zero-Knowledge Proofs or Protocols, also known as ZKP, is one of the alternative methods explored in LatamLink to solve the privacy in blockchain challenge. ZPK is the method for which nodes operators can demonstrate that a transaction is valid without the necessity to reveal the values of the transaction. The fact that this added value of privacy can be obtained through the cryptography is useful for the people and private entities that benefit from the use of blockchain technology without the fear of sharing confidential information.

LatamLink aims to integrate new primitives (intrinsics) for the verification of ZKP natively available to the Smart Contracts (Dapps) for the construction of applications with privacy requirements and at the same time can be validated for the same agents in the network (BPs + Full Nodes), without the necessity to add new agents to the network.

### Privacy Transaction Manager

A Privacy Transaction Manager (PTM) is a mechanism used in several blockchain technologies to distribute private transactions by a peer-to-peer side-channel, where only the participants involved in the transaction receive the private payload. A pointer or hash of the transaction is registered in the publick blockchain, so the participants can check the intengrity and ordering of the private transactions. 

For instance **Hyperledger Besu**, another blockchain technology used in LACChain, Uses a PTM called Orion. Besu provides a pre-compile contract extension of the ethereum client that uses Orion keys to channel private transactions through Orion nodes to prevent data from being visible on the public network.

### Data privacy existent solutions in EOSIO
https://github.com/EOSIO/eosjs-ecc/issues/19#issuecomment-392941963

https://github.com/GetScatter/ScatterDesktop/issues/43
