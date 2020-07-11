'use strict';

function reapeatedWord(string){
  let text = string.toLowerCase();
  let array = text.match(/[a-z]*\w+/ig);
  let counts = {};
  let compare = 0;
  let mostduplicate;
  for(let i = 0, len = array.length; i < len; i++){
    let word = array[i];
       
    if(counts[word] === undefined){
      counts[word] = 1;
    }else{
      counts[word] = counts[word] + 1;
    }
    if(counts[word] > compare){
      compare = counts[word];
      mostduplicate = array[i];
    }
  }
  return mostduplicate;
}



module.exports = reapeatedWord;