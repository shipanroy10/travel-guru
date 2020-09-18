import React from 'react';
import './Header.css'
import { Button, Form, FormControl, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import logo from '../../travel-guru-master/Logo.png'

const Header = () => {
    return (
        <div className="container" >
             

            <Navbar expand="lg ">
            <Navbar.Brand href="#home" >
                <img
                    alt=""
                    src={logo}
                    width="100"
                    
                    height="50"
                    className="d-inline-block align-top"
                />{' '}
                
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                
                <Form inline bg="light">
                <FormControl  type="text" placeholder="Search" className="mr-sm-2" />
                
                </Form>
                <Nav.Link href="#home">News</Nav.Link>
                <Nav.Link href="#link">Destination</Nav.Link>
                <Nav.Link href="#link">Blog</Nav.Link>
                <Nav.Link href="#link">Contact</Nav.Link>

            </Navbar.Collapse>

            <Nav className="mr-auto">
            <Button variant="warning">Login</Button>{' '}
            
            </Nav>
            </Navbar>
                    </div>
                );
};

export default Header;