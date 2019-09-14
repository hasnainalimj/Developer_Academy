// adding(2,2);
// adding(5 , 10)

function callName() {
  var name = "shan";
  var num = 12.232323;
  console.log(name);
}

function addNums() {
  console.log(2 + 2);
}

//Parameterized Functions
function sayHi(name) {
  console.log("hi, ", name);
}

function adding(num1, num2) {
  console.log(num1 + num2);
}

var greeting = "happy birthday";

function greet(param) {
  console.log(param);
}

// greet(greeting);

//Return
// function returnSomething(){
//     return 123123213;
//     console.log("false");
// }

// var result = returnSomething();

// console.log(result);

function calcTot(merchTot) {
    var orderTot;
  if (merchTot >= 100) {
    orderTot = merchTot;
  } else if (merchTot < 50.01) {
    orderTot = merchTot + 5;
  } else {
    orderTot = merchTot + 5 + 0.03 * (merchTot - 50);
  }
    return orderTot;
}

// calcTot(20);

// var res = calcTot(10);
// console.log(res);

// var response = 

// sayHi("Ali");
// callName();
// addNums();

function checkPassword(pass,cpass){
    if(pass == cpass){
        return "Password Matched";
    }else{
        return "Password not matched";
    }
}

// var pass = prompt("enter password");
// var cpass = prompt("enter confirm password");

// var output = checkPassword(pass , cpass);

// console.log(output);

// alert(checkPassword("a", "a"));
// console.log(checkPassword("a", "a"));

