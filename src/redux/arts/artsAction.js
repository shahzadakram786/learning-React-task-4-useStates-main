import { createAsyncThunk } from "@reduxjs/toolkit";
import { getArts } from "./artsApi";

export const fetchArts = createAsyncThunk("arts/fetchArts", async(payload) => {
    const response = await getArts(payload);
    return response.data;
});