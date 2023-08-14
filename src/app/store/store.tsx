import { ReducersMapObject, configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { userReducer } from 'src/entities/User';

import { StateSchema, ThunkExtraArg } from './StateSchema';
import { $api, httpGet, httpPost, httpDelete } from 'src/shared/api/api';
import { authReducer } from 'src/pages/Register/model/slice/authSlice';
import { bookReducer } from 'src/pages/MainPage/model/slice/bookSlice';

const extraArg: ThunkExtraArg = {
    api: $api,
    httpGet: httpGet,
    httpPut: httpGet,
    httpPost: httpPost,
    httpDelete: httpDelete,
};

export type FetchDataModel<D> = {
    fetching: boolean;
    fulfilled?: boolean;
    data: D;
};

const rootReducers: ReducersMapObject<StateSchema> = {
    auth: authReducer,
    user: userReducer,
    book: bookReducer
};

export const store = configureStore({
    reducer: rootReducers,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        thunk: {
            extraArgument: extraArg,
        },
    }),
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

type DispatchFunc = () => AppDispatch
export const useAppDispatch: DispatchFunc = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector