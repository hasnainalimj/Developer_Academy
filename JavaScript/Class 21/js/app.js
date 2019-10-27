// var parent = document.querySelector("#parent");

// var mainDiv = document.createElement("div");
// mainDiv.setAttribute("class", "mainDiv");
// mainDiv.setAttribute("id", "authWrapper");
// parent.appendChild(mainDiv);

// var authWrapper = document.querySelector("#authWrapper");

// var emailInput = document.createElement("input");
// emailInput.setAttribute("type", "email");
// emailInput.setAttribute("class", "inputFields");
// emailInput.setAttribute("placeholder", "Email");

// var passwordInput = document.createElement("input");
// passwordInput.setAttribute("type", "password");
// passwordInput.setAttribute("class", "inputFields");
// passwordInput.setAttribute("placeholder", "Password");

// var button = document.createElement("button");
// button.innerHTML = "LOGIN";
// button.setAttribute("class", "btn");

// authWrapper.appendChild(emailInput);
// authWrapper.appendChild(passwordInput);
// authWrapper.appendChild(button);

var obj = {
  name: "Ali",
  age: 25
};

var obj = {
  name: "Ali",
  age: 25,
  sum: function() {
    return 2 + 2;
  }
};

function Students(name, age, course) {
  this.name = name;
  this.age = age;
  this.course = course;
  this.sum = function() {
    return 2 + 2;
  };
}

Students.prototype.bool = true;
Students.prototype.str = "string";
Students.prototype.num = 123;
Students.calcAnnual = function() {
  return 200;
};

var student1 = new Students("Ali", 24, "Javascript");
var student2 = new Students("Sami", 24, "React");

// console.log("TCL: student1", student1);
// console.log("TCL: student2", student2);

// var arr = [[{ id: 1 }, { id: 2 }], [{ id: 3 }, { id: 4 }]];

// arr = arr.flat();
// console.log("TCL: arr", arr);

var arr = [
  { id: 1 },
  { id: 2 },
  { id: 1 },
  { id: 2 },
  { id: 3 },
  { id: 4 },
  { id: 4 },
  { id: 5 }
];
var temp = [];

// for (var i = 0; i < arr.length; i++) {
//   if (!temp.length) {
//     temp.push(arr[i]);
//   } else {
//     for (var j = 0; j < temp.length; j++) {
//       if (temp[j].id !== arr[i].id) {
//         temp.push(arr[i]);
//         i = 0;
//         break;
//       }
//     }
//   }
// }

for (var i = 0; i < arr.length; i++) {
  for (var j = 0; j < arr.length; j++) {
    if (arr[i].id == arr[j].id) {
      console.log("matched");
      break;
    }
  }
}

console.log("TCL: temp", temp);
