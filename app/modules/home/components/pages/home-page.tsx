import { Suspense } from "react";
import {
  CategoriesSkeleton,
  HeroSkeleton,
  HomeCategories,
  HomeHero,
  NewArrivals,
  NewArrivalsSkeleton,
} from "../organisms";
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
