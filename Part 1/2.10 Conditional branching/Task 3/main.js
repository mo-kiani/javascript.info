// Task 1.2.10.3

let number = +prompt("Please enter a number.");

// Added extra feature to repeatedly prompt until a number is given.
// Learned that NaN === NaN actually returns False, so isNaN function is needed
while ( Number.isNaN(number) ) {
    number = +prompt("That's not a number, please try again.");
}

if ( number > 0 ) {
    alert(1);
}
else if ( number < 0 ) {
    alert(-1);
}
else {
    alert(0);
}

