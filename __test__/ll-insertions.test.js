'use strict';

const LinkedList = require('../challenges/Data-Structures/ll-insertions');

describe('module LinkedList insertions ',()=>{
  
  it('test append()',()=>{
    const link = new LinkedList();
    let head = link.insert(1);
    link.insert(2);
    link.insert(3);
    let val = 4;
    link.append(val);
    expect(head.head.next.next.next.value).toEqual(4);
    expect(head.head.next.next.next.next).toBeNull();
  });
  it('insertBefore() in mid',()=>{
    const link = new LinkedList();
    let head = link.insert(1);
    link.insert(2);
    link.insert(3);
    link.insertBefore(2,4);
    expect(head.head.next.value).toEqual(4);
    expect(head.head.next.next.value).toEqual(2);
  });

  it('insertBefore() if there duplicate',()=>{
    const link = new LinkedList();
    let head = link.insert(1);
    link.insert(2);
    link.insert(2);
    link.insertBefore(2,4);
    console.log('duplicate ==>',head.head.next);
    expect(head.head.next.value).toEqual(4);
    expect(head.head.next.next.value).toEqual(2);
    expect(head.head.next.next.next.value).toEqual(2);
  });
  it('insertBefore() if u add before head',()=>{
    const link = new LinkedList();
    let head = link.insert(1);
    link.insert(2);
    link.insert(3);
    link.insertBefore(1,4);
    console.log('head ===>',head.head);
    expect(head.head.value).toEqual(4);
    expect(head.head.next.value).toEqual(1);
  });
  it('insertBefore() not found',()=>{
    const link = new LinkedList();
    link.insert(1);
    link.insert(2);
    link.insert(3);
    expect(link.insertBefore(5,4)).toEqual('Exception');
  });
  it('insertAfter() not found',()=>{
    const link = new LinkedList();
    link.insert(1);
    link.insert(2);
    link.insert(3);
    expect(link.insertAfter(5,4)).toEqual('Exception');
  });
  it('insertAfter() in mid',()=>{
    const link = new LinkedList();
    let head = link.insert(1);
    link.insert(2);
    link.insert(3);
    link.insertAfter(2,4);
    console.log('After ==>',head.head.next);
    expect(head.head.next.value).toEqual(2);
    expect(head.head.next.next.value).toEqual(4);
    expect(head.head.next.next.next.value).toEqual(3);
  });
  it('insertAfter() in duplicate',()=>{
    const link = new LinkedList();
    let head = link.insert(1);
    link.insert(2);
    link.insert(2);
    link.insertAfter(2,4);
    console.log('After ==>',head.head.next);
    expect(head.head.next.value).toEqual(2);
    expect(head.head.next.next.value).toEqual(4);
    expect(head.head.next.next.next.value).toEqual(2);
  });
  it('insertAfter() in duplicate',()=>{
    const link = new LinkedList();
    let head = link.insert(1);
    link.insert(2);
    link.insert(3);
    link.insertAfter(3,4);
    console.log('After ==>',head.head.next);
    expect(head.head.next.next.value).toEqual(3);
    expect(head.head.next.next.next.value).toEqual(4);
    expect(head.head.next.next.next.next).toBeNull();
  });
});