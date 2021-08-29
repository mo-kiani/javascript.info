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


# Incorrect code/solutions

### Task 1.6.3.5 Function in if
If you copy-paste the code into Chrome console it actually doesn't give an
error and I think that's because function declarations actually hoist up to only
their current block in terms of value, but are declared for the entire function
scope where they are declared.
