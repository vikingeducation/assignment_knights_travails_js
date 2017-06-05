# assignment_knights_travails_js
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
