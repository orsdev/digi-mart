import { Newsletter } from "@/app/core/shared/components/molecules";
import { ShopDetailContent, ShopDetailImage } from "../organisms";
import { getSingleProduct } from "../../services";
import { redirect } from "next/navigation";
import { Skeleton } from "@/app/core/shared/components/atoms";

interface ShopDetailPageProps {
  id: string;
}

export const ShopDetailPage = async ({ id }: ShopDetailPageProps) => {
  const product = await getSingleProduct(id);

  if (!product.data) {
    return redirect("/400");
  }

  return (
    <>
      <section className="overflow-hidden relative pb-20 pt-5 lg:pt-20 xl:pt-28 bg-main-light/5">
        <div className="max-w-[1170px] w-full mx-auto px-4 sm:px-8 xl:px-0">
          <div className="flex flex-col lg:flex-row gap-7.5 xl:gap-17.5">
            <ShopDetailImage product={product?.data} />
            <ShopDetailContent product={product?.data} />
          </div>
        </div>
      </section>

      <Newsletter />
    </>
  );
};

export const ShopDetailPageSkeleton = () => (
  <section className="overflow-hidden relative pb-20 pt-5 lg:pt-20 xl:pt-28 bg-main-light/500">
    <div className="max-w-[1170px] w-full mx-auto px-4 sm:px-8 xl:px-0">
      <div className="flex flex-col lg:flex-row gap-7.5 xl:gap-17.5">
        {/* Image */}
        <div className="lg:max-w-[570px] w-full">
          <div className="lg:min-h-[512px] rounded-lg shadow-sm p-4 sm:px-7.5 relative flex items-center justify-center">
            <div>
              <Skeleton
                aria-label="button for zoom"
                className="w-11 h-11 rounded-[5px] bg-gray-1 shadow-1 flex items-center justify-center ease-out duration-200  hover:text-blue absolute top-4 lg:top-6 right-4 lg:right-6 z-50"
              />

              <Skeleton className="h-[400px] w-[400px]" />
            </div>
          </div>

          {/* Thumbnails */}
          <div className="flex flex-wrap sm:flex-nowrap gap-4.5 mt-2">
            {[...Array(4)].map((_, i) => (
              <Skeleton
                key={i}
                className="flex items-center justify-center   overflow-hidden rounded-lg h-[50px] w-[50px]"
              />
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="max-w-[539px] w-full">
          <div className="flex  mb-3 flex-col gap-5">
            <Skeleton className="h-[30px] w-[120px]" />
            <Skeleton className="h-[20px] w-full" />
            <Skeleton className="h-[20px] w-full" />
            <Skeleton className="h-[20px] w-full" />
          </div>

          <Skeleton className="h-[20px] w-1/2" />
          <div className="flex gap-3 items-center">
            <Skeleton className="h-[40px] w-[150px] mt-3" />
            <Skeleton className="h-[40px] w-[150px] mt-3" />
          </div>
        </div>
      </div>
    </div>
  </section>
);
