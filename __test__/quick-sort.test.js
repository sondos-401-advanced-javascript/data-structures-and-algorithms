'use strict';
const quickSort = require('../challenges/quickSort/quick-sort');

describe('quick sort function',()=>{
  it('regular array',()=>{
    let arr = [8,4,23,42,16,15];
    let array = quickSort(arr,0,arr.length-1);
    expect(array).toEqual([4,8,15,16,23,42]);
     
  });
  it('Reverse-sorted array',()=>{
    let arr = [20,18,12,8,5,-2];
    let array = quickSort(arr,0,arr.length-1);
    expect(array).toEqual([-2,5,8,12,18,20]);
  });
  it('Few uniques array',()=>{
    let arr = [5,12,7,5,5,7];
    let array = quickSort(arr,0,arr.length-1);
    expect(array).toEqual([5,5,5,7,7,12]);
  });
  it('Nearly-sorted array',()=>{ 
    let arr = [2,3,5,7,13,11];
    let array = quickSort(arr,0,arr.length-1);
    expect(array).toEqual([2,3,5,7,11,13]);
  });
});