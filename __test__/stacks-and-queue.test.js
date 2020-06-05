'use strict';

let stackAndQueue = require('../challenges/stacksAndQueues/stacks-and-queues');

describe('Stack test',()=>{
  it('instance Stack',()=>{
    let stack = new stackAndQueue.Stack();
    expect(stack instanceof stackAndQueue.Stack).toBeTruthy();
  });
  it('push()',()=>{
    let stack = new stackAndQueue.Stack();
    stack.push('red');
    expect(stack.top).toEqual({value:'red',next:null});
    stack.push('orange');
    expect(stack.top).toEqual({value:'orange',next:1});
    stack.push('blue');
    expect(stack.top).toEqual({value:'blue',next:2});
  });
  it('pop()',()=>{
    let stack = new stackAndQueue.Stack();
    stack.pop();
    expect(stack.top).toBeNull();
    stack.push('red');
    stack.pop();
    expect(stack.top).toBeNull();
    stack.push('red');
    stack.push('orange');
    stack.push('blue');
    stack.pop();
    expect(stack.top).toEqual({value:'orange',next:1});
  });
  it('peek()',()=>{
    let stack = new stackAndQueue.Stack();
    expect(stack.peek()).toBeNull(); 
    stack.push('red');
    stack.push('orange');
    expect(stack.peek()).toEqual({value:'orange',next:1}); 
  });
  it('isEmpty()',()=>{
    let stack = new stackAndQueue.Stack();
    expect(stack.isEmpty()).toBeTruthy();
    stack.push('red');
    expect(stack.isEmpty()).toBeFalsy();
  });
});

describe('Queue',()=>{
  it('instance Stack',()=>{
    let queue = new stackAndQueue.Queue();
    expect(queue instanceof stackAndQueue.Queue).toBeTruthy();
  });
  it('enqueue()',()=>{
    let queue = new stackAndQueue.Queue();
    queue.enqueue('red');
    expect(queue.front).toEqual({value:'red',next:null});
    queue.enqueue('orange');
    expect(queue.front).toEqual({value:'red',next:2});
    expect(queue.storage[1]).toEqual({value:'orange',next:null});
    queue.enqueue('blue');
    expect(queue.front).toEqual({value:'red',next:2});
    expect(queue.storage[1]).toEqual({value:'orange',next:3});
    expect(queue.storage[2]).toEqual({value:'blue',next:null});
  });
  it('dequeue()',()=>{
    let queue = new stackAndQueue.Queue();
    queue.dequeue();
    expect(queue.front).toBeNull();
    queue.enqueue('red');
    queue.dequeue();
    expect(queue.front).toBeNull();
    queue.enqueue('red');
    queue.enqueue('orange');//null
    queue.dequeue();
    expect(queue.front).toEqual({value:'orange',next:null});
    queue.enqueue('blue');//orange->2,blue->3
    expect(queue.front).toEqual({value:'orange',next:2});
    queue.enqueue('gray');//orange->2,blue->3,gray->null
    queue.dequeue();//blue->3,gray->null
    expect(queue.front).toEqual({value:'blue',next:3});
  });
  it('peek()',()=>{
    let queue = new stackAndQueue.Queue();
    expect(queue.peek()).toBeNull();
    queue.enqueue('red');
    expect(queue.peek()).toEqual({value:'red',next:null});
    queue.enqueue('orange');
    expect(queue.peek()).toEqual({value:'red',next:2});
  });
  it('isEmpty',()=>{
    let queue = new stackAndQueue.Queue();
    expect(queue.isEmpty()).toBeTruthy();
    queue.enqueue('red');
    expect(queue.isEmpty()).toBeFalsy(); 
  });
});