import { getFeaturedProducts } from "@/app/core/shared/services";
import { HeroCarousel, HeroProductCard } from "../molecules";
import { Skeleton } from "@/app/core/shared/components/atoms";

export const HomeHero = async () => {
  const featuredProducts = await getFeaturedProducts();

  if (!featuredProducts.data) {
    return null;
  }

  const products = featuredProducts.data;

  return (
    <section className="overflow-hidden pb-10 lg:pb-12.5 xl:pb-15 pt-57.5 md:pt-45 lg:pt-30 xl:pt-51.5 bg-main-light/10">
      <div className="max-w-[1170px] w-full mx-auto px-4 md:px-8 xl:px-0">
        <div className="flex flex-wrap gap-5">
          <div className="xl:max-w-[757px] w-full">
            <div className="relative z-1 rounded-[10px] bg-white overflow-hidden">
              <HeroCarousel products={products} />
            </div>
          </div>

          <div className="xl:max-w-[393px] w-full">
            <div className="flex flex-col md:flex-row xl:flex-col gap-5">
              {products
                ?.slice(3)
                ?.map((product) => (
                  <HeroProductCard
                    key={product.id}
                    id={product.id}
                    image={product.thumbnail}
                    title={product.title}
                    price={product.price || 0}
                    discountPercentage={product.discountPercentage || 0}
                  />
                ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export function HeroSkeleton() {
  return (
    <section className="overflow-hidden pb-10 lg:pb-12.5 xl:pb-15 pt-57.5 md:pt-45 lg:pt-30 xl:pt-51.5 bg-main-light/10">
      <div className="max-w-[1170px] w-full mx-auto px-4 md:px-8 xl:px-0">
        <div className="flex flex-wrap gap-5">
          <div className="xl:max-w-[757px] w-full">
            <div className="relative z-1 rounded-[10px] bg-white overflow-hidden">
              <div className="flex items-center pt-6 md:pt-0 flex-col-reverse md:flex-row gap-4">
                <div className="max-w-[394px] py-10 md:py-15 lg:py-24.5 pl-4 md:pl-7.5 lg:pl-12.5">
                  <div className="flex items-center gap-4 mb-7.5 md:mb-10">
                    <Skeleton className="h-12 w-20 rounded-md" />
                    <div className="space-y-2">
                      <Skeleton className="h-4 w-16" />
                      <Skeleton className="h-4 w-10" />
                    </div>
                  </div>

                  <Skeleton className="h-8 w-64 mb-3" />
                  <div className="space-y-2">
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-4/5" />
                    <Skeleton className="h-4 w-3/4" />
                  </div>

                  <Skeleton className="h-12 w-32 mt-10 rounded-md" />
                </div>

                <div>
                  <Skeleton className="w-[351px] h-[358px]" />
                </div>
              </div>
            </div>
          </div>

          {/* Side Products Skeleton */}
          <div className="xl:max-w-[393px] w-full">
            <div className="flex flex-col md:flex-row xl:flex-col gap-5">
              {[...Array(2)].map((_, i) => (
                <div
                  key={i}
                  className="w-full relative rounded-[10px] bg-white p-7.5"
                >
                  <div className="flex flex-col md:flex-row items-center gap-4">
                    <div>
                      <Skeleton className="h-6 w-40 mb-5 md:mb-20" />
                      <div>
                        <Skeleton className="h-4 w-32 mb-1.5" />
                        <div className="flex items-center gap-3">
                          <Skeleton className="h-5 w-16" />
                          <Skeleton className="h-4 w-12" />
                        </div>
                      </div>
                    </div>

                    <div>
                      <Skeleton className="w-[160px] h-[161px]" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
