// Task 1.4.5.1

// Yes it is possible, as follows

let commonObject = {}

function A() {
    return commonObject;
}

function B() {
    return commonObject;
}

let a = new A;
let b = new B;

alert( a == b );

