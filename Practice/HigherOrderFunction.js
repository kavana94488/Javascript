// radius = [2, 3, 4, 5];

// const area = function (rad) {
//   return Math.PI * rad * rad;
// };

// const circumfarence = function (rad) {
//   return 2 * Math.PI * rad;
// };

// const diameter = function (rad) {
//   return 2 * rad;
// };

// function calculate(radius, logic) {
//   const output = [];
//   for (let i of radius) {
//     output.push(logic(i));
//   }
//   return output;
// }

// console.log(calculate(radius, area));
// console.log(calculate(radius, circumfarence));
// console.log(calculate(radius, diameter));

// console.log(radius.map(area))

// // our own map

// Array.prototype.calculate = function(logic){
//    const output=[]
//    for(let i of this){
//     output.push(logic(i))
//    }
//    return output
// }

// console.log(radius.calculate(area))

// ------------------------------------------

const companies = [
  { name: "Google", category: "Product based", start: 1981, end: 2004 },
  { name: "Amazon", category: "Product based", start: 1992, end: 2008 },
  { name: "paytm", category: "product based", start: 1999, end: 2007 },
  { name: "Coforge", category: "service based", start: 1989, end: 2019 },
  { name: "mindtree", category: "service based", start: 1989, end: 2010 },
];

const comp = companies.forEach((element) => {
  return element;
});
console.log(comp);

// companies.forEach((element) => {
//   console.log(element);
// });

const mapvar = companies.map((item) => item.name).sort();
console.log(mapvar);

const age = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

// const agevar = age.filter((element) => element >= 18);
// console.log(agevar);

Array.prototype.filterpoly = function () {
  const output = [];
  for (let i of this) {
    if (i < 18) {
    } else if (i >= 18) {
      console.log(i);
      output.push(i);
    }
  }
    return output;
};


const sumAge =  age.reduce((total,age)=>{return total+age},0)
console.log(sumAge)


