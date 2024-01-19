import React from 'react'
import GPTSearchBar from './GPTSearchBar'
import GPTMovieSuggestions from './GPTMovieSuggestions'
import { changeLanguage } from "../../utils/Slices/configSlice";
import { SUPPORTED_LANG } from '../../utils/constants';
import { useDispatch } from 'react-redux';

const GPTSearchPage = () => {


  const dispatch = useDispatch();
  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  return (
    <>
      <div className='bg-[#222831] fixed h-full w-full'>
        <div className='relative top-20'>
          <select className="p-2 m-2 bg-gray-900 text-white" onChange={handleLanguageChange}>
            {SUPPORTED_LANG.map((lang) => (<option key={lang.identifier} value={lang.identifier}>{lang.name}</option>))}
          </select>
        </div>
        <GPTSearchBar/>
        <GPTMovieSuggestions/>
    </div>
    </>
  )
}

export default GPTSearchPage
