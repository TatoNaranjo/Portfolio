---
title: "Introducción a la Teoría de Grafos en C++"
description: "Un artículo completo que abarca los conceptos fundamentales de lo que es un grafo, incluyendo su estructura, tipos y aplicaciones."
pubDate: 2024-02-01
author: TatoNaranjo
image:
  url: "/images/postsImages/GraphTheory/6n-graf.svg"
  alt: "Introducción a la Teoría de Grafos en C++"
tags: ["programacion-competitiva", "algoritmos"]
lang: "es"
---

# Tabla de Contenido

- [¿Qué es un grafo?](#qué-es-un-grafo)
- [Terminología de Grafos](#terminología-de-grafos)
- [Conectividad](#conectividad)
- [Como representar grafos en un algoritmo](#como-representar-grafos-en-un-algoritmo)
- [Referencias](#referencias)

## ¿Qué es un grafo?

Los **grafos** son utilizados normalmente para representar imágenes o señales inalámbricas, pero una representación más popular puede ser la de un mapa. Imagina un mapa que tiene varias ciudades conectadas entre sí por medio de caminos.

Algunas de las preguntas que podríamos hacernos serían:

- ¿La ciudad A está conectada con la ciudad B?
- ¿Cuál es la menor distancia para viajar desde la ciudad A hasta la ciudad B?

Un grafo puede ser visto como una relación entre objetos. Veamos el siguiente ejemplo: Imagina que tienes una red de amigos en la que sabes quienes se conocen y quienes no.

![Conexiones de Redes entre Amigos](/images/postsImages/GraphTheory/socialGraph.webp)

***Podemos ver que si Bob es amigo de Alice, Alice también es amiga de Bob, por lo que hay una relación de amistad***

## Terminología de Grafos

Un grafo consiste en **nodos** y **aristas**. Los nodos son enumerados usando enteros `[1,2,...,n]`.

![Explicación de los términos de un nodo](/images/postsImages/GraphTheory/termsExplanation.webp)

***Este grafo está compuesto de 4 nodos y 4 aristas.***

Un **camino** conduce un nodo `a` hasta un nodo `b` a través de las aristas. Por ejemplo, el siguiente grafo tiene un camino `1->3->4->5` de longitud `3` del nodo `1` al nodo `5`.

![Grafo con camino](/images/postsImages/GraphTheory/pathImage.webp)

**1 -> 3 -> 4 -> 5**

A su vez, un camino se vuelve un **ciclo** si el primer nodo y el último son el mismo. También se considera como **camino simple** si cada nodo aparece al menos una vez en el recorrido.

## Conectividad

Un grafo está **conectado** si hay un camino entre dos nodos cualquiera. Por ejemplo, el siguiente grafo está conectado.

![Un Grafo Conectado](/images/postsImages/GraphTheory/connectedGraph.webp)

El siguiente grafo no está conectado, ya que no es posible conectar al nodo 4 con cualquier otro nodo.

![Un grafo no conectado](/images/postsImages/GraphTheory/notConnectedGraph.webp)

Las partes conectadas de un grafo se llaman **componentes**. Por ejemplo, el siguiente grafo contiene tres componentes `{1,2,3}`, `{4,5,6,7}` y `{8}`.

![Explicación de los componentes de un grafo](/images/postsImages/GraphTheory/graphComponents.webp)

Un **Árbol** es un grafo **conectado** si consiste de `n` nodos y `n-1` aristas. Hay un camino único entre dos nodos cualquiera de un árbol. Por ejemplo, el siguiente grafo es un árbol.

![Un Nodo Árbol](/images/postsImages/GraphTheory/tree.webp)

### Direcciones de las aristas

Un grafo es dirigido **Si las aristas pueden recorrerse en una sola dirección**. Por ejemplo, el siguiente grafo es dirigido:

![Un grafo dirigido](/images/postsImages/GraphTheory/directedGraph.webp)

***El grafo de arriba contiene un camino 3->1->2->5 desde el nodo 3 hasta el nodo 5, pero no hay un camino del nodo 5 hasta el nodo 3.***

### Pesos de las aristas

En un grafo **ponderado** a cada arista se le asigna un **peso**. Los pesos son comúnmente interpretados como las longitudes de las aristas. Por ejemplo, el siguiente es un grafo ponderado.

![Un grafo Ponderado](/images/postsImages/GraphTheory/weightedGraph.webp)

La longitud de un camino en un grafo ponderado se compone de la suma de los pesos de las aristas para cada camino. En el ejemplo anterior, podemos ver que la longitud del camino 1->3->4->5 es 11. Este último camino es el camino más corto que hay del nodo 1 al nodo 5.

### Vecinos y grados

Dos nodos son **vecinos** o **adyacentes** si hay una arista que los conecte entre sí. El **grado** de un nodo es el número de vecinos que tiene.

Por ejemplo, en el siguiente grafo los vecinos del nodo 2 son `1,4` y `5`. Así que es un nodo de grado 3.

![Grafo con un Nodo de grado 3](/images/postsImages/GraphTheory/degreeNode.webp)

La suma de los grados en un grafo siempre es `2m`, donde `m` es el número de aristas, porque cada arista aumenta los grados de exactamente dos nodos a uno. Por esta razón, la suma de los grados siempre es par.

En un grafo dirigido, el **grado de entrada** de un nodo es el número de aristas que acaban en ese nodo, mientras que el **grado de salida** es el número de aristas que empiezan en ese nodo. 

![Grados de entrada y salida](/images/postsImages/GraphTheory/indegreeGraph.webp)

## Como representar grafos en un algoritmo

Hay muchas formas de representar grafos en un algoritmo. La elección de una estructura de datos depende del tamaño del grafo y de la forma en la que el algoritmo procesa los datos.

A continuación te dejaré las tres representaciones más comunes, utilizando el lenguaje de `C++`.

### Lista de Adyacencia

En la representación en listas de adyacencia, cada nodo x en el grafo tiene asignado una **lista de adyacencia** que consiste en los nodos que tienen una arista que conecta con el nodo `x`.

Las **listas de adyacencia** son la forma más popular de representar grafos, y la mayoría de algoritmos pueden ser implementados de forma eficiente usándolas.

Una forma conveniente de almacenar las listas de adyacencia es declarando un arreglo de vectores:

```cpp
vector<int> adj[N];
```

La constante `N` es escogida de tal manera que todas las listas de adyacencia puedan guardarse. Por ejemplo, el grafo:

![Un grafo conectado sin pesos](/images/postsImages/GraphTheory/connectedRepresentation.webp)

Puede guardarse de la siguiente forma:

```cpp
adj[1].push_back(2);
adj[2].push_back(3);
adj[2].push_back(4);
adj[3].push_back(4);
adj[4].push_back(1);
```

Para un grafo ponderado la estructura se extiende de la siguiente forma:

```cpp
vector<pair<int,int>> adj[N];
```

En este caso la lista de adyacencia de un nodo `a` contiene el par `{b,w}` siempre, en donde hay una arista del nodo `a` a un nodo `b` con peso `w`. 

![La representación de un grafo con pesos](/images/postsImages/GraphTheory/weightedRepresentation.webp)

Puede guardarse de la siguiente forma:

```cpp
adj[1].push_back({2,5});
adj[2].push_back({3,7});
adj[2].push_back({4,6});
adj[3].push_back({4,5});
adj[4].push_back({1,2});
```

El beneficio de usar listas de adyacencia es que podemos encontrar eficientemente los nodos hacia los cuales nos podemos mover por medio de un nodo dado a través de una arista:

```cpp
for(auto g: adj[s]){
  // Procesa el nodo g
}
```

### Matriz de Adyacencia

Una **matriz de adyacencia** es un arreglo bidimensional que indica cuales aristas tiene un grafo. Podemos revisar desde una **matriz de adyacencia** de forma eficiente si hay un vértice entre dos nodos. La matriz puede ser guardada como un arreglo:

```cpp
int adj[N][N];
```

Donde cada valor `adj[a][b]` indica si el grafo contiene una arista del nodo `a` al nodo `b`. Si la arista está incluida en el grafo, entonces `adj[a][b] = 1`, de lo contrario `adj[a][b] = 0`.

![Matriz de adyacencia](/images/postsImages/GraphTheory/matrixRepresentation1.webp)

Si el grafo es ponderado, la representación de la matriz de adyacencia puede extenderse para que la matriz contenga el peso de la arista:

![Matriz Ponderada](/images/postsImages/GraphTheory/matrixRepresentation2.webp)

El problema de la matriz de adyacencia reside en que la matriz contiene `n^2` elementos, y normalmente muchos de estos son cero. Por motivos de eficiencia y rendimiento del algoritmo, la representación no se puede usar si el grafo es muy grande.

### Lista de Aristas

Una lista de aristas contiene todas las aristas de un grafo en un orden. Esta es una forma conveniente de representar un grafo si el algoritmo procesa todas las aristas de un grafo y no es necesario encontrar las aristas que inician en un nodo dado.

La lista de aristas puede ser almacenada en un vector:

```cpp
vector<pair<int,int>> aristas;
```

Por ejemplo:

```cpp
aristas.push_back({1,2});
aristas.push_back({2,3});
aristas.push_back({2,4});
aristas.push_back({3,4});
aristas.push_back({4,1});
```

Si el grafo es ponderado, la estructura se extiende a:

```cpp
vector<tuple<int,int,int>> aristas;
```

Cada elemento en esta lista tiene la forma `(a,b,w)`, lo que indica que hay una arista que va del nodo `a` al nodo `b` y tiene un peso de `w`.

```cpp
aristas.push_back({1,2,5});
aristas.push_back({2,3,7});
aristas.push_back({2,4,6});
aristas.push_back({3,4,5});
aristas.push_back({4,1,2});
```

# Referencias

- [Competitive Programmer’s Handbook de Anti Laaksonen](https://usaco.guide/CPH.pdf)
- [Introduction to graphs de USACO Guide](https://usaco.guide/bronze/intro-graphs?lang=cpp)
- [Introduction to graphs de CSAcademy](https://csacademy.com/lesson/introduction_to_graphs)
- [Graph representation de CSAcademy](https://csacademy.com/lesson/graph_representation)
