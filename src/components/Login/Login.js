import { useState } from "react";
import { signInWithPopup } from "firebase/auth";
import {auth, googleAuthProvider} from "../../utils/firebase"
import { FcGoogle } from "react-icons/fc";
import { FaSquarePhone } from "react-icons/fa6";
import EmailAndPasswordSignIn from "./EmailAndPasswordSignIn";
import PhoneNumberSignIn from "./PhoneNumberSignIn";

const Login = ()=>{

    const [phoneNumberSignIn,setPhoneNumberSignIn] = useState(false);

    const handleGoogleSignIn = ()=>{
        signInWithPopup(auth, googleAuthProvider)
        .then((result) => {
        }).catch((error) => {
            // // Handle Errors here.
            // const errorCode = error.code;
            // const errorMessage = error.message;
            // // The email of the user's account used.
            // const email = error.customData.email;
            // // The AuthCredential type that was used.
            // const credential = GoogleAuthProvider.credentialFromError(error);
            // // ...
  });
    }
    const handletogglePhoneNumberSignIn = ()=>{
        setPhoneNumberSignIn(!phoneNumberSignIn);
    };

    return (  
        <div className="bg-[#222831] fixed h-full w-full" >
            <div className="flex items-center justify-center h-screen">
                <form onSubmit={e=>e.preventDefault()} className="bg-[#393E46] pt-7 px-12 pb-4 w-auto md:w-3/12 text-white bg-opacity-50 rounded-lg flex flex-col items-center"> 
                    {phoneNumberSignIn?<PhoneNumberSignIn/>:<EmailAndPasswordSignIn/>}
                    <h1 className="py-4"> or you can sign in with</h1>
                    <div className="flex">
                        {phoneNumberSignIn?<button className="w-10" onClick={handletogglePhoneNumberSignIn}>back</button>:<FaSquarePhone className="LoginIcon mx-1 cursor-pointer" onClick={handletogglePhoneNumberSignIn}/>}
                        <FcGoogle className="LoginIcon mx-1 cursor-pointer" onClick={handleGoogleSignIn}/>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;