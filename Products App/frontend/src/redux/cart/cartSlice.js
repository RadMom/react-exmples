import { createSlice, current } from "@reduxjs/toolkit";
import { setDecrementProductQuantity } from "../products/productsSlice";

// const product = {
//     id,
//     name,
//     price,
//     quantity,
//     maxQuantity,
//     totalPriceForItem,
// };

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        products: [],
        totalQuantity: 0,
        totalPrice: 0,
        isLoading: false,
        error: null,
    },
    reducers: {
        //Need this reducer for fetchingData in App.jsx
        replaceCartData(state, action) {
            //If we haven't products when fetching data it will save it as undefined that's why we need ||[]
            state.products = action.payload.products || [];
            state.totalQuantity = action.payload.totalQuantity || 0;
            state.totalPrice = action.payload.totalPrice || 0;
        },
        addProductToCart(state, action) {
            console.log(action.payload);
            state.isLoading = true;
            const newItem = action.payload;
            console.log(newItem);
            const existingItem = state.products.find((item) => item.id === newItem.id);

            if (!existingItem) {
                state.products.push({
                    id: newItem.id,
                    name: newItem.title,
                    price: Number(newItem.price),
                    quantity: 1,
                    maxQuantity: newItem.stock,
                    totalPriceForItem: Number(newItem.price),
                });
                state.totalPrice += Number(newItem.price);
            } else {
                if (existingItem.maxQuantity <= existingItem.quantity) {
                    return;
                }
                existingItem.quantity++;
                existingItem.totalPriceForItem =
                    existingItem.totalPriceForItem + Number(newItem.price);
                state.totalPrice += Number(newItem.price);
            }
            //We can add only 1 item!!!
            state.totalQuantity++;
            console.log(current(state.products));
        },
        subtractProductFromCart(state, action) {
            const id = action.payload;
            const existingItem = state.products.find((item) => item.id === id);
            state.totalQuantity--;

            state.changed = true; //Must change this to true - if (cart.changed) then sendCartData in App.jsx
            if (existingItem.quantity === 1) {
                state.products = state.products.filter((item) => item.id !== id); //return an array with products with !==ids
                state.totalPrice -= existingItem.price;
            } else {
                existingItem.quantity--;
                existingItem.totalPriceForItem =
                    existingItem.totalPriceForItem - existingItem.price;
                state.totalPrice -= existingItem.price;
            }
        },
        removeProductFromCart(state, action) {
            const id = action.payload;
            const existingItem = state.products.find((item) => item.id === id);
            if (existingItem) {
                state.products = state.products.filter((item) => item.id !== id);
                state.totalPrice -= existingItem.price * existingItem.quantity;
                state.totalQuantity -= existingItem.quantity;
            }
        },
    },
});

export const addItemToCartAndReduceQuantity = (newItem) => (dispatch) => {
    dispatch(addItemToCart(newItem));
    dispatch(setDecrementProductQuantity(newItem));
};

export const { addProductToCart, removeProductFromCart, subtractProductFromCart, replaceCartData } =
    cartSlice.actions;

export default cartSlice.reducer;
