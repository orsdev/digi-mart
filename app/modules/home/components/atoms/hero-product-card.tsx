import { formatCurrency, getDiscountedPrice } from "@/app/core/shared/utils";
import Image from "next/image";
import Link from "next/link";

interface HeroProductCardProps {
  id: number;
  image: string;
  title: string;
  price: number;
  discountPercentage: number;
}

export const HeroProductCard = ({
  title,
  image,
  price,
  id,
  discountPercentage,
}: HeroProductCardProps) => {
  const discountedPrice = getDiscountedPrice(price, discountPercentage);
  return (
    <div className="w-full relative rounded-[10px] bg-white p-7.5">
      <div className="flex flex-col md:flex-row items-center gap-14">
        <div>
          <h2 className="md:max-w-[153px] font-semibold text-lg mb-5 md:mb-20">
            <span> {title} </span>
          </h2>

          <div>
            <p className="font-medium text-sm mb-1.5 text-main">
              limited time offer
            </p>
            <span className="flex items-center gap-3">
              <span className="font-medium text-base text-red">
                {formatCurrency({ amount: discountedPrice })}
              </span>
              <span className="font-medium text-sm text-dark-4 line-through">
                {formatCurrency({ amount: price })}
              </span>
            </span>
          </div>
        </div>

        <div>
          <Image src={image} alt={title} width={223} height={161} />
        </div>
      </div>
      <Link href={`/products/${id}`} className="absolute inset-0" />
    </div>
  );
};
