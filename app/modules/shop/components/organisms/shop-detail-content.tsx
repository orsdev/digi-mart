"use client";

import { StarRating } from "@/app/core/shared/components/atoms";
import { IProduct } from "@/app/core/shared/types";
import { formatCurrency, getDiscountedPrice } from "@/app/core/shared/utils";
import { useCartStore } from "@/app/modules/cart/store";
import Link from "next/link";
import toast from "react-hot-toast";

interface ShopDetailContentProps {
  product: IProduct;
}

export const ShopDetailContent = ({ product }: ShopDetailContentProps) => {
  const { addItemToCart } = useCartStore();
  const discountedPrice = getDiscountedPrice(
    product.price,
    product.discountPercentage,
  );

  const handleAddToCart = () => {
    addItemToCart(product);
    toast.success("Product added to cart");
  };

  return (
    <div className="max-w-[539px] w-full">
      <div className="flex items-center justify-between mb-3">
        <h2 className="font-semibold text-xl sm:text-2xl xl:text-4xl">
          {product.title}
        </h2>

        <div className="inline-flex font-medium text-sm text-white bg-main rounded py-0.5 px-2.5">
          {product.discountPercentage}% OFF
        </div>
      </div>
      <p className="line-clamp-3 my-3">{product.description}</p>

      <div className="flex flex-wrap items-center gap-5.5 mb-4.5">
        <div className="flex items-center gap-2.5">
          <div className="max-w-[150px]">
            <StarRating value={product.rating} />
          </div>
          <span> {product?.reviews?.length} (customer reviews) </span>
        </div>
      </div>

      <h3 className="font-medium text-xl mb-4.5 flex gap-2 items-center">
        <span className="text-sm sm:text-base">
          Price: {formatCurrency({ amount: discountedPrice })}
        </span>
        <span className="line-through text-sm">
          {formatCurrency({ amount: product.price })}
        </span>
      </h3>
      <div className="my-6">
        <p className="flex gap-2 items-center">
          Availability :
          <span className="text-sm">
            {product.stock > 0 ? "In Stock" : "Out of Stock"}
          </span>
        </p>
      </div>

      <div className="flex gap-3 items-center">
        <button
          className="inline-flex font-medium text-white bg-main py-3 px-7 rounded-md ease-out duration-200 hover:bg-main-light"
          onClick={handleAddToCart}
        >
          Add to cart
        </button>

        <Link
          href="/cart"
          className="inline-flex font-medium text-white bg-tertiary py-3 px-7 rounded-md ease-out duration-200 hover:bg-tertiary/60"
        >
          View in cart
        </Link>
      </div>
    </div>
  );
};
