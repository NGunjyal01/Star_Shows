import React from 'react'
import { useSelector } from 'react-redux';
import MovieList from '../Common Features/MovieList';

const GPTMovieSuggestions = () => {

  const  {movieNames, movieResults} = useSelector(store => store.GPT);
  if(!movieNames) return null;
  return (
    <div className='p-4 m-4 bg-black text-white bg-opacity-90'>
      {movieNames.map((movieName,index) => <MovieList key={movieName} title={movieName} moovies={movieResults[index]} />)}
    </div>
  )
}

export default GPTMovieSuggestions
