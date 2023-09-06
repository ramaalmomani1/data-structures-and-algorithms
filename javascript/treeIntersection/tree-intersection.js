const Hashmap = require('../hashtable/Hash.js');
const { BinarySearchTree } = require('./BinaryTree');

// Create the binary search trees as before
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

newTree2.add(42);
newTree2.add(100);
newTree2.add(15);
newTree2.add(160);
newTree2.add(125);
newTree2.add(175);
newTree2.add(200);
newTree2.add(350);
newTree2.add(4);
newTree2.add(500);

function tree_intersection(tree1, tree2) {
  const hashmap = new Hashmap(1024);

  const tree1Values = tree1.inOrder();
  for (const value of tree1Values) {
    hashmap.set(value.toString(), true);
  }

  const commonValues = new Set();

  const tree2Values = tree2.inOrder();
  for (const value of tree2Values) {
    if (hashmap.has(value.toString())) {
      commonValues.add(value);
    }
  }

  return commonValues;
}

module.exports = tree_intersection;

const commonValues = tree_intersection(newTree1, newTree2);
console.log([...commonValues]);
