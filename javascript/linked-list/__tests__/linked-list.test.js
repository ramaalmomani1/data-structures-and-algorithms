'use strict';

// Require our linked list implementation
const LinkedList = require('../index');

// describe('Linked List', () => {
//   it('works', () => {
//     expect(true).toBeTruthy();
//   });
// });


describe('LinkedList', () => {
  it('Can successfully instantiate an empty linked list', () => {
    const list = new LinkedList();
    expect(list.head).toBeNull();
  });
  it('Can properly insert into the linked list', () => {
    const list = new LinkedList();
    list.insert('a');
    expect(list.head.value).toBe('a');
    expect(list.head.next).toBeNull();
  });
  it('The head property will properly point to the first node in the linked list', () => {
    const list = new LinkedList();
    list.insert('a');
    list.insert('b');
    list.insert('c');
    expect(list.head.value).toBe('c');
    expect(list.head.next.value).toBe('b');
  });
  it('Can properly insert multiple nodes into the linked list', () => {
    const list = new LinkedList();
    list.insert('a');
    list.insert('b');
    list.insert('c');
    expect(list.head.value).toBe('c');
    expect(list.head.next.value).toBe('b');
    expect(list.head.next.next.value).toBe('a');
  });
  it('Will return true when finding a value within the linked list that exists', () => {
    const list = new LinkedList();
    list.insert('a');
    list.insert('b');
    list.insert('c');
    expect(list.includes('a')).toBe(true);
  });
  test('Will return false when searching for a value in the linked list that does not exist', () => {
    const list = new LinkedList();
    list.insert('a');
    list.insert('b');
    list.insert('c');
    expect(list.includes('f')).toBe(false);
  });
  test('Can properly return a collection of all the values that exist in the linked list', () => {
    const list = new LinkedList();
    list.insert('a');
    list.insert('b');
    list.insert('c');
    expect(list.toString()).toBe('{ c } -> { b } -> { a } -> NULL');
  });
});
