
let {insertionSort} = require('./index');

describe('Sorted Insertion', () => {


  it('Returns a sorted array from the input array', () => {

    expect(insertionSort([8,4,23,42,16,15])).toEqual([ 4, 8, 15, 16, 23, 42 ]);
  });
});
