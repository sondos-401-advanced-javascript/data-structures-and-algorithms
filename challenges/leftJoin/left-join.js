'use strict';
class Node {
  constructor(value){
    this.value = value;
    this.next = null;
  }
}
  
class LinkedList {
  constructor(){
    this.head = null;
  }
  add(value){
    let node = new Node(value);
    if (!this.head) this.head = node;
    else{
      node.next = this.head;
      this.head = node;
    }
  }
}
  
class HashMap {
  constructor(size){
    this.size = size;
    this.map = new Array(size);
  }
  hash(key){
    return key.split('').reduce((acc,val)=>{
      return acc + val.charCodeAt(0);
    },0) * 19 % this.size;
  }
  add(key, value){
    let hashedKey = this.hash(key);
    if (!this.map[hashedKey]) {
      let link = new LinkedList();
      link.add({key,value});
      this.map[hashedKey] = link;
    }else{
      this.map[hashedKey].add({key, value});
    }
  }
  contain(key){
    let hashed = this.hash(key);
    return this.map[hashed] ? true : false;
  }
}
function leftJoins(firstTable, secondTable) {
  for (let i = 0; i < secondTable.map.length; i++) {
    if (secondTable.map[i] && firstTable.contain(secondTable.map[i].head.value.key)){
      firstTable.add(secondTable.map[i].head.value.key,secondTable.map[i].head.value.value);
    }
  }
  let result = [];
  for (let i = 0; i < firstTable.map.length; i++) {
    if(firstTable.map[i]){
      if(!firstTable.map[i].head.next){
        result.push([firstTable.map[i].head.value.key,firstTable.map[i].head.value.value,firstTable.map[i].head.next]);
      } 
      else{
        result.push([firstTable.map[i].head.value.key,firstTable.map[i].head.value.value,firstTable.map[i].head.next.value.value]);
      } 
    }
  }
  return result;
}

module.exports = {Node, LinkedList, HashMap, leftJoins};
