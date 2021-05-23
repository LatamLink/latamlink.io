---
id: api
title: Application Programming Interface
sidebar_label: API Endpoints
---

The term API is an abbreviation of "Application Programming Interface", which allows for the interaction of applications with the network using the HTTP protocol.

## EOSIO RPC API 

The following API is EOSIO's native mechanism available to interact with the testnet.

[API Specification for EOSIO](https://developers.eos.io/manuals/eos/latest/nodeos/plugins/chain_api_plugin/api-reference/index)

### HTTP endpoints

Here are some examples of HTTP RPC endpoints

> 
  - Writer Node + Middleware : [https://lacchain.eosio.cr](https://latamlink.eosio.cr/v1/chain/get_info) 
  - Observer Node (read only) : [https://observer.eosio.cr](https://latamlink.eosio.cr/v1/chain/get_info)
  - Writer Node (no middleware) : [https://writer.eosio.cr](https://latamlink.eosio.cr/v1/chain/get_info) 

The complete list of endpoints is available at the following link: [LACChain EOSIO Endpoints](https://lacchain.eosio.online/endpoints)

### State History Plugin Endpoints 
Observers can enable nodeos `State_history_plugin` which is useful for capturing historical data on the state of the blockchain. The plugin receives blockchain data from other connected nodes and stores the data in files. The plugin exposes an endpoint where it listens using web sockets for applications to connect and query the blockchain data based on the plugin options specified when starting nodeos.

More about State History Plugin in this link: https://developers.eos.io/manuals/eos/v2.0/nodeos/plugins/state_history_plugin/index

### EOS JS

EOS JS is the official javascript library for integration with EOSIO-based blockchains using [RPC API](https://developers.eos.io/eosio-nodeos/reference).

Documentation can be found [here](https://eosio.github.io/eosjs)

## dfuse 	 

LACChain EOSIO has plans to implement the powerful features of [dfuse](https://www.dfuse.io/en), a robust blockchain API that makes it possible to stream real-time state updates, conduct lightning-fast searches and provide irreversible transaction guarantees all for the first time using a simple API call.

:::note Work in Progress
We are still working on this aspect of the documentation, if you want to improve the content you can learn [how to contribute](../guides/contribute). See the [Project Roadmap](../roadmap).
:::