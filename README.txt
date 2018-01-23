# assignment_knights_travails_js

Do not go gentle into that good knight.

1. What data structure is used to implement DFS? Ans. Stack
2. What data structure is typically used to implement BFS? Ans. Queue
3. Which one can be done recursively? (the clue should be the data structure)
   Ans. DFS. You are recursively checking children of each node.
4. Which one would you use to print a list of all the nodes in a tree or graph,
   starting with depth 1, then depth 2, then depth 3 etc.? Ans. BFS
5. What is the difference between a tree and a graph? Ans. The tree has a root
   node and a hierarchy of children. Whereas, in a graph, there is no such thing
   as a root node.

Next, pseudocode the following processes with enough detail to be clear:

1. Searching a simple tree of nodes where each Node has an array of child nodes
   (someNode.children) using DFS. Pseudo code:

   a. Takes input as the node to search for and the current node which is set to
   the root node by default
   b. If the node equals the search node, return true.
   c. If node doe not exist, return from the function.
   d. Check if the root node
   has a left child.
   e. If it does, call search recursively on left nodes f. If
   it does n't, check to see if it has a right node. g. If it does, recursively
   call search on right node.

2. Searching the same tree using BFS.
  a. Takes input as the node to search for and the current node which is set to
  the root node by default.
  b. If the tree is null, level = 0
  c. If root node exists, level = 1, enqueue the node
  d. If root node has a left child, or if it has a right child, increment level by 1
  e. If node data is equal to the node we are searching for, return the node data.
  f. Go to the next sibling of the node, dequeue the current node and enqueue the sibling.

3. Searching a graph (represented however you feel most comfortable -- Edge
   List, Adjacency List or Adjacency Matrix) using DFS.
   a. Pass the edge to a hash function. You get the index of the bucket, i.e., the from vertex
   b. Do exhaustive search of the linked list at that vertex.
   c. Continue this till the node is found.

4. Searching the same graph using BFS.
  a. Check the first node of each linked list.
  b. Check the second node of each and so on till a match is found.
  c. If match is found return the edge. 
