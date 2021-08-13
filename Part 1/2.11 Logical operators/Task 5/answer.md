# Task 1.2.11.5

The && has higher precedence, so it evaluates, and since all values are truthy,
it returns the last value which is 3.
so we get alert( null || 3 || 4 );
since 3 is the first truthy value, it is returned and passed to alert and shown

