# Task 1.2.11.2

It will output 1 first, but since alert(1) returns nothing (falsey) it continues
So then, 2 will be returned by the or condition since it is truthy
That means alert(3) is not evaluated/run
But the return value is passed to the outer alert function, so 2 is also output

