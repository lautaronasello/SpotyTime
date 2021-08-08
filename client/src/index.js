import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import firebase from 'firebase/app';

var firebaseConfig = {
  apiKey: 'AIzaSyAP35CyhRorrKJqtHhBFJUhvYZcNV2zE1w',
  authDomain: 'spotytune.firebaseapp.com',
  projectId: 'spotytune',
  storageBucket: 'spotytune.appspot.com',
  messagingSenderId: '560664364176',
  appId: '1:560664364176:web:aef234b63af7c1bc858415',
  measurementId: 'G-CQZKWEVWSN',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
