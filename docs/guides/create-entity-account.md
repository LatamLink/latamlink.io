---
id: create-entity-account
title: Registering Entity Accounts 
sidebar_label: How to Register as an Entity
---

As public blockchain networks, LACChain Test Networks are open to any entity, not only in Latin America and the Caribbean but across the globe. As permissioned networks, entities must be authenticated and commit to comply with policies, and law in order to participate. 

Registered entities can deploy different types of nodes on the network depending on whether they are partners or non-partners. The following table summarizes which node types can be deployed by each entity type.

| Node type | Partner | Non-Partner |
|-----------|:-------:|:-----------:|
| **Validation nodes**| ![Yes](/img/yes-icon.svg) |  ![No](/img/no-icon.svg)  |
| **Boot nodes**     | ![Yes](/img/yes-icon.svg) |  ![No](/img/no-icon.svg)  |
| **Writer nodes**   | ![Yes](/img/yes-icon.svg) | ![Yes](/img/yes-icon.svg) |
| **Observer nodes** | ![Yes](/img/yes-icon.svg) | ![Yes](/img/yes-icon.svg) |

To be part of the network, a registration application form must be completed, the permisioning commitee will then execute a `eosio:addentity` action with the following information :

- **`entity_name`** (entity account name)
- **`entity_type`** (partner or non partner)
- **`pub_key`** (public key for the account of the new entity)

You can see a list of [partners on LACChain EOSIO](./partners).

## Registering as a Non-partner

For an entity to be permissioned to run a writer node, it is required to follow the following steps:

1. Read, understand and agree with the [Terms and Conditions for Writer Nodes for LACChain Test Networks](../testnet/writer-nodes-terms-conditions) that includes the Privacy Policy, and the Forbidden Use Cases as annexes. 
2. Fill the [Node Agreement](../testnet/node-agreement) and send it signed to info@lacchain.net (as a PDF).
3. Follow the [instructions](./node-installation) to deploy a writer node, and send us the node you get at the end of the process to info@lacchain.net to permission your node.

Non-Partner entities may register new accounts on the network and allow  transactions to enter the network by co-signing the transactions with it writer node private key.

Each writer node has the autonomy to manage it's share of network resources according to their preferences. 

## Registering as a Partner

For an entity to be permissioned to run a validator node, it is required to follow the following steps:

1. Become a partner of the LACChain Alliance.
2. Read, understand and agree with the [Terms and Conditions for Writer Nodes for LACChain Test Networks](../testnet/validator-nodes-terms-conditions) that includes the Privacy Policy, and the Forbidden Use Cases as annexes. 
3. Fill the [Node Agreement](../testnet/node-agreement) and send it signed to info@lacchain.net (as a PDF).
4. Follow the [instructions](./node-installation) to deploy a validator node, and send us the node you get at the end of the process to info@lacchain.net to permission your node.


The partners in the LACChain EOSIO network are entities that may also be part of the permitting committee, which are in charge of regulating and managing the management of resources and access to the network.

Each partner has the autonomy to manage its share of network resources to it's clients and affiliates on the network. 

:::note Work in Progress
We are still working on this aspect of the network. Please refer to the [Project Roadmap](../testnet/roadmap).
:::


