import {
  cn,
  formatCurrency,
  getDiscountedPrice,
} from "@/app/core/shared/utils";
import { useCartStore } from "../../store";
import { ShoppingCart } from "../../utils";

export const CartSummary = () => {
  const { cartItems } = useCartStore();
  const hasCartItems = cartItems?.length > 0;

  const totalPrice = ShoppingCart.calculateTotal(cartItems);
  return (
    <div className="lg:max-w-[455px] w-full">
      <div className="bg-white shadow-1 rounded-[10px]">
        <div className="border-b border-gray-3 py-5 px-4 sm:px-8.5">
          <h3 className="font-medium text-xl">Summary</h3>
        </div>

        <div className="pt-2.5 pb-8.5 px-4 sm:px-8.5">
          <div className="flex items-center justify-between py-5 border-b border-gray-3">
            <div>
              <h4 className="font-medium text-dark">Product</h4>
            </div>
            <div>
              <h4 className="font-medium text-right">Subtotal</h4>
            </div>
          </div>

          {/* <!-- product item --> */}
          {cartItems.map((cart, index) => {
            const key = cart.sku + index;
            const discountedPrice = getDiscountedPrice(
              cart.price,
              cart.discountPercentage,
            );

            return (
              <div
                key={key}
                className="flex items-center justify-between py-5 border-b border-gray-300"
              >
                <div>
                  <p className="text-dark">{cart.title}</p>
                </div>
                <div>
                  <p className="text-dark text-right">
                    {formatCurrency({
                      amount: discountedPrice * cart.quantity,
                    })}
                  </p>
                </div>
              </div>
            );
          })}

          {/* <!-- total --> */}
          <div className="flex items-center justify-between pt-5">
            <div>
              <p className="font-medium text-lg">Total</p>
            </div>
            <div>
              <p className="font-medium text-lg text-right">
                {formatCurrency({ amount: totalPrice })}
              </p>
            </div>
          </div>

          {/* <!-- checkout button --> */}
          <button
            type="button"
            className={cn(
              "w-full flex justify-center font-medium text-white bg-main py-3 px-6 rounded-md ease-out duration-200 hover:bg-main-light mt-7.5",
              {
                "bg-main/50 hover:bg-main/50 cursor-not-allowed": !hasCartItems,
              },
            )}
            disabled={!hasCartItems}
          >
            Process to Checkout
          </button>
        </div>
      </div>
    </div>
  );
};
