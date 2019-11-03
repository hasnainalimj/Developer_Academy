//CALL BACK FUNCTIONS

caller = cb => {
  cb();
};

callBack = cb => {
  console.log("callBack");
};

// caller(callBack);
// caller(function() {
//   console.log("hellow");
// });
// caller(() => {
//   console.log("arrow cb");
// });

//CALL BACK HELL
function name(cb) {
  console.log(1);
  cb(function() {
    console.log(3);
  });
}

function email(cb) {
  console.log(2);
  cb();
}

// name(email);

//PROMISES

const checkData = new Promise((resolve, reject) => {
  let age = 20;
  if (age == 20) {
    resolve("You're fantastic");
  } else {
    reject("It's your childhood");
  }
});

// checkData.then(response => {
//   console.log("TCL: response", response);
// });

// new Promise((resolve, reject) => {
//   let age = 21;
//   if (age == 20) {
//     resolve("You're fantastic");
//   } else {
//     reject("It's your childhood");
//   }
// }).then(result => {
//   console.log("result", result);
// });

// console.log(1);

// setTimeout(() => {
//   console.log(2);
// }, 0);

// console.log(3);

// const asynPromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log(2);
//     resolve();
//   }, 0);
// });

// asynPromise.then(() => console.log(3));

//PROMISE ALL

const imageUploadingOne = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Image One Uploaded");
  }, 2000);
});

const imageUploadingTwo = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Image Two Uploaded");
  }, 1000);
});

const imageUploadingThree = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Image Three Uploaded");
  }, 7000);
});

const allPromises = [imageUploadingOne, imageUploadingTwo, imageUploadingThree];

// Promise.all(allPromises).then(result => {
//   console.log(result);
// });

//PROMISE.RACE

Promise.race(allPromises).then(res => {
  console.log(res);
});
