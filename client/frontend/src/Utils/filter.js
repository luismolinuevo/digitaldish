import { createSlice } from '@reduxjs/toolkit';

export const slice = createSlice({
    name: 'filter',
    initialState: {
        category: [],
        search: null,
        color: [],
        condition: [],
        type: [],
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
         },
         setCondition: (state, action) => {
            const newItem = action.payload;
            state.condition = [...state.condition, newItem]
            console.log(state.condition)
         }, 
         deleteCondition: (state, action) => {
            const conditionToDelete = action.payload;
            state.condition = state.condition.filter(item => item !== conditionToDelete);
         }, 
         setType: (state, action) => {
            const newItem = action.payload;
            state.type = [...state.type, newItem]
            console.log(state.type)
         },
         deleteType: (state, action) => {
            const typeToDelete = action.payload;
            state.type = state.type.filter(item => item !== typeToDelete)
         },
         setStartPrice: (state, action) => {
            state.startPrice = action.payload
         },
         setEndPrice: (state, action) => {
            state.endPrice = action.payload
         }
          
    },
  });
  
  export const { setCategory, deleteCategory, setSearch, setColor, deleteColor, setCondition, deleteCondition, setType, deleteType, setStartPrice, setEndPrice } = slice.actions;

  export default slice.reducer;