//Prompt

// var fullName = prompt("Enter your name!");

// console.log(fullName)

// var age = +prompt("Enter your age!");

// console.log(age)

// var spec = prompt("Your species?", "human"); //default value
// console.log("TCL: spec", spec)

// var num1 = prompt("Enter Number One");
// var num2 = prompt("Enter Number Two");

// alert(num1 + num2);

// window.prompt() //Old Approach

//Comparsion Operators
// it returns always boolean value
// what is boolean? 0 1
//0 means false
//1 means true

//1 == check both values are equal              200==200 / 2 == 1
//2 >= check greater than and equals to     10 >=10  / 11 >= 9  / 10 >= 11
//3 <= check lesser than and equals to      10 <= 11  / 9 <= 9   /  5 <= 2
//4 != check value is not equals to             10 != 10  / 10 != 9
//5 === check boths values equals with datatype + value         5 === 5  / "5" === 5
//6 >  check only greater than value        11 > 10 / 11 > 11 / 10 > 20
//7 <  check only lesser than value           10 < 11  /  10 < 9  / 11 < 11

// 100 != 200 // true
// 500 <= 501 // true
// 200 >= 100 // true
// 100 != 100 // false

//IF STATEMENTS

// if(condition){
//statement
// }

// var age = +prompt("Enter your age");

// if(age == 25){
//     alert("user allowed")
// }

// if(age === "25"){
//     alert("user allowed")
// }

// if(age >= 25){
//     alert("user allowed")
// }

// if(age <= 25){
//     alert("user allowed")
// }

// if(age < 25){
//     alert("user allowed")
// }

// if(age > 25){
//     alert("user allowed")
// }

// if(age != 25){
//     alert("user allowed")
// }

// var score = 0;
// var q1 = prompt("What is Apple?");
// var q2 = prompt("What is Bike?");
// var q3 = prompt("What is Laptop?");
// var q4 = prompt("What is Name?");
// var q5 = prompt("What is Programming?");

// if (q1 == "fruit") {
//   ++score;
//   console.log("TCL: score", score);
// }

// if (q2 == "vehicle") {
//   ++score;
//   console.log("TCL: score", score);
// }

// if (q3 == "machine") {
//   ++score;
//   console.log("TCL: score", score);
// }

// if (q4 == "identity") {
//   ++score;
//   console.log("TCL: score", score);
// }

// if (q5 == "sir ka dard") {
//   ++score;
//   console.log("TCL: score", score);
// }

// alert("you scored : " + score);

// var country = prompt("Enter Your Country");

// if(country == "Pakistan"){
//     alert("Our Country");
// }else{
//     alert("Pakistan zindabad");
// }

// var percentage = +prompt("Enter Your Percentage");

// if (percentage >= 80) {
//   alert("A1 grade");
// } else if (percentage >= 70) {
//   alert("A grade");
// } else if (percentage >= 60) {
//   alert("B grade");
// } else if (percentage >= 50) {
//   alert("C grade");
// } else if (percentage >= 40) {
//   alert("D grade");
// } else if (percentage >= 35) {
//   alert("E grade");
// } else {
//   alert("Failed :)");
// }

// if (percentage >= 80) {
//   alert("A1 grade");
// }

// if (percentage >= 70) {
//   alert("A grade");
// }

// if (percentage >= 60) {
//   alert("B grade");
// }

// if (percentage >= 50) {
//   alert("C grade");
// }

// if (percentage >= 40) {
//   alert("D grade");
// }

// if (percentage >= 35) {
//   alert("E grade");
// }

// if (percentage < 35) {
//   alert("Failed :)");
// }

//CONDITIONAL / LOGICAL OPERATORS
// && (AND) // return true / false
// || (OR) // return true / false

var n = 10;
var n2 = 10;
var n3 = 9;

//AND OPERATOR
// if(n==10 && n2==10 && n3==9){
//     alert("And Success");
// }else{
//     alert("And Failed");
// }

//OR OPERATOR
// if(n==0 || n2 == 10 || n3 == 1){
//     alert("OR Success");
// }else{
//     alert("And Failed");
// }
//false   true    true     false      true
// var exam = 7>8 && 7<8 && 8==8 || 6!=6 && "Mj" === "MJ";

// var exam = (7>8 && 7<8) && 8==8 || 6!=6 && "Mj" === "MJ";

//true                  //false
// var exam = (7!=8 && 7<8) && (8==8 && 6!=6) && "Mj" === "MJ";

//true                  //true                     //true
// var exam = (7!=8 && 7<8) && (8==8 && 5!=6) && "Mj" === "Mj";

// console.log("TCL: exam", exam)

// var city = prompt("Enter your city!");

// if (city == "karachi") {
//   var area = prompt("enter your area");
//   if (area == "malir") {
//     console.log("full kachra");
//   } else {
//     console.log("kam kachra");
//   }
// } else {
//   var area = prompt("enter your other area");
//   if (area == "lahore") {
//     console.log("gadha khao gy");
//   } else {
//     console.log("behtreen");
//   }
// }
