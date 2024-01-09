import { useState,useRef } from "react";
import Header from "./Header/Header";
import {checkValidData} from "../utils/validate"
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import {auth} from "../utils/firebase"
import { useDispatch } from "react-redux";
import { addUser } from "../utils/Slices/userSlice";
import { BG_URL, USER_AVATAR } from "../utils/constants";
import { Outlet } from "react-router-dom";

const Login = ()=>{

    const [isSignIn,setIsSignIn] = useState(true);
    const [errorMessage,setErrorMessage] = useState(null);
    const name = useRef(null);
    const email = useRef(null);
    const password = useRef(null);
    const dispatch = useDispatch();
    const toggleSignIn = ()=>{
        setIsSignIn(!isSignIn);
    };

    const handleButtonClick = ()=>{
        //validate the form data
        const message = checkValidData(email.current.value,password.current.value);
        setErrorMessage(message);
        if(message) return;
        if(!isSignIn){
            //Sign Up Logic
            createUserWithEmailAndPassword(auth,email.current.value, password.current.value)
            .then((userCredential) => {
                // Signed up 
                const user = userCredential.user;
                updateProfile(user, {
                    displayName: name.current.value, photoURL: USER_AVATAR
                  }).then(() => {
                    // Profile updated!
                    const {uid,email,displayName,photoURL} = auth.currentUser;
                    dispatch(addUser({uid:uid, email:email, displayName:displayName, photoURL:photoURL}));
                  }).catch((error) => {
                    // An error occurred
                    setErrorMessage(error.message);
                  });
                
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setErrorMessage(errorCode+"-"+errorMessage);
                // ..
            });
        }
        else{
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setErrorMessage(errorCode+"-"+errorMessage);
            });
        }
    };

    return (  
        <div className="bg-[#222831] fixed h-full w-full" >
            <Header/>
            <form onSubmit={e=>e.preventDefault()} className="bg-[#393E46] p-12 w-auto md:w-3/12 my-40 mx-auto left-0 right-0 text-white bg-opacity-50  rounded-lg"> 
                <h1 className="text-3xl font-bold py-4">{isSignIn?"Sign In":"Sign Up"}</h1>
                {!isSignIn && <input ref={name} type="text" placeholder="Full Name" className="my-3.5 p-2 w-full text-black rounded-sm"/>}
                <input ref={email} type="text" placeholder="Email Address" className="my-3.5 p-2 w-full text-black rounded-sm"/>
                <input ref={password} type="password" placeholder="Password" className="my-3.5 p-2 w-full text-black rounded-sm"/>
                <p className="text-[#00ADB5] text-lg font-bold py-2">{errorMessage}</p>
                <button className="my-7 p-2 bg-[#00ADB5] w-full rounded-sm" onClick={handleButtonClick}>{isSignIn?"Sign In":"Sign Up"}</button>
                <h3 className="py-3" onClick={toggleSignIn}>{isSignIn?"New User? Sign Up":"Already a user? Sign In"}</h3>
            </form>
        </div>
    );
};

export default Login;