'use strict';

function FizzBuzzTree(tree){
  let _checked = (node) =>{
    if(node.value%3 === 0 && node.value%5 === 0){
      node.value = 'FizzBuzz';
    }
    else if(node.value%3 === 0){
      node.value = 'Fizz';
    }
    else if(node.value%5 === 0){
      node.value = 'Buzz'; 
    }
    else{
      node.value = `${node.value}`;  
    }
  };
  let _walk = (node)=>{
    if(node.left)_walk(node.left);
    if(node.right)_walk(node.right);
    _checked(node);
  };
  _walk(tree.root);
}

module.exports = FizzBuzzTree;