import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyDAveP8Vu0nAzU6RnhK4NKYBJhqLAUlTTE',
  authDomain: 'todo-app-react-7f827.firebaseapp.com',
  projectId: 'todo-app-react-7f827',
  storageBucket: 'todo-app-react-7f827.appspot.com',
  messagingSenderId: '245382051123',
  appId: '1:245382051123:web:7ba0a3c57c27751cfd7a46',
  measurementId: 'G-1ME9RXM9SL',
});

const db = firebaseApp.firestore();

export default db;
