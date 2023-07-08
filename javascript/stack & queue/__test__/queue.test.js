
'use strict';

const Queue = require('../queue');

describe('Queue testing', () => {

  it('Can successfully create new instance from the Queue', ()=>{
    const queue = new Queue();

    expect(queue instanceof Queue).toBeTruthy();
  });

  it('Can successfully enqueue into a queue', ()=>{
    const queue = new Queue();

    queue.enqueue(1);
    expect(queue.length).toBe(1);
  });

  it('Can successfully enqueue multiple values into a queue', ()=>{
    const queue = new Queue();

    queue.enqueue(1);
    queue.enqueue(2);
    expect(queue.length).toBe(2);
  });

  it('Can successfully dequeue out of a queue the expected value ', ()=>{
    const queue = new Queue();

    queue.enqueue(1);
    queue.enqueue(2);
    expect(queue.dequeue()).toEqual(1);
  });


  it('Can successfully peek into a queue, seeing the expected value', ()=>{
    const queue = new Queue();

    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);
    queue.enqueue(4);
    queue.dequeue();
    expect(queue.peek()).toBe(2);
    queue.dequeue();
    expect(queue.peek()).toBe(3);
    queue.dequeue();
    expect(queue.peek()).toBe(4);
  });

  it('Can successfully empty a queue after multiple dequeues', ()=>{
    const queue = new Queue();

    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);
    queue.enqueue(4);
    queue.dequeue();
    expect(queue.peek()).toBe(2);
    queue.dequeue();
    expect(queue.peek()).toBe(3);
    queue.dequeue();
    expect(queue.peek()).toBe(4);
    queue.dequeue();
    expect(queue.peek()).toBe(null);
    expect(queue.length).toBe(0);
  });

  it('Can successfully instantiate an empty queue', ()=>{
    const queue = new Queue();

    expect(queue instanceof Queue).toBeTruthy();
    expect(queue.peek()).toBe(null);
    expect(queue.length).toBe(0);
  });

  it('Calling dequeue or peek on empty queue raises exception', ()=>{
    const queue = new Queue();
    queue.dequeue();
    expect(queue.dequeue()).toBe('Empty queue');
    expect(queue.peek()).toBe(null);
    expect(queue.length).toBe(0);
  });

});
