import { createSlice } from '@reduxjs/toolkit';

const loadState = () => {
  const serializedState = localStorage.getItem('cart');
  return serializedState ? JSON.parse(serializedState) : [];
};

const saveState = (state) => {
  const serializedState = JSON.stringify(state);
  localStorage.setItem('cart', serializedState);
};

const initialState = loadState();

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add(state, action) {
      const existingProduct = state.find((item) => item.id === action.payload.id);
      if (existingProduct) {
        existingProduct.quantity += 1;
      } else {
        state.push({ ...action.payload, quantity: 1 });
      }
      saveState(state);
    },

    decrement(state, action) {
      const existingProduct = state.find((item) => item.id === action.payload);
      if (existingProduct) {
        if (existingProduct.quantity > 1) {
          existingProduct.quantity -= 1;
        } else {
          const newState = state.filter((item) => item.id !== action.payload);
          saveState(newState);
          return newState;
        }
      }
      saveState(state);
      return state;
    },
  },
});

export const { add, decrement } = cartSlice.actions;
export default cartSlice.reducer;
