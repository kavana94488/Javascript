// const button = document.querySelector(".increment__pressed");
// const trigger = document.querySelector(".trigger__pressed");
// const buttonClick = document.querySelector(".increment_btn");
// let pressedCount = 0;
// let triggedCount = 0;




// const Debounce = (cb,d)=>{
//     let time
//     return function(...args){
       
//         if(time){
//             clearTimeout(time)
            
//         }
//         time = setTimeout(() => {
//             cb(...args)
            
//         }, d);
       
//     }

// }

// const DebounceCount = Debounce(()=>{
//     triggedCount++;
//     trigger.innerHTML = triggedCount
// },800)


// const throttle =(cb,delay)=>{
//     let last = 0;
//     return function(...args){
        
//         let now = new Date().getTime();
//         if(now-last<delay)return
//         last=now
//         return cb(...args)
//     }

// }


// const throttleCount = throttle(()=>{
//     triggedCount =triggedCount+1;
//     trigger.innerHTML = triggedCount
// },1000)


// buttonClick.addEventListener("click",()=>{
//     button.innerHTML= ++pressedCount
//     // trigger.innerHTML = ++triggedCount

//     // DebounceCount();

//     throttleCount();
// })

const button = document.querySelector(".button__clicked");
const buttonPress = document.querySelector(".button__press");
const triggerPress = document.querySelector(".triger__press");

let buttonCount = 0;
let triggerCount = 0;

const DebounceCount = (cb,d)=>{
let time
return function(...args){
    if(time){
        clearTimeout(time)
    }
    time =setTimeout(()=>{
        cb(...args)
    },d)
}
}

const Debounce = DebounceCount(() =>{
 buttonPress.innerHTML = ++buttonCount

},800)

button.addEventListener("click",()=>{
    // buttonPress.innerHTML = ++buttonCount
    Debounce();
})