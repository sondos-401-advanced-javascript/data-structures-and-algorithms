'use strict';

class Node{
  constructor(root){
    this.root = root;
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
  inOrder(){
    let results = [];
    let _walk = (node) =>{
      if(node.left)_walk(node.left);
      results.push(node.value);
      if(node.right)_walk(node.rigth);
    };
    _walk(this.root);
    return results;
  }
  postOrder(){
    let results = [];
    let _walk = (node)=>{
      if(node.left)_walk(node.left);
      if(node.right)_walk(node.right);
      _walk(node.value);
    };
    _walk(this.root);
    return results;
  }
}

class BinarySearchTree{
  constructor(root){
    this.root = root;
  }
  add(data){
    let newNode = new Node(data);
    let _insertNew = (newNode,node) =>{
      if(newNode.data < node.data){
        if(!node.left)node.left = newNode;
        else _insertNew(newNode,node);}
      else {
        if(!node.right)node.right = newNode;
        else _insertNew(newNode,node);
      }
    };
    _insertNew(newNode,this.root);
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