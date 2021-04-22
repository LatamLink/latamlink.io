---
id: development-environment
title: Development environment
sidebar_label: Development environment
---

These steps show the process of installing the development environment necessary to work on the LACChain EOSIO network (creating accounts, managing resources, deploying contracts.

## 1. Software installation
First, you must have [EOSIO](https://developers.eos.io/manuals/eos/latest/install/install-prebuilt-binaries) software installed developed by [Block.one](https://block.one/) to perform actions with the EOS protocol.

This software consists of:

- **cleos:** is the command line tool that connects with the API exposed by nodeos and functions to manage the wallet, account, keys, transactions and Smart Contracts.
- **nodeos:** functions as the central daemon that manages EOSIO's net and could be configured as node to produce blocks.
- **keosd:** functions as wallet to manage the keys for EOSIO.

![Cleos](/img/diagrams/cleos.png)

### 1.1 Pre-Compiled Binaries
**Mac:**
```
brew tap eosio/eosio
brew install eosio
```
**Linux:**
```
wget https://github.com/eosio/eos/releases/download/v2.0.11/eosio_2.0.11-1-ubuntu-18.04_amd64.deb
sudo apt install ./eosio_2.0.11-1-ubuntu-18.04_amd64.deb
```

:::note Note
In case of failed installation on Linux, please install the following package and try again:
```
wget http://mirrors.edge.kernel.org/ubuntu/pool/main/i/icu/libicu60_60.2-3ubuntu3.1_amd64.deb
sudo dpkg -i ./libicu60_60.2-3ubuntu3.1_amd64.deb
```
:::

### 1.2 Contract Development Toolkit

Additionally, we recommend installing the Contract Development Toolkit (CDT) beforehand, to access resources to create contracts, it can be installed using the command:

**Mac:**
```
brew tap eosio.cdt
brew install eosio.cdt
``` 

**Linux:**
```
wget https://github.com/EOSIO/eosio.cdt/releases/download/v1.7.0/eosio.cdt_1.7.0-1-ubuntu-18.04_amd64.deb
sudo apt install ./eosio.cdt_1.7.0-1-ubuntu-18.04_amd64.deb
``` 

## Get your account on LACChain

In LACChain EOSIO network, there are several types of accounts. See the guide to create an account according to your user role:

- [End users](./create-account-final)
- [Apps or Contracts](./create-account-contract)
- [Non-Partner](./create-account-non-partner)
- [Partner](./create-account-partner)