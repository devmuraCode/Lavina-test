import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User } from '../types/user';
import { USER_LOCALSTORAGE_KEY } from 'src/shared/const/localStoage';
import { getUser } from 'src/entities/User/model/services/getUser';

const initialState: any = {
    isLoading: false,
    loggedIn: false,
    error: null,
    authData: null
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setAuthData: (state, action: PayloadAction<User>) => {
            state.authData = action.payload;
        },
        initAuthData: (state) => {
            const user = localStorage.getItem(USER_LOCALSTORAGE_KEY);
            if (user) {
                state.authData = JSON.parse(user);
            }
        },
        logout: (state) => {
            state.authData = undefined;
            localStorage.removeItem(USER_LOCALSTORAGE_KEY);
        },
    },

    extraReducers: (builder) => {
        builder
            .addCase(getUser.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(getUser.fulfilled, (state, action) => {
                state.isLoading = false;
                state.user = action.payload
            })
            .addCase(getUser.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const { actions: userActions } = userSlice;
export const { reducer: userReducer } = userSlice;
