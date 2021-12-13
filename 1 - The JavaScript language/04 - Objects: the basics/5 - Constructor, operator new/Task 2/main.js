// Task 1.4.5.2

function Calculator() {
    this.read = function() {
        this.first_operand = +prompt("Please enter first operand");
        this.second_operand = +prompt("Please enter second operand");
    };
    this.sum = function() {
        return this.first_operand + this.second_operand;
    };
    this.mul = function() {
        return this.first_operand * this.second_operand;
    };
}

let calculator = new Calculator();
calculator.read();
alert( "Sum=" + calculator.sum() );
alert( "Mul=" + calculator.mul() );

