import React from 'react'
import Header from './Header'
import { Outlet, ScrollRestoration, useLocation } from 'react-router-dom'
import Footer from './Footer';

const Body = () => {

    const location = useLocation();
    const showSearch = location.pathname.substr(6) !== 'GPTSearch';
    return (
        <>
            <Header showSearch={showSearch}/>
            <Outlet/>
            <ScrollRestoration/>
            <Footer/>
        </>
    )
}

export default Body
