import { AxiosResponse } from "axios";
import { axiosInstance } from "../lib";
import { IProduct } from "../types";

export const getFeaturedProducts = (): Promise<AxiosResponse<IProduct[]>> =>
  axiosInstance.get("/featured");
