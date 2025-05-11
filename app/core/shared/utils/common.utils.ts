import { FormatCurrencyOptions } from "../types";

export const formatCurrency = ({
  amount,
  locale = "en-US",
  currency = "NGN",
  minimumFractionDigits = 0,
  maximumFractionDigits = 2,
}: FormatCurrencyOptions): string => {
  // Default to Intl.NumberFormat for regular formatting
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency,
    minimumFractionDigits,
    maximumFractionDigits,
  }).format(amount);
};
