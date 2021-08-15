// Task 1.2.11.9

let response = prompt("Who are you?");

if (!(response)) {
    alert('Canceled');
}
else if (response !== "Admin") {
    alert("I don't know you");
}
else {
    let password = prompt("Prove it. What's the magic phrase?");

    if (!(password)) {
        alert('Canceled');
    }
    else if (password === 'TheMaster') {
        alert('Welcome!');
    }
    else {
        alert('Wrong Password');
    }
}

