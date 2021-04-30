---
id: resource-usage
title: Resource Usage
sidebar_label: Resource Usage
---

LACChain does not and will not have transaction fees. However, to regulate network usage to its technical limits and avoid denial of service attacks, it is necessary to establish a mechanism for requesting and allocating network resources.

## Type of Resources
The accounts will be able to use the following resources in the network:

| **[RAM](/docs/testnet/resource-usage#ram)** | **[CPU](/docs/testnet/resource-usage#cpu)** | **[NET](/docs/testnet/resource-usage#net)** |
:--------------:|:--------------:|:--------------:| 
|Memory to store status|Processing time|Bandwidth to transmit information|
|It is measured in bytes|Measured in microseconds|It is measured in bytes| 
|It is a limited resource|CPU and NET will be fully replenished when account is not using network for 24 hours|CPU and NET will be fully replenished when account is not using network for 24 hours|

### RAM
In an EOSIO network, RAM is the memory storage space where the blockchain stores data, it is measured in kilobytes (KiB). If your contract needs to store data in a blockchain table, like in a database, then it can store it in the blockchain's RAM.

RAM is a very important resource and it is limited. It is used when executing many actions that are available in the blockchain, when creating a new account, for example, the information of that account is stored in the memory of the blockchain. An example of the use of RAM is when an account accepts a new type of token, a new record must be created somewhere in the blockchain memory that contains the balance of the new accepted token, and that memory, the storage space in the blockchain , it must be purchased by the account that transfers the token or by the account that accepts the new type of token.

RAM is referred to as `memory` when executing the following command:

#### Input

``` bash
cleos get account
```

#### Output

```cpp
memory: quota:     86.68 KiB    used:     11.62 KiB  
```

You can find more details about RAM as a resource [here](https://developers.eos.io/manuals/eosio.contracts/latest/key-concepts/ram).

### CPU

CPU is the processing power, the amount of CPU that an account has is measured in microseconds (μs), it is known as `CPU bandwith`, the following command outputs the amount of processing time that an account has at its disposal when sending actions to a contract.

``` bash
cleos get account
``` 

You can find more details about the CPU as a resource [here](https://developers.eos.io/manuals/eosio.contracts/latest/key-concepts/cpu).

### NET
As CPU and RAM, NET is also a very important resource in EOSIO-based blockchains. NET is the network bandwidth measured in bytes of transactions and it is referred to as `net bandwidth`.

You can find more details about NET as a resource [here](https://developers.eos.io/manuals/eosio.contracts/latest/key-concepts/net).

## Network Resource Limits

| **CPU** | **NET** | **RAM** |
:--------------:|:--------------:|:--------------:|
| 200 ms by block | 1 MB by block | 32 GB |
| 34.560 CPU seconds by day | 172.800 MB by day | It is increased according to demand |

:::note Note
A new block is produced every 500ms
:::

### Resource Distribution

Entities that operate writer nodes receive an equivalent portion of the network's resources. In such a way that each node is assigned `1 / N` of all the resources where:

**`N = Number of entities`**.

 If an entity decides to operate more than one writer node, this does not affect the amount of resources it receives.

  | | **CPU** | **NET** | **RAM** |
:--------------:|:--------------:|:--------------:|:--------------:|
| Permitting Committee | - | - | 32 GB |
| Entities | 1/N of total CPU | 1/N of the total NET | Assigned by committee |
| Writer Nodes | Uses entity CPU | Uses NET of the entity | n/a |
| Smart Contracts | 0 ųs | 0 Bytes | Assigned by entity |
| End Users | 0 ųs | 0 Bytes | 0 Bytes |

#### Entity with two writer nodes

| **Resources** | **Distribution** |
:--------------:|:--------------:| 
| CPU | 1/N • 200 ms   |
| NET | 1/N • 1048 KiB | 
| RAM | 10000 KiB      |

![Example of Entity 1](/img/diagrams/entity1-authorities.png)

#### Entity with a writer node

| **Resources** | **Distribution** |
:--------------:|:--------------:| 
| CPU | 1/N • 200 ms   |
| NET | 1/N • 1048 KiB | 
| RAM | 10000 KiB      |

![Example of Entity 2](/img/diagrams/entity2-authorities.png)

#### Entity without nodes 

| **Recurso** | **Distribución** |
:--------------:|:--------------:| 
| CPU | X txs per day |
| NET | X txs per day | 
| RAM | 10000 KiB     |

![Example of Entity 3](/img/diagrams/entity3-authorities.png)

### Users
Users do not have CPU and NET resources, these are deducted from the account of the writer node when co-signing a transaction. These only have the same RAM that will be necessary to be able to deploy contracts on the network, to obtain this resource the user must request it from their partner, said request, as well as the amount and value of this is defined by each partner since they have the autonomy to manage available resources.

| **Recurso** | **Distribución** |
:--------------:|:--------------:| 
| CPU | 0 us    |
| NET | 0 KiB   | 
| RAM | 100 KiB |

![Example of User Authorities](/img/diagrams/user-authorities.png)

## Account resource limits
Every account on a EOSIO-based blockchain has resource limits for CPU/NET and RAM associated with it. These limits specify how much of each resource can be used by the account and they can be dynamically changed by calling the privileged API `set_resource_limits`.

The difference between CPU/NET and RAM resource limits is that RAM, since its a limited resource, once used the only way to recover it is to free the storage space used. On the other side, CPU and NET will be fully replenished when the account is not using the network for a period of time. By default this period is set to 24 hours.

## Resource billing
When a user (account) wants to interact with a smart-contract (another account) a transaction is created with an action in it that specifies the smart function to call together with the account (permission level) that is authorizing the action.

Then, after signing with the keys that authorize the permission level specified in the action, the transaction is broadcasted to the network until it reaches the current block-producer in the schedule.

The block-producer will execute all actions inside the transaction and bill the time used to execute them (CPU) to the first account authorizing the first action. Also, it will bill the first authorizing account for the size of the transaction (NET).

If the actions performed by the smart-contract involves any kind of data storage, the smart-contract can choose to use the RAM resources of any of the transaction authorizing accounts or use the RAM resources of the smart-contract account.

## CPU and NET as elastic resources
The `resource limit manager` of an EOSIO-based blockchain is the part of the protocol that keeps track of the amount of available network resources at any time and how much resources each account is using.

In particular, it treats CPU and NET as elastic resources allowing users to consume more resources than what they are entitled to while this resource is below a desired usage (uncongested).

An elastic resource has the following properties.

 * The desired usage.
 * The maximum usage.
 * The number of aggregation periods that contribute to the average usage.
 * The multiplier by which virtual space can oversell usage when uncongested.
 * The rate at which a congested resource contracts its limit.
 * The rate at which an uncongested resource expands its limits.

Let see at the default configuration for the CPU resource as an example:

```c++
const static uint32_t default_max_block_cpu_usage        = 200'000; /// max block cpu usage in microseconds
const static uint32_t default_target_block_cpu_usage_pct = 10 * percent_1;
const static uint32_t block_cpu_usage_average_window_ms  = 60*1000l;
```

```c++
elastic_limit_parameters cpu_limit_parameters = {
    EOS_PERCENT(config::default_max_block_cpu_usage, config::default_target_block_cpu_usage_pct), //10% of 200ms
    config::default_max_block_cpu_usage,                                                          //200ms
    config::block_cpu_usage_average_window_ms / config::block_interval_ms,                        //60s (120 blocks)
    1000,                                                                                         //x1000 multiplier
    {99, 100},                                                                                    //contract ratio 0.99 
    {1000, 999}                                                                                   //expand ratio 1.001
};
```

By making the CPU an elastic resource, a virtual cpu will be created that will range between the lowest possible value which is the maximun usage specified and the highest possible value which is the the lowest possible value times the multiplier.

```c++
virtual cpu = [[maximum usage, maximum usage * multiplier]]
```

The virtual cpu limit will be contracted (expanded) by the `contract (expand) ratio` when the average utilization is above (below) the desired usage, meaning *that the most an account can consume during idle periods is 1000x (multiplier) the bandwidth it is gauranteed under congestion.*

The average CPU utilization is computed using an EMA (Exponential Moving Average) placing a greater weight and significance on the most recent usage.

```c++
def update_elastic_limit(current_limit, average_usage, elastic_resource_limit) {
   result = current_limit
   if average_usage > elastic_resource_limit.target:
      result = result * elastic_resource_limit.contract_rate
   else:
      result = result * elastic_resource_limit.expand_rate

   return min(max(result, elastic_resource_limit.max), elastic_resource_limit.max * elastic_resource_limit.max_multiplier)
```
