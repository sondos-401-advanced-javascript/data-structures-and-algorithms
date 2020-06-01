'use strict';

const LinkedList = require('../challenges/Data-Structures/kthfromend');

describe('module KthFromEnd',()=>{
  it('retrun the exact value',()=>{
    let link = new LinkedList();
    link.insert(1);
    link.insert(3);
    link.insert(8);
    link.insert(2);
    expect(link.llkthFromEnd(0)).toEqual(2);
    expect(link.llkthFromEnd(2)).toEqual(3);
    expect(link.llkthFromEnd(3)).toEqual(1);
  });
  it('enter k bigger than linkedlist',()=>{
    let link = new LinkedList();
    link.insert(1);
    link.insert(3);
    link.insert(8);
    link.insert(2);
    expect(link.llkthFromEnd(5)).toEqual('Exception');
  });
});
