/***********************************************************************
Write a recursive function called `exponent` that takes two integers, 
`num` and `power`, and returns `num` raised to the `power`th power. Your
function should work when `num` or `power` are positive OR negative.

Exponents are used to represent a number being multiplied by itself a
given number of times:

4^3 = 4 x 4 x 4 = 64

Negative exponents represent the same action, but in the denominator instead
of the numerator:


Examples:

const sumArray = require("./02-sum-array");
// if (power < 0) {
  
  //   if (power === 0) {
    
    //     return 1;
    //   }
    
    //   return num * exponent(num, power + 1)
    
    4^-3 = (1/4) * (1/4) * (1/4) = 1/64.

// }
***********************************************************************/


function exponent(num, power) {
  // console.log(Math.abs(power))

  if (power < 0) {

    return (1 / exponent(num, Math.abs(power)))

  }

  if (power === 1) {

    return num;
  }

  return num * exponent(num, power - 1)

}

console.log(exponent(3, 2)); // 9
// exponent(2, -2); // 1/4 (or 0.25)
// exponent(5, 5); // 3125
/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = exponent;
} catch (e) {
  module.exports = null;
}
