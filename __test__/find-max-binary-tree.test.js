'use strict';

const findMaxBinary = require('../challenges/maxBinaryTree/find-max-binary-tree');
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
  
  it('find max binary tree()', ()=> {
    let findMax = new findMaxBinary();
    
    let expected = 15;
    let maxNum = findMax.findMaximumValue(tree);
    expect(maxNum).toEqual(expected);
  });
  it('empty tree', ()=> {
    let findMax = new findMaxBinary();
    let maxNum = findMax.findMaximumValue({root:null});
    expect(maxNum).toBeNull();
  });

  
});
  