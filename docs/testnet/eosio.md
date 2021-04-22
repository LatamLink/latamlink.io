---
id: eosio
title: LAC-Chain EOSIO Testnet
sidebar_label: EOSIO Protocol
---

**EOSIO** is an open-source software that enables users to launch highly configurable blockchain networks on which developers and entrepreneurs can run highly performant blockchain applications. [EOSIO](https://eos.io) was created in 2018 and is maintained by [Block One](https://block.one).  The first public network launched on EOSIO is called **EOS**, also referred as "mainnet". EOS is however just one of multiple public blockchain networks currently using EOSIO. Take a look at the following [EOSIO network list](eosio-networks.md). There are also multiple private networks currently using EOSIO.

Some innovative features of EOSIO include:

- **Free transactions** with consumption limits.
- **Low latency** confirming new blocks  *(0.5 seconds)*
- **Byzantine Fault Tolerance**
- **Human Readable Account Names** *(e.g. :* `latamlink12` *)*
- **ACL Permissions** based on hierarchical roles
- Updatable contracts **written in C++**.
- Support for keys protected by **biometric hardware** *(e.g. : Apple Secure Enclave)*
- Designed for **Inter-Blockchain communication**

Another important feature of EOSIO based blockchain networks is it's flexible architecture, because many of the network's "rules of engagement" are defined through **system contracts**.

This flexibility is achieved thanks to a set of smart contracts separated from the EOSIO core protocol. Because of this, the core functionality that validates blocks and transactions is separated from the system contracts.

**System contracts allow EOSIO networks to :**

- Easily configure the network governance through smart contracts.
- Have transparent rules for the operation of the system.
- Synchronize the changes in system contracts in a instantaneous way with the whole network, which reduces the administration costs and delays of any governance updates.
- Maintain total compatibility with other EOSIO blockchains.


**The objective of LatamLink is to implement an EOSIO testnet for [LACChain](https://medium.com/@lacchain.official/what-is-the-lacchain-global-alliance-and-what-does-it-consist-of-861cb76257b1)** and demonstrate the flexibility of this technology developing customized system contracts for LACChain's requirements. The LatamLink testnet will allow a **permisioning committee** to authorize actors that write and validate new blocks to the blockchain through system contracts based on **Proof-of-Authority (POA)** consensus mechanisms in a **public permissioned blockchain**.
