"use client";

import Image from "next/image";
import { useCartStore } from "@/app/modules/cart/store";
import { ICart } from "@/app/modules/cart/type/cart.type";
import { formatCurrency, getDiscountedPrice } from "../../utils";
import { Trash } from "lucide-react";

interface CartSidebarItemProps {
  cart: ICart;
}

export const CartSidebarItem = ({ cart }: CartSidebarItemProps) => {
  const { removeItemFromCart } = useCartStore((state) => state);

  const handleRemoveFromCart = () => {
    removeItemFromCart(cart);
  };

  const discountedPrice = getDiscountedPrice(
    cart.price,
    cart.discountPercentage,
  );

  return (
    <div className="flex items-center justify-between gap-5">
      <div className="w-full flex items-center gap-6">
        <div className="flex items-center justify-center rounded-[10px] bg-gray-300 max-w-[90px] w-full h-22.5">
          <Image src={cart.thumbnail} alt="product" width={100} height={100} />
        </div>

        <div>
          <h3 className="font-medium">
            <span> {cart.title} </span>
          </h3>
          <p className="text-custom-sm">
            Price: {formatCurrency({ amount: discountedPrice })}
          </p>
        </div>
      </div>

      <button
        onClick={handleRemoveFromCart}
        aria-label="button for remove product from cart"
        className="flex items-center justify-center rounded-lg max-w-[38px] w-full h-9.5 bg-gray-200 border border-gray-300 text-dark ease-out duration-200 hover:bg-red-200 hover:border-red-100 hover:text-red-500 cursor-pointer"
      >
        <Trash size={32} className="scale-[0.6]" />
      </button>
    </div>
  );
};
