// Task 1.4.4.2

let calculator = {
    read() {
        this.left_operand = +prompt("Please enter the left operand");
        this.right_operand = +prompt("Please enter the right operand");
    },
    mul() {
        return this.left_operand * this.right_operand;
    },
    sum() {
        return this.left_operand + this.right_operand;
    },
}

calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );

