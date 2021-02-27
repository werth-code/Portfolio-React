import React from 'react'
import Navbar from '../Navbar'
import {BrowserRouter as Router, Switch} from 'react-router-dom'
import '../../App.css'
import HeroSection from '../HeroSection'
import Card from '../Card'
import Footer from '../Footer'

//Home page includes these sections...

function Home() {
    return (
        <>
        <HeroSection/>
        <Card/>
        <Footer/>
        </>
    )
}

export default Home
