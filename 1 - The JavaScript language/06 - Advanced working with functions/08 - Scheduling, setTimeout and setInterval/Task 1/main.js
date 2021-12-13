// Task 1.6.8.1

// setInterval version
function printNumbers(from, to) {
    let interval = setInterval( function() {
        alert(from);
        from += 1;
        if ( from > to ) {
            clearInterval(interval);
        }
    }, 1000 );
}

// setTimeout version
function printNumbers(from, to) {
    if (from > to) {
        return;
    }

    setTimeout( function() {
        alert(from);
        printNumbers( from+1, to );
    }, 1000 );
}

