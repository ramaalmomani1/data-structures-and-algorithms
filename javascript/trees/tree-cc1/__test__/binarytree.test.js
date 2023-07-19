'use strict';

const Node = require('../Node');
const {BinaryTree, BinarySearchTree} = require('../BinaryTree');

describe('Binary tree testing', () => {
  let noRoottree = new BinaryTree();

  it('Can successfully instantiate an empty tree', () => {
    expect(noRoottree.root).toBeNull();
  });

  let node = new Node(100);
  let binaryTree = new BinaryTree(node);
  it('Can successfully instantiate a tree with a single root node', () => {
    expect(binaryTree.root.value).toEqual(100);
  });
});


describe('Binary Search tree testing', () => {
  let newTree = new BinarySearchTree();

  newTree.add(100);
  newTree.add(110);
  newTree.add(90);
  newTree.add(80);
  newTree.add(95);
  newTree.add(109);
  newTree.add(120);

  it('For a Binary Search Tree, can successfully add a left child and right child properly to a node' ,() => {

    expect(newTree.root.value).toEqual(100);
    expect(newTree.root.left.value).toEqual(90);
    expect(newTree.root.right.value).toEqual(110);
    expect(newTree.add(100)).toEqual('This is an existing value!');
  });

  it('false for the contains method, given an existing or non-existing node value' ,() => {

    expect(newTree.contains(13)).toEqual(false);
    expect(newTree.contains(100)).toEqual(true);
    expect(newTree.contains(80)).toEqual(true);
    expect(newTree.contains(90)).toEqual(true);
  });

  it('Find the maximum value stored in the tree' ,() => {

    expect(newTree.findMax()).toEqual(120);

  });

  it('Can successfully return a collection from a post-order traversal', () => {
    expect(newTree.postOrder()).toEqual([80, 95, 90, 109, 120, 110, 100]);
  });

  it('Can successfully return a collection from an in-order traversal', () => {
    expect(newTree.inOrder()).toEqual([80, 90, 95, 100, 109, 110, 120]);
  });

  it('Can successfully return a collection from a pre-order traversal', () => {
    expect(newTree.preOrder()).toEqual([100, 90, 80, 95, 110, 109, 120]);
  });
});
