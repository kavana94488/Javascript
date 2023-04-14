function Occurance(str) {
  let obj = {};
 let max=0;
  let charMax = "";

  for (let i of str) {
    obj[i] = obj[i] + 1 || 1;
  }

  for (let j in obj) {
    
    if (obj[j]>max) {
      
      max=obj[j];
      // console.log(max)
      charMax = j;
      
    }
  }
  return charMax
}
let str = "kavana";
console.log(Occurance(str));
