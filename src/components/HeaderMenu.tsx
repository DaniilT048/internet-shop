import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import type {JSX} from "react";
import routes from "../routes.tsx";

function HeaderMenu(): JSX.Element {
    return (
        <>
            <Navbar bg="primary" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand href="/">check</Navbar.Brand>
                    <Nav className="me-auto">
                        {routes.map((route) =>
                            <li key={route.path}>
                                <Nav.Link href={`${route.path}`}>{route.label}</Nav.Link>
                            </li>)}
                    </Nav>
                </Container>
            </Navbar>

        </>
    );
}

export default HeaderMenu;