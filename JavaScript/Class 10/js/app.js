//Date / Time

var date = new Date()
date = date.getTime();
// console.log("TCL: date", date)
// date = date.toString()
// console.log("TCL: date", date.toString().slice(0,10));

var weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]; 
// var day = date.getDay()
// console.log("TCL: day", weekDays[day])

// var mili = date.getMilliseconds();
// console.log("TCL: mili", mili)

// var allSeconds = date.getTime();
// console.log("TCL: allSeconds", allSeconds);

var doomsday = new Date("June 30, 2035")
doomsday = doomsday.getTime();

var difference = doomsday - date;
// var daysTillDoom = Math.floor(difference / (1000 * 60 * 60 * 24));
// console.log(new Date(doomsday));

var d = new Date();

// d.setDate(14);
// d.setMonth(7);
d.setFullYear(2020 , 7 , 14);

console.log(d);
