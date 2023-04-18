import { Container, Nav, Navbar, NavbarBrand, NavLink } from 'react-bootstrap';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import SignIn from './SignIn';
import SignUp from './SignUp';
import '../css/navigation.css'
const Navigation = () => {
    return (<>
        <BrowserRouter>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <NavbarBrand href="/">Navbar</NavbarBrand>
                    <Nav className="me-auto">
                        <NavLink to="/home">Home</NavLink>
                        <NavLink to="/features">Features</NavLink>
                        <NavLink to="/pricing">Pricing</NavLink>
                        <NavLink to="/SignIn">Sign In</NavLink>
                        <NavLink to="/SignUp">Sign Up</NavLink>
                    </Nav>
                </Container>
            </Navbar>

            <Routes>
                <Route exact path="/SignIn" element={<SignIn />} />
                <Route exact path="/SignUp" element={<SignUp />} />
            </Routes>
        </BrowserRouter>
    </>
    );
}
export default Navigation;