import { Suspense } from "react";
import { HeroSkeleton, HomeHero } from "../molecules";

export const HomePage = async () => {
  return (
    <>
      <Suspense fallback={<HeroSkeleton />}>
        <HomeHero />
      </Suspense>
    </>
  );
};
