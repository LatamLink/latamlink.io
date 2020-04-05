---
id: llaves-privadas
title: Manejo de Llaves Privadas
sidebar_label: Llaves Privadas
---

## Crear cuenta en el blockchain público
En la terminal, vamos a ejecutar el comando `cleos` para generar las llaves criptográficas requeridas para crear una cuenta . Para crear una cuenta en el testnet de LatamLink. Además, vamos a requerir un block explorer para verificar las acciones ejecutadas. Para eso, vamos a usar Bloks.io que es muy popular entre la comunidad EOS.


## Generar y gestionar las llaves
Para generar llaves, requisito para crear una cuenta en una blockchain, vamos a correr el comando cleos create key en la terminal. Este comando nos va a generar llaves privadas y públicas — podemos crear la cantidad de llaves que queramos. Las cuentas cleos, por defecto, vienen en pares: una “active key” y una “owner key” (para recuperar cuenta en caso de perder la active key).

Una vez generadas las llaves, nos dirigimos al sandbox, LatamLink Testnet, para crear la cuenta. El nombre de la cuenta debe cumplir con ciertos requisitos: caracteres de la A a la Z en minúscula, números del 1 al 5 y tener una longitud de 12 caracteres. Para el ejemplo, llamaremos la cuenta: “holacontrato”.
Luego, introducimos las llaves públicas de “owner” y “active” para ejecutar el contrato. Estas pueden ser cualquiera de las que se generaron con el comando cleos create key anteriormente. Se recomienda no compartir las llaves privadas.


## Administrar la billetera
Una vez creada la cuenta, debemos generar la billetera e identificarla con el nombre de la cuenta, que en este ejemplo es “holacontrato”, mediante el comando cleos wallet create.

En este momento, las llaves están guardadas únicamente en la consola, por lo que es necesario crear la billetera que contendrá las llaves. De esta manera, se podrá acceder a estas llaves con una única contraseña. Hay que importar las llaves en la billetera una a la vez, siguiendo el comando: `cleos wallet import` y añadiendo el nombre de la cuenta.

## Autenticadores Externos (Wallets)

La última actualización importante para EOSJS incluyó soporte incorporado para proveedores de firmas intercambiables; eliminando la carga de manejar la gestión segura de claves de su alcance y mejorando la interoperabilidad. Lo que es más importante, esta es una mejora importante de seguridad que limita la exposición de las claves de un usuario en muchas aplicaciones a un único proveedor de firmas confiable que mitiga los riesgos potenciales que pueden surgir de un código malicioso o un error del usuario al usar aplicaciones blockchain.

## Quantum safe cryptography
 
 El BID tiene interés en comenzar a explorar cómo avanzar hacia una nueva generación de tecnología blockchain segura cuántica. Hay un interes en  probar las capacidades cuánticas en la red LACChain para hacerlo resistente a las computadoras cuánticas. 

 Este tema se abordó en [esta publicación del BID](https://publications.iadb.org/es/tecnologias-cuanticas-una-oportunidad-transversal-e-interdisciplinar-para-la-transformacion-digital)

   
LatamLink explorará la forma generar certificados siguiendo el estándar de credenciales verificables [VC](https://www.w3.org/TR/vc-data-model/) para todos los nodos en la red que tendrán como mecanismo de autenticación un par de llaves pública-privada generados con un algoritmo cuántico seguro.

Con el objetivo de :

- Usar estas llaves para encapsular el proceso de [comunicación entre nodos a través de TCP / RPLx](https://github.com/lacchain/besu-network/blob/master/TOPOLOGY_AND_ARCHITECTURE.md)
-  Usar las llaves cuánticas para firmar las transacciones emitidas por los nodos escritor, de modo que puede ser verificado por los nodos validadores
 
