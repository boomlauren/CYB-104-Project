
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";
  import { getAuth } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-auth.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyBNflT8O3ZA7izsLKOQIEje5H7CXqg2leI",
    authDomain: "schoolauthapp-86011.firebaseapp.com",
    projectId: "schoolauthapp-86011",
    storageBucket: "schoolauthapp-86011.firebasestorage.app",
    messagingSenderId: "839778884084",
    appId: "1:839778884084:web:5a4d044947f5c1dc8081a1",
    measurementId: "G-2X129S3KXJ"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

  export { auth };