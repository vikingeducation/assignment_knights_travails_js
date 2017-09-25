# assignment_knights_travails_js

Alex and Greg

1. A tree using a stack

2. A tree using a queue

3. A depth first search

4. BFS

5. A tree is direct while a tree is directed. Generally there's a root with a tree.

Psuedocode

1. Depth First Search

search([a vertex], value)

search(stack, value) {
  if the stack is empty then return null
  else we take a look at the value of the last vertex in the stack
    if the value is the right value, we return the value
    else  {
      mark the parent with the "been there" flag
      if all the children are marked, remove the parent from the stack
      else add a child to the end of the array that doesn't have a "been there" flag
      search(stack, value)
    }
  }
}

2. Breadth First search

search([a vertex], value)

search(queue, value) {
  if the queue is empty then return null
  else we take a look at the value of the first vertex in the queue
    if the value is the right value, we return the value
    else  {
      mark the parent with the "been there" flag
      add all children that have no "been" there flag to the END of the queue
      pop off parent in queue
      search(queue, value)
    }
  }
}

3. Search graph Depth First Search with Adjacency Matrix

make a graph
