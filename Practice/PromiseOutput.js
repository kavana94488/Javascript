// console.log("start")

// const prom = new Promise((resolve,resject)=>{
//     console.log(1)
//     resolve(2)
//     console.log(3)
// })

// prom.then(res=>console.log(res))

// console.log("end")

// start,1,3,end,2

// -----------------------------------------

// console.log("start");

// const prom = new Promise((resolve, resject) => {
//   console.log(1);
 
//   console.log(3);
// });

// prom.then((res) => console.log("success",res));

// console.log("end");
// start ,1 ,3 ,end

// since there is no resolve it will not go inside the then block

// -------------------------------------------

console.log("start")
const fn = ()=> new Promise((resolve,rejeect)=>{
    console.log(1)
    resolve("success")
})
console.log("middle")
fn().then((res)=>console.log(res))
console.log("end")

//  start ,middle,1,end,success