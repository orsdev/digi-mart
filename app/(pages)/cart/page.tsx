import { CartPage } from "@/app/modules/cart/components/pages";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Digi Mart | Cart | Digi Mart – Your One-Stop Shop for Fashion, Tech, and More!",
  description:
    "Discover the latest trends in clothing, electronics, and footwear at Digi Mart! Enjoy fast shipping, great deals, and premium quality. Shop now for the best prices!",
};

export default function Cart() {
  return <CartPage />;
}
