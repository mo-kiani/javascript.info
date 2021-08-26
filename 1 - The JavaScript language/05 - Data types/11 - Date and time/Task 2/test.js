// Task 1.5.11.2

describe("getWeekDay", function() {

  it("given case", () => {
    assert.equal( getWeekDay( new Date(2012, 0, 3) ), "TU" );
  });

  it("a Sunday", () => {
    assert.equal( getWeekDay( new Date(2012, 0, 8) ), "SU" );
  });

  it("a Saturday", () => {
    assert.equal( getWeekDay( new Date(2012, 0, 7) ), "SA" );
  });

});

