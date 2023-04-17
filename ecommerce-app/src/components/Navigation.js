import { Container, Nav, Navbar } from 'react-bootstrap';
import '../css/navigation.css'
const Navigation = () => {
    return (<>
        <div className="head-navigation">
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#features">Features</Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link>
                        <Nav.Link href="#SignIn">Sign In</Nav.Link>
                        <Nav.Link href="#SignUp">Sign Up</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    </>
    );
}
export default Navigation;