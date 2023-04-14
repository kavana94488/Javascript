const input = [-5, -4, -3, -2, -1, 0, 2, 4, 6, 8];

//  The given array is sorted, if the array is not sorted , we have to sort it first.

// for (let i of input) {
//   for (let j = 1; j < input.length; j++) {
//     if (i + input[j] === 0) {
//       console.log([i, input[j]]);
//       return
//     }
//   }
// }

// this will make the second loop to run many times, complexity is more .o(n^2)

let left = 0;
let right=input.length-1;

while(left<right){
    sum = input[left]+input[right]
    if(sum===0){
        console.log(input[left],input[right])
        return
    }
   else if(sum>0){
    right--
   }
   else{
    left++
   }

}
