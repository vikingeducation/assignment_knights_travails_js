const Queue = require("./queue");
const Stack = require("./stack");

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

const BOARD_X = 8;
const BOARD_Y = 8;
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
  constructor(x, y, depth, parent) {
    this.x = x;
    this.y = y;
    this.depth = depth;
    this.children = [];
    this.parent = parent;
  }
}

class MoveTree {
  constructor([x, y], maxDepth) {
    this.maxDepth = maxDepth;
    this.root = new Move(x, y, 0);
    this.nodes = 1;

    let nodeQueue = new Queue();
    nodeQueue.enqueue(this.root);
    while (nodeQueue.length && nodeQueue.peek().depth < this.maxDepth) {
      let current = nodeQueue.dequeue();
      for (let move of _validMoves(current.x, current.y)) {
        const node = new Move(
          current.x + move[0],
          current.y + move[1],
          current.depth + 1,
          current
        );
        this.nodes++;
        current.children.push(node);
        nodeQueue.enqueue(node);
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

class KnightSearcher {
  constructor(moveTree) {
    this.moveTree = moveTree;
    this.start = moveTree.root;
  }

  dfsFor([x, y]) {
    let stack = new Stack();
    let current = this.start;
    do {
      if (current.x === x && current.y === y) {
        let answer = new Stack();
        answer.push([current.x, current.y]);
        while (current.parent) {
          answer.push([current.parent.x, current.parent.y]);
          current = current.parent;
        }
        return answer.stack.reverse();
      }
      stack.concat(current.children);
      current = stack.pop();
    } while (stack.length);
    return false;
  }
  bfsFor([x, y]) {
    let queue = new Queue();
    let current = this.start;
    do {
      if (current.x === x && current.y === y) {
        let answer = new Stack();
        answer.push([current.x, current.y]);
        while (current.parent) {
          answer.push([current.parent.x, current.parent.y]);
          current = current.parent;
        }
        return answer.stack.reverse();
      }
      if (current.children && current.children.length) {
        queue.concat(current.children);
      }
      current = queue.dequeue();
    } while (queue.length);
    return false;
  }
  benchmark(operationCount, testcases) {
    //dfs
    console.log("============== Running DFS =================");
    let start = Date.now();
    let count = operationCount;
    let answers = [];
    for (let i = 0; i < count; i++) {
      for (let oneCase of testcases) {
        answers.push([this.dfsFor(oneCase)]);
      }
    }
    let finalTime = (Date.now() - start) / 1000;
    console.log(`Time taken for dfs ${operationCount} times = `, finalTime);
    console.log(`Answers = `, answers.length);

    console.log("============== Running bfs =================");
    start = Date.now();
    count = operationCount;
    answers = [];
    for (let i = 0; i < count; i++) {
      for (let oneCase of testcases) {
        answers.push([this.bfsFor(oneCase)]);
      }
    }
    finalTime = (Date.now() - start) / 1000;
    console.log(`Time taken for bfs  ${operationCount} times  = `, finalTime);
    console.log(`Answers = `, answers.length);
  }
}

const before = Date.now();
const tree = new MoveTree([4, 4], 12);
console.log(tree.inspect());
// console.log(JSON.stringify(tree.root, null, 2));
// tree.display();
// console.log((Date.now() - before) / 1000);
const searcher = new KnightSearcher(tree);
console.log(searcher.dfsFor([4, 2]));
console.log(searcher.dfsFor([8, 8]));
console.log(searcher.bfsFor([4, 2]));
console.log(searcher.bfsFor([8, 8]));
searcher.benchmark(10, [4, 2]);
searcher.benchmark(15, [8, 8]);

/////
