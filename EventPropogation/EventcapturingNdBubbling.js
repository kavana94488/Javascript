// document.querySelector(".grandparent").addEventListener("click",()=>{
//     console.log("grandparent")
// })

// document.querySelector(".parent").addEventListener("click",()=>{
//     console.log("parent")
// })

// document.querySelector(".child").addEventListener("click",()=>{
//     console.log("child")
// })

// by default , the third argument in addeventListerner is false , ie. event bubbling will happen

// ---------------------------------------------------------

// document.querySelector(".grandparent").addEventListener("click", () => {
//   console.log("grandparent");
// },true);

// document.querySelector(".parent").addEventListener("click", () => {
//   console.log("parent");
// },true);

// document.querySelector(".child").addEventListener("click", () => {
//   console.log("child");
// },true);

// ---------------------------------------------------

// document.querySelector(".grandparent").addEventListener(
//   "click",
//   () => {
//     console.log("grandparent");
//   },
//   true
// );

// document.querySelector(".parent").addEventListener(
//   "click",
//   () => {
//     console.log("parent");
//   },
//   false
// );

// document.querySelector(".child").addEventListener(
//   "click",
//   () => {
//     console.log("child");
//   },
//   true
// );

// --------------------------------------------

// document.querySelector(".grandparent").addEventListener(
//   "click",
//   () => {
//     console.log("grandparent");
//   },
//   true
// );

// document.querySelector(".parent").addEventListener(
//   "click",
//   () => {
//     console.log("parent");
//   },
//   false
// );

// document.querySelector(".child").addEventListener(
//   "click",
//   () => {
//     console.log("child");
//   },
//   false
// );
// -----------------------

document.querySelector(".grandparent").addEventListener(
  "click",
  (e) => {
    e.stopPropagation();
    console.log("grandparent");
  },
  true
);

document.querySelector(".parent").addEventListener(
  "click",
  (e) => {
    e.stopPropagation();
    console.log("parent");
  },
  true
);

document.querySelector(".child").addEventListener(
  "click",
  () => {
    console.log("child");
  },
  true
);