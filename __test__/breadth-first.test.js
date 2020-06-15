'use strict';

const breadthFirst = require('../challenges/breadthFirst/breadth-first');
const Tree = require('../challenges/tree/tree');

describe('Bridth First Tree', ()=> {

    
  let tree = null;
  beforeAll(()=> {
    let one = new Tree.Node(1);
    let two = new Tree.Node(2);
    let three = new Tree.Node(3);
    let four = new Tree.Node(15);
    let five = new Tree.Node(5);
    let six = new Tree.Node(6);
    let seven = new Tree.Node(7);
    let eight = new Tree.Node(8);
    let nine = new Tree.Node(9);
  
    one.left = two;
    one.right = three;
    two.left = six;
    six.right = seven;
    seven.left = eight;
    seven.right = nine;
    three.left = four;
    three.right = five;
    tree = new Tree.BinaryTree(one);
  });
  
  it('breadth first()', ()=> {
    let breadth = new breadthFirst();
    
    let expected = [1,2,3,6,15,5,7,8,9];
    let breadthOrder = breadth.breadthFirst(tree);
    expect(breadthOrder).toEqual(expected);
  });
  it('empty tree', ()=> {
    let breadth = new breadthFirst();
    let breadthOrder = breadth.breadthFirst({root:null});
    expect(breadthOrder).toBeNull();
  });

  
});
  