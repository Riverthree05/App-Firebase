
import { initializeApp, getApps, getApp } from 'firebase/app';
import { initializeFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyC0Isk4dkNLTi86gUehvXL2YRfi40YMVEg",
  authDomain: "domotic-45548.firebaseapp.com",
  databaseURL: "https://domotic-45548-default-rtdb.firebaseio.com",
  projectId: "domotic-45548",
  storageBucket: "domotic-45548.firebasestorage.app",
  messagingSenderId: "756315165447",
  appId: "1:756315165447:web:12f9fb96bb64eb5bc76ba2"
};


// Evita error de instancia duplicada
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();

// 🚨 Usa initializeFirestore con estas opciones:
const db = initializeFirestore(app, {
  experimentalForceLongPolling: true,
  useFetchStreams: false
});

const auth = getAuth(app);

export { db, auth };