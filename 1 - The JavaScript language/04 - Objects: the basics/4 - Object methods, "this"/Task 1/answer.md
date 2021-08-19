# Task 1.4.4.1

makeUser is called as a free function (no dot notation) and so in strict mode
the this keyword is undefined and in non-strict mode it is window. 
undefined.name will return an error and window.name will return an empty string.

