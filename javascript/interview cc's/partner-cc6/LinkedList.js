"use strict";

const Node = require("./Node");

class LinkedList {
  constructor() {
    this.head = null;
  }

  add(value) {
    const node = new Node(value);
    if (!this.head) {
      this.head = node;
      return;
    }

    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = node;
  }

  values() {
    let values = [];
    let current = this.head;
    while (current) {
      values.push(current.value);
      current = current.next;
    }

    return values;
  }
  getValue(key) {
    let current = this.head;
    while (current) {
      if (current.value[key]) {
        return current.value[key];
      }
      current = current.next;
    }

    return null;
  }

  find(key) {
    let current = this.head;

    while (current) {
      const found = Object.keys(current.value).includes(key);
      if (found) {
        return true;
      }
      current = current.next;
    }

    return false;
  }
}

module.exports = LinkedList;
