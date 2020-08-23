---
id: accounts-permissions
title: Accounts and Permissions
sidebar_label: Accounts and Permissions
---

## Accounts

An **account** on EOSIO is a legible name for humans that get stored on the blockchain. An account can belong to an individual or group of individuals depending on the permissions configuration. An account is required in order to execute any transaction on the blockchain.

The account name must comply with certain requirements: characters from `a` to `z` in lower case, numbers from `1` to `5` and have 12 characters length. E. g. `latamlink12`.

Read more on [EOSIO accounts](https://developers.eos.io/welcome/latest/protocol/accounts_and_permissions/#2-accounts)

## Account Permissions

EOSIO allows to create custom hierarchical permissions that stem from the owner permission. A custom permission is basically a key that can only perform the actions you allow it to perform. 

Each account has two base permissions `owner` and` active`, `owner` a being recovery key that is kept ideally in cold storage and used only in case of wanting to change the `active` key. Apart from these two initial permissions, additional custom permissions can be configured.

 > **For example:** Any account can create a custom permission with its unique key pair to solely interact with a single contract. 

In this way EOSIO offers state of the art permissioning capabilities with huge flexibility to configure simple or complex built in to the base protocol. 

Account permissions also strengthen security in case someone who is unauthorized gets a hold of a private key, all they can ever do is the actions that key has been limited to execute.


## Authorizations

Any given account can define a mapping between any of its named permissions and a smart contract or action within that contract. This allows finer control over action authorizations which makes it very easy for accounts belonging to actors with different roles within an organization reflect the organizational structure on the blockchain.  

In other words each account's permission can be linked to an authority table used to determine whether a given action authorization can be satisfied

To get more information about these concepts, see [accounts and permissions documentation](https://developers.eos.io/welcome/latest/protocol/accounts_and_permissions).
