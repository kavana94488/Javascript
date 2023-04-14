const input1 = { a: 1, b: 2, c: 3, d: 10, e: 12, f: 20 };
const input2 = { a: 2, e: 12, f: 6, d: 10, f: 2 };

// First method

// function fun(input1, input2) {
//     let result={}
//   for (let key in input1) {
//    for(let item in input2){
//     if(key===item && input1[key]===input2[item]){
//       result[key]=input1[key]
//     }
//    }
//   }
//   return result
// }

// function fun(input1,input2){
//     let result={}
//     for(let i in input1 ){
//         if(input1[i]===input2[i]){
//        result[i]=input1[i]
//         }
//     }
//     return result
// }
// console.log(fun(input1, input2));

function fun(arr, input) {
  let obj = {};
  for (let i in arr) {
    if (arr[i] === input[i]) {
      obj[i] = input[i];
    }
  }
  return obj;
}
console.log(fun(input1, input2));
