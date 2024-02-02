import { useEffect } from 'react';
import { API_OPTIONS } from '../../utils/constants';
import { useDispatch } from 'react-redux';
import { addMainTVShowCast, addMainTVShowDetails } from '../../utils/Slices/mainTVShowSlice';

const useTVShowDetails = (tvShow_id) => {

    const dispatch = useDispatch();

    const getTVShowDetais = async()=>{
        const data = await fetch("https://api.themoviedb.org/3/tv/"+tvShow_id, API_OPTIONS);
        const json = await data.json();
        dispatch(addMainTVShowDetails(json));
    };

    const getMainTVShowCast = async()=>{
        const data = await fetch("https://api.themoviedb.org/3/tv/" + tvShow_id + "/credits",API_OPTIONS);
        const json = await data.json();
        dispatch(addMainTVShowCast(json.cast));
    };

    useEffect(()=>{
        getTVShowDetais();
        getMainTVShowCast();
    },[tvShow_id]);
}

export default useTVShowDetails;
