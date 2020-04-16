---
id: eosio
title: EOSIO's Testnet for LAC-Chain
sidebar_label: EOSIO Protocol
---

**EOSIO** is open source software that allows launch blockchain networks highly configurable on which the developers and entrepreneurs can run high performant blockchain applications. [EOSIO](https://eos.io) was created in 2018 and is maintained by the company [Block One](https://block.one).  The first public network launched on EOSIO is called **EOS**, also referred as "mainnet". EOS is one of the multiple public blockchain networks actually using EOSIO. You can see the following [EOSIO network list](redes-eosio.md). Also there are multiple private networks that actually uses EOSIO.

Some of the innovative characteristics include:

- **Free transactions** with consumption limits. [![EOSIO Github](/img/eosio-logo.png#right)](https://github.com/eosio)
- **Low latency** confirming new blocks  *(0.5 seconds)*
- **Byzantine Fault Tolerance**
- **Account names legible for humans** *(e.g. :* `latamlink12` *)*
- **ACL Permissions** based on hierarchical roles
- Updatable contracts **written in C++ ** facilitate the use to the programmers.
- Support for keys protected by **biometric hardware***(e.g. : Apple Secure Enclave)*
- Designed for **Inter-Blockchain communication**

Another important characteristic of a EOSIO based blockchain network is that has a flexible architecture, in which great part of the operation rules are defined through the **system contracts**.

This flexibility is because system contracts constitute a separate module from EOSIO base protocol. On this way, the nodes central functions and the blocks production mechanism is maintained separated from the system contracts.

The system contracts allow EOSIO networks:

- Easily configure the network governance through Smart Contracts.
- To have transparent rules for the operation of the system.
- Synchronize the changes in the operation rules in a instantaneous way in the whole network, which reduce the administration and the cost of the governance updates.
- Maintain the total compatibility with other EOSIO blockchains.


**The objective of LatamLink is implement the EOSIO testnet for LAC-Chain** and demonstrate the flexibility of this technology developing customized system contracts for LAC-Chain. The LatamLink testnet will allow to designate actors that write and validate new blocks to the blockchain through system contracts based on Proof-of-Authority (POA) consensus mechanisms in a public permissioned blockchain.
