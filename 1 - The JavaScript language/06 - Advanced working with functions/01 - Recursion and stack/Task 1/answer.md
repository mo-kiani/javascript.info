# Task 1.6.1.1

The formulaic solution is the fastest because its solution is independent of the
size of n (it runs in O(1) time), whereas the other solutions both scale 
linearly with n (they run in O(n) time).

The recursive solution is likely slowest as it has to suffer the overhead of 
generating many execution contexts and push/popping them onto the execution 
context stack. The iterative solution on the other hand does not have to do that
and since it runs in a fairly simple loop structure, it is likely there are 
certain optimizations the JS engine can do that it would not be able to do for 
recursion.

The recursive solution also runs the risk of stack overflow errors and consumes
O(n) memory as opposed to the other solution which both take O(1) memory.

