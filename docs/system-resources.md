---
id: system-resources
title: System Resources
sidebar_label: System Resources
---

LAC-Chain doest not and will not have transaction fees. However, to limit the use of the network to its technical limits and avoid Distributed Denial of Service attacks, is necessary to establish a mechanism to require and assign resources in the network.

## Computational resources

The accounts will be able to use the following resources in the network:

### CPU
The CPU resource, in an EOSIO based blockchain, represents the processing time of an action and is measured in microseconds (μs).

This resource is referred to as `CPU bandwidth`, with the result of the command `cleos get account` processing time quantity that account has as its disposal when sending actions to a contract is indicated.

You can find more details about the CPU as a system resource [here](https://developers.eos.io/manuals/eosio.contracts/latest/key-concepts/cpu).

### RAM
In an EOSIO based blockchain, the RAM is one of the important system resources that the accounts and Smart Contracts consume. The RAM acts as permanent storage and is used to store the account name, permissions, tokens balances and other data for fast access. The RAM needs to be assigned since is a limited persistent resource, measured in KiloBytes.

You can find more details about RAM as a system resource[here](https://developers.eos.io/manuals/eosio.contracts/latest/key-concepts/ram).

### Network (NET)

Apart from CPU and RAM, NET is also a highly important resource in the EOSIO based blockchains. NET is the bandwidth, measured in bytes of transactions and it's called `net bandwidth` in the command `cleos get account`. Like the CPU, NET is also a transitory system resource.

You can find more details about NET as a system resource [here](https://developers.eos.io/manuals/eosio.contracts/latest/key-concepts/net).

## EOSIO privileged account

This account has unlimited resources access.  An account composed by Block Producers Group will be set up, or the permissioner committee that represents the maximum authority in the network.

Furthermore, a multi-signature contract will be used (multi-sig) with variables parameters that require the consent of the block producers majority in the table. This privileged account will be called the `eosio` account.

A multi-signature function is proposed to act as the `eosio` account to delegate the resources to other another account.

| # BPS | Required signs |
| ------ | -------------- |
| 1      | 1/1            |
| 2      | 2/2            |
| 3      | 2/3            |
| 4      | 3/4            |
| 5      | 3/5            |


 The `eosio` account will have unlimited resources. The authority will determine the quantity of each resource that will be assigned to the other accounts within the blockchain.


The resources are established directly athwart one transaction signed by the account `eosio`. This authorization should be obtained athwart a multi-signature process of the accounts of the chosen block producers. Moreover, will be able to use a function knows as "delegate function" without the necessity of using "EOS Staking" functions.

The fist function to establish resources is known as `set account resources`.

The second function is to establish limits and is known as `set account limits` `(eosio.bios: setalimits)`.


### Other options

#### API throttling
To accomplish the resources assignment functions, also there is the option to implement unlimited resources with one throttling in the API.

#### RAM Tokenization

The RAM can be tokenized


