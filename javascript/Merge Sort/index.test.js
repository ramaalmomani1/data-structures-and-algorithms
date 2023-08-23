const {mergeSort} = require('./index');

describe('Merge Sort', () => {

  it('Sort an array of numbers', () => {
    expect(mergeSort([8, 4, 23, 42, 16, 15])).toEqual([4, 8, 15, 16, 23, 42]);
  });

});
