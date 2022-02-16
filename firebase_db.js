var firebase = require('firebase')



 const firebaseConfig = {
  apiKey: "YOUR-API-KEY",
  authDomain: "YOUR-AUTH-DOMAIN",
  projectId: "YOUR-PROJECT-ID",
  storageBucket: "YOUR-STORAGE-BUCKET",
  messagingSenderId: "YOUR-MESSAGING-SENDER-ID",
  appId: "YOUR-APP-ID",
  measurementId: "YOUR-MEASUREMENT-ID"
};


firebase.initializeApp(firebaseConfig)

let database = firebase.firestore()
//console.log(database)

// database.collection("users").add({
//   first: "Ada",
//   last: "Lovelace",
//   born: 1815
// })
// .then((docRef) => {
//   console.log("Document written with ID: ", docRef.id);
// })
// .catch((error) => {
//   console.error("Error adding document: ", error);
// });

database.collection("users").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      console.log(doc.data())    })
})