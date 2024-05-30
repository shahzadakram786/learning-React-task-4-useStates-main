import { createSlice } from "@reduxjs/toolkit";
import { fetchArts } from "./artsAction";
export const artsSlice = createSlice({
    name: "arts",
    initialState: {
        arts: [],
        isArtLoading: false,
        isArtRejected: false,
        isArtFullfilled: false,
    },
    reducers: {
        setArts: (state, action) => {
            state.arts = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchArts.fulfilled, (state, action) => {
            state.isArtLoading = false;
            state.isArtRejected = false;
            state.isArtFullfilled = true;
            state.arts = action.payload;
        });
        builder.addCase(fetchArts.pending, (state, action) => {
            state.isArtLoading = true;
            state.isArtRejected = false;
            state.isArtFullfilled = false;
        });
        builder.addCase(fetchArts.rejected, (state, action) => {
            state.isArtLoading = false;
            state.isArtRejected = true;
            state.isArtFullfilled = false;
        });
    },
});

export const { setArts } = artsSlice.actions;
export default artsSlice.reducer;