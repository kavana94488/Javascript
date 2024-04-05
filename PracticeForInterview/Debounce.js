
function debouncer() {
    console.log("fetching data....")
}
function myDebounceFun(fun, delay) {
    let timer;
    return function (...args) {
        if (timer) clearTimeout(timer)
       timer = setTimeout(() => {
            fun()
        }, delay)
    }
}

const debounce = myDebounceFun(debouncer, 1000)