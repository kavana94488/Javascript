const input = [2, 7, 11, 4, -2];

for (let i = 0; i < input.length; i++) {
  let sum = 0;
  for (j = i + 1; j < input.length; j++) {
    sum += input[j] || 0;
    // console.log(` j is ${input[j]}`);
    // if (input[j] < 0) {
    //   let result = 0;
    //   console.log(input[j]);
    //   for (let k = input[i]; k < j; k++) {
    //     console.log(k);
    //   }
    //   //   console.log('result===',sum)
    // }

  }
  console.log(sum)
}
