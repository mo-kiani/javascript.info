// Task 1.5.5.6

function Calculator(arr) {
    let methodsSymbol = Symbol('methods');
    this[methodsSymbol] = {'+': (a, b) => a+b, '-': (a, b) => a - b}

    this.calculate = function(str) {
        let components = str.split(' ');
        let left_operand = +components[0];
        let operator = components[1];
        let right_operand = +components[2];

        return this[methodsSymbol][operator](left_operand, right_operand);
    };

    this.addMethod = function(name, func) {
        this[methodsSymbol][name] = func;
    }
}

