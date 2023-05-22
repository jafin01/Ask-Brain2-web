import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getFunctions } from 'firebase/functions';

// const firebaseConfig = {
//   apiKey: 'AIzaSyAZiIXwcWWjcHOewcy-PMkGzPXTSsb7ASM',
//   authDomain: 'zvoid-chat-app.firebaseapp.com',
//   projectId: 'zvoid-chat-app',
//   storageBucket: 'zvoid-chat-app.appspot.com',
//   messagingSenderId: '1029187132078',
//   appId: '1:1029187132078:web:b777690746533f2b536b3f',
//   measurementId: 'G-7X7Z0NNBM1',
// };

const firebaseConfig = {
  apiKey: 'AIzaSyCpUQS9U_sK__7GQ9a33ntIAfz5SNgSBEc',
  authDomain: 'askbrain2-local.firebaseapp.com',
  projectId: 'askbrain2-local',
  storageBucket: 'askbrain2-local.appspot.com',
  messagingSenderId: '827763672794',
  appId: '1:827763672794:web:41ce718a0e652ed3d007e3',
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const functions = getFunctions(app);
const auth = getAuth(app);

export { db, functions, auth };
