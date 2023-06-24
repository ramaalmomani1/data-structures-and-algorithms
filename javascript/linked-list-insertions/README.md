# Linked-list-insertions

----

**_Problem Domain_:**

> * Implementation for Singly Linked Lists, by create Node class that have value and pointer (next) as an arguments, then create another class called LinkedList include a head property. LinkedList class contain different methods, append --> adds a new node with the given value to the end of the list, insert before --> adds a new node with the given new value immediately before the first node that has the value specified and insert after --> adds a new node with the given new value immediately after the first node that has the value specified.

----

**_Algorithm_:**

1. Create a Node class that has properties for the value stored in the Node, and a pointer to the next Node.
2. Create a Linked List class, include a head property within this class.Upon instantiation, an empty Linked List should be created.
3. append method that adds a new node with the given value to the end of the list
4. insert before method that adds a new node with the given new value immediately before the first node that has the value specified
5. insert after method that adds a new node with the given new value immediately after the first node that has the value specified.

----

**_Code_:**

``` javascript

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


```

----

**_Testing code_**

``` javascript
'use strict';

const LinkedList = require('./index');

describe('LinkedList', () => {
  it('Can successfully add a node to the end of the linked list', () => {
    const list = new LinkedList();
    list.append(1);
    expect(list.head.data).toBe(1);
    expect(list.head.next).toBeNull();
  });

  it('Can successfully add multiple nodes to the end of a linked list', () => {
    const list = new LinkedList();
    list.append(1);
    list.append(2);
    list.append(3);
    expect(list.head.data).toBe(1);
    expect(list.head.next.data).toBe(2);
    expect(list.head.next.next.data).toBe(3);
    expect(list.head.next.next.next).toBeNull();
  });

  it('Can successfully insert a node before a node located in the middle of a linked list', () => {
    const list = new LinkedList();
    list.append(1);
    list.append(3);
    list.insertBefore(3, 2);
    expect(list.head.data).toBe(1);
    expect(list.head.next.data).toBe(2);
    expect(list.head.next.next.data).toBe(3);
  });

  it('Can successfully insert a node before the first node of a linked list', () => {
    const list = new LinkedList();
    list.append(2);
    list.insertBefore(2, 1);
    expect(list.head.data).toBe(1);
    expect(list.head.next.data).toBe(2);
  });

  it('Can successfully insert after a node in the middle of the linked list', () => {
    const list = new LinkedList();
    list.append(10);
    list.append(20);
    list.append(30);
    list.insertAfter(20, 25);
    expect(list.head.data).toBe(10);
    expect(list.head.next.data).toBe(20);
    expect(list.head.next.next.data).toBe(25);
    expect(list.head.next.next.next.data).toBe(30);
    expect(list.head.next.next.next.next).toBeNull();
  });

  it('Can successfully insert a node after the last node of the linked list', () => {
    const list = new LinkedList();
    list.append(1);
    list.insertAfter(1, 2);
    expect(list.head.data).toBe(1);
    expect(list.head.next.data).toBe(2);
    expect(list.head.next.next).toBeNull();
  });
});
```

* To run the test, go to the directory of the challenge then type npm test on the terminal.