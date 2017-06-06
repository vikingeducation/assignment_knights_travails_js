const MoveTree = require("./MoveTree");
const KnightSearcher = require("./KnightSearcher");

const tree = new MoveTree([0, 0], 5);
const searcher = new KnightSearcher(tree);

let start, end, time;

console.log('Benchmarking BFS...');
start = Date.now();
for (let i = 0; i < 1000; i++) {
  searcher.bfs([1, 2]);
}
end = Date.now();
time = end - start;
console.log('BFS took', time, 'ms');

console.log();

console.log('Benchmarking DFS...');
start = Date.now();
for (let i = 0; i < 1000; i++) {
  searcher.dfs([1, 2]);
}
end = Date.now();
time = end - start;
console.log('DFS took', time, 'ms');

console.log();

console.log('Benchmarking BFS...');
start = Date.now();
for (let i = 0; i < 1000; i++) {
  searcher.bfs([4, 4]);
}
end = Date.now();
time = end - start;
console.log('BFS took', time, 'ms');

console.log();

console.log('Benchmarking DFS...');
start = Date.now();
for (let i = 0; i < 1000; i++) {
  searcher.dfs([4, 4]);
}
end = Date.now();
time = end - start;
console.log('DFS took', time, 'ms');
