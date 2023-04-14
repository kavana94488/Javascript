let arr = [5, 7, 9, 11, 15];



function missingOdd(arr) {
  for (let i = 0; i < arr.length; i++) {
    let current = arr[i];
    let nextodd = arr[i] + 2;
    if (nextodd != arr[i + 1]) {
      console.log(nextodd);
      arr.splice(i+1, 0, nextodd);
      break;
    }
  }
  return arr;
}
console.log(missingOdd(arr));
