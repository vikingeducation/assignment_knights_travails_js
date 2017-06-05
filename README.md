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
    
    function findValue(node) {
        if (value === node.value) {
            return node;
        }
        if (node.children = null) {
            return;
        }
        
        let stack = [];
        
        node.children.forEach((childNode) => {
            findValue(childNode);
        });
        
        
        
    }
    
    return findValue(tree.root);
    
    
    
}


Searching the same tree using BFS.
Searching a graph (represented however you feel most comfortable -- Edge List, Adjacency List or Adjacency Matrix) using DFS.
Searching the same graph using BFS.




