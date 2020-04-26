---
id: accounts-permissions
title: Accounts and Permissions
sidebar_label: Accounts and Permissions
---

## Accounts

An account on EOSIO is a legible name for humans that get stored on the blockchain. An account can belong to an individual or group of individuals depending on the permissions configuration. An account is required in order to execute any transaction on the blockchain.

The account name must comply with certain requirements: characters from `a` to `z` in lower case, numbers from `1` to `5` and have 12 characters length. E. g. `latamlink12`.

## Permissions

EOSIO allows to create custom hierarchical permissions that stem from the owner permission. This allows finer control over action authorizations. It also strengthens security in case the active permission gets compromised.

Any given account can define a mapping between any of its named permissions and a smart contract or action within that contract.

## Authorizations
Each account's permission can be linked to an authority table used to determine whether a given action authorization can be satisfied

To get more information about these concepts, go [accounts and permissions documentation](https://developers.eos.io/welcome/latest/protocol/accounts_and_permissions).

## Wallets

The wallets are clients that store private keys associated with the permissions of one or more accounts. Ideally, a wallet has a locked state (encrypted) and unlock (unencrypted) that is protected by a high entropy password. In the EOSIO's distribution comes included a CLI client called `cleos` that interacts with lite client called `keosd`.