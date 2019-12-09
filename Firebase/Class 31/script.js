var firebaseConfig = {

};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

uploadImage = () => {
  const selectedImage = document.querySelector("#filePicker").files[0];
storeInStorage(selectedImage).then(res => {
  console.log("uri", res);
})
};

storeInStorage = file => {
  const fileName = Math.round(Math.random() * 1000000)
  const data = new Promise((resolve, reject) => {
    storage
      .ref()
      .child("/images/" + fileName + ".jpg")
      .put(file)
      .then(() => {
        storage.ref().child("/images/" + fileName + ".jpg").getDownloadURL().then(uri => {
          resolve(uri);
        })
      });
  });
  return data;
};

//CONCLOSURES

function caller(firstName , lastName){
  const greetings = "Hello ";

  function sayHello(){
    return  greetings + firstName + "  " + lastName;
  }

  return sayHello();
}

// const result = caller("Ali" , "Ali");
// console.log("TCL: result", result)

//Methods of Functions
//1) call();
//2) apply();

let obj = {
  name : "Abc",
  age : "Def"
}

let obj2 = {
  getData : (name , age) => {
    console.log(name , age);
  }
}

obj2.getData().call(obj , name , age);

