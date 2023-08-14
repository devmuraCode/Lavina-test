import { createAsyncThunk } from '@reduxjs/toolkit';

import { ThunkConfig } from 'src/app/store/StateSchema';



export const getUser = createAsyncThunk<
    any, any,
    ThunkConfig<string>
>(
    'login',
    async (_, thunkApi) => {
        try {
            const { extra } = thunkApi;

            const response = await extra.httpGet('/myself')

            return response.data

        } catch (e) {
            console.log('error')
        }
    },
);
