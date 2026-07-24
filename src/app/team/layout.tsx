import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Team",
  description:
    "Meet the executive team and instructors behind UBC Pilates Club's student-run POP Pilates classes.",
  alternates: {
    canonical: "https://ubcpilatesclub.vercel.app/team",
  },
  openGraph: {
    title: "Our Team | UBC Pilates Club",
    description:
      "Meet the executive team and instructors behind UBC Pilates Club's student-run POP Pilates classes.",
    url: "https://ubcpilatesclub.vercel.app/team",
  },
};

export default function TeamLayout({ children }: { children: React.ReactNode }) {
  return children;
}
