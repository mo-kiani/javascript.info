# Task 1.6.3.3

`counter2` will also show `0, 1` because the two counters do not share state
since each call to `makeCounter` will create it's own independent Lexical
Environment containing a separate definition for `count`.

