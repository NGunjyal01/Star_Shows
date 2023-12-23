import React,{useEffect} from 'react';
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { signOut,onAuthStateChanged } from 'firebase/auth';
import { useDispatch, useSelector } from 'react-redux';
import { addUser,removeUser } from '../utils/userSlice';
import { LOGO } from '../utils/constants';

const Header = () => {

  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const handleSignOut = () =>{
    signOut(auth).then(() => {
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
      
    });
  };

  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (user) {
          const {uid,email,displayName,photoURL} = user;
          dispatch(addUser({uid:uid, email:email, displayName:displayName, photoURL:photoURL}));
          navigate("/browse");
        } else {
          // User is signed out
          dispatch(removeUser());
          navigate("/");
        }
      });
      return () => unsubscribe();
  },[]);
      
  return (
    <div className='absolute w-screen px-8 py-4 z-10 flex justify-between bg-gradient-to-b from-black'>
      <img className='w-44' src={LOGO} alt='logo'/>
      {user && <div className='flex'>
        <img className='w-20' src={user?.photoURL} alt="avatar"></img>
        <button className='text-white' onClick={handleSignOut}>Sign Out</button>
      </div>}
    </div>
  )
}

export default Header
