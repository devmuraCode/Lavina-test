import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "src/app/store/StateSchema";
import { ICreateBook, IUpdateBook } from "../types/bookTypes";
import {
  notificationLoading,
  notificationSuccess,
} from "src/shared/utils/notifications";

export const createBook = createAsyncThunk<
  any,
  ICreateBook,
  ThunkConfig<string>
>("create/book", async (data, thunkApi) => {
  const { extra, dispatch, rejectWithValue } = thunkApi;

  try {
    notificationLoading("Loading");

    const response = await extra.httpPost("/books", data);
    if (!response.data) {
      throw new Error();
    }
    notificationSuccess("Книга добавлено успешно");
    dispatch(getBooks(""));
  } catch (e) {
    return rejectWithValue("error");
  }
});

export const updateBook = createAsyncThunk<
  any,
  IUpdateBook,
  ThunkConfig<string>
>("update/book", async (data, thunkApi) => {
  const { extra, dispatch, rejectWithValue } = thunkApi;
  const { id, ...rest } = data;

  try {
    const response = await extra.httpPut(`/books/${data.id}`, rest);

    if (!response.data) {
      throw new Error();
    }

    dispatch(getBooks(""));
    notificationSuccess("Книга обновлено успешно");
  } catch (e) {
    return rejectWithValue("error");
  }
});

export const getBooks = createAsyncThunk<any, any, ThunkConfig<string>>(
  "books",
  //@ts-ignore
  async (data, thunkApi) => {
    const { extra, rejectWithValue } = thunkApi;

    try {
      const response = await extra.httpGet("/books");

      if (!response.data) {
        throw new Error();
      }

      return response.data;
    } catch (e) {
      return rejectWithValue("error");
    }
  }
);

export const deleteBook = createAsyncThunk<any, any, ThunkConfig<string>>(
  "books",
  async (id, thunkApi) => {
    const { extra, dispatch, rejectWithValue } = thunkApi;

    try {
      const response = await extra.httpDelete(`/books/${id}`);

      if (!response.data) {
        throw new Error();
      }

      notificationSuccess("Книга удалено");

      dispatch(getBooks(""));
    } catch (e) {
      return rejectWithValue("error");
    }
  }
);
