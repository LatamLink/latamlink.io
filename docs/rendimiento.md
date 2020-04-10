---
id: rendimiento
title: Rendimiendo y Seguridad de la Red
sidebar_label: Rendimiento y Seguridad
---

Es esencial conocer los límites de la infraestructura desde una perspectiva de ciberseguridad y rendimiento.

LatamLink planea realizar análisis y evaluaciones de ciberseguridad en la infraestructura. asi como realizar pruebas de estrés coordinadas juntas.

## Transacciones por Segundo (TPS)
Dependiendo del uso, EOSIO tiene capacidad de aproximadamente **10,000 transacciones por segundo** usando EOSIO v2.0.

### Ejemplos de Contratos para probar rendimiento

- [Contrato para pruebas de rendimiento](https://github.com/CryptoLions/TxShooterContract)
- [EOS Blaster](https://github.com/michaeljyeates/eos-blaster)


## Quantum safe cryptography
 
 El BID tiene interés en comenzar a explorar cómo avanzar hacia una nueva generación de tecnología blockchain segura cuántica. Hay un interes en  probar las capacidades cuánticas en la red LACChain para hacerlo resistente a las computadoras cuánticas. 

 >  Este tema se abordó en [esta publicación del BID](https://publications.iadb.org/es/tecnologias-cuanticas-una-oportunidad-transversal-e-interdisciplinar-para-la-transformacion-digital)

   
LatamLink explorará la forma generar certificados siguiendo el estándar de credenciales verificables [VC](https://www.w3.org/TR/vc-data-model/) para todos los nodos en la red que tendrán como mecanismo de autenticación un par de llaves pública-privada generados con un algoritmo cuántico seguro.

Con el objetivo de :

- Usar estas llaves para encapsular el proceso de [comunicación entre nodos a través de TCP / RPLx](https://github.com/lacchain/besu-network/blob/master/TOPOLOGY_AND_ARCHITECTURE.md)
-  Usar las llaves cuánticas para firmar las transacciones emitidas por los nodos escritor, de modo que puede ser verificado por los nodos validadores
 