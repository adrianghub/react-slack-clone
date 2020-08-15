import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyChWpaDDSNIqr7kvRwtQzasj8yNO5tSpeQ",
  authDomain: "react-slack-clone-ec3a4.firebaseapp.com",
  databaseURL: "https://react-slack-clone-ec3a4.firebaseio.com",
  projectId: "react-slack-clone-ec3a4",
  storageBucket: "react-slack-clone-ec3a4.appspot.com",
  messagingSenderId: "610361938704",
  appId: "1:610361938704:web:4863637b897a89f3cccb95"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;