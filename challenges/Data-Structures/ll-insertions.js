'use strict';

const LinkedList = require('../linkedList/linked-list');

class Node{
  constructor(value){
    this.value = value;
    this.next = null;
  }
}

class LinkedListInsertions extends LinkedList{
  append(val){
    let currentNode = this.head;
    let node = new Node(val);
    while(currentNode.next){
      currentNode = currentNode.next;
    }
    currentNode.next = node;
    return this;
  }
  
  insertBefore(value, newVal){
    let currentNode = this.head;
    let node = new Node(newVal);
    let previous;
    if(!this.includes(value)){
      return 'Exception';
    }
    if(currentNode.value === value){
      this.head = node;
      node.next = currentNode;
    }
    else{
      while(currentNode){

        if(currentNode.value === value){
          previous.next = node;
          node.next = currentNode;
          break;
        }
        previous = currentNode;

        currentNode = currentNode.next;
      }}
    return this;
  }
  insertAfter(value, newVal){
    let currentNode = this.head;
    let node = new Node(newVal);
    if(!this.includes(value)){
      return 'Exception';
    }
    while(currentNode){
      if(currentNode.value === value){
        node.next = currentNode.next;
        currentNode.next = node;
        break;
      }
      currentNode = currentNode.next;
    }
    return this;
  }

}


module.exports = LinkedListInsertions;