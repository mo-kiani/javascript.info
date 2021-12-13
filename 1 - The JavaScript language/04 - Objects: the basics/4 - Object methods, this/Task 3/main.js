// Task 1.4.4.3

let ladder = {
    step: 0,
    up() {
        this.step++;
        return this;  // The trick is to return 'this'
    },
    down() {
        this.step--;
        return this;  // The trick is to return 'this'
    },
    showStep() {
        alert( this.step );
        return this;  // The trick is to return 'this'
    },
};

// ladder.up();
// ladder.up();
// ladder.down();
// ladder.showStep();

ladder.up().up().down().showStep();

