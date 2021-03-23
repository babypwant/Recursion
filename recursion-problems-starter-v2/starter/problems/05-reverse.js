/***********************************************************************
Write a recursive function reverse(string) that takes in a string and returns
it reversed.

Examples:

***********************************************************************/

let reverse = (string) => {

  if (string.length === 0) {
    return ''

  }

  return reverse(string.slice(1)) + string[0];


}

// console.log(reverse("house")); // "esuoh"
// reverse("dog"); // "god"
// reverse("atom"); // "mota"
// reverse("q"); // "q"
// reverse("id"); // "di"
// reverse(""); // ""
/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = reverse;
} catch (e) {
  module.exports = null;
}
