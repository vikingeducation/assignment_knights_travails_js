const LinkedList = require("./LinkedList");

class MoveGraph {
  constructor() {
    this.board = [];
    this.buildGraph();
  }

  buildGraph() {
    for (let x = 0; x < 8; x++) {
      for (let y = 0; y < 8; y++) {
        this.board.push(new LinkedList());
        this.possibleMoves({ x, y });
      }
    }
  }

  legalMove(move) {
    return move.x <= 7 && move.x >= 0 && move.y <= 7 && move.y >= 0;
  }

  possibleMoves(start) {
    let key = this.convertCoorToKey(start);
    const moves = [];
    [
      [-2, 1],
      [-1, 2],
      [1, 2],
      [2, 1],
      [2, -1],
      [1, -2],
      [-1, -2],
      [-2, -1]
    ].forEach(move => {
      const xMove = move[0];
      const yMove = move[1];
      const x = start.x + xMove;
      const y = start.y + yMove;
      if (this.legalMove({ x, y })) {
        this.board[key].addNode({ x, y });
      }
    });
    return moves;
  }

  convertCoorToKey(start) {
    return start.x * 8 + start.y;
  }
}
let graph = new MoveGraph();

console.log(JSON.stringify(graph.board[27], null, 4));
