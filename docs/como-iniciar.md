---
id: como-iniciar
title: Como Iniciar
sidebar_label: Como Iniciar
---

## Antes de iniciar
Primero, es recomendable tener instalado el software [EOSIO](https://github.com/eosio) desarrollado por [Block.one](https://block.one/) para realizar acciones con el protocolo EOS siguiendo el comando `brew tap eosio/eosio` y `brew install eosio`. Este software se compone de:

- **cleos:** es el command line tool que se conecta con el API expuesto por nodeos y funciona para administrar la billetera, cuenta, llaves, transacciones y contratos inteligentes.
- **nodeos:** funciona como el daemon central que maneja la red EOSIO y puede ser configurado como nodo para producir bloques.
- **keosd:** funciona como billetera para manejar las llaves para EOSIO.

![Cleos](/img/diagramas/cleos.png)

Adicionalmente, recomendamos instalar desde antes el Contract Development Toolkit (CDT), que se puede instalar utilizando el comando `brew tap eosio.cdt` y seguido de `brew install eosio.cdt` para acceder a recursos para crear los contratos.

## Obtenga sus llaves privadas

Mas información [sobre llaves privadas.](llaves-privadas.md)  

## Creador de cuentas ágil

Portal para crear cuentas y llaves públicas o privadas en un solo clic.
