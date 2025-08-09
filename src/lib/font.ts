import { Inter, Sen, Urbanist } from "next/font/google";
import localFont from "next/font/local";

export const InterFont = Inter({ subsets: ["latin"] });

export const SenFont = Sen({ subsets: ["latin"] });
export const UrbanistFont = Urbanist({ subsets: ["latin"] });

export const AquireFont = localFont({
  src: [
    {
      path: "../font/AquireLight.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../font/Aquire.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../font/AquireBold.otf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-aquire",
});
