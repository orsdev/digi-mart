import axios, { AxiosResponse } from "axios";
import { axiosInstance } from "../lib";
import { IProduct } from "../types";

export const getFeaturedProducts = async (): Promise<
  AxiosResponse<IProduct[] | null>
> => {
  try {
    return await axiosInstance.get("/featured");
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return {
        data: null,
        status: error.response?.status || 500,
        statusText: error.response?.statusText || "Internal Server Error",
        headers: error.response?.headers || {},
        config: error.config || ({} as never),
      };
    }
    return {
      data: null,
      status: 500,
      statusText: "Something went wrong",
      headers: {},
      config: {} as never,
    };
  }
};
