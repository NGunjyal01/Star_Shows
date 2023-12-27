import React from 'react'
import GPTSearchBar from './GPTSearchBar'
import { BG_URL } from '../utils/constants'

const GPTSearchPage = () => {
  return (
    <div>
    <div className="fixed -z-10">
        <img  src={BG_URL} alt='logo'/>
    </div>
      <GPTSearchBar/>
    </div>
  )
}

export default GPTSearchPage
