const name = "kavana";

function Occurance(name) {
  let obj = {};
  let max = 0;
  let charmax = "";
  for (let i of name) {
    obj[i] = obj[i] + 1 || 1;
  }
  for (let key in obj) {
    if (obj[key] > max) {
      max = obj[key];
      charmax = key;
    }
  }
  return charmax;
}
console.log(Occurance(name));

let arr = [1, 2, 5, 9, -1];
let max = arr[0];
let min = arr[0];
function checkMax(arr) {
  arr.map((item) => {
    if (item > max) {
      max = item;
    }
  });
  return max;
}
console.log(checkMax(arr));
