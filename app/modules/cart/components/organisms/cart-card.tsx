"use client";

import {
  CartEmpty,
  ScrollArea,
  ScrollBar,
} from "@/app/core/shared/components/atoms";
import { useCartStore } from "../../store";
import { CartCardItem, CartSummary } from "../molecules";

export const CartCard = () => {
  const { cartItems } = useCartStore();

  const hasCartItems = cartItems?.length > 0;

  return (
    <section className="overflow-hidden py-20 bg-main-light/5 min-h-[500px]">
      <div className="max-w-[1170px] w-full mx-auto px-4 sm:px-8 xl:px-0">
        <div className="flex flex-wrap items-center justify-between gap-5 mb-7.5">
          <h2 className="font-medium text-2xl">Your Cart</h2>
        </div>

        <div className="bg-white rounded-[10px] shadow-1">
          <div className="w-full overflow-x-auto">
            <ScrollArea className="w-[1170px] whitespace-nowrap rounded-md border">
              {/* <!-- table header --> */}
              <div className="flex items-center py-5.5 px-7.5">
                <div className="min-w-[400px]">
                  <p className="text-dark">Product</p>
                </div>

                <div className="min-w-[180px]">
                  <p className="text-dark">Price</p>
                </div>

                <div className="min-w-[275px]">
                  <p className="text-dark">Quantity</p>
                </div>

                <div className="min-w-[200px]">
                  <p className="text-dark">Subtotal</p>
                </div>

                <div className="min-w-[50px]">
                  <p className="text-dark text-right">Action</p>
                </div>
              </div>

              {/* <!-- Cart item --> */}
              {hasCartItems &&
                cartItems.map((cart, index) => {
                  const key = cart.sku + index;
                  return <CartCardItem key={key} cart={cart} />;
                })}

              {!hasCartItems && (
                <div className="my-4">
                  <CartEmpty />
                </div>
              )}
              <ScrollBar orientation="horizontal" />
            </ScrollArea>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row justify-end gap-7.5 xl:gap-11 mt-9">
          <CartSummary />
        </div>
      </div>
    </section>
  );
};
