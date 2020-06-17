'use strict';

function firstQuestion(tree){
  let enterTree = [];
  let sum = 0;
  enterTree[0] = tree.root;
  let current;
  while(enterTree[0] || enterTree[1]){
    current = enterTree.shift();
    if (current.left) enterTree[enterTree.length]=current.left;
    if(current.right) enterTree[enterTree.length]=current.right;
    if(current.value%2)sum= sum + current.value;
  }
  return sum;
}

module.exports = firstQuestion;

