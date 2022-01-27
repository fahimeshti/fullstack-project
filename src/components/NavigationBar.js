import React from 'react';
import './NavigationBar.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Button, Container, Nav, Offcanvas, Form, FormControl } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle, faWallet, faCompass, faChevronRight, faChartBar, faUserFriends, faBars } from '@fortawesome/free-solid-svg-icons';
import CLogo from '../resources/crafts-png-692033.png';

const NavigationBar = () => {
    return (
        <Navbar className="nav-bar" sticky="top" varient="light" expand={false}>
            <Container fluid>
                <Navbar.Brand href="#" className="my-logo">
                    <img className="my-logo-img" src={CLogo} alt="" />
                    Chitra
                </Navbar.Brand>
                <Form className="d-flex">
                    <FormControl
                        type="search"
                        placeholder="Search Chitra"
                        className="shadow-none me-2"
                        aria-label="Search"
                    />
                    </Form>
                <h4><FontAwesomeIcon className="faIcon" icon={faUserCircle} /></h4>
                <FontAwesomeIcon className="faIcon" icon={faWallet} />
                <Navbar.Toggle className="shadow-none my-toggle" aria-controls="offcanvasNavbar" >
                <FontAwesomeIcon className="faIcon" icon={faBars} />
                </Navbar.Toggle>
                <Navbar.Offcanvas
                id="offcanvasNavbar"
                aria-labelledby="offcanvasNavbarLabel"
                placement="end"
                >
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title id="offcanvasNavbarLabel">Menu</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <Nav className="justify-content-end flex-grow-1 pe-3">
                    <Nav.Link className="navLinks" href="#action1">
                        <span className="leftCol">
                        <FontAwesomeIcon className="faIcon" icon={faCompass} />
                         <span> Explore </span>
                        </span>
                        <span><FontAwesomeIcon className="faIconChev" icon={faChevronRight} /></span>
                    </Nav.Link>
                    <Nav.Link className="navLinks" href="#action2">
                        <span className="leftCol">
                        <FontAwesomeIcon className="faIcon" icon={faChartBar} />
                         <span> Activity </span>
                        </span>
                        <span><FontAwesomeIcon className="faIconChev" icon={faChevronRight} /></span>
                    </Nav.Link>
                    <Nav.Link className="navLinks" href="#action3">
                        <span className="leftCol">
                        <FontAwesomeIcon className="faIcon" icon={faUserFriends} />
                         <span> Community </span>
                        </span>
                        <span><FontAwesomeIcon className="faIconChev" icon={faChevronRight} /></span>
                    </Nav.Link>
                    {/* <NavDropdown title="Dropdown" id="offcanvasNavbarDropdown">
                        <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action5">
                        Something else here
                        </NavDropdown.Item>
                    </NavDropdown> */}
                    </Nav>
                    <Form className="d-flex">
                    <FormControl
                        type="search"
                        placeholder="Search"
                        className="me-3"
                        aria-label="Search"
                    />
                    </Form>
                    <Button className="my-button" variant="outline-success">Connect Wallet</Button>
                </Offcanvas.Body>
                </Navbar.Offcanvas>
            </Container>
            </Navbar>
    );
};

export default NavigationBar;