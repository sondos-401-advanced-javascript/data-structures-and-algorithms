'use strict';

const {PseudoQueue,Stack} = require('../challenges/queueWithStacks/queue-with-stacks');

describe('module Queue',()=>{
  it('enqueue()',()=>{
    let queue = new PseudoQueue();
    queue.enqueue(10);
    queue.enqueue(15);
    queue.enqueue(20);
    let value = 5;
    expect(queue.enqueue(value)[0]).toEqual(5);
  });
  it('dequeue()',()=>{
    let queue = new PseudoQueue();
    queue.enqueue(5);
    queue.enqueue(15);
    queue.enqueue(20);
    queue.dequeue();
    expect(queue.storage[0]).toEqual(20);
    expect(queue.storage[1]).toEqual(15);
  });
  it('Stack push()',()=>{
    let stacks = new Stack();
    stacks.push(1);
    stacks.push(2);
    let array = stacks.push(3);
    expect(array[0]).toEqual(3);
  });
  it('Stack pop()',()=>{
    let stacks = new Stack();
    stacks.push(1);
    stacks.push(2);
    let array = stacks.pop();
    expect(array[0]).toEqual(1);
  });
  it('Stack peek()',()=>{
    let stacks = new Stack();
    stacks.push(1);
    stacks.push(2);
    let store = stacks.peek();
    expect(store).toEqual(2);
  });
});