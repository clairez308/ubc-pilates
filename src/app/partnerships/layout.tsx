import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Partnerships",
  description:
    "UBC Pilates Club partners with local Vancouver businesses to bring exclusive perks and discounts to our members.",
  alternates: {
    canonical: "https://ubcpilatesclub.vercel.app/partnerships",
  },
  openGraph: {
    title: "Partnerships | UBC Pilates Club",
    description:
      "UBC Pilates Club partners with local Vancouver businesses to bring exclusive perks and discounts to our members.",
    url: "https://ubcpilatesclub.vercel.app/partnerships",
  },
};

export default function PartnershipsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
