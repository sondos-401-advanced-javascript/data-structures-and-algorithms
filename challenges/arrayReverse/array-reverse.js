'use strict';

function reverseArray(array){
    let outArray = [];
    for(let i=0;i<array.length;i++){
      outArray[i]= array[array.length-i-1];
    }
    return outArray;
  }
  
console.log(reverseArray([1, 2, 3, 4, 5, 6]));


