import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Navigation from '../Nav';
import Footer from '../Footer'
import { Image } from 'react-bootstrap';
import '../../style/Style.css'

const Main = () => {
    return (
        <>
            <Navigation />
            <Footer />

        </>
    )
}

export default Main; 
