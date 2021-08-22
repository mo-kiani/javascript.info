// Task 1.5.5.13

describe("groupById", function() {

    it("given case", () => {
        let users = [
            {id: 'john', name: "John Smith", age: 20},
            {id: 'ann', name: "Ann Smith", age: 24},
            {id: 'pete', name: "Pete Peterson", age: 31},
        ];

        usersById = groupById(users);

        for ( let u of users ) {
            assert.strictEqual( usersById[u.id].id, u.id );
            assert.strictEqual( usersById[u.id].name, u.name );
            assert.strictEqual( usersById[u.id].age, u.age );
        }
    });

});

