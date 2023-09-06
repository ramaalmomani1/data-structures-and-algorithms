'use strict';

const { BinarySearchTree } = require('./BinaryTree');

let newTree1 = new BinarySearchTree();
let newTree2 = new BinarySearchTree();


newTree1.add(150);
newTree1.add(100);
newTree1.add(250);
newTree1.add(75);
newTree1.add(160);
newTree1.add(200);
newTree1.add(350);
newTree1.add(125);
newTree1.add(175);
newTree1.add(300);
newTree1.add(500);

console.log(newTree1);
console.log(newTree1.postOrder());


newTree2.add(42);
newTree2.add(100);
newTree2.add(600);
newTree2.add(15);
newTree2.add(160);
newTree2.add(125);
newTree2.add(175);
newTree2.add(200);
newTree2.add(350);
newTree2.add(4);
newTree2.add(500);

console.log(newTree2);
console.log(newTree2.postOrder());





// console.log(newTree1.inOrder());
// console.log(newTree1.preOrder());

// console.log(newTree1.contains(13));
// console.log(newTree1.contains(100));
// console.log(newTree1.contains(120));
// console.log(newTree1.contains(80));
// console.log(newTree1.contains(90));


// console.log(newTree1.findMax());
