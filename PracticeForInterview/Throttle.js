function throttle() {
    console.log("user clicked")
}

function throlling(fun, delay) {
    let throttle = true
    return function (...params) {
        if (throttle) {
            throttle = false
            setTimeout(() => {
                throttle = true
                fun()
            }, delay)
        }

    }
}

const myThrottle = throlling(throttle, 2000)