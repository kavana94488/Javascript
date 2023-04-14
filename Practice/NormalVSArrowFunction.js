fun();
//  function declaration can be called before its initialization

//  function declaration
function fun() {
  console.log("normal function");
}

//  function expression
// exp()

//  function expression can't be called before its initalized
const exp = function funExp(a, a, a) {
  console.log(a);
  console.log("function exp");
};
exp(1, 2, 3);

console.log(fun.prototype);

const arr = (a,a) => {
  console.log(arr);
    console.log(a);
};
arr(3,2);
console.log(arr.prototype);
console.log(new exp());

console.log(new arr());

function* gen(){
    console.log("generator function")
}

// const genArrow=*()=>{

// }
