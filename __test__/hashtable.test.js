'use strict';
let HashTable = require('../challenges/hashtable/hashtable');

describe('Hash Table', () => {
  it('if it hash the key', () => {
    let hashTable = new HashTable(2000);
    expect(hashTable.hash('Cat')).toBe(1720);
  });
  it('added to hash table', () => {
    let hashTable = new HashTable(2000);
    hashTable.add('book', 'adventure');
    hashTable.map.forEach((data, i) => {
      expect([i, data.values()]).toEqual([1773, [{ book: 'adventure' }]]);
    });
  });
  it('get the value of the key', () => {
    let hashTable = new HashTable(2000);
    hashTable.add('book', 'adventure');
    expect(hashTable.get('book')).toEqual('adventure');
  });
  it('get the value of the key is undefined', () => {
    let hashTable = new HashTable(2000);
    hashTable.add('book', 'adventure');
    expect(hashTable.get('Cat')).toEqual('this key incorrect');
  });
  it('if the key exsist',()=>{
    let hashTable = new HashTable(2000);
    hashTable.add('book', 'adventure');
    expect(hashTable.contains('book')).toBeTruthy();
  });
  it('if the key is not exsist',()=>{
    let hashTable = new HashTable(2000);
    hashTable.add('book', 'adventure');
    expect(hashTable.contains('movie')).toBeFalsy();
  });

});

