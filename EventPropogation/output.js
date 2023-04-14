// let a = 5;
// if (!a) {
//   a = 10;
//   console.log(a);
// } else {
//   a = 6;
//   console.log(a);
// }
// ---------------------------------
// for (var i = 0; i < 3; i++) {
//   console.log(i);
// }

// -------------------------------------
// for (var i = 0; i < 5; i++) {
//   function fun(i){setTimeout(() => {
//     console.log(i);
//   }, i * 1000);}
//   fun(i)
// }

// -------------------------

// const arr=[1,2,3,4,5]
// console.log(arr)
// console.log(...arr)

// ---------------------------------

// function chechType(num = 1) {
//   console.log("typeOf", typeof num);
// }

// chechType()    -->number
// chechType(undefined)  --->number
// chechType('')   -->string
// chechType(null) --->object

// ------------------------------------

// var a = {};
// b = "123";
// c = 12;
// a[b] = "b";
// a[c]='c'
// console.log(a);
// console.log(a[b]);

// -------------------------------

// let a = 11 + "11";
// console.log(a);
// let b = 11 - "11";
// console.log(b);

// let c = true + 1;
// console.log(c);
// let d = false + 1;
// console.log(d);

// ---------------------------------------

const str = "Hello World how is it outside";
// const reverseSentence = (str) => {
//   const arr = str.split(" ");
//   const reversed = arr.map((el) => {
//     return el.split("").reverse().join("");
//   });
//   return reversed.join(" ");
// };
// console.log(reverseSentence(str));

// function reverseword(str) {
//   const sentence = str.split(" ");
//   console.log(sentence);
//   const reverse = sentence.map((word) => {
//     return word.split("").reverse().join("");
//   });
//   return reverse.join(" ");
// }
// console.log(reverseword(str));

// -------------------------

let number = 1234567892;
let numbertoString = number.toString();
let numberArray = numbertoString.split("");

function sum(num) {
  let result = 0;
  num.map((item) => {
    let digit = +item;
    result += digit;
  });

  if (result >= 10) {
    result = result.toString().split("");
    result = sum(result);
  }
  
  return result;
}
console.log(sum(numberArray));


const fruit = {};
fruit.color = "red";
console.log(fruit)
