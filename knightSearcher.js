const MoveTree = require('./moveTree');

class KnightSearcher {
  constructor(tree) {
    this.tree = tree;
  }

  bfsFor(coords) {
    const x = coords[0];
    const y = coords[1];
    const origin = this.tree.origin;

    if (origin.x === x && origin.y === y) return 'Already in position';

    let queue = [origin];

    while (queue.length) {
      if (queue[0].x === x && queue[0].y === y) {
        printMoves(queue[0]);
        return;
      }

      for (let i = 0; i < queue[0].children.length; i++) {
        queue.push(queue[0].children[i]);
      }

      queue.shift();
    }
  }

  dfsFor(coords) {
    const square = findSquareByCoords(coords, this.tree.origin);
    printMoves(square);
  }
}

function findSquareByCoords(coords, current) {
  if (!current.children.length) return;

  const square = searchChildren(coords, current);
  if (square) return square;

  for (let i = 0; i < current.children.length; i++) {
    const square = findSquareByCoords(coords, current.children[i]);
    if (square) return square;
  }
}

function searchChildren(coords, move) {
  const x = coords[0];
  const y = coords[1];

  for (let i = 0; i < move.children.length; i++) {
    if (move.children[i].x === x && move.children[i].y === y) return move.children[i];
  }
}

function printMoves(square) {
  const moves = [];
  moves.push([square.x, square.y]);
  let current = square;

  while (current.parent) {
    moves.unshift([current.parent.x, current.parent.y]);
    current = current.parent;
  }

  console.log(`${ moves.length - 1 } Moves:`);
  for (let i = 0; i < moves.length; i++) {
    console.log(moves[i]);
  }
}

const list = new MoveTree([3, 3], 5);
const knightSearcher = new KnightSearcher(list);

knightSearcher.dfsFor([4, 2]);
knightSearcher.bfsFor([4, 2]);
