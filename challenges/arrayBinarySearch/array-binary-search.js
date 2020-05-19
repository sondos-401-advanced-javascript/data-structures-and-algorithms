'use strict';

function BinarySearch(arr,num){
  let count = 0;
  let result;
  for(let i=0;i<arr.length;i++){
    if(arr[i] === num){
      count++;
      result = i;
    }
  }
  if(count === 0){
    result= -1;
  }
  return result;
}
module.exports = BinarySearch;