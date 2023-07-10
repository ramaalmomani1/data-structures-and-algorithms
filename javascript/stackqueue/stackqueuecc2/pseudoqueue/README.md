# Implement a Queue using two Stacks.

----

**_Problem Domain_:**

> * Implement a Queue using two Stacks.

> * Stack: Create a Node class then Stack class that have different methodes. push method: pushing a Node into the stack by assigning it as the new top, pop methode: popping a Node off a stack (removing a Node from the top), peek methode: to inspecting only the top Node of the stack. IsEmpty methode: to check if Stack is empty or not.

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



**_PseudoQueue Algorithm_:**

Create a new class called pseudo queue, without using an existing Queue. Instead, this PseudoQueue class will implement our standard queue interface (the two methods listed below), Internally, utilize 2 Stack instances to create and manage the queue

Methods:
enqueue, inserts a value into the PseudoQueue, using a first-in, first-out approach.
dequeue, extracts a value from the PseudoQueue, using a first-in, first-out approach.

----


**_Test cases & Visualization for enqueue method_:**

1. **Input:** [10]->[15]->[20] 
   **Args:** 5
   **Output:** [5]->[10]->[15]->[20]


2. **Input:** 
   **Args:** 5
   **Output:** [5]

----

**_Test cases & Visualization for dequeue method_:**

1. **Input:** [5]->[10]->[15]->[20]
   **Output:** 20
   **Internal State:** [5]->[10]->[15]


2. **Input:** [5]->[10]->[15]
   **Output:** 15
   **Internal State:** [5]->[10]


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


**_PseudoQueue code_**

``` javascript

class PseudoQueue{

  constructor(stack1 = new Stack() ,stack2 = new Stack()){
    this.stack1 = stack1;
    this.stack2 = stack2;
    this.front = null;
  }

  enqueue(value, a) {
    this.stack1.push(value);

    if(a){
      while (this.stack1.length > 0 ) {
        this.stack2.push(this.stack1.pop());
      }
    }
  }

  dequeue(){
    const temp = this.stack2.pop();
    this.front = this.stack2.top;
    return temp;
  }
}

```

----