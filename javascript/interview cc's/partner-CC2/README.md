# Interview 02

----

**_Problem Domain_:**

 *  write a function to reverse a Singly Linked List.Avoid utilizing any of the built-in methods available.

>Input: Linked List
Output: reversed Linked List
----

**_Test cases & Visualization_:**

1. Number:
* **Input:** head->{3}->{2}->{1}
* **Output:** head->{1}->{2}->{3}

2. String:
* **Input:** head->{'a'}->{'b'}->{'c'}

* **Output:** head->{'c'}->{'b'}->{'a'}

----

**_Algorithm_:**

1. Checking if the linked list is empty. If it is, or if it has only one node, there's nothing to reverse.
2. Start at the beginning of the list and keep track of the previous node (before).
3. Then go through each node in the list: reverse the link of the current node to point to the previous node instead.
4. Update before to be the current node then Move to the next node.
5. After going through all the nodes, the last node visited becomes the new head of the reversed list.
6. Return the reversed list.
----

**_Big O_**

* Big O = O(n) --> time complexity

----
**_reverseLinkedList method Code_:**

```javascript

  reversedList() {
    if (this.head === null || this.head.next === null) {
      return;
    }
    let prevNode = null;
    let currentNode = this.head;
    let nextNode = this.head.next;
    while (currentNode !== null) {
      nextNode = currentNode.next;
      currentNode.next = prevNode;
      prevNode = currentNode;
      currentNode = nextNode;
    }
    this.head = prevNode;
  }
```

**_Code_:**

``` javascript
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}
class linkedList {
  constructor() {
    this.head = null;
  }
  addFromStart(data) {
    let newNode = new Node(data);
    newNode.next = this.head;
    this.head = newNode;
  }
  addToEnd(data) {
    if (this.head === null) {
      this.addFromStart(data);
      return;
    }
    let newNode = new Node(data);
    let currentNode = this.head;
    while (currentNode.next !== null) {
      currentNode = currentNode.next;
    }
    currentNode.next = newNode;
  }
  reversedList() {
    if (this.head === null || this.head.next === null) {
      return;
    }
    let prevNode = null;
    let currentNode = this.head;
    let nextNode = this.head.next;
    while (currentNode !== null) {
      nextNode = currentNode.next;
      currentNode.next = prevNode;
      prevNode = currentNode;
      currentNode = nextNode;
    }
    this.head = prevNode;
  }
  print() {
    let currentNode = this.head;
    let finalShape = '';
    while (currentNode !== null) {
      finalShape += currentNode.data + ' ---> ';
      currentNode = currentNode.next;
    }
    console.log(finalShape + ' null')
  }
}
let l1 = new linkedList();
l1.addToEnd(20);
l1.addToEnd(30);
l1.addToEnd(40);
l1.addToEnd(50);
l1.addToEnd(60);
l1.addToEnd(100);
console.log("Before reverse:");
l1.print();
console.log("After reverse:")
l1.reversedList()
l1.print()

```

----

**_Step through:_**

* **Input:** head->{3}->{2}->{1}

<table border='4'>
        <tbody>
            <tr>
                <td>Current</td>
                <td>3</td>
                <td>2</td>
                <td>1</td>
            </tr>
            <tr>
                <td>Passengers</td>
                <td>1</td>
                <td>2</td>
                <td>3</td>
            </tr>
        </tbody>
    </table>