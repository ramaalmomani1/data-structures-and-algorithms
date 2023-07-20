'use strict';
// first in first out (FIFO)
// last in last out

class Node{
  constructor(value){
    this.value = value;
    this.next = null;
  }
}


class Queue {
  constructor() {
    this.front = null;
    this.rear = null;
  }

  enqueue(value) {
    const newNode = new Node(value);

    if (this.isEmpty()) {
      this.front = newNode;
      this.rear = newNode;
    } else {
      this.rear.next = newNode;
      this.rear = newNode;
    }
    this.arr.push(value);
  }

  dequeue() {
    if(this.isEmpty()){
      return 'Empty queue';
    } else {
      const temp = this.front;
      this.front = this.front.next;
      temp.next = null;
      return temp.value;
    }
  }

  peek() {
    if (this.isEmpty()) return null;

    return this.front.value;
  }

  isEmpty() {
    return this.front === null;
  }

  duckDuckGoose(arr, k){
    let start = k -1;
    let newArray = arr;

    while(newArray.length > 1 ) {
      if(start > newArray.length - 1){
        start = 0;
      }
      newArray = newArray.filter( ( item, i ) => i !== start);
      start += k - 1;
    }
    return newArray;
  }}


let newQueue = new Queue();

console.log(['A','B','C','D','E']);
console.log(newQueue.duckDuckGoose(['A','B','C','D','E'],3));
