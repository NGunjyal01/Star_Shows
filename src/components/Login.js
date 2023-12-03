import { useState,useRef } from "react";
import Header from "./Header";
import {checkValidData} from "../utils/validate"

const Login = ()=>{

    const [isSignIn,setIsSignIn] = useState(true);
    const [errorMessage,setErrorMessage] = useState(null);
    const email = useRef(null);
    const password = useRef(null);

    const toggleSignIn = ()=>{
        setIsSignIn(!isSignIn);
    };

    const handleButtonClick = ()=>{
        //validate the form data
        // console.log(email.current.value);
        // console.log(password.current.value);
        const message = checkValidData(email.current.value,password.current.value);
        // console.log(message);
        setErrorMessage(message);
    };

    return (
        <div>
            <Header/>
            <div className="absolute">
                <img  src='https://assets.nflxext.com/ffe/siteui/vlv3/c906271d-7184-4eec-83c9-b6d4c1a068ec/728874a6-eeda-400a-9bcf-a935a1408a4f/IN-en-20231127-popsignuptwoweeks-perspective_alpha_website_large.jpg'
                alt='logo'/>
            </div>
            <form onSubmit={e=>e.preventDefault()} className="absolute bg-black p-12 w-3/12 my-40 mx-auto left-0 right-0 text-white bg-opacity-80 rounded-lg"> 
                <h1 className="text-3xl font-bold py-4">{isSignIn?"Sign In":"Sign Up"}</h1>
                {!isSignIn && <input type="text" placeholder="Full Name" className="my-3.5 p-2 w-full bg-gray-600 rounded-sm"/>}
                <input ref={email} type="text" placeholder="Email Address" className="my-3.5 p-2 w-full bg-gray-600 rounded-sm"/>
                <input ref={password} type="password" placeholder="Password" className="my-3.5 p-2 w-full bg-gray-600 rounded-sm"/>
                <p className="text-red-600 text-lg font-bold py-2">{errorMessage}</p>
                <button className="my-7 p-2 bg-red-600 w-full rounded-sm" onClick={handleButtonClick}>{isSignIn?"Sign In":"Sign Up"}</button>
                <h3 className="py-3" onClick={toggleSignIn}>{isSignIn?"New to Netflix? Sign Up":"Already a user? Sign In"}</h3>
            </form>
        </div>
    );
};

export default Login;