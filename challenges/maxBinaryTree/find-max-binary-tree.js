'use strict';

const tree = require('../tree/tree');
const BinaryTree = tree.BinaryTree;

class MaxBinaryTree extends BinaryTree{
  findMaximumValue(tree){
    if(!tree.root)return null;
    let results = 0;
    let _walk = (node)=>{
      if(node.left)_walk(node.left);
      if(node.right)_walk(node.right);
      if(node.value > results){
        results = node.value;
      }
    };
    _walk(tree.root);
    return results;
  }

}

module.exports = MaxBinaryTree;