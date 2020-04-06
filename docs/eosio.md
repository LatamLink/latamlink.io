---
id: eosio
title: Testnet de EOSIO para LAC-Chain
sidebar_label: Protocolo EOSIO
---


**EOSIO** es software de código abierto que permite lanzar redes blockhain altamente configurables sobre las cuales desarrolladores y emprendedores pueden correr aplicaciones blockchain de alto rendimiento. [EOSIO](https://eos.io) fue creado en el 2018 y es mantenido por la empresa [Block One](https://block.one).  La primera red pública lanzada sobre EOSIO se llama **EOS**, tambien referida como "mainnet". EOS es una de múltiples redes blockchain públicas actualmente utilizado EOSIO. Puede ver la siguiente [lista de redes EOSIO](redes-eosio.md). También existen múltiples redes privadas que actualmente utilizan EOSIO.

[![EOSIO Github](/img/eosio-logo.png#center)](https://github.com/eosio)

Una red blockchain basada en el protocolo EOSIO tiene una arquitectura flexible, en la cual gran parte de las reglas de operación se definen a través de los **contratos del sistema**. 

Esta flexibilidad se debe a que los contratos de sistema constituyen un módulo separado del protocolo base de EOSIO. De esta forma, las funciones centrales de los nodos y el mecanismo de producción de  bloques se mantiene aparte de los contratos de sistema.

Los contratos de sistema permiten a las redes EOSIO:

- Configurar fácilmente la gobernanza de la red mediante contratos inteligentes.
- Tener reglas transparentes de operación del sistema.
- Sincronizar los cambios en las reglas de operación de forma instantánea en toda la red, lo que reduce la administración y los costos de las actualizaciones de gobernanza.
- Mantener la compatibilidad total con otras cadenas de bloques EOSIO.

**El objetivo de LatamLink es implementar el testnet de EOSIO para LAC-Chain** y demostrar la flexibilidad de esta tecnología desarrollando contratos de sistema personalizados para LAC-Chain. El testnet de LatamLink permitirá designar los actores que escriben y validan bloques nuevos a la cadena mediante contratos de sistema basados en mecanismos de consenso  Proof-of-Authority (POA) en una blockchain pública permisionada.


