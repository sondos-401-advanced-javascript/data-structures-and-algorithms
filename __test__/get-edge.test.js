'use strict';

const Graph = require('../challenges/graph/graph');
const GetEdge = require('../challenges/getEdge/get-edge');

describe('Graph Class',()=>{
  it('if there is journey',()=>{
    const graph = new GetEdge();
    const one = 'A';
    const two =  'B';
    const three = 'C';
    const four =  'D';
    const five =  'E';
    graph.addNode(one);
    graph.addNode(two);
    graph.addNode(three);
    graph.addNode(four);
    graph.addNode(five);
    graph.addEdge(one,two,50);
    graph.addEdge(one,four,20);
    graph.addEdge(two,four,5);
    graph.addEdge(three,two,10);
    graph.addEdge(five,three,40);
    graph.addEdge(five,four,60);
    expect(graph.getEdge(['A','B'])).toEqual('True, 50$');
  });
  it('if there is No journey',()=>{
    const graph = new GetEdge();
    const one = 'A';
    const two =  'B';
    const three = 'C';
    const four =  'D';
    const five =  'E';
    graph.addNode(one);
    graph.addNode(two);
    graph.addNode(three);
    graph.addNode(four);
    graph.addNode(five);
    graph.addEdge(one,two,50);
    graph.addEdge(one,four,20);
    graph.addEdge(two,four,5);
    graph.addEdge(three,two,10);
    graph.addEdge(five,three,40);
    graph.addEdge(five,four,60);
    expect(graph.getEdge(['C','D'])).toEqual('False, 0$');
    expect(graph.getEdge(['D','A'])).toEqual('False, 0$');
  });
});