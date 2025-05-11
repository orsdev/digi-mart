"use client";

import { useCartStore } from "@/app/modules/cart/store";
import { ShoppingCart } from "@/app/modules/cart/utils";
import { CircleX } from "lucide-react";
import Link from "next/link";
import { useEffect } from "react";
import { cn, formatCurrency } from "../../utils";
import { CartEmpty, CartSidebarItem } from "../atoms";

export const CartSidebar = () => {
  const { isCartOpen, cartItems, toggleCart } = useCartStore((state) => state);

  const totalPrice = ShoppingCart.calculateTotal(cartItems);
  const isCartEmpty = cartItems?.length <= 0;

  useEffect(() => {
    function handleClickOutside(event: MouseEvent): void {
      if (!(event.target as Element).closest(".modal-content")) {
        toggleCart();
      }
    }
    if (isCartOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isCartOpen, toggleCart]);

  return (
    <div
      className={`fixed top-0 left-0 z-99999 overflow-y-auto no-scrollbar w-full h-screen bg-foreground/70 ease-linear duration-300 ${
        isCartOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="flex items-center justify-end">
        <div className="w-full max-w-[500px] shadow-1 bg-white px-4 sm:px-7.5 lg:px-11 relative modal-content">
          <div className="sticky top-0 bg-white flex items-center justify-between pb-7 pt-4 sm:pt-7.5 lg:pt-11 border-b border-gray-3 mb-7.5">
            <h2 className="font-medium text-dark text-lg sm:text-2xl">
              Cart View
            </h2>
            <button
              onClick={() => toggleCart()}
              aria-label="button for close modal"
              className="flex items-center justify-center ease-in duration-150  text-main hover:text-main-light cursor-pointer"
            >
              <CircleX size={32} className="scale-[0.8] stroke-main" />
            </button>
          </div>

          <div className="h-[66vh] overflow-y-auto no-scrollbar pr-5">
            <div className="flex flex-col gap-6">
              {/* <!-- cart item --> */}
              {cartItems.length > 0 ? (
                cartItems.map((item) => {
                  const key = item.category + item.id;
                  return <CartSidebarItem key={key} cart={item} />;
                })
              ) : (
                <CartEmpty />
              )}
            </div>
          </div>

          <div className="border-t border-gray-3 bg-white pt-5 pb-4 sm:pb-7.5 lg:pb-11 mt-7.5 sticky bottom-0">
            <div
              className={cn("flex items-center justify-between gap-5 mb-6", {
                "mb-0": isCartEmpty,
              })}
            >
              <p className="font-medium text-xl text-dark">Subtotal:</p>

              <p className="font-medium text-xl text-dark">
                {formatCurrency({ amount: totalPrice })}
              </p>
            </div>

            <div
              className={cn("flex items-center gap-4", {
                hidden: isCartEmpty,
              })}
            >
              <Link
                onClick={toggleCart}
                href={isCartEmpty ? "/" : "/cart"}
                className={cn(
                  "w-full flex justify-center font-medium text-white bg-main py-[13px] px-6 rounded-md ease-out duration-200 hover:bg-main/70",
                  {
                    "bg-gray-400 hover:bg-gray-400 pointer-none cursor-not-allowed":
                      isCartEmpty,
                  },
                )}
              >
                View Cart
              </Link>

              <Link
                href={isCartEmpty ? "/" : "/checkout"}
                className={cn(
                  "w-full flex justify-center font-medium text-white bg-tertiary py-[13px] px-6 rounded-md ease-out duration-200 hover:bg-tertiary/70",
                  {
                    "bg-tertiary/70 hover:bg-tertiary/70 pointer-none cursor-not-allowed":
                      isCartEmpty,
                  },
                )}
              >
                Checkout
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
