"use client";

import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";
import { useCallback, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { ICategories } from "../../type/categories.type";

import "swiper/css/navigation";
import "swiper/css";

interface CategoriesCarouselProps {
  categories: ICategories[];
}

export const CategoriesCarousel = ({ categories }: CategoriesCarouselProps) => {
  const sliderRef = useRef<SwiperRef | null>(null);

  const handlePrev = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slidePrev();
  }, []);

  const handleNext = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext();
  }, []);

  useEffect(() => {
    if (sliderRef.current) {
      sliderRef.current.swiper.init();
    }
  }, []);
  return (
    <>
      <div className="flex items-center gap-3 w-full justify-end relative -top-12 md:pr-8">
        <button
          onClick={handlePrev}
          className="swiper-button-prev"
          aria-label="Slide left"
        >
          <ChevronLeft size={32} className="scale-[0.8]" />
        </button>

        <button
          onClick={handleNext}
          className="swiper-button-next"
          aria-label="Slide right"
        >
          <ChevronRight size={32} className="scale-[0.8]" />
        </button>
      </div>
      <Swiper
        ref={sliderRef}
        slidesPerView={6}
        breakpoints={{
          0: {
            slidesPerView: 2,
          },
          400: {
            slidesPerView: 3,
          },
          600: {
            slidesPerView: 4,
          },
          1200: {
            slidesPerView: 6,
          },
        }}
      >
        {categories?.map((item) => (
          <SwiperSlide key={item.name}>
            <Link
              href={`/categories/${item.slug}`}
              className="group flex flex-col items-center"
            >
              <div className="max-w-[130px] w-full bg-[#F2F3F8] h-32.5 rounded-full flex items-center justify-center mb-4">
                <Image
                  src={item.url}
                  alt={`${item.name} category`}
                  width={82}
                  height={62}
                />
              </div>

              <div className="flex justify-center">
                <h3 className="inline-block font-medium text-center text-dark bg-gradient-to-r from-main to-main bg-[length:0px_1px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 hover:bg-[length:100%_3px] group-hover:bg-[length:100%_1px] group-hover:text-main">
                  {item.name}
                </h3>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};
