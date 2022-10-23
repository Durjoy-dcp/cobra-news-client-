import React, { useContext } from 'react';
import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import UserContext, { AuthContext } from '../../../UserContext/UserContext';
import LeftSide from '../LeftSide/LeftSide';
const NavHeader = () => {
    const { user, LogOut, signIn } = useContext(AuthContext);
    const handleToLogOut = () => {
        LogOut()
            .then(result => console.log("successfully logged Out "))
            .catch(error => console.log(error))
    }
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand ><Link to='/'> Cobra News </Link></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#features">News </Nav.Link>
                            <Nav.Link href="#pricing">Catagories</Nav.Link>

                        </Nav>
                        <Nav className="ms-auto">
                            {
                                (user && user.uid) &&
                                <Button onClick={handleToLogOut} variant="outline-primary">Logout</Button>
                            }

                        </Nav>
                        <Nav>
                            <div className="d-lg-none">

                                <LeftSide ></LeftSide>
                            </div>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar >
        </div >
    );
};

export default NavHeader;