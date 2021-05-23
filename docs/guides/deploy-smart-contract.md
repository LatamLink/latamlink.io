---
id: deploy-smart-contract
title: How to Deploy a Smart Contract
sidebar_label: How to Deploy a Contract
---

Below we explain with examples how to create, compile and deploy a “Hello World” contract to upload it to the LACChain EOSIO network. For this example, we are relying on resources posted by [Block.one to share with the community](http://developers.eos.io/).

## 1. Get your LACChain EOSIO account

In the LACChain EOSIO network, there are several types of accounts. See the guide to create an account according to your user role:

- [End User](./create-user-account)
- [App or contract](./create-contract-account)
- [Non-partner](./create-entity-account)
- [Partner](./create-entity-account)

## 2. Acquire RAM

Once the account is had in the LACChain EOSIO Testnet, for the contract, we will need to have resources to deploy the contract in this case RAM. For this consult about the [management of resources in the network](../resource-usage).

To extract the account information and verify how many kilobytes of RAM the account has available, it can perform by executing the following command which can point to the "end-point" of any of the network partners, you can see the list of partners [here](./partners).

```bash
cleos -u http://lacchain.eosio.cr get account {nombrecuenta}
```

## 3. Create a Contract

To continue, we are going to create a simple contract within a new directory, which we call `hellocontract`. As EOS requires resources, these must be associated with the tokens of an account, so the same name of the previously created contract must be entered.

```cpp title="holacontrato.cpp"
# include <eosio/eosio.hpp>
using namespace eosio;
class [[eosio::contract]] holacontrato : public contract {
	public:
		using contract::contract;
		[[eosio::action]]
		void hola( name user ){
			print( "Hola, ", user );
		}
};
```

To edit the contract, a text editor can be used. Sublime Text was used for this example.

The first line includes a library that can be accessed through the Contract Development Toolkit (CDT), a tool that allows access to resources to create contracts, [information about their installation](./development-environment).

In the class line, we must expose our contract `hellocontract` that has a defined action, which in this case we call` hello` and its argument is a user type name. When you save the contract, a C ++ file remains in the directory.


## 4. Compile the contract

The C ++ file has to be compiled using the CDT tool, which receives the C ++ file as input and as output originates a web assembly (wasm) file that is an executable file by the contract. In addition to the wasm file, an abi file is also generated that is used for mapping the contract functions.

```bash
eosio-cpp -abigen -contract holacontrato -o holacontrato.wasm src/holacontrato.cpp
```

<br/>

:::note Note
**-abigen**: Flag to generate the file ABI (Application Binary Interface).

**-contract**: Specify the name of the contract.

**-o**: Specifies the name of the compiled file.
:::

<br/>

Since we do not specify a Ricardian clause, the system gives us a message that it does not exist. See more information about [Ricardian clauses](https://guias.eoscostarica.io/docs/aprender-eosio/contratos-ricardianos).


## 5. Publish the contract

When the contract has been compiled and the .wasm file and .abi file have been generated, the contract is uploaded to LACChain and for this case, it is required to create a .sh file that allows the execution of commands to automate this to a certain extent. process.

In the terminal, we execute:

```bash
touch holacontrato.sh
chmod 755 holacontrato.sh
```

<br/>

:::note Note
**touch**: creating a file

**chmod**: change mode (assign or remove privileges)
:::

<br/>

### 5.1 Shell File

Inside the file that we just created, the following function must be inserted:

```bash title="hellocontract.sh"
deploy_hellocontract_contracts_to_lacchain() {   
    echo 'Deploy hellocontract'
    mkdir -p ./stdout/hellocontract
    TEMP_DIR=./stdout/hellocontract
    echo '1. set hellocontract smart contract code'
    cleos -u $EOS_API_URL set contract hellocontract -j -d -s ../hellocontract/ >$TEMP_DIR/tx2.json
    echo '2. writer auth'
    cleos -u $EOS_API_URL push action -j -d -s writer run '{}' -p costarica@writer >$TEMP_DIR/tx1.json
    echo '3. merge actions'
    jq -s '[.[].actions[]]' $TEMP_DIR/tx1.json $TEMP_DIR/tx2.json >$TEMP_DIR/tx3.json
    echo '4. merge transaction'
    jq '.actions = input' $TEMP_DIR/tx1.json $TEMP_DIR/tx3.json >$TEMP_DIR/tx4.json
    echo '5. sign transaction'
    cleos -u $EOS_API_URL push transaction $TEMP_DIR/tx4.json -p costarica@writer -p hellocontract@active
}

deploy_hellocontract_contracts_to_lacchain
```

By this point in the execution, we already have our smart contract deployed in LACChain.

## 6. Contract Verification

For this we go to the ([LACChain EOSIO Dashboard](https://lacchain.eosio.online/accounts)), we can verify that the account is the owner of a contract that exposes the action `hello` and that it contains the information ABI in which the actions within the contract and associated components are specified in a JSON structure.

Once the contract is ready, we can execute an action on the contract, it will receive as input the phrase **LACChain EOSIO** and it will be obtained as output **hello LACChain EOSIO**. For this we must execute the following command:

```bash
cleos -u http://lacchain.eosio.cr push action holacontrato hola '["LACChain EOSIO"]' -p holacontrato@active
```

:::note Note
It is necessary to wait a few seconds to complete the irreversibility of the block, since the block producers must validate the data block for this.
:::

## Video-Tutorial

<iframe width="100%" height="350px" src="https://www.youtube.com/embed/nMivNMvS09Y" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen mark="crwd-mark"></iframe>
