import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../../utils/Slices/userSlice";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { USER_AVATAR } from "../../utils/constants";
import {checkValidData} from "../../utils/validate"
import { auth } from "../../utils/firebase";
import { toggleIsSignIn } from "../../utils/Slices/loginSlice";

const EmailAndPasswordSignIn = () => {

    const isSignIn = useSelector(store => store.login.isSignIn);

    const [errorMessage,setErrorMessage] = useState(null);
    const name = useRef(null);
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const dispatch = useDispatch();

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
                    const {uid,email,displayName,phoneNumber,photoURL} = auth.currentUser;
                    dispatch(addUser({uid:uid, email:email, displayName:displayName,phoneNumber:phoneNumber, photoURL:photoURL}));
                  }).catch((error) => {
                    // An error occurred
                    setErrorMessage(error.message);
                  });
                
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setErrorMessage(errorCode+"-----------"+errorMessage);
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

    const handletoggleSignIn = ()=>{
        setEmail('');
        setPassword('');
        dispatch(toggleIsSignIn());
    };
    
    return (
        <>
            <h1 className="text-3xl font-bold py-4">{isSignIn?"Sign In":"Sign Up"}</h1>
            {!isSignIn && <input ref={name} type="text" placeholder="Full Name" className="my-3.5 p-2 w-full text-black rounded-sm"/>}
            <input type="text" placeholder="Email Address" className="my-3.5 p-2 w-full text-black rounded-sm" onChange={(e)=>{setEmail(e.target.value)}} value={email}/>
            <input type="password" placeholder="Password" className="my-3.5 p-2 w-full text-black rounded-sm" onChange={(e)=>{setPassword(e.target.value)}} value={password}/>
            <p className="text-[#00ADB5] text-lg font-bold py-2">{errorMessage}</p>
            <button className="my-2 p-2 bg-[#00ADB5] w-full rounded-sm" onClick={handleButtonClick}>{isSignIn?"Sign In":"Sign Up"}</button>
            <button className="mt-4" onClick={handletoggleSignIn}>{isSignIn?"New User? Sign Up":"Already a user? Sign In"}</button>
        </>
    );
};

export default EmailAndPasswordSignIn;
