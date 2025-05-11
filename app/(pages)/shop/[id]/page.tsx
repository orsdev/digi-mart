import { CustomBreadcrumb } from "@/app/core/shared/components/molecules";
import { IQueryParams } from "@/app/core/shared/types";
import {
  ShopDetailPage,
  ShopDetailPageSkeleton,
} from "@/app/modules/shop/components/pages";
import { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
  title:
    "Digi Mart | Shop | Digi Mart – Your One-Stop Shop for Fashion, Tech, and More!",
  description:
    "Discover the latest trends in clothing, electronics, and footwear at Digi Mart! Enjoy fast shipping, great deals, and premium quality. Shop now for the best prices!",
};

interface ShopDetailProps {
  params: IQueryParams["params"];
}

export default async function ShopDetail({ params }: ShopDetailProps) {
  const awaitedParams = await params;

  const id = (awaitedParams?.["id"] as string) ?? "-";
  return (
    <>
      <section>
        <CustomBreadcrumb title="Shop" />
      </section>
      <Suspense fallback={<ShopDetailPageSkeleton />}>
        <ShopDetailPage id={id} />
      </Suspense>
    </>
  );
}
