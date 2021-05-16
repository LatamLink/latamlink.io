---
id: create-contract-account
title: Register a Smart Contract Account
sidebar_label: How to Register as an App
---

Any EOSIO account can be used to deploy a smart contract for the development of applications. An account must however have enough RAM memory to store a smart contract. RAM memory is acquired through partners on the network.

## Create an account through a partner

### 1. Generate a key pair

Keys are a requirement to create an account on a blockchain. See the following tutorial to create [private keys](./private-keys). Once you create your key pair, public and private keys, **you must only share the public key** when requesting a new account on LACChain EOSIO.

###  2. Request an account from a Partner

In order to create an account in LACChain EOSIO, it is necessary to establish communication with a `partner`, who have the capacity to create new accounts.

To see the list of partners that are part of the network go [here](./partners).

> **New account names must meet the following criteria:**
 - Not be previously registered
 - Be composed of characters from A to Z in lowercase, numbers from 1 to 5 
 - For the example we may call an account: `hellocontract`.

 ###  3. Request resources from a Partner

 Please refer to the following article [obtain resources](get-resources)

:::note Work in Progress
We are still working on this aspect of the documentation, if you want to improve the content you can learn [how to contribute](./contribute). See the [Project Roadmap](../testnet/roadmap).
:::