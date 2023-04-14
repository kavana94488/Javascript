console.log("start");

// function message(mes) {
//   setTimeout(()=>{
//     return mes
//   },1000)
// }

function solution(message, callBack) {
  setTimeout(() => {
    callBack(message);
  });
}

function likeTheVideo(likeMessage, callBck) {
  setTimeout(() => {
    callBck(likeMessage);
  });
}

function shareTheVideo(shareMeeage, callBack) {
  setTimeout(() => {
    callBack(shareMeeage);
  }, 1000);
}

// const notification = message("subscribe");
// console.log(notification);
console.log("stop");

solution("subscriberrrr", function (message) {
  console.log(message);
  likeTheVideo("please like", function (likeMessage) {
    console.log(likeMessage);
    shareTheVideo(
      ("please Share",
      function (shareMessage) {
        console.log(shareMessage);
      })
    );
  });
});

// 31-42 is known as callBack hell

const prom = new Promise((resolve, reject) => {
  setTimeout(() => {
    let result = true;
    if (result) {
      resolve("promise is successfull");
    } else {
      reject(new Error("why did you loose"));
    }
  }, 1000);
});

prom.then((res) => console.log(res)).catch((err) => console.log(err));

// ---------------------- promise -------------

function subscribe(mes) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`subscribe to ${mes}`);
    }, 1000);
  });
}

function likeTheVideo(mes) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`like the videos of ${mes}`);
    }, 1000);
  });
}

function share(subscribeMessage) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // resolve(`share ${subscribeMessage}`)
      reject(`share ${subscribeMessage}`);
    }, 200);
  });
}

// subscribe("roadSideCoder").then((res) => {
//   console.log(res);
//   likeTheVideo("roadsideCoder").then((like) => {
//     console.log(like);
//     share("roadsideCoder").then((res) => console.log(res));
//   });
// });

// 81-87  will become promise hell

// subscribe("youtube")
//   .then((res) => {
//     console.log(res);
//     return likeTheVideo("youtube code");
//   })
//   .then((like) => {
//     console.log(like);
//     return share("youtube share");
//   })
//   .then((share) => console.log(share));

// 93 - 103 -->promise chaining

//  Promise Comnibantor

// It allows to execute more than one promise at a time , if any one of promise fails then every promise will get fail

Promise.all([
  subscribe("subscribe to promis"),
  likeTheVideo("likeTheVideo"),
  share("sharre the cideo"),
])
  .then((res) => console.log(res))
  .catch((err) => console.warn("promisefailed", err));

//   all --> return all the promise , if any of the promise fails , entire promise will fail

Promise.race([
  subscribe("race subscribe"),
  likeTheVideo("race like"),
  share("race share"),
])
  .then((res) => console.log(res))
  .catch((res) => console.log("promise failed in race", res));

// race --> returns the first promise , that can be either rejecteed or resolved

Promise.allSettled([
  subscribe("subscribe all settled"),
  likeTheVideo("like all settled"),
  share("share all settled"),
])
  .then((res) => console.log(res))
  .catch((err) => console.log("failed", err));

//   allSettled --> returns all the promise , including fullfilled and rejcted ones

Promise.any([
  subscribe("subscribe any"),
  likeTheVideo("like any"),
  share("share any"),
]).then((res)=>console.log(res));

// any --> returns the first successfull promise. 
// observe the setTimeout timmings
