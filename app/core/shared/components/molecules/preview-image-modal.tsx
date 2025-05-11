"use client";
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";
import { useCallback, useRef } from "react";
import "swiper/css/navigation";
import "swiper/css";
import Image from "next/image";
import { MoveLeft, MoveRight, X } from "lucide-react";

interface PreviewImageModalProps {
  handleClose(): void;
  images: string[];
  isOpen: boolean;
}

export const PreviewImageModal = ({
  handleClose,
  isOpen,
  images,
}: PreviewImageModalProps) => {
  const sliderRef = useRef<SwiperRef | null>(null);

  const handlePrev = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slidePrev();
  }, []);

  const handleNext = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext();
  }, []);

  return (
    <div
      className={`preview-slider w-full h-screen  z-999999 inset-0 flex justify-center items-center bg-[#000000F2] bg-opacity-70 ${
        isOpen ? "fixed" : "hidden"
      }`}
    >
      <button
        onClick={() => handleClose()}
        aria-label="button for close modal"
        className="absolute top-0 right-0 sm:top-6 sm:right-6 flex items-center justify-center w-10 h-10 rounded-full ease-in duration-150 text-white hover:text-meta-5 z-10"
      >
        <X size={32} className="scale-[0.8]" />
      </button>

      <div>
        <button
          className="absolute left-100 p-5 cursor-pointer z-10 "
          onClick={handlePrev}
        >
          <MoveLeft size={32} className="scale-[0.8] text-white" />
        </button>

        <button
          className="absolute right-100 p-5 cursor-pointer z-10"
          onClick={handleNext}
        >
          <MoveRight size={32} className="scale-[0.8] text-white" />
        </button>
      </div>

      <Swiper ref={sliderRef} slidesPerView={1} spaceBetween={20}>
        {images?.map((img, index) => {
          const key = img + index;
          return (
            <SwiperSlide key={key}>
              <div className="flex justify-center items-center">
                <Image
                  src={img}
                  alt="product image"
                  placeholder="blur"
                  blurDataURL="/images/img-loader.svg"
                  width={450}
                  height={450}
                  quality={50}
                />
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};
