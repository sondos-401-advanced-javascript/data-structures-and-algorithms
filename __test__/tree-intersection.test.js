'use strict';

const intersection = require('../challenges/treeIntersection/tree-intersection');
const Tree = require('../challenges/tree/tree');

describe('Tree Intersection', ()=> {

    
  let tree1 = null;
  let tree2 = null;
  beforeAll(()=> {
    let one = new Tree.Node(150);
    let two = new Tree.Node(100);
    let three = new Tree.Node(75);
    let four = new Tree.Node(160);
    let five = new Tree.Node(125);
    let six = new Tree.Node(175);
    let seven = new Tree.Node(250);
    let eight = new Tree.Node(350);
    let nine = new Tree.Node(200);
    let ten = new Tree.Node(500);
    let eleven = new Tree.Node(300);
  
    one.left = two;
    one.right = seven;
    two.right = four;
    two.left = three;
    four.left = five;
    four.right = six;
    seven.left = nine;
    seven.right = eight;
    eight.right = ten;
    eight.left = eleven;
    tree1 = new Tree.BinaryTree(one);

    let one2 = new Tree.Node(42);
    let two2 = new Tree.Node(100);
    let three2 = new Tree.Node(15);
    let four2 = new Tree.Node(160);
    let five2 = new Tree.Node(125);
    let six2 = new Tree.Node(175);
    let seven2 = new Tree.Node(600);
    let eight2 = new Tree.Node(350);
    let nine2 = new Tree.Node(200);
    let ten2 = new Tree.Node(500);
    let eleven2 = new Tree.Node(4);
  
    one2.left = two2;
    one2.right = seven2;
    two2.right = four2;
    two2.left = three2;
    four2.left = five2;
    four2.right = six2;
    seven2.left = nine2;
    seven2.right = eight2;
    eight2.right = ten2;
    eight2.left = eleven2;
    tree2 = new Tree.BinaryTree(one2);
  });
  
  it('test tree intersection', ()=> {
    
    let expected = [100,160,125,175,200,350,500];
    let result = intersection(tree1,tree2);
    expect(result).toEqual(expected);
  });


  
});