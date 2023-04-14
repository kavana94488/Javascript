const button = document.querySelector(".button");
const buttonClicked = document.querySelector(".button__clicked");
const triggerClicked = document.querySelector(".trigger__clicked");

let buttonCount = 0;
let triggerCount = 0;

const debounceCount = (cb, delay) => {
  let time;
  return function (...args) {
    if (time) clearTimeout(time);
    time = setTimeout(() => {
      cb(...args);
    }, delay);
  };
};

const throttleCount = (cb, delay) => {
  let throttle = true;
  return function (...args) {
    if (throttle) {
      throttle = false;
      setTimeout(() => {
        throttle = true;
        cb(...args);
      }, delay);
    }
  };
}
;
const throttle = throttleCount(() => {
  triggerClicked.innerHTML = ++triggerCount;
}, 1000);

const debounce = debounceCount(() => {
  triggerClicked.innerHTML = ++triggerCount;
}, 800);
button.addEventListener("click", () => {
  buttonClicked.innerHTML = ++buttonCount;
  // debounce()
  throttle();
});
