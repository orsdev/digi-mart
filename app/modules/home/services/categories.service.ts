import { axiosInstance } from "@/app/core/shared/lib";
import axios, { AxiosResponse } from "axios";
import { ICategories } from "../type/categories.type";

export const getCategories = async (): Promise<
  AxiosResponse<ICategories[]>
> => {
  try {
    return await axiosInstance.get("/categories");
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw {
        data: null,
        status: error.response?.status || 500,
        error: error.message,
      };
    }
    throw error;
  }
};
