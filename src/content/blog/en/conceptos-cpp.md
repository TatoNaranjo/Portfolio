---
title: "Introduction to Competitive Programming in C++"
description: "Fundamental concepts to consider when working on competitive programming in C++."
pubDate: 2024-02-23
author: TatoNaranjo
image:
  url: "/images/postsImages/introduccionCpp/introduccionCppCover.webp"
  alt: "Introduction to Competitive Programming in C++"
tags: ["competitive-programming", "programming-languages"]
lang: "en"
---

# Programming Languages
Currently, the most popular languages used in competitive programming are C++, Python, and Java. For example: In Google Code Jam 2017, among 3,000 participants, 79% used C++, 16% used Python, and 8% used Java.

Many people think C++ is the best choice for a competitive programmer, and C++ is available in almost all tournament systems. The benefits of *C++* are that it is a highly efficient language and its standard library contains a large collection of data structures and algorithms.

On the other hand, it is a good idea to master different languages and understand their strengths. For example, if problems require very large integers, *Python* might be a better choice.

# C++ Code Template

A typical C++ template for competitive programming looks like this:

```cpp
#include <bits/stdc++.h>
using namespace std; 
int main() { 
// Solution goes here.
}
```

The `#include` line at the top of the code is a feature of the `g++` compiler, allowing us to include the entire standard library. Thus, there is no need to include libraries separately like `iostream`, `vector`, and `algorithm`, as they are available automatically.

The `using` line declares that classes and functions of the standard library can be used directly in the code. Without this line we would have to write `std::cout`, but now it comes down to `cout`.

# Input & Output

In contests, standard streams are used to read input and write output. In C++, standard streams are `cin` for input and `cout` for output. Additionally, the C functions `scanf` and `printf` can also be used.

The input for a program usually consists of numbers and strings that are separated by spaces or newlines. They can be read from the input stream `cin` like this:

```cpp
int a,b; // This is a number
string x; // This is a word
cin >> a >> b >> x;
```

This kind of code always works, assuming there is at least one space or newline between each element of the input.

The output stream `cout` is used to print the output like this:

```cpp
int a = 123, b = 456;
string x = "Monkey";
cout << a << " " << b << " " << x << "\n";
```

> Input and output commonly cause performance bottlenecks in the program. The following lines at the start of the code make input and output more efficient:

```cpp
ios::sync_with_stdio(0); cin.tie(0);
```

# Working with Numbers

## Integers
The most commonly used integer type in competitive programming is `int`, which is a 32-bit data type, covering ranges from $-2^{31}$ to $2^{31}-1$. If the `int` data type is not enough, the 64-bit `long long` type can be used.

```cpp
long long x = 123456789123456789LL;
```

The `LL` suffix denotes that the number type is `long long`.

A common error when using the `long long` data type is that the `int` type is still used somewhere in the code. For example, the following code contains an overflow error:

```cpp
int a = 123456789; 
long long b = a*a; 
cout << b << "\n"; // -1757895751
```

Even when variable `b` is of type `long long`, both numbers in the expression `a*a` are of type `int`, and the result is also of type `int`. Because of this, variable `b` will contain a wrong result. The problem can be solved by changing the type of `a` to `long long` or casting the expression to `(long long)a*a`.

## Floating Point Numbers
Floating-point number types in competitive programming are the 64-bit `double` and its extension in the g++ compiler, the 80-bit `long double`. In most cases using a `double` is enough.

```cpp
printf("%.9f\n", x);
```

# Resources
- [Competitive Programmer's Handbook](https://usaco.guide/CPH.pdf)
- [USACO Guide - Introduction to Competitive Programming](https://usaco.guide/general/intro-cp?lang=cpp)
