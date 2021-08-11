// Task 1.2.7.4

let a = prompt("First number?", 1);
let b = prompt("Second number?", 2);

alert(+a + +b);  
// We need to convert the strings returned by prompt to numbers before
// performing the arithmetic so that the binary plus operator performs 
// arithmetic rather than string concatentation.

