'use strict';

const Node = require('./Node');

class BinaryTree{
  constructor(root = null){
    this.root = root;
  }

  // Pre-order: root >> left >> right
  preOrder(){
    let arr = [];
    const traversal = node => {
      arr.push(node.value);
      if(node.left) traversal(node.left);
      if(node.right) traversal(node.right);
    };

    traversal(this.root);
    return arr;
  }

  // Post-order: left >> right >> root
  postOrder() {
    let arr = [];
    const traversal = node => {
      if(node.left) traversal(node.left);
      if(node.right) traversal(node.right);
      arr.push(node.value);
    };

    traversal(this.root);
    return arr;
  }

  // In-order: left >> root >> right
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
}



class BinarySearchTree extends BinaryTree{
  constructor(root){
    super(root);

  }

  add(value){

    let newNode = new Node(value);

    if(this.root === null){
      this.root = newNode;
    } else{

      let currentVal = this.root;
      while(value !== currentVal.value){

        if(value < currentVal.value){
          let newNode = new Node(value);
          if (currentVal.left) currentVal = currentVal.left;
          else {
            currentVal.left = newNode;
            return;
          }
        }

        if(value > currentVal.value){
          let newNode = new Node(value);
          if (currentVal.right) currentVal = currentVal.right;
          else {
            currentVal.right = newNode;
            return;
          }
        }
      }
      return 'This is an existing value!';
    }
  }

  contains(value){

    let currentVal = this.root;
    if (currentVal.value === null) return false;
    else if (currentVal.value === value) return true;

    while (currentVal.value !== value) {

      if (value > currentVal.value) {
        if (currentVal.right) currentVal = currentVal.right;
        else return false;
      }

      if (value < currentVal.value) {
        if (currentVal.left) currentVal = currentVal.left;
        else return false;
      }
    }

    return true;
  }
}




module.exports ={
  BinaryTree,
  BinarySearchTree
};
