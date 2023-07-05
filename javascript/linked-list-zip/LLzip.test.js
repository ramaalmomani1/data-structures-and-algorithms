'use strict';

const {LinkedList1} = require('./index');
const {zipLinkedLists} = require('./index');


describe('testing zipLinkedLists function', () => {

  it('zipped two linked lists together into one linked list', () => {
    const list1 = new LinkedList1();
    const list2 = new LinkedList1();

    list1.append(1);
    list1.append(3);
    list1.append(2);

    list2.append(5);
    list2.append(9);
    list2.append(4);

    const zippedList = zipLinkedLists(list1, list2);

    const expectedValues = [1, 5, 3, 9, 2, 4];

    let current = zippedList.head;
    let i = 0;
    while (current) {
      expect(current.value).toBe(expectedValues[i]);
      current = current.next;
      i++;
    }
  });

  it('zipped two linked lists together into one linked list', () => {
    const list1 = new LinkedList1();
    const list2 = new LinkedList1();

    list1.append(1);
    list1.append(3);

    list2.append(5);
    list2.append(9);
    list2.append(4);

    const zippedList = zipLinkedLists(list1, list2);

    const expectedValues = [1, 5, 3, 9, 4];

    let current = zippedList.head;
    let i = 0;
    while (current) {
      expect(current.value).toBe(expectedValues[i]);
      current = current.next;
      i++;
    }
  });

  it('zipped two linked lists together into one linked list', () => {
    const list1 = new LinkedList1();
    const list2 = new LinkedList1();

    list1.append(1);
    list1.append(3);
    list1.append(2);


    list2.append(5);
    list2.append(9);


    const zippedList = zipLinkedLists(list1, list2);

    const expectedValues = [1, 5, 3, 9, 2];

    let current = zippedList.head;
    let i = 0;
    while (current) {
      expect(current.value).toBe(expectedValues[i]);
      current = current.next;
      i++;
    }
  });

});


