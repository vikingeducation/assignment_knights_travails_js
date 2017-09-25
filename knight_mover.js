class Move {
  constructor(boardPos, depth = 1, children = [], parent = null) {
    this.boardPos = boardPos;
    this.depth = depth;
    this.children = children;
    this.parent = parent;
  }
}

class MoveTree {
  constructor(boardPos, maxDepth = 1, moveSet) {
    this.maxDepth = maxDepth;
    this.moveSet = moveSet;
    this.queue = [new Move(boardPos)];
    // this.stack = [new Move(boardPos)];
    this.vertex = new Move(boardPos);
    this.counter = 0;
    this.map = [boardPos];
  }

  printPath(vertex) {
    const pathArray = [];

    while (vertex) {
      pathArray.push(vertex);
      vertex = vertex.parent;
    }

    console.log(`${pathArray.length - 1} Moves`);
    pathArray.reverse().forEach(vertex => console.log(vertex.boardPos));
  }

  searchDFS(targetCoords) {
    if (this.comparePositions(this.vertex.boardPos, targetCoords))
      return this.vertex;
    this.map.push(this.vertex.boardPos);
    let positions = this.generateNewPositions(
      this.vertex.boardPos,
      this.moveSet
    );

    // filter out anything that's in map
    positions = positions.filter(position => !this.withinMap(position));
    if (!positions.length) {
      this.vertex = this.vertex.parent;
      return this.searchDFS(targetCoords);
    }

    // need to find best move to use
    const bestPos = this.doMathAndFindBestChild(positions, targetCoords);
    const newMove = new Move(bestPos, this.vertex.depth + 1, [], this.vertex);
    this.vertex.children.push(newMove);
    this.vertex = newMove;
    return this.searchDFS(targetCoords);
  }

  doMathAndFindBestChild(positions, targetCoords) {
    console.log("math");
    // best case someone is on the target
    const endPoint = positions.find(position =>
      this.comparePositions(position, targetCoords)
    );
    if (endPoint) return endPoint;

    // we try to find position that is closest to sqrt(5)
    let bestPos = positions[0];
    console.log(bestPos);

    positions.forEach(position => {
      if (
        Math.abs(this.findAboluteDistance(position, targetCoords)) <
          Math.abs(this.findAboluteDistance(bestPos, targetCoords)) &&
        Math.abs(this.findAboluteDistance(position, targetCoords)) >= 2
      )
        bestPos = position;
    });
    console.log(bestPos);
    return bestPos;
  }

  findAboluteDistance(pos_1, pos_2) {
    return Math.sqrt((pos_1[0] - pos_2[0]) ** 2, (pos_1[1] - pos_2[1]) ** 2);
  }

  comparePositions(pos_1, pos_2) {
    return pos_1[0] === pos_2[0] && pos_1[1] === pos_2[1];
  }

  withinMap(position) {
    return !!this.map.find(currPosition =>
      this.comparePositions(position, currPosition)
    );
  }

  searchBFS(targetCoords) {
    const targetMove = this.queue.find(
      move =>
        move.boardPos[0] === targetCoords[0] &&
        move.boardPos[1] === targetCoords[1]
    );
    if (targetMove) return targetMove;
    this.generateNewDepth();
    return this.searchBFS(targetCoords);
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
      this.moveSet
    );

    possiblePositions.forEach(boardPos => {
      let newMove = new Move(
        boardPos,
        this.queue[0].depth + 1,
        [],
        this.queue[0]
      );
      this.queue.push(newMove);
      this.queue[0].children.push(newMove);
      this.counter++;
    });
    this.queue = this.queue.slice(1);
  }

  generateNewPositions(origin, moveArray) {
    const possibleMoves = [];

    moveArray.forEach(move => {
      const boardPos = [move[0] + origin[0], move[1] + origin[1]];
      if (this.inBoard(boardPos, [7, 7])) possibleMoves.push(boardPos);
    });
    return possibleMoves;
  }

  // nodes and depth
  inspect() {
    console.log("nodes: ", this.counter);
    console.log("maxDepth: ", this.maxDepth);
  }

  inBoard(boardPos, boardMax) {
    return (
      boardPos[0] >= 0 &&
      boardPos[0] <= boardMax[0] &&
      boardPos[1] >= 0 &&
      boardPos[1] <= boardMax[1]
    );
  }
}

module.exports = MoveTree;

// const knightTree = new MoveTree([0, 0], 3);
// knightTree.inspect();
