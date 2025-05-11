import { HeroCarousel, HeroProductCard } from "../atoms";
import { getFeaturedProducts } from "@/app/core/shared/services";

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
