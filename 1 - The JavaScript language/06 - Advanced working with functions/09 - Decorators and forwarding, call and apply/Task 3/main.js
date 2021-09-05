// Task 1.6.9.3

function debounce(f, ms) {
    let timer = null;
    return function(...args) {
        if (timer !== null) clearTimeout(timer);
        timer = setTimeout( () => f.apply(this, args), ms );
    }
}


let f = debounce(alert, 1000);

f("a");
setTimeout( () => f("b"), 200);
setTimeout( () => f("c"), 500);

