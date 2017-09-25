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
    this.counter = 0;
    // for (let i = 0; i < 2; i++) {
    //   this.generateNewDepth();
    // }
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
      this.queue[0].boardPos,
      knightMoves
    );
    // console.log("possible positions", possiblePositions);

    possiblePositions.forEach(boardPos => {
      let newMove = new Move(
        boardPos,
        this.queue[0].depth + 1,
        [],
        this.queue[0]
      );
      console.log(newMove);
      this.queue.push(newMove);
      this.queue[0].children.push(newMove);
      this.counter++;
    });
    // console.log("this.queue: ", this.queue);
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
    console.log("nodes: ", this.counter);
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

const knightTree = new MoveTree([0, 0], 3);
knightTree.inspect();
