import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCBAp3Xhd25fSA8GI8E752r4BHtlSmRkbw",
  authDomain: "socailanimals-99e5a.firebaseapp.com",
  projectId: "socailanimals-99e5a",
  storageBucket: "socailanimals-99e5a.appspot.com",
  messagingSenderId: "235623593428",
  appId: "1:235623593428:web:c53a59af81e39fdf79d241",
  measurementId: "G-LMGHHRXP6Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

// export const addTodo = async data => {
// const result =await addDoc(collection(db, "todos"), data)

// },



      


export default app;
// const analytics = getAnalytics(app);
// 