import React, { useRef , useState } from 'react';
import background from './backgroundimage.jpg'
import './App.css';

import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/analytics';

import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';


firebase.initializeApp({
  // your config
  
    apiKey: "AIzaSyATsSeCApsSYCZkc2BU56LHAyyU2G0Ho0I",
    authDomain: "anchorai.firebaseapp.com",
    projectId: "anchorai",
    storageBucket: "anchorai.appspot.com",
    messagingSenderId: "794710237215",
    appId: "1:794710237215:web:ae4650f182b5ea7f5c352a",
    measurementId: "G-KZZ9VYXEFP"
});


const auth = firebase.auth();
const firestore = firebase.firestore();
const analytics = firebase.analytics();


function App() {

  const [user] = useAuthState(auth);

  return (
    <div className="App" style = {{ backgroundImage: `url(${background})` }}>
    
    
      <header>
      
        <h1>
          
       <img viewBox="4.5 1.5 51 49" 
        alt = "anchorphoto" 
        className = "logoimage" 
        src={"https://static-00.iconduck.com/assets.00/anchor-emoji-499x512-gvel479b.png"}/>
        anchor
        <sup>ai</sup> 
          
        </h1>
        <SignOut/>
        </header>

      <section>


      {user ? <h1 className = "banner">Welcome Back!</h1> : <h1 className = "banner">Get Started</h1>}
       {user ? <DashBoard/> : <SignIn/>}

      </section>


    </div>
  );
}




function SignIn(){


  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  }


  return (
    
     
    <button className="sign-in" onClick= {signInWithGoogle}> <img className="googlelogo" alt ="google logo" src={"https://image.flaticon.com/icons/png/512/2702/2702602.png"}/> <span className="logmessage">Log In With Google</span></button>
   
  )

  
  
}

function SignOut () {


  return auth.currentUser && (
    <button className="sign-out" onClick={() => auth.signOut()}> Sign Out</button>
  
    )
  }

  function DashBoard() {

    return (
      <p></p>
    )
  }
  
  
  export default App;
