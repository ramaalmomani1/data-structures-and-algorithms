'use strict';

function insertionSort(arr) {
  let sorted = [];
  sorted[0] = arr[0];

  for (let i = 1; i < arr.length; i++) {
    insert(sorted, arr[i]);
  }
  return sorted;
}


function insert(sorted, value) {
  let i = 0;

  while (value > sorted[i]) {
    i++;
  }

  while (i < sorted.length) {
    let temp = sorted[i];
    sorted[i] = value;
    value = temp;
    i++;
  }

  sorted.push(value);
}


module.exports = {
  insertionSort
};
