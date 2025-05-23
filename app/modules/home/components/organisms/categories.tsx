import { Tags } from "lucide-react";
import { CategoriesCarousel } from "../molecules";
import { Skeleton } from "@/app/core/shared/components/atoms";
import { getCategories } from "@/app/core/shared/services";

export const HomeCategories = async () => {
  const categories = await getCategories();

  if (!categories.data) {
    return null;
  }

  return (
    <section className="overflow-hidden pt-17.5">
      <div className="max-w-[1170px] w-full mx-auto px-4 sm:px-8 xl:px-0 pb-15 border-b border-gray-3">
        <div>
          <div className="mb-10 flex items-center justify-between">
            <div>
              <span className="flex items-center gap-2.5 font-medium mb-1">
                <Tags size={32} className="scale-[0.8] stroke-main" />
                Categories
              </span>
              <h2 className="font-semibold text-lg xl:text-2xl">
                Browse by Category
              </h2>
            </div>
          </div>
          <CategoriesCarousel categories={categories?.data ?? []} />
        </div>
      </div>
    </section>
  );
};

export const CategoriesSkeleton = () => {
  return (
    <section className="overflow-hidden pt-17.5 common-carousel">
      <div className="max-w-[1170px] w-full mx-auto px-4 sm:px-8 xl:px-0 pb-15 border-b border-gray-3">
        <div className="flex items-center gap-3 w-full justify-end relative -top-12 md:pr-8">
          <Skeleton className="w-8 h-8" />
          <Skeleton className="w-8 h-8" />
        </div>
        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 items-center overflow-hidden h-[140px]">
          {[...Array(6)].fill("20").map((_, i) => {
            const key = _ + i;
            return (
              <div className="group flex flex-col items-center" key={key}>
                <div className="max-w-[130px] w-full bg-[#F2F3F8] h-32.5 rounded-full flex items-center justify-center mb-4">
                  <Skeleton className="w-[82px] h-[62px] rounded-full" />
                </div>

                <div className="flex justify-center">
                  <Skeleton className="h-6" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
