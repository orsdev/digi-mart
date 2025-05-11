"use client";

import {
  ProductCard,
  ProductCardSkeleton,
} from "@/app/core/shared/components/molecules";
import Pagination from "@/app/core/shared/components/molecules/pagination";
import { useSetParams } from "@/app/core/shared/hooks";
import { getProducts } from "@/app/core/shared/services";
import { IPagination, IProduct } from "@/app/core/shared/types";
import { useEffect, useRef, useState } from "react";

interface ShopProductListingProps {
  serverProducts: IProduct[];
  serverPagination: IPagination;
}

export const ShopProductListing = ({
  serverProducts,
  serverPagination,
}: ShopProductListingProps) => {
  const { searchParamsObject, setParam } = useSetParams();
  const initialServerProductsRef = useRef<IProduct[] | undefined>(
    serverProducts,
  );
  const [availableProducts, setAvailableProducts] = useState<IProduct[]>(
    serverProducts ?? [],
  );
  const [pagination, setPagination] = useState<IPagination>(
    serverPagination ?? {},
  );
  const [isLoadingProducts, setIsLoadingProducts] = useState(false);

  const currentPage = (searchParamsObject?.["page"] as string) ?? "1";

  useEffect(() => {
    if (!initialServerProductsRef.current) {
      const fetchProducts = async () => {
        setIsLoadingProducts(true);
        try {
          const result = await getProducts(searchParamsObject as never);

          const productData = result?.data;
          const products = productData?.products ?? [];
          const productPagination = productData?.pagination ?? {
            current_page: 0,
            page_count: 0,
            per_page: 0,
            total_count: 0,
          };
          setAvailableProducts([...products]);
          setPagination({ ...productPagination });
        } catch (error) {
          console.log(error);
        } finally {
          setIsLoadingProducts(false);
        }
      };

      fetchProducts();
    } else {
      initialServerProductsRef.current = undefined;
    }
  }, [searchParamsObject]);

  const handlePageClick = (value: { selected: number }) => {
    const { selected } = value;
    if (selected >= 0) {
      setParam("page", `${selected + 1}`);
      window.scrollTo({
        top: 150,
      });
    }
  };

  const pageCount = pagination?.page_count ?? 0;

  return (
    <>
      {!isLoadingProducts && (
        <>
          {availableProducts?.map((product) => {
            return <ProductCard key={product.title} product={product} />;
          })}
        </>
      )}
      {isLoadingProducts && (
        <>
          {[...Array(9)].fill("70").map((_, i) => {
            const key = _ + i;

            return <ProductCardSkeleton key={key} />;
          })}
        </>
      )}

      {!!pageCount && (
        <div className="col-span-full">
          <Pagination
            handlePageClick={handlePageClick}
            page={parseInt(currentPage)}
            pageCount={pageCount}
          />
        </div>
      )}
    </>
  );
};
