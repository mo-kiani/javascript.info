# Task 1.9.6.1

It is because `a.__proto__ == B.prototype` which in turn is because 
`B.prototype` references the same object that `A.prototype` did at the time of 
constructing `a` with `A`.

