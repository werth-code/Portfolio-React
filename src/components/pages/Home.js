import React from 'react'
import Navbar from '../Navbar'
import {BrowserRouter as Router, Switch} from 'react-router-dom'
import '../../App.css'
import HeroSection from '../HeroSection'
import Card from '../Card'

//Home page includes these sections...

function Home() {
    return (
        <>
        <HeroSection/>
        <Card/>
        </>
    )
}

export default Home
