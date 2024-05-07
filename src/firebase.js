// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyDcUIinYnPq4NSQE4inSWewJDjQR1YciWo',
  authDomain: 'fir-auth-server-e78d0.firebaseapp.com',
  databaseURL: 'https://fir-auth-server-e78d0-default-rtdb.firebaseio.com',
  projectId: 'fir-auth-server-e78d0',
  storageBucket: 'fir-auth-server-e78d0.appspot.com',
  messagingSenderId: '872170879929',
  appId: '1:872170879929:web:ac0a3a6ff526a2a1971468',
  measurementId: 'G-MN47LGQ7B5',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);
// const analytics = getAnalytics(app);
