import { configureStore } from "@reduxjs/toolkit";
import artsSlice from "../redux/arts/artsSlicer";
import { BuyArtSlice } from "../redux/buyarts/BuyartsSlicer";

export default configureStore({
  reducer: {
    arts: artsSlice,
    artsbuy: BuyArtSlice,
  },
});
