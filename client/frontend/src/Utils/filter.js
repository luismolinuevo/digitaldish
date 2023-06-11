import { createSlice } from '@reduxjs/toolkit';

export const slice = createSlice({
    name: 'filter',
    initialState: {
        category: [],
        search: null,
        color: [],
        condition: [],
        type: null,
        startPrice: 0,
        endPrice: 0
    },
    reducers: {
         setCategory: (state, action) => {
            const newItem = action.payload;
            state.category = [...state.category, newItem];
            console.log(state.category)
         },
         deleteCategory: (state, action) => {
            const categoryToRemove = action.payload;
            state.category = state.category.filter(item => item !== categoryToRemove);
         },
         setSearch: (state, action) => {
            state.search = action.payload;
            console.log(state.search)
         },
         setColor: (state, action) => {
            const newItem = action.payload;
            state.color = [...state.color, newItem]
            console.log(state.color)
         },
         deleteColor: (state, action) => {
            const colorToRemove = action.payload;
            state.color = state.color.filter(item => item !== colorToRemove)
         }
          
    },
  });
  
  export const { setCategory, deleteCategory, setSearch, setColor, deleteColor } = slice.actions;

  export default slice.reducer;