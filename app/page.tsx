import { Metadata } from "next";
import { HomePage } from "./modules/home/components/pages";

export const metadata: Metadata = {
  title: "Digi Mart | Home",
  description:
    "Discover the latest trends in clothing, electronics, and footwear at Digi Mart! Enjoy fast shipping, great deals, and premium quality. Shop now for the best prices!",
};

export default function Home() {
  return <HomePage />;
}
