import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "login-glamzy.firebaseapp.com",
  projectId: "login-glamzy",
  storageBucket: "login-glamzy.appspot.com", // FIXED this (was .app by mistake)
  messagingSenderId: "224030323155",
  appId: "1:224030323155:web:4ad74fe3f80ba3c568ff26",
  measurementId: "G-KQV3LKVTQP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and provider
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };

