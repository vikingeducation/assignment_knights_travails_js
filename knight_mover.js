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
    this.queue = [new Move(boardPos)];
    for (let i = 0; i < 5; i++) {
      this.generateNewDepth();
    }
  }

  generateNewDepth() {
    const queueLength = this.queue.length;

    for (let i = 0; i < queueLength; i++) {
      this.generateNewMoves();
    }
  }

  generateNewMoves() {
    // we aren't adding the children to the parents right now
    let possiblePositions = this.generateNewPositions(
      this.queue[0],
      knightMoves
    );

    possiblePositions.forEach(boardPos => {
      this.queue.push(
        new Move(boardPos, this.queue[0].depth + 1, [], this.queue[0])
      );
    });
    console.log("this.queue: ", this.queue);
    this.queue = this.queue.slice(1);
  }

  generateNewPositions(origin, moveArray) {
    const possibleMoves = [];

    moveArray.forEach(move => {
      const boardPos = [move[0] + origin[0], move[1] + origin[1]];
      if (inBoard(boardPos, [7, 7])) possibleMoves.push(boardPos);
    });
    return possibleMoves;
  }

  // nodes and depth
  inspect() {
    console.log("nodes: ", this.queue.length);
    console.log("maxDepth: ", this.maxDepth);
  }
}

const inBoard = (boardPos, boardMax) => {
  return (
    boardPos[0] >= 0 &&
    boardPos[0] <= boardMax[0] &&
    boardPos[1] >= 0 &&
    boardPos[1] <= boardMax[1]
  );
};

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

const knightTree = new MoveTree([0, 0], 3);
knightTree.inspect();
