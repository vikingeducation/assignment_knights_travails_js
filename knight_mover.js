class Move {
  constructor(boardPos, depth = 1, children = [], parent = null) {
    this.boardPos = boardPos;
    this.depth = depth;
    this.children = children;
    this.parent = parent;
  }
}

class MoveTree {
  constructor(boardPos, maxDepth = 1) {
    this.maxDepth = maxDepth;
    this.queue = [];
    const possibleMoves = this.generateMoves(boardPos, boardPos);
    possibleMoves.forEach(boardPos => {
      this.queue.push(new Move(boardPos));
    });
  }

  generateMoves(boardPos, origin) {
    const possibleMoves = [];
    const knightMoves = [
      [1, 2],
      [2, 1],
      [2, -1],
      [1, -2],
      [-1, 2],
      [-2, -1],
      [-1, -2],
      [-2, 1]
    ];
    knightMoves.forEach(move => {
      if (inBoard(7, 7, boardPos[0] + origin[0], boardPos[1] + origin[1]))
        possibleMoves.push(move);
    });
    return possibleMoves;
  }

  // nodes and
  inspect() {
    console.log("nodes: ", this.queue.length);
    console.log("maxDepth: ", this.maxDepth);
  }
}

const inBoard = (xBoard, yBoard, xMove, yMove) => {
  return xMove >= 0 && xMove <= xBoard && yMove >= 0 && yMove <= yBoard;
};

const knightTree = new MoveTree([0, 0], 1);
knightTree.inspect();
