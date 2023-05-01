import { createSlice } from '@reduxjs/toolkit';

export const slice = createSlice({
    name: "offers",
    initialState: {
        currentOffer: null
    },
    
    reducers: {
        updateCurrentOffer: (state, action) => {
            state.currentOffer = action.payload
        },
    },
});

export const { updateCurrentOffer } = slice.actions;


export default slice.reducer;