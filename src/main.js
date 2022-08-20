import { createApp } from 'vue';
// import { initializeApp } from 'firebase/app'; // 原
import firebase from 'firebase/app';
import App from './App.vue';
import router from './router';

const firebaseConfig = {
  apiKey: 'AIzaSyBHV_uNf4IzzTz-jZe5lRho4igp2d3bwb4',
  authDomain: 'logintest-1bb5b.firebaseapp.com',
  databaseURL: 'https://logintest-1bb5b-default-rtdb.firebaseio.com',
  projectId: 'logintest-1bb5b',
  storageBucket: 'logintest-1bb5b.appspot.com',
  messagingSenderId: '974290874661',
  appId: '1:974290874661:web:fdc47c218e8ed98f4deacc',
};

// initializeApp(firebaseConfig); // 原
firebase.initializeApp(firebaseConfig);
const app = createApp(App);
app.use(router);
app.mount('#app');
