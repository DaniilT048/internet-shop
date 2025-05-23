import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import  { type Product } from '../data/products';
import type {JSX} from "react";

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
                <Button variant="primary">Add to Cart</Button>
            </Card.Body>
        </Card>
    );
}

export default ShopCard;
