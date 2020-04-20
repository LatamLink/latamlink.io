---
id: eosio
title: EOSIO's Testnet for LAC-Chain
sidebar_label: EOSIO Protocol
---

**EOSIO** is open source software that allows launching highly configurable blockchain networks on which developers and entrepreneurs can run high performant blockchain applications. [EOSIO](https://eos.io) was created in 2018 and is maintained by [Block One](https://block.one).  The first public network launched on EOSIO is called **EOS**, also referred as "mainnet". EOS is one of the multiple public blockchain networks actually using EOSIO. You can see the following [EOSIO network list](redes-eosio.md). Also there are multiple private networks using EOSIO.

Some innovative features include:

- **Free transactions** with consumption limits. [![EOSIO Github](/img/eosio-logo.png#right)](https://github.com/eosio)
- **Low latency** confirming new blocks  *(0.5 seconds)*
- **Byzantine Fault Tolerance**
- **Human Readable Account Names** *(e.g. :* `latamlink12` *)*
- **ACL Permissions** based on hierarchical roles
- Updatable contracts **written in C++**.
- Support for keys protected by **biometric hardware** *(e.g. : Apple Secure Enclave)*
- Designed for **Inter-Blockchain communication**

Another important feature of EOSIO based blockchain networks is it's flexible architecture, with which many of the operation rules are defined through the **system contracts**.

This flexibility is due to a set of smart contracts seperated from the EOSIO core protocol. Because of this, the core funtionality that validates blocks and transactions is separated from the system contracts.

The system contracts allow EOSIO networks:

- Easily configure the network governance through Smart Contracts.
- To have transparent rules for the operation of the system.
- Synchronize the changes in the operation rules in a instantaneous way in the whole network, which reduce the administration and the cost of the governance updates.
- Maintain the total compatibility with other EOSIO blockchains.


**The objective of LatamLink is implement the EOSIO testnet for LAC-Chain** and demonstrate the flexibility of this technology developing customized system contracts for LAC-Chain. The LatamLink testnet will allow to designate actors that write and validate new blocks to the blockchain through system contracts based on Proof-of-Authority (POA) consensus mechanisms in a public permissioned blockchain.
