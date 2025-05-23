import type {ReactElement} from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ShopCard from "./ShopCard.tsx";

const Shop = ():ReactElement => {
    document.title = "Shop";
    return(
        <Container>
            <Row md={4}>
                <Col><ShopCard/></Col>
                <Col><ShopCard/></Col>
                <Col><ShopCard/></Col>
                <Col><ShopCard/></Col>
                <Col><ShopCard/></Col>
                <Col><ShopCard/></Col>
                <Col><ShopCard/></Col>
                <Col><ShopCard/></Col>
            </Row>
        </Container>
    )

}

export default Shop;