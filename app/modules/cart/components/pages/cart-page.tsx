import { CartCard } from "../organisms";
import {
  CustomBreadcrumb,
  Newsletter,
} from "@/app/core/shared/components/molecules";

export const CartPage = () => {
  return (
    <>
      <section>
        <CustomBreadcrumb title="Cart" />
      </section>
      <CartCard />
      <Newsletter />
    </>
  );
};
