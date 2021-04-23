---
id: create-account-final
title: Get an Account for an End Users
sidebar_label: End Users Accounts
---

:::note Work in Progress
We are still working on this aspect of the network. Please refer to the [Project Roadmap](../testnet/roadmap).
:::

## Create account using an application

In the LACChain EOSIO network, end user accounts can be created through partner applications or contracts.

Here is a list of projects in which they make use of account accounts in LACChain EOSIO:

- [LifeBank](https://lifebank.io/)
- [Inmutrust](https://lifebank.io/)
- [SMARTGATE](https://smartgate.tech/)
- [Notario Digital](https://notarize.eosio.cr/dashboard/notary)
- [EOS Mechanics](https://lifebank.io/)

## Create an account by a partner

### 1. Generate private keys

Keys are a requirement to create an account on a blockchain. See the following tutorial to create [private keys](./private-keys).

###  2. Request an account from a Partner

In order to create an account in LACChain EOSIO, it is necessary to establish communication with a `partner`, who are in charge of creating the accounts.

Below is a list of `partners` who can generate accounts. 

- [EOS Argentina](https://www.eosargentina.io/)
- [EOS Costa Rica](https://es.eoscostarica.io/)
- [EOS Venezuela](https://eosvenezuela.io//)


The account name must meet certain requirements: characters from A to Z in lowercase, numbers from 1 to 5 and be 12 characters long. For the example, we will call the account: `hellocontract`.