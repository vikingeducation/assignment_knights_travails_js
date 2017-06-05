class Node {
  constructor(data) {
    this.x = data.x;
    this.y = data.y;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.headNode = null;
    this.lastNode = null;
  }

  initialize(firsNode = null) {
    this.headNode = firstNode;
    this.lastNode = firstNode;
  }

  addFirstNode(data) {
    this.headNode = new Node(data, null);
    this.lastNode = this.headNode;
  }

  addNode(data) {
    if (!this.headNode) {
      this.addFirstNode(data);
    } else {
      const node = new Node(data, null);
      this.lastNode.next = node;
      this.lastNode = node;
    }
  }

  removeNode(index) {
    let counter = 0;
    let currentNode = this.headNode;
    let prevNode = null;
    while (counter < index) {
      prevNode = currentNode;
      currentNode = currentNode.next;
      ++counter;
    }
    let nextNode = currentNode.next;
    currentNode.next = null;
    prevNode.next = nextNode;
  }

  findNode(index) {
    let counter = 0;
    let currentNode = this.headNode;

    while (counter < index) {
      currentNode = currentNode.next;
      ++counter;
    }
    return currentNode;
  }

  printList() {
    let currentNode = this.headNode;

    while (currentNode.next !== null) {
      console.log(currentNode.data);
      currentNode = currentNode.next;
    }
  }
}

module.exports = LinkedList;
