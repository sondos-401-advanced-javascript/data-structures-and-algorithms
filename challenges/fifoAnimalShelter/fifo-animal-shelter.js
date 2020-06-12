'use strict';


class Node{
  constructor(value){
    this.value = value;
    this.next = null;
  }
}

class Queue{
  constructor(){
    this.storage = new Array();
    this.front = null;
  }
  enqueue(value){
    if(!this.front){
      let node = new Node(value);
      this.storage.push(node);
      this.front = this.storage[0];
    }
    else{
      let node = new Node(value);
      let len = this.storage.length;
      this.storage[len-1].next = len +1;
      this.storage.push(node);
      this.front = this.storage[0];  
    }
        
  }
}

class AnimalShelter{
  constructor(){
    this.storage = new Array();
    this.cats = new Queue();
    this.dogs = new Queue();
  }
  enqueue(animal){
    let newAnimal = new Node(animal);
    if(animal === 'cat'){
      this.cats.enqueue(newAnimal);
      this.storage.unshift(this.cats.storage);
    }
    else if(animal === 'dog'){
      this.dogs.enqueue(newAnimal);
      this.storage.unshift(this.dogs.storage);
    }
    
  }

  dequeue(pref){
    if(pref==='cat'){
      if(!this.cats.storage.length)return null;
      let deleted = this.cats.storage.pop();
      return deleted;
    }
    else if(pref==='dog'){
      if(!this.dogs.storage.length)return null;
      let deleted = this.dogs.storage.pop();
      return deleted;
    }
    else return null;
  }

}

module.exports = AnimalShelter;

