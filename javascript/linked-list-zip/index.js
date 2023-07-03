'use strict';

class Node {
  constructor(value){
    this.value = value,
    this.next = null;
  }
}

class LinkedList1{
  constructor(){
    this.head = null;
    this.tail = null;
  }

  append(value){
    const newNode = new Node(value);
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }
}


function zipLinkedLists(list1, list2) {
  if (list1.head === null) return list2.head;
  if (list2.head === null) return list1.head;

  const result = new LinkedList1();
  let n1 = list1.head;
  let n2 = list2.head;
  let switching = false;

  while (n1 && n2) {
    if (!switching) {
      result.append(n1.value);
      n1 = n1.next;
    } else {
      result.append(n2.value);
      n2 = n2.next;
    }

    switching = !switching;
  }

  if (n1) {
    result.tail.next = n1;

  } else if (n2) {
    result.tail.next = n2;
  }

  return result;
}

const list1 = new LinkedList1();
const list2 = new LinkedList1();

list1.append(1);
list1.append(3);
list1.append(2);
console.log(list1);


list2.append(5);
list2.append(9);
list2.append(4);
console.log(list2);


const zippedList = zipLinkedLists(list1, list2);

let current = zippedList.head;
while (current) {
  console.log(current.value);
  current = current.next;
}


module.exports ={
  zipLinkedLists,
  LinkedList1
} ;
