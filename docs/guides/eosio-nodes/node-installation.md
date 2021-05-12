---
id: node-installation
title: Installing LACChain EOSIO Nodes
sidebar_label: Installing Nodes
---

## Testnet Information  

<table>
<tr>
    <td>EOSIO version</td>
    <td>
        <a href="https://github.com/lacchain/eosio-network" target="_blank" rel="noopener noreferrer">
            <code>LACChain EOSIO</code>
        </a>
    </td>
</tr>
<tr>
    <td>Chain ID</td>
    <td><code>2c1f36d2e3774cba3e47804b6463c207544ac24183194e0b96ffad31e8f4acd5</code></td>
</tr>
<tr>
    <td>Genesis file</td>
    <td>
      <a href="https://raw.githubusercontent.com/LatamLink/eosio-testnet/master/genesis.json" target="_blank" rel="noopener noreferrer"><code>genesis.json</code></a>
    </td>
</tr>
</table>

See our [GitHub repository](https://github.com/lacchain/eosio-network) for more information about nodes in LACChain EOSIO.

## 1. Create an account

In order to deploy nodes in the LACChain EOSIO network, it is important to have an account registered as a `Partner` or` Non-Partner`.
 
See the guide to create an account according to your user role:

- [Non-partner](../create-entity-account)
- [Partner](../create-entity-account)

## 2. Authenticate on the Dashboard

The LACChain EOSIO network has a [dashboard](https://dashboard.latamlink.io/), which allows users to manage within the network, including the option to deploy various types of nodes.

Login with your `Partner` or` Non-Partner` account. See our tutorial on how to manage your [private keys](../private-keys#31-external-authenticators-wallets)


## 3. Deploy a node 

Once authenticated with our account, select the `administration` option within the dashboard tools. In this section you will be shown the types of nodes that you can deploy depending on your type of account.

In order to create the node, we simply fill in the requested data in the form and execute the transaction.

![Administration section](/img/docs/dashboard_02.png)


### Configuration examples

The dashboard also has a section in which we can download an example of the configuration of the different types of node, we only have to access the option of [`node config`](https://dashboard.latamlink.io/node-config) within the tools.

![Node config](/img/docs/dashboard_01.png)

## 4. Delete a node 

Inside the dashboard, there is also an option to be able to delete the nodes, simply by typing the name of the node that we want to delete. 

![Delete a node](/img/docs/dashboard_03.png)
