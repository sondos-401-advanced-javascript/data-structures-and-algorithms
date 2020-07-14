'use strict';
let { Graph } = require('../graph/graph');

class GetEdge extends Graph {
  getEdge(array) {
    let neighrbor = this.getNeighbors(array[0]);
    for (let i = 0; i < neighrbor.length; i++) {
      if (array[1] === neighrbor[i].vertice) {
        return `True, ${neighrbor[i].weight}$`;
      }
    }
    return `False, 0$`;
  }
}


module.exports = GetEdge;