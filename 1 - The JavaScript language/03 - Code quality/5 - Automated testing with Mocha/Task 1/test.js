// Task 1.3.5.1

describe("pow", function() {
  describe("Raises 5 to the power n", function() {
    let base = 5;
    let expectedResult = 1;

    for (let exponent = 1; exponent <= 3; exponent++ ) {
      expectedResult *= base;
      makeTest(base, exponent, expectedResult);
    }

    function makeTest(base, exponent, expectedResult) {
      it(`${base} to the power of ${exponent} is ${expectedResult}`, () => {
        assert.equal( pow(base, exponent), expectedResult );
      });
    }
  });
});

