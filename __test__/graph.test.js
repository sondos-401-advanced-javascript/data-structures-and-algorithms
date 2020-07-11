'use strict';

const Graph = require('../challenges/graph/graph');
const graph = require('../challenges/graph/graph');

describe('Graph Class',()=>{
  it('test addnew node',()=>{
    const graph = new Graph.Graph();
    const one = new Graph.Vertices('A');
    const two = new Graph.Vertices('B');
    const three = new Graph.Vertices('C');
    const four = new Graph.Vertices('D');
    const five = new Graph.Vertices('E');
    graph.addNode(one);
    expect(graph.adjancyList.has(one)).toBeTruthy();
    graph.addNode(two);
    expect(graph.adjancyList.has(two)).toBeTruthy();
    graph.addNode(three);
    expect(graph.adjancyList.has(three)).toBeTruthy();
    graph.addNode(four);
    expect(graph.adjancyList.has(four)).toBeTruthy();
    graph.addNode(five);
    expect(graph.adjancyList.has(five)).toBeTruthy();
  });
  it('test add edge',()=>{
    const graph = new Graph.Graph();
    const one = new Graph.Vertices('A');
    const two = new Graph.Vertices('B');
    const three = new Graph.Vertices('C');
    const four = new Graph.Vertices('D');
    const five = new Graph.Vertices('E');
    const six = new Graph.Vertices('S');
    graph.addNode(one);
    graph.addNode(two);
    graph.addNode(three);
    graph.addNode(four);
    graph.addNode(five);
    graph.addEdge(one,two);
    expect(graph.adjancyList.get(one)).toEqual([{vertice:two,weight:0}]);
    graph.addEdge(one,four);
    expect(graph.adjancyList.get(one)).toEqual([{vertice:two,weight:0},{vertice:four,weight:0}]);
    graph.addEdge(two,four);
    expect(graph.adjancyList.get(two)).toEqual([{vertice:four,weight:0}]);
    graph.addEdge(three,two);
    expect(graph.adjancyList.get(three)).toEqual([{vertice:two,weight:0}]);
    graph.addEdge(five,three);
    expect(graph.adjancyList.get(five)).toEqual([{vertice:three,weight:0}]);
    graph.addEdge(five,four);
    expect(graph.adjancyList.get(five)).toEqual([{vertice:three,weight:0},{vertice:four,weight:0}]);
    expect(graph.addEdge(six,four)).toEqual('no Vertices');
  });
  it('test add list nodes',()=>{
    const graph = new Graph.Graph();
    const one = new Graph.Vertices('A');
    const two = new Graph.Vertices('B');
    const three = new Graph.Vertices('C');
    const four = new Graph.Vertices('D');
    const five = new Graph.Vertices('E');
    graph.addNode(one);
    graph.addNode(two);
    graph.addNode(three);
    graph.addNode(four);
    graph.addNode(five);
    graph.addEdge(one,two);
    graph.addEdge(one,four);
    graph.addEdge(two,four);
    graph.addEdge(three,two);
    graph.addEdge(five,three);
    graph.addEdge(five,four);
    let result = [
      [ one, [{vertice:two,weight:0},{vertice:four,weight:0}] ],
      [two , [{vertice:four,weight:0}]],
      [ three, [{vertice:two,weight:0}]],
      [four , [] ],
      [five , [{vertice:three,weight:0},{vertice:four,weight:0}]],
    ];
    expect(graph.getNodes()).toEqual(result);
  });
  it('test get Neighbors',()=>{
    const graph = new Graph.Graph();
    const one = new Graph.Vertices('A');
    const two = new Graph.Vertices('B');
    const three = new Graph.Vertices('C');
    const four = new Graph.Vertices('D');
    graph.addNode(one);
    graph.addNode(two);
    graph.addNode(four);
    graph.addEdge(one,two);
    graph.addEdge(one,four);
    expect(graph.getNeighbors(one)).toEqual([{vertice:two,weight:0},{vertice:four,weight:0}]);
    expect(graph.getNeighbors(three)).toEqual('not found');
  });
  it('test size',()=>{
    const graph = new Graph.Graph();
    const one = new Graph.Vertices('A');
    const two = new Graph.Vertices('B');
    const four = new Graph.Vertices('D');
    graph.addNode(one);
    graph.addNode(two);
    graph.addNode(four);
    graph.addEdge(one,two);
    graph.addEdge(one,four);
    expect(graph.size()).toEqual(3);
  });
});