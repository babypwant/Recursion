/***********************************************************************
Write a recursive function called `sort` that takes an array of integers, `nums`
and returns an array containing those integers sorted from least to greatest.

Your function should accept a default argument called `sorted` which
holds the currently sorted elements. Each recursive step should add
the smallest number in the `nums` array to the end of `sorted`.

There are many ways to accomplish this task but here's a simple algorithm:

1. Check the base case: If `nums` is empty, then return `sorted`
2. Otherwise, find the smallest element in `nums`
3. Add the smallest element to the end of `sorted`
4. Remove the smallest element from `nums`
5. Recursively call `sort()` with updated `sorted` and `nums`

Examples:

***********************************************************************/

// function sort(nums, sorted = []) {


//   if (nums.length === 0) {
//     return sorted;
//   }

//   for (let i = 0; i < nums.length; i++) {
//     let currenNum = nums[i];
//     let nextNum = nums[i + 1];
//     if (nextNum < currenNum) {
//       sorted.push(nextNum)
//       sorted.push(currenNum)
//     } else {

//       sorted.push(currenNum)
//     }


//   }
//   return sorted;

// }

function sort(nums, sorted = []) {

  if (nums.length === 0) {

    return sorted;

  }

  let index = 0;

  let mininum = nums[0]

  for (let i = 1; i < nums.length; i++) {

    if (mininum > nums[i]) {

      mininum = nums[i]

      index = i;

    }

  }

  sorted.push(mininum)

  let half = nums.slice(0, index)

  let secondHalf = nums.slice(index + 1)

  return sort([...half, ...secondHalf], sorted)



}
console.log(sort([1, 4, 6, 3, 1, 7])); // [1, 1, 3, 4, 6, 7]
sort([0, 1, -3]); // [-3, 0, 1]
sort([]); // []
/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = sort;
} catch (e) {
  module.exports = null;
}
