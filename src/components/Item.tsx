import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import products from '../data/products';
import type { Product } from '../data/products';

const Item = () => {
    const { id } = useParams<{ id: string }>();

    const product: Product | undefined = products.find(
        (p) => p.id === parseInt(id || '', 10)
    );

    useEffect(() => {
        if (product) {
            document.title = product.name;
        }
    }, [product]);


    if (!product) return <h2>Product not found</h2>;

    return (

        <div>
            <h1>{product.name}</h1>
            <img src={product.image} alt={product.description} />
            <p>{product.description}</p>
            <p>{product.price}</p>
        </div>
    );
};

export default Item;