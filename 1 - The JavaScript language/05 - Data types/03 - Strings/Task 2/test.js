// Task 1.5.3.2

describe("checkSpam", function() {
  it(`"buy ViAgRA now" yields true`, () => {
    assert.equal( checkSpam("buy ViAgRA now"), true );
  });
  it(`"free xxxxx" yields true`, () => {
    assert.equal( checkSpam("free xxxxx"), true );
  });
  it(`"innocent rabbit" yields false`, () => {
    assert.equal( checkSpam("innocent rabbit"), false );
  });
  it(`empty string yields false`, () => {
    assert.equal( checkSpam(""), false );
  });
});

