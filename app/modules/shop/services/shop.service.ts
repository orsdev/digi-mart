import { axiosInstance } from "@/app/core/shared/lib";
import { IProduct } from "@/app/core/shared/types";
import axios, { AxiosResponse } from "axios";

export const getSingleProduct = async (
  id: string,
): Promise<AxiosResponse<IProduct | null>> => {
  try {
    return await axiosInstance.get(`/products/${id}`);
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
