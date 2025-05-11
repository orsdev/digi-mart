import { Suspense } from "react";
import { CategoriesSkeleton } from "../atoms";
import { HomeCategories, HomeHero } from "../organisms";
import { HeroSkeleton } from "../atoms";

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
