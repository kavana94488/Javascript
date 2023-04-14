// A panagram is a string which contains all the alphabets(A-Z)(a-z)

// function checkPanagram(str) {
//   let arr = new Array(26).fill(false);

//   let index;
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] >= "A" && str[i] <= "Z") {
//       index = str[i].charCodeAt() - "A".charCodeAt(0);
//     } else if (str[i] >= "a" && str[i] <= "z") {
//       index = str[i].charCodeAt() - "a".charCodeAt(0);
//     } else continue;
//     arr[index] = true;
//   }
//   for (let j = 0; j < arr.length; j++) {
//     if (arr[j] === false) return false;
//   }
//   return true;
// }
// const str = "The quick brown fox jumps over a lazy dog";
// console.log(checkPanagram(str));

function checkPanagram(str) {
  let array = new Array(26).fill(false);
  let index;
  for (let i of str) {
    if (i >= "A" && i <= "Z") {
      index = i.charCodeAt() - "A".charCodeAt();
    } else if (i >= "a" && i <= "z") {
      index = i.charCodeAt() - "a".charCodeAt();
    } else continue;
    array[index] = true;
  }

  console.log(array);
  for (let j of array) {
    if (j === false) {
      return false;
    } else {
      return true;
    }
  }
}
const str = "The quick brown fox jumps over a lazy dog";
console.log(checkPanagram(str));
