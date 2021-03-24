/***********************************************************************
Write a recursive solution called `isSorted` to determine if the input array
is sorted in ascending order.

Examples:

let isSorted = (array) => {

  let start = array[0];

  for (let i = 1; i < array.legth; i++) {
    let currentNum = array[i]

    if (start < currentNum) {

      
      return 

    } else {
      return false;
    }


  }

  return true;


}
***********************************************************************/


let isSorted = (array) => {

  let num1 = array[0];
  let num2 = array[1];
  let rest = array.slice(1)
  if (array.length === 0) {
    return true;
  }


  if (num1 > num2) {
    return false;
  } else {
    return isSorted(rest)
  }



}

console.log(isSorted([1, 2, 3, 4, 5])); // true
console.log(isSorted([1, 2, 4, 3, 5])); // false

console.log(isSorted([2, 4, 6, 7, 8])); // true

console.log(isSorted([5, 4, 3, 2, 1])); // false

/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = isSorted;
} catch (e) {
  module.exports = null;
}
