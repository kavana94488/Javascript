const input = [2, 7, 11, 4, -2];

const output = [11, 4, -2, 2, 7];

function rotate(inp) {
    let res;
  for (let i = 0; i < 2; i++) {
    res = inp.shift();
    inp.push(res);
    
  }
  return inp
}
console.log(rotate(input));
