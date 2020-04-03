---
id: eosio
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

