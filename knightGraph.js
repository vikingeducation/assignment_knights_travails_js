const Stack = require("./stack");
const Queue = require("./queue");

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

const _validMoves = (x, y) => {
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
  return accepted;
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
    let checked = 0;
    do {
      checked++;
      if (current.x === endX && current.y === endY) {
        console.log("DFS Steps: ", checked, "Length: ", pathStack.length);
        return pathStack.slice();
      }

      let currentDepth = depthMap.get(current);
      for (let square of current.adjacentSquares) {
        if (!depthMap.has(square) || depthMap.get(square) > currentDepth + 1) {
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

  bfsFor([startX, startY], [endX, endY]) {
    let queue = new Queue();
    let current = this.squares[startX][startY];
    let pathMap = new Map();
    pathMap.set(current, null);
    let checked = 0;
    do {
      checked++;
      if (current.x === endX && current.y === endY) {
        let pathStack = new Stack();
        while (current) {
          pathStack.push([current.x, current.y]);
          current = pathMap.get(current);
        }
        console.log("BFS Steps: ", checked, "Length: ", pathStack.length);
        return pathStack.slice().reverse();
      }

      for (let square of current.adjacentSquares) {
        if (!pathMap.has(square)) {
          queue.enqueue(square);
          pathMap.set(square, current);
        }
      }

      current = queue.dequeue();
    } while (queue.length);
    return false;
  }

  benchmark(operationCount, testCases) {
    console.log("============== Running DFS =================");
    let start = Date.now();
    let count = operationCount;
    let answers = [];
    for (let i = 0; i < count; i++) {
      for (let [start, end] of testCases) {
        answers.push(this.dfsFor(start, end));
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
      for (let [start, end] of testCases) {
        answers.push(this.bfsFor(start, end));
      }
    }
    finalTime = (Date.now() - start) / 1000;
    console.log(`Time taken for bfs  ${operationCount} times  = `, finalTime);
    console.log(`Answers = `, answers.length);
  }
}

const board = new Board();
const searcher = new KnightSearcher(board);
console.log(searcher.dfsFor([4, 3], [6, 6]));
console.log(searcher.bfsFor([4, 3], [6, 6]));
// searcher.benchmark(10000, [[[4, 3], [6, 4]], [[6, 3], [1, 1]]]);
