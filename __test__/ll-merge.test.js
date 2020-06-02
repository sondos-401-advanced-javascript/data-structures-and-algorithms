'use strict';

const merge = require('../challenges/llMerge/ll-merge');

describe('test function mergeLists',()=>{
  it('length of linkedlists equal',()=>{
    let list1 = {
      head:{
        value:1,
        next:{
          value:2,
          next:{
            value:3,
            next: null,
          },
        },
      },
    };
    let list2 = {
      head:{
        value:4,
        next:{
          value:5,
          next:{
            value:6,
            next: null,
          },
        },
      },
    };
    let mergedLists = merge(list1,list2);
    expect(mergedLists.head.value).toEqual(1);
    expect(mergedLists.head.next.value).toEqual(4);
    expect(mergedLists.head.next.next.value).toEqual(2);
    expect(mergedLists.head.next.next.next.value).toEqual(5);
    expect(mergedLists.head.next.next.next.next.value).toEqual(3);
    expect(mergedLists.head.next.next.next.next.next.value).toEqual(6);
    expect(mergedLists.head.next.next.next.next.next.next).toBeNull(); 
  });
  it('second list longer than first list',()=>{
    let list1 = {
      head:{
        value:1,
        next:{
          value:3,
          next:null,
        },
      },
    };
    let list2 = {
      head:{
        value:5,
        next:{
          value:9,
          next:{
            value:4,
            next: null,
          },
        },
      },
    };
    let mergedLists = merge(list1,list2);
    expect(mergedLists.head.value).toEqual(1);
    expect(mergedLists.head.next.value).toEqual(5);
    expect(mergedLists.head.next.next.value).toEqual(3);
    expect(mergedLists.head.next.next.next.value).toEqual(9);
    expect(mergedLists.head.next.next.next.next.value).toEqual(4);
    expect(mergedLists.head.next.next.next.next.next).toBeNull(); 
  });
  it('first list longer than second list',()=>{
    let list1 = {
      head:{
        value:1,
        next:{
          value:3,
          next:{
            value:2,
            next: null,
          },
        },
      },
    };
    let list2 = {
      head:{
        value:5,
        next:{
          value:9,
          next:null,
        },
      },
    };
    let mergedLists = merge(list1,list2);
    expect(mergedLists.head.value).toEqual(1);
    expect(mergedLists.head.next.value).toEqual(5);
    expect(mergedLists.head.next.next.value).toEqual(3);
    expect(mergedLists.head.next.next.next.value).toEqual(9);
    expect(mergedLists.head.next.next.next.next.value).toEqual(2);
    expect(mergedLists.head.next.next.next.next.next).toBeNull(); 
  });
});