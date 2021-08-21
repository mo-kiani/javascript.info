# Task 1.5.2.4

We would hope that after 50 iterations, i == 10, but adding 0.2 50 times will 
not be EXACTLY 10 because 0.2 is not represented internally as exactly 0.2 due 
to the limitations of a 64 bit IEEE-754 floating point system. It is actually
0.20000000000000001110, and so if added 50 times to 0, will not precisely equal
10 as desired.

