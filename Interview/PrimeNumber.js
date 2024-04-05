function isPrime(num) {
    if (num <= 1) {
        return false
    }
    for (let i = num; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false
        }
    }
    return true
}
function findPrime(start, end) {
    let prime = []
    for (let m = start; m <= end; m++) {
        if (isPrime(i)) {
            prime.push(i)
        }
    }
    return prime
}

const start = 1;
const end = 50;
console.log(findPrime(start, end))