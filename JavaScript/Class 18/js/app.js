// console.log("window" , window);

// window.location

//GETTING
var whereAt = location.href; //return current page url
var domainName = location.hostname; //domain name of current url
var directory = location.pathname; // directory of current url
var hashUrl = location.hash; //return targeted element hash

//SETTING
// location.href = "https://facebook.com" //nevigate to this url
// location.href = "https://facebook.com#abc" // hit on the specific tag

// location.assign("https://www.google.com"); //nevigate to this url
// location.replace("https://www.youtube.com") // nevigate and replace current url
// location.reload() // refresh your current page

//HISTORY
// history.back() // nevigate to previous url
//history.forward() // nevigate to next url if exists
//history.go(-3) // jump to back at desired number url
//history.go(3) // jump to forward at desired number url

// document.referrer; // return url where we came from

// var myCustomWindow = window.open()

// myCustomWindow.document.write("<h1>Hello World</h1>");

// window.open("../popUp.html");

// monkeyWindow.close();

// var monkeyWindow = window.open("monk.html", "win1");

// window.open("../popUp.html", "", "width=200,height=200");

// window.open("../popUp.html", "", "width=200,height=200,left=500,top=100");

var windowSpecs = "'faq.html', 'faq', 'width=420,height=380,left=200,top=100'";
// var faqPage = window.open(windowSpecs);
