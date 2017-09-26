const { MoveTree, Move } = require("./knight_mover");

class KnightSearcher {
  constructor(tree) {
    this.tree = tree;
  }

  bfsFor(targetCoords) {
    const endVertex = this.tree.searchBFS(targetCoords);
    this.tree.queue = [new Move(targetCoords)];

    // this.tree.printPath(endVertex);
    // return endVertex;
  }

  dfsFor(targetCoords) {
    // const maxDepth = this.bfsFor(targetCoords).depth;
    const endVertex = this.tree.searchDFS(targetCoords);
    this.vertex = new Move(targetCoords);
    this.tree.map = [];
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
const randomArray = [];
new Array(20000)
  .fill(0)
  .forEach(() =>
    randomArray.push([
      Math.floor(Math.random() * 7),
      Math.floor(Math.random() * 7)
    ])
  );

let start = new Date();
for (let i = 0; i < randomArray.length; i++) {
  search.bfsFor(randomArray[i]);
}
let end = new Date();

console.log("breadth first: ", (end - start) / 1000, " seconds");

start = new Date();
for (let i = 0; i < randomArray.length; i++) {
  search.dfsFor(randomArray[i]);
}
end = new Date();

console.log("depth first: ", (end - start) / 1000, " seconds");

// search.dfsFor([3, 0]);
