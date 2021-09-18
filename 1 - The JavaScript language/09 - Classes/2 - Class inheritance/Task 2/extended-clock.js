// Task 1.9.2.2

class ExtendedClock extends Clock {
    constructor({precision=1000, ...args} = {precision: 1000}) {
      super(args);
      this.precision = precision;
    }

    start() {
      this.render();
      this.timer = setInterval(() => this.render(), this.precision);
    }
}

