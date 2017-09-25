const MoveTree = require("./knight_mover");

class KnightSearcher {
  constructor(tree) {
    this.tree = tree;
  }

  bfsFor(targetCoords) {
    const endVertex = this.tree.searchBFS(targetCoords);
    this.tree.printPath(endVertex);
  }

  dfsFor(targetCoords) {
    // const endVertex = this.tree.searchDFS(targetCoords);
    // this.tree.printPath(endVertex);
  }
}

const moveSet = [
  [1, 2],
  [2, 1],
  [2, -1],
  [1, -2],
  [-1, 2],
  [-2, -1],
  [-1, -2],
  [-2, 1]
];

const search = new KnightSearcher(new MoveTree([0, 0], 1, moveSet));

search.bfsFor([5, 2]);
