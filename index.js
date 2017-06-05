const MoveTree = require("./MoveTree");
const KnightSearcher = require("./KnightSearcher");

const tree = new MoveTree([4, 4], 5);
// console.log(tree);
// tree.inspect();

const searcher = new KnightSearcher(tree);
searcher.bfs([1, 2]);
searcher.dfs([1, 2]);
