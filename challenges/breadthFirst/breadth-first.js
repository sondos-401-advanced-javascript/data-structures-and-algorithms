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
      current = enterTree.shift();
      if (current.left){
        enterTree[enterTree.length]=current.left;
      }
    
      if(current.right){
        enterTree[enterTree.length]=current.right;
      }
      outputTree[j]=current.value;
      j++;
    }
    return outputTree;

  }
}

module.exports = BreadthFirst;

