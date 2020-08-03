---
id: data-entities-nodes
title: Entity and Node Information
sidebar_label: Entity and Node Data
---
## Voluntary disclosure of data

It allows node operators to publicly advertise their ownership of a LAC-Chain account and share information about themselves.

Think of a WHOIS for LAC-Chain accounts that are verified by a blockchain signature. All of these fields require a single sign-on that authenticates via blockchain and therefore cannot be wrong. Only the BP with the correct key can edit these fields using the user interface.

## Data Update Tool

To access the user interface to update data, select the "Update Node Info" option in the [Network Monitor] (https://dashboard.latamlink.io).

## Implementation Phases

### Phase  I
#### Self-generated list of all block producers extracted from the blockchain.
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

## JSON structure

 ```json
 {
	"validator_account_name": "crsix",
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
	},
	"nodes": [
		{
			"location": {
				"name": "San Jose",
				"country": "CR",
				"latitude": 9.936377,
				"longitude": -84.078155
			},
			"node_type": "writer",
			"history_type": "none",
			"api_endpoint": "http://lacchain.eosio.cr",
			"ssl_endpoint": "https://lacchain.eosio.cr"
		},
		{
			"location": {
				"name": "San Jose",
				"country": "CR",
				"latitude": 9.936377,
				"longitude": -84.078155
			},
			"node_type": "boot",
			"p2p_endpoint": "lacchain.eosio.cr:9876"
		},
		{
			"location": {
				"name": "San Jose",
				"country": "CR",
				"latitude": 9.936377,
				"longitude": -84.078155
			},
			"node_type": "validator"
		}
	]
}
 ```