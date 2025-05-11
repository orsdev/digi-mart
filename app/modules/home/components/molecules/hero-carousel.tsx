"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import Image from "next/image";
import Link from "next/link";
import { IProduct } from "@/app/core/shared/types";

// Import Swiper styles
import "swiper/css/pagination";
import "swiper/css";

interface HeroCarouselProps {
  products: IProduct[];
}

export const HeroCarousel = ({ products }: HeroCarouselProps) => {
  return (
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 3500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      modules={[Autoplay, Pagination]}
      className="hero-carousel"
    >
      {products?.slice(0, 3)?.map((product) => {
        return (
          <SwiperSlide key={product.id}>
            <div className="flex items-center pt-6 md:pt-0 flex-col-reverse md:flex-row">
              <div className="max-w-[394px] py-10 md:py-15 lg:py-24.5 pl-4 md:pl-7.5 lg:pl-12.5">
                <div className="flex items-center gap-4 mb-7.5 md:mb-10">
                  <span className="block font-semibold text-2xl sm:text-5xl text-main">
                    {product.discountPercentage}%
                  </span>
                  <span className="block text-base sm:text-lg sm:leading-[24px]">
                    Sale
                    <br />
                    Off
                  </span>
                </div>

                <h1 className="font-semibold text-xl md:text-3xl mb-3">
                  <span>{product.title}</span>
                </h1>

                <p className="line-clamp-3">{product.description}</p>

                <Link
                  href={`/products/${product.id}`}
                  className="inline-flex font-medium text-white rounded-md bg-tertiary py-3 px-9 ease-out duration-200 hover:bg-tertiary/80 mt-10"
                >
                  Shop Now
                </Link>
              </div>

              <div>
                <Image
                  src={product.thumbnail}
                  alt={product.title}
                  width={351}
                  priority={false}
                  height={358}
                />
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};
