import { type Product } from '../data/products';
import products from '../data/products';
import Container from 'react-bootstrap/Container';
import {useParams} from "react-router";
import type {ReactElement} from "react";

const ItemShop = ():ReactElement => {
    const { id } = useParams<{ id: string }>();
    const product: Product | undefined = products.find(
        (p) => p.id === parseInt(id || '', 10)
    );

    if (!product) {
        return <h2>Product not found</h2>;
    }

    document.title = product.name;

    return (
        <Container>
            <img src={product.image} alt={product.name} style={{ maxWidth: '100%', height: 'auto' }} />
            <h1>{product.name}</h1>
            <p><strong>Category:</strong> {product.category}</p>
            <p><strong>Price:</strong> ${product.price.toFixed(2)}</p>
            <p>{product.description}</p>
        </Container>
    );
};

export default ItemShop;