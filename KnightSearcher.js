const MoveTree = require("./MoveTree");
const knight_tree = new MoveTree([1, 1], 7);
class KnightSearcher {
  constructor(tree) {
    this.tree = tree;
  }
  bfsFor(targetCoords) {
    let queue = [this.tree.root];
    let path = [];
    while (queue.length) {
      let node = queue.shift();
      if (node.x === targetCoords[0] && node.y === targetCoords[1]) {
        let depth = node.depth;
        while (node) {
          path.unshift([node.x, node.y]);
          node = node.parent;
        }

        return { path, depth };
      } else {
        queue = queue.concat(node.children);
      }
    }
    return null;
  }
  dfsFor(targetCoords) {
    let stack = [this.tree.root];
    let path = [];
    while (stack.length) {
      let node = stack.pop();
      if (node.x === targetCoords[0] && node.y === targetCoords[1]) {
        let depth = node.depth;
        while (node) {
          path.unshift([node.x, node.y]);
          node = node.parent;
        }
        return { path, depth };
      } else {
        stack = stack.concat(node.children);
      }
    }
    return null;
  }
}

const searcher = new KnightSearcher(knight_tree);
let searchResults = searcher.bfsFor([2, 3]);
console.log(
  `Depth: ${searchResults.depth}. Path: ${JSON.stringify(searchResults.path)}`
);

// let timeBefore = Date.now();
// for (let i = 0; i < 1000; i++) {
//   searcher.bfsFor([2, 3]);
// }
// let timeAfter = Date.now();
// console.log(`BFS time: ${timeAfter - timeBefore}ms`);

module.exports = KnightSearcher;
