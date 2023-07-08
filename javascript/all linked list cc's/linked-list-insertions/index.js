'use strict';


class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  append(newValue) {
    const newNode = new Node(newValue);

    if (this.head === null) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next !== null) {
        current = current.next;
      }
      current.next = newNode;
    }
  }

  insertBefore(value, newValue) {
    const newNode = new Node(newValue);

    if (this.head === null) {
      throw new Error('Empty list');
    }
    if (this.head.data === value) {
      newNode.next = this.head;
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next !== null && current.next.data !== value) {
        current = current.next;
      }

      if (current.next === null) {
        throw new Error('Value not found');
      }

      newNode.next = current.next;
      current.next = newNode;
    }
  }

  insertAfter(value, newValue) {
    const newNode = new Node(newValue);

    if (this.head === null) {
      throw new Error('Empty list');
    }

    let current = this.head;
    while (current !== null && current.data !== value) {
      current = current.next;
    }

    if (current === null) {
      throw new Error('Value not found');
    }
    newNode.next = current.next;
    current.next = newNode;
  }
}

const list = new LinkedList();

list.append(10);
list.append(20);
list.append(30);

console.log(list.head);

list.insertBefore(20, 15);

console.log(list.head);

list.insertAfter(15, 25);

console.log(list.head);



module.exports = LinkedList;
