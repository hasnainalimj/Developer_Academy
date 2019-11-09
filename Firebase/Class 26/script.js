var firebaseConfig = {};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

function signup() {
  try {
    const email = document.querySelector("#txtEmail").value;
    const pass = document.querySelector("#txtPass").value;
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, pass)
      .then(res => {
        console.log("res", res);
      });
  } catch (error) {
    alert(error.message);
    console.log("error while signup", error);
  }
}

signin = () => {
  try {
    const email = document.querySelector("#txtEmail").value;
    const pass = document.querySelector("#txtPass").value;
    firebase
      .auth()
      .signInWithEmailAndPassword(email, pass)
      .then(res => {
        console.log("TCL: signin -> res", res);
      });
  } catch (error) {
    console.log("error while signin", error);
  }
};
