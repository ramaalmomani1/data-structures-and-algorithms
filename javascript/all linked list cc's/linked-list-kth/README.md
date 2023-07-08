# Linked-list-kth

----

**_Problem Domain_:**

> * Implementation for Singly Linked Lists, by create Node class that have value and pointer (next) as an arguments, then create another class called LinkedList include a head property. LinkedList class contain different methods, append --> adds a new node with the given value to the end of the list and kthFromEnd methode --> argument: a number, k, as a parameter.Return the node’s value that is k places from the tail of the linked list.

----

**_Algorithm_:**

1. Create a Node class that has properties for the value stored in the Node, and a pointer to the next Node.
2. Create a Linked List class, include a head property within this class.Upon instantiation, an empty Linked List should be created.
3. append method that adds a new node with the given value to the end of the list
4. kthFromEnd  method that takes an argument: a number, k, as a parameter.Return the node’s value that is k places from the tail of the linked list.

----

**_Code_:**

``` javascript

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
    if (k < 0 || !this.head) {
      return null;
    }

    let slow = this.head;
    let fast = this.head;

    for (let i = 0; i <= k; i++) {
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

console.log(linkedList.kthFromEnd(0));
console.log(linkedList.kthFromEnd(2));
console.log(linkedList.kthFromEnd(6));

module.exports = LinkedList;

```

----

**_Testing code_**

``` javascript
'use strict';

const LinkedList = require('./index');


describe('kthFromEnd', () => {
  it('should return null when k is greater than the length of the list', () => {
    const list = new LinkedList();
    list.append(1);
    list.append(2);
    list.append(3);
    const result = list.kthFromEnd(4);
    expect(result).toBeNull();
  });

  it('should return the first element when k and the length of the list are the same', () => {
    const list = new LinkedList();
    list.append(1);
    list.append(2);
    list.append(3);
    const result = list.kthFromEnd(3);
    expect(result).toBe(1);
  });

  it('should return null when k is not a positive integer', () => {
    const list = new LinkedList();
    list.append(1);
    list.append(2);
    list.append(3);
    let result = list.kthFromEnd(0);
    expect(result).toBeNull();
    result = list.kthFromEnd(-2);
    expect(result).toBeNull();
  });

  it('should return the only element when the linked list is of size 1', () => {
    const list = new LinkedList();
    list.append(4);
    const result = list.kthFromEnd(1);
    expect(result).toBe(4);
  });

  it('should return the element at the kth position from the end', () => {
    const list = new LinkedList();
    list.append(5);
    list.append(6);
    list.append(7);
    let result = list.kthFromEnd(3);
    expect(result).toBe(5);
    result = list.kthFromEnd(2);
    expect(result).toBe(6);
  });
});
```

* To run the test, go to the directory of the challenge then type npm test on the terminal.