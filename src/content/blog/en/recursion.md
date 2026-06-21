---
title: "What is Recursion?"
description: "Have you ever wondered how functions can call themselves, creating a kind of infinite (but controlled) loop? This is recursion, a fascinating concept in programming that allows solving problems elegantly and efficiently."
pubDate: 2024-02-03
author: TatoNaranjo
image:
  url: "/images/postsImages/Recursion/recursionDescription.webp"
  alt: "Recursion Image"
tags: ["algorithms"]
lang: "en"
---

It is a way of using a process to define the process itself, and in turn a vital resource to understand various algorithms that dynamic programming has.

A recursive function must have:
- A Base Case
- Transitions that lead us to that base case.
- A return value (Optional)

## How does recursion work inside?

When our program is executed, a space called stack is created, which works as a stack data structure where the last element to enter is the first to leave. Each time a function is executed in the program, a space or frame containing all the elements related to the function is introduced in the stack.

## The Base Case

It is that stopping condition for our recursive algorithm, which tells us when to stop introducing frames in our stack and start returning values. In other words, it is what prevents our recursive function from getting stuck in an infinite loop.

## Examples

### Adding two numbers recursively.

Imagine we have to find the sum of two numbers, `a` and `b` where `0<a,b<=10e8`. To make this sum we can use several methods, but the one that interests us in this case is recursion.

#### Recursive Solution
If I pass two parameters a and b to a function, I must take into account the three basic concepts of recursion.

- **The base case**: The condition for the function to stop in this case will be that one of the two numbers reaches 0, this is because if the number is equal to 0, nothing is being added.

- **The transition that leads us to the base case**: How do we modify the function so that it reaches the base case? By subtracting one of the two numbers and adding the value to the element that is not subtracted. That is to say that the two cases that can occur are `a=a`, `b=b-1` and `a=a-1`, `b=b`.

### Implementation in C++

```cpp
int sum (int a, int b){
if(b==0)return a;
return sum(a,b-1)+1;
}
```

### Fibonacci

To calculate a Fibonacci number recursively we can understand that the Fibonacci number is the sum of the two previous numbers, also expressed as:

`fibonacci(x)=fibonacci(x-1)+fibonacci(x-2)`

In code like:

```cpp
ll fibonacci(ll x){
if(x==1)return 1;
if(x==0)return 0;
return (fibonacci(x-1)+fibonacci(x-2));
}
```

What the function does is that upon reaching the base case and returning an element, it is added to the values we had previously. In this case, when the `fibonacci(x-1)` function reaches its base case, it returns a 1 or a 0 and then proceeds with the `fibonacci(x-2)` function. When the last function reaches its base case, the results of the first and last functions are added and returned.

### A Set of Books

We have a set of books and we want to know the total pages for all the books.

To arrive at this solution we can use two methods.

#### Iterative Solution
It consists of seeing how many pages the first book has, then adding them with those of the second book and so on until reaching the end of the books.

#### Recursive Solution
To find the total pages in the books, we can take the number of pages of the first book and add it to the total pages that all the others have. We will repeat that process until the remaining number of books to count is 1.
