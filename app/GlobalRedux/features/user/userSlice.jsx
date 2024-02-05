import { buildCreateSlice, asyncThunkCreator } from "@reduxjs/toolkit";

const createSliceWithThunks = buildCreateSlice({
  creators: {
    asyncThunk: asyncThunkCreator,
  },
});

const initialState = {
  user: {
    _id: "",
    fname: "",
    lname: "",
    email: "",
    streetAddress: "",
    postalCode: "",
    city: "",
    county: "",
    country: "",
  },
  loading: false,
  error: null,
};

const userSlice = createSliceWithThunks({
  name: "user",
  initialState,
  reducers: (create) => ({
    updateUser: create.asyncThunk(async (_, thunkApi) => {
      try {
        const response = await fetch("/api/user/update");
        const userData = await response.json();
        return userData;
      } catch (error) {
        return thunkApi.rejectWithValue(error);
      }
    }),
    fetchUser: create.asyncThunk(
      async (_, thunkApi) => {
        try {
          const response = await fetch("/api/user");
          const userData = await response.json();
          return userData;
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
          state.user = action.payload.user;
        },
        rejected: (state, action) => {
          state.loading = false;
          state.error = action.error.message;
        },
      }
    ),
  }),
});

export const { fetchUser, updateUser } = userSlice.actions;
export default userSlice.reducer;
