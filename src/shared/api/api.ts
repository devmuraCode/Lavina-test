import axios from "axios";
import { createAuthenticationHeaders } from "src/shared/utils/createAuthenticationHeaders";

const baseURL = "https://no23.lavina.tech";

export const $api = axios.create({
  baseURL: baseURL,
  timeout: 4000,
});

export const httpGet = (url: string) => {
  return $api({
    url,
    method: "GET",
    headers: createAuthenticationHeaders("GET", url),
  });
};

export const httpPost = (url: string, body: any) =>
  $api({
    url,
    method: "POST",
    data: body,
    headers: createAuthenticationHeaders("POST", url, JSON.stringify(body)),
  });

export const httpPut = (url: string, body: any) =>
  $api({
    url,
    method: "PUT",
    data: body,
    headers: createAuthenticationHeaders("PUT", url, JSON.stringify(body)),
  });

export const httpDelete = (url: string) =>
  $api({
    url,
    method: "DELETE",
    headers: createAuthenticationHeaders("DELETE", url),
  });
