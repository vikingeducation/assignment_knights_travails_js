class Stack {
  constructor() {
    this.stack = [];
    this.length = 0;
  }
  push(n) {
    this.stack[this.length] = n;
    this.length += 1;
  }
  pop() {
    this.length -= 1;
    return this.stack[this.length];
  }
  empty() {
    return !this.length;
  }
  peek() {
    return this.stack[this.length - 1];
  }
}

module.exports = Stack;
