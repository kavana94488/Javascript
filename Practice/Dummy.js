function test() {
  var promise = Promise.resolve(5);
  return promise
    .then((result) => {
      return 6;
    })
    .catch((err) => 7);
}

console.log(test());
