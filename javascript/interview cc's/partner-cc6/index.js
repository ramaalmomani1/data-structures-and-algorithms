"use strict";

const LinkedList = require("./LinkedList");

class Hashmap {
  constructor(size) {
    this.size = size; // size as an input as i test
    this.map = new Array(size); // new array taking the inputed size
  }
  hash(key) {
    return (
      (key.split("").reduce((p, n) => {
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
  repeatedWord(string) {
    const words = string.split(/\s+/);
    const wordCount = new Hashmap(words.length);

    let mostCommonWord = "";
    let maxCount = 0;

    for (const word of words) {
      const lowercaseWord = word.toLowerCase();
      const count = (wordCount.get(lowercaseWord) || 0) + 1;
      wordCount.set(lowercaseWord, count);

      if (count > maxCount) {
        maxCount = count;
        mostCommonWord = lowercaseWord;
      }
    }

    return mostCommonWord;
  }
}
module.exports = Hashmap;

const HashTable = new Hashmap(19);

console.log(HashTable.repeatedWord("In a galaxy far far away"));

console.log(HashTable.repeatedWord("Taco cat ate a taco"));


