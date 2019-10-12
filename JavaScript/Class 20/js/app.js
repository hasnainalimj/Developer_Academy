// function greetWorld() {
//   var greeting = "Hello world!";
//   aler(greeting);
// }

// greetWorld();
// console.log("yes it is");

// function greetWorld() {
//   try {
//     var greeting = "Hello world!";
//     aler(greeting);
//   } catch (error) {
//     console.log("error", error);
//   }
// }

// greetWorld();

// console.log("yes it is");

function checkPassword() {
  try {
    var password = prompt("Enter your password!");
    if (!password) {
      throw "Password can't be empty!";
    }

    if (password.length < 6) {
      throw "Password should be 6 charectors at least!";
    }

    if (password.indexOf(" ") !== -1) {
      throw "No spaces in the password, please.";
    }
  } catch (error) {
    console.log(error);
  }
}

checkPassword();
