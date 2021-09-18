# Task 1.8.1.2

### Part 2

`head.glasses` should be faster than `pockets.glasses` because it will directly
access the value instead of going through 3 layers of delegation through the
prototypal inheritance chain.  

Although, optimizations like caching in JS engines could really reduce the
difference by a lot.

