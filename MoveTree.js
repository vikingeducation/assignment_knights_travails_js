const Move = require("./Move");

class MoveTree {
  constructor(coordinates, maxDepth) {
    this.root = new Move(coordinates[0], coordinates[1], 0, [], null);
    this.maxDepth = maxDepth;
    this.boardSize = 8;
    this.generateMoves(this.root);
  }

  generateMoves(node, maxDepth) {
    nextMoves(node);
    currentDepth = 1;
    while (maxDepth <= currentDepth) {
      node.children.forEach(child => {
        nextMoves(child);
      });
      node = child;
      this.currentDepth++;
    }
    function nextMoves(node) {
      node.children.push(
        new Move(node.x - 2, node.y - 1, node.depth + 1, [], node)
      );
      node.children.push(
        new Move(node.x - 1, node.y - 2, node.depth + 1, [], node)
      );
      node.children.push(
        new Move(node.x + 1, node.y - 2, node.depth + 1, [], node)
      );
      node.children.push(
        new Move(node.x + 2, node.y - 1, node.depth + 1, [], node)
      );
      node.children.push(
        new Move(node.x - 1, node.y + 2, node.depth + 1, [], node)
      );
      node.children.push(
        new Move(node.x - 2, node.y + 1, node.depth + 1, [], node)
      );
      node.children.push(
        new Move(node.x + 1, node.y + 2, node.depth + 1, [], node)
      );
      node.children.push(
        new Move(node.x + 2, node.y + 1, node.depth + 1, [], node)
      );
    }
  }
}

//generate moves
let tree = new MoveTree([3, 3], 1);
