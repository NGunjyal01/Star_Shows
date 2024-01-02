import React from 'react'
import GPTSearchBar from './GPTSearchBar'
import { BG_URL } from '../utils/constants'
import GPTMovieSuggestions from './GPTMovieSuggestions'

const GPTSearchPage = () => {
  return (
    <>
      <div className='bg-[#222831] fixed h-full w-full'>
        <GPTSearchBar/>
        <GPTMovieSuggestions/>
    </div>
    </>
  )
}

export default GPTSearchPage
