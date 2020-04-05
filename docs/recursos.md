---
id: recursos
title: Asignación de recursos 
sidebar_label: Recursos Computacionales
---

LACChain no tiene y no tendrá tarifas de transacción. Sin embargo, para limitar el uso de la red a sus límites técnicos y evitar ataques de denegación de servicio, es necesario establecer un mecanismo para solicitar y asignar recursos de red.

## Recursos Computacionales

Las cuentas podrán utilizar los siguientes recursos en la red:
### CPU
Recursos de Computacion medido en nanosegundos 

### RAM
Recursos de Memoria del estado medido en KiloBytes

### NET

Recurso de Ancho de Banda 


## Cuenta privilegiada "system"

Esta cuenta poseer acceso ilimitado a los recursos.  Se fijará una cuenta compuesta por el grupo de productores de bloques, o el comite permisionador que representa la autoridad máxima de la red. 

Asimismo, se utilizará un contrato multifirma (o “multisig”) con parámetros variables que requerirá el consentimiento de la mayoría de los productores en la tabla. Esta cuenta privilegiada se denominará la cuenta “system”.

Se propone una función multisig para actuar como la cuenta system para delegar recursos a otra cuenta.

| # Productores | Firmas Requeridas |
|---|---|
| 1 | 1/1 |
| 2 | 2/2 |
| 3 | 2/3 |
| 4 | 3/4 |
| 5 | 3/5 |


 La cuenta “system” tendrá recursos ilimitados. La autoridad podrá determinar la cantidad de cada recurso que se asignará a las demás cuentas dentro de la blockchain.


Los recursos son establecidos de forma directa mediante una transacción firmada por la cuenta “system.” Esta autorización se deberá obtener mediante un proceso multifirmas de las cuentas de los productores de bloques elegidos. Asimismo, se podrá usar una función conocida como “delegate function” sin necesidad de usar funciones de “EOS staking”. 

La primera función para establecer recursos se conoce como `set account resources.`

La segunda función es para establecer límites y se conoce como `set account limits` `(eosio.bios: setalimits)`.


### Otras Opciones

#### API Throteling
Para llevar a cabo las funciones de asignación de recursos, también existe la opción de implementar recursos ilimitados con un throttling en el API.

#### Ram Tokenization

Se puede tokenizar el RAM


