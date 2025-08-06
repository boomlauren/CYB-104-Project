const firebaseConfig = {
  apiKey: "AIzaSyBNflT8O3ZA7izsLKOQIEje5H7CXqg2leI",
  authDomain: "schoolauthapp-86011.firebaseapp.com",
  projectId: "schoolauthapp-86011",
  storageBucket: "schoolauthapp-86011.firebasestorage.app",
  messagingSenderId: "839778884084",
  appId: "1:839778884084:web:5a4d044947f5c1dc8081a1",
  measurementId: "G-2X129S3KXJ",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = firebase.auth();

// Export the auth object for use in other files
export { auth };