'use strict';

const LinkedList = require('./index');

describe('LinkedList', () => {
  it('Can successfully add a node to the end of the linked list', () => {
    const list = new LinkedList();
    list.append(1);
    expect(list.head.data).toBe(1);
    expect(list.head.next).toBeNull();
  });

  it('Can successfully add multiple nodes to the end of a linked list', () => {
    const list = new LinkedList();
    list.append(1);
    list.append(2);
    list.append(3);
    expect(list.head.data).toBe(1);
    expect(list.head.next.data).toBe(2);
    expect(list.head.next.next.data).toBe(3);
    expect(list.head.next.next.next).toBeNull();
  });

  it('Can successfully insert a node before a node located in the middle of a linked list', () => {
    const list = new LinkedList();
    list.append(1);
    list.append(3);
    list.insertBefore(3, 2);
    expect(list.head.data).toBe(1);
    expect(list.head.next.data).toBe(2);
    expect(list.head.next.next.data).toBe(3);
  });

  it('Can successfully insert a node before the first node of a linked list', () => {
    const list = new LinkedList();
    list.append(2);
    list.insertBefore(2, 1);
    expect(list.head.data).toBe(1);
    expect(list.head.next.data).toBe(2);
  });

  it('Can successfully insert after a node in the middle of the linked list', () => {
    const list = new LinkedList();
    list.append(10);
    list.append(20);
    list.append(30);
    list.insertAfter(20, 25);
    expect(list.head.data).toBe(10);
    expect(list.head.next.data).toBe(20);
    expect(list.head.next.next.data).toBe(25);
    expect(list.head.next.next.next.data).toBe(30);
    expect(list.head.next.next.next.next).toBeNull();
  });

  it('Can successfully insert a node after the last node of the linked list', () => {
    const list = new LinkedList();
    list.append(1);
    list.insertAfter(1, 2);
    expect(list.head.data).toBe(1);
    expect(list.head.next.data).toBe(2);
    expect(list.head.next.next).toBeNull();
  });
});
