import Image from "next/image";
import { useCartStore } from "../../store";
import { ICart } from "../../type/cart.type";
import { formatCurrency, getDiscountedPrice } from "@/app/core/shared/utils";
import { Minus, Plus, Trash } from "lucide-react";

interface CartCardItemProps {
  cart: ICart;
}

export const CartCardItem = ({ cart }: CartCardItemProps) => {
  const { reduceItemQty, increaseItemQty, removeItemFromCart } = useCartStore();

  const handleRemoveFromCart = () => {
    removeItemFromCart(cart);
  };

  const handleIncreaseQuantity = () => {
    increaseItemQty(cart);
  };

  const handleDecreaseQuantity = () => {
    reduceItemQty(cart);
  };

  const discountedPrice = getDiscountedPrice(
    cart.price,
    cart.discountPercentage,
  );

  return (
    <div className="flex items-center border-t border-gray-3 py-5 px-7.5">
      <div className="min-w-[400px]">
        <div className="flex items-center justify-between gap-5">
          <div className="w-full flex items-center gap-5.5">
            <div className="flex items-center justify-center rounded-[5px] bg-gray-200 max-w-[80px] w-full h-17.5">
              <Image
                width={200}
                height={200}
                src={cart.thumbnail}
                alt="product"
              />
            </div>

            <div>
              <h3 className="ease-out duration-200 hover:text-main">
                {cart.title}
              </h3>
            </div>
          </div>
        </div>
      </div>

      <div className="min-w-[180px]">
        <p className="text-dark">
          {formatCurrency({ amount: discountedPrice })}
        </p>
      </div>

      <div className="min-w-[275px]">
        <div className="w-max flex items-center rounded-md border border-gray-3">
          <button
            onClick={() => handleDecreaseQuantity()}
            aria-label="button for remove product"
            className="flex items-center justify-center w-11.5 h-11.5 ease-out duration-200 hover:text-main"
          >
            <Minus size={32} className="scale-[0.6]" />
          </button>

          <span className="flex items-center justify-center w-16 h-11.5 border-x border-gray-400">
            {cart.quantity}
          </span>

          <button
            onClick={() => handleIncreaseQuantity()}
            aria-label="button for add product"
            className="flex items-center justify-center w-11.5 h-11.5 ease-out duration-200 hover:text-main"
          >
            <Plus size={32} className="scale-[0.6]" />
          </button>
        </div>
      </div>

      <div className="min-w-[200px]">
        <p>{formatCurrency({ amount: discountedPrice * cart.quantity })}</p>
      </div>

      <div className="min-w-[50px] flex justify-end">
        <button
          onClick={() => handleRemoveFromCart()}
          aria-label="button for remove product from cart"
          className="flex items-center justify-center rounded-lg max-w-[38px] w-full h-9.5 bg-gray-200 border border-gray-300 ease-out duration-200 hover:bg-red-100 hover:border-red-400 hover:text-red-500"
        >
          <Trash size={32} className="scale-[0.6]" />
        </button>
      </div>
    </div>
  );
};
