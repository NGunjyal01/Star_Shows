import React from 'react'
import Header from './Header'
import { Outlet } from 'react-router-dom'
import Login from './Login'
import { useSelector } from 'react-redux'

const Body = () => {

    const user = useSelector(store => store.user);

    return (
        <>
            <Header/>
            <Outlet/>
        </>
    )
}

export default Body
