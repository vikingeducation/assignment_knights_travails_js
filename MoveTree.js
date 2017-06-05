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
    this.actualDepth = 0;
    this.moveCount = 0;
    this.buildTree();
  }

  legalMove(move) {
    return (
      this.visited[move.x] &&
      !this.visited[move.x][move.y] &&
      move.x <= 7 &&
      move.x >= 0 &&
      move.y <= 7 &&
      move.y >= 0
    );
  }

  possibleMoves(start) {
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
      if (this.legalMove({ x, y }) && start.depth < this.maxDepth) {
        moves.push(new Move(x, y, start.depth + 1, start));
        this.visited[x][y] = true;
        this.moveCount++;
        if (this.actualDepth < start.depth + 1) {
          this.actualDepth = start.depth + 1;
        }
      }
    });
    console.log(moves);
    return moves;
  }

  buildTree() {
    let queue = [];
    queue.push(this.root);

    while (queue.length) {
      const node = queue.shift();

      const children = this.possibleMoves(node);
      node.children = children;

      queue = [...queue, ...children];
    }
  }

  inspect() {
    console.log("The total move count is", this.moveCount);
    console.log("The max depth is", this.actualDepth);
  }
}

class KnightSearcher {
  constructor(tree) {
    this.tree = tree;
  }

  BFS(target) {
    let queue = [this.tree.root];
  }
}

const tree = new MoveTree([3, 3], 10000);

const searcher = new KnightSearcher(tree);

console.log(tree);
tree.inspect();
