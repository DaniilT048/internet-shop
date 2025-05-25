import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import products from '../data/products';
import type { Product } from '../data/products';

const ItemShop = () => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const [show, setShow] = useState(true);

    const product: Product | undefined = products.find(
        (p) => p.id === parseInt(id || '', 10)
    );

    useEffect(() => {
        if (product) {
            document.title = product.name;
        }
    }, [product]);

    const handleClose = () => {
        setShow(false);
        setTimeout(() => {
            navigate(-1);
        }, 300);
    };

    if (!product) return <h2>Product not found</h2>;

    return (
        <Modal show={show} onHide={handleClose} centered>
            <Modal.Header closeButton>
                <Modal.Title>{product.name}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <img
                    src={product.image}
                    alt={product.name}
                    style={{ maxWidth: '100%', marginBottom: '10px' }}
                />
                <p><strong>Category:</strong> {product.category}</p>
                <p><strong>Price:</strong> ${product.price.toFixed(2)}</p>
                <p>{product.description}</p>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default ItemShop;