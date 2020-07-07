'use strict';
const leftJoins = require('../challenges/leftJoin/left-join');

describe('Left Join ',()=>{

  it('first test',()=>{
    let hashMap1 = new leftJoins.HashMap(1024);
    let hashMap2 = new leftJoins.HashMap(1024);

    hashMap1.add('fond','enamored');
    hashMap1.add('wrath','anger');
    hashMap1.add('diligent','employed');
    hashMap1.add('outifit','garb');
    hashMap1.add('guide','usher');

    hashMap2.add('fond','averse');
    hashMap1.add('wrath','delight');
    hashMap2.add('diligent','idle');
    hashMap2.add('guide','follow');
    hashMap2.add('flow','jam');
    let arr = [
      [ 'wrath', 'delight', 'anger' ],
      [ 'outifit', 'garb', null ],
      [ 'diligent', 'idle', 'employed' ],
      [ 'guide', 'follow', 'usher' ],
      [ 'fond', 'averse', 'enamored' ],
    ];
    leftJoins.leftJoins(hashMap1,hashMap2).map((item, idx)=>{
      expect(item).toEqual(arr[idx]);
    });
  });

  it('second test',()=>{
    let hashMap1 = new leftJoins.HashMap(1024);
    let hashMap2 = new leftJoins.HashMap(1024);

    hashMap1.add('fond','enamored');
    hashMap1.add('wrath','anger');
    hashMap1.add('diligent','employed');
    hashMap1.add('outifit','garb');
    hashMap1.add('guide','usher');

    hashMap2.add('fond','averse');
    hashMap1.add('wrath','delight');
    hashMap2.add('diligent','idle');
    hashMap2.add('guide','follow');
    hashMap2.add('flow','jam');
    let arr = [
      [ 'wrath', 'delight', 'anger' ],
      [ 'outifit', 'garb', null ],
      [ 'diligent', 'idle', 'employed' ],
      [ 'guide', 'follow', 'usher' ],
      [ 'fond', 'averse', 'enamored' ],
    ];
    leftJoins.leftJoins(hashMap1,hashMap2).map((item, idx)=>{
      expect(item).toEqual(arr[idx]);
    });
  });
  it('third test',()=>{
    let hashMap1 = new leftJoins.HashMap(1024);
    let hashMap2 = new leftJoins.HashMap(1024);

    hashMap1.add('fond','enamored');
    hashMap1.add('wrath','anger');
    hashMap1.add('diligent','employed');
    hashMap1.add('outifit','garb');
    hashMap1.add('guide','usher');

    hashMap2.add('fond','averse');
    hashMap1.add('wrath','delight');
    hashMap2.add('diligent','idle');
    hashMap2.add('guide','follow');
    hashMap2.add('flow','jam');
    let arr = [
      [ 'wrath', 'delight', 'anger' ],
      [ 'outifit', 'garb', null ],
      [ 'diligent', 'idle', 'employed' ],
      [ 'guide', 'follow', 'usher' ],
      [ 'fond', 'averse', 'enamored' ],
    ];
    leftJoins.leftJoins(hashMap1,hashMap2).map((item, idx)=>{
      expect(item).toEqual(arr[idx]);
    });
  });
});