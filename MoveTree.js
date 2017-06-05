class Move {
  constructor(x, y, depth, parent, children = []) {
    this.x = x;
    this.y = y;
    this.depth = depth;
    this.parent = parent;
    this.children = children;
  }
}

class MoveTree {
  constructor(start, maxDepth) {
    this.root = new Move(start[0], start[1], 0);
    // [ [], [], [], [], [], [], [], [] ]
    this.visited = Array(8).fill().map(() => []);
    this.visited[start[0]][start[1]] = true;
    this.maxDepth = maxDepth;
  }

  legalMove(move) {
    return !this.visited[move.x][move.y] &&
           move.x <= 7 && move.x >= 0 &&
           move.y <= 7 && move.y >= 0
  }

  possibleMoves(start) {
    const moves = [];
    [[-2, 1], [-1, 2], [1, 2], [2, 1], [2, -1], [1, -2], [-1, -2], [-2, -1]].forEach(move => {
      const xMove = move[0];
      const yMove = move[1];
      const x = start.x + xMove;
      const y = start.y + yMove;
      if (legalMove({x, y}) && start.depth < this.maxDepth) {
        moves.push(new Move(x, y, start.depth + 1, start));
      }
    })
    return moves;
  }
}

const tree = new MoveTree();
console.log(tree.visited);
