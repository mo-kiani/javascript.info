// Task 1.4.1.3

describe("sumProps", function() {

  it("Given test case from task", () => {
    let salaries = {
        John: 100,
        Ann: 160,
        Pete: 130,
    };
    assert.equal( sumProps(salaries), 390 );
  });

});

