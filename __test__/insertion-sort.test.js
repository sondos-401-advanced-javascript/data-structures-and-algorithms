'use strict';

const insertionSort = require('../challenges/insertionSort/insertion-sort');

describe('insertion sort test ',()=>{
  it('test regeular array',()=>{
    let result = insertionSort([4,8,15,16,23,42]);
    expect(result).toEqual([4,8,15,16,23,42]);
  });
  it('test array',()=>{
    let result = insertionSort([8,4,23,42,16,15]);
    expect(result).toEqual([4,8,15,16,23,42]);
  });
  it('reverse sorted array',()=>{
    let result = insertionSort([20,18,12,8,5,-2]);
    expect(result).toEqual([-2,5,8,12,18,20]);
  });
  it('Few uniqe array',()=>{
    let result = insertionSort([5,12,7,5,5,7]);
    expect(result).toEqual([5,5,5,7,7,12]);
  });
  it('nearly sorted array',()=>{
    let result = insertionSort([2,3,5,7,13,11]);
    expect(result).toEqual([2,3,5,7,11,13]);
  });
});