'use strict';

const {Graph} = require('../graph/graph');

class depthFirst extends Graph{
  depthFirst(startNode){
    const stack = []; 
    const checked = new Set(); 

    stack.push(startNode);
    checked.add(startNode);

    while (stack.length) {
      const currentNode = stack.pop();
      const neighbors = this.getNeighbors(currentNode);
      for (let neighbor of neighbors) {
        const neighborNode = neighbor.vertice;
        if(!checked.has(neighborNode)) {
          checked.add(neighborNode);
          stack.push(neighborNode);
        }
      }
    }    
    
    let array = [];
    for (let val of checked) {
      array.push(val.value);
    }
    return array;  
      
  }
}



module.exports = depthFirst;