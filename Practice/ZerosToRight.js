const arr = [0,1,0,2,0,3,0,4,5,6]
let zeroArr = []

let m =0
for(let i in arr){
    if(arr[i]!=0){
        zeroArr.push(arr[i])
    }

}

while(m<arr.length){
    if(arr[m]==0){
        zeroArr.push(arr[m])
    }
    m++
}
console.log(zeroArr)