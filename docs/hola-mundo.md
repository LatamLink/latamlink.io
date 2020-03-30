---
id: hola-mundo
title: Contrato Hola Mundo
sidebar_label: Contrato Hola Mundo
---

Explicamos con ejemplos cómo crear una cuenta y un contrato “Hello World” para subir a una blockchain basada en EOS.IO. Para este ejemplo, nos basamos en recursos publicados por [Block.one para compartir con la comunidad](http://developers.eos.io/).

## Antes de iniciar
Primero, es recomendable tener instalado el software [EOSIO](https://github.com/eosio) desarrollado por [Block.one](https://block.one/) para realizar acciones con el protocolo EOS siguiendo el comando `brew tap eosio/eosio` y `brew install eosio`. Este software se compone de:

- **cleos:** es el command line tool que se conecta con el API expuesto por nodeos y funciona para administrar la billetera, cuenta, llaves, transacciones y contratos inteligentes.
- **nodeos:** funciona como el daemon central que maneja la red EOSIO y puede ser configurado como nodo para producir bloques.
- **keosd:** funciona como billetera para manejar las llaves para EOSIO.

![Cleos](/img/diagramas/cleos.png)

Adicionalmente, recomendamos instalar desde antes el Contract Development Toolkit (CDT), que se puede instalar utilizando el comando `brew tap eosio.cdt` y seguido de `brew install eosio.cdt` para acceder a recursos para crear los contratos.

## Crear cuenta en un blockchain público
En la terminal, vamos a ejecutar el comando `cleos` para generar las llaves criptográficas requeridas para crear una cuenta . Para crear una cuenta en una blockchain pública, se recomienda usar el sandbox Jungle Testnet de Crypto Lions. Además, vamos a requerir un block explorer para verificar las acciones ejecutadas. Para eso, vamos a usar Bloks.io que es muy popular entre la comunidad EOS.


## Generar y gestionar las llaves
Para generar llaves, requisito para crear una cuenta en una blockchain, vamos a correr el comando cleos create key en la terminal. Este comando nos va a generar llaves privadas y públicas — podemos crear la cantidad de llaves que queramos. Las cuentas cleos, por defecto, vienen en pares: una “active key” y una “owner key” (para recuperar cuenta en caso de perder la active key).

Una vez generadas las llaves, nos dirigimos al sandbox, Jungle Testnet, para crear la cuenta. El nombre de la cuenta debe cumplir con ciertos requisitos: caracteres de la A a la Z en minúscula, números del 1 al 5 y tener una longitud de 12 caracteres. Para el ejemplo, llamaremos la cuenta: “holacontrato”.
Luego, introducimos las llaves públicas de “owner” y “active” para ejecutar el contrato. Estas pueden ser cualquiera de las que se generaron con el comando cleos create key anteriormente. Se recomienda no compartir las llaves privadas.


## Administrar la billetera
Una vez creada la cuenta, debemos generar la billetera e identificarla con el nombre de la cuenta, que en este ejemplo es “holacontrato”, mediante el comando cleos wallet create.

En este momento, las llaves están guardadas únicamente en la consola, por lo que es necesario crear la billetera que contendrá las llaves. De esta manera, se podrá acceder a estas llaves con una única contraseña. Hay que importar las llaves en la billetera una a la vez, siguiendo el comando: `cleos wallet import` y añadiendo el nombre de la cuenta.

## Adquirir recurso RAM
Una vez que se tiene la cuenta en el sandbox Jungle Testnet, podemos usar el Faucet para recibir tokens ficticios gratis, que en este caso serán EOS, necesarios para usar recursos de la red (siempre y cuando se tenga participación en esa red). La lógica de esto es que, para el contrato, estaremos requiriendo adquirir recursos RAM de block producers, para lo cual necesitaremos estos EOS que se nos acaban de enviar.
Con este comando podemos revisar la cantidad de EOS con los que contamos en esta cuenta (que en este caso son 100 EOS), así como el recurso RAM, que en este momento es de 5.366 KiB.


En este caso estamos conectados a un url remoto por medio de un API endpoint de Jungle Testnet para extraer la información de la cuenta.
Para adquirir RAM, escribimos el comando buyram para nuestra cuenta. Se debe especificar dos veces el nombre de la cuenta, una vez para definir de dónde salen los EOS y otra vez para indicar hacia dónde se envía el RAM. En la misma línea, se debe indicar la cantidad de EOS que estaremos aportando. Para el ejemplo estaremos enviando 50 EOS. Al tener la billetera desbloqueada, automáticamente adquirimos el RAM por el monto de EOS que indicamos.

Luego de ejecutar la compra, se puede verificar que ahora se tienen 86 KiB de RAM y solo 50 EOS de los 100 que originalmente nos fueron asignados.

En el block explorer de Bloks.io, se puede buscar la información de esa cuenta. Adicionalmente, se pueden revisar las acciones tomadas, incluyendo las transacciones de compra de RAM, los tokens del Faucet y el historial completo de movimientos.

Para continuar, vamos a crear un contrato sencillo dentro de un nuevo directorio, el cual llamamos “holacontrato”. Como en EOS se requieren recursos, estos deberán estar asociados a los tokens de una cuenta, por lo que se debe poner el mismo nombre del contrato anteriormente creado.

Para editar el contrato, puede usarse un editor de texto. Para este ejemplo se utilizó Sublime Text.
La primera línea incluye una librería que a la cual se tiene acceso a través del Contract Development Toolkit (CDT), una herramienta que permite acceder a recursos para crear los contratos.
En la línea de clase, se deberá exponer nuestro contrato “holacontrato” que tiene una acción definida, que en este caso llamamos “Hola” y su argumento es un usuario tipo nombre. Al guardar el contrato, en el directorio queda un archivo C++.

El archivo C++ se tiene que compilar usando la herramienta CDT (Contract Development Toolkit), que recibe de input el archivo C++ y como output origina un archivo web assembly (wasm) que es un archivo ejecutable por el contrato.
Adicional al archivo wasm, también se genera un archivo abi que sirve para el mapeo de las funciones del contrato. El comando va a recibir el contrato como un input y como output va a generar un archivo wasm que es el archivo que realmente se sube al blockchain.

Como no especificamos una, el sistema nos da un mensaje de que no existe una cláusula ricardiana. Una cláusula ricardiana es un contrato en prosa, escrito en inglés, que describe la intención del contrato y que debe estar alineada con la intención para la que se creó. En el sitio de Block.one vienen recursos para las cláusulas ricardianas. Para efectos del ejemplo no creamos uno.

Una vez ejecutado el comando para set contract, el sistema lee la información en el contrato para luego publicarlo.


Una vez listo el contrato, vamos a publicar en la cuenta de Jungle Testnet. Para publicar nuestro contrato, debemos usar el comando usado en cleos y el API endpoint usado anteriormente en Jungle Testnet para subir el contrato a la ubicación que queremos con un permiso activo para poder firmar con la billetera creada.
De vuelta al block explorer (Bloks.io), podemos verificar que la cuenta es dueña de un contrato que expone la acción “Hola” y que contiene la información abi en la que se especifican en estructura JSON las acciones dentro del contrato y componentes asociados.


Una vez que el contrato esté listo, podemos ejecutar una acción en el contrato. Con cleos existe un comando para especificar el endpoint dentro de Jungle Testnet y así ejecutar la acción “Hola”. Para este ejemplo, ponemos como input: “eoscostarica”. El output de la acción será el texto “Hola eoscostarica”.

Podemos verificar en Bloks.io las acciones ejecutadas.

Es necesario esperar unos segundos para completar la irreversibilidad del bloque, ya que los block producers deben hacer la validación del bloque de datos para esto.

Finalmente, esta es una muestra de cómo se puede interactuar con una blockchain. Existen herramientas de Javascript, librería eosjs que podría implementarse para ejecutar acciones de una manera más programática para integrar con dApps, poder persistir datos, o incluso ejecutar lógica de negocios en la blockchain con este mismo patrón.

<iframe width="560" height="315" src="https://www.youtube.com/embed/nMivNMvS09Y" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
