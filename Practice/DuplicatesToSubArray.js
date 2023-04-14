let array = [1, 1, 2, 2, 3, 3, 4, 5];

let subArray = [];

// array.forEach((element, index) => {
//   if (!subArray.includes(element)) {
//     subArray.push(element);
//   }
// });
// console.log(subArray);

// function removeDuplicates(arr){
//     return arr.filter((element,index)=> arr.indexOf(element)===index)

// }
// console.log(removeDuplicates(array))

let duplicate = [1, 1, 1, 2, 2, 3, 4, 5, 6];

let unique = [];

function RemovingDuplicates(arr) {
  return arr.filter((item, index) => arr.indexOf(item) === index);
}
console.log(RemovingDuplicates(duplicate));
