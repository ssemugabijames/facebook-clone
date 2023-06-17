import firebase from "firebase"

const firebaseConfig = {
  apiKey: "AIzaSyBjdDhHpq5viEGqvXl1b17t-OJ3wLNbGq0",
  authDomain: "fbook-f11d2.firebaseapp.com",
  projectId: "fbook-f11d2",
  storageBucket: "fbook-f11d2.appspot.com",
  messagingSenderId: "31306786728",
  appId: "1:31306786728:web:6615495cf5259439309f9d"
};
   
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider };
  export default db; 