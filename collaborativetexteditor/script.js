// Loading and configuring Firebase SDK
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getDatabase, ref, set, onValue } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";

// Add your Firebase configuration here
const firebaseConfig = {
  apiKey: "AIzaSyAmVJtTH4fLdCOzimoarzyZUuw-BILyBTM",
  authDomain: "collaborativetexteditor-24d04.firebaseapp.com",
  databaseURL: "https://collaborativetexteditor-24d04-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "collaborativetexteditor-24d04",
  storageBucket: "collaborativetexteditor-24d04.firebasestorage.app",
  messagingSenderId: "31010636294",
  appId: "1:31010636294:web:65f2040b27097e8c91b987"
};

// Initializing Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

// Create a database reference
const textRef = ref(db, "sharedText");

// Listen to the text and display it
onValue(textRef, (snapshot) => {
  const editor = document.getElementById("editor");
  if (snapshot.exists()) {
    editor.value = snapshot.val(); // Show the text from Firebase
  }
});

// If the user types in the text area, save to Firebase
const editor = document.getElementById("editor");
editor.addEventListener("input", (e) => {
  set(textRef, e.target.value); // Save new text to Firebase
});
