import { Suspense } from "react";
import { CategoriesSkeleton } from "../atoms";
import {
  HomeCategories,
  HomeHero,
  NewArrivals,
  NewArrivalsSkeleton,
} from "../organisms";
import { HeroSkeleton } from "../atoms";
import { Newsletter } from "@/app/core/shared/components/molecules";

export const HomePage = async () => {
  return (
    <>
      <Suspense fallback={<HeroSkeleton />}>
        <HomeHero />
      </Suspense>
      <Suspense fallback={<CategoriesSkeleton />}>
        <HomeCategories />
      </Suspense>
      <Suspense fallback={<NewArrivalsSkeleton />}>
        <NewArrivals />
      </Suspense>
      <Newsletter />
    </>
  );
};
