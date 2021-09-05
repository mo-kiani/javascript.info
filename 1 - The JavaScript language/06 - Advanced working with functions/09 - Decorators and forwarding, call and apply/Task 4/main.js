// Task 1.6.9.4

function throttle(f, ms) {
    let throttling = false;
    let lastArgs = null;
    let lastThis = null;
    return function wrapper(...args) {
        if (throttling) {
            lastArgs = args;
            lastThis = this;
        } else {
            throttling = true;
            lastArgs = null;
            lastThis = null;
            f.apply(this, args);
            setTimeout( () => { 
                throttling = false;
                if (lastArgs !== null) {
                    wrapper.apply(lastThis, lastArgs);
                }
                lastArgs = null;
            }, ms );
        }
    }
}


function f(a) {
  console.log(a);
}

// f1000 passes calls to f at maximum once per 1000 ms
let f1000 = throttle(f, 1000);

f1000(1); // shows 1
f1000(2); // (throttling, 1000ms not out yet)
f1000(3); // (throttling, 1000ms not out yet)

// when 1000 ms time out...
// ...outputs 3, intermediate value 2 was ignored

