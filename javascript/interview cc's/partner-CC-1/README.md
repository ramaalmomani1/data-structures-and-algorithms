# Interview 01

----

**_Problem Domain_:**

 * write a function to add up the sum of each row in a matrix of arbitrary size, and return an array with the appropriate values.

>Input: Mateix (array of arrays)
Output: Array (sum of each row in a matrix )
----

**_Test cases_:**

1. Positive integers:
* **Input:** [ [1, 2, 3], [3, 5, 7], [1, 7, 10] ]
* **Output:** [6, 15, 18]

2. Negative integers:
* **Input:** [ [0, 1, 5], [-4, 7, 2], [-3, 12, 11] ]
* **Output:** [6, 5, 20]

3. Null:
* **Input:** [ [1, 2, 3], [3, 5, 7], [1, 7, null] ]
* **Output:** [6, 15, 8]

4.Empty array:
* **Input:** [ ]
* **Output:** [ ]

----

**_Visualization_:**

**Input:** [ [1, 2, 3], [3, 5, 7]]
**Visualization:** 1 -(+2)-> 3 -(+3)-> 6 , 3 -(+5)-> 9 -(+9)-> 15
**Final output** [6,15]

----


**_Algorithm_:**

*  Function called matrix that takes an array as input and returns a new array with the sum of each sub-array
 *  Create an empty array called newArr to store the final result.
* Iterate over the elements of the input array using a for loop 
*  Initialize sum variable = 0 for each iteration of the outer loop
* Within the outer loop, iterate over each element in the sub-array arr[i] using another for loop 
* Add the value of arr[i][j] to the sum
* After the inner loop completes, push the sum value to the newArr.
* Repeat the steps for each sub-array in the arr.
* Return the newArr containing the sums of the sub-arrays


----

**_Big O_**

Big O = O(n) --> because it creates a new array to store the sums of each row.

----

**_Code_:**

```javascript
function matrix(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    let sum = 0;
    for (let j = 0; j < arr[i].lenght; j++) {
      sum = sum + arr[i][j]
    }
    newArr.push(sum)
  }
  return newArr
}

```

----

**_Step through:_**

Input Array:[ [1, 2, 3], [3, 5, 7]]

<table border='4'>
        <tbody>
            <tr>
                <td>Current</td>
                <td>1</td>
                <td>2</td>
                <td>3</td>
                <td>3</td>
                <td>5</td>
                <td>7</td>
            </tr>
            <tr>
                <td>Passengers</td>
                <td>1</td>
                <td>3</td>
                <td>6</td>
                <td>3</td>
                <td>8</td>
                <td>15</td>
            </tr>
        </tbody>
    </table>