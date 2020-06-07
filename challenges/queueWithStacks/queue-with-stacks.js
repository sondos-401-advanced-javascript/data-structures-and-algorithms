'use strict';
class PseudoQueue {
  constructor() {
    this.storage = new Array();
  }
  enqueue(value){
    let stack = new Stack();
    stack.push(value);
    this.storage.unshift(stack.storage[0]);
    return this.storage;
  }
  dequeue(){
    let stack = new Stack();
    stack.pop();
    return this.storage;
  }
  
}
  
  
class Stack {
  constructor() {
    this.storage = new Array();
  }
  push(value) {
    this.storage.unshift(value);
    return this.storage;
  }
  
  pop() {
    if(this.storage.length){
      this.storage.shift();
      return this.storage;
    }  
  }
  peek() {
    return this.storage[0];
  }
}

module.exports = {PseudoQueue,Stack};