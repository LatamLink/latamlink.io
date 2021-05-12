---
id: external-authenticators
title: Configure External Authenticators
sidebar_label: Configure external authenticators
---

The last important update for EOSJS included built-in support for the interchangeable signs providers; deleting the burden of managing the secure keys management of its scope and improving the interoperability. What is more important, this is great security improving that limits the exposition of the keys of a user in several applications to a unique reliable signs provider that mitigates the potential risks that can arise from malicious code or an error of the user when using blockchain applications.

## External Authenticators Configuration (Anchor Wallet)

To use external authenticators in LACChain EOSIO such as Anchor Wallet, a configuration must be made to include the network within the networks available in the authenticator, below, a tutorial is shown where this process is explained.

### Step 1: download and install

In this case the authenticator [Anchor Wallet](https://greymass.com/en/anchor/) is used.

### Step 2: add the network

Once the Anchor Wallet installation is done, you should go to the **Manage Available Blockchains** window, there press the **Add/Remove** button.

![Manage Available Blockchains](/img/tutorials/add_network.png)

Now you will be presented with a window with a list of the networks that you can select, however, LACChain EOSIO is not yet within this list, so you must press the button **Custom Blockchain** to add the network to this list.

![networks list](/img/tutorials/networks_list.png)

At this time a form must be completed to enter the authenticator, for this the following data must be completed and the information must be saved by pressing the **Save** button :

 - **Chain ID**: 5821525c6588037e2b066b992fcac34909a5b7f1ea8d5a393f6720fca3750d61
 - **Name of Blockchain**: LACChain EOSIO
 - **Default node for this blockchain**: https://lacchain.eosio.cr

![add network form](/img/tutorials/add_red_form.png)

:::note Nota
Check before saving the information that the **This blockchain is a test network (TESTNET)** box is selected.
:::

### Step 3: import accounts

After adding the network, you must import the keys associated with your account in LACChain EOSIO, for this in the side menu select the option **Setup Account** there select the button **Import Account**.

![Import Account](/img/tutorials/import_account.png)

This will show you another tab in which you must select the **Import Private Key** button.

![Import Private Key](/img/tutorials/import_key.png)

In the next window enter the private key of your LACChain EOSIO account, once the system recognizes it select `accountname@active` and `accountname@owner`, to finish press the button **Import Account**.

![Insert keys](/img/tutorials/insert_keys.png)

To finish the process you must enter the password of your local wallet to confirm the import of the account into it.

![Insert keys](/img/tutorials/enter_password.png)