export type FormatCurrencyOptions = {
  locale?: string;
  currency?: string;
  minimumFractionDigits?: number;
  maximumFractionDigits?: number;
  amount: number;
};

export interface IQueryParams {
  // eslint-disable-next-line  @typescript-eslint/no-explicit-any
  params: Promise<any>;
  // eslint-disable-next-line  @typescript-eslint/no-explicit-any
  searchParams: Promise<any>;
}
