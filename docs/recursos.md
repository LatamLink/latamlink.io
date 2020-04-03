---
id: recursos
title: Asignación de recursos
sidebar_label: Recursos
---

LACChain no tiene y no tendrá tarifas de transacción. Sin embargo, para limitar el uso de la red a sus límites técnicos y evitar ataques de denegación de servicio, es necesario establecer un mecanismo para solicitar y asignar recursos de red.


Las cuentas podrán utilizar los siguientes recursos en la red:
 - CPU
 - RAM
 - NET


 La cuenta “system” tendrá recursos ilimitados. La autoridad podrá determinar la cantidad de cada recurso que se asignará a las demás cuentas dentro de la blockchain.


Los recursos son establecidos de forma directa mediante una transacción firmada por la cuenta “system.” Esta autorización se deberá obtener mediante un proceso multifirmas de las cuentas de los productores de bloques elegidos. Asimismo, se podrá usar una función conocida como “delegate function” sin necesidad de usar funciones de “EOS staking”. 

La primera función para establecer recursos se conoce como `set account resources.`
La segunda función es para establecer límites y se conoce como `set account limits` `(eosio.bios: setalimits)`.

- NET - set account limits.
- CPU - set account limits.
- RAM - set account limits ó se puede tokenizar.


Para llevar a cabo las funciones de asignación de recursos, también existe la opción de implementar recursos ilimitados con un throttling en el API.