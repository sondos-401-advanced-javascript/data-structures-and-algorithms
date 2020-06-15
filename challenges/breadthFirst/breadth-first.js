'use strict';

const tree = require('../tree/tree');
const BinaryTree = tree.BinaryTree;

class BreadthFirst extends BinaryTree{
  breadthFirst(tree){

    if(!tree.root)return null;
    let enterTree = [];
    let outputTree = [];
    enterTree[0] = tree.root;
    let j = 0;
    let current;
    while(enterTree[0] || enterTree[1]){
      current = enterTree.pop();
      if (current.left){
        enterTree.unshift(current.left);
      }
    
      if(current.right){
        enterTree.unshift(current.right);
      }
      outputTree[j]=current.value;
      j++;
    }
    return outputTree;

  }
}

module.exports = BreadthFirst;

