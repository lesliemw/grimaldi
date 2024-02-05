"use client";

import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./features/cart/cartSlice";
import userSlice from "./features/user/userSlice";
import productsSlice from "./features/products/productsSlice";

export const store = configureStore({
  reducer: {
    cart: cartSlice,
    user: userSlice,
    products: productsSlice,
  },
});
