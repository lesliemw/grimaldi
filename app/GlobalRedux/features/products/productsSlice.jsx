import { buildCreateSlice, asyncThunkCreator } from "@reduxjs/toolkit";

const createSliceWithThunks = buildCreateSlice({
  creators: {
    asyncThunk: asyncThunkCreator,
  },
});

const initialState = {
  products: [
    {
      _id: "",
      name: "",
      size: "",
      category: "",
      description: "",
      src: "",
      alt: "",
      price: "",
    },
  ],
  loading: false,
  error: null,
};

const productsSlice = createSliceWithThunks({
  name: "products",
  initialState,
  reducers: (create) => ({
    fetchProducts: create.asyncThunk(
      async (_, thunkApi) => {
        try {
          const response = await fetch("/api/products");
          const productsData = await response.json();
          console.log(productsData);
          return productsData;
        } catch (error) {
          return thunkApi.rejectWithValue(error);
        }
      },
      {
        pending: (state) => {
          (state.loading = true), (state.error = null);
        },
        fulfilled: (state, action) => {
          state.loading = false;
          state.products = action.payload.products;
        },
        rejected: (state, action) => {
          state.loading = false;
          state.error = action.error.message;
        },
      }
    ),
  }),
});

export const { fetchProducts } = productsSlice.actions;
export default productsSlice.reducer;
