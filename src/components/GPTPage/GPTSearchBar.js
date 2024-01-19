import { useDispatch, useSelector } from "react-redux"
import lang from "../../utils/languageConstants"
import { useRef } from "react";
import openai from "../../utils/openai";
import { API_OPTIONS } from "../../utils/constants";
import { addGPTMoviesResult } from "../../utils/Slices/GPTSlice";

const GPTSearchBar = () => {

    const dispatch = useDispatch();
    const langKey = useSelector(store => store.config.lang);
    const searchText = useRef(null);

    const searchMovie =  async(movie) =>{
        const data = await fetch('https://api.themoviedb.org/3/search/movie?query=' + movie + '&include_adult=false&language=en-US&page=1', API_OPTIONS);
        const json = await data.json();
        return json.results;
    };
    
    const handleGPTSearch = async()=>{
        console.log(searchText.current.value);
        //make an api call to get gpt api

        const GPTQuery = "Act as movie Recommendation System and suggest some movies for the query: " + searchText.current.value + ". only give name of 5 movies, comma seperated like the example given ahead. Example Result: Ra One, Animal, Dunki, Don, Gadar";

        const GPTResults = await openai.chat.completions.create({
            messages: [{ role: 'user', content: GPTQuery }],
            model: 'gpt-3.5-turbo',
        });
        if(!GPTResults) {}
        console.log(GPTResults.choices?.[0]?.message?.content);
        // Andaz Apna Apna, Hera Pheri, Chupke Chupke, Jaane Bhi Do Yaaro, Padosan
        const GPTMovies = GPTResults.choices?.[0]?.message?.content.split(",");
        // [Andaz Apna Apna, Hera Pheri, Chupke Chupke, Jaane Bhi Do Yaaro, Padosan]

        //Search Movie in TMDB API
        const promiseArray = GPTMovies.map(movie => searchMovie(movie));
        // [Promise, Promise, Promise, Promise, Promise]
        // promise.all will wait for all promises to finish
        const TMDBResults = await Promise.all(promiseArray);
        console.log(TMDBResults);
        dispatch(addGPTMoviesResult({movieNames:GPTMovies, movieResults:TMDBResults}));
        
    };

    return (
    <div className="pt-[35%] md:pt-[20%] flex justify-center">
        <form className="w-screen md:w-1/2 bg-[#393E46] grid grid-cols-12 mx-1" onSubmit={e => e.preventDefault()}>
        <input type="text" ref={searchText} placeholder={lang[langKey].GPTSearchPlaceholder} className="p-4 m-4 col-span-9 text-sm sm:text-base"/>
        <button className="sm:py-2 sm:px-4  mx-2 my-4 sm:my-4 sm:mx-4 bg-[#00ADB5] text-white rounded-md sm:rounded-lg col-span-3" onClick={handleGPTSearch}>{lang[langKey].search}</button>
        </form>
    </div>
    )
}

export default GPTSearchBar
