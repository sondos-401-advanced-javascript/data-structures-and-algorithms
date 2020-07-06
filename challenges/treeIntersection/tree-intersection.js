'use strict';

function intersection(firstTree,secondTree){
  let results = [];
  let _walk = (node)=>{
    results.push(node.value);
    if(node.left)_walk(node.left);
    if(node.right)_walk(node.right);
  };
  _walk(firstTree.root);
  let results1 = [...results];
  results = [];
  _walk(secondTree.root);
  let data = [];
  for(let i = 0; i<results.length;i++){
    if(results[i] === results1[i]){
      data.push(results[i]);
    }
  }
  return data;
}

module.exports = intersection;