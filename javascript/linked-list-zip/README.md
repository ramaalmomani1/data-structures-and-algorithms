# Linked-list-zip

----

**_Problem Domain_:**

> * Implementation for Singly Linked Lists, by create Node class that have value and pointer (next) as an arguments, then create another class called LinkedList include a head property. LinkedList class contain different methods, append --> adds a new node with the given value to the end of the list and kthFromEnd methode --> argument: a number, k, as a parameter.Return the node’s value that is k places from the tail of the linked list. Function called zip lists takes two Arguments(2 linked lists) and return a new Linked List, the output will be a zipped two linked lists together into one so that the nodes alternate between the two lists.

----

**_Algorithm_:**

1. Create a Node class that has properties for the value stored in the Node, and a pointer to the next Node.
2. Create a Linked List class, include a head property within this class.Upon instantiation, an empty Linked List should be created.
3. append method that adds a new node with the given value to the end of the list
4. Function called zipLinkedLists takes two Arguments(2 linked lists) and return a new Linked List, the output will be a zipped two linked lists together into one so that the nodes alternate between the two lists.

----

**_Code_:**

``` javascript
'use strict';

class Node {
  constructor(value){
    this.value = value,
    this.next = null;
  }
}

class LinkedList1{
  constructor(){
    this.head = null;
    this.tail = null;
  }

  append(value){
    const newNode = new Node(value);
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }
}


function zipLinkedLists(list1, list2) {
  if (!list1.head) return list2.head;
  if (!list2.head) return list1.head;

  const result = new LinkedList1();
  let n1 = list1.head;
  let n2 = list2.head;
  let switching = false;

  while (n1 && n2) {
    if (!switching) {
      result.append(n1.value);
      n1 = n1.next;
    } else {
      result.append(n2.value);
      n2 = n2.next;
    }

    switching = !switching;
  }

  if (n1) {
    result.tail.next = n1;

  } else if (n2) {
    result.tail.next = n2;
  }

  return result;
}

const list1 = new LinkedList1();
const list2 = new LinkedList1();

list1.append(1);
list1.append(3);
list1.append(2);
console.log(list1);


list2.append(5);
list2.append(9);
list2.append(4);
console.log(list2);


const zippedList = zipLinkedLists(list1, list2);

let current = zippedList.head;
while (current) {
  console.log(current.value);
  current = current.next;
}
```

----

**_Testing code_**

``` javascript

'use strict';

const {LinkedList1} = require('./index');
const {zipLinkedLists} = require('./index');


describe('testing zipLinkedLists function', () => {

  it('zipped two linked lists together into one linked list', () => {
    const list1 = new LinkedList1();
    const list2 = new LinkedList1();

    list1.append(1);
    list1.append(3);
    list1.append(2);

    list2.append(5);
    list2.append(9);
    list2.append(4);

    const zippedList = zipLinkedLists(list1, list2);

    const expectedValues = [1, 5, 3, 9, 2, 4];

    let current = zippedList.head;
    let i = 0;
    while (current) {
      expect(current.value).toBe(expectedValues[i]);
      current = current.next;
      i++;
    }
  });

  it('zipped two linked lists together into one linked list', () => {
    const list1 = new LinkedList1();
    const list2 = new LinkedList1();

    list1.append(1);
    list1.append(3);

    list2.append(5);
    list2.append(9);
    list2.append(4);

    const zippedList = zipLinkedLists(list1, list2);

    const expectedValues = [1, 5, 3, 9, 4];

    let current = zippedList.head;
    let i = 0;
    while (current) {
      expect(current.value).toBe(expectedValues[i]);
      current = current.next;
      i++;
    }
  });

  it('zipped two linked lists together into one linked list', () => {
    const list1 = new LinkedList1();
    const list2 = new LinkedList1();

    list1.append(1);
    list1.append(3);
    list1.append(2);


    list2.append(5);
    list2.append(9);


    const zippedList = zipLinkedLists(list1, list2);

    const expectedValues = [1, 5, 3, 9, 2];

    let current = zippedList.head;
    let i = 0;
    while (current) {
      expect(current.value).toBe(expectedValues[i]);
      current = current.next;
      i++;
    }
  });

});
```

* To run the test, go to the directory of the challenge then type npm test on the terminal.