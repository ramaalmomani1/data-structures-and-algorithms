# Stack & Queue

----

**_Problem Domain_:**

> * Using a Linked List as the underlying data storage mechanism, implement both a Stack and a Queue.

 * Stack: Create a Node class then Stack class that have different methodes. push method: pushing a Node into the stack by assigning it as the new top, pop methode: popping a Node off a stack (removing a Node from the top), peek methode: to inspecting only the top Node of the stack. IsEmpty methode: to check if Stack is empty or not.

* Queue: Create a Node class then Queue class that have different methodes. Enqueue method: add an item to the queue, Dequeue method: remove an item from the queue, Peek method: inspecting only the front Node of the queue, IsEmpty methode: to check if Queue is empty or not.

----

**_Stack Algorithm_:**

1. Node: Create a Node class that has properties for the value stored in the Node, and a pointer to the next node.
2. Create a Stack class that has a top property. It creates an empty Stack when instantiated.
3. This object should be aware of a default empty value assigned to top when the stack is created.
* The class should contain the following methods:

> push: arguments: value, adds a new node with that value to the top of the stack with an O(1) Time performance.

>pop: arguments: none. Returns: the value from node from the top of the stack, Removes the node from the top of the stack.
Should raise exception when called on empty stack

>peek: arguments: none. Returns: Value of the node located at the top of the stack.
Should raise exception when called on empty stack

>is empty: arguments: none. Returns: Boolean indicating whether or not the stack is empty.
----

**_Queue Algorithm_:**

1. Node: Create a Node class that has properties for the value stored in the Node, and a pointer to the next node.
2. Create a Queue class that has a front property. It creates an empty Queue when instantiated.
This object should be aware of a default empty value assigned to front when the queue is created.

* The class should contain the following methods:

> enqueue: arguments: value, adds a new node with that value to the back of the queue with an O(1) Time performance.


> dequeue: arguments: none
Returns: the value from node from the front of the queue
Removes the node from the front of the queue
Should raise exception when called on empty queue



>peek: arguments: none
Returns: Value of the node located at the front of the queue
Should raise exception when called on empty stack

>is empty: arguments: none
Returns: Boolean indicating whether or not the queue is empty
----


**_Node class Code_:**

``` javascript
'use strict';

class Node{
  constructor(value){
    this.value = value;
    this.next = null;
  }
}

module.exports = Node;
```

----

**_Stack code_**

``` javascript
'use strict';
// first in last out
// last in first out (LIFO)

const Node = require ('./node');

class Stack{
  constructor(){
    this.top = null;
    this.length = 0;
  }
  push(value){
    const newNode = new Node(value);

    if(this.isEmpty()) {
      this.top = newNode;
    } else {
      newNode.next = this.top;
      this.top = newNode;
    }

    this.length++;
  }

  pop(){
    if(this.isEmpty()){
      return 'Empty stack';
    } else{
      const temp = this.top;
      this.top = this.top.next;
      temp.next = null;
      this.length--;
      return temp.value;
    }
  }

  peek(){
    if(this.isEmpty()) return null;
    return this.top.value;
  }

  isEmpty(){
    return this.top === null;
  }
}

module.exports = Stack;
```

**_Queue code_**

``` javascript
'use strict';
// first in first out (FIFO)
// last in last out

const Node = require ('./node');

class Queue {
  constructor() {
    this.front = null;
    this.rear = null;
    this.length = 0;
  }

  enqueue(value) {
    const newNode = new Node(value);

    if (this.isEmpty()) {
      this.front = newNode;
      this.rear = newNode;
    } else {
      this.rear.next = newNode;
      this.rear = newNode;
    }
    console.log(newNode);
    this.length++;
  }

  dequeue() {
    if(this.isEmpty()){
      return 'Empty queue';
    } else {
      const temp = this.front;
      this.front = this.front.next;
      temp.next = null;
      this.length--;
      return temp.value;
    }
  }

  peek() {
    if (this.isEmpty()) return null;

    return this.front.value;
  }

  isEmpty() {
    return this.front === null;
  }
}

module.exports = Queue;

```

----

**For the testing:**
* test cases:

1. Can successfully push onto a stack
2. Can successfully push multiple values onto a stack
3. Can successfully pop off the stack
4. Can successfully empty a stack after multiple pops
5. Can successfully peek the next item on the stack
6. Can successfully instantiate an empty stack
7. Calling pop or peek on empty stack raises exception
8. Can successfully enqueue into a queue
9. Can successfully enqueue multiple values into a queue
10. Can successfully dequeue out of a queue the expected value
11. Can successfully peek into a queue, seeing the expected value
12. Can successfully empty a queue after multiple dequeues
13. Can successfully instantiate an empty queue
14. Calling dequeue or peek on empty queue raises exception

All the 14 test >> passed 

* To run the test, go to the directory of the challenge then type npm test on the terminal.