import React, { useContext } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { AuthContext } from '../../../Providers/AuthProvider';
import { FaUserAlt } from "react-icons/fa";
import { Link } from 'react-router-dom';

const NevigationBar = () => {
    const { user,logOut } = useContext(AuthContext);
    const handleLogOut = ()=>{
        logOut()
        .then()
        .catch(error => console.log(error));
    }
    return (
        <Container>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light" className='mt-2'>
                <Container>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto">
                            
                                <Link to="/category/0">Home</Link>
                            
                            <Nav.Link href="#pricing">About</Nav.Link>
                            <Nav.Link href="#pricing">Career</Nav.Link>
                        </Nav>
                        <Nav>
                            {user &&
                                <FaUserAlt style={{ fontSize: '2rem' }} />}

                            {user ?
                                <Button onClick={handleLogOut} variant="secondary">LogOut</Button> :
                                <Link to="/login">
                                    <Button variant="secondary">Login</Button>
                                </Link>
                            }

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </Container>
    );
};

export default NevigationBar;