// const first = [1,2,3,4]

// const second = [...first]
// first.push(5);
// console.log(second)

// ---------- second method

// const first = [1, 2, 3, 4];
// const second = first.slice();
// first.push(5);
// console.log(first);
// console.log(second);
// const third = first.slice(2, 4);
// console.log(third);
// const fouth = first.slice(-3, -1);
// // both has to be in negative index,else it will give empty array
// console.log(fouth);



// --------------------------- Concat --------------------------------

const first = [1,2,3,4,5]
const second = first.concat([6,7])
console.log(second)
first.push(8)
console.log(first)