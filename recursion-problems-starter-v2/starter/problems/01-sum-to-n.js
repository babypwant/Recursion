/***********************************************************************
Write a recursive function called `sumToN` that takes in a number and returns
the sum of all the numbers from 0 to that number. Return null for any input
number below 0.

Examples:
// let sumToN = num => {

//   let start = 1;
//   let count = 2;
//   let result = '';

//   if (num < 0) {
//     return null;
//   } else if (num === 0) {
//     return num;
//   } else {
//     count++;
//     result += start + count;

//   }


// }

***********************************************************************/

let sumToN = num => {



  if (num < 0) {

    return null;

  }
  if (num === 0) { // <---- returning nothing

    return 0;

  }


  return num + sumToN(num - 1); // <--- returning undefined



}




console.log(sumToN(5)) // returns 15

sumToN(1)  // returns 1
sumToN(9)  // returns 45
sumToN(-8)  // returns null
/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = sumToN;
} catch (e) {
  module.exports = null;
}
