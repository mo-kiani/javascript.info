// Task 1.4.1.4

describe("multiplyNumeric", function() {

  it("Given test case from task 1.4.1.4", () => {

    let input = {
        width: 200,
        height: 300,
        title: "My menu",
    };
    let expectedResult = {
        width: 400,
        height: 600,
        title: "My menu",
    };

    multiplyNumeric(input);

    for (key in input) {
      assert.equal( input[key], expectedResult[key] );
    }

  });

});

