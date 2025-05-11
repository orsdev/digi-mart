import { getProducts } from "@/app/core/shared/services";
import { IQueryParams } from "@/app/core/shared/types";
import { ShopProductListing } from "../molecules";
import { ProductCardSkeleton } from "@/app/core/shared/components/molecules";

interface ShopProductsGridProps {
  searchParams: IQueryParams["searchParams"];
}

export const ShopProductsGrid = async ({
  searchParams,
}: ShopProductsGridProps) => {
  const products = await getProducts(await searchParams);

  if (!products.data) {
    return null;
  }

  const { products: allProducts, pagination } = products.data ?? {};

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-6">
      <ShopProductListing
        serverPagination={pagination}
        serverProducts={allProducts}
      />
    </div>
  );
};

export const ShopProductsGridSkeleton = () => (
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-6">
    {[...Array(12)].fill("prod-ske").map((_, i) => {
      const key = _ + i;

      return <ProductCardSkeleton key={key} />;
    })}
  </div>
);
