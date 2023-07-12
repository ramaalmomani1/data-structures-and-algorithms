# First-in, First out Animal Shelter.

----

**_Problem Domain_:**

> * Create a class called AnimalShelter which holds only dogs and cats. The shelter operates using a first-in, first-out approach.


----

**_Algorithm_:**

Create a class called AnimalShelter which holds only dogs and cats. The shelter operates using a first-in, first-out approach.

Implement the following methods:
1. enqueue: taking arguments: animal, animal can be either a dog or a cat object. It must have a species property that is either "cat" or "dog". It must have a name property that is a string. The enqueue method adds an animal to the rear of the queue by appending it to the queue array and incrementing the rear pointer. 

2. dequeue: taking arguments: pref, pref can be either "dog" or "cat"
Return: either a dog or a cat, based on preference.
If pref is not "dog" or "cat" then return null. The dequeue method takes a (pref) as input, either "dog" or "cat," and returns the oldest animal of that preference. It searches the queue array from the front to the rear, looking for an animal that matches the preference. If found, it removes the animal from the queue, updates the rear pointer, and returns the animal. If no animal of the preferred type is found, it returns null.

----


**_code_**

``` javascript

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

```



**_Another way_**

``` javascript 


class AnimalShelter{
  constructor() {
    this.dogs =[];
    this.cats =[];
  }

  enqueue(animal){
    if(animal.species === 'cat'){
      this.cats.push(animal);
    } else
    if(animal.species === 'dog'){
      this.dogs.push(animal);
    }
  }

  dequeue(pref){


    if (pref.species === 'cat') {
      return this.cats.shift();
    } else if (pref.species === 'dog') {
      return this.dogs.shift();
    } else return null;

  }

}

const test1 = new AnimalShelter();

test1.enqueue({
  name: 'lolo' ,
  species: 'cat'

});

test1.enqueue({
  name: 'Tom' ,
  species: 'cat'

});
console.log('this is the Cat:', test1 );

test1.enqueue({
  name: 'losy' ,
  species: 'dog'

});

test1.enqueue({
  name: 'soso' ,
  species: 'dog'
});

console.log('this is the dog:', test1 );


console.log(test1.dequeue({
  name: 'soso' ,
  species: 'dog'
}));

console.log(test1.dequeue({
  name: 'soso' ,
  species: 'cat'
}));




console.log(test1.dequeue({
  name: 'soso' ,
  species: 'hhh'
}));

```

----