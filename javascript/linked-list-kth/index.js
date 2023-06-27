'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  append(value) {
    const newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }

  kthFromEnd(k) {
    if (k <= 0 || !this.head) {
      return null;
    }

    let slow = this.head;
    let fast = this.head;

    for (let i = 0; i < k; i++) {
      if (!fast) {
        return null ;
      }
      fast = fast.next;
    }
    while (fast) {
      slow = slow.next;
      fast = fast.next;
    }

    return slow.value;
  }
}

const linkedList = new LinkedList();
linkedList.append(1);
linkedList.append(3);
linkedList.append(8);
linkedList.append(2);
// linkedList.append(5);

console.log(linkedList.kthFromEnd(4));
console.log(linkedList.kthFromEnd(2));
console.log(linkedList.kthFromEnd(6));

module.exports = LinkedList;
