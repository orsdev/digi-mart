import { axiosInstance } from "@/app/core/shared/lib";
import axios, { AxiosResponse } from "axios";
import { ICategories } from "../type/categories.type";

export const getCategories = async (): Promise<
  AxiosResponse<ICategories[] | null>
> => {
  try {
    return await axiosInstance.get("/categories");
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
