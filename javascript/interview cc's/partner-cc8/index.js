class Navigator {
  constructor() {
    this.backHistory = [];
    this.forwardHistory = [];
  }

  go(location) {
    this.backHistory.push(location);
    this.forwardHistory = [];
  }

  back() {
    if (this.backHistory.length > 1) {
      const currentLocation = this.backHistory.pop();
      this.forwardHistory.push(currentLocation);
      return this.backHistory[this.backHistory.length - 1];
    } else {
      return null;
    }
  }

  forward() {
    if (this.forwardHistory.length > 0) {
      const nextLocation = this.forwardHistory.pop();
      this.backHistory.push(nextLocation);
      return nextLocation;
    } else {
      return null;
    }
  }
}

// const navigator = new Navigator();
// navigator.go("link(1)");
// navigator.go("link(2)");
// navigator.go("link(3)");
// console.log(navigator.back());

// navigator.go("link(1)");
// navigator.go("link(2)");
// navigator.go("link(3)");
// navigator.go("link(4)");
// console.log(navigator.back());
// console.log(navigator.forward());
// navigator.go("link(5)");
// console.log(navigator.back());
