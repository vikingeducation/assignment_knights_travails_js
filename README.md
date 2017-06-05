# assignment_knights_travails_js
Do not go gentle into that good knight.


What data structure is used to implement DFS?
* Stack
What data structure is typically used to implement BFS?
* Queue
Which one can be done recursively? (the clue should be the data structure)
* DFS
Which one would you use to print a list of all the nodes in a tree or graph, starting with depth 1, then depth 2, then depth 3 etc.?
* BFS
What is the difference between a tree and a graph?
* Tree
* * Child/Parent Relationship
* * Directional
* * Does not contain cycles
* * Root Node
* Graph
* * Cycles are allowed
* * No heirarchical structure

Next, pseudocode the following processes with enough detail to be clear:

Searching a simple tree of nodes where each Node has an array of child nodes (someNode.children) using DFS.


Nodes have the form of
node.children = [];
node.value


function DFS(tree, value) {
    let stack = [tree.root]
    while (stack.length) {
    let node = stack.pop()
    if (node.value === value) {
    return node
    } else {
    stack.concat(node.children)
    }
    return null
    }
}

Searching the same tree using BFS.

function BFS(tree, value) {
    let queue = [tree.root]
    while (queue.length) {
    let node = queue.unshift()
    if (node.value === value) {
    return node
    } else {
        queue.concat(node.children)
    }
    return null
    }
}


Searching a graph (represented however you feel most comfortable -- Edge List, Adjacency List or Adjacency Matrix) using DFS.


[
    [0,0,0,1],
    [0,0,0,0],
    [0,0,1,0],
    [0,1,0,0]
]

function DFS(matrix) {
    
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] === 1) {
                return [i, j];
            }
        }
    }
    return null;
}

Searching the same graph using BFS.

function BFS(matrix) {
    
    for (let i = 0; i < matrix[0].length; i++) {
        for (let j = 0; j < matrix.length; j++) {
            if (matrix[j][i] === 1) {
                return [i, j];
            }
        }
    }
    return null;
}


