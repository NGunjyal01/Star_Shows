import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import { useState } from 'react';
import { RecaptchaVerifier, signInWithPhoneNumber } from 'firebase/auth';
import { auth } from '../../utils/firebase';

const PhoneNumberSignIn = () => {

    // const [name,setName] = useState('');
    const [phone,setPhone] = useState('');
    const [OTP,setOTP] = useState('');
    const [user,setUser] = useState('');

    const sendOTP = () => {
        const recaptchaVerifier = new RecaptchaVerifier(auth, 'recaptcha-container', {});
        const confirmation = signInWithPhoneNumber(auth, phone, recaptchaVerifier)
        .then((confirmationResult) => {
          // SMS sent. Prompt user to type the code from the message, then sign the
          // user in with confirmationResult.confirm(code).
          // ...
            setUser(confirmationResult);
        }).catch((error) => {
          // Error; SMS not sent
          // ...
          // console.log(error.message);
        });
    };
    
    const verifyOTP = () =>{
        user.confirm(OTP).then((result) => {
            // User signed in successfully.
            const user = result.user;
            // ...
          }).catch((error) => {
            // User couldn't sign in (bad verification code?)
            // ...
          });
    };

    return (
        <>
            {/* <input type='text' placeholder='Display Name' className='p-2 my-2 w-full rounded-sm' value={name} onChange={(e)=>{setName(e.target.value)}}/> */}
            <PhoneInput placeholder="Enter phone number" defaultCountry='IN' value={phone} onChange={setPhone} className='w-full my-2 text-black' style={{ padding: '10px' }}/>
            <button className="my-2 p-2 bg-[#00ADB5] w-1/2 rounded-sm text-white" onClick={sendOTP}>Send OTP</button>
            <div id='recaptcha-container' className='my-2'></div>
            <input type='text' placeholder='Enter OTP' className='p-2 my-2 w-full rounded-sm text-black' value={OTP} onChange={(e)=>{setOTP(e.target.value)}}/>
            <button className="my-2 p-2 bg-[#00ADB5] w-1/2 rounded-sm text-white" onClick={verifyOTP}>Verify OTP</button>
         </>
    );
};

export default PhoneNumberSignIn;
