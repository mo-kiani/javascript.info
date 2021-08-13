# Task 1.2.11.8

```
if (-1 || 0) alert( 'first' );
// The result of the expression is -1 because -1 is truthy ( -1 != 0 )
// The alert will trigger because -1 is truthy

if (-1 && 0) alert( 'second' );
// The result of the expression is 0 because -1 is truthy 
// The alert will not trigger because 0 is falsey

if (null || -1 && 1) alert( 'third' );
// The && is evaluated first, to 1 because both values are truthy and it is last
// Then ( null || 1 ) evaluates to 1 because null is falsey
// The alert will trigger because 1 is truthy
```

