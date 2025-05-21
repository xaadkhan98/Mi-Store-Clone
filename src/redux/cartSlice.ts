import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CartState {
  name: string;
  id: string;
  price: number;
  quantity: number;
  totalPrice: number;
  img: string;
}

const items: CartState[] = [];

const existingCart = localStorage.getItem("cart");

const initialState = existingCart
  ? JSON.parse(existingCart)
  : {
      items: [],
      totalQuantity: 0,
    };

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action: PayloadAction<any>) {
      // console.log("Added to Cart", state, action.payload);
      const newItem = action.payload;
      // Check of existing item in the cart
      const existingItem = state.items.find((item: CartState) => {
        return item.id === newItem.id;
      });
      // Update total quantity for Cart badge
      state.totalQuantity++;

      // If product does not exist push a new item to the cart
      if (!existingItem) {
        state.items.push({
          name: newItem.name,
          id: newItem.id,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
          img: newItem.images[0],
        });
      }
      // If product already exists we need to update the total quantity
      else {
        existingItem.quantity++;
        existingItem.totalPrice = existingItem.totalPrice + newItem.price;
      }
      // Save to localStorage
      localStorage.setItem("cart", JSON.stringify(state));
    },
    removeFromCart(state, action: PayloadAction<any>) {
      // console.log("Removed from Cart");

      // Update total quantity for cart badge
      state.totalQuantity--;

      // Id recived from component
      const id = action.payload;

      // Find product in the cart array.
      const existingItem =
        state.items.find((item: CartState) => item.id === id) || <any>[];

      // If there is only one item return a fresh and filtered array.
      if (existingItem?.quantity === 1) {
        state.items = state.items.filter((item: CartState) => item.id !== id);
      }
      // if there are more products for an Id, decrease the price and quantity only
      else {
        existingItem.quantity--;
        existingItem.totalPrice -= existingItem.price;
      }
      // Save to localStorage
      localStorage.setItem("cart", JSON.stringify(state));
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice;
