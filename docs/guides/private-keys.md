---
id: private-keys
title: Private Keys Management
sidebar_label: Private Keys
---

## 1. Generate private keys

Keys are a requirement to create an account on a blockchain. In most wallets you can generate new keys for EOSIO.

To generate them we will execute the following command in the terminal.

```bash
cleos create key
```
This command is going to generate private and public keys — we can create the number of keys we want. The cleos accounts, by default, come in pairs: one `active key` and one `owner key` (to recover the account in case of active key lost).

## 2. Create an account

In LACChain EOSIO network, there are several types of accounts. See the guide to create an account according to your user role:

- [End users](./create-account-final)
- [Apps or Contracts](./create-account-contract)
- [Non-Partner](./create-account-non-partner)
- [Partner](./create-account-partner)


## 3. Manage the wallet with cleos

Once the account is created, we must generate the wallet and identify it with the name of the account, which in this example is `hellocontract`, using the following command.

```
cleos wallet create -n hellocontract --to-console
```

At this moment, the keys are stored uniquely on the console, for which is necessary to create the wallet that will contain the keys. In this manner, we could access these keys with a unique password. We must import the keys in the wallet once at the time, writing the command:

```
cleos wallet import -n hellocontract
````

### 3.1 External Authenticators (Wallets)

The last important update for EOSJS included built-in support for the interchangeable signs providers; deleting the burden of managing the secure keys management of its scope and improving the interoperability. What is more important, this is great security improving that limits the exposition of the keys of a user in several applications to a unique reliable signs provider that mitigates the potential risks that can arise from malicious code or an error of the user when using blockchain applications.
