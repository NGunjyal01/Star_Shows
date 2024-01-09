import React from 'react'
import Header from './Header/Header'
import { Outlet, ScrollRestoration, useLocation } from 'react-router-dom'
import Footer from './Footer';
import { useDispatch } from 'react-redux';
import { toggleShowGenreOptions, toggleShowSearchBar } from '../utils/Slices/configSlice';

const Body = () => {
    
    const dispatch = useDispatch();
    const location = useLocation();
    const showSearchBar = location.pathname.substr(6) !== 'GPTSearch';
    const showGenreOptions = location.pathname.substr(6,5) === 'genre';
    dispatch(toggleShowSearchBar(showSearchBar));
    dispatch(toggleShowGenreOptions(showGenreOptions));

    return (
        <>
            <Header/>
            <Outlet/>
            <ScrollRestoration/>
            <Footer/>
        </>
    )
}

export default Body
