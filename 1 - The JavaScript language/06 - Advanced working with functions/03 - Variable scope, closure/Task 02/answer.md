# Task 1.6.3.2

It will only have access to `"Pete"` as any reference to the variable `name` 
inside of the `work` function will check the Lexical Environment of the 
`makeWorker` call that created it (where it is initialized as `"Pete"`) before
it checks the global Lexical Environment where it is initialized as `"John"`.

