---
id: protocolo-consenso
title: Mecanismo de Consenso
sidebar_label: Mecanismo de Consenso
---

El mecanismo de consenso asegura que cada nuevo bloque que se agrega al Blockchain sea la única versión de la verdad acordada por todos los nodos en la red. Por lo tanto, un algoritmo de consenso tiene como objetivo encontrar un acuerdo común que sea una aceptado por toda la red.

En el caso de LatamLink existe un grupo de nodos que poseen la autoridad de validar transacciones y escribir estas transacciones dentro de bloques nuevos. A estos nodos los denominaremos **Productores de Bloques**. 

## Proof of Authority (POA)

El grupo de productores de bloques poseen la autoridad de escribir a la cadena de bloques porque fueron otorgados este privilegio por parte de la  autoridad superior, el comité permisionador, quien sera la máxima autoridad y quien determina cuales serán los nodos productores de bloques. 

Cualquiera que cumpla con un mínimo de requisitos técnicos puede aplicar para ser escritor o validador.

## Productores de Bloques Activos

Se define un número fijo adecuado de nodos activos 

- Hasta **125 productores de bloque activos**, especificado mediante  `max_producers` en [config.hpp](https://github.com/EOSIO/eos/blob/master/libraries/chain/include/eosio/chain/config.hpp#L106)


Los nodos productores de bloques pertenecen a un grupo que comparte la responsabilidad de validar y escribir todas las acciones en la red.

Son capaces de reconocer las firmas de los nodos escritores y verificar que las transacciones hayan sido transmitidas a la red por nodos escritores autorizados en el contrato inteligente para su autorización. 

Este grupo se organiza en un lista en orden alfabético.

Los bloques nuevos son producidos por el primer nodo  en la lista durante un periodo de 6 segundos (12 bloques) y luego pasa el siguiente nodo a producir los siguientes 12 bloques y así sucesivamente. 

### Rotación de nodos activos

- Se habilita una rotación basada en contratos inteligentes (random) sin poder predecir quienes sean (entropia externa)

- Los nodos también se rotan periódicamente en función de la descentralización y el rendimiento. Semanal?

- Los nodos activos y de respaldo pueden cambiarse automáticamente cuando se detectan fallas de funcionamiento.


### Irreversabilidad de Bloques

Los bloques no se consideran irreversibles en la cadena de hasta que hayan sido validadas por 2/3 +1 de los productores activos. De tal manera que si un productor del grupo inserta una transacción invalida los nodos siguientes validaran las transacciones y no serán incluidas sin que 2/3 +1 hayn validado ese bloques. 


## Productores de Respaldo 
- Si hay un problema de performance entra un nodo de respaldo 
- mediante unas metricas objetivas de performance.

automatico o manual ?

-  oracle smart contracts
-  comite permisionador

Se require definir numero optimo de nodos backup. 


## Trazabilidad de nodos
Los nodos sean capaces de reconocer a través de que nodo ha entrado la transacciones a la red , broadcasters de transacciones (Full Nodes)

verificar que la transacción fue emitida por un nodo que esté permisionado . 

Esta trazabilidad posiblemente requiera modificar la estructura de la transacción para incluir la firma del nodo.

(actualmente esto no se permite en BESU IBFT 2) (problema de bloque vacios)

No se puede verificar quien es el nodo validador que puede escribir.

- Quien maneja esa lista? 

Hoy en día, no se puede rastrear qué nodo de escritor generó esa transacción, por lo que no es posible hacerlos legalmente responsables de ella.



## Comite Permisionador

Evalua entidades que quieren ser validadores (BID)

Eventualmemte habrá un vehículo legal , quien verifica identidad y firma contratos con productores de bloques. 

Esta  autoridad central podrá ser derivada de un conjunto de actores mediante aprobaciones multifirmas (multisig) te tal manera que se requieran del consenso del grupo mediante la aprobación de la mayoría simple, es decir, que se junten los votos de la mitad de los actores más uno adicional como mínimo.

- comité permisionador que tengo el menor intervención posible  . sin embrago para una red publica permisionada ser requiere 

## Contratos de Sistema

Se dispondrá el mecanismo de validación para LAC-Chain mediante contratos de sistema personalizados. Para esto nos basaremos en los contratos de sistema nativos de EOSIO.  cambio es un cambio de DPOS a POA de LAC-Chain

Este cambio implica deshabilitar el uso de tokens y de votos característicos del protocolo DPOS. Es decir, al momento de girar recursos, no será necesario disponer de ningún token. Esta funcionalidad no necesariamente se eliminará, sino que se utilizará una función de “assert false” para deshabilitar las funciones ya que la plataforma no soporta estas funciones.

Funciones deshabilitadas:

 - Token de Sistema
 - Votos por Productores de Bloques
 - Pago de Productores de Bloques
 - "Staking" para recursos
 - Delegación de Recursos
 - Namebiding
 - Rex

