---
title: "How to Create a Project in Go"
description: "Learn the basic steps to initialize and build a project using the Go programming language."
pubDate: 2024-01-31
author: TatoNaranjo
image:
  url: "/images/postsImages/Obsidian/obsidianFrontImage.webp"
  alt: "Go Project"
tags: ["programming-languages"]
lang: "en"
---

# How to Work on a Go Project?

## Initializing the Project

In the VSCode console, with the language already installed, we proceed to write the following command:

```go
go mod init [Unique Url]
```

When we refer to a Unique URL, we usually mean the GitHub repository where we are going to host the project (*Note that the URL must go without the brackets shown in the code*).

> Tato's Note: If you don't want to host the project in a GitHub repository, you just need to put a folder name. For example:

```go
go mod init example/hello
```

After executing the command, a `go.mod` file will be created. It is in charge of telling us which libraries and dependencies are needed for the application to work as we grow the project and add libraries. As we import packages and libraries, a file called `go.sum` will also be created, which tells us what the dependencies of the project's dependencies are.

Next, we proceed to create a `main.go` file.

> Tato's Note: *Don't forget to install the extensions recommended by VSCode to help you write code faster, get automatic code formatting, and better configure your Go work environment.*

**If you want to check that the code works well, you can copy this starter template and paste it into your `main.go` file:**

```go
package main
import "fmt"
func main() {
   fmt.Println("Hello, World!")
}
```

The project is executed in the console using the command:

```go
go run .
```

## Creating a Project Build

To create a build of the Go project, all we have to do is run the command:

```go
go build .
```

This command creates a `.exe` executable format of the already compiled project, and it can be run in the same way as using the `go run .` command.
