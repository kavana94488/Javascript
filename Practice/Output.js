// 1
// ---------------------------
// let a={
//     name:"test"
// }

// let b = {...a}
// b.name="test2"
// console.log(a.name)
// console.log(b.name)

// ---------------------------------

// let a ={
//     name:"test",
//     add:{
//         code:1
//     }
// }

// let b={...a}
// b.add.code=2
// console.log(a.add.code)
// console.log(b.add.code)

// --------------------------------------

// var name = "kavana";
// function add() {
//   var name = "pavana";
//   console.log(name);
//   var a = 1;
//   {
//     var a = 2;
//     console.log(a);
//   }
//   console.log(a);
// }
// add();
// console.log(name);

// --------------------------------
// console.log([1,2,3]+[4,5,6])
// const array = [1,2,3]
// const newArray = [...array,4,5,6]
// console.log(newArray)

// -----------------------------------

// var name="kavana";
// if(true){
//   var name="pavana"
//   console.log(name)
// }
// console.log(name)

// ------------------------------ swaping

// let a=10,b=20,temp


// [a,b]=[b,a]
// console.log(a,b)

// ---------------------------------------

let num = [2, 15, 7, 8, 20, 55, 3];
num.sort();
console.log(num);