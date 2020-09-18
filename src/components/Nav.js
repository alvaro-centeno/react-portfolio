import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';


class Navigation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "Alvaro Centeno",
            headerLinks: [
                { title: 'Home', path: '/' },
                { title: 'About', path: '/about' },
                { title: 'Contact', path: '/contact' }
            ],
            home: {
                title: 'Dive into the World of Coding',
                subTitle: 'A peak into my first projects ',
                text: '(check them out)'
            },
            about: {
                title: 'About Me',
            },
            contact: {
                title: 'Conact Me',
            }
        }
    }
    render() {
        return (
            <>
                <Router>
                    <Container className="p-0" fluid={true}>

                        <Navbar className="border-bottom" expand="lg" bg="dark" variant="dark">
                            <Navbar.Brand href="#home"><i class="fab fa-autoprefixer"></i></Navbar.Brand>
                            <Navbar.Toggle aria-controls="navbar-toggle" />
                            <Navbar.Collapse id="navebar-toggle">
                                <Nav className="ml-auto">
                                    <Link className='nav-link' to='/home'>Home</Link>
                                    <Link className='nav-link' to='/about'>About </Link>
                                    <Link className='nav-link' to='/contact'>Contact</Link>
                                </Nav>
                            </Navbar.Collapse>
                        </Navbar>
                    </Container>

                </Router>
            </>
        )
    }
}

export default Navigation
