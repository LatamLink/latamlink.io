---
id: topologia-red
title: Topología de Red
---

<img src="/img/diagramas/topologia-red.png" alt="Topologia de Red LatamLink" width="450"/>

## Red Core
La red core se compone de los productores de bloques quienes han sido agregados al grupo de consenso. La fuente de poder computacional final es derivada de la red core.

![Topología de Red Core](/img/diagramas/red-core.png)

### Nodos Productores de Bloques
Nodos que ejecutan los contratos inteligentes y añaden nuevos bloques a la cadena. Son los custodios de la red que escriben la cadena de bloques que el resto de la red validará.

### Productores de Bloques de Reserva
Nodos productores que pueden asumir el rol de productores de bloques si alguno del grupo principal dejará de responder.

## Red de Acceso

![Topología de Red de Acceso](/img/diagramas/red-de-acceso.png)

### Nodos API
Proveen acceso a la red mediante el API servido sobre HTTPS. Se pueden configurar como varios nodos detrás de un proxy / load balancer . También es recomendable algún tipo de protección contra ataques de denegación de servicio DDoS  ya que son el servicio con contacto directo con redes públicas.

### Nodos Completos
Mantienen un registro completo de la historia de las transacciones en una base de datos convencional que facilita la consulta de datos de las transacciones en la cadena. 

### Nodos Semilla
Proveen acceso a los bloques de los producers , se conectan directamente a los producers y a los nodos API

## Red de Consumo

La red de consumo utiliza la red de acceso para escritura y lectura del blockchain. Se compone de todas  las aplicaciones y usuarios que interactúan con el blockchain. Las interacciones de usuarios y aplicaciones se realiza mediante proveedores de firmas digitales o wallets y librerías como EOSJS.

![Topología Red de Consumo](/img/diagramas/red-consumo.png)


## Notas LAC-Chain


### Optimización de Rutas / Conexiones 
La meta es gestionar la topología de red de forma dinámica usando contratos inteligentes.

En la [topología actual de de LACChain](https://github.com/lacchain/besu-network/blob/master/TOPOLOGY_AND_ARCHITECTURE.md), los nodos "boot" se pueden conectar a todos los nodos de la red (boot, validador y escritor). En la actualidad, todos los nodos "boot" están conectados a todos los nodos. Esto no es muy escalable ni eficiente. Además, los nodos no están restringidos por la red para conectarse solo a los nodos que corresponden (es decir, escritor con boot, o validador con validador y boot), ni tienen la información sobre qué tipo de nodo es cada uno. Necesitamos proporcionarles esa información fuera de la cadena.


### Infraestructura Cloud

Es de interes de LAC-Chain utilizar implementaciones automáticas en varias nubes utilizando herramientas como terraform.
- Aprovechar las herramientas en la nube para mejorar las capacidades de la red.
- Explorar el uso de bóvedas de claves en la nube.
- Trabajar con socios para proporcionar servicios en la nube en LACChain en una base SAAS.


