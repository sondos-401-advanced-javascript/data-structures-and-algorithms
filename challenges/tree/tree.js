'use strict';

class Node{
  constructor(value){
    this.value = value;
    this.right = null;
    this.left = null;
  }
}

class BinaryTree{
  constructor(root){
    this.root = root;
  }
  preOrder(){
    let results = [];
    let _walk = (node)=>{
      results.push(node.value);
      if(node.left)_walk(node.left);
      if(node.right)_walk(node.right);
    };
    _walk(this.root);
    return results;
  }

  inOrder() {
    let results = [];
    let _walk = (node) => {
      if(node.left) _walk(node.left);
      results.push(node.value);
      if(node.right) _walk(node.right);
    };
    _walk(this.root);
    return results;
  }

  postOrder(){
    let results = [];
    let _walk = (node)=>{
      if(node.left)_walk(node.left);
      if(node.right)_walk(node.right);
      results.push(node.value);
    };
    _walk(this.root);
    return results;
  }
}

class BinarySearchTree{
  constructor(root){
    this.root = root;
  }

  add(data) { 
    let newNode = new Node(data); 
    let _insertNew = (node,newNode)=>{
      if(newNode.value < node.value){ 
        if(node.left === null) node.left = newNode; 
        else _insertNew(node.left, newNode);  
      } 
      else{ 
        if(node.right === null) node.right = newNode; 
        else _insertNew(node.right,newNode); 
      } 
    };
    if(this.root === null)this.root = newNode; 
    else _insertNew(this.root, newNode); 
  }  

  contains(value){
    let results = [];
    let _walk = (node)=>{
      results.push(node.value);
      if(node.left)_walk(node.left);
      if(node.right)_walk(node.right);
    };
    _walk(this.root);
    if(results.includes(value))return true;
    else return false;
  }  
}

module.exports = {
  Node,
  BinaryTree,
  BinarySearchTree,
};