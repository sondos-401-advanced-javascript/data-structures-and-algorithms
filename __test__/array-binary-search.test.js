'use strict';

const BinarySearch = require('../challenges/arrayBinarySearch/array-binary-search');

describe('test Binary Search',()=>{
  it('test if take the index correct',()=>{
    let result = BinarySearch([4,8,15,16,23,42], 15);
    expect(result).toBe(2);
  });
  it('if the num is not exist',()=>{
    let result = BinarySearch([11,22,33,44,55,66,77], 90);
    expect(result).toBe(-1);
  });
});