# assignment_knights_travails_js

Warmup 1
=========

Do not go gentle into that good knight.
1. stack  
2. queue  
3. DFS it uses a stack  
4. BFS  
5. tree has a root and a graph doesn't have a specifically defined start.  nodes in a tree only have one parent.  

1.

add root to stack  

while  stack is not empty  

  take first from stack set someNode = top of stack  

  if someNode.data === search term  
    return  

  for loop   
    add all children to stack  

2.  

add root to queue  

while  queue is not empty  

  take first from queue set someNode = top of queue  

  if someNode.data === search term  
    return  

  for loop   
    add all children to queue  


3. using Adjacency List  

a => b  
b => a, d, c  
c => a, b  
d => a, b  

put starting list into stack

while stack is not empty

  return if matches search parameters

  set a visited flag on the node / record depth

  take a child off the stack

  put list children into stack

  hash back into list from child

4. same thing but use a queue


Knight's Travails Warmup
========================

bottom left of board is [0,0]

top right of board is [7,7]

10000000
00000000
00000000
00000000
