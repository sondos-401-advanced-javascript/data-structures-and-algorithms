'use strict';

const shift = require('../challenges/arrayShift/array-shift');

describe('this test for array-shift',()=>{
  it('give array with add num at middle index the length odd',()=>{
    expect(shift([4,8,15,23,42],16)).toEqual(
      expect.arrayContaining([4,8,15,16,23,42]));
   
  });
  it('give array with add num at middle index the length even',()=>{
    expect(shift([2,4,6,8], 5)).toEqual(
      expect.arrayContaining([2,4,5,6,8]));
   
  });
});