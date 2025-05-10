import { AxiosRequestConfig } from "axios";
import { axiosInstance } from "./axios-instance.lib";

export const fetcher = async <T>(options: AxiosRequestConfig): Promise<T> => {
  const res = await axiosInstance({
    ...options,
  });
  return res.data;
};
