import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'src/app/store/StateSchema';

import { userActions } from 'src/entities/User';
import { SignUpSchema } from 'src/pages/Register/model/types/loginSchema';
import { USER_LOCALSTORAGE_KEY } from 'src/shared/const/localStoage';



export const signUp = createAsyncThunk<
    SignUpSchema,
    SignUpSchema,
    ThunkConfig<string>
>(
    'login/register',
    async (authData, thunkApi) => {
        const { extra, dispatch, rejectWithValue } = thunkApi;

        try {
            const response = await extra.httpPost('/signup', authData);

            if (!response.data) {
                throw new Error();
            }

            localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(response.data.data));

            dispatch(userActions.setAuthData(response.data));

            return response.data;
        } catch (e) {
            return rejectWithValue('error');
        }
    },
);
