---
id: recursos
title: Recursos de Sistema
sidebar_label: Recursos de Sistema
---

LACChain no tiene y no tendrá tarifas de transacción. Sin embargo, para limitar el uso de la red a sus límites técnicos y evitar ataques de denegación de servicio, es necesario establecer un mecanismo para solicitar y asignar recursos de red.

## Recursos Computacionales

Las cuentas podrán utilizar los siguientes recursos en la red:

### CPU
El recurso de CPU, en una cadena de bloques basada en EOSIO, representa el tiempo de procesamiento de una acción y se mide en microsegundos (μs). 

Se refiere a este recurso como `CPU bandwith`  el resultado del comando `cleos get account` se indica la cantidad de tiempo de procesamiento que una cuenta tiene a su disposición al enviar acciones a un contrato. 

Puede encontrar más detalles sobre la CPU como recurso del sistema [aquí](https://developers.eos.io/manuals/eosio.contracts/latest/key-concepts/cpu).

### RAM
En una cadena de bloques basada en EOSIO, RAM es uno de los recursos del sistema importantes que consumen las cuentas y los contratos inteligentes. RAM actúa como un almacenamiento permanente y se utiliza para almacenar nombres de cuenta, permisos, saldo de token y otros datos para un acceso rápido a los datos en cadena. La RAM debe asignarse, ya que es un recurso persistente limitado, medido en KiloBytes.

Puede encontrar más detalles sobre RAM como recurso del sistema [aquí](https://developers.eos.io/manuals/eosio.contracts/latest/key-concepts/ram).

### Network (NET)

Además de CPU y RAM, NET también es un recurso muy importante en las cadenas de bloques basadas en EOSIO. NET es el ancho de banda de la red, medido en bytes, de transacciones y se denomina `net bandwidth` en el comando `cleos get account`. Igual que CPU NET es también un recurso de sistema transitorio.

Puede encontrar más detalles sobre NET como recurso del sistema [aquí](https://developers.eos.io/manuals/eosio.contracts/latest/key-concepts/net).

## Cuenta privilegiada **eosio**

Esta cuenta poseer acceso ilimitado a los recursos.  Se fijará una cuenta compuesta por el grupo de productores de bloques, o el comité permisionador que representa la autoridad máxima de la red. 

Asimismo, se utilizará un contrato multifirma (o “multisig”) con parámetros variables que requerirá el consentimiento de la mayoría de los productores en la tabla. Esta cuenta privilegiada se denominará la cuenta `eosio`.

Se propone una función multisig para actuar como la cuenta `eosio` para delegar recursos a otra cuenta.

| # Productores | Firmas Requeridas |
|---|---|
| 1 | 1/1 |
| 2 | 2/2 |
| 3 | 2/3 |
| 4 | 3/4 |
| 5 | 3/5 |


 La cuenta `eosio` tendrá recursos ilimitados. La autoridad podrá determinar la cantidad de cada recurso que se asignará a las demás cuentas dentro de la blockchain.


Los recursos son establecidos de forma directa mediante una transacción firmada por la cuenta `eosio`. Esta autorización se deberá obtener mediante un proceso multifirmas de las cuentas de los productores de bloques elegidos. Asimismo, se podrá usar una función conocida como “delegate function” sin necesidad de usar funciones de “EOS staking”. 

La primera función para establecer recursos se conoce como `set account resources.`

La segunda función es para establecer límites y se conoce como `set account limits` `(eosio.bios: setalimits)`.


### Otras Opciones

#### API throttling
Para llevar a cabo las funciones de asignación de recursos, también existe la opción de implementar recursos ilimitados con un throttling en el API.

#### RAM Tokenization

Se puede tokenizar el RAM


