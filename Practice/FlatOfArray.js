let arr = [[[[[0]]]], [[1]], [[[[2]]]], [4]];

// function flatfun(arr) {
//   let result = [];
//   for (let i in arr) {
//     if (Array.isArray(arr[i])) {
//       result = result.concat(flatfun(arr[i]));
//     } else {
//       result.push(arr[i]);
//     }
//   }
//   return result;
// }
// console.log(flatfun(arr));

function flatfun(arr){
  let result=[]
  for(let i=0;i<arr.length;i++){
    if(Array.isArray(arr[i])){
      result=result.concat(flatfun(arr[i]))
    }
    else{
      result.push(arr[i])
    }
  }
  return result

}
console.log(flatfun(arr));