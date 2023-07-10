'use strict';
// first in last out
// last in first out (LIFO)

const Node = require ('../../node');

class Stack{
  constructor(){
    this.top = null;
    this.length = 0;
  }
  push(value){
    const newNode = new Node(value);

    if(this.isEmpty()) {
      this.top = newNode;
    } else {
      newNode.next = this.top;
      this.top = newNode;
    }

    this.length++;
  }

  pop(){
    if(this.isEmpty()){
      return 'Empty stack';
    } else{
      const temp = this.top;
      this.top = this.top.next;
      temp.next = null;
      this.length--;
      return temp.value;
    }
  }

  peek(){
    if(this.isEmpty()) return null;
    return this.top.value;
  }

  isEmpty(){
    return this.top === null;
  }
}





/////////////////////////////

class PseudoQueue{

  constructor(stack1 = new Stack() ,stack2 = new Stack()){
    this.stack1 = stack1;
    this.stack2 = stack2;
    this.front = null;
  }

  enqueue(value, a) {
    this.stack1.push(value);

    if(a){
      while (this.stack1.length > 0 ) {
        this.stack2.push(this.stack1.pop());
      }
    }
  }

  dequeue(){
    const temp = this.stack2.pop();
    this.front = this.stack2.top;
    return temp;
  }
}


// const s1 = new Stack();
// const s2 = new Stack();

// s1.push(1);
// s1.push(2);
// s1.push(3);

// console.log(s1.top);



// s2.push(s1.pop());
// s2.push(s1.pop());
// s2.push(s1.pop());
// console.log(s2.top);

// this.stack1.push(1);
// this.stack1.push(2);

// console.log(this.stack1);

const pQ = new PseudoQueue();

pQ.enqueue(1);
pQ.enqueue(2);
pQ.enqueue(3);
pQ.enqueue(4, true);




console.log(pQ.stack2.top);
// .stack2.top;
