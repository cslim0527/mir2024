// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAvKKlsYoUr1ma0Fp6KZ-TRcfAIucYc9pw",
  authDomain: "mir2024-6abc6.firebaseapp.com",
  projectId: "mir2024-6abc6",
  storageBucket: "mir2024-6abc6.appspot.com",
  messagingSenderId: "1011947189845",
  appId: "1:1011947189845:web:ff037ea1c73e9270f406dc",
  measurementId: "G-BJYMCFLEM0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export default app;
