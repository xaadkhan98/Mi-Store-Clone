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

const initialState = {
  items,
  totalQuantity: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action: PayloadAction<any>) {
      // console.log("Added to Cart", state, action.payload);
      const newItem = action.payload;

      const existingItem = state.items.find((item) => {
        return item.id === newItem.id;
      });
      state.totalQuantity++;
      if (!existingItem) {
        state.items.push({
          name: newItem.name,
          id: newItem.id,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
          img: newItem.images[0],
        });
      } else {
        existingItem.quantity++;
        existingItem.totalPrice = existingItem.totalPrice + newItem.price;
      }
    },
    removeFromCart(state, action: PayloadAction<any>) {
      console.log("Removed from Cart");
      state.totalQuantity--;
      const id = action.payload;
      const existingItem =
        state.items.find((item) => item.id === id) || <any>[];
      if (existingItem?.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== id);
      } else {
        existingItem.quantity--;
        existingItem.totalPrice -= existingItem.price;
      }
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice;
