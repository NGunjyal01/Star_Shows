import { useSelector } from "react-redux";
import { USER_AVATAR } from "../utils/constants";


const MyAccount = () => {

  const user = useSelector(store => store.user);
  if(!user) return null;
  const { uid,email,displayName,phoneNumber,photoURL } = user;

  return (
    <div className="bg-[#141414] h-screen flex items-center justify-center sm:-mb-48 -mb-52">
      <div className="bg-[#181818] text-white sm:text-xl w-[80%] sm:w-[30%] sm:px-8 py-12 -mt-28 sm:mt-0 flex flex-col items-center rounded-lg">
        <img alt="User Icon" src={photoURL} className="w-20 rounded-lg my-2"/>
        <h1 className="my-2 font-mono font-semibold">Name: {displayName}</h1>
        <h1 className="my-2 font-mono font-semibold">Email: {email}</h1>
        <h1 className="my-2 font-mono font-semibold">Phone Number: {phoneNumber}</h1>
      </div>
    </div>
  );
};

export default MyAccount;
