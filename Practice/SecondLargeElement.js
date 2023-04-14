const input1 = [1, 2, -2, 11, 7, 1, 7];
const input2 = [1, 4, 4, 2, 3, 6, 7, 8,9];

function fun(input) {
  let secondLarge = [...new Set(input)].sort((a, b) => a - b);

  secondLarge = secondLarge[secondLarge.length - 2];

  return secondLarge;
}
console.log(fun(input1));
console.log(fun(input2));
