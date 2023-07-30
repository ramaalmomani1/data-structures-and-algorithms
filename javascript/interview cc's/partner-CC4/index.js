'use strict';

class Node{
  constructor(value){
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree{
  constructor(root = null){
    this.root = root;
  }

  inOrder() {
    let arr = [];
    const traversal = node => {
      if(node.left) traversal(node.left);
      arr.push(node.value);
      if(node.right) traversal(node.right);
    };

    traversal(this.root);
    return arr;
  }

  oddSum(){
    const inOrder = this.inOrder();

    let sum = 0;
    for(let i=0; i < inOrder.length; i++){
      if (inOrder[i] % 2 !== 0){
        sum += inOrder[i];
      }
    }
    return sum;
  }
}



let one = new Node(1);
let two = new Node(2);
let three = new Node(3);
let four = new Node(4);
let five = new Node(5);
let six = new Node(6);
let seven = new Node(7);
let eight = new Node(8);
let nine = new Node(9);

one.left = two;
one.right = three;
two.left = six;
three.left = four;
three.right = five;
six.right = seven;
seven.left = eight;
seven.right = nine;


const tree = new BinaryTree(one);

console.log('inOrder:', tree.inOrder());
console.log(tree.oddSum());
