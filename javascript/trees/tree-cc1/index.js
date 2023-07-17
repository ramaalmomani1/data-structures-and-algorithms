'use strict';

const Node = require('./Node');
const { BinaryTree, BinarySearchTree } = require('./BinaryTree');


let node1 = new Node(100);
let node2 = new Node(110);
let node3 = new Node(90);
// let node = new Node(100);
// let node = new Node(100);

node1.left = node3;
node1.right = node2;


let BT = new BinaryTree(node1);

console.log('before adding new value',BT.preOrder());




// let nodeAddSBT = new Node(120); //انسووهااااااااااا
let testSearchBT = new BinarySearchTree(BT);
console.log('jjjjjjj',testSearchBT);
console.log(testSearchBT.add(80));

// console.log(testSearchBT.contains(100));


console.log('after adding new value',BT.preOrder());

