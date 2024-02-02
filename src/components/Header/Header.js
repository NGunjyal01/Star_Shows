import { useEffect,useState } from "react";
import { auth } from "../../utils/firebase";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../../utils/Slices/userSlice";
import SideMenu from "./SideMenu";
import SearchBar from "./SearchBar";
import TopMenu from "./TopMenu";
import { addDoc, collection, doc, getDoc, setDoc } from "firebase/firestore";
import { getFirestore } from "firebase/firestore";

const Header = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const [isScrolled, setIsScrolled] = useState(false);

  // Add a scroll event listener to detect when the user is scrolling
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      // Check if the user has scrolled past a certain point (e.g., 100px)
      setIsScrolled(scrollTop > 50);
    };

    // Attach the event listener
    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener when the component is unmounted
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // Empty dependency array to only run the effect once

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if(user) {
        const { uid, email, displayName, phoneNumber, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            phoneNumber: phoneNumber,
            photoURL: photoURL,
          })
        );
        const db = getFirestore();
        const docRef = doc(db, "Users",uid);
        getDoc(docRef).then((docSnap)=>{
          if(!docSnap.exists()){
            // docSnap.data() will be undefined in this case
            setDoc(docRef,{
              movies:[],
              tvShows:[],
            });
            // console.log("new doc created")
          }
        })
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <div className={`fixed z-20 w-full px-8 py-4 text-[#EEEEEE] ${isScrolled?"bg-[#141414] transition-all duration-300":""}`}>
      {user && (
        <div className="grid grid-cols-12 w-full items-center">
          <h1 className="text-xl md:text-4xl font-bold top-10 col-span-4 md:col-span-2 md:hover:text-[#00ADB5]">L O G O</h1>
          <TopMenu/>
          <SearchBar/>
          <SideMenu/>
        </div>
      )}
    </div>
  );
};

export default Header;
