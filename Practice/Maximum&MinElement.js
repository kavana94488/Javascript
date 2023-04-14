const input = [1, 2, -2, 11, 7, 1];

let max = input[0];
let min = input[0];
function fun(input) {
  input.map((item) => {
    // if (item > max) {
    //   max = item;
    // }
    //  For maximum

    if (item < min) {
      min = item;
    }
  });
  return min;
//   return max ; for maximum
}
console.log(fun(input));
