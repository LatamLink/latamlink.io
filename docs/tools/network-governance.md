---
id: network-governance
title: Network Governance Tool
sidebar_label: Network Governance
---

LACChain EOSIO permissioning contracts are implemented as [System Contracts](https://developers.eos.io/manuals/eosio.contracts/latest/index). These contracts have access to [privileged functions](../resources/important-functions) that encapsulate the base functionality for the LACChain governance framework.

[LACChain EOSOIO Systems Contracts](https://github.com/LatamLink/eosio.contracts/tree/master/contracts/lacchain.system)

## Graphic Interface for Permisioning Committee
This tool is to manage the permitting and the governance of LACChain EOSIO through Smart Contract.

[GUI tool to facilitate network management by the permitting committee](https://dashboard.latamlink.io/management)

Some of the available functions are:

### Validator node registration

### Active validator node changes

### Resources assignment to accounts

### Account Blacklisting
Accounts can be added to a blacklist that must be implemented by all validator nodes to effectively block access to an account.

### System contracts update
The updating of the system contracts can only be carried out by the account `eosio` which represents the permitting committee.

:::note Work in Progress
We are still working on this aspect of the documentation, if you want to improve the content you can learn [how to contribute](../guides/contribute). See the [Project Roadmap](../testnet/roadmap).
:::