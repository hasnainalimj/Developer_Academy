var firebaseConfig = {};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// const validForm = document.querySelector("#validForm");
// console.log("TCL: validForm", validForm.txtName);

// console.log("parent", this);

const obj = {
  callMe: function() {
    console.log(this);
  },

  callMeArrow: () => {
    console.log(this);
  }
};

// obj.callMe();
// obj.callMeArrow();

// function callMe(){

// }

// callMe = () => {

// }

sum = (n1 = 1, n2 = 5) => {
  console.log(n1 + n2);
};

// sum(undefined, 6);

const obj2 = {
  name: "D.A",
  year: 2019
};

const newObj = {
  type: "Institute",
  ...obj2
};
// console.log("TCL: newObj", newObj);

const arr = [1, 2, 3, 4, 5, 6];

const newArr = [...arr, 6, 7, 8];
// console.log("TCL: newArr", newArr);

sayHi = cb => {
  if (typeof cb == "function") {
    cb();
  } else {
    alert("It's not a function");
  }
};

// sayHi(() => {
//   alert("Call Back Function");
// });

// console.log("sync 1");

// setTimeout(() => {
//   console.log("async 2");
// }, 0);

// const myPromise = new Promise((resolve, reject) => {
//   try {
//     setTimeout(() => {
//       console.log("async 2");
//       resolve("async 2");
//     }, 0);
//   } catch (error) {
//     reject("error in set time out");
//   }
// });

// myPromise.then(result => {
//   console.log("TCL: err", result);
//     console.log("sync 3");
// });

// const myPromise = new Promise((resolve, reject) => {
//   try {
//     setTimeout(() => {
//       console.log("async 2 (a)");
//       resolve();
//     }, 0);
//   } catch (error) {
//     reject();
//   }
// });

// const myPromise2 = new Promise((resolve, reject) => {
//   try {
//     setTimeout(() => {
//       console.log("async 2 (b)");
//       resolve();
//     }, 0);
//   } catch (error) {
//     reject();
//   }
// });

// myPromise.then(() => {
//   myPromise2.then(() => {
//     console.log("all promise resolved");
//   });
// });

const promiseOne = new Promise((res, rej) => {
  setTimeout(() => {
    res("Promise One");
  }, 5);
});

const promiseTwo = new Promise((res, rej) => {
  setTimeout(() => {
    res("Promise Two");
  }, 2);
});

const promiseThree = new Promise((res, rej) => {
  setTimeout(() => {
    res("Promise Three");
  }, 0);
});

const allPromises = [promiseOne, promiseTwo, promiseThree];

// Promise.all(allPromises).then(res => {
//   console.log(res);
// });

Promise.race(allPromises).then(res => {
  console.log(res);
});
