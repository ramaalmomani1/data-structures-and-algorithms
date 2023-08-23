# Merge Sort

---

### Code:

```javascript
function mergeSort(arr) {
  let n = arr.length;

  if (n > 1) {
    let mid =  Math.floor(n/2);
    let left = arr.slice(0, mid);
    let right = arr.slice(mid, n);

    mergeSort(left);
    mergeSort(right);
    merge(left, right, arr);
  }
  return arr;
}

function merge(left, right, arr) {
  let i = 0;
  let j = 0;
  let k = 0;

  while (i < left.length && j < right.length) {
    if (left[i] <= right[j]) {
      arr[k] = left[i];
      i++;
    } else {
      arr[k] = right[j];
      j++;
    }
    k++;
  }

  if (i === left.length) {
    let rightRemain = right.slice(j);
    arr = arr.splice(k, arr.length - k, ...rightRemain);
  } else {
    let leftRemain = left.slice(i);
    arr = arr.splice(k, arr.length - k, ...leftRemain);
  }
}

module.exports = {
  mergeSort,
};
```

---

### Testing:

```javascript
const { mergeSort } = require("./index");

describe("Merge Sort", () => {
  it("Sort an array of numbers", () => {
    expect(mergeSort([8, 4, 23, 42, 16, 15])).toEqual([4, 8, 15, 16, 23, 42]);
  });
});
```

---

### Tracing the pseudoCode

1. Input array for mergeSort function [8, 4, 23, 42, 16, 15]

check if the length of the array (6) > than 1 --> (true )so divide it into left and right arrays
med = 6/2 = 3
left = [8, 4, 23]
right = [42, 16, 15]

---

2. Recursive mergeSort(left) -->mergeSort([8, 4, 23])
   check if the length of the array (3) > than 1 --> (true ) so divide it into left and right arrays
   med = 3/2 = 1 (not 1.5 using Math.floor)
   left of left: [8]
   right of left: [4, 23]

---

3. Recursive mergeSort(left) -->mergeSort([8])
   check if the length of the array (1) > than 1 --> (false)

---

4. Recursive mergeSort(right) -->mergeSort([4, 23])
   check if the length of the array (2) > than 1 --> (true ) so divide it into left and right arrays
   med = 2/2 = 1
   left : [4]
   right: [23]

---

5. Merge(left, right, arr) --> ([4], [23], [4, 23] ) to the Merge function

   **5.1.** i, j, & k = 0

   **5.2.** (left[0] = 4) <= (right[0] = 23) --> (true)

   arr[0] = [4]
   i++ --> i=1
   k++ --> k=1

   **5.3.** (left[0] = undefined ) <= (right[0] = 23) --> (false) go to else

   **5.4.** arr[1] = [23]
   j++ --> j=1
   k++ --> k=2

   **5.5** (i === left.length) --> (true)
   remainRight = right.slice(1) --> output empty array [ ]

   arr = arr.splice(k , arr.length-k , ...remainRight) --> (2 , (2-2 = 0), ...[ ])

   2: Start replacing elements from index 2
   2 - 2: Replace 0 elements
   ...[]: No new elements to add.
   remainRight is empty, arr remains [4, 23].

---

6. Merge(left, right, arr) --> ([8], [4,23], [8,4, 23] ) to the Merge function

   **6.1.** i, j, & k = 0
   **6.2.** (left[0] = 8) <= (right[0] = 4) --> (false)

   arr[k=0] = right[j=0] which is 4
   j++ --> j=1
   k++ --> k=1

   **6.3** left[i=0] which is 8 <= right[j =1] which is 23 --> (true)

   arr[k =1] = left[i=0] which is 8
   i++ --> i=1
   k++ --> k=2

   **6.5** (i === left.length) --> (true)
   remainRight = right.slice(1) --> output [23]

   arr = arr.splice(k , arr.length-k , ...remainRight) --> (2 , (3-2 = 1), ...[ ])

   2: Start replacing elements from index 2
   3 - 2: Replace 1 element
   ...[23]: Add the elements from remainRight at index 2 in arr
   output array becomes [4, 8, 23]

