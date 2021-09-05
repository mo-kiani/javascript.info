# Task 1.6.10.3

The result is `undefined` because the bound function is a new object. It does
not keep all the properties of the original function, it only forwards the calls
to the original function but with the given context and starting arguments.
Since a property lookup is not a function call, it doesn't look up in the
original object.

