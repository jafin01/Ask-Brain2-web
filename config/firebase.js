import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getFunctions } from 'firebase/functions';

const firebaseConfig = {
  apiKey: 'AIzaSyAZiIXwcWWjcHOewcy-PMkGzPXTSsb7ASM',
  authDomain: 'zvoid-chat-app.firebaseapp.com',
  projectId: 'zvoid-chat-app',
  storageBucket: 'zvoid-chat-app.appspot.com',
  messagingSenderId: '1029187132078',
  appId: '1:1029187132078:web:b777690746533f2b536b3f',
  measurementId: 'G-7X7Z0NNBM1',
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const functions = getFunctions(app);

export { db, functions };
