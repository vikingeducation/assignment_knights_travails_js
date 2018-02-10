class Move {
  constructor(x, y, depth, children, parent) {
    this.x = x;
    this.y = y;
    this.depth = depth;
    this.children = children;
    this.parent = parent;
  }
}

class MoveTree {
  constructor(coords, maxDepth) {
    this.maxDepth = maxDepth;
    this.origin = new Move(coords[0], coords[1], 0, [], null);

    let currentDepth = 0;
    setMoves(this.origin, currentDepth, maxDepth);
  }

  inspect() {
    return `Your tree has ${ getNodeCount(this.origin) } Move nodes and a maximum depth of ${ this.maxDepth }`;
  }
}

function setMoves(currentMove, currentDepth, maxDepth) {
  if (currentDepth >= maxDepth) return;

  const potentialMoves = findMoves([currentMove.x, currentMove.y]);
  for (var i = 0; i < potentialMoves.length; i++) {
    const newMove = new Move(potentialMoves[i][0], potentialMoves[i][1], currentDepth + 1, [], currentMove);
    currentMove.children.push(newMove);
    setMoves(newMove, currentDepth + 1, maxDepth); // recursion
  }
}

function validCoords(coords) {
  return coords[0] >= 1 && coords[0] <= 5 && coords[1] >= 1 && coords[1] <= 5;
}

function findMoves(coords) {
  const x = coords[0];
  const y = coords[1];
  const validMoves = [];

  const potentialMoves = [
    [x + 1, y - 2],
    [x + 1, y + 2],
    [x - 1, y - 2],
    [x - 1, y + 2],
    [x + 2, y - 1],
    [x + 2, y + 1],
    [x - 2, y - 1],
    [x - 2, y + 1],
  ];

  for (var i = 0; i < potentialMoves.length; i++) {
    if (validCoords(potentialMoves[i])) validMoves.push(potentialMoves[i]);
  }

  return validMoves;
}

function getNodeCount(parent) {
  if (!parent.children.length) return 0;

  let count = parent.children.length;
  for (var i = 0; i < parent.children.length; i++) {
    count += getNodeCount(parent.children[i]); // more recursion :-)
  }

  return count;
}

module.exports = MoveTree;

// const tree = new MoveTree([3, 3], 1);
// console.log(tree.inspect());
