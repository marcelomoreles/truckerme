import firebase from 'firebase/app';
import 'firebase/database';


const firebaseConfig = {
    apiKey: "AIzaSyCDoTvpD-Xq8GOszpnyI35DW9DZRBaKV-o",
    authDomain: "tracker-280322.firebaseapp.com",
    databaseURL: "https://tracker-280322.firebaseio.com",
    projectId: "tracker-280322",
    storageBucket: "tracker-280322.appspot.com",
    messagingSenderId: "286734186349",
    appId: "1:286734186349:web:f74ecef444a8f8d5d40c64",
    measurementId: "G-7HTXWKCQMG"
};


export const firebaseImpl = firebase.initializeApp(firebaseConfig);
export const firebaseDatabase = firebase.database();