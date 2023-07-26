# tree-fizz-buzz


**_Problem Domain_:**

Write a function called fizz buzz tree

Determine whether or not the value of each node is divisible by 3, 5 or both. Create a new tree with the same structure as the original, but the values modified as follows:

If the value is divisible by 3, replace the value with “Fizz”
If the value is divisible by 5, replace the value with “Buzz”
If the value is divisible by 3 and 5, replace the value with “FizzBuzz”
If the value is not divisible by 3 or 5, simply turn the number into a String.



----

**_Algorithm_:**

K-ary tree data structure with classes Node and K_ary.

1. The Node class represents a single node with a value and an array of children. 

2. The K_ary class initializes an empty tree with a root property. 
 * append() method to add nodes to the tree. 
*  fizzBuzzTree() method takes a tree as input and transforms its nodes using the fizz-buzz logic. It replaces node values divisible by 3 with "fizz," by 5 with "buzz," and by both with "fizzbuzz." The method processes nodes in a breadth-first manner using a queue. 


----

**_Test cases & Visualization_:**

1. If the value is divisible by 3, replace the value with “Fizz”
2. If the value is divisible by 5, replace the value with “Buzz”
3. If the value is divisible by 3 and 5, replace the value with “FizzBuzz”
4. If the value is not divisible by 3 or 5, simply turn the number into a String.


----

**Code:**

```javascript
'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.children = [];
  }
}

class K_ary {
  constructor() {
    this.root = null;
  }

  append(value) {
    let newNode = new Node(value);
    if (!this.root) {
      this.root = newNode;
    } else {
      this.root.children.push(newNode);
    }
  }

  fizzBuzzTree(tree) {
    let queue = [];
    queue.push(tree.root);

    while (queue.length > 0) {
      let remove = queue.shift();
      remove.value % 3 === 0 && remove.value % 5 === 0 ? remove.value = 'fizzbuzz': remove.value % 3 === 0 ? remove.value = 'fizz'
        : remove.value % 5 === 0 ? remove.value = 'buzz' : remove.value = `${remove.value}`;

      if (remove.children.length > 0) {
        queue.push(...remove.children);
      }}
    return tree;
  }
}

let test1 = new K_ary();
let test2 = new K_ary();

test1.append(10);
test1.append(20);
test1.append(30);
test1.append(40);
test1.append(13);
test2.fizzBuzzTree(test1);

console.log(test2.fizzBuzzTree(test1));

 ```