---

### Now to the right 

----

 1. Recursive mergeSort(right) -->mergeSort([42, 16, 15])
    check if the length of the array (3) > than 1 --> (true ) so divide it into left and right arrays
   med = 3/2 = 1 (not 1.5 using Math.floor)
   left of left: [42]
   right of left: [16,15]

   ----
   
2. Recursive mergeSort(left) -->mergeSort([42]) 
check if the length of the array (1) > than 1 --> (false)

----

3. Recursive mergeSort(right) -->mergeSort( [16,15]) 
check if the length of the array (2) > than 1 --> (true ) so divide it into left and right arrays
med = 2/2 = 1
left : [16]
right: [15]

----

4. Merge(left, right, arr) --> ([16], [15], [16,15] ) to the Merge function

   **4.1.** i, j, & k = 0

   **4.2.** (left[0] = 16) <= (right[0] = 15) --> (false)

   arr[0] = [15]
   j++ --> j=1
   k++ --> k=1

   **4.3.** (left[0] = 16) <= (right[1] = undefined) --> (false) go to else

   **4.4.** arr[1] = [16]
   i++ --> i=1
   k++ --> k=2

   **4.5** We utilize the arr.splice(k, arr.length - k, ...remainRight) operation to eliminate any elements in the 'arr' array starting from index k =2 , and we substitute them with the elements present in the remainRight array = [15], output arr =  [15, 16].

   ----

   5. Merge(left, right, arr) --> ([42],[15,16], [42,16,15] ) to the Merge function

      **5.1.** i, j, & k = 0

      **5.2.** (left[0] = 42) <= (right[0] = 15) --> (false)
      arr[0] = [15]
      j++ --> j=1
      k++ --> k=1

      **5.3.** (left[0] = 42) <= (right[1] = 16) --> (false) go to else
  
      **5.4.** arr[1] = [16]
     j++ --> j=2
     k++ --> k=2

       **5.5**  (i === left.length) --> (true):
            remainRight = right.slice(2) --> [15].

       arr.splice(k , arr.length-k , ...remainRight) -->  (2 , (3-2 = 1), ...[15]):
       Start replacing elements from index 2
      Replace 1 element since 3 - 2 = 1
      Replace the element at index 2 with the value 15 the updated arr as [15, 16, 42]

  ----

6. Merge(left, right, arr) -->([4, 8, 23], [15, 16, 42], [8, 4, 23, 42, 16, 15]) to the Merge function

    **6.1.** i, j, & k = 0

      **6.2.** (left[0] = 4) <= (right[0] = 15) --> (true)
      arr[0] = [4]
      i++ --> i=1
      k++ --> k=1

      **6.3.** (left[1] = 8) <= (right[0] = 15) --> (true) 
     arr[1] = [8]
      i++ --> i=2
      k++ --> k=2 


    **6.4.** (left[2] = 23) <= (right[0] = 15) --> (false) 
     arr[2] = [15]
      j++ --> j=1
      k++ --> k=3


    **6.5.** (left[2] = 23) <= (right[1] = 16) --> (false) 
     arr[3] = [16]
      j++ --> j=2
      k++ --> k=4


    **6.6.** (left[2] = 23) <= (right[2] = 42) --> (true) 
     arr[4] = [23]
      i++ --> i=3
      k++ --> k=5

    **6.7.** (left[3] = undefined) <= (right[2] = 42) --> (false) 
     arr[5] = [42]
      j++ --> j=3
      k++ --> k=6
      

   **6.8** left has no remaining elements, but right has remaining elements [15, 16, 42]. We slice right from index j =3 so remainRight = [15, 16, 42]. arr.splice(k, arr.length - k, ...remainRight) to remove any remaining elements in arr starting from index k = 5 and replace them with the elements in remainRight. so arr becomes [4, 8, 15, 16, 42].


---

### Big O

- Time Complexity: O(n log n)

- Space Complexity: O(n)
