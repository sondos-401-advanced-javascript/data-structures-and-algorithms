'use strict';

class Node{
  constructor(value){
    this.value = value;
    this.next = null;
  }
}


class LinkedList{
  constructor(){
    this.head = null;
  }

  insert(value){
    let node =new Node(value);
    if(!this.head){
      this.head = node;
      return this;
    }
    let currentNode = this.head;
    while(currentNode.next){
      currentNode = currentNode.next;
    }
    currentNode.next = node;
  }

  includes(value){
    let currentNode = this.head;
    while(currentNode.next){
      if(currentNode.value === value){
        return true;
      }
      currentNode = currentNode.next;
    }
    if(currentNode.value === value){
      return true;
    }
    return false;
  }

  toString(){
    let currentNode = this.head;
    let string = '{'+currentNode.value+'} -> ';
    while(currentNode.next){
      currentNode = currentNode.next;
      string = string +'{'+currentNode.value+'} -> ';
    }
    string = string + 'NULL';
    return string;
  }
}

module.exports = LinkedList;