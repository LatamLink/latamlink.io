---
id: cuentas-permisos
title: Accounts and Permissions
sidebar_label: Accounts and Permissions
---

## Accounts

An account on EOSIO is a legible name for humans that get stored in the blockchain. Could be property of and individual or group of individuals depending of the configuration of the permits. Is required an account to transfer or send whatever valid transaction to the blockchain.

The account name must comply with certain requirements: characters from `a` to `z` in lower case, numbers from `1` to `5` and have 12 characters length. E. g. `latamlink12`.

## Authorizations and Permissions

The Permissions are arbitrary names used to define the requirements of a transactions sent in name of that permit. The permissions can be assigned to the authority about contractual actions.

To get more information about these concepts, go \[accounts and permissions documentation\](https://developers. eos. io/welcome/latest/protocol/accounts_and_permissions).


## Wallets

The wallets are clients that store private keys associated with the permissions of one or more accounts. Ideally, a wallet has a locked state (encrypted) and unlock (unencrypted) that is protected by a high entropy password. In the EOSIO's distribution comes included a CLI client called `cleos` that interacts with lite client called `keosd`.