// Task 1.5.2.6

function randomInteger(min, max) {
    return Math.round( (min - 0.5) + ( Math.random() * (max - min + 1) ) );
}

alert( randomInteger(1, 5) );
alert( randomInteger(1, 5) );
alert( randomInteger(1, 5) );

