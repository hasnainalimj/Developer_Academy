var firebaseConfig = {
  apiKey: "AIzaSyCpgGg_dpByQJK0NWabKK0ipG0LUDtC68s",
  authDomain: "testing-dev-academy.firebaseapp.com",
  databaseURL: "https://testing-dev-academy.firebaseio.com",
  projectId: "testing-dev-academy",
  storageBucket: "testing-dev-academy.appspot.com",
  messagingSenderId: "813716802205",
  appId: "1:813716802205:web:233afddf2abbc19b1be274"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

let unsubscibe;

const db = firebase.firestore();

//WHERE Clause
// getLimitedData = () => {
//   try {
//     db.collection("quantities")
//       .where("value", "==", 2)
//       .get()
//       .then(res => {
//         // console.log(res.size);
//         res.forEach(doc => {
//           console.log(doc.data());
//         });
//       });
//   } catch (error) {}
// };

// getLimitedData = () => {
//   try {
//     db.collection("quantities")
//       .where("value", ">", 2) // < , > , <= , >=
//       .get()
//       .then(res => {
//         // console.log(res.size);
//         res.forEach(doc => {
//           console.log(doc.data());
//         });
//       });
//   } catch (error) {}
// };

// getLimitedData = () => {
//   try {
//     db.collection("quantities")
//       .where("value", "==", 2)
//       .where("key", "==", "b")
//       .get()
//       .then(res => {
//         // console.log(res.size);
//         res.forEach(doc => {
//           console.log(doc.data());
//         });
//       });
//   } catch (error) {}
// };

// getLimitedData = () => {
//   try {
//     db.collection("quantities")
//       .where("value", "<=", 2)
//       .where("key", "==", "b")
//       .get()
//       .then(res => {
//         // console.log(res.size);
//         res.forEach(doc => {
//           console.log(doc.data());
//         });
//       });
//   } catch (error) {}
// };

//ORDER BY (asc(default) , desc)
// getLimitedData = () => {
//   try {
//     db.collection("quantities")
//       // .orderBy("key")
//       // .orderBy("value")
//       // .orderBy("value", "desc")
//       .orderBy("key", "desc")
//       .get()
//       .then(res => {
//         // console.log(res.size);
//         res.forEach(doc => {
//           console.log(doc.data());
//         });
//       });
//   } catch (error) {}
// };

//LIMIT
// getLimitedData = () => {
//   try {
//     db.collection("quantities")
//       .limit(2)
//       .get()
//       .then(res => {
//         // console.log(res.size);
//         res.forEach(doc => {
//           console.log(doc.data());
//         });
//       });
//   } catch (error) {}
// };

// let biggest = citiesRef.where('population', '>', 2500000)
// .orderBy('population').limit(2);

// getLimitedData = () => {
//   try {
//     db.collection("quantities")
//       .orderBy("value")
//       .startAt(5)
//       .endAt(6)
//       .get()
//       .then(res => {
//         // console.log(res.size);
//         res.forEach(doc => {
//           console.log(doc.data());
//         });
//       });
//   } catch (error) {}
// };

// getLimitedData();

addItem = () => {
  const item = document.querySelector("#textUser").value;

  try {
    db.collection("items")
      .add({ item })
      .then(res => {
        alert("Item Added");
      });
  } catch (error) {
    console.log("TCL: addItem -> error", error);
  }
};

// getItems = () => {
//   let parent = document.querySelector("#parent");
//   try {
//     db.collection("items")
//       .get()
//       .then(res => {
//         res.forEach(doc => {
//           parent.innerHTML += `<li>${doc.data().item}</li>`;
//         });
//       });
//   } catch (error) {}
// };

getItems = () => {
  let parent = document.querySelector("#parent");
  try {
    unsubscibe = db.collection("items").onSnapshot(res => {
      parent.innerHTML = "";
      res.forEach(doc => {
        parent.innerHTML += `<li>${doc.data().item}</li>`;
      });
    });
  } catch (error) {}
};

// getItems();

stopRequest = () => {
  unsubscibe();
};

addNumber = () => {
  const txtNumber = document.querySelector("#txtNumber").value;

  try {
    db.collection("integers")
      .doc("123123")
      .set({
        num: txtNumber
      })
      .then(
        () => {
          alert("Updated");
        },
        { merge: true }
      );
  } catch (error) {}
};
