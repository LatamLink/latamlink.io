---
id: traceability
title: Authorization and Traceability  
sidebar_label: Authorization and Traceability  
---

## Permisions and traceability in EOSIO

In EOSIO no action is anonymous, all transactions are linked to an account, for example if you want to call the action of a contract, the call will be accompanied by an origin account that consumes that action of the smart contract.

As we saw in the accounts and permissions section, eosio has a native system to define authorizations that satisfy permissions that can be defined for an account on the network.

## Permisioning Committee

Privileged permissions can be dynamically delegated to different entities and nodes, for example to legal committees within the committee or to technical representatives within the committee.

Considering that the permission to create new accounts could be delegated exclusively to the writers and in that way any action regardless of how they enter the network could be linked to the writer who created the account.

## Types of Permissioned Entities
The permitted entities can be LACChain "partners" which can deploy any type of node. Otherwise non-partner entities can only display writer and observer nodes.

| Node Type | Partner | Non-Partner |
|-----------|:-------:|:-----------:|
| **Validator nodes** | ![Yes](/img/yes-icon.svg) |  ![No](/img/no-icon.svg)  |
| **Boot nodes**      | ![Yes](/img/yes-icon.svg) |  ![No](/img/no-icon.svg)  |
| **Writer nodes**    | ![Yes](/img/yes-icon.svg) | ![Yes](/img/yes-icon.svg) |
| **Observer nodes**  | ![Yes](/img/yes-icon.svg) | ![Yes](/img/yes-icon.svg) |


#### Permissions and Keys by Node Type

|                 | Account key              | Block Signing Key | Peer Key | Extra Keys            |
|-----------------|:------------------------:|:-----------------:|:--------:|:---------------------:|
| **Entity**      | Active/Owner permissions | ![No](/img/no-icon.svg) | ![No](/img/no-icon.svg) | Optional ([info field](/docs/testnet/entity-node-info#entity-json-structure)) |
|  ˫ **validator**| ![No](/img/no-icon.svg)  | ![Yes](/img/yes-icon.svg) | ![Yes](/img/yes-icon.svg) | Optional ([info field](/docs/testnet/entity-node-info#validator-node)) |
|  ˫ **boot**     | ![No](/img/no-icon.svg)  | ![No](/img/no-icon.svg) | ![Yes](/img/yes-icon.svg) | Optional ([info field](/docs/testnet/entity-node-info#boot-node)) |
|  ˫ **writer**   | NodeName permission      | ![No](/img/no-icon.svg) | ![Yes](/img/yes-icon.svg) | Optional ([info field](/docs/testnet/entity-node-info#writer-node)) |
|  ˪ **observer** | ![No](/img/no-icon.svg)  | ![No](/img/no-icon.svg) | ![Yes](/img/yes-icon.svg) | Optional ([info field](/docs/testnet/entity-node-info#observer-node)) |


#### Account key	

Keys belonging to a registered account, in EOSIO a minimum of two permissions are required.

```sh
permissions: 
     owner     1:    1 EOS6R46x4P8b82D4zjpU62xZG3ytn6VUxcyuJntSxSwMLXAgLxcU8
        active     1:    1 EOS6R46x4P8b82D4zjpU62xZG3ytn6VUxcyuJntSxSwMLXAgLxcU8
```

#### Block Signing Key

Keys used to sign blocks by the validator nodes that are part of the consensus group.

```sh title="nodeos configuration parameters"
  -p [ --producer-name ] arg            ID of producer controlled by this node 
                                        (e.g. inita; may specify multiple 
                                        times)
  --signature-provider arg              Key=Value pairs in the form 
                                        <public-key>=<provider-spec>
```

#### Peer Key

Keys used by the P2P protocol to establish communication between nodes with valid signatures for the specified public keys.

```sh title="nodeos configuration parameters"
  --allowed-connection arg (=any)       Can be 'any' or 'producers' or 
                                        'specified' or 'none'. If 'specified', 
                                        peer-key must be specified at least 
                                        once. If only 'producers', peer-key is 
                                        not required. 'producers' and 
                                        'specified' may be combined.
  --peer-key arg                        Optional public key of peer allowed to 
                                        connect.  May be used multiple times.
  --peer-private-key arg                Tuple of [PublicKey, WIF private key] 
                                        (may specify multiple times)
```

#### Extra Keys

Additional keys for other uses other than the core EOSIO network protocol or consensus mechanism can be used for other functions such as post-quantum cryptography. This information can be included within the [data of entities and nodes](./entity-node-info) stored in the system contract.


### Write Node Authority

Writer nodes require specified authorizations for the `writer` permission which is administered by the permitting committee.

![Writer Nodes Authority Example](/img/diagrams/writer-authorities.png)

### User Authority 

We propose to delegate account creation permissions to writer nodes, this permission can be modified in turn by an organization / committee to conform to legal and operational requirements.

Each new user will be linked to a writer node belonging to a permissioned entity. Any transaction created by a user's account must be accompanied by the signature of a writer node to comply with the number of minimum authorizations required (2/2).

![Example User Authorities](/img/diagrams/user-authorities.png)

The LACChain network requires tracking which writer node generated a transaction, in such a way that it is possible to make them legally responsible for it.

It is necessary to verify that in LACChain any transaction that is issued is propagated by a node that is on the list of accounts authorized by the permitting committee.

This traceability requires that each EOSIO transaction includes the signature of the writer node in such a way that the other nodes are able to recognize through which node the transaction entered the network.

### Account Creation
The following steps are proposed for the creation of accounts and use of the resources of the chain.

1. Permission to create new accounts is delegated exclusively to writer nodes.
2. A writer `writerbobby1` creates a new account `aliceaccount`.
3. In the accounts table, `aliceaccount` has`writerbobby1` defined as the writer who created the account.
4. The writer decides how to distribute resources to Alice based on the requirements defined by the committee, he can choose to transfer resources, delegate them, co-sign transactions.
5. Alice uses network resources.

### Damage control and liability

In case the resources of the chain are being used outside the scope proposed by the committee, the following scenario arises.

1. The account is identified abusing the resources
2. The writer responsible for the creation of that account is identified (information published in the chain)
3. Writer Notified
4. The committee can choose to act in different ways:

	- Delegate responsibility for control to the writer.
	- Disable the abusing account.
	- Disable all accounts generated by the writer.
	- Do not disable accounts but temporarily delegate resources.
	- Order the validators to blacklist the account.
	- Other actions that comply with legal and operational requirements.

5. Once the situation is controlled, it is subject to the committee how to carry out the arbitration that responds to the committee's requirements.
