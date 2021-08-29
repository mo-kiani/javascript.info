# Task 1.6.3.10

All of the shooters share the same state because they are all defined within
the same call to `makeArmy`. We can fix this by passing `i` to a factory
function which returns the `shooter` function for the given `i`. That way, each
`i` will be found at the Lexical Environment of that factory function call as 
the local varialbe `i` before checking the shared Lexical Environment of the 
`makeArmy` call. We are essentially 'wrapping' each `shooter` in it's own 
personal outer function call with its own peronsal copy of `i`.

