---
id: protocolo-eosio
title: Protocolo EOSIO
---

Una cadena de bloques basada en el protocolo [EOSIO](https://eos.io) tiene una arquitectura flexible, en la que la mayoría de las reglas de operación se definen a través de los contratos del sistema. 

La empresa block.one lanzó el protocolo EOSIO que usa el mecanismo de consenso conocido como “Delegated Proof-of-Stake” (dPOS). Este mecanismo fue diseñado para incluir un proceso de elecciones y así descentralizar la gestión de la red. Es posible pensar en dPOS como una implementación de democracia basada en la tecnología. 

El protocolo dPOS define los contratos de sistema como una librería de código escrito en C++. Los contratos de sistema constituyen un módulo separado del sistema base de EOSIO. De esta forma, las funciones centrales de los nodos y el mecanismo de consenso de bloques se mantiene aparte de los contratos de sistema.

Estos contratos de sistema permiten a las redes EOSIO:

- Tener reglas transparentes de operación del sistema.
- Configurar fácilmente la gobernanza de la red mediante contratos inteligentes.
- Mantener la compatibilidad total con otras cadenas de bloques EOSIO.
- Sincronizar los cambios en las reglas de operación de forma instantánea en toda la red, lo que reduce la administración y los costos de las actualizaciones de gobernanza.

El objetivo de Latam Link es implementar el testnet de EOSIO para LACChain y demostrar la flexibilidad de esta tecnología para configurar los contratos de sistema. Además, se quiere comparar la implementación de esquemas Proof-of-Authority (POA) y dPOS en una blockchain pública permisionada. Esta comparación permitirá demostrar las diferencias de designación de actores que gestionan la red de forma autoritaria en vez de seguir lineamientos democráticos.

Por consiguiente, la intención es no utilizar la funcionalidad de votos nativa del protocolo EOSIO. Además, se eliminará el uso de tokens (o criptomonedas) para determinar los custodios de la red (productores de bloques). En cambio, se asignarán los custodios de la red mediante una autoridad central derivada del conjunto de productores de bloques designados mediante aprobaciones multifirmas (multisig). Para lograr esta metodología, se implementarán contratos que requieran del consenso del grupo mediante la aprobación de la mayoría simple, es decir, que se junten los votos de la mitad de los productores de bloques más uno adicional como mínimo.


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

