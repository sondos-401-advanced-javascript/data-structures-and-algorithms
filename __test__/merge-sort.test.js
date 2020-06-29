'use strict';
const mergeSort = require('../challenges/mergeSort/merge-sort');

describe('merge sort function',()=>{
  it('regular array',()=>{
    let array = mergeSort([8,4,23,42,16,15]);
    expect(array).toEqual([4,8,15,16,23,42]);
     
  });
  it('Reverse-sorted array',()=>{
    let array = mergeSort([20,18,12,8,5,-2]);
    expect(array).toEqual([-2,5,8,12,18,20]);
  });
  it('Few uniques array',()=>{
    let array = mergeSort([5,12,7,5,5,7]);
    expect(array).toEqual([5,5,5,7,7,12]);
  });
  it('Nearly-sorted array',()=>{ 
    let array = mergeSort([2,3,5,7,13,11]);
    expect(array).toEqual([2,3,5,7,11,13]);
  });
});