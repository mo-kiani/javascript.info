// Task 1.5.11.5

describe("getLastDayOfMonth", function() {

  it("given case (leap year)", () => {
    assert.equal( getLastDayOfMonth(2012, 1), 29 );
  });

  it("non-leap year", () => {
    assert.equal( getLastDayOfMonth(2011, 1), 28 );
  });

  it("Jan", () => {
    assert.equal( getLastDayOfMonth(2012, 0), 31 );
  });

  it("Dec", () => {
    assert.equal( getLastDayOfMonth(2012, 11), 31 );
  });

});

