import { Inter, Montserrat, Roboto, Sail } from "next/font/google";

const INTER = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const MONTSERRAT = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const ROBOTO = Roboto({
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const SAIL = Sail({
  subsets: ["latin"],
  weight: ["400"],
});

export const INTER_CLASS = INTER.className;
export const MONTSERRAT_CLASS = MONTSERRAT.className;
export const ROBOTO_CLASS = ROBOTO.className;
export const SAIL_CLASS = SAIL.className;
