var firebaseConfig = {};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const provider = new firebase.auth.GoogleAuthProvider();

googleLogin = () => {
  firebase
    .auth()
    .signInWithPopup(provider)
    .then(function(result) {
      let user = result.user;
    })
    .catch(function(error) {
      console.log("error", error);
    });
};

//Update User Profile
// firebase.auth().onAuthStateChanged(function(user) {
//   if (user) {
//     user
//       .updateProfile({
//         displayName: "Jane Q. User",
//         photoURL: "https://example.com/jane-q-user/profile.jpg"
//       })
//       .then(function() {
//         console.log("updated");
//       })
//       .catch(function(error) {
//         console.log("TCL: error", error);
//       });
//     console.log("TCL: user", user);
//     console.log("yes");
//   } else {
//     console.log("no");
//   }
// });

//Check User State
// firebase.auth().onAuthStateChanged(function(user) {
//   if (user) {
//     console.log("TCL: user", user);
//     console.log("yes");
//   } else {
//     console.log("no");
//   }
// });

// firebase.auth().onAuthStateChanged(function(user) {
//   if (user) {
//     user
//       .updateEmail("mjhasnain15@gmail.com")
//       .then(function() {
//         console.log("email updated");
//       })
//       .catch(function(error) {
//         // An error happened.
//       });
//   } else {
//     console.log("no");
//   }
// });

// firebase.auth().onAuthStateChanged(function(user) {
//   if (user) {
//     user
//       .sendEmailVerification()
//       .then(function() {
//         // Email sent.
//       })
//       .catch(function(error) {
//         // An error happened.
//       });
//   } else {
//     console.log("no");
//   }
// });

// firebase.auth().onAuthStateChanged(function(user) {
//   if (user) {
//     user
//       .updatePassword("1234556")
//       .then(function() {
//         console.log("new password");
//       })
//       .catch(function(error) {
//         // An error happened.
//       });
//   } else {
//     console.log("no");
//   }
// });

// auth.sendPasswordResetEmail(emailAddress).then(function() {
//   // Email sent.
// }).catch(function(error) {
//   // An error happened.
// });

// user.delete().then(function() {
//   // User deleted.
// }).catch(function(error) {
//   // An error happened.
// });

// user.reauthenticateWithCredential().then(function() {
//   // User re-authenticated.
// }).catch(function(error) {
//   // An error happened.
// });
