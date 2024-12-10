// Firebase SDK'sını yükleyip yapılandırıyoruz
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getDatabase, ref, set, onValue } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";

// Firebase yapılandırma bilgilerinizi buraya ekleyin
const firebaseConfig = {
  apiKey: "AIzaSyAmVJtTH4fLdCOzimoarzyZUuw-BILyBTM",
  authDomain: "collaborativetexteditor-24d04.firebaseapp.com",
  databaseURL: "https://collaborativetexteditor-24d04-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "collaborativetexteditor-24d04",
  storageBucket: "collaborativetexteditor-24d04.firebasestorage.app",
  messagingSenderId: "31010636294",
  appId: "1:31010636294:web:65f2040b27097e8c91b987"
};

// Firebase'i başlatıyoruz
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

// Veritabanı referansını oluştur
const textRef = ref(db, "sharedText");

// Metni dinle ve göster
onValue(textRef, (snapshot) => {
  const editor = document.getElementById("editor");
  if (snapshot.exists()) {
    editor.value = snapshot.val(); // Firebase'deki metni göster
  }
});

// Kullanıcı metin alanına bir şey yazarsa Firebase'e kaydet
const editor = document.getElementById("editor");
editor.addEventListener("input", (e) => {
  set(textRef, e.target.value); // Firebase'e yeni metni yaz
});
