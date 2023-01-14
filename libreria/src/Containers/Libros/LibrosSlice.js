import { createSlice } from '@reduxjs/toolkit';

export const libroSlice = createSlice({
  name: 'libro',
  initialState: {
    details: {},
    search: []
  },
  reducers: {
    addLibro: (state, action) => {
      return {
        ...state,
        ...action.payload
      }
    },
    addSearch: (state, action) => {
      return {
        ...state,
        ...action.payload
      }
    },
    cleanSearch: (state, action) => {
      return {
        ...state,
        ...action.payload
      }
    },
  }

});

export const { addLibro, addSearch, cleanSearch } = libroSlice.actions;

export const libroData = (state) => state.libro;

export default libroSlice.reducer;