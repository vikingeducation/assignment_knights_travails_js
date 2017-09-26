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
        accepted.push([x + move[0], y + move[1]]);
      }
    }
    ACCEPTABLE[x] = ACCEPTABLE[x] ? ACCEPTABLE[x] : [];
    ACCEPTABLE[x][y] = accepted;
    return accepted;
  }
};

class Square {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.adjacentSquares = [];
  }
}

class Board {
  constructor() {
    this.squares = [...Array(BOARD_X + 1)].map((_, x) => {
      return [...Array(BOARD_Y + 1)].map((_, y) => {
        return new Square(x, y);
      });
    });

    for (let row of this.squares) {
      for (let square of row) {
        for (let [x, y] of _validMoves(square.x, square.y)) {
          square.adjacentSquares.push(this.squares[x][y]);
        }
      }
    }
  }

  display() {
    console.log(this.squares);
  }
}

class KnightSearcher {
  constructor(board) {
    this.squares = board.squares;
  }

  dfsFor([startX, startY], [endX, endY]) {
    let depthMap = new Map();
    let stack = new Stack();
    let pathStack = new Stack();
    let current = this.squares[startX][startY];
    depthMap.set(current, 1);
    pathStack.push([current.x, current.y]);
    do {
      if (current.x === endX && current.y === endY) {
        return pathStack.slice();
      }

      let currentDepth = depthMap.get(current);
      for (let square of current.adjacentSquares) {
        if (!depthMap.has(square)) {
          stack.push(square);
          depthMap.set(square, currentDepth + 1);
        }
      }

      current = stack.pop();
      let newDepth = depthMap.get(current);
      for (let i = 0; i < currentDepth - newDepth + 1; i++) {
        pathStack.pop();
      }
      pathStack.push([current.x, current.y]);
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
const board = new Board();
// console.log(JSON.stringify(board.squares, null, 2));
// board.display();
console.log((Date.now() - before) / 1000);
const searcher = new KnightSearcher(board);
console.log(searcher.dfsFor([4, 3], [4, 5]));
// console.log(searcher.dfsFor([8, 8]));
// console.log(searcher.bfsFor([4, 2]));
// console.log(searcher.bfsFor([8, 8]));
// searcher.benchmark(10, [4, 2]);
// searcher.benchmark(15, [8, 8]);

/////
