import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import type {JSX} from "react";
import routes from "../routes.tsx";
import { CgGym } from "react-icons/cg";
import {NavLink} from "react-router";


function HeaderMenu(): JSX.Element {
    return (
        <>
            <Navbar bg="primary" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand href="/"><CgGym style={{fontSize: 50}}/></Navbar.Brand>
                    <Nav className="me-auto">
                        {routes.map((route) => (
                            <Nav.Link key={route.path} as={NavLink} to={route.path}>
                                {route.label}
                            </Nav.Link>
                        ))}
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
}

export default HeaderMenu;