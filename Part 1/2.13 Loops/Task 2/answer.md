# Task 1.2.13.2

The prefix version goes 1, 2, 3, 4
The postfix version goes 1, 2, 3, 4, 5

The discrepency is because the prefix condition always sees i as one value
higher on a per-iteration basis compared to postfix because it increments before
testing while the postfix increments after testing. This is also why the postfix
version can alert a value that wouldn't have passed the condition (5), because 
the test is done first, then the increment.

