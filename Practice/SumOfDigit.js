const number = 12345678912;
const numArr = number.toString();
const splitnum = numArr.split("");

const addition = (num) => {
  let result = 0;
  num.map((item) => {
    let digit = +item;
    result = result + digit;
  });

  if (result >= 10) {
    result = result.toString();
    result = result.split("");
    addition(result);
  }

  console.log(result);
};
addition(splitnum);
