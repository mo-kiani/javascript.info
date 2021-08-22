// Task 1.5.3.3

describe("truncate", function() {

  it(`Needs truncation`, () => {
    assert.equal( 
        truncate("What I'd like to tell on this topic is:", 20), 
        "What I'd like to te" + String.fromCodePoint(2026),
    );
  });

  it(`Does not need truncation`, () => {
    assert.equal( truncate("Hi everyone!", 20), "Hi everyone!");
  });

  it(`empty string`, () => {
    assert.equal( truncate("", 0), "" );
  });

});

