/***********************************************************************
Write a recursive function called `sumArray` that takes an array of integers
and returns the value of all the integers added together. Your array may
include a mix of positive and negative integers!

Examples:

//.pop()

let sumArray = (array) => {
  let num = array[array.length - 1]
  let sum = 0;
  sum += num
  if (array.length > 0) {
    sumArray(array.pop())

  }
  return sum;
}
***********************************************************************/

let sumArray = function (array) {


  if (array.length === 0) {
    return 0;
  }
  let num = array[0] + sumArray(array.slice(1))

  return num;
}




console.log(sumArray([1, 2, 3])); //  6
console.log(sumArray([0, 1, -3])); //  -2
console.log(sumArray([1, 2, 3, 4, 5])); // 15
/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = sumArray;
} catch (e) {
  module.exports = null;
}
