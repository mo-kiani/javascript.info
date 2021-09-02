// Task 1.6.6.2

let sum = function sum(n) {
    let f = function(inner) {
        return sum(inner + n);
    }

    f[Symbol.toPrimitive] = function(hint){
        return n;
    };

    return f;
}

