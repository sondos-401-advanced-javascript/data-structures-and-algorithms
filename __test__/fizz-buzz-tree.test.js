'use strict';

const fizzBuzz = require('../challenges/fizzBuzzTree/fizz-buzz-tree');
const Tree = require('../challenges/tree/tree');

describe('Fizz Buzz Tree', ()=> {

    
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
  
  it('FizzBuzzTree()', ()=> {
    fizzBuzz(tree);
    let expected = ['1', '2', 'Fizz', '7', '8', 'Fizz', 'Fizz', 'FizzBuzz', 'Buzz'];
    let preOrder = tree.preOrder();
    expect(preOrder).toEqual(expected);
  });

  
});
  