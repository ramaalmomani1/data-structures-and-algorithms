'use strict';

class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {

  constructor() {
    this.head = null;
  }
  insert(value) {
    const newNode = new Node(value);
    if (this.head === null) {
      this.head = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
  }
  includes(value) {
    let current = this.head;
    while (current) {
      if (current.value === value) {
        return true;
      }
      current = current.next;
    }
    return false;
  }
  toString() {
    let current = this.head;
    let result = '';
    while (current) {
      result += `{ ${current.value} } -> `;
      current = current.next;
    }
    result += 'NULL';
    return result;
  }
}

let LinkedLi = new LinkedList();
LinkedLi.insert('c');
LinkedLi.insert('b');
LinkedLi.insert('a');
console.log(LinkedLi);
console.log(LinkedLi.includes('f'));
console.log(LinkedLi.includes('a'));
console.log(LinkedLi.toString());
module.exports = LinkedList;
