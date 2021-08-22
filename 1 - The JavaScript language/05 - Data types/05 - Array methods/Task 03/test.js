// Task 1.5.5.3

describe("filterRangeInPlace", function() {

  it("given case", () => {
    let arr = [5, 3, 8, 1];
    function arrEquals(arr1, arr2) {
        return arr1.length === arr2.length && arr1.every(function(item, index){
            return item === arr2[index];
        });
    }
    filterRangeInPlace(arr, 1, 4);
    assert.equal( arrEquals( arr, [3, 1] ), true );
  });

});

