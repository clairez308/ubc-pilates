import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Prices",
  description:
    "Affordable POP Pilates class pricing and membership plans at UBC Pilates Club. Pay in-person or through Bounce.",
  alternates: {
    canonical: "https://ubcpilatesclub.vercel.app/prices",
  },
  openGraph: {
    title: "Prices | UBC Pilates Club",
    description:
      "Affordable POP Pilates class pricing and membership plans at UBC Pilates Club. Pay in-person or through Bounce.",
    url: "https://ubcpilatesclub.vercel.app/prices",
  },
};

export default function PricesLayout({ children }: { children: React.ReactNode }) {
  return children;
}
