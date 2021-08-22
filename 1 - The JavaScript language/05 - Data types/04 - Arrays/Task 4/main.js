// Task 1.5.4.4

function sumInput() {
    let numbers = [];

    let input = prompt("Please enter a number.");
    while ( input !== '' && input !== null && isFinite(input) ) {
        numbers.push(+input);
        input = prompt("Please eneter another number.");
    }

    let acc = 0;
    for ( let n of numbers ){
        acc += n;
    }
    return acc
}

alert( sumInput() );

