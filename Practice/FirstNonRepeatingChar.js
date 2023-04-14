var word = "ababccdefegaddd";

function nonRepeating(word) {
  let obj = {};
  let char = "";

  for (let i of word) {
    obj[i] = obj[i] + 1 || 1;
  }

  for (let key in obj) {
    if (obj[key] === 1) {
      char += key;
      // return char
     
    }
    
  }
  return ` Non repeating character is ${char}`;
}
console.log(nonRepeating(word));
