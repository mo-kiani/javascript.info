// Task 1.5.11.4

describe("getDateAgo", function() {

  let date = new Date(2015, 0, 2);

  it("given case 1", () => {
    assert.equal( getDateAgo(date, 1), 1 );
  });

  it("given case 2", () => {
    assert.equal( getDateAgo(date, 2), 31 );
  });

  it("given case 3", () => {
    assert.equal( getDateAgo(date, 365), 2 );
  });

});

