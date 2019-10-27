//FETCH

const api = "https://jsonplaceholder.typicode.com/todos/10";

// fetch(api)
//   .then(function(response) {
//     return response.json();
//   })
//   .then(function(data) {
//     console.log(data);
//   });

const api_2 = "https://jsonplaceholder.typicode.com/todos";

fetch(api_2)
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    // data.map(function(val) {
    //   console.log(val);
    // });
    // const result = data.filter(function(val) {
    //   return val.userId == 1;
    // });
    // console.log(result);
  });

//In case of method "GET"
// const options = {
//   method: "GET",
//   headers: {
//     "content-type": "application/json"
//   }
// };

// fetch("https://jsonplaceholder.typicode.com/posts/1", options)
//   .then(function(response) {
//     return response.json();
//   })
//   .then(function(json) {
//     console.log(json);
//   });

// function caller(clbk) {
//   return clbk();
// }

// const result = caller(function() {
//   return 2 + 2;
// });
// console.log("TCL: result -> result", result);

//POST API
// const options = {
//   method: "POST",
//   headers: {
//     clientkey: "657tguydbasuiygR&^%RFY",
//     clientsecret: "jhjh5ytFGYYFYTDFYDYTTF111***&",
//     "content-type": "application/json"
//   },
//   body: {
//     name: "Ali",
//     email: "ali@gmail.com",
//     subject: "Persue Purpose",
//     message: "Hello how are you?"
//   }
// };
// fetch("/api/home/contact", options)
//   .then(function(response) {
//     return response.json();
//   })
//   .then(function(json) {
//     console.log(json);
//   });

// fetch(api)
//   .then(function(response) {
//     return respone.json();
//   })
//   .then(function(data) {
//     console.log(data);
//   })
//   .catch(function(error) {
//     console.log(error);
//   });

//SET

function Company(name, email) {
  this.name = name;
  this.email = email;
}

let c1 = new Company("Pepsi", "pepsi@yahoo.com");
// console.log("TCL: c1", c1);

const array = [1, 2, 2, 2, 3, 4, 5, 6, 6, 7, 8, 9, 9];

const uniqueArray = new Set(array);
// console.log("TCL: uniqueArray", uniqueArray);

const createArray = new Set([1, true, "Abc"]);
// console.log("TCL: createArray", createArray);
createArray.add("Pakistani");
// createArray.clear();
// console.log(createArray.entries());
// console.log("TCL: createArray", createArray);

// console.log(createArray.size);

// createArray.forEach(function(val) {
//   console.log(val);
// });

const available = createArray.has("xysd");
// console.log("TCL: available", available);

createArray.delete(true);
// console.log("TCL: createArray", createArray);

//ARROW FUNCTIONS

function typeOne() {
  return false;
}

// const typeTwo;
var typeTwo = function() {
  return true;
};

typeThree = () => {
  return "arrow function";
};

const res = typeThree();
// console.log("TCL: res", res);

const global = "xyz";

const object = {
  name: "abc",
  func: function() {
    console.log(this);
  },
  arrw: () => {
    console.log(this);
  }
};

// object.func();
// object.arrw();

var obj = {
  cal: function() {
    // console.log(this);
  },
  arr: () => {
    // console.log(this.obj);
  }
};

obj.cal();
obj.arr();

//DEFAULT PARAMETERS

sum = (n1 = 5, n2 = 5) => {
  return n1 * n2;
};

const resp1 = sum();
const resp2 = sum(6, 8);
const resp3 = sum(undefined, 8);

// console.log("TCL: resp", resp);

function flager(flag = false) {
  if (flag) {
    console.log("true");
  } else {
    console.log("false");
  }
}

// flager();
// flager("anc");

//REVERSE
var arr = [5, 4, 3, 2, 1];
// console.log(arr.reverse());

//SPREAD OPERATOR
var arr2 = [0, 9, 8, ...arr];
// console.log("TCL: arr2", arr2);

var obj1 = {
  name: "Shan",
  age: 25
};

var obj2 = {
  work: false,
  ...obj1,
  calls: () => {
    return false;
  }
};

// console.log("TCL: obj2", obj2);

//MAP OBJECT

let newObj = new Map();

newObj.set("name", "abc");
newObj.set("arr", []);
// newObj.clear();
// console.log(newObj.size);

// console.log("TCL: newObj", newObj);

// console.log(newObj.get("arr"));

// console.log("TCL: newObj", newObj);

var newsObj = {
  name: "ali",
  age: 24
};
// console.log("TCL: newsObj", newsObj.name);

for (var key in newsObj) {
  // console.log(newsObj[key]);
}

for (var key in newsObj) {
  // console.log(newsObj[key]);
}

for (var [key, value] of newObj) {
  // console.log(key, value);
}

// const elements = document.querySelectorAll("div");
// const elements = document.querySelectorAll(".elem");
// const elements = document.querySelector("#mainElement");

// console.log("TCL: elements", elements);
