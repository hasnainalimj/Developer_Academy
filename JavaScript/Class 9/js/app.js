// var multi = [true, 1, ["A", "B", "C"]];

// for(var i=0 ; i<multi.length; i++){
//   if(typeof(multi[i]) == "object"){
//     console.log("type of" , typeof(multi[i]));
//     for(var j=0; j<multi[i].length; j++){
//       console.log(multi[i][j]);
//     }
//   }
// }

var flag = true;
var s = "abc";

//Ternary Operators 1) ? 2) : //Single Line Condititon
//1) ? // If
//2) : //else

var age = 5;
// age == 5 ? console.log("allowed") : console.log("not allowed");

// age == 5
//   ? true == false
//     ? console.log("true")
//     : console.log("false")
//   : console.log("not allowed");

// var message = prompt("Enter your message");

// if(message.length > 10){
//   var result2 = message.slice(0,10) + "...";
// }else{
//   var result2 = message;
// }

// var result = message.length > 10 ? message.slice(0,10) + "..." : message;

// console.log("TCL: result", result)

var name = "muhammad saad"
var firstCharector = name.slice(0,1);
var otherCharectors = name.slice(1);

// firstCharector.toUpperCase() + otherCharectors;

var msg = "the quick brown  fox jumps over the lazy dog.";
var found = false;

for(var i=0; i<msg.length; i++){
  // console.log(msg[i]);
  if(msg.slice(i, i+2) == "  "){
    // console.log("found");
    break;
    // found = true;
  }
}

// if(found){
//   console.log(":yes");
// }else{
//   console.log(":no");
// }

var text = "the quick brown fox jumps over the lazy dog the quick brown fox jumps over the lazy dogthe quick brown fox jumps over the lazy dog";
var brownLength = 5;

// for(var i=0; i<text.length; i++){
//   if(text.slice(i , i + brownLength) == "brown"){
//     text = text.slice(0 , i) + "black" + text.slice(i+brownLength);
//   }
// }

// console.log(text.indexOf("brown"));

// text = text.slice(0,text.indexOf("brown")) + "blue" + text.slice(text.indexOf("brown")+brownLength);

// var newText = text.replace("brown" , "orange");//replace first
var newText = text.replace(/brown/g, "orange");//replace gloabally
// console.log(newText);

var text2 = "To be or not to be.";
var segIndex = text2.lastIndexOf("be")
text2 = text2.slice(0,segIndex) + "oye hoye" + text2.slice(segIndex+2);
// console.log("TCL: text2", text2)


var months = ['April' , 'January' , 'December'];
// for(var i=0; i<months.length; i++){
//   // console.log(months[i].slice(0,3));
// }

// console.log(text);

var applause = "Pakistan Zindabad";

// console.log(applause.charAt(9));
// console.log(applause.charAt(applause.length - 1));


//Maths Functions
var n1 = 2.99;
var n2 = -1.75;

// console.log(Math.round(n1));
// console.log(Math.round(n2));

// console.log(Math.ceil(n1));
// console.log(Math.ceil(n2));

// console.log(Math.floor(n1));
// console.log(Math.floor(n2));

// var code = Math.random(); // 0 1

// var code = Math.random() * 100;
// console.log("TCL: code", Math.round(code))

var integer = "2.99";
var numeric = 2;
// console.log(numeric.toString());
// console.log(parseFloat(integer) + 5)
// console.log(parseInt(integer) + 2)

// console.log(Number(integer));

var decimals = 2.32312321321321312321321;

// console.log(decimals.toFixed(5));




