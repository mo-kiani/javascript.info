// Task 1.5.11.8

describe("formatDate", function() {

  it("given case 1", () => {
    assert.equal( formatDate( new Date( new Date() - 1 ) ), "right now" );
  });

  it("given case 2", () => {
    assert.equal( formatDate( new Date( new Date() - (30 * 1000) ) ), "30 sec. ago" );
  });

  it("given case 3", () => {
    assert.equal( formatDate( new Date( new Date() - (5 * 60 * 1000) ) ), "5 min. ago" );
  });

  it("given case 4 (adapted to always work)", () => {
    assert.equal( 
        formatDate( new Date( 
            new Date (2021, 7, 26, 5, 3, 30, 500) - (86400 * 1000)
        ) ),
        "25.08.21 05:03" 
    );
  });

});

