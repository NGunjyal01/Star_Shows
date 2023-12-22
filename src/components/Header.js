import React from 'react';
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { useSelector } from 'react-redux';

const Header = () => {

  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const handleSignOut = () =>{
    signOut(auth).then(() => {
      // Sign-out successful.
      navigate('/');
    }).catch((error) => {
      // An error happened.
      
    });
  };
      
  return (
    <div className='absolute w-screen px-8 py-4 z-10 flex justify-between'>
      <img className='w-44' src='https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png'
      alt='logo'/>
      {user && <div className='flex'>
        <img className='w-20' src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="logo"></img>
        <button className='underline' onClick={handleSignOut}>Sign Out</button>
      </div>}
    </div>
  )
}

export default Header
