// const name = "kavana"

// function countOccurance(name){
//    let obj={}
//    for(let i of name){
//     obj[i]=(obj[i]+1)||1

//    }
//    console.log(obj)

// }
// countOccurance(name)

// -------------------------------------------------
// const word = "hello world"

// function reverse(word){
//  let sent = word.split(" ")
//  let reverse = sent.map(item=>item.split("").reverse().join(""))
//  return reverse.join(" ")
// }
// console.log(reverse(word))

// -----------------------------------------------

// const dupplicates = [1, 2, 3, 1, 2, 3, 4, 5, 6];

// function remove(duplicate) {
//   console.log(duplicate);
//   let result = duplicate.filter((item,index) => duplicate.indexOf(item)===index);
//   console.log(result);
// }
// remove(dupplicates);

// -------------------------------------------------

// const num = [0, 1, 2, 3, 0, 0, 0, 5,0, 6, 7];

// function zerosToRight(num) {
//   let resultArr = [];
//   for (let i of num) {
//     if (i !== 0) {
//       resultArr.push(i);
//     }
//   }
//   let m = 0;
//   while (m < num.length) {

//     if (num[m] === 0) {
//       resultArr.push(num[m]);
//     }
//     m++;
//   }
//   console.log(resultArr);
// }
// zerosToRight(num);

// ------------------------------------------------\
// let vowel = "javaScriptIsGreatAndMakeOurselfProud";
// let vowelLetter = "aeiou";
// function vouwelFirst(vowel) {
//   let vowelResult = "";
//   let consonent = "";
//   let result
//   for (let i of vowel) {
//     if (vowelLetter.includes(i)) {
//       vowelResult += i;
//     }
//     else{
//       consonent+=i
//     }

//   }
//    result = vowelResult + consonent
//    console.log(result)
// }
// vouwelFirst(vowel);

// ---------------------------------------------------------------

// const input = [1, 5, 2, 3, 4, 2, 5, 6];

// function second(input) {
//   let numArr = input.sort();
//   let unique;
//   unique = numArr.filter((item, index) => numArr.indexOf(item) === index);
//   console.log(unique);
//   console.log(unique[unique.length-2])

// }
// second(input);

// ---------------------------------------

// const word = "noon";
// let wordLength = word.length;
// function Panagram(word) {
//   for (i in word) {
//     if (word[i] === word[wordLength - 1]) {
//       return "palandrome";
//     } else return "not a palandrome";
//   }
// }
// console.log(Panagram(word))

// ----------------------------------------------

// let value = 123456789;
// let valueString = value.toString();
//   let arr = val.split("");
// function add(val) {

//   let result = 0;
//   // for (let i of arr) {
//   //   let numVal = +i;
//   //   result += numVal;
//   // }
//   val.map(item=>{
//     let numVal = +item;
//       result += numVal;
//   })
//   if (result >= 10) {
//     result = result.toString();
//     add(result);

//   }
//   console.log(result);
// }

// console.log(add(valueString));

// const number = 12345678912;
// const numArr = number.toString();
// const splitnum = numArr.split("");

// const addition = (num) => {
//   let result = 0;
//   num.map((item) => {
//     let digit = +item;
//     result = result + digit;
//   });

//   if (result >= 10) {
//     result = result.toString();
//     result = result.split("");
//     addition(result);
//   }

//   console.log(result);
// };
// addition(splitnum);

// ------------------------------------------

// function currying(x) {
//   return function add(y) {
//     if (y) return currying(x + y);
//     else return x;
//   };
// }
// console.log(currying(1)(2)(3)(4)(5)(6)());

// -------------------------------------------------

const input1 = { a: 1, b: 2, c: 3, d: 10, e: 12, f: 20 };
const input2 = { a: 2, e: 12, f: 6, d: 10, g: 2 };

function sameValue(val1,val2){
let obj={}
for(let i in val1){
    if(val1[i]===val2[i]){
        obj[i]=val1[i]
    }
}
return obj
}
console.log(sameValue(input1,input2))

