import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Item } from "../types/Item";

interface ItemsState {
  items: Item[];
}

const initialState: ItemsState = {
  items: [],
};

const itemsSlice = createSlice({
  name: "items",
  initialState,
  reducers: {
    addItems: (state, action: PayloadAction<Item[]>) => {
      state.items.push(...action.payload);
    },
    updateItem: (state, action: PayloadAction<Item>) => {
      const index = state.items.findIndex(
        (item) => item.id === action.payload.id
      );
      if (index !== -1) {
        state.items[index] = action.payload;
      }
    },
    deleteItem: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
  },
});

export const { addItems, updateItem, deleteItem } = itemsSlice.actions;

export default itemsSlice.reducer;
