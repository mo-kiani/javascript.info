// Task 1.6.6.2

describe("sum", function() {

  it("given case 1", () => {
    assert.equal( sum(1)(2), 3);
  });

  it("given case 2", () => {
    assert.equal( sum(1)(2)(3), 6);
  });

  it("given case 3", () => {
    assert.equal( sum(5)(-1)(2), 6);
  });

  it("given case 4", () => {
    assert.equal( sum(6)(-1)(-2)(-3), 0);
  });

  it("given case 5", () => {
    assert.equal( sum(0)(1)(2)(3)(4)(5), 15);
  });

});

