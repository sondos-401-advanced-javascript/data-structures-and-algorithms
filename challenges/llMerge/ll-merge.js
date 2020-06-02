'use strict';


function Node(value, next) {
  this.value = value;
  this.next = next;
} 
    
function mergeLists(list1, list2){
  let firstLL = list1.head;
  let secondLL = list2.head;
  var outputLL = new Node(null, null);
  var previous = outputLL;
  let i = 1;
  while(firstLL !== null && secondLL !== null){
    if(i%2){ 
      previous.next = firstLL;
      firstLL = firstLL.next;
    } else{
      previous.next = secondLL;
      secondLL = secondLL.next;
    }
    i++;
    previous = previous.next;
  }
  if(firstLL === null){
    previous.next = secondLL;
  }
  if(secondLL === null){
    previous.next = firstLL;
  }
  return {head: outputLL.next};   
}

module.exports = mergeLists;



