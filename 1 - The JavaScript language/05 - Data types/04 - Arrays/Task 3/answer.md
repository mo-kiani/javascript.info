# Task 1.5.4.3

The function call will return the string "a,b,function(){\nalert( this );\n}".

The anonymous function will be added to the arr as if it were an object to the 
key "2". When we access it via the number 2 (which is converted to "2"), we take
the function and call it, and the 'this' inside the function will refer to the
arr itself since we are calling the function via a key of arr. The array is then
printed in the alert, and in order to do so is first converted to a string, and
this conversion for an array means a comma separated concatenation of the string
representations of all its ordered elements in order.

