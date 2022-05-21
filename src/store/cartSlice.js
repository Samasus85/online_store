import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    quantity: 0,
    cartItems: [],
    totalAmount: 0,
    currentPage:1,
    perPage:6,
    totalCount:0
  },
  reducers: {
    addToCart: (state, action) => {
      const isItemExist = state.cartItems.find(
        (item) => item.id === action.payload.id
      );
      if (!isItemExist) {
        state.cartItems = [...state.cartItems, { ...action.payload, quantity: 1 }];
      } else {
        state.cartItems = state.cartItems.map((item) => {
          if (item.id === action.payload.id) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
      }
      state.quantity++;
      state.totalAmount += action.payload.price;
    },

    removeFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload.id
      );
      state.quantity -= action.payload.quantity;
      state.totalAmount -= action.payload.price * action.payload.quantity;
    },

    addItemQuantity: (state, action) => {
      state.cartItems = state.cartItems.map((item) => {
        if (item.id === action.payload.id) {
          return { ...item, quantity: item.quantity + 1 };
        } else {
          return item;
        }
      });
      state.quantity++;
      state.totalAmount += action.payload.price;
    },

    subtractItemQuantity: (state, action) => {
      const subItem = state.cartItems.find((item) => item.id === action.payload.id);
      if (subItem.quantity === 1) {
        state.cartItems = state.cartItems.filter(
          (item) => item.id !== subItem.id
        );
      } else {
        subItem.quantity -= 1;
      }
      state.quantity--;
      state.totalAmount -= subItem.price;
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  addItemQuantity,
  subtractItemQuantity,
} = cartSlice.actions;

export default cartSlice;
