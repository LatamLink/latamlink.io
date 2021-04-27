---
id: create-account-contract
title: Get an Account for an App or Smart Contract
sidebar_label: Apps or Contracts Accounts
---

:::note Work in Progress
We are still working on this aspect of the network. Please refer to the [Project Roadmap](../testnet/roadmap).
:::

The application or contract accounts are used for the development of applications as their name indicates, this type of accounts are mainly those that own the actions of the system, allowing end users to interact with them and the blockchain.

## Create an account by a partner

### 1. Generate private keys

Keys are a requirement to create an account on a blockchain. See the following tutorial to create [private keys](./private-keys).

###  2. Request an account from a Partner

In order to create an account in LACChain EOSIO, it is necessary to establish communication with a `partner`, who are in charge of creating the accounts.

To see the list of partners that are part of the network go [here](./partners).

The account name must meet certain requirements: characters from A to Z in lowercase, numbers from 1 to 5 and be 12 characters long. For the example, we will call the account: `hellocontract`.
