// Task 1.2.15.2

// Variant 1

function checkAge(age) {
    return (age > 18) ? true : confirm('Did parents allow you?');
}

// Variant 2

function checkAge(age) {
    return (age > 18 ) || confirm('Did parents allow you?');
}

