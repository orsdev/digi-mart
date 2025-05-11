import { SAIL_CLASS } from "@/app/font";
import Image from "next/image";

export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="overflow-hidden">
      <div className="py-5 xl:py-7.5 bg-tertiary/10">
        <div className="max-w-[1170px] mx-auto px-4 sm:px-8 xl:px-0">
          <div className="flex gap-5 flex-wrap items-center justify-between">
            <p className="font-medium">
              &copy; {year}. All rights reserved by{" "}
              <span className={SAIL_CLASS}>Digi Mart</span>.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <p className="font-medium">We Accept:</p>

              <div className="flex flex-wrap items-center gap-6">
                <a href="#" aria-label="payment system with visa card">
                  <Image
                    src="/images/payment/payment-01.svg"
                    alt="visa card"
                    width={66}
                    height={22}
                  />
                </a>
                <a href="#" aria-label="payment system with paypal">
                  <Image
                    src="/images/payment/payment-02.svg"
                    alt="paypal"
                    width={18}
                    height={21}
                  />
                </a>
                <a href="#" aria-label="payment system with master card">
                  <Image
                    src="/images/payment/payment-03.svg"
                    alt="master card"
                    width={33}
                    height={24}
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- footer bottom end --> */}
    </footer>
  );
};
