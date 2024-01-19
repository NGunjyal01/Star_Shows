import { useEffect } from 'react';
import { API_OPTIONS } from '../../utils/constants';
import { useDispatch } from 'react-redux';
import { addMainTVShowDetails } from '../../utils/Slices/mainTVShowSlice';

const useTVShowDetails = (tvShow_id) => {

    const dispatch = useDispatch();

    const getTVShowDetais = async()=>{
        const data = await fetch("https://api.themoviedb.org/3/tv/"+tvShow_id, API_OPTIONS);
        const json = await data.json();
        dispatch(addMainTVShowDetails(json));
    };

    useEffect(()=>{
        getTVShowDetais();
    },[tvShow_id]);
}

export default useTVShowDetails;
