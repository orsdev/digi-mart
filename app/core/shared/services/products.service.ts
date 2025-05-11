import axios, { AxiosResponse } from "axios";
import { axiosInstance } from "../lib";
import { IPaginatedProduct, IProduct } from "../types";

export const getNewArrivalProducts = async (): Promise<
  AxiosResponse<IProduct[] | null>
> => {
  try {
    return await axiosInstance.get("/products/new-arrivals");
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

export const getProducts = async (searchParam: {
  [key: string]: string;
}): Promise<AxiosResponse<IPaginatedProduct | null>> => {
  try {
    const params = new URLSearchParams(searchParam);
    const queryString = params.toString();

    return await axiosInstance.get(`/products?${queryString}`);
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
