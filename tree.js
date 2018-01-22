// This is just one way to represent a Move node
// The `parent` attribute will come in handy later...
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
  constructor(coordinatePair, maxDepth) {
    this.start = new Move(coordinatePair[0], coordinatePair[1]);
    this.maxDepth = maxDepth;
    this.moveNodes = {};
  }

  potentialMoves(node = this.start) {
    let xpos = -2;
    let ypos = 2;
    //Assume 8 x 8 chessboard
    while (node.x + xpos >= 0 && node.x + xpos < 8 && xpos < 3 && xpos > -3) {
      while (node.y + ypos >= 0 && node.y + ypos < 8 && ypos < 3 && ypos > -3) {
        if (Math.abs(xpos) !== Math.abs(ypos) || xpos !== 0 || ypos !== 0) {
          let key = node.x + xpos + node.y + ypos + "";
          this.moveNodes[key] = new Move(node.x + xpos, node.y + ypos);
        }
        ypos--;
      }
      xpos++;
    }
  }

  buildTree(origin, depth = 0, maxDepth = 1) {
    if (depth > maxDepth) {
      //Build the tree
      const moves = createMoves(origin);
      //Filter invalid moves
      const validMoves = filterInvalidMoves(moves);

      //Add the valid moves as children to the root
      //Root should be the origin or place the knight started
      //Call buildTree for next depth
    }
  }

  filterInvalidMoves(moves) {
    //Is x < 0?
    //Is y < 0?
    //Is x greater than max?
    //Is y greater than max?
    //return filtered moves
  }

  createMoves(origin) {
    return [
      new Move(this.start - 2, this.start + 1),
      new Move(this.start - 2, this.start - 1),
      new Move(this.start + 2, this.start - 1),
      new Move(this.start + 2, this.start + 1),
      new Move(this.start - 1, this.start + 2),
      new Move(this.start - 1, this.start - 2),
      new Move(this.start + 1, this.start - 2),
      new Move(this.start + 1, this.start + 2)
    ];
  }

  // let newNode = new Move(this.start.x, this.start.y, this.start.depth);
  // if (this.start >= 0)
  //   this.moveNodes.push(
  //     this.start,

  inspect() {
    console.log(
      "THIS IS NUMBER OF MOVE NODES: ",
      JSON.stringify(this.moveNodes, null, 2)
    );
    console.log("THIS IS MAX DEPTH: ", this.start.depth);
  }
}

class KnightSearcher {
  constructor() {}
}

let tree = new MoveTree([3, 3], 1);
tree.potentialMoves();
tree.inspect();
