import { createSlice } from '@reduxjs/toolkit';
import StorageKeys from 'constants/storage-keys';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    showMiniCart: false,
    cartItems: JSON.parse(localStorage.getItem(StorageKeys.CART)) || [],
  },
  reducers: {
    showMiniCart(state) {
      state.showMiniCart = true;
    },

    hideMiniCart(state) {
      state.showMiniCart = false;
    },

    addToCart(state, action) {
      const newItem = action.payload;

      // check if product is available in cart
      const index = state.cartItems.findIndex((x) => x.id === newItem.id);
      if (index >= 0) {
        // increase quantity
        state.cartItems[index].quantity += newItem.quantity;
      } else {
        // add to cart
        state.cartItems.push(newItem);
      }
      localStorage.setItem(StorageKeys.CART, JSON.stringify(state.cartItems));
    },

    setQuantity(state, action) {
      const { id, quantity } = action.payload;
      // check if product is available in cart
      const index = state.cartItems.findIndex((x) => x.id === id);
      if (index >= 0) {
        state.cartItems[index].quantity = quantity;
      }
      localStorage.setItem(StorageKeys.CART, JSON.stringify(state.cartItems));
    },

    removeFromCart(state, action) {
      const idNeedToRemove = action.payload;
      state.cartItems = state.cartItems.filter((x) => x.id !== idNeedToRemove);
      localStorage.setItem(StorageKeys.CART, JSON.stringify(state.cartItems));
    },

    clearCart(state, action) {
      state.cartItems = [];
      localStorage.removeItem(StorageKeys.CART);
    },
  },
});

// Actions
export const cartActions = cartSlice.actions;

// Reducers
const cartReducer = cartSlice.reducer;
export default cartReducer;
