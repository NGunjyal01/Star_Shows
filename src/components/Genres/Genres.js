import { NavLink, Outlet } from "react-router-dom"
import { Genres } from "../../utils/constants"
import { useState ,useEffect} from "react";
import { FaChevronDown } from "react-icons/fa";

const Genre = () => {

  const [showOptionMenu,setShowOptionMenu] = useState(false);
  const [option,setOption] = useState("Comedy");
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

  const handleOptionMenuClick = ()=>{
    setShowOptionMenu(!showOptionMenu);
  }
  const handleOptionClick = (option) =>{
    setOption(option);
    setShowOptionMenu(false);
  };

  return (
    <div className={`bg-[#141414] ${option==="Select"?"h-screen":"h-full"}`}>
      <div className="fixed z-10 pt-[14.5%] md:pt-[4.7%] w-full">
        <div className={`flex flex-row pt-4 md:pt-1 pl-10 md:pl-20 ${isScrolled?'bg-[#141414]':''}`}>
          <h1 className="text-white mr-4 text-lg md:text-2xl">Genres :</h1>
          <button className="bg-white flex w-32 sm:w-60 rounded-lg" onClick={handleOptionMenuClick}><h1 className="mx-auto my-auto text-xs sm:text-base">{option}</h1> <FaChevronDown className="DropDownIcon mr-1 my-2"/></button>
        </div>
        {showOptionMenu && <div className={`fixed flex flex-wrap mt-2 ml-[6.5rem] text-black bg-white max-w-[15rem] sm:max-w-xs rounded-lg  ${isScrolled?'bg-opacity-100':'bg-opacity-50'}`}>
          {Genres.map(genre => <NavLink className={({isActive})=>`${isActive?'text-[#00ADB5]':""} m-1.5 md:hover:text-[#00ADB5] text-xs sm:text-base` } to={"/body/genre/"+genre.id} key={genre.id} onClick={()=>{handleOptionClick(genre.name)}}>{genre.name}</NavLink>)}
        </div>}
      </div>
      <Outlet/>
    </div>
  );
};

export default Genre;
