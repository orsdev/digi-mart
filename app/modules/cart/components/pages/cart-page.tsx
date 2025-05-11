import { Breadcrumb } from "@/app/core/shared/components/atoms";
import { CartCard } from "../organisms";

export const CartPage = () => {
  return (
    <>
      <section>
        <Breadcrumb title="Cart" pages={["Cart"]} />
      </section>
      <CartCard />
    </>
  );
};
