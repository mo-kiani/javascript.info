// Task 1.2.17.1

ask = (question, yes, no) => confirm(question) ? yes() : no();
ask(
    "Do you agree?", 
    () => alert("You agreed."),
    () => alert("You canceled the execution.")
);

