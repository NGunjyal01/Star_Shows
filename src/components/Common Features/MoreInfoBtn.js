import { useLocation, useNavigate } from "react-router-dom";

const MoreInfoBtn = ({id}) => {

    const navigate = useNavigate();
    const {pathname} = useLocation();
    const path = pathname.substr(1,7)==="tvshows"?"/tvshows/":"/movies/";
    const handleButtonClick = ()=>{
      const finalPath = path+id;
      if(finalPath!==pathname)  navigate(finalPath);
      else window.scrollTo({ top: 666, behavior: "smooth" });
    }

    return (
        <button className='hidden md:inline-block px-14 py-4 text-white font-bold bg-[#393E46] rounded-lg md:hover:bg-opacity-80' onClick={handleButtonClick}>More Info</button>
    )
}

export default MoreInfoBtn
