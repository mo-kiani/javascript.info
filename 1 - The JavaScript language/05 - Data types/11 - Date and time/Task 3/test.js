// Task 1.5.11.3

describe("getLocalDay", function() {

  it("given case", () => {
    assert.equal( getLocalDay( new Date(2012, 0, 3) ), 2 );
  });

  it("a Sunday", () => {
    assert.equal( getLocalDay( new Date(2012, 0, 8) ), 7 );
  });

  it("a Monday", () => {
    assert.equal( getLocalDay( new Date(2012, 0, 9) ), 1 );
  });

});

