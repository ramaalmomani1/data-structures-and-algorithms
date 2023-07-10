'use strict';

const Stack = require('../stack');

describe('Stack testing', () => {

  it('Creates a new stack', () => {
    const stack = new Stack();
    expect(stack instanceof Stack).toBeTruthy();
  });

  it('Can successfully push onto a stack', () => {
    const stack = new Stack();
    stack.push(1);
    expect(stack.peek()).toBe(1);
  });

  it('Can successfully push multiple values onto a stack', () => {
    const stack = new Stack();
    stack.push(1);
    stack.push(2);
    stack.push(3);
    expect(stack.peek()).toBe(3);
  });

  it('Can successfully pop off the stack', () => {
    const stack = new Stack();
    stack.push(1);
    stack.push(2);
    stack.push(3);
    stack.push(4);
    stack.pop();
    expect(stack.top.value).toEqual(3);
  });

  it('Can successfully empty a stack after multiple pops', () => {
    const stack = new Stack();
    stack.push(10);
    stack.push(20);
    stack.push(30);
    stack.pop();
    stack.pop();
    expect(stack.isEmpty()).toBe(false);
    expect(stack.top.value).toEqual(10);
  });

  it('Can successfully peek the next item on the stack', () => {
    const stack = new Stack();
    stack.push(10);
    stack.push(20);
    stack.push(30);
    stack.push(40);
    expect(stack.peek()).toBe(40);
    stack.pop();
    expect(stack.peek()).toBe(30);
  });

  it('Can successfully instantiate an empty stack', () => {
    const stack = new Stack();
    expect(stack instanceof Stack).toBeTruthy();
    expect(stack.isEmpty()).toBe(true);
  });

  it('Calling pop or peek on empty stack raises exception', () => {
    const stack = new Stack();
    expect(stack.isEmpty()).toBe(true);
    expect(stack.pop()).toEqual('Empty stack');
    expect(stack.peek()).toBe(null);
  });
});
