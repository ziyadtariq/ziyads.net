import React, { Component } from 'react'
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import '../styles/CustomNavbar.css';

export default class CustomNavbar extends Component {
  render() {
    return (
        <Navbar default collapseOnSelect fixedTop={true}>
            <Navbar.Header>
                <Navbar.Brand>
                    <Link to="/">Ziyad Abdulateef</Link>
                </Navbar.Brand>
                <Navbar.Toggle/>
            </Navbar.Header>
            <Navbar.Collapse>
                <Nav pullRight>
                    <NavItem eventKey={1} href="/#intro">
                    Home
                    </NavItem>
                    <NavItem eventKey={2}  href="/#tools">
                    Dev Tools
                    </NavItem>
                    <NavItem eventKey={3} href="/#services">
                    Services
                    </NavItem>
                    <NavItem eventKey={3} href="/#contact">
                    Contact
                    </NavItem>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
  }
}

