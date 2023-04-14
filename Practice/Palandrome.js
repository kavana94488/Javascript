let word = "noon";
let lengthofWord = word.length;

// function palandrome(str) {
//   for (let i in str) {
//     if (str[i] === str[lengthofWord - 1]) return "it is a palandrome";
//     else return "It is not a palandrome";
//   }
// }

// console.log(palandrome(word));

function palandrome(word) {
  for (let i in word) {
    if (word[i] === word[lengthofWord - 1]) {
      return "palandrome";
    } else {
      return "not a palandrome";
    }
  }
}
console.log(palandrome(word));
