import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact'


class Navigation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "Alvaro Centeno",
            headerLinks: [
                { title: 'Home', path: '/react-portfolio' },
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
                            <Navbar.Brand href="#home"><i className="fab fa-autoprefixer"></i></Navbar.Brand>
                            <Navbar.Toggle className="border-0" aria-controls="navbar-toggle" />
                            <Navbar.Collapse id="navebar-toggle">
                                <Nav className="ml-auto">
                                    <Link className='nav-link' to='/react-portfolio'>Home</Link>
                                    <Link className='nav-link' to='/about'>About </Link>
                                    <Link className='nav-link' to='/contact'>Contact</Link>
                                </Nav>
                            </Navbar.Collapse>
                        </Navbar>
                        <Route path='/react-portfolio' exact render={() => <Home title={this.state.home.title} subTitle={this.state.home.subTitle} text={this.state.home.text} />} />
                        <Route path='/about' exact render={() => <About title={this.state.about.title} subTitle={this.state.about.subTitle} text={this.state.about.text} />} />
                        <Route path='/contact' exact render={() => <Contact title={this.state.contact.title} subTitle={this.state.contact.subTitle} text={this.state.contact.text} />} />

                    </Container>

                </Router>
            </>
        )
    }
}

export default Navigation
