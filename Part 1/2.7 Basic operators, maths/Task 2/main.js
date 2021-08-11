let a = 2;

let x = 1 + (a *= 2);
// a = 4 because the expression (a *= 2) assigns 'a' 2 times its original value
// the expression (a *= 2) evaluates to 4 as well
// so the line simplifies to let x = 1 + 4
// therefore, x = 5

