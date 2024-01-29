import { useLocation, useNavigate } from "react-router-dom";


const PlayBtn = ({id}) => {

    const navigate = useNavigate();
    const {pathname} = useLocation();
    const path = pathname.substr(1,7)==="tvshows"?"/tvshows/":"/movies/"

    const handleButtonClick = ()=>{
      navigate(path+id);
    }

    return (
        <button className='px-7 py-1 sm:px-14 sm:py-4 bg-white text-black font-bold rounded-lg md:hover:bg-opacity-80' onClick={handleButtonClick}>Play</button>
    )
}

export default PlayBtn
