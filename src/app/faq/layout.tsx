import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Answers to common questions about POP Pilates, class format, pricing, and what to expect at UBC Pilates Club sessions.",
  alternates: {
    canonical: "https://ubcpilatesclub.vercel.app/faq",
  },
  openGraph: {
    title: "FAQ | UBC Pilates Club",
    description:
      "Answers to common questions about POP Pilates, class format, pricing, and what to expect at UBC Pilates Club sessions.",
    url: "https://ubcpilatesclub.vercel.app/faq",
  },
};

export default function FaqLayout({ children }: { children: React.ReactNode }) {
  return children;
}
