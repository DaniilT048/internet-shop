import type {ReactElement} from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ShopCard from "./ShopCard.tsx";
import products from "../data/products.ts";

const Shop = ():ReactElement => {
    document.title = "Shop";
    return(
        <Container>
            <Row md={4}>
                {products.map((product) => (
                    <Col key={product.id} sm={6} md={4} lg={3}>
                        <ShopCard product={product} />
                    </Col>
                ))}
            </Row>
        </Container>
    )

}

export default Shop;