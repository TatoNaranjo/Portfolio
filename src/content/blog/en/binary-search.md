---
title: "Binary Search"
description: "In competitive programming, various search algorithms are used to find efficiently organized elements. One of the most common types of searches is 'binary search'."
pubDate: 2024-02-09
author: TatoNaranjo
image:
  url: "/images/postsImages/binarySearch/binarySearchCover.webp"
  alt: "Binary Search"
tags: ["competitive-programming", "algorithms"]
lang: "en"
---

# Implementation in C++

```cpp
int numbers[] = {1,2,3,4,5,6,7,8,9,10};
int n = numbers.size()-1;
int k; // The variable we want to search in the array
int left = -1; int right = n;
while(right-left>1){
	int mid = (left+right)/2;
		if(numbers[mid]>k)r = mid;
		else l = mid;
}
```

# Implementation in Python

```python
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
n = len(numbers) - 1
k = 5  # The variable we want to search

left = 0
right = n

while left <= right:
    mid = (left + right) // 2

    if numbers[mid] == k:
        print(mid)
        break
    elif numbers[mid] < k:
        left = mid + 1
    else:
        right = mid - 1
```

## Algorithmic Complexity: `O(log N)`
# When can we use Binary Search?

 - The problem asks for a minimum or maximum value of something.
 - The problem can be solved similarly across all possibilities until a certain point.

Imagine you have a set of elements and you are looking for a condition to be met. This condition has a range where it is met, and another range where it is not.

## Binary Property Generalization

One of the pros of binary search is that it is a tool not only used to satisfy a search but also to solve a problem like this:

Given a search space in a range determined by $l$ and $r$, where $l$ is the lower limit and $r$ is the upper limit, and a boolean expression $f(x)$ that satisfies a property; if $f(y)$ is not met, then $f(y-1)$ will not either. We want to find the minimum value of $z$ such that the expression $f(z)$ is met.

The general idea of the binary property is that if a condition is met for an element $x$, it will also be met for all elements ahead of it because they are sorted in ascending order. The generalization can be represented with the following graph:

![Binary Property Graph](/images/postsImages/binarySearch/binaryProperty.webp)

## An everyday example:

Imagine you are in a game of guessing the number I am thinking of within a specific range. If the number you guess is higher, I'll tell you to try a smaller number. If it is lower, I'll tell you to try a higher number.

Therefore, the logic of the game translated to an algorithm follows these steps:

1. Let `min = 1` and `max = n` where n is the limit of our range.
2. Guess the average of `max` and `min` rounded down.
3. If you guessed the number, stop searching, you found it.
4. If the guess was too low, make `min` larger than your guess.
5. If the guess was too high, make `max` smaller than your guess.
6. Return to step 2.

# How to implement the algorithm?

To understand how the algorithm works, we can use the following example:

Imagine we have the following array containing the first 25 prime numbers in order:

```cpp
int primes[] = {2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97};
```

And we want to know if the number `67` is prime. If `67` is in the array, we will know it is a prime number.

Knowing this fact, we can also find out how many prime numbers exist below `67`.

When we read the array from left to right one at a time to look for the number `67`, we are doing a *Linear Search* that has a complexity of **`O(N)`** since in the worst case we would have to search through `n` elements.

![Initial Array](/images/postsImages/binarySearch/initialArray.webp)

Doing the search, we will realize that the element we are looking for is at index 18, so we would have taken 19 steps. However, we can optimize this.

Since the `primes` array has 25 numbers, the indices go from `0` to `24`. Using the pseudocode, we know `min = 0` and `max = 24`.

The first try of the binary search would be at index `12`, which is `(0+24)/2`.

Is `primes[12] = 67`? No, `primes[12] = 41`.

![Explanation 1](/images/postsImages/binarySearch/explanation-1.webp)

Is the index we are looking for greater or smaller than `12`? Since it's sorted, and `41 < 67`, the value `67` must be to the right of index `12`. Therefore, we update `min` to `12 + 1` or `13`.

![Explanation 2](/images/postsImages/binarySearch/explanation-2.webp)

Repeating the previous steps, we find the average of `13` and `24` is `18.5`, rounded down to `18`. We will find that `primes[18]` is 67.

![Explanation 3](/images/postsImages/binarySearch/explanation-3.webp)

At this point, our algorithm stops. We reduced those 19 steps to just 2 steps using Binary Search.

# Understanding Algorithmic Complexity:

A *Linear Search* of an array of $n$ elements can take up to $n$ attempts, so binary search takes fewer attempts.

The core idea is that if the search makes an incorrect guess, the portion of the array is halved.

Interpreting this division mathematically, the binary search process becomes $log_2(n)$.

Here is a comparison of $n$ with $log_2(n)$

![Comparison](/images/postsImages/binarySearch/comparation.webp)

# Exercises for Practice:

- [Codeforces - ITMO Courses](https://codeforces.com/edu/course/2/lesson/6/1/practice)
- [Codeforces - Interesting Drink](https://codeforces.com/problemset/problem/706/B/)
- [Codeforces - Frodo and pillows](https://codeforces.com/problemset/problem/760/B)
- [LeetCode - Find First and Last Position of Element in Sorted Array](https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/)

# Conclusion:

![Meme](/images/postsImages/binarySearch/meme.webp)

# References:

- Explained by [SpecterByte](https://codeforces.com/profile/SpecterByte).
- [Khan Academy: Binary Search](https://es.khanacademy.org/computing/computer-science/algorithms/binary-search/a/binary-search)
