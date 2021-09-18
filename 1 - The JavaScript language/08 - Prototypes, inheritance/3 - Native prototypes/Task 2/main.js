// Task 1.8.3.2

Function.prototype.defer = function(ms) {
    let f = this;
    return function(...args) { setTimeout( () => f.call(this, ...args), ms ) };
}

