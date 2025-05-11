"use client";

import { PreviewImageModal } from "@/app/core/shared/components/molecules";
import { IProduct } from "@/app/core/shared/types";
import { Scan } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

interface IShopDetailImage {
  product: IProduct;
}

export const ShopDetailImage = ({ product }: IShopDetailImage) => {
  const [showPreviewModal, setShowPreviewModal] = useState(false);
  const [previewImage, setPreviewImage] = useState(0);

  const handlePreviewImage = (index: number) => {
    setPreviewImage(index);
  };

  const handleTogglePreviewSlider = () => {
    setShowPreviewModal((prev) => !prev);
  };

  const images = product?.images ?? [];
  const thumbnail = images?.[previewImage];

  return (
    <>
      <PreviewImageModal
        isOpen={showPreviewModal}
        images={images}
        handleClose={handleTogglePreviewSlider}
      />
      <div className="lg:max-w-[570px] w-full">
        <div className="lg:min-h-[512px] rounded-lg shadow-sm bg-gray-200 p-4 sm:p-7.5 relative flex items-center justify-center">
          <div>
            <button
              onClick={handleTogglePreviewSlider}
              aria-label="button for zoom"
              className="gallery__Image w-11 h-11 rounded-[5px] bg-gray-1 shadow-1 flex items-center justify-center ease-out duration-200 text-dark hover:text-blue absolute top-4 lg:top-6 right-4 lg:right-6 z-50"
            >
              <Scan size={32} className="scale-[0.8] stroke-main" />
            </button>

            <Image
              src={thumbnail}
              alt="products-details"
              width={400}
              height={400}
            />
          </div>
        </div>

        {/* Thumbnails */}
        <div className="flex flex-wrap sm:flex-nowrap gap-4.5 mt-6">
          {images.map((item, key) => (
            <button
              onClick={() => handlePreviewImage(key)}
              key={key}
              className={`flex items-center justify-center w-15 sm:w-25 h-15 sm:h-25 overflow-hidden rounded-lg bg-gray-200 shadow-1 ease-out duration-200 border-2 hover:border-main ${
                key === previewImage ? "border-main" : "border-transparent"
              }`}
            >
              <Image width={50} height={50} src={item} alt="thumbnail" />
            </button>
          ))}
        </div>
      </div>
    </>
  );
};
