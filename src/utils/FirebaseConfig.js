
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseManger = firebase.initializeApp({
    apiKey: "AIzaSyA_NrBrptgCAabi1YGFwWPkrRXJRuz7eZM",
    authDomain: "toolbox-94ef9.firebaseapp.com",
    databaseURL: "https://toolbox-94ef9-default-rtdb.firebaseio.com",
    projectId: "toolbox-94ef9",
    storageBucket: "toolbox-94ef9.appspot.com",
    messagingSenderId: "434769717697",
    appId: "1:434769717697:web:5662999cd92b8a03f06740",
    measurementId: "G-QJFMVV6NXT"

});

export default firebaseManger;


