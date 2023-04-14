// method one

// function add(x){
//     return function addition(y){
//         return function thirdAdd(z){
//             return x+y+z
//         }
//     }
// }

// ref=add(2)
//  secondAdd=ref(3)
//  console.log(secondAdd(4))

 // above currying is done through closeure

//  Method two
// ------------------

//  function add(x,y){
//    return x+y
//  }

//  let ref = add.bind(this,2)
//  console.log(ref(3))
 

//  -------------------------- Infinite currying ------------------------

// function add(x){
//   return function addition(y){
//     if(y) return add(x+y)
//     else return x
//   }
// }

// console.log(add(1)(2)(3)(4)(5)())

function currying(x){
  return function addition(y){
    if(y) return currying(x+y)
    else return x
  }
}

console.log(currying(1)(2)(3)(4)(5)())
