const hobbies = ["walk", "signing", "gym"];

hobbies.splice(1, 0, "cooking", "gardening");
console.log(hobbies);
// let slice = hobbies.slice(2,4)
// console.log(slice)

hobbies.splice(-2,1)
console.log(hobbies)

hobbies.splice(1);
// deletes all the item,except the first
console.log(hobbies);

hobbies.splice(0);
// deletes all the item,except the first
console.log(hobbies);

// splice -->takes 3 arguments, start index, delete index,item
// Slice --> creates the copy
