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

## 4. External Authenticators (Wallets)

The last important update for EOSJS included built-in support for the interchangeable signs providers; deleting the burden of managing the secure keys management of its scope and improving the interoperability. What is more important, this is great security improving that limits the exposition of the keys of a user in several applications to a unique reliable signs provider that mitigates the potential risks that can arise from malicious code or an error of the user when using blockchain applications.

### 4.1 External Authenticators Configuration (Anchor Wallet)

To use external authenticators in LACChain EOSIO such as Anchor Wallet, a configuration must be made to include the network within the networks available in the authenticator, below, a tutorial is shown where this process is explained.

#### Step 1: download and install

In this case the authenticator [Anchor Wallet](https://greymass.com/en/anchor/) is used.

#### Step 2: add the network

Once the Anchor Wallet installation is done, you should go to the **Manage Available Blockchains** window, there press the **Add/Remove** button.

![Manage Available Blockchains](/img/tutorials/add_network.png)

Now you will be presented with a window with a list of the networks that you can select, however, LACChain EOSIO is not yet within this list, so you must press the button **Custom Blockchain** to add the network to this list.

![networks list](/img/tutorials/networks_list.png)

En este momento se deben completar un formulario para ingresar en el autenticador, para esto se deben completar los siguientes datos y guardar la información presionando el botón **Save**:

 - **Chain ID**: 5821525c6588037e2b066b992fcac34909a5b7f1ea8d5a393f6720fca3750d61
 - **Name of Blockchain**: LACChain EOSIO
 - **Default node for this blockchain**: https://lacchain.eosio.cr

![add network form](/img/tutorials/add_red_form.png)

:::note Nota
Check before saving the information that the **This blockchain is a test network (TESTNET)** box is selected.
:::

#### Step 3: import accounts

After adding the network, you must import the keys associated with your account in LACChain EOSIO, for this in the side menu select the option **Setup Account** there select the button **Import Account**.

![Import Account](/img/tutorials/import_account.png)

This will show you another tab in which you must select the **Import Private Key** button.

![Import Private Key](/img/tutorials/import_key.png)

In the next window enter the private key of your LACChain EOSIO account, once the system recognizes it select `accountname@active` and `accountname@owner`, to finish press the button **Import Account**.

![Insert keys](/img/tutorials/insert_keys.png)

To finish the process you must enter the password of your local wallet to confirm the import of the account into it.

![Insert keys](/img/tutorials/enter_password.png)