"use client";

import { useSetParams } from "@/app/core/shared/hooks";
import { ICategories } from "@/app/modules/home/type/categories.type";

interface ShopSidebarCategoryItemProps {
  category: ICategories;
}

export const ShopSidebarCategoryItem = ({
  category,
}: ShopSidebarCategoryItemProps) => {
  const { searchParamsObject, toggleArrayParam } = useSetParams();
  const categoryQuery = searchParamsObject?.["category"];

  const isSelected = Array.isArray(categoryQuery)
    ? categoryQuery.includes(category.slug)
    : category.slug === categoryQuery;

  return (
    <button
      className={`${
        isSelected && "text-main"
      } group flex items-center justify-between ease-out duration-200 hover:text-main`}
      onClick={() => {
        toggleArrayParam("category", category.slug);
      }}
    >
      <div className="flex items-center gap-2">
        <div
          className={`cursor-pointer flex items-center justify-center rounded w-4 h-4 border ${
            isSelected ? "border-main bg-main" : "bg-white border-gray-300"
          }`}
        >
          <svg
            className={isSelected ? "block" : "hidden"}
            width="10"
            height="10"
            viewBox="0 0 10 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.33317 2.5L3.74984 7.08333L1.6665 5"
              stroke="white"
              strokeWidth="1.94437"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <span>{category.name}</span>
      </div>
    </button>
  );
};
