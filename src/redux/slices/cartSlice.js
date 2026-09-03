import { createSlice } from "@reduxjs/toolkit";

// Redux Requirement:
// Manages the "shopping cart" feature globally — any component can
// read from it (useSelector) or update it (useDispatch).

const initialState = {
  items: [], // [{ id, name, price, qty }]
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const product = action.payload;
      const existing = state.items.find((item) => item.id === product.id);
      if (existing) {
        existing.qty += 1;
      } else {
        state.items.push({ ...product, qty: 1 });
      }
    },
    removeFromCart: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    increaseQty: (state, action) => {
      const item = state.items.find((item) => item.id === action.payload);
      if (item) item.qty += 1;
    },
    decreaseQty: (state, action) => {
      const item = state.items.find((item) => item.id === action.payload);
      if (item && item.qty > 1) item.qty -= 1;
    },
    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const { addToCart, removeFromCart, increaseQty, decreaseQty, clearCart } =
  cartSlice.actions;

export default cartSlice.reducer;
