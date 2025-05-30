import {useSelector, useDispatch} from "react-redux";
import type {RootState} from "../store/store";
import products from "../data/products";
import {incrementQty, decrementQty, removeFromCart, clearCart} from "../store/cartSlice";
import Button from "react-bootstrap/Button";
import {Container} from "react-bootstrap";

const Cart = () => {
    const dispatch = useDispatch();
    const cartItems = useSelector((state: RootState) => state.cart.items);

    const getProduct = (id: number) => products.find(p => p.id === id)!;

    const total = cartItems.reduce((sum, item) => {
        const product = getProduct(item.id);
        return sum + item.quantity * product.price;
    }, 0);


    return (
        <Container>
            <h2 className="text-center">Cart</h2>
            {cartItems.length === 0 ? (
                <p>Your cart is empty</p>
            ) : (
                <>
                    {cartItems.map(({id, quantity}) => {
                        const product = getProduct(id);
                        return (
                            <div key={id}>
                                <img src={product.image} alt={product.description} height="250"/>
                                <h4>{product.name}</h4>
                                <p>Quantity: {quantity}</p>
                                <p>Price: ${product.price}</p>
                                <p>Subtotal: ${(quantity * product.price).toFixed(2)}</p>
                                <Button variant="danger" onClick={() => dispatch(decrementQty(id))}>-</Button>
                                <Button variant="success" onClick={() => dispatch(incrementQty(id))}>+</Button>
                                <Button variant="warning" onClick={() => dispatch(removeFromCart(id))}>Remove</Button>
                            </div>
                        );
                    })}
                    <hr/>
                    <h3>Total: ${total.toFixed(2)}</h3>
                    <Button variant="success">Buy</Button>
                    <Button variant="danger" onClick={() => dispatch(clearCart())}>Clear Cart</Button>
                </>
            )}
        </Container>
    );
};

export default Cart;


