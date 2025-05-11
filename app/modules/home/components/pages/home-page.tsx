import { Suspense } from "react";
import { HeroSkeleton, HomeHero } from "../molecules";
import { HomeCategories } from "../molecules";
import { CategoriesSkeleton } from "../molecules/categories-skeleton";

export const HomePage = async () => {
  return (
    <>
      <Suspense fallback={<HeroSkeleton />}>
        <HomeHero />
      </Suspense>
      <Suspense fallback={<CategoriesSkeleton />}>
        <HomeCategories />
      </Suspense>
    </>
  );
};
