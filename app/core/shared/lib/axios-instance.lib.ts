import axios from "axios";
import { environment } from "../utils";

export const axiosInstance = axios.create({
  baseURL: environment.baseUrl,
  timeout: 10000, // 10 seconds
});
