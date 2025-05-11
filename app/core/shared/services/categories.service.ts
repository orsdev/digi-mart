import { axiosInstance } from "@/app/core/shared/lib";
import { ICategories } from "@/app/modules/home/type/categories.type";
import axios, { AxiosResponse } from "axios";

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
