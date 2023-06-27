'use strict';

const LinkedList = require('./index');


describe('kthFromEnd', () => {
  it('should return null when k is greater than the length of the list', () => {
    const list = new LinkedList();
    list.append(1);
    list.append(2);
    list.append(3);
    const result = list.kthFromEnd(4);
    expect(result).toBeNull();
  });

  it('should return the first element when k and the length of the list are the same', () => {
    const list = new LinkedList();
    list.append(1);
    list.append(2);
    list.append(3);
    const result = list.kthFromEnd(3);
    expect(result).toBe(1);
  });

  it('should return null when k is not a positive integer', () => {
    const list = new LinkedList();
    list.append(1);
    list.append(2);
    list.append(3);
    let result = list.kthFromEnd(0);
    expect(result).toBeNull();
    result = list.kthFromEnd(-2);
    expect(result).toBeNull();
  });

  it('should return the only element when the linked list is of size 1', () => {
    const list = new LinkedList();
    list.append(4);
    const result = list.kthFromEnd(1);
    expect(result).toBe(4);
  });

  it('should return the element at the kth position from the end', () => {
    const list = new LinkedList();
    list.append(5);
    list.append(6);
    list.append(7);
    let result = list.kthFromEnd(3);
    expect(result).toBe(5);
    result = list.kthFromEnd(2);
    expect(result).toBe(6);
  });
});
