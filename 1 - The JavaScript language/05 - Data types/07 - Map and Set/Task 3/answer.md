# Task 1.5.7.3

`map.keys()` returns a special array-like iterator that isn't actually and 
array. So, we can solve the problem by creating a new 'real' Array from the keys
iterator using `keys = Array.from( keys )`. Now keys is a 'real' array and so
we can call `keys.push("more")`.

