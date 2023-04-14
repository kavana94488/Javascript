let word = "javaScriptIsGreatAndMakeOurselfProud";

// function voweFirst(word) {
//   let vowel = "aeiou";
//   let consonents = "";
//   for (let i of word) {
//     if (vowel.includes(i)) {
//       console.log(i);
//     } else {
//       consonents += i;
//     }
//   }
//   console.log(consonents);
//   for(let j of consonents){
//     console.log(j)
//   }
// }
// voweFirst(word);

function voweFirst(word) {
  let vowel = "aeiou";
  let consonent = "";
  let vowelAlpha = "";
  let result;
  for (let i of word) {
    if (vowel.includes(i)) {
      vowelAlpha += i;
    } else {
      consonent += i;
    }
  }
  // for (let j of consonent) {
  //   console.log(consonent);
  // }
  result = vowelAlpha + consonent;
  console.log(result);
}
voweFirst(word);
