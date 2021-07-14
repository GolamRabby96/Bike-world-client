import React, { useContext, useState } from 'react';
import firebase from 'firebase';
import "firebase/auth";
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router';
import google from '../../photos/gg.jpg'
import './Login.css'
import firebaseConfig from './firebaseConfig';

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig); 
 }else {
    firebase.app(); // if already initialized, use that one
 }
           

function Login() {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const history = useHistory();
  const location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };

  const googleProvider = new firebase.auth.GoogleAuthProvider();

  const handleSignIn = () => {
     firebase.auth()
     .signInWithPopup(googleProvider)
     .then((result) => {
       var credential = result.credential;
       var token = credential.accessToken;
       var user = result.user;
       setLoggedInUser(user)
       sessionStorage.setItem('email',user.email);
       history.replace(from);
     }).catch((error) => {
       var errorCode = error.code;
       var errorMessage = error.message;
       var email = error.email;
       var credential = error.credential;
     });
  }

  return (
    <div className="google">
        <img onClick={handleSignIn} src={google} alt=""/>
        <p>Continue with Google</p>

    </div>
  );
}


export default Login; 