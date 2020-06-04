'use strict';

let stakAndQueue = require('../challenges/stacksAndQueues/stacks-and-queues');

describe('Test Stack',()=>{
  it('test push()',()=>{
    let stack = new stakAndQueue.Stack();
    stack.push(5);
    expect(stack.top.value).toEqual(5); 
    stack.push(3);
    expect(stack.top.value).toEqual(3);
    expect(stack.storage).toEqual([{value:3,next:1},{value:5,next:null}]); 
    stack.push(4);
    expect(stack.top.value).toEqual(4);
    expect(stack.top.next).toEqual(2);
  });
  it('test pop()',()=>{
    let stack = new stakAndQueue.Stack();
    stack.pop();
    expect(stack.top).toBeNull();
    stack.push(4);
    stack.push(2);
    stack.pop();
    expect(stack.top.value).toEqual(4);
  });
  it('test peek()',()=>{
    let stack = new stakAndQueue.Stack();
    expect(stack.peek()).toBeNull();
    stack.push(1);
    stack.push(2);
    expect(stack.peek()).toEqual({value:2,next:1});
  });
  it('test isEmpty()',()=>{
    let stack = new stakAndQueue.Stack();
    expect(stack.isEmpty()).toBeTruthy();
    stack.push(1);
    expect(stack.isEmpty()).toBeFalsy();

  });
});

describe('Test Queue',()=>{
  it('test enqueue()',()=>{
    let queue = new stakAndQueue.Queue();
    queue.enqueue(2);
    expect(queue.front.value).toEqual(2);
    expect(queue.front.next).toBeNull();
    queue.enqueue(5);
    expect(queue.front.value).toEqual(2);
    expect(queue.front.next).toEqual(2);
    expect(queue.storage[0].value).toEqual(5);
    expect(queue.storage[0].next).toBeNull();
  });
  it('test dequeue()',()=>{
    let queue = new stakAndQueue.Queue();
    queue.dequeue();
    expect(queue.front).toBeNull();
    queue.enqueue(3);
    queue.dequeue();
    expect(queue.front).toBeNull();
    queue.enqueue(3);
    queue.enqueue(5);
    queue.dequeue();
    expect(queue.front.value).toEqual(5);
  });
  it('test peek()',()=>{
    let queue = new stakAndQueue.Queue();
    expect(queue.peek()).toBeNull();
    queue.enqueue(5);
    expect(queue.peek()).toEqual({value:5,next:null});
    queue.enqueue(6);
    expect(queue.peek()).toEqual({value:5,next:2});
  });
  it('test isEmpty()',()=>{
    let queue = new stakAndQueue.Queue();
    expect(queue.isEmpty()).toBeTruthy();
    queue.enqueue(5);
    expect(queue.isEmpty()).toBeFalsy();
  });
});