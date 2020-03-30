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