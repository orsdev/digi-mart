import { IQueryParams } from "@/app/core/shared/types";
import { ShopPage } from "@/app/modules/shop/components/pages";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Digi Mart | Shop | Digi Mart – Your One-Stop Shop for Fashion, Tech, and More!",
  description:
    "Discover the latest trends in clothing, electronics, and footwear at Digi Mart! Enjoy fast shipping, great deals, and premium quality. Shop now for the best prices!",
};

interface ShopProps {
  searchParams: IQueryParams["searchParams"];
}

export default async function Shop({ searchParams }: ShopProps) {
  const awaitedSearchParams = await searchParams;
  return <ShopPage searchParams={awaitedSearchParams} />;
}
