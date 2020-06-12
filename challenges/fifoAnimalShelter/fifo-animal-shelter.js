'use strict';

class AnimalShelter{
  constructor(){
    this.storage = new Array();
  }
  enqueue(animal){
    if(animal === 'dog' || animal === 'cat'){
      this.storage.unshift(animal);
    }
  }
  dequeue(pref){
    if(pref === 'cat' || pref === 'dog'){
      this.storage.pop();
    }
    else return null;
  }

}