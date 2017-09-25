const MOVES = [
  [-2, -1],
  [-2, 1],
  [-1, 2],
  [-1, -2],
  [1, 2],
  [1, -2],
  [2, 1],
  [2, -1]
];

const BOARD_X = 5;
const BOARD_Y = 5;
let ACCEPTABLE = [];

const _validMoves = (x, y) => {
  if (ACCEPTABLE[x] && ACCEPTABLE[x][y]) {
    return ACCEPTABLE[x][y];
  } else {
    let accepted = [];
    for (let move of MOVES) {
      if (
        x + move[0] > 0 &&
        x + move[0] < BOARD_X + 1 &&
        y + move[1] > 0 &&
        y + move[1] < BOARD_Y + 1
      ) {
        accepted.push(move);
      }
    }
    ACCEPTABLE[x] = ACCEPTABLE[x] ? ACCEPTABLE[x] : [];
    ACCEPTABLE[x][y] = accepted;
    return accepted;
  }
};

class Move {
  constructor(x, y, depth, children = [], parent) {
    this.x = x;
    this.y = y;
    this.depth = depth;
    this.children = children;
    this.parent = parent;
  }
}

class MoveTree {
  constructor([x, y], maxDepth) {
    this.maxDepth = maxDepth;
    this.root = new Move(x, y, 0);
    this.nodes = 1;

    let nodeQueue = [this.root];
    while (nodeQueue.length && nodeQueue[0].depth < this.maxDepth) {
      let current = nodeQueue.shift();
      for (let move of _validMoves(current.x, current.y)) {
        const node = new Move(
          current.x + move[0],
          current.y + move[1],
          current.depth + 1
        );
        this.nodes++;
        current.children.push(node);
        nodeQueue.push(node);
      }
    }
  }

  inspect() {
    return `${this.nodes} nodes at a maximum depth of ${this.maxDepth}`;
  }

  display() {
    console.log(this.root);
  }
}

const before = Date.now();
const tree = new MoveTree([4, 4], 8);
console.log(tree.inspect());
// console.log(JSON.stringify(tree.root, null, 2));
// tree.display();
console.log((Date.now() - before) / 1000);
