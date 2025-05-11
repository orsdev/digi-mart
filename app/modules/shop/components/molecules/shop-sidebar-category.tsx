"use client";

import { ShopSidebarCategoryItem } from "../atoms";
import { useSetParams } from "@/app/core/shared/hooks";
import useOnClickOutside from "@/app/core/shared/hooks/use-on-click-outside";
import { cn } from "@/app/core/shared/utils";
import { ICategories } from "@/app/modules/home/type/categories.type";
import { ArrowLeftRight } from "lucide-react";
import { useRef, useState } from "react";

interface ShopSidebarCategoryProps {
  categories: ICategories[];
}

export const ShopSidebarCategory = ({
  categories,
}: ShopSidebarCategoryProps) => {
  const { clearAllSearchParams } = useSetParams();
  const [openSidebar, setOpenSidebar] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useOnClickOutside(containerRef, () => {
    setOpenSidebar(false);
  });

  const handleToggleSidebar = () => {
    setOpenSidebar((prev) => !prev);
  };

  return (
    <aside
      ref={containerRef}
      className={`block fixed xl:z-1 z-9999 left-0 top-0 xl:translate-x-0 xl:static max-w-[310px] xl:max-w-[270px] w-full ease-out duration-200 ${
        openSidebar
          ? "translate-x-0 bg-white p-5 h-screen overflow-y-auto"
          : "-translate-x-full"
      }`}
    >
      <button
        onClick={handleToggleSidebar}
        aria-label="button for product sidebar toggle"
        className={
          "xl:hidden absolute -right-12.5 sm:-right-8 flex items-center justify-center w-8 h-8 rounded-md bg-white shadow-sm top-[25vh]"
        }
      >
        <ArrowLeftRight size={32} className="scale-[0.6] stroke-main" />
      </button>

      <div className="flex flex-col gap-6">
        {/* Filter box */}
        <div className="bg-white rounded-lg py-4 px-5">
          <div className="flex items-center justify-between">
            <p>Filters:</p>
            <button
              className="text-main hover:text-main-light"
              onClick={clearAllSearchParams}
            >
              Clear All
            </button>
          </div>
        </div>

        <div
          className={cn("bg-white rounded-lg", {
            "shadow-sm": !openSidebar,
          })}
        >
          <div className="cursor-pointer flex items-center justify-between py-3 pl-6 pr-5.5">
            <p className="text-dark">Category</p>
          </div>
          <div className="flex flex-col gap-2 py-6 pl-6 pr-2">
            {categories?.map((category) => (
              <ShopSidebarCategoryItem
                key={category.slug}
                category={category}
              />
            ))}
          </div>
        </div>
      </div>
    </aside>
  );
};
