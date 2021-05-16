---
id: private-keys
title: Public and Private Key Management
sidebar_label: Public and Private Keys
---

## 1. Generate public + private key pair

Keys are a requirement to create an account on a blockchain. In most wallets you can generate new keys for EOSIO.

To generate them we will execute the following command in the terminal.

```bash
cleos create key --to-console
```
This command is going to generate private and public keys — we can create the number of keys we want. The cleos accounts, by default, come in pairs: one `active key` and one `owner key` (to recover the account in case of active key lost).

## 2. Create an account

In LACChain EOSIO network, there are several types of accounts. See the guide to create an account according to your user role:

- [End users](./create-user-account)
- [Apps or Contracts](./create-contract-account)
- [Non-Partner](./create-entity-account)
- [Partner](./create-entity-account)


## 3. Manage the wallet with cleos

Once the account is created, we must generate the wallet and identify it with the name of the account, which in this example is `hellocontract`, using the following command.

```bash
cleos wallet create -n hellocontract --to-console
```

At this moment, the keys are stored uniquely on the console, for which is necessary to create the wallet that will contain the keys. In this manner, we could access these keys with a unique password. We must import the keys in the wallet once at the time, writing the command:

```bash
cleos wallet import -n hellocontract
```

### 3.1 Change private key

In case you want to change the private key of your account in LACChain EOSIO, you must follow the following steps:

#### Step 1: Create new keys

Create two new key pairs using

```bash
cleos create key --to-console
```

#### Step 2: Import keys

Import new keys to your wallet

```bash
cleos wallet import -n holacontrato
```

#### Step 3: Set permissions

Set the **owner** account permission

```bash
cleos -u https://lacchain.eosio.cr set account permission account_name owner EOS_public_key_of_new_owner -p account_name@owner
```

Set **active** account permission

```bash
cleos -u https://lacchain.eosio.cr set account permission account_name active EOS_private_key_of_new_active -p account_name@active
```

:::note Note
You must have the current owner key in your wallet to authorize this transaction.
:::
