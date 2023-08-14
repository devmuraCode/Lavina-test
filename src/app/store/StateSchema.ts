import { AxiosInstance } from "axios";
import { NavigateOptions, To } from "react-router-dom";
import { IBook } from "src/pages/MainPage/model/types/bookTypes";

export type FetchDataModel<D> = {
  isLoading: boolean;
  loggedIn: boolean;
  error: any;
  data: {
    data: D;
    isOk: boolean;
    message: string;
  };
};

export interface StateSchema {
  auth: any;
  user: any;
  book: FetchDataModel<IBook[]>;
}

export interface ThunkExtraArg {
  api: AxiosInstance;
  httpGet: (url: string) => Promise<any>;
  httpPost: (url: string, body: any) => Promise<any>;
  httpPut: (url: string, body: any) => Promise<any>;
  httpDelete: (url: string) => Promise<any>;
  navigate?: (to: To, options?: NavigateOptions) => void;
}

export interface ThunkConfig<T> {
  rejectValue: T;
  extra: ThunkExtraArg;
  
}
