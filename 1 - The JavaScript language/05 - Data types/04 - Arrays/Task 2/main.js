// Task 1.5.4.2

// 1. Create an array styles with items "Jazz" and "Blues".
let styles = ["Jazz", "Blues"];

// 2. Append "Rock-n-Roll" to the end.
styles.push("Rock-n-Roll");

// 3. Replace the value in the middle by "Classics". Your code for finding the
// middle value should work for any arrays with odd length.
styles[(styles.length - 1) / 2] = "Classics";

// 4. Strip off the first value of the array and show it.
alert( styles.shift() );

// 5. Prepend "Rap" and "Reggae" to the array.
styles.unshift("Rap", "Raggae");

