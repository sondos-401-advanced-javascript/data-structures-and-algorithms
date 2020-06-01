'use strict';

const LinkedList = require('../linkedList/linked-list');

class KthFromEnd extends LinkedList{
  llkthFromEnd(k){
    let currentNode = this.head;
    let array = [];
    let i = 0;
    while(currentNode){
      array[i]=currentNode.value;
      i++;
      currentNode = currentNode.next;
    }
    let count = array.length - 1;
    if(count-k < 0){
      return('Exception');
    }
    return array[count-k];
  }
}

module.exports = KthFromEnd;