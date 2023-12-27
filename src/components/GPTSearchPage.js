import React from 'react'
import GPTSearchBar from './GPTSearchBar'
import { BG_URL } from '../utils/constants'
import GPTMovieSuggestions from './GPTMovieSuggestions'

const GPTSearchPage = () => {
  return (
    <>
      <div className="fixed -z-10">
        <img src={BG_URL} alt='logo' className='h-screen object-cover sm:w-screen'/>
      </div>
      <div>
        <GPTSearchBar/>
        <GPTMovieSuggestions/>
    </div>
    </>
  )
}

export default GPTSearchPage
