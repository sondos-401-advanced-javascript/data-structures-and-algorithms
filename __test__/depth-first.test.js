const Graph = require('../challenges/graph/graph');
const DepthFirst = require('../challenges/depthFirst/depth-first');

describe('DepthFirst Class',()=>{
  it('traversal in whole graph',()=>{
    const dfs = new DepthFirst();
    const one = new Graph.Vertices('A');
    const two = new Graph.Vertices('B');
    const three = new Graph.Vertices('C');
    const four = new Graph.Vertices('D');
    const five = new Graph.Vertices('E');
    const six = new Graph.Vertices('F');
    dfs.addNode(one);
    dfs.addNode(two);
    dfs.addNode(three);
    dfs.addNode(four);
    dfs.addNode(five);
    dfs.addNode(six);
    dfs.addEdge(one,four);
    dfs.addEdge(one,two);
    dfs.addEdge(two,four);
    dfs.addEdge(two,three);
    dfs.addEdge(four,six);
    dfs.addEdge(four,five);
    let result = ['A','D','B','C', 'F','E'];
    expect(dfs.depthFirst(one)).toEqual(result);
  });

  

});