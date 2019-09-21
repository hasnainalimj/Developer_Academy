function sayHi(name) {
  alert("hi : " + name);
}

function upload() {
  var txtEmail = (document.getElementById("txtEmail").value = "abcdef");
  if (!txtEmail) {
    alert("Please Enter Your Email!");
  } else {
    alert(txtEmail);
  }
}

function getUsername() {
  var h1 = document.getElementById("username");
  h1.style.color = "red";
}

// getUsername();

// var s = document.getElementById('orderLists');
// console.log("TCL: orderLists", orderLists)

function check(code) {
  var txtLine = document.getElementById("txtLine");
  
  switch (code) {
    case "031":
      txtLine.value = "Zong";
      break;

    case "0340":
      txtLine.value = "Telenor";
      break;

    case "0320":
      txtLine.value = "Warid";
      break;

    case "0330":
      txtLine.value = "Ufone";
      break;

    case "0300":
      txtLine.value = "Jazz";
      break;

    default:
      txtLine.value = "PTCL";
  }
}

function caller(){ 
  var code = prompt("Enter Code.........");
  !code ? alert("Please Enter Code") : check(code);
}
