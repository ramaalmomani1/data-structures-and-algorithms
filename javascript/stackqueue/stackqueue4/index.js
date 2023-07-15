'use strict';

function checkBrackets(str) {

  let regex = /[^A-Za-z0-9!@#$%^&*\s]/ig;
  let arr = str.match(regex);

  let counter1 = 0;
  let counter2 = 0;
  let counter3 = 0;
  let counter4 = 0;
  let counter5 = 0;
  let counter6 = 0;

  arr.forEach(element => {
    if (element === '(') counter1++;
    if (element === ')') counter2++;
    if (element === '[') counter3++;
    if (element === ']') counter4++;
    if (element === '{') counter5++;
    if (element === '}') counter6++;
  });

  if (counter1 !== counter2) return false;
  if (counter3 !== counter4) return false;
  if (counter5 !== counter6) return false;
  if (arr[0] !== '[' && arr[0] !== '{' && arr[0] !== '(' ) return false;
  if (arr[arr.length-1] !== ']' && arr[arr.length-1] !== '}' && arr[arr.length-1] !== ')') return false;

  let accepted = [ '[[' , '((' , '{{' , '))' , ']]' , '}}' , '()' , '[]' , '{}' , ')(' , '}{' , '][' ,  ')[' , '){' , '}(' , '}[' , '](' , ']{' ];
  for (let i = 0 ; i <arr.length; i++ ) {
    if(arr[i]+arr[i+1] === arr[i]+'undefined') break;
    let possiblity = arr[i] + arr[i+1];
    if (!accepted.includes(possiblity)) return false;
  }
  return true;
}
console.log(checkBrackets('{(})'));
