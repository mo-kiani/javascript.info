// Task 1.2.14.1

let browser = prompt("What browser are you using?");

if ( browser === 'Edge' ) {
    alert( "You've got the Edge!" );
}
else if ( browser === 'Chrome' || browser === 'FireFox' || browser === 'Safari' || browser === 'Opera' ) {
    alert( 'Okay we support these browsers too' );
}
else {
    alert( 'We hope that this page looks ok!' );
}

