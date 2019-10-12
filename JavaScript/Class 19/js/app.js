// function checkForLastName() {
//   if (document.getElementById("lastNameField").value.length === 0) {
//     alert("Please enter your last name");
//     return false;
//   }
// }

// function checkForLastName(event) {
//   event.preventDefault();
//   var targetField = document.getElementById("lastNameField");
//   if (targetField.value.length === 0) {
//     alert("Please enter your last name");
//     targetField.focus();
//     return false;
//   }
// }

// function checkForLastName(event) {
//   event.preventDefault();
//   var targetField = document.getElementById("lastNameField");
//   if (targetField.value.length === 0) {
//     alert("Please enter your last name");
//     targetField.focus();
//     targetField.style.background = "yellow";
//     return false;
//   }
//   targetField.style.background = "white";
// }

// function checkForSelection(event) {
//   event.preventDefault();
//   if (document.getElementById("states").selectedIndex === 0) {
//     alert("Please select a state.");
//     return false;
//   }
// }

// function validateRadios(event) {
//   event.preventDefault();
//   var radios = document.getElementsByName("r1");
//   for (var i = 0; i < radios.length; i++) {
//     if (radios[i].checked) {
//       return true;
//     }
//   }
//   alert("Please check one.");
//   return false;
// }

// isNaN("pakistan") //return true false check is charectore or not

// function validateEmail() {
//   var eEntered = document.getElementById("email").value;
//   if (eEntered.indexOf(" ") !== -1) {
//     alert("No spaces allowed in address");
//     return false;
//   }
// }

// function validateZIP() {
//   var numChars = document.getElementById("zip").value.length;
//   if (numChars < 5) {
//     alert("Please enter a 5-digit code.");
//     return false;
//   }
// }

// function validateZIP() {
//   var valueEntered = document.getElementById("zip").value;
//   var numChars = valueEntered.length;
//   if (numChars < 5) {
//     alert("Please enter a 5-digit code.");
//     return false;
//   }
//   for (var i = 0; i <= 4; i++) {
//     var thisChar = parseInt(valueEntered[i]);
//     if (isNaN(thisChar)) {
//       alert("Please enter only numbers.");
//       return false;
//     }
//   }
// }

// function validateEmail() {
//   var addressIsLegal = true;
//   var eEntered = document.getElementById("address").value;

//   if (eEntered.indexOf(" ") !== -1) {
//     alert("No space allowed!");
//   }

//   if (
//     eEntered.indexOf("@") < 1 ||
//     eEntered.indexOf("@") > eEntered.length - 5
//   ) {
//     alert("invalid email address!");
//   }
// }
