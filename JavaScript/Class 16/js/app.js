var student = [6, "Ali", ["Maths", "Urdu"], 8]; //wrong approach
// student[1];

// var studentName = "Ali";
// var studentId = 2;
// var studentSubjects = ['Maths' , 'Urdu']

// var studentName2 = "Ali";
// var studentId = 2;
// var studentSubjects = ['Maths' , 'Urdu']

// var studentName3= "Ali";
// var studentId = 2;
// var studentSubjects = ['Maths' , 'Urdu']

// var studentName4 = "Ali";
// var studentId = 2;
// var studentSubjects = ['Maths' , 'Urdu']

// var studentName5 = "Ali";
// var studentId = 2;
// var studentSubjects = ['Maths' , 'Urdu']

var student1 = {
  //key value pair //json
  name: "Ali",
  age: 15,
  class: 10,
  subjects: ["English", "Science"],
  msgs: [{ id: 1, text: "Hi" }, { id: 2, text: "By", users: ["Saad", "Sami"] }]
};
// console.log("TCL: student1", student1)
// console.log(student1.name)
// console.log(student1.subjects[1])
// console.log(student1.msgs);

// console.log("on", obj);

var obj = { depart: "IT" };

// console.log("TCL: obj", obj);

obj.name = "Shan"; // adding key & value

obj.depart = "Accounts"; // update key & value

if (obj && obj.age) {
  console.log(obj.age);
} else {
  obj.age = 0;
}

// delete obj.depart //delete key from object

// delete obj.custom; // nothing will do

// console.log("obj ====>", obj.age);

var data = {
  flag: false
};

var result = "flag" in data; //check is key exists or not and return boolean

var res = "day" in data;

// console.log("TCL: result", res)

if ("flag" in data) {
  // console.log("yes")
}

var plan1 = {
  name: "Basic",
  price: 3.99,
  space: 100,
  transfer: 1000,
  pages: 10,
  discountMonths: [6, 7, 9, 10],
  calcAnnual: function(discount) {
    var bestPrice = this.price;
    var currentDate = new Date();
    var currentMonth = currentDate.getMonth();
    for (var i = 0; i < this.discountMonths.length; i++) {
      if (this.discountMonths[i] == currentMonth) {
        bestPrice = bestPrice * discount;
        break;
      }
    }
    return bestPrice * 12;
  }
};

// function calcAnnual() {
//   var bestPrice = plan1.price;
//   var currentDate = new Date();
//   var currentMonth = currentDate.getMonth();
//   for (var i = 0; i < plan1.discountMonths.length; i++) {
//     if (plan1.discountMonths[i] == currentMonth) {
//       bestPrice = bestPrice * 0.8;
//       break;
//     }
//   }
//   return bestPrice * 12;
// }

// var response = calcAnnual()
var response = plan1.calcAnnual(0.5);

// console.log("TCL: result", response);

function checkPalindrome(text) {
  var reverseText = "";
  for (var i = text.length - 1; i >= 0; i--) {
    reverseText += text[i];
  }
  return text == reverseText ? "It's Palindrome" : "No It's Not A Palindrome!";
}

var output = checkPalindrome("pop");
// console.log("Output", output);

//Array Function
//1) Includes
//2) Reverse

var arr = ["Hasnain", "Ali", "Saad", "Sami"];
console.log("TCL: arr", arr);

var includes = arr.includes("Hasnain"); // check exsistence return boolean
var includes = arr.includes("Hasnain", 2); //check exsistence on specific index
// console.log("TCL: includes", includes);

var rev = arr.reverse(); // reverse your array elements
console.log("TCL: rev", rev);