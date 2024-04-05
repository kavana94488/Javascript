let input = [-2,1,-3,4,-1,2,1,-5,4];

// function maxSubArray(input){

     
// let maxSum = input[0]
// let starInx = 0;
// let endIndex = 0;
//     for(let i = 0;i<input.length;i++){
       
// let currentSum = 0; 

//         for(let j=i;j<input.length;j++){
//             currentSum+=input[j]
           
//             if(currentSum>maxSum){
//                 maxSum=currentSum
//                 starInx = i
//                 endIndex=j
//             }
//         }

       
//     }
//     console.log(input.slice(starInx,endIndex+1))
//     return {
//         maxSum:maxSum,
//         subArray:input.slice(starInx,endIndex+1)
//     }
// }

// method 2


function maxSubArray(input){
    let maxSum = input[0]
  let sum = 0;
  let starInx = 0
  let endInd = 0
    for(let i=0;i<input.length;i++){
       
        sum+=input[i]
        console.log(sum)
        if(sum>maxSum){
            // console.log(input[i])
            maxSum=sum
            starInx = i
            // endInd
        }
        if(sum<0){
            sum=0
        }
    }
    return maxSum
}
console.log(maxSubArray(input))