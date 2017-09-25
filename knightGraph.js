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

class Square {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.adjacentSquares = [];
  }
}

class Board {
  constructor() {
    this.squares = [...Array(BOARD_X + 1)].map((_, x) =>
      [...Array(BOARD_Y + 1)].map((_, y) => new Square(x, y))
    );
    this.square.forEach(row => {
      row.forEach(square => {
        square.chilren = _validMoves(square.x, square.y).map(([x, y]) => {
          return this.squares[x][y];
        });
      });
    });
  }

  inspect() {
    return `${this.nodes} nodes at a maximum depth of ${this.maxDepth}`;
  }

  display() {
    console.log(this.root);
  }
}

class KnightSearcher {
  constructor(board) {
    this.squares = board.squares;
  }

  dfsFor([startX, startY], [endX, endY]) {
    let stack = new Stack();
    let current = this.squares[startX][startY];
    do {
      if (current.x === endX && current.y === endY) {
        let answer = new Stack();
        answer.push([current.x, current.y]);
        while (current.parent) {
          answer.push([current.parent.x, current.parent.y]);
          current = current.parent;
        }
        return answer.stack.reverse();
      }
      stack.concat(current.adjacentSquares);
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
console.log((Date.now() - before) / 1000);
const searcher = new KnightSearcher(tree);
console.log(searcher.dfsFor([4, 2]));
console.log(searcher.dfsFor([8, 8]));
console.log(searcher.bfsFor([4, 2]));
console.log(searcher.bfsFor([8, 8]));
searcher.benchmark(10, [4, 2]);
searcher.benchmark(15, [8, 8]);

/////
