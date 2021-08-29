// Task 1.6.3.6

describe("sum", function() {

  it("given case 1", () => {
    assert.equal( sum(1)(2), 3);
  });

  it("given case 2", () => {
    assert.equal( sum(5)(-1), 4);
  });

});

