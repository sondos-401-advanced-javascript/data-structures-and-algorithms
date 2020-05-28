'use strict';

let LinkedList = require('../challenges/linkedList/linked-list');

describe('Linked List module',()=>{
  it('constructor()',()=>{
    let creatLink = new LinkedList();
    expect(creatLink.head).toBeNull();
  });
  it('insert()',()=>{
    let creatLink = new LinkedList();
    let headValue = 'a';
    let headNode = creatLink.insert(headValue);
    expect(headNode.head.value).toEqual(headValue);
    expect(headNode.head.next).toBeNull();
    let nodeValue = 'b';
    creatLink.insert(nodeValue);
    expect(headNode.head.next.value).toEqual(nodeValue);
    expect(headNode.head.next.next).toBeNull();
    let nextNodeValue = 'c';
    creatLink.insert(nextNodeValue);
    expect(headNode.head.next.next.value).toEqual(nextNodeValue);
    expect(headNode.head.next.next.next).toBeNull();
  });
  it('includes()',()=>{
    let creatLink = new LinkedList();
    creatLink.insert('a');
    creatLink.insert('b');
    creatLink.insert('c');
    expect(creatLink.includes('a')).toBeTruthy();
    expect(creatLink.includes('b')).toBeTruthy();
    expect(creatLink.includes('c')).toBeTruthy();
    expect(creatLink.includes('f')).toBeFalsy();
    expect(creatLink.includes('k')).toBeFalsy();
  });
  it('toString()',()=>{
    let creatLink = new LinkedList();
    creatLink.insert('a');
    creatLink.insert('b');
    creatLink.insert('c');
    expect(creatLink.toString()).toEqual('{a} -> {b} -> {c} -> NULL');
  });
});