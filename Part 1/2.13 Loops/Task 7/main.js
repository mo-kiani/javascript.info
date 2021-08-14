// Task 1.2.13.7

inputNumber = +prompt("Please enter a number.");

outer: for ( let number = 2; number <= inputNumber; number++ ) {
    for ( let possibleFactor = 2; possibleFactor < number; possibleFactor++ ) {
        if ( number % possibleFactor === 0 ) continue outer;
    }
    alert( number );
}

