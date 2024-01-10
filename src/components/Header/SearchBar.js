import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaSearch } from "react-icons/fa";
import { addSearchInput } from "../../utils/Slices/mainMovieSlice";
import { useLocation, useNavigate } from "react-router-dom";

const SearchBar = () => {

    const showSearchBar = useSelector(store => store.config.showSearchBar);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {pathname} = useLocation();
    const [searchInput,setSearchInput] = useState('');

    const handleSearch = () =>{
        dispatch(addSearchInput(searchInput));
        navigate("/body/explore");
    };

    const handleKeyDown = (e) => {
        // Handle keydown events
        if(e.key === 'Enter') {
            handleSearch();
        }
    };

    useEffect(()=>{
        if(pathname.substr(6,14) !== 'explore'){
            setSearchInput('');
        };
    },[pathname]);

    return (
        <>
            {showSearchBar && <div className="col-span-8 md:col-span-6 mx-auto w-2/3 md:w-1/2 flex items-center" onClick={handleSearch} onKeyDown={handleKeyDown}>
                <input type="text" placeholder="Search" className="w-full md:p-4 md:pl-1 pl-1 p-2 text-black h-6 rounded-md" onChange={(e)=>{setSearchInput(e.target.value)}} value={searchInput}/>
                <div className="ml-2">
                    <span class="changecolor"> 
                        <FaSearch onmouseover={({ target }) => (target.style.color = "#00ADB5")}
                        onmouseout={({ target }) => (target.style.color = "#EEEEEE")} className="SearchIcon" onClick={handleSearch}/>
                    </span>
                </div>
            </div>}
        </>
    )
}

export default SearchBar
