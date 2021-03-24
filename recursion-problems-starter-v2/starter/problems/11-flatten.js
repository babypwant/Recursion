/***********************************************************************
Write a recursive function called `flatten` that takes a single array with
any number of nested arrays and returns and array with all the nested
contents on one level.

Examples:

***********************************************************************/

let flatten = (arr) => {
  let nums = arr[0]

  if (arr.length > 0) {
    debugger;
    return nums.concat(flatten(arr.shift()))
  }

}


// flatten([]); // []
// flatten([1, 2]); // [1, 2]
console.log(flatten([1, [2, [3]]])); // [1, 2, 3]
/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = flatten;
} catch (e) {
  module.exports = null;
}
