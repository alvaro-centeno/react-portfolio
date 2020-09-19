import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Navigation from '../Nav';
import Footer from '../Footer'
import { Image } from 'react-bootstrap';
// import Home from './Home'
import '../../style/Style.css'

const Main = () => {
    return (
        <>
            <Navigation />
            {/* <Home /> */}
            <Footer />

        </>
    )
}

export default Main; 
