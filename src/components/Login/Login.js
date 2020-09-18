import React, { useContext, useState } from 'react';
import './Login.css'
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebaseConfig';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router-dom';
import logo1 from '../../travel-guru-master/Icon/fb.png';
import logo from '../../travel-guru-master/Icon/google.png';
firebase.initializeApp(firebaseConfig);


const Login = () => {
    const [loggedInUser,setLoggedInUser] = useContext(UserContext);
    let history = useHistory();
    let location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };

const [newUser,setNewUser] = useState(false);
   const [user,setUser] = useState({
       isSignedIn : false,
       name : '',
       password : '',
       email: '',
       photo : ""
   })
   

            // FaceBook SignIn method;

    const handleFbSignIn = ()=>{
        var fbProvider = new firebase.auth.FacebookAuthProvider();
        firebase.auth().signInWithPopup(fbProvider)
        .then(res =>{
         var {displayName,photoURL, email}   = res.user;
         const signedInUser ={
            isSignedIn : true,
            name : displayName,
            email: email,
            photo: photoURL
         }
         setUser(signedInUser)
         setLoggedInUser(signedInUser)
         history.replace(from);
         console.log(displayName,photoURL, email)
        })
          
         .catch(function(error) {
       
            var errorCode = error.code;
            var errorMessage = error.message;   
            var email = error.email; 
            var credential = error.credential;   
          });
    }
    
            // Google SignIn method;

    const handleGoogleSignIn = ()=>{
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider)
        .then(res =>{
            var {displayName,photoURL, email}   = res.user;
            const signedInUser ={
                isSignedIn : true,
                name : displayName,
                email: email,
                photo: photoURL
             }
             setUser(signedInUser)
             setLoggedInUser(signedInUser)
             history.replace(from);
             console.log(displayName,photoURL, email)
          }).catch(function(error) {     
            var errorCode = error.code;
            var errorMessage = error.message;        
            var email = error.email;   
            var credential = error.credential;    
          });
    };
 
        // Local SignIn method;

    const handleBlur = (e)=>{
    let isFormValid = true;
    if(e.target.name === 'email'){
    isFormValid = /\S+@\S+\.\S+/.test (e.target.value)

    }if(e.target.name === 'password'){
    const isPasswordValid  = e.target.value.length > 6;
    isFormValid = isPasswordValid;
    }
    if (isFormValid){
    const newUserInfo = {...user};
    newUserInfo[e.target.name] = e.target.value;
    setUser(newUserInfo)
    }
    };



        //  Local Creating SignIn method;

        
const handleSubmit = (e)=>{
    if(newUser && user.email && user.password){
        firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
        .then(res =>{
            var {displayName, email}   = res.user;
            const signedInUser ={
                isSignedIn : true,
                name : displayName,
                email: email,
                
             }
             setUser(signedInUser)
             setLoggedInUser(signedInUser)
             history.replace(from);
             console.log(displayName,email)
          })
        .catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // ...
          });
    }
    if(!newUser && user.email && user.password){
        firebase.auth().signInWithEmailAndPassword(user.email, user.password)
        .then(res =>{
            var {displayName, email}   = res.user;
            const signedInUser ={
                isSignedIn : true,
                name : displayName,
                email: email,
              
             }
             setUser(signedInUser)
             setLoggedInUser(signedInUser)
             history.replace(from);
             console.log(displayName, email)
          })
        .catch(function(error) {
            var errorCode = error.code;
            var errorMessage = error.message;
          });
    }
 e.preventDefault()
}



    return (
        <div className=" form">
       

                    <form className="login-form" onClick={handleSubmit}>
                                
                    { newUser ? <div>
                    <h4>Create an account</h4>
                        <input type="text" placeholder="first name" onBlur={handleBlur}  name="first"  required />
                        <br/>
                        <input type="text" name="last"  placeholder="last name" required  />
                    </div> : <h4>Login</h4> }
                    
                        <input type="text" name="email" onBlur={handleBlur}  placeholder="Email/Gmail" required   />
                        
                        <br/>
                        <input type="password" name="password" onBlur={handleBlur}  placeholder="password" required  />
                        <br/>
                        <input type="password" name="conform password"  placeholder="conform password"  required />
                        <br/>
                    <input className="changeInput" type="submit" value={newUser ? 'Create an account' : 'Login'}/> 

                    </form>
                    <br/>
       
             <h6> don't have account?  <p style={{color:'orange'}} onClick={()=>setNewUser(!newUser)}> {newUser ? 'Login' :' create an account'} </p></h6>
            <br/>
            <button className="button" onClick={handleFbSignIn}><img className="logo" src={logo1} alt=""/>  sign In Using Facebook</button>
            <br/>   
            <button  className="button" onClick={handleGoogleSignIn}> <img className="logo" src={logo} alt=""/> google sign in</button>

        </div>
    );
};

export default Login;