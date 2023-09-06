"use strict";

const LinkedList = require("./LinkedList");

class Hashmap {
  constructor(size) {
    this.size = size; // size as an input as i test
    this.map = new Array(size); // new array taking the inputed size
  }

  hash(key) {
    return (
      (key.split('').reduce((p, n) => {
        return p + n.charCodeAt(0);
      }, 0) *
        599) %
      this.size
    );
  }

  set(key, value) {
    const index = this.hash(key);

    if (!this.map[index]) {
      this.map[index] = new LinkedList();
    }
    const entry = { [key]: value };
    console.log(entry);
    this.map[index].add(entry);
  }
  get(key) {
    const index = this.hash(key);
    const list = this.map[index];

    if (!list) {
      return null;
    }

    return list.getValue(key);
  }

  has(key) {
    let index = this.hash(key);
    if (!this.map[index]) {
      return false;
    }
    return this.map[index].find((entry) => entry[0] === key) !== undefined;
  }
  keys() {
    let keysArray = [];
    for (let i = 0; i < this.size; i++) {
      if (this.map[i]) {
        let current = this.map[i].head;
        while (current) {
          keysArray.push(Object.keys(current.value).pop());

          current = current.next;
        }
      }
    }
    return keysArray;
  }

  repeatedWord(string) {
    let splitedString = string.split(" ");
    console.log(splitedString);
    let newHashMap = new Hashmap(this.size);
    for (let i = 0; i < splitedString.length; i++) {
      if (newHashMap.has(splitedString[i])) {
        return splitedString[i];
      }
      newHashMap.set(splitedString[i], splitedString[i]);
    }
    return null;
  }
}
module.exports = Hashmap;
// const HashTable = new Hashmap(19);

// console.log(HashTable.hash("Rama")); // Rama saved --> index 12

// HashTable.set("Saleh", "Student");
// HashTable.set("Anas", "Student");
// HashTable.set("Farah", "Student");
// HashTable.set("Rama", "Student");
// HashTable.set("Waleed", "Instructor");
// HashTable.set("Basha", "Student");
// // HashTable.get("Saleh")
// const allKeys = HashTable.keys();
// console.log("hello", allKeys);
// console.log(HashTable.get("Saleh"));
// console.log(HashTable.has("Saleh"));
// console.log(HashTable.has("soso"));

// console.log(
//   HashTable.repeatedWord("Once upon a time, there was a brave princess who...")
// );

// console.log(
//   HashTable.repeatedWord(
//     "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair, we had everything before us, we had nothing before us, we were all going direct to Heaven, we were all going direct the other way – in short, the period was so far like the present period, that some of its noisiest authorities insisted on its being received, for good or for evil, in the superlative degree of comparison only..."
//   )
// );

// console.log(
//   HashTable.repeatedWord(
//     "It was a queer, sultry summer , the summer they electrocuted the Rosenbergs, and I didn’t know what I was doing in New York..."
//   )
// );
// HashTable.map.forEach((data, i) => {
//   console.log(i, data && data.values());
// });
