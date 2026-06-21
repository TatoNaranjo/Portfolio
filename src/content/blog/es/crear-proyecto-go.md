---
title: "¿Cómo Crear un Proyecto en Go?"
description: "Aprende los pasos básicos para inicializar y construir un proyecto utilizando el lenguaje de programación Go."
pubDate: 2024-01-31
author: TatoNaranjo
image:
  url: "/images/postsImages/Obsidian/obsidianFrontImage.webp"
  alt: "Go Project"
tags: ["lenguajes-de-programacion"]
lang: "es"
---

# ¿Cómo Trabajar en un Proyecto de Go?

## Inicializando el Proyecto

En la consola de VSCode ya con el lenguaje instalado, procedemos a escribir el siguiente comando:

```go
go mod init [Url única]
```

Cuando nos referimos a una URL Única hablamos normalmente del repositorio de GitHub en el que vamos a alojar el proyecto (*Ten en cuenta que la URL debe ir sin las llaves que se muestran en el código.*).

> Anotación de Tato: Si no quieres alojar el proyecto en un repositorio de GitHub, solo basta con poner el nombre de una carpeta. Por ejemplo:

```go
go mod init example/hello
```

Luego de ejecutar el comando se creará un archivo `go.mod`, que es el encargado de decirnos qué librerías y dependencias se necesitan para que la aplicación funcione, conforme vamos haciendo que el proyecto crezca y vamos añadiendo librerías. Cuando vayamos importando paquetes y librerías también se creará un archivo llamado `go.sum`, que será el que nos diga cuales son las dependencias de las dependencias del proyecto.

Luego, procedemos a crear un archivo `main.go`. 

> Anotación de Tato: *No te olvides de instalar las extensiones recomendadas por VSCode, para ayudarte a escribir código de una forma más rápida, tener formateo automático de código y en generar configurar de mejor manera tu entorno de trabajo en go*

**Si quieres comprobar que el código funciona bien, puedes copiar este template de inicio y pegarlo en tu archivo `main.go`**

```go
package main
import "fmt"
func main() {
   fmt.Println("Hello, World!")
}
```

El proyecto se ejecuta en consola por medio del comando:

```go
go run .
```

## Creando una Build del Proyecto

Para crear una build del proyecto de go, lo único que tenemos que hacer es ejecutar el comando:

```go
go build .
```

Este comando nos crea un ejecutable en formato `.exe` del proyecto que ya está compilado y se puede correr de la misma manera que si se estuviera usando el comando de `go run .`
