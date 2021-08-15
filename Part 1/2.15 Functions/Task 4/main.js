// Task 1.2.15.4

function pow(x, n) {
    let result = 1;
    for ( let i = 0; i < n; i++ ) {
        result *= x;
    }
    return result
}

let x = +prompt('Choose a base number to exponentiate');
let n = +prompt('Choose an exponent');

alert( pow(x, n) );

