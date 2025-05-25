import type {ReactElement} from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ShopCard from "./ShopCard.tsx";
import products from "../data/products.ts";
import Form from 'react-bootstrap/Form';
import {Outlet} from "react-router";


const Shop = ():ReactElement => {
    document.title = "Shop";

    return(
        <Container>
            <h4>Chose category:</h4>
            <Form.Select className="mb-4">
                <option>All products</option>
                <option>Balls</option>
                <option>Dumbbells</option>
                <option>Mats</option>
                <option>Accessories</option>
            </Form.Select>
            <Row md={4}>
                {products.map((product) => (
                    <Col key={product.id} sm={6} md={4} lg={3}>
                        <ShopCard product={product}/>
                    </Col>
                ))}
            </Row>
            <Outlet />
        </Container>
    )

}

export default Shop;