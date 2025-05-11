import { CustomBreadcrumb } from "@/app/core/shared/components/molecules";
import { ShopSidebar, ShopSidebarSkeleton } from "../organisms";
import {
  ShopProductsGrid,
  ShopProductsGridSkeleton,
} from "../organisms/shop-products-grid";
import { IQueryParams } from "@/app/core/shared/types";
import { Suspense } from "react";

interface ShopPageProps {
  searchParams: IQueryParams["searchParams"];
}

export const ShopPage = ({ searchParams }: ShopPageProps) => {
  return (
    <>
      <section>
        <CustomBreadcrumb title="Explore All Products" />
      </section>
      <section className="overflow-hidden relative pb-20 pt-5 lg:pt-20 xl:pt-28 bg-main-light/5">
        <div className="max-w-[1170px] w-full mx-auto px-4 sm:px-8 xl:px-0">
          <div className="flex gap-7.5">
            <Suspense fallback={<ShopSidebarSkeleton />}>
              <ShopSidebar />
            </Suspense>
            <Suspense fallback={<ShopProductsGridSkeleton />}>
              <ShopProductsGrid searchParams={searchParams} />
            </Suspense>
          </div>
        </div>
      </section>
    </>
  );
};
