import { Tags } from "lucide-react";
import { CategoriesCarousel } from "../molecules";
import { getCategories } from "../../services";

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
              <h2 className="font-semibold text-lg xl:text-xl text-dark">
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
