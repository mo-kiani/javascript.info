// Task 1.5.10.2

describe("topSalary", function() {

  it("given case", () => {
    let salaries = {
      "John": 100,
      "Pete": 300,
      "Mary": 250,
    }
    assert.equal( topSalary(salaries), "Pete" );
  });

  it("empty case", () => {
    assert.equal( topSalary({}), null );
  });

});

