var firebaseConfig = {};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();

//ADD
//Generate Random Doc Id
addData = () => {
  const payload = {
    productName: "Zinger",
    price: 150
  };
  try {
    db.collection("Products")
      .add(payload)
      .then(res => {
        console.log("res", res);
      });
  } catch (error) {
    console.log("error while adding", error);
  }
};

// addData();

//GET
//1) Complete Collection
//2) Doc

//1
getProducts = () => {
  try {
    db.collection("Products")
      .get()
      .then(res => {
        res.forEach(doc => {
          console.log(doc.data());
        });
      });
  } catch (error) {
    console.log("error while getting all data", error);
  }
};

// getProducts();

getSpecificDocument = () => {
  try {
    db.collection("Products")
      .doc("5aV4Tecn0cpmwybikaZg")
      .get()
      .then(doc => {
        console.log(doc.data());
      });
  } catch (error) {
    console.log("error while get specific", error);
  }
};

// getSpecificDocument();

updateMyDoc = () => {
  const payload = {
    price: 300,
    type: "Fast Foods"
  };
  try {
    db.collection("Products")
      .doc("5aV4Tecn0cpmwybikaZg")
      .update(payload)
      .then(() => {
        console.log("Doc Updated");
      });
  } catch (error) {
    console.log("error while update doc", error);
  }
};

// updateMyDoc();

deleteDoc = () => {
  try {
    db.collection("Products")
      .doc("mMnP05OGLh9SkhGiMA2P")
      .delete()
      .then(() => {
        console.log("deleted");
      });
  } catch (error) {
    console.log("error while deleting doc", error);
  }
};

// deleteDoc();

createNestedProduct = () => {
  const payload = {
    name: "Saad",
    price: 150
  };
  try {
    db.collection("Products")
      .doc("5aV4Tecn0cpmwybikaZg")
      .collection("PurchasedBy")
      .add(payload)
      .then(res => {
        console.log("res", res);
      });
  } catch (error) {
    console.log("error while nested collections", error);
  }
};

// createNestedProduct();

getNestedPurchaseOrder = () => {
  try {
    db.collection("Products")
      .doc("5aV4Tecn0cpmwybikaZg")
      .collection("PurchasedBy")
      .get()
      .then(res => {
        res.forEach(doc => {
          console.log(doc.data());
        });
      });
  } catch (error) {
    console.log("error while getting nested collections", error);
  }
};

// getNestedPurchaseOrder();

//Set
//Update/Add
//Add My Own Doc Id
//Merge True

addUpdateDoc = () => {
  const payload = {
    productName: "Motorolla",
    price: 12500
  };

  // const payload = {
  //   type: "Mobile"
  // };
  try {
    db.collection("Products")
      .doc("123123123")
      .set(payload, { merge: true })
      .then(() => {
        console.log("product add/updated!");
      });
  } catch (error) {
    console.log("error while add/updated", error);
  }
};

// addUpdateDoc();
