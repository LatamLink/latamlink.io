---
id: performance
title: Network security and Performance
sidebar_label: Security and Performance
---

:::note Work in Progress
We are still working on this aspect of the network. Please refer to the [Project Roadmap](./roadmap).
:::

It is essential to know the limits of the infrastructure from cybersecurity and performance perspective.

LatamLink plans to make cybersecurity analysis and evaluations in the infrastructure. As well as make coordinate stress tests.

## Transactions per seconds (TPS)
Depending on the use, EOSIO has the capability of **10,000 transactions per second** approximately using EOSIO v2.0.

### Contracts examples to test the performance

- [Performance tests Contract](https://github.com/CryptoLions/TxShooterContract)
- [EOS Blaster](https://github.com/michaeljyeates/eos-blaster)

## Quantum safe cryptography

 BID has an interest in beginning to explore how to go-ahead towards one new quantum-secure blockchain technology generation. There is an interest in testing the quantum capabilities of the LAC-Chain network to make it quantum-computers secure.

 > This topic is addressed in [this IADB publication](https://publications.iadb.org/es/tecnologias-cuanticas-una-oportunidad-transversal-e-interdisciplinar-para-la-transformacion-digital)

LatamLink will explore the way to generate certificates following the verifiable credentials standard [VC](https://www.w3.org/TR/vc-data-model/) to all nodes in the network which will have as an authentication mechanism one public-private key pairs generated with a quantum-secure algorithm.

In order to:

- Use these keys to encapsulate the process of [communication between nodes through TCP / RPLx](https://github.com/lacchain/besu-network/blob/master/TOPOLOGY_AND_ARCHITECTURE.md)
-  Use the quantum keys to sign the transactions issued by writer nodes, so that be verified by validators nodes
