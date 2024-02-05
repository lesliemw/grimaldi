"use client";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
  loading: false,
  error: null,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: (create) => ({
    addToCart: create.reducer((state, action) => {
      const { _id, name, size, category, description, src, alt } =
        action.payload;
      console.log(action.payload);
      const existingItem = state.cart.find((item) => item._id === _id);

      if (existingItem) {
        // If the item exists, update the quantity
        existingItem.qty += 1;
      } else {
        // If the item doesn't exist, add it to the cart
        state.cart.push(action.payload);
      }
    }),
    removeFromCart: create.reducer((state, action) => {
      state.cart = state.cart.filter((item) => item._id !== action.payload);
    }),
    incrementQty: create.reducer((state, action) => {
      const cartId = action.payload;
      const cartItem = state.find((item) => item._id === cartId);
      if (cartItem) {
        cartItem.qty += 1;
      }
    }),
    decrementQty: create.reducer((state, action) => {
      const cartId = action.payload;
      const cartItem = state.find((item) => item.id === cartId);
      if (cartItem && cartItem.qty > 1) {
        cartItem.qty -= 1;
      }
    }),
  }),
});

export const { addToCart, removeFromCart, incrementQty, decrementQty } =
  cartSlice.actions;
export default cartSlice.reducer;
