import React from 'react'
import { Navbar, Nav } from 'react-bootstrap';

const NavBar = () => {
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="#home"><i class="fab fa-autoprefixer"></i>

                </Navbar.Brand>
                <Nav className="ml-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#projects">Projects</Nav.Link>
                    <Nav.Link href="#contact">Contact</Nav.Link>
                </Nav>
            </Navbar>
        </>
    )
}

export default NavBar
