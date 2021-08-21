// Task 1.5.2.3

function readNumber() {
    let n;

    do {
        n = prompt("Please enter a number");
    } while ( !isFinite(n) && n !== '' && n !== null);

    return (n === '' || n === null) ? null : +n;
}

alert( readNumber() );

