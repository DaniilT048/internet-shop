import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import  { type Product } from '../data/products';
import type {JSX} from "react";
import {Link} from "react-router-dom";

export type ProductProps = {
    product: Product;
};

function ShopCard({ product }: ProductProps): JSX.Element {
    return (
        <Card >
            <Card.Img variant="top" src={product.image} alt={product.name} />
            <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>${product.price.toFixed(2)}</Card.Text>
                <Link to={`/products/${product.id}`}>
                   <Button variant="info" className="m-1" >More info</Button>
                </Link>
                <Button variant="primary">Add to Cart</Button>
            </Card.Body>
        </Card>
    );
}

export default ShopCard;
