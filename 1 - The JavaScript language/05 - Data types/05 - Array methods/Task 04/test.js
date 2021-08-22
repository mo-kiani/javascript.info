// Task 1.5.5.4

describe("reverseSort", function() {

  it("given case", () => {
    let arr = [5, 2, 1, -10, 8];
    function arrEquals(arr1, arr2) {
        return arr1.length === arr2.length && arr1.every(function(item, index){
            return item === arr2[index];
        });
    }
    reverseSort(arr);
    assert.equal( arrEquals( arr, [8, 5, 2, 1, -10] ), true );
  });

});

