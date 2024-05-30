import { createSlice } from "@reduxjs/toolkit";

export const BuyArtSlice = createSlice({
  name: "counter",
  initialState: {
    BuyArt: [],
  },
  reducers: {
    SetBuyArts: (state, action) => {
      state.BuyArt = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { SetBuyArts } = BuyArtSlice.actions;

export default BuyArtSlice.reducer;
