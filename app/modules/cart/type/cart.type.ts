import { IProduct } from "@/app/core/shared/types";

export interface ICart extends IProduct {
  quantity: number;
}
