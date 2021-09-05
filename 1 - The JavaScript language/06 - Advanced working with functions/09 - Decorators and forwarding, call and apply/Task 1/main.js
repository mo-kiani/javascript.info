// Task 1.6.9.1

function spy(func) {
    let f = function(...args) {
        f.calls.push(args);
        func.apply(this, args);
    }
    f.calls = [];
    return f;
}

