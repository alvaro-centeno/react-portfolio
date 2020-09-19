import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Container, Nav } from 'react-bootstrap';
import Navigation from '../Nav';
import Footer from '../Footer'
import Home from './Home';
import Jumbo from '../Jumbo';
import Contact from './Contact'

const Main = () => {
    return (
        <>
            <Navigation />
            <Jumbo />

            <Footer />

        </>
    )
}

export default Main; 
