// Task 1.5.9.1

describe("sumSalaries", function() {

  it("given case", () => {
      let salaries = {
          "John": 100,
          "Pete": 300,
          "Mary": 250,
      };

      assert.equal( sumSalaries(salaries), 650 );
  });

  it("empty case (0)", () => {
      let salaries = {};

      assert.equal( sumSalaries(salaries), 0 );
  });

});

