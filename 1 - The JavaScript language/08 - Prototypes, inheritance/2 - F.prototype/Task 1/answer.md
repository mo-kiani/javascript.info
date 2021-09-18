# Task 1.8.2.1

1. `true` because `rabbit` was constructed before `Rabbit.prototype` changed.

2. `false` because `Rabbit.prototype` references the same object as the
`[[Prototype]]` of `rabbit`.

3. `true` because writing/deleting is done on `rabbit`'s own property and
reading is done through prototypes chains.

4. `undefined` because `Rabbit.prototype` references the same object as the
`[[Prototype]]` of `rabbit`.

