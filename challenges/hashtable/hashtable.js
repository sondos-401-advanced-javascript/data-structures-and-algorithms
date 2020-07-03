'use strict';

class Node {
  constructor(value){
    this.value = value;
    this.next = null;
  }
}
  
class LinkedList{
  constructor(){
    this.head = null;
  }
  add(value){
    const node = new Node(value);
    if (!this.head) {
      this.head = node;
      return this;
    }
    
  }
  values(){
    let current = this.head;
    let values = [];
    while(current){
      values.push(current.value);
      current = current.next;
    }
    return values;
  }
}
  
class HashTable{
  constructor(size){
    this.size = size;
    this.map = new Array(size);
  }
  hash(key){
    return key.split('').reduce((acc,val)=>{
      return acc + val.charCodeAt(0);
    },0) * 599 % this.size;
  }
  add(key,value){
    let hashed = this.hash(key);
    if(!this.map[hashed]){
      this.map[hashed] = new LinkedList();
    }
    let entery = {[key]:value};
    this.map[hashed].add(entery);
  }
  get(key){
    let hashed = this.hash(key);
    if(this.contains(key)){
      return this.map[hashed].head.value[key];
    }
    else{
      return 'this key incorrect';
    }
  }
  contains(key){
    let hashed = this.hash(key);
    return this.map[hashed] ? true : false;
  }
}

module.exports = HashTable;