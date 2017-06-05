class Move {
  constructor(x, y, children, parent) {
    this.x = x;
    this.y = y;
    this.children = children;
    this.parent = parent;
  }
}

class MoveTree {
  constructor() {
    this.visitedArray = new Array(8);
    this.visitedArray.forEach(space => {
      space = new Array(8);
    });
  }
}
