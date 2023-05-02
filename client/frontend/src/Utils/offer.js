import { createSlice } from '@reduxjs/toolkit';

export const slice = createSlice({
    name: "offers",
    initialState: {
        currentOffer: 1
    },
    
    reducers: {
        updateCurrentOffer: (state, action) => {
            const newId = action.payload;
            state.currentOffer = newId
            console.log(state.currentOffer);
        },
    },
});

export const { updateCurrentOffer } = slice.actions;


export default slice.reducer;