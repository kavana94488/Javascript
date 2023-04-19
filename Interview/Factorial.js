function factorial(n) {
  let fact = n;
  for (let i = n - 1; i >= 1; i--) {
    fact *= i;
    // console.log(fact)
  }

  return fact;
}

console.log(factorial(7));

