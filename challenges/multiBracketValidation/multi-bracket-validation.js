'use strict';

function multiBracketValidation(input){
  let array = [];
  for(let i=0;i<input.length;i++){
    let val = input.charAt(i);
    if(val === '('||val === '{' || val==='['){
      array.push(val);
    }
    else if(val === ')'|| val === '}' || val===']'){
      if(val === ')'){val = '(';}
      if(val === '}'){val = '{';}
      if(val === ']'){val = '[';}
      if(val === array[array.length-1]){
        array.pop();
      }
    }
  }
  if(!array.length){
    return true;
  }
  else {
    return false;
  }
}

module.exports = multiBracketValidation;