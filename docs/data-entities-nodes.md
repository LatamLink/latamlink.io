---
id: data-entities-nodes
title: Entity and Node Information
sidebar_label: Entity and Node Data
---
## Voluntary disclosure of data

It allows node operators to publicly advertise their ownership of a LAC-Chain account and share information about themselves.

Think of a WHOIS for LAC-Chain accounts that are verified by a blockchain signature. All of these fields require a single sign-on that authenticates via blockchain and therefore cannot be wrong. Only the BP with the correct key can edit these fields using the user interface.

## Data Update Tool

To access the user interface to update data, select the "Update Node Info" option in the [Network Monitor](https://dashboard.latamlink.io).


### Entity JSON Structure 

`eosio::action`
`setentinfo(node, info)`

Executing this action requires the authorization of the authorized account or the permissioning committee.

| Parameter | Type | Notes |
|---|---|---|
| `node` | *name* | Name of the node asociated to the entity |
| `info` | *string* | JSON for entity info |

```json title="on-chain entity info"
{
	"account_name": "eoscostarica",
	"org": {
		"organization_name": "EOS Costa Rica",
		"organization_id": "3-101-090127",
		"technical_contact": "Xavier Fernandez",
		"business_contact": "Edgar Fernandez",
		"email": "bp@eosio.cr",
		"website": "https://eoscostarica.io",
		"code_of_conduct": "https://eoscostarica.io/en/transparency/#code_of_conduct",
		"ownership_disclosure": "https://eoscostarica.io/en/transparency/#ownership_disclosure",
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
			"steemit": "eos-costarica",
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
}
```

## Node Information

`eosio::action`
`setnodeinfo(node, info)`

Executing this action requires the authorization of the authorized account or the permissioning committee.

| Parameter | Type | Notes |
|---|---|---|
| `node` | *name* | Nombre del nodo asociada a la entidad |
| `info` | *string* | JSON según tipo de Nodo |


### Writer Node
```json title="on-chain writer node info"
{
	"writer_keys":{
		"peer_key": "EOS...",
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
	}
}
```

### Validator Node
```json title="on-chain validator node info"
{
	"validator_keys":{
		"peer_key": "EOS...",
		"block_signing_key": "EOS..."
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

### Boot Node
```json  title="on-chain boot node info"
{
	"boot_keys":{
		"peer_key": "EOS..."
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

### Observer Node
```json title="on-chain observer node info"
{
	"observer_keys":{
		"peer_key": "EOS..."
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
	}
}
```

## Implementation Phases

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
