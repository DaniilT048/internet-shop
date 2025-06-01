import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import type {JSX} from "react";
import routes from "../routes.tsx";
import { CgGym } from "react-icons/cg";
import {NavLink} from "react-router";
import {BsCart4} from "react-icons/bs";
import {useSelector} from "react-redux";


function HeaderMenu(): JSX.Element {
    const cartItems = useSelector((state: any) => state.cart.items);
    const totalQuantity = cartItems.reduce((sum: number, item: any) => sum + item.quantity, 0);
    return (
        <div className="mb-4">
            <Navbar bg="primary" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand href="/"><CgGym style={{fontSize: 50}}/></Navbar.Brand>
                    <Nav className="me-auto">
                        {
                            routes.filter(route => route.label && route.path !== "/cart")
                                .map(route =>
                                    route.label && <Nav.Link key={route.path} as={NavLink} to={route.path}>
                                        {route.label}
                                    </Nav.Link>
                            )
                        }
                    </Nav>
                    <Nav>
                        <Nav.Link as={NavLink} to="/cart">
                            <BsCart4 size={24}/>
                            <span className="ms-1"
                                  style={{fontSize: 12}}>
                                {totalQuantity}</span>
                        </Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>
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