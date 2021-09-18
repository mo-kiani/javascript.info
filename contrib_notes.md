# Minor grammatical or spelling issues

### Recursion and Stack
##### Statement
A partial case of this is when a function calls itself. That's called recursion.
##### Issue
I think you mean 'special', not 'partial'


# Possible Improvement

### Constructor, operator "new"
##### Problem code
The code in block new function() {...}
##### Issue
It may be make things less confusing to have a `()` to self invoke since it has
not yet been revealed that invoking a constructor is optional if it has no 
arguments and the `new` keyword is being used. Alternatively you can put this 
code further down after that detail has been mentioned (in the block "Omitting
Parentheses").

### Function object, NFE
Could mention that the first time a name is bound to a function, either at
definition time or contextually on first assignment, then that remains its name
and also only the first name is used if the function is reassigned to a new
variable with a different name.

### Property flags and descriptors
##### Issue
If the property exists, defineProperty updates its flags.
##### Solution
If the property exists, defineProperty updates its flags and value.

### Prototypal inheritance, Task 4
One solution that may be worth adding is a constructor based approach,
especially since it can prime the reader for the coming chapters on classes.

### Prototype methods, objects without \_\_proto\_\_
Never really mentions why `__proto__` was replaced by `get/setPrototypeOf`.
Also, user generated keys for objects is not just an issue with `__proto__` but
really anything that the object may already contain in itself or in it's 
inheritance like `toString`, as well as any existing setter that rejects some 
values, so I'm a bit confused about the point of specifically bringing up the 
issue here. Isn't user-generated keys just a REALLY BAD idea anyways, and just
stick to Map or MAYBE pure dictionary objects?

Also, in Task 1, the given solution changes an existing line, which is confusing
since the problem statement seems to indicate that your code should come after.

### Class basic syntax
Summary missing bound field syntax and the fact that class fields are copied
into each object rather than use the prototype system.


# Incorrect statements

### The old 'var'
##### Statement
In all the above cases we declare a Function expression and run it immediately.
Let's note again: nowadays there's no reason to write such code'.
##### Issue
Self-invoking functions are useful when you are creating a closure that you know
you are only going to invoke once. They are also useful for one-time creation
of complex objects using imperative approach rather than declarative by
preprending new to a self invoking function.

### Function object, NFE
##### Statement
This is a particular case of so-called polymorphism - treating arguments
differently depending on their type or, in our case depending on the length.
##### Issue
Polymorphism refers to when multiple types share an interface and are used the
same, which is exactly the opposite of treating them differently depending on
their type.


# Incorrect code/solutions

### Task 1.6.3.5 Function in if
If you copy-paste the code into Chrome console it actually doesn't give an
error and I think that's because function declarations actually hoist up to only
their current block in terms of value, but are declared for the entire function
scope where they are declared.

### Task 1.6.6.1 Set and decrease for counter
Wouldn't it make more send to use prefix rather than postfix for increments and
decremenets?

