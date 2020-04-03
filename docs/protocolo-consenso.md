---
id: protocolo-consenso
title: Mecanismo de Consenso
sidebar_label: Protocolo de Consenso
---

Defina un número fijo adecuado de nodos de validación activos y habilite una rotación basada en contratos inteligentes de tal manera que:
- Los nodos activos y de respaldo pueden cambiarse automáticamente cuando se detectan fallas de funcionamiento.
- Los nodos también se rotan periódicamente en función de la descentralización y el rendimiento.
- Ser capaz de reconocer las firmas de los nodos escritores y verificar que las transacciones hayan sido transmitidas a la red por nodos escritores autorizados en el contrato inteligente para su autorización. 


## Trazabilidad de nodos broadcasters de transacciones (Full Nodes)
Los nodos sean capaces de reconocer a través de que nodo a entrado la transacciones a la red 

verificar que la transacción fue emitida por un nodo que esté permisionado . 

Esta trazabilidad posiblemente requiera modificar la estructura de la transacción para incluir la firma del nodo.

(actualmente esto no se permite en BESU IBFT 2) (problema de bloque vacios)

No se puede verificar quien es el nodo validador que puede escribir.

- Quien maneja esa lista? 


Hoy en día, no se puede rastrear qué nodo de escritor generó esa transacción, por lo que no es posible hacerlos legalmente responsables de ella.

## Comite Permisionador

Evalua entidades que quieren ser validadores (BID)

Eventualmemte habra un vehiculo legal , quien verfica identodad y firma contratos con productores de bloques. 


Cualquiera que cumpla con un minimo de requisitos tecnicos puede ingresar
Los validadores no deciden quien entra es el comite permisionador

Puede aplicar para ser escritor o validador - mantiene la lista de peers confiados.





## Rotación de nodos validadores

- definir un numero optimo de nodos validadores 
- por ejemplo 21 activos y backups
- definir validadores por aleatoriedad (Randomly assigned schedule) semanal
- sin poder predecir quienes sean (entropia externa)


## Productores de Respaldo 
- Si hay un problema de performance entra un nodo de respaldo 
- mediante unas metricas objetivas de performance.

automatico o manual ?

-  oracle smart contracts
-  comite permisionador

Se puedan rotar los nodos validadores (definir numero optimo de validadores)
Nodos backup / 


herramientas de monitoreo

Producir informacion descrentralizada y confiable sobre cada nodo?


	- a que entidad pertenece 
	- ubicacion de nodos
	- performance del nodo
	- datos publicos
	- oracle distribuido que provee datos de performance a smart contract
	- datos podrian venir de validadores (todo tienen el mismo peso ) , sin embargo el comite permisionadore se reserva el derecho discrecional de eliminar un productor.

- comité permisionador que tengo el menor intrveencion posible  . sin embrago para una red publica permisionada ser requiere de 



## Modificaciones a Contratos de Sistema EOSIO

Se dispondrá de una modificación en el sistema de validación de contratos o “system contract validations” (este es un fork de los contratos de la empresa block.one). Por ejemplo ver los siguientes [contratos de sistema](https://github.com/theblockstalk/eosio-contracts/tree/governance/governance/POA/include) modificados POA para EOSIO.


Además, se eliminará el uso de tokens y de votos característicos del protocolo EOSIO. Es decir, al momento de girar recursos, no será necesario disponer de ningún token. Esta funcionalidad no necesariamente se eliminará, sino que se utilizará una función de “assert false” para deshabilitar las funciones ya que la plataforma no soporta estas funciones.

Funciones deshabilitadas:

 - Token de Sistema
 - Votos por Productores de Bloques
 - Pago de Productores de Bloques
 - "Staking" para recursos
 - Delegación de Recursos
 - Namebiding
 - Rex

## Cuenta privilegiada "system"

Se fijará una cuenta compuesta por el grupo de productores de bloques que represente la autoridad máxima de la red. Esta cuenta podrá ejecutar cualquier acción en la red y poseer acceso ilimitado a los recursos. Es decir, se podrá iniciar una cadena de bloques con un solo nodo (bios node) que puede agregar otros nodos a la tabla de productores de bloques. Este nodo podrá determinar cuáles cuentas pueden compartir la responsabilidad de producir bloques nuevos en la cadena.

Asimismo, se utilizará un contrato multifirma (o “multisig”) con parámetros variables que requerirá el consentimiento de la mayoría de los productores en la tabla. Esta cuenta privilegiada se denominará la cuenta “system”.

Se propone una función multisig para agregar un block producer. Para añadir otro productor de bloques, solo se requiere una firma. Sin embargo, luego requerirán dos firmas. Después, tres firmas, y así seguidamente.


| # Productores | Firmas Requeridas |
|---|---|
| 1 | 1/1 |
| 2 | 2/2 |
| 3 | 2/3 |
| 4 | 3/4 |
| 5 | 3/5 |
