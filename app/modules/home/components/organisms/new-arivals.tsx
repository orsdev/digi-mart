import { Skeleton } from "@/app/core/shared/components/atoms";
import {
  ProductCard,
  ProductCardSkeleton,
} from "@/app/core/shared/components/molecules";
import { getNewArrivalProducts } from "@/app/core/shared/services";
import { ShoppingBag } from "lucide-react";
import Link from "next/link";

export const NewArrivals = async () => {
  const products = await getNewArrivalProducts();

  if (!products.data) {
    return null;
  }

  const productData = products?.data ?? [];

  return (
    <section className="overflow-hidden pt-15">
      <div className="max-w-[1170px] w-full mx-auto px-4 sm:px-8 xl:px-0">
        <div className="mb-7 flex items-center justify-between">
          <div>
            <span className="flex items-center gap-2.5 font-medium mb-1.5">
              <ShoppingBag size={32} className="scale-[0.7] stroke-main" />
              This Week’s
            </span>
            <h2 className="font-semibold text-lg xl:text-2xl">New Arrivals</h2>
          </div>

          <Link
            href="/shop"
            className="inline-flex font-medium text-sm py-2.5 px-7 rounded-md border-gray-3 border bg-gray-1 text-dark ease-out duration-200 hover:bg-main-light hover:text-white hover:border-transparent"
          >
            View All
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-7.5 gap-y-9">
          {productData.map((item) => (
            <ProductCard key={item.id} product={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export const NewArrivalsSkeleton = async () => {
  return (
    <section className="overflow-hidden pt-15">
      <div className="max-w-[1170px] w-full mx-auto px-4 sm:px-8 xl:px-0">
        <div className="mb-7 flex items-center justify-between">
          <div>
            <span className="flex items-center gap-2.5 font-medium mb-1.5">
              <Skeleton className="w-[40px] h-[20px]" />
              <Skeleton className="w-[90px] h-[30px]" />
            </span>
            <Skeleton className="w-[140px] h-[35px]" />
          </div>
          <Skeleton className="w-[140px] h-[40px]" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-7.5 gap-y-9">
          {[...Array(12)].fill("120").map((item, i) => {
            const key = item + i;
            return <ProductCardSkeleton key={key} />;
          })}
        </div>
      </div>
    </section>
  );
};
