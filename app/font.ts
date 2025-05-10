import { Inter, Montserrat, Roboto } from "next/font/google";

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

export const INTER_CLASS = INTER.className;
export const MONTSERRAT_CLASS = MONTSERRAT.className;
export const ROBOTO_CLASS = ROBOTO.className;
