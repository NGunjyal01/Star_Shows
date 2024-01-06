import { useEffect,useRef,useState } from "react";
import { auth } from "../utils/firebase";
import { Link, useNavigate,NavLink } from "react-router-dom";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/Slices/userSlice";
import { PiUserListFill } from "react-icons/pi";
import { FaSearch } from "react-icons/fa";
import { addSearchInput } from "../utils/Slices/mainMovieSlice";

const Header = ({showSearch}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const [isOpen,setIsOpen] = useState(false);
  const [searchInput,setSearchInput] = useState('');

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      });
  };

  const handleSearch = () =>{
    dispatch(addSearchInput(searchInput));
    navigate("/body/explore");
  };

  const handleMenuClick = () =>{
    setIsOpen(false);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/body/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => unsubscribe();
  }, []);

  return (
    <div className="fixed z-20 w-full px-8 py-4 text-[#EEEEEE]">
      {user && (
        <div className="grid grid-cols-12 w-full items-center">
          <h1 className="text-xl md:text-4xl font-bold top-10 col-span-4 md:col-span-2 hover:text-[#00ADB5]">L O G O</h1>
          <div className="hidden md:block col-span-4 mx-auto text-lg">
            <NavLink to="/body/browse" className={({isActive}) => `px-2 hover:text-[#00ADB5] ${isActive?"text-[#00ADB5]":""}`}>Home</NavLink>
            <NavLink to="/body/movies" className={({isActive}) => `px-2 hover:text-[#00ADB5] ${isActive?"text-[#00ADB5]":""}`}>Movies</NavLink>
            <NavLink to="/body/tvshows" className={({isActive}) => `px-2 hover:text-[#00ADB5] ${isActive?"text-[#00ADB5]":""}`}>TV Shows</NavLink>
            <NavLink to="/body/mylist" className={({isActive}) => `px-2 hover:text-[#00ADB5] ${isActive?"text-[#00ADB5]":""}`}>My List</NavLink>
            <NavLink to="/body/genre" className={({isActive}) => `px-2 hover:text-[#00ADB5] ${isActive?"text-[#00ADB5]":""}`}>Genre</NavLink>
            <NavLink to="/body/GPTSearch" className={({isActive}) => `px-2 hover:text-[#00ADB5] ${isActive?"text-[#00ADB5]":""}`}>GPT Search</NavLink>
          </div>
          {showSearch && <div className="col-span-8 md:col-span-6 mx-auto w-1/2 flex items-center" onClick={handleSearch}>
            <input type="text" placeholder="Search" className="w-full md:p-4 md:pl-1 pl-1 p-2 text-black h-6 rounded-md" onChange={(e)=>{setSearchInput(e.target.value)}}/>
            <div className="ml-2">
              <span class="changecolor"> 
                <FaSearch onmouseover={({ target }) => (target.style.color = "#00ADB5")}
                  onmouseout={({ target }) => (target.style.color = "#EEEEEE")} size={25} className="" onClick={handleSearch}/>
               </span>
            </div>
            {/* <button className="mx-2 hover:text-[#00ADB5]">Search</button> */}
          </div>}
          <div className="absolute right-5 md:right-10">
            <span class="changecolor"> 
              <PiUserListFill size={40}
                onmouseover={({ target }) => (target.style.color = "#00ADB5")}
                onmouseout={({ target }) => (target.style.color = "#EEEEEE")}
                onClick={() => {setIsOpen(!isOpen)}}
              />
            </span>
          </div>
          {isOpen && <div className="absolute right-10 bg-[#EEEEEE] bg-opacity-60 top-14 text-black">
              <ul className="transition-all duration-300 ease-in-out items-center"> 
                <li className="px-4 py-2 w-full hover:bg-[#00ADB5]"><NavLink to="/body/account" className={({isActive}) => `${isActive?"text-white":""}`} onClick={handleMenuClick}> My Account</NavLink></li>
                <li className="block sm:hidden px-4 py-2 w-full hover:bg-[#00ADB5]"><NavLink to="/body/browse" className={({isActive}) => `${isActive?"text-[#00ADB5]":""}`} onClick={handleMenuClick}>Home</NavLink></li>
                <li className="block sm:hidden px-4 py-2 w-full hover:bg-[#00ADB5]"><NavLink to="/body/movies" className={({isActive}) => `${isActive?"text-[#00ADB5]":""}`} onClick={handleMenuClick}>Movies</NavLink></li>
                <li className="block sm:hidden px-4 py-2 w-full hover:bg-[#00ADB5]"><NavLink to="/body/tvshows" className={({isActive}) => `${isActive?"text-[#00ADB5]":""}`}onClick={handleMenuClick} >TV Shows</NavLink></li>
                <li className="block sm:hidden px-4 py-2 w-full hover:bg-[#00ADB5]"><NavLink to="/body/mylist" className={({isActive}) => `${isActive?"text-[#00ADB5]":""}`}onClick={handleMenuClick} >My List</NavLink></li>
                <li className="block sm:hidden px-4 py-2 w-full hover:bg-[#00ADB5]"><NavLink to="/body/genre" className={({isActive}) => `${isActive?"text-[#00ADB5]":""}`}onClick={handleMenuClick} >Genre</NavLink></li>
                <li className="block sm:hidden px-4 py-2 w-full hover:bg-[#00ADB5]"><NavLink to="/body/GPTSearch" className={({isActive}) => `${isActive?"text-[#00ADB5]":""}`}onClick={handleMenuClick} >GPT Search</NavLink></li>
                <li className="px-4 py-2 w-full hover:bg-[#00ADB5]"><button onClick={handleSignOut}> Sign Out </button> </li>
              </ul>
            </div>
          }
        </div>
      )}
    </div>
  );
};

export default Header;
