'use strict';

const CC19 = require('../challenges/cc19/cc19');
const Tree = require('../challenges/tree/tree');

describe('Code Challange 19 Tree', ()=> {

    
  let tree = null;
  beforeAll(()=> {
    let one = new Tree.Node(8);
    let two = new Tree.Node(10);
    let three = new Tree.Node(3);
    let four = new Tree.Node(1);
    let five = new Tree.Node(6);
    let six = new Tree.Node(4);
    let seven = new Tree.Node(7);
    let eight = new Tree.Node(14);
    let nine = new Tree.Node(13);
  
    one.left = three;
    one.right = two;
    two.right = eight;
    eight.left = nine;
    three.left = four;
    three.right = five;
    five.left = six;
    five.right = seven;
    tree = new Tree.BinaryTree(one);
  });
  
  it('first question()', ()=> {
    
    let expected = 24;
    let firstQuestion = CC19(tree);
    expect(firstQuestion).toEqual(expected);
  });


  
});
  