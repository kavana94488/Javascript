// x will be the window object

// function myFunction() {
//   return this;
// }
// let x = myFunction();
// console.log(x);

// ----------------------------------------

const obj = {
  firstname: "kavana",
  lastname: "basavaraju",
  fullname: function () {
    return this;
  },
};
console.log(obj.fullname());

const obj1 = {
  firstname: "pavana",
  lastname: "varma",
};
const details = function (age, hometown) {
  return this.firstname + " " + this.lastname + age + hometown;
};

console.log(details.call(obj1, 24));

const callVar = {
  firstname: "kavya",
  lastname: "basavaraju",
};

console.log(details.apply(callVar, [25, "ark"]));

const callBind = details.bind(callVar,26,'hsn')
console.log(callBind)
console.log(callBind())
