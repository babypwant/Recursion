/***********************************************************************
Write a recursive function called `flatten` that takes a single array with
any number of nested arrays and returns and array with all the nested
contents on one level.

Examples:

***********************************************************************/

// let flatten = (arr) => {

//   let newArr = [];


//   if (arr.length === 0) {
//     return 1;
//   }

//   let start = arr.shift()

//   let res = arr.slice(1);

//   newArr.push(start)

//   return flatten(res)


// }

let flatten = (arr) => {

  let newArr = [];

  for (let i = 0; i < arr.length; i++) {
    let currentEl = arr[i]
    if (Array.isArray(currentEl)) {

      newArr.push(...flatten(currentEl))


    } else {
      newArr.push(currentEl);
    }

  }

  // let result = arr.flat(Infinity)

  return newArr;


}


console.log(flatten([1, [2, [3]]])); // [1, 2, 3]
console.log(flatten([])); // []
console.log(flatten([1, 2])); // [1, 2]
/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = flatten;
} catch (e) {
  module.exports = null;
}
