const name = "kavana";
let obj = {};
let max = 0;
let charMax = "";

// function count(name) {
//   for (let i of name) {
//     obj[i] = obj[i] + 1 || 1;
//   }

//   for (let key in obj) {
//     if (obj[key] > max) {
//       max = obj[key];
//       charMax = key;
//     }
//   }
//   return charMax;
// }
// console.log(count(name));
// -----------------------------------------------
// function removeDuplicates(name) {
//   let nameArr = name.split("");

//   return nameArr.filter((item, index) => nameArr.indexOf(item) === index);
// }
// console.log(removeDuplicates(name));

// ----------------------------------------------------------

function reverse(word) {
  let wordArr = word.split(" ");
  let reversedWord = wordArr.map((item) => item.split("").reverse().join(""));
  return reversedWord.join('')
}
console.log(reverse(name));

// ----------------------------------------------------------
// let number = 12345678912;
// let num = number.toString();
// let numArray = num.split("");

// function sum(num) {
//   let result = 0;
//   num.map((number) => {
//     let digit = +number;
//     result += digit;
//   });
//   if (result >= 10) {
//     result = result.toString().split("");

//     result = sum(result);

//   }
//   return result;
// }
// console.log(sum(numArray));

// --------------------------------------------------------

// function add(x) {
//   return function addition(y) {
//     if (y) return add(x + y);
//     else return x;
//   };
// }
// console.log(add(1)(2)(3)(4)(5)());

// ---------------------

// let arr = [[[[[0]]]], [[1]], [[[[2]]]], [4]];

// function flatfun(arr) {
//   let result = [];
//   for (let i in arr) {
//     if (Array.isArray(i)) {
//       result = result.concat(flatfun[i]);
//     } else {
//       result.push([i]);
//     }
//   }
//   return result;
// }
// console.log(flatfun(arr));

// console.log([1, 2, 3, [4, [5]]].flat(2));

// ----------------------------------------

// let word = "noon";

// let wordLength = word.length;

// function palandrome(word) {
//   for (let i in word) {
//     if (word[i] === word[wordLength - i - 1]) return "palandrome";
//     else return "not a palandrome";
//   }
// }
// console.log(palandrome(word));

let odd = [5, 7, 9, 11, 15];

function missingOdd(odd) {
  for (let i = 0; i < odd.length; i++) {
    let nextodd = odd[i] + 2;
    if (nextodd !== odd[i + 1]) {
      return nextodd;
    }
  }
}
console.log(missingOdd(odd));
