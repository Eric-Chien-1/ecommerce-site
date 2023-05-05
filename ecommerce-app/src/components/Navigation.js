import { Container, Nav, Navbar, NavbarBrand, NavLink } from 'react-bootstrap';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import React from 'react';
import SignUp from './SignUp';
import SignIn from './SignIn';
import Home from './Home';
import '../css/navigation.css'
const Navigation = () => {
    return (
        <>
            <BrowserRouter>
                <Navbar bg="dark" variant="dark">
                    <Container>
                        <NavbarBrand href="/">Navbar</NavbarBrand>
                        <Nav className="me-auto">
                            <NavLink href="/Home">Home</NavLink>
                            <NavLink href="#features">Features</NavLink>
                            <NavLink href="#pricing">Pricing</NavLink>
                        </Nav>
                        <Nav>
                            <NavLink href="/SignUp">Sign Up</NavLink>
                            <NavLink href="/SignIn">Sign In</NavLink>
                        </Nav>
                    </Container>
                </Navbar>
                <Routes>
                    <Route exact path="/" />
                    <Route exact path="/Home" element={<Home />} />
                    <Route exact path="/SignUp" element={<SignUp />} />
                    <Route exact path="/SignIn" element={<SignIn />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}
export default Navigation;