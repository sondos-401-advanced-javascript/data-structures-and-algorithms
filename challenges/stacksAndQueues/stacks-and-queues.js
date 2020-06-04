'use strict';

class Node{
  constructor(value){
    this.value = value;
    this.next = null;
  }
}

class Stack{
  constructor(){
    this.storage = new Array();
    this.top = null;
  }
  push(value){
    if(!this.top){
      this.storage.unshift(new Node(value));
      this.top = this.storage[0];
    }
    else{
      let node = new Node(value);
      node.next = this.storage.length;
      this.storage.unshift(node);
      this.top = this.storage[0];
    }
  }

  pop(){
    if(this.top){
      this.storage.shift();
      this.top = this.storage[0];
    }
  }
  peek(){
    if(this.top){
      let item = this.top;
      return item;
    }
    else{
      return this.top;
    }
  }
  isEmpty(){
    if(!this.top){
      return true;
    }
    else{
      return false;
    }
  }
}

class Queue {
  constructor() {
    this.storage = new Array();
    this.front = null;
  }

  enqueue(value) {
    let node = new Node(value);
    if(!this.front){
      this.storage.unshift(node);
      this.front = this.storage[this.storage.length-1];
    }
    else{
      this.storage[0].next = this.storage.length + 1;
      this.storage.unshift(node);
      this.front = this.storage[this.storage.length-1];
    }
    
  }

  dequeue() {
    if(this.front){
      this.storage.pop();
      let len = this.storage.length;
      this.front = len ? this.storage[len-1] : null;
    }
  }

  peek() {
    if(this.front){
      return this.storage[this.storage.length-1];
    }
    else{
      return this.front;
    }
  }

  isEmpty(){
    if(!this.front){
      return true;
    }
    else{
      return false;
    }
  }
}

module.exports ={
  Queue: Queue,
  Stack: Stack,
};