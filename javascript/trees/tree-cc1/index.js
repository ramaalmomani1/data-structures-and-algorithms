'use strict';

// const Node = require('./Node');
const { BinarySearchTree } = require('./BinaryTree');

let newTree = new BinarySearchTree();

newTree.add(100);
newTree.add(110);
newTree.add(90);
newTree.add(80);
newTree.add(95);
newTree.add(109);
newTree.add(120);

console.log(newTree);
console.log(newTree.postOrder());
console.log(newTree.inOrder());
console.log(newTree.preOrder());

console.log(newTree.contains(13));
console.log(newTree.contains(100));
console.log(newTree.contains(120));
console.log(newTree.contains(80));
console.log(newTree.contains(90));


console.log(newTree.findMax());
