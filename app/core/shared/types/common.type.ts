import { Params } from "next/dist/server/request/params";

export type FormatCurrencyOptions = {
  locale?: string;
  currency?: string;
  minimumFractionDigits?: number;
  maximumFractionDigits?: number;
  amount: number;
};

export interface IQueryParams {
  params: Params;
  // eslint-disable-next-line  @typescript-eslint/no-explicit-any
  searchParams: Promise<any>;
}
