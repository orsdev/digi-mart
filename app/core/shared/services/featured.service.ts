import axios, { AxiosResponse } from "axios";
import { axiosInstance } from "../lib";
import { IProduct } from "../types";

export const getFeaturedProducts = async (): Promise<
  AxiosResponse<IProduct[]>
> => {
  try {
    return await axiosInstance.get("/featured");
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw {
        data: [] as IProduct[],
        status: error.response?.status || 500,
        error: error.message,
      };
    }
    throw error;
  }
};
