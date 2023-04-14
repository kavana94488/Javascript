let last =0;
let now = new Date().getTime()
if(now-last<1000){
    console.log("can't be done")
}
last=now
console.log('last',last)
console.log(now)
