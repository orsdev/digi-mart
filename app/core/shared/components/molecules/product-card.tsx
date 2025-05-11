"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { IProduct } from "../../types";
import { useCartStore } from "@/app/modules/cart/store";
import { Skeleton, StarRating } from "../atoms";
import { formatCurrency, getDiscountedPrice } from "../../utils";
import toast from "react-hot-toast";

interface ProductCardProps {
  product: IProduct;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  const { addItemToCart } = useCartStore((state) => state);

  const handleAddToCart = () => {
    addItemToCart(product);
    toast.success("Product added to cart");
  };

  const discountedPrice = getDiscountedPrice(
    product.price,
    product.discountPercentage,
  );
  const image = product.images?.[0];

  return (
    <div className="group relative">
      <div className="relative overflow-hidden flex items-center justify-center rounded-lg bg-[#F6F7FB] shadow-sm min-h-[270px] mb-4">
        <Image
          src={image}
          alt={product.brand ?? product?.title}
          width={250}
          height={250}
          priority={false}
        />

        <div className="absolute left-0 bottom-0 sm:translate-y-full w-full flex items-center justify-center gap-2.5 pb-5 ease-linear duration-200 sm:group-hover:translate-y-0">
          <button
            onClick={() => handleAddToCart()}
            className="inline-flex font-medium text-sm py-[7px] px-5 rounded-[5px] bg-main text-white ease-out duration-200 hover:bg-main-light"
          >
            Add to cart
          </button>
        </div>
      </div>

      <div className="flex flex-col gap-2 mb-2">
        <div className="flex items-center justify-start gap-1">
          <div className="max-w-[150px]">
            <StarRating value={product.rating} />
          </div>
          <p className="text-sm">({Math.floor(product.rating)})</p>
        </div>

        <h3 className="font-medium ease-out duration-200 hover:text-main hover:underline">
          <Link href={`/shop/${product.id}`}> {product.title} </Link>
        </h3>
        <span className="flex items-center gap-2 font-medium">
          <span className="text-md">
            {formatCurrency({ amount: discountedPrice })}
          </span>
          <span className="text-sm line-through">
            {formatCurrency({ amount: product.price })}
          </span>
        </span>
      </div>
    </div>
  );
};

export const ProductCardSkeleton = () => {
  return (
    <div className="group">
      <div className="relative overflow-hidden flex items-center justify-center rounded-lg bg-[#F6F7FB] min-h-[270px] mb-4">
        <Skeleton className="w-[250px] h-[250px]" />
      </div>

      <div className="flex flex-col gap-2 mb-2">
        <div className="flex items-center justify-start gap-1">
          <div className="max-w-[150px]">
            <Skeleton className="w-[170px] h-[30px]" />
          </div>
        </div>

        <Skeleton className="w-[250px]" />
        <span className="flex flex-col gap-2">
          <Skeleton className="w-[170px] h-[20px]" />
          <Skeleton className="w-[190px] h-[30px]" />
        </span>
      </div>
    </div>
  );
};
