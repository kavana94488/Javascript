// let a = { id: 1, name: "kavana" };
// let b = a;
// b.id = 2;
// // console.log(a);
// // console.log(b);

// //  shallow copy is a single reference object is pointing to both the object
// //  deep copy is each object will have seperate referance object.

// // If i want to change the values of 'b' without changing 'a'

// // Object.assign({}, b);

// b = { ...a };

// //  we could use Object.assign({},b)

// b.id = 5;

// b.name = "pavana";
// // console.log(b);

// let c = {
//   company: "hcl",
//   prof: {
//     designation: "developer",
//   },
//   date: new Date(),
// };

// //  to change the values of nested we have to use JSON.stringify

// d = JSON.parse(JSON.stringify(c));
// d.prof.designation = "tester";

// console.log(c.prof.designation);
// console.log(d.prof.designation);
// console.log(c);
// console.log(d);

// let f = {
//   a: () => {
//     console.log("hi");
//   },
//   b: function () {
//     console.log(this.name='kavana');
//   },
// };
// // f.b();

// let a = {
//   id: 1,
//   job: "developer",
//   salary: 2000,
//   company: {
//     designation: "abc",
//   },
// };
// let b = a;
// // console.log(a);
// // b = { ...a };
// b.id = 2;
// console.log(b);
// b = JSON.parse(JSON.stringify(a));
// b.company.designation = "xys";
// console.log(b.company.designation);
// console.log(a.company.designation);

// let a = {
//   id: 1,
//   name: "kavana",
//   company: {
//     designation: "hcl",
//   },
// };
// let b = JSON.parse(JSON.stringify(a));
// b.name = "pavana";
// b.company.designation = "abc";
// console.log(a.company);
// console.log(b.company);


const num = [1,2,3,4,5,6]

console.log(num.filter(item=>item>=4))