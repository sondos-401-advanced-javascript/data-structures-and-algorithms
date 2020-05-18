'use strict';

function insertShiftArray(arr,num){
  let index;
  if(arr.length%2){
    index = arr.length/2 + 0.5;
  }
  else{
    index = arr.length/2 ;
  }
      
  let outArr = [];
  for(let i=0;i<arr.length+1;i++){
    if(i == index){
      outArr[i] = num;
    }
    else if(i> index){
      outArr[i]=arr[i-1];
    }
    else{
      outArr[i] = arr[i];
  
    }
        
  }
  return outArr;
}

module.exports = insertShiftArray;
// Stretch Goal
function removeMiddleIndex(arr){
  let index;
  if(arr.length%2){
    index = arr.length/2 - 0.5 ;
  }
  else{
    index = arr.length/2 ;
  }
  let outArr = [];
  for(let i=0;i<arr.length-1;i++){
    if(i >= index){
      outArr[i]=arr[i+1];
    }
    
    else{
      outArr[i] = arr[i];
    }     
  }
  return outArr;
}

