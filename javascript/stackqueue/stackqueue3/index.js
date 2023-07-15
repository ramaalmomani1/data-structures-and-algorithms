'use strict';

// class AnimalShelter{
//   constructor() {
//     this.dogs =[];
//     this.cats =[];
//   }

//   enqueue(animal){
//     if(animal.species === 'cat'){
//       this.cats.push(animal);
//     } else
//     if(animal.species === 'dog'){
//       this.dogs.push(animal);
//     }
//   }

//   dequeue(pref){


//     if (pref.species === 'cat') {
//       return this.cats.shift();
//     } else if (pref.species === 'dog') {
//       return this.dogs.shift();
//     } else return null;

//   }

// }


// const test1 = new AnimalShelter();

// test1.enqueue({
//   name: 'lolo' ,
//   species: 'cat'

// });

// test1.enqueue({
//   name: 'Tom' ,
//   species: 'cat'

// });
// console.log('this is the Cat:', test1 );

// test1.enqueue({
//   name: 'losy' ,
//   species: 'dog'

// });

// test1.enqueue({
//   name: 'soso' ,
//   species: 'dog'
// });

// console.log('this is the dog:', test1 );


// console.log(test1.dequeue({
//   name: 'soso' ,
//   species: 'dog'
// }));

// console.log(test1.dequeue({
//   name: 'soso' ,
//   species: 'cat'
// }));




// console.log(test1.dequeue({
//   name: 'soso' ,
//   species: 'hhh'
// }));


class Animal {
  constructor(species, name) {
    this.species = species;
    this.name = name;
  }
}

class AnimalShelter {
  constructor() {
    this.queue = [];
    this.front = null;
    this.rear = null;
  }

  enqueue(animal) {
    this.queue[this.rear] = animal;
    this.rear++;
  }

  dequeue(pref) {
    if (pref !== 'dog' && pref !== 'cat') {
      return null;
    }

    let preIndex = -1;
    for (let i = this.front; i < this.rear; i++) {
      if (this.queue[i].species === pref) {
        preIndex = i;
        break;
      }
    }

    if (preIndex !== -1) {
      const oldestAnimal = this.queue[preIndex];
      this.queue.splice(preIndex, 1);
      this.rear--;
      return oldestAnimal;
    } else {
      return null;
    }
  }
}

const test = new AnimalShelter();

test.enqueue(new Animal('dog', 'Max'));
test.enqueue(new Animal('cat', 'Whiskers'));
test.enqueue(new Animal('cat', 'Mittens'));

console.log(test.dequeue('cat'));
console.log(test.dequeue('dog'));

