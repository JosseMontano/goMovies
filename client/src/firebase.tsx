// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyAps-i4jcF9CRPq1NUVN4Vs95e1oXaYA3I",

  authDomain: "gomovies-2f287.firebaseapp.com",

  projectId: "gomovies-2f287",

  storageBucket: "gomovies-2f287.appspot.com",

  messagingSenderId: "973492262571",

  appId: "1:973492262571:web:7a0f29c44a47ff0c3649ee",
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export default app;
