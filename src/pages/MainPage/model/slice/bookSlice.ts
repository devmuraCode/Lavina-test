import { createSlice } from "@reduxjs/toolkit";
import {
  createBook,
  getBooks,
} from "src/pages/MainPage/model/services/bookService";
import { updateBook } from "../services/bookService";

const initialState: any = {
  isLoading: false,
  loggedIn: false,
  error: null,
  data: null,
};

export const bookSlice = createSlice({
  name: "book",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getBooks.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      })

      .addCase(createBook.pending, (state) => {
        state.isLoading = true;
      })

      .addCase(createBook.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(updateBook.pending, (state, action) => {
        state.isLoading = true;
        state.error = action.payload;
      })
      .addCase(updateBook.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(updateBook.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      });
  },
});
export const { actions: bookActions } = bookSlice;
export const { reducer: bookReducer } = bookSlice;
