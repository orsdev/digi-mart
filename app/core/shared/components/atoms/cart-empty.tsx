import Link from "next/link";
import { useCartStore } from "@/app/modules/cart/store";
import { ShoppingBasket } from "lucide-react";

export const CartEmpty = () => {
  const { toggleCart } = useCartStore();

  return (
    <div className="text-center">
      <div className="mx-auto pb-7.5 flex justify-center">
        <div className="w-[50px] h-[50px] rounded-full flex items-center justify-center bg-gray-200">
          <ShoppingBasket size={32} className="stroke-main/70" />
        </div>
      </div>

      <p className="pb-6">Your cart is empty!</p>

      <Link
        onClick={() => toggleCart()}
        href="/shop"
        className="w-full lg:w-10/12 mx-auto flex justify-center font-medium text-white bg-main py-[13px] px-6 rounded-md ease-out duration-200 hover:bg-main-light"
      >
        Continue Shopping
      </Link>
    </div>
  );
};
