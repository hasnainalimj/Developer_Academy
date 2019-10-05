//1) Local Storage
//2) Set Time Out
//3) Set Time Interval

localStorage.setItem("string" , "hello world");
// localStorage.setItem("string" , "hello pakistan");
localStorage.setItem("boolean" , true);
// localStorage.setItem("boolean" , false);
localStorage.setItem("number" , 123);
// localStorage.setItem("number" , 123.123);

var arr = [1,2,3,4,5];
//1)JSON.strigify();
var settingArray = JSON.stringify(arr)
localStorage.setItem("array" ,settingArray);

var obj = {
  name : "Ali",
  age : 25
}

var settingObj = JSON.stringify(obj);
localStorage.setItem("object" , settingObj);

var strings = localStorage.getItem("string")
// document.write(strings)
var boolean = localStorage.getItem("boolean")
// document.write(boolean)
var number = localStorage.getItem("number")
// document.write(number)

var gettingArray = JSON.parse(localStorage.getItem('array'));
//JSON.parse();
// console.log("TCL: gettingArray", gettingArray)


var gettingArray = JSON.parse(localStorage.getItem('object'));
// console.log("TCL: gettingArray", gettingArray)

localStorage.removeItem("boolean");
// console.log("TCL: localStorage", localStorage)
localStorage.clear();


// console.log("TCL: setTimeout", setTimeout)
// console.log(1);
// setTimeout(function(){
//   console.log("2");
// },0)

// console.log(3);

// setTimeout(function(){
//   console.log(":)")
// },2000)

// setInterval(function(){
//   console.log("Hello")
// },2000)

name = "abc";
// console.log(name);

setTimeout(function(){
  // clearInterval(stopwatch);
},0);

var stopwatch = setInterval(function(){
  // console.log("Hello");
},2000);


//THE DOM
// var parent = document.getElementById('parent');
// var ps = parent.getElementsByTagName('p');
// console.log("TCL: ps", ps)

// var img = document.getElementById('img');

//1) hasAttribute return boolean
// var check = img.hasAttribute("class");
// var check = img.hasAttribute("height");
// console.log("TCL: check", check)

//2) getAttribute value / null
// var getAtt = img.getAttribute('width');
// var getAtt = img.getAttribute('class');
// console.log("TCL: getAtt", getAtt)

// img.setAttribute('class' , 'abc');
// console.log("TCL: img", img)


// var body = document.getElementsByTagName('body');
// body[0].setAttribute('id' , 'body');
// console.log("TCL: body", body[0])

// img.attributes;
// console.log("TCL: img.attributes;", img.attributes)


var wrapper = document.getElementById("wrapper");
var para = document.getElementById('para');
var h1 = document.createElement('h1');
h1.innerHTML = "Pakistan Zindabad";
h1.setAttribute('class' ,'h1')
wrapper.appendChild(h1);
// wrapper.insertBefore(h1,para)
// wrapper.insertBefore(h1 , wrapper.childNodes[1])

wrapper.removeChild(para);