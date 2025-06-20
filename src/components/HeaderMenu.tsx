import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import type {JSX} from "react";
import routes from "../routes.tsx";
import { CgGym } from "react-icons/cg";
import {Link, NavLink} from "react-router";
import {BsCart4} from "react-icons/bs";
import {useSelector} from "react-redux";
import { Offcanvas } from 'react-bootstrap';


function HeaderMenu(): JSX.Element {
    const cartItems = useSelector((state: any) => state.cart.items);
    const totalQuantity = cartItems.reduce((sum: number, item: any) => sum + item.quantity, 0);
    return (<>
            <Navbar bg="primary" data-bs-theme="dark" expand="lg" collapseOnSelect>
                <Container>
                    <Navbar.Brand as={Link} to="/"><CgGym size={40} /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="offcanvasNavbar" />
                    <Navbar.Offcanvas
                        id="offcanvasNavbar"
                        aria-labelledby="offcanvasNavbarLabel"
                        placement="end"
                    >
                        <Offcanvas.Header closeButton className="bg-primary">
                            <Offcanvas.Title id="offcanvasNavbarLabel">Menu</Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body className="bg-primary">
                            <Nav className="justify-content-end flex-grow-1 pe-3">
                                {
                                    routes.filter(route => route.label && route.path !== "/cart")
                                        .map(route =>
                                            <Nav.Link key={route.path} as={NavLink} to={route.path}>
                                                {route.label}
                                            </Nav.Link>
                                        )
                                }
                                <Nav.Link as={NavLink} to="/cart">
                                    <BsCart4 size={24} className="me-1" />
                                    {totalQuantity}
                                </Nav.Link>
                            </Nav>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>
</>
    );
}

export default HeaderMenu;

//
//     {routes.map((route: RoutesType): ReactNode[] => (
//         {route.label
//                 ?  <Nav.Link key={route.path} as={NavLink} to={route.path}>
//                     {route.label}
//                 </Nav.Link>: null}
//     ))}
//