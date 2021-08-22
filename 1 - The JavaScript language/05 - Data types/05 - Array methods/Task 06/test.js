// Task 1.5.5.6

describe("copySorted", function() {
  let calculator = new Calculator();
  calculator.addMethod("*", (a, b) => a * b);
  calculator.addMethod("/", (a, b) => a / b);
  calculator.addMethod("**", (a, b) => a ** b);

  it("addition", () => {
    assert.equal( calculator.calculate("11 + 3"), 14 );
  });

  it("subtraction", () => {
    assert.equal( calculator.calculate("11 - 3"), 8 );
  });

  it("multiplication", () => {
    assert.equal( calculator.calculate("11 * 3"), 33 );
  });

  it("division", () => {
    assert.equal( calculator.calculate("12 / 3"), 4 );
  });

  it("exponentiation", () => {
    assert.equal( calculator.calculate("2 ** 9"), 512 );
  });

});

