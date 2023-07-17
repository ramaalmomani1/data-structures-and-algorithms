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
  constructor(){
    super();

  }

  add(value){

    let newNode = new Node(value);

    if(this.root === null){
      this.root = newNode;
    } else{

      // let current = this.root;
      while(value !== this.root.value){

        if(value < this.root.value){
          if (this.root.left) this.root = this.root.left;
          else {
            this.root.left = newNode;
            return;
          }
        }

        if(value > this.root.value){
          if (this.root.right) this.root = this.root.right;
          else {
            this.root.right = newNode;
            return;
          }
        }
      }
      return 'This is an exesting value!';
    }
  }
}



// contains(value){
//   let newNode = new Node(value);
//   if(this.root === null) return false;

//   while(this.root !== null)
//     if(this.root.value === newNode) return true;
//     // else return false;
// }




module.exports ={
  BinaryTree,
  BinarySearchTree
};
