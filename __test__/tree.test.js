'use strict';

const Tree = require('../challenges/tree/tree');

describe('Binary Tree', ()=> {

    
  let tree = null;
  beforeAll(()=> {
    let one = new Tree.Node(1);
    let two = new Tree.Node(2);
    let three = new Tree.Node(3);
    let four = new Tree.Node(4);
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
    console.log('whole ====>',tree);
  });

  it('preOrder()', ()=> {
    let expected = [1, 2, 6, 7, 8, 9, 3, 4, 5];
    let preOrder = tree.preOrder();
    expect(preOrder).toEqual(expected);
  });

  it('inOrder()', ()=> {
    let expected = [6, 8, 7, 9, 2, 1, 4, 3, 5];
    let inOrder = tree.inOrder();
    expect(inOrder).toEqual(expected);
  });
    
  it('postOrder()', ()=> {
    let expected = [8, 9, 7, 6, 2, 4, 5, 3, 1];
    let postOrder = tree.postOrder();
    expect(postOrder).toEqual(expected);
  });

});

describe('Binary Search Tree ',()=>{
  let tree = null;
  let binaryTree = null;
  beforeAll(()=> {
    let one = new Tree.Node(23);
    let two = new Tree.Node(8);
    let three = new Tree.Node(42);
    let four = new Tree.Node(27);
    let five = new Tree.Node(85);
    let six = new Tree.Node(105);
    let seven = new Tree.Node(4);
    let eight = new Tree.Node(16);
    let nine = new Tree.Node(22);
    let ten = new Tree.Node(15);
    
    one.left = two;
    one.right = three;
    two.left = seven;
    two.right = eight;
    three.left = four;
    three.right = five;
    five.right = six;
    eight.left = ten;
    eight.right = nine;
    tree = new Tree.BinaryTree(one);
    binaryTree = new Tree.BinarySearchTree(one);
  });
  it('if is add new node',()=>{
    binaryTree.add(2);
    let order = tree.preOrder();
    expect(order[3]).toEqual(2);
    binaryTree.add(29);
    order = tree.preOrder();
    expect(order[9]).toEqual(29);
  });
  it('if is contains',()=>{
    expect(binaryTree.contains(10)).toBeFalsy();
    expect(binaryTree.contains(15)).toBeTruthy();
  });

});

describe('Add To Empty Binary Search Tree',()=>{
  let binaryTree = null;
  
  binaryTree = new Tree.BinarySearchTree(null);
  it('if is add new node',()=>{
    binaryTree.add(2);
    expect(binaryTree.contains(2)).toBeTruthy();
  });

});