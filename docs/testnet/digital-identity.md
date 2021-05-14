---
id: digital-identity
title: Authentication and Digital Identity
sidebar_label: Authentication & Digital ID
---

LACChain uses self-sovereign identity as a second layer of its blockchain-based infrastructure. It complements the first layer of public permissioned blockchain network by adding the possibility to identify and authenticate entities. The identification of entities in the system, including individuals, organizations, things and processes, is important to assign the ownership of the digital assets and determine legal responsibilities.
Here we describe the framework that defines how identity works in LACChain and its implementation by the EOSIO technology.

[Read More about LACChain indentity framework](https://github.com/lacchain)

## LACChain Techno-Legal Framework

### Trust Framework

- Trusted lists (TLs)
- Identity providers (IDs) and Certificate Authorities (CA)
- Levels of Assurance (LOAs)

### Regulatory Policies

- Electronic Signature, DLTs, DIDs, VCs

### Technology

- Decentralized Idetifiers (DIDs)
- Verifiable Credentials (VC)
- Verifiable Presentations (VPs)
- Key Storage Recovery
- Credentials Storage and Recovery
- Authentication
- Sign On

## Self-sovereign identity components

### LACChain ID

### LACChain ID Mailbox

LACChain Mailbox enables an email-like messaging for third-party issued Verifiable Credentials (VC). Using a secure and controlled server to store encrypted VC, LACChain Mailbox delivers a simple, secure, messaging experience for sending and receiving Verifiable Credentials with total privacy.

LACChain Mailbox also provides an API solution to use the DID resolution functionality, sending and receiving encrypted VC from any application.

[Read More on LACChain ID Mailbox](https://github.com/lacchain/id-mailbox)

## Authenticators available for EOSIO networks (Wallets)

The wallets are clients that store private keys associated with the permissions of one or more accounts. Ideally, a wallet has a locked state (encrypted) and unlock (unencrypted) that is protected by a high entropy password.


### Transit Wallet Access Layer
This library is a small abstraction layer on top of `eosjs` which aims to assist EOS dApp (decentralized app) developers with wallet communication (signature verification and acceptance) by providing a simple and intuitive API.

Instead of focusing on supporting specific signature providers one by one, developers can support every one that has built a Transit plugin, allowing the user to use their signature provider of choice. This way, the best UX for signature providers wins and the developers can focus on building their dApp instead of setting up `eosjs` and wallet connections.

Please see the "Quick Start" and thorough guide in the [`eos-transit` package docs](https://github.com/eosnewyork/eos-transit)


### Universal Authenticator Library 
A library exists that allows apps to easily use different auth providers. App Developers need to support many authentication providers (wallets) in order to maximize user reach and permit user choice.

The [Universal Authenticator Library (UAL)](https://github.com/EOSIO/universal-authenticator-library)  achieves this goal by abstracting the internal business logic of many authentication providers and exposing a single universal API.


#### Available Authenticators:
 - [UAL for Scatter](https://github.com/EOSIO/ual-scatter)
 - [UAL for Lynx](https://github.com/EOSIO/ual-lynx)
 - [UAL for Ledger](https://github.com/EOSIO/ual-ledger)
 - [UAL for Token Pocket](https://github.com/EOSIO/ual-token-pocket)
 - [UAL for MEET.ONE](https://github.com/meet-one/ual-meetone)
 - [UAL for Anchor](https://github.com/greymass/ual-anchor)

### KEOSD
In the EOSIO's distribution comes included a CLI client called [`cleos`](https://developers.eos.io/manuals/eos/latest/cleos/index) that interacts with lite client called [`keosd`](https://developers.eos.io/manuals/eos/latest/keosd/index) which provides a secure wallet service and API endpoint for applications that require back-end integration with a signature provider.

Public key cryptography has been in use for several decades and has evolved to a set of standards for digital signatures. Many governments have adopted digital signature standards so individuals or businesses can obtain identity certificates and use them to sign legal documents.

> LACChain EOSIO aspires to integrate self-sovereign identity for end users that is compatible with national digital identities and digital signatures commonly used by large enterprise users.

Integrating digital identity to blockchain networks opens new opportunities, for example:

- Integrating digital identity with blockchain will reduce the need for KYC.

- Seamlessly integrating with existing IT solutions.

- Removing the complex private key mechanics from the user experience.

## X.509 client certificates

Certificates issued by a Certificate Authority (CA) who is responsible for validating the user's identity is commonly used for Digital Indentity. These certificates can then be used to generate blockchain private keys. Read this article on [Using X.509 PKI certificates as EOSIO blockchain identity](https://github.com/cc32d9/cc32d9_ideas_for_EOSIO/blob/master/X509_Certificates_as_EOSIO_id.md)
