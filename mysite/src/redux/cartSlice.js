import { createSlice } from "@reduxjs/toolkit";
const savedCartData = localStorage.getItem("cartData");
const initialState = savedCartData ? JSON.parse(savedCartData) : {};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const { id, imgSrc, price } = action.payload;
      const itemInCart = state[id];
      if (itemInCart) {
        itemInCart.quantity++;
      } else {
        state[id] = { item: { id, imgSrc, price }, quantity: 1 };
      }
      localStorage.setItem("cartData", JSON.stringify(state));
    },
    incrementQuantity: (state, action) => {
      const id = action.payload;
      const itemInCart = state[id];
      if (itemInCart) {
        itemInCart.quantity++;
        itemInCart.price = parseInt(itemInCart.price) * itemInCart.quantity;
      }
    },
    decrementQuantity: (state, action) => {
      const id = action.payload;
      const itemInCart = state[id];
      if (itemInCart) {
        if (itemInCart.quantity > 0) {
          itemInCart.quantity--;
          itemInCart.price = parseInt(itemInCart.price) * itemInCart.quantity;
        }
      }
    },

    removeItem: (state, action) => {
      const id = action.payload;
      delete state[id];
    },
  },
});

export default cartSlice.reducer;
export const { addToCart, incrementQuantity, decrementQuantity, removeItem } =
  cartSlice.actions;
