// Task 1.5.5.8

describe("mapToObjects", function() {

  it("given case", () => {
      let john = {name: "John", surname: "Smith", id: 1};
      let pete = {name: "Pete", surname: "Hunt", id: 2};
      let mary = {name: "Mary", surname: "Key", id: 3};

      let users = [john, pete, mary ];
      let usersMapped = mapToObjects(users);

      assert.equal(usersMapped[0].id, 1);
      assert.equal(usersMapped[0].fullName, 'John Smith');
      assert.equal(usersMapped[1].id, 2);
      assert.equal(usersMapped[1].fullName, 'Pete Hunt');
      assert.equal(usersMapped[2].id, 3);
      assert.equal(usersMapped[2].fullName, 'Mary Key');
      assert.strictEqual(usersMapped[0].name, undefined);
      assert.strictEqual(usersMapped[0].surname, undefined);
      assert.strictEqual(usersMapped[1].name, undefined);
      assert.strictEqual(usersMapped[1].surname, undefined);
      assert.strictEqual(usersMapped[2].name, undefined);
      assert.strictEqual(usersMapped[2].surname, undefined);
  });

});

