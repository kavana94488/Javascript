let arr = [1, 2, 3, 4, 5];

// arr.map(item=>{
//     console.log(item*2)
// })

const mapvar = arr.map((element) => {
  return element * 2;
});
console.log(mapvar);

const forvar = arr.forEach((elememt) => elememt * 2);
console.log(forvar);



