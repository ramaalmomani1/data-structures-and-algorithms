// Method 1

function reverseString1(str) {
  const reversedArray = str.split("").reverse();
  const reversedString = reversedArray.join("");
  return reversedString;
}

console.log(reverseString1("Rama"));

// Method 2

function reverseString2(str) {
  if (str === "" || str.length === 1) {
    return str;
  } else {
    const lastChar = str.slice(-1);
    const strWithoutLastChar = str.slice(0, -1);
    return lastChar + reverseString2(strWithoutLastChar);
  }
}

console.log(reverseString2("Rama"));

// Method 3

function reverseString3(str) {
  const strArray = str.split("");

  let start = 0;
  let end = strArray.length - 1;
  while (start < end) {
    const temp = strArray[start];
    strArray[start] = strArray[end];
    strArray[end] = temp;
    start++;
    end--;
  }

  const reversedString = strArray.join("");
  return reversedString;
}

console.log(reverseString3("Rama"));
