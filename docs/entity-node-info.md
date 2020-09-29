---
id: data-entities-nodes
title: Entity and Node Information
sidebar_label: Entity and Node Data
---

This is a proposed JSON Standard for Entity and Node Information which LAC-Chain partners are required to publish and stored on the system contract tables. This Standard is based off the [BP JSON standard](https://github.com/eosrio/bp-info-standard) utilized in the EOS mainnet.

It allows node operators to publicly advertise their ownership of a LAC-Chain account and share information about themselves.

Think of a WHOIS for LAC-Chain accounts that are verified by a blockchain signature. All of these fields require a single sign-on that authenticates via blockchain and therefore cannot be wrong. Only the BP with the correct key can edit these fields using the user interface.

#### Version

The current revision **v0.1.0** is compliant with the JSON schema [Draft 2019-09](https://json-schema.org/specification-links.html#2019-09-formerly-known-as-draft-8)


## Setting Entity Information

Executing this action requires the authorization of the authorized account or the permissioning committee.

`eosio::action`
`setentinfo(entity, info)`

| Parameter | Type | Notes |
|---|---|---|
| `entity` | *name* | Name of the node asociated to the entity |
| `info` | *string* | JSON for entity info |

it will insert or update a record in the `nodes` table in `eosio` system contracts.

### Entity JSON Structure 

- **org:** *{Object}*
  - **candidate_name**: Organization name
  - **organization_id**"**: Government Issued Organization ID
  - **technical_contact**: Person Name
  - **business_contact**: Person Name
  - **website**: Organization website
  - **code_of_conduct:** Full URL to page
  - **ownership_disclosure:** Full URL to page
  - **email:** Contact email
  - **github_user:** Operational github username (or array or usernames)
  - **chain_resources:** *[Array]* - List related resources on LAC Chain
  - **other_resources:** *[Array]* - List of other relevant URLs 
  - **branding:** *{Object} *- Logo images
      - **logo_256:** Entire url to image 256x256px 
      - **logo_1024:** Entire url to image 1024x1024px
      - **logo_svg:** Entire url to image svg
   - **location:** *{Object}* - Organization location
      - **name:** Location in human readable format [City, State]
      - **country:** Country code [XX] in accordance to [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)
      - **latitude:** Latitude in decimal degrees
      - **longitude:** Longitude in decimal degrees
    },
  - **social:** *{Object}* - NOT THE ENTIRE URL, only usernames on social networks, 
    - **keybase:** Username
    - **telegram:** Username or group
    - **twitter:** Username
    - **github:** Username
    - **youtube:** Channel address
    - **facebook:** Page/group address
    - **hive:** Username without @
    - **reddit:** Username
    - **wechat:** Username

### Entity JSON Example 

```json title="on-chain entity info"
{
	"organization_name": "EOS Costa Rica",
	"organization_id": "3-101-123456",
	"technical_contact": "Asia Trejo",
	"business_contact": "Kris Peralta",
	"email": "latamlink@eosio.cr",
	"website": "https://eoscostarica.io",
	"code_of_conduct": "https://eoscostarica.io/en/transparency/#code_of_conduct",
	"ownership_disclosure": "https://eoscostarica.io/en/transparency/#ownership_disclosure",
	"github_user": "eoscostarica",
	"chain_resources": ["https://dashboard.latamlink.io"],
	"other_resources": ["https://guias.eoscostarica.io", "https://guides.eoscostarica.io"],
	"branding": {
		"logo_256": "https://eoscostarica.io/assets/eos-CostaRica-256x256.png",
		"logo_1024": "https://eoscostarica.io/assets/eos-CostaRica-1024x1024.png",
		"logo_svg": "https://eoscostarica.io/assets/eos-CostaRica-vectors.svg"
	},
	"location": {
		"name": "San Jose",
		"country": "CR",
		"latitude": 9.936377,
		"longitude": -84.078155
	},
	"social": {
		"hive": "eos-costarica",
		"twitter": "EOSCostaRica",
		"youtube": "channel/UCvYinCH3O1iKpi-_dNfQAGQ",
		"facebook": "costaricaeos",
		"github": "eoscostarica",
		"reddit": "eoscostarica",
		"keybase": "eoscostarica",
		"telegram": "eoscr",
		"wechat": ""
	}
}
```

## Setting Node Information

`eosio::action`
`setnodeinfo(node, info)`

Executing this action requires the authorization of the authorized account or the permissioning committee.

| Parameter | Type | Notes |
|---|---|---|
| `node` | *name* | Name given to the node registered under the entity |
| `info` | *string* | JSON according to node type |


### Node JSON Structure

Expected node info varies depending on **node_type:**  `validator / boot / writer / observer `

- **node:** *{Object}*
    - **nodetype_keys:**  *{Object}* - Public Keys required for each node type.
        - **peer_keys** : *[Array]* ["EOS..."] 
        - **account_key** : "EOS..." *(required for writer node)*
    - **nodetype_endpoints:**  *{Object}* - HTTP and P2P endpoints required for each node type.
        - **p2p_endpoint:** EOSIO P2P endpoint `host:port`
        - **api_endpoint:** EOSIO HTTP endpoint `http://host:port`
        - **ssl_endpoint:** EOSIO HTTPS endpoint `https://host:port`
    - **nodetype_location:** Node location
        - **name:** Node location in human readable format [City, State]
        - **country:** Node country code [XX]
        - **latitude:** Node latitude in decimal degrees
        - **longitude:** Node longitude in decimal degrees
    - **nodetype_features:** *[Array]*
        - features supported by the `api_endpoint` or `ssl_endpoint` on writer or observer nodes, refer to the [list of features](#writer--observer-node-features)


### Validator Node Example
```json title="on-chain validator node info"
{
    "validator_keys":{
        "peer_keys": ["EOS..."]
    },
    "validator_endpoints":{
        "validator_p2p_out": "lacchain.eosio.cr:9876",
        "validator_p2p_bidir": "lacchain.eosio.cr:9876"
    },
    "validator_location": {
        "name": "San Jose",
        "country": "CR",
        "latitude": 9.936377,
        "longitude": -84.078155
    }
}
```

### Boot Node Example
```json  title="on-chain boot node info"
{
    "boot_keys":{
        "peer_keys": ["EOS..."]
    },
    "boot_endpoints":{
        "boot_p2p_out": "",
        "boot_p2p_bidir": "lacchain.eosio.cr:9876",
    },
    "boot_location": {
        "name": "San Jose",
        "country": "CR",
        "latitude": 9.936377,
        "longitude": -84.078155
    }
}
```

### Writer Node Example
```json title="on-chain writer node info"
{
    "writer_keys":{
        "peer_keys": ["EOS..."],
        "account_key": "EOS..."
    },
    "writer_endpoints":{
        "writer_api": "http://lacchain.eosio.cr",
        "writer_ssl": "https://lacchain.eosio.cr",
        "writer_p2p": "lacchain.eosio.cr:9876"
    },
    "writer_location": {
        "name": "San Jose",
        "country": "CR",
        "latitude": 9.936377,
        "longitude": -84.078155
    },
    "writer_features": ["chain-api", "account-query", "dfuse"]
}
```

### Observer Node Example
```json title="on-chain observer node info"
{
    "observer_keys":{
        "peer_keys": ["EOS..."]
    },
    "observer_endpoints":{
        "observer_api": "http://lacchain.eosio.cr",
        "observer_ssl": "https://lacchain.eosio.cr",
        "observer_p2p": "lacchain.eosio.cr:9876"
    },
    "observer_location": {
        "name": "San Jose",
        "country": "CR",
        "latitude": 9.936377,
        "longitude": -84.078155
    },
    "observer_features": ["chain-api", "snapshot-api"]
}
```

#### Writer / Observer Node Features
For query type nodes one or more features from the list below must be added:
  - `chain-api`: basic eosio::chain_api_plugin (/v1/chain/*)
  - `account-query`: (/v1/chain/get_accounts_by_authorizers)
  - `history-v1`: (/v1/history/*)
  - `hyperion-v2`: (/v2/*)
  - `dfuse`
  - `snapshot-api`

## Useful Links
To access the user interface to update data, select the "Update Node Info" option in the [Network Monitor](https://dashboard.latamlink.io).

Validate your JSON inputs here: https://www.jsonschemavalidator.net/

## Implementation Roadmap

### Phase  I
#### Self-generated list of all validator nodes extracted from the blockchain.
 - Node account name
 - Type of node entity
 - Node public key
 - Location code (ISO 3166-1 numeric)

#### Voluntary information provided by each entity
 - Legal name
 - Identification number
 - Technical contact name
 - Business contact name
 - Address
 - Website
 - Email
 - Social networks
 - Brand / Logo
 - Code of conduct

#### EOSIO nodes
- Node locations
- API and P2P endpoints
- Validators
- Writer nodes
- History API nodes
- API nodes
- Boot nodes
- Observer nodes

### Phase II
#### Performance
 - Blocks lost in X time period * - Involuntary *
 - Missed rounds in X time period * - Involuntary *
 - Total number of blocks produced * - Involuntary *
 - Average position on the BP list * - Involuntary *
 - Average performance rating * - Involuntary *
 - Total downtime
 - Interruptions
 - Stress tests
 - Patch management
 - Disaster Recovery Capacity
 - Intrusion tests

#### Infrastructure
- Physics / Public Cloud / Shared
- Primary site
- Secondary site
- Infrastructure diagram
- DDoS protection
- Firewalls
- Load balancers
- VPN
- Future plans

### Phase III

#### Support structure
 - Number of technical employees.
 - 24/7 support
 - Monitoring tools
 - Communication plan with other Validator nodes

#### Ownership structure
 - Description of the commercial structure
 - Number of employees
 - Individual interest holders
 - Shareholders of commercial entities
 - Affiliated entities
