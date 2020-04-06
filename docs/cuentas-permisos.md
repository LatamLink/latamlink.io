---
id: cuentas-permisos
title: Cuentas y Permisos
sidebar_label: Cuentas y Permisos
---

## Cuentas

Una cuenta en EOSIO es un nombre legible para humanos que se almacena en la cadena de bloques. Puede ser propiedad de un individuo o grupo de individuos dependiendo de la configuración de los permisos. Se requiere una cuenta para transferir o enviar cualquier transacción válida a la cadena de bloques.

El nombre de la cuenta debe cumplir con ciertos requisitos: caracteres de la a `a` la `z` en minúscula, números del `1` al `5` y tener una longitud de 12 caracteres. Por ejemplo : `latamlink12`.

## Autorizaciones y Permisos

Los permisos son nombres arbitrarios utilizados para definir los requisitos para una transacción enviada en nombre de ese permiso. Se pueden asignar permisos para la autoridad sobre acciones contractuales específicas vinculando autorización o linkauth.

Para obtener más información sobre estos conceptos, consulte la [documentación de Cuentas y permisos](https://developers.eos.io/welcome/latest/protocol/accounts_and_permissions).


## Wallets

Los wallets son clientes que almacenan llaves privadas asociadas con los permisos de una o más cuentas. Idealmente, un wallet (o billetera) tiene un estado bloqueado (cifrado) y desbloqueado (descifrado) que está protegido por una contraseña de alta entropía. En la distribución de EOSIO  viene incluido  un cliente CLI llamado `cleos` que interactúa con un cliente lite llamado `keosd`.