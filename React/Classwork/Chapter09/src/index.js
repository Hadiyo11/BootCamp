import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyD0_QPd73q07osXKESlB2ccK5eDmgrjIE0",
  authDomain: "my-first-react-project-7d594.firebaseapp.com",
  projectId: "my-first-react-project-7d594",
  storageBucket: "my-first-react-project-7d594.appspot.com",
  messagingSenderId: "899922143622",
  appId: "1:899922143622:web:3acf4d602a94b06cf42407",
  measurementId: "G-273HJMCEK5"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
