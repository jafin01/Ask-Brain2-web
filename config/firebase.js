import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getFunctions } from 'firebase/functions';
import { getStorage } from 'firebase/storage';
import { getAnalytics, isSupported } from 'firebase/analytics';

const firebaseConfig = {
  apiKey: 'AIzaSyAZiIXwcWWjcHOewcy-PMkGzPXTSsb7ASM',
  authDomain: 'zvoid-chat-app.firebaseapp.com',
  projectId: 'zvoid-chat-app',
  storageBucket: 'zvoid-chat-app.appspot.com',
  messagingSenderId: '1029187132078',
  appId: '1:1029187132078:web:b777690746533f2b536b3f',
  measurementId: 'G-7X7Z0NNBM1',
};

const app = initializeApp(firebaseConfig, 'AskBrain2');
const db = getFirestore(app);
const functions = getFunctions(app);
const auth = getAuth(app);
const storage = getStorage(app);
const analytics = isSupported().then((yes) => (yes ? getAnalytics(app) : null));

export { db, functions, auth, storage, analytics };
