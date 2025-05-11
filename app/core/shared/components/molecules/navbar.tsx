"use client";
import React, { useState, useEffect } from "react";
import { AlignLeft, Heart, Phone, ShoppingBasket, User } from "lucide-react";
import Link from "next/link";
import { cn, formatCurrency } from "../../utils";
import { SAIL_CLASS } from "@/app/font";
import { NAV_MENU_DATA } from "../../constants";
import { useCartStore } from "@/app/modules/cart/store";
import { ShoppingCart } from "@/app/modules/cart/utils";

export const Navbar = () => {
  const [navigationOpen, setNavigationOpen] = useState(false);
  const [stickyMenu, setStickyMenu] = useState(false);
  const { cartItems, toggleCart } = useCartStore((state) => state);

  const totalPrice = ShoppingCart.calculateTotal(cartItems);
  const totalCartItems = cartItems?.length ?? 0;

  // Sticky menu
  const handleStickyMenu = () => {
    if (window.scrollY >= 80) {
      setStickyMenu(true);
    } else {
      setStickyMenu(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleStickyMenu);
  });

  return (
    <nav
      className={`fixed left-0 top-8 w-full z-9999 bg-white transition-all ease-in-out duration-300 ${
        stickyMenu && "shadow top-[0px]"
      }`}
    >
      <div className="max-w-[1170px] mx-auto px-4 sm:px-7.5 xl:px-0">
        <div
          className={`flex flex-col lg:flex-row gap-5 items-end lg:items-center xl:justify-between ease-out duration-200 ${
            stickyMenu ? "py-3" : "py-4"
          }`}
        >
          <div className="xl:w-auto flex-col sm:flex-row w-full flex sm:justify-between sm:items-center gap-5 sm:gap-10">
            <Link className="flex-shrink-0" href="/">
              <span className={cn(SAIL_CLASS, "text-4xl text-main")}>
                Digi Mart
              </span>
            </Link>
          </div>

          <div className="flex w-full lg:w-auto items-center gap-7.5">
            <div className="hidden xl:flex items-center gap-3.5">
              <Phone size={32} className="scale-[0.8] stroke-main" />
              <div>
                <span className="block text-xs uppercase">24/7 SUPPORT</span>
                <p className="font-medium text-sm text-dark">
                  <a href="tel:+234144436943">(+234) 1444-3694-3</a>
                </p>
              </div>
            </div>

            <span className="hidden xl:block w-px h-7.5 bg-gray-4"></span>

            <div className="flex w-full lg:w-auto justify-between items-center gap-5">
              <div className="flex items-center gap-5">
                <Link href="/" className="flex items-center gap-2.5">
                  <User size={32} className="scale-[0.8] stroke-main" />
                  <div>
                    <span className="block text-xs uppercase">account</span>
                    <p className="font-medium text-sm">Sign In</p>
                  </div>
                </Link>

                <button
                  onClick={toggleCart}
                  className="flex items-center gap-2.5 cursor-pointer"
                >
                  <span className="inline-block relative">
                    <ShoppingBasket
                      size={32}
                      className="scale-[0.8] stroke-main"
                    />
                    <span className="flex items-center justify-center font-medium text-xs absolute -right-2 -top-2.5 bg-main w-4.5 h-4.5 rounded-full text-white">
                      {totalCartItems}
                    </span>
                  </span>

                  <div>
                    <span className="block text-xs uppercase">cart</span>
                    <p className="font-medium text-sm">
                      {formatCurrency({
                        amount: totalPrice,
                      })}
                    </p>
                  </div>
                </button>
              </div>

              <button
                id="Toggle"
                aria-label="Toggler"
                className="xl:hidden block cursor-pointer"
                onClick={() => setNavigationOpen(!navigationOpen)}
              >
                <AlignLeft size={32} className="scale-[0.9] stroke-main" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-3">
        <div className="max-w-[1170px] mx-auto px-4 sm:px-7.5 xl:px-0">
          <div className="flex items-center justify-between">
            <div
              className={`w-[288px] absolute right-4 top-full xl:static xl:w-auto h-0 xl:h-auto invisible xl:visible xl:flex items-center justify-between ${
                navigationOpen &&
                `!visible bg-white shadow-lg border border-gray-3 !h-auto max-h-[400px] overflow-y-scroll rounded-md p-5`
              }`}
            >
              <nav>
                <ul className="flex xl:items-center flex-col xl:flex-row gap-5 xl:gap-6">
                  {NAV_MENU_DATA.map((menuItem, i) => (
                    <li
                      key={i}
                      className="group relative before:w-0 before:h-[3px] before:bg-main before:absolute before:left-0 before:top-0 before:rounded-b-[3px] before:ease-out before:duration-200 hover:before:w-full "
                    >
                      <Link
                        href={menuItem.path}
                        className={`hover:text-main-light text-sm font-medium flex ${
                          stickyMenu ? "xl:py-4" : "xl:py-6"
                        }`}
                      >
                        {menuItem.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
            <div className="hidden xl:block">
              <ul className="flex items-center gap-5.5">
                <li className="py-4">
                  <Link
                    href="/wishlist"
                    className="flex items-center gap-1.5 font-medium text-custom-sm text-dark hover:text-blue"
                  >
                    <Heart size={32} className="scale-[0.7] stroke-main" />
                    Wishlist
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
