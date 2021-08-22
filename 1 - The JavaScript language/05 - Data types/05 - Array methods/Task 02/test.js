// Task 1.5.5.2

describe("filterRange", function() {

  it("given case", () => {
    let arr = [5, 3, 8, 1];
    function arrEquals(arr1, arr2) {
        return arr1.length === arr2.length && arr1.every(function(item, index){
            return item === arr2[index];
        });
    }
    assert.equal( arrEquals( filterRange(arr, 1, 4), [3, 1] ), true );
    assert.equal( arrEquals( arr, [5, 3, 8, 1] ), true );
  });

});

