const Graph = require('../challenges/graph/graph');
const BreadthFirst = require('../challenges/breadthFirstGraph/breadth-first');

describe('Graph Class',()=>{
  it('if start from end node',()=>{
    const bfs = new BreadthFirst();
    const one = new Graph.Vertices('A');
    const two = new Graph.Vertices('B');
    const three = new Graph.Vertices('C');
    const four = new Graph.Vertices('D');
    const five = new Graph.Vertices('E');
    bfs.addNode(one);
    bfs.addNode(two);
    bfs.addNode(three);
    bfs.addNode(four);
    bfs.addNode(five);
    bfs.addEdge(one,two);
    bfs.addEdge(one,four);
    bfs.addEdge(two,four);
    bfs.addEdge(three,two);
    bfs.addEdge(five,three);
    bfs.addEdge(five,four);
    let result = ['E', 'C', 'D', 'B'];
    expect(bfs.breadthFirst(five)).toEqual(result);
  });
  it('if start from start node',()=>{
    const bfs = new BreadthFirst();
    const one = new Graph.Vertices('A');
    const two = new Graph.Vertices('B');
    const three = new Graph.Vertices('C');
    const four = new Graph.Vertices('D');
    const five = new Graph.Vertices('E');
    bfs.addNode(one);
    bfs.addNode(two);
    bfs.addNode(three);
    bfs.addNode(four);
    bfs.addNode(five);
    bfs.addEdge(one,two);
    bfs.addEdge(one,four);
    bfs.addEdge(two,four);
    bfs.addEdge(three,two);
    bfs.addEdge(five,three);
    bfs.addEdge(five,four);
    let result = ['A', 'B', 'D'];
    expect(bfs.breadthFirst(one)).toEqual(result);
  });
  it('if start from middle node',()=>{
    const bfs = new BreadthFirst();
    const one = new Graph.Vertices('A');
    const two = new Graph.Vertices('B');
    const three = new Graph.Vertices('C');
    const four = new Graph.Vertices('D');
    const five = new Graph.Vertices('E');
    bfs.addNode(one);
    bfs.addNode(two);
    bfs.addNode(three);
    bfs.addNode(four);
    bfs.addNode(five);
    bfs.addEdge(one,two);
    bfs.addEdge(one,four);
    bfs.addEdge(two,four);
    bfs.addEdge(three,two);
    bfs.addEdge(five,three);
    bfs.addEdge(five,four);
    let result = ['C', 'B', 'D'];
    expect(bfs.breadthFirst(three)).toEqual(result);
  });
  

});