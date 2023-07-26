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
