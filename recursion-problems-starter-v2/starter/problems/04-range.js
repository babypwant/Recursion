/***********************************************************************
Write a recursive function, `range`, that takes a start and an end and returns
an array of all numbers in that range, exclusive. If the end number is less than
the start, return an empty array.

Examples:

***********************************************************************/


// let range = (num, maxRange) => {

//   let array = [];
//   array.push(num)

//   if (num === maxRange) {

//   } else {

//     return range(num += 1, maxRange)
//   }

//   return array;


// }

// console.log(range(1, 5)); // [1, 2, 3, 4]
// console.log(range(3, 4)); // [3]
// console.log(range(7, 6)); // []



let range = function (num, maxRange) {

  if (num >= maxRange) {
    return [];  // <---- [2, 3, 4]
  }

  if (num < maxRange) {

    return [num].concat(range(num += 1, maxRange));   // <--- [num] == [1]  then .concat combines [1] + [2, 3, 4]
  }

}



/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = range;
} catch (e) {
  module.exports = null;
}
