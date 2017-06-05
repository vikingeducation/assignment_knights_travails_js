class KnightSearcher {
  constructor(tree) {
    this.tree = tree;
  }

  bfs(target) {
    const visited = Array(8).fill().map(() => []);
    visited[this.tree.root.x][this.tree.root.y] = true;

    let queue = [this.tree.root];
    let result = null;
    while (queue.length) {
      const node = queue.shift();
      if (node.x === target[0] && node.y === target[1]) {
        result = node;
        break;
      }
      const children = node.children.filter(child => !visited[child.x][child.y]);
      queue = [...queue, ...children];
    }
    this.printPath(result);
    return result;
  }

  iterativeDfs(target) {
    const visited = Array(8).fill().map(() => []);
    visited[this.tree.root.x][this.tree.root.y] = true;

    let stack = [this.tree.root];
    let result = null;
    while (stack.length) {
      const node = stack.pop();
      if (node.x === target[0] && node.y === target[1]) {
        result = node;
        break;
      }
      visited[node.x][node.y] = true;
      const children = node.children.filter(child => !visited[child.x][child.y]);
      stack = [...stack, ...children];
    }
    this.printPath(result);
    return result;
  }

  dfs(target) {
    const visited = Array(8).fill().map(() => []);
    visited[this.tree.root.x][this.tree.root.y] = true;

    let result = this.recursiveDfs(this.tree.root, target, visited);
    this.printPath(result);
    return result;
  }

  recursiveDfs(node, target, visited) {
    if (node.x === target[0] && node.y === target[1]) {
      return node;
    }
    const children = node.children.filter(child => !visited[child.x][child.y]);
    for (let i = children.length - 1; i >= 0; i--) {
      const found = this.recursiveDfs(children[i], target, visited);
      if (found) return found;
    }
    return null;
  }

  printPath(node) {
    const output = [];
    if (!node) {
      console.log('No path found buddy');
    } else {
      let cursor = node;
      console.log(`${cursor.depth} Moves:`);
      while (cursor) {
        output.unshift(`[${cursor.x}, ${cursor.y}]`);
        cursor = cursor.parent;
      }
    }
    output.forEach(move => console.log(move));
  }
}

module.exports = KnightSearcher;
