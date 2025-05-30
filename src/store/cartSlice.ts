import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

type CartItem = {
    id: number;
    quantity: number;
}

type CartState = {
    items: CartItem[];
}
const initialState: CartState = {
    items: [],
}
const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<number>) => {
            const existingCart = state.items.find(item => item.id === action.payload);
            if (existingCart) {
                existingCart.quantity++
                console.log(existingCart.quantity);
            }else{
                state.items.push({id: action.payload, quantity: 1});
            }
        },
        // removeFromCart: (state, action: PayloadAction<number>) => {
        //
        // }
    }
})
export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;