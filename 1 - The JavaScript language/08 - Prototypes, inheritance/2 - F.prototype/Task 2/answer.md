# Task 1.8.2.2


### Example that works
```
function Constructor() {
}
Constructor.prototype.hello = function() {
    console.log("Hello World!"); 
}

```

### Example that doesn't work
```
function Constructor() {
}
Constructor.prototype = {};

```

