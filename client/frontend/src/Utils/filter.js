import { createSlice } from '@reduxjs/toolkit';

export const slice = createSlice({
    name: 'filter',
    initialState: {
        category: []
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
         }
          
    },
  });
  
  export const { setCategory, deleteCategory } = slice.actions;

  export default slice.reducer;