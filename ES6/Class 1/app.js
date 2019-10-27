// var name = "Abc"; //Global Scope
// var name = "Xyz";
var name = "Shan";
function caller() {
  let name = "Zia";
}
// caller();
let title = "Hasnain Ali";
title = 123;
const _pi = 3.142;
// _pi = 123;
function callMe() {
  const _pi = 123213;
}
callMe();

//2) MAP

let users = ["Ali", "Saad", "Sami", "Hasnain"];

// for (let i = 0; i < users.length; i++) {
//   console.log(users[i] + i);
// }

// users.map(function(value, index) {
//   return console.log(value, index);
// });

let data = [{ id: "1" }, { id: "2" }, { id: "3" }, { id: "1" }, { id: "2" }];

// data.map(function(val, ind) {
//   return console.log(val.id + ind);
// });

//FOR EACH
// users.forEach(function(value, index) {
//   return console.log(value + index);
// });

// data.forEach(function(value, index) {
//   return console.log(value.id);
// });

//FILTER
const newArray = data.filter(function(value, index) {
  return value.id != "1";
});
console.log("TCL: newArray", newArray);

// function sum() {
//   return 2 + 2;
// }

// const result = sum();
// console.log("TCL: result", result);

const mainElement = document.querySelector("#mainElement");

// mainElement.innerHTML = `<ul>
// <li>1</li>
// <li>2</li>
// </ul>`;

const names = ['Ali' , 'Saad' , 'Sami'];

names.map(function(value){
  return mainElement.innerHTML += `<h1>${value}</h1>`
})
