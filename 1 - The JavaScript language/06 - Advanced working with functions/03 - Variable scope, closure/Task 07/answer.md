# Task 1.6.3.7

It will cause an error.  

The Lexical Environment of the `func` call during the console log statement will
have a definition of `x` in an uninitialized state because of line 6
which overshadows the initialization of `x` in the global Lexical Environment at
line 1.

