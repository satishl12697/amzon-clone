import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyD2woAhF1czHhSWNBMQ7NDsOWhqTaB0xZo",
  authDomain: "clone-bcf48.firebaseapp.com",
  projectId: "clone-bcf48",
  storageBucket: "clone-bcf48.appspot.com",
  messagingSenderId: "979091353740",
  appId: "1:979091353740:web:f18f32c8b26e5b06f68ba9",
  measurementId: "G-G649ZKFLRG",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

// const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
