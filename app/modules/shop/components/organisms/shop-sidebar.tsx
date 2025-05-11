import { Skeleton } from "@/app/core/shared/components/atoms";
import { ShopSidebarCategory } from "../molecules/shop-sidebar-category";
import { getCategories } from "@/app/core/shared/services";

export const ShopSidebar = async () => {
  const categories = await getCategories();

  if (!categories.data) {
    return null;
  }

  return <ShopSidebarCategory categories={categories.data} />;
};

export const ShopSidebarSkeleton = () => (
  <div className="flex flex-col gap-6 max-w-[310px] xl:max-w-[270px] w-full">
    <div className="bg-white rounded-lg py-4 px-5">
      <div className="flex items-center justify-between">
        <Skeleton className="w-[50px] h-[20px]" />
        <Skeleton className="w-[50px] h-[20px]" />
      </div>
    </div>

    <div className="bg-white rounded-lg">
      <div className="cursor-pointer flex items-center justify-between py-3 pl-6 pr-5.5">
        <Skeleton className="w-[150px] h-[20px]" />
      </div>
      <div className="flex flex-col gap-2 py-6 pl-6 pr-2">
        {[...Array(9)].fill("cat").map((_, i) => {
          const key = _ + i;

          return <Skeleton key={key} className="w-[80%] h-[30px]" />;
        })}
      </div>
    </div>
  </div>
);
