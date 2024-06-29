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
      state.push(action.payload);
    },

    remove(state, action) {
      return state.filter((item) => item.id !== action.payload);
    },
  },
});

export const { add, remove } = cartSlice.actions;
export default cartSlice.reducer;
