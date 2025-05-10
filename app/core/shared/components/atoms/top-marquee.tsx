"use client";

import Marquee from "react-fast-marquee";

const MARQUEE_DATA = [
  {
    id: 11,
    title: "Free Shipping on all orders over $99",
  },
  {
    id: 22,
    title: "20% off on your first order",
  },
  {
    id: 33,
    title: "Free Shipping on all orders over $99",
  },
  {
    id: 44,
    title: "20% off on your first order",
  },
];

export const TopMarquee = () => {
  return (
    <div className="bg-tertiary px-5 flex items-center justify-between h-8">
      <Marquee pauseOnHover>
        {MARQUEE_DATA.map((item) => (
          <div key={item.id} className="text-white mx-14">
            {item.title}
          </div>
        ))}
      </Marquee>
    </div>
  );
};
