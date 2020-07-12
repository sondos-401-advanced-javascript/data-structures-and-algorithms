'use strict';
const {Graph} = require('../graph/graph');

class BreadthFirst extends Graph{
  breadthFirst(startNode){
    const queue = []; 
    const checked = new Set(); 

    queue.push(startNode);
    checked.add(startNode);

    while (queue.length) {
      const currentNode = queue.shift();
      const neighbors = this.getNeighbors(currentNode);
      for (let neighbor of neighbors) {
        const neighborNode = neighbor.vertice;
        if(checked.has(neighborNode)) {
          continue;
        } else {
          checked.add(neighborNode);
          queue.push(neighborNode);
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



module.exports = BreadthFirst;
