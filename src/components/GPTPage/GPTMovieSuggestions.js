import React from 'react'
import { useSelector } from 'react-redux';
import Mo_Tv_List from '../Common Features/Mo_Tv_List';

const GPTMovieSuggestions = () => {

  const  {movieNames, movieResults} = useSelector(store => store.GPT);
  if(!movieNames) return null;
  return (
    <div className='p-4 m-4 bg-black text-white bg-opacity-90'>
      {movieNames.map((movieName,index) => <Mo_Tv_List key={movieName} heading={movieName} MoTv={movieResults[index]} type={"Movie"}/>)}
    </div>
  )
}

export default GPTMovieSuggestions
