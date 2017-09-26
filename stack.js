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
  concat(arr) {
    for (let item of arr) {
      this.push(item);
    }
  }
  slice() {
    return this.stack.slice(0, this.length);
  }
}

module.exports = Stack;
