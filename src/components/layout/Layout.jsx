import React from 'react'
import Navbar from './../navbar/Navbar';
import { Outlet, ScrollRestoration } from 'react-router-dom';
import Footer from './../footer/Footer';
import UpBtn from '../upBtn/UpBtn';

const Layout = ({mood,setMood}) => {
  return (
    <>
    <ScrollRestoration/>
    <Navbar mood={mood} setMood={setMood}/>
    <Outlet/>
    <Footer/>
    <UpBtn/>
    </>
  )
}

export default Layout
