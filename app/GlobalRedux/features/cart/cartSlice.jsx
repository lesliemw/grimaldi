"use client";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: (create) => ({
    addToCart: create.reducer((state, action) => {
      const { _id, name, price, description, qty, size, src } = action.payload;
      // Check if the item already exists in the cart
      const existingItem = state.find((item) => item._id === _id);

      if (existingItem) {
        // If the item exists, update the quantity
        existingItem.qty += 1;
      } else {
        // If the item doesn't exist, add it to the cart
        state.push({ _id, name, price, qty: 1, description, qty, size, src });
      }
    }),
    removeFromCart: create.reducer((state, action) => {
      const cartId = action.payload;
      return state.filter((item) => item._id !== cartId);
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
