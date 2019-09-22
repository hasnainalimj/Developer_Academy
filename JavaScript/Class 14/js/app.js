function addElements(){
  var parent =  document.getElementById('parent');
  parent.innerHTML = "<p>Hello World</p>";
}

// addElements();

function changeImage(img){
  var picture = document.getElementById('image');
  picture.src = img;
}

function manipulatePara(){
  var element  = document.getElementById('paraOne');
  element.className = 'hide';
}

// var paraTwo = document.getElementById("paraTwo");
// paraTwo.className += " para";

// var linkingTag = document.getElementById('linkingTag');
// linkingTag.href = "https://www.google.com";

// var paragraph = document.getElementsByTagName('p');
// paragraph[5].innerHTML = "saad ao khusbu laga kr"
// // console.log(paragraph[5]);
// for(var i=0; i<paragraph.length; i++){
//   if( i % 2 == 0){
//     paragraph[i].style.color = "blue";
//   }else{
//     paragraph[i].style.color = "red";
//   }

//   if(paragraph[i].innerHTML == "Hello World"){
//     paragraph[i].innerHTML = "bhar m jao"; 
//   }
// }

var listings = document.getElementById('listings');

var nestedLists = listings.getElementsByTagName('li');
// console.log("TCL: nestedLists", nestedLists)

