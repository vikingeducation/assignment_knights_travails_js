# assignment_knights_travails_js
Do not go gentle into that good knight.

Eric and Will


## BFS and DFS
1. What data structure is used to implement DFS? Stack
2. What data structure is typically used to implement BFS? Queue
3. Which one can be done recursively? Depth First Search
4. Which one would you use to print a list of all the nodes in a tree or graph, starting with depth 1, then depth 2, then depth 3 etc.? Depth First Search
5. What is the difference between a tree and a graph? A tree is an acyclic directed graph with a named root node from which you can reach all the other nodes.

## PSEUDOCODE

1. Searching a simple tree of nodes where each Node has an array of child nodes (someNode.children) using DFS.
  start with the root
  make a stack
  put root in stack
  while (stack.top)
    add stack.top.children to stack
    check searchy things
    return if searchy things found
  end

2. Searching the same tree using BFS.
    start with the root
    make a queue
    put root in queue
    while (queue.head)
      add queue.head.children to queue
      check searchy things
      return if searchy things found
    end


3. Searching a graph (represented however you feel most comfortable -- Edge List, Adjacency List or Adjacency Matrix) using DFS.
  using  Adjacency List
  make a stack
  add starting node to stack
  while (stack.top)
    grab stack.tops children
    searchy things happen here
    add all non-visited children to the stack
    set all those children to visited


4. Searching the same graph using BFS.
  using Adjacency List
  make a queue
  add starting to the queue
  while (queue.head)
    grab queue.heads children
    searchy things
    add all non-visited children to the queue
    set all children to visited
