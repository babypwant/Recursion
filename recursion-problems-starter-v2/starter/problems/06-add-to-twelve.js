/***********************************************************************
Write a recursive function called `addToTwelve` that will return true if there
are two adjacent numbers in the input array that can sum up to 12. Otherwise,
return false.

Examples:

***********************************************************************/

let addToTwelve = (arr) => {
  let num = arr[0]
  let num2 = arr[1]

  if (arr.length < 1) {
    return false;
  }
  if (num + num2 === 12) {
    return true;
  }
  if (num + num2 !== 12) {
    return addToTwelve(arr.slice(1))
  }


}

// console.log(addToTwelve([1, 3, 4, 7, 5])); // true
// console.log(addToTwelve([1, 3, 4, 7, 6])); // false
// console.log(addToTwelve([1, 11, 4, 7, 6])); // true
// addToTwelve([1, 12, 4, 7, 6]); // false
// addToTwelve([1]); // false

/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = addToTwelve;
} catch (e) {
  module.exports = null;
}
