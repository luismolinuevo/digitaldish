import { createSlice } from '@reduxjs/toolkit';

export const slice = createSlice({
    name: 'filter',
    initialState: {
        category: [],
        search: null
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
         }
          
    },
  });
  
  export const { setCategory, deleteCategory, setSearch } = slice.actions;

  export default slice.reducer;